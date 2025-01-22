.ONESHELL:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

help: ## Show available commands and their descriptions
	@echo "Usage: make [target]"
	@echo ""
	@awk -F ':.*?## ' '/^[a-zA-Z0-9_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
.PHONY: help

.PHONY: in-venv
in-venv: ## make sure we're in the venv
	uv venv
.PHONY: bootstrap
bootstrap: python-version clean-venv venv ## Delete existing & create new venv

prod: in-venv  ## install package dependencies
	# installing prod dependencies only...
	@uv pip install -r pyproject.toml
.PHONY: prod

dev: prod  ## install (all) dev dependencies
	# installing dev dependencies...
	@uv pip install -r pyproject.toml --all-extras -e .
.PHONY: dev

bootstrap-dev:  ## set up a fresh dev environment
	# setting up a fresh dev environment...
	$(MAKE) bootstrap
	$(MAKE) dev
	$(MAKE) setup-docs
	$(MAKE) setup-pre-commit
.PHONY: bootstrap-dev

setup-pre-commit: in-venv ## install pre-commit hooks
	# installing pre-commit hooks...
	pre-commit autoupdate
	pre-commit install && $(VENV)/pre-commit install --hook-type commit-msg
.PHONY: setup-pre-commit

setup-docs: ## install docs dependencies
	# installing docs dependencies...
	@npm install
.PHONY: setup-docs

build-docs: setup-docs ## build docs
	# building docs...
	@npm run docs:build
.PHONY: build-docs

update: ## update lock file if needed
	uv pip install --upgrade uv
	$(VENV)/pdm run update-all
	$(VENV)/pre-commit autoupdate
.PHONY: update

lint: in-venv dev ## Run linter on python files
	$(VENV)/pdm run lint
.PHONY: lint

format: in-venv dev ## Run formatter on python files
format:
	$(VENV)/pdm run format
.PHONY: format

mypy: ## Run mypy on python files
	$(VENV)/pdm run mypy
.PHONY: mypy

test:  in-venv dev ## Run unit tests
	$(VENV)/pdm run test
.PHONY: test

ci:  in-venv dev ## Run formatter, linter, mypy, and unit tests
	$(VENV)/pdm run ci
.PHONY: ci

.DEFAULT_GOAL := help

define find.functions
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
endef

python-version: ## Show the python version
	# Using the following python version:
	@python --version
.PHONY: python-version

include Makefile.venv
