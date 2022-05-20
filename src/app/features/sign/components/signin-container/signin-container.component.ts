import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { RoleEnum } from 'src/app/shared/enum/role-enum';
import { SecurityUtils } from 'src/app/shared/utils/security.utils';



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
    private authService: AuthService
  ) {

  }

  completeSigninForm(signinForm: NgForm) {
    this.insertedEmail = signinForm.value.campoEmail
    this.insertedPassword = signinForm.value.campoPassword
    let digestMd5 = SecurityUtils.computeMd5(this.insertedPassword);
    this.authService.login(this.insertedEmail, digestMd5).subscribe(
      result => {
        if (result == null) this.incorrectForm = true
        else {
          if (result.role === RoleEnum.GUEST) this.router.navigateByUrl('homeuser' + "/" + result.id)
          if (result.role === RoleEnum.ADMIN) this.router.navigateByUrl('homeadmin')
          this.incorrectForm = false
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

