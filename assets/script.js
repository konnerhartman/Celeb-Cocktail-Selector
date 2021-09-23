// API links 
// cocktails - https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// movies - http://www.omdbapi.com/?apikey=90c34782&t=

// Fetches movie
function fetchDataMovie() {
  console.log($(this).children('span').text());
  var movie = $(this).children('span').text();
  fetch('http://www.omdbapi.com/?apikey=90c34782&t=' + movie, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  
    var movieContent = data.Title;
    var movieDiv = document.getElementById("movieContent");

    while (movieDiv.childNodes.length > 1) {
      movieDiv.removeChild(movieDiv.lastChild);
    }
    var movieName = movieContent;
    var movieTitle = document.createElement("h3");
    movieTitle.innerHTML = movieName;
    movieDiv.appendChild(movieTitle);

    var moviePoster = document.createElement("img");
    moviePoster.src = data.Poster
    movieDiv.appendChild(moviePoster);

    var movieRating = document.createElement("p");
    movieRating.innerHTML = "Rotten Tomato: " + data.Ratings[1].Value;
    movieDiv.appendChild(movieRating);
 
    var moviePlot = document.createElement("p");
    moviePlot.innerHTML = data.Plot;
    movieDiv.appendChild(moviePlot);
  });
}
$('.secondclick').on('click', fetchDataMovie);

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
    // document.body.style.backgroundImage = "url('" + drinkContent.strDrinkThumb + "')";

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