'use strict'

/*document.querySelector('body').textContent;
document.querySelector('.prev').textContent;
document.querySelector('.next').textContent;
document.querySelector('.fle-3').textContent;
document.querySelector('.closca').textContent;
document.querySelector('.glacier').textContent;
document.querySelector('.number').textContent;
document.querySelector('.lol').textContent; 
document.querySelector('.lo').textContent;
document.querySelector('.svgs').textContent;
document.querySelector('.img-1).textContent;
document.querySelector('.img-2).textContent;   */



const switchedColors =  [
    'blanchedalmond','maroon','brown','white','thistle','#40e0d0',
];


const Glacier=[
    'glacier','savannah','coral','beach'
]

const number=[
    '$39.00','$45.00','$50.00','$70.00'
]


const switchText=[
    `glaciers contain 75% of the world's fresher`,`We will have lost 60% of our reefs by 2030.`,'in 20 years, there could be more plastic in our oceans than fish',`the earth's area affected by desertification is approx 11 times india's size`
]



const switchImages=[
      'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' , 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557'
]









let switchedButton= 0;


document.querySelector('.prev').addEventListener(
    'click', function () {
       
        switchedButton+=1
       document.querySelector('body').style.backgroundColor = switchedColors[switchedButton]
        document.querySelector('.glacier').textContent = Glacier[switchedButton];
        document.querySelector('.number').textContent = number[switchedButton];
        document.querySelector('.lol').textContent = switchText[switchedButton]
        document.querySelector('.lo').textContent = switchTexts[2];
        document.querySelector('.fle-3').textContent = switchTexts[4];
       // document.querySelector('.svgs').style.backgroundColor= switchedColors[3];
        document.querySelector('.img-1').textContent = switchImages[0];
    }
)











