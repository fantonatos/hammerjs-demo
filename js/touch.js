var div_element = document.getElementById('touch-interface');

var touch_interface = new Hammer.Manager(div_element);

/*  
    Please note that:
    
    ORDER DOES MATTER,
    DOUBLETAP only works if added before SINGLETAP
*/
touch_interface.add(new Hammer.Tap({
    event: 'doubletap', taps: 2
}) );

touch_interface.add(new Hammer.Tap({
    event: 'singletap'
}) );


// Inform Hammer.JS that double tap can follow a single tap
touch_interface.get('doubletap').recognizeWith('singletap');

// Inform Hammer that the doubetap cannot occur with a singletap
touch_interface.get('singletap').requireFailure('doubletap');

// Touch Inteface Listeners
touch_interface.on('singletap doubletap', function(ev)
{
    alert('You did a ' + ev.type);
});