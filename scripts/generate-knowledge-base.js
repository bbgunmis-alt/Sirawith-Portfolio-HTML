const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(ROOT, 'my-portfolio-2', 'content-hub.md');
const OUT_DIR = path.join(ROOT, 'knowledge-base');
const BASE_URL = 'https://bbgunmis-alt.github.io/my-portfolio-2';

const raw = fs.readFileSync(SOURCE, 'utf8').replace(/\r/g, '');

const splitRegex = /(?=^(?:## VECTOR \d+:|VECTOR \d+:|## \d+\. |# [^#]))/gm;
const chunks = raw.split(splitRegex).map((c) => c.trim()).filter(Boolean);

function parseHeading(chunk) {
  const lines = chunk.split('\n');
  const first = lines[0];
  let m = first.match(/^## VECTOR (\d+):\s*(.+)$/);
  if (m) return { title: `VECTOR ${m[1]}: ${m[2].trim()}`, vectorNum: Number(m[1]) };
  m = first.match(/^VECTOR (\d+):\s*(.+)$/);
  if (m) return { title: `VECTOR ${m[1]}: ${m[2].trim()}`, vectorNum: Number(m[1]) };
  m = first.match(/^## (\d+)\.\s*(.+)$/);
  if (m) return { title: `${m[1]}. ${m[2].trim()}`, vectorNum: null };
  m = first.match(/^#\s+(.+)$/);
  if (m) return { title: m[1].trim(), vectorNum: null };
  return { title: first.slice(0, 120), vectorNum: null };
}

function dedupeTopics(list) {
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const key = item.title.replace(/\s+/g, ' ').toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function firstTwoSentences(text) {
  const body = text.replace(/^[^\n]+\n/, '').trim();
  const thaiLines = body
    .split('\n')
    .map((l) => l.replace(/\*\*/g, '').trim())
    .filter((l) => l && /[\u0E00-\u0E7F]/.test(l));

  if (thaiLines.length >= 2) {
    const first = thaiLines[0];
    let second = thaiLines[1];
    const periodIdx = second.search(/[.!?…]/);
    if (periodIdx > 40) second = second.slice(0, periodIdx + 1);
    else if (second.length > 220) second = second.slice(0, 220).trim() + '…';
    return `${first} ${second}`.trim();
  }

  if (thaiLines.length === 1) {
    const s = thaiLines[0];
    const periodIdx = s.search(/[.!?…]/);
    if (periodIdx > 30) return s.slice(0, periodIdx + 1);
    return s.length > 240 ? s.slice(0, 240).trim() + '…' : s;
  }

  return 'Leadflow TH คือระบบ AI Chatbot Automation สำหรับรับออเดอร์ร้านอาหารผ่าน LINE OA ระบบทำงานตลอด 24 ชั่วโมงเพื่อลดออเดอร์ตกหล่น';
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function mdToHtml(md) {
  const lines = md.split('\n');
  const html = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (i === 0 && /^(## VECTOR|VECTOR \d+:|## \d+\.|# )/.test(line)) continue;

    if (/^### /.test(line)) {
      closeList();
      html.push(`<h3>${inline(line.replace(/^### /, ''))}</h3>`);
      continue;
    }
    if (/^## /.test(line)) {
      closeList();
      html.push(`<h2>${inline(line.replace(/^## /, ''))}</h2>`);
      continue;
    }
    if (/^# /.test(line)) {
      closeList();
      html.push(`<h2>${inline(line.replace(/^# /, ''))}</h2>`);
      continue;
    }
    if (/^\* /.test(line) || /^- /.test(line)) {
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${inline(line.replace(/^[\*-] /, ''))}</li>`);
      continue;
    }
    if (line.trim() === '---') {
      closeList();
      html.push('<hr>');
      continue;
    }
    if (!line.trim()) {
      closeList();
      continue;
    }
    closeList();
    html.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  return html.join('\n');
}

function inline(s) {
  return escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

function pageHtml({ index, title, summary, bodyMd }) {
  const slug = `topic-${index}.html`;
  const canonical = `${BASE_URL}/knowledge-base/${slug}`;
  const article = mdToHtml(bodyMd);
  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} | Leadflow TH Knowledge Base</title>
  <meta name="description" content="${escapeHtml(summary)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index,follow">
  <style>
    body { font-family: 'Segoe UI', Kanit, sans-serif; line-height: 1.7; color: #1f2937; max-width: 820px; margin: 0 auto; padding: 24px 16px 48px; }
    h1 { font-size: 1.75rem; margin-bottom: 1rem; }
    .summary { background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 16px; margin: 0 0 24px; font-size: 1.05rem; }
    article h2 { font-size: 1.25rem; margin-top: 1.5rem; }
    article h3 { font-size: 1.1rem; margin-top: 1.25rem; }
    article ul { padding-left: 1.25rem; }
    footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 0.95rem; }
    footer a { color: #2563eb; }
  </style>
</head>
<body>
  <main>
    <h1>${escapeHtml(title)}</h1>
    <p class="summary">${escapeHtml(summary)}</p>
    <article>
${article}
    </article>
  </main>
  <footer>
    <p><a href="${BASE_URL}">${BASE_URL}</a> · <a href="${BASE_URL}/knowledge-base/">${BASE_URL}/knowledge-base/</a></p>
  </footer>
</body>
</html>
`;
}

const parsed = chunks.map((chunk) => {
  const { title } = parseHeading(chunk);
  return { title, chunk };
});

const topics = dedupeTopics(parsed);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const manifest = [];
const now = new Date().toUTCString();

topics.forEach((topic, i) => {
  const index = i + 1;
  const summary = firstTwoSentences(topic.chunk);
  const html = pageHtml({ index, title: topic.title, summary, bodyMd: topic.chunk });
  const filename = `topic-${index}.html`;
  fs.writeFileSync(path.join(OUT_DIR, filename), html, 'utf8');
  manifest.push({ index, filename, title: topic.title, summary, url: `${BASE_URL}/knowledge-base/${filename}` });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${manifest
  .map(
    (m) => `  <url>
    <loc>${m.url}</loc>
    <lastmod>2026-05-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Leadflow TH Knowledge Base</title>
    <link>${BASE_URL}/knowledge-base/</link>
    <description>Leadflow TH — AI chatbot automation knowledge articles for restaurant LINE OA order management.</description>
    <language>th</language>
    <lastBuildDate>${now}</lastBuildDate>
${manifest
  .map(
    (m) => `    <item>
      <title>${escapeHtml(m.title)}</title>
      <link>${m.url}</link>
      <guid isPermaLink="true">${m.url}</guid>
      <description>${escapeHtml(m.summary)}</description>
      <pubDate>${now}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(ROOT, 'rss.xml'), rss, 'utf8');
fs.writeFileSync(path.join(OUT_DIR, '_manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

console.log(JSON.stringify({ topics: manifest.length, outDir: OUT_DIR }));
