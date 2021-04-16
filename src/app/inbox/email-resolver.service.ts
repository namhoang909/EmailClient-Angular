import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmailInterface } from './email-interface';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<EmailInterface> {
  constructor(
    private emailService: EmailService, 
    private router: Router
    ) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route);
    const { id } = route.params;

    return this.emailService.GetEmailContent(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/notfound');
        // EMPTy is observable that is marked as completed. it can be used when we are required to return an observable but don't care what happen with it.
        return EMPTY;
      })
    );
  }
}
