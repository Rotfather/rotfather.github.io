# Rotfather-site
This is the website for the Rotfather project

##How do I make changes on it?
#### 1) Setting up the project
First of all, you need NodeJS and NPM to run this project.
By using the NodeJS Installer you will get npm within.
* [Download NodeJS](https://nodejs.org/en/)
* Install it
* Check if Node and npm are installed by running:
```
$ node -v
$ npm -v
```
Open up the project and in the command line run.

Then execute:
```
$ npm install
```
#### 2) Running the project
To run in development mode:
```
$ npm run dev
```
To run in production mode:
```
$ npm run production
```
A Chrome window should open with the website.

#### 2) Editting the pages
Any changes should be done in the src/ folder never inside the public/ folder

#### 3) Editting the content
Any text change should be made inside the i18n/ folder not in the jade or html files

#### 4) Deploying the website
After all changes are done and you have pushed the changes to the master, you can deploy the new page.
You do it by running:
```
$ npm run deploy
```
After the deploy it may be necessary to go to settings and change the custom domain to:
'therotfather.com'
