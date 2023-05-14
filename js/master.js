// all variables

let user = document.querySelector(".nav .icons .user");

let logIn = document.querySelector(".page .log-in");

let containerNav = document.querySelector(" header nav");

let bars = document.querySelector(".nav .icons .bars");

let sideBar = document.querySelector(".side-bar");

let sideBarClose = document.querySelector(".side-bar .close");

let arrowToTop  = document.querySelector(".arrow")

let productsNameSectionsAll = document.querySelector(".products-name .sections .all")

let productsNameSectionsDec = document.querySelector(".products-name .sections .dec")

let productsNameSectionsAccess = document.querySelector(".products-name .sections .access")

let productsNameSectionsFurniture = document.querySelector(".products-name .sections .furniture")

let allProductsBoxDec = document.querySelectorAll(".products-card .dec");

let allProductsBoxAccess = document.querySelectorAll(".products-card .access");

let allProductsBoxFurniture = document.querySelectorAll(".products-card .furniture");

let addToFavorite = document.querySelectorAll(".products-card .image .requirements i:first-child");

let addToShopping = document.querySelectorAll(".products-card .image .requirements .shop");

let navHeart = document.querySelector("nav .heart span")

let navShop = document.querySelector("nav .shop span")




// click user 
user.addEventListener("click", e => {
    logIn.classList.toggle("open");
})

// click to open sidebar
bars.onclick = function() {
    sideBar.classList.add("open");
}

// click to exit sidebar 
sideBarClose.onclick = function() {
    sideBar.classList.remove("open");
}



/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/

window.onscroll = function() {
    if (window.scrollY >= 200) {
        containerNav.classList.add("fixed");

        arrowToTop.classList.add("appear");
    } else {    
        containerNav.classList.remove("fixed");
        
        arrowToTop.classList.remove("appear");
    }
};

// click arrow to go top page
arrowToTop.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/


// click no function Show productsNameSections Furniture Card 
productsNameSectionsFurniture.onclick =   productsNameSectionsFurnitureCard;

// Click on function Show productsNameSections Accessory card
productsNameSectionsAccess.onclick =   productsNameSectionsAccessCard;

// click on function Show productsNameSections Decoration Card
productsNameSectionsDec.onclick =   productsNameSectionsDecCard;



// function Show productsNameSections Furniture Card
function productsNameSectionsFurnitureCard() {
    addNoActiveClasses();
    allProductsBoxFurniture.forEach(card => {
        if (card.classList = productsNameSectionsAccess.dataset.name ) {
            card.classList.remove("no-active");
        } else {
            return false;
        }
    });
};


// function Show productsNameSections Decoration Card
function productsNameSectionsDecCard() {
    addNoActiveClasses();
    allProductsBoxDec.forEach(card => {
        if (card.classList = productsNameSectionsAccess.dataset.name ) {
            card.classList.remove("no-active");
        } else {
            return false;
        }
    });
};


// function Show productsNameSections Accessory card
function productsNameSectionsAccessCard() {
    addNoActiveClasses();
    allProductsBoxAccess.forEach(card => {
        if (card.classList = productsNameSectionsAccess.dataset.name ) {
            card.classList.remove("no-active");
        } else {
            return false;
        }
    });
};


// function add No Active class
function addNoActiveClasses() {
    allProductsBoxAccess.forEach(card => {
        card.classList.add("no-active")
    });
    allProductsBoxDec.forEach(card => {
        card.classList.add("no-active")
    });
    allProductsBoxFurniture.forEach(card => {
        card.classList.add("no-active")
    });
};


/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/

// add to favorite
addToFavorite.forEach(heart => {
    heart.addEventListener("click", e => {
        navHeart.innerHTML++;
    })
})

// add to shopping
addToShopping.forEach(shop => {
    shop.addEventListener("click", e => {
        navShop.innerHTML++;
    })
})

/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/