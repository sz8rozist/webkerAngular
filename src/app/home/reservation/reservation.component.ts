import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';
import { Tabor } from 'src/app/models/Tabor';
import { TaborService } from '../tabor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { AuthService } from 'src/app/auth/auth.service';
import { formatDate } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  tabor?: Tabor;
  urlParam!: string;
  reservationForm = new FormGroup({
    nev: new FormGroup({
      veznev: new FormControl('', [Validators.required]),
      kernev: new FormControl('', [Validators.required]),
    }),
    szulido: new FormControl('', [Validators.required]),
    szigsz: new FormControl('', [Validators.required]),
    nem: new FormControl('', [Validators.required]),
  });

  constructor(
    private taborService: TaborService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private reservationService: ReservationService,
    private r: Router,
    @Inject(LOCALE_ID) private local: string
  ) {}

  ngOnInit() {
    this.urlParam = this.activatedRoute.snapshot.paramMap.get(
      'taborNev'
    ) as string;
    this.taborService.getTabor(this.urlParam).subscribe(
      (snapshot) => {
        if (snapshot.empty) {
          console.log('Nem található tábor');
          return;
        }
        snapshot.forEach((doc) => {
          this.tabor = doc.data();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    if (AppComponent.loggedUser) {
      const res: Reservation = {
        user_id: AppComponent.loggedUser.uid,
        nev: {
          veznev: this.reservationForm.get('nev.veznev')?.value as string,
          kernev: this.reservationForm.get('nev.kernev')?.value as string,
        },
        szulido: this.formatDate(
          this.reservationForm.get('szulido')?.value,
          this.local
        ) as string,
        szigsz: this.reservationForm.get('szigsz')?.value as string,
        nem: this.reservationForm.get('nem')?.value as string,
      };
      this.reservationService
        .createReservation(res)
        .then((_) => {
          this.r.navigate(['/home']);
          console.log('Sikeres Hozzáadás.');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  private formatDate(date: any, local: any) {
    const d = formatDate(date, 'medium', local);
    const datee = new Date(d);
    let month = '' + (datee.getMonth() + 1);
    let day = '' + datee.getDate();
    const year = datee.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
