import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
