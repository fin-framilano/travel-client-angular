import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { RoleEnum } from 'src/app/shared/enum/role-enum';
import { User } from 'src/app/shared/model/user-model';

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
    this.userService.getAllUser().subscribe(
      result => {
        for (let index = 0; index < result.length; index++) {
          const user = result[index];
          console.log(user.mail)
          console.log(this.insertedEmail)
          if (user.mail === this.insertedEmail) {
            this.alreadyExist = true
            return
          }
        }
        if (!this.alreadyExist) {
          const userToSave:User={
            id:0,
            mail:signupForm.value.campoEmail,
            password:signupForm.value.campoPassword,
            role:RoleEnum.GUEST
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
