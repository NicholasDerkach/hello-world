function load() {
    'use strict';

    document.getElementById('audioInput').addEventListener('change', check, false);//в цьому фрагменті коду користувач вибирає музичний файл
}
function check(e) {
    'use strict';
    var fileType = this.files[0].type;//перевірка формату файлу
    if (fileType.indexOf('audio') != -1) {
        loadFile(this.files[0], sound);
    } else {
        alert('Це не аудіо файл. Співчуваю')
    }
}
function loadFile(file, loaded)//завантажуємо музику
{
    var reader = new FileReader();
    reader.onload = loaded;
    reader.readAsDataURL(file);
}

function sound(evt)
{
    document.getElementById('upl').src = evt.target.result;//відображення муз. файлу на сторінку
}

if (window.addEventListener) {//виконання скрипта під час завантаження сторінки
    window.addEventListener('load', load);
} else {
    window.attachEvent('onload', load);
}