import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {
  heroes: any[] = [];
  nombre: string;

  constructor(
    private router: Router,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.nombre = params[`nombre`];
      this.heroes = this.heroesService.buscarHeroes(params[`nombre`]);
    });
  }

  verHeroe(heroe: Heroe): void {
    const index = this.heroesService.getHeroeIndex(heroe);

    if (index !== -1) {
      this.router.navigate(['/heroe', index]);
    }
  }
}
