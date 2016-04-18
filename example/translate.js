var translate = {
	config: function(params){
		var origin = {
			selector: '',
			separator: '',
			langages: [],
			langage: ''
		};

		origin.extend(params);
		translate.exec(origin);
	},
	exec: function(params){
		var els = document.getElementsByClassName(params['selector']);
		var n = -1;

		for(var langage in params.langages){
			if(!isNaN(langage)){
				if(params['langages'][langage] == params['langage']){
					n = parseInt(langage);
					break;
				}
			}
		}

		if(n == -1){
			throw new Error('Les options ont mal été configurées.');
		}

		for(var i = 0; i < els.length; i++){
			var el = els[i].textContent;
			var propos = [];

			propos = el.split(params['separator']);
			els[i].textContent = propos[n];
		}
	}
};

Object.prototype.extend = function(params){
	for(var key in params){
		if(key != 'extend'){
			if(this.hasOwnProperty(key)){
			 	this[key] = params[key];
			 } else {
			 	throw new Error(key + ' n\'est pas une propriété que supporte ce plugin.');
			 }
		}
	}
}