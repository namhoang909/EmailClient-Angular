import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() dismiss = new EventEmitter();

  constructor(private El: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.El.nativeElement);
  }

  ngOnDestroy() {
    this.El.nativeElement.remove();
  }

  OnDismissClick() {
    this.dismiss.emit();
  }
}
