import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-form.html'
})
export class AddUserForm {
  @Output() save = new EventEmitter<any>();

  fb = inject(FormBuilder);

  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    avatar: ['']
  });

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
