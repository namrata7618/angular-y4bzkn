import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        
  }
  get f() { return this.loginForm.controls; }
  // onSubmit() {
  //       this.submitted = true;
  //       if (this.loginForm.invalid) {
  //           return;
  //       }
  //       this.loading = true;
  //       this.authenticationService.login(this.f.username.value, this.f.password.value)
  //           .pipe(first())
  //           .subscribe(
  //               data => {
  //                   this.router.navigate([this.returnUrl]);
  //               },
  //               error => {
  //                   this.alertService.error(error);
  //                   this.loading = false;
  //               });
  //   }

}