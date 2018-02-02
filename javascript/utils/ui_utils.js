export const enterSearchMode = () => {
  let $searchContainer = $("#search_container"),
      $searchLine = $(".search_line");

  let offset = $searchContainer.height() - 60;
  offset = "-" + offset + "px";
  $searchContainer.css("top", offset);
  $searchLine.addClass("expanded");
  setTimeout(() => {
    $("#signature").removeClass("hidden");
    $("#headers").removeClass("hidden");
  }, 1000);
};

export const toggleActiveSearch = () => {
  let $searchLine = $(".search_line"),
      $searchResults = $("#search_results");

  if ($searchLine.hasClass("active")) {
    $searchLine.removeClass("active");
    setTimeout(() => $searchResults.addClass("hidden"), 10);
  } else {
    $searchLine.addClass("active");
    $searchResults.removeClass("hidden");
  }
};
