// Placeholder. BACKEND_URL stays empty until the backend is approved and deployed.
const BACKEND_URL = '';
document.getElementById('booking').addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('status');
  if (!BACKEND_URL) { status.textContent = 'המערכת עדיין לא מחוברת. הבקשה לא נשלחה.'; return; }
  const data = Object.fromEntries(new FormData(e.target));
  if (data.website) return; // honeypot
  const r = await fetch(BACKEND_URL, { method: 'POST', body: JSON.stringify(data) }); // plain-text POST avoids CORS preflight
  status.textContent = r.ok ? 'הבקשה נשלחה.' : 'שליחה נכשלה, נסו שוב.';
});
