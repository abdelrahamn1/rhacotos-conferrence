//---------------------------INPUT FILED ACCEPT ONLY NUMBER-------------------------------- //
//
function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
// -----------------------------Form-------------------------------------//
// Form "li" stages
const stepMenuOne = document.querySelector(".formbold-step-menu1");
const stepMenuTwo = document.querySelector(".formbold-step-menu2");
const stepMenuThree = document.querySelector(".formbold-step-menu3");
const stepMenuFour = document.querySelector(".formbold-step-menu4");
// Form Steps
const stepOne = document.querySelector(".formbold-form-step-1");
const stepTwo = document.querySelector(".formbold-form-step-2");
const stepThree = document.querySelector(".formbold-form-step-3");
const stepFour = document.querySelector(".formbold-form-step-4");
// Form buttons
const formSubmitBtn = document.querySelector(".formbold-btn");
const formBackBtn = document.querySelector(".formbold-back-btn");

formSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (stepMenuOne.className == "formbold-step-menu1 active") {
    // event.preventDefault();
    // go to stage 2 ---- stage2 is now active
    stepMenuOne.classList.remove("active");
    stepMenuTwo.classList.add("active");
    stepOne.classList.remove("active");
    stepTwo.classList.add("active");
    // back to stage 1
    formBackBtn.classList.add("active");
  } else if (stepMenuTwo.className == "formbold-step-menu2 active") {
    event.preventDefault();
    // go to stage 3 --- stage3 is now active
    stepMenuTwo.classList.remove("active");
    stepMenuThree.classList.add("active");
    stepTwo.classList.remove("active");
    stepThree.classList.add("active");
    //back to stage 2
    formBackBtn.classList.add("active");
  } else if (stepMenuThree.className == "formbold-step-menu3 active") {
    event.preventDefault();
    // go to stage 4 , ----- stage 4 is now active
    stepMenuThree.classList.remove("active");
    stepMenuFour.classList.add("active");
    stepThree.classList.remove("active");
    stepFour.classList.add("active");
    formSubmitBtn.textContent = "Submit";
    //back to stage 3
    formBackBtn.classList.add("active");
  } else if (stepMenuFour.className == "formbold-step-menu4 active") {
    // document.querySelector("form").submit();
  }
});

// -----------------------------Form Back Button-------------------------------------//
formBackBtn.onclick = function (e) {
  e.preventDefault();
  if (stepMenuTwo.className == "formbold-step-menu2 active") {
    stepMenuOne.classList.add("active");
    stepMenuTwo.classList.remove("active");
    stepOne.classList.add("active");
    stepTwo.classList.remove("active");
    formBackBtn.classList.remove("active");
    formSubmitBtn.textContent = "Next Step";
  } else if (stepMenuThree.className == "formbold-step-menu3 active") {
    stepMenuTwo.classList.add("active");
    stepMenuThree.classList.remove("active");
    stepTwo.classList.add("active");
    stepThree.classList.remove("active");
    formSubmitBtn.textContent = "Next Step";
  } else if (stepMenuFour.className == "formbold-step-menu4 active") {
    stepMenuThree.classList.add("active");
    stepMenuFour.classList.remove("active");
    stepThree.classList.add("active");
    stepFour.classList.remove("active");
    formSubmitBtn.textContent = "Next Step";
  }
};
// -------------------------Acadmic--------------------------------------------------//
const YesAnswer = document.querySelector("#yes-qual");
const NoAnswer = document.querySelector("#no-qual");
const Acadmic = document.querySelector(".Acadmic");
const faculty = document.querySelector(".faculty");
const GraduationYear = document.querySelector(".year-graduation");

YesAnswer.onclick = function () {
  Acadmic.style.display = "block";
  GraduationYear.style.display = "block";
  faculty.style.display = "none";
};
NoAnswer.onclick = function () {
  Acadmic.style.display = "block";
  GraduationYear.style.display = "block";
  faculty.style.display = "block";
};
// -----------------------------------------------------------------------------------//
