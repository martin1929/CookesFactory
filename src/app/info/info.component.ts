import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UrlEnums} from "./urlEnums";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  public frinds=false;
  public about=false;
  public contact=true;
  public turnOn:string='';
  public urlEnums=UrlEnums;
  public friendsArray: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFriends();
    this.route.queryParams
      .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.turnOn = params['turnOn'];
          console.log(this.turnOn); // price
        }
      );
    this.getInfoFromUrl();
  }

  getInfoFromUrl(){
    if (this.turnOn==='contact'){
      this.contact=true;
      this.about=false;
      this.frinds=false;
    }
    if (this.turnOn==='aboutUs'){
      this.about=true;
      this.contact=false;
      this.frinds=false;
    }
    if (this.turnOn==='ourFriends'){
      this.frinds=true;
      this.about=false;
      this.contact=false;

    }
  }

  getFriends() {
    this.friendsArray.push('friend1');
    this.friendsArray.push('friend2');
    this.friendsArray.push('friend3');
  }

  protected readonly UrlEnums = UrlEnums;
}



