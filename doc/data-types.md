let message = "This is my message"; //string
let amount = 29.99; //number
let isApproved = false; //boolean

let firstName; //undefined
//OR
let firstName = undefined; //undefined

let lastName = null; //null

<input type="text" id="first-name" />

let firstNameInput = document.getElementById("first-name");
//object (generic)
// HTMLElement (more specific)
// HTMLInputElement
// see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

<input type="date" id="numberOfDaysInput" />

let myObject = {
first: 'John',
last: 'Doe'
age: 26
}

let firstNameInput = {
value: 'John'
innerText: null
}

let numberOfDaysInput = {
value: '1'
}

let webCam = {
zoom: 45,
isOn: true,
name: 'C920'
brand: 'Logitech'
}
