var winload= function () {

    var a = document.getElementById("anthem");
    var s = document.getElementById("scorers");
    var c = document.getElementById("cups");

    function createreq() {//функція для створення аякс-запиту
        var res = false;
        if (window.XMLHttpRequest) {
            res = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            if (new ActiveXObject("Microsoft.XMLHTTP")) {
                res = new ActiveXObject("Microsoft.XMLHTTP");
            } else if (new ActiveXObject("Msxml2.XMLHTTP")) {
                res = new ActiveXObject("Msxml2.XMLHTTP");
            } else {
                res = false;
                alert("Не вдалося створити аякс-запит. Співчуваю");
            }
        }
        return res;
    }

    var xhttp = createreq();//створення запиту
    a.onclick = function () {//дії, що відбуваються при натисканні кнопки

        xhttp.open('GET', "forajax/ynwa.txt", false);
        xhttp.send();
        if (xhttp.status != 200) {
            alert(xhttp.status + ': ' + xhttp.statusText);
        } else {
            var anthem = document.getElementById('ggg');
            anthem.innerHTML = xhttp.responseText.replace(/\n/g, '<br />');
            a.disabled=true;
        }
    };
    var xhttp1 = createreq();
    s.onclick = function () {
        var y = false;
        xhttp1.open('GET', "forajax/scorers.json", false);
        xhttp1.send();
        if (xhttp1.status != 200) {
            alert(xhttp1.status + ': ' + xhttp1.statusText);
        } else {
                var data = JSON.parse(xhttp1.responseText);
                var scorers = document.getElementById('goals');
                var row = scorers.insertRow(0);
                var cell = row.insertCell(0);
                cell.innerHTML = "гравець";
                cell = row.insertCell(1);
                cell.innerHTML = "зіграно";
                for (var i = 0; i < 5; i++) {
                    row = scorers.insertRow(i + 1);
                    cell = row.insertCell(0);
                    cell.innerHTML = data[i].name;
                    cell = row.insertCell(1);
                    cell.innerHTML = data[i].played;


                }

            s.disabled=true;
        }
    };
    var xhttp2 = createreq();
    c.onclick = function () {
        xhttp2.open('GET', "forajax/cups.xml", false);
        xhttp2.send();

        if (xhttp2.status != 200) {
            alert(xhttp2.status + ': ' + xhttp2.statusText);
        } else {
            var xmlDoc = xhttp2.responseXML;
            var x = xmlDoc.getElementsByTagName("cup");
            var row = document.getElementById("trof").insertRow(0);
            var cell = row.insertCell(0);
            cell.innerHTML = "змагання";
            cell = row.insertCell(1);
            cell.innerHTML = "виграно разів";
            for (i = 0; i < x.length; i++) {
                row = document.getElementById("trof").insertRow(i + 1);
                cell = row.insertCell(0);
                cell.innerHTML = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                cell = row.insertCell(1);
                cell.innerHTML = x[i].getElementsByTagName("amount")[0].childNodes[0].nodeValue;
            }
c.disabled=true;
        }
    }
}
if (window.addEventListener) {
    window.addEventListener('load', winload);
} else {

    window.attachEvent('onload', winload);
}
