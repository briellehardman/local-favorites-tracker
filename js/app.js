let myFavorite = {

    name: 'Zolis',

    category: 'restaurant',

    rating: 5,

    notes: 'One of my favorite places',

    dateAdded: 'today'

};

console.log(myFavorite.name);

let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';

let today = new Date().toLocaleDateString();

console.log(today);

console.log(myFavorite);

console.log(typeof myFavorite.name);

console.log(typeof myFavorite.rating);

let placeName = 'Zolis';

let rating = 5;

console.log(placeName + ' - ' + rating + '/5');

console.log('⭐'.repeat(rating) + ' ' + placeName);


function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('Starbucks', 5);   // "Starbucks has 5 stars!"


const nameInput = document.getElementById('name');
console.log(nameInput.value);   // what the user typed


const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();   // stop the page reload
    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);