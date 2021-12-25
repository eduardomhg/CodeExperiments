import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
