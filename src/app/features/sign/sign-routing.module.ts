import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninContainerComponent } from "./components/signin-container/signin-container.component";
import { SignupContainerComponent } from "./components/signup-container/signup-container.component";

const routes: Routes = [
    {
        path: 'signin', component: SigninContainerComponent
    },
    {
        path: 'signup', component: SignupContainerComponent
    }
    
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
}
)
export class SignRoutingModule {

}