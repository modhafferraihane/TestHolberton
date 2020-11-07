document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function () {
        var thumbnailElement = document.getElementById("smart_thumbnail");
        thumbnailElement.className;
        
        
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        }
        else{
            thumbnailElement.className = "";
        }
    });
});
