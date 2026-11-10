# Add or replace a resume

1. Upload the approved PDF to `downloads/resumes/`.
2. Add its entry in `data/resumes.js`. The `file` value is relative to the website root, for example `downloads/resumes/Ruthvik-Reddy-Digital-Resume.pdf`.
3. Commit the changes to `main` and wait for GitHub Pages deployment to succeed.
4. Visit the website's Resumes tab and test View PDF and Download resume.

Only the original Analog resume is currently published, as requested. To replace it, keep the filename `Ruthvik-Reddy-Analog-Resume.pdf`; its links will continue to work. If renaming it, update both `data/resumes.js` and the sidebar link in `index.html`.

Keep title, description, and tags accurate to the PDF. A new object in the resumes array creates a card automatically. Commas separate array entries. Review dates, project metrics, and contact details before publication. Keep private drafts outside the public repository.
