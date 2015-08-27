.PHONY: default bootstrap test start

default: start

bootstrap:
	@npm install

test:
	@npm test

start:
	@npm start
