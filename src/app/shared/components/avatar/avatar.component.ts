import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  name = '';
  username ='';
  constructor(private currentUser:UserService, private router: Router,) { 
    let user = this.currentUser.getCurrentUser();
    this.name = user.firstName + ' ' + user.lastName;
    this.username = user.username;
  }
  
  toggleWithGreeting(popover) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({});
    }
  }
  logout(){
    this.router.navigate(['login']);
  }
  ngOnInit() {
    
  }

}
