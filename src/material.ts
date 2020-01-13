import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  imports: [MatButtonModule,MatGridListModule,MatCardModule,MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatTabsModule],
  exports: [MatButtonModule,MatGridListModule,MatCardModule,MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatTabsModule] ,
})
export class MaterialModule{}
