import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador =1;
  nombre = "";
  apellido ="";
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

}
