/** Use UTC so server render matches client (avoids hydration mismatches). */
const TZ = "UTC";

export function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: TZ,
  }).format(d);
}

export function formatDateTimeRange(startIso, endIso) {
  const start = new Date(startIso);
  const end = new Date(endIso);
  if (Number.isNaN(start.getTime())) return "";
  const sameDay =
    start.toISOString().slice(0, 10) === end.toISOString().slice(0, 10) ||
    Number.isNaN(end.getTime());
  const datePart = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: TZ,
  }).format(start);
  const timeOpts = { hour: "numeric", minute: "2-digit", timeZone: TZ };
  const startT = new Intl.DateTimeFormat("en-US", timeOpts).format(start);
  if (sameDay && !Number.isNaN(end.getTime())) {
    const endT = new Intl.DateTimeFormat("en-US", timeOpts).format(end);
    return `${datePart} · ${startT} – ${endT}`;
  }
  return `${datePart} · ${startT}`;
}

/** Compare using UTC date boundaries so SSR and client agree. */
export function isPastEvent(iso) {
  return new Date(iso).getTime() < Date.now();
}
