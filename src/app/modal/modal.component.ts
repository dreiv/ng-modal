import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @HostBinding('class.visible') visible: boolean;

  constructor() {}

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }


}
