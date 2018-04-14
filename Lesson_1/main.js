// 1. Скрипт, который запрашивает цвет желаемого телефона (черный - картинка телефона)
// 2. После цвета спрашивает память и выдает цену телефона
// 3. В конце выводится картинка и цена

var colour;
var model;
var memory;
var price;
var photoPlace = '<p><img src="image\\';

alert("Lesson_1");

var setColour = prompt("Entered color");

if (setColour === 'black'){
    document.write(photoPlace + 'apple_black.jpg" class="center-img"/></p>');
} else {
    document.write('Not found');
}
