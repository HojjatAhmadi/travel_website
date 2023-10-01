if(document.querySelector('.container-website').offsetWidth < 980){
    responsive_page();
}

var travel_deal = document.querySelector('.travel-deal-show')
var dealwidht = travel_deal.offsetWidth;

function responsive_page(){
    var gallery_header = document.querySelectorAll('.gallery-header')
    var uniq_div_side = document.querySelectorAll('.uniq-travel > div')
    var tavel_ticket = document.querySelectorAll('.ticket-show')
    var tour_show = document.querySelectorAll('.tour-show')

    for(i = 0 ; i < gallery_header.length ; i ++){
        gallery_header[i].style = 'transform:translateX(0) translateY(0);';
        uniq_div_side[i].style = 'transform:translateX(0) translateY(0)';
        tavel_ticket[i].style = 'transform:translateX(0) translateY(0)';
        tour_show[i].style = 'transform:translateX(0) translateY(0)';
    }
    travel_deal.style.width = `${dealwidht}px`;
}