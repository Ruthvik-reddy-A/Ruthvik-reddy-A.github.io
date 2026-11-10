# Adding or replacing a portfolio resume

The website is published from the **main** branch and repository root of [Ruthvik-reddy-A.github.io](https://github.com/Ruthvik-reddy-A/Ruthvik-reddy-A.github.io). A connected host can republish when those files change; see [HOSTING.md](HOSTING.md) for Netlify setup.

## Add another version

1. Export the finished resume as a PDF. Use a simple filename such as `Ruthvik-Reddy-Digital-Resume.pdf`.
2. In the public repository, choose **Add file → Upload files**, upload the PDF to the root (beside `index.html`), and commit it.
3. Open `resumes.js`, choose **Edit**, and add an object inside the `resumes` array. Put a comma between entries. For example:

```javascript
  {
    title: 'Digital IC Design',
    focus: 'Digital design',
    description: 'RTL, CMOS digital design, synthesis, and physical implementation.',
    file: 'Ruthvik-Reddy-Digital-Resume.pdf',
    format: 'PDF',
    tags: ['RTL', 'Digital IC design', 'Physical design']
  }
```

4. Commit the edit. Wait for your connected host’s deployment to finish, then visit `#resumes` on the live site. Test both **View PDF** and **Download resume**.

The filename and capitalization in `file` must match the uploaded PDF exactly. Reorder objects to change the card order. Keep titles, descriptions, and tags accurate to that version. Each listed entry creates a card automatically; no HTML or CSS edit is needed.

## Replace the current Analog PDF

Upload the new PDF using the same name, `Ruthvik-Reddy-Analog-Resume.pdf`, and commit the replacement. This updates the Resumes tab and existing sidebar download link. If you rename that primary file, also update its links in `index.html` and its entry in `resumes.js`.

## Before publishing

Check dates, current versus completed roles, project metrics, hyperlinks, and contact details. Every file uploaded to this public repository is publicly accessible, even if it has no resume card. Keep draft documents and supporting private records outside this repository.

## Local maintenance

Edit the working copy under `outputs/semiconductor-portfolio` and mirror approved website assets into `outputs/github-pages-public` before uploading. Internal content notes (`PORTFOLIO.md`, `EXPERIENCE.md`, `IMAGES.md`) remain outside the public release. The current published resume selection is Analog only.
