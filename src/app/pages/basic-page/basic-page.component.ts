import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('relicary');
  nameUpper = signal('RELICARY');
  fullName = signal('rElICary VlC');

  customDate = signal(new Date() );

  tickingDateEffect  = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set( new Date() )
    }, 1000);

    onCleanup(() => {
      clearInterval(interval)
    });
  });
}
