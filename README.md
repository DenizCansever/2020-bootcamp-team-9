# 2020 Bootcamp Team 9 - `District9`

## Team Members

| Role                | Name   |
| ------------------- | ------ |
| Frontend Developer  | Filiz  |
| Frontend Developer  | Zeynep |
| Frontend Developer  | Ali    |
| Fullstack Developer | Deniz  |
| Backend Developer   | Burak  |

## DistrictX

DistrictX is a platform that show movies list as popular,trending with their details that keep infos about actors, year, rating, votes, explanation, where to watch, trailer and primarily keeps track of movies users watched or plan to watch in the future. 

This project is deployed by the [now.sh or vercel](https://vercel.com/)

- [HB Assignment Playground](https://hb-assignment.keremcubuk.now.sh/)

## Project: Main Features

- Users can create an account and login with their credentials.
- Users can see the movies in the related page.
- Users can see the detail of movies in the related page.
- Users can search the movies with typing to find related output.
- Users can li
- Users who logged in can reach their profil page to see their credentials.
- Users who logged in can add the movies to their watched list. 
- Users who logged in can add the movies to their watchlist.
- Users who logged in can see the movies that added in their watched list in their profile.  
- Users who logged in can see the movies that added in their watchlist in their profile. 


## Project: `DISTRICT X`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Create React App is Facebook's officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

## Before Start

In order to start the project, you will need `node` and `npm` installed on your machine.

### `npm install`

You should install npm modules by running this command in the terminal:

```shell
npm install
```

### `cd app`

Once the installation is done, you can open your project folder by using:

```shell
cd app
cd frontend
```

### `npm start`

Inside the newly created project, you can run npm start, that will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

Runs the app and directs to the browser.

```shell
npm start
```

## Data

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada sodales urna, quis volutpat velit gravida vel. Morbi sit amet turpis eu arcu eleifend venenatis. Aliquam commodo justo at sapien eleifend convallis. Vivamus efficitur malesuada justo ut feugiat. Aliquam eget imperdiet elit. Donec orci felis, malesuada et sodales vel, hendrerit eget leo.

## Folder Structure

This folder structure is created according to react best practices. All project files listed under `app` folder.

```shell
hb-assignment
├── app
│   ├── components          # UI components
│   ├── containers          # Screen components
│   ├── data                # Dummy datas for initialize
│   ├── images              # All app images goes here
│   ├── redux               # Redux, Actions, Contants define under this folder
│   ├── theme               # All SCSS files goes here
│   └── utils               # Helper functions
├── index.js                # Application start here
└── serviceWorker.js        # Service Integrations
└── setupTests.js           # Enzyme & Jest Test Integrations
```

## Theme

And also, in this project `React-Bootstrap` have been used. With this UI framework, all most all sample UI components used from `react-boootstrap`.

- UI Components are created with React Bootstrap.
- `SCSS` files listed under `theme` folder. And also, this folder is overrides the `bootstrap` theme, so that I have used `bootstrap` and `node-sass`.

## NPM Libraries

Libraries used to create components and screens.

- [React Bootstrap](https://react-bootstrap.github.io/) - UI Framework
- [Bootstrap](https://getbootstrap.com/) - UI Framework Stylings
- [node-sass](https://github.com/sass/node-sass) - To enable write `SCSS` & `SASS`
- [@primer/octicons-react](https://octicons.github.com) - Icon Library
- [react-router-dom](https://github.com/ReactTraining/react-router#readme) - Router
- [react-toastify](https://github.com/fkhadra/react-toastify#readme) - Toast Messages
- Redux, React-redux, Immer - For Redux Usage
