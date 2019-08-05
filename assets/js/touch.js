var map=document.getElementById("map");
var holder=document.getElementById("map-holder");
var dwidth=parseInt(getComputedStyle(holder).getPropertyValue("width"));
var dheight=parseInt(getComputedStyle(holder).getPropertyValue("height"));
var ham= new Hammer(map);
ham.get('pinch').set({enable:true});
ham.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
var pointers=[];
var mp=0; //mark-counter
var demo;
// function shift()
// {
//     var cw=parseInt(getComputedStyle(map).getPropertyValue("width"));
//     var ch=parseInt(getComputedStyle(map).getPropertyValue("height"));
//     pointers.forEach(function (value,index)
//     {
//         console.log(value);
//        var mark=holder.children[index+1];
//        console.log(value[0]+(cw-value[2]));
//        console.log(value[1]+cw-value[3]);
//        mark.style.left=value[0]+(cw-value[2])+'px';
//        mark.style.top=value[1]+(ch-value[3])+'px';
//     });
// }
ham.on('pinchmove',function(e)
{
    e.preventDefault();
    var width=parseInt(getComputedStyle(map).getPropertyValue("width"));
    var w=(width*e.scale);
    var x=e.center['x'];
    var y=e.center['y'];
    var l=(x*e.scale);
    var t=(y*e.scale);
        if( (w-l) >= dwidth )
        {
            map.style.width=w+'px';
            map.style.left=-l+'px';
            console.log("Increase Factor is: "+e.scale);
            console.log("Difference is: "+(width-w));
            console.log("Changed Positions are"+getComputedStyle(demo).getPropertyValue("left")+"@"+getComputedStyle(demo).getPropertyValue("height"));
        }
        else
        {
            map.style.left=0+'px';

        }
});
ham.on('swiperight',function(e)
{
  e.preventDefault();
  var ml=parseInt(getComputedStyle(map).getPropertyValue("left"));
  if((ml+e.distance)<0)
  {
      map.style.left=(ml+e.distance)+'px';
  }
  else
  {
      map.style.left=0+'px';

  }

});
ham.on('swipedown',function(e)
{
    e.preventDefault();
    var mt=parseInt(getComputedStyle(map).getPropertyValue("top"));
    if((mt+e.distance)<0)
    {
        map.style.top=(mt+e.distance)+'px';

    }
    else
    {
        map.style.top=0+'px';
    }
});
ham.on('swipeleft',function(e)
{
    e.preventDefault();
    var mr=parseInt(getComputedStyle(map).getPropertyValue("right"));
    var ml=parseInt(getComputedStyle(map).getPropertyValue("left"));
    if((mr+e.distance)<=0)
    {

        map.style.left=(ml-e.distance)+'px';

    }
    else
    {
        map.style.left=(ml+mr)+'px';

    }
});
ham.on('swipeup',function(e)
{
    e.preventDefault();
    var mb=parseInt(getComputedStyle(map).getPropertyValue("bottom"));
    var mt=parseInt(getComputedStyle(map).getPropertyValue("top"));
    if((mb+e.distance)<=0)
    {
        map.style.top=(mb-e.distance)+'px';
    }
    else
    {
        map.style.bottom=(mt+mb)+'px';

    }
});
ham.on('tap',function(e)
{
    e.preventDefault();
    demo=document.createElement("div");
    var x=e.center['x'];
    var y=e.center['y'];
    demo.className="mark";
    demo.style.left=x+'px';
    demo.style.top=y+'px';
    console.log("Original Position is- Left: "+x+"Top: "+y);
    // var cw=parseInt(getComputedStyle(map).getPropertyValue("width"));
    // var ch=parseInt(getComputedStyle(map).getPropertyValue("height"));
    // var x=e.center['x'];
    // var y=e.center['y'];
    // var mark=document.createElement("div");
    // pointers[mp]=[x,y,cw,ch];
    // mark.className="mark";
    // mark.style.left=x+'px';
    // mark.style.top=y+'px';
    // holder.appendChild(mark);
    // mp=mp+1;
});