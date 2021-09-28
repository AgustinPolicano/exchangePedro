import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LogicService } from '../services/logic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usdCompra!: string;
  usdFinal: any
  usdInitial: any
  form!: FormGroup;
  prueba: any;
  selected = 'USD';
  envioSelected = 'Payoneer'
  constructor(private service: LogicService, private fb: FormBuilder) {
  }



  ngOnInit() {
    this.service.getUsd().subscribe(
      usd => {
        console.log(usd)
        this.prueba = usd;
        this.usdInitial = usd;  
        this.patchForm();
      }
    );
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      usd: '',
      recambio: '',
      comision: ''
    });
  }


  patchForm() {
    this.form.setValue({
      usd: 1,
      recambio: this.prueba.compra,
      comision: ''
    });
  }

  setFilter(){
    this.form.reset()
  }
}
