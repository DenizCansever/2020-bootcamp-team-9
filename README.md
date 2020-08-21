# 2020 Bootcamp Team 9 - `District9`

## Team Members

| Role                | Name   |
| ------------------- | ------ |
| Frontend Developer  | Ali    |
| Frontend Developer  | Deniz  |
| Frontend Developer  | Filiz  |
| Frontend Developer  | Zeynep |
| Backend Developer   | Burak  |

## DistrictX

DistrictX is a platform that show movies list as popular,trending with their details that keep infos about actors, year, rating, votes, explanation, where to watch, trailer and primarily keeps track of movies users watched or plan to watch in the future. 

This project's backend is deployed on the [azure](https://eterationmovies.azurewebsites.net/swagger-ui.html#/).



## Project: Main Features

- Users can create an account and login with their credentials.
- Users can see the movies in the related page.
- Users can see the detail of movies in the related page.
- Users can search the movies with typing to find related output.
- Users can check the about page.
- Users who logged in can reach their profil page to see their credentials.
- Users who logged in can add the movies to their watched list. 
- Users who logged in can add the movies to their watchlist.
- Users who logged in can see the movies that added in their watched list in their profile.  
- Users who logged in can see the movies that added in their watchlist in their profile. 


## Project: `DISTRICT X`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Create React App is Facebook's officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

## Before Start

In order to start the project, you will need `node` and `npm` installed on your machine.

### `cd app`

First you need to go to frontend directory: 

```shell
cd app
cd frontend
```
Then you can run:

### `npm install`

You should install npm modules by running this command in the terminal:

```shell
npm install
```



### `npm start`

Inside the newly created project, you can run npm start, that will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

Runs the app and directs to the browser in the development mode.

```shell
npm start
```

## Data

Consuming backend service to get movies data, backend service is running on azure. You can check it on the deployed link in the DistrictX title.

## Backend
First you need to download Mongo.DB and redis to run springboot. 
On the backend directory you can run:

```shell
mvn clean package
```

```shell
mvn spring-boot:run
```
Also backend service is available on this endpoint:

[backend-service](https://eterationmovies.azurewebsites.net/swagger-ui.html#/)
 
## Folder Structure

All project files listed under `app` folder.

```shell
2020-bootcamp-team-9
├── app
   ├──backend
   │    ├── config             # Cors, Redis, SpringMongo, Swagger Configurations
   │    ├── controller         # Controller for user and movie
   │    ├── domain/model       # User defines under this folder  
   │    ├── dto                # User dto defines under this folder    
   │    ├── externalservice    # Trackt and Funart services define under this folder
   │    ├── models             # Models for parsing http response from external service 
   │    ├── repository         # User repository defines under this folder       
   │    ├── service            # User service defines under this folder          
   │    └── startup.java       # Runs springboot application                           
   └──frontend
       ├── components          # UI components
       ├── config              # Firebase initilazing
       ├── containers          # Screen components
       ├── data                # Dummy datas for early work
       ├── images              # All app images are here
       ├── redux               # Redux, Actions, Contants define under this folder
       ├── service             # Services that we use define under this folder
       ├── theme               # All SCSS files goes here
       ├── index.js            # Application start here
       ├── serviceWorker.js    # Service Integrations
       └── setupTests.js       # Enzyme & Jest Test Integrations
```

## Theme

And also, in this project `React-Bootstrap` have been used. With this UI framework, some sample UI components used from `react-boootstrap`.

- Some UI Components are created with React Bootstrap.
- `SCSS` files listed under `theme` folder. And also, this folder is overrides the `bootstrap` theme, so that we have used `bootstrap` and `node-sass`.

## NPM Libraries

Libraries used to create components and screens.

- [React Bootstrap](https://react-bootstrap.github.io/) - UI Framework
- [Bootstrap](https://getbootstrap.com/) - UI Framework Stylings
- [node-sass](https://github.com/sass/node-sass) - To enable write `SCSS` & `SASS`
- [react-router-dom](https://github.com/ReactTraining/react-router#readme) - Router
- [react-toastify](https://github.com/fkhadra/react-toastify#readme) - Toast Messages
- Redux, React-redux, Immer - For Redux Usage
- [axios](https://github.com/axios/axios/blob/master/README.md) - Promise based HTTP client for the browser and node.js
- [react-bootstrap-carousel](https://github.com/skycloud1030/react-bootstrap-carousel/blob/master/README.md) - For using slideshow component 


