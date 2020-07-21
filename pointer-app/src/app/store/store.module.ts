import {StoreModule} from '@ngrx/store';
import {NgModule,} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import * as pointerReducer from './reducer';

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forRoot({pointer:pointerReducer.reducer}),
        StoreDevtoolsModule.instrument({
            maxAge:25,
        }),
    ],
})
export class PointerStoreModule{}
