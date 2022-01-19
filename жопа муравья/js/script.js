function testWebP(callback) { 
var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();;


const tabs = () =>{
   const tabsItem = document.querySelectorAll('.tabs__item');
   const tabsBlock = document.querySelectorAll('.tabs__block');

   const hideAll = () =>{
      for (let i = 0; i < tabsItem.length; i++) {
         tabsItem[i].classList.remove('active');
         tabsBlock[i].classList.remove('active');
      }
   };
   for (let i = 0; i < tabsItem.length; i++) {
      tabsItem[i].addEventListener('click', ()=>{
         console.log(1);
         hideAll();
         tabsItem[i].classList.add('active');
         tabsBlock[i].classList.add('active');
      });
      
   }
   
};

tabs();;
class Tabs {
   constructor(root) {
       this.root = root;
       this.list = this.root.querySelector(':scope > [data-list]');
       this.buttons = new Map([...this.list.querySelectorAll(':scope > [data-target]')]
           .map(entry => [
               entry.dataset.target,
               entry,
           ])
       );
       this.containers = new Map([...this.root.querySelectorAll(':scope > [data-tab]')]
           .map(entry => [entry.dataset.tab, entry])
       );
       this.salt = Math.random().toString(36).slice(2);
       this.current = null;
       this.active = null;
   }

   select(name) {
       const keys = [...this.buttons.keys()];

       for (let [key, button] of this.buttons.entries()) {
           button.setAttribute('aria-selected', key === name);
       }

       for (let [key, container] of this.containers.entries()) {
           if (key === name) {
               container.removeAttribute('hidden');
           } else {
               container.setAttribute('hidden', true);
           }
       }

       this.active = keys.indexOf(name);
   }

   init() {
       const keys = [...this.buttons.keys()];

       this.list.setAttribute('role', 'tablist');

       this.list.addEventListener('keydown', event => {
           if (event.code === 'Home') {
               event.preventDefault();

               this.buttons.get(keys[0]).focus();
           }

           if (event.code === 'End') {
               event.preventDefault();

               this.buttons.get(keys[keys.length - 1]).focus();
           }

           if (event.code === 'ArrowLeft') {
               event.preventDefault();

               this.buttons.get(keys[Math.max(0, this.current - 1)]).focus();
           }

           if (event.code === 'ArrowRight') {
               event.preventDefault();

               this.buttons.get(keys[Math.min(keys.length - 1, this.current + 1)]).focus();
           }
       });

       for (let [key, button] of this.buttons.entries()) {
           button.setAttribute('tabindex', '0');
           button.setAttribute('id', `button_${this.salt}_${key}`);
           button.setAttribute('role', 'tab');
           button.setAttribute('aria-controls', `container_${this.salt}_${key}`);

           button.addEventListener('click', event => {
               event.preventDefault();

               this.select(key);
           });

           button.addEventListener('focus', event => {
               this.current = keys.indexOf(key);
           });

           button.addEventListener('keypress', event => {
               if (event.code === 'Enter' || event.code === 'Space') {
                   event.preventDefault();

                   this.select(key);
               }
           });
       }

       for (let [key, container] of this.containers.entries()) {
           container.setAttribute('id', `container_${this.salt}_${key}`);
           container.setAttribute('role', 'tabpanel');
           container.setAttribute('aria-labelledby', `button_${this.salt}_${key}`);
       }

       this.select(keys[0]);
   }

   static create(element) {
       const instance = new Tabs(element);
       instance.init();

       return instance;
   }
}

const containers = document.querySelectorAll('[data-tabs]');

for (let container of containers) {
   const tabs = Tabs.create(container);
   console.log(tabs)
}

const bue = document.querySelector('.spot-bue');
const sell = document.querySelector('.spot-sell');

bue.addEventListener('click', function(){
   bue.classList.add('active')
   sell.classList.remove('active')

})
sell.addEventListener('click', function(){
   bue.classList.remove('active')
   sell.classList.add('active')

})


const spot = document.querySelector('.spot-spot');
const chat = document.querySelector('.spot-chat');

spot.addEventListener('click', function(){
   spot.classList.add('active')
   chat.classList.remove('active')

})
chat.addEventListener('click', function(){
   spot.classList.remove('active')
   chat.classList.add('active')

})


const limit = document.querySelector('.spot-limit');
const oco = document.querySelector('.spot-oco');
const slimit = document.querySelector('.spot-slimit');
const market = document.querySelector('.spot-market');

limit.addEventListener('click', function(){
    limit.classList.add('active')
    market.classList.remove('active')
    oco.classList.remove('active')
    slimit.classList.remove('active')

})
oco.addEventListener('click', function()    {
      oco.classList.add('active')
    limit.classList.remove('active')
    market.classList.remove('active')
    slimit.classList.remove('active')
 
 })
 slimit.addEventListener('click', function(){
    slimit.classList.add('active')
    limit.classList.remove('active')
    market.classList.remove('active')
    oco.classList.remove('active')
    
 
 })
 market.addEventListener('click', function(){ 
     market.classList.add('active')
    limit.classList.remove('active')
    oco.classList.remove('active')
    slimit.classList.remove('active')
 })
;

const sellimit = document.querySelector('.spot-sellimit');
 const selloco = document.querySelector('.spot-selloco');
 const sellslimit = document.querySelector('.spot-sellslimit');
 const sellmarket = document.querySelector('.spot-sellmarket');
 
 sellimit.addEventListener('click', function(){
    sellimit.classList.add('active')
    sellmarket.classList.remove('active')
    selloco.classList.remove('active')
    sellslimit.classList.remove('active')
 
 })
 selloco.addEventListener('click', function()   {
    selloco.classList.add('active')
    sellimit.classList.remove('active')
    sellmarket.classList.remove('active')
    sellslimit.classList.remove('active')

  })
  sellslimit.addEventListener('click', function(){
    sellslimit.classList.add('active')
    sellimit.classList.remove('active')
    sellmarket.classList.remove('active')
    selloco.classList.remove('active')


  })
  sellmarket.addEventListener('click', function(){ 
    sellmarket.classList.add('active')
    sellimit.classList.remove('active')
    selloco.classList.remove('active')
    sellslimit.classList.remove('active')
  })
;;
const spotBueTab = () =>{
   const spotTabsBueBtn = document.querySelectorAll(".spot-tabs__bue-btn");
   const spotTabBue = document.querySelectorAll(".spot-tab___bue");


   const hideAll = () =>{
      for (let i = 0; i < spotTabsBueBtn.length; i++) {
         spotTabsBueBtn[i].classList.remove('active');
         spotTabBue[i].classList.remove('active');
      }
   };
   for (let i = 0; i < spotTabsBueBtn.length; i++) {
      spotTabsBueBtn[i].addEventListener('click', ()=>{
         console.log(1);
         hideAll();
         spotTabsBueBtn[i].classList.add('active');
         spotTabBue[i].classList.add('active');
      });
      
   }
   
};

spotBueTab();

const spotSellTab = () =>{
   const spotTabsSellBtn = document.querySelectorAll(".spot-tabs__sell-btn");
   const spotTabSell = document.querySelectorAll(".spot-tab___sell");
   console.log(spotTabsSellBtn);
   console.log(spotTabSell);

   const hideAll = () =>{
      for (let i = 0; i < spotTabsSellBtn.length; i++) {
         spotTabsSellBtn[i].classList.remove('active');
         spotTabSell[i].classList.remove('active');
      }
   };
   for (let i = 0; i < spotTabsSellBtn.length; i++) {
      spotTabsSellBtn[i].addEventListener('click', ()=>{
         hideAll();
         spotTabsSellBtn[i].classList.add('active');
         spotTabSell[i].classList.add('active');
      });
      
   }
   
};

spotSellTab();;
$(document).ready(function(){
   $('.block__title').click(function(event){
       if($('.block').hasClass('one')){
           $('.block__title').not($(this)).removeClass('active');
           $('.block__text').not($(this).next()).slideUp(300);
       }
       $(this).toggleClass('active').next().slideToggle(300);

   });
});

const faTimes = document.querySelector('.croos-times');
const buregerBody =document.querySelector('.bureger-body')
const croosBars = document.querySelector('.croos-bars')
const body = document.querySelector('body')

faTimes.addEventListener('click', function (e) {
   buregerBody.classList.remove('active');
   if (e.target.classList.contains("bureger-body")) {
      buregerBody.classList.remove('active');
   }
   body.classList.remove('ov')
  
})

croosBars.addEventListener('click', function () {
   buregerBody.classList.add('active')
   body.classList.add('ov')
});

