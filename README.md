# README

## What is this repository for?
### Interview test task:

Cover with automation tests (all the positive and negative cases) in stack TS + Playwright sign in process on [Github](https://github.com/) and create instruction in README file how to run tests in Docker.

## Technology stack

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) - framework for Web Testing and Automation
- [ESLint](https://eslint.org/) - Static code analyzer
- [Prettier](https://prettier.io/) - An opinionated code formatter

## How to set up and run tests?
### To set up:
- Pull the `master` branch
- Create `.env` file according to [.env.example](.env.example) with valid [Github](https://github.com/) credentials.

### To run tests:
- Make sure you have Docker installed and started.
- Run `docker build -t inktech-test .` from the root folder for building docker image.
- Run `docker run --env-file ./.env inktech-test` from the root folder to run container and run tests inside it.