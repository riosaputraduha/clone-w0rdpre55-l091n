const fs = require('fs');
const dataStr = fs.readFileSync('C:/Users/doeha/.claude/projects/D--clone-clone-w0rdpre55-l091n/f385f05c-3eae-4434-b5ca-6ef9ee3217de/tool-results/call_2556906.json', 'utf8');
const dataObj = JSON.parse(dataStr);
let rawJson = dataObj[0].text.replace(/^Execution result:\n\"/, '').replace(/\"$/, '').replace(/\\\\\"/g, '\"');
let parsed = JSON.parse(rawJson);

let out = `# Component Specs

`;

function writeSpec(node) {
  if (node.classes && (node.classes.includes('wp-login__one-login-layout-heading-text') ||
      node.classes.includes('wp-login__one-login-layout-subheading') ||
      node.classes.includes('components-button') ||
      node.classes.includes('auth-form__social') ||
      node.classes.includes('form-input') ||
      node.classes.includes('social-buttons__button'))) {
    out += `\n### Class: ${node.classes}\n`;
    out += `- text: ${node.text || 'null'}\n`;
    for (let k in node.styles) {
      out += `- ${k}: ${node.styles[k]}\n`;
    }
  }
  if (node.children) node.children.forEach(writeSpec);
}

writeSpec(parsed);
fs.writeFileSync('docs/research/wordpress-46d5be19/log-in-83858b19/components/styles.txt', out);
