import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./modules/components/auth/auth.module').then(m=>m.AuthModule)
  },
  {path:"dashboard",loadChildren:()=>import('./modules/components/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
