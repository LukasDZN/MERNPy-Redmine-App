// BACKEND_DOMAIN: http://localhost:5000 | http://78.62.57.80:5000 | 
// server address is internal address that's identical to the Application address 
//http://192.168.1.66:5000
export default function config() {

    // Set the backend domain (change the var below when developing locally)
    let mode = 'development'; 

    if (mode === 'production') {
        return {
            'BACKEND_DOMAIN': 'https://tribeapp.website',
            'BACKEND_PORT': ':5000'
            // 'BACKEND_DOMAIN': 'http://78.62.57.80:5000'
        }
    } 
    else if (mode === 'development') {
        return {
            'BACKEND_DOMAIN': 'http://192.168.1.225',
            'BACKEND_PORT': ':5000'
        }
    }
}