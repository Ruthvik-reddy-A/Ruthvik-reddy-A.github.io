# Repository-first portfolio

The shareable entry point is [this GitHub repository](https://github.com/Ruthvik-reddy-A/Ruthvik-reddy-A.github.io). The README introduces the work; PROJECT-INDEX.md links all 19 three-page case studies. Project-*.pdf files and the complete ZIP can be read or downloaded directly. Netlify setup was stopped at the owner’s request; the configuration file is unused.

## PDF organization

- `Project-01` through `Project-04`: analog IC design.
- Remaining case studies: digital/physical design, verification, embedded systems, power, and signal studies, grouped in PROJECT-INDEX.md.
- `Ruthvik-Reddy-Project-Case-Studies.zip`: all 19 detailed PDFs.
- Existing `01-LDO.pdf` through `05-VeriChip.pdf`: earlier short briefs, retained separately.

Update both the individual PDF and ZIP when revising a case study. Keep source citations and test conditions alongside any numerical results.

# Website source and editing map

## Visitor journey

1. **About** — analog/AMS focus, academic foundation, selected work.
2. **Projects** — analog first, then digital/physical design, then verification. Earlier embedded, power, and signal projects remain searchable in the complete library.
3. **Background** — internships in reverse chronological order, education, tools.
4. **Resumes** — Analog PDF only for now; additional approved versions can be added later.
5. **Contact** — LinkedIn and GitHub.

Each project follows Situation/Task → Actions → Results → Scope/context, with individual contribution, figures, and supported metrics. A repository link appears only when a public matching repository has been identified.

## Repository map

```text
index.html           Navigation, About, experience, education, page containers
projects.js          Case-study content, results, figure metadata, repository links
resumes.js           Resume-card titles, descriptions, PDF paths
app.js               Routing, filtering, search, case rendering, image viewer
styles.css           Base layout and visual system
visuals.css          Figure galleries and image presentation
profile.css          Academic sections, timeline, resumes, curated project paths
img-*.webp           Figures extracted from supplied project reports
01-*.pdf ... 05-*    Illustrated briefs and their WebP previews
Ruthvik-...pdf        Published Analog resume
netlify.toml         Netlify publish settings
README.md            Entry point and maintenance links
PROJECT-INDEX.md     All case studies and matching repositories
RESUME-GUIDE.md      Add or replace a resume
HOSTING.md           Deploy outside GitHub Pages
REPOSITORY-REVIEW.md Repository-to-portfolio comparison and next steps
```

This small static site keeps assets at the root to preserve existing shared PDF/image URLs and make browser uploads straightforward. Content, rendering, and styling have distinct files; no build system is necessary. If the site grows, images can move into `assets/images/`, briefs into `assets/briefs/`, and resumes into `assets/resumes/` in a single migration that also updates every reference and retains redirects for shared URLs.

## Add a project

Add an object to `projects.js` using an existing case as the schema. Give it a unique stable `id`; include source-backed narrative and results. Copy approved figures to the public folder and set image filenames, alt text, captions, and dimensions. Add `repository` only for a verified matching public project. Omit `file` unless both PDF and WebP brief assets exist. Array order controls the Recommended order and next-project navigation. Update the curated links in `index.html` only when the primary reading paths change.

## Before committing

Preview with a local HTTP server. Check the changed case, filters, narrow-screen layout, and downloads. Publish only reviewed site assets; keep raw archives, internship records, drafts, and private content notes outside the public repository.
