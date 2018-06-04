
var inpElem;
var divElem;

function preview(file) {
    "use strict";
    if (file.type.match(/image.*/)) {
        var reader = new FileReader();
        var img;
        reader.addEventListener("load", function (event) {
            img = document.getElementById("previewImg");
            img.src = event.target.result;
        });
        reader.readAsDataURL(file);
    }
}

function uploadFile() {
    "use strict";
    inpElem = document.getElementById("upload");
    divElem = document.getElementById("preview");
    inpElem.addEventListener("change", function () {
        preview(inpElem.files[0]);
    });
}
window.onload = function () {
    'use strict';
    uploadFile();


};