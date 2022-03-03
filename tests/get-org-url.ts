import * as process from 'child_process'; 

export default function getURL(dir){
    const url = execute(dir);
    return url;
}

function execute(dir){
    const display = process.spawnSync('sfdx', ['force:org:display'], {cwd: dir});
    return processLineByLine(display.stdout.toString());
}

function processLineByLine(data) {

    let accessToken = '';
    let instanceUrl = '';

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    lines.map(line => {
        if(line.includes('Access Token')){
            accessToken = line.split('     ')[1];
        }

        if(line.includes('Instance Url')){
            instanceUrl = line.split('     ')[1];
        }

    });

    return instanceUrl + '/secur/frontdoor.jsp?sid=' + accessToken;

}
