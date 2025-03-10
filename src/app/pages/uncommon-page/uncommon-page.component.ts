import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

const customer1 = {
  name: 'Relicary',
  gender: 'male',
  age: 42,
  address: 'Valencia, Spain'
};

const customer2 = {
  name: 'Neimhain',
  gender: 'female',
  age: 36,
  address: 'Sevilla, Spain'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  customer = signal(customer1);

  invitationMap = {
    male: 'mister',
    female: 'miss',
  }

  changeCustomer() {
    if (this.customer() === customer1) {
      this.customer.set(customer2);
      return;
    }

    this.customer.set(customer1);

  }
}
