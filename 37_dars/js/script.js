window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

    function hidetabContent() {
        tabsContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }
    function showtabContent(i=0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hidetabContent();
    showtabContent();     
    
    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if(target && target.classList.contains("tabheader__item")){
            tabs.forEach((item,idx) => {
                if(target == item) {
                    hidetabContent();
                    showtabContent(idx);  
                };
            });
        };
    });
});