<div align="center">

<p style="font-size:22px">  🏗️ This project is currently under construction 🏗️ </p>
<br>
</div>

<!-- omit in toc -->
# Python Project Template

![GitHub last commit](https://img.shields.io/github/last-commit/MultifokalHirn/python_template_repo)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/MultifokalHirn/python_template_repo)
![GitHub issues](https://img.shields.io/github/issues/MultifokalHirn/python_template_repo)

![py3](https://img.shields.io/badge/python->=3.8-306998)

This is my personal template for a python project containing everything needed to start developing.

<!-- omit in toc -->
## Features

![constr](https://img.shields.io/badge/🏗️-under%20construction-FFD43B)

> Check out the [roadmap](#roadmap) for planned features


### Python Development
<!--
[![Python Version](https://img.shields.io/pypi/pyversions/Django?branch=master&label=Python&logo=Python&logoColor=ffffff&labelColor=306998&color=FFD43B&style=flat)](https://pypi.org/project/amazoncaptcha/) -->

![pdm](https://img.shields.io/badge/pdm-managed-blueviolet)
[![mypy](https://www.mypy-lang.org/static/mypy_badge.svg)](https://mypy-lang.org/)

- `pdm` for dependency management
- packages for:
  - linting and static analysis with `flake8` and `mypy`
  - auto-fixing with `autopep8` and `isort`
  - `pytest` for testing
- Code base skeleton with [`src/`](./src/) and [`tests/`](./tests/) folders

### Developer Tooling

- [`Makefile`](./Makefile) for easy setup, testing, linting, etc.
- docker-compose for easy setup of dev environment
- Configuration for
  - python packages in [`pyproject.toml`](./pyproject.toml) and [`setup.cfg`](./setup.cfg)
  - VSCode in [`.vscode/`](./.vscode)
  - `pre-commit` hooks in [`.pre-commit-config.yaml`](./.pre-commit-config.yaml)
  - [`pyenv`](./.python-version)
- Templates for [Issues](./.github/ISSUE_TEMPLATE.md) and [PRs](./.github/PULL_REQUEST_TEMPLATE.md) on GitHub
- and more...

### CI & CD

[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![conventional-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
- GitHub Actions for
  - linting & testing
  - `semantic-release` for automated versioning and changelog generation
- `commitizen` for version control and changelog generation

<!-- omit in toc
## Table of Contents
 -->


## Roadmap

### v1 Release

- [ ] set up github actions for CI
- [ ] set up devcontainer
- [ ] set up dependabot
- [ ] set up coverage reporting
- [ ] set up semantic-release
- [ ] set up commitizen
- [ ] set up Dockerfile and docker-compose

### Demo Project

- [ ] create demo project to showcase best practices and features

### Improve Documentation

- [ ] document project structure
- [ ] document pyenv
- [ ] expand list of tools I have tried and decided against


### Ideas for the Future

- [ ] find out how to sync templates with projects that use them?
- [ ] check out tools like tox & nox
- [ ] check out pylint


## Getting Started

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for information on how to setup and contribute to this project.

### Quickstart

``` bash
git clone https://github.com/MultifokalHirn/python_template_repo.git
cd python_template_repo/

make install  # sets up dev environment and installs dependencies
make ci       # runs auto-fixes, linters and tests
make run      # starts the application
```


## "Why don't you use X?"

> This template is meant to be a starting point for my own projects and may not follow other people's preferred setups.


Depending on the tool of configuration detail, I either actively decided against something or I have not yet tried them.

If you have any suggestions for improvements, or tools to check out, please [file an issue](https://github.com/MultifokalHirn/python_template_repo/issues).

### Tried and Decided Against

- `poetry`
- `black`
- ...

### Want to try

- `pylint`
- `tox`
- `nox`
- ....

## Troubleshooting

In this section, you will find some common issues you might encounter and how to resolve them. If you are experiencing any issues that are not covered here, please [file an issue](https://github.com/MultifokalHirn/python_template_repo/issues).

### I does not work! I tried everything!

Well, have you tried turning it off and on again?

## License

This project is authored by Lennard Wolf and open sourced under MIT license, see [`LICENSE`](./LICENSE) for details.

<!-- <div align="center"> -->

![License](https://img.shields.io/github/license/MultifokalHirn/python_template_repo)
<!-- </div> -->
