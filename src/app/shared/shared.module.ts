import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";
import {AcessibilidadeComponent} from "./components/acessibilidade/acessibilidade.component";
import {VlibrasComponent} from "./components/vlibras/vlibras.component";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {DarkthemeComponent} from "./components/darktheme/darktheme.component";

@NgModule({
  declarations: [
    RedeSocialComponent,
    AcessibilidadeComponent,
    DarkthemeComponent,
    VlibrasComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [
    RedeSocialComponent,
    AcessibilidadeComponent,
    DarkthemeComponent,
    VlibrasComponent,
  ],
})
export class SharedModule {}
