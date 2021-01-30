# Turtle Movie Chat

> Movie listing and real-time commenting React app, using [Firebase](https://firebase.google.com/) to power the authentication and commenting backend.
> This project was created with [Material-UI](https://material-ui.com/) and used as trial for [Turtle](https://www.turtle.dev/).

## Live version

The live version is available at: <https://turtle-mov.firebaseapp.com/>

## Running

This project was created using [CRA](https://github.com/facebook/create-react-app).
To run the code, first install all the packages needed with:

`npm install`

After the installation, start the project executing the command:

`npm start`

It will open [http://localhost:3000](http://localhost:3000) (default),
so you can view the project in the browser.

## Features

This project was built upon 3 main features: User Authentication, Movies Table and Comments Chat.
After breaking them down, a user is able to:

1. User Authentication
    * Sign in
    * Sign out
2. Movies Table
    * List all movies
    * Filter movies by title and genre
    * Sort movies according to collumn
    * Select a movie to start commenting
3. Comments Chat
    * List all comments
    * Send a new comment

The User Authentication was handled by [Firebase](https://firebase.google.com/), as well as the real-time commenting system.

Regarding the UI, all the features were implemented using the [Material-UI](https://material-ui.com/) framework except the Movies Table.
For this feature, in particular, the [React Table](https://react-table.tanstack.com/) was used to match the original designs and filtering system.

It should be noted that neither App Navigation nor State Management were included as features,
since this was a trial project not meant to be scaled.

### Demo

![Demo](https://s2.gifyu.com/images/demo_turtle-movie-chat.gif)

## Architecture

The project was architectured in the following way:

### `/src`

The `/src` contains all the React codebase, as well as the `App.scss` overall stylesheet.

```
.
├── components
│   ├── authentication
│   │   ├── SignIn.jsx
│   │   └── SignOut.jsx
│   ├── comments
│   │   ├── Comment.jsx
│   │   └── CommentsList.jsx
│   ├── common
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   └── NavBar.jsx
│   └── movies
│       └── MoviesTable.jsx
├── data
│   └── movies.json
├── services
│   └── firebase.jsx
├── styles
│   ├── CommentsListStyles.jsx
│   ├── CommentStyles.jsx
│   ├── MoviesTableStyles.jsx
│   └── NavBarStyles.jsx
├── App.jsx
├── App.scss
└── index.jsx

```

#### `/components`

This folder includes all the components used to build this project, dumb and smart ones.
While the dumb components used were clustered at the `/common` folder, smart components were
arranged according to the their features at `/authentication`, `/comments` and `/movies`.

#### `/data`

It contains the movies data used to feed this project. 

#### `/services`

It includes the Firebase API configuration file needed for both the Authentication and Cloud Firestore.

#### `/styles`

Since the components were styled using Material-UI’s styling solution and best practises,
their files were clustered at the `/styles` folder. This way, the components’ logic and styles
are cleanly separate.

## What to improve?

* Unit testing for components
* State management with Redux or Context
* Features to update, like/dislike and delete comments
* Firestore rules to ban users for using offensive language
* Styling and overall UX/UI designs

Any bug reports are welcome. Thank you!