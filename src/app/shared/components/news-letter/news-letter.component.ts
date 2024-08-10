import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

  public subscriptionForm! : FormGroup;

  constructor(
   public dialogRef: MatDialogRef<NewsLetterComponent>,
   public dialog: MatDialog,
   private formBuilder: FormBuilder,
   private http: HttpClient,
  ){}

  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.subscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    }
    )
  }

  subscribe(){
    if (this.subscriptionForm.invalid) alert ('Please Fill the Email Field with the correct email');
    else
    this.http.post<any>("http://localhost:8000/subscribers", this.subscriptionForm.value).subscribe(res=>{
      alert('Subscription Completed Successfully!');
      this.subscriptionForm.reset();
      this.dialogRef.close()
  
    })

  }

}
