import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  @Input() sugus = {
    color: 'yellow',
    sabor: 'limón'
  }

  size = '100px'

  constructor() { }

  ngOnInit(): void {
  }

}
