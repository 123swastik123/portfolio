const fs = require('fs');
const path = require('path');
const https = require('https');

const filesToInclude = [
  'package.json',
  'tsconfig.json',
  'next.config.ts',
  'postcss.config.mjs',
  'src/app/globals.css',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/icon.svg',
  'src/app/api/image/[name]/route.ts',
  'src/components/About.tsx',
  'src/components/AiLab.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/GitHubSection.tsx',
  'src/components/Hero.tsx',
  'src/components/icons/GithubIcon.tsx',
  'src/components/Interests.tsx',
  'src/components/Journey.tsx',
  'src/components/MarqueeTicker.tsx',
  'src/components/Navbar.tsx',
  'src/components/ProjectModal.tsx',
  'src/components/Projects.tsx',
  'src/components/SkillsMatrix.tsx',
  'src/data/portfolioData.ts',
  'src/data/projectScreenshots.ts',
  'src/types/index.ts',
  'public/resume.pdf',
  'public/projects/nammapath.png',
  'public/projects/hydromonitor.png',
  'public/projects/autoclip.png',
  'public/file.svg',
  'public/globe.svg',
  'public/next.svg',
  'public/vercel.svg',
  'public/window.svg'
];

console.log('Preparing deployment payload with ' + filesToInclude.length + ' files...');

const filesPayload = [];

for (const relPath of filesToInclude) {
  const normPath = relPath.replace(/\//g, path.sep);
  if (!fs.existsSync(normPath)) {
    console.warn('File not found:', normPath);
    continue;
  }
  const isBinary = relPath.endsWith('.png') || relPath.endsWith('.pdf');
  const buffer = fs.readFileSync(normPath);
  
  if (isBinary) {
    filesPayload.push({
      file: relPath.replace(/\\/g, '/'),
      data: buffer.toString('base64'),
      encoding: 'base64'
    });
  } else {
    filesPayload.push({
      file: relPath.replace(/\\/g, '/'),
      data: buffer.toString('utf-8')
    });
  }
}

console.log('Payload files prepared:', filesPayload.length);

const requestBody = JSON.stringify({
  jsonrpc: '2.0',
  id: Date.now(),
  method: 'tools/call',
  params: {
    name: 'COMPOSIO_MULTI_EXECUTE_TOOL',
    arguments: {
      thought: 'Deploy updated portfolio website with massive uppercase typography and hydroponics ML tester to Vercel production',
      sync_response_to_workbench: false,
      tools: [
        {
          tool_slug: 'VERCEL_CREATE_NEW_DEPLOYMENT',
          account: 'vercel_jabers-whid',
          arguments: {
            name: 'swastik-portfolio',
            project: 'prj_u09jB1m2QbGb6EoFdu1xlKPa4eUd',
            teamId: 'team_d0pb3196zFzwoQlUjiuTsqu6',
            target: 'production',
            files: filesPayload
          }
        }
      ]
    }
  }
});

console.log('Sending request to Composio MCP endpoint... Size:', requestBody.length);

const req = https.request('https://connect.composio.dev/mcp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream',
    'Authorization': 'Bearer ck_Pb0z2ATXe0XQjOQ47cQx'
  },
  timeout: 120000
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const lines = body.split('\n');
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        try {
          const json = JSON.parse(line.slice(6));
          if (json.result && json.result.content) {
            console.log('Result content:');
            for (const c of json.result.content) {
              console.log(c.text ? c.text.slice(0, 1500) : c);
            }
          } else {
            console.log('Response JSON:', JSON.stringify(json, null, 2).slice(0, 1000));
          }
        } catch {
          console.log('Raw data line:', line.slice(0, 500));
        }
      }
    }
  });
});

req.on('error', (err) => {
  console.error('Request failed:', err);
});

req.write(requestBody);
req.end();
