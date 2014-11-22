function isKeysNotExist() {
  return !($.cookie().key1 && $.cookie().key2);
}

$(document).ready(function () {
  if (isKeysNotExist()){
    $("#target").attr("placeholder", "SET YOUR KEYS FIRST!!");
  }
  var key1 = $.cookie('key1');
  var key2 = $.cookie('key2');
  if (key1)
    $("#key1").val(key1);
  if (key2)
    $("#key2").val(key2);
});

$("#generateBtn").click(function () {
  if (isKeysNotExist()){
    alert("You should set the keys first.");
    return;
  }
  var key1 = $.cookie().key1;
  var key2 = $.cookie().key2;
  $.ajax({
    url: "/npg/plain",
    type: "POST",
    data: {target: $("#target").val(), key1: key1, key2: key2},
    dataType: "json",
    success: function (data) {
      $("#md5").val(data.md5);
      $("#b64").val(data.b64);
    }});
});

function hideModal() {
  $("#keysaveModal").modal("hide");
}

$("#saveBtn").click(function () {
  $.cookie("key1", $("#key1").val(),{expires: 5, path: '/npg'});
  $.cookie("key2", $("#key2").val(),{expires: 5, path: '/npg'});
  $("#savedText").show("slow").delay(1000).hide(400, hideModal);
  $("#target").attr("placeholder", "Nayuki's PassGen v0.5");
});

$("#deleteBtn").click(function () {
  $.removeCookie("key1", {path: '/npg'});
  $.removeCookie("key2", {path: '/npg'});
  $("#key1").val("");
  $("#key2").val("");
  $("#target").attr("placeholder", "SET YOUR KEYS FIRST!!");
  $("#deletedText").show("slow").delay(1000).hide(400, hideModal);
});