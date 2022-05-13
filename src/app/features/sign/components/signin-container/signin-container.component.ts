import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { RoleEnum } from 'src/app/shared/enum/role-enum';
import { User } from 'src/app/shared/model/user-model';


@Component({
  selector: 'fin-signin-container',
  templateUrl: './signin-container.component.html',
  styleUrls: ['./signin-container.component.css']
})
export class SigninContainerComponent implements OnInit {

  insertedEmail: string = ''
  insertedPassword: string = ''
  incorrectForm: boolean = false

  constructor(
    private router: Router,
    private UserService: UserService
  ) {

  }

  completeSigninForm(signinForm: NgForm) {
    this.insertedEmail = signinForm.value.campoEmail
    this.insertedPassword = signinForm.value.campoPassword
    this.UserService.getAllUser().subscribe(
      result => {
        for (let index = 0; index < result.length; index++) {
          const user: User = result[index];
          if (user.mail === this.insertedEmail && user.password === this.insertedPassword) {
            this.incorrectForm = false
            if (user.role === RoleEnum.GUEST) this.router.navigateByUrl('homeuser' + "/" + user.id)
            if (user.role === RoleEnum.ADMIN) this.router.navigateByUrl('homeadmin')
            return
          } else {
            this.incorrectForm = true
          }
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  goToSignUp() {
    this.router.navigateByUrl("login/signup")
  }

  ngOnInit(): void {
  }

}
