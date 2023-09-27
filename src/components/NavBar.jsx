// import menu from '../asset/menu2.png'
// import close from '../asset/close2.png'
//navi toggle menu
// const menuBtn = document.querySelector(".nav-menu-btn");
// const closeBtn = document.querySelector(".nav-close-btn");
// const navigation = document.querySelector(".navigation");
// const navItems = document.querySelectorAll(".nav-items a");

// menuBtn.addEventListener("click", () => {
//     navigation.classList.add("active");
// });

// closeBtn.addEventListener("click", () => {
//     navigation.classList.remove("active");
// });

// navItems.forEach((navItem) =>{
//     navItem.addEventListener("click", () =>{
//         navigation.classList.remove("active");
//     })
// });

export const NavBar = () => {
    return (
        <header>
       
        <div class="nav-bar">
            <a href="#" class="logo">Wildanto</a>
            <div class="navigation">
                <div class="nav-items">
                    <div class="nav-close-btn"></div>
                    <a class="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Portfolio</a>
                </div>
            </div>
            <div class="nav-menu-btn"></div>
        </div>
      
    </header>
    )
};