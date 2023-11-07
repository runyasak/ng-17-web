import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: ` <div
    [ngClass]="['flex flex-col rounded-xl bg-grayscale-900 p-6', class]"
  >
    <ng-content />
  </div>`,
})
export class CardComponent {
  @Input() class = '';
}
