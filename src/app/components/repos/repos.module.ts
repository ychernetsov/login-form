import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReposComponent } from "./repos.component";
import { ReposChildComponent } from "../repos-child/repos-child.component";
import { RepoDetailsComponent } from "../repos-child/repo-details/repo-details.component";

@NgModule({
  declarations: [ReposComponent, ReposChildComponent, RepoDetailsComponent],
  imports: [CommonModule]
})
export class ReposModule {}
