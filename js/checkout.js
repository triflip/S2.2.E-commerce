
const validate = () => {
  let error = 0;
  
  const fName = document.getElementById("fName");
  const fLastN = document.getElementById("fLastN");
  const fEmail = document.getElementById("fEmail");
  const fPassword = document.getElementById("fPassword");
  const fAddress = document.getElementById("fAddress");
  const fPhone = document.getElementById("fPhone");


  const errorName = document.getElementById("errorName");
  const errorLastN = document.getElementById("errorLastN");
  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPassword");
  const errorAddress = document.getElementById("errorAddress");
  const errorPhone = document.getElementById("errorPhone");

 
  if (
    fName.value.trim() == "" ||
    fName.value.trim().length < 3 ||
    !/^[a-zA-Z]+$/.test(fName.value.trim())
  ) {
    errorName.style.display = "block";
    fName.classList.add("is-invalid");
    error++;
  } else {
    errorName.style.display = "none";
    fName.classList.remove("is-invalid");
  }

  if (
    fLastN.value.trim() === "" ||
    fLastN.value.trim().length < 3 ||
    !/^[a-zA-Z]+$/.test(fLastN.value.trim())
  ) {
    errorLastN.style.display = "block";
    fLastN.classList.add("is-invalid");
    error++;
  } else {
    errorLastN.style.display = "none";
    fLastN.classList.remove("is-invalid");
  }

  if (
    fEmail.value.trim() === "" ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      fEmail.value.trim()
    )
  ) {
    errorEmail.style.display = "block";
    fEmail.classList.add("is-invalid");
    error++;
  } else {
    errorEmail.style.display = "none";
    fEmail.classList.remove("is-invalid");
  }
 
  if (
	fPassword.value.trim() == ""  ||
    fPassword.value.trim().length < 8 ||
    !/^[a-zA-Z0-9]+$/.test(
      fPassword.value.trim())
	) {
	errorPassword.style.display = "block";
    fPassword.classList.add("is-invalid");
    error++;
  } else {
    errorPassword.style.display = "none";
    fPassword.classList.remove("is-invalid");
  }

  if (
	fAddress.value.trim() == ""  ||
    fAddress.value.trim().length < 3 ||
    !/^[a-zA-Z0-9\s,'-.]+$/.test(
      fAddress.value.trim())
	) {
	errorAddress.style.display = "block";
    fAddress.classList.add("is-invalid");
    error++;
  } else {
    errorAddress.style.display = "none";
    fAddress.classList.remove("is-invalid");
  }

  if (
	fPhone.value.trim() == ""  ||
    fPhone.value.trim().length !== 9 ||
    !/^\d{9}$/.test(
      fPhone.value.trim())
	) {
	errorPhone.style.display = "block";
    fPhone.classList.add("is-invalid");
    error++;
  } else {
    errorPhone.style.display = "none";
    fPhone.classList.remove("is-invalid");
  }

  if (error > 0) {
    alert("Please fill in all required fields.");
	return false;
  } else {
    alert("Form submitted successfully");
	return true;
  }
};
