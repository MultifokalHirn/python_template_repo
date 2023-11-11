# For Contributors

## Setup

### Requirements

* Make:
  * macOS: `$ xcode-select --install`
  * Linux: [https://www.gnu.org](https://www.gnu.org/software/make)
  * Windows: `$ choco install make` [https://chocolatey.org](https://chocolatey.org/install)
* Python: `$ asdf install` [https://asdf-vm.com](https://asdf-vm.com/guide/getting-started.html)
* PostgreSQL: `$ brew install postgres`
* direnv: <https://direnv.net>

To confirm these system dependencies are configured correctly:

``` bash
# make bootstrap
# make doctor
```

### Installation

Install project dependencies into a virtual environment:

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

Run linters and static analyzers:

``` bash
make lint
```

## Continuous Integration

The CI server will report overall build status:

``` bash
make ci
```
