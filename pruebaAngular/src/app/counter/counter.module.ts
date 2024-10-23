import { NgModule } from "@angular/core";
import { ComponenteConti } from "./components/app.component";

@NgModule({
    declarations:[
        ComponenteConti
    ],
    exports:[
        ComponenteConti
    ]

})
export class CounterModule {

}