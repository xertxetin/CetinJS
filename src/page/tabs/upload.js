window["upload"] = async (id,documents,documentTabs,moduleid) => {
if(!documents.innerHTML){
ariSet(id,`
<tab-content id="content-${id}">
<center  style="padding: 100% 20px;color: var(--black);">TAB: upload</center>
</tab-content>
`);
}
}