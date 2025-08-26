import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { FullNamePipe } from "../../../shared/pipes/fullName.pipe";
import { getFullAddress } from '../../models/user.utils';
import { UserApi } from '../../services/user-api';


@Component({
  selector: 'app-user-detail',
  imports: [RouterLink, FullNamePipe],
  templateUrl: './user-detail.html'
})
export class UserDetail {
  private route = inject(ActivatedRoute);
  private userApi = inject(UserApi);

  protected getFullAddress = getFullAddress;

  userSignal = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('userId'));
        return this.userApi.getUserById(id);
      })
    ),
  )

  fullAddressSignal = computed(() => {
    const user = this.userSignal();
    return user ? this.getFullAddress(user) : '';
  })
}

