import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  title = 'angular-app';
  users=DUMMY_USERS;
  selectedUserId?:string;
  get selectedUser(){
    return this.users.find((user)=> user.id==this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId=id;

  }
}
