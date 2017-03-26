<template>
  <div id="login">
    <button class="btn btn-danger" id="loginBtn" data-toggle="modal" data-target="#loginModal">登陆</button>
    <button class="btn btn-danger">退出</button>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close btn btn-danger" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title text-left" id="gridSystemModalLabel">登 录</h4>
          </div>
          <div class="modal-body">
             <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="用户名">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="密码">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-10">
                  <button type="button" class="btn btn-danger" @click='getLog()'>确定</button>
                   <button type="button" class="btn btn-danger">取消</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li v-for='n in news'>
        {{n.companyName}}
      </li>
    </ul>
  </div>
</template>
<style>
  #login{
    position: absolute;
    right: 60px;
    top:28px;
  }
  #login button{
    color:#fff;
  }
  #login .btn.close{
    color:red;
  }
  #login .btn.focus,#login .btn:focus, .btn:hover{
    outline: none;
  }
  #login .modal-dialog{
    width: 30%;
  }
</style>
<script>
  export default({
    data () {
      return {
        news: []
      }
    },
    methods: {
      getLog: function () {
        var that = this
        debugger
        that.$http.get('http://211.149.193.19:8080/api/customers', { 'a': 1, 'b': 2 }, data => {
          that.$set('news', data.length)
        }).then(function (response) {
          that.news = response.body
        })
      }
    }
  })
</script>

