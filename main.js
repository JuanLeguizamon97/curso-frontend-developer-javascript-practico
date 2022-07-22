const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingDetail = document.querySelector('.product-detail')


navEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu);
menuShoppingCart.addEventListener('click', toogleShoppingDetail);

function toogleDesktopMenu(){
    const isShoppingCartClosed= shoppingDetail.classList.contains('inactive');

    if (!isShoppingCartClosed){
        shoppingDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isShoppingCartClosed= shoppingDetail.classList.contains('inactive');

    if (!isShoppingCartClosed){
        shoppingDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toogleShoppingDetail(){
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    shoppingDetail.classList.toggle('inactive');
}

//Product list consult
const productList =[];
