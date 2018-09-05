import { Component, Input, OnChanges } from '@angular/core';
import { PDFDocumentProxy, PDFProgressData } from 'ng2-pdf-viewer';

@Component({
    selector: 'pdf-file-viewer',
    templateUrl: './pdf-file-viewer.component.html',
    styleUrls: ['./pdf-file-viewer.component.css']
})

export class PdfFileViewerComponent {

    @Input() pdfSrc: string;
    constructor() {

    }

    pdfFiles: {};
    pdfNumber: number;
    pdfCount;
    // pdfSrc: string = 'http://www.africau.edu/images/default/sample.pdf';
    // pdfSrc: string = '../../assets/test.pdf';
    
    callBackFn(pdf: PDFDocumentProxy) {
        if (pdf && pdf.hasOwnProperty('pdfInfo')) {
            for (let i = 0; i < pdf['pdfInfo'].numPages; i++) {
                this.pdfCount.push(i);
            }
        }
    }

    ngOnInit() {
        this.pdfNumber = 0;
        this.pdfCount = [];

    }

    previousPdf() {
        if (this.pdfNumber > 0) {
            this.pdfNumber = this.pdfNumber - 1;
        }
    }

    nextPdf() {
        if (this.pdfNumber < this.pdfCount.length - 1) {
            this.pdfNumber = this.pdfNumber + 1;
        }
    }



}
