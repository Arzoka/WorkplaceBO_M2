//Imports

import { variables } from "./variables.js";
import { functions } from "./functions.js";

//Start javascript on load

window.onload = function() {

    //Starts load functions
    functions.StartUp();

    //Switch pages
    document.getElementById('home-button').addEventListener('click', () => {
        functions.SwitchPage("home");
    });

    document.getElementById('info-button').addEventListener('click', () => {
        functions.SwitchPage("info");
    });

    document.getElementById('history-button').addEventListener('click', () => {
        functions.SwitchPage("history");
    });

    document.getElementById('game-button').addEventListener('click', () => {
        functions.SwitchPage("game");
    });

    

    //Change language to english
    document.getElementById('english-button').addEventListener('click', () => {
        functions.ChangeLanguage('english');
    });

    //Change language to dutch
    document.getElementById('dutch-button').addEventListener('click', () => {
        functions.ChangeLanguage('dutch');
    });

    //Change theme
    document.getElementById('toggle-theme').addEventListener('click', () => {
        functions.ChangeTheme();
    });

    //Animate top bar border (proud of this one :pepeblush: )
    document.addEventListener('mousemove', e => {
        let x = e.clientX - window.innerWidth
        let y = e.clientY - window.innerHeight;
        y = y *= -1;
        let stylex = x + window.innerWidth / 2;
        document.getElementById('topbarborder').style.left = stylex +"px";
        document.getElementById('topbarborder').style.opacity = 0 + y / 500;
    });

    function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}

    function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}

    checkSession();

    function checkSession(){
    var c = getCookie("visited");
    if (c === "yes") {
        console.log('already visited')
    } else {
        functions.FirstTheme();
    }
    setCookie("visited", "yes", null);
    }
}
if (window.location.href.includes("home.html") || window.location.href.includes("game.html")) {
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    loop: true,
    
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    });
}

//Intervals
setInterval(functions.Interval,10);