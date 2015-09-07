.PHONY: default bootstrap test start

default: bootstrap start

bootstrap:
	@npm install

start:
	@npm start
