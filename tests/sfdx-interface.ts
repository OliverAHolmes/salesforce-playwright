import * as process from 'child_process'; 

export default function getOrgURLs(dir){
    return execute(dir);
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

    return [
        instanceUrl, 
        instanceUrl + '/secur/frontdoor.jsp?sid=' + accessToken // frontdoor url
    ];

}
