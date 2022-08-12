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
   '#FBD1A2', '#e9bf67','#40e0d0','#e7dfcf',
];


const Glacier=[
    'Glacier','savannah','coral','beach'
]

const number=[
    '$39.00','$45.00','$50.00','$70.00'
]


const pagesNumber=[
    '1/4','2/4','3/4','4/4'
]

const switchText=[
    `glaciers contain 75% of the world's fresher`,`We will have lost 60% of our reefs by 2030.`,'in 20 years, there could be more plastic in our oceans than fish',`the earth's area affected by desertification is approx 11 times india's size`, 
]


const switchLargeText=[
    'The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.',   'Coral reefs are essential to humans, as they protect the shorelines and are a source nutrients and habitat for thousands of marine species',    'Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.', 'Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.'
]

const switchBackgroundImages=[
      'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' , 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530','https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80','https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg'
]


const switchImage=[
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514','https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557', 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030', 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119',
]









let switchedButton= 0;


document.querySelector('.prev').addEventListener(
    'click', function () {
       
        switchedButton+=1
       document.querySelector('body').style.backgroundColor = switchedColors[switchedButton]
        document.querySelector('.glacier').textContent = Glacier[switchedButton];
        document.querySelector('.number').textContent = number[switchedButton];
        document.querySelector('.lol').textContent = switchText[switchedButton]
        document.querySelector('.lo').textContent = switchLargeText[switchedButton];
        document.querySelector('.fle-3').textContent = pagesNumber[switchedButton];

        document.querySelector('.img-1').src = switchBackgroundImages[switchedButton];

        document.querySelector('.img-2').src = switchImage;



        
    }
)


document.querySelector('.next').addEventListener(
    'click', function (params) {
    switchedButton-=1
    document.querySelector('body').style.backgroundColor = switchedColors[switchedButton]
    document.querySelector('.glacier').textContent = Glacier[switchedButton];
    document.querySelector('.number').textContent = number[switchedButton];
    document.querySelector('.lol').textContent = switchText[switchedButton]
    document.querySelector('.lo').textContent = switchLargeText[switchedButton];
    document.querySelector('.fle-3').textContent = pagesNumber[switchedButton];
    document.querySelector('.img-1').src = switchBackgroundImages[switchedButton];

        document.querySelector('.img-2').src = switchImage;
    } 
)















