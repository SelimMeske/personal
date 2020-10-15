let headerContainer      = document.querySelector('header');
let cWidth               = headerContainer.clientWidth;
let cHeight              = headerContainer.clientHeight;
let particleCounter      = 0;
let particleCounterTwo   = 0;
let particleCounterThree = 0;
let navLinks             = document.querySelectorAll('.nav-item');
let select               = document.querySelector('.select');
let navDummy             = document.querySelector('.nav-hidden-dummy');
let sun                  = document.querySelector('.sun');
let sunHolder            = document.querySelector('.sun-holder-inner');
let sunHolderOuter       = document.querySelector('.sun-holder');
let imgWrapOuter         = document.querySelector('.img-wrap');
let branchSections       = document.querySelectorAll('.branch-section');
let treeUiAnimationLine  = document.querySelector('.ani-tree-ui');
let aboutMeHolder        = document.querySelector('.about-me-holder');
let section2             = document.querySelector('.s2');
let initAnimations       = false;

//Particle types and characteristics
let particleTypes = {
  typeOne: {
    lifeMin: 2,
    lifeMax: 7,
    size: 1
  },
  typeTwo: {
    lifeMin: 8,
    lifeMax: 13,
    size: 2
  },
  typeThree: {
    lifeMin: 4,
    lifeMax: 10,
    size: 4
  },
  typeFour: {
    lifeMin: 2,
    lifeMax: 6,
    size: 6
  }
}
while(particleCounter < (cWidth/40)){
  particleCounter++;
  let particle        = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top  = randomNumber(cHeight) + 'px';
  particle.style.left = randomNumber(cWidth) + 'px';
  headerContainer.append(particle);
  destroyParticle('typeTwo', particle, particleCounter);
}
while(particleCounterTwo < (cWidth/20)){
  particleCounterTwo++;
  let particle        = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top  = randomNumber(cHeight) + 'px';
  particle.style.left = randomNumber(cWidth) + 'px';
  headerContainer.append(particle);
  destroyParticle('typeOne', particle, particleCounterTwo);
}
while(particleCounterThree < (cWidth/55)){
  particleCounterThree++;
  let particle        = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top  = randomNumber(cHeight) + 'px';
  particle.style.left = randomNumber(cWidth) + 'px';
  headerContainer.append(particle);
  destroyParticle('typeThree', particle, particleCounterThree);
}

function recreateParticle(type){
  particleCounter++;
  let particle        = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top  = randomNumber(cHeight+400) + 'px';
  particle.style.left = randomNumber(cWidth) + 'px';
  headerContainer.append(particle);
  destroyParticle(type, particle, particleCounter);
}

function destroyParticle(type, particle, counter) {
  let minLife = particleTypes[type].lifeMin;
  let maxLife = particleTypes[type].lifeMax;
  let size    = particleTypes[type].size;
  let life    = Math.floor(Math.random() * (maxLife - minLife + 1) ) + minLife;
  particle.style.animation  = 'parOne '+life+'s forwards';
  particle.style.width      = size + 'px';
  particle.style.height     = size + 'px';
  let destroyMeBoss = function destroyMe(){
    particle.remove();
    counter--;
    recreateParticle(type);
  }
  setTimeout(() => {
    particle.style.transform  = 'translateY(-100px)';
  }, 100);
  setTimeout(destroyMeBoss, life*1100);
}

function randomNumber(multiple){
  return Math.floor(Math.random() * multiple);
}

let buttons = document.querySelectorAll('.button');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', (e) => {
    let img = buttons[i].querySelector('img');
    img.style.transform = 'translate(-120%, -50%) rotateZ(90deg)';
  });
  buttons[i].addEventListener('mouseleave', (e) => {
    let img = buttons[i].querySelector('img');
    img.style.transform = 'translate(-120%, -50%) rotateZ(0deg)';
  });
}

