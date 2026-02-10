import { useState, useEffect } from "react";
import {
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
  FaChrome,
  FaEdge,
} from "react-icons/fa";

function AlternatePDFViewer({ pdfPath, title = "PDF Document" }) {
  const [viewMethod, setViewMethod] = useState("object"); // 'object', 'iframe', 'embed'
  const [browserInfo, setBrowserInfo] = useState({ name: "", isChrome: false });

  useEffect(() => {
    // Detect browser type
    const detectBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      let browserName = "unknown";
      let isChrome = false;

      if (userAgent.includes("chrome") && !userAgent.includes("edge")) {
        browserName = "Chrome";
        isChrome = true;
      } else if (userAgent.includes("edge")) {
        browserName = "Edge";
      } else if (userAgent.includes("firefox")) {
        browserName = "Firefox";
      } else if (userAgent.includes("safari")) {
        browserName = "Safari";
      }

      setBrowserInfo({ name: browserName, isChrome });

      // Auto-adjust view method for Chrome
      if (isChrome) {
        console.log("Chrome detected - PDF viewing may have restrictions");
      }
    };

    detectBrowser();
  }, []);

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

  const _downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = () => {
    window.open(pdfPath, "_blank");
  };

  const renderPDFViewer = () => {
    const commonStyle = { width: "100%", height: "700px", minHeight: "500px" };

    // Chrome-specific handling
    if (browserInfo.isChrome && viewMethod === "object") {
      return (
        <div className="space-y-4">
          <object
            data={pdfPath}
            type="application/pdf"
            style={commonStyle}
            className="rounded-lg border border-slate-300 dark:border-slate-600"
          >
            <div className="flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="text-center">
                <FaChrome className="mx-auto text-4xl text-gray-400 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Chrome blocked PDF embedding.
                </p>
                <div className="space-x-2">
                  <button
                    onClick={() => setViewMethod("iframe")}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Try Iframe
                  </button>
                  <button
                    onClick={openInNewTab}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
            </div>
          </object>
        </div>
      );
    }

    switch (viewMethod) {
      case "object":
        return (
          <object
            data={pdfPath}
            type="application/pdf"
            style={commonStyle}
            className="rounded-lg border border-slate-300 dark:border-slate-600"
          >
            <div className="flex items-center justify-center p-8 text-slate-600 dark:text-slate-400">
              <div className="text-center">
                <FaFilePdf className="mx-auto text-4xl mb-4" />
                <p className="mb-4">
                  Your browser doesn't support PDF viewing with object tag.
                </p>
                <button
                  onClick={() => setViewMethod("iframe")}
                  className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded"
                >
                  Try iframe
                </button>
              </div>
            </div>
          </object>
        );

      case "iframe":
        return (
          <div className="space-y-4">
            {browserInfo.isChrome && (
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-2">
                  <FaChrome className="text-blue-600" />
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Chrome iframe mode: PDF should display better this way!
                  </p>
                </div>
              </div>
            )}
            <iframe
              src={pdfPath}
              style={commonStyle}
              className="rounded-lg border border-slate-300 dark:border-slate-600"
              title="PDF Resume"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            >
              <div className="flex items-center justify-center p-8 text-slate-600 dark:text-slate-400">
                <div className="text-center">
                  <FaFilePdf className="mx-auto text-4xl mb-4" />
                  <p className="mb-4">
                    Your browser doesn't support PDF viewing with iframe.
                  </p>
                  <button
                    onClick={() => setViewMethod("embed")}
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded"
                  >
                    Try embed
                  </button>
                </div>
              </div>
            </iframe>
          </div>
        );

      case "embed":
        return (
          <embed
            src={pdfPath}
            type="application/pdf"
            style={commonStyle}
            className="rounded-lg border border-slate-300 dark:border-slate-600"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="pdf-viewer bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
        <h3 className="font-semibold text-slate-800 dark:text-slate-200">
          {title}
        </h3>

        <div className="flex items-center space-x-2">
          {/* View Method Selector */}
          <select
            value={viewMethod}
            onChange={(e) => setViewMethod(e.target.value)}
            className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-sm"
          >
            <option value="object">Object Tag</option>
            <option value="iframe">Iframe</option>
            <option value="embed">Embed Tag</option>
          </select>

          <button
            onClick={openInNewTab}
            className="flex items-center space-x-1 px-3 py-2 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-md transition-colors"
          >
            <FaExternalLinkAlt />
            <span className="hidden sm:inline">New Tab</span>
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="pdf-content p-4">{renderPDFViewer()}</div>
    </div>
  );
}

export default AlternatePDFViewer;
