const path = require('path');
const content = require('./content/cp04-economics');
const { buildTutorGuide, buildStudentHandout } = require('./lib/pillar-builder');
const OUT = path.resolve(__dirname, '../GP_ClaudeFilesZip');

async function main() {
  console.log(`\nBuilding ${content.code}: ${content.pillar}...`);
  await buildTutorGuide(content, path.join(OUT, `${content.code}_Economics_TutorGuide.docx`));
  await buildStudentHandout(content, path.join(OUT, `${content.code}_Economics_StudentHandout.docx`));
  console.log(`Done.\n`);
}
main().catch(console.error);
