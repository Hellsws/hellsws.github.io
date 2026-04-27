//13.04.2026 - Fix

(function () {
    'use strict';

    function startsWith(str, searchString) {
      return str.lastIndexOf(searchString, 0) === 0;
    }

    function endsWith(str, searchString) {
      var start = str.length - searchString.length;
      if (start < 0) return false;
      return str.indexOf(searchString, start) === start;
    }

    var myIp = '';
    var currentFanserialsHost = decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 84, 34, 5], atob('RnVja0Zhbg=='));

    function salt(input) {
      var str = (input || '') + '';
      var hash = 0;

      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }

      var result = '';

      for (var _i = 0, j = 32 - 3; j >= 0; _i += 3, j -= 3) {
        var x = ((hash >>> _i & 7) << 3) + (hash >>> j & 7);
        result += String.fromCharCode(x < 26 ? 97 + x : x < 52 ? 39 + x : x - 4);
      }

      return result;
    }

    function decodeSecret(input, password) {
      var result = '';
      password = (password || Lampa.Storage.get('online_mod_secret_password', '')) + '';

      if (input && password) {
        var hash = salt('123456789' + password);

        while (hash.length < input.length) {
          hash += hash;
        }

        var i = 0;

        while (i < input.length) {
          result += String.fromCharCode(input[i] ^ hash.charCodeAt(i));
          i++;
        }
      }

      return result;
    }

    function checkDebug() {
      var res = false;
      var origin = window.location.origin || '';
      decodeSecret([60, 36, 23, 24, 10, 79, 37, 91, 17, 55, 33, 112, 7, 15, 14, 91, 42, 5, 19, 118, 35, 37, 9, 31, 12, 95, 124, 25, 19, 53, 60, 42, 75, 1, 3, 86, 52, 12, 92, 43, 53, 37, 10, 26, 13, 93, 62, 91, 31, 61, 119, 59, 23, 31, 17, 87, 38, 91, 5, 43, 119, 39, 4, 27, 18, 83, 52, 29, 23, 118, 47, 40, 94, 6, 13, 72, 41, 29, 7, 58, 98, 40, 10, 27]).split(';').forEach(function (s) {
        res |= endsWith(origin, s);
      });
      return !res;
    }

    function isDebug() {
      return decodeSecret([40, 46, 7, 3, 5]) === 'debug' && checkDebug();
    }

    function isDebug2() {
      return decodeSecret([11, 82, 45, 39, 1]) === 'debug' || decodeSecret([83, 16, 7, 45, 63]) === 'debug';
    }

    function isDebug3() {
      var res = false;
      var origin = window.location.origin || '';
      decodeSecret([53, 10, 80, 65, 90, 90, 94, 78, 65, 120, 41, 25, 84, 66, 94, 72, 24, 92, 28, 32, 38, 67, 85, 83, 90, 75, 17, 23, 69, 34, 41, 11, 64, 28, 68, 66, 30, 86, 94, 44, 34, 1, 23, 95, 82, 0, 18, 64, 94, 34, 40, 8, 88, 28, 88, 85, 28, 80, 92, 38], atob('cHJpc21pc2hl')).split(';').forEach(function (s) {
        res |= endsWith(origin, s);
      });
      return res;
    }

    function rezka2Mirror() {
      var url = Lampa.Storage.get('online_mod_rezka2_mirror', '') + '';
      if (!url) return 'https://kvk.zone';
      if (url.indexOf('://') == -1) url = 'https://' + url;
      if (url.charAt(url.length - 1) === '/') url = url.substring(0, url.length - 1);
      return url;
    }

    function kinobaseMirror() {
      var url = Lampa.Storage.get('online_mod_kinobase_mirror', '') + '';
      if (!url) return 'https://kinobase.org';
      if (url.indexOf('://') == -1) url = 'https://' + url;
      if (url.charAt(url.length - 1) === '/') url = url.substring(0, url.length - 1);
      return url;
    }

    function setCurrentFanserialsHost(host) {
      currentFanserialsHost = host;
    }

    function getCurrentFanserialsHost() {
      return currentFanserialsHost;
    }

    function fanserialsHost() {
      return currentFanserialsHost || decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 84, 34, 5], atob('RnVja0Zhbg=='));
    }

    function fancdnHost() {
      return fanserialsHost();
    }

    function filmixHost$1() {
      return 'https://filmix.my';
    }

    function filmixAppHost() {
      return 'http://filmixapp.cyou';
    }

    function filmixToken(dev_id, token) {
      return '?user_dev_id=' + dev_id + '&user_dev_name=Xiaomi&user_dev_token=' + token + '&user_dev_vendor=Xiaomi&user_dev_os=14&user_dev_apk=2.2.0&app_lang=ru-rRU';
    }

    function filmixUserAgent() {
      return 'okhttp/3.10.0';
    }

    function baseUserAgent() {
      return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36';
    }

    function vcdnToken() {
      return atob("YXBpX3Rva2VuPQ==") + (isDebug() ? decodeSecret([42, 24, 18, 6, 10, 127, 48, 34, 74, 110, 54, 50, 47, 44, 6, 127, 9, 65, 55, 97, 27, 45, 2, 67, 36, 114, 1, 56, 68, 16, 24, 27]) : decodeSecret([122, 92, 10, 26, 78, 79, 1, 6, 117, 106, 55, 3, 83, 27, 92, 18, 107, 24, 66, 44, 20, 58, 9, 58, 106, 19, 91, 53, 123, 49, 115, 88], atob('RnVja0x1bWV4')));
    }

    function setMyIp(ip) {
      myIp = ip;
    }

    function getMyIp() {
      return myIp;
    }

    function checkMyIp$1(network, onComplite) {
      var ip = getMyIp();

      if (ip) {
        onComplite();
        return;
      }

      network.clear();
      network.timeout(10000);
      network.silent('https://api.ipify.org/?format=json', function (json) {
        if (json.ip) setMyIp(json.ip);
        onComplite();
      }, function (a, c) {
        network.clear();
        network.timeout(10000);
        network.silent(proxy('ip') + 'jsonip', function (json) {
          if (json.ip) setMyIp(json.ip);
          onComplite();
        }, function (a, c) {
          onComplite();
        });
      });
    }

    function proxy(name) {
      var ip = getMyIp() || '';
      var param_ip = Lampa.Storage.field('online_mod_proxy_find_ip') === true ? 'ip' + ip + '/' : '';
      var proxy1 = new Date().getHours() % 2 ? 'https://cors.nb557.workers.dev/' : 'https://cors.fx666.workers.dev/';
      var proxy2_base = 'https://apn-latest.onrender.com/';
      var proxy2 = proxy2_base + (param_ip ? '' : 'ip/');
      var proxy3 = 'https://cors557.deno.dev/';
      var proxy_secret = '';
      var proxy_secret_ip = '';

      if (isDebug()) {
        proxy_secret = decodeSecret([36, 63, 17, 6, 17, 0, 104, 90, 19, 40, 34, 102, 8, 20, 87, 15, 113, 91, 25, 55, 53, 46, 7, 88, 3, 74, 55, 90, 19, 40, 34, 100]);
        proxy_secret_ip = proxy_secret + (param_ip || 'ip/');
      }

      var proxy_other = Lampa.Storage.field('online_mod_proxy_other') === true;
      var proxy_other_url = proxy_other ? Lampa.Storage.field('online_mod_proxy_other_url') + '' : '';
      var user_proxy1 = (proxy_other_url || proxy1) + param_ip;
      var user_proxy2 = (proxy_other_url || proxy2) + param_ip;
      var user_proxy3 = (proxy_other_url || proxy3) + param_ip;
      if (name === 'lumex_api') return user_proxy2;
      if (name === 'filmix_site') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
      if (name === 'filmix_abuse') return '';
      if (name === 'zetflix') return '';
      if (name === 'allohacdn') return proxy_secret;
      if (name === 'cookie') return user_proxy1;
      if (name === 'cookie2') return user_proxy2;
      if (name === 'cookie3') return user_proxy3;
      if (name === 'ip') return proxy2_base;

      if (Lampa.Storage.field('online_mod_proxy_' + name) === true) {
        if (name === 'iframe') return user_proxy2;
        if (name === 'lumex') return proxy_secret;
        if (name === 'rezka') return user_proxy2;
        if (name === 'rezka2') return user_proxy2;
        if (name === 'kinobase') return proxy_secret;
        if (name === 'collaps') return proxy_secret;
        if (name === 'cdnmovies') return proxy_secret;
        if (name === 'filmix') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
        if (name === 'videodb') return user_proxy2;
        if (name === 'fancdn') return user_proxy3;
        if (name === 'fancdn2') return user_proxy1;
        if (name === 'fanserials') return user_proxy1;
        if (name === 'fanserials_cdn') return proxy_secret;
        if (name === 'videoseed') return proxy_secret;
        if (name === 'vibix') return proxy_secret;
        if (name === 'redheadsound') return user_proxy2;
        if (name === 'anilibria') return user_proxy2;
        if (name === 'anilibria2') return user_proxy1;
        if (name === 'animelib') return proxy_secret;
        if (name === 'kodik') return user_proxy1;
        if (name === 'kinopub') return user_proxy2;
      }

      return '';
    }

    function parseURL(link) {
      var url = {
        href: link,
        protocol: '',
        host: '',
        origin: '',
        pathname: '',
        search: '',
        hash: ''
      };
      var pos = link.indexOf('#');

      if (pos !== -1) {
        url.hash = link.substring(pos);
        link = link.substring(0, pos);
      }

      pos = link.indexOf('?');

      if (pos !== -1) {
        url.search = link.substring(pos);
        link = link.substring(0, pos);
      }

      pos = link.indexOf(':');
      var path_pos = link.indexOf('/');

      if (pos !== -1 && (path_pos === -1 || path_pos > pos)) {
        url.protocol = link.substring(0, pos + 1);
        link = link.substring(pos + 1);
      }

      if (startsWith(link, '//')) {
        pos = link.indexOf('/', 2);

        if (pos !== -1) {
          url.host = link.substring(2, pos);
          link = link.substring(pos);
        } else {
          url.host = link.substring(2);
          link = '/';
        }

        url.origin = url.protocol + '//' + url.host;
      }

      url.pathname = link;
      return url;
    }

    function fixLink(link, referrer) {
      if (link) {
        if (!referrer || link.indexOf('://') !== -1) return link;
        var url = parseURL(referrer);
        if (startsWith(link, '//')) return url.protocol + link;
        if (startsWith(link, '/')) return url.origin + link;
        if (startsWith(link, '?')) return url.origin + url.pathname + link;
        if (startsWith(link, '#')) return url.origin + url.pathname + url.search + link;
        var base = url.origin + url.pathname;
        base = base.substring(0, base.lastIndexOf('/') + 1);
        return base + link;
      }

      return link;
    }

    function fixLinkProtocol(link, prefer_http, replace_protocol) {
      if (link) {
        if (startsWith(link, '//')) {
          return (prefer_http ? 'http:' : 'https:') + link;
        } else if (prefer_http && replace_protocol) {
          return link.replace('https://', 'http://');
        } else if (!prefer_http && replace_protocol === 'full') {
          return link.replace('http://', 'https://');
        }
      }

      return link;
    }

    function proxyLink(link, proxy, proxy_enc, enc) {
      if (link && proxy) {
        if (proxy_enc == null) proxy_enc = '';
        if (enc == null) enc = 'enc';

        if (enc === 'enc') {
          var pos = link.indexOf('/');
          if (pos !== -1 && link.charAt(pos + 1) === '/') pos++;
          var part1 = pos !== -1 ? link.substring(0, pos + 1) : '';
          var part2 = pos !== -1 ? link.substring(pos + 1) : link;
          return proxy + 'enc/' + encodeURIComponent(btoa(proxy_enc + part1)) + '/' + part2;
        }

        if (enc === 'enc1') {
          var _pos = link.lastIndexOf('/');

          var _part = _pos !== -1 ? link.substring(0, _pos + 1) : '';

          var _part2 = _pos !== -1 ? link.substring(_pos + 1) : link;

          return proxy + 'enc1/' + encodeURIComponent(btoa(proxy_enc + _part)) + '/' + _part2;
        }

        if (enc === 'enc2' || enc === 'enc2t') {
          var posEnd = link.lastIndexOf('?');
          var posStart = link.lastIndexOf('://');
          if (posEnd === -1 || posEnd <= posStart) posEnd = link.length;
          if (posStart === -1) posStart = -3;
          var name = link.substring(posStart + 3, posEnd);
          posStart = name.lastIndexOf('/');
          name = posStart !== -1 ? name.substring(posStart + 1) : '';
          return proxy + 'enc2/' + encodeURIComponent(btoa(proxy_enc + link)) + '/' + name + (enc === 'enc2t' ? "?jacred.test" : '');
        }

        return proxy + proxy_enc + link;
      }

      return link;
    }

    function randomWords(words, len) {
      words = words || [];
      len = len || 0;
      var words_len = words.length;
      if (!words_len) return '';
      var str = '';

      for (var i = 0; i < len; i++) {
        str += words[Math.floor(Math.random() * words_len)];
      }

      return str;
    }

    function randomChars(chars, len) {
      return randomWords((chars || '').split(''), len);
    }

    function randomHex(len) {
      return randomChars('0123456789abcdef', len);
    }

    function randomId(len, extra) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyz' + (extra || ''), len);
    }

    function randomId2(len, extra) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + (extra || ''), len);
    }

    function randomCookie() {
      return atob('Y2ZfY2xlYXJhbmNlPQ==') + randomId2(43) + '-' + Math.floor(Date.now() / 1000) + atob('LTEuMi4xLjEt') + randomId2(299, '_.');
    }

    function checkAndroidVersion(needVersion) {
      if (typeof AndroidJS !== 'undefined') {
        try {
          var current = AndroidJS.appVersion().split('-');
          var versionCode = current.pop();

          if (parseInt(versionCode, 10) >= needVersion) {
            return true;
          }
        } catch (e) {}
      }

      return false;
    }

    var Utils = {
      decodeSecret: decodeSecret,
      isDebug: isDebug,
      isDebug2: isDebug2,
      isDebug3: isDebug3,
      rezka2Mirror: rezka2Mirror,
      kinobaseMirror: kinobaseMirror,
      setCurrentFanserialsHost: setCurrentFanserialsHost,
      getCurrentFanserialsHost: getCurrentFanserialsHost,
      fanserialsHost: fanserialsHost,
      fancdnHost: fancdnHost,
      filmixHost: filmixHost$1,
      filmixAppHost: filmixAppHost,
      filmixToken: filmixToken,
      filmixUserAgent: filmixUserAgent,
      baseUserAgent: baseUserAgent,
      vcdnToken: vcdnToken,
      setMyIp: setMyIp,
      getMyIp: getMyIp,
      checkMyIp: checkMyIp$1,
      proxy: proxy,
      parseURL: parseURL,
      fixLink: fixLink,
      fixLinkProtocol: fixLinkProtocol,
      proxyLink: proxyLink,
      randomWords: randomWords,
      randomChars: randomChars,
      randomHex: randomHex,
      randomId: randomId,
      randomId2: randomId2,
      randomCookie: randomCookie,
      checkAndroidVersion: checkAndroidVersion
    };

    var network$1 = new Lampa.Reguest();
    var cache = {};
    var total_cnt = 0;
    var proxy_cnt = 0;
    var good_cnt = 0;
    var CACHE_SIZE = 100;
    var CACHE_TIME = 1000 * 60 * 60;

    function get(method, oncomplite, onerror) {
      var use_proxy = total_cnt >= 10 && good_cnt > total_cnt / 2;
      if (!use_proxy) total_cnt++;
      var kp_prox = 'https://cors.kp556.workers.dev/';
      var url = 'https://kinopoiskapiunofficial.tech/';
      url += method;
      network$1.timeout(15000);
      network$1.silent((use_proxy ? kp_prox : '') + url, function (json) {
        oncomplite(json);
      }, function (a, c) {
        use_proxy = !use_proxy && (proxy_cnt < 10 || good_cnt > proxy_cnt / 2);

        if (use_proxy && (a.status == 429 || a.status == 0 && a.statusText !== 'timeout')) {
          proxy_cnt++;
          network$1.timeout(15000);
          network$1.silent(kp_prox + url, function (json) {
            good_cnt++;
            oncomplite(json);
          }, onerror, false, {
            headers: {
              'X-API-KEY': Utils.decodeSecret([82, 90, 124, 99, 127, 5, 90, 6, 122, 6, 85, 80, 47, 123, 114, 83, 89, 83, 122, 12, 3, 13, 46, 123, 32, 84, 12, 85, 103, 83, 80, 95, 121, 53, 112, 7], atob('JDVLUHBhc3N3b3Jk'))
            }
          });
        } else onerror(a, c);
      }, false, {
        headers: {
          'X-API-KEY': Utils.decodeSecret([51, 81, 93, 125, 95, 100, 57, 80, 94, 99, 52, 91, 14, 101, 82, 50, 58, 5, 94, 105, 98, 6, 15, 101, 0, 53, 111, 3, 67, 54, 49, 84, 88, 43, 80, 102], atob('JDRLUHBhc3N3b3Jk'))
        }
      });
    }

    function getComplite(method, oncomplite) {
      get(method, oncomplite, function () {
        oncomplite(null);
      });
    }

    function getCompliteIf(condition, method, oncomplite) {
      if (condition) getComplite(method, oncomplite);else {
        setTimeout(function () {
          oncomplite(null);
        }, 10);
      }
    }

    function getCache(key) {
      var res = cache[key];

      if (res) {
        var cache_timestamp = new Date().getTime() - CACHE_TIME;
        if (res.timestamp > cache_timestamp) return res.value;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }
      }

      return null;
    }

    function setCache(key, value) {
      var timestamp = new Date().getTime();
      var size = Object.keys(cache).length;

      if (size >= CACHE_SIZE) {
        var cache_timestamp = timestamp - CACHE_TIME;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }

        size = Object.keys(cache).length;

        if (size >= CACHE_SIZE) {
          var timestamps = [];

          for (var _ID in cache) {
            var _node = cache[_ID];
            timestamps.push(_node && _node.timestamp || 0);
          }

          timestamps.sort(function (a, b) {
            return a - b;
          });
          cache_timestamp = timestamps[Math.floor(timestamps.length / 2)];

          for (var _ID2 in cache) {
            var _node2 = cache[_ID2];
            if (!(_node2 && _node2.timestamp > cache_timestamp)) delete cache[_ID2];
          }
        }
      }

      cache[key] = {
        timestamp: timestamp,
        value: value
      };
    }

    function getFromCache(method, oncomplite, onerror) {
      var json = getCache(method);

      if (json) {
        setTimeout(function () {
          oncomplite(json, true);
        }, 10);
      } else get(method, oncomplite, onerror);
    }

    function clear() {
      network$1.clear();
    }

    var KP = {
      get: get,
      getComplite: getComplite,
      getCompliteIf: getCompliteIf,
      getCache: getCache,
      setCache: setCache,
      getFromCache: getFromCache,
      clear: clear
    };

    function lumex(component, _object) {
      var network = new Lampa.Reguest();
      var extract = {};
      var object = _object;
      extract.seasons = [];
      extract.season_num = [];
      extract.media = [];
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var prox = component.proxy('lumex');
      var host = atob('aHR0cHM6Ly9wLmx1bWV4LnNwYWNl');
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site'
      } : {};
      var headers2 = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Cookie': '',
        'x-csrf-token': ''
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'param/Sec-Fetch-Dest=empty/';
        prox_enc += 'param/Sec-Fetch-Mode=cors/';
        prox_enc += 'param/Sec-Fetch-Site=same-site/';
      }

      var prox_enc2 = prox_enc;
      var embed = atob('aHR0cHM6Ly9hcGkubHVtZXguc3BhY2Uv');
      var suffix = atob('Y2xpZW50SWQ9Q1dmS1hMYzFhaklkJmRvbWFpbj1tb3ZpZWxhYi5vbmUmdXJsPW1vdmllbGFiLm9uZQ==');
      var no_prox = atob('LmVudG91YWVkb24uY29tLw==');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        voice_id: 0
      };

      function lumex_search(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var returnHeaders = true;
        var prox_enc_cookie = prox_enc;

        if (prox) {
          prox_enc_cookie += 'cookie_plus/param/Cookie=/';
          returnHeaders = false;
        }

        var success_check = function success_check(json) {
          var cookie = '';

          if (json && json.headers && json.body) {
            var cookieHeaders = json.headers['set-cookie'] || null;

            if (cookieHeaders && cookieHeaders.forEach) {
              var values = {};
              cookieHeaders.forEach(function (param) {
                var parts = param.split(';')[0].split('=');

                if (parts[0]) {
                  if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
                }
              });
              var cookies = [];

              for (var name in values) {
                cookies.push(name + '=' + values[name]);
              }

              cookie = cookies.join('; ');
            }

            json = typeof json.body === 'string' ? Lampa.Arrays.decodeJson(json.body, {}) : json.body;
          }

          callback(json, cookie);
        };

        network.clear();
        network.timeout(20000);
        network["native"](component.proxyLink(api, prox, prox_enc_cookie, 'enc2t'), success_check, error_check, false, {
          headers: headers,
          returnHeaders: returnHeaders
        });
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var found = false;
        var src = embed + 'content';

        if (data && data[0] && data[0].content_type && data[0].id) {
          found = true;
          src = Lampa.Utils.addUrlComponent(src, 'contentType=' + encodeURIComponent(data[0].content_type.replace(/_/g, '-')));
          src = Lampa.Utils.addUrlComponent(src, 'contentId=' + encodeURIComponent(data[0].id));
        } else {
          src = Lampa.Utils.addUrlComponent(src, 'contentType=short');
          src = Lampa.Utils.addUrlComponent(src, (+kinopoisk_id ? 'kpId=' : 'imdbId=') + encodeURIComponent(kinopoisk_id));
        }

        src = Lampa.Utils.addUrlComponent(src, suffix);
        lumex_search(src, function (json, cookie) {
          if (json) success(json, cookie);else if (!found && !object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            var src2 = embed + 'content';
            src2 = Lampa.Utils.addUrlComponent(src2, 'contentType=short');
            src2 = Lampa.Utils.addUrlComponent(src2, 'imdbId=' + encodeURIComponent(object.movie.imdb_id));
            src2 = Lampa.Utils.addUrlComponent(src2, suffix);
            lumex_search(src2, function (json, cookie) {
              if (json) success(json, cookie);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          voice_id: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;

        if (a.stype == 'voice') {
          choice.voice_name = filter_items.voice[b.index];
          choice.voice_id = filter_items.voice_info[b.index] && filter_items.voice_info[b.index].id;
        }

        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.player && json.player.media && json.player.media.length) {
          prox_enc2 = prox_enc;

          if (prox) {
            prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
            prox_enc2 += 'param/x-csrf-token=' + encodeURIComponent(json.meta || '') + '/';
          }

          if (Lampa.Platform.is('android')) {
            headers2['Cookie'] = cookie;
            headers2['x-csrf-token'] = json.meta || '';
          }

          var seasons = [];
          var season_num = [];
          var season_count = 0;
          json.player.media.forEach(function (media) {
            if (media.episodes) {
              season_count++;

              if (media.episodes.length) {
                seasons.push(media);
                season_num.push(media.season_id != null ? media.season_id : season_count);
              }
            } else if (media.media && media.episode_id != null && !season_count) {
              season_count++;
              seasons.push({
                season_id: 1,
                season_name: 'Сезон 1',
                episodes: json.player.media
              });
              season_num.push(1);
            }
          });
          extract = {
            seasons: seasons,
            season_num: season_num,
            media: json.player.media
          };
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.season_num.map(function (s) {
            return Lampa.Lang.translate('torrent_serial_season') + ' ' + s;
          }),
          season_num: extract.season_num,
          voice: [],
          voice_info: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.season_num.length) {
          var season = extract.seasons[choice.season];

          if (season && season.episodes) {
            season.episodes.forEach(function (episode) {
              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id != null && voice.translation_name != null) {
                    if (!filter_items.voice_info.some(function (v) {
                      return v.id == voice.translation_id;
                    })) {
                      filter_items.voice.push(voice.translation_name);
                      filter_items.voice_info.push({
                        id: voice.translation_id,
                        name: voice.translation_name
                      });
                    }
                  }
                });
              }
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = -1;

          if (choice.voice_id) {
            var voice = filter_items.voice_info.filter(function (v) {
              return v.id == choice.voice_id;
            })[0];
            if (voice) inx = filter_items.voice_info.indexOf(voice);
          }

          if (inx == -1) inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (filter_items.season_num.length) {
          var season = extract.seasons[choice.season];
          var season_num = extract.season_num[choice.season];
          var v = filter_items.voice_info[choice.voice];

          if (season && season.episodes && v) {
            var episode_count = 0;
            season.episodes.forEach(function (episode) {
              episode_count++;

              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id == v.id) {
                    var episode_num = episode.episode_id != null ? episode.episode_id : episode_count;
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num),
                      quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                      info: ' / ' + (voice.translation_name || v.name),
                      season: season_num,
                      episode: episode_count,
                      media: voice
                    });
                  }
                });
              }
            });
          }
        } else {
          extract.media.forEach(function (voice) {
            if (voice.translation_id != null && voice.translation_name != null) {
              filtred.push({
                title: voice.translation_name || select_title,
                quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                info: '',
                media: voice
              });
            }
          });
        }

        return filtred;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).map(function (item) {
            var link = item.link || '';
            if (prefer_mp4) link = link.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            var quality = item.height;
            var alt_quality = link.match(/\b(\d\d\d+)\./);

            if (alt_quality) {
              var alt_height = parseInt(alt_quality[1]);
              if (alt_height > quality && alt_height <= 4320) quality = alt_height;
            }

            link = component.fixLink(link, url);
            var link_prox = link.indexOf(no_prox) !== -1 ? '' : prox;
            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyLink(link, link_prox, prox_enc)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStreamM3U(element, call, error, file) {
        file = file.replace(/\.mp4:hls:manifest/, '');
        var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        var link_prox = file.indexOf(no_prox) !== -1 ? '' : prox;
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyLink(hls_file, link_prox, prox_enc), function (str) {
          parseStream(element, call, error, extractItems, str, hls_file);
        }, function (a, c) {
          if (file != hls_file) {
            network.clear();
            network.timeout(5000);
            network["native"](component.proxyLink(file, link_prox, prox_enc), function (str) {
              parseStream(element, call, error, extractItems, str, file);
            }, function (a, c) {
              error();
            }, false, {
              dataType: 'text'
            });
          } else error();
        }, false, {
          dataType: 'text'
        });
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.length)) return false;
        var subtitles = tracks.filter(function (t) {
          return t.kind === 'captions';
        }).map(function (item) {
          var links = item.src || '';
          var link = links.split(' or ').filter(function (link) {
            return link;
          })[0] || '';
          link = component.fixLinkProtocol(link, prefer_http);
          var link_prox = link.indexOf(no_prox) !== -1 ? '' : prox;
          return {
            label: item.label,
            url: component.proxyLink(link, link_prox, prox_enc)
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!element.media.playlist) return error();
        var url = component.fixLink(element.media.playlist, embed);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc2, 'enc2t'), function (json) {
          var url = component.fixLinkProtocol(json && json.url || '', prefer_http);

          if (url) {
            element.subtitles = parseSubs(element.media.tracks);

            if (endsWith(url, '.m3u8')) {
              getStreamM3U(element, call, error, url);
              return;
            }

            var link_prox = url.indexOf(no_prox) !== -1 ? '' : prox;
            element.stream = component.proxyLink(url, link_prox, prox_enc);
            element.qualitys = false;
            call(element);
          } else error();
        }, function (a, c) {
          error();
        }, {}, {
          headers: headers2
        });
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function lumex2(component, _object) {
      var network = new Lampa.Reguest();
      var extract = [];
      var object = _object;
      var select_title = '';
      var is_playlist = false;
      var embed = atob('aHR0cHM6Ly9hcGkubGFtcGEuc3RyZWFtL2x1bWV4Lw==');
      var api_suffix = '/' + encodeURIComponent(btoa(window.location.href));
      var cub_id = encodeURIComponent(btoa(Lampa.Storage.get('account', '{}').email || 'none'));
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function lumex_api(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 500 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var success_check = function success_check(json) {
          callback(json);
        };

        network.clear();
        network.timeout(20000);
        network["native"](api, success_check, error_check);
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var src = embed + 'sId/' + encodeURIComponent(object.movie.id) + '/mod/';

        if (data && data[0] && data[0].content_type && data[0].id) {
          var imdb_id = data[0].imdb_id || 'null';
          var kp_id = data[0].kp_id || 'null';
          src += encodeURIComponent(kp_id) + '/' + encodeURIComponent(imdb_id);
        } else {
          var _imdb_id = (+kinopoisk_id ? !object.clarification && object.movie.imdb_id : kinopoisk_id) || 'null';

          var _kp_id = +kinopoisk_id ? kinopoisk_id : 'null';

          src += encodeURIComponent(_kp_id) + '/' + encodeURIComponent(_imdb_id);
        }

        var original_title = !object.clarification && (object.movie.original_title || object.movie.original_name) || '';
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        component.checkMyIp(function () {
          var ip = Utils.getMyIp();

          if (!ip) {
            error();
            return;
          }

          var api = src + '/' + cub_id + api_suffix;
          api = Lampa.Utils.addUrlComponent(api, 'ip=' + encodeURIComponent(ip));
          api = Lampa.Utils.addUrlComponent(api, 'search=' + encodeURIComponent(select_title));
          api = Lampa.Utils.addUrlComponent(api, 'original_title=' + encodeURIComponent(original_title));
          api = Lampa.Utils.addUrlComponent(api, 'year=' + search_year);
          lumex_api(api, function (json) {
            if (json) success(json);else component.emptyForQuery(select_title);
          }, error);
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.folder && Lampa.Arrays.getKeys(json.folder).length) {
          if (json.folder.forEach) {
            extract = json.folder;
            is_playlist = false;
          } else {
            extract = [];
            is_playlist = true;

            for (var voice in json.folder) {
              var seasons = json.folder[voice];

              if (!seasons.forEach) {
                var _loop = function _loop(season_id) {
                  var episodes = seasons[season_id];

                  if (episodes.forEach) {
                    var s = extract.filter(function (s) {
                      return s.season_id === season_id;
                    })[0];

                    if (!s) {
                      s = {
                        season_id: season_id,
                        title: Lampa.Lang.translate('torrent_serial_season') + ' ' + season_id,
                        voices: []
                      };
                      extract.push(s);
                    }

                    s.voices.push({
                      title: voice,
                      episodes: episodes
                    });
                  }
                };

                for (var season_id in seasons) {
                  _loop(season_id);
                }
              }
            }

            extract.sort(function (a, b) {
              return a.season_id - b.season_id;
            });
          }

          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: is_playlist ? extract.map(function (s) {
            return s.title;
          }) : [],
          voice: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (is_playlist) {
          var season = extract[choice.season];

          if (season && season.voices) {
            season.voices.forEach(function (voice) {
              filter_items.voice.push(voice.title);
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (is_playlist) {
          var season = extract[choice.season];

          if (season && season.voices) {
            var voice_title = filter_items.voice[choice.voice];
            season.voices.forEach(function (voice) {
              if (voice.title == voice_title && voice.episodes) {
                voice.episodes.forEach(function (episode) {
                  filtred.push({
                    title: component.formatEpisodeTitle(episode.season, episode.episode),
                    quality: episode.quality || '360p ~ 1080p',
                    info: ' / ' + voice_title,
                    season: episode.season + '',
                    episode: episode.episode,
                    media: episode,
                    subtitles: parseSubs(episode.subtitles),
                    vast_url: episode.vast_url,
                    vast_msg: episode.vast_msg
                  });
                });
              }
            });
          }
        } else {
          extract.forEach(function (voice) {
            if (voice.url) {
              filtred.push({
                title: voice.title || select_title,
                quality: voice.quality || '360p ~ 1080p',
                info: '',
                media: voice,
                subtitles: parseSubs(voice.subtitles),
                vast_url: voice.vast_url,
                vast_msg: voice.vast_msg
              });
            }
          });
        }

        return filtred;
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.forEach)) return false;
        var subtitles = tracks.map(function (item) {
          return {
            label: item.label,
            url: item.url || ''
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var ip = Utils.getMyIp();
        if (!element.media.url || !ip) return error();
        var api = element.media.url + '/' + encodeURIComponent(ip) + api_suffix;
        lumex_api(api, function (json) {
          if (json && json.url) {
            element.stream = json.url;
            element.qualitys = json.qualitys || false;
            call(element);
          } else error();
        }, error);
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                vast_url: element.vast_url,
                vast_msg: element.vast_msg,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      vast_url: elem.vast_url,
                      vast_msg: elem.vast_msg,
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function rezka2(component, _object) {
      var network = new Lampa.Reguest();
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var proxy_mirror = Lampa.Storage.field('online_mod_proxy_rezka2_mirror') === true;
      var prox = component.proxy('rezka2');
      var host = prox && !proxy_mirror ? 'https://rezka.ag' : Utils.rezka2Mirror();
      var ref = host + '/';
      var logged_in = !(prox || Lampa.Platform.is('android'));
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var cookie = Lampa.Storage.get('online_mod_rezka2_cookie', '') + '';
      if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + Utils.randomId(26) + (cookie ? '; ' + cookie : '');

      if (cookie) {
        if (Lampa.Platform.is('android')) {
          headers.Cookie = cookie;
        }

        if (prox) {
          prox_enc += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        }
      }

      var embed = ref;
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        season_id: ''
      };
      var error_message = '';

      function checkErrorForm(str) {
        var login_form = str.match(/<form id="check-form" class="check-form" method="post" action="\/ajax\/login\/">/);

        if (login_form) {
          error_message = Lampa.Lang.translate('online_mod_authorization_required') + ' HDrezka';
          return;
        }

        var error_form = str.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

        if (error_form) {
          error_message = ($(error_form[1]).text().trim() || '') + ':\n' + ($(error_form[2]).text().trim() || '');
          return;
        }

        var verify_form = str.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

        if (verify_form) {
          error_message = Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka';
          return;
        }

        if (startsWith(str, 'Fatal error:')) {
          error_message = str;
          return;
        }
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0].is_similars) return getPage(data[0].link);
        error_message = '';
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);
        var url = embed + 'engine/ajax/search.php';
        var more_url = embed + 'search/?do=search&subaction=search';

        var query_more = function query_more(query, page, data, callback) {
          var url = more_url + '&q=' + encodeURIComponent(query) + '&page=' + encodeURIComponent(page);
          network.clear();
          network.timeout(10000);
          network["native"](component.proxyLink(url, prox, prox_enc, prox_enc, 'enc2t'), function (str) {
            str = (str || '').replace(/\n/g, '');
            checkErrorForm(str);
            var links = str.match(/<div class="b-content__inline_item-link">\s*<a [^>]*>[^<]*<\/a>\s*<div>[^<]*<\/div>\s*<\/div>/g);
            var have_more = !!str.match(/<a [^>]*>\s*<span class="b-navigation__next\b/);

            if (links && links.length) {
              var items = links.map(function (l) {
                var li = $(l);
                var link = $('a', li);
                var info_div = $('div', li);
                var titl = link.text().trim() || '';
                var info = info_div.text().trim() || '';
                var orig_title = '';
                var year;
                var found = info.match(/^(\d{4})\b/);

                if (found) {
                  year = parseInt(found[1]);
                }

                return {
                  year: year,
                  title: titl,
                  orig_title: orig_title,
                  link: link.attr('href') || ''
                };
              });
              data = data.concat(items);
            }

            if (callback) callback(data, have_more);
          }, function (a, c) {
            component.empty(network.errorDecode(a, c));
          }, false, {
            dataType: 'text',
            withCredentials: logged_in,
            headers: headers
          });
        };

        var search_more = function search_more(params) {
          var items = params.items || [];
          var query = params.query || '';
          var page = params.page || 1;
          query_more(query, page, items, function (items, have_more) {
            if (items && items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });

              if (have_more) {
                component.similars(items, search_more, {
                  items: [],
                  query: query,
                  page: page + 1
                });
              } else {
                component.similars(items);
              }

              component.loading(false);
            } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
          });
        };

        var display = function display(links, have_more, query) {
          if (links && links.length && links.forEach) {
            var is_sure = false;
            var items = links.map(function (l) {
              var li = $(l);
              var link = $('a', li);
              var enty = $('.enty', link);
              var rating = $('.rating', link);
              var titl = enty.text().trim() || '';
              enty.remove();
              rating.remove();
              var alt_titl = link.text().trim() || '';
              var orig_title = '';
              var year;
              var found = alt_titl.match(/\((.*,\s*)?\b(\d{4})(\s*-\s*[\d.]*)?\)$/);

              if (found) {
                if (found[1]) {
                  var found_alt = found[1].match(/^([^а-яА-ЯёЁ]+),/);
                  if (found_alt) orig_title = found_alt[1].trim();
                }

                year = parseInt(found[2]);
              }

              return {
                year: year,
                title: titl,
                orig_title: orig_title,
                link: link.attr('href') || ''
              };
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });

              if (have_more) {
                component.similars(items, search_more, {
                  items: [],
                  query: query,
                  page: 1
                });
              } else {
                component.similars(items);
              }

              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
        };

        var query_search = function query_search(query, data, callback) {
          var postdata = 'q=' + encodeURIComponent(query);
          network.clear();
          network.timeout(10000);
          network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
            str = (str || '').replace(/\n/g, '');
            checkErrorForm(str);
            var links = str.match(/<li><a href=.*?<\/li>/g);
            var have_more = str.indexOf('<a class="b-search__live_all"') !== -1;
            if (links && links.length) data = data.concat(links);
            if (callback) callback(data, have_more, query);
          }, function (a, c) {
            if (prox && a.status == 403 && (!a.responseText || a.responseText.indexOf('<div>105</div>') !== -1)) {
              Lampa.Storage.set('online_mod_proxy_rezka2', 'false');
            }

            if (a.status == 403 && a.responseText) {
              var str = (a.responseText || '').replace(/\n/g, '');
              checkErrorForm(str);
            }

            if (error_message) component.empty(error_message);else component.empty(network.errorDecode(a, c));
          }, postdata, {
            dataType: 'text',
            withCredentials: logged_in,
            headers: headers
          });
        };

        var query_title_search = function query_title_search() {
          query_search(component.cleanTitle(select_title), [], function (data, have_more, query) {
            if (data && data.length && data.forEach) display(data, have_more, query);else display([]);
          });
        };

        query_title_search();
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          season_id: ''
        };
        component.loading(true);
        getEpisodes(success);
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        if (a.stype == 'season') choice.season_id = filter_items.season_id[b.index];
        component.reset();
        component.loading(true);
        getEpisodes(success);
        component.saveChoice(choice);
        setTimeout(component.closeFilter, 10);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function getPage(url) {
        url = component.fixLink(url, ref);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
          extractData(str);

          if (extract.film_id) {
            getEpisodes(success);
          } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          withCredentials: logged_in,
          headers: headers
        });
      }

      function success() {
        component.loading(false);
        filter();
        append(filtred());
      }
      /**
       * Получить данные о фильме
       * @param {String} str
       */


      function extractData(str) {
        extract.voice = [];
        extract.season = [];
        extract.episode = [];
        extract.voice_data = {};
        extract.is_series = false;
        extract.film_id = '';
        extract.favs = '';
        str = (str || '').replace(/\n/g, '');
        checkErrorForm(str);
        var translation = str.match(/<h2>В переводе<\/h2>:<\/td>\s*(<td>.*?<\/td>)/);
        var cdnSeries = str.match(/\.initCDNSeriesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
        var cdnMovie = str.match(/\.initCDNMoviesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
        var devVoiceName;

        if (translation) {
          devVoiceName = $(translation[1]).text().trim();
        }

        if (!devVoiceName) devVoiceName = 'Оригинал';
        var defVoice, defSeason, defEpisode;

        if (cdnSeries) {
          extract.is_series = true;
          extract.film_id = cdnSeries[1];
          defVoice = {
            name: devVoiceName,
            id: cdnSeries[2]
          };
          defSeason = {
            name: 'Сезон ' + cdnSeries[3],
            id: cdnSeries[3]
          };
          defEpisode = {
            name: 'Серия ' + cdnSeries[4],
            season_id: cdnSeries[3],
            episode_id: cdnSeries[4]
          };
        } else if (cdnMovie) {
          extract.film_id = cdnMovie[1];
          defVoice = {
            name: devVoiceName,
            id: cdnMovie[2],
            is_camrip: cdnMovie[3],
            is_ads: cdnMovie[4],
            is_director: cdnMovie[5]
          };
        }

        var voices = str.match(/(<ul id="translators-list".*?<\/ul>)/);

        if (voices) {
          var select = $(voices[1]);
          $('.b-translator__item', select).each(function () {
            var title = ($(this).attr('title') || $(this).text() || '').trim();
            $('img', this).each(function () {
              var lang = ($(this).attr('title') || $(this).attr('alt') || '').trim();
              if (lang && title.indexOf(lang) == -1) title += ' (' + lang + ')';
            });
            extract.voice.push({
              name: title,
              id: $(this).attr('data-translator_id'),
              is_camrip: $(this).attr('data-camrip'),
              is_ads: $(this).attr('data-ads'),
              is_director: $(this).attr('data-director')
            });
          });
        }

        if (!extract.voice.length && defVoice) {
          extract.voice.push(defVoice);
        }

        if (extract.is_series) {
          var seasons = str.match(/(<ul id="simple-seasons-tabs".*?<\/ul>)/);

          if (seasons) {
            var _select = $(seasons[1]);

            $('.b-simple_season__item', _select).each(function () {
              extract.season.push({
                name: $(this).text(),
                id: $(this).attr('data-tab_id')
              });
            });
          }

          if (!extract.season.length && defSeason) {
            extract.season.push(defSeason);
          }

          var episodes = str.match(/(<div id="simple-episodes-tabs".*?<\/div>)/);

          if (episodes) {
            var _select2 = $(episodes[1]);

            $('.b-simple_episode__item', _select2).each(function () {
              extract.episode.push({
                name: $(this).text(),
                season_id: $(this).attr('data-season_id'),
                episode_id: $(this).attr('data-episode_id')
              });
            });
          }

          if (!extract.episode.length && defEpisode) {
            extract.episode.push(defEpisode);
          }
        }

        var favs = str.match(/<input type="hidden" id="ctrl_favs" value="([^"]*)"/);
        if (favs) extract.favs = favs[1];
        var blocked = str.match(/class="b-player__restricted__block_message"/);
        if (blocked) extract.blocked = true;
      }

      function getEpisodes(call) {
        if (extract.is_series) {
          filterVoice();

          if (extract.voice[choice.voice]) {
            var translator_id = extract.voice[choice.voice].id;
            var data = extract.voice_data[translator_id];

            if (data) {
              extract.season = data.season;
              extract.episode = data.episode;
            } else {
              var url = embed + 'ajax/get_cdn_series/?t=' + Date.now();
              var postdata = 'id=' + encodeURIComponent(extract.film_id);
              postdata += '&translator_id=' + encodeURIComponent(translator_id);
              postdata += '&favs=' + encodeURIComponent(extract.favs);
              postdata += '&action=get_episodes';
              network.clear();
              network.timeout(10000);
              network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
                extractEpisodes(json, translator_id);
                call();
              }, function (a, c) {
                component.empty(network.errorDecode(a, c));
              }, postdata, {
                withCredentials: logged_in,
                headers: headers
              });
              return;
            }
          }
        }

        call();
      }

      function extractEpisodes(json, translator_id) {
        var data = {
          season: [],
          episode: []
        };

        if (json && json.seasons) {
          var select = $('<ul>' + json.seasons + '</ul>');
          $('.b-simple_season__item', select).each(function () {
            data.season.push({
              name: $(this).text(),
              id: $(this).attr('data-tab_id')
            });
          });
        }

        if (json && json.episodes) {
          var _select3 = $('<div>' + json.episodes + '</div>');

          $('.b-simple_episode__item', _select3).each(function () {
            data.episode.push({
              name: $(this).text(),
              translator_id: translator_id,
              season_id: $(this).attr('data-season_id'),
              episode_id: $(this).attr('data-episode_id')
            });
          });
        }

        extract.voice_data[translator_id] = data;
        extract.season = data.season;
        extract.episode = data.episode;
      }

      function filterVoice() {
        var voice = extract.is_series ? extract.voice.map(function (v) {
          return v.name;
        }) : [];
        if (!voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.season.map(function (s) {
            return s.name;
          }),
          season_id: extract.season.map(function (s) {
            return s.id;
          }),
          voice: extract.is_series ? extract.voice.map(function (v) {
            return v.name;
          }) : []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;
        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        if (choice.season_id) {
          var _inx = filter_items.season_id.indexOf(choice.season_id);

          if (_inx == -1) choice.season = 0;else if (_inx !== choice.season) {
            choice.season = _inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var url = embed + 'ajax/get_cdn_series/?t=' + Date.now();
        var postdata = 'id=' + encodeURIComponent(extract.film_id);

        if (extract.is_series) {
          postdata += '&translator_id=' + encodeURIComponent(element.media.translator_id);
          postdata += '&season=' + encodeURIComponent(element.media.season_id);
          postdata += '&episode=' + encodeURIComponent(element.media.episode_id);
          postdata += '&favs=' + encodeURIComponent(extract.favs);
          postdata += '&action=get_stream';
        } else {
          postdata += '&translator_id=' + encodeURIComponent(element.media.id);
          postdata += '&is_camrip=' + encodeURIComponent(element.media.is_camrip);
          postdata += '&is_ads=' + encodeURIComponent(element.media.is_ads);
          postdata += '&is_director=' + encodeURIComponent(element.media.is_director);
          postdata += '&favs=' + encodeURIComponent(extract.favs);
          postdata += '&action=get_movie';
        }

        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
          if (json && json.url) {
            var video = decode(json.url),
                file = '',
                quality = false;
            var items = extractItems(video);

            if (items && items.length) {
              file = items[0].file;
              var premium_content = json.premium_content || false;
              var prev_file = '';
              quality = {};
              items.forEach(function (item) {
                if (item.label !== '1080p Ultra') {
                  if (prev_file !== '' && prev_file !== item.file) premium_content = false;
                  prev_file = item.file;
                }

                quality[item.label] = item.file;
              });

              if (premium_content) {
                error('Перевод доступен только с HDrezka Premium');
                return;
              }
            }

            if (file) {
              element.stream = file;
              element.qualitys = quality;
              element.subtitles = parseSubtitles(json.subtitle);
              call(element);
            } else error();
          } else error();
        }, function (a, c) {
          error();
        }, postdata, {
          withCredentials: logged_in,
          headers: headers
        });
      }

      function decode(data) {
        if (!startsWith(data, '#')) return data;

        var enc = function enc(str) {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
          }));
        };

        var dec = function dec(str) {
          return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        };

        var trashList = ['$$!!@$$@^!@#$$@', '@@@@@!##!^^^', '####^!!##!@@', '^^^!@##!!##', '$$#!!@#!@##'];
        var x = data.substring(2);
        trashList.forEach(function (trash) {
          x = x.replace('//_//' + enc(trash), '');
        });

        try {
          x = dec(x);
        } catch (e) {
          x = '';
        }

        return x;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str) {
        if (!str) return [];

        try {
          var items = component.parsePlaylist(str).map(function (item) {
            var int_quality = NaN;
            var quality = item.label.match(/(\d\d\d+)/);

            if (quality) {
              int_quality = parseInt(quality[1]);
            } else {
              quality = item.label.match(/(\d+)K/);

              if (quality) {
                int_quality = parseInt(quality[1]) * 1000;
              }
            }

            var links;

            if (prefer_mp4) {
              links = item.links.filter(function (url) {
                return /\.mp4$/i.test(url);
              });
            } else {
              links = item.links.filter(function (url) {
                return /\.m3u8$/i.test(url);
              });
            }

            if (!links.length) links = item.links;
            var link = links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, 'full');
            return {
              label: item.label,
              quality: int_quality,
              file: component.proxyStream(link, 'rezka2')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parseSubtitles(str) {
        var subtitles = [];

        if (str) {
          subtitles = component.parsePlaylist(str).map(function (item) {
            var link = item.links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, 'full');
            return {
              label: item.label,
              url: component.processSubs(link)
            };
          });
        }

        return subtitles.length ? subtitles : false;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.is_series) {
          var season_name = filter_items.season[choice.season];
          var season_id;
          extract.season.forEach(function (season) {
            if (season.name == season_name) season_id = season.id;
          });
          var voice = filter_items.voice[choice.voice];
          extract.episode.forEach(function (episode) {
            if (episode.season_id == season_id) {
              filtred.push({
                title: component.formatEpisodeTitle(episode.season_id, null, episode.name),
                quality: '360p ~ 1080p',
                info: ' / ' + voice,
                season: parseInt(episode.season_id),
                episode: parseInt(episode.episode_id),
                media: episode
              });
            }
          });
        } else {
          extract.voice.forEach(function (voice) {
            filtred.push({
              title: voice.name || select_title,
              quality: '360p ~ 1080p',
              info: '',
              media: voice
            });
          });
        }

        return filtred;
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function (error) {
              element.loading = false;
              Lampa.Noty.show(error || Lampa.Lang.translate(extract.blocked ? 'online_mod_blockedlink' : 'online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function (error) {
                Lampa.Noty.show(error || Lampa.Lang.translate(extract.blocked ? 'online_mod_blockedlink' : 'online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function kinobase(component, _object) {
      var network = new Lampa.Reguest();
      var extract = [];
      var object = _object;
      var select_title = '';
      var is_playlist = false;
      var quality_type = '';
      var translation = '';
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var file_type = prefer_mp4 ? 'mp4' : 'hls';
      var prox = component.proxy('kinobase');
      var host = prox ? 'https://kinobase.org' : Utils.kinobaseMirror();
      var ref = host + '/';
      var embed = ref;
      var logged_in = !(prox || Lampa.Platform.is('android'));
      var user_agent = Utils.baseUserAgent();
      var check_cookie = Lampa.Storage.get('online_mod_kinobase_cookie', '') + '';
      var prox_enc_stream = '';
      var decrypt = Utils.decodeSecret([110, 62, 22, 19, 66, 73, 51, 7, 27, 59, 56, 105, 94, 86, 74, 92, 50, 27, 17, 44, 37, 36, 11, 94, 17, 89, 53, 28, 2, 44, 125, 103, 69, 5, 1, 72, 46, 5, 6, 106, 96, 107, 22, 2, 16, 22, 103, 37, 62, 25, 21, 14, 55, 41, 54, 99, 23, 48, 94, 120, 10, 2, 41, 51, 61, 110, 30, 37, 55, 116, 108, 62, 22, 19, 16, 22, 103, 3, 29, 60, 101, 48, 69, 0, 3, 72, 103, 7, 23, 43, 108, 118, 69, 45, 63, 1, 103, 3, 19, 42, 108, 59, 9, 23, 27, 95, 53, 85, 79, 120, 34, 62, 9, 26, 89, 26, 49, 20, 0, 120, 40, 36, 6, 3, 15, 95, 41, 1, 82, 101, 108, 99, 11, 19, 21, 26, 3, 58, 63, 8, 45, 57, 22, 19, 16, 19, 105, 5, 19, 42, 63, 46, 35, 4, 13, 87, 20, 1, 0, 49, 34, 44, 77, 84, 94, 82, 34, 20, 22, 102, 112, 100, 13, 19, 3, 94, 121, 73, 16, 55, 40, 50, 91, 74, 77, 88, 40, 17, 11, 102, 110, 103, 69, 84, 22, 95, 63, 1, 93, 48, 56, 38, 9, 84, 75, 1, 103, 3, 19, 42, 108, 59, 4, 3, 17, 95, 24, 1, 27, 53, 41, 107, 88, 86, 82, 1, 103, 3, 19, 42, 108, 45, 51, 25, 11, 94, 103, 72, 82, 62, 57, 37, 6, 2, 11, 85, 41, 93, 91, 35, 49, 112, 69, 0, 3, 72, 103, 19, 59, 54, 56, 107, 88, 86, 4, 79, 41, 22, 6, 49, 35, 37, 77, 95, 25, 26, 53, 16, 6, 45, 62, 37, 69, 71, 89, 26, 58, 78, 82, 46, 45, 57, 69, 46, 47, 118, 15, 1, 6, 40, 30, 46, 20, 3, 7, 73, 51, 85, 79, 120, 42, 62, 11, 21, 22, 83, 40, 27, 82, 0, 1, 7, 45, 2, 22, 74, 21, 16, 3, 45, 41, 56, 17, 94, 75, 65, 103, 1, 26, 49, 63, 101, 10, 6, 7, 84, 103, 72, 82, 62, 57, 37, 6, 2, 11, 85, 41, 93, 31, 116, 108, 62, 76, 13, 66, 72, 34, 6, 92, 40, 57, 56, 13, 94, 25, 26, 50, 7, 30, 98, 108, 62, 69, 11, 75, 1, 103, 8, 73, 120, 56, 35, 12, 5, 76, 73, 34, 27, 22, 120, 113, 107, 3, 3, 12, 89, 51, 28, 29, 54, 100, 98, 30, 11, 89, 26, 58, 78, 82, 46, 45, 57, 69, 38, 14, 91, 62, 16, 0, 50, 63, 107, 88, 86, 4, 79, 41, 22, 6, 49, 35, 37, 69, 38, 14, 91, 62, 16, 0, 50, 63, 99, 10, 6, 22, 19, 60, 85, 2, 52, 45, 50, 0, 4, 66, 7, 103, 26, 2, 44, 119, 107, 24, 77, 66, 76, 38, 7, 82, 58, 45, 32, 84, 68, 81, 26, 122, 85, 9, 120, 45, 33, 4, 14, 49, 95, 51, 0, 2, 98, 108, 111, 75, 23, 8, 91, 63, 38, 23, 44, 57, 59, 73, 86, 1, 85, 40, 30, 27, 61, 118, 107, 65, 88, 1, 85, 40, 30, 27, 61, 96, 107, 4, 28, 3, 66, 125, 85, 86, 118, 45, 33, 4, 14, 78, 26, 32, 16, 6, 98, 108, 111, 75, 17, 7, 78, 107, 85, 2, 55, 63, 63, 95, 86, 70, 20, 55, 26, 1, 44, 96, 107, 2, 19, 22, 105, 36, 7, 27, 40, 56, 113, 69, 82, 76, 93, 34, 1, 33, 59, 62, 34, 21, 2, 78, 26, 52, 16, 6, 12, 37, 38, 0, 25, 23, 78, 125, 85, 5, 49, 34, 47, 10, 1, 76, 73, 34, 1, 38, 49, 33, 46, 10, 3, 22, 22, 103, 22, 30, 61, 45, 57, 49, 31, 15, 95, 40, 0, 6, 98, 108, 60, 12, 24, 6, 85, 48, 91, 17, 52, 41, 42, 23, 34, 11, 87, 34, 26, 7, 44, 96, 107, 22, 19, 22, 115, 41, 1, 23, 42, 58, 42, 9, 76, 66, 77, 46, 27, 22, 55, 59, 101, 22, 19, 22, 115, 41, 1, 23, 42, 58, 42, 9, 90, 66, 89, 43, 16, 19, 42, 5, 37, 17, 19, 16, 76, 38, 25, 72, 120, 59, 34, 11, 18, 13, 77, 105, 22, 30, 61, 45, 57, 44, 24, 22, 95, 53, 3, 19, 52, 96, 107, 6, 25, 12, 73, 40, 25, 23, 98, 108, 60, 12, 24, 6, 85, 48, 91, 17, 55, 34, 56, 10, 26, 7, 22, 103, 37, 30, 57, 53, 46, 23, 28, 17, 0, 103, 2, 27, 54, 40, 36, 18, 88, 50, 86, 38, 12, 23, 42, 38, 56, 73, 86, 4, 84, 24, 28, 28, 49, 56, 113, 69, 82, 76, 92, 41, 91, 27, 54, 37, 63, 73, 86, 4, 84, 24, 7, 23, 57, 40, 50, 95, 86, 70, 20, 33, 27, 92, 42, 41, 42, 1, 15, 78, 26, 24, 79, 82, 122, 110, 107, 24, 77, 66, 78, 53, 12, 82, 35, 108, 63, 23, 15, 66, 65, 103, 81, 92, 57, 38, 42, 29, 37, 7, 78, 50, 5, 82, 101, 108, 111, 75, 21, 13, 85, 44, 28, 23, 120, 113, 107, 3, 32, 13, 83, 35, 78, 82, 124, 98, 42, 15, 23, 26, 26, 122, 85, 20, 45, 34, 40, 17, 31, 13, 84, 111, 6, 23, 44, 56, 34, 11, 17, 17, 19, 60, 85, 27, 62, 108, 99, 22, 19, 22, 78, 46, 27, 21, 43, 98, 38, 0, 2, 10, 85, 35, 85, 79, 101, 113, 107, 71, 62, 39, 123, 3, 87, 82, 36, 48, 107, 22, 19, 22, 78, 46, 27, 21, 43, 98, 63, 28, 6, 7, 26, 122, 72, 79, 120, 110, 3, 32, 55, 38, 24, 110, 14, 82, 49, 42, 107, 77, 5, 7, 78, 51, 28, 28, 63, 63, 101, 22, 3, 1, 89, 34, 6, 1, 113, 108, 56, 0, 2, 22, 83, 41, 18, 1, 118, 63, 62, 6, 21, 7, 73, 52, 93, 28, 45, 32, 39, 73, 86, 64, 73, 50, 22, 17, 61, 63, 56, 71, 90, 66, 65, 58, 92, 73, 120, 37, 45, 69, 94, 17, 95, 51, 1, 27, 54, 43, 56, 75, 21, 13, 87, 55, 25, 23, 44, 41, 98, 69, 5, 7, 78, 51, 28, 28, 63, 63, 101, 6, 25, 15, 74, 43, 16, 6, 61, 100, 48, 24, 90, 66, 24, 52, 0, 17, 59, 41, 56, 22, 84, 75, 1, 103, 8, 82, 61, 32, 56, 0, 86, 11, 92, 103, 93, 7, 43, 41, 57, 69, 80, 68, 26, 111, 90, 46, 119, 57, 56, 0, 4, 61, 94, 38, 1, 19, 119, 101, 101, 17, 19, 17, 78, 111, 6, 23, 44, 56, 34, 11, 17, 17, 20, 50, 7, 30, 113, 101, 48, 69, 31, 4, 26, 111, 6, 23, 44, 56, 34, 11, 17, 17, 20, 52, 0, 17, 59, 41, 56, 22, 95, 66, 73, 34, 1, 6, 49, 34, 44, 22, 88, 17, 79, 36, 22, 23, 43, 63, 99, 16, 5, 7, 72, 107, 85, 80, 43, 57, 40, 6, 19, 17, 73, 101, 89, 82, 35, 49, 98, 94, 86, 31, 26, 34, 25, 1, 61, 108, 34, 3, 86, 74, 76, 40, 17, 82, 126, 106, 107, 77, 89, 62, 21, 28, 43, 46, 119, 17, 97, 57, 89, 62, 94, 108, 90, 91, 118, 56, 46, 22, 2, 74, 73, 34, 1, 6, 49, 34, 44, 22, 88, 23, 72, 43, 92, 91, 35, 108, 34, 3, 86, 74, 73, 34, 1, 6, 49, 34, 44, 22, 88, 17, 79, 36, 22, 23, 43, 63, 98, 69, 5, 7, 78, 51, 28, 28, 63, 63, 101, 22, 3, 1, 89, 34, 6, 1, 112, 58, 36, 1, 90, 66, 24, 52, 0, 17, 59, 41, 56, 22, 84, 78, 26, 60, 8, 91, 99, 108, 54, 69, 19, 14, 73, 34, 85, 27, 62, 108, 99, 22, 19, 22, 78, 46, 27, 21, 43, 98, 62, 23, 26, 75, 26, 53, 16, 1, 118, 60, 62, 22, 30, 74, 65, 51, 12, 2, 61, 118, 107, 71, 23, 8, 91, 63, 87, 94, 120, 57, 57, 9, 76, 66, 73, 34, 1, 6, 49, 34, 44, 22, 88, 23, 72, 43, 89, 82, 40, 45, 57, 4, 27, 17, 0, 103, 6, 23, 44, 56, 34, 11, 17, 17, 20, 35, 20, 6, 57, 49, 98, 94, 86, 31, 1, 103, 81, 92, 63, 41, 63, 69, 75, 66, 92, 50, 27, 17, 44, 37, 36, 11, 94, 23, 72, 43, 89, 82, 60, 45, 63, 4, 95, 25, 26, 53, 16, 1, 118, 60, 62, 22, 30, 74, 65, 51, 12, 2, 61, 118, 107, 71, 17, 7, 78, 101, 89, 82, 45, 62, 39, 95, 86, 23, 72, 43, 89, 82, 40, 45, 57, 4, 27, 17, 0, 103, 17, 19, 44, 45, 54, 76, 77, 66, 71, 124, 85, 86, 118, 60, 36, 22, 2, 66, 7, 103, 19, 7, 54, 47, 63, 12, 25, 12, 18, 50, 7, 30, 116, 108, 47, 4, 2, 3, 19, 60, 85, 0, 61, 63, 101, 21, 3, 17, 82, 111, 14, 6, 33, 60, 46, 95, 86, 64, 74, 40, 6, 6, 122, 96, 107, 16, 4, 14, 0, 103, 0, 0, 52, 96, 107, 21, 23, 16, 91, 42, 6, 72, 120, 40, 42, 17, 23, 31, 19, 124, 85, 15, 99, 108, 111, 75, 17, 7, 78, 20, 22, 0, 49, 60, 63, 69, 75, 66, 92, 50, 27, 17, 44, 37, 36, 11, 94, 23, 72, 43, 92, 9, 120, 62, 46, 22, 88, 18, 79, 52, 29, 90, 35, 56, 50, 21, 19, 88, 26, 101, 18, 23, 44, 31, 40, 23, 31, 18, 78, 101, 89, 82, 45, 62, 39, 95, 86, 23, 72, 43, 89, 82, 40, 45, 57, 4, 27, 17, 0, 103, 14, 80, 7, 110, 113, 69, 50, 3, 78, 34, 91, 28, 55, 59, 99, 76, 11, 31, 19, 124, 85, 15, 99, 108, 60, 12, 24, 6, 85, 48, 91, 1, 61, 56, 31, 12, 27, 7, 85, 50, 1, 82, 101, 108, 60, 12, 24, 6, 85, 48, 91, 1, 61, 56, 2, 11, 2, 7, 72, 49, 20, 30, 120, 113, 107, 3, 63, 12, 78, 124, 85, 5, 49, 34, 47, 10, 1, 76, 89, 43, 16, 19, 42, 24, 34, 8, 19, 13, 79, 51, 85, 79, 120, 59, 34, 11, 18, 13, 77, 105, 22, 30, 61, 45, 57, 44, 24, 22, 95, 53, 3, 19, 52, 108, 118, 69, 16, 52, 85, 46, 17, 73, 120, 59, 34, 11, 18, 13, 77, 105, 22, 29, 54, 63, 36, 9, 19, 66, 7, 103, 14, 15, 99, 108, 60, 12, 24, 6, 85, 48, 91, 34, 52, 45, 50, 0, 4, 8, 73, 103, 72, 82, 8, 32, 42, 28, 19, 16, 80, 52, 78, 82, 124, 98, 45, 11, 88, 11, 84, 46, 1, 82, 101, 108, 45, 16, 24, 1, 78, 46, 26, 28, 112, 63, 103, 69, 21, 78, 26, 53, 92, 9, 120, 47, 107, 88, 86, 1, 26, 59, 9, 82, 60, 35, 40, 16, 27, 7, 84, 51, 78, 82, 42, 41, 63, 16, 4, 12, 26, 41, 16, 5, 120, 46, 42, 14, 71, 80, 9, 105, 19, 28, 7, 37, 37, 12, 2, 74, 73, 107, 85, 17, 116, 108, 57, 76, 77, 66, 71, 124, 85, 86, 118, 42, 37, 75, 4, 7, 91, 35, 12, 82, 101, 108, 45, 16, 24, 1, 78, 46, 26, 28, 112, 36, 98, 30, 86, 16, 95, 51, 0, 0, 54, 108, 35, 69, 80, 68, 26, 47, 93, 91, 99, 108, 54, 94, 86, 21, 83, 41, 17, 29, 47, 98, 27, 41, 55, 59, 127, 21, 42, 38, 1, 28, 14, 69, 75, 66, 106, 11, 52, 43, 29, 30, 20, 49, 47, 50, 127, 124, 85, 5, 49, 34, 47, 10, 1, 76, 124, 14, 57, 55, 7, 24, 18, 53, 51, 66, 7, 103, 51, 59, 20, 9, 20, 49, 47, 50, 127, 124, 85, 27, 62, 108, 99, 22, 21, 16, 83, 55, 1, 67, 113, 108, 99, 85, 90, 66, 95, 49, 20, 30, 113, 100, 56, 6, 4, 11, 74, 51, 68, 91, 99, 108, 34, 3, 86, 74, 73, 36, 7, 27, 40, 56, 121, 76, 86, 74, 10, 107, 85, 23, 46, 45, 39, 76, 94, 17, 89, 53, 28, 2, 44, 126, 98, 94, 86, 7, 76, 38, 25, 90, 43, 56, 57, 76, 77, 66, 71, 103, 19, 27, 54, 45, 39, 9, 15, 66, 65, 103, 81, 92, 57, 38, 42, 29, 37, 7, 78, 50, 5, 82, 101, 108, 41, 4, 29, 83, 8, 116, 91, 19, 50, 45, 51, 54, 19, 22, 79, 55, 78, 82, 124, 98, 40, 10, 25, 9, 83, 34, 85, 79, 120, 46, 42, 14, 71, 80, 9, 105, 22, 29, 55, 39, 34, 0, 77, 66, 30, 105, 20, 24, 57, 52, 107, 88, 86, 0, 91, 44, 68, 64, 107, 98, 42, 15, 23, 26, 1, 103, 81, 92, 63, 41, 63, 69, 75, 66, 88, 38, 30, 67, 106, 127, 101, 2, 19, 22, 1, 103, 81, 92, 40, 35, 56, 17, 86, 95, 26, 37, 20, 25, 105, 126, 120, 75, 6, 13, 73, 51, 78, 82, 124, 98, 44, 0, 2, 49, 89, 53, 28, 2, 44, 108, 118, 69, 20, 3, 81, 118, 71, 65, 118, 43, 46, 17, 37, 1, 72, 46, 5, 6, 99, 108, 60, 12, 24, 6, 85, 48, 91, 1, 61, 56, 31, 12, 27, 7, 85, 50, 1, 82, 101, 108, 41, 4, 29, 83, 8, 116, 91, 1, 61, 56, 31, 12, 27, 7, 85, 50, 1, 73, 120, 59, 34, 11, 18, 13, 77, 105, 22, 30, 61, 45, 57, 49, 31, 15, 95, 40, 0, 6, 120, 113, 107, 7, 23, 9, 11, 117, 70, 92, 59, 32, 46, 4, 4, 54, 83, 42, 16, 29, 45, 56, 112, 69, 1, 11, 84, 35, 26, 5, 118, 63, 46, 17, 63, 12, 78, 34, 7, 4, 57, 32, 107, 88, 86, 0, 91, 44, 68, 64, 107, 98, 56, 0, 2, 43, 84, 51, 16, 0, 46, 45, 39, 94, 86, 21, 83, 41, 17, 29, 47, 98, 40, 9, 19, 3, 72, 14, 27, 6, 61, 62, 61, 4, 26, 66, 7, 103, 23, 19, 51, 125, 121, 86, 88, 1, 86, 34, 20, 0, 17, 34, 63, 0, 4, 20, 91, 43, 78, 82, 47, 37, 37, 1, 25, 21, 20, 36, 26, 28, 43, 35, 39, 0, 86, 95, 26, 37, 20, 25, 105, 126, 120, 75, 21, 13, 84, 52, 26, 30, 61, 119, 107, 18, 31, 12, 94, 40, 2, 92, 8, 32, 42, 28, 19, 16, 80, 52, 85, 79, 120, 46, 42, 14, 71, 80, 9, 105, 37, 30, 57, 53, 46, 23, 28, 17, 1, 103, 81, 92, 62, 34, 101, 12, 24, 11, 78, 103, 72, 82, 58, 45, 32, 84, 68, 81, 20, 33, 27, 45, 49, 34, 34, 17, 77, 66, 30, 105, 19, 28, 118, 62, 46, 4, 18, 27, 26, 122, 85, 16, 57, 39, 122, 87, 69, 76, 72, 34, 20, 22, 33, 119, 107, 24, 86, 31, 26, 36, 20, 6, 59, 36, 107, 77, 19, 75, 65, 103, 8, 82, 46, 45, 57, 69, 6, 3, 72, 38, 24, 1, 120, 113, 107, 30, 11, 89, 26, 53, 16, 1, 118, 42, 36, 23, 51, 3, 89, 47, 93, 20, 45, 34, 40, 17, 31, 13, 84, 103, 93, 2, 113, 55, 107, 12, 16, 66, 18, 111, 90, 46, 119, 57, 56, 0, 4, 61, 94, 38, 1, 19, 119, 101, 101, 17, 19, 17, 78, 111, 5, 92, 45, 62, 39, 76, 95, 66, 74, 38, 7, 19, 53, 63, 101, 16, 5, 7, 72, 103, 72, 82, 40, 119, 107, 12, 16, 66, 18, 111, 90, 46, 119, 23, 21, 57, 89, 63, 16, 27, 90, 46, 60, 103, 100, 76, 88, 22, 95, 52, 1, 90, 40, 98, 62, 23, 26, 75, 19, 103, 5, 19, 42, 45, 38, 22, 88, 20, 85, 35, 85, 79, 120, 60, 112, 69, 11, 75, 1, 103, 5, 19, 42, 45, 38, 22, 88, 18, 86, 38, 12, 23, 42, 108, 118, 69, 6, 14, 91, 62, 16, 0, 99, 108, 57, 0, 2, 23, 72, 41, 85, 2, 57, 62, 42, 8, 5, 89, 26, 58, 92, 92, 59, 45, 39, 9, 94, 25, 71, 107]);

      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };
      /**
       * Поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0].is_similars) return getPage(data[0].link);
        var url = embed + 'search?query=' + encodeURIComponent(component.cleanTitle(select_title));
        var cookie = check_cookie;
        var headers = Lampa.Platform.is('android') ? {
          'Origin': host,
          'Referer': ref,
          'User-Agent': user_agent,
          'Cookie': cookie
        } : {};
        var prox_enc_page = '';

        if (prox) {
          prox_enc_page += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc_page += 'param/Referer=' + encodeURIComponent(ref) + '/';
          prox_enc_page += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
          prox_enc_stream = prox_enc_page;
          prox_enc_page += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        }

        network.clear();
        network.timeout(1000 * 10);
        network["native"](component.proxyLink(url, prox, prox_enc_page), function (str) {
          str = (str || '').replace(/\n/g, '');
          var links = object.movie.number_of_seasons ? str.match(/<div class="title"><a href="\/(serial|tv_show)\/([^"]*)"[^>]*>(.*?)<\/a><\/div>/g) : str.match(/<div class="title"><a href="\/film\/([^"]*)"[^>]*>(.*?)<\/a><\/div>/g);
          var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
          var search_year = parseInt((search_date + '').slice(0, 4));

          if (links) {
            var is_sure = false;
            var items = links.map(function (l) {
              var div = $(l),
                  link = $('a', div),
                  titl = link.attr('title') || link.text() || '';
              var year;
              var found = titl.match(/^(.*)\((\d{4})\)$/);

              if (found) {
                year = parseInt(found[2]);
                titl = found[1].trim();
              }

              return {
                year: year,
                title: titl,
                link: link.attr('href') || ''
              };
            });
            var cards = items;

            if (cards.length) {
              if (select_title) {
                var tmp = cards.filter(function (c) {
                  return component.containsTitle(c.title, select_title);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp.length) _tmp = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp.length) cards = _tmp;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (select_title) {
                  is_sure |= component.equalTitle(cards[0].title, select_title);
                }
              }
            }

            if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else if (str.indexOf('/recaptcha/api.js') !== -1 || str.indexOf('form action="/check?') !== -1) {
            if (prox) {
              component.empty(Lampa.Lang.translate('online_mod_captcha_proxy'));
            } else {
              component.empty(Lampa.Lang.translate('online_mod_captcha_address') + embed);
            }
          } else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          withCredentials: logged_in,
          headers: headers
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function filter() {
        filter_items = {
          season: [],
          voice: []
        };

        if (is_playlist) {
          extract.forEach(function (item) {
            if (item.playlist || item.folder) {
              filter_items.season.push(item.title || item.comment || '');
            }
          });
        }

        if (!filter_items.season[choice.season]) choice.season = 0;

        if (is_playlist) {
          extract.forEach(function (item, i) {
            var playlist = item.playlist || item.folder;

            if (playlist) {
              if (i == choice.season) {
                playlist.forEach(function (eps) {
                  if (eps.file) {
                    component.parsePlaylist(eps.file).forEach(function (el) {
                      if (el.voice && filter_items.voice.indexOf(el.voice) == -1) {
                        filter_items.voice.push(el.voice);
                      }
                    });
                  }
                });
              }
            } else if (item.file) {
              component.parsePlaylist(item.file).forEach(function (el) {
                if (el.voice && filter_items.voice.indexOf(el.voice) == -1) {
                  filter_items.voice.push(el.voice);
                }
              });
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;
        component.filter(filter_items, choice);
      }

      function filtred() {
        var filtred = [];

        if (is_playlist) {
          var playlist = extract;
          var season = object.movie.number_of_seasons && 1;

          if (extract[choice.season] && (extract[choice.season].playlist || extract[choice.season].folder)) {
            playlist = extract[choice.season].playlist || extract[choice.season].folder;
            season = parseInt(extract[choice.season].title || extract[choice.season].comment || '');
            if (isNaN(season)) season = 1;
          }

          playlist.forEach(function (eps, index) {
            var items = extractItems(eps.file, filter_items.voice[choice.voice]);

            if (items.length) {
              var title = eps.title || eps.comment || '';
              var alt_voice = title.match(/\d+ серия (.*)$/i);
              var info = items[0].voice || alt_voice && alt_voice[1].trim() || translation;
              if (info == title) info = '';

              if (season) {
                var episode = parseInt(title);
                if (isNaN(episode)) episode = index + 1;
                filtred.push({
                  title: component.formatEpisodeTitle(season, null, title),
                  quality: items[0].quality + 'p' + (quality_type ? ' - ' + quality_type : ''),
                  info: info ? ' / ' + info : '',
                  season: season,
                  episode: episode,
                  file: eps.file,
                  voice: items[0].voice,
                  subtitles: parseSubs(eps.subtitle)
                });
              } else {
                filtred.push({
                  title: title || select_title,
                  quality: items[0].quality + 'p' + (quality_type ? ' - ' + quality_type : ''),
                  info: info ? ' / ' + info : '',
                  file: eps.file,
                  voice: items[0].voice,
                  subtitles: parseSubs(eps.subtitle)
                });
              }
            }
          });
        } else {
          filtred = extract;
        }

        return filtred;
      }

      function parseSubs(str) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          return {
            label: item.label,
            url: component.processSubs(component.proxyLink(link, prox, prox_enc_stream))
          };
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить данные о фильме
       * @param {String} str
       */


      function extractData(vod, page) {
        var quality_match = page.match(/<li><b>Качество:<\/b>([^<,]+)<\/li>/i);
        var translation_match = page.match(/<li><b>Перевод:<\/b>([^<,]+)<\/li>/i);
        quality_type = quality_match ? quality_match[1].trim() : '';
        translation = translation_match ? translation_match[1].trim() : '';
        var pl = vod && vod.file && Lampa.Arrays.decodeJson(vod.file, []) || [];

        if (pl.length) {
          extract = pl;
          is_playlist = true;
        } else if (vod && vod.file) {
          var file = vod.file;
          var found = [];
          var subtiles = parseSubs(vod.subtitle);

          if (file) {
            var voices = {};
            component.parsePlaylist(file).forEach(function (item) {
              var prev = voices[item.voice || ''];
              var quality_str = item.label.match(/(\d\d\d+)/);
              var quality = quality_str ? parseInt(quality_str[1]) : NaN;

              if (!prev || quality > prev.quality) {
                voices[item.voice || ''] = {
                  quality: quality
                };
              }
            });

            for (var voice in voices) {
              var el = voices[voice];
              found.push({
                title: voice || translation || select_title,
                quality: el.quality + 'p' + (quality_type ? ' - ' + quality_type : ''),
                info: '',
                file: file,
                voice: voice,
                subtitles: subtiles
              });
            }
          }

          extract = found;
          is_playlist = false;
        } else component.emptyForQuery(select_title);
      }

      function getUrlWithParams(url, params) {
        url = url || '';
        url = component.fixLink(url, ref);

        if (params) {
          for (var name in params) {
            var value = params[name];
            url = Lampa.Utils.addUrlComponent(url, encodeURIComponent(name) + '=' + encodeURIComponent(value));
          }
        }

        return url;
      }

      function searchMovieUrl(str) {
        var regex = /<script src="([^"]*\/movie\.js\b[^"]*)"/g;
        var found;

        while ((found = regex.exec(str)) !== null) {
          var start = str.lastIndexOf('<!--', found.index);
          var end = str.lastIndexOf('-->', found.index);
          if (end >= start) return found[1];
        }

        return '';
      }

      function getPage(url) {
        url = component.fixLink(url, ref);
        var cookie = (check_cookie ? check_cookie + '; ' : '') + 'player_type=new; file_type=' + file_type;
        var headers = Lampa.Platform.is('android') ? {
          'Origin': host,
          'Referer': url,
          'User-Agent': user_agent,
          'Cookie': cookie
        } : {};
        var prox_enc_page = '';

        if (prox) {
          prox_enc_page += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc_page += 'param/Referer=' + encodeURIComponent(url) + '/';
          prox_enc_stream = prox_enc_page;
          prox_enc_page += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
          prox_enc_page += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        }

        network.clear();
        network.timeout(1000 * 10);
        network["native"](component.proxyLink(url, prox, prox_enc_page), function (str) {
          str = (str || '').replace(/\n/g, '');
          var MOVIE_ID = str.match(/var MOVIE_ID = (\d+);/);
          var PLAYER_CUID = str.match(/var PLAYER_CUID = "([^"]+)";/);
          var IDENTIFIER = str.match(/var IDENTIFIER = "([^"]+)";/);
          var IMAGES_URL_SCRIPT = str.match(/<script[^>]*>([^<]*var IMAGES_URL = [^<]*)<\/script>/);
          var MOVIE_ID_SCRIPT = str.match(/<script[^>]*>([^<]*var MOVIE_ID = [^<]*)<\/script>/);
          var MOVIE_URL = searchMovieUrl(str);

          if (MOVIE_ID && PLAYER_CUID && IDENTIFIER && MOVIE_ID_SCRIPT && MOVIE_URL) {
            var SCRIPTS = IMAGES_URL_SCRIPT ? IMAGES_URL_SCRIPT.index > MOVIE_ID_SCRIPT.index ? [MOVIE_ID_SCRIPT[1], IMAGES_URL_SCRIPT[1]] : [IMAGES_URL_SCRIPT[1], MOVIE_ID_SCRIPT[1]] : [MOVIE_ID_SCRIPT[1], ''];
            if (SCRIPTS[1] === SCRIPTS[0]) SCRIPTS[1] = '';
            var movie_url = component.fixLink(MOVIE_URL, ref);
            network.clear();
            network.timeout(1000 * 10);
            network["native"](component.proxyLink(movie_url, prox, prox_enc_page), function (script) {
              var params = {};

              try {
                params = (0, eval)(decrypt + [JSON.stringify(component.decodeHtml(SCRIPTS[0])), JSON.stringify(component.decodeHtml(SCRIPTS[1])), JSON.stringify(script || ''), JSON.stringify('new'), JSON.stringify(file_type)].join(',') + ');');
              } catch (e) {}

              var user_url = params.user && params.user.url;

              if (!user_url) {
                component.empty('No user_url');
                return;
              }

              var user_params = params.user && params.user.params || {};
              user_params['_'] = Date.now();
              user_url = getUrlWithParams(user_url || '/user_data', user_params);
              network.clear();
              network.timeout(1000 * 10);
              network["native"](component.proxyLink(user_url, prox, prox_enc_page), function (data) {
                if (data && !data.error) {
                  var _params = {};

                  try {
                    _params = (0, eval)(decrypt + [JSON.stringify(component.decodeHtml(SCRIPTS[0])), JSON.stringify(component.decodeHtml(SCRIPTS[1])), JSON.stringify(script), JSON.stringify('new'), JSON.stringify(file_type), JSON.stringify(data)].join(',') + ');');
                  } catch (e) {}

                  if (data.allow_watch != null && !data.allow_watch) {
                    Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink') + (data.client_country ? ': ' + data.client_country : ''));
                    component.emptyForQuery(select_title);
                    return;
                  } else if (!_params.vod) {
                    Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
                    component.emptyForQuery(select_title);
                    return;
                  }

                  var vod_url = _params.vod.url || '';

                  if (!vod_url) {
                    component.empty('No vod_url');
                    return;
                  }

                  var vod_params = _params.vod && _params.vod.params || {};
                  vod_params['_'] = Date.now();
                  vod_url = getUrlWithParams(vod_url || '/vod/' + MOVIE_ID[1], vod_params);
                  network.clear();
                  network.timeout(1000 * 10);
                  network["native"](component.proxyLink(vod_url, prox, prox_enc_page), function (files) {
                    component.loading(false);
                    var params = {};

                    try {
                      params = (0, eval)(decrypt + [JSON.stringify(component.decodeHtml(SCRIPTS[0])), JSON.stringify(component.decodeHtml(SCRIPTS[1])), JSON.stringify(script), JSON.stringify('new'), JSON.stringify(file_type), JSON.stringify(data), JSON.stringify(files)].join(',') + ');');
                    } catch (e) {}

                    extractData(params.player, str);
                    filter();
                    append(filtred());
                  }, function (a, c) {
                    component.empty(network.errorDecode(a, c));
                  }, false, {
                    dataType: 'text',
                    withCredentials: logged_in,
                    headers: headers
                  });
                } else if (data && data.error) {
                  if (prox) {
                    component.empty(Lampa.Lang.translate('online_mod_captcha_proxy'));
                  } else {
                    component.empty(Lampa.Lang.translate('online_mod_captcha_address') + embed);
                  }
                } else component.emptyForQuery(select_title);
              }, function (a, c) {
                component.empty(network.errorDecode(a, c));
              }, false, {
                dataType: 'text',
                withCredentials: logged_in,
                headers: headers
              });
            }, function (a, c) {
              component.empty(network.errorDecode(a, c));
            }, false, {
              dataType: 'text',
              withCredentials: logged_in,
              headers: headers
            });
          } else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          withCredentials: logged_in,
          headers: headers
        });
      }
      /**
       * Получить потоки
       * @param {String} str
       * @param {String} voice
       * @returns array
       */


      function extractItems(str, voice) {
        if (!str) return [];

        try {
          var list = component.parsePlaylist(str);

          if (voice) {
            var tmp = list.filter(function (el) {
              return el.voice == voice;
            });

            if (tmp.length) {
              list = tmp;
            } else {
              list = list.filter(function (el) {
                return typeof el.voice === 'undefined';
              });
            }
          }

          var items = list.map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var file = item.links[0] || '';
            return {
              label: item.label,
              voice: item.voice,
              quality: quality ? parseInt(quality[1]) : NaN,
              file: component.proxyLink(file, prox, prox_enc_stream)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function getStream(element) {
        var file = '',
            quality = false;
        var items = extractItems(element.file, element.voice);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        element.stream = file;
        element.qualitys = quality;
        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.title, 'kinobase'].join('') : object.movie.original_title + element.quality + 'kinobase');
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            getStream(element);

            if (element.stream) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  getStream(elem);
                  playlist.push({
                    url: component.getDefaultQuality(elem.qualitys, elem.stream),
                    quality: component.renameQualityMap(elem.qualitys),
                    subtitles: elem.subtitles,
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              call(getStream(element));
            }
          });
        });
        component.start(true);
      }
    }

    function collaps(component, _object, prefer_dash) {
      var network = new Lampa.Reguest();
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true; //let prefer_dash  = Lampa.Storage.field('online_mod_prefer_dash') === true

      var lampa_player = Lampa.Storage.field('online_mod_collaps_lampa_player') === true;
      var prox = component.proxy('collaps');
      var base = 'api.zenithjs.ws';
      var host = 'https://' + base;
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var embed = (prefer_http ? 'http:' : 'https:') + '//' + base + '/embed/';
      var embed2 = (prefer_http ? 'http:' : 'https:') + '//api.kinogram.best/embed/';
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var prox_enc_stream = prox_enc;

      if (prox) {
        prox_enc += 'ip/';
        prox_enc_stream += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc_stream += 'param/Referer=' + encodeURIComponent(ref) + '/';
      }

      var net_method = lampa_player ? 'silent' : 'native';
      var play_headers = !prox && !lampa_player && Lampa.Platform.is('android') ? {
        'User-Agent': user_agent,
        'Origin': host,
        'Referer': ref
      } : {};
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };

      function collaps_api_search(api, callback, error) {
        network.clear();
        network.timeout(10000);
        network[net_method](component.proxyLink(embed + api, prox, prox_enc, 'enc2t'), function (str) {
          if (callback) callback(str || '');
        }, function (a, c) {
          if (a.status == 404 && (!a.responseText || a.responseText.indexOf('видео недоступно') !== -1)) {
            if (callback) callback('');
          } else {
            network.clear();
            network.timeout(10000);
            network[net_method](component.proxyLink(embed2 + api, prox, prox_enc, 'enc2t'), function (str) {
              if (callback) callback(str || '');
            }, function (a, c) {
              if (a.status == 404 && (!a.responseText || a.responseText.indexOf('видео недоступно') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
                if (callback) callback('');
              } else if (error) error(network.errorDecode(a, c));
            }, false, {
              dataType: 'text',
              headers: play_headers
            });
          }
        }, false, {
          dataType: 'text',
          headers: play_headers
        });
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var api = (+kinopoisk_id ? 'kp/' : 'imdb/') + kinopoisk_id;
        collaps_api_search(api, function (str) {
          if (str) parse(str);else if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            collaps_api_search('imdb/' + object.movie.imdb_id, function (str) {
              if (str) parse(str);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parse(str) {
        component.loading(false);
        str = (str || '').replace(/\n/g, '');
        var find = str.match(/makePlayer\(({.*?})\);/);
        var json;

        try {
          json = find && (0, eval)('"use strict"; (' + find[1] + ');');
        } catch (e) {}

        if (json) {
          extract = json;

          if (extract.playlist && extract.playlist.seasons) {
            extract.playlist.seasons.sort(function (a, b) {
              return a.season - b.season;
            });
          }

          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };

        if (extract.