window.onload = function() { //only starts when the screen loaded

  const isMobile = navigator.userAgentData.mobile; //resolves true/false
  if (isMobile == true) {
    console.log('mobile');
    document.body.style.background = "#333333";
    document.getElementById("p-notice").style.opacity = 1;
  }
  else{
    var notice = document.getElementById('p-notice')
    notice.parentNode.removeChild(notice)
  }

  //Variables
  var prevScrollpos = window.pageYOffset;
  var slide_button = document.getElementById("slide-button");
  var visible = false;

  //Click event for slide button
  document.getElementById('slide-button').addEventListener('click', function (e) { //Add the event

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

  window.onscroll = function() { //Triggers when scrolling
    //Variables
    var currentScrollPos = window.pageYOffset; //Changes currentScrollPos to active scroll position
    
    if (prevScrollpos > currentScrollPos) { //If previous is higher than current
      document.getElementById("bar").style.top = "0";
    }

    else {
      document.getElementById("bar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  function checkInputFocus() {
    //Variables
    var s_input = document.getElementById("search-input");
    var s_icon = document.getElementById("s-icon");
    var s_bar = document.getElementById("s-bar");

    if (document.activeElement == s_input){ //If input is focus
      s_bar.style.width = "20%";
      s_bar.style.filter = "drop-shadow(0px -3px 5px #FFFFFF) drop-shadow(0px 3px 5px #FFFFFF)";
      //s_bar.style.top = "-10%";

      if (s_input && s_input.value) { //If it exists and if it has letter(s) in it
        s_icon.style.opacity = 0; //Invisible
      }

      else {
        s_icon.style.opacity = 1; //Visible
      }
      
    }

    else {
      s_bar.style.filter = "drop-shadow(0px -3px 5px #000000) drop-shadow(0px 3px 5px #000000)"
      s_bar.style.width = "12.5%";
      //s_bar.style.top = "0";  
      
      if (s_input && s_input.value) { //If it exists and if it has letter(s) in it
        s_icon.style.opacity = 0; //Invisible
      }
      else{
        s_icon.style.opacity = 1; //Visible
      }

    }
  }

  setInterval(checkInputFocus, 5); //Do this function every 5 miliseconds
};
