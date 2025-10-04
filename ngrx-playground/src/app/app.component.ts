import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCount } from './counter/counter.selectors';
import { increment, decrement, reset } from './counter/counter.actions';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  signInWithRedirect,
  signOut,
  getCurrentUser,
  fetchAuthSession
} from '@aws-amplify/auth';


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

  isLoggedIn = false;
  username = '';

  async ngOnInit() {
    try {
      // After redirect back, ensure session is hydrated before reading user
      await fetchAuthSession();
      const user = await getCurrentUser();
      this.isLoggedIn = true;
      this.username = user.username;
      console.log('User:', user);
    } catch {
      this.isLoggedIn = false;
      this.username = '';
    }
  }
  async logIn() {
    try {
      await signInWithRedirect(); // opens Hosted UI
    } catch (e) {
      console.error('signInWithRedirect failed:', e);
    }
  }
  async logOut() {
    await signOut();
    this.isLoggedIn = false;
    this.username = '';
  }

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
