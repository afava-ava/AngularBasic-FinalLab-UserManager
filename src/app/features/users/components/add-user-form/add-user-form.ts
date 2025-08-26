import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-user-form.html'
})
export class AddUserForm {
  @Output() save = new EventEmitter<any>();

  fb = inject(FormBuilder);

  form = this.fb.group({
    userName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', [Validators.required]],
    suite: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    company: ['', [Validators.required]],
    avatar: ['']
  });

  get userName() { return this.form.get('userName'); }
  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get street() { return this.form.get('street'); }
  get suite() { return this.form.get('suite'); }
  get city() { return this.form.get('city'); }
  get zipCode() { return this.form.get('zipCode'); }
  get phone() { return this.form.get('phone'); }
  get company() { return this.form.get('company'); }

  private mapFormToUser(formValue: any): User {
    return {
      id: 0, // ID will be set by the backend
      username: formValue.userName,
      name: `${formValue.firstName} ${formValue.lastName}`,
      email: formValue.email,
      phone: formValue.phone,
      address: {
        street: formValue.street,
        suite: formValue.suite,
        city: formValue.city,
        zipCode: formValue.zipCode
      },
      company: formValue.company,
      avatar: formValue.avatar || undefined
    };
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.mapFormToUser(this.form.value));
    }
  }
}
