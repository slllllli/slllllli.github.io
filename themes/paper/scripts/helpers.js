'use strict';

/**
 * Theme helpers for the bilingual Paper Room theme.
 * UI strings live here so both language trees can be rendered in one build.
 */

const I18N = {
  en: {
    'nav.home': 'Notes',
    'nav.archives': 'Archive',
    'nav.topics': 'Topics',
    'nav.about': 'About',
    'brand.mark': 'PR',
    'header.github': 'GitHub',
    'header.menu': 'Menu',
    'header.skip': 'Skip to content',
    'lang.switch': 'Switch language',
    'lang.en': 'EN',
    'lang.zh': '中文',
    'theme.toggle': 'Toggle color theme',
    'common.pinned': 'Pinned',
    'common.min_read': 'min read',
    'common.read_note': 'Read note',
    'common.view_all': 'View all notes',
    'common.published': 'Published',
    'common.updated': 'Updated',
    'common.category': 'Category',
    'common.tags': 'Tags',
    'common.no_posts': 'Nothing here yet.',
    'home.eyebrow': 'A notebook for close readings',
    'home.title': 'Read the paper. Then read between the lines.',
    'home.description':
      'The Paper Room is a working notebook for understanding the ideas that moved machine learning — one equation, one experiment, one honest limitation at a time.',
    'home.cta_primary': 'Start with the introduction',
    'home.cta_secondary': 'Browse the archive',
    'home.stat_notes': 'notes published',
    'home.stat_topics': 'topic threads',
    'home.stat_languages': 'languages',
    'home.pinned': 'Start here',
    'home.pinned_desc': 'The pinned note explains how the analyses in this notebook are built.',
    'home.latest': 'Latest notes',
    'home.latest_desc': 'Close readings, working notes, and the occasional correction.',
    'home.empty': 'The first note is on its way.',
    'home.how_title': 'How a note is built',
    'home.how_desc': 'Every analysis follows the same four-pass structure, so notes stay comparable.',
    'home.how_1_title': 'The question',
    'home.how_1_desc':
      'What was actually hard before this paper? Reconstruct the bottleneck, not the abstract.',
    'home.how_2_title': 'The mechanism',
    'home.how_2_desc':
      'The central idea, the equations that carry it, and the tensor shapes that make it concrete.',
    'home.how_3_title': 'The evidence',
    'home.how_3_desc':
      'Which experiments are load-bearing, what the ablations isolate, and what the baselines hide.',
    'home.how_4_title': 'The limits',
    'home.how_4_desc':
      'Where the argument stops, what later work repaired, and what is still an open question.',
    'home.roadmap_title': 'On the desk',
    'home.roadmap_desc': 'The reading queue for the next few notes.',
    'home.roadmap_note': 'Suggestions are welcome on GitHub.',
    'archive.title': 'Archive',
    'archive.desc': 'Every note, newest first, grouped by year.',
    'archive.year': '',
    'archive.empty': 'No notes yet.',
    'topics.title': 'Topics',
    'topics.desc': 'Browse the notebook by theme and by paper.',
    'topics.categories': 'Threads',
    'topics.tags': 'Tags',
    'topics.count': 'notes',
    'topics.empty': 'Topics will appear as notes are published.',
    'post.toc': 'On this page',
    'post.previous': 'Previous note',
    'post.next': 'Next note',
    'post.also_available': 'Also available in',
    'post.back': 'Back to all notes',
    'post.pinned_note': 'This is the pinned introduction to the notebook.',
    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
    'pagination.page': 'Page',
    'footer.tagline': 'A bilingual notebook for close readings of machine-learning papers.',
    'footer.explore': 'Explore',
    'footer.built': 'Built with Hexo. Words and mistakes are mine.',
    'footer.rights': 'Some rights reserved.',
    'footer.top': 'Back to top'
  },
  zh: {
    'nav.home': '笔记',
    'nav.archives': '归档',
    'nav.topics': '主题',
    'nav.about': '关于',
    'brand.mark': '论',
    'header.github': 'GitHub',
    'header.menu': '菜单',
    'header.skip': '跳到正文',
    'lang.switch': '切换语言',
    'lang.en': 'EN',
    'lang.zh': '中文',
    'theme.toggle': '切换明暗主题',
    'common.pinned': '置顶',
    'common.min_read': '分钟阅读',
    'common.read_note': '阅读笔记',
    'common.view_all': '查看全部笔记',
    'common.published': '发布于',
    'common.updated': '更新于',
    'common.category': '分类',
    'common.tags': '标签',
    'common.no_posts': '这里还没有内容。',
    'home.eyebrow': '一份论文精读笔记',
    'home.title': '先读懂论文，再读懂弦外之音。',
    'home.description':
      '「论文解构室」是一份工作笔记：拆解推动机器学习前进的关键思想——从一条公式、一个实验，到一处诚实的局限。',
    'home.cta_primary': '从开篇读起',
    'home.cta_secondary': '浏览归档',
    'home.stat_notes': '篇笔记',
    'home.stat_topics': '个主题',
    'home.stat_languages': '种语言',
    'home.pinned': '从这里开始',
    'home.pinned_desc': '置顶文章说明了这份笔记的分析方式。',
    'home.latest': '最新笔记',
    'home.latest_desc': '精读、工作草稿，以及偶尔的更正。',
    'home.empty': '第一篇笔记正在路上。',
    'home.how_title': '一篇笔记如何展开',
    'home.how_desc': '每篇分析都遵循同样的四步结构，让笔记之间可以互相比较。',
    'home.how_1_title': '问题',
    'home.how_1_desc': '在这篇论文之前，真正难的是什么？还原瓶颈，而不是复述摘要。',
    'home.how_2_title': '机制',
    'home.how_2_desc': '核心想法、承载它的公式，以及让想法落到实处的张量形状。',
    'home.how_3_title': '证据',
    'home.how_3_desc': '哪些实验真正承重，消融实验隔离了什么，基线又掩盖了什么。',
    'home.how_4_title': '局限',
    'home.how_4_desc': '论证在哪里停下，后续工作修补了什么，什么仍是开放问题。',
    'home.roadmap_title': '案头书单',
    'home.roadmap_desc': '接下来几篇笔记的阅读队列。',
    'home.roadmap_note': '欢迎在 GitHub 上留言推荐论文。',
    'archive.title': '归档',
    'archive.desc': '全部笔记，按时间倒序，以年份分组。',
    'archive.year': '',
    'archive.empty': '还没有笔记。',
    'topics.title': '主题',
    'topics.desc': '按主题和论文浏览这份笔记。',
    'topics.categories': '主题线',
    'topics.tags': '标签',
    'topics.count': '篇',
    'topics.empty': '发布笔记后，主题会自动出现在这里。',
    'post.toc': '本页目录',
    'post.previous': '上一篇',
    'post.next': '下一篇',
    'post.also_available': '其他语言版本',
    'post.back': '返回全部笔记',
    'post.pinned_note': '这是本站的置顶开篇说明。',
    'pagination.previous': '上一页',
    'pagination.next': '下一页',
    'pagination.page': '第',
    'footer.tagline': '一份中英双语的机器学习论文精读笔记。',
    'footer.explore': '浏览',
    'footer.built': '由 Hexo 驱动。文字与错误都归我。',
    'footer.rights': '保留部分权利。',
    'footer.top': '回到顶部'
  }
};

