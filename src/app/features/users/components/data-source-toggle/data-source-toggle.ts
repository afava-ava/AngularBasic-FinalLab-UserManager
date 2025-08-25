import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-source-toggle',
  imports: [],
  templateUrl: './data-source-toggle.html'
})
export class DataSourceToggle {
  @Input() checked = true; // default is mock
  @Output() toggleChange = new EventEmitter<boolean>();

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.toggleChange.emit(input.checked);
  }
}
