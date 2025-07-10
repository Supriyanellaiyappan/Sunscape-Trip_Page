var booknow = document.querySelector(".booknow");
var enquiryBox = document.getElementById("enquiry-box");
var enquiryOverlay = document.getElementById("enquiry-overlay");
var closeEnquiry = document.getElementById("close-enquiry");
var submitEnquiry = document.getElementById("submit-enquiry");
var errorMsg2 = document.getElementById("error-msg2");

booknow.addEventListener("click", function (event) {
  event.preventDefault();
  enquiryOverlay.style.display = "block";
  enquiryBox.style.display = "block";
  enquiryBox.style.top = scrollY + 100 + "px";
  enquiryOverlay.style.top = scrollY + "px";
});

closeEnquiry.addEventListener("click", function () {
  enquiryOverlay.style.display = "none";
  enquiryBox.style.display = "none";
});

enquiryOverlay.addEventListener("click", function () {
  enquiryOverlay.style.display = "none";
  enquiryBox.style.display = "none";
});

submitEnquiry.addEventListener("click", function () {
  var name = document.getElementById("enquiry-name").value.trim();
  var email = document.getElementById("enquiry-email").value.trim();
  var phone = document.getElementById("enquiry-phone").value.trim();
  var date = document.getElementById("enquiry-date").value.trim();
  var people = document.getElementById("enquiry-people").value.trim();

  errorMsg2.style.display = "none";

  if (!name || !email || !phone || !date || !people) {
    errorMsg2.style.display = "block";
    errorMsg2.textContent = "🅧 Please fill in all required fields.";
    return;
  }
  pop();
  enquiryOverlay.style.display = "none";
  enquiryBox.style.display = "none";
});

var screen = document.getElementById("screen");
var popup = document.getElementById("popup");
function pop() {
  popup.style.display = "block";
  screen.style.display = "block";
  popup.style.top = scrollY + 100 + "px";
  screen.style.top = scrollY + "px";
}
function erase() {
  popup.style.display = "none";
  screen.style.display = "none";
  window.scrollTo(0, 0);
}
document.getElementById("contactus").addEventListener("click", function () {
  document
    .getElementById("contactSection")
    .scrollIntoView({ behavior: "smooth" });
});
