var SETTINGS={},captcha_key="",mobile_register_request={},SSO_SERVER_URL="/",SSO_URL_API_PRELOGIN=SSO_SERVER_URL+"api/prelogin",SSO_URL_API_LOGIN=SSO_SERVER_URL+"api/login",SSO_URL_API_LOGOUT=SSO_SERVER_URL+"api/logout",SSO_URL_UI_REGISTER=SSO_SERVER_URL+"ui/register",SSO_URL_API_AUTH=SSO_SERVER_URL+"oauth/token/grant",SSO_URL_OAUTH_TOKEN_FACEBOOK_EXCHANGE=SSO_SERVER_URL+"oauth/token/facebook/exchange",SSO_URL_OAUTH_TOKEN_VK_EXCHANGE=SSO_SERVER_URL+"oauth/token/vk/exchange/v2",SSO_URL_OAUTH_TOKEN_LINE_EXCHANGE=SSO_SERVER_URL+"oauth/token/line/exchange",SSO_URL_OAUTH_TOKEN_GOOGLE_EXCHANGE=SSO_SERVER_URL+"oauth/token/google/exchange",SSO_URL_OAUTH_TOKEN_HUAWEI_EXCHANGE=SSO_SERVER_URL+"oauth/token/huawei/exchange",SSO_URL_OAUTH_TOKEN_APPLE_EXCHANGE_WEB=SSO_SERVER_URL+"oauth/token/apple/exchange/web",SSO_URL_OAUTH_TOKEN_TWITTER_EXCHANGE=SSO_SERVER_URL+"oauth/token/twitter/exchange",SSO_URL_OAUTH_TWITTER_REQUEST_TOKEN=SSO_SERVER_URL+"oauth/token/twitter/request_token",SSO_URL_API_REG=SSO_SERVER_URL+"api/register",SSO_URL_API_REG_PREPARE=SSO_URL_API_REG+"/prepare",SSO_URL_API_REG_CHECK=SSO_URL_API_REG+"/check",SSO_URL_API_SEND_SMS_OTP=SSO_SERVER_URL+"api/send_sms_otp",SSO_URL_API_VERIFY_MOBILE_NO=SSO_SERVER_URL+"api/verify_mobile_no",DEFAULT_REDIRECT_URL="http://www.garena.com/",FACEBOOK_OAUTH_URL="https://www.facebook.com/dialog/oauth",VK_OAUTH_URL="https://oauth.vk.com/authorize",GOOGLE_OAUTH_URL="https://accounts.google.com/o/oauth2/v2/auth",LINE_OAUTH_URL="https://access.line.me/dialog/oauth/weblogin",HUAWEI_OAUTH_URL="https://oauth-login.cloud.huawei.com/oauth2/v2/authorize",TWITTER_OAUTH_URL="https://api.twitter.com/oauth/authenticate",APPLE_OAUTH_URL="https://appleid.apple.com/auth/authorize",GAS_APP_URL="gas://",GAS_IOS="http://itunes.apple.com/app/id857669215",GAS_ANDROID="http://cdn.garenanow.com/gas/mobile/android/gas.apk",CAPTCHA_SERVICE="https://gop.captcha.garena.com/image",CAPTCHA_SERVICE_TEST="https://testgop.captcha.garena.com/image",DEFAULT_LOCALE="en_SG",ACCOUNT_CENTER_URL="https://account.garena.com",ACCOUNT_CENTER_TEST_URL="https://account.test.garena.com",ACCOUNT_CENTER_RECOVERY_URL="https://account.garena.com/recovery",ACCOUNT_CENTER_RECOVERY_TEST_URL="https://account.test.garena.com/recovery",FB_PLATFORM_MODE="platform",KEY_CODE_ENTER=13,PLATFORM_GARENA=1,PLATFORM_BEETALK=2,PLATFORM_FACEBOOK=3,PLATFORM_VK=5,PLATFORM_LINE=6,PLATFORM_HUAWEI=7,PLATFORM_GOOGLE=8,PLATFORM_APPLE=10,PLATFORM_TWITTER=11,OTP_SMS_INTERVAL=60,OTP_REGISTER_INTERVAL=30;