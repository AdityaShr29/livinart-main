document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    
      searchBtn.addEventListener("click", function() {
        
        let query = document.getElementById("searchInput").value.toLowerCase();
        let cards = document.querySelectorAll(".blog-widget-2");
  
        cards.forEach(card => {
            let title = card.getAttribute("data-title").toLowerCase();
            if (title.includes(query)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
      });

    function searchBlogs() {
        let query = document.getElementById("searchInput").value.toLowerCase();
        let cards = document.querySelectorAll(".blog-widget-2");
        
        // cards.forEach(card => {
        //     card.classList.add("hidden");
        // });
    
        cards.forEach(card => {
            let title = card.getAttribute("data-title").toLowerCase();
            if (title.includes(query)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }

    // Enable real-time filtering (Optional)
    document.getElementById("searchInput").addEventListener("input", searchBlogs);
    
    function truncateAll(selector, charLimit) {
        document.querySelectorAll(selector).forEach((element) => {
            let text = element.innerText;
            if (text.length > charLimit) {
                element.innerText = text.substring(0, charLimit) + "...";
            }
        });
    
    }
    
    truncateAll(".blog-card-description", 100);
    
    function truncateOnResize(selector, charLimitSmall, charLimitLarge) {
        let elements = document.querySelectorAll(selector);
          let charLimit = window.innerWidth < 768 ? charLimitSmall : charLimitLarge;
          elements.forEach((element) => {
            let text = element.innerText;
            element.setAttribute("data-full-text", text); // Store original text
            element.innerText = text.length > charLimit ? text.substring(0, charLimit) + "..." : text;
    
          });
        
      }
    
      truncateOnResize(".blog-description-heads", 10, 40);

})



