import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {

  formulario: FormGroup;
  // formBuilder: FormBuilder;

  // constructor(fB: FormBuilder) {
  //   this.formBuilder = fB;
  // }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.pattern("^\\S+@\\S+\\.\\S+$")]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    // });
    this.formulario = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern("^\\S+@\\S+\\.\\S+$")]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
    });
  }

  registro() {
    console.log(this.formulario.value);
  }

}
