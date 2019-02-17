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
        // 星星和主角之间的距离小于这个数值时，就会完成收集
        reapBottomDistance: 0,
        reapTopDistance: 0,
        
    },
    a(){
        var jumpDown = cc.moveBy(2, cc.v2(0, -550)).easing(cc.easeCubicActionIn());
        this.node.runAction(jumpDown)
    },
    b(){cc.log(cc.winSize)},
    onLoad(){
        
        var d = cc.sequence([this.a(), this.b()]);
        
    },
    start () {
        
    },

    update (dt) {
        if(this.node.position.y > -250){
            cc.log(this.node.position)
        } else {
            return
        }
    },
    onEnable(){
        // this.intervalEvent()
        // cc.log(this.node.position.x)
    }, 
    lateUpdate(){
        
    }
});
