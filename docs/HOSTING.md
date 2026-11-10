# Hosting outside GitHub Pages

The code can stay in GitHub while Netlify serves the website. This is a buildless HTML/CSS/JavaScript site; no framework migration, database, or server is needed.

## Recommended: Netlify with automatic GitHub deployments

1. Sign in to Netlify and choose **Add new project → Import an existing project → GitHub**.
2. Authorize the portfolio repository, `Ruthvik-reddy-A/Ruthvik-reddy-A.github.io`. Limit repository access to this repository when the integration offers that option.
3. Select branch `main`. Leave base directory and build command blank. Set publish directory to `.` (the repository root). The included `netlify.toml` supplies the publish directory.
4. Publish. Netlify assigns a site URL; use the actual returned URL, not an assumed project name.
5. Verify anonymous/public access. Some Netlify teams default to private sites; recruiters must not need to sign in.
6. Test About, Projects, Background, Resumes, a case study, image enlargement, and the Analog PDF from a signed-out browser.
7. Use the verified Netlify URL on your resume. Later commits to `main` trigger new Netlify deployments. GitHub Pages is not involved in that deployment pipeline.

Keep the existing GitHub Pages link until the replacement works. A custom domain is optional; a domain purchase is separate from deploying the site. After choosing a permanent URL, update the README and any resume/LinkedIn links that should point to it.

## Alternative: Cloudflare Pages

Connect the same repository using Git integration, select the static HTML configuration, and publish the repository root. Cloudflare also supports Direct Upload for manual updates, but its documentation notes that a Git-integrated Pages project cannot later switch to Direct Upload.

## Manual deployment

For Netlify Drop or Cloudflare Direct Upload, upload the reviewed public website folder containing `index.html`. Do not upload the working folder that contains private source notes. Manual uploads do not give automatic GitHub updates.

## Routing and files

The site uses hash links (`#projects`, `#project/ldo-regulator`), so it does not require an SPA catch-all redirect. Keep filename capitalization and relative URLs intact. All files in the deployment directory are public, including PDFs not linked in navigation.

## Official documentation

- https://docs.netlify.com/start/quickstarts/deploy-from-repository/
- https://docs.netlify.com/build/configure-builds/file-based-configuration/
- https://developers.cloudflare.com/pages/configuration/git-integration/
- https://developers.cloudflare.com/pages/get-started/direct-upload/

Settings checked 9 November 2026. Account connection and a successful deployment are still required; a config file alone does not create a hosted site.
