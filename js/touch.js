var div_element = document.getElementById('touch-interface');

var touch_interface = new Hammer.Manager(div_element);

/*  
    Please note that:
    
    ORDER DOES MATTER,
    DOUBLETAP only works if added before SINGLETAP
*/
touch_interface.add(new Hammer.Tap({
    event: 'tripletap', taps: 3
}))

touch_interface.add(new Hammer.Tap({
    event: 'doubletap', taps: 2
}) );

touch_interface.add(new Hammer.Tap({
    event: 'singletap'
}) );

touch_interface.add(new Hammer.Pan({
    event: 'pan'
}) );

touch_interface.get('pan').set({ threshold: 50, direction: Hammer.DIRECTION_ALL });

touch_interface.get('tripletap').recognizeWith('doubletap');

// Inform Hammer.JS that double tap can follow a single tap
touch_interface.get('doubletap').recognizeWith('singletap');

// Inform Hammer that the doubetap cannot occur with a singletap
touch_interface.get('singletap').requireFailure('doubletap');

// Touch Inteface Listeners
touch_interface.on('singletap doubletap tripletap', function(ev)
{
    alert('You did a ' + ev.type);
});

touch_interface.on('panend', function(ev){
    var direct = ev.direction;
    switch(ev.direction){
        case 8: // UP
            direct = "up";
            break;
        case 16: // DOWN
            direct = "down";
            break;
        case 4: // RIGHT
            direct = "right";
            break;
        case 2: // LEFT
            direct = "left";
            break;

    }
    alert('You did a ' + direct);
});