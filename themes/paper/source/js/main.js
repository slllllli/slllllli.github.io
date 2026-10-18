(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;

  /* ----------------------------------------------------------
     Color theme
     ---------------------------------------------------------- */
  var themeButton = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('paper-room-theme', theme);
    } catch (error) { /* ignore */ }
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ----------------------------------------------------------
     Mobile navigation
     ---------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var navLabel = navToggle ? navToggle.getAttribute('aria-label') : '';

  function closeNav() {
    if (!header) return;
    header.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      if (navLabel) navToggle.setAttribute('aria-label', navLabel);
    }
  }

  if (navToggle && header) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    if (nav) {
      nav.addEventListener('click', function (event) {
        if (event.target.closest('a')) closeNav();
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    document.addEventListener('click', function (event) {
      if (header.classList.contains('nav-open') && !header.contains(event.target)) closeNav();
    });
  }

  /* ----------------------------------------------------------
     Reading progress
     ---------------------------------------------------------- */
  var progressBar = document.getElementById('reading-progress-bar');
  var isPost = body.classList.contains('is-post');

  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var progress = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
    progressBar.style.width = (progress * 100).toFixed(2) + '%';
  }

  if (progressBar && isPost) {
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  /* ----------------------------------------------------------
     Active table-of-contents link
     ---------------------------------------------------------- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc-list a'));
  var headings = tocLinks
    .map(function (link) {
      var id = decodeURIComponent(link.getAttribute('href').replace(/^#/, ''));
      return document.getElementById(id);
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && headings.length) {
    var visible = new Set();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });

      var activeId = null;
      headings.forEach(function (heading) {
        if (!activeId && visible.has(heading.id)) activeId = heading.id;
      });

      tocLinks.forEach(function (link) {
        var id = decodeURIComponent(link.getAttribute('href').replace(/^#/, ''));
        link.classList.toggle('is-active', id === activeId);
      });
    }, { rootMargin: '-90px 0px -65% 0px', threshold: [0, 1] });

    headings.forEach(function (heading) { observer.observe(heading); });
  }

  /* ----------------------------------------------------------
     Copy code buttons
     ---------------------------------------------------------- */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();

      try {
        document.execCommand('copy');
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(area);
      }
    });
  }

  var isZh = (document.documentElement.lang || '').toLowerCase().indexOf('zh') === 0;

  Array.prototype.forEach.call(document.querySelectorAll('.prose pre'), function (pre) {
    if (pre.closest('.gutter')) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.textContent = isZh ? '复制' : 'Copy';

    button.addEventListener('click', function () {
      var clone = pre.cloneNode(true);
      var cloneButton = clone.querySelector('.code-copy');
      if (cloneButton) cloneButton.remove();

      copyText(clone.innerText).then(function () {
        button.textContent = isZh ? '已复制' : 'Copied';
        window.setTimeout(function () { button.textContent = isZh ? '复制' : 'Copy'; }, 1600);
      }).catch(function () {
        button.textContent = isZh ? '复制失败' : 'Failed';
      });
    });

    pre.appendChild(button);
  });

  /* ----------------------------------------------------------
     External links
     ---------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="http"]'), function (link) {
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
})();
