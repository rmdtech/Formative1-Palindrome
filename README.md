# Formative 1 - Palindrome Checker
## Project Introduction
This project allows you to test if a given string is considered a palindrome.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### What is a palindrome?
A palindrome is a word, sentence, verse, or even number that reads the same backward or forward. It derives from Greek roots that literally mean “running back” (palin is “again, back,” and dromos, “running.”) The word appears to have been created in English based on these roots in the early 1600s. [Dictionary.com](https://www.dictionary.com/e/palindromic-word/)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Tests
This project uses Jest as a testing framework and can be run by using "npm test" or "npx jest".

### What is tested?
app.test.js contains tests for the palindrome checking tool. The test suite is made up of 4 simple tests.

#### Test 1 - Empty String
An empty string should return true, as nothing reversed is still nothing.

#### Test 2 - Single Character
A single character should also be a palindrome, as 'A' reversed is still 'A'.

#### Test 3 - Non-Palindrome
A non-palindrome string should return false, e.g. 'hello' reversed is 'olleh' and therefore not a palindrome.

#### Test 4 - Palindrome
A palindrome string should return true, e.g. 'racecar' reversed is 'racecar' and therefore a palindrome.
 

