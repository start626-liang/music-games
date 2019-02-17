// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 这个属性引用了图预制资源
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 图产生后消失时间的随机地址
        maxStarDuration: 0,
        minStarDuration: 0,
        back1: {
            default: null,
            type: cc.Node
        },
        back2: {
            default: null,
            type: cc.Node
        },
        back3: {
            default: null,
            type: cc.Node
        },
        back4: {
            default: null,
            type: cc.Node
        },
        back5: {
            default: null,
            type: cc.Node
        },
        back6: {
            default: null,
            type: cc.Node
        },
        back7: {
            default: null,
            type: cc.Node
        },
        back8: {
            default: null,
            type: cc.Node
        },
        // 地面节点，用于确定星星生成的高度
        ground: {
            default: null,
            type: cc.Node
        },
        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        player: {
            default: null,
            type: cc.Node
        },
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        }
    },
    onLoad () {
        // cc.log(this.node.position)
        var ctx = this.addComponent(cc.Graphics);
        for(let i=1; i<= 7; ++i){
            ctx.moveTo(-480+ i*120,-500);
            ctx.lineTo(-480+ i*120,500);
        }
        ctx.strokeColor = cc.Color.RED;
        ctx.stroke();
        
        // cc.log(this.node.player)
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);  
        
        // 使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStar);
        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        // 在星星组件上暂存 Game 对象的引用
        // newStar.getComponent('Star').game = this;  
    },
    getNewStarPosition: function () {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
        var randY = 280
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        var maxX = this.node.width/2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.v2(randX, randY);
    },

    onKeyDown (event) {
        // set a flag when key pressed
        // cc.log(event.keyCode)
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.back1.opacity = 150;
                break;
            case cc.macro.KEY.s:
                this.back2.opacity = 150;
                break;
            case cc.macro.KEY.d:
                this.back3.opacity = 150;
                break;
            case cc.macro.KEY.f:
                this.back4.opacity = 150;
                break;
            case cc.macro.KEY.j:
                this.back5.opacity = 150;
                break;
            case cc.macro.KEY.k:
                this.back6.opacity = 150;
                break;
            case cc.macro.KEY.l:
                this.back7.opacity = 150;
                break;
            case cc.macro.KEY[';']:
                this.back8.opacity = 150;
                break;
        }
    },
    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.back1.opacity = 0;
                break;
            case cc.macro.KEY.s:
                this.back2.opacity = 0;
                break;
            case cc.macro.KEY.d:
                this.back3.opacity = 0;
                break;
            case cc.macro.KEY.f:
                this.back4.opacity = 0;
                break;
            case cc.macro.KEY.j:
                this.back5.opacity = 0;
                break;
            case cc.macro.KEY.k:
                this.back6.opacity = 0;
                break;
            case cc.macro.KEY.l:
                this.back7.opacity = 0;
                break;
            case cc.macro.KEY[';']:
                this.back8.opacity = 0;
                break;
        }
    },

    

    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
});
