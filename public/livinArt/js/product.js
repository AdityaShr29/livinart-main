document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".product-content");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const tabTitle = document.getElementById("tabTitle");
    const prevText = document.getElementById("prevForesightText");
    const nextText = document.getElementById("nextForesightText");
    let currentIndex = 0;


    const tiltImages = document.querySelectorAll('.tilt-img');

    tiltImages.forEach(img => {
      img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = -(y - centerY) / 25;
        const rotateY = (x - centerX) / 25;
    
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    });
    













    nextText.innerHTML = tabs[1].dataset.tabTitle;

    function updateTabs(index) {
        tabs.forEach((t) => t.classList.remove("active"));

        tabTitle.innerHTML = tabs[index].dataset.tabTitle; // for prev and next arrows click

        if(window.innerWidth > 786){
            if (index === 0 || currentIndex === 0) {
                prevText.innerHTML = "";
                nextText.innerHTML = tabs[index + 1].dataset.tabTitle;
            }else if (index === tabs.length - 1) {
                prevText.innerHTML = tabs[index - 1].dataset.tabTitle;
                nextText.innerHTML = "";
            }else{
                prevText.innerHTML = tabs[index - 1].dataset.tabTitle;
                nextText.innerHTML = tabs[index + 1].dataset.tabTitle;
            }

        }


        // nextText.innerHTML = tabs[index + 1].dataset.tabTitle;

        contents.forEach((c) => {
            c.classList.remove("active");
            c.style.opacity = "0";
            c.style.transform = "translateY(10px)";
        });

        tabs[index].classList.add("active");
        contents[index].classList.add("active");
        setTimeout(() => {
            contents[index].style.opacity = "1";
            contents[index].style.transform = "translateY(0)";
        }, 10);

        prevButton.disabled = index === 0;
        nextButton.disabled = index === tabs.length - 1;
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            currentIndex = index;
            updateTabs(currentIndex);
        });
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTabs(currentIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < tabs.length - 1) {
            currentIndex++;
            updateTabs(currentIndex);
        }
    });
});
