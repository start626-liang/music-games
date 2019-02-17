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
        count: 0
    },
    onLoad(){
        
        
        
        
        const jumpDown = cc.moveBy(2, cc.v2(0, -550)).easing(cc.easeCubicActionIn());
        this.node.runAction(jumpDown)
    },
    update (dt) {
        let s = false
        //测试是否到达底部
        if(this.node.position.y < -268){
            this.count += 1
            window.Global.resultA = true
            if(this.count > 10) {
                window.Global.resultA = false
                this.node.destroy()
                return
            } 
        }
    }
});
