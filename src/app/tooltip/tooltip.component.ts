import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  @Input() tooltipMessage: string;

  @Output() dismiss = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeMessage() {
    this.dismiss.emit({ 'isDismiss': true, 'messageFromChild': 'Already dismiss at child component' });
  }
}
