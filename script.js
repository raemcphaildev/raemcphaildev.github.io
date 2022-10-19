function toggleDrawer(){
    let drawer = document.getElementById("drawer");
    console.log("Display is: ")
    console.log(drawer.style.display);
    if (drawer.style.display === "block") {
        drawer.style.display = "none";
    } else {
        drawer.style.display = "block";
    }
};