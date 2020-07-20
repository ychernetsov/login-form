import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-owners-child',
  templateUrl: './owners-child.component.html',
  styleUrls: ['./owners-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnersChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
