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

## API
Below are the available properties to pass into the model validation object
| Properties        | Type    | Description                                        |
|-------------------|---------|----------------------------------------------------|
| required          | boolean | Defines if the current variable is required or not |
| minLength         | number  | Define the minimum length for a string             |
| maxLength         | number  | Define the maximum length for a string             |
| minValue          | number  | Define the minimum value for a number              |
| maxValue          | number  | Define the maximum value for a number              |
| specialCharacters | boolean | Define if special characters are allowed           |
| isEmail           | boolean | Define if it should follows an email regex format  |
