var myPageIds = ['about', 'download'];
var isOpen = false;
var isDark = false;

function sideBar() {
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

const openSidebar = () => {
    isOpen = true;
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("sidebar").style.marginLeft = "250px";
    document.getElementById("blur").style.filter = 'blur(2px)';
};

const closeSidebar = () => {
    isOpen = false;
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("sidebar").style.marginLeft = "0";
    document.getElementById("blur").style.filter = 'blur(0px)';
};

function showContent(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
    myPageIds.forEach(pageId => {
        if (pageId !== id) {
            document.getElementById(pageId).style.display = "none";
        }
    });
}


function isDarkMode() {
    if (!isDark) {
        document.body.classList.add("dark-theme");
        document.getElementById("header").style.backgroundColor = "d9d8d8";
        document.getElementById("asciiart").style.color = "Black";
        isDark = true;
    } else {
        document.body.classList.remove("dark-theme");
        document.getElementById("header").classList.remove("dark-theme");
        document.getElementById("header").style.backgroundColor = "Black";
        document.getElementById("asciiart").style.color = "#ffff";
        isDark = false;
    }
}
