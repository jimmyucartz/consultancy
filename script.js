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
  //
  $(".case").mouseenter(function () {
    $(this.children[0].children[0])
      .fadeIn()
      .css({ display: "flex", flexDirection: "column" });
    $(this).css({ opacity: 0.9 });
  });
  $(".case").on("touchstart", function () {
    $(this.children[0].children[0])
      .fadeIn()
      .css({ display: "flex", flexDirection: "column" });
    $(this).css({ opacity: 0.9 });
  });

  $(".case").on("touchend", function () {
    $(this.children[0].children[0]).fadeOut();
    $(this).css({ opacity: 1 });
  });

  $(".case").mouseleave(function () {
    $(this.children[0].children[0]).fadeOut();
    $(this).css({ opacity: 1 });
  });
  //

  //
  $(".card-services").on("touchstart", function () {
    $(this).addClass("active");
  });
  $(".card-services").on("touchend", function () {
    setTimeout(() => {
      $(this).removeClass("active");
    }, 500);
  });

  $(".card-services").mouseenter(function () {
    $(this).addClass("active");
  });
  $(".card-services").mouseleave(function () {
    $(this).removeClass("active");
  });
  //

  let hiddenelements = document.querySelectorAll(".hidden");
  hiddenelements.forEach((el) => observer.observe(el));
});
