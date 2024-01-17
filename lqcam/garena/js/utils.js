function isMobile(){return/android|ip(hone|ad|od)/i.test(navigator.userAgent)}function _(e,n){var t=SETTINGS.language;if(!(t in SSO_SERVER_I18N)||!(e in SSO_SERVER_I18N[t]))return e;var r=SSO_SERVER_I18N[t][e];if(null!=n)for(e in n)r=r.replace("%("+e+")",n[e].toString());return r}function getLocale(e,n){return"zh-TW"==e?e:e+"-"+n}function getCurrentBaseUrl(){var e=window.location.href,n=e.indexOf("#");return n>=0&&(e=e.substring(0,n)),(n=e.indexOf("?"))>=0&&(e=e.substring(0,n)),e}function getUrlParams(e){var n={},t=document.createElement("a");t.href=e;for(var r=t.search.substring(1).split("&"),o=0;o<r.length;o++){var a=r[o].split("=");n[a[0]]=decodeURIComponent(a[1])}return n}function getRequestParams(){for(var e,n,t,r,o=window.location.search.replace(/^\?/,"").split("&"),a=0,i={};void 0!==(e=o[a++]);)(n=e.match(/^([^=&]*)=(.*)$/))&&(t=decodeURIComponent(n[1]),r=decodeURIComponent(n[2]),i[t]=r);return i}function getRequestParam(e){var n=getRequestParams();return e in n?n[e]:null}function getRequestFragments(){for(var e,n,t,r,o=window.location.hash.replace(/^#/,"").split("&"),a=0,i={};void 0!==(e=o[a++]);)(n=e.match(/^([^=&]*)=(.*)$/))&&(t=decodeURIComponent(n[1]),r=decodeURIComponent(n[2]),i[t]=r);return i}function getRequestFragment(e){var n=getRequestFragments();return e in n?n[e]:null}function getRedirectUriWithParms(e,n){if(null!=n){var t="";for(var r in n)t+="&"+encodeURIComponent(r)+"="+encodeURIComponent(n[r]);t.length>0&&(e.indexOf("?")<0&&(t="?"+t.substr(1)),e+=t)}return e}function redirect(e,n){var t=getRedirectUriWithParms(e,n);window.location=t}function redirectWithFragments(e,n,t){var r=getRedirectUriWithParms(e,n);if(null!=t){var o="";for(var a in t)o+="&"+encodeURIComponent(a)+"="+encodeURIComponent(t[a]);o.length>0&&(r.indexOf("#")<0&&(o="#"+o.substr(1)),r+=o)}window.location=r}function setCookie(e,n,t,r){var o=escape(n);null!=t&&(o+="; expires="+new Date((new Date).getTime()+t).toUTCString());null!=r&&(o+="; domain="+r),document.cookie=e+"="+o}function removeCookie(e,n){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+n+"; path=/;"}function changePlatform(e){var n=getCurrentBaseUrl(),t=getRequestParams();t.platform=e,redirect(n,t)}function requestJsonp(e,n,t){n.format="jsonp",n.callback=t,n.id=(new Date).getTime(),n.app_id=SETTINGS.app_id;var r=!0;for(var o in n){var a=n[o];r?(e+="?",r=!1):e+="&",e+=encodeURIComponent(o),e+="=",e+=encodeURIComponent(a)}$("<script/>",{type:"text/javascript"}).appendTo($("body")).attr("src",e)}function requestJson(e,n,t,r){r=void 0===r?"GET":r,n.format="json",n.id=(new Date).getTime(),n.app_id=SETTINGS.app_id,$.ajax({type:r,url:e,data:n,dataType:"json",success:t,error:function(e,n,r){try{t(e.responseJSON,e.status)}catch(e){console.log(e),t({error:"error_server"})}}})}