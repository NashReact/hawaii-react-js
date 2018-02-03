This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

~~Below you will find some information on how to perform common tasks.<br>~~
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## About

This reporitory contains a humble ReactJS game where users click the name of a hawaiian island to earn points. 

Users have 30 seconds to click as many correct names as possible. Though limited in scope, the base implementation demonstrates a couple stateless componens, and one stateful component.

You can play it at [http://namethatisland-js.s3-website-us-east-1.amazonaws.com/](http://namethatisland-js.s3-website-us-east-1.amazonaws.com/).

Over the next several months, this app wil serve as a template that NashReact attendees can refactor into a variety of non-JavaScript React implementations.

## Getting setup
To see the app in action, simply clone the repo, `yarn && yarn start`.  
To run the tests (`TODO - write tests`), simply `yarn test`. 

## SVGs and CSS
Inside the `src` directory, you will find an `img` directory containing SVGs of all the islands.

In the `src` directory there is a stylesheet, `App.css`, that contains styles to put the islands where they belong.

To save time and energy, I personally will be copying the images and styles to my subsequent implementations.

To make sure things look sorta right, make sure to wrap each svg in a div with a className that corresponds to the name of the island.

Island classes are absolutely positioned, so wrap the islands in a positioned (e.g. relative) div- if you put the islands in div with the `ocean` class, all should look dandy.

See App.js and Island.js for examples.

All the images and styles were created within the span of an episode of flip-or-flop, so feel free to do your own thing here or submit a pr if you want to do something nice.
