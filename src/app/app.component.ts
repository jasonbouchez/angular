import {Component, OnInit } from "@angular/core";
import { APPRENANTS } from './mock-apprenants-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apprenantList = APPRENANTS;
  title = "angular";
  nom ="ptit"
  prenom="zin"
  age ="20"
  fps="jeux de guerre"
  genre =" tarkov , call off"
  selectedId:number;



  ngOnInit(){
    console.table(this.apprenantList);
  }

  selectApprenant(index:string) :number {
    const indexSelect = +index;
    console.table(this.apprenantList[indexSelect]);
    return this.selectedId = +index
}


}