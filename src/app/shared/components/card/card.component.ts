import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() name: string;
  @Input() author: string;
  @Input() path: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cardAction(): void {
    this.router.navigate(this.path);
  }
}
