window.onload = function() { //only starts when the screen loaded
  var prevScrollpos = window.pageYOffset;
  var slide_button = document.getElementById("slide-button");
  var visible = false;
  document.getElementById('slide-button').addEventListener('click', function (e) {
    if (visible == true) {
      document.getElementById('slide-bar').style.top = "-100%";
      document.getElementById('slide-button').style.rotate = "0deg";
      document.getElementById('slide-button').style.filter = "drop-shadow(0px -3px 5px #000000) drop-shadow(0px 3px 5px #000000)";
      visible = false;
    }

    else{
      document.getElementById('slide-bar').style.top = "0%";
      document.getElementById('slide-button').style.rotate = "90deg";
      document.getElementById('slide-button').style.filter = "drop-shadow(0px -3px 5px #FFFFFF) drop-shadow(0px 3px 5px #FFFFFF)";
      visible = true;
    }
    
  });

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("bar").style.top = "0";
    } else {
      document.getElementById("bar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  function checkInputFocus() {
    var s_input = document.getElementById("search-input");
    var s_icon = document.getElementById("s-icon");
    var s_bar = document.getElementById("s-bar");

    if (document.activeElement == s_input){
      console.log("has focus");
      s_bar.style.width = "20%";
      //s_bar.style.top = "-10%";
      s_bar.style.filter = "drop-shadow(0px -3px 5px #FFFFFF) drop-shadow(0px 3px 5px #FFFFFF)";
      if (s_input && s_input.value) {
        s_icon.style.opacity = 0;
      }
      else {
        s_icon.style.opacity = 1;
      }
      
    }
    else {
      s_bar.style.filter = "drop-shadow(0px -3px 5px #000000) drop-shadow(0px 3px 5px #000000)"
      s_bar.style.width = "12.5%";
      //s_bar.style.top = "0";  

      
      if (s_input && s_input.value) {
        s_icon.style.opacity = 0;
      }
      else{
        s_icon.style.opacity = 1;
      }
    
    }
  }

  setInterval(checkInputFocus, 5);
};
