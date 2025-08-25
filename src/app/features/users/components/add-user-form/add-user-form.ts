import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-user-form.html'
})
export class AddUserForm {
  @Output() save = new EventEmitter<any>();
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: ''
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.save.emit(this.user);
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        avatar: ''
      };
    }
  }
}
