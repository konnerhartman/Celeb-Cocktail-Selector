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


// Attempting to get second select dropdown to appear
// function userSpiritValue () {
//     if (spirits.value == "whiskey") {
//         whiskey.removeClass("#hide")
//     }
// }

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
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',

  })
    .then(function (response) {
      if(response.ok) {
      return response.json();
      } else {
        console.log("ERROR");
      }
    })
    .then(function (data) {
      console.log(data);
      
      
  var cocktail = data.drinks[0];
  var contentDiv = document.getElementById("drinkContent");
  var cocktailName = cocktail.strDrink;
  var drinkEl = document.createElement("h1");
  drinkEl.innerHTML = cocktailName;
  contentDiv.appendChild(drinkEl);

  


     // document.getElementById("drinkContent").innerHTML += data;

      // showDrinkContent = content => {
       var contentDiv = document.getElementById("drinkContent");

         data.drinks.forEach(drink => {
        var drinkEl = document.createElement('p');
           drinkEl.innerText = `strDrinkThumb:
           
           ${drink.strDrinkThumb}`;
          contentDiv.append(drinkEl);
          });
    });
}

$(this).children('a').text
//fetchData();
$('.secondclick').on('click', fetchData);

//output the data (cocktail's name) in HTML

// added on Sat afternoon
/*var spiritObject = {
  "Whiskey": {
    "Whiskey Sour": [""],
    "Old-Fashioned": [""],
    "The Manhattan": [""],
  },
  "Vodka": {
    "White Russian": [""],
    "Vesper": [""],
  "Cosmopolitan": [""],
  },
  "Tequila": {
    "Tequila Sunrise": [""],
    "Margarita": [""],
  },
  "Gin": {
    "French 75": [""],
    "Vesper": [""],
  },
  "Rum": {
    "Pina Colada": [""],
    "Mai Tai": [""],
  },
  "Scotch": {
    "Lagavulin": [""],
    "J&B": [""],
}
}
window.onload = function() {
  var spiritSel = document.getElementById("spirit");
  var cocktailSel = document.getElementById("cocktail");
  for (var x in spiritObject) {
    spiritSel.options[spiritSel.options.length] = new Option(x, x);
  }
  spiritSel.onchange = function() {
    //empty Chapters- and cocktails- dropdowns
    cocktailSel.length = 1;
    //display correct values
    for (var y in spiritObject[this.value]) {
      cocktailSel.options[cocktailSel.options.length] = new Option(y, y);
    }
  }
}
*/

/* Note on Sunday afternoon
1. Created a container for content
2. we need to remove some drinks because they're not available in API: Gin Martini, The Manhattan (When I removed The, it worked, 1 item in array), Lagavulin,
J&B (too many options), Margarita.
I added Vodka Martini to Vodka list.
3. Commented out var srpiritObject and window.onload function => the page works fine without it
4. added eventListener for "li"

Next step: need to split the key-value pair from drink array

5. ***to show info from the fetch you will need to loop the array and show each element not the whole object



*/

