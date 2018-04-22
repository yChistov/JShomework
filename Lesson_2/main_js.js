// 1) В случае некорректного ввода данных выводить не тоже самое что и в случае корректного,
// но и какие-то сообщения о том, что было введено некорректно.
// 2) Предусмотреть ситуацию, что цвета/памяти может не быть в наличии (если цвета нет в наличии, то вывести соответствующее сообщение на экран и спросить повторно)

let setColour, setMemory, img, pr;

    let phones = [
        {
            color: setColour = prompt("Enter color (black, blue, rose)"),
            memory: setMemory = prompt("Enter memory (4, 8, 16)"),
        }
    ];

    for (let i = 0; i < phones.length; i++){
        if (phones[i].color === 'black' && +phones[i].memory === 4){
            img = 'apple_black.jpg';
            pr = 300;

        }else if (phones[i].color === 'black' && +phones[i].memory === 8) {
            img = 'apple_black.jpg';
            pr = 350;

        }else if (phones[i].color === 'black' && +phones[i].memory === 16) {
            img = 'apple_black.jpg';
            pr = 400;

        }else if (phones[i].color === 'rose' && +phones[i].memory === 4) {
            img = 'apple_rose.jpg';
            pr = 360;

        }else if (phones[i].color === 'rose' && +phones[i].memory === 8) {
            img = 'apple_rose.jpg';
            pr = 420;

        }else if (phones[i].color === 'rose' && +phones[i].memory === 16) {
            img = 'apple_rose.jpg';
            pr = 480;

        }else if (phones[i].color === 'blue' && +phones[i].memory === 4) {
            img = 'meizu_blue.jpg';
            pr = 380;

        }else if (phones[i].color === 'blue' && +phones[i].memory === 8) {
            img = 'meizu_blue.jpg';
            pr = 460;

        }else if (phones[i].color === 'blue' && +phones[i].memory === 16) {
            img = 'meizu_blue.jpg';
            pr = 520;

        }else if (phones[i].color === null || typeof(phones[i].color) === 'number'){
            break;
        }
    }

    document.write('<p><img src="image/'+ img +'" class="center-img"/></p>'+
        '<p>Memory: ' + setMemory + ' gb</p>' +
        '<p>Price: '+ pr +' $</p>');







    // while (setColour === 'black' || setColour === 'rose' || setColour === 'blue') {
    //
    //     while (setMemory === 4 || setMemory === 8 || setMemory === 16) {
    //
    //         if (setMemory === 4 && setColour === 'black') {
    //             alert("hi");
    //             // document.write('<p><img src="../Lesson_2/image/apple_black.jpg" class="center-img"/></p>' +
    //             //     '<p>Memory: ' + setMemory + '</p><p>Price: 600$</p>');
    //             break;
    //
    //         } else if (setMemory === 8 && setColour === 'black') {
    //             document.write('<p><img src="../Lesson_2/image/apple_black.jpg" class="center-img"/></p>' +
    //                 '<p>Memory: ' + setMemory + '</p><p>Price: 650$</p>');
    //             break;
    //
    //         } else if (setMemory === 16 && setColour === 'black') {
    //             document.write('<p><img src="../Lesson_2/image/apple_black.jpg" class="center-img"/></p>' +
    //                 '<p>Memory: ' + setMemory + '</p><p>Price: 700$</p>');
    //             break;
    //
    //         } else if (setMemory === 4 && setColour === 'rose') {
    //             document.write('<p><img src="../Lesson_2/image/apple_rose.jpg" class="center-img"/></p>' +
    //                 '<p>Memory: ' + setMemory + '</p><p>Price: 660</p>');
    //             break;
    //
    //         } else if (setMemory === 8 && setColour === 'rose') {
    //             document.write('<p><img src="../Lesson_2/image/apple_rose.jpg" class="center-img"/></p>' +
    //                 '<p>Memory: ' + setMemory + '</p><p>Price: 720</p>');
    //             break;
    //
    //         } else if (setMemory === 16 && setColour === 'rose') {
    //             document.write('<p><img src="../Lesson_2/image/apple_rose.jpg" class="center-img"/></p>' +
    //                 '<p>Memory: ' + setMemory + '</p><p>Price: 780</p>');
    //             break;
    //
    //         } else {
    //             alert("Wrong parameters!!!");
    //         }
    //         break;
    //     }
    //     break;
    // }











