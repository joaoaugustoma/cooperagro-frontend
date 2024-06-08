import { Component } from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    MatDialogClose,
    MatButton
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>) { }
}
