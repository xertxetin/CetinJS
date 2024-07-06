/* pwa */





/* android */
window.AndroidBridge = window.AndroidBridge ? AndroidBridge : undefined;

async function AndroidChangeStatusBarColor(color){
AndroidBridge?.changeStatusBarColor(color); 
}



/* ios */