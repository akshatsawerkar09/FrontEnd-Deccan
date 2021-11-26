import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AppliedBatchesComponent } from './components/applied-batches/applied-batches.component';
import { ApprovedBatchesComponent } from './components/approved-batches/approved-batches.component';
import { BatchDetailsComponent } from './components/batch-details/batch-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ManageBatchesComponent } from './components/manage-batches/manage-batches.component';
import { ManageEnrollmentComponent } from './components/manage-enrollment/manage-enrollment.component';
import { ManageSportsComponent } from './components/manage-sports/manage-sports.component';
import { MembershipComponent } from './components/membership/membership.component';
import { RejectedBatchesComponent } from './components/rejected-batches/rejected-batches.component';
import { SportsComponent } from './components/sports/sports.component';
import { UnlockAccountsComponent } from './components/unlock-accounts/unlock-accounts.component';
import { UpdateBatchComponent } from './components/update-batch/update-batch.component';
import { UpdateSportsComponent } from './components/update-sports/update-sports.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path : "sports" , component : SportsComponent } ,
  { path : "userDashboard" , component : UserDashboardComponent} ,
  { path : "userDashboard/appliedBatches" , component  : AppliedBatchesComponent  } ,
  { path : "BatchDetails/:id" , component : BatchDetailsComponent} ,
  { path : "manageSports" , component : ManageSportsComponent} ,
  { path : "updateSports/:id" , component : UpdateSportsComponent} ,
  { path : "unlockAccounts" , component : UnlockAccountsComponent} ,
  { path : "home" , component : HomepageComponent} ,
  { path : "addManager" , component : AddManagerComponent} ,
  { path : "manageBatches" , component : ManageBatchesComponent}, 
  { path : "updateBatch/:id" , component : UpdateBatchComponent } ,
  { path : "manageEnrollment" , component : ManageEnrollmentComponent} ,
  { path : "appliedBatches" , component : AppliedBatchesComponent},
  { path : "approvedBatches" , component : ApprovedBatchesComponent} ,
  { path : "rejectedBatches" , component : RejectedBatchesComponent} ,
  { path : "membership" , component : MembershipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
