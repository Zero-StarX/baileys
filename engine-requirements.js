const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(`
┌─────────────────────────────────────────┐
│              NODE VERSION ERROR         │
├─────────────────────────────────────────┤
│  This package requires Node.js 20+       │
│  Your current version : ${process.versions.node}       │
│                                           │
│  Please upgrade Node.js to continue.      │
└─────────────────────────────────────────┘
`);
  process.exit(1);
}
