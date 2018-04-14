// 1. Скрипт, который запрашивает цвет желаемого телефона (черный - картинка телефона)
// 2. После цвета спрашивает память и выдает цену телефона
// 3. В конце выводится картинка и цена

alert("Lesson_1");

var setModel = prompt("Enter model");
var setColour = prompt("Enter color");
var setMemory = prompt("Enter memory");

if (setModel == 'apple' && setColour == 'black' && setMemory == 4){
    document.write('<p><img src="image/apple_black.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 500$</p>');
} else if(setModel == 'apple' && setColour == 'black' && setMemory == 8){
    document.write('<p><img src="image/apple_black.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 600$</p>');
}else if(setModel == 'apple' && setColour == 'rose' && setMemory == 4) {
    document.write('<p><img src="image/apple_rose.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 550$</p>');
}else if(setModel == 'apple' && setColour == 'rose' && setMemory == 8) {
    document.write('<p><img src="image/apple_rose.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 750$</p>');
}else if(setModel == 'meizu' && setColour == 'black' && setMemory == 4) {
    document.write('<p><img src="image/meizu_black.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 300$</p>');
}else if(setModel == 'meizu' && setColour == 'black' && setMemory == 8) {
    document.write('<p><img src="image/meizu_black.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 400$</p>');
}else if(setModel == 'meizu' && setColour == 'blue' && setMemory == 4) {
    document.write('<p><img src="image/meizu_blue.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 350$</p>');
}else if(setModel == 'meizu' && setColour == 'blue' && setMemory == 4) {
    document.write('<p><img src="image/meizu_black.jpg" class="center-img"/></p>' +
        '<p>Model: ' + setModel + '</p>' +
        '<p>Memory: ' + setMemory + '</p>' +
        '<p>Price: 450$</p>');
}else {
    alert("Wrong parameters!!!")
}
