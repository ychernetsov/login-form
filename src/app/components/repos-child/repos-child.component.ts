import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Repo } from 'src/app/models/models';

@Component({
  selector: 'app-repos-child',
  templateUrl: './repos-child.component.html',
  styleUrls: ['./repos-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposChildComponent implements OnInit {
  @Input() repo: Repo;
  constructor() { }

  ngOnInit() {
  }

}
