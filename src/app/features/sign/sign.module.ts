import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SigninContainerComponent } from "./components/signin-container/signin-container.component";
import { SignupContainerComponent } from "./components/signup-container/signup-container.component";
import { SignRoutingModule } from "./sign-routing.module";

@NgModule({
    declarations: [ SigninContainerComponent, SignupContainerComponent ],
    imports: [
        CommonModule,
        FormsModule,
        SignRoutingModule
    ]
})
export class SignModule {

}