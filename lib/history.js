import HistoryRoute from './history-route'
class History {
    constructor(){
        this.history = new HistoryRoute;
        window.addEventListener('popstate', ()=>{
            this.go(location.pathname);
        })
    }
    // history Api
    go(pathname) {
        window.history.pushState({}, null, pathname);
        this.history.current = pathname;
    }
    getState(){
        return this.history
    }
}
export default History;
