import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PosesComponent } from './components/poses/poses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PoseDetailComponent } from './components/pose-detail/pose-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: PoseDetailComponent },
  { path: 'poses', component: PosesComponent}
  
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
