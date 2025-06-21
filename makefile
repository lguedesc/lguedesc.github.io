msg ?= "default commit message"

all: prettier_run git_add_all git_commit git_push

prettier_run:
	npx prettier --write .

git_add_all:
	git add .

git_commit:
	git commit -m "$(msg)"

git_push:
	git push origin main

server:
	source .venv/bin/activate && bundle exec jekyll s
