import { Component } from '@angular/core';

@Component({
  selector: 'app-metodyki',
  templateUrl: './metodyki.component.html',
  styleUrls: ['./metodyki.component.scss']
})
export class MetodykiComponent {

  modele = ['kaskadowy','spiralny','prototypowy','agile','ekstremalne'];

  CapitalizeFirstLetter(value : string)
  {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
