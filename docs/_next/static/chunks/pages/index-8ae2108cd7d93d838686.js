_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,n,e){"use strict";n.__esModule=!0,n.isInAmpMode=i,n.useAmp=function(){return i(a.default.useContext(d.AmpStateContext))};var o,a=(o=e("q1tI"))&&o.__esModule?o:{default:o},d=e("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ampFirst,e=void 0!==n&&n,o=t.hybrid,a=void 0!==o&&o,d=t.hasQuery,i=void 0!==d&&d;return e||a&&i}},"7W2i":function(t,n,e){var o=e("SksO");t.exports=function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}},"8Kt/":function(t,n,e){"use strict";e("lSNA");n.__esModule=!0,n.defaultHead=c,n.default=void 0;var o,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var n=s();if(n&&n.has(t))return n.get(t);var e={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var d=o?Object.getOwnPropertyDescriptor(t,a):null;d&&(d.get||d.set)?Object.defineProperty(e,a,d):e[a]=t[a]}e.default=t,n&&n.set(t,e);return e}(e("q1tI")),d=(o=e("Xuae"))&&o.__esModule?o:{default:o},i=e("lwAK"),l=e("FYa8"),r=e("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[a.default.createElement("meta",{charSet:"utf-8"})];return t||n.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function p(t,n){return"string"===typeof n||"number"===typeof n?t:n.type===a.default.Fragment?t.concat(a.default.Children.toArray(n.props.children).reduce((function(t,n){return"string"===typeof n||"number"===typeof n?t:t.concat(n)}),[])):t.concat(n)}var u=["name","httpEquiv","charSet","itemProp"];function b(t,n){return t.reduce((function(t,n){var e=a.default.Children.toArray(n.props.children);return t.concat(e)}),[]).reduce(p,[]).reverse().concat(c(n.inAmpMode)).filter(function(){var t=new Set,n=new Set,e=new Set,o={};return function(a){var d=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var l=a.key.slice(a.key.indexOf("$")+1);t.has(l)?d=!1:t.add(l)}switch(a.type){case"title":case"base":n.has(a.type)?d=!1:n.add(a.type);break;case"meta":for(var r=0,s=u.length;r<s;r++){var c=u[r];if(a.props.hasOwnProperty(c))if("charSet"===c)e.has(c)?d=!1:e.add(c);else{var p=a.props[c],b=o[c]||new Set;"name"===c&&i||!b.has(p)?(b.add(p),o[c]=b):d=!1}}}return d}}()).reverse().map((function(t,n){var e=t.key||n;return a.default.cloneElement(t,{key:e})}))}function v(t){var n=t.children,e=(0,a.useContext)(i.AmpStateContext),o=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(d.default,{reduceComponentsToState:b,headManager:o,inAmpMode:(0,r.isInAmpMode)(e)},n)}v.rewind=function(){};var h=v;n.default=h},Bnag:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,n){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,n,e){"use strict";var o;n.__esModule=!0,n.HeadManagerContext=void 0;var a=((o=e("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});n.HeadManagerContext=a},Ijbi:function(t,n,e){var o=e("WkPL");t.exports=function(t){if(Array.isArray(t))return o(t)}},Nsbk:function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},PJYZ:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,n,e){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},RIqP:function(t,n,e){var o=e("Ijbi"),a=e("EbDI"),d=e("ZhPi"),i=e("Bnag");t.exports=function(t){return o(t)||a(t)||d(t)||i()}},RNiq:function(t,n,e){"use strict";e.r(n);var o=e("nKUr"),a=e("q1tI"),d=e.n(a),i=e("g4pe"),l=e.n(i);n.default=function(){return Object(o.jsxs)(d.a.Fragment,{children:[Object(o.jsx)(l.a,{children:Object(o.jsx)("title",{children:"HTML Table Style Generator by eli geske"})}),Object(o.jsx)("div",{id:"container",dangerouslySetInnerHTML:{__html:'\n\t\t\t\t<div id="titleText" style="position: absolute; width: 581px; padding: 10px 22px;">\n\t\t\t\t<h1 style="margin: 0 0 10px 0;">HTML Table Style Generator <span\n\t\t\t\t\t\t\t\tstyle="color: #CCCCCC; font-style: italic;">by eli geske</span></h1>\n\t\t\t\t<p>Style an HTML table using CSS with this easy tool! <br />\n\t\t\t\t\t\tSelect from preset color settings from the bottom, or set your own theme with the controls on the right.\n\t\t\t\t\t\tOnce finished the HTML and CSS will be generated by pressing the tabs just above the Table.<br />\n\t\t\t\t\t\t<strong>NOTE</strong>: IE8 and below will not see the rounded corners.\n\t\t\t\t</p>\n\t\t\t\t<p>Using CSS2, CSS3 techniques that are cross browser compatible. Easy to use, just choose the settings to\n\t\t\t\t\t\tthe right then hit the generate button and your css and html is generated. From table padding, border,\n\t\t\t\t\t\talternating row colors, and gradients. It\'s all at your finger tips.</p>\n\t\t\t\t<p style="display: none;">CSS is pretty much the best option you have to styling or creating a table theme.\n\t\t\t\t\t\tIt maybe easy, yes, but having to make a good theme visually takes quite the time. Imagine always having\n\t\t\t\t\t\tto click refesh after design, or using other environments to style them. Sure some of the environments\n\t\t\t\t\t\tare great, but having tools all bundled up for specific reasons is more time efficient. </p>\n\n\t\t</div>\n\t\t<div id="sidebar1">\n\t\t\t\t<form id="vars">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<table style="text-align: left;">\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Font:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id="font">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Arial, Helvetica, sans-serif</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Times New Roman, Times, serif</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Courier New, Courier, monospace</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Georgia, Times New Roman, Times, serif</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Verdana, Arial, Helvetica, sans-serif</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Geneva, Arial, Helvetica, sans-serif</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Border-Size: <input type="text" class="small_15" id="borderWidth"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="1px" /><span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Border-Color: </label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_borderWidth" class="slider border"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="borderColor" class="color" maxlength="6px" value="006699" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Border-Radius: <input type="text" class="small_15" id="borderRadius"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="3px" /><span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>#Cols / #Rows: </label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_borderRadius" class="slider radius"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" width="35" class="small_25_w" id="tCols" value="4" /> / <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype="text" width="35" class="small_25_w" id="tRows" value="5" /> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle="font-size: 11px;">(for output only)</i>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>CellPadding T/B: <input type="text" class="small_15" id="tbodyCellPadding_tb"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="3px" /></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>CellPadding L/R: <input type="text" class="small_15" id="tbodyCellPadding_lr"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="10px" /></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tbodyCellPadding_tb" class="slider padding"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tbodyCellPadding_lr" class="slider padding"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><input type="checkbox" id="thead" checked="checked" /><span>Table Header</span></h2>\n\t\t\t\t\t\t<div id="thead-box">\n\t\t\t\t\t\t\t\t<table width="100%" style="text-align: left;">\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Font-Size:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="small_15" id="theadFontSize" value="15px" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="theadBold" checked="checked" /><span>Bold</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Font-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_theadFontSize" class="slider fontsize"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="theadFontColor" class="color" maxlength="6px" value="ffffff" />\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>TopGradientColor: </label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>BottomGradientColor: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="theadBottomGradientColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="006699" /></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="theadTopGradientColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="00557F" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="border-top: 1px solid #5C5C5C; padding-top: 8px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tbLine">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Column Lines: </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box" style="float: right; margin-right: 175px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="theadColLines" class="cboxTr"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked="checked" /><span>Yes</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="theadColLines-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Column-Line-Width: <input type="text" class="small_15" id="theadColLineWidth"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="1px" /></label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Column-Line-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="theadColLines-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_theadColLineWidth" class="slider border"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="theadColLineColor" class="color" maxlength="6" value="0070A8" />\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2><span>Table Body</span></h2>\n\t\t\t\t\t\t<div id="tbody-box">\n\t\t\t\t\t\t\t\t<table width="100%" style="text-align: left;">\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Font-Size: <input type="text" class="small_15" id="tbodyFontSize"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="12px" /></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="tbodyBold" /><span>Bold</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Font-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tbodyFontSize" class="slider fontsize"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tbodyFontColor" class="color" maxlength="6" value="00496B" />\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\x3c!-- tBody Column Lines --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="border-top: 1px solid #5C5C5C; padding-top: 8px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tbLine">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Column Lines: </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box" style="float: right; margin-right: 175px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="tbodyColLines" class="cboxTr"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked="checked" /><span>Yes</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tbodyColLines-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Column-Line-Width: <input type="text" class="small_15" id="tbodyColLineWidth"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="1px" /></label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Column-Line-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tbodyColLines-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tbodyColLineWidth" class="slider border"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tbodyColLineColor" class="color" maxlength="6" value="E1EEF4" />\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\x3c!-- tBody Row Lines --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="border-top: 1px solid #5C5C5C; padding-top: 8px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tbLine">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Row Lines: </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box" style="float: right; margin-right: 175px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="tbodyRowLines" class="cboxTr" /><span>Yes</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tbodyRowLines-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Row-Line-Width: <input type="text" class="small_15" id="tbodyRowLineWidth"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="1px" /></label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Row-Line-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tbodyRowLines-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tbodyRowLineWidth" class="slider border"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tbodyRowLineColor" class="color" maxlength="6" value="E1EEF4" />\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\x3c!-- tBody Alt Rows --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="border-top: 1px solid #5C5C5C; padding-top: 8px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tbLine">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Alternate Rows: </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box" style="float: right; margin-right: 175px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="tbodyAltRows" class="cboxTr"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked="checked" /><span>Yes</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tbodyAltRows-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Alt-Font-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Alt-Background-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tbodyAltRows-box" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tbodyAltFontColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="00496B" /></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tbodyAltBackgroundColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="E1EEF4" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2><input type="checkbox" id="tfoot" checked="checked" /><span>Table Footer</span></h2>\n\t\t\t\t\t\t<div id="tfoot-box">\n\t\t\t\t\t\t\t\t<table width="100%" style="text-align: left;">\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Font-Size: <input type="text" class="small_15" id="tfootFontSize"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="12px" /></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="tfootBold" /><span>Bold</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Font-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tfootFontSize" class="slider fontsize"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootFontColor" class="color" maxlength="6" value="00496B" />\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Footer Padding: <input type="text" class="small_15" id="tfootPadding"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="2px" /></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Background-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tfootPadding" class="slider padding"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootBackgroundColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="E1EEF4" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="border-top: 1px solid #5C5C5C; padding-top: 8px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tbLine">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pagination: </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bold-box" style="float: right; margin-right: 175px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="tfootPaging" class="cboxTr"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked="checked" /><span>Yes</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Border-Size: <input type="text" class="small_15" id="tfootPagingBorderWidth"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="1px" /><span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Border-Radius: <input type="text" class="small_15" id="tfootPagingBorderRadius"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="3px" /><span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tfootPagingBorderWidth" class="slider border"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="slider_tfootPagingBorderRadius" class="slider radius"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\x3c!-- footer font color --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Font-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Active Font Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootPagingFontColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="FFFFFF" /></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootPagingActiveFontColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="FFFFFF" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\x3c!-- footer Border color --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Border-Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Active Border Color: </label></td>\n\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td width="50%"><input type="text" id="tfootPagingBorderColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="006699" /></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootPagingActiveBorderColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="006699" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\x3c!-- foot top gradient color --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>TopGradientColor: </label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>Active BG Color: </label></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootPagingTopGradientColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="006699" /></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootPagingActiveBackgroundColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="00557F" /></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\x3c!-- foot Bottom gradient color --\x3e\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><label>BottomGradientColor: </label></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class="tfootPaging-box">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type="text" id="tfootPagingBottomGradientColor" class="color" maxlength="6px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="00557F" /></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div style="height: 50px;">\n\t\t\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t</div>\n\n\t\t<div id="mainContent">\n\t\t\t\t<div style="padding: 180px 5px 20px; line-height: 150%;">\n\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div id="fixedCont">\n\t\t\t\t\t\t<div id="tableCont" class="tableCont">\n\t\t\t\t\t\t\t\t<div class="fb-like" data-href="http://tablestyler.com" data-send="false" data-layout="box_count"\n\t\t\t\t\t\t\t\t\t\tdata-width="450" data-show-faces="false"></div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tstyle="padding-left: 5px; text-align: left; padding-right: 25px; margin-top: -4px; margin-bottom: 2px;">\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="box">\n\t\t\t\t\t\t\t\t\t\t<div id="box-menu">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id="menu_cont" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="html" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea>html</textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="css" style="display: none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea>css</textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="hzmenu">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a id="html_btn" href="#">HTML</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a id="css_btn" href="#">CSS</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="all" class="datagrid" style="margin-top: 33px;">\n\t\t\t\t\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Column 1</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Column 2</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Column 3</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan="4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="no-paging" style="display: none;">&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="paging">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#"><span>Previous</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" class="active"><span>1</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#"><span>2</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#"><span>3</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#"><span>4</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#"><span>5</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#"><span>Next</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Row 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class="alt">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Row 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Row 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class="alt">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Row 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Row 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>data 3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style="padding: 5px 10px;">Questions, Comments or Suggestions? Join the <a class="pageLink"\n\t\t\t\t\t\t\t\t\t\thref="http://eligeske.com/cool-web-stuff/data-table-style-generator/"\n\t\t\t\t\t\t\t\t\t\talt="Table Generator Discussion">Table Generator Discussion Here</a>.</div>\n\t\t\t\t\t\t<div id="theme-box" style="padding: 0 10px;">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div id="theme1" class=\'theme-box\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'th_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_alt_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="theme2" class=\'theme-box\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'th_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_alt_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="theme3" class=\'theme-box\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'th_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_alt_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="theme4" class=\'theme-box\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'th_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_alt_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="theme5" class=\'theme-box\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'th_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_alt_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="theme6" class=\'theme-box\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'th_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'tr_alt_theme\'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\x3c!--\n\t\t\t<ul class="color_themes">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div id="theme_1" class="theme">\n\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #006699">&nbsp;</span>\n\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #FFFFFF">&nbsp;</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #E1EEF4">&nbsp;</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #00557F">&nbsp;</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div id="theme_2" class="theme">\n\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #006699">&nbsp;</span>\n\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #FFFFFF">&nbsp;</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #E1EEF4">&nbsp;</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\'th_color\' style="background-color: #00557F">&nbsp;</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t--\x3e\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\x3c!-- This clearing element should immediately follow the #mainContent div in order to force the #container div to contain all child floats --\x3e<br\n\t\t\t\tclass="clearfloat" />\n\t\t\x3c!-- end #container --\x3e\n\t\t\t\t\t'}})]})}},SksO:function(t,n){function e(n,o){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,o)}t.exports=e},W8MJ:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}},WkPL:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}},Xuae:function(t,n,e){"use strict";var o=e("RIqP"),a=e("lwsE"),d=e("W8MJ"),i=(e("PJYZ"),e("7W2i")),l=e("a1gu"),r=e("Nsbk");function s(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=r(t);if(n){var a=r(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return l(this,e)}}n.__esModule=!0,n.default=void 0;var c=e("q1tI"),p=function(t){i(e,t);var n=s(e);function e(t){var d;return a(this,e),(d=n.call(this,t))._hasHeadManager=void 0,d.emitChange=function(){d._hasHeadManager&&d.props.headManager.updateHead(d.props.reduceComponentsToState(o(d.props.headManager.mountedInstances),d.props))},d._hasHeadManager=d.props.headManager&&d.props.headManager.mountedInstances,d}return d(e,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),e}(c.Component);n.default=p},ZhPi:function(t,n,e){var o=e("WkPL");t.exports=function(t,n){if(t){if("string"===typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}},a1gu:function(t,n,e){var o=e("cDf5"),a=e("PJYZ");t.exports=function(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?a(t):n}},cDf5:function(t,n){function e(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},g4pe:function(t,n,e){t.exports=e("8Kt/")},lSNA:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},lwAK:function(t,n,e){"use strict";var o;n.__esModule=!0,n.AmpStateContext=void 0;var a=((o=e("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});n.AmpStateContext=a},lwsE:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,1]]]);