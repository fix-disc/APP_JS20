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

async function post_reclamo(reclamo, tipo){
    try {
        url = base_url + "reclamos.php";
        
        // Obtener usuario_id si no se proporciona
        usuario_id = localStorage.getItem('userId') || '';
        usuario_depa = localStorage.getItem('userDepa') || '';

        console.log("USUARIO: "  + localStorage.getItem('userId'));
        
        var data1 = {tipo: tipo, reclamo: reclamo, usuario_id: usuario_id, usuario_depa: usuario_depa};
        
        console.log("Enviando reclamo a:", url);
        console.log("Datos del reclamo:", data1);
        
        options = {
            method: "POST",
            body: JSON.stringify(data1)
        };
        
        let response = await fetch(url, options);
        
        console.log("response:", JSON.stringify(response));
        console.log("Respuesta HTTP status:", response.status);

        
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
    try {
        let response = await fetch(url);
        let data = await response.json();
        alert('DATA:' + JSON.stringify(data));
        return data; 
    } catch (error) {
        alert('Error fetch login:', error);
        return [];
    }
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

async function get_reclamos_usuario(depa){
    // If a department (depa) is provided, request filtered by depa.
    // If not provided, request all reclamos (no depa query) so the client can filter by user id/email/rut.
    let url = base_url + "reclamos.php";
    if (depa) {
        url += "?depa=" + encodeURIComponent(depa);
    }
    console.log("URL de reclamos_usuario:", url);
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener reclamos del usuario:', error);
        return [];
    }
}