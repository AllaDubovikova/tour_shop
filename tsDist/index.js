"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursDataArray = void 0;
var tours_1 = require("@rest/tours");
require("./assets/styles/main.scss");
var img_1 = require("@services/img/img");
var general_1 = require("@services/general/general");
var tour_1 = require("@services/tours/tour");
exports.toursDataArray = [];
var imagesStore = img_1.images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
(0, general_1.initHeaderTitle)('Туры', 'h1');
(0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
// init data
var tourData = (0, tours_1.getTours)();
tourData.then(function (data) {
    console.log('call ');
    exports.toursDataArray = data;
    (0, tour_1.initToursDivElements)(data);
});
// init app
/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/
//# sourceMappingURL=index.js.map