const heading = document.getElementById("extension--heading");
const decryptPasswordButton = document.getElementById("decrypt-passwords");
var password = "";

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

function addElementInIndex(url, password) {
  //create a new div element
  const div = document.createElement("div");
  div.setAttribute("class", "credentials--container");
  document.body.appendChild(div);

  const newPassword = document.createElement("span");
  newPassword.setAttribute("class", "password");
  const credentialsUrl = document.createElement("p");

  credentialsUrl.innerHTML = url;
  newPassword.innerHTML = password;

  div.appendChild(newPassword);
  div.appendChild(credentialsUrl);
}

chrome.storage.local.get(null, (result) => {
  console.log(result)
  for(let [key, value] of Object.entries(result)){
    console.log(key, value);
    addElementInIndex(key, value);
  }
})

function decryptPassword(pass) {
  var password = " ";
  var wordCount = 6; 
  for(var char =0; char < pass.length; char++){
     for (const [key, val] of Object.entries(encryptionKeys)) {
       if (pass.substring(char, wordCount) == val) {
         password = password + key;
       }
     }
     wordCount +=6;
  }
  console.log(password)
}

decryptPassword("4Jy0Xe1Vw9Ba0Po8Yx2Ts8Un0Po8Yx")
/**
 * -------- FOR PASSWORD DECRYYPTION --------
decryptPasswordButton.addEventListener("click", () => {
 var divs = document.getElementsByClassName("credentials--container");
 console.log(divs.length);
 for (var n = 0; n < divs.length; n++) {
   var passwords = document
     .getElementsByClassName("credentials--container")
     [n].getElementsByClassName("password")[0].innerHTML;
   console.log(passwords);
   var password = "";
   var wordCount = 6;

   for (var char = 0; char < passwords.length; char = char + 6) {
     for (const [key, val] of Object.entries(encryptionKeys)) {
       if (passwords.substring(char, wordCount) == val) {
         password = password + key;
       }
     }

     wordCount = wordCount + 6;
   }
   console.log(password);
   document
     .getElementsByClassName("credentials--container")
     [n].getElementsByClassName("password")[0].innerHTML = password;
 }
});
 */