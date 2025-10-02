import { Component } from '@angular/core';
import { CartIconComponent } from './cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
