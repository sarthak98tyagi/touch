var map=document.getElementById("map");
var z=1;
map.addEventListener("touchstart",function(event)
{

    event.preventDefault();
    if(event.targetTouches.length===2)
    {
        map.addEventListener("touchmove",function(event){
            event.preventDefault();
            var x1=event.targetTouches[0].pageX;
            var y1=event.targetTouches[0].pageY;
            var x2=event.targetTouches[1].pageX;
            var y2=event.targetTouches[1].pageY;
            var w=parseInt(getComputedStyle(map).getPropertyValue("width"));
            var g=x1>x2?x1-x2:x2-x1;
            map.style.width=w+g+"px";
            var s=x1>x2?x2:x1;
            if(s>g)
            {
                s=s-g;
            }
            map.style.left=s+'px';
         });
    }
});
function distance(event)
{
    var x1=event.targetTouches[0].pageX;
    var y1=event.targetTouches[0].pageY;
    var x2=event.targetTouches[1].pageX;
    var y2=event.targetTouches[1].pageY;
    return (Math.sqrt(Math.abs(x2**2-x1**2)+Math.abs(y2**2-y1**2)));
}
