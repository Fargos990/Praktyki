import { Component } from '@angular/core';

@Component({
  selector: 'app-ekstremalne',
  templateUrl: './ekstremalne.component.html',
  styleUrls: ['./ekstremalne.component.scss']
})
export class EkstremalneComponent {
  wskazowki = ['Iteracyjność - program tworzy się w iteracjach, planuje się tylko następną iterację. Efektem każdej iteracji powinna być wersja programu spełniającą założenia dla danej iteracji.',
  'Nie projektować z góry - Nie można przewidzieć, jaka architektura będzie dla danego problemu. Dlatego należy ją tworzyć w miarę rozszerzenia programu.',
  'Testy jednostkowe - Pisze sie je zanim zacznie się pisać kod. Potem pisze sie kod, który potrafi je wszystkie przejść. Takie testy dają zapewnienie, że to. co waże zostanie zaprojektowane.',
  'Programowanie parami - jedna osoba pisze kod, druga obserwuje, zgłasza poprawki itd. Programiści zamieniają się co kilkadziesiąt minut. Umożliwia to wyła;anie wielu błędów i wzajemną naukę.',
  'Ciągłe modyfikacje architektury - jeśli jej modyfikacja ułatwi przejście danej iteracji i nie zepsuje wyników testów, należy ją wykonać.',
  'Stały kontakt z klientem - specyfikacje prawie zawsze są wieloznaczne i sprzeczne ze sobą. Dlatego należy mieć stały kontakt z klientem. Jeśli komunikacja jest dobra, można nawet obejść się bez specyfikacji.'
];
}
