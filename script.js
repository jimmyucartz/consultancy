const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

$(() => {
  $("#consulting_carousel").carousel({
    interval: 6000,
  });
  $(".sect-title").fadeIn(1000);
  let hiddenelements = document.querySelectorAll(".hidden");
  hiddenelements.forEach((el) => observer.observe(el));
});
