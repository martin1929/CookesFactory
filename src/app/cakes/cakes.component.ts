import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UrlEnums} from "../info/urlEnums";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {CakeService} from "./cakeService";
import {CakeModel} from "../models/CakeModel";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private cakeService: CakeService) {
  }

  ngOnInit(): void {
    this.cakeService.getAllCakes().subscribe((response) => {
      let responseDate = response;
      this.cakeArray = responseDate;
      console.log(responseDate)
    });

  }

  public cakeArray: CakeModel[] = [];
  public cardCakeArray: CakeModel[] = [];
  public cakeShowArray: string[] = [];
  public cake: CakeModel = new CakeModel();
  public urlEnums = UrlEnums;
  public isBasket = false;
  public buttonText = "Shopping cart"
  public multy:number=1;


  showModalImg(cake: CakeModel) {
    this.cake = cake
  }

  addToCard(itemName: CakeModel) {
    this.cardCakeArray.push(itemName);
  }


  openBasket() {
    this.isBasket = !this.isBasket
    if (this.isBasket) {
      this.buttonText = 'Back to Cakes'
    } else {
      this.buttonText = 'Shopping cart'
    }
  }



  protected readonly parseInt = parseInt;

  onCountChange() {

  }
}
