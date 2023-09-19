import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client-comp/client/client.component';
import { CategoryComponent } from './components/category-comp/category/category.component';
import { ClientServiceService } from './services/client-service.service';
import { CategoryService } from './services/category.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxValidatorModule,
  DxNumberBoxModule
} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { CategoryListComponent } from './components/category-comp/category-list/category-list.component';
import {MatTableModule} from '@angular/material/table';
import { ClientSearchComponent } from './components/client-comp/client-search/client-search.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent, 
    CategoryComponent, 
    CategoryListComponent, 
    ClientSearchComponent 
  ],
  imports: [
    BrowserTransferStateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    FormsModule,
    HttpClientModule,
    DxTextBoxModule,
    DxDateBoxModule,

    DxValidatorModule,
    DxNumberBoxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [ClientServiceService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
