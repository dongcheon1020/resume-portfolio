const pTag1 = document.querySelector(".hero-text1");
const pTag2 = document.querySelector(".hero-text2");
const pTag3 = document.querySelector(".hero-text3");

const textArr1 =
  "hello  안녕하세요  你好  こんにちは  Bonjour  Guten Tag  Hola  Ciao  Olá  Здравствуйте  مرحبا   Merhaba".split(
    " "
  );
const textArr2 =
  "hello  안녕하세요  你好  こんにちは  Bonjour  Guten Tag  Hola  Ciao  Olá  Здравствуйте  مرحبا   Merhaba".split(
    " "
  );
const textArr3 =
  "hello  안녕하세요  你好  こんにちは  Bonjour  Guten Tag  Hola  Ciao  Olá  Зdравствуйте  مرحبا   Merhaba".split(
    " "
  );

let count1 = 0;
let count2 = 0;
let count3 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);
initTexts(pTag3, textArr3);

function initTexts(element, textArray) {
  textArray.push(...textArray);
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2.9) {
    element.style.transform = `translate3d(0, 0, 0)`;
    count = 0;
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

  return count;
}

function animate() {
  count1++;
  count2++;
  count3++;

  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);
  count3 = marqueeText(count3, pTag3, -1);

  window.requestAnimationFrame(animate);
}

animate();
function copyText(elementId) {
  const textElement = document.getElementById(elementId);
  const textToCopy = textElement.innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("텍스트가 복사되었습니다:", textToCopy);
      showNotification("텍스트가 복사되었습니다!");
    })
    .catch((err) => {
      console.error("텍스트 복사 중 에러가 발생했습니다:", err);
      showNotification("텍스트 복사 중 에러가 발생했습니다.");
    });
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  document.querySelector(".notification-container").appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 500);
}
// scroll
document.addEventListener("DOMContentLoaded", (event) => {
  const anchors = document.querySelectorAll(".an");
  const anRs = document.querySelectorAll(".an-r");
  const close = document.querySelector(".close");
  const oC = document.querySelector(".o");
  const bar = document.querySelector(".bar");
  const barL = document.querySelector(".navbar .bar .left");
  const barA = document.querySelector(".navbar .bar .center .anchor");
  const barRBt = document.querySelectorAll(".show-bt");
  const barRBts = document.querySelectorAll(".bar-r-bt");
  const ar1 = document.querySelector(".anchor-con");
  const ar2 = document.querySelector(".explanation-con");
  const ar3 = document.querySelector(".personal-con");
  const ar4 = document.querySelector(".portfolio-con");
  const ari = document.querySelectorAll(".navbar-con ");
  const btbtbt = document.querySelector(".ooooo");
  const linkBtS1 = document.querySelector(".portfolio-web .view-box .link");

  linkBtS1.addEventListener("click", function () {
    var url = "https://github.com/dongcheon1020/well-being.git"; // 열고 싶은 URL
    window.open(url, "_blank"); // 새 창으로 URL 열기
  });
  window.addEventListener("scroll", function () {
    let sc = window.scrollY;
    let anN = 0;
    if (sc >= 0 && sc < 1100) {
      anN = 0;
    } else if (sc >= 1100 && sc < 2300) {
      anN = 1;
    } else if (sc >= 2300 && sc < 4100) {
      anN = 2;
    } else if (sc >= 4100) {
      anN = 3;
    }
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].classList.remove("active");
    }
    anchors[anN].classList.add("active");
    // 2

    for (let e = 0; e < anRs.length; e++) {
      anRs[e].classList.remove("active-r");
    }
    anRs[anN].classList.add("active-r");
  });

  close.addEventListener("click", function () {
    window.close();
  });

  oC.addEventListener("click", function () {
    if (bar.style.height === "400px") {
      bar.style.height = "50px";
      bar.style.padding = "10px 0 10px 10px";
      barL.style.display = "block";
      barA.style.display = "grid";
      ar1.style.display = "none";
      barRBt.forEach((e) => {
        e.style.display = "none";
      });
      ari.forEach((e) => {
        e.style.display = "none";
      });
      btbtbt.style.opacity = "1"; // btbtbt의 투명도를 1로 설정
    } else {
      bar.style.height = "400px";
      bar.style.padding = "30px 0px 30px 30px";
      barL.style.display = "none";
      barA.style.display = "none";
      ar1.style.display = "block";
      barRBt.forEach((e) => {
        e.style.display = "grid";
      });

      // 나머지 버튼들의 투명도를 0.5로 설정
      barRBts.forEach((e) => {
        if (e !== btbtbt) {
          e.style.opacity = "0.5";
        }
      });
    }
  });

  //
  barRBts.forEach((button, index) => {
    button.addEventListener("click", function () {
      barRBts.forEach((btn) => {
        btn.style.opacity = "0.5";
      });
      this.style.opacity = "1";
    });
  });

  //
  var buttons = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
  ];
  var boxes = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
    document.getElementById("box4"),
  ];

  buttons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      boxes.forEach(function (box, boxIndex) {
        if (boxIndex == index) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 1);
};
