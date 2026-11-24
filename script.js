const btnEs = document.getElementById("btn-es"),
  btnEn = document.getElementById("btn-en");
function setLang(l) {
  document.querySelectorAll("[data-es]").forEach((el) => {
    el.textContent = el.getAttribute(l === "es" ? "data-es" : "data-en");
  });
  btnEs.classList.toggle("active", l === "es");
  btnEn.classList.toggle("active", l === "en");
  document.documentElement.lang = l;
}
btnEs.onclick = () => setLang("es");
btnEn.onclick = () => setLang("en");
document.querySelectorAll(".filters button").forEach((b) => {
  b.onclick = () => {
    document
      .querySelectorAll(".filters button")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.filter;
    document.querySelectorAll("[data-cat]").forEach((c) => {
      c.classList.toggle("hidden", !(f === "all" || c.dataset.cat === f));
    });
  };
});
