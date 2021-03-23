import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44322/api/rentals/getall';
  constructor(private httpClient: HttpClient) {}

  //subscribe olunabilir bir response model döneceksin.
  getRentals(): Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
