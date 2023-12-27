var myPageIds = ['about', 'download'];
var isOpen = false;
var isDark = false;
var asciiart = document.getElementById('asciiart');

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

function scrambleText(element, duration) {
    const originalText = element.innerText;
    const characters = "/-_=+~#";

    function getRandomCharacter() {
        const nonSpaceCharacters = characters.replace(/\s/g, '');
        return nonSpaceCharacters[Math.floor(Math.random() * nonSpaceCharacters.length)];
    }

    function updateText(progress) {
        let newText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (originalText[i] === '\n') {
                newText += '\n';
            } else if (originalText[i] === ' ') {
                newText += ' ';
            } else {
                const revealAmount = Math.min(1, progress - i / originalText.length);
                if (Math.random() < revealAmount) {
                    newText += originalText[i];
                } else {
                    newText += getRandomCharacter();
                }
            }
        }
        element.innerText = newText;
    }

    let startTime = null;

    function animate() {
        if (!startTime) {
            startTime = Date.now();
        }
    
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(1, elapsedTime / duration);
    
        if (elapsedTime < duration/2) {
            const settleProgress = Math.min(1, (elapsedTime - duration) / 1000);
            const finalProgress = progress * (1 - settleProgress);
    
            console.log('settle progress: ', settleProgress);
            console.log('final progress: ')
            updateText(finalProgress);
            requestAnimationFrame(animate);
        } else {
            element.innerText = originalText;
            console.log('done');
        }
    }
    
    animate();
}