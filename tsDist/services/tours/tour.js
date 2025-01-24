"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initToursDivElements = initToursDivElements;
exports.initTourElemListener = initTourElemListener;
var modalService_1 = require("@services/modal/modalService");
var tours_1 = require("templates/tours");
function initToursDivElements(data) {
    if (Array.isArray(data)) {
        var rootElement = document.querySelector('.main-app');
        var tourWrap = document.createElement('div');
        tourWrap.classList.add('tour-wrap');
        initTourElemListener(tourWrap);
        var rootElementData_1 = '';
        data.forEach(function (el, i) {
            rootElementData_1 += (0, tours_1.getTourTemplate)(el, i);
        });
        tourWrap.innerHTML = rootElementData_1;
        rootElement.appendChild(tourWrap);
    }
}
function initTourElemListener(tourWrap) {
    tourWrap.addEventListener('click', function (ev) {
        var targetItem = ev.target;
        var parentItem = targetItem === null || targetItem === void 0 ? void 0 : targetItem.parentNode;
        var realTarget = null;
        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }
        if (realTarget) {
            var dataIndex = realTarget.getAttribute('data-tour-item-index');
            if (dataIndex) {
                (0, modalService_1.openModal)('order', Number(dataIndex));
            }
        }
    });
}
//# sourceMappingURL=tour.js.map