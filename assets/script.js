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
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink, {
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

      // document.getElementById("drinkContent").innerHTML = data;
      // showDrinkContent = content => {
      // var contentDiv = document.getElementById("drinkContent");

      //   content.forEach(drink => {
      //     var drinkEl = document.createElement('p');
      //     drinkEl.innerText = `strIngredient:
      //     ${drink.strIngredient1}`;
      //     contentDiv.append(drinkEl);
      //     });
      //   }
      // render name's data
      var drinkContent = data.drinks[0];
      var contentDiv = document.getElementById("drinkContent");

      // used .childNodes for the collection of all the drinks selected by a user when they click the list
      // .length is the number of drinks 
      // .length > 1, used 1 because the first item of the index of DrinkContent is Blockbusters and Beverages, 
      // we need to keep it; then use .removeChild to remove the previous child (drink's name, img, ingredients)
      while (contentDiv.childNodes.length > 1) {
        contentDiv.removeChild(contentDiv.lastChild);
      }
      var drinkName = drinkContent.strDrink;
      var title = document.createElement("h3");
      title.innerHTML = drinkName;
      contentDiv.appendChild(title);

      // render image's data
      var drinkImage = document.createElement("img");
      drinkImage.src = drinkContent.strDrinkThumb;
      contentDiv.appendChild(drinkImage);
      document.body.style.backgroundImage = "url('" + drinkContent.strDrinkThumb + "')";

      // render ingredients data

      var drinkIngredients = document.createElement("ul");
      contentDiv.appendChild(drinkIngredients);
      var getIngredients = Object.keys(drinkContent)
      // filter() method creates an array filled with all array elements that past the test
        .filter(function (ingredient) {
          return ingredient.indexOf("strIngredient") == 0;
        })
      // reduce() method returns a single value which is an accumulated result => returns the accumulated result
        .reduce(function (ingredients, ingredient) {
          if (drinkContent[ingredient] != null) {
            ingredients[ingredient] = drinkContent[ingredient];
          }
          return ingredients;
        }, {});

      for (var key in getIngredients) {
        var value = getIngredients[key];
        listIngre = document.createElement("li");
        listIngre.innerHTML = value;
        drinkIngredients.appendChild(listIngre);
      }
    });

}
$(this).children('a').text;

$('.secondclick').on('click', fetchData);


// Midnight note:
// *Things done:

// 1. changed some drinks because some of them are null when rendering
// 2. was able to display drink's data
// 3. fixed the content displayed on the screen (only display 1 item at a time, 
// before that, the previous drinks stay on the page)
// 4. 

// *Things to be done on Wednesday
// 1. sort the movies out to match with drinks
// 2. pull data from movie API
// 3. need to update new version of jQuery from 1 to 3

















// Big Lebowski :: White Russian (worked)
// The Blues Brothers :: Orange Whip (worked, added to the html)
// Casino Royale :: Vodka "Vesper" Martini (worked)
// Mad Men :: Old-Fashioned (worked)
// Some Like it Hot ::  Manhattan (worked)
// Groundhog Day :: Sweet Vermouth on the Rocks with a Twist (worked, had to change the name to "Vermouth")
// Lost in Translation :: Suntory Whiskey     (null)
// Sex and the City :: Cosmopolitans (worked)
// Casablanca :: French 75 (worked)
// Once Upon A Time In Hollywood :: Whiskey Sour (worked)
// American Psycho ::  J&B straight and a Corona (worked if changed to A. J.)
// Parks & Rec // Ron Swanson :: Lagavulin Single Malt Scotch Whisky (null  => deleted the li)
// Silence of the Lambs ::  Chianti (N/A wine not cocktail)
// Betty Blue :: Tequila Slammer
// also removed Gin Martini











// fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("error");
//     }
//   })
//   .then(data => displaydrink(data))
//   .catch((error) => console.error("error", error));

// function displaydrink(data) {

//   var drink = data.drinks[0];
//   var drinkDiv = document.getElementById("drink");    

//   // renders the name of the drink
//   var drinkName = drink.strDrink;
//   var h3 = document.createElement("h3");
//   drinkDiv.appendChild(h3);

//   // renders the image of the drink
//   var drinkImg = document.createElement("img");
//   drinkImg.src = drink.strDrinkThumb;
//   drinkDiv.appendChild(drinkImg);
//   document.body.style.backgroundImage = "url('" + drink.strDrinkThumb + "')";

//   // renders the ingredients of the drink 
//   var drinkIngredients = document.createElement("ul");
//   drinkDiv.appendChild(drinkIngredients);

//   var getIngredients = Object.keys(drink)
//     .filter(function (ingredient) {
//       return ingredient.indexOf("strIngredient") == 0;
//     })
//     .reduce(function (ingredients, ingredient) {
//       if (drink[ingredient] != null) {
//         ingredients[ingredient] = drink[ingredient];
//       }
//       return ingredients;
//     }, {});

//   for (let key in getIngredients) {
//     let value = getIngredients[key];
//     listItem = document.createElement("li");
//     listItem.innerHTML = value;
//     drinkIngredients.appendChild(listItem);
//   }

// }



