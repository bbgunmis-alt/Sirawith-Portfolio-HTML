const N8N_WEBHOOK_URL = "";
const CONTACT_EMAIL = "Sirawith.keawsee@Gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "";
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "กำลังส่งข้อมูล...";
    }

    try {
      if (!N8N_WEBHOOK_URL) {
        throw new Error("n8n webhook is not configured");
      }

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "LeadFlow Thailand Landing Page"
        })
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`);
      }

      showLeadFlowMessage("ส่งข้อมูลสำเร็จ เราจะติดต่อกลับภายใน 24 ชม.", "success");
      form.reset();
      closeLeadFlowModal();
    } catch (error) {
      const subject = encodeURIComponent("LeadFlow Inquiry");
      const body = encodeURIComponent(
        `Name: ${data.name || ""}\nCompany: ${data.company || ""}\nIndustry: ${data.industry || ""}\nEmail: ${data.email || ""}\nPhone: ${data.phone || ""}\nMessage: ${data.message || ""}`
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      showLeadFlowMessage("ระบบส่งฟอร์มอัตโนมัติยังไม่พร้อม กรุณาส่งผ่าน Email หรือ LINE", "warning");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
});

function closeLeadFlowModal() {
  const modal = document.getElementById("formModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function showLeadFlowMessage(message, type) {
  const alert = document.createElement("div");
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: min(360px, calc(100vw - 40px));
    background: ${type === "success" ? "#10b981" : "#f59e0b"};
    color: white;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
    font-weight: 600;
  `;
  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 5000);
}
