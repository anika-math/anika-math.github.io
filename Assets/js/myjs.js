let listOfIds = ["starter-panel", "anime-kaguya-panel","hotdog-panel", "readme-panel","anime-panel", "men-panel", "noel-panel", "fancam-panel"];


function appearModal(id) {

    var item = document.getElementById(id);
    for(var i=0; i<listOfIds.length; i++)
    {
        var tmp = document.getElementById(listOfIds[i]);
        tmp.style.display = "none";
    }
    item.style.display = "block";
}

function disappearModal()
{

    //var item = document.getElementById(id);
    for(var i=0; i<listOfIds.length; i++)
    {
        var tmp = document.getElementById(listOfIds[i]);
        tmp.style.display = "none";
    }

}
