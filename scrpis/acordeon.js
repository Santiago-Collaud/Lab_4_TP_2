
document.addEventListener("DOMContentLoaded", function() {
    var accordionItems = document.querySelectorAll(".acordion-item");

    accordionItems.forEach(function(item) {
        var title = item.querySelector(".acordion-title");
        var content = item.querySelector(".acordion-content");

        title.addEventListener("click", function() {
            accordionItems.forEach(function(element) {
                if (element !== item) {
                    element.querySelector(".acordion-content").classList.remove("active");
                }
            });

            content.classList.toggle("active");
        });
    });
});