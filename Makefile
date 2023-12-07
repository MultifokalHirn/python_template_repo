.ONESHELL:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

# ENVIRONMENT_VARIABLE_FILE := .env

python-version: ## Show the python version
	# Show the python version
	@python --version
.PHONY: python-version

# install-pdm: venv
# 	$(VENV)/python -V
# 	$(VENV)/pip install --upgrade pip setuptools wheel
# 	$(VENV)/pip install pdm
# 	$(VENV)/pdm config python.use_venv false
# 	$(VENV)/pdm use --venv in-project
# .PHONY: install-pdm

bootstrap: python-version clean-venv venv ## fresh install of venv and dependencies
.PHONY: bootstrap

prod:  ## install prod dependencies
	# install prod dependencies
	$(VENV)/pdm install
.PHONY: prod

dev:  ## install all dependencies in lock file
	# install all dependencies in lock file
	$(VENV)/pdm install -G :all
.PHONY: dev

ci: ## Runs ci 
ci:
	pdm run ci
.PHONY: ci

# app: ## Run the app service
# 	$(VENV)/python -m app
# .PHONY: app

update: venv ## update lock file if needed
	$(VENV)/pdm self update
	$(VENV)/pdm run lock
.PHONY: update

## to add additional services, they should follow the same pattern as the example api service:
# api: ## Run the api service
# 	$(VENV)/python -m api
# .PHONY: api

# run: app ## Run the application
# .PHONY: run


lint: ## Runs lint on src
lint:
	pdm run lint
.PHONY: lint

format: ## Runs formatter on python files
format:
	pdm run format
.PHONY: format

mypy: ## Runs mypy on src, exit if critical rules are broken
mypy:
	pdm run mypy
.PHONY: mypy


test: venv ## Run pytest
test:
	# Run pytest...
	pdm run test
.PHONY: test

.DEFAULT_GOAL := help

define find.functions
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
endef

help: ## Shows the available commands and their descriptions
	@echo "Usage: make [target]"
	@echo ""
	@awk -F ':.*?## ' '/^[a-zA-Z0-9_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
.PHONY: help

include Makefile.venv
