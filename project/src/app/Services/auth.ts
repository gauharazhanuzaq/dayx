import { Injectable } from '@angular/core';
import { Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  user 
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Observable<any>;

  constructor(private auth: Auth) {
    this.currentUser$ = user(this.auth).pipe(
      map(u => u), 
    );
  }

  signup(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  private handleError(error: any): Observable<never> {
    let message = 'Unknown error';

    switch (error.code) {
      case 'auth/email-already-in-use':
        message = 'This email already registreted.';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email.';
        break;
      case 'auth/weak-password':
        message = 'The password is too weak.';
        break;
      case 'auth/invalid-credential':
        message = 'Invalid credentials provided.';
        break;
    }

    throw new Error(message);
  }
}
