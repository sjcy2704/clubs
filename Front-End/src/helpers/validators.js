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

export function validateUser(signup) {
  let errs = [];

  if (signup.firstName.length === 0 || signup.familyName.length === 0) {
    errs.push("Name cannot be empty");
  }

  if (signup.username.length === 0) {
    errs.push("Username cannot be empty");
  } else {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        if (JSON.parse(req.responseText).length > 0) {
          errs.push("Username already exists");
        }
      }
    };

    req.open(
      "GET",
      "http://localhost:8080/users/username/" + signup.username,
      false
    );
    req.send();
  }

  errs.push(...validatePassword(signup.password, signup.confirm));

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signup.email)) {
    errs.push("Invalid email address");
  }

  return errs;
}

// Club Register Validators

export function validateClub(details) {
  let errs = [];

  if (details.name.length === 0) {
    errs.push("Name cannot be empty");
  }

  if (details.short_name.length === 0) {
    errs.push("Short Name cannot be empty");
  }

  if (details.category.length === 0) {
    errs.push("Select a category");
  }
}
