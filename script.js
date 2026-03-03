/*document.querySelector(".show").addEventListener("click", function () {
  document.getElementById("show").style.display = "block";
});*/


/* uppgift 3
const item = document.querySelectorAll(".title");
item.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.style.color = "red";
  });

  element.addEventListener("mouseout", function () {
    element.style.color = "black";
  });
});


const header = document.querySelector("header");
header.addEventListener("mouseover", function () {
  header.style.backgroundColor = "gray";
});
header.addEventListener("mouseout", function () {
  header.style.backgroundColor = "#2A4765";
});
*/

function upperCase() {
  let input = document.querySelector("input");
  input.value = input.value.toUpperCase();
}

// uppgift 4 JQuery
$(document).ready(function () {

  $("#hamburger-menu").click(function (e) {
    e.stopPropagation();
    $("#hamburger-content").slideToggle(300);
  })

  $("#filter-menu").click(function (e) {
    e.stopPropagation();
    $("#filter-content").slideToggle(300);
  })

  $("#filter-content").click(function (e) {
    e.stopPropagation();
  })

  $(document).click(function () {
    $("#hamburger-content").slideUp(300);
    $("#filter-content").slideUp(300);
  })


  $("#filter-menu .inner-filter-menu > button").click(function () {
    let currentOption = $(this).siblings(".inner-filter-content");
    currentOption.slideToggle(300);

    $(this).find("i").toggleClass("rotated")
  })

  $("#filter-form").submit(function (e) {
    e.preventDefault();
    $(".active-button").hide();
    $("#filter-content").slideUp(300);
    $("#filter-form input:checkbox:checked").each(function () {
      $("#" + this.value).show();
    });

  })

  $(".active-button i").click(function (e) {
    e.stopPropagation();
    let button = $(this).parent();
    button.hide();
    $("#filter-form input[value='" + button.attr("id") + "']").prop("checked", false)
  })

});