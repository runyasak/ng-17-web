import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { CardComponent } from './components/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
