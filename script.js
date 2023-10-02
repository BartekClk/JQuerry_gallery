$(".galleryZoom").hide();

gallery = $(".galleryZoom").find(".imgBox");

actualImg = 0;

$(".gallery img").on("click", function(){
    $(".galleryZoom").show();
    actualImg = this.id;
    for(i=0; i<gallery.length; i++){
        if(this.id == gallery[i].id) $(".galleryZoom").find("#"+gallery[i].id).show();
        else $(".galleryZoom").find("#"+gallery[i].id).hide();
    }
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