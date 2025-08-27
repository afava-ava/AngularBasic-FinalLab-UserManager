import { Component, input, output, } from '@angular/core';

@Component({
  selector: 'app-data-source-toggle',
  imports: [],
  templateUrl: './data-source-toggle.html'
})
export class DataSourceToggle {
  checked = input(true); // default is mock
  toggleChange = output<boolean>();

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.toggleChange.emit(input.checked);
  }
}
