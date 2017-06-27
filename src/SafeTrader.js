var js = {
	version: '1.1.7_als',
	rootUrl: 'https://rawgit.com/il86/SafeTrader/master/src/',
	context: this,
	versioninig: false
}

/**
 * From prototype.js. Can't live without them
 */
function $(element) {
  if (arguments.length > 1) {
    for (var i = 0, elements = [], length = arguments.length; i < length; i++)
      elements.push($(arguments[i]));
    return elements;
  }
  if (typeof element == 'string')
    element = document.getElementById(element);
  return element;
}

Function.prototype.bind = function() {
  var __method = this;
  var object = arguments[0];
  return function() {
    return __method.apply(object);
  }
}

Object.extend = function(destination, source) {
  for (var property in source) {
    destination[property] = source[property];
  }
  return destination;
}

js.getXHTTPTransport = function() {
	var result = false;
	var actions = [
      function() {return new XMLHttpRequest()},
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')}
    ];
    for(var i = 0; i < actions.length; i++) {
    	try{
    		result = actions[i]();
    		break;
    	} catch (e) {}	
    }
    return result;
 }
 
/**
 * @param {Object} object
 * @param {String} name
 * @param {Object?} value
 * @param {bool?} forceSet
 */
js.evalProperty = function(object, name, value, forceSet) {
	if(object) {
		if(!object[name] || forceSet) object[name] = value || true;
		return object[name];
	}
	return null;
}
/**
 * @param {String} path
 * @param {Object?} context
 * @param {Object?} value
 * @param {bool?} forceSet
 */
js.evalPath = function(path, context, value, forceSet) {
	context = context || js.context;
	var pos = path.indexOf('.');
	if(pos == -1) {
		return js.evalProperty(context, path, value, forceSet);
	} else {
		var name = path.substring(0, pos);
		var path = path.substring(pos + 1);
		var obj = js.evalProperty(context, name, value);
		return js.evalPath(path, obj, value, forceSet);
	}
}

/**
 * @param {String} path
 * @param {float} version
 * @return {String}
 */
js.pathToUrl = function(path, version) {
	return js.rootUrl + path.replace(/\./g, '/') + 
		(js.versioninig ? '.v' + version : '') + '.js';	
}
/**
 * @type {Array}
 */
js.loadedModules = {};

/**
 * @param {String} path
 * @param {float} version
 */
js.module = function(path, version) {
	version = version || 1.0;
	js.loadedModules[path] = js.loadedModules[path] ? Math.max(js.loadedModules[path], version) : version;
	return js.evalPath(path, null, {});
}


/**
 * @param {String} path
 * @param {float} version
 */
js.include = function(path, version) {
	version = version || 1.0;
	if(js.loadedModules[path] && js.loadedModules[path] >= version) return false;
	var transport = js.getXHTTPTransport();
	transport.open('GET', js.pathToUrl(path, version), false);
	transport.send(null);
	
	var code = transport.responseText;
	(typeof execScript != 'undefined') ? execScript(code) : 
		(js.context.eval ? js.context.eval(code) : eval(code));
	return true;
}
js.load = js.include;

/**
 * @param {String} newClass
 * @param {Object} superClass
 * @param {Object} props
 */
js.extend = function(newClass, superClass, props) {
	var multiple = [];
	if(superClass instanceof Array || typeof superClass == 'array') {
		multiple = superClass;
		superClass = multiple.shift();
	}
	if(typeof newClass == 'string') {
		newClass = js.evalPath(newClass, null, js.createClass(), 1);
	} else {
		return;
	}
	
	if(superClass) {
		var inheritance = function() {};
		inheritance.prototype = superClass.prototype;
		
		newClass.prototype = new inheritance();
		newClass.superClass = superClass.prototype;
	}	 
	for(var i = 0; i < multiple.length; i++) {
		Object.extend(newClass.prototype, multiple[i].prototype);
	}
	newClass.mixins = multiple;
	
	Object.extend(newClass.prototype, props || {});
	
	newClass.prototype.constructor = newClass;
}
js.define = js.extend;

js.createClass = function() {
    return function() {
		var _this = arguments.callee.prototype;
		_this.init.apply(this, arguments);
		for(var i = 0, mixins = _this.constructor.mixins, length = mixins.length; i < length; i++){
			mixins[i].init.apply(this);
		}
    }
}

