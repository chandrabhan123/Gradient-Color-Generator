let btnOne = document.querySelector(".btn_1");
let btnTwo = document.querySelector(".btn_2");
let copyGredient = document.querySelector(".grediant_color");
let hex1 = "#ffffff";
let hex2 = "#000000";

const hexValue = () => {
  let myHexvalues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += myHexvalues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handleBtn1 = () => {
  hex1 = hexValue();
  btnOne.innerText = hex1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;
  copyGredient.innerHTML = `background-image: linear-gradient(to right, ${hex1}, ${hex2} );`;
  console.log(hex1);
};

const handleBtn2 = () => {
  hex2 = hexValue();
  btnTwo.innerText = hex2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;
  copyGredient.innerHTML = `background-image: linear-gradient(to right, ${hex1}, ${hex2} );`;
  console.log(hex2);
};

btnOne.addEventListener("click", handleBtn1);
btnTwo.addEventListener("click", handleBtn2);
copyGredient.addEventListener("click", () => {
  navigator.clipboard.writeText(copyGredient.innerText).then(() => {
    alert("Gradient CSS copied to clipboard!");
  }).catch((err) => {
    alert("Failed to copy gradient: " + err);
  });
});
