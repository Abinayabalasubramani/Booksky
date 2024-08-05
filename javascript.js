var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
});

var la=document.getElementById("cancel-popup");
la.addEventListener("click",function(){
         event.preventDefault();
         popupoverlay.style.display="none";
        popupbox.style.display="none";
});

var al=document.querySelector(".container");
var l=document.getElementById("add-book");
var a=document.getElementById("book-title-input");
var x=document.getElementById("book-author-input");
var y=document.getElementById("book-description-input");
l.addEventListener("click",function(){
        event.preventDefault();
        var div=document.createElement("div");
        div.setAttribute("class","book-container");
        div.innerHTML=`<h2>${a.value}</h2>
            <h5>${x.value}</h5>
            <p>${y.value}</p>
            <button onclick="del(event)">Delete</button>`
        al.append(div);
        popupoverlay.style.display="none";
        popupbox.style.display="none";
});

function del(event)
{
    event.target.parentElement.remove();
}