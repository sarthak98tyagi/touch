var map=document.getElementById("map");
var holder=document.getElementById("map-holder");
var dwidth=parseInt(getComputedStyle(holder).getPropertyValue("width"));
var dheight=parseInt(getComputedStyle(holder).getPropertyValue("height"));
var ham= new Hammer(map);
ham.get('pinch').set({enable:true});

var mleft=50;
var mtop=50;
ham.on('pinch',function(e)
{
    console.log(e.targetTouches[0]);
    var width=parseInt(getComputedStyle(map).getPropertyValue("width"));
    var height=parseInt(getComputedStyle(map).getPropertyValue("height"));
        if(width*e.scale >= dwidth && height*e.scale >= dheight)
        {

            map.style.width=(width*e.scale)+'px';
            map.style.height=(height*e.scale)+'px';
            // var x=e.center['x'];
            // var y=e.center['y'];
            // var ml=parseInt(getComputedStyle(map).getPropertyValue("margin-left"));
            // var mt=parseInt(getComputedStyle(map).getPropertyValue("margin-top"));
            // var l=ml-(x*e.scale)/2;
            // var t=mt-(y*e.scale)/2;
            // // l=-(ml+Math.abs(ml-l));
            // // t=-(mt+Math.abs(mt-t));
            // map.style.marginLeft=l+'px';
            // map.style.marginTop=t+'px';
        }

});
// ham.on('pinchend',function(e){
//     var width=parseInt(getComputedStyle(map).getPropertyValue("width"));
//     var height=parseInt(getComputedStyle(map).getPropertyValue("height"));
//     map.style.width=(width*e.scale)+'px';
//     map.style.height=(height*e.scale)+'px';
//     var x=e.center['x'];
//     var y=e.center['y'];
//     map.style.marginLeft=(-(x*e.scale)/2)+'px';
//     map.style.marginTop=(-(y*e.scale)/2)+'px';
// });
//

