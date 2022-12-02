import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaindexPageRoutingModule } from './maindex-routing.module';
import { MaindexPage } from './maindex.page';
import { ComponentsModules } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaindexPageRoutingModule,
    ComponentsModules,
    HttpClientModule
  ],
  declarations: [MaindexPage]
})
export class MaindexPageModule {}
