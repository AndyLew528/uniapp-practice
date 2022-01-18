const PubFnc = {
	formaTime: (val) => {
		var value = String(val)

		function t(v) {
			return v = v < 10 ? ("0" + v) : v
		}
		String.prototype.ToString = function(val) {
			var date = new Date(parseInt(this.substring(6, this.length - 2)));
			value = value.replace("yyyy", date.getFullYear());
			value = value.replace("yy", t(date.getFullYear().toString().substr(2)));
			value = value.replace("MM", t(date.getMonth() + 1));
			value = value.replace("dd", t(date.getDate()));
			value = value.replace("hh", t(date.getHours()));
			value = value.replace("mm", t(date.getMinutes()));
			value = value.replace("ss", t(date.getSeconds()));
			value = value.replace("ms", date.getMilliseconds())
			return value;
		};
		return val.ToString('yyyy-MM-dd hh:mm:ss')
	}
}

export default PubFnc