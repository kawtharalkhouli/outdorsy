import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewsLetterComponent } from 'src/app/shared/components/news-letter/news-letter.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public signupForm! : FormGroup;
  hide = true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog

  ){}


  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.email]],
      confirmPassword: ['',[Validators.required, Validators.email]]
    })
  }

  subscribe(){
    const dialogRef = this.dialog.open(NewsLetterComponent,{
      width: '60vh',
      height: '40vh',
    }
    )
  }

  get f(){
    return this.signupForm.controls
  }

  signUp(){
    if(this.signupForm.invalid) return;
    else if(this.signupForm.controls['password'] !== this.signupForm.controls['confirmPassword'] ) 
      alert('Passwords Do Not Match')
    else

    this.http.post<any>("http://localhost:8000/signUpUsers", this.signupForm.value).subscribe(res => {
      alert('User Created Successfully!');
      this.signupForm.reset();
      this.router.navigate(["login"]); // Redirect To Login Page
    },
    err => {
      alert("Something Went Wrong!")
    }
  )
  }

}
