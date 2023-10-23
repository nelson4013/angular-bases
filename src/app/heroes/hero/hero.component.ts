import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    this.name = 'thor';
  }
  changeAge(): void {
    this.age = 1500;
  }
  resetForm(): void {
    this.name = 'iron Man';
    this.age = 45;
  }
}
