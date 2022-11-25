function showdetection(){
    $("#detection_container").css("display","inherit");
    $("#detection_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#detection_container").removeClass("animated slideInLeft");
    },800);
}
function closedetection(){
    $("#detection_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#detection_container").removeClass("animated slideOutLeft");
        $("#detection_container").css("display","none");
    },800);
}
function showlocalisation(){
    $("#localisation_container").css("display","inherit");
    $("#localisation_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#localisation_container").removeClass("animated slideInRight");
    },800);
}
function closelocalisation(){
    $("#localisation_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#localisation_container").removeClass("animated slideOutRight");
        $("#localisation_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#detection").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#localisation").removeClass("animated fadeIn");
    },1000);
},1500);
