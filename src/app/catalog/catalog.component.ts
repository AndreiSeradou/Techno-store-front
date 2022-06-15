import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Catalog } from '../Models/catalog';
import { Laptop } from '../Models/laptop';
import { RowOfCatalogs } from '../Models/rowOfCatalogs';
import { RowOfLaptops } from '../Models/rowOfLaptops';
import { CatalogService } from '../service/catalog.service';
import { LaptopService } from '../service/laptop.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public laptops: RowOfCatalogs[] = [];
  public arrayLaptops: Catalog[] = [];
  constructor(private formBuilder: FormBuilder, private laptopService: LaptopService, private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getCatalogs()
  }

  getCatalogs() {
    this.catalogService.getCatalogs().subscribe((data: any) => {
      this.arrayLaptops = data;

      for (let i = 0; i < this.arrayLaptops.length; i += 4) {
        this.laptops.push(new RowOfCatalogs(this.arrayLaptops[i], this.arrayLaptops[i + 1], this.arrayLaptops[i + 2], this.arrayLaptops[i + 3]));
      }
    })
  }
}
