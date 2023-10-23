import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  public heroNames: string[] = ['Spderman', 'Iron man ', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLasthero(): void {
     this.deletedHero = this.heroNames.pop();
  }
}
