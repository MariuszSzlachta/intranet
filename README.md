
# Intranet

This is an application made as recruitment task for Front-End (React) Developer in Predica Sp. z o.o.
Author: Mariusz Szlachta

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
So have all functions that are provided by Create React App

### How to start

1. unzip file
2. open terminal inside unziped folter
3. inside terminal type: npm install
4. when process completes you can develop app using scripts.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
**EJECTED !!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Project folders

- build - will appear after building production version. More info bellow.
- config - contain ejected configuration files like Webpack configs, environment variables, paths
- node_modules - appears after npm install command, contains all packages and dependencies necessary to develop this app.
  Don't edit manually anything inside. If you want to change some Webpack configs or something like that, use config folder.
- public - contains starting files like index.html (where we mount our app), favicons, and manifest for PWA.
  Inside index.html you can add fonts for example. Use it wise.
- scripts - here you can see how webpack build our app in different ways. I recomend you to not touch anything there.
- src - here is our playground. You can find here logic of our app.

#### SRC FOLDER

Assets - here you can find static assets like images
  |_ images
           |_ toolboxIcon - here you can find icons for toolbox component. I leave them here in the case you want to use. But now toolbox use icons fetched from internet
           |_ Logo.svg - nice logo of my app

Components - contains folders with functional (stateless) react components. In every folder you can find file componentName.js that contains source code of component and componentName.module.scss file that contains styles written in scss for component.
**IMPORTANT**
Inside components folder you can find components that contains another functional components. It's not wrong. When you find that situations you can assume that components inside the component are outourced part of parent component. If you move them somewhere else you need to update import paths inside its parents.

Containers - class components (statefull), holds state of the App and methods used in app.

data - this folder contains folders with data imported in proper components. So name of folder is a name of component that imports data.

Intl - here is folder with our translations. Inside localizationData you can find two files en.js, pl.js. This two contains translations for proper languages. You can edit them to develop translation in app.
[HERE](https://github.com/yahoo/react-intl) you can read some more how to use React intl.

Shared - contains shared scss variables and styles. If you have something you need to share between components, maybe it's a good idea to put it here.

Vendor - contains vendors libraries like normalize.css

Index.js - starting file where we render our app and webpack starts building our app.

index.module.scss - contains styles applied in index.js

serviceWorker.js - service worker for PWA

.gitignore - you can define here what files and folders you don't want to upload to your remote rpository like github.

package-lock.json - integrates installed packages. Don't edit.

package.json - here you can add some scripts you want to use, see versions of dependencies and if you are developer you probably know what's for.

README.md - documentation you reed.

## DEPLOYMENT

If you want to deploy this app first you need to build production version of it.

1. Inside terminal opened in main folder of this app type: npm run build.
2. It creates folder 'build' and fill it with parts of our app, like chunks.
3. This folder is almost everuthing you need to deploy your app.
4. I said almost, because if you want deploy react app you need static server for exampla.
5. Simpliest way is do commands below:

  -  npm install -g serve
  -  from main catalog of this project do command:
  -  serve -s build
  -  open browser in http://localhost:5000 as you see in terminal
6. As I mentioned before, it's more than one way to deploy app. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



