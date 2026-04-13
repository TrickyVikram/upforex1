import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SendmailService {
  constructor(private httpCLient: HttpClient) {}

  sendMail(data: any) {
    return this.httpCLient.post(
      'https://api.upforex.com/api/v1/upforex/contact-us',
      data
    );
  }
}
