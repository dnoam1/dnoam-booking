// Draft only, not deployed. Sheets: "Bookings" (private), "Availability" (date,status).
function doGet() {
  // TODO: return only {date,status} rows from Availability as JSON. Never return names or phones.
  return ContentService.createTextOutput('[]').setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  // TODO: parse JSON, validate fields, re-check date is free, append to Bookings, notify owner.
  return ContentService.createTextOutput(JSON.stringify({ok:false})).setMimeType(ContentService.MimeType.JSON);
}
