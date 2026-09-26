const fs = require('fs');
const dataStr = fs.readFileSync('C:/Users/doeha/.claude/projects/D--clone-clone-w0rdpre55-l091n/f385f05c-3eae-4434-b5ca-6ef9ee3217de/tool-results/call_2556906.json', 'utf8');
const dataObj = JSON.parse(dataStr);
let rawJson = dataObj[0].text;
rawJson = rawJson.replace('Execution result:\n"', '');
rawJson = rawJson.substring(0, rawJson.length - 1);
rawJson = rawJson.replace(/\\"/g, '"');
rawJson = rawJson.replace(/\\\\"/g, '\\"');

fs.writeFileSync('parsed_wp.json', rawJson);
