export function logUser(login, router) {
  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      router.push("/");
    }
  };

  req.open("POST", "http://localhost:8080/login");
  req.setRequestHeader("Content-Type", "application/json");
  req.withCredentials = true;
  req.send(JSON.stringify(login));
}

export function logout(router, route) {
  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      if (route.path !== "/") {
        router.push("/");
      } else {
        router.go();
      }
    }
  };

  req.open("POST", "http://localhost:8080/logout");

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
  req.open("POST", "http://localhost:8080/signup");
  req.setRequestHeader("Content-Type", "application/json");
  req.withCredentials = true;
  req.send(JSON.stringify(signup));
}
