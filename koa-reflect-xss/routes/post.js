const fs = require('fs');
const path = require('path');

const Users = require('../model/user');

module.exports = (router) => {
  router.get('/api/getPostList', ctx => {
    // 获取文件内容
    const postList = fs.readFileSync(path.join(__dirname, '../model/post.json'), { encoding: 'utf-8', flag: 'r+' });
    ctx.body = JSON.parse(postList || []);
  });

  router.post('/api/addPost', ctx => {
    console.log(ctx.request.body);
    const user = Users.filter(item => {
      return item.uuid === ctx.cookies.get('uid');
    });

    if (!user.length) {
      ctx.status = 400;
      ctx.body = { status: false, errMsg: 'invalid cookie' };
      return;
    }

    const post = {
      user: user[0].name,
      content: ctx.request.body.content,
    }

    const postList = fs.readFileSync(path.join(__dirname, '../model/post.json'), { encoding: 'utf-8', flag: 'r+' }) || '[]';
    const postData = JSON.parse(postList);
    postData.unshift(post);
    fs.writeFileSync(path.join(__dirname, '../model/post.json'), JSON.stringify(postData, null, 2), { encoding: 'utf-8', flag: 'w+' });

    ctx.body = { status: true, postData };
  });
};