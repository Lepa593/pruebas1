import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Contador App';
  numero:number =10;

  basenumero:number = 5;

 acumular(){
   this.numero += this.basenumero;
 }
}
