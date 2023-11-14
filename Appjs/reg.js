// Form "li" stages
const stepMenuOne = document.querySelector(".formbold-step-menu1");
const stepMenuTwo = document.querySelector(".formbold-step-menu2");
const stepMenuThree = document.querySelector(".formbold-step-menu3");
const stepMenuFour = document.querySelector(".formbold-step-menu4");
const stepMenuFive = document.querySelector(".formbold-step-menu5");
// Form Steps
const stepOne = document.querySelector(".formbold-form-step-1");
const stepTwo = document.querySelector(".formbold-form-step-2");
const stepThree = document.querySelector(".formbold-form-step-3");
const stepFour = document.querySelector(".formbold-form-step-4");
const stepFive = document.querySelector(".formbold-form-step-5");
// Form buttons
const formSubmitBtn = document.querySelector(".formbold-btn");
const formBackBtn = document.querySelector(".formbold-back-btn");
const input = document.querySelectorAll(".formbold-form-input");
const selectinput = document.querySelectorAll("select");
// Modal
let Modal = document.getElementById("myModal");
let CloseModal = document.getElementById("closeModal");
let CloseModalArabic = document.getElementById("closeModal-arabic");
let ModalArabic = document.getElementById("myModal-arabic");
// ckeck Radio , inputs step 4 fileds
const YesAnswer = document.querySelector("#yes-qual");
const NoAnswer = document.querySelector("#no-qual");
const NoAnswerWork = document.querySelector("#no-qual-work");
const yesAnswerWork = document.querySelector("#yes-qual-work");
const Company = document.querySelector(".company-name");
const jobTitle = document.querySelector(".job-title");
const Acadmic = document.querySelector(".Acadmic");
const faculty = document.querySelector(".faculty");
const GraduationYear = document.querySelector(".year-graduation");
const YearStudy = document.querySelector(".year-study");
const university = document.querySelector(".university");
const yearOFHighest = document.querySelector(".year-of-highest");
const H4faculty = document.querySelector(".faculty h4");
console.log(input);
//---------------------------INPUT FILED ACCEPT ONLY NUMBER-------------------------------- //
function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
// ----------------------------INPUT FILED ACCEPT ONLY ARABIC LETTERS-----------------------//
function restrictToArabicLetters(event) {
  var charCode = event.charCode || event.keyCode;
  var charStr = String.fromCharCode(charCode);
  var arabicRegex = /^[\u0600-\u06FF\s]*$/; // Arabic Unicode range with space (\s) allowed
  if (!arabicRegex.test(charStr)) {
    OpenModalArabic();
    return false; // Prevents typing non-Arabic characters
  } else {
    return true; // Allows typing Arabic characters
  }
}

