'use strict';

/**
 * Approximate reading time for mixed English/Chinese content.
 * CJK characters are counted individually; Latin text is counted in words.
 */
hexo.extend.filter.register('after_post_render', function (data) {
  if (!data.content) return data;

  const text = data.content
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ');

  const cjk = (text.match(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g) || []).length;
  const latin = (text
    .replace(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g, ' ')
    .match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) || []).length;

  data.reading_time = Math.max(1, Math.ceil(cjk / 400 + latin / 220));
  data.word_count = cjk + latin;

  return data;
});
