const fixedFooter = document.querySelector('.fixed-footer');


window.onscroll = () => {
    this.scrollY > 900 ? fixedFooter.classList.add("footerVisible")
        :
        fixedFooter.classList.remove("footerVisible");
}