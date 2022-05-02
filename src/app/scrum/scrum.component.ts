import { Component } from '@angular/core';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.scss']
})
export class ScrumComponent {
  artefakty = ['Backlog produktu to lista prac/zadań do wykonania dla zespołu.',
  'Backlog sprintu to lista elementów lub poprawek błędów wybranych przez zespół do implementacji w bieżącym cyklu sprintu.',
  'Cel sprintu jest zdatnym do użycia produktem końcowym sprintu.'
]
kluczoweWydarzenia = [
'Porządkowanie backlogu, czyli nadzorowanie prac nad produktem.',
'Planowanie sprintu, czyli planowanie zakresu prac do wykonania podczas bieżącego sprintu',
'Sprint to konkretny przedział czasowy w trakcie którego zespół pracuje nad ukończeniem prototypu',
'Codzienny Scrum to bardzo krótkie, codzienne spotkanie na którym członkowie zespołu są informowani o postępach, upewniają się że dąża do realizacji celu i planują działania na kolejny dzień. ',
'Przegląd sprintu, czyli zebranie się, aby przedstawić dotychczasowe postępy/prototyp',
'Retrospektywa sprintu polega na udokumentowaniu i omówieniu tego co poszło dobrze, a co trzeba poprawić'
]

}
