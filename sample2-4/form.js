
$(function(){
  $("input").val("入力してください").css("color","#CCC").one("focus",function(){
    $(this).val("").css("color","#000");
  }).blur(function(){
    if($(this).val()==""){
      $(this).val("入力してください").css("color","#CCC").one("focus",function(){
        $(this).val("").css("color","#000");
      });
    }

  });
  $("button").click(function(){
       $("input").val("");
      });
  
});