   
   let gallery = [
         {
            img: './images/hero-30.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-31.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-32.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-33.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-34.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-36.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-37.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-38.webp',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-44.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-43.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-13.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-14.jpg',
             text:  'we are your trusted partner for all your interior design'
         },
         {
            img: './images/hero-15.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-16.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-17.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-18.jpg',
             text:  'we are your trusted partner for all your interior design.'
         },
         {
            img: './images/hero-19.jpg',
             text:  'we are your trusted partner for all your interior design.'
         }
   ]

     let changeText =[
         {
            job: 'welcome to the place were',
            look: 'your dream work becomes reality',
             search: 'we deal with all kind of interiors design',
         },
         {
            job: 'Get rid of everything that is not essential to making a point.',
            look: 'If opportunity doesnt knock, build a door.',
             search: 'kids bedroom interiors design',
         },
         {
            job: 'Design can help to improve our lives in the present. ',
            look: 'It does not matter how slowly you go as long as you do not stop.',
             search: 'kids living room interiors design',
         },
         {
            job: 'Simplicity will stand out, while complexity will get lost in the crowd.',
            look: 'Remember that not getting what you want is sometimes a wonderful stroke of luck',
             search: 'hallway interiors design',
         },
         {
            job: 'Good design is actually a lot harder to notice than poor design.',
            look: 'Twenty years from now you will be more disappointed by the things you didnt do than by the ones you did',
             search: 'master bedroom interiors design',
         },
         {
            job: 'Design is more than just a few tricks to the eye. Its a few tricks to the brain.',
            look: 'It is never too late to be what you might have been.',
             search: 'living room interiors design',
         },
         {
            job: 'Design is not just what it looks like and feels like. Design is how it works.',
            look: 'A bend in the road is not the end of the road…unless you fail to make the turn.',
             search: 'office interiors design',
         },
         {
            job: 'Design creates culture. Culture shapes values. Values determine the future.',
            look: 'You may encounter many defeats, but you must not be defeated',
             search: 'kitchen interiors design',
         }
     ]

     const enquireItem = [
          {
            text: 'all kind of designs'
          },
          {
            text: 'office interior design'
          },
          {
            text: 'interior design'
          },
          {
            text: 'home renovation'
          }
     ]


const faEl = document.querySelector('.fa-bars')
const closeEl = document.querySelector('.fa-close')
const menuEl = document.querySelector('.menu-links')

  const leftEl = document.querySelector('.fa-chevron-left')
  const rightEl = document.querySelector('.fa-chevron-right')
  const textEl = document.querySelector('.text')
  const imgEl = document.querySelector('.image')

   const jobEl = document.querySelector('.job')
   const lookEl = document.querySelector('.look')
   const searchEl = document.querySelector('.search')

   const textusEl = document.querySelector('.text-us')


            
   if  (faEl){
  faEl.addEventListener('click', ()=>{
      menuEl.classList.add('active')
  })
}

if  (closeEl){
    closeEl.addEventListener('click', ()=>{
        menuEl.classList.remove('active')
    })
}
         let currentItem = 0;
        

         window.addEventListener('DOMContentLoaded', ()=>{
            showNext()
         })

           function showNext(){
            let item = gallery[currentItem];
            imgEl.src = item.img;
            textEl.textContent = item.text
            currentItem++;
             if (currentItem  === gallery.length){
                currentItem = 0;
             }
              setTimeout(()=>{
                showNext()
                 
              }, 9000)
           }


           rightEl.addEventListener('click',()=>{
            showNext()
             currentItem++;
           })
           leftEl.addEventListener('click',()=>{
            showNext()
             currentItem--;
           })


         let count = 1;


         window.addEventListener('DOMContentLoaded', ()=>{
            changeALL();
         })



             function changeALL(){
               const showItem = changeText[count];
               jobEl.textContent = showItem.job
               lookEl.textContent = showItem.look
               searchEl.textContent = showItem.search
                 count++;
                 if (count === changeText.length){
                     count = 0;
                 }
                  setTimeout(()=>{
                     changeALL()
                  }, 9000)
             }


              let counter = 0;

            //   enquire

             window.addEventListener('DOMContentLoaded',()=>{
                changeItem();
             })

                 
               function changeItem(){
                const enquire = enquireItem[counter];
                textusEl.textContent = enquire.text
                     counter++;
                     if (counter === enquireItem.length -1){
                         counter = 0;
                     }
                   setTimeout(()=>{
                    changeItem()
                   }, 2000);
               }

             
