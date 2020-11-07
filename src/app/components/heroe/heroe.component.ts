import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private route: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params[`id`]);
      this.heroe = this.heroesService.getHeroe(params[`id`]);
    });
  }

  ngOnInit(): void {}

  volver(): void {
    this.route.navigate(['heroes']);
  }
}
