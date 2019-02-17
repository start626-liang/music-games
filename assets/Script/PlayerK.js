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
        interval: 1,
        intervalTime: 160,
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
        
    },
    onKeyDown (event) {
        // set a flag when key pressed
        // cc.log(event.keyCode)
        switch(event.keyCode) {
            case cc.macro.KEY.k:
            if(window.Global.resultA && window.Global.list[0] == 6){
                window.Global.num +=1
                cc.log(window.Global.num)
                window.Global.resultA = false
            }
                this.node.color = new cc.Color(1, 255, 255)
                break;
        }
    },
    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.k:
                this.node.color = new cc.Color(255, 255, 255)
                break;
        }
    },
    update(){
        this.interval += 1
        if(this.interval > this.intervalTime){
            let min = Math.ceil(100);
            let max = Math.floor(1);

            if((Math.floor(Math.random() * (max - min)) + min) == 5){
                window.Global.list.push(6)
                
                this.interval = 0
                // 使用给定的模板在场景中生成一个新节点
                try{
                    var newStar = cc.instantiate(this.starPrefab);
                }catch(e){
                    cc.error(e)
                }
                // 将新增的节点添加到 Canvas 节点下面
                this.node.addChild(newStar);
                var randX = 0;
                var randY = 280
                newStar.setPosition(cc.v2(randX, randY));
            }
        }
    },
    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
});
