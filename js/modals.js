$(document).ready(function(){

   //Date function
   $('#date').text(new Date().getFullYear());

    //Sound
    var pop = $("#pop")[0];
    $('a').click(function(){
       pop.play();
    });

});//doc ready
