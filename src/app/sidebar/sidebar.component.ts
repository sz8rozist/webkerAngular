import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BottomSheetComponent } from '../home/bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() sidenavClose = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  @Input() loggedInUser? : firebase.default.User | null;
  
  constructor(private bottomSheet: MatBottomSheet){}
  onSidenavClose(){
    this.sidenavClose.emit();
  }

  logout(){
    this.logoutEvent.emit();
  }

  openSheet(){
    this.bottomSheet.open(BottomSheetComponent);
    this.sidenavClose.emit();
  }
}
