// API links 
// cocktails - https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// movies - http://www.omdbapi.com/?apikey=90c34782&t=

var body = document.querySelector('body');
var spirits = document.getElementById("userSpirits");
var whiskey = document.getElementById("userWhiskey");
var vodka = document.getElementById("userVodka");
var gin = document.getElementById("userGin");
var rum = document.getElementById("userRum");
var tequila = document.getElementById("userTequila");


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


// Fetch Movie API 
function fetchMovieData() {
  console.log($(this).children('div').text());
  var movie = $(this).children('div').text();
  fetch('http://www.omdbapi.com/?apikey=90c34782&t=' + movie, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',

  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    
    })
  }

    // render title of movie
    var contentDiv = document.getElementById("movieContent");

    // we need to keep it; then use .removeChild to remove the previous child (movie name, img, actors)
    while (contentDiv.childNodes.length > 1) {
      contentDiv.removeChild(contentDiv.lastChild);
    }
    var movieName = movieContent.poster;
    var title = document.createElement("h3");
    title.innerHTML = movieName;
    contentDiv.appendChild(title);

    // render movie poster data
    var moviePoster = document.createElement("poster");
    moviePoster.src = movieContent.poster;
    contentDiv.appendChild(movieposter);


    // render actors data
    var movieactors = document.createElement("ul");
    contentDiv.appendChild(movieactors);
    var getactors = Object.keys(movieContent)
    // filter() method creates an array filled with all array elements that past the test
      .filter(function (actors) {
        return actors.indexOf("actors") == 0;
      })
      .reduce(function (actors, actors) {
        if (movieContent[actors] != null) {
          actors[actors] = movieContent[actors];
        }
        return actors;
      }, {});


$(this).children('a').text;

$('.secondclick').on('click', fetchData);
