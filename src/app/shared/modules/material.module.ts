import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
