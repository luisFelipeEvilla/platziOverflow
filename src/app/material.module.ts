import { NgModule } from '@angular/core';
import { MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatStepperModule } from '@angular/material';

    const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatStepperModule
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule {}
