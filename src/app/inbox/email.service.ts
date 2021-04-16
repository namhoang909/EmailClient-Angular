import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailInterface } from './email-interface';

interface emailSummary {
  id: string,
  subject: string,
  from: string,
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  GetEmails() {
    return this.http.get<emailSummary[]>(this.rootUrl + '/emails');
  }

  GetEmailContent(id: string) {
    return this.http.get<EmailInterface>(`${this.rootUrl}/emails/${id}`)
  }
}
