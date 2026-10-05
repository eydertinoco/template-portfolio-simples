import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetcodeRoutingModule } from './petcode-routing.module';
import { HomePetcodeComponent } from "./pages/home/home.petcode.component";
import { ViewPetcodeComponent } from "./pages/view/view.petcode.component";
import {TranslatePipe} from "@ngx-translate/core";


@NgModule({
  declarations: [
    HomePetcodeComponent,
    ViewPetcodeComponent
  ],
  imports: [
    CommonModule,
    PetcodeRoutingModule,
    ReactiveFormsModule,
    TranslatePipe,
  ]
})
export class PetcodeModule { }
