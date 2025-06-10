const ctrLoveTL = () =>{
const move = 1000;
const boom = 200;
const easing = "sin.in0ut";
const easingBoom = "sin.in";
const easing0ut = "sin.out";
const opts = { duration: move, easing, opacity: 1 };
const delta = 150;

return new mojs.TimeLine().add([
   new mojs.Tween({
     duration:move,
     onComlete: () => {
        [el.l, el.o, el.v, el.e].forEach((el) =>
    (el.styleopacity = 0));
    el.blop.play();    
},
}),
]);
};

