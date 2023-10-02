$(".galleryZoom").hide();

gallery = $(".galleryZoom").find(".imgBox");

actualImg = 0;
lastImg = -1;
gallerySize = gallery.length;

function setImage(actualImg, animate = true){
    if (animate == true){
        last = $(".galleryZoom").find("#"+gallery[lastImg].id);
        current = $(".galleryZoom").find("#"+gallery[actualImg].id);
        if(lastImg < actualImg){
            current.animate({left:"100%"}, 0);
            last.animate({left:"-100%"}, 100);
            current.animate({left:"0"}, 100, ()=>{
                setTimeout(()=>{
                    last.animate({left:"0"}, 0);
                    last.hide()
                }, 100);
            });
            current.show();
        }else{
            current.animate({left:"-100%"}, 0);
            last.animate({left:"100%"}, 100);
            current.animate({left:"0"}, 100, ()=>{
                setTimeout(()=>{
                    last.animate({left:"0"}, 0);
                    last.hide()
                }, 100);
            });
            current.show();
        }
    }else{
        for(i=0; i<gallery.length; i++){
            if(actualImg == gallery[i].id) $(".galleryZoom").find("#"+gallery[i].id).show();
            else $(".galleryZoom").find("#"+gallery[i].id).hide();
        }
    }
    setArrows(actualImg);
}

$(".gallery img").on("click", function(){
    $(".galleryZoom").show();
    actualImg = parseInt(this.id);
    setImage(actualImg, animate = false);
    setArrows(actualImg);
})

$(".galleryZoom .close").on("click", ()=>{
    el = $(".galleryZoom")
    el.hide();
});

function setArrows(actualImg){
    left = $(".galleryZoom .arrow.left");
    right = $(".galleryZoom .arrow.right");
    if(actualImg == 0) {
        left.hide();
        right.show();
    }
    else if(actualImg == 3) {
        left.show();
        right.hide();
    }
    else{
        left.show();
        right.show();
    }
}

$(".galleryZoom .arrow.left").on("click", ()=>{
    lastImg = actualImg;
    if(actualImg-1 >= 0) actualImg--;
    setImage(actualImg);
})

$(".galleryZoom .arrow.right").on("click", ()=>{
    lastImg = actualImg;
    if(actualImg+1 < gallerySize) actualImg++;
    setImage(actualImg);
})

$(document).on("keydown", function(event) {
    if (event.keyCode === 27) {
      $(".galleryZoom .close").click();
    }});