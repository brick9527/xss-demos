
module.exports = (req) => {
  return new Promise(resolve => {
    let postData = '';
    req.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
    });
    // 数据接收完毕，执行回调函数
    req.addListener("end", function () {
        var params = JSON.parse(postData);
        resolve(params);
    });

  });
}