let features = [
    {
        id:0,
        image:"img/p1.jpg",
        heading:'Square Box Mockup',
        span :"Mockup",
    },
    {
        id:1,
        image:"img/p2.jpg",
        heading:'Product Box Package Mockup',
        span :"Mockup",
    },
    {
        id:2,
        image:"img/p3.jpg",
        heading:'Creative Package Design',
        span :"Packaging",
    },
    {
        id:3,
        image:"img/p4.jpg",
        heading:'Packaging Brand',
        span :"Packaging",
    },
    {
        id:4,
        image:"img/p5.jpg",
        heading:'Isometric 3D Extrusion',
        span :"Typography",
    },
    {
        id:6,
        image:"img/p6.jpg",
        heading:'White Space Photography',
        span :"photography",
    },
]
let container = document.querySelector(".featurescontainer");
window.addEventListener('DOMContentLoaded',function(){
    let display = features.map(function(item){        
        var {image,heading ,span} = item;
        return (
            `<div class='featurebox'>
               <div class='imagefeature'>
                <img src=${image} >
               </div>
               <h3>${heading}</h3>
               <span>${span}</span>
            </div>`
        )
       
    })
    display = display.join('')
    container.innerHTML = display;

});

let nav = document.querySelector('nav');
let navul = document.querySelectorAll("nav ul li a");
window.addEventListener('scroll',function(){
    if(window.scrollY>300){
      nav.classList.add('active');
      navul.forEach(function(nav1){
        nav1.classList.add('active')
      })
    }
    else if(window.scrollY<300){
        nav.classList.remove('active');
        navul.forEach(function(nav1){
            nav1.classList.remove('active')
        })
    }

})

