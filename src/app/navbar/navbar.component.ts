import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BottomSheetComponent } from '../home/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() sidenavToggle = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  @Input() loggedInUser? : firebase.default.User | null;

  constructor(private router: Router, private bottomSheet: MatBottomSheet){}

  toggleSideNav(){
    this.sidenavToggle.emit();
  }

  logout(){
    this.logoutEvent.emit();
    this.router.navigate(["login"]);
  }

  openSheet(){
    this.bottomSheet.open(BottomSheetComponent);
  }
}
