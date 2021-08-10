import HistoryRoute from './history-route' // {1}
class History {
    constructor(){
        this.history = new HistoryRoute; // {2}
        location.pathname? '' : location.pathname = '/'; // {3}
        
        window.addEventListener('load', ()=>{ // {4}
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
