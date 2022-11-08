import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from 'src/app/interfaces/iProperties.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Properties!: Array<IProperty>;

  constructor(private housingService: HousingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
   this.housingService.getAllProperties(this.SellRent)
    .subscribe(res=>{
      this.Properties = res;
    })
  }

}
