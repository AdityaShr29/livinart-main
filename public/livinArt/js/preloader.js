(function ($) {
    "use strict";

    /*============= preloader js css =============*/
    var cites = [];
    cites[0] =
        "Website Developer, Web Designer, Graphic Designer, UI/UX Designer,";
    cites[1] = "IT Services and Solution.";

    var cite = cites[Math.floor(Math.random() * cites.length)];
    $("#preloader p").text(cite);
    $("#preloader").addClass("loading");

    $(window).on("load", function () {
        setTimeout(function () {
                $("#preloader").fadeOut(50, function () {
                    $("#preloader").removeClass("loading");
                });
            },
            50
        );
    });
})(jQuery);
