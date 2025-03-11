import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Relicary Vlc');

  upperCase = signal(true);

  heroes = signal(heroes);

}
