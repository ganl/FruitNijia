// if (!Array.prototype.shuffle) {
//     Array.prototype.shuffle = function() {
//         let m = this.length,
//             i;
//         while (m) {
//             i = (Math.random() * m--) >>> 0;
//             [this[m], this[i]] = [this[i], this[m]]
//         }
//         return this;
//     }
// }

if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}

var LightLayer = cc.Layer.extend({
    bx:0,
    by:0,
    lightsNum: 10,
    indexs:[],
    count: 0,
    lighs: [],
    idx: [],
    ctor: function (boom) {
        this._super();

        for(var i = 0; i < this.lightsNum; i ++) {
            this.indexs[i] = i;
        }

        this.idx = this.indexs.shuffle();
        console.log(this.indexs)
        this.bx = boom.x || cc.winSize.width / 2
        this.by = boom.y || cc.winSize.height / 2
    },

    onEnter: function () {
        this._super();
        this.schedule(this.dl, 0.1, this.lightsNum, 0.1) // repeat + 1 times
    },
    onExit: function() {
        this._super();
        this.unscheduleAllCallbacks();//移除所有schedule的回调函数
    },
    randomNumber: function(num){
        return Math.floor(Math.random() * num);
        // return Math.floor(Math.random() * (max - min + 1) + min);
    },
    dl: function () {
        if (this.count>=10){ // 最后一次画mask
            this.schedule(this.drawMask, 1, 1, 0.2)
            return ;
        }
        console.log('dl', this.count)
        this.drawLight(this.bx, this.by, this.idx[this.count++])
    },
    drawMask: function() {
        //创建draw对象
        var drawNode =new cc.DrawNode();
        //绘制矩形，参数：坐标，大小，填充颜色，边框大小，边框颜色
        drawNode.drawRect(cc.p(0,0),cc.p(cc.winSize.width, cc.winSize.height), cc.color(255, 255, 255, 200), 1, cc.color(255,255,255));
        //加入Layer层
        this.addChild(drawNode);
    },
    drawLight: function (x, y, r) {
        var a1, a2, x1, y1, x2, y2;
        console.log('d', this.count, r);
        var pi = Math.PI;
        var sin = Math.sin;
        var cos = Math.cos;

        a1 = r * 36 + this.randomNumber( 10 );
        a2 = a1 + 5;

        a1 = pi * a1 / 180;
        a2 = pi * a2 / 180;

        x1 = x + 640 * cos( a1 );
        y1 = y + 640 * sin( a1 );

        x2 = x + 640 * cos( a2 );
        y2 = y + 640 * sin( a2 );

        var drawNode = new cc.DrawNode();

        var vertices = [cc.p(x, y), cc.p(x1, y1), cc.p(x2, y2)];
        //多边形，参数：坐标组，填充颜色，边框宽度，边框颜色
        drawNode.drawPoly(vertices, cc.color(255, 255, 255, 128), 0, cc.color(255, 255, 255));

        //加入Layer层
        this.addChild(drawNode);
    }
});