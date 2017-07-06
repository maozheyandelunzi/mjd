carousel();
//自动轮播 每隔一段时间就换图片
function carousel(){
    //获取lu
    var carousel_ul=document.querySelector('.lis-img');
    //定义没有轮前的索引
    var index=1;
    //设置图片的起始位置
    carousel_ul.style.transform="translateX(-"+index+"0%)";

    //设置定时器
    var timer=goInterval();
   carousel_ul.addEventListener("transitionend", function () { 
          if(index>=9){
              index=1;
              carousel_ul.style.transform="translateX(-"+index+"0%)";
              carousel_ul.style.transition="none";
          }else if(index<=0){
              index=8;
              carousel_ul.style.transform="translateX(-"+index+"0%)";
              carousel_ul.style.transition="none";
          }
           //图片的索引-1就是对应的索引器的下标
          var currentIndex=index-1;
          getIndex(currentIndex);
    })
//滑动事件,每次滑动停止定时,改变ul位置
itcast(carousel_ul).swipe(function (direction) { 
   clearInterval(timer);
    switch (direction) {
        case "right":
            index--;
            break;
        case "left" :
            index++;
            break;    
        default:
            break;
    }
     carousel_ul.style.transition="transform .3s";
         //每隔一秒钟变化一次
     carousel_ul.style.transform="translateX(-"+index+"0%)";

    timer=goInterval();
 })
//索引器封装函数
function getIndex(currentIndex) { 
    var lis_index=document.querySelectorAll('.lis-index>li');
    for (var index = 0; index < lis_index.length; index++) {
     var element = lis_index[index];
     element.classList.remove("active"); 
 }
 lis_index[currentIndex].classList.add("active");
 }
 
 //定时器 函数
 function goInterval(){
   return  setInterval(function () { 

         index++;
        //过渡效果
         carousel_ul.style.transition="transform .3s";
         //每隔一秒钟变化一次
         carousel_ul.style.transform="translateX(-"+index+"0%)";
 //当index是最后一张的时候瞬间变回第一张   
      },2000)
 }
}
