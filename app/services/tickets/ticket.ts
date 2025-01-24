import {IVipTicket, TicketType, ITicket} from "../../models/ticket/ticket";
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {postTicketData} from "@rest/tickets";

export function initTicketInfo(ticket: TicketType | IVipTicket): void {
    const targetElement: Element | null = document.querySelector('.ticket-info');//null??

    if (!targetElement) return; 

    const ticketDescription: string = ticket?.description || '';
    const ticketOperator: string = ticket?.tourOperator || '';
    let vipClientType: string | undefined;

    if ('vipStatus' in ticket) {
        vipClientType = ticket.vipStatus;
    }

    const ticketElemsArr: [string, string, string] = [
        ticketDescription, 
        ticketOperator, 
        vipClientType
    ];
    let ticketElemTemplate;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate += initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;
}

export function initUserData(): void {
    const userInfo: NodeListOf<Element> = document.querySelectorAll('.user-info > p');
    let userInfoObj ;

    userInfo.forEach((el) => {
        const inputDataName:string = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElem = el.querySelector('input');
            userInfoObj[inputDataName] = inputElem.value;
        }
    });

    console.log('userInfoObj', userInfoObj);
    return userInfoObj;
}

export function initPostData(data) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}


export function registerConfirmButton(ticketPostInstance: any): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
