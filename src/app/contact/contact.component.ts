import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoubtsService } from '../services/doubts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private doubt: DoubtsService) {}

  ngOnInit(): void {}
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    query: new FormControl('', [Validators.required]),
  });
  isTrue: any;
  contactFormData(data: any) {
    console.log(data.value);
    this.doubt.createDoubts(data.value).subscribe((result: any) => {
      console.log(result);
      if (result.success == true) {
        this.isTrue = true;
      } else {
        this.isTrue = false;
      }
    });
    this.form.reset();
    setTimeout(() => {
      document.getElementById('successfulMessage')?.click();
    }, 4000);
  }
}
