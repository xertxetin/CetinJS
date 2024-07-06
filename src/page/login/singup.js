window["singup"] = async (id,params,creteID) => { 
if(!root.querySelector(`#${id}-${creteID}`)?.innerHTML){
ariCreate(id,`
<all-content id="content-${id}">
<header data-disabled="false" data-infinityscrollerloader="false">
<toolbar>
<flex>
${params?.push ? `
<button class="clear-btn" data-router="back">${arrowLeft}</button>  
` : ''}
</flex>
<flex>
<titlebar><div id="animlogo" class="animlogo">${CetinJSLogo}</div></titlebar>
</flex>
<flex>
</flex>
</toolbar>
</header>

<center style="color: var(--black);">
Page: ${id} / ${creteID}
<br>
<button data-router="login">Push Page Login</button> 
</center>
</all-content>
`,params,creteID);

setTimeout(() => {root.querySelector(`#${id}-${creteID}`).style.opacity = "1";}, 0);

//içeri yükle veya biraz geçikmeli yükle
oneWellLoad(0,async function(){
const documents = root.querySelector(`#${id}-${creteID}`);



});
}
}