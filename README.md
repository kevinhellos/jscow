# jscow
jscow is a lightweight model based validation library for Javascript

## Installation via npm
```sh
npm i @kevinhellos/jscow
```

## Usage
```js
// Sample usage
const { validate } = require("@kevinhellos/jscow");

// Create a target
var username = "@bob1234";

// Define a validation model
var usernameModel = {
    required: true,
    minLength: 8,
    maxLength: 16,
    specialCharacters: false,
}

// Checks a target with the validation model
// use the validate(itemToValidate).with(modelValidation)
if (validate(username).with(usernameModel)) {
    console.log("Username is valid");
}
else {
    console.log("Username is invalid");
}
```