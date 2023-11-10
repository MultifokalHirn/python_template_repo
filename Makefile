.ONESHELL:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

# ENVIRONMENT_VARIABLE_FILE := .env

all: venv

install: venv
	$(VENV)/pip install --upgrade pip setuptools wheel
	$(VENV)/pip install pdm
	$(VENV)/pdm self update
	$(VENV)/pdm lock
	$(VENV)/pdm install --dev
.PHONY: install

ci: lint mypy test ## Run all checks (test, lint, typecheck)
.PHONY: ci


run: venv ## Run the application
run:
	$(VENV)/python -m app
.PHONY: run


lint-fix: venv ## Run autopep8 and isort
lint-fix:
	# Run auto-formatters...
	$(VENV)/autopep8 src/**/*.py --in-place --recursive --aggressive --aggressive
	$(VENV)/isort src/**/*.py
.PHONY: lint-fix

lint: lint-fix ## Runs flake8 on src, exit if critical rules are broken
lint:
	# Run flake8...
	$(VENV)/flake8 src/ --count --select=E9,F63,F7,F82 --show-source --statistics --max-line-length=127
	$(VENV)/flake8 src/ --count --exit-zero --statistics
.PHONY: lint

mypy: venv ## Runs mypy on src, exit if critical rules are broken
mypy:
	# Run type checks...
	$(VENV)/mypy --show-error-codes --pretty src/
.PHONY: mypy


test: venv ## Run pytest
test:
	# Run pytest...
	$(VENV)/pytest . -p no:logging -p no:warnings
.PHONY: test

# clean:
# 	rm -rf __pycache__
# .PHONY: clean

.DEFAULT_GOAL := help

define find.functions
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
endef

help: ## Show this help.
	@ grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help

include Makefile.venv
