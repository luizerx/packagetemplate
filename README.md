# Node.js Package Template

A TypeScript package starter configured for GitHub Packages.

## Before using

1. Replace `@your-github-username/node-package-template` in `package.json` with a lowercase npm scope matching your GitHub owner and your package name.
2. Replace the template function in `src/index.ts` and update its test in `test/index.test.js`.
3. Create a GitHub repository and push this project to it.

## Development

```sh
npm install
npm test
```

## Publish

The GitHub Actions workflow publishes the package when a GitHub Release is published. Set the package version in `package.json` before creating the release. The workflow uses `GITHUB_TOKEN` and requires the repository's Actions setting to allow the workflow to create and publish packages.

The package is published to `https://npm.pkg.github.com`.