document.addEventListener('scroll', () => {
  let navigation = document.querySelector('.navigation-holder');
  let spaceFromTop = navigation.getBoundingClientRect().top;
  if(spaceFromTop <= 0) {
    navDummy.style.display         = 'block';
    navigation.style.position      = 'fixed';
    navigation.style.top           = '-40px';
    navigation.style.left          = '0';
    navigation.style.animationName = 'navFadeIn';
  }

  let aboutMeFromTop = aboutMeHolder.getBoundingClientRect().top - 360;
  let sectionTwo     = section2.getBoundingClientRect().top - 370;
  aboutMeFromTopPositive = Math.abs(aboutMeFromTop);
  if(aboutMeFromTop < 0) {
    if(aboutMeFromTopPositive > aboutMeHolder.clientHeight) {
      treeUiAnimationLine.style.height = aboutMeHolder.clientHeight + 'px';
    }else {
      treeUiAnimationLine.style.height = aboutMeFromTopPositive + 'px';
    }
  }
  console.log(sectionTwo)
  if(sectionTwo < 0) {

    if(!initAnimations){
      let ballons      = document.querySelectorAll('.sectionTwo svg');

      let htmlSkill    = document.querySelector('.html-skill .progress');
      let cssSkill     = document.querySelector('.css-skill .progress');
      let jsSkill      = document.querySelector('.js-skill .progress');
      let phpSkill     = document.querySelector('.php-skill .progress');
      let angularSkill = document.querySelector('.angular-skill .progress');
      let nodeSkill    = document.querySelector('.node-skill .progress');
      let mysqlSkill   = document.querySelector('.mysql-skill .progress');
      let wpPlugins    = document.querySelector('.wp-plugins-skill .progress');

      function makeVal(val, elem){
        let tt      = 3000 / val;
        let tm      = tt;
        let toVal   = val;
        let fromVal = 0;
        let counter = setInterval(() => {
          let htmlNumber = elem.parentElement.parentElement.querySelector('.progress-numb');
          htmlNumber.innerHTML = fromVal +'%';
          if(fromVal === val){
            clearInterval(counter);
          }
          tm += 5;
          fromVal++;
        }, tm);
        return 1249 + (0.57 * val);
      }

      htmlSkill.style.strokeDasharray    = makeVal(85, htmlSkill);
      cssSkill.style.strokeDasharray     = makeVal(85, cssSkill);
      jsSkill.style.strokeDasharray      = makeVal(70, jsSkill);
      phpSkill.style.strokeDasharray     = makeVal(45, phpSkill);
      angularSkill.style.strokeDasharray = makeVal(55, angularSkill);
      nodeSkill.style.strokeDasharray    = makeVal(25, nodeSkill);
      mysqlSkill.style.strokeDasharray   = makeVal(50, mysqlSkill);
      wpPlugins.style.strokeDasharray    = makeVal(50, wpPlugins);
      initAnimations = true;
    }
  }
});

for(let p = 0; p < navLinks.length; p ++) {
  navLinks[p].addEventListener('click', () => {
    select.style.left = p * 125 + 'px';
  });
}

for(let o = 0; o < branchSections.length; o ++) {
  branchSections[o].addEventListener('mouseenter', (e) => {
    let line = branchSections[o].querySelector('.line');
    if(line){
      line.classList.add('circ-shadow');
      line.style.borderColor = 'white';
    }
  });
  branchSections[o].addEventListener('mouseleave', (e) => {
    let line = branchSections[o].querySelector('.line');
    if(line){
      line.classList.remove('circ-shadow');
      line.style.borderColor = '';
    }
  });

}

let targetImageY = imgWrapOuter.getBoundingClientRect().top  + window.pageYOffset + imgWrapOuter.clientHeight/2;
let targetImageX = imgWrapOuter.getBoundingClientRect().left + window.pageXOffset + imgWrapOuter.clientWidth/2;

document.addEventListener('mousemove', (e) => {
  let mouseX = e.clientX + window.pageXOffset;
  let mouseY = e.clientY + window.pageYOffset;
})

setInterval(() => {
  let y = window.pageYOffset  + sun.getBoundingClientRect().top;
  let x = window.pageXOffset + sun.getBoundingClientRect().left;
  makeSunTrace(x, y);
}, 1000);

function makeSunTrace(x, y){
  let newSun = document.createElement('div');
  newSun.classList.add('sun-trace');
  newSun.style.top  = y +'px';
  newSun.style.left = x +'px';
  document.body.append(newSun);
  setTimeout(() => {
    newSun.remove();
  }, 1500);
}
