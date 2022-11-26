// ! ДЗ 13. Gaming cards ♠️♣️♥️♦️
// Рисуем колоду карт, которая состоит из:

// карт номиналом 2 - 10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей
// В макете используется:

// Шрифт https://fonts.google.com/specimen/Nerko+One
// Зеленый цвет доски #55aa55
// Черный цвет текста #353c4d
// Иконки 4 - x мастей и jack, queen, king в архиве images.zip

// Все теги рендерим с помощью js.
// Внешний вид задания НЕ важен, важен только JS - код))
// !!!!!!!!!!!!!!!!!! СТАЛО
model = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "T",];
mastName = ["clubs", "spades", "diamonds", "hearts"];

person = ["jack", "queen", "king", "king"];
mastCard = "";
personClass = "";
card = [];

for (i = 1; i <= 13; i++) {

    for (j = 1; j <= mastName.length; j++) {
        data = "";
        data = mastName[j - 1];
        item = "";

        if (i >= 1 && i <= 9) {
            personClass = "";
        }
        if (i > 9 && i < 13) {
            personClass = " card--person";
            mastCard = person[i - 10];
            item = `<img class="person" src="images/${mastCard}.svg" alt="queen">`;
        }
        if (i > 12) {
            mastCard = mastName[j - 1];
            item = `<img class="person" src="images/${mastCard}.svg" alt="queen">`;
        }
        card.push(`<div class="card${personClass}">
        <div class="card__info">${model[i - 1]}<img src="images/${data}.svg" alt="${data}"></div>
         ${item}
        <div class="card__info">${model[i - 1]}<img src="images/${data}.svg" alt="${data}"></div>
        </div>`)
    }
}
document.write(`<div class="wrapper">${card.join("")}</div>`);

// !!!!!!!!!!!!!!!!!!!!!!! БЫЛО
// TRs = [];

// for (tr = 1; tr <= 7; tr++) {
//   TDs = [];
//   mastModel = ["clubs", "spades", "diamonds", "hearts", "clubs", "spades", "diamonds", "hearts"];
//   cardPerson = "";

//   for (td = 1; td <= 8; td++) {
//     data = "";
//     number = 0;
//     if (td >= 1 && td <= 4 && tr === 1) number = 2;
//     if (td >= 5 && td <= 8 && tr === 1) number = 3;
//     if (td >= 1 && td <= 4 && tr === 2) number = 4;
//     if (td >= 5 && td <= 8 && tr === 2) number = 5;
//     if (td >= 1 && td <= 4 && tr === 3) number = 6;
//     if (td >= 5 && td <= 8 && tr === 3) number = 7;
//     if (td >= 1 && td <= 4 && tr === 4) number = 8;
//     if (td >= 5 && td <= 8 && tr === 4) number = 9;
//     if (td >= 1 && td <= 4 && tr === 5) number = 10;
//     if (td >= 5 && td <= 8 && tr === 5) {
//       number = "J";
//       cardPerson = " card--person";
//       data = `<img class="person" src="images/jack.svg" alt="spades">`
//     }
//     if (td >= 1 && td <= 4 && tr === 6) {
//       number = "Q";
//       cardPerson = " card--person";
//       data = `<img class="person" src="images/queen.svg" alt="spades">`
//     }
//     if (td >= 5 && td <= 8 && tr === 6) {
//       number = "K";
//       cardPerson = " card--person";
//       data = `<img class="person" src="images/king.svg" alt="spades">`
//     }
//     if (td >= 1 && td <= 4 && tr === 7) {
//       number = "T";
//       cardPerson = " card--person";
//     }
//     if (td >= 5 && td <= 8 && tr === 7) {
//       number = "T";
//       cardPerson = " card--person";
//     }
//     if (td >= 5 && tr === 7) {
//       break;
//     }
//     if (td === 1 && tr === 7) {
//       data = `<img class="person" src="images/clubs.svg" alt="spades">`
//     }
//     if (td === 2 && tr === 7) {
//       data = `<img class="person" src="images/spades.svg" alt="spades">`
//     }
//     if (td === 3 && tr === 7) {
//       data = `<img class="person" src="images/diamonds.svg" alt="spades">`
//     }
//     if (td === 4 && tr === 7) {
//       data = `<img class="person" src="images/hearts.svg" alt="spades">`
//     }
//     mast = mastModel[td - 1];

//     TDs.push(`<div class="card${cardPerson}">
//     	<div class="card__info">${number}<img src="images/${mast}.svg" alt="${mast}"></div>
//       ${data}
//     	<div class="card__info">${number}<img src="images/${mast}.svg" alt="${mast}"></div>
//     </div>`)
//   }
//   TRs.push(`<div class="wrapper">${TDs.join("")}</div>`)
// }

// document.write(`${TRs.join("")}`);


