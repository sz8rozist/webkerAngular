import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReservationComponent } from './reservation/reservation.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { TableHeaderColorDirective } from '../directives/table-header-color.directive';
import { ChangeColorOnHoverDirective } from '../directives/change-color-on-hover.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateFormatPipe } from '../customPipe/date-format.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ReservationComponent,
    BottomSheetComponent,
    ReservationComponent,
    EditReservationComponent,
    TableHeaderColorDirective,
    ChangeColorOnHoverDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class HomeModule { }
