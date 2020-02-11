import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    declarations: [],
    imports: [
        MDBBootstrapModule.forRoot(),
    ],
    exports: [
        MDBBootstrapModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class MdbootstrapModule { }
