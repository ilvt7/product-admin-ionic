import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { CustomImputComponent } from './componets/custom-imput/custom-imput.component';
import { LogoComponent } from './componets/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateProductComponent } from './componets/add-update-product/add-update-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomImputComponent,
    LogoComponent,
    AddUpdateProductComponent
  ],
  exports:[
    HeaderComponent,
    CustomImputComponent,
    ReactiveFormsModule,
    LogoComponent,
    AddUpdateProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
