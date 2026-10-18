'use strict';

/**
 * Bilingual route generation.
 *
 * English lives at the site root and Chinese under /zh/.
 * Both trees are generated from the same post collection, filtered by
 * `lang` front matter. Registering the generators under the built-in names
 * replaces Hexo's single-language index/archive/tag/category generators.
 */

const pagination = require('hexo-pagination');

const LANGS = ['en', 'zh'];

function langOf(post) {
  return post && post.lang === 'zh' ? 'zh' : 'en';
}

function baseFor(lang) {
  return lang === 'zh' ? 'zh/' : '';
}

function postsFor(posts, lang) {
  return posts.toArray().filter(post => langOf(post) === lang);
}

function byDateDesc(a, b) {
  return b.date.valueOf() - a.date.valueOf();
}

function byStickyThenDate(a, b) {
  return (Number(b.sticky) || 0) - (Number(a.sticky) || 0) || byDateDesc(a, b);
}

hexo.extend.generator.register('index', function (locals) {
  const perPage = this.config.index_generator.per_page;
  const result = [];

  LANGS.forEach(lang => {
    const posts = postsFor(locals.posts, lang).sort(byStickyThenDate);
    result.push(...pagination(baseFor(lang), posts, {
      perPage,
      layout: 'index',
      format: 'page/%d/',
      data: {
        lang,
        __index: true
      }
    }));
  });

  return result;
});

hexo.extend.generator.register('archive', function (locals) {
  const result = [];

  LANGS.forEach(lang => {
    const posts = postsFor(locals.posts, lang).sort(byDateDesc);
    result.push(...pagination(baseFor(lang) + 'archives/', posts, {
      perPage: 0,
      layout: 'archive',
      data: {
        lang,
        archive: true
      }
    }));
  });

  return result;
});

// Topics are rendered by a hand-written page per language, so the
// single-language tag/category route generators are disabled.
hexo.extend.generator.register('tag', () => []);
hexo.extend.generator.register('category', () => []);
