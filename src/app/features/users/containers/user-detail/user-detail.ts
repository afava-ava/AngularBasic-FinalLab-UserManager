import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserApi } from '../../services/user-api';


@Component({
  selector: 'app-user-detail',
  imports: [RouterLink],
  templateUrl: './user-detail.html'
})
export class UserDetail {
  private route = inject(ActivatedRoute);
  private userApi = inject(UserApi);

  userSignal = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('userId'));
        return this.userApi.getUserById(id);
      })
    ),
  )
}

