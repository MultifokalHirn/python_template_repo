# For Contributors

Most of the setup is automated with `make`. Check the [Makefile](./Makefile) to learn more.

## Setup

### Requirements

* Python>=3.8
* Make:
  * macOS: `xcode-select --install`
  * Linux: visit [gnu.org](https://www.gnu.org/software/make)
  * Windows: `choco install make` [https://chocolatey.org](https://chocolatey.org/install)

<!-- To confirm these system dependencies are configured correctly:

``` bash
make bootstrap
make doctor
``` -->

### Installation

`Make` will take care of setting a the virtual environment (it will be located in `.venv`). It will also install `pdm` and with it all dependencies.

``` bash
make install
```

<!-- ### Data

To automatically create test accounts, update `.envrc` with your own information and run `direnv allow`. Then, generate new seed data for local development:

``` bash
make data
``` -->

## Development Tasks

### Testing

Manually run the tests:

``` bash
make test
```

<!-- or keep them running on change:

``` bash
make dev
``` -->

> In order to have OS X notifications, `brew install terminal-notifier`.

### Static Analysis

By default this project is set up to lint with `flake8` and `mypy`, while `autopep8` and `isort` take care of autofixing. To run linters and static analyzers:

``` bash
make lint-fix # autopep8 and isort
make lint     # flake8 and mypy
```

## Continuous Integration

To run the same checks as in CI, which are a combination of the above tasks (testing, linting, static analysis) run:

``` bash
make ci
```



### Commit Message Conventions

A [uniform commit message style](https://commitizen-tools.github.io/commitizen/tutorials/writing_commits/)
and [here](https://www.conventionalcommits.org/en/v1.0.0/). for better readibilty shall be enforced to be able to generate a [changelog](./CHANGELOG.md).

### pre-commit hooks

[`pre-commit``](https://github.com/pre-commit/pre-commit) shall be used to run checks on staged changes before each commit.
Please install the hooks like so:

``` bash
pre-commit install && pre-commit install --hook-type commit-msg
```
