<!-- omit in toc -->
# Python Project Template

![GitHub last commit](https://img.shields.io/github/last-commit/MultifokalHirn/python_template_repo)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/MultifokalHirn/python_template_repo)
![GitHub issues](https://img.shields.io/github/issues/MultifokalHirn/python_template_repo)

This is my personal template for a python project containing everything needed to start developing.

## Features

![pdm](https://img.shields.io/badge/pdm-managed-blueviolet)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![conventional-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![License](https://img.shields.io/github/license/MultifokalHirn/python_template_repo)

<!-- TODO: add badges for linters, tests, etc. -->

The project template includes the following features:

<!-- omit in toc -->

- `pdm` for dependency management
- [`Makefile`](./Makefile) for easy setup, testing, linting, etc.
- development tools like `autopep8`, `isort`, `flake8`, `mypy`, amd `pytest`
- CD tools like `coverage`, `semantic-release`, and `commitizen`
- Code base skeleton with [`src/`](./src/) and [`tests/`](./tests/) folders
- Dockerfile and compose setup for easy deployment
- preconfigured VSCode settings in [`.vscode`](./.vscode)
- preconfigured `pre-commit` hooks in [`.pre-commit-config.yaml`](./.pre-commit-config.yaml)
- Templates for [Issues](./.github/ISSUE_TEMPLATE.md) and [PRs](./.github/PULL_REQUEST_TEMPLATE.md) on GitHub
- and more...

<!-- omit in toc
## Table of Contents
 -->

## Getting Started

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for information on how to setup and contribute to this project.

## Roadmap

- [ ] document project structure
- [ ] create and reference demo project
- [ ] check out tools like tox & nox
- [ ] check out pylint
- [ ] expand list of tools I have tried and decided against
- [ ] document pyenv

## "Why don't you use X?"

This template is meant to be a starting point for my own projects and may not follow other people's preferred setups.
Depending on the tool of configuration detail, I either actively decided against something or I have not yet tried them.

If you have any suggestions for improvements, or tools to check out, please [file an issue](https://github.com/MultifokalHirn/python_template_repo/issues).

### Tools I have tried and decided against

- `poetry`
- `black`
- ...

### Tools I want to try out

- `pylint`
- `tox`
- `nox`
- ....

## Troubleshooting

In this section, you will find some common issues you might encounter and how to resolve them. If you are experiencing any issues that are not covered here, please [file an issue](https://github.com/MultifokalHirn/python_template_repo/issues).

<!--
## License

This project is open sourced under MIT license, see the [LICENSE](LICENSE) file for more details. -->
