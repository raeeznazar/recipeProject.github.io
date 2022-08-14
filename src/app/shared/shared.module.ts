import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropDownDirective } from '../directives/drop-down.directive';
import { LoadingSpinnerComponent } from '../loadingSpinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropDownDirective,
  ],

  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropDownDirective,
    CommonModule,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}
