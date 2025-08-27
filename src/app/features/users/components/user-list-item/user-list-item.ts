import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightEven } from "../../../shared/directives/highlight-even";
import { FullNamePipe } from "../../../shared/pipes/full-name.pipe";
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list-item',
  imports: [FullNamePipe, RouterLink, HighlightEven],
  templateUrl: './user-list-item.html'
})
export class UserListItem {
  user = input.required<User>();
  isMockVersion = input(false);
  delete = output<number>();

  onDelete(){
    this.delete.emit(this.user().id);
  }

}
