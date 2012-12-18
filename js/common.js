
function supports_canvas(){
    return !!document.createElement('canvas').getContext;
}
var qrOption = {
    width:64,
    height:64,
    text:location.href
}

if(supports_canvas()){
    $('#qr').qrcode(qrOption);
}

$(document).keydown(function(e){
    if(e.keyCode == 37){
        var link = $('.prev-page');
        if(link.size()){
            location = link.attr('href');
        }
    }else if(e.keyCode == 39){
        var link = $('.next-page');
        if(link.size()){
            location = link.attr('href');
        }
    }
})
