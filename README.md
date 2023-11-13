![GitHub last commit](https://img.shields.io/github/last-commit/MultifokalHirn/python_template_repo)
![GitHub issues](https://img.shields.io/github/issues/MultifokalHirn/python_template_repo)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/MultifokalHirn/python_template_repo)

<div align="center">
<p style="font-size:22px">  🏗️ This project is currently under construction 🏗️ </p>
<br>
</div>

<!-- omit in toc -->

# Python Project Template
> Check out the [Roadmap](#roadmap) for planned features

This is my personal template for a python project containing everything needed to start developing.


## Features

<!-- ![constr](https://img.shields.io/badge/🏗️-under%20construction-FFD43B) -->


### Python Development

![py3](https://img.shields.io/badge/-python>=3.8-3776AB?logo=python&logoColor=FFFFFF&style=flat-square)
![pdm](https://img.shields.io/badge/depedency_manager-pdm-blueviolet?logoColor=FFFFFF&style=flat-square)
![pytest](https://img.shields.io/badge/testing-pytest-0A9EDC?logo=pytest&logoColor=FFFFFF&style=flat-square)
![mypy](https://img.shields.io/badge/typechecker-mypy-blue?&style=flat-square)
![flake8](https://img.shields.io/badge/linter-flake8-006400?&style=flat-square)
![isort](https://img.shields.io/badge/autofix-isort-yellow?&style=flat-square)
<!-- ![isort](https://img.shields.io/badge/isort-blue?&style=flat-square) -->

<!-- ![mypy](https://img.shields.io/badge/mypy-checked-blue?&style=flat-square)
[![mypy](https://www.mypy-lang.org/static/mypy_badge.svg)](https://mypy-lang.org/) -->

<!-- - `pdm` for dependency management
- packages for:
  - linting and static analysis with `flake8` and `mypy`
  - auto-fixing with `autopep8` and `isort`
  - `pytest` for testing -->
- Code base skeleton with [`src/`](./src/) and [`tests/`](./tests/) folders

### CI, CD, and Dev Tooling

![make](https://img.shields.io/badge/Makefile-FFFFFF?logo=gnu&logoColor=A42E2B&style=flat-square)
![docker](https://img.shields.io/badge/-Docker-FFFFFF?logo=docker&style=flat-square)
![ghactions](https://img.shields.io/badge/Github_Actions-FFFFFF?logo=githubactions&style=flat-square)
![conventionalcommits](https://img.shields.io/badge/Conventional%20Commits-FFFFFF?logo=conventionalcommits&style=flat-square)
<!-- [![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white&style=flat-square)](https://github.com/pre-commit/pre-commit&style=flat-square) -->
<!-- [![conventional-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg&style=flat-square)](https://conventionalcommits.org&style=flat-square) -->

### Sensible Configuration

![pyproject](https://img.shields.io/badge/pyproject.toml-000000?logo=python&style=flat-square)
![precommit](https://img.shields.io/badge/.pre--commit--config.yaml-000000?logo=precommit&style=flat-square)
![editorconfig](https://img.shields.io/badge/-.editorconfig-000000?logo=editorconfig&style=flat-square)
![visualstudiocode](https://img.shields.io/badge/-.vscode/-000000?logo=visualstudiocode&logoColor=007ACC&style=flat-square)
![templates](https://img.shields.io/badge/Templates-000000?logo=github&logoColor=FFFFFF&style=flat-square)


<!-- - [`Makefile`](./Makefile) for easy setup, testing, linting, etc.
- docker-compose for easy setup of dev environment
- Configuration for
  - python packages in [`pyproject.toml`](./pyproject.toml) and [`setup.cfg`](./setup.cfg)
  - VSCode in [`.vscode/`](./.vscode)
  - `pre-commit` hooks in [`.pre-commit-config.yaml`](./.pre-commit-config.yaml)
  - [`pyenv`](./.python-version)
- Templates for [Issues](./.github/ISSUE_TEMPLATE.md) and [PRs](./.github/PULL_REQUEST_TEMPLATE.md) on GitHub
- and more... -->




<!-- [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) -->

<!-- - GitHub Actions for
  - linting & testing -->
  <!-- - `semantic-release` for automated versioning and changelog generation -->
<!-- - `commitizen` for version control and changelog generation -->

<!-- omit in toc
## Table of Contents
 -->

## Roadmap

### v1 Release

- [x] set up github actions for testing and linting
- [ ] set up github actions for semantic versioning
- [ ] set up dependabot
- [ ] set up commitizen
- [ ] set up Dockerfile and docker-compose
- [ ] set up devcontainer
- [ ] set up coverage reporting
- [ ] set up semantic-release

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

### I does not work! I tried everything

Well, have you tried turning it off and on again?

## License

This project is authored by Lennard Wolf and open sourced under MIT license, see [`LICENSE`](./LICENSE) for details.

<!-- <div align="center"> -->

![License](https://img.shields.io/github/license/MultifokalHirn/python_template_repo)
<!-- </div> -->
