import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { LoggerService } from '../../shared/logger.service';
import { TelemetryService } from '../../services/telemetry.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  loginForm: FormGroup;
  returnUrl: string;


  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private telemetryService: TelemetryService) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
    this.authenticationService.logout();

    this.returnUrl = 'pages/dashboard';
  }
  getErrorEmailMessage() {
    return this.username.hasError('required') ? 'Email is required' :
      this.username.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorPasswordMessage() {
    return this.username.hasError('required') ? 'Password is required' : '';
  }
  login() {
    if (this.username.valid && this.password.valid) {
      this.authenticationService.login(this.username.value, this.password.value)

        .subscribe(
          data => {
            let userIds = [];
            console.log('userData===============', data);
            this.telemetryService.getSectionList().subscribe(data => {

              if (data["rosters"] && data["rosters"].length > 0) {
                console.log(' this.sectionList=========', data["rosters"]);
                data["rosters"].forEach(item => {
                  userIds.push(item.studentIds);
                });
                userIds.filter((item, i) => {
                  return userIds.indexOf(item) === i;
                })
                console.log('userids list', userIds);
                if (userIds.length > 0) {
                  this.telemetryService.getUsersDetails(userIds).subscribe(data => {
                    console.log('user profileData', data);
                  }, error => {
                    console.log('error in getting user profile details');
                  })
                }
              }
            }, error => {
              console.log('error in getting section data');
            });



            this.router.navigate([this.returnUrl]);

          },
          error => {
            LoggerService.error(error, {});
          });



    }
  }

}
