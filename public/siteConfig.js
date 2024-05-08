const Email = "inquiry@therapynailspanc.org";
const Insta = "your@insta.com";
const Phone = "(101) 111-2323";
const Location = "1313 Kildaire Farm Drive, Cary, NC 27511";

const homeURL = "index.html#top"
const pricingURL = "pricing.html#top"









// hours and address location and phone number
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");

address.innerHTML = Location;
phone.innerHTML = Phone;
phone.href = `tel:${Phone}`;

// Display navbar contact information
function navbarContactInfo() {
  const navContactInfo = document.querySelector(".navContactInfo");

  if (navContactInfo == null) return;
  navContactInfo.innerHTML = `<p>${Location}</p>
                              <a class="underline phone hover:text-blue-500" href="tel:${Phone}">${Phone}</a>`;
}


//display contact information of home page
function displayContactInfo() {
  const contactSection = document.getElementById("contactSection");

  if (contactSection == null) return;

  contactSection.innerHTML = `<div class="flex flex-col items-center bg-pink-400 text-white py-10">
            <h1 class="font-bold text-2xl md:text-4xl tracking-wider pb-10">Contact Us</h1>

            <div class="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40">
                <div class="flex flex-col items-center gap-3 md:gap-5 text-center px-5 md:px-0">
                    <i class="fa-solid fa-location-dot text-3xl lg:text-5xl"></i>
                    <h1 class="font-semibold text-xl md:text-2xl lg:text-3xl tracking-wide">Location:</h1>
                    <p class="tracking-wider px-3">${Location}</p>
                </div>
                <div class="flex flex-col items-center gap-3 md:gap-5 text-center px-5 md:px-0">
                    <i class="fa-solid fa-phone-flip text-3xl lg:text-5xl"></i>
                    <h1 class="font-semibold text-xl md:text-2xl lg:text-3xl tracking-wide">Phone:</h1>
                    <p class="tracking-wider px-3"><a class="phone" href="tel:${Phone}">${Phone}</a></p>
                </div>
                <div class="flex flex-col items-center gap-3 md:gap-5 text-center px-5 md:px-0">
                    <i class="fa-regular fa-envelope text-3xl lg:text-5xl"></i>
                    <h1 class="font-semibold text-xl md:text-2xl lg:text-3xl tracking-wide">Email:</h1>
                    <p class="tracking-wider px-3">${Email}</p>
                </div>
            </div>

          </div>`;
}

//display contact information of pricing section
function pricingContactInfo() {
  const pricingSubSection = document.getElementById("pricingSubSection");

  if (pricingSubSection == null) return;
  pricingSubSection.innerHTML = `<div class="bg-pink-400 text-white py-8 flex flex-col sm:flex-row md:items-center justify-around px-5 gap-5">
                                <div class="flex flex-col gap-5">
                                    <div class="flex items-center gap-5">
                                        <i class="fa-regular fa-envelope text-2xl"></i>
                                        <p class="tracking-wider">${Email}</p>
                                    </div>
                                    <div class="flex items-center gap-5">
                                        <i class="fa-brands fa-instagram text-2xl"></i>
                                        <p class="tracking-wider">${Insta}</p>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-5">
                                    <div class="flex items-center gap-5">
                                        <i class="fa-solid fa-phone-flip text-2xl"></i>
                                        <p class="tracking-wider"><a class="phone" href="tel:${Phone}">${Phone}</a></p>
                                    </div>
                                    <div class="flex items-center gap-5">
                                        <i class="fa-solid fa-location-dot text-2xl"></i>
                                        <p class="tracking-wider">${Location}</p>
                                    </div>
                                </div>
                              </div>`;
}