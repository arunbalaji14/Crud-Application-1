import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() customer?: Customer;
  @Output() customerUpdated = new EventEmitter<Customer[]>();

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(customer: Customer) {
    this.superHeroService
      .updateHero(customer)
      .subscribe((heroes: Customer[]) => this.customerUpdated.emit(heroes));
  }

  deleteHero(customer: Customer) {
    this.superHeroService
      .deleteHero(customer)
      .subscribe((heroes: Customer[]) => this.customerUpdated.emit(heroes));
  }

  createHero(customer: Customer) {
    this.superHeroService
      .createHero(customer)
      .subscribe((heroes: Customer[]) => this.customerUpdated.emit(heroes));
  }
}
