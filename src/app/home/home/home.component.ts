import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from '../reservation.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { DateFormatPipe } from 'src/app/customPipe/date-format.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foglalasok!: Reservation[];
  displayedColumns: string[] = [
    'veznev',
    'kernev',
    'szulido',
    'szigsz',
    'nem',
    'muvelet',
  ];
  dataSource: any;
  constructor(
    private reservationService: ReservationService,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.auth.isUserLoggedIn().subscribe((user) => {
      if (user) {
        this.reservationService
          .getReservationById(user.uid)
          .subscribe((foglalas) => {
            this.foglalasok = foglalas.map((foglalas) => {
              const item = foglalas.payload.doc.data();
              const id = foglalas.payload.doc.id;
              return { id, ...item };
            });
          });
      }
    });
    this.dataSource = new MatTableDataSource(this.foglalasok);
  }

  onDelete(element: Reservation) {
    this.reservationService.deleteReservation(element);
  }
}
