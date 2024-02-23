window.onload = (event) => {

  const input = document.getElementsByTagName("input");
  const button = document.getElementsByTagName("button");
  const pageUrl = document.URL;

  var submitButton;
  var emailOrUsername;

  var password;
  var holder;
  const encryptionKeys = {
    A: "5Fg8Hj",
    B: "2Lk6Np",
    C: "9Qw1Rs",
    D: "3Vx7Yz",
    E: "0Kv4Tu",
    F: "6Mn2Bq",
    G: "1Pz5Xw",
    H: "8Gh3Ja",
    I: "4Uy0Lo",
    J: "7Es9Df",
    K: "2Cp6Vx",
    L: "5Ij1Wq",
    M: "9Fg3Rv",
    N: "3Hr7Zu",
    O: "0Bk4Mn",
    P: "6Lw2Yz",
    Q: "1Np5Ts",
    R: "8Xv3Cq",
    S: "4Tz0Ko",
    T: "7Uy9Je",
    U: "2Vx6Hi",
    V: "5Pw1Gf",
    W: "9Rv3Dj",
    X: "3Wq7Ns",
    Y: "0Cs4Tu",
    Z: "6Ae2Mh",
    a: "7Gt4Km",
    b: "0Po8Yx",
    c: "5Qv9Jz",
    d: "2Wp6Lu",
    e: "6Hs1Fn",
    f: "3Mq7Xw",
    g: "8Nz2Pr",
    h: "4Jy0Xe",
    i: "1Vw9Ba",
    j: "9Es5Gl",
    k: "0Cx7Dv",
    l: "7Zk3Ht",
    m: "3Fo6Ai",
    n: "6Rv2Mz",
    o: "2Ts8Un",
    p: "5Mj0Gq",
    q: "8Lu4Yh",
    r: "4Zw1Es",
    s: "1Kc9Wv",
    t: "9Vp3Rg",
    u: "0Dr7Mo",
    v: "7Xg5Lu",
    w: "6Yz2Nf",
    x: "3Iq8Wv",
    y: "8Ja5Cw",
    z: "4Ov0Tk",
    0: "9Kp7Rs",
    1: "4Tm0Fn",
    2: "8Wh3Yg",
    3: "1Gj5Dc",
    4: "5Mq9Pl",
    5: "2Nv6Xz",
    6: "6Xw2Ch",
    7: "0Su4Hf",
    8: "7Ae3To",
    9: "3Jr8Vi",
  };

  var inetervalId;
  var holder;

  const passCredentialsToServiceWorker = async (password) => {
    const response = await chrome.runtime.sendMessage({
      password: password,
    });
    // do something with response here, not outside the function
    console.log(response);
  };

  function decryptPassword(pass) {
    var p = "";
    var wordCount = 6;
    for (var char = 0; char < pass.length;) {
      for (const [key, val] of Object.entries(encryptionKeys)) {
        if (pass.substring(char, wordCount) === val) {
          p = p + key;
        }
      }
      wordCount = wordCount + 6;
      char = char + 6;
    }
    console.log(p)
    return p;
  }

  chrome.storage.local.get(null, (result) => {
    for (let [key, value] of Object.entries(result)) {
      if (key === pageUrl) {
        if (input) {
          for (var i = 0; i < input.length; i++) {
            if (input[i].type == "password") {
              console.log(value)
              holder = input[i].value = value;
              password = input[i];
              return;
            }
          }
        }
      }
    }
  })

  if (input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i].type == "password") {
        password = input[i];
      }
      if (input[i].type == "button" || input[i].type == "submit") {
        if (
          input[i].value == "Login" ||
          input[i].value == "login" ||
          input[i].value == "Log in" ||
          input[i].value == "Log In" ||
          input[i].value == "Sign in" ||
          input[i].value == "signin" ||
          input[i].value == "Sign In"
        ) {
          submitButton = input[i];
        }
      }
    }
  }

  if (button) {
    for (var i = 0; i < button.length; i++) {
      if (button[i].type == "button" || button[i].type == "submit") {
        if (
          button[i].innerText == "Login" ||
          button[i].innerText == "login" ||
          button[i].innerText == "Log in" ||
          button[i].innerText == "Log In" ||
          button[i].innerText == "Sign in" ||
          button[i].innerText == "signin" ||
          button[i].innerText == "Sign In"
        ) {
          submitButton = button[i];
        }
      }
    }
  }

  if (password) {
    submitButton.addEventListener("click", () => {
      if (holder) {
        password.value = decryptPassword(password.value);
      }
      passCredentialsToServiceWorker(password.value)
    });
  }
}