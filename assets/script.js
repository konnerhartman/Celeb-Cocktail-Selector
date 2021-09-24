var drinkAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var movieAPI = "http://www.omdbapi.com/?apikey=90c34782&t=";

// Fetches cocktail
function fetchData() {
  // Testing that we are grabbing the right item with console.log
  console.log($(this).children('a').text());
  // Sets the drink variable to whatever anchor text is clicked in HTML lists
  var drink = $(this).children('a').text();

  // Fetches our selected drink from the drink API
  fetch(drinkAPI + drink, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  })

  // Returns our response in JSON
  .then(function (response) {
    return response.json();
  })

  // This gathers the data we want and appends it all to the web page by creating new elements within the HTML
  .then(function (data) {

    // Sets variables for the drink name and for the HTML element we append to
    var drinkContent = data.drinks[0];
    var contentDiv = document.getElementById("drinkContent");

    
    // We used .childNodes for the collection of all the drinks selected by a user when they click the list
    // .length is the number of drinks 
    // .length > 1, used 1 because the first item of the index of DrinkContent is Blockbusters and Beverages, 
    // we need to keep it; then use .removeChild to remove the previous child (drink's name, img, ingredients)
    while (contentDiv.childNodes.length > 1) {
      contentDiv.removeChild(contentDiv.lastChild);
    }

    // Gets and renders drink name
    var drinkName = drinkContent.strDrink;
    var title = document.createElement("h3");
    title.innerHTML = drinkName;
    contentDiv.appendChild(title);

    // Gets and renders drink image
    var drinkImage = document.createElement("img");
    drinkImage.src = drinkContent.strDrinkThumb;
    contentDiv.appendChild(drinkImage);

    // Gets and renders drink ingredients 
    var drinkIngredients = document.createElement("ul");
    contentDiv.appendChild(drinkIngredients);
    var getIngredients = Object.keys(drinkContent)
    // We used filter method to create an array filled with all ingredients available from API, and return the ones which are null
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    // We used reduce method to execute the function for each value of the array of drink ingredients, returns a single value which is the function's accumulated result
    .reduce(function (ingredients, ingredient) {
      if (drinkContent[ingredient] != null) {
        ingredients[ingredient] = drinkContent[ingredient];
      }
      return ingredients;
    }, {});

    // We created new element "li" in html to append the list of ingredients that are available from drink API 
    for (var key in getIngredients) {
      var value = getIngredients[key];
      listIngre = document.createElement("li");
      listIngre.innerHTML = value;
      drinkIngredients.appendChild(listIngre);
    }
  });
}

// Fetches movie
function fetchDataMovie() {
  // Testing that we are grabbing the right item with console.log
  console.log($(this).children('span').text());
  // Sets the movie variable to whatever span text is clicked in HTML lists. The span is nested inside each 'li' element and has a 'class = hide' so it is not visiable to the user
  var movie = $(this).children('span').text();

  // Fetches our selected movie from the movie API
  fetch(movieAPI + movie, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  })

  // Returns our response in JSON
  .then(function (response) {
    return response.json();
  })

  // This gathers the data we want and appends it all to the web page by creating new elements within the HTML
  .then(function (data) {
  
    // Sets variables for the drink name and for the HTML element we append to
    var movieContent = data.Title;
    var movieDiv = document.getElementById("movieContent");

    // ???
    while (movieDiv.childNodes.length > 1) {
      movieDiv.removeChild(movieDiv.lastChild);
    }

    // Gets and renders movie title
    var movieName = movieContent;
    var movieTitle = document.createElement("h3");
    movieTitle.innerHTML = movieName;
    movieDiv.appendChild(movieTitle);

    // Gets and renders movie poster
    var moviePoster = document.createElement("img");
    moviePoster.src = data.Poster
    movieDiv.appendChild(moviePoster);

    // Gets and renders Rotten Tomato rating
    var movieRating = document.createElement("p");
    movieRating.innerHTML = "Rotten Tomato: " + data.Ratings[1].Value;
    movieDiv.appendChild(movieRating);
 
    // Gets and renders the plot of movie
    var moviePlot = document.createElement("p");
    moviePlot.innerHTML = data.Plot;
    movieDiv.appendChild(moviePlot);
  });
}

// When a drink is clicked, both functions run
$('.onClick').on('click', fetchData);
$('.onClick').on('click', fetchDataMovie);