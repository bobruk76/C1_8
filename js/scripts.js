function init() {
  const newObj = `<img class="change_this" src="https://batmanrobin.23video.com/files/11723138/1b965a5c398e48b.jpg" alt="">`;
  const newText = `Можно поменять на этот текст`;

  const msg1=$("#message1");
  msg1.text(newObj);

  const msg2=$("#message2");
  msg2.text(newText);

  $("#btn1").click(function(){
    const $temp=$(".change_this").html()[0];
    obj = $(".change_this").html(msg1.text()[0]);
    msg1.text($temp);
  });

  $("#btn2").click(function(){
    const $temp=$(".change_this").text()[0];
    obj = $(".change_this").text(msg2.text()[0]);
    msg2.text($temp);
  });

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
