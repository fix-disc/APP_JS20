
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    console.log("UUID: " + uuid)

    //window.plugins.phonenumber.get(success, failed);
    //console.log("My number is " + phonenumber);

    var permissions = window.cordova.plugins.permissions;
    permissions.checkPermission(permissions.READ_PHONE_STATE, function(status) {
        if (!status.hasPermission) {
            permissions.requestPermission(permissions.READ_PHONE_STATE, success, error);
        } else {
            // Permission already granted, proceed to read phone information
            // Example: Get phone number using cordova-plugin-device
            //alert("MODELO " + device.model)
            //alert("UUID: " + device.uuid);
            
            
            
        }
    }, error);

}

    function successCallback(result) {
         if (window.plugins && window.plugins.sim) {
                window.plugins.sim.getSimInfo(
                    function(result) {
                        console.log('SIM info: ' + JSON.stringify(result));
                        alert('SIM info: ' + JSON.stringify(result));
                        if (result.phoneNumber) {
                            alert('Phone number: ' + result.phoneNumber);
                        } else {
                            alert('Phone number not available.');
                        }
                    },
                    function(error) {
                        console.log('Error getting SIM info: ' + error);
                        alert('Error getting phone number: ' + error);
                    }
                );
            } else {
                alert('cordova-plugin-sim is not available.');
            }
        alert(JSON.stringify(result));
    }

    function errorCallback(error) {
        alert(JSON.stringify(error));
    }


    function get_info(result) {
        alert(JSON.stringify(result));
    }

    function error_info(error) {
        alert(JSON.stringify(error));
    }

    function success() {
        alert("Permission granted");
        alert("MODELO " + device.model);
        alert("Phone UUID: " + device.uuid);
        alert("Phone Num: " + device.getLine1Number);
        try{
           var plataforma = device.platform;
            if(plataforma != "browser"){
                fabrica = device.manufacturer;
                modelo = device.model;
                uuid = device.uuid;
            }
        }catch(e){
            alert("ERROR: "+e)
        }
    }

    function error(error) {
        alert("Error requesting permission: " + error);
    }

document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('main-logo');
    var logoContainer = document.getElementById('logo-container');
    var welcomeModal = document.getElementById('welcome-modal');
    var loginBtn = document.getElementById('login-btn');
    var registerBtn = document.getElementById('register-btn');
    var closeBtn = document.getElementById('close-welcome');
    var clickHint = document.getElementById('click-hint');
    var ingresaBtn = document.getElementById('ingresa-btn');

    if (logo) {
        logo.addEventListener('click', function() {
            logoContainer.classList.add('moved');
            if (clickHint) clickHint.style.display = 'none';
            setTimeout(function() {
                welcomeModal.classList.remove('hidden');
                setTimeout(function() {
                    welcomeModal.classList.add('show');
                }, 10);
            }, 600);
        });
    }
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }
    if (ingresaBtn) {
        ingresaBtn.addEventListener('click', function() {
            window.location.href = 'inicio.html';
        });
    }

    function resetToInitialState() {
        logoContainer.classList.remove('moved');
        welcomeModal.classList.remove('show');
        setTimeout(function() {
            welcomeModal.classList.add('hidden');
            if (clickHint) clickHint.style.display = '';
        }, 500);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', resetToInitialState);
    }

    // Cerrar modal al hacer click fuera del div de bienvenida
    if (welcomeModal) {
        welcomeModal.addEventListener('click', function(e) {
            if (e.target === welcomeModal) {
                resetToInitialState();
            }
        });
    }
});



