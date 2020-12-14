import { Component , OnInit} from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sign-up-reactive';

  registrationForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.registrationForm = this.formBuilder.group({
        firstName : ['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.required,Validators.email],
        password:['',Validators.required],
        confirmPassword:['',Validators.required],
        acceptTandA:[false,Validators.requiredTrue],
      });
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.registrationForm.invalid)
    {
      return;
    }
    console.table(this.registrationForm.value);
    console.table(this.registrationForm);

    alert("Form Submitted\n" + JSON.stringify(this.registrationForm.value));

  }

  onReset()
  {
    this.submitted=false;
    this.registrationForm.reset();
  }

 

}
