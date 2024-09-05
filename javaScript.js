const lightBulbSwitch = document.querySelector("#lightbulb-switch");
const lightBulbImage = document.querySelector("#lightbulb-image");

let isLightBulbOn = false;

lightBulbSwitch.addEventListener("click", function() {
    if(isLightBulbOn) {
        lightBulbImage.src = 'off.png'
        isLightBulbOn = false;
    } else {
        lightBulbImage.src = 'on.png'
        isLightBulbOn = true;
    }
    console.log(isLightBulbOn);
})