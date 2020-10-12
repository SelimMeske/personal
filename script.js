let headerContainer = document.querySelector('header');
let cWidth          = headerContainer.clientWidth;
let cHeight         = headerContainer.clientHeight;
let particleCounter = 0;
let particleCounterTwo = 0;
let particleCounterThree = 0;

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
while(particleCounter < 50){
  particleCounter++;
  let particle        = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top  = randomNumber(cHeight) + 'px';
  particle.style.left = randomNumber(cWidth) + 'px';
  headerContainer.append(particle);
  destroyParticle('typeTwo', particle, particleCounter);
}
while(particleCounterTwo < 200){
  particleCounterTwo++;
  let particle        = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top  = randomNumber(cHeight) + 'px';
  particle.style.left = randomNumber(cWidth) + 'px';
  headerContainer.append(particle);
  destroyParticle('typeOne', particle, particleCounterTwo);

}
while(particleCounterThree < 30){
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
