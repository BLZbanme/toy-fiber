/**
 * 在fiber中，很多地方都用到链表 更新
 */

class Update {//payload数据或者元素
    constructor(payload) {
        this.payload = payload;
        this.nextUpdate = nextUpdate; //指向下一个节点的指针
    }
}

class UpdateQueue {
    constructor() {
        this.baseState = null;//原状态
        this.firstUpdate = null;//第一个更新
        this.lastUpdate = null;//最后一个更新
    }

    enqueueUpdate(update) {
        if (this.firstUpdate === null) {
            this.firstUpdate = this.lastUpdate = update;
        }
    }
}

//计数器 {number: 0} setState({number: 1}) setState((state) => {number: state.number + 1})
let queue = new UpdateQueue();
queue.enqueueUpdate(new Update({ number: 0 }));
queue.enqueueUpdate(new Update((state) => { nubmer: state.number + 1}));
queue.forceUpdate();