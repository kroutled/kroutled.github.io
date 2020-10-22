# PersonalSite

This is a project to display my personal online profile.
It has been built using Angular js and hosted using github pages.

## Build and deploy

git checkout master
git pull origin develop
ng build --prod --base-href 'https://username/repo.github.io/'
ng deploy --branch=master OR npx angular-cli-ghpages - dir=dist/index.html