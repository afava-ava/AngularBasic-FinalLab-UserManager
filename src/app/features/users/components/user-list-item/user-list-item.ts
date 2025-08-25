import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FullNamePipe } from "../../../shared/pipes/fullName.pipe";
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list-item',
  imports: [FullNamePipe, RouterLink],
  templateUrl: './user-list-item.html'
})
export class UserListItem {
  @Input() user!: User; 
  @Input() isMockVersion = false;
  @Output() delete = new EventEmitter<number>();

  onDelete(){
    this.delete.emit(this.user.id);
  }

}
