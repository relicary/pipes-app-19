import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
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

  // i18n Plural
  customersMap = signal({
    '=0': 'none customer waiting',
    '=1': 'there is 1 customer waiting',
    '=2': 'there are 2 customers waiting',
    other: 'there are # customers wainting'
  });

  customers = signal([
    'Aaron',
    'Beth',
    'Carl',
    'Denise',
    'Emmet',
    'Fanny',
    'Gerald',
  ]);

  deleteCustomer() {
    this.customers.update( prev => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Relicary',
    age: 89,
    adderess: "Asturias, Spain"
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('There are data in the Promise');
      console.log('Promise finished');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map( (value) => value + 1),
    tap( (value) => console.log('tap: ', value))
  );

}
