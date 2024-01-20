import { NgStyle } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
   @Input() text!: string;
   @Input() color: string | undefined;
   @Output() btnClick = new EventEmitter();
   constructor() {

   }

   ngOnInit(): void {
       
   }

   onClick(): void {
      this.btnClick.emit();
   }

}
