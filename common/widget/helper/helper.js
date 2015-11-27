/** * Created by TC-62 on 2015/10/30. */'use strict';var selectAction = function (ev) {    ev.returnValue = false;    return false;};var Helper = {    /**     * 字符串截取     * @param str     * @param len     * @param flow     * @returns {*}     */    substring: function (str, len, flow) {        if (!str) return str;        var newLength = 0,            str = (typeof(str) != 'string') ? '' : str,            newStr = "",            chineseRegex = /[^\x00-\xff]/g,            singleChar,            strLength = str.replace(chineseRegex, "**").length,            flow = typeof(flow) == 'undefined' ? '...' : flow;        if (strLength <= len + (strLength % 2 == 0 ? 2 : 1))            return str;        for (var i = 0; i < strLength; i++) {            singleChar = str.charAt(i).toString();            if (singleChar.match(chineseRegex) != null)                newLength += 2;            else                newLength++;            if (newLength > len)                break;            newStr += singleChar;        }        if (flow && strLength > len) newStr = $.trim(newStr) + flow;        return newStr;    },    /**     * 禁止文本被选中     * @param BOOL     * @param $dom     */    selected: function (BOOL, $dom) {        $($dom ? $dom : document)[BOOL ? 'off' : 'on']('selectstart mousedown mouseup selectstart', selectAction);    },    /**     * 获取一个整数随机数随机数     * @returns {Number}     */    random: function () {        return parseInt(String(Math.random()).substr(2));    },    /**     * 把字符串转换为对象，修正json必须使用双引号的问题     * @param string     * @returns {Object}     */    object: function (string) {        if (typeof string == 'string')            return Function('return ' + (string || '{}'))();    }};module.exports = Helper;