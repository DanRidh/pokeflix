
<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="src/assets/pokeflix_logo.png" alt="pokeflix" width="300"></a>
  <br>
  Pocket Change Movie Searcher (and favoriter)
  <br>
</h1>

<h4 align="center">A simple movie searcher and favorite list storage app built with <a href="https://react.dev/" target="_blank">React</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-test">How To Test</a>
</p>

![pokeflix_demo](https://user-images.githubusercontent.com/75971735/230759403-f8be0e5e-2e0b-44c6-88af-8338bc2da6fc.gif)

## Key Features

* Design based on [pocketchange](https://www.pocket-change.jp/en/) and [pocketpay](https://pay.pocket-change.jp/) website UI
  - Using MUI (MaterialUI) and some custom styling with styled()
* Uses redux, redux-toolkit for state management and redux-persist for persistant storage when storing favorites
* Using the [OMDB API](https://www.omdbapi.com/) to fetch the movie details
* Add or remove movies from your favorites list and view them on your favorites page
  - unless you clear your cache then unfortunately its all gone :cry:
* Pagination using MUI Pagination component
* Unit testing with Jest

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/DanRidh/pokeflix.git

# Go into the repository
$ cd pokeflix

# Install dependencies
$ npm i --force
# This is if you're facing some weird dependency issues cause by jest and npm

# Create a .env file in the root of the directory, following the template from .env.template in the repo
REACT_APP_OMDB_API_URL = http://www.omdbapi.com/
REACT_APP_OMDB_API_KEY = 'Add your OMDB Api key here'
# If you don't have an API key or are just too lazy to register for one, go ahead and use mine!
# Just replace the 'Add your OMDB Api key here' in .env with c3d21366

# Run the app
$ npm start
```

## How to Test
```bash
# Assuming the above setup was all good, you can just run this in the project root
$ npm test
```

## Special Thanks To
* Coffee :coffee:
