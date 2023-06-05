import { api } from "./api";
const host = "http://localhost:8080";

export async function logUser(login, router, userStore, errors = null) {
  await api.post("/login", login).then((res) => {
    if ((res.status === 401 || res.status === 400) && errors) {
      errors.err = true;
    } else {
      userStore.user = res.data;
      userStore.loggedIn = true;
      router.push("/");
    }
  });
}

export async function logout(router, route, userStore) {
  await api.post("/logout").then(() => {
    if (route.path !== "/") {
      router.push("/");
    } else {
      router.go();
    }
    userStore.$reset();
  });
}

export async function signUpUser(signup, router, userStore) {
  const formData = new FormData();
  for (const key in signup) {
    if (key === "avatar" && signup[key]) {
      formData.append(key, signup[key][0]);
    } else {
      formData.append(key, signup[key]);
    }
  }

  await api.post("/signup", formData).then(() => {
    const user = {
      username: signup.username,
      password: signup.password,
    };
    logUser(user, router, userStore);
  });
}
