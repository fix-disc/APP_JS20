// PROD
base_url = "https://web.innovarecoleta.cl/IPR_api/api/v1.0/"
// DEV
//base_url = "http://localhost/API-RECLAMOS/api/v1.0/"


async function get_users(id){
    url = base_url
    if(uuid != undefined){
        url = base_url + "api.php?uuid=" + id;
    }
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function get_tipo_reclamo(){
    url = base_url + "tipo_reclamos.php";
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function post_reclamo(reclamo, tipo, usuario_id = null){
    try {
        url = base_url + "reclamos.php";
        
        // Obtener usuario_id si no se proporciona
        if (!usuario_id) {
            usuario_id = localStorage.getItem('userId') || sessionStorage.getItem('userId') || 'anonymous';
        }
        
        var data1 = {
            reclamo: reclamo, 
            tipo: tipo,
            usuario_id: usuario_id,
            fecha_creacion: new Date().toISOString()
        };
        
        console.log("Enviando reclamo a:", url);
        console.log("Datos del reclamo:", data1);
        
        // Usar URLSearchParams para mejor compatibilidad CORS
        const params = new URLSearchParams();
        params.append('reclamo', reclamo);
        params.append('tipo', tipo);
        params.append('usuario_id', usuario_id);
        params.append('fecha_creacion', new Date().toISOString());
        
        options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        };
        
        let response = await fetch(url, options);
        
        console.log("Respuesta HTTP status:", response.status);
        console.log("Respuesta HTTP headers:", response.headers);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let data = await response.json();
        console.log("Respuesta del servidor:", data);
        
        return data; 
    } catch (error) {
        console.error('Error al enviar reclamo:', error);
        throw error;
    }
}

async function login_usuario(usuario, password){
    url = base_url + "usuarios.php?usuario=" + usuario + "&password=" + password;
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}

async function get_avisos(){
    url = base_url + "avisos.php";
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener avisos:', error);
        return [];
    }
}

async function get_reclamos_usuario(usuario_id){
    url = base_url + "reclamos_usuario.php?usuario_id=" + usuario_id;
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener reclamos del usuario:', error);
        return [];
    }
}