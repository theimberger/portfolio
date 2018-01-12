export const enterSearchMode = () => {
  let $searchContainer = $("#search_container"),
      $searchLine = $(".search_line");

  let offset = $searchContainer.height() - 55;
  offset = "-" + offset + "px";
  $searchContainer.css("top", offset);
  $searchLine.addClass("expanded");
};

export const toggleActiveSearch = () => {
  let $searchLine = $(".search_line");
  if ($searchLine.hasClass("active")) {
    $searchLine.removeClass("active");
  } else {
    $searchLine.addClass("active");
  }
};
