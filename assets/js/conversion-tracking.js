(function () {
  "use strict";

  var trackedEvents = ["cta_click", "form_submit", "internal_link", "newsletter_signup", "lead_magnet_download"];

  function pageGroup() {
    var path = window.location.pathname.toLowerCase();

    if (path.indexOf("leadflow") !== -1 || path.indexOf("leadflow%20thailand") !== -1) {
      return "LeadFlow";
    }

    if (path.indexOf("case-study") !== -1) {
      return "Case Studies";
    }

    if (path.indexOf("blog") !== -1) {
      return "Blog";
    }

    if (path.indexOf("portfolio") !== -1) {
      return "Portfolio";
    }

    return "Other";
  }

  function cleanText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 120);
  }

  function eventParams(extra) {
    return Object.assign(
      {
        page_path: window.location.pathname,
        page_title: document.title,
        page_group: pageGroup()
      },
      extra || {}
    );
  }

  function track(eventName, params) {
    if (trackedEvents.indexOf(eventName) === -1) {
      return;
    }

    var payload = eventParams(params);

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, Object.assign({ transport_type: "beacon" }, payload));
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, payload));

    if (window.console && typeof window.console.info === "function") {
      window.console.info("[Conversion Tracking]", eventName, payload);
    }
  }

  window.trackNewsletterSignup = function (event) {
    var form = event && event.target;
    var email = form && form.querySelector('input[type="email"]');

    track("newsletter_signup", {
      event_category: "Form",
      event_label: "Newsletter",
      form_id: form ? form.id || "" : "",
      email_domain: email && email.value.indexOf("@") !== -1 ? email.value.split("@").pop().toLowerCase() : ""
    });

    return true;
  };

  window.trackLeadMagnetDownload = function (event) {
    var form = event && event.target;
    var email = form && form.querySelector('input[type="email"]');

    track("lead_magnet_download", {
      event_category: "Form",
      event_label: "Checklist",
      form_id: form ? form.id || "" : "",
      lead_magnet_title: "AI Automation Checklist สำหรับ SME ไทย",
      download_url: form ? form.querySelector('input[name="_next"]')?.value || "" : "",
      email_domain: email && email.value.indexOf("@") !== -1 ? email.value.split("@").pop().toLowerCase() : ""
    });

    return true;
  };

  function isInternalLink(link) {
    if (!link || !link.href) {
      return false;
    }

    return link.hostname === window.location.hostname;
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest && event.target.closest("a[href], button");

      if (!link) {
        return;
      }

      var label = cleanText(link.getAttribute("data-analytics-label") || link.innerText || link.textContent);
      var href = link.getAttribute("href") || "";
      var isButton = link.tagName === "BUTTON";
      var pointsToForm = href.indexOf("#contact") !== -1 || href.indexOf("#lead-form") !== -1 || href.indexOf("#form") !== -1;
      var isCta = isButton || pointsToForm || link.classList.contains("cta") || link.classList.contains("hero-cta") || link.classList.contains("footer-cta") || link.classList.contains("btn-secondary");

      if (isCta) {
        track("cta_click", {
          cta_text: label || "CTA",
          cta_href: href || "button"
        });
      }

      if (link.tagName === "A" && isInternalLink(link)) {
        track("internal_link", {
          link_text: label || "Internal link",
          link_url: link.href
        });
      }
    },
    true
  );

  document.addEventListener(
    "submit",
    function (event) {
      var form = event.target;

      if (!form || form.tagName !== "FORM") {
        return;
      }

      track("form_submit", {
        form_id: form.id || "",
        form_name: form.getAttribute("name") || form.className || "lead_form",
        form_destination: form.getAttribute("action") || "inline_handler"
      });
    },
    true
  );
})();
