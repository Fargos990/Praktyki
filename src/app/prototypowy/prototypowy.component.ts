import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototypowy',
  templateUrl: './prototypowy.component.html',
  styleUrls: ['./prototypowy.component.scss']
})
export class PrototypowyComponent {

  kroki = ['Wyznaczenie celów w zgodzie z założeniami klienta.',
  'Wykonanie prototypu.',
  'Przedstawienie klientowi prototypu i wskazanie przez niego błędów.',
  'Powtarzanie poprzednich kroków, aż do usatysfakcjonowania klienta.']

}