let resume =[
    {
        id:0,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:1,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:2,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:3,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:4,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:5,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:6,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
    {
        id:6,
        icon :`<i class='fas fa-file'></i>`,
        date:'March 2013 - Present',
        heading:'Masteral in Information Technology',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        address:'New York University',
    },
];

let resume1 = document.querySelector('.resume');
window.addEventListener('DOMContentLoaded',function(){
    let display =resume.map(function(item){
        let {icon,date,heading,text,address} = item;
        return (
            `<div class='resumebox'>
              <div class='iconresume'>
               <span id ='span'>${icon}</span>
               <span>${date}</span>
              </div>
              <h3>${heading}</h3>
              <p>${text}</p>
              <h5>${address}</h5>
            </div>`
        )
    })
    display =display.join('')
    resume1.innerHTML = display;
});

let about = [
    {
        id:0,
        image:'img/image_1.jpg',

    },
    {
        id:1,
        image1:"img/image_1.jpg",
        heading1:"about Me",
        text1:`Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
           a paradisematic country,
          in which roasted parts of sentences fly into your mouth.`,
      btn:'Hire me',
      bnt1:'Dounlaod Cv',
    },

];
const about1 = document.querySelector('.about');
window.addEventListener("DOMContentLoaded",function(){
    let display = about.map(function(item,index){
        if(index ===0){
            var {image} = item;
            return (
                `<div class='box'>
                  <img src=${image}>
                </div>`
            )
        }
        if( index ===1){

            return (
                `<div class='box1'>
                  <h3>${item.heading1}</h3>
                  <p>${item.text1}</p>
                  <div class='aboutbtn'>
                   <button>${item.btn}</button>
                   <button>${item.bnt1}</button>
                  </div>
                 </div>`
            );
        }
    })
    display =display.join("");
    about1.innerHTML = display
})

let test = [
    {
        id:0,
        image:"img/person_1.jpg",
        text:`“Far far away, behind the word mountains, far from the countries Vokalia
         and Consonantia, there live the blind texts. Separated they l
        ive in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
        span:"— Craig Gowen, CEO XYZ Inc.",
    },
    {
        id:1,
        image:"img/person_2.jpg",
        text:`“Far far away, behind the word mountains, far from the countries Vokalia
         and Consonantia, there live the blind texts. Separated they l
        ive in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
        span:"— Craig Gowen, CEO XYZ Inc.",
    },
    {
        id:2,
        image:"img/person_3.jpg",
        text:`“Far far away, behind the word mountains, far from the countries Vokalia
         and Consonantia, there live the blind texts. Separated they l
        ive in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
        span:"— Craig Gowen, CEO XYZ Inc.",
    },
    {
        id:3,
        image:"img/person_4.jpg",
        text:`“Far far away, behind the word mountains, far from the countries Vokalia
         and Consonantia, there live the blind texts. Separated they l
        ive in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
        span:"— Craig Gowen, CEO XYZ Inc.",
    },
    {
        id:4,
        image:"img/person_1.jpg",
        text:`“Far far away, behind the word mountains, far from the countries Vokalia
         and Consonantia, there live the blind texts. Separated they l
        ive in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
        span:"— Craig Gowen, CEO XYZ Inc.",
    },
    {
        id:5,
        image:"img/person_2.jpg",
        text:`“Far far away, behind the word mountains, far from the countries Vokalia
         and Consonantia, there live the blind texts. Separated they l
        ive in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
        span:"— Craig Gowen, CEO XYZ Inc.",
    },

]

let testmonial = document.querySelector('.tesmonial');
window.addEventListener('DOMContentLoaded',function(){
    let display = test.map(function(item){
        let {image,text,span} = item;
      return (

         `
         
        <div class='testmonialbox'>
         <div class='imagetestmonial'>
         <img src =${image}> 
        </div>
         <p>${text}</p>
        </div>`
      )
    })
    display =display.join('');
    testmonial.innerHTML = display;
});

let services = [
    {
        id:0,
        icon:`<i class='fas fa-desktop'></i>`,
        heading:'Web Design',
        text:`Far far away, behind the word mountains, far 
        from the countries Vokalia and Consonantia, there live the 
        blind texts. Separated they live in
         Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
        link:'Learn More ',
    },
    {
        id:1,
        icon:`<i class='fas fa-desktop'></i>`,
        heading:'Search Engine',
        text:`Far far away, behind the word mountains, far 
        from the countries Vokalia and Consonantia, there live the 
        blind texts. Separated they live in
         Bookmarksgrove right at the coast of the Semantics,.`,
        link:'Learn More ',
    },
    {
        id:2,
        icon:`<i class='fas fa-desktop'></i>`,
        heading:'Video Editing',
        text:`Far far away, behind the word mountains, far 
        from the countries Vokalia and Consonantia, there live the 
        blind texts. Separated they live in
         Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
        link:'Learn More ',
    },
]

const services1 = document.querySelector('.servicecontainer');
window.addEventListener('DOMContentLoaded',function(){
    let display = services.map(function(item){
        return (
            `<div class='servicebox'>
              <div class='iconservice'>
              <span>${item.icon}</span>
              </div>
               <h2>${item.heading}</h2>
              <p>${item.text}</p>
              <a>${ item.link}</a>
            </div>`
        )
    })
    display =display.join('');
    services1.innerHTML = display;
})

let blog = [
    {
        id:0,
        image:'img/post_1.jpg',
        heading:'Creative Product Designer From Facebook',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        icon:`<i class='fas fa-file'></i>`,
        date:'Aug 7, 2018',
    },
    {
        id:1,
        image:'img/post_2.jpg',
        heading:'Creative Product Designer From Facebook',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        icon:`<i class='fas fa-file'></i>`,
        date:'Aug 7, 2018',
    },
    {
        id:2,
        image:'img/post_3.jpg',
        heading:'Creative Product Designer From Facebook',
        text:`Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
        icon:`<i class='fas fa-file'></i>`,
        date:'Aug 7, 2018',
    }
]
let blog1  = document.querySelector('.blogbox');
window.addEventListener('DOMContentLoaded',function(){
    let display = blog.map(function(item){
       return (
         `<div class='blogbox1'>
          <div class='blogimage'>
           <img src =${item.image}>
          </div>
          <h4>${item.heading}</h4>
          <p>${item.text}</p>
           <div class='datetime'>
            <span>${item.icon}</span>
            <h5>${item.date}</h5>
           </div>
         </div>`
       )
    })
    display = display.join("")
    blog1.innerHTML = display
})

