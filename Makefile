define HELP

Usage:

make create-local-env					- Creates a new .env.local file

endef

export HELP

-include .env.local
export $(shell sed 's/=.*//' .env*)

all help:
	@echo "$$HELP"

create-local-env:
	@echo -n "What is the database path to use?"; \
	read varname; \
	echo "MONGO_URI=$$varname" >> .env.local
