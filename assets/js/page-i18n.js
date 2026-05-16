(function () {
    function setPageLang(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-en][data-th]').forEach(function (el) {
            var val = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
            if (val) el.textContent = val;
        });
        document.querySelectorAll('[data-en-placeholder][data-th-placeholder]').forEach(function (el) {
            var ph = el.getAttribute('data-' + lang + '-placeholder') || el.getAttribute('data-en-placeholder');
            if (ph) el.setAttribute('placeholder', ph);
        });
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            var active = btn.getAttribute('data-lang-val') === lang;
            btn.classList.toggle('bg-brand-600', active);
            btn.classList.toggle('text-white', active);
            btn.classList.toggle('text-gray-600', !active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        try { localStorage.setItem('lang', lang); } catch (e) {}
    }

    document.addEventListener('DOMContentLoaded', function () {
        var saved = 'th';
        try { saved = localStorage.getItem('lang') || 'th'; } catch (e) {}
        setPageLang(saved);
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang-val');
                if (lang) setPageLang(lang);
            });
        });
    });
})();
