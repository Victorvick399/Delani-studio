$(document).ready(function(){
  $("#des-icon").click(function(){
      $("#des-icon").toggle();
      $("#design").toggle();
  });
  $("#dev-icon").click(function(){
    $("#dev-icon").toggle();
    $("#development").toggle();
  });
  $("#prod-icon").click(function(){
    $("#prod-icon").toggle();
    $("#product").toggle();
  });

  $("#design").click(function(){
      $("#design").toggle();
      $("#des-icon").toggle();
  });
  $("#development").click(function(){
    $("#development").toggle();
    $("#dev-icon").toggle();
  });
  $("#product").click(function(){
    $("#product").toggle();
    $("#prod-icon").toggle();
  });

  $("#portfolio4").mouseenter(function(){
    $("#portfolio4").fadeTo(20,0.25,function(){
    $("#pro4").show();
    });
  });
  $("#portfolio4").mouseleave(function(){
    $("#pro4").hide();
    $("#portfolio4").fadeTo(20,1,function(){

    });
  });
  $("#portfolio2").mouseenter(function(){
    $("#portfolio2").fadeTo(20,0.25,function(){
      $("#pro2").show();
      });
  });
  $("#portfolio2").mouseleave(function(){
    $("#pro2").hide();
    $("#portfolio2").fadeTo(20,1,function(){

    });
  });
   $("#portfolio3").mouseenter(function(){
    $("#portfolio3").fadeTo(20,0.25,function(){
      $("#pro3").show();
      });
  });
   $("#portfolio3").mouseleave(function(){
    $("#pro3").hide();
    $("#portfolio3").fadeTo(20,1,function(){

    });
  });
   $("#portfolio1").mouseenter(function(){
    $("#portfolio1").fadeTo(20,0.25,function(){
      $("#pro1").show();
      });
  });
   $("#portfolio1").mouseleave(function(){
    $("#pro1").hide();
    $("#portfolio1").fadeTo(20,1,function(){

    });
  });
   $("#portfolio5").mouseenter(function(){
    $("#portfolio5").fadeTo(20,0.25,function(){
      $("#pro5").show();
      });
  });
   $("#portfolio5").mouseleave(function(){
    $("#pro5").hide();
    $("#portfolio5").fadeTo(20,1,function(){

    });
  });
   $("#portfolio6").mouseenter(function(){
    $("#portfolio6").fadeTo(20,0.25,function(){
      $("#pro6").show();
      });
  });
   $("#portfolio6").mouseleave(function(){
    $("#pro6").hide();
    $("#portfolio6").fadeTo(20,1,function(){

    });
  });
  $("#portfolio7").mouseenter(function(){
    $("#portfolio7").fadeTo(20,0.25,function(){
      $("#pro7").show();
      });
  });
   $("#portfolio7").mouseleave(function(){
    $("#pro7").hide();
    $("#portfolio7").fadeTo(20,1,function(){

    });
  });
  $("#portfolio8").mouseenter(function(){
    $("#portfolio8").fadeTo(20,0.25,function(){
      $("#pro8").show();
      });
  }); 
  $("#portfolio8").mouseleave(function(){
    $("#pro8").hide();
    $("#portfolio8").fadeTo(20,1,function(){

    });
  });
 
});

var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();

$(document).ready(function(){
  $("#submit").click(function(){
      if(name=="" && email=="" && message==""){
      alert("Please check if all fields are filled");
      }else{
        alert("Your message has been received")
      }
  });

  event.preventDefault();
});