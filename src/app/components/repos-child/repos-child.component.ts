import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-repos-child',
  templateUrl: './repos-child.component.html',
  styleUrls: ['./repos-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
