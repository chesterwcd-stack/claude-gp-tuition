// Shared DOCX building utilities for GP Mastery Programme
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType,
  LevelFormat, NumberFormat, convertInchesToTwip, PageOrientation,
  UnderlineType, VerticalAlign,
} = require('docx');

// A4 dimensions in DXA (twentieths of a point)
const PAGE_WIDTH = 11906;
const PAGE_HEIGHT = 16838;
const MARGIN = 1200;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2; // 9506

// Colour palette
const COLOURS = {
  navy: '1B2A4A',
  gold: 'D97706',
  green: '16A34A',
  white: 'FFFFFF',
  lightGrey: 'F3F4F6',
  offWhite: 'FAFAFA',
  black: '111827',
  darkGrey: '374151',
  midGrey: '6B7280',
  // ARGUE
  orange: 'F97316',
  teal: '0D9488',
  purple: '7C3AED',
  blue: '2563EB',
  red: 'DC2626',
  // Pillar accent (override per pillar)
  accent: '16A34A',
};

const FONTS = { heading: 'Georgia', body: 'Calibri' };

// ── Typography helpers ─────────────────────────────────────────────────────

function h1(text, colour = COLOURS.navy) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 120 },
    children: [new TextRun({ text, font: FONTS.heading, size: 36, bold: true, color: colour })],
  });
}

function h2(text, colour = COLOURS.navy) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 100 },
    children: [new TextRun({ text, font: FONTS.heading, size: 28, bold: true, color: colour })],
  });
}

function h3(text, colour = COLOURS.navy) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, font: FONTS.heading, size: 24, bold: true, color: colour })],
  });
}

function h4(text, colour = COLOURS.darkGrey) {
  return new Paragraph({
    spacing: { before: 160, after: 60 },
    children: [new TextRun({ text, font: FONTS.heading, size: 22, bold: true, color: colour })],
  });
}

function body(text, { bold = false, italic = false, colour = COLOURS.black, size = 20 } = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: FONTS.body, size, bold, italic, color: colour })],
  });
}

function bodyMixed(runs, { spacing } = {}) {
  return new Paragraph({
    spacing: spacing || { before: 60, after: 60 },
    children: runs.map(r =>
      new TextRun({ font: FONTS.body, size: 20, ...r })
    ),
  });
}

function bullet(text, { level = 0, bold = false, colour = COLOURS.black } = {}) {
  return new Paragraph({
    bullet: { level },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, font: FONTS.body, size: 20, bold, color: colour })],
  });
}

function spacer(lines = 1) {
  return new Paragraph({ spacing: { before: lines * 100, after: 0 }, children: [new TextRun('')] });
}

function divider(colour = COLOURS.lightGrey) {
  return new Paragraph({
    spacing: { before: 100, after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: colour } },
    children: [new TextRun('')],
  });
}

function label(text, bgColour = COLOURS.navy, textColour = COLOURS.white) {
  return new Paragraph({
    spacing: { before: 80, after: 60 },
    shading: { type: ShadingType.CLEAR, color: bgColour, fill: bgColour },
    children: [new TextRun({ text: `  ${text}  `, font: FONTS.heading, size: 22, bold: true, color: textColour })],
  });
}

// ── Table helpers ──────────────────────────────────────────────────────────

function cell(children, { shade, width, vAlign } = {}) {
  const opts = { children: Array.isArray(children) ? children : [children] };
  if (shade) opts.shading = { type: ShadingType.CLEAR, color: shade, fill: shade };
  if (width) opts.width = { size: width, type: WidthType.DXA };
  if (vAlign) opts.verticalAlign = vAlign;
  return new TableCell(opts);
}

function headerRow(cells, bgColour = COLOURS.navy) {
  return new TableRow({
    children: cells.map(text =>
      cell(
        new Paragraph({ children: [new TextRun({ text, font: FONTS.heading, size: 20, bold: true, color: COLOURS.white })] }),
        { shade: bgColour }
      )
    ),
    tableHeader: true,
  });
}

function dataRow(cells) {
  return new TableRow({
    children: cells.map(content =>
      cell(
        Array.isArray(content)
          ? content
          : new Paragraph({ spacing: { before: 60, after: 60 }, children: [new TextRun({ text: content, font: FONTS.body, size: 20 })] })
      )
    ),
  });
}

function simpleTable(headers, rows, { accentColour = COLOURS.navy } = {}) {
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    rows: [
      headerRow(headers, accentColour),
      ...rows.map(r => dataRow(r)),
    ],
  });
}

// ── Argument block ─────────────────────────────────────────────────────────
// Renders a FOR or AGAINST argument block with full ARGUE structure

function argumentBlock(arg, { side = 'FOR', accentColour = COLOURS.green } = {}) {
  const sideColour = side === 'FOR' ? COLOURS.green : COLOURS.red;
  const items = [];

  items.push(label(`${side}: ${arg.claim}`, sideColour, COLOURS.white));
  items.push(bodyMixed([
    { text: 'Reasoning: ', bold: true },
    { text: arg.reasoning },
  ]));

  items.push(body('Evidence:', { bold: true }));
  (arg.evidence || []).forEach(ev => items.push(bullet(ev)));

  if (arg.sg) {
    items.push(bodyMixed([
      { text: 'Singapore angle: ', bold: true, color: COLOURS.teal },
      { text: arg.sg },
    ]));
  }

  if (arg.tip) {
    items.push(bodyMixed([
      { text: 'Essay usage tip: ', bold: true, color: COLOURS.gold },
      { text: arg.tip, italic: true },
    ]));
  }

  items.push(spacer(0.5));
  return items;
}

// ── Reference entry ────────────────────────────────────────────────────────

function sgRefEntry(entry) {
  return [
    bodyMixed([{ text: entry.name, bold: true, color: COLOURS.navy }]),
    body(entry.what),
    bodyMixed([
      { text: 'GP use: ', bold: true, color: COLOURS.teal },
      { text: entry.gpUse },
    ]),
    bodyMixed([
      { text: 'Critical angle: ', bold: true, color: COLOURS.orange },
      { text: entry.critical },
    ]),
    spacer(0.4),
  ];
}

function intlRefEntry(entry) {
  return [
    bodyMixed([{ text: entry.name, bold: true, color: COLOURS.navy }]),
    body(entry.facts),
    bodyMixed([
      { text: 'GP application: ', bold: true, color: COLOURS.teal },
      { text: entry.gpUse },
    ]),
    spacer(0.4),
  ];
}

// ── Document factory ────────────────────────────────────────────────────────

function makeDocument(sections) {
  return new Document({
    styles: {
      default: {
        document: {
          run: { font: FONTS.body, size: 20, color: COLOURS.black },
        },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
          margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
        },
      },
      children: sections,
    }],
  });
}

async function saveDocx(doc, filepath) {
  const buf = await Packer.toBuffer(doc);
  require('fs').writeFileSync(filepath, buf);
  console.log(`  Saved: ${filepath}`);
}

module.exports = {
  COLOURS, FONTS, CONTENT_WIDTH,
  h1, h2, h3, h4, body, bodyMixed, bullet, spacer, divider, label,
  cell, headerRow, dataRow, simpleTable,
  argumentBlock, sgRefEntry, intlRefEntry,
  makeDocument, saveDocx,
};
