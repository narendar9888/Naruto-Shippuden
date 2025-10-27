$("iframe").contents().find(".goog-te-menu2-item div").on("click", function () {
    setTimeout(function () {
        $(".goog-te-menu-frame").fadeOut();
    }, 500); // Delay to allow translation to trigger
});



