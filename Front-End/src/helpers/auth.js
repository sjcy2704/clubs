const host = "http://localhost:8080";

export function logUser(login, router) {
  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      router.push("/");
    }
  };

  req.open("POST", host + "/login");
  req.setRequestHeader("Content-Type", "application/json");
  req.withCredentials = true;
  req.send(JSON.stringify(login));
}

export function logout(router, route, userStore) {
  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      if (route.path !== "/") {
        router.push("/");
      } else {
        router.go();
      }
      userStore.$reset();
    }
  };

  req.open("POST", host + "/logout");

  req.withCredentials = true;
  req.send();
}

export function signUpUser(signup, router) {
  const req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 201) {
      const user = {
        username: signup.username,
        password: signup.password,
      };
      logUser(user, router);
    }
  };
  req.open("POST", host + "/signup");
  req.setRequestHeader("Content-Type", "application/json");
  req.withCredentials = true;
  req.send(JSON.stringify(signup));
}
