import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Laptop } from '../Models/laptop';
import { RowOfLaptops } from '../Models/rowOfLaptops';
import { LaptopService } from '../service/laptop.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public laptops: RowOfLaptops[] = [];
  public arrayLaptops: Laptop[] = [];
  constructor(private formBuilder: FormBuilder, private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.getLeptops()
  }

  getLeptops() {
    this.laptopService.getLaptops().subscribe((data: any) => {
      this.arrayLaptops = data;

      for (let i = 0; i < this.arrayLaptops.length; i += 4) {
        this.laptops.push(new RowOfLaptops(this.arrayLaptops[i], this.arrayLaptops[i + 1], this.arrayLaptops[i + 2], this.arrayLaptops[i + 3]));
      }
    })
  }
}
