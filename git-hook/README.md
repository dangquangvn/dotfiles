# Git emojis hook
A simple git hook to provide strong guidelines for commit message with emojis.

The commit message rules are the ones from Angular. I just augmented them by substituting their textual types with emojis. So it should look like this:

```🚑 (authentication): remove buggy function that allowed to login w/o passwd```
You'll notice another slight change from Angular's rules: I added a space between type and (scope). It is indeed visually more pleasant after the emojis.

Emojis are actual unicode emojis and not markdown emojis like :fire:. So it will work virtually everywhere as long as unicode is supported.

There are two hooks, one that makes the actual substitution and another one that prints the git commit message helper in the editor.

## Syntax
Here are the types, their respective codes and the corresponding emojis:

revert: `:revert:` • ⏳
build: `:build:` • 📦
ci: `:ci:` • 🤖
docs: `:docs:` • 📖
feat: `:feat:` • 🌟
fix: `:fix:` • 🚑
perf: `:perf:` • ⚡
refactor: `:refactor:` • 🚧
style: `:style:` • 💄
test: `:test:` • ✅
In addition to these, I added `:tada:` 🎉 that's often used for the first commit!

## How to use
For each project, add the two files in in the .git/hooks directory.

At the root of your git project, this one-liner can set up it all:

```
cd .git/hooks/ && curl -O https://raw.githubusercontent.com/Buzut/git-emojis-hook/master/commit-msg && curl -O https://raw.githubusercontent.com/Buzut/git-emojis-hook/master/prepare-commit-msg && chmod +x * || exit 0
```
Also, it might be handy to place the two files in a directory within your home and add a bash alias to automate the deploy.

For exemple, in your home diretory, you could organize things like this:

```.gitemojis/
    commit-msg
    prepare-commit-msg
```
And in your `.bash_profile` or `.bashrc`

```
alias emogitify='cp ~/.gitemojis/* .git/hooks/'
```
Now, when in a project directory, emogitify will add the git-emojis' hooks.

### Integrate to your projects
Unfortunately, hooks aren't part of a project and therefore, they cannot be commited with the project's files. Nevertheless, you can include the one-liner introduced above into your project's init script. For instance, with JavaScript's npm package manager you could do it like so:

{
  "name": "project-name",
  "version": "1.0.0",
  "description": "The next big thing",
  "scripts": {
    "prepare": "test -d .git && cd .git/hooks/ && curl -O https://raw.githubusercontent.com/Buzut/git-emojis-hook/master/commit-msg && curl -O https://raw.githubusercontent.com/Buzut/git-emojis-hook/master/prepare-commit-msg && chmod +x *"
  },
  "dependencies": {…},
  "devDependencies": {…}
}
prepare will then trigger on npm install and if there is a .git directory and the hooks will be installed automatically.

