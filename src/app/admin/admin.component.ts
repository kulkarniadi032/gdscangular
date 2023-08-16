import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoubtsService } from '../services/doubts.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private login: LoginService, private doubts: DoubtsService) {}

  ngOnInit(): void {
    const path = window.location.pathname;
    console.log(path);
    if (path === '/admin') {
      document.getElementById('adminButton')?.click();
    }
  }
  p: number = 1;
  adminForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isShow: any;
  adminFormData = (data: any) => {
    console.log(data.value);
    this.login.adminLoginData(data.value).subscribe((result: any) => {
      if (result.success == true) {
        this.isShow = true;
        document.getElementById('closeModal')?.click();
        this.getAllDoubtsData();
      }
    });
  };
  allDoubtsData: any;
  getAllDoubtsData() {
    this.doubts.getAllDoubts().subscribe((result: any) => {
      this.allDoubtsData = result.data;
      console.log(result.data);
      this.sendMailForm.get('name')?.setValue(result.data[0].name);
    });
  }
  isPassword = 'password';
  isShowPassword() {
    this.isPassword == 'password'
      ? (this.isPassword = 'type')
      : (this.isPassword = 'password');
  }

  // send mail
  sendMailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    query: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required]),
  });
  sendMailFormData(data: any) {
    // console.log('answer');
    // console.log(data.value.answer);
    this.deleteDoubtData(data.value.answer);
  }
  isId: any;
  getUserId(id: any) {
    this.isId = id;
    this.doubts.getSingleDoubts(id).subscribe((result: any) => {
      this.sendMailForm.get('name')?.setValue(result.data.name);
      this.sendMailForm.get('email')?.setValue(result.data.email);
      this.sendMailForm.get('query')?.setValue(result.data.query);
    });
  }
  isTrueMail: any;
  deleteDoubtData(answer: any) {
    this.doubts.deleteDoubt(this.isId, answer).subscribe((result: any) => {
      console.log('xxxxxxxxxx');

      console.log(result);
      this.getAllDoubtsData();
      if (result.success == true) {
        this.isTrueMail = true;
      } else {
        this.isTrueMail = false;
      }
      this.sendMailForm.reset();
    });
    setTimeout(() => {
      document.getElementById('adminSuccess')?.click();
    }, 4000);
  }
}
