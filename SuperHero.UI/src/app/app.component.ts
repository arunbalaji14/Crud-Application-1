import { Component } from '@angular/core';
import { Customer} from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';
  customers: Customer[] = [];
  heroToEdit?: Customer;

  constructor(private CustomerService: SuperHeroService) {}

  ngOnInit(): void {
    this.CustomerService
      .getSuperHeroes()
      .subscribe((result: Customer[]) => (this.customers = result));
  }

  updateHeroList(heroes:any) {
    this.customers = heroes;
  }

  initNewHero() {
    this.heroToEdit = new Customer();
  }

  editHero(hero: Customer) {
    this.heroToEdit = hero;
  }
}
