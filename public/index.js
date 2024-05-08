const btn = document.querySelector(".bar-btn");
const topbar = document.querySelector(".topbar");
const listBtn = document.querySelectorAll(".btn");


//  close all navbar when any one of the home or pricing button will clicked in mobile mode
listBtn.forEach((items) => {
  items.addEventListener("click", () => {
    topbar.classList.remove("show-height");
    btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
});

// toggle navbar button
btn.addEventListener("click", () => {
  if (topbar.classList.contains("show-height")) {
    topbar.classList.remove("show-height");
    btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    topbar.classList.add("show-height");
    btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
});


// handling fixed footer button
const footerBtn = document.querySelector(".footer-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    footerBtn.style.display = "block";
  } else {
    footerBtn.style.display = "none";
  }
});

// getting the pdf file data dynamically
document.addEventListener("DOMContentLoaded", () => {
  
  navbarContactInfo();
  displayContactInfo();
  pricingContactInfo();

  document
    .getElementById("generatePdfButton")
    ?.addEventListener("click", () => {
      // Hide the button
      document.getElementById("generatePdfButton").style.display = "none";
      generatePDF();
    });


  // Set href attributes for homepage and pricing buttons
  homeButton.setAttribute("href", homeURL);
  pricingButton.setAttribute("href", pricingURL);

  var column1 = document.querySelector(".column1");
  var column2 = document.querySelector(".column2");

  var pricingDataColumn1 = [pricingData[0], pricingData[1], pricingData[2]];
  var pricingDataColumn2 = [pricingData[3], pricingData[4]];

  // Function to generate pricing elements
  function generatePricingElements(pricingData, container) {
    pricingData.forEach(function (categoryData, index) {
      var categoryElement = document.createElement("div");
      categoryElement.classList.add("mt-10"); // Adding margin between sections

      var headingElement = document.createElement("h1");
      headingElement.classList.add(
        "uppercase",
        "font-bold",
        "text-lg",
        "md:text-xl",
        "text-white",
        "tracking-wider",
        "bg-pink-400",
        "ps-2",
        "md:ps-5",
        "py-1",
        "sm:py-2",
        "rounded"
      );
      headingElement.textContent = categoryData.category;
      categoryElement.appendChild(headingElement);

      var itemsContainer = document.createElement("div");
      itemsContainer.classList.add(
        "max-w-[350px]",
        "sm:max-w-none",
        "sm:w-[500px]",
        "md:w-[430px]",
        "mt-2",
        "leading-8"
      );

      categoryData.items.forEach(function (item) {
        var itemElement = document.createElement("div");
        itemElement.classList.add("flex", "justify-between", "gap-3");

        var itemNameElement = document.createElement("h2");
        itemNameElement.classList.add("tracking-wider");
        itemNameElement.textContent = item.name;

        var itemPriceElement = document.createElement("h3");
        itemPriceElement.classList.add("tracking-wider");
        itemPriceElement.textContent = item.price;

        itemElement.appendChild(itemNameElement);
        itemElement.appendChild(itemPriceElement);

        itemsContainer.appendChild(itemElement);
      });

      categoryElement.appendChild(itemsContainer);

      // Add paragraph at the end of the pedicures section
      if (categoryData.category.toLowerCase() === "pedicures") {
        var paragraphElement = document.createElement("p");
        paragraphElement.textContent =
          "(1) Liquid Body Lufra; (2) Sole Solution; (3) Ice Dancer; (4) Fire Walker; (5) Baobab Body Butter";
        paragraphElement.classList.add(
          "max-w-[350px]",
          "sm:max-w-none",
          "sm:w-[500px]",
          "md:w-[430px]",
          "mt-2",
          "leading-8"
        );
        categoryElement.appendChild(paragraphElement);
      }

      container?.appendChild(categoryElement);
    });
  }

  // Generate pricing elements for column 1
  generatePricingElements(pricingDataColumn1, column1);

  // Generate pricing elements for column 2
  generatePricingElements(pricingDataColumn2, column2);

  // Add image portion at the end of column 2
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("flex", "justify-center", "mt-10");
  var imageElement = document.createElement("div");
  imageElement.classList.add(
    "max-w-[350px]",
    "sm:max-w-none",
    "sm:h-96",
    "md:w-[430px]"
  );
  var image = document.createElement("img");
  image.src = "images/hand-feet-image.PNG";
  image.alt = "Hands and feet image";
  image.classList.add("h-full");
  imageElement.appendChild(image);
  imageContainer.appendChild(imageElement);
  column2?.appendChild(imageContainer);
});

//generate the pdf
function generatePDF() {
  var element = document.getElementById("pricingSection");
  var opt = {
    margin: 0,
    filename: "Pricing sheet.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "a3",
      orientation: "portrait",
      format: [11, 16],
    },
  };

  html2pdf()
    .from(element)
    .set(opt)
    .toPdf() // Generate PDF
    .get("pdf") // Get jsPDF object
    .then(function (pdf) {
      // Generate a unique file name
      var fileName = "Pricing_sheet" + ".pdf";
      // Save the PDF to a temporary file
      pdf.save(fileName);
      // Open the temporary file in a new tab
      var url = window.URL.createObjectURL(pdf.output("blob"));
      window.open(url, "_blank");
      // Show the button after PDF generation is complete
      document.getElementById("generatePdfButton").style.display = "block";
    });
}
