import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Laptop } from '../Models/laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private readonly baseURL: string = "https://localhost:44346/";
  constructor(private httpClient: HttpClient) { }

  public getLaptops() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<Laptop[]>(this.baseURL + "Laptops/GetLaptops", { headers: headers });
  }
}
