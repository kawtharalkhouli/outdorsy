import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewsLetterComponent } from 'src/app/shared/components/news-letter/news-letter.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm! : FormGroup;
  isSubmitted: boolean = false;
  hide =true

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  )
  {}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
    )

  }

  subscribe(){
    const dialogRef = this.dialog.open(NewsLetterComponent,{
      width: '60vh',
      height: '40vh',
    }
    )
  }

  //Getter Function for easier access to the form controls

  get f(){
    return this.loginForm.controls
  }

  login(){
    this.isSubmitted = true;
    this.http.get<any>("http://localhost:8000/signUpUsers").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        this.loginForm.reset();
        this.router.navigate(["dashboard"])
      }
      else{
        alert("User Not Found !")
      }
    }, err=> {
      alert("Something Went Wrong!")
    })

  }
}
