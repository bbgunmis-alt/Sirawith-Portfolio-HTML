/** Lead capture — set N8N_WEBHOOK_URL when automation endpoint is ready */
window.LEADFLOW_FORM = {
    N8N_WEBHOOK_URL: '',
    LINE_URL: 'https://line.me/ti/p/~Floy.bmw.th'
};

window.submitLeadToN8n = async function (payload) {
    const url = window.LEADFLOW_FORM.N8N_WEBHOOK_URL;
    if (!url) return { ok: true, skipped: true };
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Webhook failed');
    return { ok: true };
};
