// API links 
// cocktails - www.thecocktaildb.com/api/json/v1/1/search.php?s=
// movies - http://www.omdbapi.com/?apikey=90c34782&t=

var $spirits = document.getElementById("#userSpirits")
var $whiskey = document.getElementById("#userWhiskey")
var $vodka = document.getElementById("#userVodka")
var $gin = document.getElementById("#userGin")
var $rum = document.getElementById("#userRum")
var $tequila = document.getElementById("#userTequila")
$(document).ready(function(){
  $('select').formSelect();
});

fetch('http://www.omdbapi.com/?apikey=90c34782&t=star+wars', {
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

  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka', {
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
  



  


  // fetch request gets drinks's data

/*function userSpirit() {
  if ($spirits.value == "whiskey") {
    $whiskey.removeClass("#hide")
  }
}

userSpirit();
document.addEventListener('click',)*/
