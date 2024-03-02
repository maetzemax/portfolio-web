/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function setNavigationClassName() {
    var x = document.getElementById("navigationbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}