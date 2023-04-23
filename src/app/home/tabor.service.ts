import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from 'firebase/firestore';
import { Tabor } from '../models/Tabor';

@Injectable({
  providedIn: 'root'
})
export class TaborService {

  constructor(private storage: AngularFirestore) { }

  fetchTabor(){
    return this.storage.collection('taborok').snapshotChanges();
  }

  getTabor(nev: string){
    return this.storage.collection<Tabor>('taborok', ref => ref.where("nev", "==", nev)).get();
  }
}
