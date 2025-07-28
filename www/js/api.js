// PROD
base_url = "https://gestor-it.com/libroquejas/api/v1.0/"
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

async function post_reclamo(reclamo){
    url = base_url
    url = base_url + "reclamos.php?reclamo=" + reclamo;

    var data1 = {reclamo    : reclamo};
    options={
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
    };
    alert("URL: " + url);
    let response = await fetch(url,{method: "POST"});
    let data = await response.json();
    alert(JSON.stringify(data));
    return data; 
}

async function login_usuario(usuario, password){
    url = base_url + "usuarios.php?usuario=" + usuario + "&password=" + password;
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}