function langOf(page) {
  return page && page.lang === 'zh' ? 'zh' : 'en';
}

function targetLang(lang) {
  return lang === 'zh' ? 'en' : 'zh';
}

function postsOf(site, lang) {
  return site.posts.toArray().filter(post => langOf(post) === lang);
}

function localizedPath(path, lang) {
  if (lang !== 'zh') return path;
  return path === '/' ? '/zh/' : '/zh' + path;
}

hexo.extend.helper.register('t', function (key, lang) {
  const dict = I18N[lang] || I18N.en;
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (I18N.en[key] || key);
});

hexo.extend.helper.register('current_lang', function (page) {
  return langOf(page);
});

hexo.extend.helper.register('html_lang', function (lang) {
  return lang === 'zh' ? 'zh-CN' : 'en';
});

hexo.extend.helper.register('site_title', function (lang) {
  return lang === 'zh' ? (this.config.title_zh || this.config.title) : this.config.title;
});

hexo.extend.helper.register('site_subtitle', function (lang) {
  return lang === 'zh' ? (this.config.subtitle_zh || this.config.subtitle) : this.config.subtitle;
});

hexo.extend.helper.register('site_description', function (lang) {
  return lang === 'zh'
    ? (this.config.description_zh || this.config.description)
    : this.config.description;
});

