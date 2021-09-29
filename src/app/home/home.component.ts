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
  changeLado!: boolean;
  selected = 'USD';
  envioSelected = 'Payoneer'
  constructor(private service: LogicService, private fb: FormBuilder) {
    this.changeLado = false;
  }



  ngOnInit() {
    this.service.getUsd().subscribe(
      usd => {
        this.prueba = usd[1].casa.compra.toString().replace(',', '.');
        this.usdInitial = usd[1].casa.compra;  
        this.patchForm();
      }
    );
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      usd: '',
      recambio: '',
      comision: 5.5
    });
  }


  patchForm() {
    this.form.setValue({
      usd: 1,
      recambio: this.prueba,

    });
  }

  setFilter(){
    this.form.reset()
  }

   handleChange(comision: any) {
    if (comision.value < 0) comision.value = 0;
    if (comision.value > 100) comision.value = 100;
  }
}
