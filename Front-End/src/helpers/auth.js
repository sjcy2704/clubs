const host = "http://localhost:8080";

export async function logUser(login, router, errors = null) {
  await fetch(`${host}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  }).then((res) => {
    if ((res.status === 401 || res.status === 400) && errors) {
      errors.errs = true;
    } else {
      router.push("/");
    }
  });
}

export async function logout(router, route, userStore) {
  await fetch(`${host}/logout`, {
    method: "POST",
    credentials: "include",
  }).then(() => {
    if (route.path !== "/") {
      router.push("/");
    } else {
      router.go();
    }
    userStore.$reset();
  });
}

export async function signUpUser(signup, router) {
  await fetch(`${host}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signup),
  }).then(() => {
    const user = {
      username: signup.username,
      password: signup.password,
    };
    logUser(user, router);
  });
}
