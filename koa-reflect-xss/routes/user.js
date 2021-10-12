const Users = require('../model/user');


module.exports = (router) => {
  router.post('/api/login', ctx => {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      ctx.status = 400;
      ctx.body = { status: false, errMsg: 'null username or password' };
      return;
    }

    const user = Users.filter(item => {
      return item.name === username && item.password === password;
    })

    console.log(user);
    if (!user.length) {
      ctx.status = 400;
      ctx.body = { status: false, errMsg: 'not found this user' };
      return;
    }

    ctx.cookies.set('uid', user[0].uuid, { httpOnly:false });
    ctx.body = { status: true, user: user[0] };
  });

  router.get('/api/userInfo', ctx => {
    // 检查cookie
    if (!ctx.cookies.get('uid')) {
      ctx.status = 400;
      ctx.body = { status: false, errMsg: 'invalid cookie' };
      return;
    }

    // 返回数据
    const user = Users.filter(item => {
      return item.uuid === ctx.cookies.get('uid');
    })
    console.log(user);

    ctx.body = { status: true, user: user[0] };
  });
};