var userAgent = navigator.userAgent.toLowerCase();
var is_webtv = userAgent.indexOf('webtv') != -1;
var is_kon = userAgent.indexOf('konqueror') != -1;
var is_mac = userAgent.indexOf('mac') != -1;
var is_saf = userAgent.indexOf('applewebkit') != -1 || navigator.vendor == 'Apple Computer, Inc.';
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko' && !is_saf) && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ns = userAgent.indexOf('compatible') == -1 && userAgent.indexOf('mozilla') != -1 && !is_opera && !is_webtv && !is_saf;
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera && !is_saf && !is_webtv) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);

function trim(str) {
    return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
}

function in_array(needle, haystack) {
    if (typeof needle == 'string') {
        for (var i in haystack) {
            if (haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}

function strlen(str) {
    return (is_ie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
}

function mb_strlen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
    }
    return len;
}

function is_null(str) {
    return (strlen(str) == 0) ? true : false;
}

function check_mobile(data) {
    if (/^[1-9]{1}\d{10}$/.test(data))
        return true;
    else
        return false;
}

function check_username(data) {
    return (strlen(data) > 3 && strlen(data) < 21) ? true : false;
}

function check_password(password, username) {
    var error = 0;
    var len = strlen(password);
    if (len == 0) {
        error = 1;
    } else if (len < 6) {
        error = 2;
    } else if (len > 20) {
        error = 3;
    } else if (!is_sensitive(password)) {
        error = 4;
    } else if (password == 'password' || password == username) {
        error = 5;
    }
    return error;
}

function check_email(data) {
    return (data.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) ? false : true;
}

function is_sensitive(str) {
    //常用的符号
    var compStr = "&\\\<\>\"\'\/\*/*";
    var length = strlen(str);

    for (var i = 0; i < length; i++) {
        var temp = compStr.indexOf(str.charAt(i));
        if (temp >= 0) {
            return false;
        }
    }
    return true;
}

function is_equal(data1, data2) {
    return (data1 === data2) ? true : false;
}

function obj_merge(obj1, obj2) {
    for (var item in obj2) {
        obj1[item] = obj2[item];
    }
    return obj1;
};

function get_password_level(str) {
    var len = strlen(str);
    if (len == 0)
        return 0;
    if (/^\d*$/.test(str))
        return 1;
    else if (/^[a-zA-Z0-9]+$/.test(str) && len <= 8)
        return 2;
    else
        return 3;
}

function url_char(url) {
    return (/\?/.test(url) ? "&" : "?");
};

jQuery.extend({
    've_get': function (url, data, callback) {
        data = typeof(data) == 'object' ? data : {};
        obj_merge(data, {'return_type': 'callback_json'});
        jQuery.getJSON(url + url_char(url) + 'callback=?', data, callback);
    }
});

function http_getargs() {
    var args = new Object();
    var query = location.search.substring(1);		// get query string
    var pairs = query.split("&");					//www.cxybl.com break at ampersand
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');			// look for "name=value"
        if (pos == -1) continue;					// if not found, skip
        var argname = pairs[i].substring(0, pos);	// extract the name
        var value = pairs[i].substring(pos + 1);	// extract the value
        value = decodeURIComponent(value);			// decode it, if needed
        args[argname] = value;						// store as a property
    }
    return args;								// return the object www.cxybl.com
}
