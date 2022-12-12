var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        console.log('scrolldown')
    //document.getElementById("bar").style.animation = "barup 0.5s";
    } else {
        console.log('scrollup')
    //document.getElementById("bar").style.animation = "bardown 0.5s";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);