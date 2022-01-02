$(function () {
  $("body").on("click", ".sizes", function () {
    let selectedText = $("#mySelect option:selected").html();
    $(".text").css({ "font-size": selectedText });

    console.log(selectedText);
  });
  $("body").on("click", ".save-btn", function () {
    const index = 0;
    $(".content").prop("readonly", true);
    console.log($(".content").val());
    const value = $(".content").val();
    if (typeof Storage !== "undefined") {
      localStorage.setItem("book", value);

      //console.log(localStorage.getItem("book"));
      //$(".content").text(`${localStorage.getItem("lastname")}`);
    }
  });
  $("body").on("click", ".edit-btn", function () {
    $(".content").prop("readonly", false);
  });
  $("body").on("mouseup", ".text", function () {
    var selection = getSelectedText();
    if (selection.length >= 3) {
      console.log(selection);

      var replacement = $("<span></span>")
        .attr({ class: "hl" })
        .html(selection);
      console.log(replacement);

      var replacementHtml = $("<div>")
        .append(replacement.clone())
        .remove()
        .html();
      console.log(replacementHtml);

      $(this).html($(this).html().replace(selection, replacementHtml));
    }
  });

  //Grab selected text
  function getSelectedText() {
    if (window.getSelection) {
      return window.getSelection().toString();
    } else if (document.getSelection) {
      return document.getSelection();
    } else if (document.selection) {
      return document.selection.createRange().text;
    }
  }
});
