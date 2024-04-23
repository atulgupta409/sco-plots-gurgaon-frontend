export const checkValidation = (name, email, phone, location) => {
  const isValidName = /[a-zA-Z]{2,30}/.test(name);
  const isValidLocation = /[a-zA-Z]{2,30}/.test(location);
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isValidPhone = /^\d{10}$/.test(phone);

  if (!isValidName) return "Please Enter a Valid Name";
  if (!isValidEmail) return "Invalid Email Id";
  if (!isValidPhone) return "Invalid Mobile No.";
  if (!isValidLocation) return "Invalid Location";

  return null;
};
