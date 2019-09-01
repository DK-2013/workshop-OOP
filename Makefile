install: install-deps install-flow-typed

run:
	npx babel-node -- 'src/bin/getGeoLoc.js' 168.8.8.8

install-deps:
	npm install

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npx flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
