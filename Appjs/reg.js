//---------------------------INPUT FILED ACCEPT ONLY NUMBER-------------------------------- //
//
function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
//--------------------------------INPUT FILED ACCEPT ONLY lETTER--------------------------- //
//
function lettersOnly(evt) {
  evt = evt ? evt : event;
  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
    ? evt.keyCode
    : evt.which
    ? evt.which
    : 0;
  if (
    charCode > 31 &&
    (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)
  ) {
    window.alert("must be letters");
    return false;
  }
  return true;
}
