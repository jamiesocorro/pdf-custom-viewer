import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfFileViewerModule } from './pdf-file-viewer/pdf-file-viewer.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PdfFileViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
