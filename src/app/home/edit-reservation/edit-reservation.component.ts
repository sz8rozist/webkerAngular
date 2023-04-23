import { Component, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from '../reservation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css'],
})
export class EditReservationComponent {
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
    private authService: AuthService,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private r: Router,
    @Inject(LOCALE_ID) private local: string,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.reservationService.getReservationByDocId(id).subscribe((snapshot) => {
      const data = snapshot.payload.data();
      console.log(data?.szulido);
      this.reservationForm
        .get('nev.veznev')
        ?.setValue(data?.nev?.veznev as string);
      this.reservationForm
        .get('nev.kernev')
        ?.setValue(data?.nev?.kernev as string);
      this.reservationForm.get('szulido')?.setValue(data?.szulido as string);
      this.reservationForm.get('szigsz')?.setValue(data?.szigsz as string);
      this.reservationForm.get('nem')?.setValue(data?.nem as string);
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.authService.isUserLoggedIn().subscribe((user) => {
      console.log(this.reservationForm.get('szulido')?.value);
      if (user) {
        const res: Reservation = {
          user_id: user.uid,
          nev: {
            veznev: this.reservationForm.get('nev.veznev')?.value as string,
            kernev: this.reservationForm.get('nev.kernev')?.value as string,
          },
          szulido: this.formatDate(this.reservationForm.get('szulido')?.value as string, this.local),
          szigsz: this.reservationForm.get('szigsz')?.value as string,
          nem: this.reservationForm.get('nem')?.value as string,
        };
        this.reservationService
          .updateReservation(res, id)
          .then((_) => {
            this.r.navigate(["/home"]);
            console.log('Sikeres módosítás.');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
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
