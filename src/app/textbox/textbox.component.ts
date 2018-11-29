import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  generalTooltipMessage = 'Text Box cannot be empty';
  ooltipMessage = 'Text Box cannot be empty45455';

  constructor() { }

  textboxKeyup(event) {
    const inputValue = event.target.value;
    this.generalTooltipMessage = '';
    if (!inputValue) {
      this.generalTooltipMessage = 'Text Box cannot be empty';
    }
  }

  textboxKeyup2(event) {
    const inputValue = event.target.value;
    this.ooltipMessage = '';
    if (!inputValue) {
      this.ooltipMessage = 'Text Box cannot be empty';
    }
  }

  tooltipMessageFromChild(event) {
    console.log('event', event);

    if (event.isDismiss) {
      this.generalTooltipMessage = '';
    }
  }

  ngOnInit() {
  }

}