js.hasOwnProperty = function(obj, prop) {
        if (Object.prototype.hasOwnProperty) {
            return obj.hasOwnProperty(prop);
        }
        
        return typeof obj[prop] != 'undefined' && 
                obj.constructor.prototype[prop] !== obj[prop];
}

js.dump = function(text){};
js.error = function(text){};

restorejs = function(obj) {
	return function() {
		window.js = obj;
	}
}(js);

/////

js.include('cookie');

var _prot = "",
    _host = "",
    _path = "",
    _args = "",
    _page = "",
    _user = "",
    _loader = null;
    _feedbackType = "",
    _switches = [],
    _usersdata = {},
    _flagged = {},
    _settings = [],
    _tables = null,
    _mainDiv = null,
    _currency = "",
    _loggedin = !1,
    _blurNicks = !1,
    _seller = "Seller|Vendedor|Vendeur|Venditore|\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446|Vendedor|\u5356\u5bb6",
    _buyer = "Buyer|Comprador|Acheteur|Acquirente|\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c|Comprador|\u4e70\u5bb6",
    _trader = "Trader|Comerciante|\u00c9changer|Trader|\u0422\u0440\u0435\u0439\u0434\u0435\u0440|Negociante|\u4ea4\u6613\u5458",
    savedSettings = lbcGetCookie("st-data"),
    flags = lbcGetCookie("st-data-flagged");
