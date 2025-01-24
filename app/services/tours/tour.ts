import { openModal } from "@services/modal/modalService";
import { ITours } from "models/tours";
import { getTourTemplate } from "./../../templates/tours";


export function initToursDivElements(data: ITours[]): void {
  if (Array.isArray(data)) {
    const rootElement: Element = document.querySelector('.main-app');
    const tourWrap: HTMLDivElement = document.createElement('div');

    tourWrap.classList.add('tour-wrap');

    initTourElemListener(tourWrap);

    let rootElementData: string = '';
    data.forEach((el, i) => {
      rootElementData += getTourTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;
    rootElement.appendChild(tourWrap);
  }
}

export function initTourElemListener(tourWrap: HTMLElement): void {
  tourWrap.addEventListener('click', (ev: MouseEvent) => {
    const targetItem: HTMLElement = ev.target as HTMLElement;
    const parentItem: HTMLElement  = targetItem?.parentNode as HTMLElement;
    let realTarget: HTMLElement | null = null;

    if (targetItem.hasAttribute('data-tour-item-index')) {
      realTarget = targetItem;
    } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
      realTarget = parentItem;
    }

    if (realTarget) {
      const dataIndex: string = realTarget.getAttribute('data-tour-item-index');
      if (dataIndex) {
        openModal('order', Number(dataIndex));
      }
    }
  });
}