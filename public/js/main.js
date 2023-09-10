function copy(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      alert("ページタイトルとURLをクリップボードにコピーしました。");
    },
    () => {
      alert("クリップボードへのコピーに失敗しました。");
    }
  );
}

window.onload = function () {
  const title = document.title;
  const titleEncoded = encodeURIComponent(title).replace(/\s/g, "+");
  const url = location.href;
  const urlHatena = url.replace("https://", "").replace("http://", "");
  const list = [
    {
      href: "https://twitter.com/share?url=" + url + "&text=" + titleEncoded,
      src: "img/share/twitter.png",
      blank: true,
    },
    {
      href: "https://www.facebook.com/sharer/sharer.php?u=" + url,
      src: "img/share/facebook.png",
      blank: true,
    },
    {
      href: "http://line.me/R/msg/text/?" + titleEncoded + "%20" + url,
      src: "img/share/line.png",
      blank: true,
    },
    {
      href: "https://b.hatena.ne.jp/entry/" + urlHatena + "#bbutton",
      src: "img/share/hatena.png",
      blank: true,
    },
    {
      href: 'javascript:copy("' + title + " " + url + '")',
      src: "img/share/copy.png",
      blank: false,
    },
  ];
  let element;
  element = document.getElementById("social_pc");
  for (let i = 0; i < list.length; i++) {
    let elementLink = document.createElement("a");
    elementLink.href = list[i].href;
    if (list[i].blank == true) {
      elementLink.target = "_blank";
    }
    let elementImage = document.createElement("img");
    elementImage.src = list[i].src;
    elementLink.appendChild(elementImage);
    let elementDiv = document.createElement("div");
    elementDiv.style.margin = "0 9px";
    elementDiv.appendChild(elementLink);
    element.appendChild(elementDiv);
  }
  element = document.getElementById("social_mobile");
  for (let i = 0; i < list.length; i++) {
    let elementLink = document.createElement("a");
    elementLink.href = list[i].href;
    if (list[i].blank == true) {
      elementLink.target = "_blank";
    }
    let elementImage = document.createElement("img");
    elementImage.src = list[i].src;
    elementLink.appendChild(elementImage);
    element.appendChild(elementLink);
  }
  $(".first .flex img").fadeIn(1000);
  setTimeout(function () {
    $(".first").fadeOut(1000);
  }, 2000);
};
