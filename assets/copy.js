// "Kopyala" düğmeleri: data-target varsa o öğeyi, yoksa aynı kutudaki <q> metnini kopyalar.
document.querySelectorAll("button.copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var src = btn.dataset.target ? document.getElementById(btn.dataset.target) : btn.parentElement.querySelector("q");
    var done = function () { btn.textContent = "Kopyalandı"; setTimeout(function () { btn.textContent = "Kopyala"; }, 1600); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(src);
      var s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Seçildi";
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(src.textContent).then(done, fallback);
    else fallback();
  });
});
