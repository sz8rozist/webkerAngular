import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private storage: AngularFirestore) { }

  createReservation(reservation: Reservation){
      return this.storage.collection("reservation").add(reservation);
  }

  deleteReservation(reservation: Reservation){
    return this.storage.collection("reservation").doc(reservation.id).delete();
  }

  updateReservation(reservation: Reservation, id: string){
    return this.storage.collection("reservation")
    .doc(id)
    .update(reservation);
  }

  getReservationById(user_id: string){
    return this.storage.collection<Reservation>('reservation', ref => ref.where("user_id", "==", user_id)).snapshotChanges();
  }

  getReservationByDocId(id: string){
    return this.storage.collection<Reservation>('reservation').doc(id).snapshotChanges();
  }
}
