// API links 
// cocktails - https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// movies - http://www.omdbapi.com/?apikey=90c34782&t=

var spirits = document.getElementById("userSpirits");
var whiskey = document.getElementById("userWhiskey");
var vodka = document.getElementById("userVodka");
var gin = document.getElementById("userGin");
var rum = document.getElementById("userRum");
var tequila = document.getElementById("userTequila");
var contentBox = document.getElementById("content")

/*$(document).ready(function(){
  $('select').formSelect();
});*/


// Fetches movie
function fetchDataMovie() {
  fetch('http://www.omdbapi.com/?apikey=90c34782&t=casino+royale', {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
  });
}
fetchDataMovie();

// Fetches cocktail
function fetchData() {
  console.log($(this).children('a').text());
  var drink = $(this).children('a').text();
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ drink, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
    
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    document.getElementById("drinkContent").innerHTML = data;
    showDrinkContent = content => {
    var contentDiv = document.getElementById("drinkContent");
    
      content.forEach(drink => {
        var drinkEl = document.createElement('p');
        drinkEl.innerText = `strIngredient:
        ${drink.strIngredient1}`;
        contentDiv.append(drinkEl);
        });
      }
    
    
  });
}  