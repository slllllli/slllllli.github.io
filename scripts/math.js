'use strict';

/**
 * Build-time math rendering with KaTeX.
 *
 * Math is replaced by HTML-comment tokens before Markdown is parsed, then
 * expanded into KaTeX HTML after rendering. This keeps `$...$` and `$$...$$`
 * away from the Markdown tokenizer and avoids a client-side CDN dependency.
 */

const katex = require('katex');

function token(kind, tex) {
  const encoded = Buffer.from(tex.trim(), 'utf8').toString('base64');
  return `<!--KATEX_${kind}_${encoded}-->`;
}

function transformSegment(text) {
  let output = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => token('DISPLAY', tex));
  output = output.replace(/(^|[^\\$])\$([^\s$][^$\n]*?)\$/g, (_, prefix, tex) => {
    return prefix + token('INLINE', tex);
  });
  return output;
}

function transformMarkdown(text) {
  if (!text || text.indexOf('$') === -1) return text;

  // Do not treat dollar signs inside fenced or inline code as math.
  const parts = text.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]*`)/g);
  return parts
    .map((part, index) => (index % 2 === 1 ? part : transformSegment(part)))
    .join('');
}

hexo.extend.filter.register('before_post_render', function (data) {
  if (!data.content) return data;
  data.content = transformMarkdown(data.content);
  return data;
});

hexo.extend.filter.register('after_post_render', function (data) {
  if (!data.content || data.content.indexOf('KATEX_') === -1) return data;

  // Remove the paragraph wrapper around a standalone display equation.
  data.content = data.content.replace(
    /<p>\s*(<!--KATEX_DISPLAY_([A-Za-z0-9+/=]+)-->)\s*<\/p>/g,
    '$1'
  );

  data.content = data.content.replace(
    /<!--KATEX_(INLINE|DISPLAY)_([A-Za-z0-9+/=]+)-->/g,
    (_, kind, encoded) => {
      const tex = Buffer.from(encoded, 'base64').toString('utf8');
      const html = katex.renderToString(tex, {
        displayMode: kind === 'DISPLAY',
        throwOnError: false,
        strict: 'ignore',
        trust: false,
        output: 'html'
      });

      return kind === 'DISPLAY'
        ? `<div class="math math-display">${html}</div>`
        : `<span class="math math-inline">${html}</span>`;
    }
  );

  return data;
});
