const fixedFooter = document.querySelector('.fixed-footer');


window.onscroll = () => {
    this.scrollY > 800 ? fixedFooter.classList.add("footerVisible")
        :
        fixedFooter.classList.remove("footerVisible");
}