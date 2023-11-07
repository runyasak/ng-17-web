import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { CardComponent } from './components/card.component';
import { CollapseContentComponent } from './components/collapse-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutComponent,
    CardComponent,
    NgOptimizedImage,
    CollapseContentComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
