function toggleDrawer(){
    let drawer = document.getElementById("drawer");
    if (drawer.style.display === "block") {
        drawer.style.display = "none";
    } else {
        drawer.style.display = "block";
    }
};

function viewSection(section){
    console.log(section);
    drawer.style.display = "none";
    // document.getElementById(section).scrollIntoView({block: "nearest", inline: "nearest"});
    document.getElementById(section).scrollIntoView();
}