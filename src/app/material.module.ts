import { NgModule } from '@angular/core';
import { MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule } from '@angular/material';

    const modules = [  
    MatToolbarModule, 
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule 
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule {}