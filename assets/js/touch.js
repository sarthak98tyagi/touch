var map=document.getElementById("map");
var holder=document.getElementById("map-holder");
var init_width=parseInt(getComputedStyle(map).getPropertyValue("width"));
var init_height=parseInt(getComputedStyle(map).getPropertyValue("height"));
var dwidth=parseInt(getComputedStyle(holder).getPropertyValue("width"));
var dheight=parseInt(getComputedStyle(holder).getPropertyValue("height"));
var ham= new Hammer(map);
ham.get('pinch').set({enable:true});

var mleft=50;
var mtop=50;
ham.on('pinchmove',function(e)
{
    e.preventDefault();
    var width=parseInt(getComputedStyle(map).getPropertyValue("width"));
    var height=parseInt(getComputedStyle(map).getPropertyValue("height"));
        if(width*e.scale >= dwidth && height*e.scale >= dheight)
        {
            map.style.width=(width*e.scale)+'px';
            map.style.height=(height*e.scale)+'px';
            var x=e.center['x'];
            var y=e.center['y'];
            var ml=parseInt(getComputedStyle(map).getPropertyValue("margin-left"));
            var mt=parseInt(getComputedStyle(map).getPropertyValue("margin-top"));
            var l=(x*e.scale);
            var t=(y*e.scale);
            var w=parseInt(getComputedStyle(map).getPropertyValue("width"));
             var h=parseInt(getComputedStyle(map).getPropertyValue("height"));
            lm=(ml+Math.abs(ml-l));
            tm=(mt+Math.abs(mt-t));
            var xgap=(w-dwidth);
            var ygap=(h-dheight);
            console.log(l,t,xgap,ygap);
            if(l<(xgap) && t<(ygap))
            {
                map.style.marginLeft=-lm+'px';
                map.style.marginTop=-tm+'px';
            }
        }
});
// ham.on('pinchend',function(e){
//     var width=parseInt(getComputedStyle(map).getPropertyValue("width"));
//     var height=parseInt(getComputedStyle(map).getPropertyValue("height"));
//     map.style.width=(width*e.scale)+'px';
//     map.style.height=(height*e.scale)+'px';
//     var x=(e.center['x']*e.scale)/2;
//     var y=(e.center['y']*e.scale)/2;
//     var w=parseInt(getComputedStyle(map).getPropertyValue("width"));
//     var h=parseInt(getComputedStyle(map).getPropertyValue("height"));
//     // l=-(ml+Math.abs(ml-l));
//     // t=-(mt+Math.abs(mt-t));
//     console.log(w,dwidth,h,dheight);
//     var xgap=(w-dwidth);
//     var ygap=(h-dheight);
//     if(l<xgap && t<ygap)
//     {
//         map.style.marginLeft=x+'px';
//         map.style.marginTop=y+'px';
//     }
//
// });