// -----------------------------Form--------------------------------------------------------//
formSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (stepMenuOne.className == "formbold-step-menu1 active") {
    if (
      input[0].value.trim() !== "" &&
      input[1].value.trim() !== "" &&
      input[2].value.trim() !== "" &&
      input[3].value.trim() !== "" &&
      input[4].value.trim() !== "" &&
      input[5].value.trim() !== ""
    ) {
      event.preventDefault();
      stepMenuOne.classList.remove("active");
      stepMenuTwo.classList.add("active");
      stepOne.classList.remove("active");
      stepTwo.classList.add("active");
      // back to stage 1
      formBackBtn.classList.add("active");
    } else {
      openModal();
    }
    // go to stage 2 ---- stage2 is now active
  } else if (stepMenuTwo.className == "formbold-step-menu2 active") {
    event.preventDefault();
    if (
      input[6].value.trim() !== "" &&
      input[7].value.trim() !== "" &&
      selectinput[0].value != 0 &&
      selectinput[1].value != 0
    ) {
      // go to stage 3 --- stage3 is now active
      stepMenuTwo.classList.remove("active");
      stepMenuThree.classList.add("active");
      stepTwo.classList.remove("active");
      stepThree.classList.add("active");
      //back to stage 2
      formBackBtn.classList.add("active");
    } else {
      openModal();
    }
  } else if (stepMenuThree.className == "formbold-step-menu3 active") {
    event.preventDefault();
    if (
      input[8].value.trim() !== "" &&
      input[8].value.length === 14 &&
      input[9].value.trim() !== "" &&
      input[10].value.trim() !== "" &&
      input[11].value.trim() !== ""
    ) {
      // go to stage 4 , ----- stage 4 is now active
      stepMenuThree.classList.remove("active");
      stepMenuFour.classList.add("active");
      stepThree.classList.remove("active");
      stepFour.classList.add("active");
      //back to stage 3
      formBackBtn.classList.add("active");
    } else {
      openModal();
    }
  } else if (stepMenuFour.className == "formbold-step-menu4 active") {
    if (YesAnswer.checked) {
      if (
        input[12].value.trim() !== "" &&
        input[13].value.trim() !== "" &&
        input[14].value.trim() !== "" &&
        input[15].value.trim() !== "" &&
        selectinput[2].value != 0
      ) {
        if (Company.style.display === "block") {
          if (input[17].value.trim() !== "" && input[18].value.trim() !== "") {
            stepMenuFour.classList.remove("active");
            stepMenuFive.classList.add("active");
            stepFour.classList.remove("active");
            stepFive.classList.add("active");
            formSubmitBtn.textContent = "Submit";
            //back to stage 4
            formBackBtn.classList.add("active");
          } else {
            openModal();
          }
        } else if (Company.style.display === "none") {
          stepMenuFour.classList.remove("active");
          stepMenuFive.classList.add("active");
          stepFour.classList.remove("active");
          stepFive.classList.add("active");
          formSubmitBtn.textContent = "Submit";
          //back to stage 4
          formBackBtn.classList.add("active");
        }
      } else {
        openModal();
      }
    } else if (NoAnswer.checked) {
      if (input[12].value.trim() !== "" && selectinput[2].value != 0) {
        if (Company.style.display === "block") {
          if (input[17].value.trim() !== "" && input[18].value.trim() !== "") {
            stepMenuFour.classList.remove("active");
            stepMenuFive.classList.add("active");
            stepFour.classList.remove("active");
            stepFive.classList.add("active");
            formSubmitBtn.textContent = "Submit";
            //back to stage 4
            formBackBtn.classList.add("active");
          } else {
            openModal();
          }
        } else if (Company.style.display === "none") {
          stepMenuFour.classList.remove("active");
          stepMenuFive.classList.add("active");
          stepFour.classList.remove("active");
          stepFive.classList.add("active");
          formSubmitBtn.textContent = "Submit";
          //back to stage 4
          formBackBtn.classList.add("active");
        }
      } else {
        openModal();
      }
    }
  } else if (stepMenuFive.className == "formbold-step-menu5 active") {
    if (input[19].value.trim() !== "") {
      document.querySelector("form").submit();
    } else {
      openModal();
    }
  }
});

// document.querySelector("form").submit();
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
  } else if (stepMenuFive.className == "formbold-step-menu5 active") {
    stepMenuFour.classList.add("active");
    stepMenuFive.classList.remove("active");
    stepFour.classList.add("active");
    stepFive.classList.remove("active");
    formSubmitBtn.textContent = "Next Step";
  }
};
// -------------------------Acadmic--------------------------------------------------//
YesAnswer.onclick = function () {
  faculty.style.display = "block";
  university.style.display = "block";
  YearStudy.style.display = "block";
  GraduationYear.style.display = "none";
};
NoAnswer.onclick = function () {
  faculty.style.display = "none";
  university.style.display = "none";
  YearStudy.style.display = "none";
  GraduationYear.style.display = "none";
};
yesAnswerWork.onclick = function () {
  Company.style.display = "block";
  jobTitle.style.display = "block";
};
NoAnswerWork.onclick = function () {
  Company.style.display = "none";
  jobTitle.style.display = "none";
};
// ---------------------------------------Modal---------------------------------------//

function openModal() {
  Modal.style.display = "block";
}
// Close the custom modal dialog
CloseModal.addEventListener("click", function () {
  Modal.style.display = "none";
});
// -------------------------------------------------------------------------------------//
function OpenModalArabic() {
  ModalArabic.style.display = "block";
}
CloseModalArabic.addEventListener("click", () => {
  ModalArabic.style.display = "none";
});
