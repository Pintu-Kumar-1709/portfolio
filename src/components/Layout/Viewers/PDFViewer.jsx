import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaFilePdf,
  FaDownload,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { checkPDFExists } from "../../../utils/pdfUtils";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "";

function PDFViewer({
  pdfPath,
  title = "Document",
  className = "",
  showControls = true,
  defaultScale = 1.0,
  onLoadSuccess,
  onError,
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(defaultScale);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    const checkPDF = async () => {
      if (pdfPath) {
        const exists = await checkPDFExists(pdfPath);
        setPdfExists(exists);
        if (!exists) {
          setIsLoading(false);
        }
      }
    };
    checkPDF();
  }, [pdfPath]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
    onLoadSuccess?.(numPages);
  };

  const onDocumentLoadError = (error) => {
    setIsLoading(false);

    if (
      error.message.includes("worker") ||
      error.message.includes("module specifier")
    ) {
      setUseIframeFallback(true);
    }
    onError?.(error);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const _downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!pdfPath) {
    return (
      <div className="flex items-center justify-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="text-center">
          <FaFilePdf className="mx-auto text-6xl text-slate-400 mb-4" />
          <p className="text-slate-600 dark:text-slate-300">
            No PDF path provided
          </p>
        </div>
      </div>
    );
  }

  // Show setup instructions only if PDF doesn't exist
  if (!pdfExists && !isLoading) {
    return (
      <div className="flex items-center justify-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="text-center">
          <FaFilePdf className="mx-auto text-6xl text-orange-400 mb-4" />
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
            PDF Resume Not Found
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Add your PDF resume to the public/documents/ folder
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`pdf-viewer bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {/* PDF Controls */}
      {showControls && !useIframeFallback && (
        <div className="flex flex-wrap items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
          <div className="flex items-center space-x-4">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">
              {title}
            </h3>
            <span className="text-sm text-slate-500">
              {numPages && `Page ${pageNumber} of ${numPages}`}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Navigation */}
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="p-2 rounded-md bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="p-2 rounded-md bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FaArrowRight />
            </button>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 ml-4">
              <button
                onClick={zoomOut}
                className="p-2 rounded-md bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
              >
                -
              </button>
              <span className="px-2 py-1 text-sm bg-slate-100 dark:bg-slate-600 rounded">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                className="p-2 rounded-md bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PDF Content */}
      <div className="pdf-content">
        {/* Show loading only if PDF exists but Document component is still loading */}
        {isLoading && pdfExists && (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
            <span className="ml-3 text-slate-600 dark:text-slate-300">
              Loading PDF...
            </span>
          </div>
        )}

        {/* Show message if PDF doesn't exist */}
        {!pdfExists && !isLoading && (
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <FaFilePdf className="mx-auto text-6xl text-orange-400 mb-4" />
              <p className="text-slate-600 dark:text-slate-300">
                PDF file not found
              </p>
            </div>
          </div>
        )}

        {/* Render PDF Document if it exists */}
        {pdfExists && !useIframeFallback && (
          <div className="flex justify-center p-4">
            <Document
              file={pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
                  <span className="ml-3 text-slate-600 dark:text-slate-300">
                    Loading PDF Document...
                  </span>
                </div>
              }
              error={
                <div className="flex items-center justify-center p-8">
                  <div className="text-center">
                    <FaFilePdf className="mx-auto text-6xl text-red-400 mb-4" />
                    <p className="text-slate-600 dark:text-slate-300">
                      Failed to load PDF document
                    </p>
                    <button
                      onClick={() => setUseIframeFallback(true)}
                      className="mt-4 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors"
                    >
                      Try Iframe Viewer
                    </button>
                  </div>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                className="shadow-lg"
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sky-400"></div>
                    <span className="ml-2 text-slate-500">Loading page...</span>
                  </div>
                }
                error={
                  <div className="flex items-center justify-center p-8">
                    <p className="text-red-500">
                      Failed to load page {pageNumber}
                    </p>
                  </div>
                }
              />
            </Document>
          </div>
        )}

        {/* Iframe Fallback */}
        {pdfExists && useIframeFallback && (
          <div className="flex justify-center p-4">
            <div className="w-full max-w-4xl">
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Using iframe fallback viewer.
                </p>
              </div>
              <iframe
                src={pdfPath}
                className="w-full h-96 border border-slate-300 dark:border-slate-600 rounded-lg"
                title="PDF Resume"
                style={{ minHeight: "600px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PDFViewer;
