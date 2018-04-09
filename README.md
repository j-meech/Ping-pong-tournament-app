# Ping Pong Tournament Generator Project

Technical challenge set at the end of the DevelopMe Coding Fellowship.

## The brief

The exercise is to create a tool which randomly creates pairings for a table tennis tournament from a list of names collected from the user.

Its up to you how you implement this, with JavaScript, React, or PHP, as a web page, or as an app.

Optional advanced features might include:
* ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs
* continued rounds until the final (last 2 players who have won all matches to date play each other)

## To run this projecton your local machine

You will need to have [yarn](https://yarnpkg.com/en/) installed.

On the command line run 

```
git clone git@github.com:j-meech/Ping-pong-tournament-app.git
yarn install
yarn start
```

## Technologies

I chose to use React to create the generator as a web app and Redux and Immutable to store the data.
I styled the app with Sass and compiled it to css via a script in the package.json file and running `yarn run saas` to watch my files.
I version managed the project with git.

## Notes and Wireframes

Initial notes and wireframes can be found [here](https://drive.google.com/open?id=1zDHAbkNBDRoSTjD4xGe5QXVO4kD6gqFU)

## Proccess

From my initial notes I planned out the basics of the app.

It would need:
* an input for the user to enter players names
* a list of the players to enter the tournament with an option of changing them before the tournament is generated
* a button to generate the tournament once all players names were enetered

This would make up the generator part.

Once the tournament was generated the user would need to view the tournament.
This would need:
* the players placed into random pairs for the first round
* the ability to select the winner of each round
* then to move the winners on to the next round matches on so on until there was one winner
* a button to generate a new tournament

This would make up the tournament part.

With this in mind I settled on building the app with React and Redux. I really enjoyed using and learning React on the course and thought it would work well with all these considerations, I also wanted to gain more practice and experience with these technologies, following the advice that the best way to practice and really get to grips with them is to keep building apps!

I decided on at first limiting the number of players in the tournment to 8. Although this would limit the initial functionality of the app I felt this was a standard number for a tournament and would be easy to scale up or down for more or less players (if the number of players is a power of 2) using the same logic. It would also enable me to get a minimal viable product finished before then working on extra features.

#### Form validation

The user can enter the names of the players in the input field they are then displayed below as a list which is dynamically updated. The user shouldn't be able to enter the same name twice, all names should be unique, this would stop any confusion when they are paired up and would also allow me to use the names to identify the players, who one etc in the app. The user shouldn't be able to submit and empty name or a name made of just spaces. The tournament wouldn't gernerate until 8 names were enetered and the user shouldn't be able to enter more than 8 names.

#### Storing data

I decided on storing the initial list of players, the shuffled list and the first round pairs in the initial state/redux store, the components could then access these through the connect function and MapStateToProps. 
Each player would be an object/immutable map so I could stor their name and also how many matches they had won, this would allow me to work out who goes through to the subsequent rounds by filtering the list based on matches won.
I would use local state and controlled components for form updating and validation, disabling buttons and for the next round pairs. 
As I'm still learning React and Redux I find these decisions some of the most difficult, how much to store in the inital state or local state? And looking at my app now I think I could redesign how some of the data is stored, some probably doesn't need to be stored at all and could be worked out when needed, for example the second ond third round match pairs as we know how many matches each player has one.

#### Shuffling

I used a naive method for shuffling the players `players.sortBy(Math.random)` as I am only shuffling 8 this seems adequate, however I have done a bit and realise there are better and more performant methods such as a fisher-yates shuffle and I would look at implementing this in future builds.

#### Styling and UI

At first I thought it would be nice to have both generator and tournament elements on one page as can be seen in my initial wireframes, however it soon became aparent that this could get quite crowded and I made the decision to show the generator initially and hide this when the tournament is generated and then show the tounrament itself, I think this also provides a nicer user experience.

I chose to use the Sass css preprocessor for writing mt css, this allowed me the use of variables and nesting. It also allowed me to keep my stylesheets short and organised for different parts of the app.

I kept the styling simple with a small colour palete used throughout.

For larger screens hte tornament view uses css grid. I chose this so that I could display the tournament in a traditional style with brackets/forks and would stay responsive. I really like this tradtional layout however it did involve a lot of mark-up to style the brackets and I wonder if there is a better way to do this, perhaps using SVGs. It was also clear that this wouldn't work on smaller screen sizes as it would become too crowded and overlap. For these sizes I displayed the games as a simple list of matches. This style of display would also work best if the initial number of players was larger, of if there was an odd number to start with, and I would consider a different layout approach in the future when adding more functionality.

#### Testing

I used chrome dev tools with the React and Redux extensions thoughout the build, I also tested the app in Firefox and Safari.
I used code validators to check my HTML CSS and JavaScript.

#### Bugs

The use of dev tools throughout the build helped me iron out any bugs as I worked. However on testing in Safari I found that the user was able to enter an empty player name, this is not a problem in other browsers. It seems that it is to do with my use of a regex in order to eliminate the spaces however after I tried a few different expressions I have yet to solve it and it is still a problem to be fixed.

## Changes/Lessons learned

Overall I'm happy with the way the finished app is, I met the initial criteria I set for myself, and apart from the bug in Safari it feels fairly robust.

The process has taught me a lot, it has improved my understanding of React and Redux, it has also taught me a lot about time management and planning as this is the first project I have done truly *alone*.

However there are changes I would make moving forward. The functionality of the app is still limited to 8 players and I would like to change this. I have been researching bys, what to do if the initial number of players is not a power of 2 and how to work out the tournament based on this. I have found some formulas to help with this, working out the number of bys and number of matches to find the winner. I've found this fascinating and would like to build the app based on this, and feel I should have taken this approach from the begining rather than playing it safe and limiting myself. 
I would also have approached the styling differently and from a mobile first perspective rather than the other way round as I had done, I feel like this is a more robust way of working and makes more sense.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
