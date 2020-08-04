import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheRoutingModule } from './detalhe-routing.module';
import { DetalheComponent } from './detalhe.component';


@NgModule({
  declarations: [DetalheComponent],
  imports: [
    CommonModule,
    DetalheRoutingModule
  ]
})
export class DetalheModule { }
