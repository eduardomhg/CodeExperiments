import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'block',
  templateUrl: 'block.component.html',
  styles: []
})
export class BlockComponent implements OnInit {

  @Input() height = "100px";
  @Input() width = "100px";
  @Input() backgroundColor?: string;

  constructor() { }

  ngOnInit(): void {
    if (this.backgroundColor === undefined) {
      this.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
  }
}
