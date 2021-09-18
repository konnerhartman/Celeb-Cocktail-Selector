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

function userSpirit () {
    if ($spirits.value == "whiskey") {
        $whiskey.removeClass("#hide")
    }
}

userSpirit();
