"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTicketInfo = initTicketInfo;
exports.initUserData = initUserData;
exports.initPostData = initPostData;
exports.registerConfirmButton = registerConfirmButton;
var tslib_1 = require("tslib");
var ticketInfo_1 = require("../../templates/ticketInfo");
var tickets_1 = require("@rest/tickets");
function initTicketInfo(ticket) {
    var targetElement = document.querySelector('.ticket-info');
    if (!targetElement)
        return;
    var ticketDescription = (ticket === null || ticket === void 0 ? void 0 : ticket.description) || '';
    var ticketOperator = (ticket === null || ticket === void 0 ? void 0 : ticket.tourOperator) || '';
    var vipClientType;
    if ('vipStatus' in ticket) {
        vipClientType = ticket.vipStatus;
    }
    var ticketElemsArr = [
        ticketDescription,
        ticketOperator,
        vipClientType
    ];
    var ticketElemTemplate = '';
    ticketElemsArr.forEach(function (el, i) {
        ticketElemTemplate += (0, ticketInfo_1.initTicketElementTemplate)(el, i);
    });
    targetElement.innerHTML = ticketElemTemplate;
}
function initUserData() {
    var userInfo = document.querySelectorAll('.user-info > p');
    var userInfoObj = {};
    userInfo.forEach(function (el) {
        var inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            var inputElem = el.querySelector('input');
            if (inputElem && inputElem.value) {
                userInfoObj[inputDataName] = inputElem.value;
            }
        }
    });
    console.log('userInfoObj', userInfoObj);
    return userInfoObj;
}
function initPostData(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initUserData();
                    return [4 /*yield*/, (0, tickets_1.postTicketData)(data)];
                case 1:
                    response = _a.sent();
                    if (response.success) {
                        // Handle success case
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function registerConfirmButton(ticketPostInstance) {
    var targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', function () {
            initPostData(ticketPostInstance);
        });
    }
}
//# sourceMappingURL=ticket.js.map