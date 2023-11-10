import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameRater';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(game: string) {
    const rate = Math.floor(Math.random() * 10);
    this._snackBar.open(`${game} : Rate of the day is: ${rate}`, rate > 7 ? 'Shut up and take my money!' : `Return it!`);
  }
}
