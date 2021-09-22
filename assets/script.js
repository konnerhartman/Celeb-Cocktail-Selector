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


// // Fetches movie
// function fetchDataMovie() {
//   fetch('http://www.omdbapi.com/?apikey=90c34782&t=casino+royale', {
//     method: 'GET',
//     credentials: 'same-origin',
//     redirect: 'follow',
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
      
//   });
// }
// fetchDataMovie();

// Fetches cocktail
function fetchData() {
  console.log($(this).children('a').text());
  var drink = $(this).children('a').text();
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php" {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
    
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    
    var drink = data.drinks[0];
    var drinkDiv = document.getElementById("drink");

    //renders name of drink to the page//
  
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
      function displaydrink(data) {
 
        var drink = data.drinks[0];
        var drinkDiv = document.getElementById("drink");    
       
        // renders the name of the drink
        var drinkName = drink.strDrink;
        var h3 = document.createElement("h3");
        drinkDiv.appendChild(h3);
       
        // renders the image of the drink
        var drinkImg = document.createElement("img");
        drinkImg.src = drink.strDrinkThumb;
        drinkDiv.appendChild(drinkImg);

       
        // renders the ingredients of the drink 
        var drinkIngredients = document.createElement("ul");
        drinkDiv.appendChild(drinkIngredients);
       
        var getIngredients = Object.keys(drink)
          .filter(function (ingredient) {
            return ingredient.indexOf("strIngredient") == 0;
          })
          .reduce(function (ingredients, ingredient) {
            if (drink[ingredient] != null) {
              ingredients[ingredient] = drink[ingredient];
            }
            return ingredients;
          }, {});
       
        for (let key in getIngredients) {
          let value = getIngredients[key];
          listItem = document.createElement("li");
          listItem.innerHTML = value;
          drinkIngredients.appendChild(listItem);
        }
       
      }
    
  });
}  

