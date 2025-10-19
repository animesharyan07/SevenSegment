import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-outer-box',
    standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './outer-box.component.html',
  styleUrls: ['./outer-box.component.css']
})
export class OuterBoxComponent {
  @Input()
  active: boolean = false;

  @Input()
  type:'horizontal' | 'vertical' = 'horizontal';

   @Input() color: string = 'red'; 


}
