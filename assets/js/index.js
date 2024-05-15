// Coffee Menu da tablar o'zgarish funksiyasi

function coffeeMenuTab(params) {
    let buttons = document.getElementsByClassName("btn__coffeMenu");
    let tabs = document.getElementsByClassName("coffeeMenu__tabContent--child");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        tabs[i].classList.remove("active");
    }

    buttons[params].classList.add('active');
    tabs[params].classList.add('active');
}

// Mobile Menuni avtive inactive qilish funksiyasi

function mobileMenu() {
    let mobileMenu = document.getElementById('mobileMenu').classList;
    let mobileMenuBtn = document.getElementsByClassName('header__item--menuMobile');

    mobileMenu.forEach(element => {
        if (element == 'active') {
            mobileMenu.remove('active');
            this.document.children[0].children[1].style.overflow = "auto";
        } else {
            mobileMenu.add('active');
            this.document.children[0].children[1].style.overflow = "hidden";
        }
    });

    mobileMenuBtn[0].classList.forEach(element => {
        if (element == 'active') {
            mobileMenuBtn[0].classList.remove('active');
        } else {
            mobileMenuBtn[0].classList.add('active');
        }
    });


}

// Coffe o'lchamini tanlsh funksiyasi

function coffeeSize(params) {
    let s200 = document.getElementById('s200');
    let m300 = document.getElementById('m300');
    let l400 = document.getElementById('l400');

    s200.classList.remove('active');
    m300.classList.remove('active');
    l400.classList.remove('active');

    document.getElementById(params).classList.add('active')
}

function additives(params) {
    let sugar = document.getElementById('sugar');
    let cinnamon = document.getElementById('cinnamon');
    let syrup = document.getElementById('syrup');

    sugar.classList.remove('active');
    cinnamon.classList.remove('active');
    syrup.classList.remove('active');

    document.getElementById(params).classList.add('active')
}

// Modalni avtive inactive qilish funksiyasi

function modalIsActive(params) {
    let modal = document.getElementById(params).classList;
    isAcrive = false;

    for (let i = 0; i < modal.length; i++) {
        if (modal[i] == 'active') {
            isAcrive = true;
        }
    }

    if (isAcrive) {
        modal.remove('active');
        this.document.children[0].children[1].style.overflow = "auto";
    } else {
        modal.add('active');
        this.document.children[0].children[1].style.overflow = "hidden";
    }
}