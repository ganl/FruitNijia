//Sound Manager
var Sound = {
	throw_effect: null,
	splatter_effect: null,
	menu_effect: null,
	//切中炸弹
	playBoom: function() {
		cc.audioEngine.playEffect(sounds.boom, false);
	},

	//扔出水果
	playThrow: function() {
		//如果有一个音效在播放，那么不播放
		if(this.throw_effect) {
			cc.audioEngine.stopEffect(this.throw_effect);
		}
		this.throw_effect = cc.audioEngine.playEffect(sounds.throwd, false);
	},

	//切中水果
	playSplatter: function() {
		//如果有一个切水果的音效在播放，那么不播放
		if(this.splatter_effect) {
			cc.audioEngine.stopEffect(this.splatter_effect);
		}
		this.splatter_effect = cc.audioEngine.playEffect(sounds.splatter, false);
	},

	//Game over
	playOver: function() {
		cc.audioEngine.playEffect(sounds.over);
	},

	//menu
	playMenu: function() {
		this.menu_effect = cc.audioEngine.playMusic(sounds.menu, true);
	},
	
	//stop menu
	stopMenu: function() {
		cc.audioEngine.stopMusic(true);
	},

	//start
	playStart: function() {
		cc.audioEngine.playEffect(sounds.start, false);
	}
}