import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number = 0;

  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = Number(this._route.snapshot.params['id']);

    this._route.params.subscribe(
      (param)=>{
        this.propertyId = +param['id'];
      }
    )
  }

  onSelectedNext(){
    this.propertyId +=1;
    this.router.navigate(['property-detail', this.propertyId]);

  }
}