hexo.extend.helper.register('localized_path', function (path, lang) {
  return localizedPath(path, lang);
});

hexo.extend.helper.register('alt_path', function (page) {
  const lang = langOf(page);
  const target = targetLang(lang);
  const site = this.site;

  if (page.__index || page.layout === 'index') {
    return target === 'zh' ? 'zh/' : '';
  }

  if (page.archive) {
    return target === 'zh' ? 'zh/archives/' : 'archives/';
  }

  if (page.translation) {
    const otherPost = site.posts.toArray().find(
      post => langOf(post) === target && post.translation === page.translation
    );
    if (otherPost) return otherPost.path;

    const otherPage = site.pages.toArray().find(
      item => langOf(item) === target && item.translation === page.translation
    );
    if (otherPage) return otherPage.path;
  }

  return target === 'zh' ? 'zh/' : '';
});

hexo.extend.helper.register('alt_lang', function (page) {
  return targetLang(langOf(page));
});

hexo.extend.helper.register('nav_active', function (page, key) {
  if (key === 'home') return Boolean(page.__index);
  if (key === 'archives') return Boolean(page.archive);
  if (key === 'topics') return page.layout === 'topics';
  if (key === 'about') return page.layout === 'page' && page.translation === 'about';
  return false;
});

hexo.extend.helper.register('format_date', function (date, lang, style) {
  if (!date) return '';
  const zh = lang === 'zh';
  if (style === 'short') {
    return typeof date.format === 'function'
      ? date.format(zh ? 'M月D日' : 'MMM D')
      : String(date);
  }
  return typeof date.format === 'function'
    ? date.format(zh ? 'YYYY年M月D日' : 'MMM D, YYYY')
    : String(date);
});

hexo.extend.helper.register('reading_time', function (post) {
  return Number(post.reading_time) || 1;
});

hexo.extend.helper.register('is_pinned', function (post) {
  return Number(post.sticky) > 0;
});

hexo.extend.helper.register('post_category', function (post) {
  const categories = post.categories ? post.categories.toArray() : [];
  return categories.length ? categories[0] : null;
});

hexo.extend.helper.register('excerpt_text', function (post, limit) {
  const max = limit || 180;
  const raw = post.excerpt || post.content || '';
  const text = raw
    .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(?:nbsp|amp|lt|gt|quot|#\d+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const chars = Array.from(text);

  if (chars.length <= max) return text;
  return chars.slice(0, max).join('').replace(/[\s,.;:!?，。；：！？-]+$/u, '') + '…';
});

hexo.extend.helper.register('sibling_post', function (post, direction) {
  const lang = langOf(post);
  const posts = postsOf(this.site, lang).sort((a, b) => b.date.valueOf() - a.date.valueOf());
  const index = posts.findIndex(item => item._id === post._id);

  if (index === -1) return null;
  return direction === 'older' ? (posts[index + 1] || null) : (posts[index - 1] || null);
});

hexo.extend.helper.register('topic_groups', function (lang) {
  const posts = postsOf(this.site, lang);
  const categories = new Map();

  posts.forEach(post => {
    (post.categories ? post.categories.toArray() : []).forEach(category => {
      if (!categories.has(category.name)) {
        categories.set(category.name, {
          name: category.name,
          slug: category.slug,
          count: 0,
          posts: []
        });
      }
      const entry = categories.get(category.name);
      entry.count += 1;
      entry.posts.push(post);
    });
  });

  return Array.from(categories.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
});

hexo.extend.helper.register('tag_groups', function (lang) {
  const posts = postsOf(this.site, lang);
  const tags = new Map();

  posts.forEach(post => {
    (post.tags ? post.tags.toArray() : []).forEach(tag => {
      if (!tags.has(tag.name)) {
        tags.set(tag.name, { name: tag.name, slug: tag.slug, count: 0 });
      }
      tags.get(tag.name).count += 1;
    });
  });

  return Array.from(tags.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
});

hexo.extend.helper.register('site_stats', function (lang) {
  const posts = postsOf(this.site, lang);
  const topics = new Set();
  let updated = null;

  posts.forEach(post => {
    (post.categories ? post.categories.toArray() : []).forEach(category => topics.add(category.name));
    if (!updated || post.updated.valueOf() > updated.valueOf()) updated = post.updated;
  });

  return {
    notes: posts.length,
    topics: topics.size,
    languages: 2,
    updated
  };
});
