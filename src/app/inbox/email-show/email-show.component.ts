import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs/operators';
import { EmailInterface } from '../email-interface';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: EmailInterface; 
  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService,
  ) {
    this.email = this.activatedRoute.snapshot.data.email;
    this.activatedRoute.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {
    // params is behaviorSubject that emits value when Url changes, "key" is defined by path in routing module.
    // below code is commented because email is fetched using resolve in routing module which guarantee to get content before template generated.
    // this.activatedRoute.params
    //   .pipe(
    //     // switchMap will cancel previous request if it is not yet finished when new one is called
    //     switchMap(({ id }) => {
    //       return this.emailService.GetEmailContent(id);
    //     })
    //   )
    //   .subscribe((email) => {
    //     this.email = email;
    //   });
  }
}
