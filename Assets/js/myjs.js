
function appearModal(id) {
    listOfIds = ["anime-panel", "men-panel", "noel-panel"];

    var item = document.getElementById(id);
    for(var i=0; i<listOfIds.length; i++)
    {
        var tmp = document.getElementById(listOfIds[i]);
        tmp.style.display = "none";
    }
    item.style.display = "block";
}
