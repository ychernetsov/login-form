import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
