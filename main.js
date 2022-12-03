let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Proyectos de vida y sueños')
  .pauseFor(200)
  .deleteChars(10)
  .start();
