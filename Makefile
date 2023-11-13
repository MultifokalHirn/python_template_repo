.ONESHELL:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

# ENVIRONMENT_VARIABLE_FILE := .env

all: venv

install-pdm: venv
	$(VENV)/pip install --upgrade pip setuptools wheel
	$(VENV)/pip install pdm
	$(VENV)/pdm config python.use_venv false
	$(VENV)/pdm use --venv in-project
.PHONY: install-pdm

bootstrap: clean-venv venv install-pdm ## fresh install of venv and dependencies
.PHONY: bootstrap

prod:  ## install prod dependencies
	$(VENV)/pdm sync --fail-fast --prod
.PHONY: dev

dev:  ## install dev dependencies
	$(VENV)/pdm sync --fail-fast --dev
.PHONY: dev

ci: lint mypy test ## Run all checks (test, lint, typecheck)
.PHONY: ci

app: ## Run the app service
	$(VENV)/python -m app
.PHONY: app

update: venv ## update lock file if needed
	$(VENV)/pdm self update
	$(VENV)/pdm lock
.PHONY: update

## to add additional services, they should follow the same pattern as the example api service:
# api: ## Run the api service
# 	$(VENV)/python -m api
# .PHONY: api

run: app ## Run the application
.PHONY: run

lint-fix: venv ## Run autopep8 and isort
lint-fix:
	# Run auto-formatters...
	$(VENV)/autopep8 **/*.py --in-place --recursive --aggressive --aggressive
	$(VENV)/isort **/*.py
.PHONY: lint-fix

lint: lint-fix ## Runs flake8 on src, exit if critical rules are broken
lint:
	# Run flake8...
	$(VENV)/flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics --max-line-length=127
	$(VENV)/flake8 . --count --exit-zero --statistics
.PHONY: lint

mypy: venv ## Runs mypy on src, exit if critical rules are broken
mypy:
	# Run type checks...
	$(VENV)/mypy --show-error-codes --pretty .
.PHONY: mypy


test: venv ## Run pytest
test:
	# Run pytest...
	$(VENV)/pytest tests/ -p no:logging -p no:warnings
.PHONY: test

# clean:
# 	rm -rf __pycache__
# .PHONY: clean

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
