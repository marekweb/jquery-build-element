/*!
 * jQuery-build-element v0.1.0
 * github.com/marekweb/jquery-build-element
 * (c) 2014 Marek Zaluski www.marekweb.com
 * Released under the MIT license
 */

(function() {

	function parseDescriptor(s) {
		var items = [];
		while (true) {
			var char = s.charAt(0);
			var type;
			if (char == "#") {
				type = "id";
				s = s.slice(1);
			} else if (char == ".") {
				type = "class";
				s = s.slice(1);
			} else if (char == "{") {
				var close = s.indexOf('}');
				if (close === -1) throw "Missing closing curly bracket in: " + s;
				items.push(["text", s.slice(1, close)]);
				s = s.slice(close+1);
				continue;
			} else type = "tag";
			var i = s.search(/[#.{]/);
			if (i === -1) {
				if (s.length != 0) items.push([type, s]);
				return items;
			}
			items.push([type, s.slice(0, i)]);
			s = s.slice(i);
		}
	}

	$.build = function(desc, attrs, content) {
		desc = desc || "";
		if (!$.isPlainObject(attrs) && !content) {
			content = attrs;
			attrs = {};
		}
		var items = parseDescriptor(desc);
		var classes = [];
		var id = "";
		var tag = "div";
		var text;
		for (var i = 0, len = items.length; i < len; i++) {
			var item = items[i];
			if (item[0] == "tag") tag = item[1];
			if (item[0] == "id") id = item[1];
			if (item[0] == "class") classes.push(item[1]);
			if (item[0] == "text") content = item[1];
		}
		attrs = attrs || {};
		if (classes.length > 0) attrs["class"] = classes.join(' ');
		if (id) attrs.id = id;
		return $('<' + tag + '>').attr(attrs).append(content);
	};

	$.fn.buildAppend = function() {
		var element = $.build.apply(this, arguments);
		$(this).append(element);
	}

})();