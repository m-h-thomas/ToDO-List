/* Global Variables */
let allItems = []; //holds added items
let userInput = ''; //holds user inputs

/* Dynamically displays items from allItems array */
const displayItems = () => {
  let allItemsList = document.querySelector('#all-tasks-list');
  let listContents = allItems.map((elm) => `<div><button class="item">${elm}</button><button class='x'>x</button></div>`)
  .reduce((acc, elm) => acc += elm, '');
  allItemsList.innerHTML = listContents;
};

/* On button click, grabs input box value, adds to allItems array, and displays */
const getInputValue = () => {
  let inputBox = document.querySelector('#input-box');  //creates a variable to hold data from HTML line 20
  let addBtn = document.querySelector('#add-item-button'); //creates a variable to easily call the button from HTML line 21

  /* Places eventListener on newly created inputBox variable that is
  directing the listener to the HTML element #input-box */
  inputBox.addEventListener('input', (eventObj) => {
    userInput = eventObj.target.value;
  });

  /* Places eventListener on newly created addBtn variable that,
  when clicked, executes the arrow function to add the data held in userInput to
  the allItems array, then resets the inputBox field, then runs the displayItems function */
  addBtn.addEventListener('click', () => {
    allItems.push(userInput);
    inputBox.value = '';
    displayItems();
  });
};

getInputValue(); //run getInputValue fuction

/* Changes '.item' button class when clicked */
const changeButtonStyle = () => {
  let allItemList = document.querySelector('#all-items-list');
  allItemList.addEventListener('click', (eventObj) => {
    if (eventObj.target.tagName === 'BUTTON' && eventObj.target.className !== 'x'){
      let newClass = eventObj.target.className === 'item' ? 'item-crossed' : 'item';
      eventObj.target.className = newClass;
    }
  });
};

changeButtonStyle(); //run changeButtonStyle function