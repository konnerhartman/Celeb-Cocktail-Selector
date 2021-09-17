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
