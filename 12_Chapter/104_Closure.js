function startbrowser(){
    let name = "edge";

    function installBrowser(){
        console.log(name);
    }

    return installBrowser;
}
const runTc = startbrowser();
runTc();