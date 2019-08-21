
$(function(){
  
  $("form").submit(function(){
    if($("input[name='name']").val() == ""){
      if($("span").css("font-weight") !== "bold"){
        $("input[name='name']").css("border","1px solid red")
        .after("<span>お名前を入れてください</span>");
        $("span").css({
        "color":"red",
          "font-weight":"bold"
        });
      }
        return false;
      } 
  });
  $("select").change(function(){
    if($(":selected").attr("value")=="10代"){
    $("input").prop('disabled', true);
    }else{
      $("input").removeAttr("disabled");
    }
  });
  
  $("label,input[type='checkbox']").click(function(){
      $("label").css("background","");
      $(":checked").each(function(){
      $("label[for='"+$(this).attr("id")+"']").css("background","#CCC");
      });
      

});
});