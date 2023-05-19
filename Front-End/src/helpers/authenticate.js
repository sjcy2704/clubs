export default function authenticate() {
  const req = new XMLHttpRequest();
  let res;
  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      res = req.responseText;
    }
  };

  req.open("GET", "http://localhost:8080/authenticate", false);
  req.withCredentials = true;
  req.send();
  return res;
}
