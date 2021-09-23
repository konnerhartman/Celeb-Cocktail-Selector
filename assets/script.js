// API links 
// cocktails - https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// movies - http://www.omdbapi.com/?apikey=90c34782&t=

/*$(document).ready(function(){
  $('select').formSelect();
});*/

var movie_drink = [
  {
  movie_name : "Big Lebowski",
  drink_name : "White Russian"
  },
  {
  movie_name : "The Blues Brothers",
  drink_name : "Orange Whip"
  },
  {
    movie_name : "Casino Royale",
    drink_name : "Vesper"
     
  },
  {
    movie_name : "Mad Men",
    drink_name : "Old-Fashioned"
    
  },
  {
    movie_name : "Some Like it Hot",
    drink_name : "Manhattan"
    
  },
  {
    movie_name : "Groundhog Day",
    drink_name : "Vermouth"
    
  },
  {
    movie_name : "Sex and the City",
    drink_name : "Cosmopolitans"
    
  },
  {
    movie_name : "Casablanca",
    drink_name : "French 75"
    
  },
  {
    movie_name : "Once Upon A Time In Hollywood",
    drink_name : "Whiskey Sour"
    
  },
  {
    movie_name : "American Psycho",
    drink_name : "A. J."
    
  },
  {
    movie_name : "Betty Blue",
    drink_name : "Tequila Slammer"
    
  }
];
// Fetches movie
function fetchDataMovie (movieName) {

    console.log($(this).children('a').text());
    var movie = $(this).children('a').text();
   
  fetch('http://www.omdbapi.com/?apikey=90c34782&t=' + movieName, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.Title);
    // render movie name's data
    var movieContent = data;
    var movieDiv = document.getElementById("movieContent");

    // used .childNodes for the collection of all the movies selected by a user when they click the list
    // .length is the number of movies
    // .length > 1, used 1 because the first item of the index of movieContent is Blockbusters, 
    // we need to keep it; then use .removeChild to remove the previous child (movie's name, poster, actors)
    while (movieDiv.childNodes.length > 1) {
      movieDiv.removeChild(movieDiv.lastChild);
    }
    var movieName = movieContent.Title;
    var titleEl = document.createElement("h3");
    titleEl.innerHTML = movieName;
    movieDiv.appendChild(titleEl);

    // render poster's data
    var moviePoster = document.createElement("poster");
    moviePoster.src = movieContent.Poster;
    movieDiv.appendChild(moviePoster);
    document.body.style= "url('" + movieContent.Poster + "')";

    // render movie's plot
    var moviePlot = movieContent.Plot;
    var plotEl = document.createElement("h3");
    plotEl.innerHTML = moviePlot;
    movieDiv.appendChild(plotEl);


    });
}


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
      drink_selected = drinkName;

      var movie_related = movie_drink.filter(function (Object) {
        return Object.drink_name = 
      })
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





































