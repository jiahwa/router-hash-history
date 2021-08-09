import HistoryRoute from './history-route'
class History {
    constructor(){
        this.history = new HistoryRoute;
        location.pathname? '' : location.pathname = '/';
        
        window.addEventListener('load', ()=>{
            this.go(location.pathname);
        })
        window.addEventListener('popstate', ()=>{
            this.go(location.pathname);
        })
    }
    // history Api
    go(pathname) {
        window.history.pushState({}, null, pathname);
        this.history.current = pathname;
    }
}
export default History;
