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