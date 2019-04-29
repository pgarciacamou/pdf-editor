import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfPath from './assets/ConfirmationOfCoverage-2.pdf';
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js';

function App() {
  return (
    <div className="App">
      <Document
        file={pdfPath}
        // onLoadSuccess={this.onDocumentLoadSuccess}
      >
        <Page width={document.documentElement.clientWidth} pageNumber={1} />
      </Document>
    </div>
  );
}

export default App;
