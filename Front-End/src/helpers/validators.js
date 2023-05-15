function validateEmail(email) {
  let msg;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    msg = "Invalid email address";
  } else {
    msg = "";
  }

  return msg;
}

function validatePassword(password, confirm) {
  if (password !== confirm) {
    return ["Passwords does not match"];
  }

  let msg = [];

  const oneLower = /[a-z]/.test(password);
  const oneUpper = /[A-Z]/.test(password);
  const oneNumber = /[\d]/.test(password);

  if (password.length < 9) {
    msg.push("Password should be at least 8 characters");
  }
  if (!oneLower) {
    msg.push("Password should contain at least a lowercase letter");
  }
  if (!oneUpper) {
    msg.push("Password should contain at least an uppercase letter");
  }
  if (!oneNumber) {
    msg.push("Password should contain at least a number");
  }

  return msg;
}

function validateAll(signup) {
  let errs = [];

  if (signup.firstName.length === 0 || signup.familyName.length === 0) {
    errs.push("Name cannot be empty");
  }

  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      if (JSON.parse(req.responseText).length > 0) {
        errs.push("Username already exists");
      }
    }
  };

  req.open("GET", "http://localhost:8080/users/" + signup.username, false);
  req.send();

  errs.push(...validatePassword(signup.password, signup.confirm));
  errs.push(validateEmail(signup.email));

  return errs;
}

export default validateAll;
