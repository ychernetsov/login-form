import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-child-of-child',
  templateUrl: './child-of-child.component.html',
  styleUrls: ['./child-of-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOfChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
