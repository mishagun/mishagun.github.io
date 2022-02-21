function menu_function() {
    var x = document.getElementById("myheader");
    if (x.className === "header") {
      x.className += " responsive";
    } 
    else if (x.className === "header hebrew_menu") {
      x.className += " responsive";
    } 
    else if (x.className === "header responsive") {
      x.className = "header";
    }
    else {
      x.className = "header hebrew_menu";
    }
  }