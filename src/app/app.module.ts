import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SportsComponent } from './components/sports/sports.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppliedBatchesComponent } from './components/applied-batches/applied-batches.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BatchDetailsComponent } from './components/batch-details/batch-details.component';
import { ManageBatchesComponent } from './components/manage-batches/manage-batches.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageSportsComponent } from './components/manage-sports/manage-sports.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { UpdateSportsComponent } from './components/update-sports/update-sports.component';
import { UnlockAccountsComponent } from './components/unlock-accounts/unlock-accounts.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import {MatListModule} from '@angular/material/list';
import { UpdateBatchComponent } from './components/update-batch/update-batch.component';
import { ManageEnrollmentComponent } from './components/manage-enrollment/manage-enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SportsComponent,
    UserDashboardComponent,
    SideNavComponent,
    AppliedBatchesComponent,
    BatchDetailsComponent,
    ManageBatchesComponent,
    ManageSportsComponent,
    UpdateSportsComponent,
    UnlockAccountsComponent,
    HomepageComponent,
    AddManagerComponent,
    UpdateBatchComponent,
    ManageEnrollmentComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule ,
    MatCardModule ,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatCarouselModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
