import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePetcodeComponent } from "./pages/home/home.petcode.component";
import { ViewPetcodeComponent } from "./pages/view/view.petcode.component";

const routes: Routes = [
  {
      path: '',
      component: HomePetcodeComponent,
  },
  {
    path: 'view/:id',
    component: ViewPetcodeComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PetcodeRoutingModule {}
