import { Component } from '@angular/core';

@Component({
  selector: 'app-przyklad',
  templateUrl: './przyklad.component.html',
  styleUrls: ['./przyklad.component.scss']
})
export class PrzykladComponent {
  cele = ['Wysyłanie zdjęć, filmów bez zapisywania ich',
    'Możliwość obróbki ich poprzez przycinanie, nakładanie filtrów, dodanie tekstu itp.',
    'Możliwość stworzenia własnego "avataru"',
    'Możliwość zrobienia tzw. "story", czyli zdjęcia, filmu, który usunie się po 24h od opublikowania',
    'Łączenie aplikacji z bazą danych do zapisywania kont użytkowników.',


];
}
