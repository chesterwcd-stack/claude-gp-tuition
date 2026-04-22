// Build CP02 Environment — Tutor Guide + Student Handout
const path = require('path');
const content = require('./content/cp02-environment');
const { buildTutorGuide, buildStudentHandout } = require('./lib/pillar-builder');

const OUT = path.resolve(__dirname, '../GP_ClaudeFilesZip');

async function main() {
  console.log(`\nBuilding ${content.code}: ${content.pillar}...`);
  await buildTutorGuide(content, path.join(OUT, `${content.code}_${content.pillar.replace(/\s+/g,'')}_TutorGuide.docx`));
  await buildStudentHandout(content, path.join(OUT, `${content.code}_${content.pillar.replace(/\s+/g,'')}_StudentHandout.docx`));
  console.log(`\nDone. Files saved to GP_ClaudeFilesZip/\n`);
}

main().catch(console.error);
