import HistoryRoute from './history-route' // {1}
class Hash {
    constructor(){
        // save current router
        this.history = new HistoryRoute; // {2}
        // page loaded
        location.hash ? '' : location.hash = '/'; // {3}
        
        window.addEventListener('load', ()=>{ // {4}
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