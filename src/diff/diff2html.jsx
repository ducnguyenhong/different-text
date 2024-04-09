import * as Diff2Html from "diff2html";
import "diff2html/bundles/css/diff2html.min.css";
import { useEffect, useState } from "react";

export default function Diff2HtmlLib() {
  const [diff, setDiff] = useState("");

  useEffect(() => {
    var diffHtml = Diff2Html.html(
      'Index: hello\n===================================================================\n--- hello\n+++ hello\n@@ -5,10 +5,8 @@\n     "type": "doubleclick",\n     "data-slot": "/15188745/Pocket-Lint_AMP10",\n     "data-enable-refresh": "30",\n     "data-loading-strategy": "1.25",\n-    "data-lazy-fetch": "true",\n-    "data-multi-size-validation": "false",\n     "rtc-config": {\n         "vendors": {\n             "t13": {\n                 "TAG_ID": "664c8bef-8137-4250-92bf-15420d7f6ea9",\n@@ -27,8 +25,8 @@\n                 "PUBLISHER_SUB_ID": "PocketLint-AMP-10"\n             }\n         },\n         "urls": [\n-            "https://api.floors.dev/sgw/v1/amp/floors?k=QBNaieBwWeBYMRGsreCNdCsuWLTtmZ&data-slot=/15188745/Pocket-Lint_AMP10"\n+            "https://api.floors.dev/sgw/v1/amp/floors?k=QBNaieBwWeBYMRGsreCNdCsuWLTtmZ&slot=/15188745/Pocket-Lint_AMP10"\n         ]\n     }\n }\n\\ No newline at end of file\n',
      {
        inputFormat: "json",
        drawFileList: true,
        fileListToggle: false,
        fileListStartVisible: false,
        fileContentToggle: false,
        matching: "lines",
        outputFormat: "side-by-side",
        synchronisedScroll: true,
        highlight: true,
        renderNothingWhenEmpty: false
      }
    );

    setDiff(diffHtml);
  }, []);

  console.log(diff);

  return <div id="code-diff" dangerouslySetInnerHTML={{ __html: diff }}></div>;
}
