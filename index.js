// console.log('My code is running');
// console.log('My code is still running');

let listItems = []; //array to hold to do list items

function addToList(...task) {
  listItems.push(task);
}

addToList('check emails', 'complete project', 'go to gym', 'read');
console.log(listItems);