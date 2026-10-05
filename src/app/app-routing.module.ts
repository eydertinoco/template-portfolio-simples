import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./module/404/404.component";
import { PortifolioComponent } from "./module/portifolio/portifolio.component";

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: PortifolioComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
