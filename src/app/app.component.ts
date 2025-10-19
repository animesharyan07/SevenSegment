import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OuterBoxComponent } from './outer-box/outer-box.component';
import { BoxDComponent } from './box-d/box-d.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [RouterOutlet,OuterBoxComponent,CommonModule,BoxDComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    numbers = [0,1,2,3,4,5,6,7,8,9];
  selectedDigit = 0;
    selectedColor = 'red';
}
