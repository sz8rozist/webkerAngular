import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TaborService } from '../tabor.service';
import { Tabor } from 'src/app/models/Tabor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {
  taborok: Array<Tabor> = [];
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private taborService: TaborService,
    private router: Router
  ){}

  onChoose(taborNev: string){
    this.router.navigate(["reservation",taborNev]);
    this.bottomSheetRef.dismiss();
  }

  ngOnInit(){
    this.taborService.fetchTabor().subscribe((tabor) => {
      this.taborok = tabor.map((item) => {
        const data = item.payload.doc.data() as Tabor;
        const id = item.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
