ENVIRONMENT_VARIABLE_FILE=.env

VENV=.venv # name of virtual environment folder
PYTHON=$(VENV)/bin/python3
PIP=$(VENV)/bin/pip

define find.functions
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
endef

help:
	@echo 'The following commands can be used:'
	@echo ''
	$(call find.functions)


# default target, when make executed without arguments
all: venv

venv: requirements.txt
	$(PYTHON) -m venv $(VENV)
	$(PIP) install --update pip
	$(PIP) install -r requirements.txt

# venv is a shortcut target
venv: $(VENV)/bin/activate

run: venv
	$(PYTHON) app.py


lint: venv ## Runs flake8 on src, exit if critical rules are broken
lint:
	# stop the build if there are Python syntax errors or undefined names
	flake8 src --count --select=E9,F63,F7,F82 --show-source --statistics
	# exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
	flake8 src --count --exit-zero --statistics


test: venv ## Run pytest
test:
	pytest . -p no:logging -p no:warnings


clean:
	rm -rf __pycache__
