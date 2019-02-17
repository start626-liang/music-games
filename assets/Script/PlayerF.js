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
        starPrefab: {
            default: null,
            type: cc.Prefab
        }
    },
    onLoad () {
        // cc.log(this.starPrefab.data.aa)
        // cc.log(this.starPrefab)

        // cc.log(this.starPrefab.data.y)
        // cc.log(this.starPrefab)
        // cc.log(this.node)
        
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);  
        
        // 使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStar);
        var randX = 0;
        var randY = 280
        newStar.setPosition(cc.v2(randX, randY));
    },
    Correct(){
        if(window.Global.resultA){
            cc.log(window.Global.resultA)
        }
    },
    onKeyDown (event) {
        // set a flag when key pressed
        // cc.log(event.keyCode)
        switch(event.keyCode) {
            case cc.macro.KEY.f:
                this.Correct()
                this.node.color = new cc.Color(1, 255, 255)
                this.starPrefab.data = 250;
                break;
        }
    },
    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.f:
                this.node.color = new cc.Color(255, 255, 255)
                this.starPrefab.data = 250;
                break;
        }
    },
    start () {
        
    },
    update(){
        // cc.log(this.starPrefab.position)

    },
    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
});
