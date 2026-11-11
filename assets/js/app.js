const categories = {
  all: 'All work', analog: 'Analog IC', digital: 'Digital design',
  verification: 'Verification', pcb: 'PCB design', embedded: 'Embedded', power: 'Power', signal: 'Signals & studies'
};
const symbols = { pcb: '▧', analog: '∿', digital: '▦', verification: '⌁', embedded: '⊞', power: '↯', signal: '≋' };
let activeFilter = 'all';
let libraryScroll = 0;
let lastRoute = '';
let toastTimer;
const grid = document.querySelector('#project-grid');
const search = document.querySelector('#project-search');
const sort = document.querySelector('#project-sort');
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

// A conceptual flow, deliberately distinct from a simulation plot or circuit schematic.
function diagram(project, compact = false) {
  const nodes = project.flow;
  return `<div class="flow-art ${project.category} ${compact ? 'compact' : ''}" aria-label="Conceptual flow: ${escapeHtml(nodes.join(' to '))}">
    <div class="art-grid" aria-hidden="true"></div>
    <div class="diagram-top"><span>${escapeHtml(project.label)}</span><span aria-hidden="true">${symbols[project.category]}</span></div>
    <div class="flow-nodes">${nodes.map((node,index) => `<div class="flow-node"><small>0${index+1}</small><span>${escapeHtml(node)}</span></div>${index < nodes.length-1 ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ''}`).join('')}</div>
    <span class="diagram-caption">${compact ? 'DESIGN OVERVIEW' : 'Conceptual flow · simplified for this portfolio'}</span>
  </div>`;
}

