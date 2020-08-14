# MyCrypto Landing Page

[![Build](https://github.com/MyCryptoHQ/landing/workflows/Jest/badge.svg?branch=master)](https://github.com/MyCryptoHQ/landing/actions)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

This repo stores the MyCrypto landing page.

## Development / Build Requirements

- Node 12.x\*
- Yarn >= 1.19.1\*\*

<sub>\*Higher versions should work fine, but may cause inconsistencies.</sub>
<br />
<sub>\*\*npm is NOT supported for package management. MyCrypto Landing uses yarn.lock to ensure sub-dependency versions are pinned, so yarn is required to install node_modules</sub>
<br />

## Running the App

First, you must run `yarn` to grab all the dependencies. If you are ever having trouble with something, a good place to start is by trying `rm -rf node_modules/ && yarn` which will completely clear all your previously installs dependencies and re-install them from scratch.

Then, you can run various commands depending on what you want to do:

#### Development

```bash
# run app in dev mode in browser, rebuild on file changes
yarn start
```

A development server will be available on https://localhost:8000

#### Production

```bash
# builds production app version used on mycryptobuilds.com
yarn build
```

The static build is located inside the `public` folder

## Staging Environment

### Master Build

A preview of the Landing is hosted on [MyCryptoBuild](https://landing.mycryptobuilds.com/).

Build is triggered when code is pushed on the master branch or when a pull request is submitted.

### PR Build

A preview of a PR is hosted on [MyCryptoBuild](https://landing.mycryptobuilds.com/). It can be found at `https://landing.mycryptobuilds.com/pr/PR_NUMBER`

### Commit Bulid

A preview of a commit is hosted on [MyCryptoBuild](https://landing.mycryptobuilds.com/). It can be found at `https://landing.mycryptobuilds.com/COMMIT_SHA`

## License

The landing page is [MIT licensed](./LICENSE).
