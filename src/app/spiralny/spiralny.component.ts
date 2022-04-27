import { Component } from '@angular/core';

@Component({
  selector: 'app-spiralny',
  templateUrl: './spiralny.component.html',
  styleUrls: ['./spiralny.component.scss']
})
export class SpiralnyComponent {

  cele = ['Pierwsza Faza: Planowanie ( ustalanie ogólnych wariantów struktury systemu, dokonywane jest określenie ograniczeń i alternatyw oraz możliwości ich wykonywania )',
  'Druga Faza: Analiza Ryzyka ( dokonywana jest ocena i wartościowanie, uwzględniając analizę ryzyka każdej alternatywy )',
  'Trzecia Faza: Testy i Realizacja ( wytworzenie i sprawdzenie zrealizowanego celu przez zleceniodawcę i zawarcie w sobie zmian potrzebnych do osiągnięcia końcowego produktu )',
  'Czwarta Faza: Planowanie Następnych Etapów ( ostatnia faza występuje w przypadku wymaganej zmiany zaproponowanego modelu i dotyczy planowania następnej iteracji'
]
  
}
