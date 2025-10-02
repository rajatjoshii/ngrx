import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCount } from './counter/counter.selectors';
import { increment, decrement, reset } from './counter/counter.actions';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store){}
  title = 'ngrx-playground';
  count$ = this.store.select(selectCount);

  increment() {
    this.store.dispatch(increment());
  }
  
  decrement() {
    this.store.dispatch(decrement());
  }
  
  reset() {
    this.store.dispatch(reset());
  }
  

}
