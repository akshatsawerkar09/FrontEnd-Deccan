import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AppliedBatchesComponent } from './components/applied-batches/applied-batches.component';
import { ApprovedBatchesComponent } from './components/approved-batches/approved-batches.component';
import { BatchDetailsComponent } from './components/batch-details/batch-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginOtpComponent } from './components/login-otp/login-otp.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ManageBatchesComponent } from './components/manage-batches/manage-batches.component';
import { ManageEnrollmentComponent } from './components/manage-enrollment/manage-enrollment.component';
import { ManageSportsComponent } from './components/manage-sports/manage-sports.component';
import { MembershipComponent } from './components/membership/membership.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RejectedBatchesComponent } from './components/rejected-batches/rejected-batches.component';
import { RenewMembershipComponent } from './components/renew-membership/renew-membership.component';
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
  { path : "BatchDetails/:id" , component : MembershipComponent} ,
  { path : "login" , component : LoginComponent} ,
  { path : "navbar" , component : NavbarComponent} , 
  { path : "logout" , component : LogoutComponent} ,
  { path : "activateAccount" , component : ActivateAccountComponent} ,
  { path : "BatchDetails/:id" , component : RenewMembershipComponent} ,
  { path : "renewMembership" , component : RenewMembershipComponent} ,
  { path : "payment/:id" , component : PaymentComponent}, 
  { path : "membership" , component : MembershipComponent},
  { path : "loginOtp" , component : LoginOtpComponent},
  { path  : "offers" , component : OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
