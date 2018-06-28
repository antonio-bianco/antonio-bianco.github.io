"use strict";

var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function() {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 210;
  scene.add(camera);

  particle = new THREE.Object3D();
  
  scene.add(particle);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var geom = new THREE.IcosahedronGeometry(7, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  for (var i = 0; i < 580; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }
  
  var lights = [];
lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0x66ffff, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0x66ffff, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );
  
window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particle.rotation.x += 0.0000;
  particle.rotation.y -= 0.0020;
  renderer.clear();
  renderer.render( scene, camera )
};

$(document).ready(function () {  
  var top = $('.section-a').offset().top;
  var topb = $('.section-b').offset().top;
  var topc = $('.section-c').offset().top;
  $(window).scroll(function (event) {

    var y = $(this).scrollTop();

    if (y >= top){
     $('div.container.full-height.section-a > div > div > div').addClass('img-animated'); 
     $('div.container.full-height.section-a > div > div > div').removeClass('img-noanimated');
     $('div.container.full-height.section-a > div > div > div > div.see-button-wrapper').addClass('see-animated');
     $('div.container.full-height.section-a > div > div > div > h3').addClass('text-animated');
     $('div.container.full-height.section-a > div > div > div').removeClass('text-noanimated');
   }else{
     $('div.container.full-height.section-a > div > div > div').addClass('img-noanimated');
     $('div.container.full-height.section-a > div > div > div').removeClass('img-animated');
     $('div.container.full-height.section-a > div > div > div > a > h6').removeClass('see-animated');
     $('div.container.full-height.section-a > div > div > div > div.see-button-wrapper').removeClass('see-animated');
     $('div.container.full-height.section-a > div > div > div').addClass('text-noanimated');
     $('div.container.full-height.section-a > div > div > div > h3').removeClass('text-animated');
   }

   if (y >= topb){
     $('div.container.full-height.section-b > div > div > div').addClass('img-animated'); 
     $('div.container.full-height.section-b > div > div > div').removeClass('img-noanimated');
     $('div.container.full-height.section-b > div > div > div > div.see-button-wrapper').addClass('see-animated');
     $('div.container.full-height.section-b > div > div > div > h3').addClass('text-animated');
   }else{
     $('div.container.full-height.section-b > div > div > div').addClass('img-noanimated');
     $('div.container.full-height.section-b > div > div > div').removeClass('img-animated');
     $('div.container.full-height.section-b > div > div > div > div.see-button-wrapper').removeClass('see-animated');
     $('div.container.full-height.section-b > div > div > div > h3').removeClass('text-animated');
   }

   if (y >= topc){
     $('div.container.full-height.section-c > div > div > div').addClass('img-animated'); 
     $('div.container.full-height.section-c > div > div > div').removeClass('img-noanimated');
     $('div.container.full-height.section-c > div > div > div > div.see-button-wrapper').addClass('see-animated');
     $('div.container.full-height.section-c > div > div > div > h3').addClass('text-animated');
   }else{
     $('div.container.full-height.section-c > div > div > div').addClass('img-noanimated');
     $('div.container.full-height.section-c > div > div > div').removeClass('img-animated');
     $('div.container.full-height.section-c > div > div > div > div.see-button-wrapper').removeClass('see-animated');
     $('div.container.full-height.section-c > div > div > div > h3').removeClass('text-animated');
   }

 });
});
