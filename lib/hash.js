import HistoryRoute from './history-route'
class Hash {
    constructor(){
        // save current router
        this.history = new HistoryRoute;
        // page loaded
        location.hash ? '' : location.hash = '/';
        
        window.addEventListener('load', ()=>{
            this.go(location.hash);
        })
        window.addEventListener('hashchange', ()=>{
            this.go(location.hash);
        })
    }
    go(hashname) {
        this.history.current = hashname.slice(1);
    }
}

export default Hash