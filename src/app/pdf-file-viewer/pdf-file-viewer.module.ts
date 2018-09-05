import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { PdfFileViewerComponent } from './pdf-file-viewer.component';
 import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
   imports: [BrowserModule, PdfViewerModule],
   exports: [PdfFileViewerComponent],
   declarations: [PdfFileViewerComponent],
   providers: [],
})

export class PdfFileViewerModule { }
