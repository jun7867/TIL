# Deployment 배포하기

## 1. Github

### Step 1: Add homepage to package.json

Open your package.json and add a homepage field for your project:
```
"homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:
```
"homepage": "https://myusername.github.io",
```

or for a custom domain page:
```
"homepage": "https://mywebsite.com",
```
Create React App uses the homepage field to determine the root URL in the built HTML file.

### Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://myusername.github.io/my-app, run:
```
npm install --save gh-pages
```
Alternatively you may use yarn:
```
yarn add gh-pages
```
Add the following scripts in your package.json:
```
"scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
The predeploy script will run automatically before deploy is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your **package.json** scripts to push deployments to master:
```
"scripts": {
    "predeploy": "npm run build",
   "deploy": "gh-pages -b master -d build",
```


### Step 3: Deploy the site by running npm run deploy
Then run:
```
npm run deploy
```


### Step 4: For a project page, ensure your project’s settings use gh-pages
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

gh-pages branch setting

하지만 browserHistory를 지원하지 않아서 따로 설정해줘야 한다. 그래서 netlify도 많이씀.

## 2. Netlify

Netlify
To do a manual deploy to Netlify’s CDN:
```
npm install netlify-cli -g
netlify deploy
```

Choose build as the path to deploy.

To setup continuous delivery:

With this setup Netlify will build and deploy when you push to git or open a pull request:

1.Start a new netlify project
2.Pick your Git hosting service and select your repository
3.Click Build your site



## 그 외 다양한 배포 방법들

https://create-react-app.dev/docs/deployment/ 
