/**
 * @file DOM based XSS
 * 通过修改页面DOM,来实现攻击
 */
window.onload = function() {
  var formContainerOBJ = document.getElementById('form-container');
  formContainerOBJ.innerHTML = '<form id="form">' +
    '<p>用户名:</p><input type="text"><br/>' +
    '<p>密码:</p><input type="password"><br>' +
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