function makeCard(project, index) {
  const card = document.createElement('article');
  card.className = `project-card category-${project.category}`;
  card.innerHTML = `<a class="card-link" href="#project/${project.id}" aria-label="Read case study: ${escapeHtml(project.title)}">
    ${project.images?.length ? `<div class="card-visual"><img src="${project.images[0].src}" alt="${escapeHtml(project.images[0].alt)}" width="${project.images[0].width}" height="${project.images[0].height}" loading="lazy"><span class="visual-label">${escapeHtml(project.label)}</span><span class="visual-count">${project.images.length} figure${project.images.length > 1 ? 's' : ''} ↗</span></div>` : diagram(project,true)}
    <div class="card-body"><div class="card-meta"><span>${escapeHtml(project.term)}</span><span>${project.detailedPdf ? '3-page PDF' : escapeHtml(project.kind)}</span></div>
    <h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p>
    ${project.results.length ? `<dl class="card-metrics">${project.results.slice(0,2).map(([label,value])=>`<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>` : ''}
    <div class="card-tags">${project.tags.slice(0,3).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    <div class="card-bottom"><span>Read case study</span><span aria-hidden="true">↗</span></div></div></a>`;
  return card;
}

function gallery(project) {
  if (!project.images?.length) return diagram(project);
  return `<section class="project-gallery" aria-label="Project images"><div class="gallery-heading"><p class="eyebrow">INSIDE THE DESIGN</p><span>Select a figure to enlarge ↗</span></div><div class="gallery-grid">${project.images.map((figure,index)=>`<figure class="gallery-item"><button class="figure-button" type="button" data-figure="${index}" aria-label="Enlarge: ${escapeHtml(figure.title)}"><img src="${figure.src}" alt="${escapeHtml(figure.alt)}" width="${figure.width}" height="${figure.height}" loading="${index ? 'lazy' : 'eager'}"><span aria-hidden="true">↗</span></button><figcaption><span class="figure-number">0${index+1}</span><div><strong>${escapeHtml(figure.title)}</strong><p>${escapeHtml(figure.caption)}</p></div></figcaption></figure>`).join('')}</div></section>`;
}

const imageViewer = document.querySelector('#image-viewer');
let imageTrigger;
function openFigure(project,index,trigger) {
  const figure=project.images[index];
  imageTrigger=trigger;
  imageViewer.querySelector('img').src=figure.src;
  imageViewer.querySelector('img').alt=figure.alt;
  imageViewer.querySelector('h2').textContent=figure.title;
  imageViewer.querySelector('p').textContent=figure.caption;
  imageViewer.querySelector('a').href=figure.src;
  imageViewer.showModal();
  document.body.classList.add('viewer-open');
}
imageViewer.querySelector('button').addEventListener('click',()=>imageViewer.close());
imageViewer.addEventListener('click',event=>{if(event.target===imageViewer) imageViewer.close();});
imageViewer.addEventListener('close',()=>{document.body.classList.remove('viewer-open');imageTrigger?.focus({preventScroll:true});});

function renderProjects() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = projects.filter(project => {
    const haystack = [project.title,project.label,project.summary,project.course,project.term,...project.tags].join(' ').toLocaleLowerCase();
    return (activeFilter === 'all' || project.category === activeFilter) && (!query || haystack.includes(query));
  });
  if (sort.value === 'az') visible.sort((a,b) => a.title.localeCompare(b.title));
  if (sort.value === 'semester3') visible.sort((a,b) => Number(b.term === 'Fall 2026') - Number(a.term === 'Fall 2026'));
  grid.replaceChildren(...visible.map(makeCard));
  document.querySelector('#project-count').textContent = `${visible.length} of ${projects.length} projects${activeFilter === 'all' ? '' : ` · ${categories[activeFilter]}`}${query ? ` · “${search.value.trim()}”` : ''}`;
  document.querySelector('#no-projects').hidden = visible.length !== 0;
  document.querySelector('#clear-filters').hidden = activeFilter === 'all' && !query && sort.value === 'featured';
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter)));
}

function resetLibrary() {
  activeFilter = 'all'; search.value = ''; sort.value = 'featured'; renderProjects(); search.focus();
}

function renderCaseStudy(project) {
  const casePage = document.querySelector('#case-study');
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter(p => p.id !== project.id && p.category === project.category).slice(0,2);
  casePage.innerHTML = `<div class="case-tools"><a href="#projects" class="back-link">← Project library</a><button type="button" class="text-button" id="copy-project">Copy project link ↗</button></div>
    <div class="case-hero"><p class="eyebrow accent">${escapeHtml(project.label)} <span aria-hidden="true">/</span> ${escapeHtml(project.term)}</p>
    <h2 id="case-title" tabindex="-1">${escapeHtml(project.title)}</h2><p class="case-lead">${escapeHtml(project.outcome || project.summary)}</p>
    <div class="case-meta"><span>${escapeHtml(project.course)}</span><span>${escapeHtml(project.kind)}</span></div></div>
    ${project.detailedPdf ? `<section class="case-pdf" aria-label="Detailed project PDF"><div><p class="eyebrow accent">DETAILED CASE STUDY · 3 PAGES</p><h3>The design, in detail.</h3><p>Problem, contribution, implementation, and evidence in one document.</p></div><div class="case-pdf-actions"><a class="button primary" href="${escapeHtml(project.detailedPdf)}" target="_blank" rel="noopener noreferrer">View project PDF ↗</a><a class="text-link" href="${escapeHtml(project.detailedPdf)}" download>Download PDF ↓</a></div></section>` : ''}
    ${project.repository ? `<div class="repository-action"><a class="text-link" href="${escapeHtml(project.repository)}" target="_blank" rel="noopener noreferrer">Explore project repository ↗</a><span>Files and documentation on GitHub</span></div>` : ''}
    ${gallery(project)}
    ${project.results.length ? `<dl class="result-grid">${project.results.map(([label,value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>` : ''}
    <div class="case-layout"><aside class="case-index" aria-label="Case study sections"><span class="eyebrow">PROJECT STORY</span><button data-section="case-overview">01 / Situation & task</button><button data-section="case-approach">02 / Actions</button><button data-section="case-results">03 / Results</button><button data-section="case-reflection">04 / Scope & context</button>${project.file ? '<button data-section="case-evidence">05 / Project brief</button>' : ''}</aside>
    <div class="case-narrative">
    <section id="case-overview" class="story-section"><p class="section-number">01 / SITUATION & TASK</p><h3>${escapeHtml(project.question)}</h3><p class="situation-copy">${escapeHtml(project.situation)}</p><div class="task-callout"><span class="eyebrow accent">THE TASK</span><p>${escapeHtml(project.task)}</p></div><div class="contribution"><h4>My contribution</h4><p>${escapeHtml(project.role)}</p></div></section>
    <section id="case-approach" class="story-section"><p class="section-number">02 / ACTIONS</p><h3>From the task to implementation.</h3><ol class="approach-list">${project.approach.map(item => `<li><p>${escapeHtml(item)}</p></li>`).join('')}</ol></section>
    <section id="case-results" class="story-section"><p class="section-number">03 / RESULTS</p><h3>What the work demonstrated.</h3><p>${escapeHtml(project.validation)}</p></section>
    <section id="case-reflection" class="story-section"><p class="section-number">04 / SCOPE & CONTEXT</p><h3>The result, in context.</h3><p>${escapeHtml(project.tradeoff)}</p><h4 class="skills-heading">Tools & concepts</h4><div class="toolkit">${project.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div></section>
    ${project.file ? `<section id="case-evidence" class="story-section evidence"><p class="section-number">05 / PROJECT BRIEF</p><h3>A closer look at the evidence.</h3><p>The one-page brief brings the design, figures, and source references together.</p><a href="${project.file}.pdf" class="button primary" download>Download illustrated brief ↓ <span>PDF</span></a><details><summary>Preview the complete brief <span aria-hidden="true">＋</span></summary><img class="brief-image" src="${project.file}.webp" alt="${escapeHtml(project.title)} illustrated project brief" loading="lazy" width="980" height="1268"></details></section>` : ''}
    <div class="source-note"><span class="eyebrow">SOURCE MATERIAL</span><p>${escapeHtml(project.source)}</p></div>
    </div></div>
    ${related.length ? `<section class="related-section"><div class="section-heading"><div><p class="eyebrow">KEEP EXPLORING</p><h3>Related work.</h3></div></div><div class="selected-grid" id="related-projects"></div></section>` : ''}
    <div class="case-footer"><a href="#projects">← All projects</a><a href="#project/${next.id}"><span>Next project</span><strong>${escapeHtml(next.title)} ↗</strong></a></div>`;
  if (related.length) document.querySelector('#related-projects').replaceChildren(...related.map(makeCard));
  casePage.querySelectorAll('[data-figure]').forEach(button=>button.addEventListener('click',()=>openFigure(project,Number(button.dataset.figure),button)));
  casePage.querySelectorAll('[data-section]').forEach(button => button.addEventListener('click',()=>{
    const section = document.getElementById(button.dataset.section);
    section.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',block:'start'});
  }));
  document.querySelector('#copy-project').addEventListener('click', async () => {
    try {
      if (location.protocol === 'file:') throw new Error('Local file');
      await navigator.clipboard.writeText(location.href);
      showToast('Project link copied.');
    } catch { showToast('Copy this page’s address from your browser to share the project.'); }
  });
}

function showToast(message) {
  const toast=document.querySelector('#toast');
  clearTimeout(toastTimer); toast.textContent=message; toast.hidden=false;
  toastTimer=setTimeout(()=>{toast.hidden=true;},4500);
}

function showPage() {
  if(imageViewer.open) imageViewer.close();
  const requested = location.hash.slice(1) || 'about';
  const project = requested.startsWith('project/') ? projects.find(p=>p.id === requested.slice(8)) : null;
  let page=project ? 'case-study' : ['about','projects','background','resumes','contact'].includes(requested) ? requested : 'projects';
  if (lastRoute === 'projects') libraryScroll=window.scrollY;
  if(project) renderCaseStudy(project);
  document.querySelectorAll('.page').forEach(section=>{ section.hidden = section.id !== page; });
  document.querySelectorAll('nav a').forEach(link=>{
    if(link.hash === `#${project ? 'projects' : page}`) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  document.title=`${project ? project.title : page[0].toUpperCase()+page.slice(1)} · Ruthvik Reddy`;
  const returningToLibrary=page === 'projects' && lastRoute.startsWith('project/');
  if(lastRoute) {
    const heading=document.querySelector(`#${page} h2`);
    heading?.setAttribute('tabindex','-1'); heading?.focus({preventScroll:true});
    window.scrollTo({top:returningToLibrary ? libraryScroll : 0,behavior:'instant'});
  }
  lastRoute=requested;
}

Object.entries(categories).forEach(([key,label])=>{
  const count=key === 'all' ? projects.length : projects.filter(p=>p.category === key).length;
  const button=document.createElement('button');
  button.type='button'; button.dataset.filter=key;
  button.innerHTML=`${escapeHtml(label)} <span>${count}</span>`;
  button.setAttribute('aria-pressed',String(key === 'all'));
  button.addEventListener('click',()=>{activeFilter=key;renderProjects();});
  document.querySelector('#project-filters').append(button);
});
search.addEventListener('input',renderProjects);
sort.addEventListener('change',renderProjects);
document.querySelector('#clear-filters').addEventListener('click',resetLibrary);
document.querySelector('#reset-search').addEventListener('click',resetLibrary);
window.addEventListener('hashchange',showPage);
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  const main = document.querySelector('#main');
  main.setAttribute('tabindex', '-1');
  main.focus({preventScroll: true});
  main.scrollIntoView({block: 'start'});
});
document.querySelector('#selected-projects').replaceChildren(...projects.slice(0,2).map(makeCard));

document.querySelector('#resume-list').innerHTML=resumes.map(resume=>`<article class="resume-card"><div class="resume-mark" aria-hidden="true">CV<span>PDF</span></div><div><p class="eyebrow accent">${escapeHtml(resume.focus)}</p><h3>${escapeHtml(resume.title)}</h3><p>${escapeHtml(resume.description)}</p><div class="card-tags">${resume.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="resume-actions"><a class="button primary" href="${escapeHtml(resume.file)}" download>Download resume ↓</a><a class="text-link" href="${escapeHtml(resume.file)}" target="_blank" rel="noopener noreferrer">View PDF ↗</a></div></div></article>`).join('');
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#total-projects').textContent=projects.length;
renderProjects();showPage();
