const headphonesList = [
  {
    img: "./assets/S852.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "./assets/earpods1.png",
    title: "Apple EarPads",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "./assets/earpods2.png",
    title: "Apple EarPads",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "./assets/S852.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "./assets/earpods1.png",
    title: "Apple EarPads",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "./assets/earpods2.png",
    title: "Apple EarPads",
    price: 2327,
    rate: 4.5,
  },
];

const headphoneswirelessList = [
  {
    img: "./assets/Airpods.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    img: "./assets/Gerlax.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    img: "./assets/Borofone.png",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  console.log("sdadsasad");
  let headphones = document.getElementById("headphones");
  let wirelessheadphones = document.getElementById("wirelessheadphones");

  for (let i = 0; i < headphonesList.length; i++) {
    let headphone = document.createElement("div");
    headphone.classList.add("card");
    headphone.innerHTML = `<img src="${headphonesList[i].img}">
    <h3>${headphonesList[i].title}</h3>
    <p class="price">${headphonesList[i].price}</p>`;
    headphones.appendChild(headphone);
  }

  for (let i = 0; i < headphoneswirelessList.length; i++) {
    let headphone = document.createElement("div");
    headphone.classList.add("card");
    headphone.innerHTML = `<img src="${headphoneswirelessList[i].img}">
    <h3>${headphoneswirelessList[i].title}</h3>`;
    wirelessheadphones.appendChild(headphone);
  }
});
