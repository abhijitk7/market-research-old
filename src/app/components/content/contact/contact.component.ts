import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData!: FormGroup;
  fullName:FormControl= new FormControl('', [Validators.required,Validators.maxLength(40)]);
  email:FormControl= new FormControl('', [Validators.required, Validators.email]);
  subject:FormControl= new FormControl('', [Validators.required,Validators.maxLength(50)]);
  message:FormControl= new FormControl('', [Validators.required,Validators.maxLength(40)]); 
  recaptcha:FormControl=new FormControl(['', Validators.required]);
  isSubmitted:Boolean=false;

  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  @ViewChild('langInput') langInput!: ElementRef;

  captchaIsLoaded = false;
  captchaSuccess = false;
  captchaIsExpired = false;
  captchaResponse?: string;

  theme: 'light' | 'dark' = 'light';
  size: 'compact' | 'normal' = 'normal';
  lang = 'en';
  type!: 'image';

  constructor(private builder: FormBuilder,private toastService: ToastService) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      fullName: this.fullName,
      email: this.email,
      subject: this.subject,
      message: this.message,
      recaptcha:this.recaptcha
      });
  }

  onSubmit(){
    
    console.log("TODO: Add API call");

    setTimeout(()=>{
      this.isSubmitted=true;
      console.dir(this.formData.get("fullName")?.value);
      console.dir(this.formData.get("email")?.value);
      console.dir(this.formData.get("subject")?.value);
      console.dir(this.formData.get("message")?.value);
      this.toastService.showSuccessToast('Success', "We received your request; we'll be in touch with you shortly!");

    },1000);
  }

  handleSuccess(data:any) {
    console.log(data);
  }

  

}
