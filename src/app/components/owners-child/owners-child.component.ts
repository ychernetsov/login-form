import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-owners-child',
  templateUrl: './owners-child.component.html',
  styleUrls: ['./owners-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnersChildComponent implements OnInit {
  @Input() owner;
  constructor() { }

  ngOnInit() {
  }

}
