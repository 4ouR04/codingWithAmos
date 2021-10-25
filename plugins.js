//shows all plugins installed in your browser
for (i = 0;i < navigator.plugins.length; i++){
    document.getElementById("navigatorPlugins").innerHTML = navigator.plugins[i].filename;
    document.getElementById("descp").innetHTML = naviagtor.plugins[i].description;
}