// // console.log('My code is running');
// // console.log('My code is still running');

let listItems = []; //array to hold to do list items

function addToList(...task) {
  listItems.push(task);
}

addToList('check emails', 'complete project', 'go to gym', 'read');

let alteredList = listItems.reduce((acc, item) => {
  return acc + item
}, "")
console.log(listItems);

console.log(alteredList);

document.addEventListener('DOMContentLoaded', function() {
  for (i = 0; i < listItems.length; i++) {
    let li = document.createElement('li');
    li.innerText = listItems[i];
    myList.appendChild(li);
  }
})