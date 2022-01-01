// BACKEND_DOMAIN: http://localhost:5000 | http://78.62.57.80:5000 | 
// tribeappserver.ddns.net:5000 | tribeappserver.ddns.net
// server address is internal address that's identical to the Application address 
//http://192.168.1.66:5000
export default function config() {

    // Set the backend domain (change the var below when developing locally)
    let mode = 'production'; 

    if (mode === 'production') {
        return {
            'BACKEND_DOMAIN': 'http://tribeserver.ddns.net'
        }
    } 
    else if (mode === 'development') {
        return {
            'BACKEND_DOMAIN': 'http://localhost:5000'
        }
    }
}