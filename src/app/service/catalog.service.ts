import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catalog } from '../Models/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private readonly baseURL: string = "https://localhost:44346/";
  constructor(private httpClient: HttpClient) { }

  public getCatalogs(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<Catalog[]>(this.baseURL + "Catalogs/GetCatalogs", { headers: headers });
  }
}
