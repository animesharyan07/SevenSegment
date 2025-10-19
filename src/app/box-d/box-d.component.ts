import { Component,OnChanges,Input, SimpleChanges } from '@angular/core';
import { OuterBoxComponent } from '../outer-box/outer-box.component';
@Component({
  selector: 'app-box-d',
    standalone: true,
  imports: [OuterBoxComponent],
  templateUrl: './box-d.component.html',
  styleUrls: ['./box-d.component.css']
})
export class BoxDComponent implements OnChanges {
  @Input()
  value: number = 0;
 @Input()
  color: string = 'red'; 

  segments: any = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
  };

  private map: {[key:number]: string[]} = {
    0: ['a', 'b', 'c', 'd', 'e', 'f'],
    1: ['b', 'c'],
    2: ['a', 'b', 'd', 'e', 'g'],
    3: ['a', 'b', 'c', 'd', 'g'],
    4: ['b', 'c', 'f', 'g'],
    5: ['a', 'c', 'd', 'f', 'g'],
    6: ['a', 'c', 'd', 'e', 'f', 'g'],
    7: ['a', 'b', 'c'],
    8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    9: ['a', 'b', 'c', 'd', 'f', 'g'],
  };

  ngOnChanges(): void{
      this.updateSegments();
  }

  updateSegments(){
    const active = this.map[this.value] || [];
    this.segments = {
      a: active.includes('a'),
      b: active.includes('b'),
      c: active.includes('c'),
      d: active.includes('d'),
      e: active.includes('e'),
      f: active.includes('f'),
      g: active.includes('g'),
    };
  }

}
