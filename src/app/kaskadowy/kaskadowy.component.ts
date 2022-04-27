import { Component } from '@angular/core';

@Component({
  selector: 'app-kaskadowy',
  templateUrl: './kaskadowy.component.html',
  styleUrls: ['./kaskadowy.component.scss']
})
export class KaskadowyComponent{
  kroki = ['Planowanie Systemu (w tym specyfikacja wymagań)',
  'Analiza Systemu (w tym analiza wymagań i trudności wykonalności)',
  'Projekt Systemu (poszczególnych struktur itp.)',
  'Implementacja (wytworzenie kodu)',
  'Testowanie (poszczególnych elementów systemu i elemntów połączonych w całość)',
  'Pielęgnacja Powstałego Systemu'
];

}
