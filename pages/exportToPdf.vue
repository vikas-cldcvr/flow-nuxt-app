<template>
  <f-div direction="column" overflow="scroll" width="100%" height="100%">
    <f-button
      icon-left="i-arrow-down"
      label="download"
      @click="downloadFile"
      size="small"
    ></f-button>
    <ClientOnly> <ReportTemplate01></ReportTemplate01></ClientOnly>
  </f-div>
</template>
<script lang="ts" setup>
import jsPDF from "jspdf";

import html2canvas from "html2canvas";

const downloadFile = () => {
  let elementHTML = document.querySelector(
    "#reportTemplate"
  ) as HTMLBodyElement;

  html2canvas(elementHTML).then(function (canvas) {
    // Create a new PDF with the same dimensions as the image.
    const pdf = new jsPDF({
      orientation:
        elementHTML.offsetHeight > elementHTML.offsetWidth
          ? "portrait"
          : "landscape",
      unit: "px",
      format: [elementHTML.offsetHeight, elementHTML.offsetWidth],
    });

    // Add the image to the PDF with dimensions equal to the internal dimensions of the page.
    pdf.addImage(
      canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream"),
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );

    // Save the PDF with the filename specified here:
    pdf.save("image.pdf");
  });

  //   // export as image
  //   html2canvas(elementHTML).then(function (canvas) {
  //     var a = document.createElement("a");

  //     a.href = canvas
  //       .toDataURL("image/jpeg")
  //       .replace("image/jpeg", "image/octet-stream");
  //     a.download = "somefilename.jpg";
  //     a.click();
  //   });

  // export as pdf
  //   let doc = new jsPDF({ orientation: "p", unit: "px" });

  //   doc.html(elementHTML, {
  //     html2canvas: {
  //       scale: 0.45,
  //       async: true,
  //     },
  //     callback: function (doc) {
  //       doc.save("sample-document.pdf");
  //     },
  //     x: 0,
  //     y: 0,
  //     width: elementHTML.offsetWidth, //target width in the PDF document
  //     windowWidth: 1000, //window width in CSS pixels
  //   });
  //   doc
  //     .svg(elementHTML, {
  //       x: 0,
  //       y: 0,
  //       width: elementHTML.offsetWidth,
  //       height: elementHTML.offsetHeight,
  //     })
  //     .then(() => {
  //       // save the created pdf
  //       doc.save("myPDF.pdf");
  //     });
};
</script>
<style>
.custom-big-number {
  font-size: 36px !important;
  font-weight: 400 !important;
  line-height: 43px !important;
  letter-spacing: 0em !important;
}
.table-cell-custom {
  width: 300px !important;
}
@media (max-width: 768px) {
  .custom-report-width {
    width: 300px !important;
  }
}
</style>
