function init() {
  const newObj = `<img src="https://batmanrobin.23video.com/files/11723138/1b965a5c398e48b.jpg" alt="">`
  $("#btn1").click(function(){
    obj = $(".change_this").html(newObj);
    console.log(obj);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
