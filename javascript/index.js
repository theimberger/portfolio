$(() => {
  $('#search').change("change", (e) => {
    let terms = e.target.value;
    console.log(terms);
  });
});
