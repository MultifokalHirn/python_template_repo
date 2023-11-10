<!-- omit in toc -->
# Python Project Template

<div align="center">
[![pdm-managed](https://img.shields.io/badge/pdm-managed-blueviolet)](https://pdm-project.org)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![GitHub](https://img.shields.io/github/license/MultifokalHirn/python_template_repo)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/MultifokalHirn/python_template_repo)
![GitHub issues](https://img.shields.io/github/issues/MultifokalHirn/python_template_repo)
![GitHub last commit](https://img.shields.io/github/last-commit/MultifokalHirn/python_template_repo)
[![pipeline status](https://gitlab.com/MultifokalHirn/python_template_repo/badges/main/pipeline.svg?ignore_skipped=true)](https://gitlab.com/MultifokalHirn/python_template_repo/-/commits/main)
[![Latest Release](https://gitlab.com/MultifokalHirn/python_template_repo/-/badges/release.svg)](https://gitlab.com/MultifokalHirn/python_template_repo/-/releases)

</div>
My personal template for a python project containing everything needed to start developing

<!-- omit in toc -->

## Highlights of features

- pdm for dependency management
- [Makefile](./Makefile) for common actions ensuring use of virtual environment
- pre-commit hooks in [.pre-commit-config.yaml](./.pre-commit-config.yaml)
- Templates for Issues and PRs on GitHub
-

<!-- omit in toc -->
## Table of Contents


## Contributing
pdm lock && pdm install


### Commit Message Conventions

A [uniform commit message style](https://commitizen-tools.github.io/commitizen/tutorials/writing_commits/)
and [here](https://www.conventionalcommits.org/en/v1.0.0/). for better readibilty shall be enforced to be able to generate a [changelog](./CHANGELOG.md).

### pre-commit hooks

[`pre-commit``](https://github.com/pre-commit/pre-commit) shall be used to run checks on staged changes before each commit.
Please install the hooks like so:

``` bash
pre-commit install && pre-commit install --hook-type commit-msg
```

## License

This project is open sourced under MIT license, see the [LICENSE](LICENSE) file for more details.
