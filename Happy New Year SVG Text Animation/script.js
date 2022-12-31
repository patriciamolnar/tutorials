let hue = 60; 
let delay = 0; 

const elements = document.querySelectorAll('svg path'); 
elements.forEach((element) => {
    const length = element.getTotalLength();
    element.style.strokeDashoffset = length;
    element.style.strokeDasharray = length; 
    element.style.animationDelay = `${delay}s`; 
    element.style.stroke = `hsl(${hue}, 90%, 70%)`; 
    delay += 0.6; 
    hue += 20; 
}); 


