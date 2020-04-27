function init() {
  const newObj = `<img src="https://batmanrobin.23video.com/files/11723138/1b965a5c398e48b.jpg" alt="">`
  const msg1=$("#message1");
  msg1.text(newObj);

  $("#btn1").click(function(){
    const $temp=$(".change_this").html()[0];
    obj = $(".change_this").html(msg1.text()[0]);
    msg1.text($temp);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
