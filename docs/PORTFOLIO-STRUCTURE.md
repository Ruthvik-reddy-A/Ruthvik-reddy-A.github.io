# Portfolio structure and editing map

The [live website](https://ruthvik-reddy-a.github.io/) and [repository README](../README.md) both provide access to the project documents. All 25 case studies have View PDF and Download PDF actions; the Projects library has a complete ZIP download.

## Folders

- `assets/css/`: base layout, image galleries, academic profile, and PDF components.
- `assets/js/app.js`: routing, filtering, search, case-study rendering, and image viewer.
- `assets/images/`: source figures retained at their original aspect ratios.
- `data/projects.js`: project narratives, results, figure metadata, and document paths.
- `data/resumes.js`: resume-card content and file paths.
- `downloads/projects/{analog,digital,verification,embedded,power,signal}/`: detailed three-page PDFs.
- `downloads/briefs/`: earlier illustrated PDFs and their WebP previews.
- `downloads/resumes/`: approved resume PDFs.
- `downloads/`: ZIP of all detailed project PDFs.
- `docs/`: project index, resume guide, repository review, and optional hosting documentation.

`index.html`, `README.md`, `.nojekyll`, and the optional unused Netlify configuration stay at the root. GitHub Pages publishes `main` from the root; no build step is needed. Netlify is not connected.

## Editing

Content paths in the data files resolve relative to `index.html`, not relative to the JavaScript file. Keep capitalization exact. To add a project, copy an existing object in `data/projects.js`, assign a stable unique ID, and provide verified narrative and results. Its `detailedPdf` points to the PDF in the appropriate discipline folder. Figures use `assets/images/...`; `file` is the brief path without its PDF/WebP extension.

When revising a detailed PDF, also refresh `downloads/Ruthvik-Reddy-Project-Case-Studies.zip`. The PDFs' source-image annotations point to the new image folder. Existing website hash routes remain unchanged. Old root-level file URLs have moved; use the links in the updated index.

## Verification

Preview the repository root with a local static HTTP server. Check the project library, all PDF actions, the resume, image enlargement, and mobile layout. Internal source notes and raw archives are kept outside this public repository.
