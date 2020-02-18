import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };
  constructor() { }

  onLoginEmail(): void {
    if (this.validateForm(this.email, this.password)) {
      // this.auth.loginWithEmail(this.email, this.password)
      //   .then(() => this.router.navigate(['/']))
      //   .catch(_error => {  
      //     this.error = _error
      //     this.router.navigate(['/login'])
      //   })
      alert("Login Sucessful");
    }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false
    }

    if (password.length < 8) {
      this.errorMessage = 'Password should be at least 8 characters!'
      return false
    }

    this.errorMessage = ''
    return true
  }

}