flags && (_flagged = JSON.parse(lbcGetCookie("st-data-flagged")));
if (void 0 != savedSettings) {
    var sets = JSON.parse(savedSettings),
        v;
    for (v in sets) _settings[v] = sets[v]
} else _settings.showDetailedResults = !0, _settings.keepMeActive = !1, _settings.showCurrencyChart = !0, _settings.loadTraderDetails = !1, _settings.loadTraderFeedback = !1, _settings.showFilter = !0, _settings.filterTrustedOnly = !1, _settings.filterOnlineOnly = !1, _settings.filterHideNegative = !1, _settings.hideSuspiciousTraders = !1, _settings.filterRecentOnly = !1;
void 0 == _settings.limitLow && (_settings.limitLow = 0);
void 0 == _settings.limitHigh && (_settings.limitHigh = 0);
var parser = {
        price: function(a) {
            a = a.split(" ");
            return {
                value: parseFloat(a[0]),
                currency: a[1]
            }
        },
        limits: function(a) {
            a = a.split(" ");
            return 4 == a.length ? {
                low: parseFloat(a[0]),
                high: parseFloat(a[2]),
                currency: a[3]
            } : {
                low: 0,
                high: 0,
                currency: ""
            }
        },
        distance: function(a) {
            a = a.split(" ");
            return {
                value: parseFloat(a[0]),
                unit: a[1]
            }
        },
        seconds: function(a) {
            return {
                years: Math.floor(a / 31536E3),
                days: Math.floor(a % 31536E3 / 86400),
                hours: Math.floor(a % 31536E3 % 86400 / 3600),
                minutes: Math.floor(a % 31536E3 % 86400 % 3600 / 60),
                seconds: Math.floor(a %
                    31536E3 % 86400 % 3600 % 60)
            }
        },
        humanTime: function(a) {
            var b = [];
            0 < a.years ? (b.push(a.years + "y"), 0 < a.days && b.push(a.days + "d")) : (0 < a.days && b.push(a.days + "d"), 0 < a.hours && b.push(a.hours + "h"), 7 > a.days && (0 < a.minutes && b.push(a.minutes + "m"), 0 < a.seconds && b.push(a.seconds + "s")), 0 == b.length && b.push("0s"));
            return b.join(", ")
        },
        parseTime: function(a) {
            a = a.replace(".", "").replace(",", "").replace(" a.m.", "").replace(" p.m.", "");
            var b = new Date;
            b.setTime(Date.parse(a));
            return b
        },
        feedback: function(a) {
            var b = {
                rating: 0,
                lowVolume: !1,
                text: ""
            };
            a.match(/(<i class="fa fa-thumbs-o-up"><\/i>)/g) && (b.rating = 1);
            a.match(/(<i class="fa fa-thumbs-o-down"><\/i>)/g) && (b.rating = -1);
            a.match(/(<span.*class=".*label-warning">.*<\/span>)/g) && (b.lowVolume = !0);
            b.text = this.stripHtml(a);
            return b
        },
        stripHtml: function(a) {
            return a.replace(/<.*>(.*)<\/.*>/gi, "").replace(/(<([^>]+)>)/gi, "").replace(/^\s*|\s*$/g, "")
        },
        getResponse: function(a, b, d) {
            var c = null;
            $.ajax({
                url: a,
                type: b,
                data: d,
                dataType: "html",
                async: !1,
                success: function(a) {
                    c = a
                }
            });
            return c
        },
        getJSON: function(a,
            b, d) {
            var c = null;
            $.ajax({
                url: a,
                type: b,
                data: d,
                dataType: "json",
                async: !1,
                success: function(a) {
                    c = a
                }
            });
            return c
        },
        date8601: function(a) {
            var b = new Date;
            a = a.match(/([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?/);
            if (null == a) return null;
            var d = 0,
                c = new Date(a[1], 0, 1);
            a[3] && c.setMonth(a[3] - 1);
            a[5] && c.setDate(a[5]);
            a[7] && c.setHours(a[7]);
            a[8] && c.setMinutes(a[8]);
            a[10] && c.setSeconds(a[10]);
            a[12] && c.setMilliseconds(1E3 * Number("0." + a[12]));
            a[14] && (d = 60 * Number(a[16]) + Number(a[17]), d *= "-" == a[15] ? 1 : -1);
            d -= c.getTimezoneOffset();
            time = Number(c) + 6E4 * d;
            b.setTime(Number(time));
            return b
        }
    },
    sSiteDomain = null,
    sProtocol = null,
    sCurrentURL = null,
    sPath = null,
    sArgs = null;
null == sSiteDomain && (sSiteDomain = window.location.host, sProtocol = window.location.protocol, sCurrentURL = window.location, sPath = window.location.pathname, sArgs = window.location.search);


function lbcGetLoader() {
    //var loader = parser.getResponse(window.location.protocol+ "//github.com/CryptoSoftwareSolutions/SafeTrader/blob/master/src/SafeTrader.js?" + Date.now() + "_" + encodeURIComponent(window.location), "GET", null);  
    //if(loader) {
	//_loader = loader;
    //} else {
	//alert('ERROR: Failed to load stloader component.');
    //}
}

//lbcGetLoader();

function lbcGetPageInfo() {
    window.document.title.match(/CloudFlare/g) ? lbcAttentionRequired() : (lbcJQueryEffects(), $("head").append($('<link rel="stylesheet" type="text/css" />').attr("href", "https://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css")), null == _mainDiv && (_mainDiv = document.createElement("div"), _mainDiv.id = "lbcMainDiv"), null != _mainDiv && "" == _mainDiv.innerHTML && (_mainDiv.innerHTML = document.body.innerHTML, document.body.innerHTML = "", document.body.appendChild(_mainDiv)), _loggedin =
        document.body.innerHTML.match(/nav\-logged\-in/gi) ? !0 : !1, _page = "", _prot = sProtocol, _host = sSiteDomain, _path = sPath, _args = sArgs, _path.match(/^\/?$|^\/(es|fr|it|ru|pt-br|zh-cn)\/$/g) ? _page = "MENU_HOME" : _path.match(/^\/buy_bitcoins/g) ? _page = "MENU_BUY_LIST" : _path.match(/^\/sell_bitcoins/g) ? _page = "MENU_SELL_LIST" : _path.match(/^\/buy-bitcoins-online\/?/g) ? _page = "PAGE_BUY_ONLINE_ALL" : _path.match(/^\/buy-bitcoins-with-cash\/?/g) ? _page = "PAGE_BUY_LOCAL_ALL" : _path.match(/^\/sell-bitcoins-online\/?/g) ? _page = "PAGE_SELL_ONLINE_ALL" :
        _path.match(/^\/sell-bitcoins-for-cash\/?/g) ? _page = "PAGE_SELL_LOCAL_ALL" : document.body.innerHTML.match(/Results for buying bitcoins online/g) ? _page = "SEARCH_BUY_ONLINE" : document.body.innerHTML.match(/Results for buying bitcoins with cash near/g) ? _page = "SEARCH_BUY_LOCAL" : document.body.innerHTML.match(/Results for selling bitcoins online/g) ? _page = "SEARCH_SELL_ONLINE" : document.body.innerHTML.match(/Results for selling bitcoins for cash near/g) ? _page = "SEARCH_SELL_LOCAL" : _path.match(/^\/p\/[^\/]+\/$/g) ?
        (_page = "PAGE_PROFILE", _user = _path.split("/")[2]) : _path.match(/^\/(accounts\/profile)\/[^\/]+\/$/g) ? (_page = "PAGE_PROFILE", _user = _path.split("/")[3]) : _path.match(/^\/accounts\/profile\/[^\/]+\/feedback/g) ? (_page = "PAGE_FEEDBACK", _user = _path.split("/")[3], _feedbackType = _path.split("/")[4]) : _path.match(/(^\/contact\/[^\/]*\/?$)|(^\/ads\/\d+\/\d+\/?$)/gi) ? _page = "PAGE_AD" : _path.match(/(^\/advertise\/?$)/gi) && (_page = "PAGE_ADVERTISE"), lbcSelectPage())
}

function lbcAttentionRequired() {
    alert("Please complete security check and then run script again!")
}

function lbcSelectPage() {
    console.log(_page);
    document.getElementById("navbar-site").style.transition = "background 0.5s";
    document.getElementById("navbar-site").style.backgroundColor = "#FFEE99";
    document.getElementById("id_currency") && ($('a[href="#orange_form_buy"]').on("click", function() {
            lbcChangeCurrency(document.body.querySelectorAll('select[id="id_currency"]')[0])
        }), $('a[href="#orange_form_sell"]').on("click", function() {
            lbcChangeCurrency(document.body.querySelectorAll('select[id="id_currency"]')[1])
        }),
        $('select[id="id_currency"]').on("change", function() {
            lbcChangeCurrency(this)
        }), lbcChangeCurrency(document.getElementById("id_currency")));
    var a = {};
    switch (_page) {
        case "MENU_HOME":
            _tables = lbcParsePage_Menu_Home();
            lbcCollectUsers(_tables);
            break;
        case "MENU_BUY_LIST":
            _tables = lbcParsePage_Menu_BuyList();
            lbcCollectUsers(_tables);
            break;
        case "MENU_SELL_LIST":
            _tables = lbcParsePage_Menu_SellList();
            lbcCollectUsers(_tables);
            break;
        case "PAGE_BUY_ONLINE_ALL":
            _tables = lbcParsePage_Page_BuyOnlineAll();
            lbcCollectUsers(_tables);
            break;
        case "PAGE_BUY_LOCAL_ALL":
            _tables = lbcParsePage_Page_BuyLocalAll();
            lbcCollectUsers(_tables);
            break;
        case "PAGE_SELL_ONLINE_ALL":
            _tables = lbcParsePage_Page_SellOnlineAll();
            lbcCollectUsers(_tables);
            break;
        case "PAGE_SELL_LOCAL_ALL":
            _tables = lbcParsePage_Page_SellLocalAll();
            lbcCollectUsers(_tables);
            break;
        case "SEARCH_BUY_ONLINE":
            _tables = lbcParsePage_Search_BuyOnline();
            lbcCollectUsers(_tables);
            break;
        case "SEARCH_BUY_LOCAL":
            _tables = lbcParsePage_Search_BuyLocal();
            lbcCollectUsers(_tables);
            break;
        case "SEARCH_SELL_ONLINE":
            _tables =
                lbcParsePage_Search_SellOnline();
            lbcCollectUsers(_tables);
            break;
        case "SEARCH_SELL_LOCAL":
            _tables = lbcParsePage_Search_SellLocal();
            lbcCollectUsers(_tables);
            break;
        case "PAGE_PROFILE":
            a = lbcParsePage_Page_Profile();
            lbcUpdate_Profile(a);
            break;
        case "PAGE_FEEDBACK":
            a = lbcParsePage_Page_Feedback();
            lbcUpdate_Feedback(a);
            break;
        case "PAGE_AD":
            lbcUpdate_Ad();
            break;
        case "PAGE_ADVERTISE":
            lbcUpdate_Advertise();
            break;
        default:
            lbcUnsupportedPage()
    }
    lbcBlurNicks(document.body);
    lbcAddControlBar();
    lbcLoadUserInfo(_tables);
    lbcUpdateTables(_tables);
    lbcShowFilteredResults();
    console.log(JSON.stringify(a));
    //console.log("Replacing links for page: " + sCurrentURL);
    //lbcReplaceLinks();
    lbcBlurNicks(document.body)
}

lbcGetPageInfo();

function lbcUnsupportedPage() {
    alert("No available functions for this page.")
};
