Revisiting Makers Bowling Challenge to start getting gitHub repo lights going green again. Originally did the Bowling scorecard challenge using Ruby. Instead using Javascript to practice a simple project set up and reconsolidating knowledge of using TDD with Jest and OOPs. 
Assistance from a Bowling Examplar video from the Makers course.

- Already forked and cloned the original repo
- Initialised project, created package.json file
- Installed Jest testing for this project
- .gitignore file already created to ignore .DS_Store & node_modules

- Looked at how bowling scores work and decide the classes/functions to be extrapolated from that.
- Need a 'Frame' class where instances of rolls are created and the result of those rolls are the following functions - addRolls, a score function (to keep a running total) and the functions to check for strikes and spares within the game, with spares being able to be carried over to the next roll

- Need a Game class to keep track of the Frames as they are played, with the ability to keep score of the result of each instance of the Frame class.

- Created first test to test for a first roll of a frame
- Test failing with expected outcome of 'Frame is not defined'
- Continuing to check git status & do regular adds/commits/pushes to gitHub

- Created Frame class with simple addRoll function being expected to be returned in frame.js file. made sure class can be exported and frame.js file is required in test file. Initial test passing. 

- Added test for multiple rolls.
- Added expectation to receive instances of rolls for each frame to equal 2
- Created instances of rolls within Frame class using constructor

- Add test within frame.test.js file to check for .score within each frame

- Installed 'lodash' with useful methods to keep track of score - instead of a 'for' loop, using lodash 'sum' method to add rolls together
- Added score function to frame.js file/Frame class
- Calling 'lodash' package at top of frame.js file

- Added test within .score test block, for a complete frame with 2 rolls of 4 & 5 with the expectation of that frame equalling 9 - test passes

- Added test for checking if no strike (if 'strike' is false) - fails as strike function not defined
- Added strike function that returns false - test passing

- Added test to check if strike is rolled. Strike function had 'false' return hardcoded for previous test, so changed to an instance of a first roll returning a strike, so true is returned if a strike, false if a strike not returned.

- Tests added to check if spares are false & true - spares function added to return a spare is true if scored and false if not.

- Extra test added to check if a strike is scored after a spare roll (to return the opposite of a strike game returning true)
- Spare function can respond with false if a strike is scored.

- Game test created to check for rolls
- Simple Game class framework created - test passing.

- Moving onto more complex function of adding each frame as they're played with a length of 2 rolls per frame. Even with referring to a coding example it is a difficult process but gleaning useful reminders such as not to define a constant but use 'let' for a variable whose value needs to change, such as the current Frame.
- Added test coverage with npx jest --coverage to get more visibility on what is happening with each test

- Added method to get current frame so code is not repeating itself (DRY)

- Refactored code to add useful Javascript 'get' method used to call #currentFrame and to focuse on keeping code DRY

Bowling Challenge
=================

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am. 

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
