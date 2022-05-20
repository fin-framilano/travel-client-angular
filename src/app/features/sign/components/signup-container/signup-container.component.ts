import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { RoleEnum } from 'src/app/shared/enum/role-enum';
import { User } from 'src/app/shared/model/user-model';
import { SecurityUtils } from 'src/app/shared/utils/security.utils';

@Component({
  selector: 'fin-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {

  currentEmail: string = "";
  insertedEmail: string = ""
  currentPassword: string = "";
  confirmPassword: string = ""
  alreadyExist: boolean = false

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  completeSignupForm(signupForm: NgForm) {
    this.insertedEmail = signupForm.value.campoEmail
    this.userService.findUserByEmail(this.insertedEmail).subscribe(
      result => {
        if (result != null) {
          this.alreadyExist = true
          return
        } else {
          const userToSave: User = {
            id: 0,
            mail: signupForm.value.campoEmail,
            password: SecurityUtils.computeMd5(signupForm.value.campoPassword),
            role: RoleEnum.GUEST
          }
          this.userService.addUser(userToSave).subscribe(
            result => {
              console.log(result)
              console.log("UTENTE REGISTRATO!")
            },
            error => {
              console.log(error)
            }
          )
          this.router.navigateByUrl('login/signin')
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  goToLogin() {
    this.router.navigateByUrl("login/signin")
  }


}
