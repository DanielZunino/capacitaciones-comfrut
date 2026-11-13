/* Charlas COMFRUT Nursery · Fundo Santa Sara (frambuesas): inducción por empresa, Para todos, campo de frambuesas y tractor */

/* ---- induccion.js ---- */
// ===== COMFRUT Nursery · Inducción de Prevención de Riesgos (IRL, DS 44 art. 15) · una versión por empresa (cambia nombre y mutualidad) =====
window.SI_CONT = window.SI_CONT || { temas: [] };
window.SI_IND_PUESTO = {}; window.SI_IND_TRANSV = {};
(function () {
  // ---------- utilidades de dibujo (propias de esta charla) ----------
  const em = () => 'agricola';   // Comfrut: todas las escenas de la inducción son de campo
  const transpaletaSI = (x, y, elec) => { let g = elec ? `<rect x="${x - 6}" y="${y - 48}" width="30" height="42" rx="4" fill="#FFC20E" stroke="#C79200"/><rect x="${x - 2}" y="${y - 40}" width="14" height="8" fill="#263238"/>` : `<rect x="${x}" y="${y - 22}" width="16" height="16" rx="2" fill="#D7262B"/>`;
    g += `<rect x="${x + 10}" y="${y - 9}" width="${elec ? 64 : 60}" height="5" fill="#455A64"/><circle cx="${x + (elec ? 66 : 64)}" cy="${y - 3}" r="3" fill="#263238"/><circle cx="${x + 8}" cy="${y - 4}" r="4.5" fill="#263238"/>`;
    g += `<line x1="${x + 6}" y1="${y - (elec ? 46 : 20)}" x2="${x - 14}" y2="${y - 62}" stroke="#263238" stroke-width="4"/><rect x="${x - 24}" y="${y - 68}" width="18" height="7" rx="3" fill="#263238"/>`;
    return g; };
  const f1 = v => (+v).toFixed(1);
  const T = (x, y, s, z = 12, c = '#263238', w = 'bold', a = 'middle') => txt(x, y, s, z, c, w, a);
  const G = (cls, inner, st) => `<g class="${cls}"${st ? ` style="${st}"` : ''}>${inner}</g>`;
  const lab = (x, y, s, c = '#1565C0', z = 11) => { const w = s.length * z * .6 + 14, h = z + 9; return `<rect x="${f1(x - w / 2)}" y="${f1(y - h / 2)}" width="${f1(w)}" height="${h}" rx="${h / 2}" fill="${c}"/>` + T(x, y + z * .36, s, z, '#fff'); };
  const arr = (x1, y1, x2, y2, c = '#2E7D32', w = 3) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    return `<line x1="${x1}" y1="${y1}" x2="${f1(x2 - 5 * Math.cos(a))}" y2="${f1(y2 - 5 * Math.sin(a))}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${f1(x2 - h * Math.cos(a - .45))},${f1(y2 - h * Math.sin(a - .45))} ${f1(x2 - h * Math.cos(a + .45))},${f1(y2 - h * Math.sin(a + .45))}" fill="${c}"/>`; };
  const cielo = (suelo = '#9CCC65') => `<rect width="320" height="200" fill="#CDEBFF"/><path d="M0,132 Q40,100 90,122 T190,112 T320,120 V150 H0Z" fill="#A9C9DD"/><rect y="146" width="320" height="54" fill="${suelo}"/><rect y="146" width="320" height="3" fill="#000" opacity=".08"/>`;
  const patio = () => cielo('#B0B7BE');
  const ofi = () => `<rect width="320" height="200" fill="#F3EBDD"/><rect y="0" width="320" height="10" fill="#E6DCCB"/><rect y="150" width="320" height="50" fill="#C9A47E"/><rect y="148" width="320" height="4" fill="#A1887F"/>${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${i * 64}" y1="152" x2="${i * 64 - 20}" y2="200" stroke="#B08B66" stroke-width="1.5"/>`).join('')}`;
  const galpon = () => `<rect width="320" height="200" fill="#D7C4A8"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${i * 40}" y="0" width="3" height="150" fill="#B89A74"/>`).join('')}<rect y="150" width="320" height="50" fill="#A1887F"/><rect y="148" width="320" height="4" fill="#8D6E63"/>`;
  const fondo = () => ({ lacteos: bg, agroex: bg, agricola: cielo, inversiones: ofi }[em()] || bg)();
  const interior = () => em() === 'agricola' ? galpon() : em() === 'inversiones' ? ofi() : bg();
  const sol = (x, y, r = 22) => G('an-spin-slow', [0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return `<line x1="${f1(x + (r + 5) * Math.cos(a))}" y1="${f1(y + (r + 5) * Math.sin(a))}" x2="${f1(x + (r + 15) * Math.cos(a))}" y2="${f1(y + (r + 15) * Math.sin(a))}" stroke="#FFA000" stroke-width="4" stroke-linecap="round"/>`; }).join('')) + `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFC107" stroke="#FFA000" stroke-width="2"/>`;
  const cerezo = (x, y, s = 1, fruta = true) => window.CF.framb(x, y, s * 1.05, { fruta, anim: false });   // mata de frambuesa
  const cerezo_si = (x, y, s = 1, fruta = true) => `<path d="M${x - 5 * s},${y} L${x - 3 * s},${y - 62 * s} L${x + 3 * s},${y - 62 * s} L${x + 5 * s},${y}Z" fill="#6D4C41"/><path d="M${x},${y - 55 * s} l${-18 * s},${-18 * s} M${x},${y - 58 * s} l${16 * s},${-20 * s}" stroke="#6D4C41" stroke-width="${4 * s}"/>`
    + `<ellipse cx="${x}" cy="${y - 82 * s}" rx="${40 * s}" ry="${30 * s}" fill="#558B2F"/><ellipse cx="${x - 18 * s}" cy="${y - 92 * s}" rx="${22 * s}" ry="${16 * s}" fill="#689F38"/><ellipse cx="${x + 20 * s}" cy="${y - 88 * s}" rx="${20 * s}" ry="${15 * s}" fill="#7CB342"/>`
    + (fruta ? [[-24, -78], [-8, -70], [10, -76], [26, -84], [-14, -96], [6, -100], [22, -66], [-30, -90]].map(([a, b]) => `<circle cx="${f1(x + a * s)}" cy="${f1(y + b * s)}" r="${2.6 * s}" fill="#C62828"/><circle cx="${f1(x + a * s + 4 * s)}" cy="${f1(y + b * s + 1 * s)}" r="${2.6 * s}" fill="#B71C1C"/>`).join('') : '');
  const bin = (x, y, full = true) => window.CF.pilaBandejas(x + 6, y, 3, 44);   // bandejas de frambuesa
  const bin_si = (x, y, full = true, c = '#1E88E5') => `<rect x="${x}" y="${y - 32}" width="56" height="32" rx="2" fill="${c}" stroke="#0D47A1" stroke-width="1.5"/>${[1, 2, 3].map(i => `<rect x="${x + 4}" y="${y - 32 + i * 8 - 3}" width="48" height="2" fill="#0D47A1" opacity=".35"/>`).join('')}<rect x="${x + 2}" y="${y - 3}" width="8" height="5" fill="#0D47A1"/><rect x="${x + 46}" y="${y - 3}" width="8" height="5" fill="#0D47A1"/>`
    + (full ? [6, 13, 20, 27, 34, 41, 48].map((d, i) => `<circle cx="${x + d + 1}" cy="${y - 33 - (i % 2)}" r="3.4" fill="${i % 2 ? '#B71C1C' : '#C62828'}"/>`).join('') : '');
  const escalera = (x, y, h = 104, rot = 0) => { let g = `<line x1="${x + 6}" y1="${y - h}" x2="${x + 34}" y2="${y}" stroke="#90A4AE" stroke-width="4" stroke-linecap="round"/>`
    + `<line x1="${x - 16}" y1="${y}" x2="${x - 1}" y2="${y - h}" stroke="#B0BEC5" stroke-width="5" stroke-linecap="round"/><line x1="${x + 16}" y1="${y}" x2="${x + 3}" y2="${y - h}" stroke="#B0BEC5" stroke-width="5" stroke-linecap="round"/>`;
    for (let i = 1; i < 7; i++) { const k = i / 7, yy = y - h * k; g += `<line x1="${f1(x - 16 + 15 * k)}" y1="${f1(yy)}" x2="${f1(x + 16 - 13 * k)}" y2="${f1(yy)}" stroke="#90A4AE" stroke-width="3"/>`; }
    return rot ? `<g transform="rotate(${rot} ${x} ${y})">${g}</g>` : g; };
  tractor = (f => (...a) => '<g data-motor="1"' + (a[2] && a[2].flip ? ' data-flip="1"' : '') + '>' + f(...a) + '</g>')(tractor);
  function tractor(x, y, o = {}) {   // x = rueda trasera izquierda aprox.; ~125 px de largo
    let g = `<rect x="${x + 50}" y="${y - 50}" width="68" height="24" rx="5" fill="#1F2FD6" stroke="#0D1B8C" stroke-width="1.5"/><rect x="${x + 112}" y="${y - 46}" width="8" height="16" fill="#9E9E9E"/>`
      + `<rect x="${x + 22}" y="${y - 58}" width="40" height="30" rx="4" fill="#1A27B0"/><rect x="${x + 90}" y="${y - 70}" width="5" height="20" fill="#424242"/>`
      + `<path d="M${x + 24},${y - 58} V${y - 106} H${x + 60} V${y - 58}" fill="none" stroke="#37474F" stroke-width="4"/><rect x="${x + 20}" y="${y - 110}" width="44" height="6" rx="2" fill="#37474F"/>`
      + `<rect x="${x + 30}" y="${y - 70}" width="18" height="12" rx="2" fill="#263238"/>`;
    if (o.chofer !== false) { const hx = x + 42, hy = y - 84; g += `<rect x="${hx - 7}" y="${hy + 6}" width="14" height="18" rx="4" fill="${o.shirt || '#1F3A6B'}" stroke="#22303A"/><circle cx="${hx}" cy="${hy}" r="7" fill="${SK}" stroke="#22303A"/><path d="M${hx - 8},${hy - 1} Q${hx},${hy - 13} ${hx + 8},${hy - 1}Z" fill="#F1E3C2" stroke="#22303A"/>`
      + (o.muffs ? `<path d="M${hx - 7},${hy - 2} A7,8 0 0 1 ${hx + 7},${hy - 2}" stroke="#B71C1C" stroke-width="2" fill="none"/><rect x="${hx - 3}" y="${hy - 4}" width="6" height="8" rx="2.5" fill="#D32F2F" stroke="#22303A" stroke-width=".8"/>` : '') + `<line x1="${hx + 6}" y1="${hy + 12}" x2="${hx + 20}" y2="${hy + 16}" stroke="#22303A" stroke-width="3"/>`; }
    g += `<circle cx="${x + 36}" cy="${y - 28}" r="28" fill="#263238"/><circle cx="${x + 36}" cy="${y - 28}" r="14" fill="#FBC02D"/><circle cx="${x + 36}" cy="${y - 28}" r="4" fill="#263238"/>`
      + `<circle cx="${x + 106}" cy="${y - 15}" r="15" fill="#263238"/><circle cx="${x + 106}" cy="${y - 15}" r="7" fill="#FBC02D"/>`;
    if (o.bin) g += `<rect x="${x - 4}" y="${y - 40}" width="6" height="34" fill="#455A64"/><rect x="${x - 44}" y="${y - 12}" width="42" height="4" fill="#455A64"/>` + bin(x - 60, y - 13);
    if (o.flip) return `<g transform="translate(${2 * x + 125},0) scale(-1,1)">${g}</g>`;
    return g;
  }
  function extintor(x, y, co2) {
    return `<rect x="${x}" y="${y - 40}" width="17" height="40" rx="6" fill="#D32F2F" stroke="#8E1B1B" stroke-width="1.5"/><rect x="${x + 2}" y="${y - 28}" width="13" height="12" fill="#fff"/><rect x="${x + 5}" y="${y - 46}" width="7" height="6" fill="#263238"/><path d="M${x + 12},${y - 45} h9" stroke="#263238" stroke-width="3"/>`
      + (co2 ? `<path d="M${x + 4},${y - 43} q-10,10 -6,24" stroke="#263238" stroke-width="2.5" fill="none"/><path d="M${x - 2},${y - 19} l-5,12 h10z" fill="#263238"/>` : `<path d="M${x + 4},${y - 43} q-10,12 -5,30" stroke="#263238" stroke-width="2.5" fill="none"/>`);
  }
  const fuego = (x, y, s = 1) => G('an-flash', `<path d="M${x - 18 * s},${y} q${-4 * s},${-22 * s} ${8 * s},${-38 * s} q${2 * s},${14 * s} ${10 * s},${16 * s} q${2 * s},${-16 * s} ${10 * s},${-24 * s} q${12 * s},${22 * s} ${8 * s},${46 * s}z" fill="#FF7043"/>`) + `<path d="M${x - 10 * s},${y} q${-2 * s},${-12 * s} ${6 * s},${-22 * s} q${3 * s},${10 * s} ${8 * s},${10 * s} q${4 * s},${6 * s} 0,${12 * s}z" fill="#FFCA28"/>`;
  const cajas = (x, y) => box(x, y, 34, 24) + box(x + 36, y, 34, 24) + box(x + 18, y - 24, 34, 22);
  const papel = (x, y, w, h, tit, c = '#1565C0') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#fff" stroke="#90A4AE" stroke-width="1.5"/><rect x="${x}" y="${y}" width="${w}" height="16" rx="3" fill="${c}"/>${tit ? T(x + w / 2, y + 12, tit, 11, '#fff') : ''}${[0, 1, 2, 3, 4, 5].filter(i => 24 + i * 8 < h - 4).map(i => `<rect x="${x + 6}" y="${y + 22 + i * 8}" width="${w - 12 - (i % 2) * 10}" height="3" fill="#B0BEC5"/>`).join('')}`;
  const guante = (x, y, c = '#90CAF9', roto) => `<rect x="${x}" y="${y - 20}" width="22" height="20" rx="5" fill="${c}" stroke="#22303A" stroke-width="1.2"/>${[0, 1, 2, 3].map(i => `<rect x="${x + 1 + i * 5.3}" y="${y - 33 + (i === 0 || i === 3 ? 3 : 0)}" width="5" height="16" rx="2.5" fill="${c}" stroke="#22303A" stroke-width="1"/>`).join('')}<ellipse cx="${x - 3}" cy="${y - 12}" rx="4" ry="7" transform="rotate(-25 ${x - 3} ${y - 12})" fill="${c}" stroke="#22303A" stroke-width="1"/><rect x="${x - 1}" y="${y - 2}" width="24" height="7" rx="2" fill="${c}" stroke="#22303A" stroke-width="1"/>`
    + (roto ? `<path d="M${x + 6},${y - 14} l4,3 l-3,3 l5,2" stroke="#22303A" stroke-width="1.5" fill="#fff"/><circle cx="${x + 15}" cy="${y - 8}" r="3" fill="#fff" stroke="#22303A"/>` : '');
  const raton = (x, y) => `<path d="M${x - 12},${y + 1} C${x - 30},${y + 6} ${x - 40},${y - 6} ${x - 56},${y - 2}" stroke="#6D4C41" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="${x}" cy="${y - 3}" rx="13" ry="7" fill="#8D6E63"/><circle cx="${x + 12}" cy="${y - 6}" r="5.5" fill="#8D6E63"/><circle cx="${x + 10}" cy="${y - 12}" r="3.4" fill="#F8BBD0" stroke="#8D6E63"/><circle cx="${x + 15}" cy="${y - 7}" r="1.2" fill="#111"/><circle cx="${x + 18}" cy="${y - 5}" r="1.3" fill="#F06292"/><path d="M${x + 17},${y - 4} l7,-2 M${x + 17},${y - 4} l7,2" stroke="#5D4037" stroke-width=".6"/>`;
  const bidon = (x, y, c = '#ECEFF1', h = 40) => `<rect x="${x}" y="${y - h}" width="28" height="${h}" rx="4" fill="${c}" stroke="#78909C" stroke-width="1.5"/><rect x="${x + 16}" y="${y - h - 6}" width="8" height="7" fill="#1565C0"/><path d="M${x + 4},${y - h} q0,-8 8,-8" stroke="#78909C" stroke-width="3" fill="none"/>${diamond(x + 14, y - h / 2, 8, '!')}`;
  const mesa = (x, y, w, h = 40, c = '#B0BEC5') => `<rect x="${x}" y="${y - h}" width="${w}" height="5" fill="${c}" stroke="#78909C"/><rect x="${x + 4}" y="${y - h + 5}" width="4" height="${h - 5}" fill="#78909C"/><rect x="${x + w - 8}" y="${y - h + 5}" width="4" height="${h - 5}" fill="#78909C"/>`;
  const queso = (x, y) => `<rect x="${x}" y="${y - 12}" width="22" height="12" rx="3" fill="#FFD54F" stroke="#F9A825" stroke-width="1.2"/><circle cx="${x + 7}" cy="${y - 6}" r="1.5" fill="#F9A825"/><circle cx="${x + 15}" cy="${y - 8}" r="1.2" fill="#F9A825"/>`;
  const cinta = (x, y, w, fruta) => `<rect x="${x}" y="${y - 40}" width="${w}" height="9" rx="4" fill="#455A64"/>${[0, 1, 2, 3, 4, 5, 6, 7].filter(i => i * 18 < w - 6).map(i => `<circle cx="${x + 6 + i * 18}" cy="${y - 35.5}" r="2.5" fill="#90A4AE"/>`).join('')}<rect x="${x + 6}" y="${y - 31}" width="5" height="31" fill="#607D8B"/><rect x="${x + w - 11}" y="${y - 31}" width="5" height="31" fill="#607D8B"/>`
    + (fruta ? G('an-slide', [0, 1, 2, 3, 4, 5].filter(i => 10 + i * 20 < w - 40).map(i => `<circle cx="${x + 10 + i * 20}" cy="${y - 43}" r="3.4" fill="#C62828"/><circle cx="${x + 15 + i * 20}" cy="${y - 43}" r="3.4" fill="#B71C1C"/><path d="M${x + 12 + i * 20},${y - 46} l2,-5" stroke="#558B2F" stroke-width="1.2"/>`).join(''), '--dx:30px') : '');
  const maquina = (x, y, w, h, tit) => `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="4" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/><rect x="${x + 8}" y="${y - h + 8}" width="${w - 50}" height="${h - 30}" rx="3" fill="#ECEFF1" stroke="#90A4AE"/><rect x="${x + w - 34}" y="${y - h + 10}" width="24" height="30" rx="3" fill="#455A64"/><circle cx="${x + w - 22}" cy="${y - h + 20}" r="5" fill="#D7262B" stroke="#FFC20E" stroke-width="2"/><rect x="${x + w - 28}" y="${y - h + 30}" width="12" height="5" fill="#66BB6A"/>${tit ? T(x + (w - 34) / 2, y - 8, tit, 11, '#37474F') : ''}`;
  const auto = (x, y, c = '#ECEFF1') => `<path d="M${x},${y - 14} v-18 q0,-6 6,-6 h20 l16,-16 h46 l12,16 h20 q8,0 8,8 v16z" fill="${c}" stroke="#546E7A" stroke-width="2"/><path d="M${x + 46},${y - 38} l12,-12 h18 v12z M${x + 82},${y - 50} h12 l8,12 h-20z" fill="#B3E5FC" stroke="#546E7A"/><circle cx="${x + 28}" cy="${y - 12}" r="12" fill="#263238"/><circle cx="${x + 28}" cy="${y - 12}" r="5" fill="#B0BEC5"/><circle cx="${x + 104}" cy="${y - 12}" r="12" fill="#263238"/><circle cx="${x + 104}" cy="${y - 12}" r="5" fill="#B0BEC5"/>`;
  const escritorio = (x, y, w = 110) => `<rect x="${x}" y="${y - 34}" width="${w}" height="6" fill="#8D6E63"/><rect x="${x + w - 40}" y="${y - 28}" width="36" height="28" fill="#A1887F" stroke="#6D4C41"/><rect x="${x + w - 36}" y="${y - 24}" width="28" height="10" fill="#BCAAA4" stroke="#6D4C41"/><rect x="${x + w - 36}" y="${y - 12}" width="28" height="10" fill="#BCAAA4" stroke="#6D4C41"/><rect x="${x + w - 25}" y="${y - 20}" width="6" height="2" fill="#4E342E"/><rect x="${x + w - 25}" y="${y - 8}" width="6" height="2" fill="#4E342E"/><rect x="${x + 4}" y="${y - 28}" width="5" height="28" fill="#6D4C41"/>`
    + `<rect x="${x + 20}" y="${y - 74}" width="50" height="34" rx="3" fill="#263238"/><rect x="${x + 24}" y="${y - 70}" width="42" height="26" fill="#4FC3F7"/><rect x="${x + 40}" y="${y - 40}" width="10" height="6" fill="#455A64"/><rect x="${x + 22}" y="${y - 37}" width="40" height="3" fill="#37474F"/>`;
  const telefono = (x, y) => `<rect x="${x}" y="${y}" width="14" height="24" rx="3" fill="#263238"/><rect x="${x + 2}" y="${y + 3}" width="10" height="15" fill="#80DEEA"/>`;
  const salida = (x, y) => `<rect x="${x}" y="${y}" width="64" height="22" rx="3" fill="#2E7D32"/>${T(x + 26, y + 15, 'SALIDA', 11, '#fff')}${arr(x + 50, y + 11, x + 60, y + 11, '#fff', 2.5)}`;
  const zseg = (x, y, z = 11) => `<rect x="${x}" y="${y}" width="96" height="40" rx="4" fill="#2E7D32"/>${T(x + 48, y + 16, 'ZONA DE', z, '#fff')}${T(x + 48, y + 31, 'SEGURIDAD', z, '#fff')}`;
  const nofumar = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#D7262B" stroke-width="4"/><rect x="${x - r * .6}" y="${y - 2}" width="${r * 1.0}" height="5" fill="#455A64"/><rect x="${x + r * .4}" y="${y - 2}" width="${r * .25}" height="5" fill="#FF7043"/><line x1="${f1(x - r * .7)}" y1="${f1(y - r * .7)}" x2="${f1(x + r * .7)}" y2="${f1(y + r * .7)}" stroke="#D7262B" stroke-width="4"/>`;
  const jefe = { shirt: '#455A64' };
  const jefeO = () => em() === 'lacteos' ? {} : em() === 'agroex' ? {} : em() === 'agricola' ? { shirt: '#455A64', vest: true } : { shirt: '#455A64' };
  const D = (n, f) => { S['si_in_' + n] = () => f(false); S['si_in_' + n + '_q'] = () => f(true); };
  const ST = `<style>.si_in_sw{animation:siInSw 1.3s ease-in-out infinite alternate;transform-box:view-box}@keyframes siInSw{from{transform:rotate(-7deg)}to{transform:rotate(7deg)}}.si_in_fl{animation:siInFl 1.1s steps(2) infinite}@keyframes siInFl{50%{opacity:.15}}</style>`;

  // 1 · Orden y limpieza
  D('orden', q => {
    const e = em();
    if (e === 'lacteos' || e === 'agroex') return sv(bg()
      + `<rect x="196" y="34" width="96" height="118" fill="#B0BEC5"/><rect x="202" y="40" width="84" height="112" fill="#ECEFF1"/><rect x="243" y="40" width="2" height="112" fill="#B0BEC5"/>` + lab(244, 26, 'ZONA DE PROCESO', '#455A64')
      + `<rect x="190" y="150" width="108" height="14" rx="3" fill="#78909C"/><rect x="194" y="152" width="100" height="9" rx="2" fill="#4FC3F7"/>` + G('an-flash', `<ellipse cx="226" cy="156" rx="12" ry="2" fill="#fff" opacity=".7"/>`)
      + W(244, 162, { anim: 'an-bob' })
      + `<rect x="38" y="104" width="58" height="12" rx="5" fill="#ECEFF1" stroke="#78909C" stroke-width="1.5"/><rect x="60" y="116" width="14" height="44" fill="#CFD8DC" stroke="#90A4AE"/><path d="M66,104 v-16 h12" stroke="#78909C" stroke-width="4" fill="none"/>`
      + G('an-fall', drop(68, 104, .45), '--dy:-10px') + `<rect x="20" y="60" width="16" height="26" rx="3" fill="#E1F5FE" stroke="#4FC3F7"/><rect x="25" y="86" width="6" height="5" fill="#4FC3F7"/>`
      + W(112, 165, { pose: 'carry', flip: true })
      + (q ? '' : `<g transform="translate(160,74)"><circle r="16" fill="#fff" stroke="#D7262B" stroke-width="3.5"/><circle cx="-2" cy="2" r="6" fill="none" stroke="#FFA000" stroke-width="3"/><circle cx="1" cy="-5" r="2.5" fill="#4FC3F7"/><line x1="-11" y1="-11" x2="11" y2="11" stroke="#D7262B" stroke-width="3.5"/></g>` + T(160, 106, 'Sin joyas', 11, '#C62828') + lab(70, 186, 'Lavado de manos', '#2E7D32') + lab(244, 186, 'Pediluvio', '#2E7D32')));
    if (e === 'agricola') return sv(cielo()
      + `<path d="M110,200 L130,146 H190 L210,200Z" fill="#C8B08A"/>` + cerezo(40, 150, .8) + cerezo(100, 148, .6) + cerezo(290, 150, .7)
      + bin(200, 172) + bin(258, 172) + `<rect x="14" y="132" width="44" height="40" rx="2" fill="#8D6E63" stroke="#5D4037"/><path d="M22,140 l8,16 M30,140 l-8,16" stroke="#B0BEC5" stroke-width="3"/><rect x="38" y="138" width="4" height="22" fill="#6D4C41"/><path d="M42,140 l10,0 l-2,16 h-8z" fill="#B0BEC5"/>`
      + W(160, 186, { pose: 'walk', anim: 'an-bob' })
      + (q ? '' : lab(146, 80, 'Camino libre', '#2E7D32') + lab(256, 120, 'Bandejas ordenadas', '#2E7D32') + lab(94, 190, 'Herramientas en su lugar', '#2E7D32')));
    return sv(ofi() + salida(240, 18)
      + escritorio(20, 160) + `<path d="M64,126 q-4,14 -24,22 H6" stroke="#263238" stroke-width="2" fill="none"/><rect x="0" y="144" width="320" height="6" fill="#9E9E9E"/>`
      + W(210, 182, { pose: 'walk', anim: 'an-bob' }) + `<rect x="276" y="120" width="34" height="30" fill="#C89B5E" stroke="#8D6E3F"/>`
      + (q ? '' : lab(64, 186, 'Cables ordenados', '#2E7D32') + lab(146, 100, 'Pasillo libre', '#2E7D32') + lab(110, 62, 'Cajones cerrados', '#2E7D32')));
  });

  // 2 · Presentación de la empresa y Ley 16.744
  const escudo = (cx, cy, q) => `<path d="M${cx},${cy - 50} L${cx + 40},${cy - 36} V${cy} Q${cx + 40},${cy + 32} ${cx},${cy + 50} Q${cx - 40},${cy + 32} ${cx - 40},${cy} V${cy - 36}Z" fill="#1565C0" stroke="#0D47A1" stroke-width="3"/>`
    + T(cx, cy - 14, 'Ley', 14, '#fff') + T(cx, cy + 6, '16.744', 16, '#fff')
    + (q ? '' : `<g class="an-pulse"><circle cx="${cx - 22}" cy="${cy + 66}" r="12" fill="#fff" stroke="#C62828" stroke-width="2"/><path d="M${cx - 22},${cy + 59} v14 M${cx - 29},${cy + 66} h14" stroke="#C62828" stroke-width="4"/></g><circle cx="${cx + 2}" cy="${cy + 66}" r="12" fill="#fff" stroke="#2E7D32" stroke-width="2"/><path d="M${cx - 3},${cy + 73} l3,-8 l3,4 l3,-9" stroke="#2E7D32" stroke-width="2.5" fill="none"/><circle cx="${cx + 26}" cy="${cy + 66}" r="12" fill="#fff" stroke="#F9A825" stroke-width="2"/>${T(cx + 26, cy + 71, '$', 14, '#F9A825')}`);
  D('empresa', q => {
    const e = em();
    let g;
    if (e === 'lacteos') g = patio() + `<rect x="12" y="64" width="176" height="86" fill="#FAFAFA" stroke="#90A4AE" stroke-width="2"/><path d="M6,66 L100,40 L194,66Z" fill="#78909C"/><rect x="30" y="98" width="40" height="52" fill="#B0BEC5"/>${[0, 1, 2].map(i => `<rect x="${86 + i * 32}" y="100" width="22" height="16" fill="#B3E5FC" stroke="#90A4AE"/>`).join('')}<rect x="20" y="72" width="160" height="20" rx="3" fill="#1565C0"/>` + T(100, 86, 'LÁCTEOS SAN IGNACIO', 11, '#fff')
      + `<rect x="80" y="134" width="96" height="24" rx="12" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/>${T(128, 150, 'LECHE', 11, '#455A64')}<rect x="176" y="132" width="30" height="28" rx="3" fill="#1E88E5" stroke="#0D47A1"/><rect x="190" y="136" width="13" height="10" fill="#B3E5FC"/><circle cx="100" cy="162" r="7" fill="#263238"/><circle cx="152" cy="162" r="7" fill="#263238"/><circle cx="194" cy="162" r="7" fill="#263238"/>`;
    else if (e === 'agroex') g = patio() + `<path d="M8,150 V80 Q100,34 192,80 V150Z" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/><rect x="60" y="104" width="80" height="46" fill="#90A4AE"/>${[0, 1, 2, 3].map(i => `<rect x="62" y="${106 + i * 11}" width="76" height="2" fill="#78909C"/>`).join('')}<rect x="26" y="80" width="148" height="20" rx="3" fill="#2E7D32"/>` + T(100, 94, 'AGROEX · PACKING', 11, '#fff')
      + bin(6, 178) + bin(64, 178) + bin(122, 178, true, '#1976D2');
    else if (e === 'agricola') g = cielo() + `<path d="M0,128 L50,96 L90,118 L140,90 L200,124 V146 H0Z" fill="#7E9CB0"/>` + cerezo(30, 160, .75) + cerezo(90, 160, .75) + cerezo(150, 160, .75)
      + `<rect x="54" y="168" width="4" height="28" fill="#6D4C41"/><rect x="132" y="168" width="4" height="28" fill="#6D4C41"/><rect x="24" y="164" width="144" height="22" rx="3" fill="#6D4C41"/>` + T(96, 179, 'FUNDO SANTA SARA', 11, '#fff');
    else g = patio() + `<rect x="8" y="40" width="184" height="110" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/>${[0, 1, 2].map(r => [0, 1, 2, 3].map(c => `<rect x="${32 + c * 37}" y="${74 + r * 22}" width="26" height="14" fill="#B3E5FC" stroke="#90A4AE"/>`).join('')).join('')}<rect x="84" y="128" width="32" height="22" fill="#78909C"/><rect x="12" y="46" width="176" height="20" rx="3" fill="#455A64"/>` + T(100, 60, 'INVERSIONES SAN IGNACIO', 11, '#fff');
    return sv(g + escudo(262, 76, q));
  });

  // 3 · Procedimiento en caso de accidente
  D('aviso', q => {
    const e = em(), base = fondo();
    return sv(base + W(66, 172, { face: 'pain' }) + G('an-fall', drop(78, 140, .5, '#D32F2F'), '--dy:-6px') + bubble(14, 54, 'Me lesioné', 96)
      + W(140, 172, Object.assign({ flip: true, pose: 'point' }, jefeO())) + papel(150, 116, 22, 26, '', '#455A64')
      + arr(164, 92, 214, 92, '#2E7D32', 4)
      + `<rect x="222" y="62" width="90" height="62" rx="6" fill="#fff" stroke="#2E7D32" stroke-width="3"/><path d="M267,72 v24 M255,84 h24" stroke="#2E7D32" stroke-width="7"/>` + T(267, 116, window.CF_MUT().TEL ? window.CF_MUT().MUT : 'MUTUAL', 13, '#2E7D32')
      + (q ? '' : telefono(226, 136) + T(276, 150, window.CF_MUT().TEL ? window.CF_MUT().MUT : 'Mutualidad', 14, '#C62828') + T(276, 165, window.CF_MUT().TEL || 'de tu empresa', 11, '#263238')));
  });

  // 4 · Accidente grave o fatal
  D('grave', q => {
    const e = em();
    const tirada = (x, y, L) => `<line x1="${x}" y1="${y}" x2="${x + L}" y2="${y - 8}" stroke="#B0BEC5" stroke-width="5" stroke-linecap="round"/><line x1="${x + 4}" y1="${y + 12}" x2="${x + L + 4}" y2="${y + 4}" stroke="#90A4AE" stroke-width="5" stroke-linecap="round"/>` + [1, 2, 3, 4, 5, 6].map(i => { const k = i / 7; return `<line x1="${f1(x + L * k)}" y1="${f1(y - 8 * k)}" x2="${f1(x + 4 + L * k)}" y2="${f1(y + 12 - 8 * k)}" stroke="#90A4AE" stroke-width="3"/>`; }).join('');
    let zona = e === 'agricola' ? cerezo(70, 160, .85, false) + tirada(70, 168, 96) : e === 'agroex' ? bin(30, 168, false) + bin(30, 136, false) + bin(30, 104, false) + tirada(70, 170, 92) : e === 'inversiones' ? `<rect x="40" y="70" width="70" height="80" fill="#BCAAA4"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${40 + i * 14}" y="${136 - i * 16}" width="${70 - i * 14}" height="14" fill="#A1887F" stroke="#6D4C41"/>`).join('')}` : `<rect x="34" y="60" width="44" height="90" rx="6" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/><rect x="28" y="56" width="56" height="6" fill="#78909C"/>` + tirada(70, 170, 92);
    const cinta = (y) => `<line x1="14" y1="${y}" x2="176" y2="${y}" stroke="#fff" stroke-width="6"/><line x1="14" y1="${y}" x2="176" y2="${y}" stroke="#D7262B" stroke-width="6" stroke-dasharray="10 10"/>`;
    const cono = x => `<path d="M${x - 9},184 L${x - 3},150 H${x + 3} L${x + 9},184Z" fill="#FF6D00"/><rect x="${x - 6}" y="162" width="12" height="5" fill="#fff"/><rect x="${x - 12}" y="182" width="24" height="5" rx="1" fill="#E65100"/>`;
    return sv(fondo() + zona
      + (q ? '' : cinta(152) + cono(16) + cono(174) + lab(95, 26, 'FAENA SUSPENDIDA', '#C62828'))
      + W(190, 180, Object.assign({ pose: 'stop', face: 'worried' }, jefeO())) + telefono(201, 92)
      + (q ? '' : lab(278, 40, 'SEREMI', '#455A64') + lab(278, 66, 'Inspección', '#455A64') + lab(278, 92, window.CF_MUT().TEL ? window.CF_MUT().MUT : 'Mutual', '#2E7D32') + lab(276, 118, 'Carabineros', '#1B5E20') + lab(278, 144, 'PDI', '#0D47A1')));
  });

  // 5 · Política de prevención y EPP
  D('epp', q => {
    const e = em();
    const o = e === 'inversiones' ? { cofia: true, mask: true, shirt: '#FFFFFF', apron: false, boots: '#FAFAFA' } : {};
    // vestimenta real (03-11-2026): rótulo, x del cuerpo, y
    const L = { lacteos: [['Cofia', 124, 80], ['Mascarilla', 128, 102], ['Cotona blanca', 118, 124], ['Pechera blanca', 126, 146], ['Botas blancas', 124, 172]],
      agroex: [['Cofia', 124, 80], ['Mascarilla', 128, 102], ['Cotona', 118, 124], ['Zapatos de seguridad', 0, 189]],
      agricola: [['Legionario', 124, 76], ['Lentes', 128, 99], ['Manga larga', 118, 124], ['Guantes', 118, 146], ['Zapatos', 124, 172]],
      inversiones: [['Cofia', 124, 80], ['Mascarilla', 128, 102], ['Cotona blanca', 118, 124], ['Botas blancas', 124, 172]] }[e];
    let g = fondo() + W(134, 176, Object.assign({ s: 1.2 }, o));
    if (!q) g += L.map(([s, x2, y]) => { const w = f1(s.length * 6.6 + 14); return (x2 ? `<line x1="${f1(s.length * 6.6 + 18)}" y1="${y}" x2="${x2}" y2="${y}" stroke="#1565C0" stroke-width="1.5"/>` : '') + `<rect x="4" y="${y - 10}" width="${w}" height="20" rx="10" fill="#1565C0"/>` + T(11, y + 4, s, 11, '#fff', 'bold', 'start'); }).join('')
      + lab(256, 30, 'Reposición', '#2E7D32') + guante(206, 104, e === 'agricola' ? '#8D6E63' : e === 'lacteos' ? '#FDD835' : '#90CAF9', true) + badge(238, 64, false, 10) + arr(240, 92, 266, 92, '#2E7D32', 4) + G('an-pulse', guante(280, 104, e === 'agricola' ? '#8D6E63' : e === 'lacteos' ? '#FDD835' : '#90CAF9')) + badge(306, 64, true, 10)
      + T(254, 128, 'Devuelve el dañado', 11, '#263238');
    return sv(g);
  });

  // 6 · Extintores
  D('extintor', q => {
    const e = em();
    const blanco = e === 'inversiones' ? `<path d="M244,162 l4,-28 h28 l4,28z" fill="#90A4AE" stroke="#546E7A"/>` + fuego(262, 138, .8) : cajas(232, 164) + fuego(266, 118, .9);
    const p = W(150, 172, { pose: 'lift2' });
    const spray = `<g class="si_in_sw" style="transform-origin:174px 112px"><path d="M174,112 L246,${e === 'inversiones' ? 140 : 132} L246,${e === 'inversiones' ? 162 : 162}Z" fill="#ECEFF1" opacity=".85"/></g>`;
    return sv(interior() + ST + `<rect x="0" y="40" width="74" height="56" rx="4" fill="#fff" opacity=".6"/>` + extintor(12, 92) + extintor(44, 92, true) + T(20, 110, 'PQS', 11) + T(52, 110, 'CO2', 11)
      + blanco + spray + p + `<g transform="rotate(-8 150 120)">${extintor(146, 140)}</g><path d="M152,102 q10,-4 22,10" stroke="#263238" stroke-width="3" fill="none"/>`
      + (q ? '' : T(6, 26, 'PQS: sólidos, líquidos, gases', 11, '#263238', 'bold', 'start') + T(6, 132, 'CO2: eléctricos', 11, '#263238', 'bold', 'start')
        + lab(250, 22, '1. Quita el seguro', '#C62828') + lab(250, 44, '2. Apunta a la base', '#C62828') + lab(250, 66, '3. Barrido', '#C62828')));
  });

  // 7 · Señalización, tránsito peatonal y zonas de seguridad
  D('senal', q => {
    const e = em();
    if (e === 'agricola') return sv(cielo() + cerezo(40, 140, .55) + cerezo(290, 140, .55)
      + `<path d="M0,150 H320 V176 H0Z" fill="#C8B08A"/>` + G('an-slide', tractor(120, 172, { chofer: true }), '--dx:30px')
      + `<rect x="0" y="178" width="320" height="22" fill="#9CCC65"/>` + W(56, 194, { pose: 'walk', s: .9, anim: 'an-bob' })
      + zseg(220, 12) + nofumar(24, 28)
      + (q ? '' : lab(126, 28, 'Fumar: zona habilitada', '#C62828') + lab(70, 196 - 92, 'Camina por el borde', '#2E7D32')));
    if (e === 'inversiones') return sv(ofi() + `<rect x="250" y="56" width="52" height="94" fill="#A1887F" stroke="#6D4C41" stroke-width="2"/><circle cx="292" cy="106" r="3" fill="#FFD54F"/>` + salida(244, 26) + zseg(16, 22) + nofumar(150, 44)
      + W(190, 182, { pose: 'walk', anim: 'an-bob' }) + (q ? '' : lab(150, 76, 'Solo en zona habilitada', '#C62828') + lab(92, 186, 'Vía de evacuación libre', '#2E7D32')));
    return sv(bg() + `<rect x="0" y="174" width="320" height="24" fill="#B0BEC5"/><rect x="0" y="172" width="320" height="3" fill="#FFC20E"/><rect x="0" y="196" width="320" height="3" fill="#FFC20E"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${12 + i * 40}" y="182" width="18" height="8" fill="#fff" opacity=".8"/>`).join('')}`
      + G('an-slide', e === 'lacteos' ? transpaletaSI(196, 166, true) + W(176, 164, { pose: 'carry', s: .8 }) : forklift(170, 166, { lift: 10, load: 22, light: true }), '--dx:-24px') + W(80, 192, { pose: 'walk', s: .9, anim: 'an-bob' })
      + zseg(10, 22) + nofumar(132, 42)
      + (q ? '' : lab(132, 72, 'Solo en zona habilitada', '#C62828') + lab(80, 104, 'Pasillo peatonal', '#2E7D32') + (e === 'lacteos' ? `<circle cx="290" cy="32" r="18" fill="#fff" stroke="#D7262B" stroke-width="4"/>` + T(290, 37, '10', 14) : '')));
  });

  // 8 · Ley 20.949 carga manual
  D('carga', q => {
    const e = em();
    const cj = (x, y, w, h, c) => e === 'agricola' ? `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="2" fill="#8D6E63" stroke="#5D4037"/>${[3, 9, 15, 21].filter(d => d < w - 2).map(d => `<circle cx="${x + d}" cy="${y - h - 2}" r="3" fill="#C62828"/>`).join('')}` : box(x, y, w, h, '', c);
    const xa = e === 'agricola' ? 36 : 54, xb = e === 'agricola' ? 98 : 130;
    let g = fondo() + W(xa, 176, { pose: 'carry' }) + cj(xa + 2, 128, 30, 22) + W(xb, 176, { pose: 'carry', hair: true }) + cj(xb + 2, 128, 28, 18);
    if (e === 'agricola') g += tractor(192, 178, { chofer: true });
    else if (e === 'inversiones') g += `<rect x="232" y="88" width="6" height="88" fill="#455A64"/><rect x="232" y="168" width="54" height="5" fill="#455A64"/><circle cx="240" cy="178" r="7" fill="#263238"/>` + box(240, 168, 40, 24) + box(240, 144, 40, 24) + box(240, 120, 40, 24);
    else g += `<rect x="208" y="166" width="96" height="6" fill="#455A64"/><circle cx="218" cy="176" r="5" fill="#263238"/><circle cx="296" cy="176" r="5" fill="#263238"/><path d="M210,166 l-16,-56" stroke="#D32F2F" stroke-width="5" stroke-linecap="round"/><rect x="186" y="104" width="18" height="6" rx="3" fill="#263238"/>` + box(216, 166, 40, 26) + box(258, 166, 40, 26) + box(236, 140, 40, 26);
    if (!q) g += lab(64, 34, 'Hombres 25 kg', '#1565C0') + lab(150, 58, 'Mujeres y menores 20 kg', '#AD1457') + lab(258, 22, 'Ayuda mecánica', '#2E7D32');
    return sv(g);
  });

  // 9 · Hantavirus
  D('hanta', q => {
    const e = em();
    const pared = e === 'agricola' ? galpon() : e === 'inversiones' ? ofi() + `<rect x="200" y="40" width="110" height="110" fill="#BCAAA4"/>${[0, 1, 2].map(r => `<rect x="200" y="${70 + r * 30}" width="110" height="4" fill="#8D6E63"/>` + box(206, 70 + r * 30, 30, 22) + box(240, 70 + r * 30, 30, 22)).join('')}` : bg() + `<rect x="196" y="50" width="120" height="100" fill="#CFD8DC"/>${[0, 1].map(r => `<rect x="196" y="${96 + r * 50}" width="120" height="4" fill="#78909C"/>` + box(204, 96 + r * 50, 34, 26) + box(244, 96 + r * 50, 34, 26)).join('')}`;
    return sv(pared + `<rect x="18" y="34" width="62" height="54" fill="#B3E5FC" stroke="#6D4C41" stroke-width="4"/><path d="M18,34 L-2,48 V102 L18,88Z" fill="#E1F5FE" stroke="#6D4C41" stroke-width="2"/>`
      + G('an-slide', `<path d="M86,52 q12,-6 24,0 t24,0" stroke="#29B6F6" stroke-width="3" fill="none"/><path d="M86,68 q12,-6 24,0 t24,0" stroke="#29B6F6" stroke-width="3" fill="none"/>`, '--dx:12px')
      + W(118, 176, { pose: 'bend', mask: true, gloves: '#FFB300' }) + `<rect x="148" y="150" width="8" height="14" rx="2" fill="#4FC3F7" stroke="#0277BD"/>` + G('an-flash', `<path d="M156,160 l22,10 l-4,8z" fill="#B3E5FC" opacity=".9"/>`)
      + `<path d="M40,176 h22 l-3,-24 h-16z" fill="#90A4AE" stroke="#546E7A"/>`
      + raton(270, 184) + [0, 1, 2, 3, 4].map(i => `<ellipse cx="${232 + i * 7}" cy="${180 + (i % 2) * 3}" rx="1.8" ry="1" fill="#3E2723"/>`).join('')
      + (q ? '' : lab(50, 114, 'Ventila', '#2E7D32') + lab(52, 190, 'Agua con cloro', '#1565C0') + lab(266, 152, 'Ratón colilargo', '#6D4C41')
        + `<g transform="translate(160,26)"><circle r="17" fill="#fff" stroke="#D7262B" stroke-width="3.5"/><path d="M-6,-10 l10,16 M0,4 l8,8 l-6,3 l-8,-6z" stroke="#8D6E63" stroke-width="3" fill="#D7B98E"/><line x1="-12" y1="-12" x2="12" y2="12" stroke="#D7262B" stroke-width="3.5"/></g>` + T(182, 30, 'No barrer en seco', 11, '#C62828', 'bold', 'start')));
  });

  // 10 · Sustancias químicas peligrosas
  D('quimicos', q => {
    const e = em();
    const o = e === 'agricola' ? { shirt: '#FFF59D', pants: '#FFF59D', mask: true, glasses: true, gloves: '#43A047', boots: '#263238', hat: 'none', hatColor: '#FFF59D' } : e === 'inversiones' ? { gloves: '#FFB300' } : { gloves: '#FFB300', glasses: true };
    const nombres = { lacteos: ['Soda', 'Ácido'], agroex: ['Cloro', 'Sanitizante'], agricola: ['Fungicida', 'Insecticida'], inversiones: ['Limpiador', 'Cloro'] }[e];
    return sv((e === 'agricola' ? galpon() : fondo()) + `<rect x="168" y="168" width="140" height="8" rx="2" fill="#FFC20E" stroke="#C79200"/>` + bidon(178, 168) + bidon(218, 168, '#E3F2FD') + bidon(258, 168, '#ECEFF1', 34)
      + (q ? '' : T(192, 186, nombres[0], 11) + T(274, 186, nombres[1], 11))
      + papel(186, 30, 56, 68, q ? '' : 'HDS', '#1565C0') + W(110, 176, o)
      + spill(60, 176, '#9CCC65') + (q ? '' : lab(214, 112, 'EPP según HDS', '#2E7D32') + lab(56, 156, 'Derrame: avisa', '#C62828')));
  });

  // 11 · Altas temperaturas
  D('calor', q => {
    const e = em();
    const sombra = e === 'agricola' ? cerezo(196, 172, 1, true) : `<rect x="140" y="60" width="4" height="112" fill="#607D8B"/><rect x="252" y="60" width="4" height="112" fill="#607D8B"/><path d="M128,62 L198,44 L268,62Z" fill="#26A69A"/>`;
    return sv((e === 'agricola' ? cielo() : patio()) + sol(44, 40) + `<rect x="98" y="24" width="10" height="56" rx="5" fill="#fff" stroke="#546E7A" stroke-width="2"/><rect x="100" y="34" width="6" height="44" fill="#E53935"/><circle cx="103" cy="84" r="8" fill="#E53935" stroke="#546E7A" stroke-width="2"/>`
      + sombra + `<ellipse cx="200" cy="176" rx="60" ry="7" fill="#000" opacity=".12"/>` + W(200, 176, { pose: 'stop', flip: false })
      + `<rect x="204" y="96" width="9" height="20" rx="3" fill="#4FC3F7" stroke="#0277BD" transform="rotate(-50 210 104)"/>`
      + clock(286, 120, 22) + (q ? '' : T(286, 160, '11 a 16 h', 12, '#C62828') + T(286, 174, 'evita el sol', 11) + lab(60, 112, 'Agua seguido', '#1565C0') + lab(200, 190, 'Sombra y pausas', '#2E7D32')));
  });

  // 12 · TMERT
  D('tmert', q => {
    const e = em();
    const dolor = (x, y) => G('an-pulse', `<circle cx="${x}" cy="${y}" r="6" fill="#E53935" opacity=".55"/>`);
    let g;
    if (e === 'lacteos') g = bg() + mesa(124, 170, 156, 44, '#CFD8DC') + queso(150, 126) + queso(180, 126) + queso(210, 126) + queso(240, 126) + W(116, 172, { pose: 'carry', gloves: '#90CAF9' }) + dolor(122, 112) + dolor(108, 124);
    else if (e === 'agroex') g = bg() + cinta(124, 170, 176, true) + W(116, 172, { pose: 'carry', gloves: '#90CAF9' }) + dolor(122, 112) + dolor(108, 124);
    else if (e === 'agricola') g = cielo() + cerezo(170, 176, 1.15) + W(140, 178, { pose: 'stop' }) + `<path d="M156,96 l10,-8 M156,96 l12,-2" stroke="#455A64" stroke-width="3"/>` + dolor(154, 104) + dolor(144, 118);
    else g = ofi() + `<rect x="70" y="148" width="34" height="5" fill="#455A64"/><rect x="70" y="116" width="5" height="34" fill="#455A64"/><rect x="85" y="152" width="4" height="22" fill="#455A64"/>` + mesa(120, 172, 120, 26, '#8D6E63') + `<rect x="160" y="104" width="54" height="36" rx="3" fill="#263238"/><rect x="164" y="108" width="46" height="28" fill="#4FC3F7"/><rect x="182" y="140" width="10" height="6" fill="#455A64"/><rect x="128" y="142" width="34" height="4" fill="#37474F"/>` + W(96, 172, { pose: 'squat' }) + dolor(112, 150) + dolor(92, 124);
    if (!q) g += `<rect x="232" y="16" width="80" height="44" rx="8" fill="#fff" stroke="#2E7D32" stroke-width="2"/>` + T(272, 34, 'Pausas', 12, '#2E7D32') + T(272, 50, 'y avisa', 11, '#2E7D32');
    return sv(g);
  });

  // 13 · Ley Karin
  D('karin', q => {
    let g = fondo() + W(120, 178, { pose: 'point' }) + W(200, 178, { flip: true, pose: 'stand', hair: true });
    g += G('an-pulse', `<path d="M160,${q ? 80 : 104} c-10,-14 -26,-2 -14,10 l14,12 l14,-12 c12,-12 -4,-24 -14,-10z" fill="#E91E63"/>`);
    if (!q) g += [[56, 'Por escrito'], [160, 'Por correo'], [264, 'Presencial']].map(([x, s], i) => `<rect x="${x - 48}" y="12" width="96" height="56" rx="8" fill="#fff" stroke="#1565C0" stroke-width="2"/>`
      + (i === 0 ? `<rect x="${x - 10}" y="18" width="20" height="26" fill="#ECEFF1" stroke="#78909C"/><path d="M${x - 6},26 h12 M${x - 6},32 h12 M${x - 6},38 h8" stroke="#78909C" stroke-width="2"/>` : i === 1 ? `<rect x="${x - 15}" y="20" width="30" height="20" fill="#FFF8E1" stroke="#F9A825" stroke-width="2"/><path d="M${x - 15},20 l15,12 l15,-12" stroke="#F9A825" stroke-width="2" fill="none"/>` : `<circle cx="${x - 8}" cy="25" r="6" fill="${SK}" stroke="#22303A"/><rect x="${x - 14}" y="31" width="12" height="12" rx="3" fill="#455A64"/><circle cx="${x + 8}" cy="25" r="6" fill="${SK}" stroke="#22303A"/><rect x="${x + 2}" y="31" width="12" height="12" rx="3" fill="#1565C0"/>`)
      + T(x, 60, s, 11, '#1565C0')).join('') + padlock(258, 112).replace(/<line[^>]*\/><rect[^>]*\/><text[^>]*>NO OPERAR<\/text>/, '') + T(274, 128, 'Confidencial', 11, '#C62828') + lab(160, 192, 'Buen trato siempre', '#2E7D32');
    return sv(g);
  });

  // 14 · PREXOR ruido
  D('ruido', q => {
    const e = em();
    let g;
    if (e === 'agricola') g = cielo() + cerezo(40, 150, .6) + tractor(130, 178, { muffs: !q }) + waves(254, 110, 3);
    else {
      const tit = { lacteos: 'Laminadora', agroex: 'Calibradora', inversiones: 'Envasadora' }[e];
      g = bg() + maquina(150, 166, 150, 96, tit) + G('an-flash', waves(124, 92, 3));
      g += W(96, 172, e === 'inversiones' ? { cofia: true, muffs: q ? undefined : 'on' } : { muffs: q ? undefined : 'on' });
    }
    if (!q) g += `<circle cx="52" cy="38" r="24" fill="#1565C0"/>` + earmuff(52, 36, .5) + T(52, 78, 'Uso obligatorio', 11, '#1565C0');
    return sv(g);
  });

  // 15 · Radiación UV
  D('uv', q => {
    const e = em();
    const tubo = `<rect x="226" y="122" width="22" height="46" rx="5" fill="#FF8F00" stroke="#E65100" stroke-width="1.5"/><rect x="230" y="114" width="14" height="10" fill="#fff" stroke="#E65100"/>${T(237, 150, 'FPS', 11, '#fff')}`;
    return sv((e === 'agricola' ? cielo() : patio()) + sol(48, 44, 24)
      + `<g transform="translate(212,16)"><rect width="100" height="14" rx="3" fill="#43A047"/><rect x="20" width="20" height="14" fill="#FDD835"/><rect x="40" width="20" height="14" fill="#FB8C00"/><rect x="60" width="20" height="14" fill="#E53935"/><rect x="80" width="20" height="14" rx="3" fill="#8E24AA"/>`
      + G('an-pulse', `<path d="M90,16 l-6,10 h12z" fill="#263238"/>`) + (q ? '' : T(50, 44, 'Índice UV', 12)) + `</g>`
      + W(150, 178, q ? { hat: 'none', cofia: false } : { hat: 'legion', cofia: false, glasses: true }) + (q ? `<path d="M140.3,104 A9.7,9.7 0 0 1 159.7,104 Q150,98 140.3,104Z" fill="#4E342E"/>` : '')
      + tubo + `<rect x="262" y="132" width="16" height="36" rx="4" fill="#4FC3F7" stroke="#0277BD"/><rect x="265" y="126" width="10" height="7" fill="#0277BD"/>`
      + (q ? '' : lab(60, 104, 'Bloqueador', '#E65100') + lab(70, 130, 'Manga larga', '#1565C0') + lab(70, 156, 'Legionario', '#1565C0')));
  });

  // 16 · Protocolo psicosocial
  D('psico', q => {
    let g = fondo() + papel(14, 22, 96, 120, q ? '' : 'CEAL-SM', '#6A1B9A');
    g += [0, 1, 2, 3].map(i => `<rect x="22" y="${48 + i * 22}" width="10" height="10" fill="#fff" stroke="#6A1B9A" stroke-width="1.5"/>` + (i < 3 ? `<path d="M23,${53 + i * 22} l3,4 l6,-8" stroke="#2E7D32" stroke-width="2" fill="none"/>` : '')).join('');
    g += W(140, 180, { pose: 'carry' }) + telefono(150, 116) + arr(176, 84, 210, 84, '#6A1B9A', 4)
      + papel(216, 30, 92, 104, q ? '' : 'Plan de acción', '#2E7D32')
      + [0, 1, 2].map(i => `<path d="M224,${62 + i * 18} l4,5 l7,-9" stroke="#2E7D32" stroke-width="2.5" fill="none"/>`).join('')
      + W(262, 184, { s: .8, flip: true }) + W(292, 184, { s: .8, flip: true, hair: true });
    if (!q) g += lab(62, 162, 'Anónimo', '#6A1B9A');
    return sv(g);
  });

  // 17 · Iluminación
  D('luz', q => {
    const lamp = (x, ok) => `<rect x="${x - 26}" y="10" width="52" height="8" rx="3" fill="${ok ? '#FFF59D' : '#9E9E9E'}" stroke="#757575"/>` + (ok ? `<path d="M${x - 24},18 L${x - 50},150 H${x + 50} L${x + 24},18Z" fill="#FFF59D" opacity=".35"/>` : '');
    return sv(interior() + ST + lamp(60, true) + `<g class="si_in_fl">${lamp(160, true)}</g>` + `<rect x="134" y="10" width="52" height="8" rx="3" fill="#9E9E9E" stroke="#757575"/>` + lamp(260, true)
      + W(208, 176, { pose: 'stop', flip: true }) + `<rect x="226" y="112" width="20" height="30" rx="3" fill="#FFC20E" stroke="#C79200"/><rect x="229" y="116" width="14" height="10" fill="#C8E6C9"/>`
      + W(70, 176, { pose: 'carry' })
      + (q ? '' : lab(160, 44, 'Avisa de inmediato', '#C62828') + lab(236, 190, 'Estudio de iluminación', '#1565C0')));
  });

  // 18 · Procedimientos de trabajo seguro
  D('pts', q => {
    const e = em();
    if (e === 'lacteos') {
      let g = bg() + `<rect x="6" y="14" width="308" height="70" fill="#8D6E63"/><rect x="6" y="80" width="308" height="6" fill="#5D4037"/>`;
      const cols = ['#1565C0', '#2E7D32', '#C62828', '#6A1B9A', '#EF6C00', '#00838F'];
      for (let i = 0; i < 12; i++) { const x = 12 + i * 25.2; g += `<rect x="${f1(x)}" y="18" width="22" height="62" rx="2" fill="${cols[i % 6]}"/><text x="${f1(x + 15)}" y="74" font-size="11" font-weight="bold" fill="#fff" font-family="Arial" transform="rotate(-90 ${f1(x + 15)} 74)">COD-${String(i + 1).padStart(2, '0')}</text>`; }
      g += W(100, 178, { pose: 'point' }) + papel(118, 104, 34, 40, '', '#1565C0') + W(180, 178, { flip: true }) + mesa(222, 178, 90, 44, '#CFD8DC') + queso(234, 134) + queso(262, 134);
      if (!q) g += lab(268, 106, 'Procedimiento', '#1565C0');
      return sv(g);
    }
    const eq = e === 'agroex' ? cinta(196, 176, 120, true) : e === 'agricola' ? tractor(190, 178, { chofer: false }) : auto(186, 178);
    return sv((e === 'agricola' ? cielo() : e === 'inversiones' ? patio() : bg()) + eq + W(60, 178, Object.assign({ pose: 'point' }, jefeO())) + papel(80, 100, 40, 48, 'PTS', '#1565C0') + W(150, 178, { flip: true })
      + (q ? '' : lab(236, 48, 'Solo con autorización', '#C62828') + lab(106, 20, 'Tu jefatura te lo explica', '#2E7D32')));
  });

  // 19 · Riesgos de tu puesto (IRL)
  D('puesto', q => {
    const e = em();
    const R = { lacteos: ['Atrapamiento', 'Cortes', 'Quemaduras'], agroex: ['Atrapamiento', 'Resbalones', 'Frío'], agricola: ['Caídas', 'Cortes', 'Sol y calor'], inversiones: ['Posturas', 'Caídas', 'Tránsito'] }[e];
    return sv(fondo() + W(56, 178, Object.assign({ pose: 'point' }, jefeO())) + papel(72, 94, 44, 54, 'IRL', '#C62828') + W(150, 178, { flip: true })
      + R.map((s, i) => `<rect x="196" y="${26 + i * 46}" width="118" height="38" rx="6" fill="#fff" stroke="#C62828" stroke-width="2"/>` + diamond(216, 45 + i * 46, 11, '!') + T(234, 50 + i * 46, s, 11, '#263238', 'bold', 'start')).join(''));
  });

  // 20 · RIOHS, plan de emergencia y matriz de riesgos
  D('riohs', q => {
    const libro = (x, c, a, b) => `<rect x="${x}" y="60" width="66" height="80" rx="4" fill="${c}" stroke="#263238" stroke-width="1.5"/><rect x="${x}" y="60" width="8" height="80" fill="#000" opacity=".2"/>` + (q ? '' : T(x + 35, 96, a, 11, '#fff') + (b ? T(x + 35, 111, b, 11, '#fff') : ''));
    return sv(fondo() + mesa(6, 176, 214, 36, '#8D6E63') + libro(8, '#1565C0', 'RIOHS', '') + libro(78, '#C62828', 'Plan de', 'emergencia') + libro(148, '#2E7D32', 'Matriz de', 'riesgos')
      + `<g transform="translate(0,0)">${G('an-bob', W(272, 178, { pose: 'carry', flip: true }))}</g>` + papel(236, 96, 36, 44, '', '#455A64') + `<path d="M242,132 q6,-6 10,0 t12,-2" stroke="#1565C0" stroke-width="1.5" fill="none"/>`
      + (q ? '' : lab(236, 30, 'Parte del contrato', '#2E7D32')));
  });

  // ---------- contenidos ----------
  // Inducción escrita oficial COMFRUT Nursery S.A. (25-11-2025, revisión 01): un ítem por cada materia instruida, mismo orden.
  // {E} = nombre corto de la empresa de la persona; {MUT}, {LAMUT} y {TEL} = su mutualidad (cf_base.js).
  const NOM = { comfrut: 'Comfrut Nursery', car: 'CAR', snova: 'Snova SpA', agricap: 'Agricap', integra: 'Integra Prevención', independiente: 'Comfrut Nursery' };
  const P = (v, e) => {
    if (typeof v === 'string') { const r = v.replace(/\{E\}/g, NOM[e] || 'tu empresa'); return typeof window.siTxt === 'function' ? window.siTxt(r, e) : r; }
    if (Array.isArray(v)) return v.map(z => P(z, e));
    if (v && typeof v === 'object') { const r = {}; Object.keys(v).forEach(z => { r[z] = P(v[z], e); }); return r; }
    return v;
  };
  const esMandante = e => e === 'comfrut';

  const ITEMS = [
    // 1
    { s: 'orden', t: 'Orden y limpieza en el predio',
      x: 'El orden y la limpieza son <b>obligatorios y sin excepciones</b> en todo el Fundo Santa Sara.<ul><li>Senderos, hileras y pasillos <b>despejados</b>.</li><li>Tijeras, herramientas, bandejas y cajas en su <b>lugar asignado</b>, nunca tiradas entre las hileras.</li><li>Retira o avisa de inmediato: derrames de agua o agroquímicos, restos de amarras, plásticos, cañas cortadas, fruta en el suelo y herramientas olvidadas.</li></ul>No cumplirlo es una <b>falta grave</b> a la seguridad.',
      q: [
        { q: 'Terminas de podar una hilera. ¿Dónde dejas la tijera?', o: ['En su funda o en el lugar asignado', 'Colgada de un alambre de la espaldera', 'En el suelo, junto a la mata', 'Arriba de las bandejas, para no perderla'], w: 'Una herramienta tirada o colgada puede cortar o caer sobre alguien. Va en su funda o en su lugar.' },
        { q: 'Ves restos de amarras y plásticos en el pasillo entre hileras. ¿Qué haces?', o: ['Los retiro o aviso de inmediato', 'Los dejo, los recogerá el aseo', 'Los empujo debajo de las matas', 'Los quemo en el mismo lugar'], w: 'Amarras y plásticos en el suelo hacen tropezar. Se retiran o se avisan de inmediato.' },
        { q: '¿Por qué los senderos y pasillos del fundo deben estar despejados?', o: ['Para evitar caídas y dejar pasar a tractores y a la emergencia', 'Solo para que el campo se vea bien', 'Porque así lo pide el comprador de la fruta', 'Solo para cosechar más rápido'], w: 'Un pasillo libre evita caídas y permite que los vehículos y la ayuda lleguen sin problemas.' }] },
    // 2
    { s: 'empresa', t: 'La empresa y tu seguro: Ley 16.744',
      x: { comfrut: '<b>Comfrut Nursery</b> produce frambuesas en el <b>Fundo Santa Sara</b>. Todos sus trabajadores, <b>también los de temporada</b>, están protegidos por la <b>Ley 16.744</b> ante <b>accidentes del trabajo, de trayecto y enfermedades profesionales</b>: atención médica, rehabilitación y prestaciones económicas, sin costo. Comfrut Nursery está adherida a la <b>ACHS</b>.',
        independiente: 'En el <b>Fundo Santa Sara</b>, de <b>Comfrut Nursery</b>, se producen frambuesas. Tú prestas servicios como <b>trabajador independiente</b> (boleta de honorarios o factura). Tu seguro de la <b>Ley 16.744</b> ante <b>accidentes del trabajo, de trayecto y enfermedades profesionales</b> depende de <b>tus propias cotizaciones</b>: si estás al día, te atiende <b>el ISL o la mutualidad a la que estés adherido</b>, con atención médica, rehabilitación y prestaciones económicas. Revisa que tus cotizaciones estén al día.',
        d: 'En el <b>Fundo Santa Sara</b>, de <b>Comfrut Nursery</b>, se producen frambuesas. Tú trabajas ahí para <b>{E}</b>, empresa contratista. Todos los trabajadores, <b>también los de temporada</b>, están protegidos por la <b>Ley 16.744</b> ante <b>accidentes del trabajo, de trayecto y enfermedades profesionales</b>: atención médica, rehabilitación y prestaciones económicas, sin costo. Tu atención la da <b>{LAMUT}</b>, a la que está adherida {E}.' },
      q: [
        { q: '¿Qué cubre el seguro de la Ley 16.744?', o: ['Accidentes del trabajo, de trayecto y enfermedades profesionales', 'Solo accidentes graves ocurridos dentro del fundo', 'Solo enfermedades comunes, como un resfrío', 'Solo al personal de planta, no al de temporada'], w: 'La Ley 16.744 cubre a todos los trabajadores frente a accidentes del trabajo, de trayecto y enfermedades profesionales.' },
        { q: 'Si sufres un accidente del trabajo, ¿qué te entrega el seguro de la Ley 16.744?', o: ['Atención médica, rehabilitación y prestaciones económicas', 'Solo los primeros auxilios en el fundo', 'Solo un bono; la atención la pago yo', 'Solo licencia médica, sin tratamiento'], w: 'El seguro entrega atención médica y rehabilitación hasta la recuperación, más las prestaciones económicas que correspondan.' },
        { q: '¿Quién paga la atención médica por un accidente del trabajo?', o: ['El seguro de la Ley 16.744, a través de {LAMUT}', 'Yo, con mi Fonasa o isapre', 'Yo y la empresa, por mitades', 'Yo, y después me lo devuelven en el sueldo'], w: 'La atención por accidente del trabajo es gratuita para ti: la cubre el seguro de la Ley 16.744 a través de {LAMUT}.' }] },
    // 3
    { s: 'aviso', k: 'Todo accidente se informa de inmediato, aunque parezca leve.', t: 'Si tienes un accidente del trabajo o de trayecto',
      x: { comfrut: '<ul><li>Avisa <b>de inmediato</b> a tu jefatura, aunque la lesión parezca leve.</li><li>La jefatura coordina tu <b>traslado a la ACHS</b>; ahí dices que fue un accidente del trabajo.</li><li><b>Trayecto</b> (camino directo entre tu casa y el trabajo): también avisa de inmediato y guarda pruebas, como un parte o testigos.</li><li>Emergencias ACHS: <b>1404</b>, las 24 horas.</li></ul>',
        car: '<ul><li>Avisa <b>de inmediato</b> a tu jefatura, aunque la lesión parezca leve.</li><li>La jefatura coordina tu <b>traslado al IST</b>, la mutualidad de CAR; ahí dices que fue un accidente del trabajo.</li><li><b>Trayecto</b> (camino directo entre tu casa y el trabajo): también avisa de inmediato y guarda pruebas, como un parte o testigos.</li><li>Urgencias IST: <b>800 204 000</b>.</li></ul>',
        independiente: '<ul><li>Avisa <b>de inmediato</b> a la jefatura del fundo, aunque la lesión parezca leve.</li><li>Acude al <b>ISL o a la mutualidad</b> donde cotizas; ahí dices que fue un <b>accidente del trabajo</b>.</li><li><b>Trayecto</b> (camino directo entre tu casa y el trabajo): también avisa de inmediato y guarda pruebas, como un parte o testigos.</li><li>Ten a mano el teléfono de emergencias de tu organismo.</li></ul>',
        d: '<ul><li>Avisa <b>de inmediato</b> a tu jefatura, aunque la lesión parezca leve.</li><li>La jefatura coordina tu <b>traslado a la mutualidad</b> a la que está adherida {E}; ahí dices que fue un accidente del trabajo.</li><li><b>Trayecto</b> (camino directo entre tu casa y el trabajo): también avisa de inmediato y guarda pruebas, como un parte o testigos.</li><li>Pregunta a tu jefatura el teléfono de emergencias de tu mutualidad.</li></ul>' },
      q: [
        { q: 'Te haces un corte pequeño con la tijera de podar. ¿Qué haces?', o: ['Aviso de inmediato a mi jefatura', 'Me curo solo y aviso al final del turno', 'No aviso si puedo seguir trabajando', 'Aviso mañana si todavía me duele'], w: 'Todo accidente se informa de inmediato, aunque parezca leve, para recibir atención en {LAMUT} y quedar cubierto.' },
        { q: 'Tuviste un accidente del trabajo. ¿Dónde te atienden?', o: ['En {LAMUT}, la mutualidad de mi empresa', 'En cualquier consultorio, pagando yo', 'En la casa, con remedios propios', 'En ninguna parte si puedo caminar'], w: 'La atención por accidente del trabajo la da la mutualidad a la que está adherida tu empresa, sin costo para ti.' },
        { q: 'Saliendo del trabajo, en el camino directo a tu casa, te caes y te lesionas. ¿Qué es?', o: ['Un accidente de trayecto: aviso de inmediato', 'Un accidente común, sin cobertura', 'Nada que informar, porque ya terminé el turno', 'Un accidente del trabajo solo si fue dentro del fundo'], w: 'El accidente en el trayecto directo entre la casa y el trabajo está cubierto por la Ley 16.744. Se avisa de inmediato.' }] },
    // 4
    { s: 'grave', k: 'Accidente grave o fatal: suspender la faena, delimitar y avisar.', t: 'Accidente grave o fatal',
      x: 'Según la SUSESO (Res. Ex. 156), es <b>grave</b>, entre otros, si hay: <b>caída de más de 1,8 m</b>, maniobras de <b>rescate o reanimación</b>, <b>pérdida de una parte del cuerpo</b> o <b>varios trabajadores</b> afectados.<ul><li>Se <b>suspende la faena</b> y se <b>delimita el área</b> con conos o cinta, sin mover nada.</li><li>Avisa de inmediato a tu jefatura.</li><li>La empresa avisa a la SEREMI de Salud, la Inspección del Trabajo, {LAMUT} y Carabineros o PDI.</li></ul>',
      q: [
        { q: '¿Cuál de estos accidentes es grave según la SUSESO?', o: ['Una caída desde más de 1,8 m de altura', 'Un corte superficial en un dedo', 'Un esguince leve al caminar', 'Un golpe en la rodilla sin herida'], w: 'Las caídas de más de 1,8 m, el rescate o la reanimación, la pérdida de una parte del cuerpo y los que afectan a varios trabajadores son graves.' },
        { q: 'Ocurre un accidente grave en tu sector. ¿Qué se hace en el lugar?', o: ['Se suspende la faena y se delimita el área sin mover nada', 'Se limpia el lugar para seguir trabajando', 'Se sigue trabajando lejos del accidentado', 'Se ordenan las herramientas para despejar el área'], w: 'Se suspende la faena y se delimita el área sin mover nada, para atender y para que la autoridad investigue.' },
        { q: 'En un accidente grave o fatal, ¿quién avisa a la SEREMI de Salud, la Inspección del Trabajo, la mutualidad y Carabineros o PDI?', o: ['La empresa, de inmediato', 'El trabajador accidentado, cuando se recupere', 'Nadie, si el accidentado ya fue atendido', 'Solo la mutualidad, a fin de mes'], w: 'La empresa debe avisar de inmediato a las autoridades. Tú avisas de inmediato a tu jefatura.' }] },
    // 5
    { s: 'epp', t: 'Política de prevención y uso del EPP',
      x: 'En el Fundo Santa Sara los accidentes <b>se pueden evitar</b>.<ul><li>Tu EPP (<b>legionario con cubrenuca, ropa de manga larga, lentes de seguridad, zapatos de seguridad</b>, bloqueador y guantes según la labor) es <b>obligatorio todo el tiempo</b>.</li><li>Se entrega <b>sin costo</b>, es <b>certificado</b> y tu jefatura te explica su uso.</li><li>Si se daña, pide reposición <b>devolviendo el dañado</b>.</li><li>No operes equipos sin capacitación ni autorización.</li></ul>',
      q: [
        { q: '¿Cuándo debes usar tu EPP?', o: ['Todo el tiempo que dure la tarea', 'Solo cuando me supervisan', 'Solo al comienzo, después me lo saco', 'Solo si la tarea es nueva para mí'], w: 'El EPP protege solo si está puesto todo el tiempo que estás expuesto al riesgo.' },
        { q: 'Tu EPP se dañó. ¿Cómo pides uno nuevo?', o: ['Pido la reposición devolviendo el dañado', 'Lo boto y pido otro cuando pueda', 'Sigo usándolo hasta fin de mes', 'Me compro uno cualquiera en el comercio'], w: 'La reposición se pide devolviendo el EPP dañado; así se controla su estado y se entrega uno certificado.' },
        { q: 'El EPP que entrega la empresa debe ser certificado y sin costo, y se te debe explicar cómo usarlo y cuidarlo.', vf: true, w: 'Verdadero. El EPP es certificado (DS 18), se entrega sin costo y la jefatura explica su uso y cuidado.' }] },
    // 6
    { s: 'extintor', t: 'Uso de extintores (PQS y CO2)',
      x: '<ul><li>Conoce la <b>ubicación</b> de los extintores en bodegas, comedores, vehículos y tractores, y nunca los tapes.</li><li>Uso: <b>1.</b> quita el seguro, <b>2.</b> apunta a la <b>base</b> del fuego, <b>3.</b> aprieta y haz un <b>barrido</b> de lado a lado.</li><li><b>PQS</b> (polvo químico seco): fuegos de sólidos, líquidos y gases inflamables.</li><li><b>CO2</b>: fuegos eléctricos y equipos energizados.</li></ul>Si el fuego crece, evacúa y avisa.',
      q: [
        { q: 'Al usar un extintor, ¿hacia dónde apuntas?', o: ['A la base del fuego', 'A la punta de las llamas', 'Al humo, para despejarlo', 'Al centro de las llamas, sin moverme'], w: 'Se apunta a la base, donde está el material que se quema, y se hace un barrido de lado a lado.' },
        { q: 'Se incendia un tablero eléctrico. ¿Qué extintor es el indicado?', o: ['El de CO2', 'Un balde con agua', 'Una manguera de agua', 'Cualquiera, todos sirven igual'], w: 'El CO2 se usa en fuegos eléctricos. El agua conduce la electricidad y es muy peligrosa.' },
        { q: '¿Cuál es el primer paso para usar el extintor?', o: ['Quitar el seguro', 'Apretar la manilla de inmediato', 'Dar vuelta el extintor', 'Golpear el cilindro para soltar el polvo'], w: 'Primero se quita el seguro; después se apunta a la base y se aprieta con un barrido.' }] },
    // 7
    { s: 'senal', t: 'Señalización, tránsito peatonal y zonas de seguridad',
      x: '<ul><li>Respeta y cuida toda la <b>señalización</b> del fundo.</li><li>Camina por las <b>rutas peatonales</b> y por el borde de los caminos internos, lejos de tractores y vehículos, donde el conductor te vea.</li><li>Fuma solo en la <b>zona habilitada</b>, nunca entre las hileras, cerca de bodegas ni de pasto seco.</li><li>Conoce la <b>zona de seguridad</b> de tu sector (frente a las instalaciones) y mantenla despejada.</li></ul>',
      q: [
        { q: 'Quieres fumar en tu descanso. ¿Dónde puedes hacerlo?', o: ['Solo en la zona habilitada para fumar', 'En cualquier lugar al aire libre', 'Entre las hileras, si nadie mira', 'Dentro del vehículo de la empresa'], w: 'Solo se fuma en la zona habilitada, para prevenir incendios y cuidar la salud de todos.' },
        { q: 'Vas por un camino interno del fundo y viene un tractor. ¿Qué haces?', o: ['Me hago a un lado, por el borde, donde el tractorista me vea', 'Sigo por el centro del camino, él me esquiva', 'Me subo al tractor para avanzar más rápido', 'Camino detrás del tractor'], w: 'Los peatones van por su ruta y lejos de los vehículos: el conductor no siempre te ve.' },
        { q: '¿Cómo debe estar la zona de seguridad?', o: ['Despejada, sin bandejas, tractores ni vehículos', 'Con cajas ordenadas encima', 'Usada de estacionamiento si sobra espacio', 'Cerrada con llave para que nadie la ocupe'], w: 'La zona de seguridad debe estar siempre libre y accesible para reunirse en una emergencia.' }] },
    // 8
    { s: 'carga', t: 'Peso máximo de carga manual (Ley 20.949)',
      x: 'La carga manual máxima es:<ul><li><b>25 kg</b> para hombres.</li><li><b>20 kg</b> para mujeres y menores de 18 años.</li><li>Las embarazadas no levantan carga.</li></ul>Sobre ese peso se usa <b>ayuda mecánica</b> (carro) o se pide apoyo: postes, sacos de fertilizante y pilas de bandejas. Levanta con las piernas flectadas, espalda recta y la carga pegada al cuerpo.',
      q: [
        { q: '¿Cuál es el peso máximo que un hombre puede levantar en forma manual?', o: ['25 kg', '30 kg', '40 kg', '50 kg'], w: 'La Ley 20.949 fija 25 kg para hombres y 20 kg para mujeres y menores de 18 años.' },
        { q: '¿Cuál es el peso máximo de carga manual para mujeres y menores de 18 años?', o: ['20 kg', '25 kg', '15 kg', '30 kg'], w: 'La Ley 20.949 fija 20 kg para mujeres y menores de 18 años. Las embarazadas no levantan carga.' },
        { q: 'Debes mover un saco de fertilizante de 40 kg. ¿Qué haces?', o: ['Uso ayuda mecánica o pido apoyo', 'Lo levanto rápido para no cansarme', 'Lo arrastro con la espalda doblada', 'Lo levanto si estoy en buen estado físico'], w: 'Sobre el límite legal se usa ayuda mecánica o se pide apoyo. Así se evitan lesiones de espalda.' }] },
    // 9
    { s: 'hanta', t: 'Hantavirus',
      x: 'Lo transmite el <b>ratón colilargo</b>, común en el campo, por su orina, saliva y fecas. Se contagia al <b>respirar polvo contaminado</b> en bodegas, galpones y pastizales.<ul><li><b>Ventila</b> unos 30 minutos antes de entrar a un lugar cerrado.</li><li><b>No barras en seco</b>: humedece con agua y cloro.</li><li>Usa <b>mascarilla y guantes</b> al limpiar, y no acumules basura ni pasto.</li></ul>Síntomas parecidos a una gripe: fiebre, dolor muscular y de cabeza, cansancio. <b>Avisa y consulta de inmediato</b>.',
      q: [
        { q: 'Debes limpiar una bodega cerrada donde hay fecas de ratón. ¿Cómo lo haces?', o: ['Ventilo, humedezco con agua y cloro y uso mascarilla y guantes', 'Barro en seco rápido y boto la basura', 'Uso un soplador para sacar el polvo', 'Barro con la puerta cerrada para no esparcir'], w: 'Barrer en seco levanta el virus al aire. Se ventila, se humedece con agua y cloro y se usa mascarilla y guantes.' },
        { q: '¿Qué animal transmite el hantavirus?', o: ['El ratón colilargo', 'La paloma', 'El perro', 'La abeja'], w: 'El ratón colilargo lo transmite por su orina, saliva y fecas.' },
        { q: 'Días después de limpiar una bodega con ratones, tienes fiebre y dolor muscular. ¿Qué haces?', o: ['Aviso y consulto de inmediato', 'Tomo un remedio y sigo trabajando', 'Espero una semana a ver si pasa', 'Me quedo en la casa sin avisar'], w: 'El hantavirus puede ser grave y parece una gripe. Se avisa y se consulta de inmediato, contando que estuviste en contacto con ratones.' }] },
    // 10
    { s: 'quimicos', t: 'Sustancias químicas peligrosas',
      x: 'En el fundo se usan agroquímicos y fertilizantes.<ul><li>Cada producto tiene su <b>HDS</b> (hoja de datos de seguridad) vigente, según el DS 57.</li><li>Usa el <b>EPP que indica la HDS</b>.</li><li>Primeros auxilios ante inhalación, contacto, ingestión u ojos: los indica la HDS.</li><li><b>Derrame</b>: aléjate y avisa; contén solo si estás capacitado.</li><li>Respeta el <b>período de reingreso</b> de cada sector aplicado.</li></ul>',
      q: [
        { q: '¿Dónde encuentras el EPP y los primeros auxilios de un producto químico?', o: ['En su HDS, la hoja de datos de seguridad', 'En la factura de compra del producto', 'En la etiqueta de otro producto parecido', 'En lo que recuerde un compañero'], w: 'La HDS indica los peligros, el EPP, los primeros auxilios y qué hacer en un derrame. Debe estar vigente y disponible.' },
        { q: 'Se derrama un envase de agroquímico en la bodega. ¿Qué haces?', o: ['Me alejo, aviso y contengo solo si estoy capacitado', 'Lo limpio con un trapo, sin guantes', 'Lo tapo con lo que encuentre y sigo', 'Lo lavo con mucha agua hacia la acequia'], w: 'Un derrame se controla según la HDS, con EPP y por personal capacitado. Primero alejarse y avisar.' },
        { q: 'Hay un letrero de aplicación en la entrada de un sector de frambuesas. ¿Qué haces?', o: ['No entro hasta que termine el período de reingreso', 'Entro rápido a cosechar y salgo', 'Entro si no siento olor', 'Saco el letrero para trabajar tranquilo'], w: 'El período de reingreso protege tu salud: no se entra hasta que termine y la jefatura lo autorice.' }] },
    // 11
    { s: 'calor', t: 'Altas temperaturas',
      x: 'En la temporada de frambuesa trabajas al sol en los meses de calor.<ul><li><b>Hidrátate</b> en las estaciones de agua seguido, aunque no tengas sed.</li><li>Ropa <b>liviana, clara y de manga larga</b>, y legionario.</li><li>Haz <b>pausas a la sombra</b>, en el comedor.</li><li>Las labores más pesadas, en las horas más frescas; evita el sol directo entre las <b>11 y las 16 horas</b>.</li></ul>Mareo, dolor de cabeza o calambres: detente, ve a la sombra y avisa.',
      q: [
        { q: '¿En qué horario se debe evitar más el sol directo?', o: ['Entre las 11 y las 16 horas', 'Entre las 8 y las 10 horas', 'Entre las 17 y las 19 horas', 'Solo a las 12 en punto'], w: 'Entre las 11 y las 16 horas el sol es más fuerte. Si debes trabajar al sol, hidrátate, usa bloqueador y haz pausas en la sombra.' },
        { q: '¿Cuándo debes tomar agua en días de calor?', o: ['Seguido, aunque no tenga sed', 'Solo cuando tenga mucha sed', 'Solo a la hora de colación', 'Al terminar la jornada'], w: 'Cuando aparece la sed ya empezaste a deshidratarte. Toma agua seguido durante la jornada.' },
        { q: 'Con el calor, un compañero se marea y le duele la cabeza. ¿Qué haces?', o: ['Lo llevo a la sombra, le doy agua y aviso', 'Le digo que siga, que ya se le pasa', 'Le doy una bebida energética y que siga', 'Lo dejo descansando al sol'], w: 'Son señales de golpe de calor: se lleva a un lugar fresco, se hidrata y se avisa de inmediato.' }] },
    // 12
    { s: 'tmert', t: 'Protocolo TMERT',
      x: 'El protocolo <b>TMERT</b> (MINSAL) previene los trastornos musculoesqueléticos de cuello, hombros, codos, muñecas y manos, por tareas repetitivas, posturas forzadas y fuerza. En el fundo: la <b>cosecha</b> de frambuesa, la <b>poda</b> y el <b>amarre</b> de cañas.<ul><li>Haz las <b>pausas activas</b> y rotaciones indicadas.</li><li>Ajusta tu postura: dobla las rodillas para la fruta de abajo.</li><li><b>Avisa temprano</b> cualquier molestia o dolor.</li></ul>',
      q: [
        { q: 'Hace días sientes dolor en el hombro al amarrar cañas. ¿Qué haces?', o: ['Aviso a mi jefatura para que se evalúe', 'Espero que se pase solo', 'Tomo un remedio y sigo igual', 'Trabajo más rápido para terminar antes'], w: 'El dolor que se avisa temprano se trata a tiempo. Si se espera, puede volverse una lesión permanente.' },
        { q: '¿Qué previene el protocolo TMERT?', o: ['Lesiones de cuello, hombros, codos y muñecas por tareas repetitivas', 'La pérdida de audición por ruido', 'Las intoxicaciones con productos químicos', 'Los accidentes de tránsito en el trayecto'], w: 'TMERT trata los trastornos musculoesqueléticos por tareas repetitivas, posturas forzadas y fuerza.' },
        { q: 'Las pausas durante la jornada ayudan a prevenir lesiones por tareas repetitivas.', vf: true, w: 'Verdadero. Las pausas y las rotaciones dejan descansar los músculos y tendones.' }] },
    // 13
    { s: 'karin', t: 'Ley Karin (21.643)',
      x: 'La <b>Ley Karin</b> previene y sanciona el <b>acoso laboral</b>, el <b>acoso sexual</b> y la <b>violencia en el trabajo</b>.<ul><li>El <b>buen trato</b> es obligación de todos: respeto con compañeros, jefaturas, contratistas y terceros.</li><li>Puedes denunciar <b>por escrito, por correo, por teléfono o en forma presencial</b>, según el protocolo de tu empresa.</li><li>La denuncia es <b>confidencial</b> y no puede haber represalias.</li></ul>',
      q: [
        { q: '¿Cómo puedes hacer una denuncia por Ley Karin?', o: ['Por escrito, por correo, por teléfono o en forma presencial', 'Solo contándoselo a un compañero', 'Solo publicándolo en redes sociales', 'Solo a través de un abogado particular'], w: 'El protocolo permite denunciar por varias vías, con confidencialidad.' },
        { q: '¿Qué conductas aborda la Ley Karin?', o: ['Acoso laboral, acoso sexual y violencia en el trabajo', 'Solo los atrasos y las inasistencias', 'Solo los accidentes del trabajo', 'Solo los reclamos por el sueldo'], w: 'La Ley 21.643 previene, investiga y sanciona el acoso laboral, el acoso sexual y la violencia en el trabajo.' },
        { q: 'Un compañero humilla y se burla de otro una y otra vez frente a todos. ¿Qué es?', o: ['Una conducta que puede ser acoso laboral y se puede denunciar', 'Una broma normal entre compañeros', 'Un problema personal en el que la empresa no se mete', 'Algo que se arregla solo con el tiempo'], w: 'Las humillaciones reiteradas pueden ser acoso laboral. Se denuncia, en forma confidencial y sin represalias.' }] },
    // 14
    { s: 'ruido', t: 'Protocolo de ruido (PREXOR)',
      x: 'El protocolo <b>PREXOR</b> (MINSAL) previene la pérdida de audición por ruido, que es <b>permanente</b>.<ul><li>En zonas o equipos con ruido, el <b>protector auditivo es obligatorio</b> todo el tiempo.</li><li>En el fundo: tractores, desbrozadoras, motobombas y ahoyadoras.</li><li>Si estás expuesto, asiste a tus exámenes de audiometría en {LAMUT}.</li></ul>',
      q: [
        { q: 'Vas a operar una desbrozadora solo por 10 minutos. ¿Usas protector auditivo?', o: ['Sí, todo el tiempo que la opere', 'No, porque es poco tiempo', 'Solo si suena muy fuerte', 'Solo si me lo pide la jefatura'], w: 'El protector auditivo es obligatorio todo el tiempo que hay ruido, aunque sea un rato.' },
        { q: '¿Qué pasa con la audición dañada por ruido?', o: ['El daño es permanente, no se recupera', 'Se recupera al día siguiente', 'Se cura con gotas para los oídos', 'Se recupera en las vacaciones'], w: 'La pérdida de audición por ruido no tiene cura. Por eso se previene con el protector auditivo.' },
        { q: '¿Cómo deben ir puestos los fonos?', o: ['Cubriendo bien ambas orejas', 'Colgados en el cuello', 'Uno puesto y el otro levantado para escuchar', 'Sobre la frente, listos para bajarlos'], w: 'Los fonos protegen solo si cubren bien ambas orejas, todo el tiempo que hay ruido.' }] },
    // 15
    { s: 'uv', t: 'Radiación UV de origen solar',
      x: 'La radiación UV del sol (Ley 20.096) daña la piel y los ojos, <b>aun con nubes</b>. Puestos expuestos: <b>todas las labores del campo</b> (cosecha, poda, amarre, estructura, tractor).<ul><li><b>Bloqueador</b> factor 30 o más, antes de empezar y cada 2 horas.</li><li><b>Legionario</b> con cubrenuca, <b>manga larga</b> y <b>lentes</b> con filtro UV.</li><li><b>Hidratación</b> y sombra.</li></ul>',
      q: [
        { q: '¿Cuándo debes usar bloqueador si trabajas al aire libre?', o: ['Todos los días, también si está nublado', 'Solo en días de mucho calor', 'Solo en enero y febrero', 'Solo si tengo la piel clara'], w: 'La radiación UV atraviesa las nubes. El bloqueador se usa todos los días al aire libre y se repite cada 2 horas.' },
        { q: '¿Qué gorro protege mejor del sol al trabajar en el campo?', o: ['Legionario con cubrenuca', 'Jockey con la visera hacia atrás', 'Gorro de lana', 'Pañuelo amarrado en la frente'], w: 'El legionario con cubrenuca protege la cara, las orejas y la nuca.' },
        { q: '¿Qué ley protege a los trabajadores de la radiación UV de origen solar?', o: ['Ley 20.096', 'Ley 20.949', 'Ley 21.643', 'Ley 19.300'], w: 'La Ley 20.096 regula la protección frente a la radiación UV. La 20.949 es de carga manual y la 21.643 es la Ley Karin.' }] },
    // 16
    { s: 'psico', t: 'Protocolo de riesgo psicosocial',
      x: 'El protocolo de <b>riesgo psicosocial</b> (MINSAL) cuida tu salud mental en el trabajo: carga de trabajo, organización, trato, liderazgo y equilibrio con la vida familiar. Se mide con el cuestionario <b>CEAL-SM</b> de la SUSESO, que es <b>anónimo</b>. Con los resultados se hacen <b>planes de acción</b> para mejorar. Responde con sinceridad cuando te toque.',
      q: [
        { q: '¿Con qué cuestionario se mide el riesgo psicosocial en el trabajo?', o: ['El CEAL-SM de la SUSESO', 'La hoja de datos de seguridad (HDS)', 'La lista de chequeo del tractor', 'La audiometría de la mutualidad'], w: 'El riesgo psicosocial se evalúa con el cuestionario CEAL-SM de la SUSESO.' },
        { q: '¿Para qué se usan los resultados del CEAL-SM?', o: ['Para hacer planes de acción que mejoren el ambiente de trabajo', 'Para sancionar a quienes respondan mal', 'Para decidir los aumentos de sueldo', 'Para elegir a quién cambiar de puesto'], w: 'Los resultados sirven para hacer planes de acción que mejoren las condiciones de trabajo.' },
        { q: '¿Cómo se responde el cuestionario CEAL-SM?', o: ['En forma anónima y con sinceridad', 'Con nombre y RUT en cada hoja', 'Lo responde la jefatura por cada trabajador', 'Copiando las respuestas de un compañero'], w: 'Es anónimo, para que puedas responder con sinceridad.' }] },
    // 17
    { s: 'luz', t: 'Protocolo de iluminación',
      x: 'Una buena iluminación evita caídas, cortes y errores en <b>bodegas, galpones, comedores</b> y en las labores de madrugada o de tarde. La empresa hace un <b>estudio de iluminación</b> para que cada lugar tenga la luz que exige el DS 594. Si ves una <b>luminaria apagada, que parpadea o rota</b>, avisa de inmediato. No trabajes con poca luz.',
      q: [
        { q: 'Una luminaria de la bodega parpadea o está apagada. ¿Qué haces?', o: ['Aviso de inmediato a mi jefatura', 'La cambio yo, subido a una silla', 'Sigo trabajando con la luz que hay', 'Espero que otro la vea y avise'], w: 'Se avisa de inmediato para que la repare personal autorizado. Nunca te subas a una silla.' },
        { q: '¿Para qué se hace el estudio de iluminación?', o: ['Para verificar que cada puesto tenga la luz necesaria', 'Solo para ahorrar electricidad', 'Para fijar el horario de trabajo', 'Para elegir el color de las paredes'], w: 'El estudio mide la luz de cada puesto para que cumpla lo que exige el DS 594.' },
        { q: 'Si la luz de tu puesto es poca, igual puedes seguir trabajando si conoces bien la tarea.', vf: false, w: 'Falso. Con poca luz aumentan las caídas, los cortes y los errores. Se avisa de inmediato.' }] },
    // 18
    { s: 'pts', t: 'Procedimientos de trabajo seguro',
      x: 'Junto con esta inducción recibes los <b>procedimientos de trabajo seguro</b> del fundo: <b>tránsito peatonal</b>, <b>trabajos en caliente</b>, <b>trabajos en altura</b>, <b>plan de emergencia</b>, <b>operación con tractor</b> y <b>operación de camión</b>. Tu jefatura te los <b>entrega y explica</b>.<ul><li>Síguelos siempre, sin saltarte pasos.</li><li><b>Nunca</b> operes un tractor, camión o máquina sin capacitación ni autorización.</li><li>Para destrabar, limpiar o ajustar un equipo: detén el motor, saca la llave y bloquéalo.</li></ul>',
      q: [
        { q: '¿Quién te entrega y explica el procedimiento de trabajo seguro de tu labor?', o: ['Mi jefatura, antes de hacer la tarea', 'Un compañero, cuando tenga tiempo', 'Nadie, se aprende mirando', 'Lo leo solo si tengo un accidente'], w: 'La jefatura entrega y explica el procedimiento antes de que hagas la tarea, y se sigue siempre.' },
        { q: 'Te piden mover el tractor, pero nunca te han capacitado ni autorizado. ¿Qué haces?', o: ['No lo muevo hasta tener capacitación y autorización', 'Lo muevo despacio, mirando a otros', 'Lo muevo solo unos metros', 'Lo muevo si no hay nadie más disponible'], w: 'Ningún equipo ni vehículo se opera sin capacitación y autorización. Así se evitan los accidentes.' },
        { q: 'Se enreda una rama en el cardán del tractor. ¿Qué haces?', o: ['Desconecto la toma de fuerza, apago el motor y saco la llave; después retiro la rama', 'La saco rápido con la mano, con el cardán girando', 'La tiro con un palo, sin detener el tractor', 'Le pido a un compañero que la saque mientras avanzo'], w: 'Para destrabar o limpiar, primero se detiene el equipo y se bloquea. Nunca la mano con la máquina en marcha.' }] },
    // 19
    { s: 'puesto', puesto: true, t: 'Los riesgos de tu puesto (IRL)', x: 'pendiente',
      q: [
        { q: '¿Qué debe informarte la empresa sobre tu puesto de trabajo?', o: ['Los riesgos, sus consecuencias y las medidas para controlarlos', 'Solo el horario y el sueldo', 'Solo los riesgos que ya causaron accidentes', 'Solo las sanciones por no usar el EPP'], w: 'El DS 44 obliga a informar los riesgos de tu puesto, sus consecuencias y las medidas preventivas.' },
        { q: '¿Cuándo debe la empresa informarte los riesgos de tu puesto?', o: ['Al ingresar y cada vez que cambie el proceso o mi puesto', 'Solo cuando ocurre un accidente', 'Una vez al año, en diciembre', 'Solo si lo pido por escrito'], w: 'Se informa al ingresar y cada vez que cambien los procesos, los equipos o tu puesto.' },
        { q: 'Al cosechar frambuesa con la espalda doblada muchas horas, ¿qué riesgo tienes y cómo lo controlas?', o: ['Sobrecarga postural: doblo las rodillas, cambio de postura y hago pausas', 'Ninguno, porque la fruta es liviana', 'Caída de altura: uso arnés', 'Ruido: uso protector auditivo'], w: 'La sobrecarga postural causa lumbago y lesiones. Se controla con buena postura, cambios de posición y pausas.' }] },
    // 20
    { s: 'riohs', t: 'Reglamento Interno, plan de emergencia y matriz de riesgos',
      x: 'Al ingresar se te entregan el <b>Reglamento Interno de Orden, Higiene y Seguridad</b> (RIOHS), el <b>plan de emergencia</b> y la <b>matriz de identificación de peligros y evaluación de riesgos</b>, que forman parte de tu <b>contrato de trabajo</b>.<ul><li>El RIOHS tiene tus obligaciones, prohibiciones y sanciones.</li><li>El plan de emergencia dice cómo actuar y evacuar, y dónde está la zona de seguridad.</li><li>La matriz muestra los riesgos de cada labor.</li></ul>Léelos y cúmplelos.<div class="indlinks" data-ind="links"></div>',
      q: [
        { q: '¿Qué documento contiene tus obligaciones, prohibiciones y sanciones en seguridad?', o: ['El Reglamento Interno de Orden, Higiene y Seguridad (RIOHS)', 'La hoja de datos de seguridad (HDS)', 'La liquidación de sueldo', 'El certificado de afiliación a la mutualidad'], w: 'El RIOHS establece las obligaciones, prohibiciones y sanciones, y forma parte de tu contrato.' },
        { q: '¿Qué indica el plan de emergencia?', o: ['Cómo actuar y evacuar, y dónde está la zona de seguridad', 'Los turnos y el horario de colación', 'Cómo pedir vacaciones', 'Las metas de cosecha del mes'], w: 'El plan de emergencia indica cómo actuar ante un sismo, incendio u otra emergencia, las vías de evacuación y la zona de seguridad.' },
        { q: 'El RIOHS, el plan de emergencia y la matriz de riesgos que se te entregan, ¿forman parte de tu contrato?', o: ['Sí, por eso debo conocerlos y cumplirlos', 'No, son solo para las jefaturas', 'Solo para el personal antiguo', 'Solo durante el periodo de prueba'], w: 'Forman parte del contrato de trabajo: debes conocerlos y cumplirlos.' }] }
  ];

  // Riesgos del puesto (lámina 19): los de la inducción escrita de Comfrut, agrupados por labor
  const PUESTO_HTML = '<li><b>Cosecha, poda y amarre de frambuesa:</b> sobrecarga postural y trabajo repetitivo, cortes con tijeras, espinas, alambres y cañas a la altura de los ojos, picaduras, sol y calor, caídas en terreno irregular. <span class="ctrl">✅ Control:</span> doblar las rodillas y cambiar de postura, pausas activas, tijera con funda y corte hacia afuera, guantes, lentes, manga larga, legionario, bloqueador y agua.</li>'
    + '<li><b>Armado de estructura:</b> manejo manual de postes, golpes con combo, latigazo de alambre tenso, proyección de astillas. <span class="ctrl">✅ Control:</span> postes entre dos (máximo 25 kg por persona), nadie en la línea del alambre, lentes, guantes y zapatos de seguridad.</li>'
    + '<li><b>Tractores y vehículos:</b> atropello, volcamiento, atrapamiento en el cardán. <span class="ctrl">✅ Control:</span> solo personal autorizado, arco antivuelco y cinturón, nadie como pasajero, contacto visual con el tractorista, nunca detrás de un tractor que retrocede.</li>'
    + '<li><b>Cosecha mecanizada:</b> atropello, atrapamiento en piezas móviles, ruido. <span class="ctrl">✅ Control:</span> nadie delante ni en la cabecera cuando gira, contacto visual y seña del operador, nunca meter las manos con la máquina andando, solo sube personal autorizado, protector auditivo junto a la máquina.</li>'
    + '<li><b>Taller mecánico:</b> soldadura, esmeril, piezas pesadas, equipos levantados. <span class="ctrl">✅ Control:</span> solo personal autorizado; equipo con tarjeta y candado no se usa.</li>'
    + '<li><b>Agroquímicos:</b> intoxicación por contacto, inhalación o ingestión. <span class="ctrl">✅ Control:</span> respetar el período de reingreso, no comer en la hilera, lavarse las manos, EPP según la HDS.</li>'
    + '<li><b>Para todos:</b> caídas al mismo nivel, joyas y ropa suelta, pelo fuera de la cofia, riesgo eléctrico, incendio, accidente de trayecto y acoso. <span class="ctrl">✅ Control:</span> pasillos libres, sin anillos ni pulseras, no intervenir instalaciones eléctricas, conocer la zona de seguridad, respetar las normas de tránsito y el buen trato.</li>';

  ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'].forEach(e => {
    const pick = v => (v && typeof v === 'object' && !Array.isArray(v) && (v.d !== undefined || v.comfrut !== undefined)) ? (v[e] !== undefined ? v[e] : (esMandante(e) && v.comfrut !== undefined ? v.comfrut : v.d)) : v;
    const learn = ITEMS.map(it => {
      const l = { s: 'si_in_' + it.s, t: P(pick(it.t), e), x: P(pick(it.x), e) };
      if (it.puesto) { l.puesto = true; l.x = 'La empresa debe informarte los <b>riesgos de tu puesto</b>, sus <b>consecuencias</b> y las <b>medidas</b> para controlarlos (DS 44). Lo hace al ingresar y cada vez que cambie el proceso o tu puesto. Los principales en el Fundo Santa Sara:<ul>' + PUESTO_HTML + '</ul>'; }
      if (it.k) l.k = P(it.k, e);
      return l;
    });
    const quiz = ITEMS.map(it => ({ s: 'si_in_' + it.s + '_q', v: P(it.q, e) }));
    SI_CONT.temas.push({ id: 'induccion', sec: 'induccion', emp: [e], title: 'Inducción de Prevención de Riesgos (IRL)', thumb: 'si_in_empresa', mins: 45, learn, quiz });
  });
})();


/* ---- todos1.js ---- */
/* Grupo San Ignacio · charlas "Para todos" (parte 1): autocuidado, peligros, EPP, orden, cargas, accidente, incendios, trayecto.
   Las ven las 4 empresas: textos con .. y escenas que cambian según window.SI_EMP. */
window.SI_CONT = window.SI_CONT || { temas: [] };
(function () {
  // ===================== helpers propios (no globales) =====================
  const E = () => 'agricola';   // Comfrut: escenas de campo
  const pk = (L, X, A, I) => ({ lacteos: L, agroex: X, agricola: A, inversiones: I })[E()];
  const transpaletaSI = (x, y, elec) => { let g = elec ? `<rect x="${x - 6}" y="${y - 48}" width="30" height="42" rx="4" fill="#FFC20E" stroke="#C79200"/><rect x="${x - 2}" y="${y - 40}" width="14" height="8" fill="#263238"/>` : `<rect x="${x}" y="${y - 22}" width="16" height="16" rx="2" fill="#D7262B"/>`;
    g += `<rect x="${x + 10}" y="${y - 9}" width="${elec ? 64 : 60}" height="5" fill="#455A64"/><circle cx="${x + (elec ? 66 : 64)}" cy="${y - 3}" r="3" fill="#263238"/><circle cx="${x + 8}" cy="${y - 4}" r="4.5" fill="#263238"/>`;
    g += `<line x1="${x + 6}" y1="${y - (elec ? 46 : 20)}" x2="${x - 14}" y2="${y - 62}" stroke="#263238" stroke-width="4"/><rect x="${x - 24}" y="${y - 68}" width="18" height="7" rx="3" fill="#263238"/>`;
    return g; };
  // rótulo tipo píldora (texto blanco: se oculta solo en la prueba)
  const pl = (cx, y, t, c = '#263238', fs = 12) => { const w = Math.round(t.length * fs * 0.6 + 16); cx = Math.max(w / 2 + 3, Math.min(317 - w / 2, cx)); return `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="${fs + 9}" rx="${(fs + 9) / 2}" fill="${c}"/>` + txt(cx, y + fs + 2, t, fs, '#fff'); };
  const CSS = `<style>
    .t1Cin{animation:t1Cin 2s linear infinite}@keyframes t1Cin{from{transform:translateX(0)}to{transform:translateX(24px)}}
    .t1Lira{animation:t1Lira 2.2s ease-in-out infinite alternate}@keyframes t1Lira{from{transform:translateX(-14px)}to{transform:translateX(18px)}}
    .t1Dom{animation:t1Dom 3s ease-in infinite;transform-box:fill-box;transform-origin:100% 100%}@keyframes t1Dom{0%,30%{transform:rotate(0)}60%,100%{transform:rotate(62deg)}}
    .t1Hum{animation:t1Hum 2.6s ease-out infinite;transform-box:fill-box;transform-origin:50% 100%}@keyframes t1Hum{0%{opacity:0;transform:translateY(6px) scale(.6)}40%{opacity:.85}100%{opacity:0;transform:translateY(-30px) scale(1.5)}}
    .t1Fla{animation:t1Fla .5s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 100%}@keyframes t1Fla{from{transform:scaleY(.85)}to{transform:scaleY(1.12)}}
    .t1Bar{animation:t1Bar 1.6s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:0% 50%}@keyframes t1Bar{from{transform:rotate(-14deg)}to{transform:rotate(14deg)}}
    .t1Mov{animation:t1Mov 3.2s ease-in-out infinite alternate}@keyframes t1Mov{from{transform:translateX(0)}to{transform:translateX(var(--dx,-30px))}}
    .t1Gota{animation:t1Gota 1.4s ease-in infinite}@keyframes t1Gota{0%{transform:translateY(0);opacity:1}100%{transform:translateY(26px);opacity:0}}
  </style>`;
  const svg = inner => sv(CSS + inner);
  // ---------- fondos ----------
  const cielo = (suelo = '#8BC34A', h = 140) => `<defs><linearGradient id="t1Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FD8FF"/><stop offset="1" stop-color="#E3F4FF"/></linearGradient></defs><rect width="320" height="200" fill="url(#t1Sky)"/><rect y="${h}" width="320" height="${200 - h}" fill="${suelo}"/><rect y="${h}" width="320" height="3" fill="#000" opacity=".08"/>`;
  const campo = () => cielo('#9CCC65', 138) + `<path d="M0,120 q60,-22 130,-6 q80,18 190,-10 v34 h-320z" fill="#C5E1A5"/>` + `<rect y="160" width="320" height="40" fill="#A1887F" opacity=".35"/>`;
  const patio = () => cielo('#B0BEC5', 140) + `<rect x="0" y="56" width="320" height="84" fill="#ECEFF1"/><rect x="0" y="50" width="320" height="8" fill="#90A4AE"/>${[20, 110, 200].map(x => `<rect x="${x}" y="80" width="64" height="60" fill="#CFD8DC" stroke="#90A4AE"/>`).join('')}`;
  const oficina = () => `<rect width="320" height="200" fill="#F3EDE2"/><rect y="150" width="320" height="50" fill="#C8A97E"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="${i * 46}" y1="150" x2="${i * 46 - 20}" y2="200" stroke="#B08E60" stroke-width="1.5"/>`).join('')}<rect y="150" width="320" height="3" fill="#A1825A"/><rect x="226" y="22" width="76" height="58" rx="3" fill="#BBDEFB" stroke="#90A4AE" stroke-width="3"/><line x1="264" y1="22" x2="264" y2="80" stroke="#90A4AE" stroke-width="3"/>`;
  const fondo = () => pk(bg(), bg(), campo(), oficina());
  // ---------- objetos ----------
  const tree = (x, y, h = 120, fruit) => window.CF.framb(x, y, h / 112, { anim: false });
  const tree_si = (x, y, h = 120, fruit) => { fruit = fruit || 'c'; let g = `<path d="M${x - 5},${y} q2,-${h * .35} -2,-${h * .55} h14 q-4,${h * .2} -2,${h * .55}z" fill="#6D4C41"/>`;
    g += `<ellipse cx="${x}" cy="${y - h * .72}" rx="${h * .42}" ry="${h * .33}" fill="#558B2F"/><ellipse cx="${x - h * .2}" cy="${y - h * .66}" rx="${h * .25}" ry="${h * .2}" fill="#689F38"/><ellipse cx="${x + h * .18}" cy="${y - h * .82}" rx="${h * .22}" ry="${h * .17}" fill="#7CB342"/>`;
    const pts = [[-.3, -.6], [-.1, -.75], [.15, -.62], [.3, -.72], [-.22, -.86], [.05, -.9], [.25, -.55], [-.35, -.72]];
    pts.forEach(([a, b]) => { g += fruit === 'c' ? `<circle cx="${x + a * h}" cy="${y + b * h}" r="3.2" fill="#C62828"/><circle cx="${x + a * h + 4}" cy="${y + b * h + 1}" r="3.2" fill="#B71C1C"/>` : `<ellipse cx="${x + a * h}" cy="${y + b * h}" rx="3.5" ry="4.2" fill="#8D6E3F"/>`; });
    return g; };
  const ladder = (x, y, h = 112, lean = 0) => { const tx = x + 20 + lean; let g = `<line x1="${x}" y1="${y}" x2="${tx}" y2="${y - h}" stroke="#B0BEC5" stroke-width="4"/><line x1="${x + 30}" y1="${y}" x2="${tx + 4}" y2="${y - h}" stroke="#B0BEC5" stroke-width="4"/><line x1="${x + 66}" y1="${y}" x2="${tx + 4}" y2="${y - h + 2}" stroke="#90A4AE" stroke-width="4"/>`;
    for (let i = 1; i < 7; i++) { const k = i / 7, ax = x + (tx - x) * k, bx = x + 30 + (tx + 4 - x - 30) * k, yy = y - h * k; g += `<line x1="${ax.toFixed(1)}" y1="${yy.toFixed(1)}" x2="${bx.toFixed(1)}" y2="${yy.toFixed(1)}" stroke="#78909C" stroke-width="3"/>`; }
    return g; };
  const bin = (x, y, fruit) => window.CF.pilaBandejas(x + 6, y, 3, 44);
  const bin_si = (x, y, fruit, c = '#1E88E5') => `<rect x="${x}" y="${y - 34}" width="54" height="30" rx="2" fill="${c}" stroke="#0D47A1" stroke-width="1.5"/>${[1, 2, 3].map(i => `<line x1="${x + i * 13.5}" y1="${y - 32}" x2="${x + i * 13.5}" y2="${y - 6}" stroke="#0D47A1" stroke-opacity=".4" stroke-width="1.5"/>`).join('')}<rect x="${x + 2}" y="${y - 4}" width="8" height="4" fill="#0D47A1"/><rect x="${x + 44}" y="${y - 4}" width="8" height="4" fill="#0D47A1"/>` + (fruit ? Array.from({ length: 10 }, (_, i) => `<circle cx="${x + 5 + i * 5}" cy="${y - 35 - (i % 2) * 2}" r="3" fill="${fruit === 'k' ? '#8D6E3F' : '#C62828'}"/>`).join('') : '');
  const cajaC = (x, y, n = 1) => { let g = ''; for (let i = 0; i < n; i++) g += `<rect x="${x}" y="${y - (i + 1) * 9}" width="34" height="9" fill="#FFF8E1" stroke="#8D6E3F" stroke-width="1"/><rect x="${x + 3}" y="${y - (i + 1) * 9 + 2}" width="28" height="3" fill="#C62828" opacity=".85"/>`; return g; };
  const pallet = (x, y, w = 60) => `<rect x="${x}" y="${y - 6}" width="${w}" height="3" fill="#A1887F"/><rect x="${x}" y="${y - 3}" width="6" height="3" fill="#8D6E63"/><rect x="${x + w / 2 - 3}" y="${y - 3}" width="6" height="3" fill="#8D6E63"/><rect x="${x + w - 6}" y="${y - 3}" width="6" height="3" fill="#8D6E63"/>`;
  const tina = (x, y, lira = true) => `<defs><linearGradient id="t1Inox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ECEFF1"/><stop offset="1" stop-color="#90A4AE"/></linearGradient></defs>`
    + `<rect x="${x + 6}" y="${y - 30}" width="6" height="30" fill="#78909C"/><rect x="${x + 128}" y="${y - 30}" width="6" height="30" fill="#78909C"/>`
    + `<path d="M${x},${y - 74} h140 v30 q0,14 -14,14 h-112 q-14,0 -14,-14z" fill="url(#t1Inox)" stroke="#607D8B" stroke-width="2"/><rect x="${x + 4}" y="${y - 72}" width="132" height="8" fill="#FFF8E1"/>`
    + (lira ? `<g class="t1Lira"><rect x="${x + 50}" y="${y - 100}" width="30" height="40" fill="none" stroke="#546E7A" stroke-width="2.5"/>${[1, 2, 3, 4].map(i => `<line x1="${x + 50 + i * 6}" y1="${y - 98}" x2="${x + 50 + i * 6}" y2="${y - 62}" stroke="#90A4AE" stroke-width="1"/>`).join('')}<line x1="${x + 65}" y1="${y - 100}" x2="${x + 65}" y2="${y - 118}" stroke="#546E7A" stroke-width="3"/></g><rect x="${x - 4}" y="${y - 122}" width="148" height="5" fill="#607D8B"/>` : '');
  const cinta = (x, y, w = 150, fruta = true) => `<rect x="${x + 8}" y="${y - 48}" width="6" height="48" fill="#78909C"/><rect x="${x + w - 14}" y="${y - 48}" width="6" height="48" fill="#78909C"/>`
    + `<rect x="${x}" y="${y - 62}" width="${w}" height="14" rx="7" fill="#37474F"/><rect x="${x + 4}" y="${y - 60}" width="${w - 8}" height="4" fill="#546E7A"/>`
    + `<circle cx="${x + 7}" cy="${y - 55}" r="5" fill="#90A4AE"/><circle cx="${x + w - 7}" cy="${y - 55}" r="5" fill="#90A4AE"/>`
    + (fruta ? `<clipPath id="t1Cc${x}"><rect x="${x}" y="${y - 76}" width="${w}" height="16"/></clipPath><g clip-path="url(#t1Cc${x})"><g class="t1Cin">${Array.from({ length: Math.ceil(w / 12) + 3 }, (_, i) => `<circle cx="${x - 24 + i * 12}" cy="${y - 65}" r="4" fill="${i % 3 ? '#C62828' : '#AD1457'}"/>`).join('')}</g></g>` : '');
  const tractor = (...a) => '<g data-motor="1"' + (a[2] && a[2].flip ? ' data-flip="1"' : '') + '>' + tractor_m(...a) + '</g>'; const tractor_m = (x, y, o = {}) => { const c = o.c || '#1F2FD6'; let g = `<rect x="${x + 36}" y="${y - 58}" width="96" height="30" rx="6" fill="${c}" stroke="#0D1B8C" stroke-width="1.5"/><rect x="${x + 120}" y="${y - 54}" width="14" height="22" rx="2" fill="#263238"/>`
      + `<rect x="${x + 110}" y="${y - 76}" width="5" height="20" fill="#455A64"/><path d="M${x + 22},${y - 58} v-48 h40 v48" fill="none" stroke="#263238" stroke-width="4"/><rect x="${x + 22}" y="${y - 62}" width="44" height="8" fill="#37474F"/>`
      + `<circle cx="${x + 34}" cy="${y - 28}" r="28" fill="#263238"/><circle cx="${x + 34}" cy="${y - 28}" r="12" fill="#FDD835"/><circle cx="${x + 34}" cy="${y - 28}" r="4" fill="#263238"/>`
      + `<circle cx="${x + 118}" cy="${y - 16}" r="16" fill="#263238"/><circle cx="${x + 118}" cy="${y - 16}" r="7" fill="#FDD835"/>`;
    if (o.driver !== false) g += W(x + 40, y - 54, { pose: 'stand', s: .6, shirt: '#1F3A6B' }).replace(/<ellipse[^>]*opacity=".13"\/>/, '');
    return o.flip ? `<g transform="translate(${2 * x + 140},0) scale(-1,1)">${g}</g>` : g; };
  const desk = (x, y) => `<rect x="${x}" y="${y - 34}" width="90" height="5" fill="#8D6E63"/><rect x="${x + 4}" y="${y - 29}" width="5" height="29" fill="#6D4C41"/><rect x="${x + 81}" y="${y - 29}" width="5" height="29" fill="#6D4C41"/><rect x="${x + 56}" y="${y - 29}" width="28" height="22" fill="#A1887F"/>`
    + `<rect x="${x + 26}" y="${y - 64}" width="40" height="26" rx="2" fill="#263238"/><rect x="${x + 29}" y="${y - 61}" width="34" height="20" fill="#64B5F6"/><rect x="${x + 43}" y="${y - 38}" width="6" height="4" fill="#455A64"/>`;
  const shelf = (x, y, h = 110) => `<rect x="${x}" y="${y - h}" width="52" height="${h}" fill="#A1887F" stroke="#6D4C41" stroke-width="2"/>${[0, 1, 2, 3].map(i => `<rect x="${x + 3}" y="${y - h + 6 + i * 26}" width="46" height="3" fill="#6D4C41"/>` + [0, 1, 2].map(j => `<rect x="${x + 6 + j * 15}" y="${y - h + 10 + i * 26}" width="11" height="18" fill="${['#1565C0', '#C62828', '#2E7D32'][j]}"/>`).join('')).join('')}`;
  const chair = (x, y) => `<rect x="${x - 14}" y="${y - 34}" width="28" height="6" rx="2" fill="#37474F"/><rect x="${x + 8}" y="${y - 62}" width="6" height="30" rx="2" fill="#37474F"/><rect x="${x - 2}" y="${y - 28}" width="4" height="20" fill="#607D8B"/><path d="M${x - 16},${y - 4} h32" stroke="#455A64" stroke-width="3"/><circle cx="${x - 14}" cy="${y - 2}" r="3" fill="#263238"/><circle cx="${x + 14}" cy="${y - 2}" r="3" fill="#263238"/><circle cx="${x}" cy="${y - 2}" r="3" fill="#263238"/>`;
  const cono = (x, y) => `<path d="M${x - 9},${y} l7,-28 h4 l7,28z" fill="#FF6D00"/><rect x="${x - 5}" y="${y - 17}" width="10" height="4" fill="#fff"/><rect x="${x - 12}" y="${y - 2}" width="24" height="3" fill="#E65100"/>`;
  const charco = (x, y, c = '#4FC3F7', rx = 34) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * .2}" fill="${c}" opacity=".7"/><ellipse cx="${x - rx * .3}" cy="${y - 1}" rx="${rx * .25}" ry="${rx * .06}" fill="#fff" opacity=".6"/>`;
  const cable = (x1, x2, y) => `<path d="M${x1},${y} q${(x2 - x1) * .25},-10 ${(x2 - x1) * .5},0 t${(x2 - x1) * .5},0" stroke="#212121" stroke-width="3" fill="none"/>`;
  const ext = (x, y, k = 'PQS', s = 1) => { const c = '#D32F2F'; let g = `<rect x="${x}" y="${y - 52 * s}" width="${22 * s}" height="${52 * s}" rx="${8 * s}" fill="${c}" stroke="#8E0000" stroke-width="1.2"/><rect x="${x + 6 * s}" y="${y - 60 * s}" width="${10 * s}" height="${9 * s}" fill="#37474F"/><path d="M${x + 16 * s},${y - 58 * s} h${10 * s} l${4 * s},${4 * s}" stroke="#263238" stroke-width="${2.5 * s}" fill="none"/>`
      + `<rect x="${x + 3 * s}" y="${y - 40 * s}" width="${16 * s}" height="${18 * s}" fill="#fff"/><text x="${x + 11 * s}" y="${y - 27 * s}" font-size="${(k === 'CO2' ? 7 : 7.5) * s}" font-weight="bold" text-anchor="middle" fill="#263238" font-family="Arial">${k === 'CO2' ? 'CO₂' : 'PQS'}</text>`;
    if (k === 'CO2') g += `<path d="M${x + 2 * s},${y - 50 * s} q${-12 * s},${10 * s} ${-12 * s},${30 * s}" stroke="#263238" stroke-width="${2.5 * s}" fill="none"/><path d="M${x - 16 * s},${y - 20 * s} l${6 * s},${-8 * s} l${6 * s},${8 * s}z" fill="#263238"/>`;
    else g += `<path d="M${x + 2 * s},${y - 50 * s} q${-10 * s},${10 * s} ${-8 * s},${30 * s}" stroke="#263238" stroke-width="${2.5 * s}" fill="none"/>`;
    return g; };
  const fuego = (x, y, s = 1) => `<g class="t1Fla"><path d="M${x},${y} c${-18 * s},0 ${-22 * s},${-20 * s} ${-10 * s},${-36 * s} c${0},${10 * s} ${6 * s},${12 * s} ${8 * s},${6 * s} c${-2 * s},${-12 * s} ${4 * s},${-22 * s} ${12 * s},${-28 * s} c${-2 * s},${14 * s} ${16 * s},${22 * s} ${10 * s},${40 * s} c${-2 * s},${12 * s} ${-10 * s},${18 * s} ${-20 * s},${18 * s}z" fill="#FF6F00"/><path d="M${x},${y} c${-8 * s},0 ${-10 * s},${-10 * s} ${-4 * s},${-18 * s} c${2 * s},${6 * s} ${6 * s},${6 * s} ${6 * s},0 c${6 * s},${6 * s} ${8 * s},${16 * s} ${-2 * s},${18 * s}z" fill="#FFD54F"/></g>`;
  const humo = (x, y) => `<g class="t1Hum"><circle cx="${x}" cy="${y}" r="8" fill="#78909C" opacity=".7"/></g><g class="t1Hum" style="animation-delay:.9s"><circle cx="${x + 6}" cy="${y - 4}" r="10" fill="#90A4AE" opacity=".6"/></g><g class="t1Hum" style="animation-delay:1.7s"><circle cx="${x - 5}" cy="${y - 2}" r="7" fill="#78909C" opacity=".6"/></g>`;
  const phone = (x, y, n = '1404') => `<rect x="${x}" y="${y}" width="34" height="58" rx="5" fill="#263238"/><rect x="${x + 3}" y="${y + 6}" width="28" height="42" fill="#E3F2FD"/>` + txt(x + 17, y + 32, n, 11, '#2E7D32');
  const molde = (x, y, n = 3) => { let g = ''; for (let i = 0; i < n; i++) g += `<rect x="${x + i * 22}" y="${y - 20}" width="18" height="20" rx="2" fill="#ECEFF1" stroke="#78909C" stroke-width="1.2"/><rect x="${x + i * 22 + 3}" y="${y - 17}" width="12" height="3" fill="#FFF59D"/>${[1, 2, 3].map(j => `<circle cx="${x + i * 22 + j * 4.5}" cy="${y - 8}" r=".9" fill="#78909C"/>`).join('')}`; return g; };
  const rack = (x, y, cosas) => `<rect x="${x}" y="${y - 100}" width="4" height="100" fill="#607D8B"/><rect x="${x + 76}" y="${y - 100}" width="4" height="100" fill="#607D8B"/>${[0, 1, 2].map(i => `<rect x="${x}" y="${y - 30 - i * 32}" width="80" height="4" fill="#78909C"/>`).join('')}` + (cosas || '');
  const saco = (x, y, t = 'SAL') => `<path d="M${x},${y} v-26 q0,-6 6,-8 h24 q6,2 6,8 v26z" fill="#ECEFF1" stroke="#90A4AE" stroke-width="1.5"/>` + txt(x + 18, y - 9, t, 9, '#455A64');
  const flecha = (x1, y1, x2, y2, c = '#2E7D32') => { const a = Math.atan2(y2 - y1, x2 - x1), h = 8; return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M${x2},${y2} L${(x2 - h * Math.cos(a - .5)).toFixed(1)},${(y2 - h * Math.sin(a - .5)).toFixed(1)} L${(x2 - h * Math.cos(a + .5)).toFixed(1)},${(y2 - h * Math.sin(a + .5)).toFixed(1)}z" fill="${c}"/>`; };
  const jefe = (x, y, o = {}) => W(x, y, Object.assign({ flip: true, shirt: pk('#F5F7FA', '#E3F2FD', '#1F3A6B', '#455A64'), vest: E() !== 'inversiones' }, o));
  // máquina / lugar típico de cada empresa (para escenas generales)
  const equipo = (x, y) => pk(tina(x, y), cinta(x, y, 140), tractor(x, y), desk(x, y));

  // ======================================================================
  // TEMA 1 · AUTOCUIDADO
  // ======================================================================
  S.si_t1_acto = () => svg(fondo() + pk(
    tina(130, 165) + W(116, 165, { pose: 'point' }) + `<path d="M150,82 q12,-8 24,0" stroke="#E53935" stroke-width="2.5" fill="none"/>`,
    cinta(120, 165, 160) + W(100, 165, { pose: 'point' }) + `<path d="M150,86 q14,-8 28,0" stroke="#E53935" stroke-width="2.5" fill="none"/>`,
    tree(250, 170, 150) + ladder(170, 172, 100, 6) + W(196, 74, { pose: 'point', s: .85 }) + tree(60, 160, 120),
    shelf(150, 165, 120) + chair(110, 165) + W(110, 133, { pose: 'stop', s: .9 }) + desk(214, 165)) + badge(292, 30, false));
  S.si_t1_cond = () => svg(fondo() + pk(
    tina(170, 165, false) + charco(110, 172, '#81D4FA', 40) + cable(20, 120, 186) + W(60, 165, { face: 'worried' }),
    pallet(170, 165, 60) + `<g transform="rotate(7 200 165)">${cajaC(172, 159, 9)}</g>` + `<path d="M176,162 l10,-4 l6,4" stroke="#5D4037" stroke-width="2" fill="none"/>` + charco(90, 176, '#81D4FA', 30) + W(60, 165, { face: 'worried' }),
    tree(230, 150, 128) + ladder(130, 168, 110, 4) + `<line x1="140" y1="${168 - 110 * 3 / 7}" x2="152" y2="${168 - 110 * 3 / 7 + 4}" stroke="#D32F2F" stroke-width="3"/>` + `<path d="M120,172 q30,-8 80,0" stroke="#6D4C41" stroke-width="5" fill="none"/>` + W(60, 168, { face: 'worried' }),
    desk(170, 165) + cable(60, 180, 176) + `<rect x="232" y="128" width="26" height="14" fill="#A1887F" stroke="#6D4C41"/>` + W(40, 165, { face: 'worried' })) + badge(292, 30, false));
  S.si_t1_domino = () => svg(bg() + (() => { const lb = ['Apuro', 'Sin EPP', pk('Piso mojado', 'Piso mojado', 'Peldaño roto', 'Cable suelto'), 'Accidente']; let g = '';
    lb.forEach((l, i) => { const x = 34 + i * 70, up = i === 2 ? -34 : 0; g += `<g class="${i === 0 ? 't1Dom' : (i === 2 ? 'an-bob' : '')}"><rect x="${x}" y="${70 + up}" width="26" height="80" rx="3" fill="${i === 3 ? '#D7262B' : '#263238'}" stroke="#fff" stroke-width="2"/><circle cx="${x + 13}" cy="${92 + up}" r="3" fill="#fff"/><circle cx="${x + 13}" cy="${128 + up}" r="3" fill="#fff"/></g>` + pl(x + 13, i % 2 ? 176 : 156, l, i === 3 ? '#C62828' : '#455A64', 11); });
    return g; })() + flecha(220, 70, 220, 30, '#2E7D32') + txt(120, 26, 'Saca una ficha y', 12, '#2E7D32') + txt(120, 41, 'se corta la cadena', 12, '#2E7D32'));
  S.si_t1_porque = () => svg(fondo() + W(80, 165, { face: 'worried' }) + `<ellipse cx="200" cy="70" rx="104" ry="52" fill="#fff" stroke="#90A4AE" stroke-width="2"/><circle cx="118" cy="122" r="6" fill="#fff" stroke="#90A4AE" stroke-width="2"/><circle cx="104" cy="134" r="3.5" fill="#fff" stroke="#90A4AE" stroke-width="2"/>`
    + clock(138, 62, 16) + txt(138, 96, 'Apuro', 11) + `<path d="M190,48 a14,14 0 1 0 14,22 a10,10 0 1 1 -14,-22z" fill="#5C6BC0"/>` + txt(196, 96, 'Cansancio', 11) + `<rect x="236" y="44" width="34" height="36" rx="4" fill="#FFF8E1" stroke="#8D6E3F"/>` + txt(253, 68, '20 años', 9, '#5D4037') + txt(256, 96, 'Confianza', 11));
  S.si_t1_ppa = () => svg(fondo() + [['PARA', '#D7262B', 60], ['PIENSA', '#F9A825', 160], ['ACTÚA', '#2E7D32', 260]].map(([t, c, x], i) => `<circle cx="${x}" cy="62" r="36" fill="${c}" stroke="#fff" stroke-width="4" class="${i === 1 ? 'an-pulse' : ''}"/>` + txt(x, 67, t, 14, '#fff')).join('')
    + `<path d="M98,62 h22 M198,62 h22" stroke="#455A64" stroke-width="4"/>` + W(160, 182, { pose: 'stand', s: .8 }));
  S.si_t1_compa = () => svg(fondo() + pk(
    tina(150, 165) + W(170, 165, { pose: 'point' }) + W(70, 165, { pose: 'stop', shirt: '#F5F7FA' }),
    cinta(140, 165, 150) + W(160, 165, { pose: 'point' }) + W(70, 165, { pose: 'stop' }),
    tree(255, 172, 150) + ladder(190, 172, 100, 4) + W(216, 74, { pose: 'point', s: .85 }) + W(110, 165, { pose: 'stop' }),
    shelf(220, 165, 120) + chair(190, 165) + W(190, 133, { pose: 'stand', s: .9 }) + W(90, 165, { pose: 'stop' })) + bubble(10, 14, '¡Espera!', 84));
  S.si_t1_reporte = () => svg(fondo() + pk(charco(150, 175, '#81D4FA', 40), charco(150, 175, '#81D4FA', 40), `<path d="M110,176 q40,-10 80,0" stroke="#6D4C41" stroke-width="5" fill="none"/><line x1="135" y1="172" x2="155" y2="166" stroke="#6D4C41" stroke-width="3"/>`, cable(100, 210, 176)) + cono(206, 178)
    + W(80, 165, { pose: 'point' }) + jefe(260, 165) + bubble(150, 30, 'Lo reporto', 96));
  S.si_t1_grave = () => svg(fondo() + pk(
    `<rect x="190" y="40" width="130" height="10" fill="#90A4AE"/><rect x="250" y="46" width="12" height="10" fill="#607D8B"/>` + humo(254, 66) + humo(270, 74) + `<rect x="230" y="104" width="60" height="46" fill="#B0BEC5" stroke="#78909C"/>`,
    `<rect x="230" y="70" width="46" height="70" fill="#455A64"/><rect x="236" y="78" width="34" height="20" fill="#263238"/>` + humo(250, 64) + humo(262, 70) + pallet(190, 165) + cajaC(192, 159, 3),
    tree(270, 140, 110) + `<ellipse cx="240" cy="90" rx="50" ry="22" fill="#E6EE9C" opacity=".7" class="an-pulse"/><ellipse cx="270" cy="70" rx="34" ry="16" fill="#E6EE9C" opacity=".6"/>`,
    `<rect x="236" y="70" width="40" height="60" rx="2" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/><rect x="242" y="78" width="28" height="6" fill="#455A64"/><rect x="242" y="90" width="28" height="6" fill="#455A64"/>` + humo(256, 62) + humo(266, 66))
    + W(130, 165, { pose: 'walk', flip: true, face: 'worried' }) + flecha(110, 188, 40, 188, '#2E7D32') + bubble(20, 28, '¡Aléjense!', 100));
  S.si_t1_oblig = () => svg(fondo() + doc(30, 130, 'REGLAMENTO') + txt(53, 148, 'Reglamento', 11) + txt(53, 161, 'Interno', 11)
    + W(160, 170, { pose: 'stand' }) + `<rect x="218" y="60" width="84" height="64" rx="8" fill="#fff" stroke="#D7262B" stroke-width="3"/>` + pk(
      `<rect x="232" y="92" width="56" height="16" rx="4" fill="#90A4AE"/><rect x="250" y="76" width="20" height="18" fill="#78909C"/>`,
      `<rect x="232" y="96" width="56" height="10" rx="5" fill="#37474F"/><circle cx="240" cy="92" r="3" fill="#C62828"/><circle cx="252" cy="92" r="3" fill="#C62828"/><circle cx="264" cy="92" r="3" fill="#C62828"/>`,
      `<rect x="232" y="90" width="40" height="18" rx="3" fill="#2E7D32"/><circle cx="240" cy="110" r="8" fill="#263238"/><circle cx="272" cy="112" r="6" fill="#263238"/>`,
      `<rect x="236" y="74" width="48" height="36" rx="3" fill="#90A4AE"/><rect x="242" y="80" width="36" height="12" fill="#ECEFF1"/>`)
    + `<line x1="226" y1="68" x2="294" y2="116" stroke="#D7262B" stroke-width="4"/>` + txt(260, 140, 'Sin autorización', 11, '#C62828') + txt(260, 154, 'no se opera', 11, '#C62828'));

  SI_CONT.temas.push({
    id: 'autocuidado', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Actos inseguros, condiciones inseguras y autocuidado', thumb: 'si_t1_ppa', mins: 15,
    learn: [
      { s: 'si_t1_acto', t: '¿Qué es un acto inseguro?', x: 'Es una acción u omisión de la <b>persona</b> que se aparta de la forma segura de trabajar. Ejemplos:<ul><li>Doblar la espalda horas para cosechar en vez de agacharte con las rodillas.</li><li>No usar el EPP o usarlo mal.</li><li>Trabajar apurado o mirando el celular.</li><li>Operar un equipo sin capacitación ni autorización.</li></ul>', k: 'Nunca intervengas el tractor ni sus implementos en movimiento: detén el motor primero.' },
      { s: 'si_t1_cond', t: '¿Qué es una condición insegura?', x: 'Es una situación del <b>lugar, el equipo o el material</b> que puede causar un accidente. Ejemplos:<ul><li>Alambre de la espaldera cortado y colgando.</li><li>Cañas cortadas y hoyos en el pasillo entre hileras.</li><li>Extintor tapado o luz quemada.</li></ul>Toda condición insegura se corrige o se reporta.' },
      { s: 'si_t1_domino', t: 'Cómo se arma un accidente', x: 'Un accidente rara vez tiene una sola causa. Es como una fila de fichas de dominó: <b>apuro, sin EPP, peldaño roto y accidente</b>. Casi siempre se juntan un acto inseguro y una condición insegura. <b>Si sacas una ficha, la cadena se corta</b> y el accidente no ocurre. Por eso los accidentes se pueden evitar.' },
      { s: 'si_t1_porque', t: '¿Por qué cometemos actos inseguros?', x: '<ul><li><b>Apuro:</b> “hay que entregar las bandejas antes del camión”.</li><li><b>Exceso de confianza:</b> “llevo años haciéndolo”.</li><li><b>Costumbre:</b> de tanto verlo, el riesgo se vuelve invisible.</li><li><b>Cansancio:</b> en turnos largos o de noche baja la atención.</li></ul>Que nunca haya pasado nada no demuestra que sea seguro.' },
      { s: 'si_t1_ppa', t: 'Para, piensa, actúa', x: 'Úsalo antes de cada tarea, sobre todo si es nueva, si algo cambió o si te piden algo urgente:<ul><li><b>Para:</b> detente unos segundos.</li><li><b>Piensa:</b> ¿qué puede salir mal? ¿Tengo el EPP correcto? ¿Estoy capacitado y autorizado?</li><li><b>Actúa:</b> hazlo de la forma segura. Si tienes una duda, pregunta a tu jefatura antes de empezar.</li></ul>' },
      { s: 'si_t1_compa', t: 'Me cuido y cuido a mi compañero', x: 'Si ves a un compañero a punto de hacer algo riesgoso, avísale con respeto: “Espera, ponte los lentes: el alambre está a la altura de la cara”. No es meterse en lo ajeno: es cuidarnos entre todos. Si insiste, avisa a la jefatura. Y si te avisan a ti, agradece y corrige.' },
      { s: 'si_t1_reporte', t: 'Reporta condiciones inseguras y casi accidentes', x: 'Si ves un alambre suelto, una caña a la altura de la cara o un hoyo, <b>avisa a tu jefatura o al Comité Paritario</b>. Avisa también los <b>casi accidentes</b>: no pasó nada esta vez, pero la causa sigue ahí. Si puedes hacerlo sin riesgo, actúa de inmediato: pon un cono o retira el obstáculo. Lo que no se reporta, no se corrige.' },
      { s: 'si_t1_grave', t: 'Ante un riesgo grave: detente, aléjate y avisa', x: 'La nube de una aplicación de agroquímicos que llega a donde trabajas: son riesgos graves. <b>Detén la tarea, aléjate, aleja a los demás y avisa de inmediato</b> a tu jefatura. Nunca intentes arreglarlo tú si no es tu labor.', k: 'Ante un riesgo grave, detén la tarea, aléjate y avisa de inmediato.' },
      { s: 'si_t1_oblig', t: 'Tus obligaciones', x: 'Cada trabajador debe:<ul><li>Cumplir el <b>Reglamento Interno</b> de Orden, Higiene y Seguridad.</li><li>Usar y cuidar el EPP.</li><li>Seguir los procedimientos de trabajo.</li><li><b>No operar equipos sin capacitación ni autorización</b>, aunque sepas manejarlos.</li><li>No trabajar bajo los efectos del alcohol o de drogas.</li></ul>Autocuidado es decidir seguro antes, no lamentar después.' }
    ],
    quiz: [
      { s: 'si_t1_acto', v: [
        { q: 'Una cosechera se saca los lentes porque le molestan, aunque hay alambres a la altura de la cara. Eso es:', o: ['Un acto inseguro', 'Una condición insegura', 'Un riesgo aceptable si es rápido', 'Una falla del equipo'], w: 'Es una decisión de la persona que se aparta de la forma segura de trabajar.' },
        { q: '¿Cuál de estas situaciones es un acto inseguro?', o: ['Operar un equipo sin estar capacitado ni autorizado', 'Una luz quemada en el pasillo de la bodega', 'Un pallet con una tabla rota en la ruma', 'Un piso mojado por una filtración del techo'], w: 'Operar sin autorización depende de la persona. Las otras son condiciones del lugar o del material.' },
        { q: 'Un compañero dice que cosechar sin lentes no es peligroso si se hace rápido. ¿Qué es lo correcto?', o: ['Está equivocado: sigue siendo un acto inseguro', 'Tiene razón, siempre que use guantes', 'Tiene razón, si tiene años de experiencia', 'No es riesgo si lo hace con cuidado'], w: 'La rapidez no quita el riesgo: sigue siendo una acción insegura de la persona.' } ] },
      { s: 'si_t1_cond', v: [
        { q: 'Un alambre de la espaldera cortado y colgando es:', o: ['Una condición insegura', 'Un acto inseguro', 'Un riesgo sin importancia', 'Un casi accidente'], w: 'Es una situación del lugar o del equipo que puede causar un accidente.' },
        { q: '¿Cuál de estas es una condición insegura?', o: ['Un extintor tapado por cajas', 'Trabajar sin guantes', 'Correr por el pasillo', 'Usar el celular mientras se camina'], w: 'El extintor tapado es una situación del lugar. Las demás son acciones de la persona.' },
        { q: '¿Qué se hace con una condición insegura?', o: ['Se corrige si es seguro hacerlo, o se reporta', 'Se deja para cuando haya tiempo', 'Se tapa para que nadie la vea', 'Se espera a que alguien se accidente'], w: 'Toda condición insegura se corrige o se reporta para que se corrija.' } ] },
      { s: 'si_t1_domino', v: [
        { q: 'Según la cadena del accidente, ¿qué pasa si se saca una ficha?', o: ['Se corta y el accidente no ocurre', 'El accidente ocurre igual', 'Solo cambia la gravedad de la lesión', 'Hay que sacar todas las fichas a la vez'], w: 'Basta con cortar una causa para que la cadena no llegue al accidente.' },
        { q: '¿Qué se suele juntar para que ocurra un accidente?', o: ['Un acto inseguro y una condición insegura', 'Solo la mala suerte de ese día', 'Solo la falta de experiencia del trabajador', 'Solo el cansancio al final del turno'], w: 'Casi siempre hay varias causas, y muchas veces se juntan una acción y una condición insegura.' },
        { q: 'Los accidentes se pueden evitar porque casi siempre tienen causas que se pueden controlar.', vf: true, w: 'Verdadero. Si la causa se identifica, se puede prevenir.' } ] },
      { s: 'si_t1_porque', v: [
        { q: '“Llevo años haciéndolo así y nunca me ha pasado nada.” ¿Qué causa de actos inseguros muestra esa frase?', o: ['Exceso de confianza', 'Cansancio', 'Falta de EPP', 'Condición insegura'], w: 'Que nunca haya pasado nada no significa que sea seguro: el riesgo sigue ahí.' },
        { q: '¿Por qué los turnos largos o de noche aumentan los actos inseguros?', o: ['Porque el cansancio baja la atención', 'Porque hay menos trabajo que hacer', 'Porque no se usa el EPP de noche', 'Porque las máquinas andan más lento'], w: 'Con cansancio cuesta más ver los riesgos y reaccionar a tiempo.' },
        { q: 'Te piden entregar las bandejas rápido antes del camión. ¿Qué causa de actos inseguros debes cuidar en ese momento?', o: ['El apuro', 'La costumbre', 'El cansancio', 'La falta de luz'], w: 'El apuro lleva a saltarse pasos. Lo urgente también se hace de forma segura.' } ] },
      { s: 'si_t1_ppa', v: [
        { q: '¿Cuál es el orden correcto del autocuidado antes de una tarea?', o: ['Para, piensa, actúa', 'Actúa, piensa, para', 'Piensa, actúa, para', 'Actúa, para, piensa'], w: 'Primero te detienes, luego piensas qué puede salir mal y recién ahí actúas seguro.' },
        { q: 'En el paso “Piensa”, ¿qué te preguntas?', o: ['¿Qué puede salir mal y tengo el EPP correcto?', '¿Cuánto rato me queda de turno?', '¿Quién me está mirando?', '¿Cuál es la forma más rápida aunque sea riesgosa?'], w: 'Pensar es revisar los riesgos, el EPP y si estás capacitado y autorizado.' },
        { q: 'Si tienes una duda sobre cómo hacer una tarea de forma segura, ¿qué haces?', o: ['Pregunto a mi jefatura antes de empezar', 'La hago igual y veo qué pasa', 'Copio lo que hace el más rápido', 'La dejo a medias sin avisar'], w: 'Ante una duda, se pregunta antes de empezar: es parte de “Para, piensa, actúa”.' } ] },
      { s: 'si_t1_compa', v: [
        { q: 'Ves que un compañero va a hacer algo riesgoso. ¿Qué haces?', o: ['Le aviso con respeto y, si insiste, informo a la jefatura', 'No digo nada, porque no es mi problema', 'Lo reto fuerte delante de todos los compañeros', 'Espero y aviso a la jefatura solo si se lesiona'], w: 'Cuidarnos entre todos es parte del autocuidado. Si no corrige, se avisa a la jefatura.' },
        { q: 'Un compañero te advierte que estás haciendo algo inseguro. ¿Qué es lo correcto?', o: ['Agradecer y corregir de inmediato', 'Molestarse porque no es su labor', 'Seguir igual para terminar antes', 'Pedirle que no se meta'], w: 'Te puede estar evitando una lesión. Agradece y corrige.' },
        { q: 'Avisarle a un compañero que está haciendo algo riesgoso es meterse en lo ajeno.', vf: false, w: 'Falso. Es cuidarnos entre todos: la seguridad es tarea de cada uno.' } ] },
      { s: 'si_t1_reporte', v: [
        { q: '¿A quién avisas una condición insegura?', o: ['A mi jefatura o al Comité Paritario', 'A nadie, la arreglo cuando tenga tiempo', 'Solo a un compañero', 'A la visita que pase por ahí'], w: 'La jefatura o el Comité Paritario pueden gestionar que se corrija.' },
        { q: 'Casi te caes por un hoyo en la hilera, pero no te pasó nada. ¿Qué haces?', o: ['Lo reporto como casi accidente para que se corrija', 'No digo nada porque no hubo lesión', 'Solo lo comento a la hora de colación', 'Espero a que le pase a otro para avisar'], w: 'Un casi accidente avisa que la causa sigue ahí. Reportarlo evita la próxima lesión.' },
        { q: 'Ves una rama quebrada colgando sobre la hilera. Si puedes hacerlo sin riesgo, ¿qué haces primero?', o: ['Señalizo o retiro el peligro y aviso', 'Paso por el lado y sigo con mi tarea', 'Lo tapo con un cartón y sigo', 'Espero que lo vea otra persona'], w: 'Si es seguro, actúa de inmediato y luego avisa para que se corrija la causa.' } ] },
      { s: 'si_t1_grave', v: [
        { q: 'Llega a tu hilera la nube de una aplicación de agroquímicos. ¿Qué haces?', o: ['Paro, me alejo, alejo a los demás y aviso', 'Intento arreglarlo yo para no perder tiempo', 'Sigo trabajando y aviso al terminar el turno', 'Saco una foto y la subo al grupo de WhatsApp'], w: 'Ante un riesgo grave, primero tu vida y la de tus compañeros: alejarse y avisar de inmediato.' },
        { q: '¿Qué NO debes hacer ante un riesgo grave que no es de tu labor?', o: ['Intentar repararlo por tu cuenta', 'Alejarte del lugar', 'Avisar de inmediato a la jefatura', 'Alejar a tus compañeros'], w: 'Repararlo sin ser tu labor te expone a ti. Lo correcto es alejarse y avisar.' },
        { q: 'Ante un riesgo grave lo correcto es terminar la tarea y avisar después.', vf: false, w: 'Falso. Se detiene la tarea, te alejas y avisas de inmediato.' } ] },
      { s: 'si_t1_oblig', v: [
        { q: 'Sabes manejar el tractor, pero no te han capacitado ni autorizado en la empresa. ¿Puedes hacerlo?', o: ['No, se necesita capacitación y autorización', 'Sí, porque ya sabes manejar', 'Sí, si es por poco rato', 'Sí, si nadie más está disponible'], w: 'Saber manejar no basta: debes estar capacitado y autorizado por la empresa.' },
        { q: '¿Qué documento reúne las normas de orden, higiene y seguridad que debes cumplir?', o: ['El Reglamento Interno de Orden, Higiene y Seguridad', 'El contrato de trabajo firmado al ingresar', 'La hoja de seguridad (HDS) de cada producto', 'El libro de asistencia del turno'], w: 'El Reglamento Interno establece las normas y obligaciones de seguridad de cada trabajador.' },
        { q: '¿Cuál de estas es una obligación de cada trabajador?', o: ['Usar y cuidar el EPP y seguir los procedimientos', 'Decidir por su cuenta qué EPP usar', 'Operar cualquier equipo si hay apuro', 'Trabajar aunque haya consumido alcohol, si se siente bien'], w: 'El EPP y los procedimientos son obligatorios. Nunca se trabaja bajo efectos de alcohol o drogas.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 2 · PELIGROS Y RIESGOS
  // ======================================================================
  const lira = (x, y) => `<rect x="${x}" y="${y - 52}" width="34" height="44" rx="2" fill="none" stroke="#546E7A" stroke-width="3"/>${[1, 2, 3, 4, 5].map(i => `<line x1="${x + i * 5.7}" y1="${y - 50}" x2="${x + i * 5.7}" y2="${y - 10}" stroke="#B0BEC5" stroke-width="1.2"/>`).join('')}<rect x="${x + 13}" y="${y - 72}" width="8" height="22" rx="3" fill="#455A64"/><rect x="${x + 4}" y="${y - 76}" width="26" height="7" rx="3" fill="#37474F"/>`;
  const rodillos = (x, y) => `<circle cx="${x}" cy="${y - 14}" r="14" fill="#90A4AE" stroke="#455A64" stroke-width="2"/><circle cx="${x}" cy="${y + 14}" r="14" fill="#90A4AE" stroke="#455A64" stroke-width="2"/><g class="an-spin-slow"><line x1="${x - 10}" y1="${y - 14}" x2="${x + 10}" y2="${y - 14}" stroke="#455A64" stroke-width="2"/></g><g class="an-spin-slow"><line x1="${x}" y1="${y + 4}" x2="${x}" y2="${y + 24}" stroke="#455A64" stroke-width="2"/></g><path d="M${x + 20},${y - 26} a18,18 0 0 1 0,16" stroke="#E53935" stroke-width="2.5" fill="none"/><path d="M${x + 20},${y + 26} a18,18 0 0 0 0,-16" stroke="#E53935" stroke-width="2.5" fill="none"/>`;
  const enchufe = (x, y) => `<rect x="${x}" y="${y - 14}" width="26" height="14" rx="3" fill="#ECEFF1" stroke="#90A4AE"/><circle cx="${x + 7}" cy="${y - 7}" r="2" fill="#263238"/><circle cx="${x + 19}" cy="${y - 7}" r="2" fill="#263238"/>`;
  S.si_t1_p_def = () => svg(fondo() + divider() + pl(80, 12, 'Peligro', '#C62828') + pl(240, 12, 'Riesgo', '#E65100') + pk(
    `<line x1="79" y1="66" x2="79" y2="56" stroke="#455A64" stroke-width="3"/><circle cx="79" cy="54" r="3" fill="#455A64"/>` + lira(62, 140) + diamond(122, 60, 14, '!') + W(222, 165, { pose: 'point' }) + `<g transform="translate(250,105) scale(.6) translate(-17,72)">${lira(0, 0)}</g>`,
    rodillos(80, 100) + diamond(124, 52, 14, '!') + W(222, 165, { pose: 'point' }) + rodillos(262, 106),
    ladder(40, 168, 110) + diamond(120, 60, 14, '!') + ladder(200, 168, 100) + W(224, 112, { pose: 'point', s: .85, face: 'worried' }),
    cable(30, 140, 170) + enchufe(110, 172) + diamond(80, 80, 14, '!') + W(220, 165, { pose: 'walk', face: 'worried' }) + cable(220, 310, 172)));
  const tile = (x, inner, lab) => `<rect x="${x}" y="22" width="70" height="118" rx="8" fill="#fff" stroke="#CFD8DC" stroke-width="2"/>${inner}` + pl(x + 35, 148, lab, '#455A64', 10);
  const icoAgua = x => charco(x + 35, 120, '#4FC3F7', 26) + diamond(x + 35, 66, 16, '!');
  const icoCuch = x => `<g transform="rotate(-30 ${x + 35} 90)"><rect x="${x + 10}" y="86" width="18" height="9" rx="2" fill="#5D4037"/><path d="M${x + 28},86 h30 q8,4 0,9 h-30z" fill="#CFD8DC" stroke="#78909C"/></g>`;
  const icoQuim = x => `<rect x="${x + 20}" y="58" width="30" height="66" rx="5" fill="#FFEB3B" stroke="#F9A825"/><rect x="${x + 28}" y="48" width="14" height="11" fill="#37474F"/>` + diamond(x + 35, 96, 12, 'flame');
  const icoRuido = x => `<rect x="${x + 8}" y="72" width="26" height="46" rx="3" fill="#78909C"/>` + waves(x + 30, 104, 3);
  const icoRod = x => `<g transform="translate(${x + 35},84) scale(.8) translate(${-(x + 35)},-84)">${rodillos(x + 30, 84)}</g>`;
  const icoGrua = x => `<g transform="translate(${x + 4},126) scale(.48) translate(${-(x + 4)},-126)">${forklift(x + 4, 126, { load: 22 })}</g>`;
  const icoFrio = x => `<g stroke="#29B6F6" stroke-width="4" stroke-linecap="round">${[0, 60, 120].map(a => `<line x1="${x + 35}" y1="62" x2="${x + 35}" y2="118" transform="rotate(${a} ${x + 35} 90)"/>`).join('')}</g>`;
  const icoEsc = x => ladder(x + 14, 128, 86, 0);
  const icoSol = x => `<circle cx="${x + 35}" cy="88" r="18" fill="#FFC107"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${x + 35}" y1="60" x2="${x + 35}" y2="52" stroke="#FFA000" stroke-width="4" transform="rotate(${a} ${x + 35} 88)"/>`).join('')}`;
  const icoBomba = x => `<rect x="${x + 18}" y="54" width="32" height="56" rx="10" fill="#FFB300" stroke="#E65100"/><path d="M${x + 22},110 q-6,10 6,14 h26" stroke="#263238" stroke-width="3" fill="none"/>` + diamond(x + 34, 80, 10, 'health');
  const icoTrac = x => `<g transform="translate(${x + 2},128) scale(.44) translate(${-(x + 2)},-128)">${tractor(x + 2, 128, { driver: false })}</g>`;
  const icoPant = x => `<rect x="${x + 10}" y="58" width="50" height="34" rx="3" fill="#263238"/><rect x="${x + 13}" y="61" width="44" height="28" fill="#64B5F6"/><rect x="${x + 31}" y="92" width="8" height="10" fill="#455A64"/><rect x="${x + 20}" y="102" width="30" height="4" fill="#455A64"/><path d="M${x + 14},122 h42" stroke="#90A4AE" stroke-width="5" stroke-linecap="round"/>`;
  const icoCable = x => cable(x + 6, x + 64, 112) + enchufe(x + 22, 92);
  const icoAuto = x => `<path d="M${x + 6},112 v-14 l10,-16 h36 l12,16 v14z" fill="#1E88E5" stroke="#0D47A1"/><rect x="${x + 20}" y="86" width="12" height="10" fill="#BBDEFB"/><rect x="${x + 36}" y="86" width="12" height="10" fill="#BBDEFB"/><circle cx="${x + 18}" cy="114" r="7" fill="#263238"/><circle cx="${x + 52}" cy="114" r="7" fill="#263238"/>`;
  const icoEstres = x => `<circle cx="${x + 35}" cy="84" r="20" fill="${SK}" stroke="#22303A"/><path d="M${x + 27},94 h16" stroke="#22303A" stroke-width="2"/><circle cx="${x + 28}" cy="80" r="2" fill="#22303A"/><circle cx="${x + 42}" cy="80" r="2" fill="#22303A"/><path d="M${x + 14},60 l6,6 M${x + 56},60 l-6,6 M${x + 35},54 v8" stroke="#E53935" stroke-width="3" stroke-linecap="round"/>` + clock(x + 35, 122, 9);
  S.si_t1_p_lista = () => svg(fondo() + (pk(
    [[icoAgua, 'Piso mojado'], [icoCuch, 'Cortes'], [icoQuim, 'Químicos'], [icoRuido, 'Ruido']],
    [[icoRod, 'Atrapamiento'], [icoGrua, 'Grúas'], [icoFrio, 'Frío'], [icoAgua, 'Piso mojado']],
    [[icoEsc, 'Caídas'], [icoSol, 'Sol y calor'], [icoBomba, 'Agroquímicos'], [icoTrac, 'Tractores']],
    [[icoPant, 'Postura'], [icoCable, 'Tropiezos'], [icoAuto, 'Conducción'], [icoEstres, 'Estrés']]).map(([f, l], i) => tile(8 + i * 78, f(8 + i * 78), l)).join('')) + txt(160, 190, 'Peligros de tu trabajo', 12, '#263238'));
  S.si_t1_p_matriz = () => svg(`<rect width="320" height="200" fill="#F5F7FA"/>` + (() => { let g = ''; const col = ['#43A047', '#FDD835', '#E53935'];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { const lv = Math.min(2, Math.floor((r + c) / 1.5)); g += `<rect x="${120 + c * 62}" y="${24 + (2 - r) * 42}" width="60" height="40" rx="4" fill="${col[lv]}"/>`; }
    g += `<circle cx="${120 + 2 * 62 + 30}" cy="${24 + 20}" r="12" fill="none" stroke="#263238" stroke-width="3" class="an-pulse"/>`;
    g += `<text x="104" y="87" font-size="12" font-weight="bold" text-anchor="middle" fill="#263238" font-family="Arial" transform="rotate(-90 104 87)">Probabilidad</text>` + txt(213, 168, 'Consecuencia', 12) + flecha(120, 156, 300, 156, '#455A64') + flecha(112, 150, 112, 22, '#455A64');
    g += txt(150, 190, 'Bajo', 11, '#2E7D32') + txt(213, 190, 'Medio', 11, '#F9A825') + txt(276, 190, 'Alto', 11, '#C62828');
    return g; })() + W(48, 170, { pose: 'point', s: .85 }));
  S.si_t1_p_miper = () => svg(fondo() + `<rect x="96" y="14" width="214" height="134" rx="6" fill="#fff" stroke="#90A4AE" stroke-width="2"/>` + txt(203, 32, 'MATRIZ DE RIESGOS', 12, '#0D47A1')
    + `<rect x="104" y="40" width="198" height="18" fill="#1565C0"/>` + ['Tarea', 'Peligro', 'Riesgo', 'Control'].map((t, i) => txt(129 + i * 50, 53, t, 9.5, '#fff')).join('')
    + [0, 1, 2, 3].map(r => `<line x1="104" y1="${78 + r * 20}" x2="302" y2="${78 + r * 20}" stroke="#CFD8DC"/>` + [0, 1, 2, 3].map(c => c === 2 ? `<circle cx="${129 + c * 50}" cy="${68 + r * 20}" r="5" fill="${['#E53935', '#FDD835', '#43A047', '#FDD835'][r]}"/>` : `<rect x="${110 + c * 50}" y="${65 + r * 20}" width="${30 + (r + c) % 3 * 4}" height="5" fill="#B0BEC5"/>`).join('')).join('')
    + W(56, 168, { pose: 'point' }));
  S.si_t1_p_jer = () => svg(`<rect width="320" height="200" fill="#F5F7FA"/>` + [['Eliminar', '#2E7D32'], ['Sustituir', '#558B2F'], ['Ingeniería', '#F9A825'], ['Administrativos', '#EF6C00'], ['EPP', '#C62828']].map(([t, c], i) => { const w1 = 256 - i * 44, w2 = w1 - 44, y = 14 + i * 34; return `<path d="M${146 - w1 / 2},${y} h${w1} l-22,30 h${-w2} z" fill="${c}"/>` + txt(146, y + 20, t, 12, '#fff') + txt(14, y + 20, String(i + 1), 13, '#455A64'); }).join('')
    + txt(298, 26, 'Más', 10, '#2E7D32') + txt(298, 38, 'efectivo', 10, '#2E7D32') + txt(250, 168, 'Última', 10, '#C62828') + txt(250, 180, 'barrera', 10, '#C62828'));
  const laminadora = (x, y, guard) => `<rect x="${x}" y="${y - 70}" width="110" height="40" rx="4" fill="#B0BEC5" stroke="#607D8B" stroke-width="2"/><rect x="${x + 10}" y="${y - 30}" width="8" height="30" fill="#78909C"/><rect x="${x + 92}" y="${y - 30}" width="8" height="30" fill="#78909C"/><circle cx="${x + 40}" cy="${y - 50}" r="11" fill="#78909C"/><circle cx="${x + 64}" cy="${y - 50}" r="11" fill="#78909C"/><rect x="${x - 30}" y="${y - 56}" width="40" height="6" fill="#FFF59D"/>`
    + (guard ? `<rect x="${x + 22}" y="${y - 82}" width="62" height="40" rx="4" fill="#B3E5FC" fill-opacity=".55" stroke="#0288D1" stroke-width="2.5"/>` : '');
  S.si_t1_p_ing = () => svg(fondo() + pk(
    laminadora(150, 165, true) + W(80, 165) + txt(230, 40, 'Protección fija', 12, '#0277BD'),
    cinta(110, 165, 170) + `<rect x="96" y="${165 - 80}" width="34" height="34" rx="4" fill="#FFB300" fill-opacity=".85" stroke="#E65100" stroke-width="2"/>` + W(60, 165) + txt(112, 70, 'Guarda', 12, '#E65100'),
    tractor(90, 168).replace('stroke="#263238" stroke-width="4"/>', 'stroke="#FFB300" stroke-width="6"/>') + `<line x1="128" y1="${168 - 82}" x2="138" y2="${168 - 66}" stroke="#E53935" stroke-width="3"/>` + txt(110, 46, 'Arco antivuelco', 12, '#E65100') + txt(132, 192, 'y cinturón', 11, '#C62828'),
    desk(150, 165) + chair(120, 165) + `<rect x="150" y="160" width="150" height="8" rx="2" fill="#B0BEC5" stroke="#78909C"/>` + txt(226, 190, 'Canaleta para cables', 11, '#455A64') + W(70, 165)) + badge(292, 30, true));
  S.si_t1_p_adm = () => svg(fondo() + pk(
    `<path d="M200,24 l34,58 h-68z" fill="#FFC20E" stroke="#263238" stroke-width="3"/>` + txt(200, 74, '!', 30, '#263238') + txt(200, 100, 'Piso resbaladizo', 11, '#263238'),
    `<path d="M200,24 l34,58 h-68z" fill="#FFC20E" stroke="#263238" stroke-width="3"/>` + txt(200, 74, '!', 30, '#263238') + txt(200, 100, 'Zona de grúas', 11, '#263238'),
    `<rect x="160" y="30" width="90" height="46" rx="4" fill="#C62828"/>` + txt(205, 50, 'APLICACIÓN', 11, '#FFEB3B') + txt(205, 66, 'EN CURSO', 11, '#FFEB3B') + `<rect x="202" y="76" width="6" height="66" fill="#6D4C41"/>`,
    clock(200, 56, 24) + txt(200, 100, 'Pausa activa', 11, '#263238'))
    + W(60, 165, { pose: 'point' }) + doc(96, 124, 'PROCEDIMIENTO') + W(270, 165, { pose: 'stand', flip: true }));
  S.si_t1_p_irl = () => svg(fondo() + W(80, 165) + jefe(240, 165, { pose: 'point', flip: true }) + `<g transform="translate(140,70)"><rect width="46" height="60" rx="3" fill="#fff" stroke="#90A4AE" stroke-width="1.5"/><rect width="46" height="14" rx="3" fill="#1565C0"/>${txt(23, 11, 'IRL', 10, '#fff')}${[0, 1, 2].map(i => `<rect x="6" y="${20 + i * 8}" width="34" height="3" fill="#B0BEC5"/>`).join('')}<path d="M8,52 q6,-8 10,0 t12,-2" stroke="#1565C0" stroke-width="1.5" fill="none"/></g>`
    + bubble(170, 14, 'Estos son tus riesgos', 140) + txt(163, 150, 'DS 44', 12, '#0D47A1'));
  S.si_t1_p_cambio = () => svg(fondo() + pk(
    `<rect x="160" y="90" width="100" height="44" rx="4" fill="#CFD8DC" stroke="#607D8B" stroke-width="2"/><rect x="176" y="104" width="68" height="10" fill="#455A64"/><rect x="170" y="134" width="8" height="31" fill="#78909C"/><rect x="242" y="134" width="8" height="31" fill="#78909C"/>`,
    `<path d="M170,165 v-80 h80 v80" fill="none" stroke="#546E7A" stroke-width="8"/><rect x="176" y="140" width="68" height="8" fill="#37474F"/>` + cajaC(193, 140, 3),
    `<rect x="156" y="96" width="76" height="50" rx="20" fill="#FB8C00" stroke="#E65100" stroke-width="2"/><circle cx="194" cy="152" r="14" fill="#263238"/><rect x="232" y="116" width="40" height="5" fill="#455A64"/><path d="M272,110 l10,-6 M272,118 h12 M272,126 l10,6" stroke="#90A4AE" stroke-width="2"/>`,
    `<rect x="170" y="100" width="76" height="64" rx="4" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/><rect x="180" y="96" width="56" height="8" fill="#455A64"/><rect x="186" y="116" width="44" height="30" fill="#CFD8DC"/>`)
    + pl(210, 60, 'NUEVO', '#2E7D32', 12) + W(90, 165, { pose: 'point' }) + bubble(10, 16, '¿Qué riesgos tiene?', 140));

  SI_CONT.temas.push({
    id: 'peligros', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Peligros y riesgos: identificación y control', thumb: 'si_t1_p_jer', mins: 15,
    learn: [
      { s: 'si_t1_p_def', t: 'Peligro y riesgo no son lo mismo', x: '<b>Peligro</b> es lo que puede causar daño: el alambre tenso de la espaldera. <b>Riesgo</b> es la posibilidad de que ese peligro te dañe y qué tan grave sería: un latigazo en el ojo. El peligro puede estar siempre; el riesgo se baja con controles.' },
      { s: 'si_t1_p_lista', t: 'Peligros de tu trabajo', x: '<ul><li>Postura al cosechar: lumbago.</li><li>Sol y calor: quemaduras y golpe de calor.</li><li>Agroquímicos: intoxicación.</li><li>Tractores: volcamiento y atropello.</li><li>Tijeras y alambres: cortes. Abejas y avispas: picaduras.</li></ul>' },
      { s: 'si_t1_p_matriz', t: '¿Cómo se evalúa un riesgo?', x: 'Se miran dos cosas:<ul><li><b>Probabilidad:</b> ¿pasa seguido o casi nunca?</li><li><b>Consecuencia:</b> ¿un rasguño o una lesión grave, como una amputación?</li></ul>Juntas dan el nivel de riesgo: <b>bajo, medio o alto</b>. Un riesgo alto exige medidas de control antes de trabajar.' },
      { s: 'si_t1_p_miper', t: 'La matriz de riesgos (MIPER)', x: 'La empresa tiene una <b>Matriz de Identificación de Peligros y Evaluación de Riesgos</b> (MIPER). Allí está cada tarea, sus peligros, sus riesgos, el nivel de cada uno y las <b>medidas de control</b>. Se actualiza cuando cambia un proceso, llega un equipo nuevo u ocurre un accidente. Tu experiencia sirve: si ves un peligro que no está, avísalo.' },
      { s: 'si_t1_p_jer', t: 'Jerarquía de controles', x: 'Los controles se eligen de arriba hacia abajo:<ul><li><b>1. Eliminar</b> el peligro.</li><li><b>2. Sustituir</b> por algo menos peligroso.</li><li><b>3. Ingeniería:</b> protecciones, resguardos, ventilación.</li><li><b>4. Administrativos:</b> procedimientos, señalización, capacitación, pausas.</li><li><b>5. EPP:</b> la última barrera.</li></ul>Lo más efectivo es quitar el peligro; el EPP protege cuando lo demás no basta.', k: 'Primero se elimina o controla el peligro; el EPP es la última barrera.' },
      { s: 'si_t1_p_ing', t: 'Controles de ingeniería', x: 'El arco antivuelco del tractor, junto con el cinturón, te protege si el tractor se vuelca. Estos controles protegen <b>aunque alguien se distraiga</b>. Por eso nunca se sacan ni se anulan.' },
      { s: 'si_t1_p_adm', t: 'Controles administrativos', x: 'Son las reglas y la información: <b>procedimientos de trabajo, señalización, capacitación, pausas y rotación</b>. Ejemplo: el letrero de aplicación en curso y el período de reingreso al sector. Funcionan solo si cada uno los cumple.' },
      { s: 'si_t1_p_irl', t: 'IRL: te deben informar los riesgos (DS 44)', x: 'El DS 44 obliga a la empresa a <b>informarte los riesgos de tu trabajo (IRL)</b>: al ingresar, al cambiar de tarea o de proceso y cuando llega un equipo nuevo. Te explican los peligros, las medidas de control y la forma correcta de trabajar, y firmas un registro. Si no entiendes algo, pregunta antes de firmar.' },
      { s: 'si_t1_p_cambio', t: 'Tu parte en el control de riesgos', x: '<ul><li>Revisa tu puesto antes de empezar.</li><li>Cumple los controles: no saques protecciones ni te saltes procedimientos.</li><li>Avisa los peligros nuevos y los controles que fallan.</li><li>Si llega un equipo o implemento nuevo o cambia tu tarea, pide que te capaciten antes de usarlo.</li></ul>' }
    ],
    quiz: [
      { s: 'si_t1_p_def', v: [
        { q: 'El alambre tenso de la espaldera es un ejemplo de:', o: ['Peligro', 'Riesgo', 'Control de ingeniería', 'Control administrativo'], w: 'Es lo que puede causar daño, o sea, un peligro. El riesgo es la posibilidad de que ese daño ocurra.' },
        { q: '¿Qué es el riesgo?', o: ['La posibilidad de que un peligro cause daño y su gravedad', 'Lo que puede causar daño, como una máquina o un químico', 'La medida que se usa para protegerse del daño', 'El documento que firma el trabajador al ingresar'], w: 'El riesgo combina la probabilidad de que ocurra el daño y qué tan grave sería.' },
        { q: 'Peligro y riesgo significan exactamente lo mismo.', vf: false, w: 'Falso. El peligro es lo que puede causar daño; el riesgo es la posibilidad de que ese daño ocurra y su gravedad.' } ] },
      { s: 'si_t1_p_lista', v: [
        { q: '¿Cuál de estos es un peligro propio del campo?', o: ['Un alambre suelto a la altura de la cara', 'Un pasillo seco y despejado', 'Un extintor visible y en su lugar', 'Una protección bien instalada'], w: 'Es lo único que puede causar daño. Las demás son condiciones seguras o controles.' },
        { q: '¿Cuál de estas situaciones es un peligro?', o: ['Un hoyo sin tapar en el pasillo', 'Un pasillo bien iluminado', 'Una protección en buen estado', 'Un botiquín ordenado'], w: 'Un peligro es algo que puede causar daño. Las otras opciones son condiciones seguras.' },
        { q: '¿Hay peligros en un trabajo que ya conoces bien?', o: ['Sí, el peligro sigue aunque la tarea sea conocida', 'No, la experiencia elimina los peligros', 'Solo si eres trabajador nuevo', 'Solo en el primer día de la temporada'], w: 'La experiencia ayuda, pero el peligro sigue ahí: por eso se controla siempre.' } ] },
      { s: 'si_t1_p_matriz', v: [
        { q: '¿Qué dos cosas se miran para evaluar un riesgo?', o: ['La probabilidad y la consecuencia', 'El horario y el turno', 'La edad y la experiencia del trabajador', 'El precio del equipo y su marca'], w: 'El nivel de riesgo sale de cuán probable es el daño y qué tan grave sería.' },
        { q: 'Un peligro que puede ocurrir seguido y causar una amputación tiene un riesgo:', o: ['Alto', 'Bajo', 'Medio', 'Aceptable sin controles'], w: 'Alta probabilidad y consecuencia grave dan un riesgo alto.' },
        { q: 'Un riesgo alto exige medidas de control antes de trabajar.', vf: true, w: 'Verdadero. Los riesgos altos se controlan primero.' } ] },
      { s: 'si_t1_p_miper', v: [
        { q: '¿Qué contiene la matriz de riesgos (MIPER)?', o: ['Las tareas, sus peligros, sus riesgos y las medidas de control', 'Solo el listado de trabajadores y sus cargos', 'Los turnos, horarios y vacaciones del personal', 'Solo los accidentes ocurridos el año anterior'], w: 'La MIPER identifica peligros, evalúa riesgos y define controles para cada tarea.' },
        { q: '¿Cuándo se debe actualizar la matriz de riesgos?', o: ['Cuando cambia un proceso, llega un equipo nuevo u ocurre un accidente', 'Solo una vez, cuando se crea la empresa, y nunca más', 'Solo cuando entra un trabajador nuevo a la empresa', 'Solo cada diez años, aunque nada haya cambiado'], w: 'Si cambia el trabajo, cambian los peligros: la matriz se revisa.' },
        { q: 'Ves un peligro en tu puesto que no está en la matriz. ¿Qué haces?', o: ['Lo aviso para que se evalúe y se controle', 'Nada, si no está en la matriz no es peligro', 'Lo anoto solo para mí', 'Espero la próxima revisión anual'], w: 'Tu experiencia ayuda a completar la matriz. Avisa para que se controle.' } ] },
      { s: 'si_t1_p_jer', v: [
        { q: 'Según la jerarquía de controles, ¿cuál es el control más efectivo?', o: ['Eliminar el peligro', 'Usar EPP', 'Poner un letrero', 'Dar una charla'], w: 'Si el peligro no existe, no puede dañar a nadie. Por eso eliminar está primero.' },
        { q: 'En la jerarquía de controles, el EPP es:', o: ['La última barrera, cuando lo demás no basta', 'El primer control y el más efectivo', 'Un control de ingeniería', 'Un reemplazo de la capacitación'], w: 'El EPP es obligatorio, pero es la última barrera: primero se elimina o controla el peligro.' },
        { q: '¿Cuál es el orden correcto de la jerarquía de controles?', o: ['Eliminar, sustituir, ingeniería, administrativos, EPP', 'EPP, administrativos, ingeniería, sustituir, eliminar', 'Sustituir, EPP, eliminar, ingeniería, administrativos', 'Administrativos, EPP, eliminar, sustituir, ingeniería'], w: 'Se parte por lo más efectivo, eliminar, y se termina en el EPP.' } ] },
      { s: 'si_t1_p_ing', v: [
        { q: 'El arco antivuelco del tractor es un control de tipo:', o: ['Ingeniería', 'Administrativo', 'EPP', 'Sustitución'], w: 'Es un cambio físico en el equipo o el lugar que protege aunque alguien se distraiga.' },
        { q: '¿Por qué nunca se debe sacar una protección o resguardo de un equipo?', o: ['Porque protege aunque alguien se distraiga', 'Porque se ensucia más rápido', 'Porque el equipo queda más lento', 'Porque así el equipo dura más años'], w: 'Los controles de ingeniería protegen siempre; sacarlos deja el peligro al descubierto.' },
        { q: 'Si una protección estorba para trabajar más rápido, se puede sacar por un rato.', vf: false, w: 'Falso. Nunca se saca ni se anula una protección. Si estorba, se avisa a la jefatura.' } ] },
      { s: 'si_t1_p_adm', v: [
        { q: '¿Cuál de estos es un control administrativo?', o: ['Un procedimiento de trabajo y la señalización', 'Una guarda fija en una máquina', 'Cambiar un químico por otro menos peligroso', 'Los guantes y las antiparras'], w: 'Procedimientos, señalización, capacitación y pausas son controles administrativos.' },
        { q: 'El período de reingreso después de una aplicación es un control:', o: ['Administrativo', 'De ingeniería', 'De eliminación', 'De EPP'], w: 'Es una regla o información para trabajar seguro: un control administrativo.' },
        { q: 'Los controles administrativos funcionan solo si:', o: ['Cada trabajador los cumple', 'Están pegados en la oficina', 'Los firma la gerencia', 'Hay un supervisor mirando todo el rato'], w: 'Un procedimiento o una señal sirven solo si las personas los respetan.' } ] },
      { s: 'si_t1_p_irl', v: [
        { q: '¿Qué es la IRL que exige el DS 44?', o: ['La información de los riesgos de tu trabajo y cómo controlarlos', 'Un permiso para ausentarse del trabajo por salud', 'El registro de las horas extra trabajadas', 'Un seguro de salud adicional que paga la empresa'], w: 'IRL es informar los riesgos laborales: peligros, medidas de control y forma correcta de trabajar.' },
        { q: '¿Cuándo se deben informar los riesgos laborales (IRL)?', o: ['Al ingresar, al cambiar de tarea y si hay equipos nuevos', 'Solo después de que ocurre un accidente grave', 'Solo una vez al año, en una charla general de todos', 'Solo si el trabajador lo pide por escrito a la jefatura'], w: 'Se informa antes de exponerte a los riesgos y cada vez que algo cambia.' },
        { q: 'Al recibir la IRL no entiendes un riesgo. ¿Qué haces?', o: ['Pregunto antes de firmar', 'Firmo igual para no atrasar', 'No firmo y me voy a mi puesto', 'Le pido a un compañero que firme por mí'], w: 'Firmar es dejar constancia de que entendiste. Si hay dudas, pregunta.' } ] },
      { s: 'si_t1_p_cambio', v: [
        { q: 'Llega una pulverizadora nueva a tu área. ¿Qué corresponde antes de usarla?', o: ['Recibir capacitación e información de sus riesgos', 'Usarla de inmediato y aprender sobre la marcha', 'Preguntarle a un compañero si es fácil', 'Esperar a que otro la pruebe primero'], w: 'Un equipo nuevo trae riesgos nuevos: primero capacitación y autorización.' },
        { q: '¿Qué haces antes de empezar tu turno para identificar peligros?', o: ['Reviso mi puesto y aviso lo que esté mal', 'Empiezo de inmediato para ganar tiempo', 'Espero que la jefatura revise por mí', 'Solo reviso si hubo un accidente'], w: 'Revisar tu puesto y avisar es tu parte en el control de riesgos.' },
        { q: '¿Cuál es tu parte en el control de riesgos?', o: ['Cumplir los controles y avisar los peligros nuevos', 'Ninguna, eso le toca solo a la jefatura', 'Usar el EPP solo cuando te vean', 'Solo firmar la IRL una vez'], w: 'Todos participamos: cumpliendo los controles y avisando lo que falla.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 3 · EPP
  // ======================================================================
  const guante = (x, y, s = 1, c = '#FDD835', roto) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="0" y="-26" width="24" height="26" rx="5" fill="${c}" stroke="#5D4037" stroke-width="1.2"/>${[0, 1, 2, 3].map(i => `<rect x="${1 + i * 5.8}" y="${-44 + (i === 0 || i === 3 ? 4 : 0)}" width="5.2" height="20" rx="2.6" fill="${c}" stroke="#5D4037" stroke-width="1.2"/>`).join('')}<rect x="-10" y="-22" width="14" height="6" rx="3" fill="${c}" stroke="#5D4037" stroke-width="1.2" transform="rotate(-35 -3 -19)"/><rect x="-2" y="-2" width="28" height="8" rx="2" fill="${c}" stroke="#5D4037" stroke-width="1.2"/>${roto ? `<path d="M8,-18 l4,6 l-3,4 l5,5" stroke="#263238" stroke-width="2" fill="none"/><ellipse cx="12" cy="-12" rx="4" ry="3" fill="#263238" opacity=".7"/>` : ''}</g>`;
  const lab = (x1, y1, x2, y2, t, c = '#37474F') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1.5"/><circle cx="${x2}" cy="${y2}" r="2.5" fill="${c}"/>` + pl(x1, y1 - 10, t, c, 11);
  S.si_t1_e_kit = () => svg(fondo() + pk(
    W(160, 190, { s: 1.5 }) + lab(58, 50, 152, 70, 'Cofia') + lab(268, 50, 168, 88, 'Mascarilla') + lab(58, 112, 156, 140, 'Pechera blanca') + lab(268, 112, 176, 112, 'Cotona blanca') + lab(58, 170, 146, 180, 'Botas blancas'),
    W(160, 190, { s: 1.5 }) + lab(58, 50, 152, 70, 'Cofia') + lab(268, 50, 168, 88, 'Mascarilla') + lab(58, 112, 148, 124, 'Cotona') + lab(70, 170, 146, 182, 'Zapatos de seguridad'),
    W(160, 190, { s: 1.5 }) + lab(58, 50, 150, 64, 'Legionario') + lab(268, 50, 168, 80, 'Lentes') + lab(268, 110, 176, 120, 'Manga larga') + lab(58, 112, 144, 136, 'Guantes') + lab(70, 170, 146, 182, 'Zapatos de seguridad'),
    `<rect x="236" y="40" width="70" height="110" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/>` + txt(271, 34, 'Planta', 11, '#455A64') + W(160, 190, { s: 1.5, cofia: true, vest: true, boots: '#5D4037' }) + lab(58, 50, 152, 70, 'Cofia') + lab(58, 112, 150, 124, 'Chaleco') + lab(70, 170, 146, 182, 'Calzado de seguridad')));
  S.si_t1_e_tarea = () => svg(pk(
    bg() + `<rect x="210" y="20" width="10" height="130" fill="#B0BEC5"/><rect x="220" y="60" width="100" height="10" fill="#B0BEC5"/>` + `<rect x="232" y="106" width="40" height="44" rx="5" fill="#FFF176" stroke="#F9A825"/><rect x="244" y="98" width="16" height="9" fill="#37474F"/>` + diamond(252, 128, 11, 'flame') + W(140, 165, { glasses: true, gloves: '#43A047', muffs: 'on' }) + lab(54, 50, 144, 91, 'Antiparras') + lab(54, 110, 128, 130, 'Guantes de nitrilo') + lab(270, 30, 142, 82, 'Fonos'),
    `<rect width="320" height="200" fill="#D6EEFB"/><rect y="150" width="320" height="50" fill="#9FB8C8"/>` + [30, 90, 200, 260, 290].map((x, i) => `<g class="an-fall" style="--dy:-30px;animation-delay:${i * .4}s"><text x="${x}" y="${40 + (i % 3) * 30}" font-size="16" fill="#fff" font-family="Arial">❄</text></g>`).join('') + pallet(200, 165) + cajaC(204, 159, 6) + W(140, 165, { shirt: '#283593', pants: '#1A237E', gloves: '#263238' }) + lab(54, 60, 136, 110, 'Ropa térmica') + lab(54, 120, 128, 132, 'Guantes'),
    campo() + tree(270, 150, 110) + W(130, 168, { shirt: '#FDD835', pants: '#F9A825', mask: true, glasses: true, gloves: '#43A047', boots: '#212121', hatColor: '#FFF59D' }) + `<rect x="104" y="104" width="16" height="36" rx="6" fill="#FFB300" stroke="#E65100"/>` + lab(46, 40, 136, 96, 'Antiparras') + lab(250, 26, 140, 100, 'Respirador') + lab(46, 100, 122, 126, 'Traje impermeable') + lab(250, 160, 146, 162, 'Botas de goma') + lab(46, 160, 120, 136, 'Guantes de nitrilo'),
    bg() + `<rect x="210" y="70" width="90" height="80" rx="4" fill="#90A4AE"/><circle cx="240" cy="110" r="16" fill="#607D8B"/>` + waves(256, 110, 3) + W(130, 165, { cofia: true, vest: true, muffs: 'on', boots: '#5D4037' }) + lab(50, 50, 126, 92, 'Fonos puestos')));
  S.si_t1_e_revisa = () => svg(fondo() + W(80, 165, { pose: 'carry' }) + guante(92, 124, .7, pk('#90A4AE', '#4FC3F7', '#8D6E63', '#90A4AE'))
    + `<circle cx="214" cy="84" r="58" fill="#fff" stroke="#455A64" stroke-width="6"/><line x1="172" y1="126" x2="140" y2="160" stroke="#455A64" stroke-width="10" stroke-linecap="round"/>` + guante(196, 116, 1.4, pk('#90A4AE', '#4FC3F7', '#8D6E63', '#90A4AE'), true) + badge(292, 30, false));
  S.si_t1_e_cambio = () => svg(fondo() + `<rect x="170" y="30" width="150" height="120" fill="#CFD8DC"/><rect x="190" y="56" width="110" height="50" fill="#455A64"/>` + W(245, 138, { flip: true, s: .8, shirt: '#1565C0', pants: '#263238', cofia: false, hat: false, helmet: false, vest: false, apron: false }) + `<rect x="170" y="106" width="150" height="14" fill="#8D6E63"/><rect x="170" y="120" width="150" height="30" fill="#A1887F"/>` + txt(245, 46, 'BODEGA', 12, '#263238')
    + W(110, 165, { pose: 'point' }) + guante(140, 108, .6, pk('#90A4AE', '#4FC3F7', '#8D6E63', '#90A4AE'), true) + guante(200, 100, .6, pk('#90A4AE', '#4FC3F7', '#8D6E63', '#90A4AE')) + flecha(150, 128, 186, 128, '#C62828') + flecha(196, 140, 160, 140, '#2E7D32') + pl(60, 20, 'Entrego el dañado', '#C62828', 11) + pl(108, 176, 'Recibo uno nuevo', '#2E7D32', 11));
  S.si_t1_e_cert = () => svg(fondo() + `<rect x="150" y="96" width="96" height="58" rx="3" fill="#C89B5E" stroke="#8D6E3F" stroke-width="1.5"/><rect x="194" y="96" width="8" height="58" fill="#E0C08A"/>` + guante(160, 96, .6, pk('#90A4AE', '#4FC3F7', '#8D6E63', '#90A4AE')) + `<g transform="translate(212,94) scale(.45)">${earmuff(0, 0)}</g>`
    + `<g class="an-pulse"><circle cx="262" cy="62" r="24" fill="#FFC107" stroke="#F57F17" stroke-width="3"/><path d="M252,62 l7,8 l13,-15" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></g>` + pl(262, 92, 'Certificado', '#2E7D32', 11)
    + W(80, 165, { pose: 'point' }) + pl(160, 170, 'Sin costo para ti', '#1565C0', 12));
  S.si_t1_e_presta = () => svg(fondo() + W(110, 165, { pose: 'point' }) + W(220, 165, { flip: true, face: 'worried' }) + pk(
    `<g transform="translate(150,104) scale(.42)">${earmuff(0, 0)}</g>`, guante(132, 112, .55, '#4FC3F7'),
    `<path d="M128,98 h22 v14 q-11,9 -22,0z" fill="#ECEFF1" stroke="#455A64" stroke-width="2"/><circle cx="132" cy="110" r="5" fill="#E91E63"/><circle cx="146" cy="110" r="5" fill="#E91E63"/>`,
    `<g transform="translate(150,104) scale(.42)">${earmuff(0, 0)}</g>`) + bubble(130, 22, '¿Me lo prestas?', 120) + badge(292, 30, false));
  S.si_t1_e_ultima = () => svg(fondo() + diamond(30, 96, 18, '!') + `<g class="t1Mov" style="--dx:30px"><path d="M50,96 h30" stroke="#C62828" stroke-width="5" stroke-dasharray="6 5"/></g>`
    + [['#2E7D32', 96, 'Eliminar'], ['#F9A825', 140, 'Ingeniería'], ['#EF6C00', 184, 'Reglas']].map(([c, x, t]) => `<rect x="${x}" y="44" width="10" height="106" rx="3" fill="${c}" opacity=".85"/>` + pl(x + 5, 20 + (x === 140 ? 140 : 0), t, c, 10)).join('')
    + `<path d="M224,60 q14,36 0,92 q20,-20 20,-46 q0,-26 -20,-46z" fill="#C62828"/>` + pl(234, 160, 'EPP', '#C62828', 11) + W(282, 165, { flip: true }));
  S.si_t1_e_joyas = () => svg(fondo() + divider() + (() => { const e = E(), bad = e === 'agricola' ? { loose: true } : { cofia: false, loose: true, hair: true };
    const joyas = (x, y) => e === 'agricola' ? '' : `<circle cx="${x - 11}" cy="${y - 35}" r="3" fill="none" stroke="#FFC107" stroke-width="2.5"/><circle cx="${x + 11}" cy="${y - 37}" r="3.5" fill="none" stroke="#FFC107" stroke-width="2.5"/><path d="M${x - 7},${y - 62} q7,8 14,0" stroke="#FFC107" stroke-width="2" fill="none"/><circle cx="${x - 5}" cy="${y - 70}" r="2" fill="#FFC107"/>`;
    let g = (e === 'inversiones' ? bg() + divider() : '') + W(80, 165, bad) + joyas(80, 165) + badge(138, 30, false, 14) + W(240, 165, e === 'inversiones' ? { cofia: true } : {}) + badge(298, 30, true, 14);
    if (e === 'agricola') g += `<rect x="20" y="150" width="120" height="8" rx="4" fill="#78909C"/>` + `<g class="an-spin-slow"><rect x="76" y="148" width="8" height="12" fill="#FFB300"/></g>` + txt(80, 188, 'cardán', 11, '#455A64');
    return g; })());
  S.si_t1_e_guarda = () => svg(fondo() + [0, 1, 2].map(i => `<rect x="${160 + i * 50}" y="30" width="48" height="120" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/><rect x="${164 + i * 50}" y="40" width="20" height="3" fill="#78909C"/><rect x="${164 + i * 50}" y="48" width="20" height="3" fill="#78909C"/><circle cx="${200 + i * 50}" cy="90" r="2.5" fill="#455A64"/>`).join('')
    + `<rect x="210" y="30" width="48" height="120" fill="#ECEFF1" stroke="#78909C" stroke-width="2"/><line x1="214" y1="44" x2="254" y2="44" stroke="#78909C" stroke-width="2"/>` + pk(
      `<path d="M220,46 h28 v58 h-28z" fill="#fff" stroke="#B0BEC5"/><rect x="220" y="128" width="12" height="20" fill="#fff" stroke="#B0BEC5"/><rect x="236" y="128" width="12" height="20" fill="#fff" stroke="#B0BEC5"/>`,
      `<path d="M220,46 h28 v58 h-28z" fill="#90CAF9" stroke="#64B5F6"/><rect x="220" y="128" width="12" height="20" fill="#fff" stroke="#B0BEC5"/><rect x="236" y="128" width="12" height="20" fill="#fff" stroke="#B0BEC5"/>`,
      `<rect x="218" y="56" width="32" height="40" rx="4" fill="#E3F2FD" fill-opacity=".7" stroke="#64B5F6" stroke-width="2"/><path d="M224,70 h20 v12 q-10,8 -20,0z" fill="#ECEFF1" stroke="#455A64"/><circle cx="228" cy="80" r="4" fill="#E91E63"/><circle cx="240" cy="80" r="4" fill="#E91E63"/>` + txt(234, 112, 'bolsa', 9, '#455A64'),
      `<path d="M220,46 h28 v58 h-28z" fill="#FF8F00" stroke="#E65100"/><rect x="220" y="66" width="28" height="4" fill="#ECEFF1"/><rect x="220" y="84" width="28" height="4" fill="#ECEFF1"/>`)
    + W(110, 165, { pose: 'point' }) + badge(292, 186, true, 12));

  SI_CONT.temas.push({
    id: 'epp', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Uso y cuidado del EPP', thumb: 'si_t1_e_kit', mins: 15,
    learn: [
      { s: 'si_t1_e_kit', t: 'El EPP de tu trabajo', x: 'En el campo: <b>legionario con cubrenuca, ropa de manga larga, lentes de seguridad, zapatos de seguridad y bloqueador solar</b>, más guantes según la labor. El EPP es obligatorio todo el tiempo que estás expuesto al peligro.' },
      { s: 'si_t1_e_tarea', t: 'EPP según la tarea', x: 'En la aplicación de agroquímicos: <b>traje impermeable, respirador con filtro, antiparras, guantes de nitrilo y botas de goma</b>. Sin el equipo completo, no se aplica. La tarea define el EPP: si tienes dudas, pregunta a tu jefatura o revisa la HDS del producto.' },
      { s: 'si_t1_e_revisa', t: 'Revísalo antes de usarlo', x: 'Antes de cada uso revisa que tu EPP esté <b>completo, limpio y sin daños</b>: guantes sin roturas, respirador con su filtro vigente y bien ajustado, traje sin roturas. Un EPP dañado no protege: no lo uses así.' },
      { s: 'si_t1_e_cambio', t: 'Reposición: entregas el dañado', x: 'Si tu EPP se rompe, se gasta o se pierde, <b>avisa y pide reposición</b>. Para recibir uno nuevo <b>devuelves el dañado</b>: así se lleva el control y nadie sigue usando un EPP que no protege. No lo arregles con cinta ni lo reemplaces por algo hechizo.' },
      { s: 'si_t1_e_cert', t: 'EPP certificado y sin costo', x: 'La empresa te entrega el EPP <b>certificado</b> y <b>sin costo para ti</b> (Ley 16.744). No lo cambies por uno comprado por tu cuenta o sin certificación: puede no proteger. Tampoco lo modifiques: cortarle los dedos a un guante o perforar un respirador le quita la protección.' },
      { s: 'si_t1_e_presta', t: 'El EPP es personal: no se presta', x: 'El EPP es de uso personal. El respirador y los guantes se ajustan a tu cuerpo, y compartirlos traspasa hongos e infecciones. Además, un respirador de otro pueden no ajustarte bien. Si a un compañero le falta EPP, debe pedirlo a su jefatura.' },
      { s: 'si_t1_e_ultima', t: 'El EPP es la última barrera', x: 'El EPP <b>no elimina el peligro</b>: solo reduce el daño si algo falla. Por eso primero van las protecciones, los procedimientos y el orden. Pero cuando el peligro sigue ahí, <b>el EPP es lo único entre el peligro y tu cuerpo</b>. Úsalo completo y todo el tiempo; nunca reemplaza a los otros controles.', k: 'Sin el EPP completo no se empieza a trabajar.' },
      { s: 'si_t1_e_joyas', t: 'Ropa y accesorios', x: 'Usa tu ropa de trabajo ajustada y abotonada. Nada suelto (ropa, cordones, pelo largo) cerca del <b>cardán del tractor</b> o de piezas que giran: atrapan en un segundo.' },
      { s: 'si_t1_e_guarda', t: 'Cuida tu EPP', x: '<ul><li>Límpialo al terminar el turno.</li><li>Guárdalo en un lugar limpio y seco, y el respirador en una bolsa cerrada, lejos de los agroquímicos.</li><li>No lo dejes tirado ni lo uses para otra cosa.</li><li>Avisa si ya no te queda bien o está gastado.</li></ul>', k: 'Un EPP dañado no protege: pide su reposición de inmediato.' }
    ],
    quiz: [
      { s: 'si_t1_e_kit', v: [
        { q: '¿Cuál es el EPP básico de las labores en el campo?', o: ['Legionario, manga larga, lentes y zapatos de seguridad', 'Solo guantes, y únicamente cuando la tarea es sucia', 'La ropa de calle, si se trabaja con mucho cuidado', 'Lo que cada uno prefiera usar ese día'], w: 'Ese es el EPP que exige el lugar de trabajo para proteger tu salud y, donde corresponde, el producto.' },
        { q: '¿Cuándo debes usar el EPP?', o: ['Todo el tiempo que estás expuesto al peligro', 'Solo cuando la jefatura está mirando', 'Solo al inicio del turno', 'Solo cuando la tarea es larga'], w: 'El peligro no avisa: el EPP se usa todo el tiempo de exposición.' },
        { q: 'El EPP es obligatorio solo cuando hay una visita o una auditoría.', vf: false, w: 'Falso. El EPP es obligatorio siempre que estés expuesto al peligro.' } ] },
      { s: 'si_t1_e_tarea', v: [
        { q: 'Vas a aplicar agroquímicos. ¿Qué EPP necesitas?', o: ['Traje impermeable, respirador, antiparras, guantes y botas de goma', 'El mismo EPP de siempre, sin agregar ningún elemento', 'Una mascarilla de tela, guantes de algodón y gorro', 'Guantes de algodón, ropa de calle y zapatillas'], w: 'Cada tarea tiene su EPP según sus riesgos.' },
        { q: '¿Qué define el EPP que necesitas?', o: ['La tarea y sus riesgos, según la jefatura y la HDS', 'El gusto y la comodidad de cada trabajador', 'El color de la ropa de trabajo que te toca', 'Lo que use el compañero de al lado ese día'], w: 'El EPP se elige según los riesgos de la tarea. Si tienes dudas, pregunta o revisa la HDS.' },
        { q: 'Durante la aplicación te molesta el respirador. ¿Qué haces?', o: ['Salgo de la zona antes de quitarme el EPP', 'Me quito el EPP ahí mismo un rato', 'Me quito el EPP solo para conversar', 'Me quito el EPP si queda poco trabajo'], w: 'Dentro de la zona de riesgo el EPP va puesto siempre. Si necesitas sacártelo, sal primero.' } ] },
      { s: 'si_t1_e_revisa', v: [
        { q: '¿Qué haces antes de usar tu EPP?', o: ['Reviso que esté completo, limpio y sin daños', 'Nada, si ayer estaba en buen estado', 'Lo reviso una vez al mes, no antes', 'Lo reviso solo si la jefatura me lo pide'], w: 'Un daño pequeño puede dejarte sin protección. Se revisa antes de cada uso.' },
        { q: 'Tu guante de nitrilo tiene una rotura. ¿Qué haces?', o: ['No lo uso y pido reposición', 'Lo uso igual hasta terminar el turno', 'Lo tapo con cinta adhesiva', 'Uso uno de un compañero sin avisar'], w: 'Un EPP dañado no protege. Se cambia de inmediato.' },
        { q: 'Un EPP dañado igual protege, aunque un poco menos.', vf: false, w: 'Falso. Un EPP dañado puede no proteger nada. No se usa.' } ] },
      { s: 'si_t1_e_cambio', v: [
        { q: 'Para recibir un EPP nuevo porque el tuyo se dañó, ¿qué debes hacer?', o: ['Avisar y devolver el EPP dañado', 'Botar el dañado a la basura', 'Comprar uno por tu cuenta', 'Esperar a fin de mes'], w: 'Se repone entregando el dañado, para llevar el control y que no se siga usando.' },
        { q: '¿Por qué se devuelve el EPP dañado al pedir uno nuevo?', o: ['Para llevar el control y que nadie lo siga usando', 'Para repararlo y entregárselo a otro trabajador', 'Porque es una sanción por haberlo dañado', 'Para guardarlo de repuesto en la bodega'], w: 'Devolverlo evita que un EPP que no protege vuelva a usarse.' },
        { q: 'Se rompió tu traje de aplicación. ¿Qué es lo correcto?', o: ['Pedir reposición y entregar el dañado', 'Reparar el daño con cinta adhesiva', 'Seguir trabajando así hasta el final', 'Usar una bolsa plástica en su lugar'], w: 'El EPP hechizo o reparado no protege igual. Se pide reposición.' } ] },
      { s: 'si_t1_e_cert', v: [
        { q: '¿Cómo debe ser el EPP que usas?', o: ['Certificado y entregado por la empresa sin costo', 'Comprado por cada trabajador donde quiera', 'Cualquiera que se vea parecido al original', 'Hecho en casa, si así es más cómodo'], w: 'El EPP certificado asegura la protección. La empresa lo entrega sin costo.' },
        { q: 'Un compañero le cortó los dedos a sus guantes para trabajar más cómodo. ¿Qué pasa?', o: ['El guante pierde su protección', 'El guante protege igual', 'Protege más porque se siente mejor', 'No importa si lo usa poco rato'], w: 'Modificar el EPP le quita la protección para la que fue certificado.' },
        { q: '¿Quién paga el EPP que necesitas para tu trabajo?', o: ['La empresa, sin costo para el trabajador', 'El trabajador, con descuento del sueldo', 'Mitad la empresa y mitad el trabajador', 'La mutualidad, solo después de un accidente'], w: 'La Ley 16.744 obliga a la empresa a entregar el EPP sin cobrarlo.' } ] },
      { s: 'si_t1_e_presta', v: [
        { q: 'Un compañero te pide que le prestes tu respirador. ¿Qué haces?', o: ['No: le digo que pida su propio EPP a la jefatura', 'Le presto mi EPP si me lo devuelve al final del turno', 'Le presto mi EPP si lo limpia antes de usarlo', 'Compartimos el EPP por turnos durante la jornada'], w: 'El EPP es personal. Cada uno debe tener el suyo.' },
        { q: '¿Por qué el EPP no se presta?', o: ['Porque es personal: se ajusta a ti y evita contagios', 'Porque se gasta más rápido si lo usan dos', 'Porque es caro y cuesta reponerlo', 'Porque así lo pide el fabricante, nada más'], w: 'Compartirlo traspasa hongos e infecciones, y puede no ajustar bien a otra persona.' },
        { q: 'El EPP es personal y no se presta.', vf: true, w: 'Verdadero. Si a alguien le falta, lo pide a su jefatura.' } ] },
      { s: 'si_t1_e_ultima', v: [
        { q: 'Al EPP (casco, lentes, guantes, zapatos) le dicen «la última barrera». ¿Qué quiere decir?', o: ['Que te protege del peligro que no se pudo eliminar antes', 'Que es lo primero que se debe hacer', 'Que reemplaza las protecciones de las máquinas', 'Que se usa solo al final del turno'], w: 'Primero se intenta sacar o controlar el peligro (barandas, protecciones, orden, procedimientos). Lo que queda, lo frena el EPP en tu cuerpo.' },
        { q: 'Si usas el EPP, ¿puedes saltarte el período de reingreso de una aplicación?', o: ['No, el EPP no reemplaza a los otros controles', 'Sí, porque el EPP ya te protege de todo', 'Sí, si es solo por un rato corto', 'Sí, si la jefatura no está presente'], w: 'El EPP se suma a los otros controles; nunca los reemplaza.' },
        { q: '¿Cuándo puedes empezar una tarea que exige EPP?', o: ['Solo con el EPP completo puesto', 'Con la mitad del EPP, si es rápido', 'Antes de ponérmelo, si hay apuro', 'Cuando llegue el supervisor'], w: 'Sin el EPP completo no se empieza a trabajar.' } ] },
      { s: 'si_t1_e_joyas', v: [
        { q: 'Cerca del cardán del tractor, ¿qué debes evitar?', o: ['Ropa suelta, cordones y pelo largo suelto', 'Ropa limpia, ajustada y de manga larga', 'Calzado cerrado, limpio y en buen estado', 'La ropa de trabajo que entrega la empresa'], w: 'Lo suelto se engancha en piezas que giran y, en la cosecha, puede caer a la fruta.' },
        { q: '¿Por qué no se usa ropa suelta cerca del cardán?', o: ['Porque se enganchan en lo que gira o caen al producto', 'Porque se pueden perder durante el turno', 'Porque no combinan con la ropa de trabajo', 'Porque molestan al conversar con otros'], w: 'Un anillo o una manga suelta pueden arrastrar la mano o el brazo hacia la máquina.' },
        { q: '¿Cómo debe ir el pelo cerca de piezas que giran?', o: ['Tomado y cubierto, sin nada suelto', 'Suelto, si es corto', 'Suelto bajo el legionario', 'Cubierto hasta la mitad'], w: 'El pelo suelto puede engancharse o caer al producto.' } ] },
      { s: 'si_t1_e_guarda', v: [
        { q: '¿Cómo se cuida el EPP al terminar el turno?', o: ['Se limpia y se guarda en un lugar limpio y seco', 'Se deja en el puesto para el día siguiente', 'Se guarda junto a los químicos', 'Se lleva en el bolsillo sin limpiar'], w: 'Limpio y bien guardado, el EPP dura más y protege mejor.' },
        { q: '¿Dónde guardas el respirador?', o: ['En una bolsa cerrada, lejos de los agroquímicos', 'En cualquier lugar que quede a mano', 'Junto a los productos de limpieza', 'Donde caiga, si total está sucio'], w: 'Guardarlo bien evita que se dañe o se contamine.' },
        { q: 'Tu EPP ya no te queda bien o está muy gastado. ¿Qué haces?', o: ['Aviso y pido reposición', 'Lo sigo usando hasta que se rompa', 'Lo ajusto con amarras', 'Dejo de usarlo sin avisar'], w: 'Un EPP que no ajusta o está gastado no protege igual. Se repone.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 4 · ORDEN Y ASEO
  // ======================================================================
  const escTirada = (x, y, w = 90) => `<rect x="${x}" y="${y - 10}" width="${w}" height="3" fill="#90A4AE"/><rect x="${x}" y="${y - 2}" width="${w}" height="3" fill="#90A4AE"/>${Array.from({ length: Math.floor(w / 14) }, (_, i) => `<rect x="${x + 6 + i * 14}" y="${y - 9}" width="3" height="9" fill="#78909C"/>`).join('')}`;
  const zuncho = (x, y) => `<path d="M${x},${y} c10,-14 26,-14 30,-2 c4,12 -18,14 -12,-2 c6,-14 26,-8 30,2" stroke="#1E88E5" stroke-width="2.5" fill="none"/>`;
  const manguera = (x, y) => `<path d="M${x},${y} c14,-10 30,10 44,0 s30,-8 40,2" stroke="#2E7D32" stroke-width="5" fill="none"/>`;
  const obst = x => pk(molde(x, 172, 2) + manguera(x - 30, 182), cajaC(x, 172, 2) + zuncho(x - 30, 184), escTirada(x - 40, 176, 80) + `<path d="M${x - 50},186 q20,-8 50,-2" stroke="#6D4C41" stroke-width="4" fill="none"/>`, box(x, 172, 28, 20) + cable(x - 40, x + 10, 186));
  S.si_t1_o_vias = () => svg(fondo() + divider() + obst(96) + W(42, 165, { pose: 'walk', face: 'worried' }) + badge(138, 30, false, 14)
    + `<rect x="176" y="156" width="4" height="44" fill="#FFC20E"/><rect x="300" y="156" width="4" height="44" fill="#FFC20E"/>` + W(240, 165, { pose: 'walk' }) + badge(298, 30, true, 14));
  const salida = (x, tapada) => `<rect x="${x}" y="72" width="44" height="78" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/><circle cx="${x + 36}" cy="112" r="2.5" fill="#FFC107"/><rect x="${x - 4}" y="46" width="52" height="20" rx="2" fill="#2E7D32"/>` + txt(x + 22, 60, 'SALIDA', 11, '#fff') + ext(x + 62, 140, 'PQS', .9)
    + (tapada ? pk(pallet(x - 6, 165, 60) + `<rect x="${x - 4}" y="105" width="56" height="54" fill="#ECEFF1" stroke="#B0BEC5"/>`, pallet(x - 6, 165, 60) + cajaC(x - 2, 159, 6) + cajaC(x + 34, 159, 6), `<g>${saco(x - 2, 165, 'ABONO')}${saco(x + 34, 165, 'ABONO')}${saco(x + 16, 139, 'ABONO')}</g>`, box(x - 4, 165, 34, 40) + box(x + 32, 165, 34, 56)) + box(x + 58, 165, 30, 34) : '');
  S.si_t1_o_salidas = () => svg((E() === 'inversiones' ? oficina() : bg()) + divider() + salida(36, true) + badge(140, 26, false, 14) + salida(196, false) + badge(298, 26, true, 14));
  S.si_t1_o_esp = () => svg(fondo() + pk(
    `<rect x="20" y="158" width="110" height="10" rx="2" fill="#4FC3F7" stroke="#0288D1"/><rect x="74" y="96" width="44" height="12" rx="3" fill="#ECEFF1" stroke="#90A4AE"/><path d="M96,96 v-12 h8" stroke="#78909C" stroke-width="3" fill="none"/><rect x="92" y="108" width="8" height="42" fill="#B0BEC5"/>` + W(70, 165, { pose: 'carry' }) + txt(75, 190, 'Filtro sanitario', 11, '#0277BD')
      + rack(200, 165, molde(206, 135, 3) + molde(206, 103, 3) + molde(206, 71, 3)) + badge(292, 26, true, 13),
    pallet(20, 165, 58) + cajaC(32, 159, 9) + pallet(84, 165, 58) + cajaC(96, 159, 9) + bin(196, 165) + bin(196, 131) + bin(256, 165) + bin(256, 131) + W(160, 168, { s: .9 }) + badge(292, 26, true, 13),
    tree(60, 150, 120) + ladder(96, 150, 100, -4) + bin(170, 172, 'c') + bin(226, 172, 'c') + W(140, 165, {}) + `<rect x="132" y="128" width="7" height="18" rx="2" fill="#5D4037"/>` + pl(140, 178, 'Tijera en su funda', '#455A64', 10) + badge(292, 26, true, 13),
    desk(40, 165) + `<rect x="40" y="160" width="140" height="7" rx="2" fill="#B0BEC5" stroke="#78909C"/>` + chair(70, 165) + shelf(230, 165, 110) + box(240, 162, 32, 20) + W(190, 165, { flip: true }) + badge(292, 26, true, 13)));
  const tacho = (x, c, t1, t2) => `<rect x="${x}" y="96" width="56" height="70" rx="4" fill="${c}"/><rect x="${x - 3}" y="88" width="62" height="10" rx="3" fill="${c}" stroke="#263238" stroke-opacity=".3"/><rect x="${x + 5}" y="112" width="46" height="${t2 ? 30 : 18}" fill="#fff"/>` + txt(x + 28, 125, t1, 10, '#263238') + (t2 ? txt(x + 28, 138, t2, 10, '#263238') : '');
  S.si_t1_o_resid = () => svg(fondo() + pk(
    tacho(130, '#1E88E5', 'Cartón') + tacho(196, '#FDD835', 'Plásticos') + tacho(262, '#757575', 'Basura'),
    tacho(130, '#1E88E5', 'Cartón') + tacho(196, '#FDD835', 'Zunchos y', 'plásticos') + tacho(262, '#43A047', 'Descarte'),
    tacho(130, '#757575', 'Basura') + `<rect x="196" y="78" width="118" height="88" rx="4" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>` + txt(255, 96, 'Envases vacíos', 11, '#E65100') + `<rect x="210" y="118" width="24" height="40" rx="4" fill="#ECEFF1" stroke="#90A4AE"/><rect x="242" y="124" width="24" height="34" rx="4" fill="#ECEFF1" stroke="#90A4AE"/><rect x="274" y="114" width="26" height="44" rx="4" fill="#ECEFF1" stroke="#90A4AE"/>` + diamond(222, 138, 7, 'health') + diamond(287, 136, 7, 'health'),
    tacho(130, '#1E88E5', 'Papel') + tacho(196, '#FDD835', 'Plásticos') + tacho(262, '#757575', 'Basura'))
    + W(70, 165, { pose: 'point' }) + `<g class="an-fall" style="--dy:-24px"><rect x="112" y="80" width="12" height="10" fill="${pk('#C89B5E', '#C89B5E', '#ECEFF1', '#fff')}" stroke="#8D6E3F"/></g>`);
  S.si_t1_o_derrame = () => svg(fondo() + charco(178, 176, pk('#FFF59D', '#81D4FA', '#9CCC65', '#8D6E63'), 44) + cono(236, 180) + pk('', '', `<rect x="160" y="138" width="22" height="34" rx="4" fill="#ECEFF1" stroke="#90A4AE" transform="rotate(70 171 155)"/>`, `<rect x="160" y="160" width="12" height="14" rx="2" fill="#fff" stroke="#90A4AE"/>`)
    + W(80, 165, { pose: 'point' }) + (E() === 'inversiones' ? '' : doc(262, 120, 'HDS')) + bubble(20, 18, '¡Cuidado, derrame!', 140));
  const toolKnife = (x, y) => `<rect x="${x}" y="${y}" width="6" height="16" rx="2" fill="#5D4037"/><path d="M${x},${y + 16} h6 v30 q-3,6 -6,0z" fill="#CFD8DC" stroke="#78909C"/>`;
  const toolScis = (x, y) => `<path d="M${x},${y} q8,26 4,50 M${x + 14},${y} q-8,26 -4,50" stroke="#78909C" stroke-width="4" fill="none"/><circle cx="${x}" cy="${y - 4}" r="5" fill="none" stroke="#C62828" stroke-width="3"/><circle cx="${x + 14}" cy="${y - 4}" r="5" fill="none" stroke="#C62828" stroke-width="3"/>`;
  const toolSaw = (x, y) => `<rect x="${x}" y="${y}" width="12" height="14" rx="3" fill="#F57C00"/><path d="M${x + 2},${y + 14} h8 v34 l-8,4z" fill="#B0BEC5" stroke="#78909C"/>`;
  const toolLira = (x, y) => `<rect x="${x}" y="${y}" width="22" height="34" fill="none" stroke="#546E7A" stroke-width="2"/>${[1, 2, 3].map(i => `<line x1="${x + i * 5.5}" y1="${y}" x2="${x + i * 5.5}" y2="${y + 34}" stroke="#B0BEC5"/>`).join('')}<rect x="${x + 8}" y="${y - 12}" width="6" height="12" fill="#455A64"/>`;
  S.si_t1_o_herr = () => svg(fondo() + (E() === 'inversiones'
    ? shelf(180, 165, 120) + shelf(236, 165, 120) + W(120, 165, { pose: 'point' }) + `<rect x="148" y="94" width="11" height="18" fill="#2E7D32"/>`
    : `<rect x="150" y="26" width="160" height="104" rx="4" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/>` + (() => { const t = pk([toolLira, toolKnife, toolKnife], [toolKnife, toolScis, toolKnife], [toolScis, toolSaw, toolScis], [toolKnife, toolScis, toolKnife]);
      return t.map((f, i) => { const x = 172 + i * 46; return `<rect x="${x - 8}" y="40" width="36" height="76" rx="4" fill="none" stroke="#455A64" stroke-dasharray="4 3"/>` + (i === 1 ? '' : f(x, 54)); }).join('') + `<g class="t1Mov" style="--dx:40px">${t[1](140, 90)}</g>`; })()
      + W(100, 165, { pose: 'point' })));
  S.si_t1_o_alm = () => svg((E() === 'inversiones' ? oficina() : bg()) + divider() + `<rect x="20" y="40" width="110" height="110" fill="none" stroke="#78909C" stroke-width="4"/><rect x="20" y="78" width="110" height="4" fill="#78909C"/><rect x="20" y="114" width="110" height="4" fill="#78909C"/>`
    + box(30, 78, 50, 34, '30 kg') + box(84, 78, 20, 14) + box(30, 114, 22, 14) + `<g transform="rotate(-10 110 40)">${box(92, 40, 26, 16)}${box(94, 24, 22, 14)}</g>` + badge(140, 22, false, 13)
    + `<rect x="180" y="40" width="110" height="110" fill="none" stroke="#78909C" stroke-width="4"/><rect x="180" y="78" width="110" height="4" fill="#78909C"/><rect x="180" y="114" width="110" height="4" fill="#78909C"/>`
    + box(190, 76, 22, 14) + box(220, 76, 22, 14) + box(190, 112, 30, 20) + box(190, 150, 50, 34, '30 kg') + badge(300, 22, true, 13));
  S.si_t1_o_fin = () => svg(fondo() + (E() === 'agricola'
    ? tree(260, 150, 120) + bin(170, 168, 'c') + W(110, 165, { pose: 'carry' }) + `<rect x="114" y="106" width="30" height="18" rx="3" fill="#ECEFF1" stroke="#90A4AE"/>`
    : W(130, 165, {}) + `<line x1="142" y1="128" x2="168" y2="172" stroke="#8D6E63" stroke-width="4"/><path d="M160,170 l22,-6 l6,14 l-24,4z" fill="#FBC02D" stroke="#F57F17"/>` + `<g class="an-fade">${[0, 1, 2].map(i => `<circle cx="${200 + i * 12}" cy="${176 - i * 2}" r="2" fill="#9E9E9E"/>`).join('')}</g>`) + pk(tina(172, 140, false), '', '', desk(200, 165)) + badge(292, 26, true, 13));

  SI_CONT.temas.push({
    id: 'orden', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Orden y aseo', thumb: 'si_t1_o_vias', mins: 10,
    learn: [
      { s: 'si_t1_o_vias', t: 'Pasillos y vías siempre despejados', x: 'Tropezar o resbalar es de los accidentes más comunes, y casi siempre se evita con orden. Mantén <b>libres los pasillos, las rutas de tractores y los accesos</b>. No dejes cañas, amarras ni bandejas tiradas en la hilera o el camino. El DS 594 exige mantener los lugares de trabajo limpios y ordenados.' },
      { s: 'si_t1_o_salidas', t: 'Salidas, extintores y tableros libres', x: 'Nunca tapes con sacos, cajas o envases:<ul><li>las salidas de emergencia y vías de evacuación,</li><li>los extintores,</li><li>los tableros eléctricos,</li><li>las duchas de emergencia y lavaojos, donde existan.</li></ul>En una emergencia, cada segundo cuenta.' },
      { s: 'si_t1_o_esp', t: 'Herramientas y bandejas en el campo', x: 'Las <b>tijeras y el serrucho</b> van en su funda, nunca tirados en el suelo. Las <b>bandejas</b> se dejan en el punto de entrega o en el carro, nunca en la tierra ni tapando el pasillo.' },
      { s: 'si_t1_o_resid', t: 'Cada residuo en su lugar', x: 'Bota cada residuo en el basurero que corresponde. Los <b>envases vacíos de agroquímicos</b> nunca se botan, se queman ni se reutilizan: se devuelven al lugar que indica la empresa. Un basurero lleno se vacía antes de que rebalse.' },
      { s: 'si_t1_o_derrame', t: 'Derrames: señaliza, avisa y limpia', x: 'Un derrame de agroquímico o combustible es un resbalón esperando a alguien.<ul><li><b>Señaliza</b> de inmediato con un cono o letrero.</li><li><b>Avisa</b> a tu jefatura.</li><li><b>Limpia</b> según el procedimiento. Si es un químico, revisa su HDS y usa el EPP indicado.</li></ul>', k: 'Ante un derrame: señaliza, avisa y limpia. Nunca lo dejes para después.' },
      { s: 'si_t1_o_herr', t: 'Un lugar para cada cosa', x: 'Cada herramienta y cada material tiene su lugar. Al terminar de usarlo, <b>devuélvelo a su sitio</b>. Así nadie pierde tiempo buscando, nadie se corta con una tijera de podar olvidado y se nota de inmediato si falta algo.' },
      { s: 'si_t1_o_alm', t: 'Almacena de forma segura', x: '<ul><li><b>Lo pesado abajo, lo liviano arriba.</b></li><li>Rumas rectas, estables y sin pasar la altura indicada.</li><li>Nada en equilibrio ni sobresaliendo del estante.</li><li>Los agroquímicos solo en su bodega, rotulados y lejos de los alimentos.</li></ul>' },
      { s: 'si_t1_o_fin', t: 'Al terminar, deja tu puesto limpio', x: 'Antes de irte, deja tu puesto como te gustaría encontrarlo: limpio, ordenado y sin nada en el piso. Recoge herramientas, capachos y basura del sector. El orden es parte del trabajo de cada uno, no algo extra.' }
    ],
    quiz: [
      { s: 'si_t1_o_vias', v: [
        { q: '¿Por qué es importante mantener los pasillos despejados?', o: ['Para evitar tropiezos y permitir una evacuación rápida', 'Solo para que el lugar se vea bonito y limpio', 'Para que quepan más cosas en el pasillo y la bodega', 'Solo porque lo pide la auditoría cada año'], w: 'Un pasillo libre evita caídas y permite salir rápido en una emergencia.' },
        { q: 'Ves un rollo de alambre atravesado en el camino. ¿Qué haces?', o: ['Retiro el obstáculo si es seguro, o aviso', 'Paso por el lado con mucho cuidado', 'Espero a que lo saque otra persona', 'Lo dejo ahí, porque no es mío'], w: 'El orden es tarea de todos: se retira o se avisa antes de que alguien tropiece.' },
        { q: 'Dejar algo en el pasillo un rato no es problema si después uno se acuerda de sacarlo.', vf: false, w: 'Falso. Basta un segundo para que alguien tropiece. El pasillo se mantiene siempre libre.' } ] },
      { s: 'si_t1_o_salidas', v: [
        { q: '¿Qué nunca se debe tapar?', o: ['Salidas de emergencia, extintores y tableros eléctricos', 'Los basureros llenos de la zona de trabajo', 'Las cajas vacías que esperan su retiro', 'Las ventanas y puertas interiores de la bodega'], w: 'En una emergencia deben poder usarse de inmediato.' },
        { q: 'Alguien dejó sacos frente a un extintor. ¿Qué es lo correcto?', o: ['Despejarlo o pedir que lo despejen, y avisar', 'Dejarlo así, total es solo por hoy', 'Cambiar el extintor a otro lugar libre', 'Tapar el extintor para protegerlo del polvo'], w: 'Un extintor tapado no sirve en una emergencia. Se despeja de inmediato.' },
        { q: '¿Por qué las vías de evacuación deben estar siempre libres?', o: ['Porque en una emergencia cada segundo cuenta', 'Para que el lugar se vea ordenado', 'Para guardar cosas en caso de urgencia', 'Solo para los simulacros'], w: 'Si hay que salir rápido, cualquier obstáculo puede costar caro.' } ] },
      { s: 'si_t1_o_esp', v: [
        { q: '¿Dónde van las tijeras de podar cuando no las usas?', o: ['Guardadas en su funda o estuche', 'En el suelo, al pie de la mata', 'Colgadas de un alambre de la espaldera', 'Donde quede espacio en ese momento'], w: 'Cada cosa en su lugar evita tropiezos, cortes y caídas de objetos.' },
        { q: '¿Dónde se dejan las bandejas llenas en el campo?', o: ['En el punto de entrega o en el carro, sin tapar caminos', 'Al medio del camino para que el tractor los vea', 'Entre las hileras, donde se llenaron', 'Donde termine la cosecha'], w: 'Son hábitos de orden que evitan tropiezos, golpes y contaminación.' },
        { q: 'Encuentras una tijera de podar en el suelo del sector. ¿Qué haces?', o: ['Lo corrijo si es seguro, o aviso de inmediato', 'Lo dejo, no es mi responsabilidad', 'Lo esquivo y sigo trabajando', 'Espero al final del turno para avisar'], w: 'El orden es de todos: se corrige o se avisa antes de que cause un accidente.' } ] },
      { s: 'si_t1_o_resid', v: [
        { q: '¿Qué haces con los residuos de tu trabajo?', o: ['Los boto en el basurero que corresponde', 'Los dejo en el piso para que los barran', 'Los junto en un rincón', 'Los boto en el basurero más cercano, sea cual sea'], w: 'Cada residuo va separado en su contenedor.' },
        { q: '¿Qué se hace con un envase vacío de agroquímico?', o: ['Se devuelve al lugar que indica la empresa', 'Se quema con los restos de poda', 'Se reutiliza para guardar agua', 'Se bota en la acequia'], w: 'Los residuos bien manejados evitan accidentes, plagas y contaminación.' },
        { q: 'Separar los residuos y botarlos en su lugar ayuda a evitar accidentes y contaminación.', vf: true, w: 'Verdadero. Un residuo bien botado no hace tropezar ni contamina.' } ] },
      { s: 'si_t1_o_derrame', v: [
        { q: 'Ves un derrame de agroquímico en el piso. ¿Qué haces primero?', o: ['Señalizo y aviso para que se limpie', 'Paso por el lado y sigo', 'Lo tapo con un cartón', 'Espero a que se seque solo'], w: 'Primero se señaliza para que nadie resbale y se avisa para limpiarlo.' },
        { q: '¿Cuáles son los pasos ante un derrame?', o: ['Señalizar, avisar y limpiar según el procedimiento', 'Limpiar con lo primero que encuentre, sin avisar', 'Avisar al final del turno', 'Taparlo y seguir trabajando'], w: 'Señalizar, avisar y limpiar bien evita resbalones y contacto con químicos.' },
        { q: 'Si el derrame es de un químico, ¿qué revisas antes de limpiarlo?', o: ['La HDS del producto y el EPP indicado', 'Solo el color del líquido', 'El olor, acercándome', 'Nada, se limpia con agua siempre'], w: 'La HDS dice cómo limpiar el producto y con qué EPP.' } ] },
      { s: 'si_t1_o_herr', v: [
        { q: '¿Qué haces con una herramienta cuando terminas de usarla?', o: ['La devuelvo a su lugar', 'La dejo donde la usé', 'La guardo en el bolsillo', 'La dejo sobre el equipo'], w: 'Cada cosa en su lugar: nadie la busca y nadie se corta con ella.' },
        { q: '¿Por qué es peligroso dejar una tijera de podar olvidado en cualquier parte?', o: ['Porque alguien puede cortarse sin verlo', 'Porque se puede oxidar', 'Porque se pierde la garantía', 'Porque ocupa espacio'], w: 'Una herramienta con filo fuera de su lugar es un corte esperando a alguien.' },
        { q: '“Un lugar para cada cosa y cada cosa en su lugar”. ¿Qué se logra?', o: ['Menos tiempo perdido y menos cortes y tropiezos', 'Más trabajo para el turno siguiente', 'Que solo la jefatura sepa dónde están las cosas', 'Que se usen menos herramientas'], w: 'El orden ahorra tiempo y evita accidentes.' } ] },
      { s: 'si_t1_o_alm', v: [
        { q: '¿Cómo se ordenan las cosas en un estante?', o: ['Lo pesado abajo y lo liviano arriba', 'Lo pesado arriba para que no estorbe', 'Todo en el nivel más alto', 'Como vaya llegando'], w: 'Lo pesado abajo evita caídas de objetos y esfuerzos al bajarlo.' },
        { q: '¿Dónde se guardan los agroquímicos?', o: ['Solo en su bodega, rotulados y lejos de los alimentos', 'En botellas de bebida para tenerlos a mano', 'Junto a la colación', 'En cualquier repisa disponible'], w: 'Rotulados y en su bodega, nadie los confunde ni se intoxica.' },
        { q: 'Una ruma alta e inclinada es segura mientras nadie la toque.', vf: false, w: 'Falso. Puede caer por una vibración o un roce. Se endereza o se avisa de inmediato.' } ] },
      { s: 'si_t1_o_fin', v: [
        { q: '¿Cómo dejas tu puesto al terminar el turno?', o: ['Limpio, ordenado y sin nada en el piso', 'Tal como quedó, lo ordena el siguiente', 'Con las herramientas en el piso para el otro día', 'Ordenado solo si viene una visita'], w: 'Deja tu puesto como te gustaría encontrarlo.' },
        { q: 'Al terminar el día quedan capachos y basura en el sector. ¿Qué haces?', o: ['Lo ordeno y limpio antes de irme', 'Lo dejo para el día siguiente', 'Lo junto en un rincón', 'Espero a que lo haga otra persona'], w: 'El orden es parte de tu trabajo: se deja todo limpio antes de irse.' },
        { q: 'El orden y el aseo son:', o: ['Parte del trabajo de cada uno', 'Tarea solo del personal de aseo', 'Algo que se hace si sobra tiempo', 'Responsabilidad solo de la jefatura'], w: 'Cada uno mantiene su puesto ordenado y limpio.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 5 · MANEJO MANUAL DE CARGAS
  // ======================================================================
  const capacho = (x, y) => `<rect x="${x}" y="${y - 22}" width="34" height="22" rx="3" fill="#ECEFF1" stroke="#90A4AE" stroke-width="1.5"/>${[0, 1, 2, 3, 4].map(i => `<circle cx="${x + 5 + i * 6}" cy="${y - 23}" r="3" fill="#C62828"/>`).join('')}`;
  const carga = (x, y) => pk(saco(x, y, 'SAL'), cajaC(x, y, 3), capacho(x, y), box(x, y, 32, 26));
  S.si_t1_c_ley = () => svg(fondo() + W(56, 165, { pose: 'carry' }) + box(64, 128, 34, 26, '25 kg') + W(160, 165, { pose: 'carry', hair: true }) + box(168, 128, 34, 26, '20 kg')
    + W(262, 165, { hair: true }) + `<ellipse cx="270" cy="124" rx="9" ry="11" fill="${(window.SI_VEST[E()] || {}).shirt || '#1565C0'}" stroke="#22303A" stroke-width="1.2"/>` + box(286, 165, 26, 20) + badge(299, 128, false, 10)
    + txt(60, 30, 'Hombres', 12) + txt(164, 22, 'Mujeres y', 12) + txt(164, 36, 'menores de 18', 12) + txt(266, 30, 'Embarazadas', 12));
  S.si_t1_c_eval = () => svg(fondo() + W(90, 165, { pose: 'point' }) + pk(saco(160, 165, 'SAL'), pallet(150, 165, 60) + cajaC(152, 159, 8) + cajaC(188, 159, 8), saco(160, 165, 'ABONO') + capacho(206, 165), box(156, 165, 34, 28) + box(194, 165, 34, 28)) + bubble(110, 24, '¿Cuánto pesa?', 116) + `<text x="270" y="70" font-size="34" font-weight="bold" text-anchor="middle" fill="#F9A825" font-family="Arial" class="an-pulse">?</text>`);
  S.si_t1_c_tec = () => svg(fondo() + divider() + W(60, 165, { pose: 'bend' }) + carga(84, 165) + badge(138, 30, false, 14) + W(225, 165, { pose: 'squat' }) + carga(231, 165) + badge(298, 30, true, 14));
  S.si_t1_c_giro = () => svg(fondo() + divider() + W(85, 165, { pose: 'twist' }) + carga(36, 132) + badge(138, 30, false, 14) + `<path d="M70,108 q-14,-8 -28,0" stroke="#E53935" stroke-width="2.5" fill="none"/>`
    + W(230, 165, { pose: 'walk', flip: true }) + carga(196, 134) + `<path d="M212,186 q20,8 40,0" stroke="#2E7D32" stroke-width="3" fill="none"/>` + badge(298, 30, true, 14));
  const transp = (x, y) => `<rect x="${x}" y="${y - 10}" width="74" height="5" fill="#E53935"/><circle cx="${x + 6}" cy="${y - 3}" r="3.5" fill="#263238"/><circle cx="${x + 68}" cy="${y - 3}" r="4" fill="#263238"/><rect x="${x + 72}" y="${y - 22}" width="8" height="18" fill="#E53935"/><line x1="${x + 76}" y1="${y - 22}" x2="${x + 96}" y2="${y - 62}" stroke="#263238" stroke-width="4"/><rect x="${x + 90}" y="${y - 68}" width="14" height="5" rx="2" fill="#263238"/>`;
  const carroMano = (x, y) => `<line x1="${x}" y1="${y - 4}" x2="${x}" y2="${y - 80}" stroke="#455A64" stroke-width="4"/><line x1="${x}" y1="${y - 4}" x2="${x + 34}" y2="${y - 4}" stroke="#455A64" stroke-width="4"/><circle cx="${x + 2}" cy="${y - 4}" r="6" fill="#263238"/>`;
  S.si_t1_c_ayuda = () => svg(fondo() + pk(
    transp(60, 172) + pallet(60, 166, 66) + box(62, 160, 30, 22) + box(94, 160, 30, 22) + box(62, 138, 30, 22) + box(94, 138, 30, 22) + W(178, 165, { pose: 'carry', flip: true }),
    transp(60, 172) + pallet(60, 166, 66) + cajaC(64, 160, 6) + cajaC(96, 160, 6) + W(178, 165, { pose: 'carry', flip: true }),
    tractor(110, 172, { flip: true }) + `<rect x="246" y="96" width="6" height="66" fill="#455A64"/><rect x="246" y="148" width="58" height="5" fill="#455A64"/>` + bin(250, 148, 'c') + W(50, 168, { pose: 'point' }),
    carroMano(150, 172) + box(154, 168, 30, 24) + box(154, 144, 30, 24) + box(154, 120, 30, 22) + W(128, 165, { pose: 'carry' })) + badge(292, 26, true, 13));
  S.si_t1_c_dos = () => svg(fondo() + W(80, 165, { pose: 'lift2' }) + W(240, 165, { pose: 'lift2', flip: true }) + pk(
    `<rect x="92" y="110" width="136" height="8" rx="2" fill="#B0BEC5" stroke="#607D8B"/>` + molde(110, 110, 5),
    `<rect x="92" y="110" width="136" height="8" rx="2" fill="#B0BEC5" stroke="#607D8B"/><rect x="104" y="118" width="6" height="20" fill="#78909C"/><rect x="210" y="118" width="6" height="20" fill="#78909C"/>`,
    escTirada(92, 120, 136),
    `<rect x="92" y="108" width="136" height="10" rx="2" fill="#8D6E63" stroke="#5D4037"/>`) + bubble(10, 18, 'A la cuenta de 3', 130) + bubble(200, 18, '¡Arriba!', 80));
  S.si_t1_c_rep = () => svg(fondo() + pk(
    `<rect x="20" y="118" width="110" height="8" fill="#B0BEC5"/><rect x="28" y="126" width="6" height="40" fill="#78909C"/><rect x="116" y="126" width="6" height="40" fill="#78909C"/>` + molde(48, 118, 3) + W(70, 185, { pose: 'lift2', s: .9 }),
    cinta(10, 165, 120) + W(70, 182, { pose: 'lift2', s: .9 }),
    tree(70, 150, 120) + capacho(40, 165) + W(110, 165, { pose: 'stop' }),
    W(66, 160, { pose: 'lift2', s: .85 }) + desk(20, 165) + `<rect x="20" y="131" width="90" height="30" fill="#8D6E63"/>`)
    + `<path d="M140,70 a16,16 0 1 1 -4,-12" stroke="#E53935" stroke-width="3" fill="none"/><path d="M134,52 l4,8 l6,-6z" fill="#E53935"/>` + W(240, 165, { pose: 'stop' }) + pl(240, 24, 'Pausa activa', '#2E7D32', 12) + clock(200, 60, 16));
  const piso = (x, y) => `<rect x="${x}" y="${y - 24}" width="40" height="24" rx="2" fill="#78909C" stroke="#455A64"/><rect x="${x + 4}" y="${y - 12}" width="32" height="3" fill="#455A64"/>`;
  S.si_t1_c_alto = () => svg((E() === 'agricola' ? bg() : fondo()) + divider() + `<rect x="100" y="40" width="54" height="4" fill="#78909C"/><rect x="150" y="40" width="4" height="110" fill="#78909C"/>` + W(80, 165, { pose: 'stop', face: 'worried' }) + box(86, 92, 30, 22) + badge(30, 30, false, 14)
    + `<rect x="270" y="74" width="46" height="4" fill="#78909C"/><rect x="312" y="74" width="4" height="76" fill="#78909C"/>` + piso(214, 165) + W(234, 141, { pose: 'carry', s: .95 }) + box(242, 104, 30, 22) + badge(186, 30, true, 14));

  SI_CONT.temas.push({
    id: 'cargas', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Manejo manual de cargas', thumb: 'si_t1_c_tec', mins: 15,
    learn: [
      { s: 'si_t1_c_ley', t: 'Ley 20.949: pesos máximos', x: 'La Ley 20.949 fija cuánto puede levantar una persona sin ayuda mecánica:<ul><li><b>Hombres:</b> hasta 25 kg.</li><li><b>Mujeres y menores de 18 años:</b> hasta 20 kg.</li><li><b>Embarazadas:</b> no pueden levantar, cargar ni arrastrar cargas.</li></ul>Son máximos, no metas: si la carga es incómoda o se levanta muchas veces, debe ser menor.' },
      { s: 'si_t1_c_eval', t: 'Antes de levantar, evalúa', x: '<ul><li><b>¿Cuánto pesa?</b> Un capacho lleno o un saco de fertilizante pesan más de lo que parece.</li><li>¿Tiene buen agarre?</li><li>¿El camino está libre y el piso seco?</li><li>¿Necesito una ayuda mecánica o un compañero?</li></ul>Si dudas, no la levantes solo.' },
      { s: 'si_t1_c_tec', t: 'Levanta con las piernas, no con la espalda', x: '<ul><li>Acércate a la carga y separa los pies.</li><li><b>Dobla las rodillas</b> y mantén la espalda recta.</li><li>Toma la carga firme, con toda la mano.</li><li>Levanta con la fuerza de las piernas, sin tirones.</li></ul>Agacharse con las piernas estiradas carga todo el esfuerzo en la espalda baja: así se producen los lumbagos.', k: 'Dobla las rodillas y mantén la espalda recta. Nunca levantes con las piernas estiradas.' },
      { s: 'si_t1_c_giro', t: 'Carga pegada al cuerpo y sin girar', x: 'Lleva la carga <b>pegada al cuerpo</b>, a la altura de la cintura. Si tienes que cambiar de dirección, <b>gira con los pies</b>, no con la cintura: torcer el tronco con peso es una de las principales causas de lesiones de espalda. La carga no debe taparte la vista.' },
      { s: 'si_t1_c_ayuda', t: 'Usa ayudas mecánicas', x: 'Si existe una ayuda mecánica, se usa: las pilas de bandejas van en el carro de cosecha y los postes, entre dos. Para sacos usa carros cuando existan. Revisa que esté en buen estado y empuja en vez de tirar. Los tractores solo los operan personas capacitadas y autorizadas.' },
      { s: 'si_t1_c_dos', t: 'Cargas entre dos', x: 'Si la carga es pesada, larga o incómoda, pide ayuda. Al cargar entre dos:<ul><li>Acuerden el camino antes de partir.</li><li>Uno da las órdenes: “a la cuenta de tres, arriba”.</li><li>Levanten y bajen al mismo tiempo, con la técnica correcta.</li><li>Caminen al mismo ritmo y no suelten de golpe.</li></ul>' },
      { s: 'si_t1_c_rep', t: 'Tareas repetitivas: pausas y rotación', x: 'Cosechar o podar por horas cansa hombros, muñecas y espalda. El protocolo <b>TMERT</b> del MINSAL evalúa estas tareas. Cuida tu cuerpo: <b>respeta las pausas, haz la pausa activa y alterna tareas</b> cuando se pueda. Avisa si sientes dolor u hormigueo que no se pasa.' },
      { s: 'si_t1_c_alto', t: 'Nada por sobre los hombros', x: 'Levantar o bajar cargas por sobre los hombros fuerza la espalda y los brazos, y la carga te puede caer encima. Usa una <b>escala o plataforma</b> adecuada y deja lo pesado en los niveles bajos. Nunca te subas a cajas, bandejas o pallets para alcanzar algo.' }
    ],
    quiz: [
      { s: 'si_t1_c_ley', v: [
        { q: 'Según la Ley 20.949, ¿cuál es el peso máximo que puede levantar un hombre sin ayuda mecánica?', o: ['25 kg', '50 kg', '35 kg', '30 kg'], w: 'La Ley 20.949 fija 25 kg para los hombres.' },
        { q: 'Según la Ley 20.949, ¿cuál es el peso máximo para mujeres y menores de 18 años?', o: ['20 kg', '25 kg', '15 kg', '30 kg'], w: 'Para mujeres y menores de 18 años el máximo es 20 kg.' },
        { q: 'Una trabajadora embarazada, ¿cuánto peso puede levantar a mano?', o: ['Ninguno: tiene prohibido el manejo manual de cargas', 'Hasta 20 kg, igual que las demás mujeres', 'Hasta 10 kg, siempre que lo haga con cuidado', 'Hasta 25 kg, si tiene experiencia en la tarea'], w: 'La ley prohíbe que las embarazadas hagan manejo manual de cargas.' } ] },
      { s: 'si_t1_c_ley', v: [
        { q: 'Los pesos de la Ley 20.949 son máximos: si la carga es incómoda o se levanta muchas veces, debe ser menor.', vf: true, w: 'Verdadero. Son límites, no metas. La forma, el agarre y la repetición también importan.' },
        { q: 'Los pesos máximos de la Ley 20.949 son:', o: ['Un límite que no se debe superar, no una meta', 'Una meta mínima que hay que cumplir', 'Una recomendación que se puede ignorar', 'Solo para trabajadores nuevos'], w: 'Son el máximo permitido; lo ideal es cargar menos y usar ayudas mecánicas.' },
        { q: 'Una carga de 18 kg es incómoda y la tienes que levantar muchas veces al día. ¿Qué es lo correcto?', o: ['Usar ayuda mecánica o pedir que se evalúe la tarea', 'Levantarla siempre de un tirón', 'Cargar dos a la vez para terminar antes', 'Nada, está bajo el máximo, así que no hay riesgo'], w: 'Aunque esté bajo el máximo, la repetición y la forma de la carga aumentan el riesgo.' } ] },
      { s: 'si_t1_c_eval', v: [
        { q: 'Antes de levantar una carga, ¿qué debes revisar?', o: ['Su peso, el agarre y que el camino esté libre', 'Solo el color y el tamaño de la caja', 'Solo quién la va a recibir al llegar', 'Nada, si ya conozco esa carga'], w: 'Evaluar antes evita sorpresas: peso, agarre, camino y si necesitas ayuda.' },
        { q: 'Debes mover un saco de fertilizante y dudas si puedes solo. ¿Qué haces?', o: ['Pido ayuda o uso una ayuda mecánica', 'Lo intento igual, de un tirón', 'Arrastro la carga por el piso', 'Espero a que termine el turno'], w: 'Si dudas, no la levantes solo: usa ayuda mecánica o pide apoyo.' },
        { q: '¿Por qué revisar el camino antes de cargar?', o: ['Porque con la carga en brazos ves menos el piso', 'Porque así se camina más rápido con la carga', 'Porque lo exige la mutualidad, nada más', 'No es necesario si conoces bien el lugar'], w: 'Un obstáculo o un piso mojado con carga en los brazos termina en caída.' } ] },
      { s: 'si_t1_c_tec', v: [
        { q: '¿Cuál es la forma correcta de levantar una carga del suelo?', o: ['Doblar las rodillas y mantener la espalda recta', 'Agacharse con las piernas estiradas', 'Levantar de un tirón con los brazos', 'Inclinarse y girar al mismo tiempo'], w: 'Así la fuerza la hacen las piernas y la espalda queda protegida.' },
        { q: 'Al levantar una carga, ¿con qué haces la fuerza?', o: ['Con las piernas', 'Con la espalda baja', 'Con los brazos estirados', 'Con el cuello y los hombros'], w: 'Las piernas son más fuertes que la espalda baja.' },
        { q: 'Agacharse con las piernas estiradas para levantar algo es correcto si la carga es liviana.', vf: false, w: 'Falso. Aunque sea liviana, esa postura daña la espalda baja con el tiempo.' } ] },
      { s: 'si_t1_c_giro', v: [
        { q: '¿Cómo debes llevar la carga?', o: ['Pegada al cuerpo, a la altura de la cintura', 'Con los brazos estirados, lejos del cuerpo', 'Sobre la cabeza', 'Colgando de una sola mano'], w: 'Cerca del cuerpo la espalda hace mucho menos esfuerzo.' },
        { q: 'Llevas una carga y debes cambiar de dirección. ¿Qué haces?', o: ['Giro con los pies, sin torcer la cintura', 'Giro solo la cintura, sin mover los pies', 'Me inclino hacia el lado', 'Lanzo la carga hacia donde va'], w: 'Girar con los pies evita torcer la columna con peso.' },
        { q: '¿Por qué no se debe torcer el tronco con una carga?', o: ['Porque es una causa principal de lesiones de espalda', 'Porque la carga se puede ensuciar o romper', 'Porque así solo se cansan un poco los brazos', 'Porque se pierde tiempo en cada movimiento'], w: 'Torcer con peso concentra el esfuerzo en la columna.' } ] },
      { s: 'si_t1_c_ayuda', v: [
        { q: 'Debes llevar muchas bandejas llenas al punto de entrega. ¿Qué usas?', o: ['El carro de cosecha', 'Muevo todo a mano, de a poco', 'Arrastramos la carga entre varios', 'Empujo la carga con los pies'], w: 'Si existe una ayuda mecánica, se usa: evita lesiones de espalda.' },
        { q: 'Si existe una ayuda mecánica para mover una carga, ¿qué corresponde?', o: ['Usarla, revisando que esté en buen estado', 'Cargar a mano para ir más rápido', 'Usarla solo si la jefatura mira', 'Usarla solo con cargas de más de 50 kg'], w: 'La ayuda mecánica es la primera opción cuando existe.' },
        { q: 'Con un carro o una transpaleta manual, ¿qué es mejor?', o: ['Empujar en vez de tirar', 'Tirar caminando de espaldas', 'Subirse encima para avanzar', 'Correr para que tome impulso'], w: 'Empujando ves el camino y tu espalda trabaja mejor.' } ] },
      { s: 'si_t1_c_dos', v: [
        { q: 'Al cargar algo entre dos personas, ¿qué es lo correcto?', o: ['Coordinar: uno da las órdenes y levantan a la vez', 'Que cada uno levante cuando se sienta listo', 'Que el más fuerte haga todo el esfuerzo', 'Soltar la carga de golpe al llegar'], w: 'La coordinación evita que el peso caiga de golpe sobre uno.' },
        { q: 'Antes de partir con una carga entre dos, ¿qué deben acordar?', o: ['El camino y quién da las órdenes', 'Quién termina antes su turno', 'Nada, se ve en el camino', 'Solo quién va adelante'], w: 'Acordar antes evita tropiezos y movimientos bruscos.' },
        { q: 'Una carga es larga e incómoda, aunque no muy pesada. ¿Qué haces?', o: ['Pido ayuda a un compañero', 'La llevo solo, arrastrándola', 'La cargo sobre un hombro, corriendo', 'La dejo donde está sin avisar'], w: 'Una carga incómoda también lesiona: se lleva entre dos.' } ] },
      { s: 'si_t1_c_rep', v: [
        { q: '¿Qué ayuda a prevenir lesiones en tareas repetitivas como cosechar?', o: ['Pausas, pausa activa y rotación', 'Trabajar sin pausas para terminar antes', 'Usar más fuerza para ir más rápido', 'Aguantar el dolor sin avisar'], w: 'Las pausas y la rotación dejan descansar los músculos y tendones.' },
        { q: '¿Qué protocolo del MINSAL evalúa las tareas repetitivas de las extremidades superiores?', o: ['TMERT', 'PREXOR', 'CEAL-SM', 'Radiación UV'], w: 'El protocolo TMERT evalúa los trastornos musculoesqueléticos de extremidades superiores.' },
        { q: 'Sientes dolor u hormigueo en la muñeca que no se pasa. ¿Qué haces?', o: ['Aviso a mi jefatura para que se evalúe', 'Lo aguanto hasta que se pase solo', 'Tomo un remedio y sigo igual', 'Trabajo más rápido para terminar antes'], w: 'Avisar a tiempo evita que una molestia se convierta en enfermedad.' } ] },
      { s: 'si_t1_c_alto', v: [
        { q: 'Debes dejar una caja en un lugar más alto que tus hombros. ¿Qué haces?', o: ['Uso una escala o plataforma adecuada', 'Me subo a una caja o una silla', 'Lanzo la caja hacia arriba', 'Estiro los brazos sobre la cabeza'], w: 'Con una plataforma la carga queda a una altura segura.' },
        { q: '¿Dónde se dejan las cargas pesadas en un estante?', o: ['En los niveles bajos', 'En el nivel más alto', 'Donde quede espacio', 'Sobre el estante, encima de todo'], w: 'Lo pesado abajo evita esfuerzos y caídas de objetos.' },
        { q: 'Subirse a una pila de bandejas para alcanzar algo alto es aceptable si es rápido.', vf: false, w: 'Falso. Puede volcarse o moverse. Se usa una escala o plataforma adecuada.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 6 · ACCIDENTES DEL TRABAJO Y DE TRAYECTO
  // ======================================================================
  const escudo = (cx, cy, s = 1, c = '#2E7D32') => `<path d="M${cx},${cy - 44 * s} l${40 * s},${14 * s} v${30 * s} q0,${36 * s} ${-40 * s},${52 * s} q${-40 * s},${-16 * s} ${-40 * s},${-52 * s} v${-30 * s}z" fill="${c}" stroke="#1B5E20" stroke-width="3"/>`;
  const casa = (x, y, c = '#FFCC80') => `<rect x="${x}" y="${y - 30}" width="40" height="30" fill="${c}" stroke="#8D6E63" stroke-width="1.5"/><path d="M${x - 6},${y - 28} l26,-22 l26,22z" fill="#D84315"/><rect x="${x + 15}" y="${y - 16}" width="10" height="16" fill="#6D4C41"/>`;
  const edificio = (x, y, w = 60, h = 50, c = '#90A4AE') => `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="${c}" stroke="#546E7A" stroke-width="1.5"/>${[0, 1, 2].map(i => [0, 1].map(j => `<rect x="${x + 8 + i * (w - 16) / 3}" y="${y - h + 8 + j * 16}" width="${(w - 16) / 3 - 4}" height="10" fill="#E3F2FD"/>`).join('')).join('')}`;
  S.si_t1_a_evit = () => svg(fondo() + W(90, 165, pk({ gloves: '#B3E5FC' }, { gloves: '#4FC3F7' }, {}, {})) + `<g class="an-pulse">${escudo(230, 96, 1.1)}<path d="M212,92 l12,14 l24,-26" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>` + pl(230, 168, 'Se pueden evitar', '#2E7D32', 12));
  S.si_t1_a_ley = () => svg(`<rect width="320" height="200" fill="#E3F2FD"/>` + escudo(160, 70, 1.05, '#1565C0') + txt(160, 66, 'LEY', 13, '#fff') + txt(160, 84, '16.744', 16, '#fff')
    + `<rect x="30" y="134" width="34" height="26" rx="3" fill="#FFB300"/><rect x="40" y="128" width="14" height="7" fill="#FFB300"/>` + pl(47, 168, 'Trabajo', '#455A64', 11)
    + `<rect x="138" y="134" width="44" height="22" rx="5" fill="#E53935"/><rect x="144" y="138" width="10" height="8" fill="#BBDEFB"/><rect x="158" y="138" width="10" height="8" fill="#BBDEFB"/><circle cx="148" cy="158" r="5" fill="#263238"/><circle cx="172" cy="158" r="5" fill="#263238"/>` + pl(160, 168, 'Trayecto', '#455A64', 11)
    + `<rect x="256" y="128" width="28" height="28" rx="3" fill="#fff" stroke="#D32F2F" stroke-width="2"/><path d="M270,132 v20 M260,142 h20" stroke="#D32F2F" stroke-width="5"/>` + pl(270, 168, 'Enfermedad', '#455A64', 11));
  S.si_t1_a_avisa = () => svg(fondo() + W(90, 165, { pose: 'carry', face: 'pain' }) + `<circle cx="104" cy="115" r="5" fill="#E53935" opacity=".8"/>` + jefe(230, 165) + bubble(70, 22, pk('Me corté', 'Me golpeé', 'Me torcí', 'Me torcí'), 96) + pl(160, 180, 'Aviso de inmediato', '#1565C0', 12));
  S.si_t1_a_achs = () => svg(cielo('#B0BEC5', 150) + edificio(150, 150, 150, 90, '#ECEFF1') + `<rect x="196" y="40" width="58" height="22" rx="3" fill="#00897B"/>` + txt(225, 56, window.CF_MUT().TEL ? window.CF_MUT().MUT : 'MUTUAL', window.CF_MUT().TEL ? 14 : 11, '#fff')
    + `<rect x="210" y="118" width="30" height="32" fill="#80CBC4"/>` + phone(40, 70, window.CF_MUT().TEL ? window.CF_MUT().MUT : 'Mutual') + W(110, 165, { pose: 'walk', face: 'pain' }) + pl(70, 140, 'Atención 24 horas', '#00897B', 11));
  S.si_t1_a_comp = () => svg(fondo() + `<g transform="rotate(-90 150 176)">${W(150, 176, { face: 'pain' })}</g>` + W(220, 165, { pose: 'squat', flip: true }) + `<g transform="translate(196,128) scale(.42)">${phone(0, 0, '')}</g>` + bubble(150, 22, 'No lo muevas', 120));
  S.si_t1_a_tray = () => svg(cielo('#A5D6A7', 150) + `<path d="M50,150 C110,170 200,130 270,150" stroke="#78909C" stroke-width="14" fill="none"/><path d="M50,150 C110,170 200,130 270,150" stroke="#2E7D32" stroke-width="4" fill="none" stroke-dasharray="10 6"/>`
    + `<path d="M150,148 C150,110 170,90 200,74" stroke="#E53935" stroke-width="3.5" fill="none" stroke-dasharray="6 5"/>` + casa(200, 76, '#E1BEE7') + `<circle cx="164" cy="104" r="9" fill="#E53935"/><path d="M159,99 l10,10 M169,99 l-10,10" stroke="#fff" stroke-width="2.5"/>`
    + casa(16, 150) + edificio(250, 150, 64, 56, '#B0BEC5') + pl(36, 160, 'Casa', '#455A64', 11) + pl(282, 160, 'Trabajo', '#455A64', 11) + pl(220, 6, 'Desvío personal', '#C62828', 11) + `<g class="t1Mov" style="--dx:90px"><rect x="70" y="146" width="24" height="12" rx="3" fill="#1E88E5"/><circle cx="76" cy="160" r="3.5" fill="#263238"/><circle cx="88" cy="160" r="3.5" fill="#263238"/></g>`);
  S.si_t1_a_pruebas = () => svg(fondo() + doc(30, 130, 'CARABINEROS') + `<g transform="translate(116,0)">${W(18, 140, { s: .7, shirt: '#8D6E63', pants: '#455A64', cofia: false, hat: false, apron: false, vest: false, helmet: false, gloves: false, boots: '#3E2723' })}${W(48, 140, { s: .7, shirt: '#AB47BC', pants: '#37474F', hair: true, cofia: false, hat: false, apron: false, vest: false, helmet: false, gloves: false, boots: '#3E2723' })}</g>` + doc(232, 130, 'ATENCIÓN')
    + pl(53, 148, 'Constancia', '#1565C0', 11) + pl(149, 148, 'Testigos', '#1565C0', 11) + pl(255, 148, 'Certificado', '#1565C0', 11));
  const cintaP = (x1, x2, y) => { let g = `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="8" fill="#FFEB3B"/>`; for (let x = x1; x < x2; x += 14) g += `<path d="M${x},${y + 8} l7,-8 h5 l-7,8z" fill="#212121"/>`; return g; };
  S.si_t1_a_grave = () => svg(fondo() + pk(tina(30, 165, false), cinta(20, 165, 140), tractor(10, 168, { driver: false }), desk(40, 165) + `<rect x="60" y="80" width="40" height="50" rx="2" fill="#B0BEC5" stroke="#78909C"/>`)
    + `<rect x="14" y="96" width="5" height="70" fill="#455A64"/><rect x="176" y="96" width="5" height="70" fill="#455A64"/>` + cintaP(16, 180, 106) + cintaP(16, 180, 130) + W(250, 165, { pose: 'stop', flip: true }) + bubble(196, 18, '¡No pasar!', 96));
  S.si_t1_a_notif = () => svg(`<rect width="320" height="200" fill="#F5F7FA"/>` + edificio(120, 186, 80, 60, '#CFD8DC') + pl(160, 104, 'Empresa', '#455A64', 11)
    + flecha(140, 108, 80, 72, '#1565C0') + flecha(180, 108, 240, 72, '#1565C0')
    + edificio(20, 64, 90, 46, '#B3E5FC') + pl(65, 70, 'SEREMI de Salud', '#1565C0', 10) + edificio(210, 64, 90, 46, '#C5E1A5') + pl(255, 70, 'Inspección del Trabajo', '#2E7D32', 10));

  SI_CONT.temas.push({
    id: 'accidente', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Accidentes del trabajo y de trayecto: qué hacer', thumb: 'si_t1_a_avisa', mins: 15,
    learn: [
      { s: 'si_t1_a_evit', t: 'Los accidentes se pueden evitar', x: 'Un accidente no es mala suerte: casi siempre hay una causa que se pudo controlar. Un paso que se saltó, un EPP que no se usó, una tijera sin funda o un equipo operado sin autorización. Si la causa se puede identificar, también se puede prevenir. Aquí verás qué hacer si, a pesar de todo, ocurre.' },
      { s: 'si_t1_a_ley', t: 'Ley 16.744: estás protegido', x: 'La Ley 16.744 es el seguro obligatorio contra accidentes del trabajo y enfermedades profesionales. Cubre:<ul><li><b>Accidente del trabajo:</b> lesión a causa o con ocasión del trabajo.</li><li><b>Accidente de trayecto:</b> en el camino directo entre tu casa y el trabajo.</li><li><b>Enfermedad profesional:</b> causada por el trabajo, como la sordera por ruido.</li></ul>La empresa está adherida a <b>{LAMUT}</b> y la atención es gratuita para ti.' },
      { s: 'si_t1_a_avisa', t: 'Avisa de inmediato, aunque parezca leve', x: 'Si te accidentas, <b>avisa de inmediato a tu jefatura</b>, aunque sea una torcedura en el pasillo. Lo que no se avisa a tiempo después es difícil de acreditar, y una lesión leve mal tratada se puede complicar. La empresa hace la denuncia (DIAT) y te envía a {LAMUT}.', k: 'Todo accidente se avisa de inmediato a la jefatura, aunque parezca leve.' },
      { s: 'si_t1_a_achs', t: 'Atención en {LAMUT}', x: 'En {LAMUT}, la mutualidad de tu empresa, di que fue un <b>accidente del trabajo</b>. Si es una urgencia, avisa a tu jefatura para el traslado (urgencias {MUT}: <b>{TEL}</b>). Si por la urgencia te llevan a otro centro de salud, avisa ahí mismo que fue un accidente laboral. Si la empresa no hace la denuncia, puedes hacerla tú o tu familia.' },
      { s: 'si_t1_a_comp', t: 'Si un compañero se accidenta', x: '<ul><li>Primero tu seguridad: no te expongas al mismo peligro. Si hay un tractor o un equipo en marcha, que se detenga antes de acercarte.</li><li>Si cayó o recibió un golpe fuerte, <b>no lo muevas</b>, salvo que siga en peligro: puede tener una lesión de columna.</li><li>Pide ayuda y avisa a la jefatura.</li><li>Acompáñalo hasta que llegue la ayuda.</li></ul>' },
      { s: 'si_t1_a_tray', t: 'Accidente de trayecto', x: 'Está cubierto el accidente en el <b>trayecto directo</b>, de ida o de regreso, entre tu casa y el trabajo. Si te desvías por motivos personales, por ejemplo a comprar o a visitar a alguien, deja de ser trayecto directo y no queda cubierto. Camina, maneja o pedalea atento: el trayecto también se previene.' },
      { s: 'si_t1_a_pruebas', t: 'Trayecto: cómo acreditarlo', x: 'Si te accidentas en el trayecto:<ul><li>Atiéndete de inmediato en {LAMUT} o, si es urgente, en el centro más cercano.</li><li><b>Avisa a tu jefatura</b> lo antes posible.</li><li>Reúne pruebas: <b>constancia en Carabineros</b>, datos de testigos y el certificado de la atención.</li></ul>Sin pruebas, el accidente de trayecto puede ser rechazado.' },
      { s: 'si_t1_a_grave', t: 'Accidente grave o fatal: suspende, aísla y avisa', x: 'Según la Res. Ex. 156 de la SUSESO, si ocurre un accidente fatal o grave (por ejemplo, con amputación, caída de más de 1,8 m de altura o que requiera maniobras de reanimación o rescate):<ul><li><b>Suspende</b> la faena en el área.</li><li><b>Aísla</b> el lugar y no muevas nada que no sea para el rescate.</li><li><b>Avisa</b> de inmediato a la jefatura.</li></ul>', k: 'Accidente grave o fatal: suspende la faena, aísla el área y avisa de inmediato.' },
      { s: 'si_t1_a_notif', t: 'La empresa notifica a la autoridad', x: 'Ante un accidente grave o fatal, la empresa debe <b>notificar de inmediato a la SEREMI de Salud y a la Inspección del Trabajo</b>, además de {LAMUT}. La faena se retoma solo cuando la autoridad lo autoriza, después de corregir las causas. Tu parte: no alterar el lugar, contar lo que viste y apoyar la investigación, que busca causas, no culpables.' }
    ],
    quiz: [
      { s: 'si_t1_a_evit', v: [
        { q: '¿Por qué decimos que los accidentes se pueden evitar?', o: ['Porque casi siempre tienen una causa controlable', 'Porque con suerte no le ocurren a nadie', 'Porque el seguro paga todos los gastos', 'Porque solo les ocurren a los nuevos'], w: 'Si la causa se identifica, se puede prevenir.' },
        { q: 'Un cosechero se lesiona el ojo con un alambre de la espaldera. ¿Qué pudo evitarlo?', o: ['Usar los lentes de seguridad', 'Trabajar más rápido para terminar antes', 'Tener más años de experiencia', 'Nada, fue mala suerte'], w: 'El accidente tenía una causa clara que se podía controlar.' },
        { q: 'Un accidente es solo mala suerte y no se puede prevenir.', vf: false, w: 'Falso. Casi siempre hay una causa que se pudo controlar.' } ] },
      { s: 'si_t1_a_ley', v: [
        { q: '¿Qué cubre el seguro de la Ley 16.744?', o: ['Accidentes del trabajo, de trayecto y enfermedades profesionales', 'Solo los accidentes ocurridos dentro de la empresa', 'Solo las enfermedades comunes, como la gripe', 'Solo los accidentes que dan licencia médica larga'], w: 'El seguro cubre los tres casos.' },
        { q: '¿Cuánto pagas por la atención de un accidente del trabajo en {LAMUT}?', o: ['Nada, es gratuita para el trabajador', 'La mitad del valor', 'Lo que no cubra Fonasa o la Isapre', 'Un copago fijo por consulta'], w: 'Las prestaciones de la Ley 16.744 son gratuitas para el trabajador.' },
        { q: 'La sordera causada por años de ruido en el trabajo es:', o: ['Una enfermedad profesional', 'Un accidente de trayecto', 'Una enfermedad común sin cobertura', 'Un problema solo de la edad'], w: 'Es una enfermedad causada por el trabajo, cubierta por la Ley 16.744.' } ] },
      { s: 'si_t1_a_avisa', v: [
        { q: 'Te haces una torcedura leve al caminar entre hileras. ¿Qué haces?', o: ['Aviso de inmediato a mi jefatura', 'No aviso porque es leve', 'Aviso solo si mañana me duele', 'Me curo en la casa y no digo nada'], w: 'Todo accidente se avisa de inmediato, aunque parezca leve.' },
        { q: '¿Por qué hay que avisar el accidente de inmediato?', o: ['Porque después cuesta acreditarlo y la lesión se complica', 'Porque así te dan el resto del día libre', 'Porque así el accidente no se investiga', 'Solo para llenar un formulario de la empresa'], w: 'Avisar a tiempo asegura la atención y la cobertura.' },
        { q: '¿Quién hace normalmente la denuncia del accidente (DIAT)?', o: ['La empresa, después de que avisas', 'El compañero que lo vio', 'Carabineros', 'Nadie, si el accidente fue leve'], w: 'La empresa hace la denuncia; si no la hace, puedes hacerla tú o tu familia.' } ] },
      { s: 'si_t1_a_achs', v: [
        { q: '¿Dónde te atienden si tienes un accidente del trabajo?', o: ['En {LAMUT}, la mutualidad de mi empresa', 'En una consulta particular, pagando yo', 'En la farmacia más cercana', 'En ninguna parte si puedo seguir trabajando'], w: 'Los accidentes del trabajo los atiende la mutualidad a la que está adherida tu empresa, sin costo para ti.' },
        { q: 'Al llegar a {LAMUT} por un accidente del trabajo, ¿qué debes decir?', o: ['Que fue un accidente del trabajo', 'Que fue un accidente en la casa', 'Nada, para no tener problemas', 'Que fue una enfermedad común'], w: 'Decir que fue laboral asegura la atención del seguro.' },
        { q: 'Si la empresa no hace la denuncia de tu accidente, ¿qué puedes hacer?', o: ['Hacerla yo o mi familia', 'Nada, queda sin cobertura', 'Esperar un año', 'Pagar la atención en forma particular'], w: 'La ley permite que el trabajador o su familia hagan la denuncia.' } ] },
      { s: 'si_t1_a_comp', v: [
        { q: 'Un compañero cayó y se golpeó fuerte. ¿Qué haces?', o: ['No lo muevo, pido ayuda y aviso a la jefatura', 'Lo levanto de inmediato para que camine', 'Lo siento y le doy agua', 'Lo llevo en mi auto sin avisar'], w: 'Moverlo puede agravar una lesión de columna. Se pide ayuda y se avisa.' },
        { q: 'Antes de ayudar a un compañero accidentado, ¿qué es lo primero?', o: ['Asegurarme de no exponerme al mismo peligro', 'Moverlo rápido aunque siga el peligro', 'Sacarle una foto', 'Buscar al culpable'], w: 'Si te expones, puede haber dos accidentados en vez de uno.' },
        { q: '¿Por qué no se mueve a alguien que cayó de altura o recibió un golpe fuerte?', o: ['Porque puede tener una lesión de columna', 'Porque se le ensucia la ropa de trabajo', 'Porque lo prohíbe el seguro de accidentes', 'Porque así se recupera solo más rápido'], w: 'Moverlo mal puede agravar una lesión de columna.' } ] },
      { s: 'si_t1_a_tray', v: [
        { q: '¿Qué es un accidente de trayecto?', o: ['El que ocurre en el camino directo entre tu casa y el trabajo', 'Cualquier accidente del fin de semana', 'El que ocurre en vacaciones', 'El que ocurre al salir a comprar después del turno'], w: 'Solo el camino directo, de ida o de regreso, está cubierto.' },
        { q: 'Al salir del trabajo pasas a visitar a un familiar y ahí te accidentas. ¿Es accidente de trayecto?', o: ['No, porque hubo un desvío por motivos personales', 'Sí, siempre que sea el mismo día', 'Sí, si fue antes de las diez de la noche', 'Sí, si avisas al día siguiente'], w: 'Un desvío por motivos personales interrumpe el trayecto directo.' },
        { q: 'El accidente en el trayecto directo de la casa al trabajo está cubierto por la Ley 16.744.', vf: true, w: 'Verdadero. El seguro cubre el trayecto directo, de ida o de regreso.' } ] },
      { s: 'si_t1_a_pruebas', v: [
        { q: '¿Qué te sirve para acreditar un accidente de trayecto?', o: ['Constancia en Carabineros, testigos y certificado médico', 'Una foto del reloj tomada en el lugar del hecho', 'Un mensaje de texto enviado a un amigo ese día', 'Nada, basta con contárselo a la jefatura después'], w: 'Esas pruebas demuestran dónde, cuándo y cómo ocurrió.' },
        { q: 'Te accidentas en el trayecto. ¿Qué haces?', o: ['Me atiendo, aviso a la jefatura y reúno pruebas', 'Me voy a la casa y aviso la próxima semana', 'Solo lo cuento a mis compañeros', 'No aviso porque no pasó en la empresa'], w: 'Atención, aviso y pruebas aseguran la cobertura del seguro.' },
        { q: '¿Qué puede pasar con un accidente de trayecto sin pruebas?', o: ['Puede ser rechazado', 'Se aprueba igual, sin revisar', 'Se paga el doble', 'Lo cubre la Isapre de forma automática'], w: 'Sin pruebas cuesta acreditar que ocurrió en el trayecto directo.' } ] },
      { s: 'si_t1_a_grave', v: [
        { q: 'Ocurre un accidente grave en tu área. ¿Qué se hace?', o: ['Suspender la faena, aislar el área y avisar de inmediato', 'Limpiar el lugar y seguir trabajando normalmente', 'Ordenar todo rápido para que no se note', 'Esperar al día siguiente para avisar a la jefatura'], w: 'Así lo exige la Res. Ex. 156 de la SUSESO.' },
        { q: '¿Cuál de estos es un accidente grave según la SUSESO?', o: ['Uno con amputación o que requiere maniobras de reanimación', 'Un corte superficial que se cura con una venda', 'Una torcedura leve sin reposo', 'Un golpe menor sin lesión'], w: 'Amputación, caída de más de 1,8 m o necesidad de reanimación o rescate son ejemplos de accidente grave.' },
        { q: 'Después de un accidente grave, ¿qué NO debes hacer en el lugar?', o: ['Mover o limpiar lo que no sea para el rescate', 'Aislar el área del accidente', 'Avisar de inmediato a la jefatura', 'Mantener alejadas a las personas'], w: 'El lugar se mantiene sin alterar para investigar las causas.' } ] },
      { s: 'si_t1_a_notif', v: [
        { q: 'Ante un accidente grave o fatal, ¿a quién notifica la empresa de inmediato?', o: ['A la SEREMI de Salud y a la Inspección del Trabajo', 'Solo a la familia del trabajador accidentado', 'Solo a los clientes y proveedores', 'A nadie, porque se investiga internamente'], w: 'La empresa debe avisar a ambas autoridades, además de {LAMUT}.' },
        { q: 'Después de un accidente grave con la faena suspendida, ¿cuándo se puede retomar?', o: ['Cuando la autoridad lo autoriza', 'Apenas se limpie el lugar', 'Al día siguiente, sin más trámite', 'Cuando lo decida cualquier trabajador'], w: 'La faena se reanuda solo con autorización y con las causas corregidas.' },
        { q: 'La investigación de un accidente busca las causas para corregirlas, no culpables.', vf: true, w: 'Verdadero. Se investiga para que no vuelva a ocurrir.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 7 · PREVENCIÓN DE INCENDIOS Y USO DEL EXTINTOR
  // ======================================================================
  const tablero = (x, y) => `<rect x="${x}" y="${y - 70}" width="44" height="60" rx="3" fill="#B0BEC5" stroke="#607D8B" stroke-width="2"/><path d="M${x + 24},${y - 62} l-8,20 h8 l-6,18 l14,-24 h-8 l6,-14z" fill="#FFC107" stroke="#263238" stroke-width="1"/>`;
  const zapatilla = (x, y) => `<rect x="${x}" y="${y - 10}" width="70" height="12" rx="3" fill="#ECEFF1" stroke="#90A4AE"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${x + 4 + i * 13}" y="${y - 18}" width="9" height="10" rx="2" fill="#263238"/><path d="M${x + 8 + i * 13},${y - 18} q${-6 + i * 3},-20 ${-14 + i * 7},-36" stroke="#263238" stroke-width="2" fill="none"/>`).join('')}`;
  S.si_t1_f_tri = () => svg(`<rect width="320" height="200" fill="#FFF8E1"/><path d="M160,22 L278,172 L42,172 Z" fill="#FFE0B2" stroke="#E65100" stroke-width="6" stroke-linejoin="round"/>` + fuego(160, 150, 1.5)
    + pl(74, 84, 'Oxígeno', '#1565C0', 12) + pl(250, 84, 'Calor', '#C62828', 12) + pl(160, 176, 'Combustible', '#5D4037', 12));
  S.si_t1_f_clases = () => svg(`<rect width="320" height="200" fill="#F5F7FA"/>` + [
    ['A', '#2E7D32', `<path d="M0,-18 L18,14 H-18Z" fill="#2E7D32"/>`, `<rect x="-14" y="-10" width="28" height="20" fill="#C89B5E" stroke="#8D6E3F"/><rect x="-3" y="-10" width="6" height="20" fill="#E0C08A"/>`],
    ['B', '#C62828', `<rect x="-16" y="-16" width="32" height="32" fill="#C62828"/>`, `<rect x="-10" y="-14" width="20" height="26" rx="3" fill="#FFB300" stroke="#E65100"/><rect x="-4" y="-19" width="8" height="5" fill="#37474F"/>`],
    ['C', '#1565C0', `<circle r="18" fill="#1565C0"/>`, `<path d="M2,-16 l-10,16 h8 l-6,14 l14,-18 h-8 l6,-12z" fill="#FFC107" stroke="#263238"/>`],
    ['D', '#F9A825', `<path d="M0,-19 l5,12 h13 l-10,8 l4,13 l-12,-8 l-12,8 l4,-13 l-10,-8 h13z" fill="#F9A825"/>`, `<rect x="-14" y="-6" width="28" height="12" fill="#90A4AE" stroke="#546E7A"/>`],
    ['K', '#263238', `<path d="M-9,-16 h18 l9,16 l-9,16 h-18 l-9,-16z" fill="#263238"/>`, `<ellipse cx="-2" cy="4" rx="14" ry="6" fill="#455A64"/><rect x="10" y="1" width="14" height="4" fill="#455A64"/>`]
  ].map(([l, c, shp, ico], i) => { const cx = 34 + i * 63; return `<rect x="${cx - 28}" y="20" width="56" height="150" rx="8" fill="#fff" stroke="${c}" stroke-width="2"/><g transform="translate(${cx},56)">${shp}</g>` + txt(cx, 63, l, 16, '#fff') + `<g transform="translate(${cx},118)">${ico}</g>`; }).join('')
    + txt(34, 188, 'Sólidos', 10) + txt(97, 188, 'Líquidos', 10) + txt(160, 188, 'Eléctricos', 10) + txt(223, 188, 'Metales', 10) + txt(286, 188, 'Cocina', 10));
  S.si_t1_f_prev = () => svg(fondo() + pk(
    tablero(190, 160) + `<rect x="236" y="104" width="34" height="46" fill="#C89B5E" stroke="#8D6E3F"/><rect x="242" y="80" width="30" height="24" fill="#C89B5E" stroke="#8D6E3F"/>` + humo(214, 86) + W(90, 165, { pose: 'point', face: 'worried' }),
    `<rect x="160" y="100" width="40" height="50" rx="3" fill="#455A64"/><rect x="168" y="108" width="24" height="10" fill="#81C784"/><path d="M180,150 q20,10 40,0" stroke="#263238" stroke-width="3" fill="none"/>` + pallet(214, 165) + cajaC(218, 159, 7) + cajaC(244, 159, 6) + humo(200, 96) + W(80, 165, { pose: 'point', face: 'worried' }),
    tree(270, 150, 110) + `<path d="M150,172 l40,-20 l-6,22 M160,174 l50,-10 M170,166 l-20,-14" stroke="#6D4C41" stroke-width="4"/>` + fuego(182, 168, .9) + humo(184, 120) + W(80, 168, { pose: 'stop' }),
    desk(170, 165) + zapatilla(110, 172) + humo(140, 150) + W(60, 165, { pose: 'point', face: 'worried' })) + badge(292, 30, false));
  S.si_t1_f_tipos = () => svg(`<rect width="320" height="200" fill="#F5F7FA"/>` + divider() + ext(66, 140, 'PQS', 1.6) + ext(222, 140, 'CO2', 1.6)
    + pl(80, 150, 'PQS', '#C62828', 12) + pl(240, 150, 'CO2', '#C62828', 12)
    + `<g transform="translate(46,184) scale(.55)"><path d="M0,-18 L18,14 H-18Z" fill="#2E7D32"/></g><g transform="translate(80,184) scale(.55)"><rect x="-16" y="-16" width="32" height="32" fill="#C62828"/></g><g transform="translate(114,184) scale(.55)"><circle r="18" fill="#1565C0"/></g>`
    + `<g transform="translate(240,184) scale(.55)"><circle r="18" fill="#1565C0"/></g>` + `<path d="M276,174 l-6,10 h5 l-4,9 l9,-12 h-5 l4,-7z" fill="#FFC107" stroke="#263238"/>`);
  const tileU = (i, inner) => `<rect x="${6 + i * 78}" y="20" width="74" height="150" rx="8" fill="#fff" stroke="#CFD8DC" stroke-width="2"/><circle cx="${43 + i * 78}" cy="38" r="12" fill="#C62828"/>` + txt(43 + i * 78, 43, String(i + 1), 13, '#fff') + inner;
  S.si_t1_f_uso = () => svg(`<rect width="320" height="200" fill="#F5F7FA"/>`
    + tileU(0, ext(32, 150, 'PQS', 1) + `<g class="t1Mov" style="--dx:16px"><circle cx="52" cy="98" r="6" fill="none" stroke="#FFC107" stroke-width="3"/><line x1="46" y1="98" x2="40" y2="98" stroke="#FFC107" stroke-width="3"/></g>`)
    + tileU(1, fuego(140, 150, .7) + `<line x1="94" y1="150" x2="126" y2="150" stroke="#90A4AE" stroke-width="3" stroke-dasharray="4 3"/>` + flecha(94, 140, 124, 150, '#1565C0'))
    + tileU(2, `<rect x="182" y="96" width="40" height="8" rx="3" fill="#263238" transform="rotate(-12 182 100)"/><rect x="182" y="110" width="40" height="8" rx="3" fill="#455A64"/><circle cx="214" cy="104" r="12" fill="${SK}" stroke="#22303A"/>` + flecha(200, 70, 200, 92, '#1565C0'))
    + tileU(3, fuego(277, 150, .7) + `<path d="M250,120 q27,-20 54,0" stroke="#1565C0" stroke-width="3" fill="none"/><path d="M304,120 l-8,-2 l2,8z" fill="#1565C0"/><path d="M250,120 l8,-2 l-2,8z" fill="#1565C0"/>`)
    + pl(43, 176, 'Seguro', '#455A64', 10) + pl(121, 176, 'Base', '#455A64', 10) + pl(199, 176, 'Presiona', '#455A64', 10) + pl(277, 176, 'Barrido', '#455A64', 10));
  S.si_t1_f_uso2 = () => svg(fondo() + W(80, 165, { pose: 'point' }) + ext(96, 136, 'PQS', .6) + `<g class="an-flash"><path d="M112,106 Q170,128 218,164" stroke="#90A4AE" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="3 5" opacity=".9"/></g>` + fuego(236, 168, 1)
    + `<path d="M20,70 q14,-6 28,0 M14,86 q14,-6 28,0" stroke="#78909C" stroke-width="2.5" fill="none"/>` + pl(36, 44, 'Viento', '#78909C', 10) + `<line x1="100" y1="186" x2="214" y2="186" stroke="#263238" stroke-width="2"/><path d="M100,186 l8,-4 v8z M214,186 l-8,-4 v8z" fill="#263238"/>` + pl(157, 170, '2 a 3 m', '#263238', 11));
  S.si_t1_f_elec = () => svg((E() === 'agricola' ? bg() : fondo()) + divider() + tablero(92, 150) + fuego(114, 92, .5) + W(46, 165, { pose: 'carry' }) + `<path d="M56,110 h18 l-3,16 h-12z" fill="#1E88E5"/><g class="t1Gota">${drop(84, 104, .5)}${drop(90, 112, .5)}</g>` + badge(138, 26, false, 14)
    + tablero(252, 150) + W(206, 165, { pose: 'point' }) + ext(218, 136, 'CO2', .6) + `<path d="M236,106 q8,-8 18,-10" stroke="#ECEFF1" stroke-width="8" fill="none" stroke-linecap="round"/>` + badge(298, 26, true, 14));
  S.si_t1_f_ubic = () => svg((E() === 'inversiones' ? oficina() : bg()) + `<rect x="74" y="40" width="44" height="18" rx="2" fill="#C62828"/>` + txt(96, 53, 'EXTINTOR', 9, '#fff') + `<rect x="80" y="64" width="34" height="4" fill="#455A64"/>` + ext(84, 128, 'PQS', 1.2)
    + `<line x1="140" y1="128" x2="140" y2="164" stroke="#263238" stroke-width="2"/><path d="M140,128 l-4,7 h8z M140,164 l-4,-7 h8z" fill="#263238"/>` + pl(170, 136, '1,30 m', '#263238', 11)
    + `<circle cx="250" cy="76" r="44" fill="#fff" stroke="#455A64" stroke-width="5"/><path d="M216,90 A36,36 0 0 1 228,50" stroke="#E53935" stroke-width="8" fill="none"/><path d="M230,48 A36,36 0 0 1 272,48" stroke="#43A047" stroke-width="8" fill="none"/><path d="M274,50 A36,36 0 0 1 286,90" stroke="#E53935" stroke-width="8" fill="none"/><line x1="250" y1="80" x2="254" y2="46" stroke="#263238" stroke-width="3"/><circle cx="250" cy="80" r="4" fill="#263238"/>` + `<line x1="210" y1="100" x2="112" y2="86" stroke="#455A64" stroke-width="1.5" stroke-dasharray="4 3"/>`);
  S.si_t1_f_evac = () => svg((E() === 'agricola' ? campo() : patio()) + `<rect x="232" y="46" width="78" height="40" rx="4" fill="#2E7D32"/>` + txt(271, 62, 'ZONA DE', 10, '#fff') + txt(271, 77, 'SEGURIDAD', 10, '#fff') + `<rect x="268" y="86" width="5" height="64" fill="#607D8B"/>`
    + W(120, 170, { pose: 'walk' }) + W(70, 170, { pose: 'walk' }) + flecha(150, 186, 230, 186, '#2E7D32') + bubble(20, 18, '¡Fuego!', 80) + humo(30, 100));

  SI_CONT.temas.push({
    id: 'incendios', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Prevención de incendios y uso del extintor', thumb: 'si_t1_f_uso2', mins: 15,
    learn: [
      { s: 'si_t1_f_tri', t: 'Cómo se produce el fuego', x: 'Para que haya fuego se necesitan tres cosas a la vez: <b>combustible</b> (lo que se quema), <b>calor</b> (una chispa o una llama) y <b>oxígeno</b> (el aire). Si falta una, el fuego no empieza o se apaga. Prevenir incendios es mantener separados el calor y el combustible.' },
      { s: 'si_t1_f_clases', t: 'Clases de fuego', x: '<ul><li><b>Clase A:</b> sólidos como cartón, papel, madera, plásticos o pasto seco.</li><li><b>Clase B:</b> líquidos y gases inflamables como combustible, aceite o gas.</li><li><b>Clase C:</b> equipos eléctricos energizados: tableros, motores, cargadores.</li><li><b>Clase D:</b> metales combustibles. <b>Clase K:</b> aceites de cocina.</li></ul>La clase de fuego define qué extintor usar.' },
      { s: 'si_t1_f_prev', t: 'Prevención en tu trabajo', x: '<ul><li><b>Prohibido hacer quemas o fogatas</b> por tu cuenta: los restos de poda se manejan como indique la empresa.</li><li>No botes colillas ni vidrios en el pasto seco.</li><li>No dejes el tractor ni la desbrozadora calientes sobre pasto seco.</li><li>Carga combustible con el motor apagado y frío, sin fumar.</li></ul>' },
      { s: 'si_t1_f_tipos', t: 'Extintores PQS y CO2', x: '<ul><li><b>PQS (polvo químico seco):</b> para fuegos clase A, B y C: sólidos, líquidos y gases inflamables, y equipos eléctricos.</li><li><b>CO2 (dióxido de carbono):</b> el indicado para fuegos en <b>equipos eléctricos</b>, porque no conduce la electricidad ni deja residuos que dañen los equipos.</li></ul>Lee la etiqueta del extintor: indica las clases de fuego en que se puede usar.' },
      { s: 'si_t1_f_uso', t: 'Cómo usar el extintor', x: '<ul><li><b>1. Quita el seguro</b> (pasador).</li><li><b>2. Apunta a la base</b> del fuego, no a las llamas.</li><li><b>3. Presiona</b> la manilla.</li><li><b>4. Descarga en barrido</b>, de lado a lado, hasta apagarlo.</li></ul>Hazlo a 2 o 3 metros del fuego, con el viento a tu espalda y una salida detrás de ti.' },
      { s: 'si_t1_f_uso2', t: 'El extintor es para amagos', x: 'El extintor sirve para <b>amagos</b>: fuegos pequeños que recién empiezan. Úsalo solo si estás capacitado, el fuego es pequeño y tienes una salida a tu espalda. Si el fuego crece, hay mucho humo o no se apaga con un extintor, <b>sal de inmediato y da la alarma</b>. Después de usarlo, avisa: un extintor usado debe recargarse.', k: 'Si el fuego crece o hay mucho humo, sal de inmediato y da la alarma.' },
      { s: 'si_t1_f_elec', t: 'Fuego eléctrico: nunca agua', x: 'Si se incendia un tablero, un motor o el tablero de una bomba de riego, <b>nunca uses agua</b>: conduce la electricidad y te puedes electrocutar. Si sabes dónde, corta la energía y usa el extintor de <b>CO2</b>. Da la alarma de inmediato.', k: 'En un fuego eléctrico nunca uses agua.' },
      { s: 'si_t1_f_ubic', t: 'Extintores: ubicación y cuidado', x: '<ul><li>Conoce dónde están los extintores de tu área.</li><li><b>Nunca los tapes</b> con cajas ni los cambies de lugar.</li><li>Deben estar señalizados y a una altura máxima de <b>1,30 m</b> hasta su base (DS 594).</li><li>Revisa que la aguja del manómetro esté en verde y que tenga su seguro.</li></ul>Si un extintor está descargado o dañado, avisa.' },
      { s: 'si_t1_f_evac', t: 'Si hay un incendio: alarma y evacuación', x: '<ul><li><b>Da la alarma:</b> grita “¡fuego!” y avisa de inmediato a tu jefatura.</li><li>Si no puedes apagarlo, <b>evacúa</b> por la vía señalizada, caminando rápido, sin correr.</li><li>Si hay humo, avanza agachado, cerca del piso.</li><li>Ve a la <b>zona de seguridad</b> y no vuelvas por tus cosas.</li></ul>' }
    ],
    quiz: [
      { s: 'si_t1_f_tri', v: [
        { q: '¿Qué tres elementos forman el triángulo del fuego?', o: ['Combustible, calor y oxígeno', 'Agua, aire y tierra', 'Humo, calor y luz', 'Combustible, agua y humo'], w: 'Sin uno de esos tres, el fuego no puede existir.' },
        { q: 'Si a un fuego le quitas uno de sus tres elementos, ¿qué pasa?', o: ['Se apaga o no puede empezar', 'Crece más rápido', 'Cambia de color', 'No pasa nada'], w: 'Por eso apagar un fuego es quitarle el calor, el combustible o el oxígeno.' },
        { q: '¿Qué significa prevenir incendios?', o: ['Mantener separados el calor y el combustible', 'Dejar el cartón cerca de los motores para retirarlo luego', 'Guardar el combustible junto a la estufa', 'Tener un balde de agua junto a cada tablero'], w: 'Si el calor no alcanza al combustible, el fuego no empieza.' } ] },
      { s: 'si_t1_f_clases', v: [
        { q: 'Un fuego en cartón, papel o madera es de clase:', o: ['A', 'B', 'C', 'K'], w: 'La clase A corresponde a los sólidos.' },
        { q: 'Un fuego en combustible o aceite de motor es de clase:', o: ['B', 'A', 'C', 'D'], w: 'La clase B corresponde a líquidos y gases inflamables.' },
        { q: 'Un fuego en un tablero eléctrico energizado es de clase:', o: ['C', 'A', 'B', 'K'], w: 'La clase C corresponde a equipos eléctricos energizados.' } ] },
      { s: 'si_t1_f_prev', v: [
        { q: '¿Cuál de estas acciones previene un incendio en el campo?', o: ['No hacer quemas ni fogatas por cuenta propia', 'Dejar el tractor caliente sobre el pasto seco', 'Botar colillas en el pasto seco', 'Tapar el extintor para que no se ensucie'], w: 'Prevenir es mantener el calor lejos de lo que se puede quemar.' },
        { q: 'Ves que alguien prepara una quema de restos de poda sin autorización. ¿Qué haces?', o: ['Le digo que está prohibido y aviso', 'Sigo trabajando, seguro no es nada grave', 'Lo dejo, si hay poco viento', 'Aviso recién al final de la jornada'], w: 'Actuar a tiempo evita que una señal de alerta termine en incendio.' },
        { q: '¿Cómo se le carga combustible a la desbrozadora?', o: ['Con el motor apagado y frío, sin fumar', 'Con el motor andando para no perder tiempo', 'Fumando, si es al aire libre', 'Sobre el pasto seco'], w: 'Así se evita que el calor o una chispa alcance algo que se pueda quemar.' } ] },
      { s: 'si_t1_f_tipos', v: [
        { q: '¿Para qué fuegos sirve el extintor de PQS?', o: ['Fuegos clase A, B y C', 'Solo fuegos clase A', 'Solo fuegos clase K', 'Solo fuegos clase D'], w: 'El PQS sirve para fuegos clase A, B y C.' },
        { q: '¿Cuál es el extintor indicado para un fuego en un equipo eléctrico?', o: ['CO2', 'Agua', 'Espuma', 'Un balde de arena mojada'], w: 'El CO2 no conduce la electricidad ni deja residuos.' },
        { q: '¿Por qué el CO2 es el indicado para equipos eléctricos?', o: ['Porque no conduce la electricidad y no deja residuos', 'Porque moja el equipo y así lo enfría rápido', 'Porque es más barato que los otros extintores', 'Porque pesa menos que los demás extintores'], w: 'Apaga sin riesgo eléctrico y sin dañar el equipo.' } ] },
      { s: 'si_t1_f_uso', v: [
        { q: '¿Cuál es el orden correcto para usar un extintor?', o: ['Quitar el seguro, apuntar a la base, presionar y barrer', 'Presionar, quitar el seguro y apuntar a las llamas', 'Apuntar a las llamas, presionar y soltar', 'Quitar el seguro, apuntar al humo y presionar'], w: 'Seguro, base, presionar y barrido: así se apaga un amago.' },
        { q: '¿Hacia dónde se apunta el extintor?', o: ['A la base del fuego', 'A la punta de las llamas', 'Al humo', 'Al techo, sobre el fuego'], w: 'El fuego nace en la base: ahí se apaga.' },
        { q: '¿Cómo se descarga el extintor sobre el fuego?', o: ['En barrido, de lado a lado', 'En un solo punto, fijo', 'En círculos sobre las llamas', 'A chorros cortos hacia arriba'], w: 'El barrido cubre toda la base del fuego.' } ] },
      { s: 'si_t1_f_uso2', v: [
        { q: '¿Cuándo debes intentar apagar un fuego con un extintor?', o: ['Si es un amago, estoy capacitado y tengo una salida detrás', 'Siempre, aunque el fuego ya esté grande', 'Solo si hay mucho humo y poca visibilidad', 'Solo si nadie más ha visto el fuego todavía'], w: 'El extintor es para fuegos pequeños, con una vía de escape segura.' },
        { q: 'Usas el extintor, pero el fuego sigue creciendo. ¿Qué haces?', o: ['Salgo de inmediato y doy la alarma', 'Me quedo hasta apagarlo cueste lo que cueste', 'Le echo agua', 'Me acerco más al fuego'], w: 'Si no se apaga con un extintor, ya no es un amago: se evacúa.' },
        { q: '¿A qué distancia y con el viento hacia dónde se usa el extintor?', o: ['A 2 o 3 metros, con el viento a la espalda', 'Pegado al fuego, con el viento de frente', 'A 10 metros, con el viento de lado', 'A medio metro, sin importar el viento'], w: 'Así el polvo llega al fuego y el humo no va hacia ti.' } ] },
      { s: 'si_t1_f_elec', v: [
        { q: 'En un fuego eléctrico se puede usar agua si es poca.', vf: false, w: 'Falso. El agua conduce la electricidad: nunca se usa en un fuego eléctrico.' },
        { q: 'Se incendia el tablero de una bomba de riego. ¿Qué NO debes hacer?', o: ['Echarle agua', 'Cortar la energía si sabes dónde', 'Usar el extintor de CO2', 'Dar la alarma'], w: 'El agua en un fuego eléctrico puede electrocutarte.' },
        { q: '¿Por qué no se usa agua en un fuego eléctrico?', o: ['Porque conduce la electricidad y te puedes electrocutar', 'Porque se evapora muy rápido con el calor', 'Porque mancha y oxida el equipo eléctrico', 'Porque apaga el fuego demasiado lento'], w: 'La corriente puede pasar por el agua hasta tu cuerpo.' } ] },
      { s: 'si_t1_f_ubic', v: [
        { q: 'Según el DS 594, ¿a qué altura máxima debe estar un extintor, medida hasta su base?', o: ['1,30 m', '2,50 m', '0,30 m', '1,80 m'], w: 'A 1,30 m como máximo, cualquiera lo puede tomar rápido.' },
        { q: 'Alguien dejó cajas delante de un extintor. ¿Qué haces?', o: ['Lo despejo de inmediato', 'Lo dejo así, igual se ve un poco', 'Cambio el extintor de lugar', 'Espero que lo despeje otro'], w: 'Un extintor tapado no sirve en una emergencia.' },
        { q: 'Al revisar un extintor, ¿qué debe indicar el manómetro?', o: ['La aguja en la zona verde', 'La aguja en la zona roja', 'La aguja en cero', 'No importa, si el extintor pesa'], w: 'En verde indica que tiene la presión correcta para funcionar.' } ] },
      { s: 'si_t1_f_evac', v: [
        { q: 'Hay un incendio que no puedes controlar. ¿Qué haces?', o: ['Doy la alarma y evacúo a la zona de seguridad', 'Vuelvo por mis cosas antes de salir', 'Me encierro en un baño', 'Corro por cualquier lado'], w: 'Alarma y evacuación ordenada por la vía señalizada.' },
        { q: 'Si hay humo en la vía de evacuación, ¿cómo avanzas?', o: ['Agachado, cerca del piso', 'De pie y corriendo', 'Volviendo al interior', 'Quedándome quieto hasta que pase'], w: 'Cerca del piso hay más aire y menos humo.' },
        { q: 'Después de evacuar, puedes volver a buscar tus cosas si el fuego parece pequeño.', vf: false, w: 'Falso. Nunca se vuelve: un fuego crece en segundos.' } ] }
    ]
  });

  // ======================================================================
  // TEMA 8 · TRÁNSITO SEGURO: TRAYECTO, PATIOS Y VEHÍCULOS
  // ======================================================================
  const rueda = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#263238"/><circle cx="${x}" cy="${y}" r="${r * .42}" fill="#90A4AE"/>`;
  const auto = (x, y, c = '#1E88E5') => `<path d="M${x},${y - 12} v-14 l14,-4 l16,-16 h40 l18,18 l14,2 v14z" fill="${c}" stroke="#0D47A1" stroke-width="1.5"/><path d="M${x + 34},${y - 44} h16 v15 h-30z M${x + 54},${y - 44} h14 l14,15 h-28z" fill="#BBDEFB"/>` + rueda(x + 22, y - 10) + rueda(x + 80, y - 10) + `<rect x="${x + 98}" y="${y - 24}" width="6" height="5" fill="#FFF59D"/>`;
  const camioneta = (x, y, c = '#ECEFF1') => `<path d="M${x},${y - 12} v-24 h60 v24z" fill="${c}" stroke="#78909C" stroke-width="1.5"/><path d="M${x + 60},${y - 12} v-36 h26 l16,16 v20z" fill="${c}" stroke="#78909C" stroke-width="1.5"/><path d="M${x + 66},${y - 44} h18 l12,13 h-30z" fill="#BBDEFB"/>` + rueda(x + 20, y - 10) + rueda(x + 84, y - 10) + `<rect x="${x + 98}" y="${y - 30}" width="5" height="5" fill="#FFF59D"/>`;
  const camion = (x, y, k = 'carga') => { let g = '';
    if (k === 'tanque') g += `<rect x="${x}" y="${y - 70}" width="140" height="48" rx="22" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/><rect x="${x + 6}" y="${y - 50}" width="128" height="4" fill="#B0BEC5"/>` + txt(x + 70, y - 40, 'LECHE', 12, '#1565C0');
    else if (k === 'bus') return `<rect x="${x}" y="${y - 76}" width="190" height="62" rx="8" fill="#FDD835" stroke="#F57F17" stroke-width="2"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${x + 12 + i * 32}" y="${y - 68}" width="26" height="20" rx="2" fill="#BBDEFB"/>`).join('')}<rect x="${x + 172}" y="${y - 68}" width="14" height="40" fill="#90CAF9"/>` + rueda(x + 34, y - 12, 12) + rueda(x + 150, y - 12, 12);
    else g += `<rect x="${x}" y="${y - 84}" width="140" height="64" rx="2" fill="${k === 'reefer' ? '#FAFAFA' : '#B0BEC5'}" stroke="#78909C" stroke-width="2"/>` + (k === 'reefer' ? `<rect x="${x + 116}" y="${y - 80}" width="20" height="22" fill="#90A4AE"/>` : '');
    g += `<rect x="${x}" y="${y - 22}" width="190" height="8" fill="#455A64"/><path d="M${x + 146},${y - 20} v-50 h26 l18,22 v28z" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/><path d="M${x + 152},${y - 64} h18 l12,16 h-30z" fill="#BBDEFB"/>` + rueda(x + 26, y - 12, 12) + rueda(x + 54, y - 12, 12) + rueda(x + 168, y - 12, 12);
    return g; };
  const senal10 = (x, y) => `<rect x="${x - 2}" y="${y}" width="4" height="${150 - y}" fill="#607D8B"/><circle cx="${x}" cy="${y}" r="22" fill="#fff" stroke="#D32F2F" stroke-width="5"/>` + txt(x, y + 4, '10', 16, '#263238') + txt(x, y + 14, 'km/h', 7, '#263238');
  const veh = (x, y) => pk(transpaletaSI(x + 30, y, true) + W(x + 10, y - 2, { pose: 'carry', s: .8 }), forklift(x, y, { light: true }) + bin(x + 76, y - 14, 'c'), tractor(x, y), auto(x, y));
  S.si_t1_v_sep = () => svg((E() === 'agricola' ? cielo('#BCAAA4', 120) : cielo('#B0BEC5', 120)) + `<rect y="174" width="320" height="26" fill="#A5D6A7"/><rect y="172" width="320" height="3" fill="#FFC20E"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${10 + i * 46}" y="186" width="24" height="3" fill="#fff" opacity=".7"/>`).join('')}` + veh(150, 166) + W(60, 196, { pose: 'walk', s: .85 }) + pl(260, 178, 'Senda peatonal', '#2E7D32', 10) + badge(292, 26, true, 13));
  S.si_t1_v_vel = () => svg((E() === 'agricola' ? cielo('#BCAAA4', 140) : patio()) + senal10(50, 70) + pk(camioneta(120, 168), forklift(130, 168, { load: 22, light: true }), tractor(130, 170), auto(130, 168)) + `<g class="t1Mov" style="--dx:-12px"><path d="M${pk(240, 270, 290, 250)},120 h22 M${pk(244, 274, 294, 254)},132 h18" stroke="#90A4AE" stroke-width="3"/></g>`);
  S.si_t1_v_retro = () => svg(patio() + `<path d="M0,150 h70 v50 h-70z" fill="#E53935" opacity=".22"/>` + `<g class="t1Mov" style="--dx:-14px">${camion(70, 182, pk('carga', 'reefer', 'carga', 'carga'))}<g class="an-blink">${waves(52, 130, 2, '#FF6F00')}</g></g>` + W(96, 198, { pose: 'stop', vest: true, s: .9 }) + `<rect x="112" y="122" width="12" height="9" fill="#E53935"/>` + pl(36, 158, 'Nadie detrás', '#C62828', 10) + pl(160, 12, 'Retroceso con guía', '#263238', 11));
  S.si_t1_v_camion = () => svg(pk(
    patio() + camion(110, 182, 'tanque') + `<path d="M110,150 q-30,10 -50,-20" stroke="#455A64" stroke-width="4" fill="none"/>` + W(40, 188, { s: .85 }) + pl(50, 92, 'Recepción', '#455A64', 10),
    patio() + `<rect x="0" y="130" width="120" height="30" fill="#90A4AE"/>` + camion(120, 182, 'reefer') + forklift(10, 130, { load: 20 }) + W(290, 196, { s: .8, flip: true }),
    cielo('#BCAAA4', 130) + camion(122, 160, 'bus') + tractor(0, 196) + W(292, 196, { s: .8, flip: true }),
    patio() + auto(150, 186, '#E53935') + W(80, 190, { pose: 'point', s: .9 }) + `<rect x="260" y="150" width="50" height="40" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 4"/>` + txt(285, 176, 'E', 18, '#fff')));
  S.si_t1_v_ciego = () => svg(patio() + camion(100, 182, pk('carga', 'reefer', 'carga', 'carga')) + `<path d="M100,110 L20,90 L20,190 L100,182 Z" fill="#E53935" opacity=".22"/><path d="M290,120 l30,-8 v80 l-30,-6z" fill="#E53935" opacity=".22"/>` + W(56, 190, { s: .85, face: 'worried' }) + bubble(10, 16, '¿Me ve?', 74) + badge(292, 26, false, 13));
  S.si_t1_v_pie = () => svg(`<rect width="320" height="200" fill="#5C6BC0"/><circle cx="270" cy="34" r="14" fill="#FFF9C4"/><rect y="120" width="320" height="40" fill="#BDBDBD"/><rect y="160" width="320" height="40" fill="#455A64"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${150 + i * 14}" y="160" width="8" height="40" fill="#fff"/>`).join('')}`
    + W(180, 184, { pose: 'walk', vest: true, cofia: false, hat: false, apron: false, helmet: false, shirt: '#90CAF9', pants: '#37474F', boots: '#3E2723', gloves: false, s: .9 }) + `<g transform="translate(0,6)">${auto(10, 190, '#C62828')}</g><path d="M118,170 l40,-8 v24z" fill="#FFF59D" opacity=".5"/>` + pl(60, 128, 'Paso peatonal', '#263238', 10));
  S.si_t1_v_bici = () => svg(cielo('#BDBDBD', 150) + `<rect y="164" width="320" height="36" fill="#455A64"/><rect y="180" width="320" height="3" fill="#FFF" opacity=".6"/>`
    + W(150, 164, { s: .9, vest: true, helmet: '#1E88E5', cofia: false, hat: false, apron: false, shirt: '#90CAF9', pants: '#37474F', boots: '#3E2723', gloves: false, pose: 'carry' })
    + `<circle cx="112" cy="168" r="20" fill="none" stroke="#263238" stroke-width="4"/><circle cx="196" cy="168" r="20" fill="none" stroke="#263238" stroke-width="4"/><path d="M112,168 L140,140 L178,140 L196,168 M140,140 L150,168 L178,140 M150,168 L112,168 M178,140 l4,-14 h10" stroke="#C62828" stroke-width="4" fill="none" stroke-linejoin="round"/><rect x="134" y="134" width="14" height="5" rx="2" fill="#263238"/>`
    + `<g class="an-blink"><circle cx="198" cy="128" r="5" fill="#FFF59D"/><circle cx="108" cy="140" r="5" fill="#E53935"/></g>` + pl(250, 30, 'Casco y luces', '#1565C0', 11));
  S.si_t1_v_bus = () => svg(cielo('#BDBDBD', 150) + `<rect y="166" width="320" height="34" fill="#455A64"/>` + camion(20, 180, 'bus') + W(240, 170, { pose: 'walk', cofia: false, hat: false, apron: false, helmet: false, shirt: '#90CAF9', pants: '#37474F', gloves: false, boots: '#3E2723' }) + `<rect x="278" y="60" width="4" height="100" fill="#607D8B"/><rect x="262" y="44" width="36" height="22" rx="3" fill="#1565C0"/>` + txt(280, 59, 'BUS', 10, '#fff') + `<path d="M226,184 h-30" stroke="#E53935" stroke-width="3" stroke-dasharray="5 4"/>` + badge(210, 190, false, 10));
  S.si_t1_v_cond = () => svg(cielo('#BDBDBD', 150) + `<rect y="160" width="320" height="40" fill="#455A64"/>${[0, 1, 2, 3].map(i => `<rect x="${i * 90}" y="178" width="50" height="4" fill="#fff"/>`).join('')}` + pk(camioneta(40, 178), camioneta(40, 178), camioneta(40, 178, '#C8E6C9'), auto(40, 178))
    + `<circle cx="${pk(120, 120, 120, 102)}" cy="141" r="6" fill="${SK}" stroke="#22303A"/><line x1="${pk(114, 114, 114, 96)}" y1="138" x2="${pk(126, 126, 126, 108)}" y2="150" stroke="#E53935" stroke-width="3"/>`
    + `<rect x="200" y="46" width="30" height="50" rx="5" fill="#263238"/><rect x="203" y="52" width="24" height="36" fill="#90CAF9"/><circle cx="215" cy="71" r="26" fill="none" stroke="#D7262B" stroke-width="5"/><line x1="197" y1="53" x2="233" y2="89" stroke="#D7262B" stroke-width="5"/>` + pl(270, 110, 'Cinturón', '#2E7D32', 11));

  SI_CONT.temas.push({
    id: 'trayecto', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Tránsito seguro: trayecto, patios y vehículos', thumb: 'si_t1_v_retro', mins: 15,
    learn: [
      { s: 'si_t1_v_sep', t: 'Peatones y vehículos, separados', x: 'En los patios y caminos internos del fundo circulan tractores, camionetas, camiones y buses. Camina solo por las <b>sendas peatonales</b> y cruza por los pasos señalizados. Nunca acortes camino por las vías de vehículos.' },
      { s: 'si_t1_v_vel', t: 'Velocidad máxima en patios: 10 km/h', x: 'En los patios, la velocidad máxima de cualquier vehículo es <b>10 km/h</b>, casi a paso de persona. A esa velocidad se puede frenar a tiempo si alguien aparece. Quien conduce respeta la señalización, enciende luces y balizas, y <b>cede el paso a los peatones</b> en los cruces.' },
      { s: 'si_t1_v_retro', t: 'Retroceso: siempre con guía', x: 'Al retroceder, el conductor ve muy poco. Por eso <b>todo retroceso se hace con un guía o banderillero</b>, que se ubica a un costado, a la vista del conductor, nunca detrás del vehículo. Si escuchas una alarma de retroceso, aléjate.', k: 'Nunca pases por detrás de un vehículo que retrocede.' },
      { s: 'si_t1_v_camion', t: 'Camiones de fruta, buses de personal y tractores', x: 'En los caminos internos se cruzan camiones de fruta, buses de personal y tractores. Camina por el borde, de frente al tránsito, y aléjate de los tractores en maniobra. Nadie viaja como acompañante en el tractor, en el implemento ni sobre el carro.' },
      { s: 'si_t1_v_ciego', t: 'Puntos ciegos: haz contacto visual', x: 'Camiones, tractores y grúas tienen zonas donde el conductor no te ve: <b>detrás, a los costados y muy cerca del frente</b>. Antes de pasar cerca de un vehículo, <b>haz contacto visual con el conductor</b> y espera su señal. Si no ves al conductor, él tampoco te ve a ti.' },
      { s: 'si_t1_v_pie', t: 'Trayecto a pie', x: '<ul><li>Camina por la vereda. Si no hay, por la berma, <b>de frente a los vehículos</b>.</li><li>Cruza por pasos peatonales o semáforos, mirando a ambos lados.</li><li><b>Sin celular ni audífonos</b> al cruzar.</li><li>Si está oscuro, usa ropa clara o reflectante.</li></ul>El trayecto directo está cubierto por el seguro, pero sobre todo se previene.' },
      { s: 'si_t1_v_bici', t: 'En bicicleta', x: '<ul><li>Usa <b>casco</b>, luz delantera blanca y trasera roja, y ropa o chaleco reflectante.</li><li>Anda por la ciclovía o por la derecha de la calzada.</li><li>Sin celular ni audífonos, con las dos manos en el manubrio.</li><li>Revisa frenos y neumáticos antes de salir.</li></ul>' },
      { s: 'si_t1_v_bus', t: 'En bus o furgón de acercamiento', x: '<ul><li>Espera el bus en un lugar seguro, fuera del camino.</li><li>Sube y baja solo cuando esté <b>detenido</b>, sin empujar.</li><li>Viaja sentado y con el <b>cinturón</b> puesto, si lo tiene.</li><li>Al bajar, no cruces por delante ni por detrás del bus detenido: espera a que se vaya y cruza mirando.</li></ul>' },
      { s: 'si_t1_v_cond', t: 'Si conduces', x: '<ul><li>Conduce vehículos de la empresa solo si estás <b>autorizado</b>.</li><li><b>Cinturón</b> siempre, tú y todos los pasajeros.</li><li><b>Nunca uses el celular</b> mientras manejas.</li><li>Respeta la velocidad y mantén distancia. Si tienes sueño, detente a descansar.</li><li>Nunca conduzcas después de beber alcohol.</li><li>No lleves personas en la pickup de la camioneta.</li></ul>', k: 'Al conducir: cinturón siempre y nunca el celular.' }
    ],
    quiz: [
      { s: 'si_t1_v_sep', v: [
        { q: '¿Por dónde debes caminar en los patios del fundo?', o: ['Por las sendas peatonales señalizadas', 'Por el centro de la vía de vehículos', 'Por donde sea más corto', 'Por detrás de los vehículos estacionados'], w: 'Las sendas peatonales separan a las personas de los vehículos.' },
        { q: 'Para llegar más rápido, un compañero cruza por la vía de los tractores. ¿Es correcto?', o: ['No, debe usar las sendas y pasos señalizados', 'Sí, si cruza rápido y mirando', 'Sí, si no se ve ningún vehículo cerca', 'Sí, si es de día y hay buena luz'], w: 'Acortar camino por la vía de vehículos expone a un atropello.' },
        { q: 'Peatones y vehículos deben circular separados.', vf: true, w: 'Verdadero. Por eso existen las sendas y los pasos peatonales.' } ] },
      { s: 'si_t1_v_sep', v: [
        { q: '¿Cuál es la velocidad máxima de los vehículos en los patios?', o: ['10 km/h', '30 km/h', '20 km/h', '40 km/h'], w: 'En los patios se circula a 10 km/h como máximo.' },
        { q: '¿Por qué la velocidad máxima en los patios es tan baja?', o: ['Para poder frenar a tiempo si aparece una persona', 'Para ahorrar combustible en los patios', 'Para que el vehículo dure más años', 'Porque los patios son pequeños y cerrados'], w: 'A baja velocidad se alcanza a frenar y se evita el atropello.' },
        { q: 'En un cruce peatonal del patio, ¿quién tiene preferencia?', o: ['El peatón que va a cruzar', 'El vehículo más grande', 'El que va más apurado', 'El que toca primero la bocina'], w: 'Quien conduce cede el paso a los peatones en los cruces.' } ] },
      { s: 'si_t1_v_retro', v: [
        { q: 'Un camión de fruta va a retroceder. ¿Qué corresponde?', o: ['Que lo guíe un banderillero, a la vista del conductor', 'Que retroceda solo, tocando la bocina varias veces', 'Que alguien se pare justo detrás para avisarle', 'Que retroceda rápido para despejar el patio'], w: 'El conductor ve muy poco hacia atrás: el retroceso siempre va con guía.' },
        { q: 'Escuchas la alarma de retroceso de un vehículo. ¿Qué haces?', o: ['Me alejo y no paso por detrás', 'Paso rápido por detrás antes de que avance', 'Sigo caminando, el conductor me ve', 'Me paro detrás para ayudar'], w: 'Detrás de un vehículo que retrocede está su mayor punto ciego.' },
        { q: '¿Dónde se ubica el guía o banderillero durante un retroceso?', o: ['A un costado, siempre a la vista del conductor', 'Justo detrás del vehículo, para ver mejor', 'Dentro de la cabina, junto al conductor', 'Arriba de la carga, para tener más altura'], w: 'Si el conductor no ve al guía, el guía puede ser atropellado.' } ] },
      { s: 'si_t1_v_camion', v: [
        { q: 'Un bus de personal llega al fundo. ¿Qué haces?', o: ['Espero fuera del camino hasta que se detenga', 'Me acerco por detrás para ayudar a guiarlo', 'Paso por delante de él para ganar tiempo', 'Sigo mi camino sin mirar el vehículo'], w: 'Mientras un vehículo maniobra, la distancia es tu protección.' },
        { q: '¿Dónde puede viajar una persona en el tractor, además del tractorista?', o: ['En ninguna parte: el tractor no lleva acompañantes', 'Sobre el implemento, bien afirmada', 'En el guardabarros, sujeta a la cabina', 'Sobre el carro, si va lento'], w: 'Cada vehículo tiene sus reglas para que nadie quede expuesto.' },
        { q: '¿Cómo caminas por un camino interno del fundo?', o: ['Por el borde, de frente al tránsito', 'Por el centro, para que me vean', 'De espaldas al tránsito', 'Por donde pasan los tractores'], w: 'Esperar fuera de la zona de maniobra evita atropellos y atrapamientos.' } ] },
      { s: 'si_t1_v_ciego', v: [
        { q: '¿Qué debes hacer antes de pasar cerca de un tractor o un camión?', o: ['Hacer contacto visual con el conductor y esperar su señal', 'Pasar rápido por su lado sin mirar al conductor', 'Golpear la puerta del vehículo para avisar', 'Suponer que el conductor ya te vio por el espejo'], w: 'Si el conductor te ve y te hace una señal, recién puedes pasar.' },
        { q: '¿Dónde están los puntos ciegos de un camión?', o: ['Detrás, a los costados y muy cerca del frente', 'Solo dentro de la cabina del conductor', 'Solo sobre el techo de la carrocería', 'No tiene, gracias a los espejos'], w: 'En esas zonas el conductor no te ve, ni con espejos.' },
        { q: 'Si tú ves al vehículo, seguro el conductor te ve a ti.', vf: false, w: 'Falso. Puedes estar en un punto ciego. Busca el contacto visual con el conductor.' } ] },
      { s: 'si_t1_v_pie', v: [
        { q: 'Caminas por un camino sin vereda. ¿Por dónde vas?', o: ['Por la berma, de frente a los vehículos', 'Por el centro del camino', 'Por la berma, de espaldas a los vehículos', 'Por donde haya menos barro, aunque sea la calzada'], w: 'De frente ves venir los vehículos y puedes reaccionar.' },
        { q: '¿Qué debes evitar al cruzar una calle camino al trabajo?', o: ['Usar el celular o audífonos', 'Mirar a ambos lados', 'Usar el paso peatonal', 'Esperar el semáforo'], w: 'El celular y los audífonos te distraen y no escuchas los vehículos.' },
        { q: 'Vuelves a pie de noche. ¿Qué te ayuda a que te vean?', o: ['Ropa clara o reflectante', 'Ropa oscura', 'Caminar más rápido', 'Ir con audífonos'], w: 'La ropa clara o reflectante permite que los conductores te vean a tiempo.' } ] },
      { s: 'si_t1_v_bici', v: [
        { q: '¿Qué debes usar si vas al trabajo en bicicleta?', o: ['Casco, luces y ropa reflectante', 'Solo audífonos', 'Solo un gorro', 'Nada, si el trayecto es corto'], w: 'El casco protege tu cabeza y las luces y lo reflectante hacen que te vean.' },
        { q: '¿Qué luces debe llevar la bicicleta?', o: ['Blanca adelante y roja atrás', 'Roja adelante y blanca atrás', 'Solo una luz azul', 'No necesita luces'], w: 'Así los demás saben hacia dónde vas.' },
        { q: 'En bicicleta, ¿qué es lo correcto?', o: ['Dos manos en el manubrio y sin celular', 'Hablar por celular con una mano', 'Llevar a otra persona en el manubrio', 'Ir con audífonos para no aburrirse'], w: 'Con las dos manos y sin distracciones controlas mejor la bicicleta.' } ] },
      { s: 'si_t1_v_bus', v: [
        { q: 'Bajas del bus de acercamiento. ¿Cómo cruzas la calle?', o: ['Espero a que el bus se vaya y cruzo mirando', 'Cruzo por delante del bus', 'Cruzo por detrás del bus', 'Cruzo corriendo antes de que parta'], w: 'El bus detenido tapa la vista: los conductores no te ven y tú no los ves.' },
        { q: '¿Cuándo se sube o se baja del bus?', o: ['Solo cuando está detenido', 'Cuando va lento', 'Cuando abre la puerta en marcha', 'Cuando el chofer toca la bocina'], w: 'Subir o bajar en movimiento provoca caídas y atropellos.' },
        { q: 'En el bus se viaja sentado y con el cinturón puesto, si lo tiene.', vf: true, w: 'Verdadero. Así estás protegido ante una frenada o un choque.' } ] },
      { s: 'si_t1_v_cond', v: [
        { q: 'Si conduces un vehículo de la empresa, ¿qué es obligatorio?', o: ['Estar autorizado y usar el cinturón', 'Llevar la música fuerte', 'Ir rápido para cumplir', 'Usar el celular solo en rectas'], w: 'Solo conducen personas autorizadas, y el cinturón va siempre.' },
        { q: 'Suena tu celular mientras conduces. ¿Qué haces?', o: ['No contesto; si es urgente, me detengo en un lugar seguro', 'Contesto en altavoz, sujetándolo con una mano', 'Contesto rápido si hay poco tráfico en la ruta', 'Leo el mensaje cuando voy a baja velocidad'], w: 'El celular quita la vista y la atención del camino.' },
        { q: 'Manejando hacia otro fundo sientes mucho sueño. ¿Qué haces?', o: ['Me detengo en un lugar seguro a descansar', 'Abro la ventana y sigo manejando', 'Subo el volumen de la radio y sigo', 'Acelero para llegar antes a destino'], w: 'El sueño al volante provoca choques graves. Detente a descansar.' } ] }
    ]
  });

  //__FIN__
})();


/* ---- todos2.js ---- */
window.SI_CONT = window.SI_CONT || { temas: [] };
(function () {
  // ================= helpers propios (prefijo t2) =================
  const E = () => 'agricola';   // Comfrut: escenas de campo
  const P4 = o => (o[E()] !== undefined ? o[E()] : o.lacteos);
  const ST = '<style>.t2p{animation:t2p 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}@keyframes t2p{50%{transform:scale(1.08)}}'
    + '.t2f{animation:t2f 2.2s ease-in-out infinite}@keyframes t2f{50%{transform:translateY(-4px)}}'
    + '.t2bl{animation:t2bl 1.2s steps(2) infinite}@keyframes t2bl{50%{opacity:.25}}'
    + '.t2w{animation:t2w 2.6s ease-in-out infinite}@keyframes t2w{50%{transform:translateX(7px)}}'
    + '.t2sh{animation:t2sh .35s ease-in-out infinite}@keyframes t2sh{50%{transform:translateX(2.5px)}}'
    + '.t2r{animation:t2r 14s linear infinite;transform-box:fill-box;transform-origin:center}@keyframes t2r{to{transform:rotate(360deg)}}'
    + '.t2d{animation:t2d 3s linear infinite}@keyframes t2d{0%{transform:translateY(0);opacity:0}20%{opacity:.9}100%{transform:translateY(-26px);opacity:0}}'
    + '.t2m{animation:t2m 3s linear infinite}@keyframes t2m{to{transform:translateX(-40px)}}</style>';
  const sc = inner => sv(ST + inner);
  const NOHAT = { helmet: false, cofia: false, hat: 'none', apron: false, gloves: false, boots: '#3E2723' };
  // fondos
  const sky = (c = '#BFE6FF') => `<rect width="320" height="200" fill="${c}"/>`;
  const field = () => sky() + `<path d="M0,132 Q70,108 150,128 T320,120 V160 H0Z" fill="#A5C887"/><rect y="150" width="320" height="50" fill="#8DBF5A"/>`
    + [20, 70, 125, 190, 245, 300].map(x => `<path d="M${x},${170 + (x % 3) * 8} l3,-7 l3,7" stroke="#6E9E3E" stroke-width="2" fill="none"/>`).join('');
  const patio = () => sky() + `<rect x="0" y="70" width="320" height="82" fill="#E3DDD2"/><rect x="0" y="66" width="320" height="8" fill="#B0A595"/>`
    + [30, 110, 190, 270].map(x => `<rect x="${x}" y="88" width="34" height="24" fill="#90A4AE" stroke="#78909C"/>`).join('')
    + `<rect y="150" width="320" height="50" fill="#A7A9AC"/><rect y="150" width="320" height="3" fill="#8A8C8F"/>`;
  const office = () => `<rect width="320" height="200" fill="#F1ECE3"/><rect x="0" y="146" width="320" height="6" fill="#B79B78"/><rect y="150" width="320" height="50" fill="#C9AE88"/>`
    + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<line x1="${i * 40}" y1="150" x2="${i * 40 - 20}" y2="200" stroke="#B39672" stroke-width="1.5"/>`).join('');
  const win = (x, y, w = 70, h = 56) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#BFE6FF" stroke="#8D7B66" stroke-width="4"/><line x1="${x + w / 2}" y1="${y}" x2="${x + w / 2}" y2="${y + h}" stroke="#8D7B66" stroke-width="3"/><path d="M${x + 6},${y + h - 6} q${w / 4},-14 ${w / 2},-6 t${w / 2 - 12},-4" stroke="#9CCC65" stroke-width="5" fill="none"/>`;
  const galpon = () => `<rect width="320" height="200" fill="#CFD8DC"/>` + Array.from({ length: 33 }, (_, i) => `<line x1="${i * 10}" y1="0" x2="${i * 10}" y2="150" stroke="#B0BEC5" stroke-width="2"/>`).join('') + `<rect x="0" y="0" width="320" height="14" fill="#8D6E63"/><rect y="150" width="320" height="50" fill="#BCAAA4"/><rect y="150" width="320" height="3" fill="#A1887F"/>`;
  const inside = () => (E() === 'inversiones' ? office() : E() === 'agricola' ? galpon() : bg());
  const fk = (x, y, o = {}) => { let g = `<rect x="${x}" y="${y - 40}" width="62" height="28" rx="5" fill="#F9A825" stroke="#C17900" stroke-width="1.5"/><rect x="${x - 6}" y="${y - 36}" width="10" height="22" rx="2" fill="#5D4037"/>`
    + `<path d="M${x + 14},${y - 40} v-32 h32 l6,32" fill="none" stroke="#263238" stroke-width="3.5" stroke-linejoin="round"/><rect x="${x + 12}" y="${y - 74}" width="38" height="4" fill="#263238"/>`
    + `<rect x="${x + 64}" y="${y - 86}" width="6" height="76" fill="#455A64"/><rect x="${x + 70}" y="${y - (o.lift || 10) - 4}" width="38" height="4" fill="#37474F"/>`
    + `<circle cx="${x + 33}" cy="${y - 52}" r="6.5" fill="${SK}"/><path d="M${x + 26},${y - 53} a7,7 0 0 1 14,0z" fill="#1565C0"/><rect x="${x + 28}" y="${y - 46}" width="10" height="8" fill="#1F4E9E"/>`
    + [x + 12, x + 50].map(cx => `<circle cx="${cx}" cy="${y - 10}" r="10" fill="#263238"/><circle cx="${cx}" cy="${y - 10}" r="3.8" fill="#90A4AE"/>`).join('')
    + (o.load ? bin(x + 66, y - (o.lift || 10) - 4) : '') + (o.light ? `<circle cx="${x + 46}" cy="${y - 76}" r="4" fill="#FF6F00" class="t2bl"/>` : '');
    return o.flip ? `<g transform="translate(${2 * x + 110},0) scale(-1,1)">${g}</g>` : g; };
  const tractor = (...a) => '<g data-motor="1"' + (a[2] && a[2].flip ? ' data-flip="1"' : '') + '>' + tractor_m(...a) + '</g>'; const tractor_m = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-6" y="-58" width="70" height="30" rx="4" fill="#1F2FD6" stroke="#0D1B8C" stroke-width="1.5"/><path d="M38,-58 v-34 h28 v34" fill="#BBDEFB" stroke="#263238" stroke-width="3"/><rect x="34" y="-96" width="36" height="5" fill="#263238"/><rect x="8" y="-74" width="5" height="18" fill="#263238"/>`
    + `<circle cx="54" cy="-26" r="26" fill="#263238"/><circle cx="54" cy="-26" r="10" fill="#FFC107"/><circle cx="0" cy="-14" r="14" fill="#263238"/><circle cx="0" cy="-14" r="5" fill="#FFC107"/></g>`;
  const out = () => (E() === 'agricola' ? field() : patio());
  // objetos
  const tree = (x, y, s = 1, fruit) => window.CF.framb(x, y, s * .95, { anim: false });
  const tree_si = (x, y, s = 1, fruit = '#C62828') => `<path d="M${x - 5 * s},${y} l2,${-62 * s} h${6 * s} l2,${62 * s}z" fill="#6D4C41"/><path d="M${x},${y - 55 * s} l${-18 * s},${-18 * s} M${x},${y - 58 * s} l${16 * s},${-20 * s}" stroke="#6D4C41" stroke-width="${4 * s}"/>`
    + [[-22, -78, 22], [0, -95, 26], [22, -80, 22], [-8, -70, 20], [12, -66, 18]].map(([a, b, r]) => `<circle cx="${x + a * s}" cy="${y + b * s}" r="${r * s}" fill="#43A047" stroke="#2E7D32" stroke-width="1.2"/>`).join('')
    + (fruit ? [[-26, -72], [-12, -86], [6, -100], [20, -76], [28, -88], [-2, -66], [14, -62], [-20, -92]].map(([a, b]) => `<circle cx="${x + a * s}" cy="${y + b * s}" r="${2.6 * s}" fill="${fruit}"/>`).join('') : '');
  const bin = (x, y, full = true) => window.CF.pilaBandejas(x + 6, y, 3, 44);
  const bin_si = (x, y, full = true) => `<rect x="${x}" y="${y - 34}" width="54" height="34" rx="2" fill="#455A64" stroke="#263238" stroke-width="1.2"/>` + [0, 1, 2, 3].map(i => `<rect x="${x + 6 + i * 12}" y="${y - 26}" width="7" height="16" rx="1" fill="#37474F"/>`).join('')
    + (full ? [4, 12, 20, 28, 36, 44].map((a, i) => `<circle cx="${x + a + 3}" cy="${y - 36 + (i % 2)}" r="3.4" fill="#B71C1C"/>`).join('') : '');
  const vat = (x, y, w = 120) => `<rect x="${x}" y="${y - 62}" width="${w}" height="34" rx="6" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/><rect x="${x + 6}" y="${y - 60}" width="${w - 12}" height="8" rx="3" fill="#FFF8E1"/>`
    + `<rect x="${x + 10}" y="${y - 28}" width="6" height="28" fill="#90A4AE"/><rect x="${x + w - 16}" y="${y - 28}" width="6" height="28" fill="#90A4AE"/><path d="M${x + 8},${y - 45} h${w - 16}" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>`;
  const belt = (x, y, w = 130) => `<rect x="${x}" y="${y - 44}" width="${w}" height="10" rx="5" fill="#37474F"/><rect x="${x + 8}" y="${y - 34}" width="6" height="34" fill="#607D8B"/><rect x="${x + w - 14}" y="${y - 34}" width="6" height="34" fill="#607D8B"/>`
    + `<g><g class="t2m">${Array.from({ length: Math.floor(w / 9) + 5 }, (_, i) => `<circle cx="${x + 6 + i * 9}" cy="${y - 47}" r="3.4" fill="#B71C1C"/>`).join('')}</g></g>`;
  const desk = (x, y, scr = true) => `<rect x="${x}" y="${y - 44}" width="96" height="6" rx="2" fill="#8D6E63"/><rect x="${x + 4}" y="${y - 38}" width="5" height="38" fill="#6D4C41"/><rect x="${x + 87}" y="${y - 38}" width="5" height="38" fill="#6D4C41"/>`
    + (scr ? `<rect x="${x + 30}" y="${y - 74}" width="40" height="27" rx="2" fill="#263238"/><rect x="${x + 33}" y="${y - 71}" width="34" height="20" fill="#4FC3F7"/><rect x="${x + 47}" y="${y - 47}" width="6" height="4" fill="#455A64"/>` : '');
  const truck = (x, y, tank = true) => `<rect x="${x}" y="${y - 50}" width="${tank ? 110 : 100}" height="${tank ? 36 : 40}" rx="${tank ? 18 : 3}" fill="${tank ? '#ECEFF1' : '#ECEFF1'}" stroke="#78909C" stroke-width="2"/>`
    + `<path d="M${x + 112},${y - 14} v-34 h22 l12,16 v18 z" fill="#1565C0" stroke="#0D47A1" stroke-width="1.5"/><rect x="${x + 118}" y="${y - 44}" width="14" height="12" fill="#BBDEFB"/>`
    + [x + 22, x + 86, x + 130].map(cx => `<circle cx="${cx}" cy="${y - 8}" r="9" fill="#263238"/><circle cx="${cx}" cy="${y - 8}" r="3.5" fill="#90A4AE"/>`).join('');
  const car = (x, y, c = '#E53935') => `<path d="M${x},${y - 10} v-16 q0,-6 8,-8 l18,-16 h40 l20,16 q14,2 14,10 v14 z" fill="${c}" stroke="#263238" stroke-width="1.5"/><path d="M${x + 30},${y - 38} h18 v13 h-30z M${x + 52},${y - 38} h20 l14,13 h-34z" fill="#BBDEFB"/>`
    + [x + 22, x + 80].map(cx => `<circle cx="${cx}" cy="${y - 8}" r="9" fill="#263238"/><circle cx="${cx}" cy="${y - 8}" r="3.5" fill="#B0BEC5"/>`).join('');
  const shelf = (x, y, items) => { let g = `<rect x="${x}" y="${y - 120}" width="6" height="120" fill="#78909C"/><rect x="${x + 70}" y="${y - 120}" width="6" height="120" fill="#78909C"/>`;
    [0, 1, 2].forEach(i => { const sy = y - 10 - i * 38; g += `<rect x="${x}" y="${sy}" width="76" height="5" fill="#546E7A"/>`;
      if (items === 'queso') [0, 1, 2].forEach(j => g += `<ellipse cx="${x + 16 + j * 22}" cy="${sy - 8}" rx="10" ry="8" fill="#FBC02D" stroke="#F57F17"/>`);
      else if (items === 'arch') [0, 1, 2, 3, 4].forEach(j => g += `<rect x="${x + 8 + j * 12}" y="${sy - 26}" width="10" height="26" fill="${['#1565C0', '#C62828', '#2E7D32', '#F9A825', '#6A1B9A'][j]}"/>`);
      else g += `<rect x="${x + 8}" y="${sy - 26}" width="28" height="26" fill="#C89B5E" stroke="#8D6E3F"/><rect x="${x + 40}" y="${sy - 26}" width="28" height="26" fill="#C89B5E" stroke="#8D6E3F"/>`; });
    return g; };
  const cue = (x, y) => P4({ lacteos: vat(x, y, 110), agroex: belt(x, y, 110), agricola: tree(x + 50, y, 1.05), inversiones: desk(x, y) });
  const flame = (x, y, s = 1) => `<g class="t2p"><path d="M${x},${y} q${-16 * s},${-10 * s} ${-6 * s},${-34 * s} q${4 * s},${12 * s} ${10 * s},${8 * s} q${-2 * s},${-14 * s} ${8 * s},${-24 * s} q${2 * s},${18 * s} ${12 * s},${26 * s} q${8 * s},${16 * s} ${-6 * s},${24 * s}z" fill="#FF7043"/><path d="M${x + 2 * s},${y} q${-8 * s},${-6 * s} ${-2 * s},${-18 * s} q${4 * s},${6 * s} ${8 * s},${2 * s} q${4 * s},${10 * s} ${-6 * s},${16 * s}z" fill="#FFCA28"/></g>`;
  const ext = (x, y, s = 1) => `<rect x="${x}" y="${y - 40 * s}" width="${16 * s}" height="${40 * s}" rx="${5 * s}" fill="#D32F2F" stroke="#8E1414" stroke-width="1.2"/><rect x="${x + 4 * s}" y="${y - 46 * s}" width="${8 * s}" height="${7 * s}" fill="#263238"/><path d="M${x + 12 * s},${y - 44 * s} q${12 * s},${2 * s} ${10 * s},${16 * s}" stroke="#263238" stroke-width="${2.4 * s}" fill="none"/><rect x="${x + 3 * s}" y="${y - 30 * s}" width="${10 * s}" height="${12 * s}" fill="#fff"/>`;
  const bottleW = (x, y) => `<rect x="${x}" y="${y - 22}" width="10" height="22" rx="3" fill="#4FC3F7" stroke="#0277BD"/><rect x="${x + 2}" y="${y - 26}" width="6" height="5" fill="#0277BD"/>`;
  const phone = (x, y) => `<rect x="${x}" y="${y}" width="8" height="13" rx="1.5" fill="#263238"/><rect x="${x + 1.2}" y="${y + 1.5}" width="5.6" height="9" fill="#81D4FA"/>`;
  const lab = (x, y, w, s, c = '#263238') => `<rect x="${x - w / 2}" y="${y - 12}" width="${w}" height="18" rx="4" fill="${c}"/>${txt(x, y + 1, s, 11, '#fff')}`;
  // señales
  const sgP = (cx, cy, r, icon) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#D7262B" stroke-width="${r * .2}"/>${icon}<line x1="${cx - r * .66}" y1="${cy - r * .66}" x2="${cx + r * .66}" y2="${cy + r * .66}" stroke="#D7262B" stroke-width="${r * .2}"/>`;
  const sgO = (cx, cy, r, icon) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#1565C0" stroke="#fff" stroke-width="2"/>${icon}`;
  const sgA = (cx, cy, r, icon) => `<path d="M${cx},${cy - r} L${cx + r * 1.12},${cy + r * .8} H${cx - r * 1.12} Z" fill="#FFC20E" stroke="#111" stroke-width="${r * .14}" stroke-linejoin="round"/>${icon}`;
  const sgExit = (x, y, w = 74, h = 34) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#2E7D32" stroke="#fff" stroke-width="2"/>`
    + `<rect x="${x + w - 22}" y="${y + 5}" width="15" height="${h - 10}" fill="none" stroke="#fff" stroke-width="2"/>`
    + `<circle cx="${x + 22}" cy="${y + 8}" r="3.4" fill="#fff"/><path d="M${x + 21},${y + 12} l-3,9 l6,5 l-2,6 M${x + 18},${y + 21} l-6,5 M${x + 20},${y + 14} l6,3 M${x + 20},${y + 14} l-6,2" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>`
    + `<path d="M${x + 30},${y + h / 2} h8 m-4,-4 l4,4 l-4,4" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const sgAid = (x, y, s = 34) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="3" fill="#2E7D32" stroke="#fff" stroke-width="2"/><path d="M${x + s / 2},${y + 7} v${s - 14} M${x + 7},${y + s / 2} h${s - 14}" stroke="#fff" stroke-width="${s * .2}"/>`;
  const sgFire = (x, y, s = 34) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="3" fill="#D7262B" stroke="#fff" stroke-width="2"/><rect x="${x + s * .38}" y="${y + s * .3}" width="${s * .24}" height="${s * .56}" rx="${s * .08}" fill="#fff"/><path d="M${x + s * .5},${y + s * .3} v-${s * .1} q${s * .2},0 ${s * .26},${s * .2}" stroke="#fff" stroke-width="2" fill="none"/>`;
  // íconos de señales (cx,cy,r)
  const ic = {
    cig: (cx, cy, r, c = '#111') => `<rect x="${cx - r * .6}" y="${cy + r * .05}" width="${r * .95}" height="${r * .22}" fill="${c}"/><rect x="${cx + r * .38}" y="${cy + r * .05}" width="${r * .2}" height="${r * .22}" fill="#E65100"/><path d="M${cx + r * .45},${cy - r * .1} q${-r * .2},${-r * .2} 0,${-r * .38} q${r * .2},${-r * .18} 0,${-r * .36}" stroke="${c}" stroke-width="${r * .08}" fill="none"/>`,
    muff: (cx, cy, r, c = '#fff') => `<circle cx="${cx}" cy="${cy}" r="${r * .32}" fill="${c}"/><path d="M${cx - r * .42},${cy} A${r * .45},${r * .5} 0 0 1 ${cx + r * .42},${cy}" stroke="${c}" stroke-width="${r * .1}" fill="none"/><rect x="${cx - r * .58}" y="${cy - r * .12}" width="${r * .2}" height="${r * .4}" rx="${r * .08}" fill="${c}"/><rect x="${cx + r * .38}" y="${cy - r * .12}" width="${r * .2}" height="${r * .4}" rx="${r * .08}" fill="${c}"/><rect x="${cx - r * .22}" y="${cy + r * .3}" width="${r * .44}" height="${r * .3}" fill="${c}"/>`,
    glove: (cx, cy, r, c = '#fff') => `<rect x="${cx - r * .3}" y="${cy - r * .1}" width="${r * .6}" height="${r * .62}" rx="${r * .12}" fill="${c}"/>` + [-.26, -.09, .08, .25].map((d, i) => `<rect x="${cx + d * r - r * .06}" y="${cy - r * (.55 - (i === 0 || i === 3 ? .1 : 0))}" width="${r * .13}" height="${r * .5}" rx="${r * .06}" fill="${c}"/>`).join('') + `<rect x="${cx - r * .52}" y="${cy}" width="${r * .3}" height="${r * .12}" rx="${r * .06}" fill="${c}" transform="rotate(-35 ${cx - r * .37} ${cy})"/>`,
    resp: (cx, cy, r, c = '#fff') => `<circle cx="${cx}" cy="${cy - r * .2}" r="${r * .36}" fill="${c}"/><path d="M${cx - r * .5},${cy + r * .62} q0,${-r * .38} ${r * .5},${-r * .38} q${r * .5},0 ${r * .5},${r * .38}z" fill="${c}"/><rect x="${cx - r * .3}" y="${cy - r * .34}" width="${r * .6}" height="${r * .14}" rx="${r * .06}" fill="#1565C0"/><path d="M${cx - r * .2},${cy - r * .08} h${r * .4} l${-r * .06},${r * .22} h${-r * .28}z" fill="#1565C0"/><circle cx="${cx - r * .2}" cy="${cy + r * .1}" r="${r * .1}" fill="#1565C0" stroke="${c}" stroke-width="${r * .04}"/><circle cx="${cx + r * .2}" cy="${cy + r * .1}" r="${r * .1}" fill="#1565C0" stroke="${c}" stroke-width="${r * .04}"/>`,
    belt: (cx, cy, r, c = '#fff') => `<circle cx="${cx}" cy="${cy - r * .42}" r="${r * .16}" fill="${c}"/><path d="M${cx - r * .24},${cy + r * .5} v${-r * .6} q0,${-r * .14} ${r * .14},${-r * .14} h${r * .2} q${r * .14},0 ${r * .14},${r * .14} v${r * .6}z" fill="${c}"/><line x1="${cx - r * .3}" y1="${cy - r * .2}" x2="${cx + r * .3}" y2="${cy + r * .32}" stroke="#1565C0" stroke-width="${r * .1}"/><rect x="${cx - r * .5}" y="${cy - r * .55}" width="${r * .12}" height="${r * 1.05}" fill="${c}"/>`,
    wash: (cx, cy, r, c = '#fff') => `<path d="M${cx - r * .45},${cy + r * .05} q${r * .2},${-r * .3} ${r * .55},${-r * .18} l${r * .35},${r * .12} v${r * .2} h${-r * .6} q${-r * .2},0 ${-r * .3},${-r * .14}z" fill="${c}"/>` + [[-.15, -.35], [.15, -.45], [.05, .45]].map(([a, b]) => `<circle cx="${cx + a * r}" cy="${cy + b * r}" r="${r * .09}" fill="${c}"/>`).join(''),
    hat: (cx, cy, r, c = '#fff') => `<path d="M${cx - r * .38},${cy + r * .1} q0,${-r * .55} ${r * .38},${-r * .55} q${r * .38},0 ${r * .38},${r * .55}z" fill="${c}"/><path d="M${cx - r * .38},${cy + r * .1} q${-r * .15},${r * .3} ${-r * .05},${r * .42} h${r * .2} v${-r * .42}z M${cx + r * .32},${cy + r * .05} h${r * .3} l${-r * .05},${r * .1} h${-r * .25}z" fill="${c}"/>`,
    excl: (cx, cy, r) => `<rect x="${cx - r * .09}" y="${cy - r * .5}" width="${r * .18}" height="${r * .62}" rx="${r * .06}" fill="#111"/><circle cx="${cx}" cy="${cy + r * .4}" r="${r * .11}" fill="#111"/>`,
    hot: (cx, cy, r) => [-.3, 0, .3].map(d => `<path d="M${cx + d * r},${cy + r * .45} q${-r * .14},${-r * .2} 0,${-r * .4} q${r * .14},${-r * .2} 0,${-r * .4}" stroke="#111" stroke-width="${r * .09}" fill="none" stroke-linecap="round"/>`).join('') + `<rect x="${cx - r * .5}" y="${cy + r * .48}" width="${r}" height="${r * .1}" fill="#111"/>`,
    bolt: (cx, cy, r) => `<path d="M${cx + r * .1},${cy - r * .55} l${-r * .35},${r * .6} h${r * .25} l${-r * .12},${r * .5} l${r * .38},${-r * .62} h${-r * .25}z" fill="#111"/>`,
    fork: (cx, cy, r) => `<rect x="${cx - r * .5}" y="${cy - r * .1}" width="${r * .6}" height="${r * .34}" fill="#111"/><path d="M${cx - r * .38},${cy - r * .1} v${-r * .3} h${r * .32} l${r * .06},${r * .3}" stroke="#111" stroke-width="${r * .07}" fill="none"/><rect x="${cx + r * .12}" y="${cy - r * .5}" width="${r * .07}" height="${r * .74}" fill="#111"/><rect x="${cx + r * .19}" y="${cy + r * .17}" width="${r * .36}" height="${r * .07}" fill="#111"/><circle cx="${cx - r * .34}" cy="${cy + r * .3}" r="${r * .11}" fill="#111"/><circle cx="${cx}" cy="${cy + r * .3}" r="${r * .11}" fill="#111"/>`,
    trac: (cx, cy, r) => `<circle cx="${cx - r * .28}" cy="${cy + r * .18}" r="${r * .28}" fill="#111"/><circle cx="${cx + r * .36}" cy="${cy + r * .3}" r="${r * .16}" fill="#111"/><path d="M${cx - r * .45},${cy - r * .1} v${-r * .38} h${r * .36} v${r * .3} h${r * .5} v${r * .3} h${-r * .4}z" fill="#111"/><rect x="${cx + r * .22}" y="${cy - r * .42}" width="${r * .07}" height="${r * .32}" fill="#111"/>`,
    ring: (cx, cy, r) => `<circle cx="${cx}" cy="${cy + r * .12}" r="${r * .3}" fill="none" stroke="#111" stroke-width="${r * .11}"/><path d="M${cx - r * .14},${cy - r * .2} l${r * .14},${-r * .2} l${r * .14},${r * .2}z" fill="#111"/>`,
    man: (cx, cy, r) => `<circle cx="${cx}" cy="${cy - r * .42}" r="${r * .14}" fill="#111"/><path d="M${cx - r * .2},${cy + r * .55} v${-r * .5} h${-r * .06} v${-r * .3} q0,${-r * .1} ${r * .1},${-r * .1} h${r * .32} q${r * .1},0 ${r * .1},${r * .1} v${r * .3} h${-r * .06} v${r * .5}z" fill="#111"/>`,
    phone: (cx, cy, r) => `<rect x="${cx - r * .22}" y="${cy - r * .42}" width="${r * .44}" height="${r * .84}" rx="${r * .07}" fill="#111"/><rect x="${cx - r * .15}" y="${cy - r * .32}" width="${r * .3}" height="${r * .55}" fill="#fff"/>`
  };
  const oblIcon = (cx, cy, r) => P4({ lacteos: ic.muff(cx, cy, r), agroex: ic.glove(cx, cy, r), agricola: ic.resp(cx, cy, r), inversiones: ic.belt(cx, cy, r) });
  const advIcon = (cx, cy, r) => P4({ lacteos: ic.hot(cx, cy + r * .1, r * .8), agroex: ic.fork(cx, cy + r * .12, r * .9), agricola: ic.trac(cx, cy + r * .12, r * .9), inversiones: ic.bolt(cx, cy + r * .1, r * .9) });
  const prohIcon = (cx, cy, r) => P4({ lacteos: ic.ring(cx, cy, r), agroex: ic.man(cx, cy, r), agricola: ic.man(cx, cy, r), inversiones: ic.phone(cx, cy, r) });
  const quake = () => `<g stroke="#8D6E63" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M10,192 l8,-6 l8,6 l8,-6 l8,6"/><path d="M270,192 l8,-6 l8,6 l8,-6 l8,6"/></g>`;
  const crowd = (xs, y, o = {}) => xs.map((x, i) => W(x, y, Object.assign({ s: .8, flip: i % 2 === 1, shirt: o.shirts ? o.shirts[i] : undefined }, o.w || {}))).join('');

  // ================= ESCENAS · EMERGENCIAS =================
  S.si_t2_plan = () => sc(inside() + `<rect x="24" y="22" width="150" height="104" rx="4" fill="#5D4037"/><rect x="30" y="28" width="138" height="92" fill="#FFFDF5"/>`
    + `<rect x="30" y="28" width="138" height="18" fill="#C62828"/>${txt(99, 41, 'PLAN DE EMERGENCIA', 11, '#fff')}`
    + `<rect x="40" y="54" width="70" height="56" fill="#ECEFF1" stroke="#90A4AE"/><rect x="48" y="62" width="22" height="16" fill="#CFD8DC"/><rect x="78" y="62" width="24" height="16" fill="#CFD8DC"/><rect x="48" y="86" width="54" height="16" fill="#CFD8DC"/>`
    + `<path d="M58,82 h40 v-1 M98,82 l14,0" stroke="#2E7D32" stroke-width="3" stroke-dasharray="5 3"/><path d="M110,78 l6,4 l-6,4" fill="#2E7D32"/>`
    + `<rect x="122" y="56" width="38" height="24" rx="3" fill="#2E7D32"/><circle cx="131" cy="68" r="3" fill="#fff"/><circle cx="141" cy="68" r="3" fill="#fff"/><circle cx="151" cy="68" r="3" fill="#fff"/>`
    + `<g class="t2bl"><circle cx="141" cy="98" r="10" fill="#E53935"/></g><circle cx="141" cy="98" r="5" fill="#B71C1C"/>`
    + W(225, 178, { pose: 'point', flip: true }) + ext(272, 170, .9));
  S.si_t2_evac = () => {
    if (E() === 'agricola') return sc(field() + tree(60, 150, .9) + `<rect x="248" y="70" width="5" height="82" fill="#6D4C41"/><rect x="214" y="44" width="72" height="34" rx="3" fill="#2E7D32" stroke="#fff" stroke-width="2"/>${txt(250, 58, 'ZONA DE', 11, '#fff')}${txt(250, 72, 'SEGURIDAD', 11, '#fff')}`
      + `<path d="M110,176 h70" stroke="#fff" stroke-width="3" stroke-dasharray="8 5"/><path d="M180,170 l10,6 l-10,6z" fill="#fff"/>` + W(130, 182, { pose: 'walk', anim: 't2w' }) + W(168, 178, { pose: 'walk', s: .9, anim: 't2w' }));
    return sc(inside() + `<rect x="236" y="70" width="58" height="80" fill="#8D9BA5" stroke="#5F6D78" stroke-width="2"/><rect x="241" y="98" width="20" height="5" rx="2" fill="#ECEFF1"/>` + sgExit(228, 28)
      + `<g fill="#2E7D32">${[70, 110, 150, 190].map(x => `<path d="M${x},176 h18 v-5 l10,8 l-10,8 v-5 h-18z"/>`).join('')}</g>` + (E() === 'inversiones' ? win(30, 40) : '') + W(150, 170, { pose: 'walk', anim: 't2w' }));
  };
  const sismoSide = (bad) => {
    const e = E();
    if (bad) {
      if (e === 'agricola') return tree(70, 172, 1.05) + `<rect x="120" y="40" width="5" height="132" fill="#6D4C41"/><rect x="108" y="44" width="30" height="4" fill="#6D4C41"/><path d="M0,52 Q60,62 108,46" stroke="#263238" stroke-width="1.6" fill="none"/>` + W(86, 180, { face: 'worried', anim: 't2sh' });
      const it = e === 'lacteos' ? 'queso' : e === 'inversiones' ? 'arch' : 'caja';
      return `<g class="t2sh">${shelf(18, 172, it)}</g>` + (e === 'lacteos' ? `<ellipse cx="108" cy="96" rx="10" ry="8" fill="#FBC02D" stroke="#F57F17" class="t2f"/>` : `<rect x="96" y="88" width="24" height="20" fill="${e === 'inversiones' ? '#1565C0' : '#C89B5E'}" stroke="#5D4037" class="t2f" transform="rotate(20 108 98)"/>`) + W(118, 182, { face: 'worried' });
    }
    if (e === 'agricola') return W(240, 182, { pose: 'squat' }) + `<path d="M196,184 h88" stroke="#6E9E3E" stroke-width="2"/>`;
    return W(236, 182, { pose: 'squat' }) + (e === 'inversiones' ? desk(196, 182, false) : '');
  };
  S.si_t2_sismo = () => sc((E() === 'agricola' ? field() : inside()) + sismoSide(true) + sismoSide(false) + quake() + divider() + badge(140, 26, false) + badge(300, 26, true));
  S.si_t2_campo = () => sc(field() + tree(60, 172, 1.05) + `<rect x="112" y="38" width="5" height="134" fill="#6D4C41"/><rect x="100" y="42" width="30" height="4" fill="#6D4C41"/><path d="M0,50 Q60,62 100,44" stroke="#263238" stroke-width="1.6" fill="none"/>`
    + `<path d="M0,186 q40,-6 80,0 t80,0 V200 H0z" fill="#4FC3F7"/>` + W(80, 176, { face: 'worried', anim: 't2sh' })
    + W(240, 180, { pose: 'squat' }) + quake() + divider() + badge(140, 26, false) + badge(300, 26, true));
  S.si_t2_nocorrer = () => sc(inside() + `<g fill="#2E7D32" opacity=".85">${[190, 230].map(x => `<path d="M${x},184 h16 v-5 l10,8 l-10,8 v-5 h-16z"/>`).join('')}</g>`
    + W(70, 182, { pose: 'walk', face: 'worried', anim: 't2w' }) + `<path d="M28,120 h18 M22,134 h22 M30,148 h14" stroke="#90A4AE" stroke-width="3" stroke-linecap="round"/>` + W(110, 182, { pose: 'twist', s: .9, face: 'pain', flip: true })
    + W(245, 180, { pose: 'walk' }) + divider() + badge(140, 26, false) + badge(300, 26, true));
  S.si_t2_encuentro = () => sc(out() + `<rect x="54" y="66" width="5" height="88" fill="#546E7A"/><rect x="18" y="34" width="78" height="38" rx="4" fill="#2E7D32" stroke="#fff" stroke-width="2"/>${txt(57, 50, 'PUNTO DE', 11, '#fff')}${txt(57, 64, 'ENCUENTRO', 11, '#fff')}`
    + crowd([140, 168, 196], 178) + W(258, 182, { vest: true, pose: 'carry', flip: true }) + `<rect x="236" y="124" width="16" height="20" rx="2" fill="#8D6E63" stroke="#5D4037"/><rect x="239" y="128" width="10" height="14" fill="#fff"/>`
    + `<path d="M240,132 l2,2 l4,-4 M240,138 l2,2 l4,-4" stroke="#2E7D32" stroke-width="1.4" fill="none"/>`);
  S.si_t2_fuego = () => {
    if (E() === 'agricola') return sc(field() + `<g opacity=".55" class="t2f"><circle cx="50" cy="90" r="22" fill="#9E9E9E"/><circle cx="76" cy="70" r="26" fill="#BDBDBD"/><circle cx="40" cy="58" r="18" fill="#9E9E9E"/></g>` + flame(40, 170, 1.1) + flame(76, 172, .9) + flame(16, 168, .8)
      + `<path d="M120,96 q14,-6 28,0" stroke="#78909C" stroke-width="3" fill="none"/><path d="M144,90 l6,6 l-8,2" fill="#78909C"/>${txt(132, 86, 'viento', 11, '#455A64', 'normal')}`
      + W(236, 182, { pose: 'walk' }) + phone(250, 117) + `<path d="M262,112 q6,4 0,10 M266,108 q10,8 0,18" stroke="#1565C0" stroke-width="2" fill="none"/>`);
    return sc(inside() + `<rect x="40" y="132" width="40" height="40" fill="#78909C" stroke="#455A64"/>` + flame(60, 132, .9) + `<g opacity=".5" class="t2f"><circle cx="58" cy="78" r="14" fill="#9E9E9E"/><circle cx="74" cy="64" r="12" fill="#BDBDBD"/></g>`
      + `<rect x="206" y="72" width="26" height="30" rx="3" fill="#D32F2F" stroke="#8E1414"/><circle cx="219" cy="87" r="7" fill="#fff"/><circle cx="219" cy="87" r="4" fill="#B71C1C" class="t2bl"/>`
      + W(176, 178, { pose: 'point' }) + ext(268, 150, .9) + sgFire(262, 60, 30));
  };
  S.si_t2_bloq = () => {
    const blk = P4({ lacteos: box(18, 172, 46, 30) + box(66, 172, 46, 30) + box(40, 142, 46, 26), agroex: bin(14, 172) + bin(70, 172) + bin(40, 136), agricola: bin(14, 172) + bin(70, 172) + bin(40, 136), inversiones: box(18, 172, 46, 30, '', '#B0A08A') + box(66, 172, 46, 30, '', '#B0A08A') + box(40, 142, 46, 26, '', '#B0A08A') });
    const door = x => `<rect x="${x}" y="70" width="60" height="80" fill="#8D9BA5" stroke="#5F6D78" stroke-width="2"/><rect x="${x + 6}" y="104" width="22" height="5" rx="2" fill="#ECEFF1"/>` + sgExit(x - 7, 30);
    return sc((E() === 'inversiones' ? office() : bg()) + door(36) + blk + door(208) + W(282, 180, { flip: true }) + divider() + badge(140, 26, false) + badge(300, 26, true));
  };

  // ================= ESCENAS · SEÑALÉTICA =================
  S.si_t2_senales = () => sc(inside() + `<rect x="10" y="22" width="300" height="128" rx="6" fill="#fff" opacity=".7"/>`
    + `<g class="t2f">${sgP(48, 70, 26, ic.cig(48, 70, 26))}</g>${sgO(122, 70, 26, oblIcon(122, 70, 26))}${sgA(196, 74, 28, ic.excl(196, 78, 28))}${sgExit(236, 52, 66, 36)}`
    + lab(48, 124, 66, 'PROHÍBE', '#D7262B') + lab(122, 124, 66, 'OBLIGA', '#1565C0') + lab(196, 124, 72, 'ADVIERTE', '#8D6E00') + lab(270, 124, 66, 'INFORMA', '#2E7D32')
    );
  S.si_t2_proh = () => sc(inside() + `<g class="t2p">${sgP(90, 80, 44, ic.cig(90, 80, 44))}</g>` + sgP(190, 70, 26, prohIcon(190, 70, 26)) + W(262, 182, { flip: true, pose: 'point' }));
  S.si_t2_obl = () => {
    const o = P4({ lacteos: { muffs: 'on' }, agroex: {}, agricola: { mask: true, glasses: true, gloves: '#43A047', shirt: '#FFCA28', pants: '#FFB300', hat: 'none', boots: '#212121' }, inversiones: {} });
    let extra = '';
    if (E() === 'inversiones') extra = car(150, 182, '#90A4AE') + W(250, 182, { flip: true });
    else extra = W(240, 182, Object.assign({ flip: true }, o));
    return sc((E() === 'inversiones' ? patio() : inside()) + `<g class="t2p">${sgO(80, 80, 44, oblIcon(80, 80, 44))}</g>` + extra);
  };
  S.si_t2_adv = () => sc(inside() + `<g class="t2p">${sgA(84, 82, 46, advIcon(84, 82, 46))}</g>`
    + P4({ lacteos: vat(170, 182, 80) + `<path d="M190,104 q-6,-10 0,-20 M210,104 q-6,-10 0,-20" stroke="#B0BEC5" stroke-width="3" fill="none" class="t2d"/>`, agroex: fk(150, 182, { load: true, lift: 20, light: true }), agricola: tractor(175, 182, .75), inversiones: `<rect x="190" y="62" width="44" height="70" rx="3" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/><rect x="198" y="72" width="28" height="10" fill="#78909C"/>` })
    + (E() === 'agroex' ? '' : W(272, 182, { flip: true, pose: 'stop' })));
  S.si_t2_info = () => sc(inside() + sgExit(20, 40, 84, 44) + sgAid(118, 40, 44) + sgFire(190, 40, 44) + `<g class="t2bl"><circle cx="280" cy="62" r="18" fill="#D32F2F"/></g><circle cx="280" cy="62" r="10" fill="#fff"/>`
    + lab(62, 112, 84, 'SALIDA', '#2E7D32') + lab(140, 112, 70, 'BOTIQUÍN', '#2E7D32') + lab(212, 112, 66, 'EXTINTOR', '#D7262B') + lab(280, 112, 60, 'ALARMA', '#D7262B') + ext(150, 182, .8) + W(250, 184, { s: .8 }));
  S.si_t2_empresa = () => sc(inside() + `<rect x="10" y="20" width="300" height="104" rx="6" fill="#fff" opacity=".7"/>` + sgO(52, 66, 30, oblIcon(52, 66, 30)) + sgA(130, 70, 32, advIcon(130, 70, 32)) + sgP(208, 66, 30, prohIcon(208, 66, 30)) + sgExit(246, 48, 58, 34)
    + W(160, 192, { s: .75, pose: 'point' }));
  S.si_t2_cuidar = () => {
    const blk = P4({ lacteos: box(30, 172, 50, 40) + box(84, 172, 50, 40) + box(46, 132, 60, 36), agroex: bin(28, 172) + bin(84, 172) + bin(52, 136), agricola: bin(28, 172) + bin(84, 172) + bin(52, 136), inversiones: box(30, 172, 50, 40, '', '#B0A08A') + box(84, 172, 50, 40, '', '#B0A08A') + box(46, 132, 60, 36, '', '#B0A08A') });
    return sc(inside() + sgFire(60, 70, 36) + ext(70, 150, .9) + blk + sgFire(222, 70, 36) + ext(232, 150, .9) + W(282, 182, { flip: true, pose: 'point' }) + divider() + badge(140, 26, false) + badge(300, 26, true));
  };
  S.si_t2_fumar = () => sc(patio() + `<rect x="196" y="60" width="5" height="92" fill="#546E7A"/><rect x="160" y="30" width="78" height="36" rx="4" fill="#2E7D32" stroke="#fff" stroke-width="2"/>${txt(199, 45, 'ZONA DE', 11, '#fff')}${txt(199, 60, 'FUMADORES', 11, '#fff')}`
    + `<rect x="216" y="128" width="20" height="24" rx="3" fill="#78909C"/><rect x="214" y="124" width="24" height="6" rx="2" fill="#455A64"/>` + W(262, 180, Object.assign({ flip: true, pose: 'carry' }, NOHAT))
    + `<rect x="236" y="130" width="9" height="2.4" fill="#fff"/><rect x="235" y="130" width="2" height="2.4" fill="#E65100"/><path d="M236,127 q-4,-8 2,-14 q4,-6 -1,-12" stroke="#B0BEC5" stroke-width="2" fill="none" class="t2d"/>`
    + `<rect x="40" y="140" width="80" height="6" rx="2" fill="#8D6E63"/><rect x="46" y="146" width="5" height="8" fill="#5D4037"/><rect x="108" y="146" width="5" height="8" fill="#5D4037"/>`);

  // ================= TEMAS =================
  const LUGAR = 'el campo';
  const COSAS = 'bandejas, carros o rollos de alambre';

  SI_CONT.temas.push({
    id: 'emergencias', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Emergencias, sismos y evacuación', thumb: 'si_t2_evac', mins: 15,
    learn: [
      { s: 'si_t2_plan', t: 'El plan de emergencia', x: 'Cada empresa del grupo tiene un <b>plan de emergencia</b>: dice qué hacer ante un sismo, un incendio o un derrame de agroquímicos o un incendio forestal, quién da la alarma y quién guía la evacuación. Tú debes saber:<ul><li>Cómo suena la alarma.</li><li>Cuál es tu vía de evacuación.</li><li>Dónde está tu zona de seguridad y punto de encuentro.</li><li>Quiénes son los líderes de emergencia de tu sector.</li></ul>' },
      { s: 'si_t2_evac', t: 'Vías de evacuación y zonas de seguridad', x: 'Las vías de evacuación están marcadas con <b>señales verdes</b> con una flecha y una persona corriendo. Te llevan a la salida y a la <b>zona de seguridad</b> (en el campo, tu jefatura indica la zona de seguridad de cada sector).<ul><li>Mantenlas siempre despejadas: nada de ' + COSAS + ' en el camino.</li><li>Nunca cierres con llave ni bloquees una salida de emergencia.</li></ul>' },
      { s: 'si_t2_sismo', t: 'Durante un sismo', x: '<b>Mantén la calma y no corras.</b> Aléjate de árboles grandes, postes, tendidos eléctricos, canales y galpones. Agáchate, cúbrete la cabeza con los brazos y afírmate hasta que pase. Si operas una máquina o un vehículo, detenlo solo si puedes hacerlo sin riesgo.', k: 'En un sismo: no corras, aléjate de lo que pueda caer, agáchate y cúbrete.' },
      { s: 'si_t2_campo', t: 'Si te pilla al aire libre o manejando', x: '<ul><li>Busca un <b>lugar abierto</b>, lejos de árboles grandes, postes y tendidos eléctricos, canales y acequias, muros y galpones.</li><li>Si vas manejando, baja la velocidad y <b>detente en un lugar seguro</b>, lejos de puentes, pasos bajo nivel, postes y cables. Quédate dentro hasta que pase.</li><li>Después, avanza con cuidado: puede haber grietas, cables cortados o réplicas.</li></ul>' },
      { s: 'si_t2_nocorrer', t: 'Evacúa con orden', x: 'Evacúa cuando suene la alarma, cuando lo indique tu líder o si ves daños graves.<ul><li>Camina rápido, <b>sin correr</b> ni empujar.</li><li>En escaleras, baja afirmado del pasamanos.</li><li>No uses ascensores.</li><li>No vuelvas a buscar tus cosas.</li><li>Sigue las señales verdes hasta la zona de seguridad.</li></ul>Correr y empujar provoca caídas y atochamientos.' },
      { s: 'si_t2_encuentro', t: 'En el punto de encuentro, que nadie falte', x: 'Quédate con tu grupo y <b>avisa a tu líder que estás bien</b>: así se sabe de inmediato si falta alguien. Si un compañero no llegó, avisa al líder o brigadista. <b>No vuelvas a entrar</b> a buscarlo ni a buscar tus cosas: eso lo hacen los brigadistas o bomberos. Vuelve a tu puesto solo cuando la jefatura lo autorice.', k: 'No vuelvas a entrar hasta que la jefatura lo autorice.' },
      { s: 'si_t2_fuego', t: 'Ante un incendio', x: '<ul><li><b>Da la alarma</b> de inmediato y avisa a tu jefatura.</li><li>Usa el extintor solo si el fuego es pequeño, estás capacitado y tienes la salida a tu espalda.</li><li>Si hay humo, avanza agachado.</li><li>Nunca uses agua en un tablero o equipo eléctrico.</li><li>En un incendio forestal, aléjate del humo y del lado hacia donde sopla el viento, por la ruta que indique tu jefatura.</li></ul>' },
      { s: 'si_t2_bloq', t: 'Tu parte, antes de la emergencia', x: 'La emergencia se prepara antes:<ul><li>Participa en serio en los <b>simulacros</b>: sirven para practicar y corregir errores.</li><li>Si eres nuevo o de temporada, pregunta hoy cuál es tu vía de evacuación y tu zona de seguridad.</li><li>Si ves una salida bloqueada, un extintor tapado o una señal rota, despéjala si puedes hacerlo sin riesgo y avisa a tu jefatura.</li></ul>' }
    ],
    quiz: [
      { s: 'si_t2_evac', v: [
        { q: '¿De qué color son las señales que indican la vía de evacuación y la salida?', o: ['Verdes, con una flecha y una persona corriendo', 'Rojas, con un círculo y una barra cruzada', 'Azules, con un dibujo blanco en un círculo', 'Amarillas, con un triángulo de borde negro'], w: 'Las señales de evacuación y salida son verdes y muestran una flecha y una persona corriendo hacia la salida.' },
        { q: 'Tienes que salir en una emergencia. ¿Qué señales sigues?', o: ['Las verdes, que llevan a la zona de seguridad', 'Las rojas, que muestran dónde hay extintores', 'Las azules de uso obligatorio de EPP', 'Las amarillas de advertencia de peligro'], w: 'Las señales verdes marcan la vía de evacuación y te llevan a la salida y a la zona de seguridad.' },
        { q: 'Las vías de evacuación se marcan con señales verdes que llevan a la salida y a la zona de seguridad.', vf: true, w: 'Verdadero. El verde indica salvamento: salidas, vías de evacuación y zonas de seguridad.' }] },
      { s: 'si_t2_sismo', v: [
        { q: 'Empieza un sismo fuerte mientras trabajas en ' + LUGAR + '. ¿Qué haces?', o: ['Me alejo de postes y tendidos y voy a un lugar abierto', 'Corro de inmediato hacia la salida más cercana', 'Me afirmo de un poste de la espaldera', 'Salgo a buscar a mis compañeros de otros sectores'], w: 'Durante el sismo no se corre: te alejas de lo que puede caer, te agachas, te cubres la cabeza y te afirmas hasta que pase.' },
        { q: 'Durante un sismo, ¿qué es lo correcto?', o: ['Mantener la calma, no correr y alejarse de lo que pueda caer', 'Correr hacia la salida antes que los demás', 'Usar el ascensor para salir más rápido', 'Quedarse junto a una ventana grande para ver qué pasa'], w: 'Correr provoca caídas y atochamientos. Lo seguro es calmarse, alejarse de lo que puede caer o romperse y protegerse.' },
        { q: 'En un sismo, ¿por qué hay que alejarse de árboles grandes y tendidos eléctricos?', o: ['Porque pueden caer o romperse y golpearte', 'Porque ahí se forma la zona de seguridad', 'Porque bloquean la señal del celular', 'Porque así lo pide el simulacro, no un sismo real'], w: 'En un sismo caen objetos, ramas o cables y se rompen vidrios. Alejarte evita que te golpeen.' }] },
      { s: 'si_t2_campo', v: [
        { q: 'Te pilla un sismo al aire libre. ¿Dónde te ubicas?', o: ['En un lugar abierto, lejos de árboles, postes, cables y canales', 'Bajo el árbol más grande, para protegerte', 'Junto al muro del galpón, para tener apoyo', 'A la orilla del canal, donde el suelo es blando'], w: 'Al aire libre, el lugar más seguro es uno abierto, lejos de lo que pueda caer (árboles, postes, cables, muros) y de canales.' },
        { q: 'Vas manejando el tractor por el fundo y empieza un sismo fuerte. ¿Qué haces?', o: ['Bajo la velocidad y me detengo lejos de puentes y cables', 'Acelero para llegar rápido a mi destino', 'Me detengo justo bajo un puente o paso bajo nivel', 'Me bajo del vehículo y me refugio junto a un poste'], w: 'Manejando, hay que detenerse en un lugar seguro, lejos de puentes, pasos bajo nivel, postes y cables, y esperar dentro hasta que pase.' },
        { q: 'Al aire libre, durante un sismo, ¿de qué te debes alejar?', o: ['De árboles, tendidos eléctricos, canales y muros', 'Solo de los vehículos estacionados cerca', 'De los lugares abiertos y despejados', 'De la zona de seguridad señalizada'], w: 'Árboles, postes, cables y muros pueden caer, y los bordes de canales pueden ceder. Busca un lugar abierto.' }] },
      { s: 'si_t2_nocorrer', v: [
        { q: 'Suena la alarma de evacuación. ¿Cómo evacúas?', o: ['Camino rápido sin correr, sigo las señales verdes y no vuelvo por mis cosas', 'Corro lo más rápido posible, empujando si es necesario', 'Primero voy a buscar mi celular y mis cosas al casillero', 'Espero en mi puesto hasta que todos hayan salido'], w: 'Se evacúa caminando rápido y en orden, siguiendo las señales verdes. Volver por tus cosas te hace perder tiempo y te expone.' },
        { q: 'Al evacuar, ¿qué NO debes hacer?', o: ['Volver a buscar tus cosas', 'Seguir las señales verdes de evacuación', 'Bajar las escaleras afirmado del pasamanos', 'Caminar rápido y en orden'], w: 'Nunca vuelvas por tus cosas: lo importante es llegar a la zona de seguridad. Las demás son conductas correctas.' },
        { q: 'Al evacuar, debo caminar rápido y en orden, sin correr ni empujar.', vf: true, w: 'Verdadero. Correr y empujar provoca caídas y atochamientos en la salida.' }] },
      { s: 'si_t2_encuentro', v: [
        { q: 'Llegaste al punto de encuentro. ¿Qué haces?', o: ['Me quedo con mi grupo y aviso a mi líder que estoy bien', 'Me voy a mi casa porque ya salí', 'Vuelvo a entrar para ver si falta alguien', 'Me voy a otro sector a esperar más cómodo'], w: 'Avisar que llegaste permite saber de inmediato si falta alguien. Nadie vuelve a entrar hasta que la jefatura lo autorice.' },
        { q: 'En el punto de encuentro notas que falta un compañero. ¿Qué haces?', o: ['Aviso de inmediato al líder o brigadista, sin volver a entrar', 'Entro solo a buscarlo', 'No digo nada, seguro salió por otra puerta', 'Espero a que conteste el celular antes de avisar'], w: 'Hay que avisar de inmediato al líder o brigadista. La búsqueda la hacen los brigadistas o bomberos, no tú solo.' },
        { q: '¿Por qué es importante avisar en el punto de encuentro que llegaste bien?', o: ['Para saber si falta alguien y buscarlo a tiempo', 'Para que el líder decida quién vuelve primero a trabajar', 'Para justificar la salida en el control de asistencia', 'Solo porque lo exige el simulacro'], w: 'El conteo en el punto de encuentro sirve para detectar de inmediato si alguien quedó atrapado o herido.' }] },
      { s: 'si_t2_fuego', v: [
        { q: '¿Cuándo puedes usar un extintor?', o: ['Si el fuego es pequeño, sé usarlo y tengo salida a mi espalda', 'Siempre, aunque el fuego sea grande, para ayudar', 'Solo después de evacuar a todos y volver a entrar', 'Cuando el fuego quedó entre la salida y mi puesto'], w: 'El extintor sirve para un fuego pequeño, si sabes usarlo y tienes por dónde escapar. Si no, das la alarma y evacúas.' },
        { q: 'Ves un amago de incendio en ' + LUGAR + '. ¿Qué haces primero?', o: ['Doy la alarma y aviso de inmediato a mi jefatura', 'Lo grabo con el celular para mostrarlo', 'Sigo trabajando porque es pequeño', 'Le echo agua aunque haya un tablero cerca'], w: 'Lo primero es dar la alarma y avisar. Un fuego pequeño crece en segundos.' },
        { q: 'Se puede usar agua para apagar fuego en un tablero o equipo eléctrico.', vf: false, w: 'Falso. El agua conduce la electricidad y puede electrocutarte. Se da la alarma y se usa el extintor adecuado, si estás capacitado.' }] },
      { s: 'si_t2_bloq', v: [
        { q: 'Ves ' + COSAS + ' tapando una salida de emergencia. ¿Qué haces?', o: ['Los saco si puedo hacerlo sin riesgo y aviso a mi jefatura', 'Los dejo, porque casi nunca hay emergencias', 'Pongo más cosas encima para ordenar', 'Cierro esa puerta con llave para que nadie salga por ahí'], w: 'Una salida bloqueada puede costar vidas en una emergencia. Se despeja y se avisa para que no se repita.' },
        { q: 'Necesitas dejar ' + COSAS + ' un rato. ¿Dónde NO puedes dejarlos?', o: ['Frente a una salida o en la vía de evacuación', 'En el sector demarcado para dejarlos', 'En la bodega o el lugar que corresponde', 'En el lugar que indique tu jefatura'], w: 'Las salidas y vías de evacuación deben estar siempre despejadas, aunque sea por un rato.' },
        { q: '¿Cómo deben estar las vías y salidas de emergencia?', o: ['Siempre despejadas, señalizadas y sin llave', 'Se pueden usar como bodega si falta espacio', 'Abiertas solo cuando hay un simulacro', 'Cerradas con llave para evitar robos'], w: 'En una emergencia no hay tiempo para buscar llaves ni mover cosas: las salidas deben estar libres siempre.' }] },
      { s: 'si_t2_plan', v: [
        { q: '¿Qué debes saber del plan de emergencia de tu lugar de trabajo?', o: ['La alarma, mi vía de evacuación y mi punto de encuentro', 'Solo el número de teléfono de bomberos', 'Solo dónde está la oficina de la gerencia', 'Nada, eso es tarea únicamente de los brigadistas'], w: 'Todos deben conocer la alarma, su vía de evacuación, su zona de seguridad y a sus líderes de emergencia.' },
        { q: 'Eres nuevo o de temporada. ¿Qué haces sobre las emergencias?', o: ['Pregunto a mi jefatura mi vía de evacuación y mi zona de seguridad', 'Espero la primera emergencia para ver hacia dónde van todos', 'Sigo a cualquiera que salga corriendo', 'Busco la salida solo cuando suene la alarma'], w: 'Hay que saberlo antes: en una emergencia no hay tiempo para averiguarlo.' },
        { q: '¿Para qué sirven los simulacros de emergencia?', o: ['Para practicar y corregir errores antes de una emergencia', 'Para descansar unos minutos del trabajo diario', 'Solo para cumplir con un papel ante la autoridad', 'Para que los brigadistas evacúen por ti'], w: 'En el simulacro se practica y se detectan fallas, como salidas bloqueadas o personas que no saben a dónde ir.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'senaletica', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Señalización de seguridad', thumb: 'si_t2_senales', mins: 12,
    learn: [
      { s: 'si_t2_senales', t: 'Las señales te hablan', x: 'La señalización de seguridad te avisa en un segundo una <b>prohibición</b>, una <b>obligación</b>, un <b>peligro</b> o dónde está la <b>salida y la ayuda</b>. Funciona con colores y formas que son iguales en todas partes. Si los conoces, entiendes una señal aunque no tenga texto o esté en otro idioma.' },
      { s: 'si_t2_proh', t: 'Prohibición: círculo con borde rojo y barra', x: 'Círculo blanco con borde rojo y una barra cruzada. Indica algo que <b>no se puede hacer</b>. Ejemplos en ' + LUGAR + ': prohibido fumar, prohibido el ingreso a un sector recién aplicado, prohibido el paso a personas no autorizadas.' },
      { s: 'si_t2_obl', t: 'Obligación: círculo azul', x: 'Círculo azul con un dibujo blanco. Indica algo que <b>debes hacer o usar</b> desde ese punto. Ejemplos: uso obligatorio de respirador y antiparras en la aplicación, uso de legionario.', k: 'Si la señal dice que debes usar un EPP, úsalo desde ese punto, aunque sea por un minuto.' },
      { s: 'si_t2_adv', t: 'Advertencia: triángulo amarillo', x: 'Triángulo amarillo con borde y dibujo negros. Avisa un <b>peligro</b>: tránsito de tractores, riesgo eléctrico, terreno irregular, colmenas. Cuando la veas, baja el ritmo y pon atención.' },
      { s: 'si_t2_info', t: 'Salvamento y contra incendio: verde y rojo', x: '<ul><li><b>Verde</b> (rectángulo o cuadrado): salidas, vías de evacuación, zona de seguridad, botiquín, lavaojos.</li><li><b>Rojo</b> (cuadrado o rectángulo): equipos contra incendio, como extintores, red húmeda y pulsadores de alarma.</li></ul>Estas señales te guían en una emergencia: fíjate hoy dónde están las de tu sector.' },
      { s: 'si_t2_empresa', t: 'Las señales de ' + LUGAR, x: 'Cada sector tiene las señales de sus riesgos. En ' + LUGAR + ' encontrarás, por ejemplo: respirador en aplicación, prohibido ingresar a sectores recién aplicados, tránsito de tractores, riesgo eléctrico en bombas de riego.' },
      { s: 'si_t2_cuidar', t: 'Respétalas y cuídalas', x: 'Una señal tapada, rota o sucia no protege a nadie.<ul><li>No tapes señales, extintores ni salidas con ' + COSAS + '.</li><li>No las saques ni las cambies de lugar.</li><li>Si ves una rota, caída o que falta, avisa a tu jefatura.</li><li>Cumplirla es obligatorio, aunque \"siempre se haya hecho de otra forma\".</li></ul>' },
      { s: 'si_t2_fumar', t: 'Zonas de fumadores', x: 'Solo se fuma en las <b>zonas habilitadas y señalizadas</b>, al aire libre. Nunca en galpones, bodegas de agroquímicos ni cerca de combustible o pasto seco. Apaga bien la colilla y bótala en el recipiente para colillas, nunca al suelo.' }
    ],
    quiz: [
      { s: 'si_t2_proh', v: [
        { q: 'Ves una señal circular con borde rojo y una barra cruzada. ¿Qué significa?', o: ['Que esa acción está prohibida', 'Que debes usar un elemento de protección', 'Que hay un peligro cerca', 'Que ahí está la salida de emergencia'], w: 'El círculo con borde rojo y barra cruzada indica prohibición: algo que no se puede hacer.' },
        { q: '¿Qué forma y color tiene una señal de prohibición?', o: ['Círculo con borde rojo y barra cruzada', 'Círculo azul con dibujo blanco', 'Triángulo amarillo con borde negro', 'Rectángulo verde con dibujo blanco'], w: 'La prohibición es un círculo blanco con borde rojo y barra cruzada.' },
        { q: 'Las señales de prohibición son triángulos amarillos con borde negro.', vf: false, w: 'Falso. El triángulo amarillo es de advertencia (peligro). La prohibición es un círculo con borde rojo y barra cruzada.' }] },
      { s: 'si_t2_obl', v: [
        { q: 'Una señal circular azul con un dibujo blanco indica:', o: ['Una obligación: algo que debes hacer o usar', 'Una prohibición: algo que no puedes hacer', 'Un peligro que hay más adelante', 'La ubicación de un extintor'], w: 'El círculo azul es de obligación: indica lo que debes hacer o usar desde ese punto.' },
        { q: 'Ves la señal azul de uso obligatorio de respirador. ¿Qué haces?', o: ['La cumplo desde ese punto, aunque sea por un rato corto', 'La cumplo solo si hay un supervisor mirando', 'La cumplo solo si la tarea dura más de una hora', 'No la cumplo si ya conozco bien el lugar'], w: 'La obligación rige desde donde está la señal y para todos, aunque estés poco tiempo.' },
        { q: '¿Desde dónde debes cumplir una señal de obligación?', o: ['Desde el punto donde está la señal', 'Solo cuando termines tu tarea', 'Solo si la señal tiene texto', 'Solo durante el turno de día'], w: 'La señal marca desde dónde se debe usar el EPP o cumplir la conducta.' }] },
      { s: 'si_t2_adv', v: [
        { q: '¿Qué indica un triángulo amarillo con borde negro?', o: ['Un peligro: debo poner más atención', 'Que esa zona está prohibida para todos', 'Que debo usar un EPP específico', 'Que ahí hay primeros auxilios'], w: 'El triángulo amarillo es de advertencia: avisa un peligro.' },
        { q: 'Ves la señal de advertencia de tránsito de tractores. ¿Qué haces?', o: ['Bajo el ritmo y pongo atención a ese peligro', 'Sigo igual, porque conozco bien el sector', 'Paso rápido para estar menos tiempo ahí', 'Le pido a otro que pase primero'], w: 'La advertencia te pide cuidado extra: más atención y menos apuro.' },
        { q: '¿Qué forma tienen las señales de advertencia?', o: ['Triángulo amarillo con borde negro', 'Círculo azul', 'Círculo con borde rojo y barra', 'Cuadrado rojo'], w: 'Las señales de advertencia de peligro son triángulos amarillos con borde negro.' }] },
      { s: 'si_t2_info', v: [
        { q: '¿Qué indica una señal rectangular verde?', o: ['Salidas, vías de evacuación o primeros auxilios', 'Equipos contra incendio, como extintores', 'Algo que está prohibido hacer en ese sector', 'Un peligro que hay más adelante en el sector'], w: 'El verde indica salvamento: salidas, vías de evacuación, zona de seguridad, botiquín o lavaojos.' },
        { q: '¿Qué señal buscas para encontrar el botiquín o el lavaojos?', o: ['Una señal verde', 'Una señal con borde rojo y barra cruzada', 'Un triángulo amarillo', 'Un círculo azul'], w: 'Los elementos de primeros auxilios se señalizan en verde, igual que las salidas.' },
        { q: '¿Qué indica una señal roja cuadrada con el dibujo de un extintor?', o: ['Dónde está un equipo contra incendio', 'Que está prohibido hacer fuego', 'Que hay riesgo de explosión', 'Dónde está la salida de emergencia'], w: 'El rojo cuadrado o rectangular marca equipos contra incendio: extintores, red húmeda y alarmas.' }] },
      { s: 'si_t2_cuidar', v: [
        { q: 'Una señal está tapada por ' + COSAS + '. ¿Qué haces?', o: ['La despejo si es seguro y aviso a mi jefatura', 'Nada, todos ya saben lo que dice', 'La saco de ahí y la dejo en el suelo', 'La cambio a un lugar donde no estorbe'], w: 'Una señal tapada no protege. Se despeja y se avisa para que no vuelva a pasar.' },
        { q: 'Si una señal está rota o se cayó, hay que avisar a la jefatura para que la repongan.', vf: true, w: 'Verdadero. Una señal que falta deja a todos sin el aviso.' },
        { q: '¿Quién puede cambiar de lugar o retirar una señal de seguridad?', o: ['Solo quien autorice la empresa', 'Cualquier trabajador, si le estorba', 'El compañero con más años en el sector', 'El último que llegó al turno'], w: 'Las señales se ubican según el riesgo del lugar. Moverlas sin autorización deja el peligro sin aviso.' }] },
      { s: 'si_t2_fumar', v: [
        { q: '¿Dónde se puede fumar?', o: ['Solo en las zonas habilitadas y señalizadas para fumadores', 'En cualquier lugar al aire libre del recinto', 'En el galpón, si está ventilado', 'En la pausa, en cualquier sector'], w: 'Solo se fuma en las zonas habilitadas y señalizadas, al aire libre, lejos de materiales que puedan arder.' },
        { q: 'En la zona de fumadores, la colilla se apaga bien y se bota en el recipiente para colillas.', vf: true, w: 'Verdadero. Una colilla mal apagada puede iniciar un incendio.' },
        { q: '¿Por qué no se fuma cerca de combustible, agroquímicos y pasto seco?', o: ['Por el riesgo de incendio', 'Porque molesta solo a los visitantes', 'Porque baja la iluminación del lugar', 'Porque ensucia el piso, nada más'], w: 'Estos materiales arden con facilidad: un cigarro o una colilla pueden iniciar un incendio.' }] },
      { s: 'si_t2_empresa', v: [
        { q: 'En ' + LUGAR + ', ¿cuál de estas es una señal de obligación?', o: ['Uso obligatorio de respirador', 'Prohibido fumar', 'Peligro tránsito de tractores', 'Salida de emergencia'], w: 'Las señales de obligación indican lo que debes usar o hacer, como un EPP.' },
        { q: '¿Cuál de estas señales es de prohibición?', o: ['Prohibido fumar', 'Uso obligatorio de respirador', 'Peligro tránsito de tractores', 'Zona de seguridad'], w: 'Prohibido fumar es una prohibición: círculo con borde rojo y barra cruzada.' },
        { q: '¿Cuál de estas señales es de advertencia?', o: ['Peligro tránsito de tractores', 'Uso obligatorio de respirador', 'Prohibido fumar', 'Extintor'], w: 'Las advertencias avisan un peligro y son triángulos amarillos.' }] },
      { s: 'si_t2_senales', v: [
        { q: '¿Por qué las señales de seguridad usan colores y formas fijos?', o: ['Para entenderlas en un segundo, aunque no tengan texto', 'Para que el lugar se vea más ordenado', 'Porque cada empresa elige los colores que quiere', 'Solo para pasar las fiscalizaciones'], w: 'Los colores y formas son iguales en todas partes: así cualquiera entiende la señal al instante.' },
        { q: 'Una señal te pide hacer algo distinto a como \"siempre se ha hecho\". ¿Qué haces?', o: ['Cumplo la señal y pregunto si tengo dudas', 'Sigo como siempre: la costumbre manda', 'La cumplo solo si me están mirando', 'No la cumplo si estoy apurado'], w: 'Las señales se ponen por un riesgo real. Que antes no haya pasado nada no lo hace seguro.' },
        { q: '¿Qué colores tiene una señal de advertencia?', o: ['Amarillo y negro', 'Azul y blanco', 'Verde y blanco', 'Rojo y blanco'], w: 'La advertencia es un triángulo amarillo con borde y dibujo negros.' }] }
    ]
  });

  // ================= helpers 2 =================
  const sun = (cx, cy, r = 22) => `<g class="t2r">${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<line x1="${(cx + Math.cos(a) * (r + 5)).toFixed(1)}" y1="${(cy + Math.sin(a) * (r + 5)).toFixed(1)}" x2="${(cx + Math.cos(a) * (r + 14)).toFixed(1)}" y2="${(cy + Math.sin(a) * (r + 14)).toFixed(1)}" stroke="#FFB300" stroke-width="4" stroke-linecap="round"/>`; }).join('')}</g><circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#FFB300" stroke-width="3"/>`;
  const uvray = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#7B1FA2" stroke-width="3" stroke-dasharray="7 6" class="t2bl"/>`;
  const ladder = (x, y, h = 112) => { let g = `<line x1="${x}" y1="${y}" x2="${x + 12}" y2="${y - h}" stroke="#B0BEC5" stroke-width="4"/><line x1="${x + 30}" y1="${y}" x2="${x + 18}" y2="${y - h}" stroke="#B0BEC5" stroke-width="4"/><line x1="${x + 15}" y1="${y - h}" x2="${x + 58}" y2="${y}" stroke="#90A4AE" stroke-width="4"/>`;
    for (let i = 1; i < 7; i++) { const k = i / 7, yy = y - h * k; g += `<line x1="${x + 12 * k}" y1="${yy}" x2="${x + 30 - 12 * k}" y2="${yy}" stroke="#90A4AE" stroke-width="3"/>`; } return g; };
  const OUTW = () => (E() === 'agricola' ? {} : { hat: 'legion', cofia: false, apron: false });
  const toldo = (x, y, w = 130) => `<rect x="${x + 6}" y="${y - 100}" width="5" height="100" fill="#546E7A"/><rect x="${x + w - 11}" y="${y - 100}" width="5" height="100" fill="#546E7A"/><path d="M${x},${y - 100} h${w} l-8,-16 h${-w + 16}z" fill="#0288D1"/><path d="M${x},${y - 100} h${w}" stroke="#01579B" stroke-width="3"/><ellipse cx="${x + w / 2}" cy="${y + 2}" rx="${w / 2}" ry="7" fill="#000" opacity=".12"/>`;
  const shade = (x, y) => (E() === 'agricola' ? tree(x + 60, y, 1.1) + `<ellipse cx="${x + 60}" cy="${y + 2}" rx="60" ry="8" fill="#000" opacity=".14"/>` : toldo(x, y));
  const glass = (x, y) => `<path d="M${x},${y - 30} h22 l-3,30 h-16z" fill="#E1F5FE" stroke="#0288D1" stroke-width="1.5"/><path d="M${x + 2},${y - 20} h18 l-2,18 h-14z" fill="#4FC3F7"/>`;
  const thermo = (x, y, h = 100, lvl = .85) => `<rect x="${x - 9}" y="${y - h}" width="18" height="${h}" rx="9" fill="#fff" stroke="#455A64" stroke-width="2"/><circle cx="${x}" cy="${y + 6}" r="15" fill="#E53935" stroke="#455A64" stroke-width="2"/>`
    + `<rect x="${x - 4}" y="${y - h * lvl}" width="8" height="${h * lvl + 4}" fill="#E53935"><animate attributeName="y" values="${y - h * lvl * .7};${y - h * lvl};${y - h * lvl * .7}" dur="3s" repeatCount="indefinite"/><animate attributeName="height" values="${h * lvl * .7 + 4};${h * lvl + 4};${h * lvl * .7 + 4}" dur="3s" repeatCount="indefinite"/></rect>`
    + [.2, .4, .6, .8].map(k => `<line x1="${x + 9}" y1="${y - h * k}" x2="${x + 15}" y2="${y - h * k}" stroke="#455A64" stroke-width="2"/>`).join('');
  const sweat = (x, y) => `<g class="t2d">${drop(x, y, .45, '#4FC3F7')}${drop(x + 14, y + 8, .4, '#4FC3F7')}</g>`;
  const heat = (x, y, n = 3) => Array.from({ length: n }, (_, i) => `<path d="M${x + i * 16},${y} q-6,-8 0,-16 q6,-8 0,-16" stroke="#FF7043" stroke-width="3" fill="none" stroke-linecap="round" class="t2d"/>`).join('');
  const avisoSc = (msg, w = 150, o = {}) => sc((E() === 'agricola' ? field() : inside()) + W(96, 182, Object.assign({ face: 'worried' }, o)) + W(226, 182, { flip: true, vest: true, pose: 'stand' }) + bubble(Math.max(6, 100 - w / 2), 22, msg, w));
  const docSheet = (x, y, w, h, title, c = '#1565C0') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#fff" stroke="#90A4AE" stroke-width="1.5"/><rect x="${x}" y="${y}" width="${w}" height="20" rx="4" fill="${c}"/>${txt(x + w / 2, y + 14, title, 11, '#fff')}`;

  // ================= ESCENAS · UV =================
  const outCue = () => P4({ lacteos: truck(0, 182), agroex: bin(20, 182) + bin(76, 182) + bin(48, 148), agricola: tree(70, 182, 1.1), inversiones: car(10, 182, '#90A4AE') });
  S.si_t2_sol = () => sc(out() + sun(250, 42) + outCue() + uvray(232, 60, 196, 100) + uvray(252, 70, 222, 102) + W(206, 184, Object.assign({ glasses: true }, OUTW())));
  S.si_t2_quien = () => {
    const e = E(); let g = out() + sun(282, 34, 18);
    if (e === 'agricola') g += tree(90, 182, 1.15) + ladder(96, 182, 110) + W(110, 128, { pose: 'carry', s: .85 }) + W(210, 182, { pose: 'carry' }) + `<rect x="222" y="126" width="22" height="16" rx="3" fill="#8D6E63"/>` + bin(250, 182);
    else if (e === 'lacteos') g += truck(10, 182) + `<path d="M120,160 q20,10 40,4" stroke="#263238" stroke-width="5" fill="none"/>` + W(188, 182, Object.assign({ pose: 'bend', flip: true, gloves: true }, OUTW())) + W(250, 182, Object.assign({ glasses: true }, OUTW()));
    else if (e === 'agroex') g += fk(30, 182, { load: true, lift: 12 }) + bin(150, 182) + W(230, 182, Object.assign({ pose: 'point', flip: true, vest: true }, OUTW()));
    else g += car(20, 182, '#90A4AE') + W(180, 182, Object.assign({ pose: 'walk' }, OUTW())) + `<rect x="194" y="126" width="16" height="20" fill="#FFB300" stroke="#E65100"/>`;
    return sc(g + uvray(270, 50, 236, 92));
  };
  S.si_t2_indice = () => { const C = ['#4CAF50', '#FDD835', '#FB8C00', '#E53935', '#8E24AA'], N = ['1-2', '3-5', '6-7', '8-10', '11+'], L = ['BAJO', 'MODERADO', 'ALTO', 'MUY ALTO', 'EXTREMO'];
    let g = sky('#E3F2FD') + sun(50, 42, 20) + txt(178, 50, 'ÍNDICE UV', 18, '#263238');
    const Wd = [52, 70, 50, 64, 64]; let x0 = 10;
    C.forEach((c, i) => { const w = Wd[i], cx = x0 + w / 2; g += `<rect x="${x0}" y="86" width="${w}" height="44" fill="${c}"/>` + txt(cx, 114, N[i], 15, '#111') + `<rect x="${x0 + 1}" y="138" width="${w - 2}" height="20" rx="3" fill="#37474F"/>` + txt(cx, 152, L[i], 11, '#fff', 'normal'); x0 += w; });
    return sc(g + `<g class="t2f"><path d="M204,176 l10,-12 l10,12z" fill="#263238"/></g><rect x="10" y="86" width="300" height="44" fill="none" stroke="#263238" stroke-width="2"/>`); };
  S.si_t2_horario = () => { const cx = 100, cy = 104, r = 66; const pt = (h, rr) => { const a = (h / 12) * 2 * Math.PI - Math.PI / 2; return [(cx + rr * Math.cos(a)).toFixed(1), (cy + rr * Math.sin(a)).toFixed(1)]; };
    const [ax, ay] = pt(11, r - 6), [bx, by] = pt(16, r - 6);
    let g = sky('#E3F2FD') + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#263238" stroke-width="5"/><path d="M${cx},${cy} L${ax},${ay} A${r - 6},${r - 6} 0 0 1 ${bx},${by} Z" fill="#FF7043" opacity=".55" class="t2bl"/>`;
    for (let h = 1; h <= 12; h++) { const [x, y] = pt(h, r - 16); g += txt(x, +y + 5, String(h), 13, '#263238'); }
    g += `<line x1="${cx}" y1="${cy}" x2="${pt(1, 28)[0]}" y2="${pt(1, 28)[1]}" stroke="#263238" stroke-width="5" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${pt(0, 38)[0]}" y2="${pt(0, 38)[1]}" stroke="#263238" stroke-width="3" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="5" fill="#263238"/>`;
    g += sun(250, 64, 26) + lab(250, 130, 120, '11:00 a 16:00', '#E64A19');
    return sc(g); };
  S.si_t2_epp_uv = () => sc(out() + sun(40, 36, 18) + W(160, 192, Object.assign({ s: 1.5, glasses: true, gloves: E() === 'agricola' ? '#8D6E63' : false }, OUTW()))
    + `<g stroke="#263238" stroke-width="1.5"><line x1="150" y1="72" x2="96" y2="58"/><line x1="170" y1="86" x2="226" y2="70"/><line x1="146" y1="120" x2="96" y2="124"/></g>`
    + lab(66, 58, 84, 'LEGIONARIO', '#5D4037') + lab(260, 70, 84, 'LENTES UV', '#5D4037') + lab(60, 124, 96, E() === 'agricola' ? 'OVEROL' : 'MANGA LARGA', '#5D4037')
    + `<g class="t2f"><rect x="236" y="112" width="30" height="56" rx="6" fill="#FB8C00" stroke="#E65100" stroke-width="2"/><rect x="242" y="102" width="18" height="12" rx="2" fill="#E65100"/>${txt(251, 140, 'FPS', 11, '#fff')}${txt(251, 155, '50+', 11, '#fff')}</g>`);
  S.si_t2_fps = () => sc(out() + `<g class="t2p"><rect x="40" y="70" width="46" height="88" rx="10" fill="#FB8C00" stroke="#E65100" stroke-width="2"/><rect x="50" y="54" width="26" height="18" rx="3" fill="#E65100"/>${txt(63, 108, 'FPS', 13, '#fff')}${txt(63, 126, '50+', 13, '#fff')}</g>`
    + clock(150, 92, 30) + lab(150, 146, 74, 'CADA 2 H', '#E65100') + W(250, 184, Object.assign({ pose: 'point', flip: true, glasses: false }, OUTW())) + `<circle cx="226" cy="124" r="3" fill="#fff"/>`);
  S.si_t2_sombra = () => sc(out() + sun(286, 30, 16) + shade(100, 184) + W(150, 184, Object.assign({ pose: 'carry' }, OUTW())) + bottleW(162, 136) + W(196, 184, Object.assign({ flip: true }, OUTW())));
  S.si_t2_piel = () => sc(out() + W(110, 186, Object.assign({ pose: 'carry' }, OUTW())) + `<circle cx="128" cy="134" r="4" fill="#5D4037"/><line x1="128" y1="134" x2="196" y2="96" stroke="#90A4AE" stroke-width="2" stroke-dasharray="4 3"/>`
    + `<circle cx="230" cy="80" r="46" fill="${SK}" stroke="#455A64" stroke-width="5"/><path d="M220,70 q8,-10 18,-2 q10,6 2,16 q-8,10 -18,4 q-8,-6 -2,-18z" fill="#4E342E" class="t2p"/><line x1="264" y1="114" x2="292" y2="144" stroke="#455A64" stroke-width="9" stroke-linecap="round"/>`);

  // ================= ESCENAS · CALOR =================
  S.si_t2_termo = () => sc(out() + sun(46, 38, 18) + thermo(260, 150, 110, .9) + W(160, 184, Object.assign({ face: 'worried' }, OUTW())) + sweat(176, 96) + heat(90, 150));
  S.si_t2_lugar = () => { const e = E();
    if (e === 'lacteos') return sc(bg() + vat(20, 182, 140) + `<rect x="170" y="70" width="44" height="80" rx="6" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/><circle cx="192" cy="96" r="10" fill="#fff" stroke="#455A64" stroke-width="2"/><line x1="192" y1="96" x2="198" y2="90" stroke="#E53935" stroke-width="2"/>` + `<g opacity=".7">${heat(50, 112, 4)}</g>` + W(258, 182, { flip: true, face: 'worried', gloves: '#1E88E5' }) + sweat(240, 100) + thermo(300, 120, 70, .9));
    if (e === 'agroex') return sc(bg() + `<path d="M0,0 h320 v14 h-320z" fill="#90A4AE"/><path d="M110,14 l-30,136 h80 l-10,-136z" fill="#FFF59D" opacity=".45"/>` + sun(140, 0, 14) + belt(30, 182, 190) + W(110, 176, { pose: 'carry', face: 'worried' }) + W(180, 176, { pose: 'carry', flip: true }) + sweat(126, 98) + thermo(290, 130, 80, .9));
    if (e === 'agricola') return sc(field() + sun(286, 30, 16) + tree(110, 182, 1.15) + ladder(116, 182, 110) + W(130, 128, { pose: 'carry', s: .85, face: 'worried' }) + sweat(142, 64) + W(220, 184, { pose: 'carry' }) + `<rect x="232" y="128" width="22" height="16" rx="3" fill="#8D6E63"/>`);
    return sc(patio() + sun(60, 34, 18) + car(110, 184, '#90A4AE') + heat(140, 118) + W(270, 184, { flip: true, face: 'worried' }) + sweat(252, 100)); };
  S.si_t2_sintomas = () => sc((E() === 'agricola' ? field() : inside()) + W(110, 186, Object.assign({ face: 'worried', s: 1.25 }, E() === 'inversiones' ? {} : {})) + sweat(124, 76)
    + `<g class="t2r"><path d="M110,58 m-10,0 a10,6 0 1,0 20,0 a10,6 0 1,0 -20,0" fill="none" stroke="#7B1FA2" stroke-width="2.5"/><circle cx="104" cy="54" r="2" fill="#7B1FA2"/><circle cx="118" cy="60" r="2" fill="#7B1FA2"/></g>`
    + lab(240, 60, 110, 'SED, BOCA SECA', '#E65100') + lab(240, 90, 110, 'MAREO, NÁUSEAS', '#E65100') + lab(240, 120, 110, 'CALAMBRES', '#E65100') + lab(240, 150, 110, 'DOLOR DE CABEZA', '#E65100'));
  S.si_t2_golpe = () => sc(out() + sun(40, 34, 16) + `<g transform="rotate(-90 210 168)">${W(210, 168, Object.assign({ face: 'pain' }, OUTW()))}</g>` + W(100, 184, Object.assign({ pose: 'squat' }, OUTW())) + phone(112, 150)
    + `<g class="t2p">${lab(250, 90, 112, window.CF_MUT().TEL ? window.CF_MUT().MUT + ' ' + window.CF_MUT().TEL : 'Avisa ya', '#2E7D32')}</g>` + heat(160, 136, 2));
  S.si_t2_ayuda = () => sc(out() + shade(40, 186) + W(100, 184, Object.assign({ pose: 'squat', face: 'worried' }, OUTW())) + W(160, 184, Object.assign({ pose: 'carry', flip: true }, OUTW())) + bottleW(136, 136)
    + `<g class="t2w"><path d="M210,110 q14,-10 24,4 q-12,6 -24,-4z" fill="#90CAF9"/></g>` + drop(118, 104, .5) + drop(126, 112, .4));
  S.si_t2_hidrata = () => sc((E() === 'agricola' ? field() : inside()) + `<rect x="20" y="66" width="34" height="84" rx="8" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/><rect x="28" y="54" width="18" height="14" rx="3" fill="#0277BD"/>` + glass(64, 150)
    + clock(130, 92, 28) + lab(130, 140, 86, '15-20 MIN', '#0277BD')
    + [['#FFF9C4', true], ['#FFE082', true], ['#E69A28', false]].map(([c, ok], i) => `<path d="M${210 + i * 36},${78} q14,18 14,28 a14,14 0 0 1 -28,0 q0,-10 14,-28z" fill="${c}" stroke="#A1887F" stroke-width="1.5"/>` + badge(210 + i * 36, 136, ok, 11)).join('') + lab(246, 58, 96, 'ORINA', '#5D4037'));
  S.si_t2_aviso_calor = () => avisoSc('Me siento mareado', 140);

  // ================= ESCENAS · ENFERMEDADES =================
  S.si_t2_ep = () => { let cal = `<rect x="186" y="34" width="110" height="80" rx="4" fill="#fff" stroke="#90A4AE" stroke-width="1.5"/><rect x="186" y="34" width="110" height="16" rx="4" fill="#E53935"/>`;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) cal += `<path d="M${194 + c * 17},${56 + r * 14} l8,8 M${202 + c * 17},${56 + r * 14} l-8,8" stroke="#90A4AE" stroke-width="1.6"/>`;
    return sc(inside() + `<path d="M70,30 l-14,30 h12 l-10,26 l26,-34 h-12 l10,-22z" fill="#FFC20E" stroke="#E65100" stroke-width="2" class="t2bl"/>` + W(84, 172, { pose: 'twist', face: 'pain' }) + lab(80, 188, 120, 'DE GOLPE', '#D7262B')
      + cal + W(226, 172, { pose: 'bend', face: 'pain' }) + lab(240, 188, 120, 'DE A POCO', '#6A1B9A') + divider()); };
  S.si_t2_agentes = () => { const it = [
      [55, 52, sun(55, 44, 14), 'FÍSICO'], [160, 52, `<path d="M152,26 h16 v14 l14,26 h-44 l14,-26z" fill="#AED581" stroke="#33691E" stroke-width="2"/>`, 'QUÍMICO'],
      [265, 52, `<circle cx="265" cy="46" r="14" fill="#EF5350"/>` + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<line x1="${265 + 14 * Math.cos(a)}" y1="${46 + 14 * Math.sin(a)}" x2="${265 + 21 * Math.cos(a)}" y2="${46 + 21 * Math.sin(a)}" stroke="#C62828" stroke-width="3"/><circle cx="${265 + 22 * Math.cos(a)}" cy="${46 + 22 * Math.sin(a)}" r="2.6" fill="#C62828"/>`; }).join(''), 'BIOLÓGICO'],
      [100, 136, box(84, 140, 34, 26) + `<path d="M72,104 q-6,14 4,30" stroke="#E53935" stroke-width="3" fill="none"/>`, 'ERGONÓMICO'], [220, 136, `<circle cx="220" cy="118" r="14" fill="${SK}" stroke="#455A64" stroke-width="2"/><path d="M200,104 q-4,-12 10,-12 q4,-10 16,-4 q12,-4 14,8 q8,4 0,10 z" fill="#78909C"/><path d="M222,100 l-4,8 h6 l-4,8" stroke="#FFC20E" stroke-width="2" fill="none"/>`, 'PSICOSOCIAL']];
    return sc(`<rect width="320" height="200" fill="#ECEFF1"/>` + it.map(([x, y, g, l]) => `<g class="t2f">${g}</g>` + lab(x, y + 26, 100, l, '#37474F')).join('')); };
  S.si_t2_ep_rubro = () => { const e = E();
    if (e === 'lacteos') return sc(bg() + `<rect x="20" y="78" width="130" height="62" rx="6" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/><rect x="30" y="88" width="50" height="24" fill="#E3F2FD"/><rect x="0" y="140" width="170" height="10" fill="#607D8B"/>${txt(85, 130, 'FLOW PACK', 11, '#263238')}` + waves(150, 100, 3) + W(220, 182, { flip: true, face: 'worried', muffs: 'neck' }) + `<g class="t2p">${ear(268, 92, .6)}</g>`);
    if (e === 'agroex') return sc(bg() + belt(10, 182, 250) + W(110, 176, { pose: 'carry', gloves: '#1E88E5' }) + `<circle cx="127" cy="126" r="10" fill="none" stroke="#E53935" stroke-width="3" class="t2p"/>` + W(230, 176, { pose: 'carry', flip: true, gloves: '#1E88E5' }) + `<circle cx="213" cy="126" r="10" fill="none" stroke="#E53935" stroke-width="3" class="t2p"/>`);
    if (e === 'agricola') return sc(field() + tree(70, 182, 1.05) + `<g class="t2f" opacity=".6"><circle cx="160" cy="96" r="14" fill="#E0E0E0"/><circle cx="140" cy="84" r="10" fill="#EEEEEE"/><circle cx="176" cy="80" r="9" fill="#E0E0E0"/></g>` + W(220, 184, { flip: true, pose: 'point', mask: true, glasses: true, gloves: '#43A047', shirt: '#FFCA28', pants: '#FFB300', hat: 'none', boots: '#212121' }) + `<rect x="226" y="116" width="18" height="30" rx="4" fill="#FFB300" stroke="#E65100"/><line x1="192" y1="122" x2="172" y2="110" stroke="#263238" stroke-width="2"/>`);
    return sc(office() + win(220, 30) + desk(40, 182) + W(150, 184, { pose: 'bend', flip: true, face: 'pain' }) + `<circle cx="134" cy="128" r="12" fill="none" stroke="#E53935" stroke-width="3" class="t2p"/>`); };
  S.si_t2_preven = () => { const e = E();
    if (e === 'inversiones') return sc(office() + win(220, 30) + desk(30, 182) + W(170, 184, { pose: 'stop' }) + badge(290, 170, true));
    const o = P4({ lacteos: { muffs: 'on', gloves: '#1E88E5' }, agroex: { gloves: '#1E88E5' }, agricola: { mask: true, glasses: true, gloves: '#43A047', shirt: '#FFCA28', pants: '#FFB300', hat: 'none', boots: '#212121' } });
    return sc((e === 'agricola' ? field() + tree(70, 182, 1) : bg() + (e === 'lacteos' ? vat(10, 182, 110) : belt(10, 182, 110))) + W(190, 184, Object.assign({ s: 1.2 }, o)) + badge(290, 40, true)); };
  S.si_t2_vigilancia = () => sc(`<rect width="320" height="200" fill="#E8F5E9"/><rect y="150" width="320" height="50" fill="#C8E6C9"/><rect x="20" y="40" width="120" height="112" rx="4" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/><rect x="34" y="56" width="92" height="56" fill="#B3E5FC" stroke="#90A4AE"/>`
    + W(80, 132, Object.assign({}, NOHAT, { muffs: 'on', s: .8, shirt: P4({ lacteos: '#F5F7FA', agroex: '#E3F2FD', agricola: '#1F3A6B', inversiones: '#90CAF9' }) })).replace(/<ellipse[^>]*opacity=".13"\/>/, '')
    + W(230, 184, Object.assign({}, NOHAT, { shirt: '#FFFFFF', pants: '#ECEFF1', flip: true, pose: 'carry' })) + `<path d="M224,124 q-6,14 4,22" stroke="#455A64" stroke-width="2" fill="none"/>` + `<rect x="202" y="118" width="20" height="26" rx="2" fill="#fff" stroke="#90A4AE"/><path d="M206,126 h12 M206,132 h12 M206,138 h8" stroke="#90A4AE"/>`
    + `<rect x="190" y="30" width="56" height="30" rx="4" fill="#2E7D32"/><path d="M218,36 v18 M209,45 h18" stroke="#fff" stroke-width="5"/>`);
  S.si_t2_avisar = () => avisoSc(P4({ lacteos: 'Me zumban los oídos', agroex: 'Me duele la muñeca', agricola: 'Me pica la piel', inversiones: 'Me duele el cuello' }), 150);

  // ================= TEMAS · UV, CALOR, ENFERMEDADES =================
  SI_CONT.temas.push({
    id: 'uv', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Radiación UV de origen solar', thumb: 'si_t2_sol', mins: 12,
    learn: [
      { s: 'si_t2_sol', t: 'Un riesgo que no se siente', x: 'El sol emite <b>radiación ultravioleta (UV)</b>. No se ve ni se siente, y daña aunque el día esté nublado o fresco. Con los años produce <b>quemaduras, manchas, envejecimiento de la piel, daño a los ojos (cataratas) y cáncer de piel</b>. La Ley 20.096 y el protocolo MINSAL de radiación UV obligan a proteger a quienes trabajan al sol.' },
      { s: 'si_t2_quien', t: '¿Quién está expuesto en ' + LUGAR + '?', x: 'Todos: cosecha, poda, amarre, estructura, aplicación, riego y tractoristas trabajan al sol casi toda la jornada. <b>Basta estar una parte del día al sol</b> para necesitar protección.' },
      { s: 'si_t2_indice', t: 'El índice UV', x: 'Mide la fuerza de la radiación:<ul><li><b>1-2</b> bajo</li><li><b>3-5</b> moderado</li><li><b>6-7</b> alto</li><li><b>8-10</b> muy alto</li><li><b>11 o más</b> extremo</li></ul>En primavera y verano, en nuestra zona, suele llegar a muy alto o extremo. <b>Desde 3 hay que protegerse.</b> Lo informan la radio, la televisión y las aplicaciones del clima.' },
      { s: 'si_t2_horario', t: 'El horario más peligroso: de 11 a 16 h', x: 'Entre las <b>11 y las 16 horas</b> la radiación es más fuerte. En ese horario:<ul><li>Busca la sombra en tus pausas.</li><li>Cuando se pueda, las tareas al sol se programan antes de las 11 o después de las 16.</li><li>Nunca te saques la protección, aunque haga calor.</li></ul>', k: 'Entre las 11 y las 16 h: protección completa y sombra siempre que se pueda.' },
      { s: 'si_t2_epp_uv', t: 'Tu protección contra el sol', x: '<ul><li><b>Legionario o jockey con cubrenuca</b>: protege cara, orejas y cuello.</li><li><b>Ropa de manga larga</b> y pantalón largo.</li><li><b>Lentes con filtro UV</b>.</li><li><b>Bloqueador FPS 50+</b> en la piel que queda al aire.</li></ul>Úsalos aunque esté nublado. La empresa entrega los elementos; tu parte es usarlos y cuidarlos.' },
      { s: 'si_t2_fps', t: 'Bloqueador bien usado', x: '<ul><li>Aplícalo <b>30 minutos antes</b> de salir al sol en cara, orejas, cuello, nuca y manos.</li><li><b>Repítelo cada 2 horas</b>, y después de sudar mucho o mojarte.</li><li>Ponte una buena cantidad, no una capa delgada.</li></ul>Aplícalo con las manos limpias, nunca después de manipular agroquímicos sin lavarte.' },
      { s: 'si_t2_sombra', t: 'Sombra e hidratación', x: 'El sol también deshidrata y calienta el cuerpo.<ul><li>Toma agua seguido, aunque no tengas sed.</li><li>Haz tus pausas a la sombra o en el lugar que indique tu jefatura.</li><li>Evita el alcohol y las bebidas muy azucaradas.</li><li>Mantén la manga larga puesta: es tu barrera contra el sol.</li></ul>' },
      { s: 'si_t2_piel', t: 'Revisa tu piel y avisa', x: 'Si notas un <b>lunar que cambia de forma, color o tamaño</b>, una herida que no sana, o terminas con quemaduras o los ojos irritados después de trabajar al sol, avisa a tu jefatura y consulta. <b>El daño del sol se acumula</b> con los años: lo que te cuidas hoy evita una enfermedad mañana.' }
    ],
    quiz: [
      { s: 'si_t2_horario', v: [
        { q: '¿En qué horario la radiación UV es más fuerte?', o: ['Entre las 11 y las 16 horas', 'Entre las 8 y las 10 de la mañana', 'Entre las 17 y las 20 horas', 'Es igual durante todo el día'], w: 'Entre las 11 y las 16 horas el sol está más alto y la radiación UV es más intensa.' },
        { q: 'Tienes que cosechar al sol a las 13 horas. ¿Qué tomas en cuenta?', o: ['Es horario de mayor radiación: me protejo completo', 'A esa hora el sol ya no hace daño', 'Solo hay riesgo si hace mucho calor', 'Basta con el bloqueador que me puse en la mañana'], w: 'A las 13 horas la radiación está en su punto más alto. Además, el bloqueador se repite cada 2 horas.' },
        { q: 'Si se puede elegir, ¿cuándo conviene hacer las tareas al sol?', o: ['Antes de las 11 o después de las 16 horas', 'Justo al mediodía, para terminar rápido', 'Entre las 12 y las 15 horas', 'Da lo mismo el horario'], w: 'Fuera del horario de 11 a 16 horas la radiación es menor.' }] },
      { s: 'si_t2_sol', v: [
        { q: 'Si el día está nublado o fresco, no es necesario protegerse del sol.', vf: false, w: 'Falso. La radiación UV atraviesa las nubes y daña aunque no haga calor.' },
        { q: '¿Por qué la radiación UV es un riesgo engañoso?', o: ['Porque no se ve ni se siente, y daña aunque esté nublado', 'Porque solo afecta a las personas de piel clara', 'Porque solo daña cuando hace mucho calor', 'Porque solo es peligrosa en la playa'], w: 'La radiación UV no se siente: el calor que sientes es otra cosa. Por eso hay que protegerse aunque esté fresco o nublado.' },
        { q: '¿Qué daños puede causar la radiación UV con los años?', o: ['Cáncer de piel, manchas y daño a los ojos', 'Solo un bronceado pasajero', 'Solo dolor de cabeza el mismo día', 'Pérdida de audición'], w: 'El daño del sol se acumula y puede terminar en cáncer de piel o cataratas.' }] },
      { s: 'si_t2_indice', v: [
        { q: 'Un índice UV de 9 corresponde a un nivel:', o: ['Muy alto', 'Bajo', 'Moderado', 'Alto'], w: 'La escala es: 1-2 bajo, 3-5 moderado, 6-7 alto, 8-10 muy alto y 11 o más extremo.' },
        { q: '¿Desde qué índice UV es necesario protegerse?', o: ['Desde 3 (moderado)', 'Solo desde 11 (extremo)', 'Desde 8 (muy alto)', 'Solo desde 6 (alto)'], w: 'Desde el nivel moderado (3) ya hay que usar protección.' },
        { q: 'El índice UV del día es 11. ¿Qué significa?', o: ['Riesgo extremo: protección completa y sombra', 'Riesgo bajo: no se necesita protección', 'Riesgo moderado: basta con lentes', 'Que el día va a estar nublado y fresco'], w: 'Un índice de 11 o más es extremo: la piel se quema en pocos minutos sin protección.' }] },
      { s: 'si_t2_epp_uv', v: [
        { q: '¿Qué protección corresponde para trabajar al sol?', o: ['Legionario, manga larga, lentes UV y bloqueador FPS 50+', 'Polera sin mangas y bloqueador', 'Jockey sin cubrenuca y cualquier lente oscuro', 'Solo bloqueador, que reemplaza la ropa'], w: 'La protección completa combina gorro con cubrenuca, manga larga, lentes con filtro UV y bloqueador.' },
        { q: '¿Para qué sirve el cubrenuca del legionario?', o: ['Protege del sol el cuello y las orejas', 'Solo evita que se vuele el gorro', 'Evita que transpire la cabeza', 'Reemplaza al bloqueador en la cara'], w: 'El cuello y las orejas son zonas donde el sol pega directo y aparecen lesiones con frecuencia.' },
        { q: '¿Qué lentes sirven para protegerte del sol en el trabajo?', o: ['Lentes con filtro UV', 'Cualquier lente oscuro, aunque no tenga filtro', 'Lentes ópticos comunes', 'Ninguno: los lentes no protegen del sol'], w: 'Solo el filtro UV protege los ojos. Un lente oscuro sin filtro incluso puede ser peor, porque dilata la pupila.' }] },
      { s: 'si_t2_fps', v: [
        { q: '¿Cada cuánto debes repetir el bloqueador?', o: ['Cada 2 horas y después de sudar o mojarte', 'Una vez al día, en la mañana, basta', 'Solo cuando la piel ya está roja', 'Cada 6 horas, aunque sude mucho'], w: 'El bloqueador pierde efecto con el tiempo, el sudor y el agua: se repite cada 2 horas.' },
        { q: '¿Cuándo te aplicas el bloqueador la primera vez?', o: ['30 minutos antes de salir al sol', 'Cuando ya llevas una hora al sol', 'Al terminar la jornada', 'Solo si ves que te estás quemando'], w: 'Se aplica 30 minutos antes de exponerte, para que alcance a actuar.' },
        { q: '¿Qué factor de bloqueador se recomienda para el trabajo al sol?', o: ['FPS 50 o más', 'FPS 8', 'FPS 15', 'Cualquiera, el factor no importa'], w: 'Para trabajo al aire libre se recomienda FPS 50 o más.' }] },
      { s: 'si_t2_quien', v: [
        { q: 'En ' + LUGAR + ', ¿quién está expuesto a radiación UV?', o: ['Todos en el campo: cosecha, poda, amarre y riego', 'Solo quien trabaja todo el día al sol, sin pausas', 'Nadie, si la jornada empieza temprano en la mañana', 'Solo las personas de piel clara'], w: 'Basta con trabajar una parte del día al sol para estar expuesto y necesitar protección.' },
        { q: 'Aunque solo estés una parte del día al sol, debes protegerte.', vf: true, w: 'Verdadero. El daño se suma día a día, aunque sean ratos cortos.' },
        { q: '¿Qué ley obliga a proteger a los trabajadores de la radiación UV?', o: ['Ley 20.096', 'Ley 21.643', 'Ley 20.949', 'DS 57'], w: 'La Ley 20.096 establece medidas de protección contra la radiación UV. La 21.643 es la Ley Karin, la 20.949 es de carga manual y el DS 57 trata las HDS.' }] },
      { s: 'si_t2_piel', v: [
        { q: 'Notas que un lunar cambió de color y de tamaño. ¿Qué haces?', o: ['Aviso a mi jefatura y consulto a un médico', 'Lo tapo con bloqueador y sigo igual', 'Espero unos años para ver si cambia más', 'Lo reviso yo mismo cada tanto, sin consultar'], w: 'Un lunar que cambia puede ser una señal de cáncer de piel. Consultar a tiempo hace la diferencia.' },
        { q: 'Terminas el día con los ojos rojos e irritados después de trabajar al sol. ¿Qué haces?', o: ['Aviso, consulto y desde ahora uso lentes con filtro UV', 'Me froto fuerte los ojos para aliviarlos', 'No digo nada, se pasa solo', 'Sigo sin lentes porque me incomodan'], w: 'La irritación es una señal de daño por el sol. Hay que consultar y proteger los ojos con lentes UV.' },
        { q: '¿Por qué hay que cuidarse del sol todos los días?', o: ['Porque el daño se acumula con los años', 'Porque la piel se acostumbra y deja de dañarse', 'Porque así el bronceado queda parejo', 'Porque el daño desaparece cada invierno'], w: 'La piel guarda el daño de cada exposición. El cáncer de piel aparece años después.' }] },
      { s: 'si_t2_sombra', v: [
        { q: 'Durante el trabajo al sol, ¿qué más debes hacer?', o: ['Tomar agua seguido y hacer las pausas a la sombra', 'Tomar bebidas con alcohol para refrescarme', 'Esperar a tener sed para tomar agua', 'Sacarme la camisa para estar más fresco'], w: 'El sol deshidrata: agua seguido y pausas a la sombra. Sacarse la ropa deja la piel expuesta.' },
        { q: '¿Dónde conviene hacer las pausas en un día de sol fuerte?', o: ['A la sombra o en un lugar fresco', 'Al sol, para secar la ropa', 'Dentro de un vehículo cerrado', 'Donde sea, da lo mismo'], w: 'La sombra reduce la radiación y el calor. Un vehículo cerrado al sol se calienta mucho.' },
        { q: 'Hace calor y el sol pega fuerte. ¿Qué haces con la ropa?', o: ['Mantengo la manga larga y el legionario puestos', 'Me saco la camisa para no transpirar', 'Me arremango las mangas hasta los hombros', 'Me saco el legionario porque da calor'], w: 'La ropa es tu primera barrera contra la radiación UV. Una tela liviana y clara es fresca y protege.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'calor', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Altas temperaturas y golpe de calor', thumb: 'si_t2_termo', mins: 12,
    learn: [
      { s: 'si_t2_termo', t: '¿Por qué el calor es peligroso?', x: 'El cuerpo se enfría sudando. Si hace mucho calor, el trabajo es pesado o no tomas agua, pierdes agua y sales, y tu temperatura sube. Eso produce <b>calambres, deshidratación, agotamiento por calor y golpe de calor</b>, que es una emergencia. El DS 594 fija límites para trabajar expuesto al calor.' },
      { s: 'si_t2_lugar', t: 'El calor en tu trabajo', x: 'En la cosecha de frambuesa, en pleno verano, se trabaja al sol, agachándose y llevando bandejas. A eso se suman el esfuerzo físico, la ropa de trabajo y el EPP.' },
      { s: 'si_t2_sintomas', t: 'Señales de alerta', x: '<ul><li><b>Calambres:</b> dolor y contracción en piernas, brazos o abdomen.</li><li><b>Deshidratación:</b> sed, boca seca, orina escasa y oscura, dolor de cabeza.</li><li><b>Agotamiento por calor:</b> sudor abundante, piel fría y húmeda, mareo, náuseas, debilidad.</li><li><b>Golpe de calor:</b> piel caliente y roja, confusión, habla rara, desmayo.</li></ul>' },
      { s: 'si_t2_golpe', t: 'El golpe de calor es una emergencia', x: 'Si alguien está <b>confundido, se desmaya o tiene la piel muy caliente</b>, puede ser un golpe de calor: la temperatura del cuerpo sube tanto que puede causar la muerte. <b>Avisa de inmediato</b> a tu jefatura y llama a {LAMUT} ({TEL}). Mientras llega la ayuda, empieza a enfriarlo.', k: 'Golpe de calor: avisa de inmediato y llama al 1404.' },
      { s: 'si_t2_ayuda', t: 'Si un compañero tiene síntomas', x: '<ul><li>Llévalo a la <b>sombra</b> o a un lugar fresco y que deje de trabajar.</li><li>Aflójale la ropa y sácale el EPP que le dé calor.</li><li>Moja su piel con agua y abanícalo.</li><li>Si está consciente, dale agua a sorbos. Si está confundido o desmayado, <b>no le des de beber</b>.</li><li>No lo dejes solo y avisa a tu jefatura.</li></ul>' },
      { s: 'si_t2_hidrata', t: 'Hidratación constante', x: 'Toma <b>un vaso de agua cada 15 a 20 minutos</b>, aunque no tengas sed: cuando aparece la sed, ya empezaste a deshidratarte. Ten el agua cerca en el sector o en el vehículo de apoyo. Evita el alcohol y las bebidas energéticas o muy azucaradas. Mira tu orina: clara está bien; oscura es falta de agua.' },
      { s: 'si_t2_sombra', t: 'Pausas a la sombra y ropa clara', x: '<ul><li>Haz tus pausas en un lugar fresco o a la sombra.</li><li>Usa ropa liviana, de color claro y de manga larga, con legionario.</li><li>Las tareas más pesadas, cuando se pueda, en las horas más frescas.</li><li>Si eres nuevo o vuelves de vacaciones, ve de a poco: el cuerpo tarda varios días en acostumbrarse al calor.</li></ul>' },
      { s: 'si_t2_aviso_calor', t: 'Te cuidas desde antes', x: 'Llega descansado y con desayuno; el alcohol del día anterior deshidrata. Si tomas remedios o tienes una enfermedad (presión, corazón, diabetes), coméntalo con tu médico. Si te sientes mal, <b>detente y avisa</b>: no sigas para terminar la tarea.', k: 'Si te sientes mal por el calor, detente y avisa: no sigas trabajando.' }
    ],
    quiz: [
      { s: 'si_t2_hidrata', v: [
        { q: '¿Cada cuánto conviene tomar agua cuando hace calor?', o: ['Un vaso cada 15 a 20 minutos, aunque no tenga sed', 'Solo cuando tengo mucha sed', 'Solo a la hora de colación', 'Una botella grande al final del turno'], w: 'Hay que tomar poco y seguido. Cuando aparece la sed ya hay deshidratación.' },
        { q: 'Si no tengo sed, significa que no me estoy deshidratando.', vf: false, w: 'Falso. La sed llega tarde: cuando la sientes, ya empezaste a deshidratarte.' },
        { q: '¿Qué es mejor para hidratarte durante el trabajo?', o: ['Agua potable', 'Bebida energética', 'Cerveza bien helada', 'Bebida muy azucarada'], w: 'El agua hidrata. El alcohol, las bebidas energéticas y las muy azucaradas deshidratan o no ayudan.' }] },
      { s: 'si_t2_sintomas', v: [
        { q: '¿Qué indica una orina escasa y oscura?', o: ['Que me falta agua: me estoy deshidratando', 'Que estoy bien hidratado', 'Que tomé demasiada agua', 'Que comí mucho en el almuerzo'], w: 'La orina oscura y escasa es señal de deshidratación. Clara significa que estás bien hidratado.' },
        { q: '¿Cuál de estas es una señal de deshidratación?', o: ['Boca seca, sed, orina oscura y dolor de cabeza', 'Ganas frecuentes de orinar y orina clara', 'Manos frías por lavar con agua', 'Hambre antes de la colación'], w: 'Sed, boca seca, orina oscura y dolor de cabeza indican que el cuerpo necesita agua.' },
        { q: 'Llevas horas al calor, te duele la cabeza y tienes la boca seca. ¿Qué haces?', o: ['Paro, tomo agua a la sombra y aviso si no mejoro', 'Sigo hasta terminar y tomo agua en la casa', 'Me tomo un café para despertar', 'Me saco el EPP y sigo trabajando'], w: 'Son señales de deshidratación: hay que parar, hidratarse a la sombra y avisar si no mejoras.' }] },
      { s: 'si_t2_golpe', v: [
        { q: 'Un compañero está confundido, habla raro y tiene la piel muy caliente. ¿Qué puede ser?', o: ['Un golpe de calor: es una emergencia', 'Un simple cansancio, que se pasa solo', 'Un calambre muscular', 'Hambre por no haber almorzado'], w: 'Confusión, habla rara y piel muy caliente son señales de golpe de calor, que puede ser mortal.' },
        { q: '¿Qué haces primero si sospechas un golpe de calor en un compañero?', o: ['Aviso de inmediato, llamo a {LAMUT} y lo llevo a la sombra', 'Le digo que siga y que tome agua después', 'Lo dejo descansando solo, al sol', 'Le doy una bebida energética para que se recupere'], w: 'Es una emergencia: se avisa de inmediato, se llama a {LAMUT} y se empieza a enfriar a la persona.' },
        { q: 'El golpe de calor es una emergencia que puede causar la muerte.', vf: true, w: 'Verdadero. Por eso se avisa de inmediato y se llama a {LAMUT} ({TEL}).' }] },
      { s: 'si_t2_ayuda', v: [
        { q: 'Un compañero se desmayó por el calor. ¿Qué NO debes hacer?', o: ['Darle agua mientras está inconsciente', 'Llevarlo a la sombra', 'Mojarle la piel con agua', 'Avisar y llamar a {LAMUT}'], w: 'A una persona desmayada o confundida no se le da de beber: puede ahogarse. Lo demás es correcto.' },
        { q: 'Un compañero tiene mareo y sudor abundante, pero está consciente. ¿Cómo lo ayudas?', o: ['Lo llevo a la sombra, le aflojo la ropa y le doy agua a sorbos', 'Le digo que termine la tarea y después descanse', 'Lo abrigo para que no se enfríe', 'Lo dejo solo para que descanse tranquilo'], w: 'Son síntomas de agotamiento por calor: sombra, ropa suelta, agua a sorbos, compañía y aviso a la jefatura.' },
        { q: 'Para enfriar a alguien con síntomas de calor, ¿qué haces?', o: ['Le mojo la piel con agua y lo abanico a la sombra', 'Lo cubro con una frazada', 'Lo dejo dentro de un vehículo cerrado', 'Le doy una bebida alcohólica fría'], w: 'El agua en la piel y el aire ayudan a bajar la temperatura del cuerpo.' }] },
      { s: 'si_t2_lugar', v: [
        { q: 'En tu trabajo, ¿qué aumenta el riesgo por calor?', o: ['El sol, agacharse a cosechar y llevar bandejas', 'Trabajar en las horas más frescas del día', 'Hacer las pausas en un lugar fresco o a la sombra', 'Usar ropa liviana y de color claro'], w: 'El calor del ambiente se suma al esfuerzo y a la ropa. Las otras opciones son medidas que reducen el riesgo.' },
        { q: '¿Quién debe ir de a poco cuando empieza el calor?', o: ['Las personas nuevas o que vuelven de vacaciones', 'Solo los mayores de 60 años', 'Nadie: el cuerpo se adapta el primer día', 'Solo quienes trabajan de noche'], w: 'El cuerpo tarda varios días en acostumbrarse al calor. Los primeros días el riesgo es mayor.' },
        { q: '¿Qué ropa ayuda a soportar el calor?', o: ['Liviana y de color claro', 'Gruesa y de color oscuro', 'Ajustada y sintética', 'Varias capas para absorber el sudor'], w: 'La ropa clara y liviana absorbe menos calor y deja que el sudor se evapore.' }] },
      { s: 'si_t2_termo', v: [
        { q: 'Tienes calambres en las piernas después de sudar mucho. ¿Qué indican?', o: ['Pérdida de agua y sales: debo parar e hidratarme', 'Que necesito moverme más para que se pasen', 'Que me falta abrigo en las piernas', 'Que tengo hambre y debo comer algo'], w: 'Los calambres por calor se deben a la pérdida de agua y sales con el sudor.' },
        { q: '¿Cuál es un síntoma de agotamiento por calor?', o: ['Sudor abundante, mareo, náuseas y debilidad', 'Piel seca y fría por el viento', 'Ganas de comer algo dulce a media tarde', 'Sueño después del almuerzo'], w: 'El agotamiento por calor da sudor abundante, mareo, náuseas y debilidad. Si no se atiende, puede llegar a golpe de calor.' },
        { q: 'Te sientes mareado y con náuseas en pleno calor. ¿Qué haces?', o: ['Me detengo, voy a la sombra, tomo agua y aviso', 'Sigo para no atrasar a mis compañeros', 'Me tomo una bebida energética y sigo', 'Espero la colación para descansar'], w: 'Son señales de alerta: hay que parar de inmediato, enfriarse, hidratarse y avisar.' }] },
      { s: 'si_t2_aviso_calor', v: [
        { q: '¿Qué te ayuda a soportar mejor el calor en el trabajo?', o: ['Llegar descansado, con desayuno y sin alcohol del día anterior', 'Saltarme el desayuno para no sentirme pesado', 'Tomar alcohol la noche anterior para relajarme', 'Tomar mucho café para no cansarme'], w: 'El descanso y la alimentación ayudan. El alcohol y el exceso de café deshidratan.' },
        { q: 'El alcohol del día anterior aumenta el riesgo de deshidratación en el trabajo.', vf: true, w: 'Verdadero. El alcohol hace perder agua al cuerpo.' },
        { q: 'Tomas remedios para la presión y trabajas con calor. ¿Qué haces?', o: ['Lo comento con mi médico y aviso si me siento mal', 'Dejo los remedios en verano por mi cuenta', 'Tomo el doble de remedio para compensar', 'Nada distinto, no tiene relación'], w: 'Algunos remedios y enfermedades aumentan el riesgo con el calor. Tu médico te indicará qué cuidar.' }] },
      { s: 'si_t2_sombra', v: [
        { q: '¿Dónde haces tus pausas en un día caluroso?', o: ['En un lugar fresco o a la sombra', 'Al sol, para no enfriarme de golpe', 'Dentro de un vehículo cerrado', 'En el mismo puesto, sin parar'], w: 'La pausa a la sombra o en un lugar fresco ayuda a bajar la temperatura del cuerpo.' },
        { q: 'Si se puede elegir, ¿cuándo conviene hacer las tareas más pesadas?', o: ['En las horas más frescas del día', 'A pleno mediodía', 'Justo después de almuerzo', 'Al final de la tarde, con el calor acumulado'], w: 'El esfuerzo genera calor en el cuerpo: en las horas frescas se suma menos.' },
        { q: '¿En qué situación el calor afecta más?', o: ['Trabajo pesado, sin tomar agua y sin pausas', 'Trabajo en horas frescas', 'Ropa clara y liviana', 'Agua seguido y pausas a la sombra'], w: 'El esfuerzo, la falta de agua y la falta de pausas aumentan el riesgo de un cuadro por calor.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'enfermedades', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Efectos en la salud y enfermedades profesionales', thumb: 'si_t2_ep', mins: 12,
    learn: [
      { s: 'si_t2_ep', t: '¿Qué es una enfermedad profesional?', x: 'Es la causada <b>de forma directa por el trabajo</b> que haces y que produce incapacidad o muerte (Ley 16.744). A diferencia de un accidente, <b>no pasa de golpe</b>: aparece de a poco, después de meses o años de exposición a un agente, como ruido, movimientos repetitivos, químicos, sol o estrés. Por eso se previene todos los días.' },
      { s: 'si_t2_agentes', t: 'Los agentes que enferman', x: '<ul><li><b>Físicos:</b> ruido, calor, frío, radiación UV, vibración.</li><li><b>Químicos:</b> agroquímicos y combustibles.</li><li><b>Biológicos:</b> virus y bacterias, como el hantavirus.</li><li><b>Ergonómicos:</b> carga manual, posturas y movimientos repetitivos.</li><li><b>Psicosociales:</b> sobrecarga, acoso, estrés.</li></ul>' },
      { s: 'si_t2_ep_rubro', t: 'Ejemplos en ' + LUGAR, x: '<ul><li>Dermatitis y otros daños a la salud por agroquímicos.</li><li>Cáncer de piel por el sol.</li><li>Lumbago por la postura al cosechar y la carga de bandejas.</li><li>Tendinitis en poda y amarre.</li></ul>' },
      { s: 'si_t2_preven', t: 'Se previene en el día a día', x: '<ul><li>Usa siempre tu EPP: respirador, antiparras, traje y guantes de nitrilo en aplicación; legionario al sol.</li><li>Haz tus pausas y alterna tareas cuando corresponda.</li><li>Levanta carga con técnica y respetando los límites de la Ley 20.949.</li><li>Antes de usar un químico, revisa su HDS.</li></ul>' },
      { s: 'si_t2_vigilancia', t: 'Vigilancia de salud', x: 'Si trabajas expuesto a un agente como ruido o plaguicidas, la empresa junto con {LAMUT} te incluye en un <b>programa de vigilancia de salud</b>: exámenes periódicos, como audiometrías o exámenes de sangre para aplicadores de plaguicidas. <b>Asiste cuando te citen</b>, aunque te sientas bien: los exámenes detectan el daño a tiempo, antes de que sea grave.' },
      { s: 'si_t2_avisar', t: 'Avisa tus molestias a tiempo', x: 'Un dolor de muñeca que no se pasa, zumbido en los oídos, picazón en la piel, tos o dolor de cabeza después de trabajar: <b>avísalo de inmediato</b> a tu jefatura. Tomado a tiempo, se trata y se corrige la causa. Esperar a que \"se pase solo\" puede dejar un daño para siempre.', k: 'Avisa las molestias apenas aparezcan: no esperes a que sea grave.' },
      { s: 'si_t2_vigilancia', t: '¿Dónde se atiende?', x: 'Si crees que una molestia es causada por tu trabajo, avisa a tu jefatura y consulta en <b>{LAMUT}</b>. Allí evalúan si es de origen laboral. Si lo es, la Ley 16.744 cubre la atención y el tratamiento. Cuenta con detalle qué tarea haces, cómo la haces y desde cuándo tienes la molestia.' }
    ],
    quiz: [
      { s: 'si_t2_ep', v: [
        { q: '¿Qué es una enfermedad profesional?', o: ['La causada de forma directa por el trabajo que se realiza', 'Cualquier resfrío que te dé durante el año', 'Una lesión que ocurre de golpe en un accidente', 'Una enfermedad que tenías antes de entrar'], w: 'La enfermedad profesional la causa directamente el trabajo, por exposición a un agente en el tiempo.' },
        { q: '¿En qué se diferencia una enfermedad profesional de un accidente del trabajo?', o: ['La enfermedad aparece de a poco, con el tiempo', 'La enfermedad ocurre siempre de golpe', 'El accidente nunca deja secuelas en la persona', 'No hay diferencia: son exactamente lo mismo'], w: 'El accidente es súbito; la enfermedad profesional se desarrolla lentamente por la exposición.' },
        { q: 'Una enfermedad profesional suele aparecer después de meses o años de exposición.', vf: true, w: 'Verdadero. Por eso se previene cada día, aunque hoy no se note ningún daño.' }] },
      { s: 'si_t2_ep_rubro', v: [
        { q: '¿Cuál es una enfermedad profesional típica en ' + LUGAR + '?', o: ['Dermatitis por contacto con agroquímicos', 'Gripe común contagiada en la casa', 'Una fractura por una caída en el pasillo', 'Una alergia alimentaria de nacimiento'], w: 'Es una enfermedad causada directamente por un agente de tu trabajo. Las otras no tienen origen en el trabajo o son accidentes.' },
        { q: '¿Qué agente puede causar hipoacusia (sordera) profesional?', o: ['El ruido', 'El frío', 'La luz', 'El agua'], w: 'La exposición a ruido sin protección daña el oído de forma permanente.' },
        { q: 'Los movimientos repetitivos de manos y brazos, ¿qué enfermedad pueden causar?', o: ['Tendinitis', 'Hipoacusia', 'Hantavirus', 'Dermatitis'], w: 'Repetir el mismo movimiento por horas inflama tendones y nervios de manos y brazos.' }] },
      { s: 'si_t2_agentes', v: [
        { q: 'La radiación UV, el ruido y el calor son agentes:', o: ['Físicos', 'Biológicos', 'Psicosociales', 'Químicos'], w: 'Ruido, calor, frío, radiación y vibración son agentes físicos.' },
        { q: 'El hantavirus es un agente:', o: ['Biológico', 'Físico', 'Ergonómico', 'Químico'], w: 'Los virus y bacterias son agentes biológicos.' },
        { q: 'La sobrecarga de trabajo y el acoso son riesgos:', o: ['Psicosociales', 'Físicos', 'Químicos', 'Biológicos'], w: 'Los riesgos psicosociales vienen de la organización del trabajo y las relaciones, y afectan la salud mental y física.' }] },
      { s: 'si_t2_vigilancia', v: [
        { q: '¿Para qué sirven los exámenes de vigilancia de salud, como la audiometría?', o: ['Para detectar a tiempo un daño del trabajo', 'Para decidir si te suben el sueldo', 'Solo para llenar la ficha de ingreso', 'Para reemplazar el uso del EPP diario'], w: 'La vigilancia detecta el daño temprano, cuando todavía se puede evitar que avance.' },
        { q: 'Te citan a un examen de vigilancia de salud en {LAMUT}. ¿Qué haces?', o: ['Asisto, aunque me sienta bien', 'No voy, porque me siento bien', 'Voy solo si me duele algo', 'Lo dejo para la próxima temporada'], w: 'Muchas enfermedades profesionales no duelen al principio. El examen las detecta a tiempo.' },
        { q: 'Si me siento bien, no necesito ir a los exámenes de vigilancia de salud.', vf: false, w: 'Falso. El daño, como la pérdida auditiva, avanza sin síntomas al principio.' }] },
      { s: 'si_t2_avisar', v: [
        { q: 'Llevas semanas con un dolor en la muñeca que no se pasa. ¿Qué haces?', o: ['Aviso a mi jefatura y consulto en {LAMUT}', 'Espero a que se pase solo', 'Me tomo un analgésico todos los días y sigo', 'Lo cuento recién al final de la temporada'], w: 'Una molestia que se repite puede ser el inicio de una enfermedad profesional. Avisar a tiempo permite tratarla y corregir la causa.' },
        { q: 'Notas un zumbido en los oídos al salir del turno. ¿Qué haces?', o: ['Aviso, reviso que uso bien el protector auditivo y consulto', 'No le doy importancia, es normal', 'Subo el volumen de la música para taparlo', 'Dejo de usar el protector para acostumbrarme'], w: 'El zumbido es una señal de daño por ruido. Hay que avisar y protegerse bien.' },
        { q: '¿Por qué hay que avisar a tiempo una molestia?', o: ['Porque tomada a tiempo se trata y se corrige la causa', 'Porque así te dan días libres', 'Porque después ya no se puede avisar nunca', 'Para que te cambien de empresa'], w: 'Mientras antes se detecta, más fácil es tratarla y evitar un daño permanente.' }] },
      { s: 'si_t2_preven', v: [
        { q: '¿Cuál es la mejor forma de prevenir una enfermedad profesional?', o: ['Usar el EPP, hacer pausas y seguir los procedimientos cada día', 'Esperar a los exámenes de vigilancia', 'Tomar vitaminas', 'Trabajar más rápido para exponerse menos tiempo'], w: 'La prevención diaria evita la exposición al agente. Los exámenes solo detectan el daño.' },
        { q: 'Antes de usar un producto químico nuevo, ¿qué debes revisar?', o: ['Su HDS (hoja de datos de seguridad)', 'Solo el precio del producto', 'El color y la forma del envase', 'Que tenga buen olor al abrirlo'], w: 'La HDS indica los peligros del producto, el EPP que necesitas y qué hacer en caso de contacto.' },
        { q: '¿Qué ley fija los límites de peso para la carga manual?', o: ['Ley 20.949', 'Ley 20.096', 'Ley 21.643', 'DS 57'], w: 'La Ley 20.949 fija 25 kg para hombres y 20 kg para mujeres y menores de 18 años.' }] },
      { s: 'si_t2_agentes', v: [
        { q: 'Los agroquímicos pueden causar:', o: ['Dermatitis o intoxicación', 'Hipoacusia o sordera', 'Fatiga visual o lumbago', 'Ningún daño, si son de uso común'], w: 'Los químicos dañan la piel, los ojos y el cuerpo si se manipulan sin la protección que indica su HDS.' },
        { q: '¿Qué protege la piel de las manos frente a un químico?', o: ['Guantes adecuados, según la HDS', 'Guantes de tela de algodón', 'Nada: basta con lavarse después', 'Una crema de manos antes de empezar'], w: 'Cada químico requiere un tipo de guante; la HDS indica cuál.' },
        { q: 'Te salen ronchas en las manos cada vez que manipulas agroquímicos. ¿Qué haces?', o: ['Aviso y consulto: puede ser dermatitis', 'Me rasco y sigo trabajando igual', 'Uso otro producto que traje de mi casa', 'Me pongo crema y no digo nada'], w: 'Una reacción que se repite con un producto del trabajo debe evaluarse. Puede ser una enfermedad profesional.' }] },
      { s: 'si_t2_vigilancia', v: [
        { q: 'Crees que una molestia es causada por tu trabajo. ¿Dónde consultas?', o: ['En {LAMUT}, avisando antes a mi jefatura', 'Solo en la farmacia', 'En internet, para tratarme solo', 'En ninguna parte: me aguanto'], w: '{LAMUTC} evalúa si la molestia es de origen laboral y entrega la atención que corresponda.' },
        { q: '¿Qué ley cubre la atención de una enfermedad profesional?', o: ['Ley 16.744', 'Ley 20.096', 'Ley 21.643', 'Ley 20.949'], w: 'La Ley 16.744 es el seguro de accidentes del trabajo y enfermedades profesionales.' },
        { q: 'Al consultar en {LAMUT} por una molestia, ¿qué debes contar?', o: ['Qué tarea haces, cómo y desde cuándo te molesta', 'Solo tu nombre, tu RUT y tu empresa', 'Nada: ellos ya saben todo de tu trabajo', 'Solo que te duele, sin dar más detalles'], w: 'Los detalles de tu trabajo permiten saber si la molestia es de origen laboral.' }] }
    ]
  });


  // ================= helpers 3 =================
  const mouse = (x, y, s = 1, flip = false) => `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})"><path d="M-12,-2 q-26,4 -40,-8 q-8,-8 -18,-2" stroke="#8D6E63" stroke-width="1.6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-7" rx="14" ry="8" fill="#A1887F" stroke="#5D4037" stroke-width="1"/><circle cx="13" cy="-10" r="6" fill="#A1887F" stroke="#5D4037" stroke-width="1"/><circle cx="10" cy="-16" r="3.4" fill="#D7CCC8" stroke="#5D4037" stroke-width=".8"/><circle cx="16" cy="-11" r="1.2" fill="#111"/><circle cx="19.5" cy="-9" r="1.1" fill="#4E342E"/><path d="M-6,0 v2 M6,0 v2" stroke="#5D4037" stroke-width="1.4"/></g>`;
  const feces = (x, y) => [0, 7, 13, 4, 18].map((d, i) => `<ellipse cx="${x + d}" cy="${y + (i % 2) * 3}" rx="2.2" ry="1.1" fill="#3E2723"/>`).join('');
  const dust = (x, y, n = 8) => `<g class="t2d">${Array.from({ length: n }, (_, i) => `<circle cx="${x + (i * 23) % 70}" cy="${y - (i * 13) % 40}" r="${1.5 + (i % 3)}" fill="#A1887F" opacity=".7"/>`).join('')}</g>`;
  const store = (x, y) => P4({ lacteos: box(x, y, 40, 30, '', '#E0E0E0') + box(x + 42, y, 40, 30, '', '#E0E0E0') + box(x + 20, y - 30, 40, 26, '', '#E0E0E0'), agroex: box(x, y, 40, 30) + box(x + 42, y, 40, 30) + box(x + 20, y - 30, 40, 26), agricola: `<path d="M${x},${y} v-26 q16,-8 32,0 v26z M${x + 36},${y} v-26 q16,-8 32,0 v26z" fill="#D7CCA1" stroke="#8D7B4F" stroke-width="1.5"/>` + ladder(x + 70, y, 70), inversiones: box(x, y, 40, 30, '', '#B0A08A') + box(x + 42, y, 40, 30, '', '#B0A08A') + box(x + 20, y - 30, 40, 26, '', '#B0A08A') });
  const shed = (x, y, w = 150, open = false) => `<rect x="${x}" y="${y - 96}" width="${w}" height="96" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/>` + Array.from({ length: Math.floor(w / 10) }, (_, i) => `<line x1="${x + 5 + i * 10}" y1="${y - 94}" x2="${x + 5 + i * 10}" y2="${y}" stroke="#90A4AE" stroke-width="1.5"/>`).join('')
    + `<path d="M${x - 8},${y - 96} l${w / 2 + 8},-24 l${w / 2 + 8},24z" fill="#78909C"/>` + (open ? `<rect x="${x + 20}" y="${y - 70}" width="44" height="70" fill="#37474F"/><rect x="${x + 64}" y="${y - 70}" width="10" height="70" fill="#CFD8DC" transform="skewY(-12) translate(0 ${(x + 64) * .21})"/><rect x="${x + 96}" y="${y - 74}" width="34" height="24" fill="#37474F" stroke="#78909C" stroke-width="2"/>` : `<rect x="${x + 20}" y="${y - 70}" width="44" height="70" fill="#90A4AE" stroke="#607D8B" stroke-width="2"/><rect x="${x + 96}" y="${y - 74}" width="34" height="24" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/>`);
  const grassTall = (x, y, w) => Array.from({ length: Math.floor(w / 6) }, (_, i) => `<path d="M${x + i * 6},${y} q2,-${18 + (i % 4) * 5} ${5 - (i % 3) * 3},-${26 + (i % 4) * 6}" stroke="#558B2F" stroke-width="2.4" fill="none"/>`).join('');
  const trashC = (x, y, lid = true) => `<rect x="${x}" y="${y - 34}" width="30" height="34" rx="3" fill="#455A64"/>` + (lid ? `<rect x="${x - 3}" y="${y - 40}" width="36" height="7" rx="2" fill="#263238"/>` : `<rect x="${x - 14}" y="${y - 52}" width="7" height="30" rx="2" fill="#263238" transform="rotate(-30 ${x} ${y - 34})"/><circle cx="${x + 8}" cy="${y - 36}" r="4" fill="#8D6E63"/><circle cx="${x + 18}" cy="${y - 37}" r="5" fill="#A5D6A7"/>`);
  const sprayL = (x, y) => `<g transform="translate(${2 * x + 12},0) scale(-1,1)">${spray(x, y)}</g>`;
  const spray = (x, y) => `<rect x="${x}" y="${y - 22}" width="12" height="22" rx="3" fill="#FFFFFF" stroke="#0288D1" stroke-width="1.5"/><path d="M${x + 2},${y - 22} v-6 h10 l4,3" stroke="#0288D1" stroke-width="2.5" fill="none"/><g class="t2bl">${[0, 1, 2, 3].map(i => `<circle cx="${x + 20 + i * 5}" cy="${y - 25 + (i % 2) * 4}" r="1.6" fill="#4FC3F7"/>`).join('')}</g>`;
  const angry = (x, y, w = 70) => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="12" fill="#FFEBEE" stroke="#C62828" stroke-width="2"/><path d="M${x + w - 18},${y + 26} l6,9 l2,-9" fill="#FFEBEE" stroke="#C62828" stroke-width="2"/>${txt(x + w / 2, y + 18, '#@%!', 14, '#C62828')}`;
  const EXT = { helmet: false, cofia: false, hat: 'none', apron: false, gloves: false, boots: '#3E2723', shirt: '#6D4C41', pants: '#263238' };
  const lamp = (x, on = true, y = 14) => `<rect x="${x - 18}" y="${y}" width="36" height="7" rx="2" fill="#78909C"/>` + (on ? `<path d="M${x - 16},${y + 7} L${x - 40},150 H${x + 40} L${x + 16},${y + 7}z" fill="#FFF59D" opacity=".35"/><rect x="${x - 16}" y="${y + 6}" width="32" height="3" fill="#FFF9C4"/>` : `<rect x="${x - 16}" y="${y + 6}" width="32" height="3" fill="#455A64"/>`);
  const nightSky = () => `<rect width="320" height="200" fill="#1A237E"/><circle cx="270" cy="34" r="16" fill="#FFF9C4"/><circle cx="278" cy="28" r="14" fill="#1A237E"/>` + [[30, 20], [80, 40], [140, 18], [200, 44], [240, 70], [110, 64]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1.6" fill="#fff" class="t2bl"/>`).join('');

  // ================= ESCENAS · HANTAVIRUS =================
  S.si_t2_raton = () => sc(sky('#DCEDC8') + `<rect y="150" width="320" height="50" fill="#9CCC65"/>` + grassTall(0, 156, 60) + grassTall(262, 156, 58) + `<g class="t2f">${mouse(200, 140, 3)}</g>`
    + `<path d="M158,158 v6 h86 v-6" stroke="#5D4037" stroke-width="2" fill="none"/>${lab(201, 180, 80, 'CUERPO', '#5D4037')}<path d="M30,158 v6 h120 v-6" stroke="#5D4037" stroke-width="2" fill="none"/>${lab(90, 180, 80, 'COLA', '#5D4037')}`);
  S.si_t2_contagio = () => sc(inside() + store(14, 172) + `<rect width="320" height="200" fill="#263238" opacity=".35"/>` + feces(130, 176) + feces(180, 182) + mouse(40, 186, .9) + dust(120, 140, 12) + dust(170, 120, 10)
    + W(250, 184, { pose: 'walk', flip: true, face: 'worried' }) + `<path d="M232,106 q-10,4 -16,2" stroke="#A1887F" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`);
  S.si_t2_donde = () => sc((E() === 'agricola' ? field() : sky() + `<rect y="150" width="320" height="50" fill="#9CCC65"/>`) + shed(150, 156, 150) + grassTall(0, 186, 140)
    + [0, 1, 2, 3].map(i => `<rect x="${110 + (i % 2) * 18}" y="${136 - Math.floor(i / 2) * 10}" width="34" height="10" rx="5" fill="#8D6E63" stroke="#5D4037"/>`).join('') + mouse(96, 182, 1.1) + `<path d="M0,196 q40,-6 80,0 t80,0 V200 H0z" fill="#4FC3F7"/>`);
  S.si_t2_ventilar = () => sc(sky() + `<rect y="150" width="320" height="50" fill="#BCAAA4"/>` + shed(20, 156, 150, true)
    + `<g class="t2w" stroke="#4FC3F7" stroke-width="3" fill="none" stroke-linecap="round"><path d="M50,110 q20,-8 40,0 t40,0"/><path d="M60,130 q20,-8 40,0 t40,0"/></g>` + clock(236, 56, 24) + lab(236, 100, 78, '30 MIN', '#0277BD') + W(266, 184, { flip: true }));
  S.si_t2_barrer = () => { const L = W(70, 182, { pose: 'bend', face: 'worried' }) + `<line x1="104" y1="166" x2="122" y2="182" stroke="#8D6E63" stroke-width="4"/><path d="M114,182 l18,-6 l4,8z" fill="#FBC02D"/>`
      + `<g opacity=".8" class="t2f"><circle cx="128" cy="160" r="14" fill="#BCAAA4"/><circle cx="110" cy="148" r="12" fill="#D7CCC8"/><circle cx="138" cy="138" r="10" fill="#BCAAA4"/></g>`;
    const R = W(206, 182, { pose: 'bend', mask: true, gloves: '#FFB300' }) + spray(234, 170) + feces(262, 184) + `<g class="t2bl">${drop(266, 178, .4)}${drop(278, 177, .35)}</g>`;
    return sc(inside() + feces(120, 186) + L + R + divider() + badge(140, 26, false) + badge(300, 26, true)); };
  S.si_t2_bolsa = () => sc(inside() + mouse(110, 184, 1.1) + W(200, 182, { pose: 'bend', flip: true, mask: true, gloves: '#FFB300' }) + sprayL(156, 170) + `<g class="t2bl">${drop(126, 176, .4)}${drop(136, 174, .35)}</g>` + `<path d="M30,184 q-4,-30 12,-36 l4,6 l4,-6 q16,6 12,36z" fill="#212121"/>` + lab(46, 136, 66, 'BOLSA', '#37474F'));
  S.si_t2_pasto = () => { const base = sky() + `<rect y="150" width="320" height="50" fill="#AED581"/>`;
    return sc(base + shed(14, 156, 130) + grassTall(0, 186, 160) + trashC(110, 186, false) + shed(176, 156, 130) + `<rect x="160" y="182" width="160" height="6" fill="#7CB342"/>` + trashC(272, 190, true) + divider() + badge(140, 26, false) + badge(300, 26, true)); };
  S.si_t2_fiebre = () => sc((E() === 'agricola' ? field() : inside()) + W(110, 186, { face: 'pain', s: 1.2 }) + `<line x1="118" y1="104" x2="138" y2="112" stroke="#455A64" stroke-width="4.5" stroke-linecap="round"/><line x1="118" y1="104" x2="138" y2="112" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><circle cx="139" cy="112" r="3" fill="#E53935"/>` + heat(80, 80, 2)
    + W(236, 186, Object.assign({}, NOHAT, { shirt: '#FFFFFF', pants: '#ECEFF1', flip: true, pose: 'carry' })) + `<path d="M230,126 q-6,14 4,22" stroke="#455A64" stroke-width="2" fill="none"/>`
    + lab(250, 40, 104, 'FIEBRE', '#C62828') + lab(250, 66, 140, 'DOLOR MUSCULAR', '#C62828'));

  // ================= ESCENAS · PSICOSOCIAL =================
  S.si_t2_psico = () => sc(inside() + W(70, 182, { face: 'worried' }) + `<g class="t2f"><path d="M44,62 q-6,-14 10,-14 q4,-12 18,-6 q14,-6 18,6 q12,4 2,14z" fill="#78909C"/><path d="M68,64 l-6,10 h8 l-6,10" stroke="#FFC20E" stroke-width="2.5" fill="none"/></g>`
    + W(180, 182, { pose: 'point' }) + W(240, 182, { flip: true }) + `<g class="t2p"><path d="M210,62 c-10,-12 -26,0 0,18 c26,-18 10,-30 0,-18z" fill="#E53935"/></g>`);
  S.si_t2_ceal = () => sc(inside() + `<g transform="rotate(-3 110 100)"><rect x="40" y="24" width="140" height="150" rx="4" fill="#fff" stroke="#90A4AE" stroke-width="2"/><rect x="40" y="24" width="140" height="24" rx="4" fill="#1565C0"/>${txt(110, 41, 'CEAL-SM', 13, '#fff')}`
    + [0, 1, 2, 3, 4].map(i => `<rect x="52" y="${60 + i * 22}" width="70" height="5" fill="#B0BEC5"/>` + [0, 1, 2].map(j => `<rect x="${132 + j * 14}" y="${56 + i * 22}" width="10" height="10" fill="#fff" stroke="#607D8B"/>`).join('') + `<path d="M${134 + (i * 7) % 3 * 14},${61 + i * 22} l3,3 l5,-6" stroke="#2E7D32" stroke-width="2" fill="none"/>`).join('') + `</g>`
    + `<g class="t2f"><path d="M236,70 v-12 a16,16 0 0 1 32,0 v12" stroke="#455A64" stroke-width="6" fill="none"/><rect x="226" y="68" width="52" height="40" rx="6" fill="#FFC20E" stroke="#C79200" stroke-width="2"/><circle cx="252" cy="86" r="5" fill="#5D4037"/></g>` + lab(252, 130, 96, 'ANÓNIMO', '#2E7D32'));
  S.si_t2_dim = () => sc(inside() + `<rect x="20" y="20" width="190" height="130" rx="4" fill="#fff" stroke="#90A4AE" stroke-width="2"/>`
    + [['#43A047', 120], ['#FDD835', 80], ['#E53935', 140], ['#43A047', 60], ['#FB8C00', 100]].map(([c, w], i) => `<rect x="34" y="${34 + i * 22}" width="${w}" height="14" rx="3" fill="${c}"/>`).join('') + W(262, 182, { pose: 'point', flip: true }));
  S.si_t2_responder = () => sc(inside() + W(130, 184, { pose: 'carry', s: 1.1 }) + `<rect x="138" y="114" width="26" height="34" rx="3" fill="#fff" stroke="#90A4AE" stroke-width="1.5"/><path d="M142,122 h18 M142,130 h18 M142,138 h12" stroke="#90A4AE" stroke-width="2"/>`
    + `<circle cx="200" cy="74" r="4" fill="#fff" stroke="#263238"/><circle cx="212" cy="58" r="6" fill="#fff" stroke="#263238"/><rect x="214" y="18" width="94" height="40" rx="18" fill="#fff" stroke="#263238" stroke-width="1.5"/>`
    + `<g class="t2p"><path d="M232,38 l5,5 l9,-10" stroke="#2E7D32" stroke-width="3" fill="none"/><path d="M262,32 h30 M262,42 h22" stroke="#90A4AE" stroke-width="3"/></g>`);
  S.si_t2_planacc = () => sc(inside() + [['EVALUAR', '#1565C0'], ['PLAN', '#6A1B9A'], ['MEDIDAS', '#2E7D32']].map(([t, c], i) => `<rect x="${14 + i * 104}" y="36" width="86" height="44" rx="8" fill="${c}"/>` + txt(57 + i * 104, 63, t, 13, '#fff') + (i < 2 ? `<path d="M${102 + i * 104},58 h12 m-5,-6 l6,6 l-6,6" stroke="#455A64" stroke-width="3" fill="none"/>` : '')).join('')
    + crowd([90, 130, 170, 210], 184) + `<g class="t2f">${badge(276, 140, true, 14)}</g>`);
  S.si_t2_turno = () => sc(`<rect width="160" height="200" fill="#1A237E"/><rect x="160" width="160" height="200" fill="#BFE6FF"/><circle cx="60" cy="40" r="16" fill="#FFF9C4"/><circle cx="68" cy="34" r="14" fill="#1A237E"/>${[[110, 20], [30, 80], [130, 60]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1.8" fill="#fff" class="t2bl"/>`).join('')}` + sun(270, 40, 18)
    + `<rect y="150" width="320" height="50" fill="#90A4AE"/>` + clock(160, 70, 26) + W(160, 186, { face: 'worried', s: 1.15 }) + `<g class="t2f">${txt(196, 96, 'z', 15, '#1A237E')}${txt(206, 84, 'z', 13, '#1A237E')}${txt(214, 74, 'z', 11, '#1A237E')}</g>`);
  S.si_t2_lider = () => sc((E() === 'agricola' ? field() : inside()) + W(100, 182, {}) + W(210, 182, { flip: true, vest: true, pose: 'point' }) + bubble(30, 30, '¿Cómo lo hago?', 120) + bubble(176, 50, 'Te explico', 100));
  S.si_t2_ayuda2 = () => avisoSc('Necesito conversar', 150);

  // ================= ESCENAS · LEY KARIN =================
  S.si_t2_karin = () => sc(inside() + `<g class="t2p"><path d="M160,20 l46,14 v34 q0,34 -46,52 q-46,-18 -46,-52 v-34z" fill="#1565C0" stroke="#0D47A1" stroke-width="3"/>${txt(160, 62, 'LEY', 13, '#fff')}${txt(160, 80, '21.643', 15, '#fff')}</g>` + crowd([50, 90, 230, 270], 184));
  S.si_t2_acoso = () => sc(inside() + W(90, 182, { pose: 'point', vest: true, apron: false, shirt: '#455A64' }) + angry(96, 42, 76) + W(190, 182, { flip: true, face: 'worried' }) + W(270, 182, { flip: true, s: .85, face: 'worried' }) + badge(296, 26, false));
  S.si_t2_sexual = () => sc(inside() + W(110, 182, { pose: 'carry', face: 'worried', hair: true }) + phone(124, 128) + `<rect x="170" y="24" width="80" height="120" rx="10" fill="#263238"/><rect x="176" y="34" width="68" height="100" fill="#E3F2FD"/>`
    + `<rect x="182" y="42" width="50" height="16" rx="8" fill="#fff"/><rect x="182" y="64" width="40" height="16" rx="8" fill="#fff"/><g class="t2p"><path d="M216,104 c-6,-8 -16,0 0,12 c16,-12 6,-20 0,-12z" fill="#E53935"/></g><circle cx="196" cy="108" r="9" fill="#FFCA28"/><path d="M191,106 h4 M199,106 l2,-2 M192,111 q4,3 8,0" stroke="#5D4037" stroke-width="1.4" fill="none"/>`
    + badge(290, 26, false));
  S.si_t2_terceros = () => { const e = E(); let g;
    if (e === 'lacteos') g = inside() + `<rect x="120" y="120" width="120" height="62" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/><rect x="120" y="112" width="120" height="10" fill="#B0BEC5"/>` + [0, 1, 2].map(i => `<ellipse cx="${146 + i * 34}" cy="108" rx="13" ry="6" fill="#FBC02D" stroke="#F57F17"/>`).join('') + W(270, 182, { flip: true, face: 'worried' }) + W(70, 182, Object.assign({ pose: 'point' }, EXT));
    else if (e === 'agroex') g = patio() + truck(-70, 182, false) + W(120, 182, Object.assign({ pose: 'point' }, EXT)) + W(236, 182, { flip: true, face: 'worried' });
    else if (e === 'agricola') g = field() + `<g stroke="#8D6E63" stroke-width="5">${[130, 160, 190].map(x => `<line x1="${x}" y1="120" x2="${x}" y2="182"/>`).join('')}<line x1="120" y1="130" x2="200" y2="130"/><line x1="120" y1="160" x2="200" y2="160"/></g>` + W(80, 182, Object.assign({ pose: 'point' }, EXT)) + W(250, 182, { flip: true, face: 'worried' });
    else g = office() + `<rect x="120" y="116" width="110" height="66" fill="#A1887F" stroke="#6D4C41" stroke-width="2"/><rect x="114" y="110" width="122" height="8" fill="#8D6E63"/>` + W(266, 182, { flip: true, face: 'worried' }) + W(70, 182, Object.assign({ pose: 'point' }, EXT));
    return sc(g + angry(e === 'agroex' ? 130 : 80, 30, 76)); };
  S.si_t2_denuncia = () => sc(inside() + `<g class="t2f"><rect x="20" y="40" width="76" height="52" rx="4" fill="#fff" stroke="#607D8B" stroke-width="2"/><path d="M20,40 l38,30 l38,-30" stroke="#607D8B" stroke-width="2" fill="none"/></g>`
    + `<rect x="122" y="34" width="78" height="56" rx="4" fill="#263238"/><rect x="128" y="40" width="66" height="44" fill="#4FC3F7"/>${txt(161, 72, '@', 28, '#fff')}<rect x="150" y="90" width="22" height="8" fill="#455A64"/>`
    + W(236, 172, { s: .8 }) + W(290, 172, { s: .8, flip: true }) + `<rect x="252" y="70" width="22" height="28" fill="#fff" stroke="#90A4AE"/><path d="M256,78 h14 M256,84 h14 M256,90 h10" stroke="#90A4AE"/>`
    + lab(58, 112, 92, 'POR ESCRITO', '#37474F') + lab(161, 112, 80, 'CORREO', '#37474F') + lab(263, 190, 100, 'PRESENCIAL', '#37474F'));
  S.si_t2_reserva = () => sc(inside() + `<path d="M40,60 h40 l10,10 h70 v90 h-120z" fill="#FFB74D" stroke="#E65100" stroke-width="2"/><g class="t2p"><path d="M108,104 v-10 a12,12 0 0 1 24,0 v10" stroke="#455A64" stroke-width="5" fill="none"/><rect x="100" y="102" width="40" height="30" rx="5" fill="#D7262B"/><circle cx="120" cy="116" r="4" fill="#111"/></g>`
    + lab(100, 178, 120, 'CONFIDENCIAL', '#37474F') + `<g class="t2w"><line x1="250" y1="40" x2="250" y2="150" stroke="#5D4037" stroke-width="5"/><line x1="206" y1="62" x2="294" y2="62" stroke="#5D4037" stroke-width="4"/><path d="M206,62 l-12,30 h24z M294,62 l-12,30 h24z" fill="#FFC107" stroke="#5D4037" stroke-width="1.5"/><rect x="230" y="150" width="40" height="8" fill="#5D4037"/></g>`);
  S.si_t2_resguardo = () => sc(inside() + W(70, 182, { face: 'worried' }) + `<rect x="148" y="70" width="10" height="112" fill="#90A4AE" stroke="#607D8B" stroke-width="2"/>` + W(240, 182, { flip: true })
    + `<path d="M118,96 h-24 m6,-6 l-6,6 l6,6 M188,96 h24 m-6,-6 l6,6 l-6,6" stroke="#455A64" stroke-width="3" fill="none"/><g class="t2p"><path d="M100,40 c-10,-12 -26,0 0,18 c26,-18 10,-30 0,-18z" fill="#E53935"/></g>` + clock(270, 44, 20));
  S.si_t2_buentrato = () => sc((E() === 'agricola' ? field() : inside()) + W(130, 182, { pose: 'point' }) + W(186, 182, { pose: 'point', flip: true, vest: true }) + `<g class="t2p"><path d="M158,52 c-10,-12 -26,0 0,18 c26,-18 10,-30 0,-18z" fill="#E53935"/></g>` + badge(290, 30, true));

  // ================= ESCENAS · ILUMINACIÓN =================
  S.si_t2_lux = () => sc(inside() + lamp(80) + lamp(240) + `<g class="t2f"><rect x="120" y="64" width="80" height="104" rx="10" fill="#FFC20E" stroke="#C79200" stroke-width="2"/><rect x="130" y="76" width="60" height="32" rx="3" fill="#263238"/>${txt(160, 97, '500 LUX', 13, '#fff')}<circle cx="160" cy="140" r="16" fill="#ECEFF1" stroke="#607D8B" stroke-width="3"/></g>`);
  S.si_t2_tarea = () => { const e = E(); let g = inside() + lamp(150, true, 14);
    if (e === 'lacteos') g += `<rect x="80" y="130" width="140" height="8" fill="#ECEFF1" stroke="#90A4AE"/><rect x="90" y="138" width="6" height="44" fill="#90A4AE"/><rect x="204" y="138" width="6" height="44" fill="#90A4AE"/>` + [0, 1, 2].map(i => `<rect x="${100 + i * 12}" y="104" width="7" height="26" rx="3" fill="#E1F5FE" stroke="#4FC3F7"/>`).join('') + `<ellipse cx="180" cy="122" rx="16" ry="8" fill="#FFF59D" stroke="#F9A825"/>` + W(250, 182, { flip: true, pose: 'carry' });
    else if (e === 'agroex') g += belt(60, 182, 190) + W(150, 176, { pose: 'carry' });
    else if (e === 'agricola') g += W(150, 182, { pose: 'carry' }) + `<rect x="160" y="114" width="16" height="30" rx="3" fill="#fff" stroke="#E65100"/>${diamond(168, 128, 6, '!')}` + bin(230, 182, false);
    else g += desk(100, 182, false) + `<rect x="120" y="132" width="26" height="6" fill="#fff" stroke="#90A4AE"/><rect x="150" y="130" width="26" height="8" fill="#fff" stroke="#90A4AE"/>` + W(240, 182, { flip: true, pose: 'carry' });
    return sc(g); };
  S.si_t2_quemada = () => sc(inside() + lamp(50) + `<g class="t2bl">${lamp(160, true)}</g>` + lamp(160, false) + `<rect x="110" y="0" width="100" height="200" fill="#263238" opacity=".35"/>` + lamp(270) + box(140, 182, 40, 22) + W(250, 182, { pose: 'point', flip: true }));
  S.si_t2_deslumbra = () => sc((E() === 'inversiones' ? office() : inside()) + `<rect x="20" y="30" width="80" height="80" fill="#FFF9C4" stroke="#8D7B66" stroke-width="4"/>` + sun(60, 70, 14)
    + `<path d="M100,60 L200,100 M100,90 L200,110" stroke="#FFEB3B" stroke-width="6" opacity=".7"/>` + desk(150, 182) + `<g class="t2p"><path d="M200,100 l4,-10 l4,10 l10,4 l-10,4 l-4,10 l-4,-10 l-10,-4z" fill="#fff"/></g>` + W(270, 182, { flip: true, face: 'worried' }));
  S.si_t2_fatiga = () => sc(inside() + `<g class="t2p"><path d="M30,90 q60,-56 120,0 q-60,56 -120,0z" fill="#fff" stroke="#263238" stroke-width="3"/><circle cx="90" cy="90" r="20" fill="#5D4037"/><circle cx="90" cy="90" r="9" fill="#111"/><circle cx="96" cy="84" r="4" fill="#fff"/><path d="M40,90 q10,4 16,-2 M46,98 l10,2 M136,86 q-8,6 -14,0 M132,98 l-10,0" stroke="#E53935" stroke-width="1.6" fill="none"/></g>`
    + clock(220, 64, 24) + lab(220, 110, 100, '20 - 20 - 20', '#0277BD') + `<path d="M160,150 h100" stroke="#455A64" stroke-width="2.5" stroke-dasharray="6 4"/><path d="M262,144 l10,6 l-10,6z" fill="#455A64"/>` + (E() === 'agricola' ? tree(296, 152, .5) : win(270, 120, 44, 30)));
  S.si_t2_pantalla = () => { const x = 170, y = 184;
    return sc(office() + win(14, 34, 60, 56) + `<rect x="${x - 34}" y="${y - 30}" width="8" height="30" fill="#455A64"/><rect x="${x - 40}" y="${y - 34}" width="34" height="6" rx="3" fill="#455A64"/><rect x="${x - 42}" y="${y - 74}" width="6" height="44" rx="3" fill="#455A64"/>`
      + W(x - 14, y, { pose: 'squat', flip: false }) + `<rect x="${x + 8}" y="${y - 32}" width="90" height="5" fill="#8D6E63"/><rect x="${x + 90}" y="${y - 27}" width="5" height="27" fill="#6D4C41"/><rect x="${x + 14}" y="${y - 27}" width="5" height="27" fill="#6D4C41"/>`
      + `<rect x="${x + 60}" y="${y - 46}" width="6" height="14" fill="#455A64"/><rect x="${x + 50}" y="${y - 34}" width="26" height="3" fill="#455A64"/><rect x="${x + 56}" y="${y - 64}" width="12" height="20" rx="2" fill="#263238"/><rect x="${x + 54}" y="${y - 64}" width="4" height="20" fill="#4FC3F7"/><rect x="${x + 10}" y="${y - 35}" width="26" height="3" fill="#37474F"/>`
      + `<path d="M${x - 10},${y - 61} H${x + 52}" stroke="#2E7D32" stroke-width="1.8" stroke-dasharray="4 3"/>` + badge(296, 26, true)); };
  S.si_t2_noche = () => { const e = E(); let g = nightSky() + `<rect y="150" width="320" height="50" fill="${e === 'agricola' ? '#33691E' : '#455A64'}"/>`;
    if (e === 'agricola') g += tree(70, 182, 1) + tree(250, 182, 1) + `<path d="M172,108 L300,90 L300,150 z" fill="#FFF59D" opacity=".45"/>` + W(160, 184, { pose: 'carry' }) + `<circle cx="164" cy="108" r="3" fill="#FFF59D" stroke="#263238"/>`;
    else if (e === 'inversiones') g += `<rect x="10" y="60" width="130" height="92" fill="#546E7A"/><rect x="24" y="76" width="40" height="28" fill="#FFF59D"/><rect x="84" y="76" width="40" height="28" fill="#FFF59D"/>` + car(170, 184, '#90A4AE') + `<path d="M286,160 L320,140 V190z" fill="#FFF59D" opacity=".6"/>`;
    else g += `<rect x="0" y="54" width="320" height="98" fill="#546E7A"/><rect x="0" y="50" width="320" height="6" fill="#37474F"/>` + `<rect x="150" y="70" width="150" height="80" fill="#FFF59D" opacity=".85"/>` + lamp(60, true, 56) + (e === 'agroex' ? fk(40, 184, { load: true, lift: 12, light: true }) + `<path d="M150,140 L190,120 V190z" fill="#FFF59D" opacity=".5"/>` : truck(10, 184)) + W(240, 184, { vest: true });
    return sc(g); };
  S.si_t2_lentes = () => sc(inside() + `<rect x="30" y="24" width="96" height="124" fill="#fff" stroke="#90A4AE" stroke-width="2"/>${txt(78, 58, 'E', 30, '#111')}${txt(78, 88, 'F P', 20, '#111')}${txt(78, 112, 'T O Z', 15, '#111')}${txt(78, 132, 'L P E D', 11, '#111')}`
    + W(220, 184, { glasses: true, s: 1.2, flip: true }) + `<g class="t2f">${badge(286, 40, true)}</g>`);

  // ================= TEMAS · HANTA, PSICOSOCIAL, KARIN, ILUMINACIÓN =================
  const BOD = 'la bodega del galpón';
  SI_CONT.temas.push({
    id: 'hanta', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Hantavirus', thumb: 'si_t2_raton', mins: 12,
    learn: [
      { s: 'si_t2_raton', t: '¿Qué es el hantavirus?', x: 'Es una enfermedad grave, que puede causar la muerte, producida por un virus que transmite el <b>ratón colilargo</b>: un ratón silvestre pequeño, de <b>cola más larga que su cuerpo</b>. Vive en matorrales, pastizales y orillas de canales, y entra a galpones, bodegas y casas del fundo buscando comida y refugio.' },
      { s: 'si_t2_contagio', t: '¿Cómo se contagia?', x: 'El virus está en la <b>orina, las fecas y la saliva</b> del ratón. Al secarse, se mezclan con el polvo. Te contagias al <b>respirar ese polvo</b>, por ejemplo al barrer o sacudir un lugar cerrado. También por una mordedura o al tocar fecas y llevarte la mano a la boca. No se contagia por picadura de insectos.' },
      { s: 'si_t2_donde', t: 'Lugares de riesgo', x: '<ul><li>Bodegas, galpones y casetas que estuvieron cerrados.</li><li>Lugares con leña, sacos, cajas o maquinaria guardada.</li><li>Pastizales, matorrales y orillas de canales.</li><li>Casas o piezas que se abren después de un tiempo.</li></ul>En el fundo: galpones de insumos, bodegas de bandejas y casas de temporada.' },
      { s: 'si_t2_ventilar', t: 'Antes de entrar: ventila 30 minutos', x: 'Si un lugar estuvo cerrado, <b>abre puertas y ventanas y espera al menos 30 minutos afuera</b> antes de entrar. Así el aire se renueva y baja el polvo con virus. No entres a limpiar sin la autorización de tu jefatura ni sin el EPP.', k: 'Ventila al menos 30 minutos antes de entrar a un lugar que estuvo cerrado.' },
      { s: 'si_t2_barrer', t: 'Nunca barras en seco', x: 'Barrer, sacudir o usar aire comprimido levanta el polvo con el virus. Lo correcto:<ul><li>Ponte <b>mascarilla (respirador) y guantes</b>.</li><li><b>Humedece</b> el piso y las fecas con agua con cloro y espera unos minutos.</li><li>Limpia con un paño húmedo y bota todo en una bolsa cerrada.</li><li>Al terminar, lávate bien las manos.</li></ul>', k: 'Nunca barras en seco: humedece con agua con cloro y usa mascarilla y guantes.' },
      { s: 'si_t2_bolsa', t: 'Si ves ratones o fecas', x: 'No los toques con las manos. <b>Avisa a tu jefatura</b> para que se haga el control de roedores. Un ratón muerto lo retira la persona designada, con mascarilla y guantes: se moja con agua con cloro y se bota en una bolsa cerrada.' },
      { s: 'si_t2_pasto', t: 'Que no tengan dónde vivir', x: '<ul><li>Mantén el <b>pasto corto</b> y sin malezas alrededor de galpones, bodegas y casas.</li><li>Bota la basura y los restos de colación en <b>recipientes con tapa</b>.</li><li>No acumules cajas, sacos ni leña contra las paredes.</li><li>Avisa si ves hoyos o rendijas por donde puedan entrar.</li></ul>' },
      { s: 'si_t2_fiebre', t: 'Síntomas: consulta de inmediato', x: 'Aparecen entre 1 y 6 semanas después del contagio y parecen una <b>gripe</b>: fiebre, dolor muscular, dolor de cabeza, escalofríos, a veces náuseas o dolor de estómago. Después puede venir dificultad para respirar, que es muy grave. Si tienes estos síntomas y estuviste en un lugar de riesgo, <b>consulta de inmediato y cuenta dónde estuviste</b>.' }
    ],
    quiz: [
      { s: 'si_t2_raton', v: [
        { q: '¿Qué animal transmite el hantavirus en Chile?', o: ['El ratón colilargo', 'La rata de alcantarilla', 'El conejo silvestre', 'El zancudo'], w: 'El hantavirus lo transmite el ratón colilargo, un ratón silvestre.' },
        { q: '¿Cómo reconoces al ratón colilargo?', o: ['Es pequeño y su cola es más larga que su cuerpo', 'Es grande y de cola corta', 'Tiene la cola gruesa y pelada, como una rata', 'Es blanco con manchas negras'], w: 'Su nombre lo dice: es un ratón pequeño de cola más larga que el cuerpo.' },
        { q: 'El hantavirus se contagia por la picadura de zancudos.', vf: false, w: 'Falso. Se contagia principalmente al respirar polvo contaminado con orina, fecas o saliva del ratón colilargo.' }] },
      { s: 'si_t2_contagio', v: [
        { q: '¿Cómo se contagia principalmente el hantavirus?', o: ['Al respirar polvo con orina o fecas del ratón', 'Al darle la mano a un compañero', 'Al tomar agua de la llave sin hervir', 'Por la picadura de un zancudo o insecto'], w: 'El virus de la orina y las fecas secas se mezcla con el polvo, y se contagia al respirarlo.' },
        { q: '¿Por qué es peligroso barrer en seco una bodega con fecas de ratón?', o: ['Porque levanta polvo con el virus y se respira', 'Porque se gasta más rápido la escoba', 'Porque deja el piso resbaladizo', 'Porque espanta a los ratones a otro lugar'], w: 'Barrer en seco suspende en el aire el polvo contaminado, que llega directo a los pulmones.' },
        { q: '¿Dónde está el virus?', o: ['En la orina, las fecas y la saliva del ratón', 'Solo en la sangre del ratón', 'En la tierra de cualquier campo', 'En el agua de lluvia'], w: 'El ratón colilargo elimina el virus en su orina, fecas y saliva.' }] },
      { s: 'si_t2_ventilar', v: [
        { q: 'Debes entrar a ' + BOD + ' que estuvo cerrada por meses. ¿Qué haces primero?', o: ['Abro puertas y ventanas y espero 30 minutos afuera', 'Entro de inmediato y prendo la luz', 'Barro rápido el piso antes de ventilar', 'Cierro bien para que no entre más polvo'], w: 'Ventilar renueva el aire y reduce el polvo contaminado antes de que entres.' },
        { q: '¿Cuánto tiempo, como mínimo, se ventila un lugar cerrado antes de entrar?', o: ['30 minutos', '2 minutos', '5 minutos', 'No hace falta ventilar'], w: 'Se recomienda ventilar al menos 30 minutos con puertas y ventanas abiertas.' },
        { q: 'Antes de entrar a un lugar que estuvo cerrado por tiempo, hay que ventilarlo al menos 30 minutos.', vf: true, w: 'Verdadero. Se abren puertas y ventanas y se espera afuera.' }] },
      { s: 'si_t2_barrer', v: [
        { q: '¿Cómo se limpia un lugar con fecas de ratón?', o: ['Con mascarilla y guantes, mojando con agua con cloro', 'Barriendo rápido con una escoba seca', 'Con aire comprimido para sacar todo el polvo', 'Sacudiendo con un paño seco y sin mascarilla'], w: 'Humedecer evita que el polvo se levante, y el cloro elimina el virus.' },
        { q: '¿Qué EPP usas para limpiar un lugar con riesgo de hantavirus?', o: ['Mascarilla (respirador) y guantes', 'Solo guantes de lana', 'Solo legionario', 'Ningún EPP, si es rápido'], w: 'La mascarilla evita respirar el polvo y los guantes evitan el contacto con fecas y orina.' },
        { q: 'Ves fecas de ratón en el piso. Antes de limpiarlas, ¿qué haces?', o: ['Las mojo con agua con cloro y espero unos minutos', 'Las soplo para sacarlas del rincón', 'Las barro en seco de inmediato con escoba', 'Las tomo con la mano y las boto a la basura'], w: 'Mojarlas con agua con cloro impide que se levante polvo y elimina el virus.' }] },
      { s: 'si_t2_pasto', v: [
        { q: '¿Qué ayuda a que los ratones no se acerquen?', o: ['Pasto corto, basura con tapa y nada acumulado contra las paredes', 'Dejar restos de comida lejos de la bodega', 'Acumular leña junto a la pared', 'Dejar las puertas de la bodega abiertas de noche'], w: 'Sin comida ni escondites cerca, el ratón no se instala.' },
        { q: '¿Qué haces con los restos de tu colación?', o: ['Los boto en un basurero con tapa', 'Los dejo en el pasto, se los comen los pájaros', 'Los guardo en una caja abierta en la bodega', 'Los entierro junto al galpón'], w: 'La comida al alcance atrae a los ratones.' },
        { q: '¿Por qué se mantiene el pasto corto alrededor de galpones y bodegas?', o: ['Para que el ratón no tenga dónde esconderse', 'Solo para que el lugar se vea ordenado', 'Para que entre más luz a la bodega', 'Para que se seque más rápido el suelo'], w: 'El pasto alto y las malezas son refugio para el ratón colilargo.' }] },
      { s: 'si_t2_fiebre', v: [
        { q: '¿A qué se parecen los primeros síntomas del hantavirus?', o: ['A una gripe: fiebre y dolores musculares', 'A una alergia con ronchas en la piel', 'A un dolor de muelas y de encías', 'A una torcedura de tobillo al caminar'], w: 'Al principio parece una gripe; después puede aparecer dificultad para respirar.' },
        { q: 'Hace dos semanas limpiaste ' + BOD + ' y ahora tienes fiebre y dolor muscular. ¿Qué haces?', o: ['Consulto de inmediato y cuento dónde estuve', 'Espero unos días a ver si se pasa', 'Me automedico y sigo trabajando', 'Solo tomo agua de hierbas y reposo'], w: 'Contar dónde estuviste ayuda al médico a sospechar hantavirus a tiempo.' },
        { q: 'Si tengo síntomas de gripe después de estar en un lugar de riesgo, debo consultar de inmediato y contar dónde estuve.', vf: true, w: 'Verdadero. La atención temprana es clave en el hantavirus.' }] },
      { s: 'si_t2_bolsa', v: [
        { q: 'Encuentras un ratón muerto en la bodega. ¿Qué haces?', o: ['No lo toco y aviso a mi jefatura', 'Lo saco de la cola con la mano y lo boto', 'Lo barro hacia afuera con la escoba', 'Lo dejo ahí, se va a secar solo'], w: 'El ratón muerto también contagia. Se moja con agua con cloro y se retira con EPP en bolsa cerrada.' },
        { q: 'Ves ratones en ' + BOD + '. ¿Qué haces?', o: ['Aviso a mi jefatura para el control de roedores', 'No digo nada, es normal en el campo', 'Les dejo comida para que no entren a otro lado', 'Los persigo con la escoba para sacarlos'], w: 'Avisar permite hacer el control de roedores antes de que alguien se contagie.' },
        { q: '¿Cómo se retira un ratón muerto?', o: ['Mojado con agua con cloro, con guantes y mascarilla', 'Con la mano, rápido y sin tocarse la cara', 'Barriéndolo hacia el pasto con escoba', 'Con un chorro de aire comprimido hacia afuera'], w: 'El cloro elimina el virus y la bolsa cerrada evita que se esparza.' }] },
      { s: 'si_t2_donde', v: [
        { q: '¿Cuál de estos lugares tiene más riesgo de hantavirus?', o: ['Una bodega cerrada por meses, con sacos y cajas', 'Una oficina ventilada y limpia a diario', 'Un patio pavimentado y barrido', 'Un vehículo limpio y cerrado'], w: 'Los lugares cerrados, con cosas guardadas y poco uso, son refugio del ratón.' },
        { q: '¿Cuándo es más común encontrar el riesgo de hantavirus?', o: ['Al abrir bodegas o casas que estuvieron cerradas', 'Al trabajar en una oficina limpia y ventilada', 'Al lavarse las manos con agua y jabón', 'Al conducir por la carretera pavimentada'], w: 'Al abrir lugares cerrados se encuentra polvo con orina y fecas acumuladas.' },
        { q: '¿Dónde vive el ratón colilargo?', o: ['En matorrales, pastizales y orillas de canales', 'Solo en el centro de las ciudades', 'Solo en el desierto del norte', 'Dentro del agua de los canales y ríos'], w: 'Es un ratón silvestre de zonas con vegetación, que entra a construcciones a buscar comida.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'psicosocial', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Riesgos psicosociales y bienestar en el trabajo', thumb: 'si_t2_psico', mins: 12,
    learn: [
      { s: 'si_t2_psico', t: '¿Qué son los riesgos psicosociales?', x: 'Son condiciones de la <b>organización del trabajo</b> que pueden dañar tu salud mental y física: mucha carga o apuro, poca claridad sobre lo que hay que hacer, mal trato, falta de apoyo, inseguridad. Pueden causar <b>estrés, ansiedad, depresión, problemas para dormir, dolores</b> y también accidentes, porque bajan la atención.' },
      { s: 'si_t2_ceal', t: 'El protocolo MINSAL y el cuestionario CEAL-SM', x: 'El protocolo de vigilancia de riesgos psicosociales del MINSAL obliga a evaluarlos con el <b>cuestionario CEAL-SM</b> de SUSESO. Es <b>anónimo y confidencial</b>: nadie sabe qué respondió cada persona. Un comité con representantes de la empresa y de los trabajadores organiza la aplicación y revisa los resultados.' },
      { s: 'si_t2_dim', t: '¿Qué mide el CEAL-SM?', x: '<ul><li>Carga de trabajo y ritmo.</li><li>Exigencias emocionales.</li><li>Claridad del rol: saber qué se espera de ti.</li><li>Calidad del liderazgo.</li><li>Apoyo y compañerismo.</li><li>Reconocimiento y desarrollo.</li><li>Equilibrio entre trabajo y vida personal.</li><li>Violencia y acoso.</li></ul>' },
      { s: 'si_t2_responder', t: 'Responde con sinceridad', x: 'Si te toca responder, hazlo de forma <b>honesta</b>, pensando en tu trabajo real. Si contestas \"todo bien\" solo para cumplir, los problemas no aparecen en los resultados y no se corrigen. Lee cada pregunta con calma; si no la entiendes, pide que te la expliquen.' },
      { s: 'si_t2_planacc', t: 'De los resultados salen planes de acción', x: 'Con los resultados, el comité define <b>medidas concretas</b> para los grupos con más riesgo, por ejemplo: mejor organización de turnos y pausas, instrucciones más claras, capacitación de jefaturas, mejor comunicación. Las medidas se informan a los trabajadores y se revisa que se cumplan.' },
      { s: 'si_t2_turno', t: 'Cosecha y temporada', x: 'La cosecha, con jornadas intensas, presión por los plazos y el clima, aumentan el estrés. Duerme lo suficiente, aliméntate bien y respeta las pausas y los descansos. Si la carga te supera, conversa con tu jefatura antes de que te afecte.' },
      { s: 'si_t2_lider', t: 'Liderazgo y apoyo', x: 'Un buen ambiente se construye entre todos:<ul><li>Jefaturas que dan instrucciones claras, escuchan y reconocen el trabajo bien hecho.</li><li>Compañeros que se ayudan y se tratan con respeto.</li><li>Problemas que se conversan a tiempo, sin gritos.</li></ul>Ayudar a un compañero nuevo también es prevención.' },
      { s: 'si_t2_ayuda2', t: 'Pide ayuda', x: 'Si sientes angustia, no duermes bien, estás irritable o todo te supera, <b>no lo guardes</b>: conversa con tu jefatura, RR.HH. o el Comité Paritario. Si el problema se relaciona con el trabajo, {LAMUT} puede darte atención psicológica. Pedir ayuda es una forma de autocuidado.', k: 'Si el trabajo te está afectando, pide ayuda: no te lo guardes.' }
    ],
    quiz: [
      { s: 'si_t2_psico', v: [
        { q: '¿Qué son los riesgos psicosociales?', o: ['Condiciones de organización del trabajo que dañan la salud', 'Enfermedades que se heredan de la familia', 'Solo los problemas personales de cada uno', 'Los riesgos de caer en escaleras o pisos mojados'], w: 'Vienen de cómo se organiza el trabajo y de las relaciones, y afectan la salud mental y física.' },
        { q: '¿Cuál de estos es un riesgo psicosocial?', o: ['Sobrecarga de trabajo y falta de apoyo', 'Un piso mojado sin señalizar', 'El ruido fuerte de una máquina', 'La radiación UV del sol'], w: 'La sobrecarga y la falta de apoyo son factores psicosociales. Los otros son riesgos físicos o de seguridad.' },
        { q: '¿Qué pueden causar los riesgos psicosociales?', o: ['Estrés, ansiedad, insomnio y accidentes', 'Solo un cansancio que dura un día', 'Pérdida de audición por ruido', 'Quemaduras en la piel por el sol'], w: 'Afectan la salud mental y física, y bajan la atención, lo que aumenta los accidentes.' }] },
      { s: 'si_t2_ceal', v: [
        { q: '¿Con qué cuestionario se evalúan los riesgos psicosociales?', o: ['CEAL-SM de SUSESO', 'PREXOR', 'TMERT', 'HDS'], w: 'El CEAL-SM es el instrumento oficial. PREXOR es de ruido, TMERT de trastornos musculoesqueléticos y la HDS es de químicos.' },
        { q: 'El cuestionario CEAL-SM es anónimo y confidencial.', vf: true, w: 'Verdadero. Nadie puede saber qué respondió cada persona.' },
        { q: '¿Qué norma obliga a aplicar el cuestionario CEAL-SM?', o: ['El protocolo de vigilancia psicosocial del MINSAL', 'El protocolo MINSAL de radiación UV', 'El protocolo PREXOR de exposición a ruido', 'La Ley 20.949 de manejo manual de cargas'], w: 'El protocolo de vigilancia de riesgos psicosociales del MINSAL establece su evaluación con el CEAL-SM.' }] },
      { s: 'si_t2_responder', v: [
        { q: 'Te toca responder el CEAL-SM. ¿Cómo lo haces?', o: ['Con sinceridad, pensando en mi trabajo real', 'Marco todo \"bien\" para terminar rápido', 'Copio las respuestas de un compañero', 'Le pido a mi jefatura que lo responda por mí'], w: 'Solo las respuestas honestas muestran los problemas reales que hay que corregir.' },
        { q: '¿Qué pasa si todos responden \"todo bien\" sin pensarlo?', o: ['Los problemas reales no aparecen y no se corrigen', 'La empresa sube los sueldos', 'Se repite la encuesta todas las semanas', 'Nada: el resultado es el mismo'], w: 'Los resultados no reflejarían la realidad y no se tomarían medidas donde se necesitan.' },
        { q: 'En el CEAL-SM, la jefatura puede ver qué respondió cada trabajador.', vf: false, w: 'Falso. Es anónimo y confidencial: los resultados se ven por grupo, no por persona.' }] },
      { s: 'si_t2_planacc', v: [
        { q: '¿Para qué sirven los resultados del CEAL-SM?', o: ['Para definir medidas en los grupos con más riesgo', 'Para sancionar a quienes respondieron mal', 'Para elegir a quién despedir', 'Solo para archivarlos'], w: 'Los resultados permiten armar planes de acción para mejorar las condiciones de trabajo.' },
        { q: '¿Cuál es un ejemplo de medida de un plan de acción?', o: ['Mejorar la organización de los turnos y las pausas', 'Prohibir conversar durante el turno', 'Eliminar las pausas para producir más', 'Aumentar las horas extra de cada grupo'], w: 'Las medidas buscan reducir la carga, mejorar la comunicación y el apoyo.' },
        { q: '¿Quién organiza la aplicación del cuestionario?', o: ['Un comité de la empresa y de los trabajadores', 'Solo la gerencia, sin participación de nadie', 'Una persona externa, sin informar a nadie', 'Cada trabajador por su cuenta, en su casa'], w: 'El comité de aplicación asegura que el proceso sea participativo y confidencial.' }] },
      { s: 'si_t2_dim', v: [
        { q: '¿Cuál de estos temas mide el CEAL-SM?', o: ['La carga de trabajo y la calidad del liderazgo', 'La presión arterial de cada persona', 'El nivel de ruido de las máquinas', 'La cantidad de EPP entregado'], w: 'El CEAL-SM mide condiciones de la organización del trabajo, como la carga y el liderazgo.' },
        { q: '\"Claridad del rol\" significa:', o: ['Saber qué se espera de ti en tu trabajo', 'Tener un cargo con un nombre importante', 'Usar ropa de un color distinto', 'Tener el turno más corto'], w: 'Cuando no sabes qué se espera de ti, aumentan el estrés y los errores.' },
        { q: '¿Cuál de estas situaciones es un factor de riesgo psicosocial?', o: ['Recibir órdenes contradictorias de dos jefaturas', 'Trabajar con buena iluminación en el puesto', 'Recibir capacitación sobre tu tarea', 'Tener pausas definidas en el turno'], w: 'Las instrucciones contradictorias generan conflicto de rol y estrés.' }] },
      { s: 'si_t2_turno', v: [
        { q: 'Llevas semanas de cosecha intensa y sientes que no das más. ¿Qué haces?', o: ['Lo converso con mi jefatura y cuido mi descanso', 'Me lo guardo para no parecer débil', 'Tomo bebidas energéticas todo el día', 'Me salto las pausas para terminar antes'], w: 'Conversarlo a tiempo permite buscar soluciones antes de que afecte tu salud.' },
        { q: '¿Qué te ayuda a sobrellevar los turnos largos o de noche?', o: ['Dormir lo suficiente, comer bien y respetar las pausas', 'Tomar mucho café y dormir poco entre turnos', 'Saltarse las comidas para ganar tiempo', 'Trabajar sin pausas para salir antes'], w: 'El descanso, la alimentación y las pausas protegen tu salud y tu atención.' },
        { q: '¿Por qué la cosecha aumentan el riesgo psicosocial?', o: ['Por el ritmo alto, el cansancio y la presión', 'Porque hay menos trabajo que hacer', 'Porque las jornadas son más cortas', 'Porque hay más tiempo para descansar'], w: 'La carga, el cansancio y la presión aumentan el estrés.' }] },
      { s: 'si_t2_lider', v: [
        { q: 'Llega un compañero nuevo y está perdido. ¿Qué haces?', o: ['Le explico con paciencia y lo apoyo', 'Me río de sus errores', 'Lo dejo solo para que aprenda', 'Le paso las tareas más pesadas'], w: 'El apoyo entre compañeros es parte de un buen ambiente y también previene accidentes.' },
        { q: '¿Cómo planteas un problema con un compañero?', o: ['Con respeto y, si no resulta, con la jefatura', 'A gritos, delante de todos los demás', 'Dejándole de hablar por un tiempo', 'Comentándolo con otros a sus espaldas'], w: 'Conversar con respeto evita que el problema crezca.' },
        { q: 'Ayudar a un compañero nuevo es parte de un buen ambiente de trabajo.', vf: true, w: 'Verdadero. El apoyo y el compañerismo protegen la salud de todos.' }] },
      { s: 'si_t2_ayuda2', v: [
        { q: 'Hace semanas no duermes bien y estás irritable por el trabajo. ¿Qué haces?', o: ['Lo converso con mi jefatura o RR.HH.', 'No digo nada, ya se me pasará solo', 'Me relajo tomando alcohol en la noche', 'Falto sin avisar para descansar'], w: 'Pedir ayuda a tiempo evita que el problema se agrave.' },
        { q: '¿Dónde puedes recibir atención psicológica si tu problema se relaciona con el trabajo?', o: ['En {LAMUT}', 'Solo en una consulta particular', 'En ninguna parte', 'Solo con la gerencia'], w: '{LAMUTC} evalúa y atiende los problemas de salud mental relacionados con el trabajo.' },
        { q: 'Pedir ayuda cuando el trabajo te supera es:', o: ['Una forma de autocuidado', 'Una señal de debilidad', 'Un motivo de sanción', 'Algo que es mejor evitar'], w: 'Cuidar tu salud mental es tan importante como usar tu EPP.' }] }
    ]
  });

  const TER = 'contratistas, visitas o personas ajenas al fundo';
  SI_CONT.temas.push({
    id: 'karin', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Ley Karin: trabajo libre de acoso y violencia', thumb: 'si_t2_karin', mins: 15,
    learn: [
      { s: 'si_t2_karin', t: 'Ley Karin (Ley 21.643)', x: 'Desde agosto de 2024, la Ley 21.643 obliga a las empresas a <b>prevenir, investigar y sancionar</b> el acoso laboral, el acoso sexual y la violencia en el trabajo. Cada empresa del grupo tiene un <b>protocolo de prevención</b> y un procedimiento de denuncia. El objetivo es un trabajo con buen trato para todos.' },
      { s: 'si_t2_acoso', t: 'Acoso laboral', x: 'Es toda agresión u hostigamiento, <b>aunque ocurra una sola vez</b>, que menoscabe, maltrate o humille a una persona, o que perjudique su situación en el trabajo. Puede venir de una jefatura, de un compañero o de un subordinado. Ejemplos: gritos e insultos, burlas, aislar a alguien, amenazas, encargar tareas imposibles para humillar.' },
      { s: 'si_t2_sexual', t: 'Acoso sexual', x: 'Es cualquier <b>requerimiento de carácter sexual no consentido</b> que amenace o perjudique a la persona en su trabajo. Ejemplos: comentarios o bromas sexuales, insinuaciones, mensajes o fotos, tocaciones, miradas insistentes, presionar para salir. Si la otra persona no lo consiente, es acoso, aunque se diga que era \"en broma\".', k: 'Si la otra persona no lo consiente, es acoso, aunque se diga que era en broma.' },
      { s: 'si_t2_terceros', t: 'Violencia de terceros', x: 'Es la violencia que ejercen <b>personas externas</b> a la empresa contra los trabajadores: ' + TER + '. Insultos, amenazas o agresiones también se denuncian, y la empresa debe tomar medidas para proteger a su personal.' },
      { s: 'si_t2_denuncia', t: 'Cómo denunciar', x: 'Puedes denunciar:<ul><li><b>Por escrito</b>, con una carta.</li><li><b>Por correo electrónico</b>, al canal que indica el protocolo de tu empresa.</li><li><b>Presencialmente</b>, de forma verbal: en ese caso se deja un acta firmada.</li></ul>Se presenta ante la empresa (RR.HH. o la persona designada) o directamente en la Inspección del Trabajo. Cuenta qué pasó, cuándo, dónde y quiénes estaban.' },
      { s: 'si_t2_reserva', t: 'Confidencialidad e investigación', x: 'La denuncia se trata con <b>reserva</b>. La empresa la investiga, o la deriva a la Inspección del Trabajo, dentro de los plazos de la ley, escuchando a ambas partes con respeto. Al final se aplican las medidas y sanciones que correspondan. <b>No se puede castigar</b> a quien denuncia ni a los testigos por haberlo hecho.' },
      { s: 'si_t2_resguardo', t: 'Medidas de resguardo', x: 'Mientras se investiga, la empresa debe proteger a la persona afectada, por ejemplo:<ul><li>Separar los espacios de trabajo.</li><li>Cambiar la distribución de la jornada o los turnos.</li><li>Derivarla a atención psicológica de {LAMUT}.</li></ul>Las medidas se definen según la gravedad de los hechos y lo que necesite la persona.' },
      { s: 'si_t2_buentrato', t: 'Buen trato: tu parte', x: '<ul><li>Trata a todos con respeto: jefaturas, compañeros, compañeros de cuadrilla, contratistas y visitas.</li><li>Nada de bromas sexuales, apodos ofensivos ni burlas.</li><li>Si eres testigo, no te rías ni lo celebres: apoya a la persona y denuncia o anímala a denunciar.</li></ul>', k: 'El acoso y la violencia no se toleran: si lo vives o lo ves, denuncia.' }
    ],
    quiz: [
      { s: 'si_t2_karin', v: [
        { q: '¿Qué ley regula la prevención, investigación y sanción del acoso y la violencia en el trabajo?', o: ['Ley 21.643 (Ley Karin)', 'Ley 16.744', 'Ley 20.096', 'Ley 20.949'], w: 'La Ley 21.643, conocida como Ley Karin, trata el acoso laboral, el acoso sexual y la violencia en el trabajo.' },
        { q: '¿Qué obliga a hacer la Ley Karin a las empresas?', o: ['Prevenir, investigar y sancionar el acoso y la violencia', 'Solo poner carteles de buen trato en los murales', 'Pagar un bono a quien hace una denuncia', 'Investigar solo si hay testigos y pruebas'], w: 'La ley exige prevenir con un protocolo, investigar las denuncias y sancionar cuando corresponde.' },
        { q: '¿Qué situaciones cubre la Ley Karin?', o: ['Acoso laboral, acoso sexual y violencia de terceros', 'Solo el acoso que viene de las jefaturas', 'Solo las peleas físicas entre trabajadores', 'Solo lo que pasa fuera de la empresa'], w: 'Cubre las tres situaciones, vengan de jefaturas, compañeros o personas externas.' }] },
      { s: 'si_t2_acoso', v: [
        { q: 'Una jefatura grita e insulta a un trabajador delante de todos, una sola vez. ¿Puede ser acoso laboral?', o: ['Sí: no necesita repetirse para serlo', 'No, tiene que repetirse muchas veces', 'No, si lo hace una jefatura está permitido', 'Solo si queda grabado en video'], w: 'Con la Ley Karin, una sola agresión u hostigamiento que humille o menoscabe puede ser acoso laboral.' },
        { q: 'Para que exista acoso laboral, la conducta tiene que repetirse muchas veces.', vf: false, w: 'Falso. La ley considera acoso laboral la conducta que ocurre una sola vez o de forma reiterada.' },
        { q: '¿Cuál de estas conductas es acoso laboral?', o: ['Burlarse de un compañero y aislarlo para humillarlo', 'Pedir que se cumpla el procedimiento de trabajo', 'Corregir un error con respeto', 'Asignar tareas según el cargo'], w: 'Las burlas y el aislamiento buscan humillar. Corregir con respeto o dar instrucciones no es acoso.' }] },
      { s: 'si_t2_sexual', v: [
        { q: '¿Qué es el acoso sexual en el trabajo?', o: ['Un requerimiento sexual no consentido', 'Solo una agresión sexual física grave', 'Solo lo que ocurre fuera del horario', 'Una broma sexual permitida entre compañeros'], w: 'Basta que sea de carácter sexual y no consentido, sea un comentario, un mensaje o un contacto.' },
        { q: 'Un compañero manda mensajes con insinuaciones sexuales a una compañera que ya le pidió que pare. ¿Qué es?', o: ['Acoso sexual, que se puede denunciar', 'Una broma sin importancia', 'Un tema personal, ajeno a la empresa', 'Solo una falta de educación'], w: 'Son requerimientos sexuales no consentidos, por cualquier medio. Es acoso sexual y se puede denunciar.' },
        { q: 'Si es \"en broma\", un comentario sexual no consentido no es acoso.', vf: false, w: 'Falso. Lo que importa es que la otra persona no lo consiente, no la intención de quien lo hace.' }] },
      { s: 'si_t2_terceros', v: [
        { q: 'Un visitante del fundo insulta y amenaza a un trabajador. ¿Qué es?', o: ['Violencia de terceros, que se puede denunciar', 'Algo normal del trabajo que hay que aguantar', 'Nada, porque esa persona no es de la empresa', 'Solo un problema del trabajador afectado'], w: 'La Ley Karin también protege frente a la violencia de personas externas, como clientes, proveedores o choferes.' },
        { q: '¿Quiénes son los terceros en la Ley Karin?', o: ['Personas externas, como clientes o proveedores', 'Solo las jefaturas de la empresa', 'Solo los compañeros de la misma sección', 'Los familiares del trabajador afectado'], w: 'Terceros son personas que no trabajan en la empresa pero se relacionan con ella.' },
        { q: '¿Qué debe hacer la empresa ante la violencia de un tercero?', o: ['Tomar medidas para proteger a sus trabajadores', 'Nada, porque no es su trabajador', 'Solo pedirle disculpas al tercero', 'Cambiar siempre de puesto al trabajador agredido'], w: 'La empresa debe prevenir y proteger a su personal también frente a personas externas.' }] },
      { s: 'si_t2_denuncia', v: [
        { q: '¿Cómo puedes hacer una denuncia por Ley Karin?', o: ['Por escrito, por correo electrónico o presencialmente', 'Solo por WhatsApp a un compañero', 'Solo a través de un abogado', 'Solo si tienes testigos y pruebas en video'], w: 'Hay varios canales: carta, correo electrónico o en forma presencial, ante la empresa o la Inspección del Trabajo.' },
        { q: 'Si denuncias de forma verbal, ¿qué debe hacer quien la recibe?', o: ['Dejar un acta escrita y firmada', 'Solo recordarla de memoria', 'Pedirte que vuelvas con un abogado', 'Esperar a que se repita para anotarla'], w: 'La denuncia verbal se registra en un acta firmada, para que quede constancia.' },
        { q: 'Además de la empresa, ¿dónde puedes presentar una denuncia por Ley Karin?', o: ['En la Inspección del Trabajo', 'En {LAMUT}', 'En la municipalidad', 'En el SII'], w: 'La denuncia se puede presentar en la empresa o directamente en la Inspección del Trabajo.' }] },
      { s: 'si_t2_reserva', v: [
        { q: '¿Cómo se trata una denuncia por Ley Karin?', o: ['Con reserva, escuchando a ambas partes', 'Se comenta en una reunión con todos', 'Se publica en el diario mural de la empresa', 'Se resuelve sin escuchar a nadie'], w: 'La investigación es reservada y escucha a ambas partes antes de decidir.' },
        { q: 'Se puede sancionar a un trabajador por haber hecho una denuncia o por declarar como testigo.', vf: false, w: 'Falso. No se puede castigar a quien denuncia ni a los testigos por haberlo hecho.' },
        { q: '¿Qué datos conviene incluir en la denuncia?', o: ['Qué pasó, cuándo, dónde y quiénes estaban', 'Solo tu opinión sobre la otra persona', 'Solo el nombre de la persona denunciada', 'Nada: basta con decir que estás molesto'], w: 'Los hechos concretos permiten investigar bien.' }] },
      { s: 'si_t2_resguardo', v: [
        { q: 'Mientras se investiga, ¿qué medida puede tomar la empresa para proteger a la persona afectada?', o: ['Separar los espacios de trabajo o cambiar la distribución de los turnos', 'Despedir al denunciado sin investigar', 'Pedirle a la persona afectada que no venga y descontarle los días', 'Esperar el final de la investigación sin hacer nada'], w: 'Las medidas de resguardo protegen a la persona afectada durante la investigación.' },
        { q: '¿Qué atención puede recibir la persona afectada?', o: ['Atención psicológica de {LAMUT}', 'Solo un día libre', 'Ninguna, hasta que termine la investigación', 'Un bono en dinero'], w: 'La derivación a atención psicológica es una de las medidas de resguardo.' },
        { q: '¿Para qué sirven las medidas de resguardo?', o: ['Para proteger a la persona afectada mientras se investiga', 'Para castigar al denunciado antes de investigar', 'Para cerrar el caso más rápido', 'Para evitar que se haga la denuncia'], w: 'Buscan proteger a la persona y evitar que la situación continúe durante la investigación.' }] },
      { s: 'si_t2_buentrato', v: [
        { q: 'Ves que a un compañero lo humillan con burlas constantes. ¿Qué haces?', o: ['No me sumo, lo apoyo y lo animo a denunciar', 'Me río para no quedar fuera del grupo', 'Nada, porque no es mi problema', 'Lo grabo para subirlo a redes sociales'], w: 'Los testigos pueden frenar el acoso: no participar, apoyar y denunciar.' },
        { q: '¿Cuál de estas conductas es buen trato?', o: ['Dar instrucciones con respeto, sin gritos ni apodos', 'Poner apodos \"de cariño\" que molestan', 'Hacer bromas sexuales para relajar el ambiente', 'Ignorar a quien no te cae bien'], w: 'El buen trato es respeto en el trato diario, sin humillaciones ni bromas que incomodan.' },
        { q: '¿Quién es responsable de un ambiente libre de acoso?', o: ['Todos: empresa, jefaturas y trabajadores', 'Solo RR.HH.', 'Solo la gerencia', 'Solo la Inspección del Trabajo'], w: 'La empresa debe prevenir, pero cada persona es responsable de cómo trata a los demás.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'iluminacion', sec: 'todos', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Iluminación y fatiga visual', thumb: 'si_t2_lux', mins: 12,
    learn: [
      { s: 'si_t2_lux', t: 'La luz también es seguridad', x: 'Con poca luz no ves un derrame, un desnivel, una rama o un hoyo ni el vehículo que viene. El DS 594 fija la <b>cantidad mínima de luz</b> para cada tipo de tarea, medida en <b>lux</b>. Se mide con un <b>luxómetro</b>.' },
      { s: 'si_t2_tarea', t: 'Más precisión, más luz', x: 'Un pasillo necesita menos luz que leer la etiqueta de un agroquímico o revisar la fruta. Mientras más fina es la tarea, más luz necesita. Si no alcanzas a ver bien lo que haces, avisa: se puede medir y corregir.' },
      { s: 'si_t2_quemada', t: 'Avisa luminarias quemadas y sectores oscuros', x: 'Un tubo quemado, una luminaria que parpadea o un sector oscuro en galpones, caminos internos o accesos es una condición insegura. <b>Avísalo de inmediato</b> a tu jefatura. No la cambies tú si no estás autorizado: hay riesgo eléctrico y de caída.', k: 'Un sector oscuro es una condición insegura: avísalo de inmediato.' },
      { s: 'si_t2_deslumbra', t: 'Deslumbramientos', x: 'El exceso de luz también es un problema: el sol en una pantalla, el reflejo en techos plásticos y agua o los focos de un vehículo de frente. <b>Encandila</b>, cansa la vista y te hace perder de vista un peligro. Usa cortinas, cambia la posición y, al sol, lentes con filtro UV.' },
      { s: 'si_t2_fatiga', t: 'Fatiga visual', x: 'Mirar fijo por mucho rato, con poca luz o con reflejos, produce <b>ojos secos, ardor, visión borrosa y dolor de cabeza</b>. Para evitarlo:<ul><li>Pestañea seguido.</li><li>Haz pausas.</li><li>Aplica la regla <b>20-20-20</b>: cada 20 minutos, mira algo a 6 metros durante 20 segundos.</li></ul>' },
      { s: 'si_t2_pantalla', t: 'Si trabajas con pantalla', x: '<ul><li>Pantalla a un brazo de distancia, con el borde superior a la altura de los ojos.</li><li>La ventana a un costado, nunca detrás de la pantalla ni a tu espalda.</li><li>Brillo parecido al del lugar.</li><li>Letra de buen tamaño, para no acercarte.</li></ul>Vale para la oficina del fundo y los registros.' },
      { s: 'si_t2_noche', t: 'Trabajo nocturno', x: 'En la cosecha que empieza de madrugada, la luz es clave: usa linterna frontal con buena carga y ropa visible cerca de tractores. El sueño y la poca luz se suman: haz pausas y avisa si te cuesta ver.' },
      { s: 'si_t2_lentes', t: 'Cuida tu vista', x: 'Si te cuesta leer de cerca o de lejos, o te duelen los ojos al final del día, hazte un <b>control de la vista</b>. Un lente adecuado mejora tu trabajo y tu seguridad. Si te indicaron lentes ópticos, úsalos siempre en las tareas para las que te los recetaron.' }
    ],
    quiz: [
      { s: 'si_t2_lux', v: [
        { q: '¿Qué norma fija los niveles mínimos de iluminación en los lugares de trabajo?', o: ['DS 594', 'Ley 21.643', 'Ley 20.096', 'DS 57'], w: 'El DS 594, sobre condiciones sanitarias y ambientales, fija la iluminación mínima según la tarea.' },
        { q: '¿Con qué instrumento se mide la iluminación?', o: ['Luxómetro', 'Sonómetro', 'Termómetro', 'Dosímetro de ruido'], w: 'El luxómetro mide la cantidad de luz en lux. El sonómetro y el dosímetro miden ruido.' },
        { q: '¿En qué unidad se mide la cantidad de luz?', o: ['Lux', 'Decibeles', 'Grados', 'Kilos'], w: 'La luz se mide en lux; los decibeles son para el ruido.' }] },
      { s: 'si_t2_quemada', v: [
        { q: 'Ves que el foco del galpón está quemado. ¿Qué haces?', o: ['Aviso de inmediato a mi jefatura', 'Cambio la ampolleta yo, subido a una silla', 'Nada, se ve igual con la luz de al lado', 'Espero que otro avise'], w: 'Un sector oscuro es una condición insegura. Se avisa para que lo repare la persona autorizada.' },
        { q: 'Un sector oscuro en un pasillo o escalera es una condición insegura que se debe avisar.', vf: true, w: 'Verdadero. Con poca luz aumentan las caídas, los golpes y los atropellos.' },
        { q: '¿Por qué no debes cambiar una luminaria si no estás autorizado?', o: ['Por el riesgo eléctrico y de caída', 'Porque las ampolletas son muy caras', 'Porque ensucia el piso', 'Porque se pierde la garantía'], w: 'Cambiar una luminaria implica electricidad y trabajo en altura: lo hace personal autorizado.' }] },
      { s: 'si_t2_tarea', v: [
        { q: '¿Qué tarea necesita más luz?', o: ['Leer la etiqueta de un agroquímico', 'Caminar por un pasillo', 'Guardar cosas en una bodega', 'Pasar por el estacionamiento'], w: 'Mientras más fina o detallada es la tarea, más luz necesita.' },
        { q: 'La luz no te alcanza para ver bien tu tarea. ¿Qué haces?', o: ['Aviso para que se mida y se corrija', 'Me acerco más y fuerzo la vista', 'Sigo igual, trabajando más lento', 'Traigo una lámpara de mi casa y la enchufo'], w: 'Se avisa para que se mida y se corrija. Forzar la vista produce fatiga y errores.' },
        { q: '¿Por qué la buena iluminación es parte de la seguridad?', o: ['Porque deja ver los peligros a tiempo', 'Solo porque el lugar se ve más bonito', 'Porque reemplaza el uso de EPP', 'Porque calienta el lugar de trabajo'], w: 'Lo que no se ve no se puede evitar: la luz permite detectar los peligros a tiempo.' }] },
      { s: 'si_t2_deslumbra', v: [
        { q: 'El sol de la ventana se refleja en tu pantalla. ¿Qué haces?', o: ['Cierro la cortina o cambio la posición de la pantalla', 'Subo el brillo al máximo y sigo', 'Trabajo con los ojos entrecerrados', 'Pongo la pantalla de frente a la ventana'], w: 'Hay que eliminar el reflejo: cortina o cambio de posición, con la ventana a un costado.' },
        { q: '¿Qué problema causa un deslumbramiento?', o: ['Encandila y puedes no ver un peligro', 'Ninguno: más luz siempre es mejor', 'Solo calienta un poco el lugar', 'Mejora la visión de lejos y de cerca'], w: 'El exceso de luz o los reflejos encandilan y esconden los peligros.' },
        { q: '¿Dónde debe quedar la ventana respecto de la pantalla?', o: ['A un costado', 'Detrás de la pantalla', 'A tu espalda', 'Da lo mismo'], w: 'Detrás de la pantalla encandila; a tu espalda se refleja en ella. Lo correcto es a un costado.' }] },
      { s: 'si_t2_fatiga', v: [
        { q: '¿Qué es la regla 20-20-20?', o: ['Cada 20 minutos, mirar algo a 6 metros durante 20 segundos', 'Trabajar 20 minutos y descansar 20 minutos', 'Tener 20 lux de luz en cada puesto de trabajo', 'Cerrar los ojos 20 minutos cada 20 horas'], w: 'Mirar a lo lejos relaja los músculos de los ojos y previene la fatiga visual.' },
        { q: '¿Cuál es un síntoma de fatiga visual?', o: ['Ojos secos, ardor y visión borrosa', 'Dolor de rodillas al caminar', 'Zumbido en los oídos al salir', 'Calambres en las piernas'], w: 'Son las molestias típicas de forzar la vista por mucho rato.' },
        { q: 'Pestañear seguido y hacer pausas ayuda a prevenir la fatiga visual.', vf: true, w: 'Verdadero. Al mirar fijo se pestañea menos y los ojos se secan.' }] },
      { s: 'si_t2_pantalla', v: [
        { q: '¿A qué distancia y altura debe quedar la pantalla?', o: ['A un brazo, con el borde superior a la altura de los ojos', 'Lo más cerca posible de la cara para ver mejor', 'Muy por debajo del escritorio, sobre las piernas', 'Muy alta, para mirar hacia arriba todo el día'], w: 'Así la vista y el cuello trabajan en una posición cómoda.' },
        { q: '¿Cómo debe ser el brillo de la pantalla?', o: ['Parecido al del lugar donde trabajas', 'Siempre al máximo', 'Siempre al mínimo', 'Muy distinto al del lugar'], w: 'Un brillo muy distinto al del ambiente obliga a los ojos a adaptarse todo el tiempo.' },
        { q: 'La letra en la pantalla es muy chica y te acercas para leer. ¿Qué haces?', o: ['Agrando el texto en la pantalla', 'Me acerco más a la pantalla', 'Bajo el brillo', 'Sigo igual hasta terminar'], w: 'Agrandar la letra evita forzar la vista y la postura.' }] },
      { s: 'si_t2_noche', v: [
        { q: 'En el trabajo de noche en el campo, ¿qué es importante?', o: ['Linterna frontal con carga y ropa visible', 'Apagar luces para ahorrar energía', 'Trabajar a oscuras para no encandilarse', 'Usar ropa oscura para no llamar la atención'], w: 'De noche, la iluminación y la ropa visible evitan caídas y atropellos.' },
        { q: '¿Por qué el trabajo nocturno necesita más cuidado con la luz?', o: ['Porque se suman el sueño y la falta de luz natural', 'Porque de noche no hay peligros', 'Porque los equipos funcionan mejor de noche', 'Porque de noche se ve mejor de lejos'], w: 'El cansancio y la poca luz hacen más difícil ver los peligros a tiempo.' },
        { q: 'En el trabajo nocturno, si me cuesta ver bien, debo avisar a mi jefatura.', vf: true, w: 'Verdadero. Se puede mejorar la iluminación o el equipo antes de que ocurra un accidente.' }] },
      { s: 'si_t2_lentes', v: [
        { q: 'Te duelen los ojos al final del día y te cuesta leer. ¿Qué haces?', o: ['Me hago un control de la vista y aviso', 'Me froto fuerte los ojos y sigo', 'Uso los lentes de un compañero', 'Tomo un analgésico todos los días'], w: 'El control de la vista detecta si necesitas lentes; avisar permite revisar la iluminación.' },
        { q: 'Te indicaron lentes ópticos para trabajar de cerca. ¿Cuándo los usas?', o: ['Siempre que hago esas tareas', 'Solo cuando me acuerdo', 'Nunca, me incomodan', 'Solo en la casa'], w: 'Los lentes recetados corrigen tu vista y evitan errores y fatiga.' },
        { q: '¿Qué ayuda a cuidar la vista en el trabajo?', o: ['Buena iluminación, pausas y control de la vista', 'Trabajar con poca luz para acostumbrarse', 'Mirar fijo la pantalla sin pestañear', 'Usar lentes oscuros bajo techo'], w: 'La luz adecuada, las pausas y el control oportuno protegen tus ojos.' }] }
    ]
  });

})();



/* ---- campo.js (adaptado al Fundo Santa Sara) ---- */
window.SI_CONT = window.SI_CONT || { temas: [] };
(function () {
  // ===================== Comfrut Nursery · charlas de CAMPO (cerezos y kiwis) =====================
  // ---------- helpers propios (no globales) ----------
  const OL = '#22303A';
  const ST = '<style>'
    + '.si_ag_sw{animation:si_ag_sw 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}@keyframes si_ag_sw{0%,100%{transform:rotate(-1deg)}50%{transform:rotate(1deg)}}'
    + '.si_ag_sp{animation:si_ag_sp 1s linear infinite;transform-box:fill-box;transform-origin:center}@keyframes si_ag_sp{to{transform:rotate(360deg)}}'
    + '.si_ag_bob{animation:si_ag_bob 2.4s ease-in-out infinite}@keyframes si_ag_bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}'
    + '.si_ag_fl{animation:si_ag_fl 2.6s ease-in-out infinite}@keyframes si_ag_fl{0%,100%{transform:translate(0,0)}25%{transform:translate(5px,-4px)}50%{transform:translate(9px,2px)}75%{transform:translate(3px,5px)}}'
    + '.si_ag_fl2{animation:si_ag_fl 3.1s ease-in-out infinite reverse}'
    + '.si_ag_mi{animation:si_ag_mi 2.2s ease-in-out infinite}@keyframes si_ag_mi{0%,100%{opacity:.35}50%{opacity:.85}}'
    + '.si_ag_bl{animation:si_ag_bl 1.4s steps(2) infinite}@keyframes si_ag_bl{50%{opacity:.25}}'
    + '.si_ag_dr{animation:si_ag_dr 2.5s linear infinite}@keyframes si_ag_dr{from{transform:translateX(-6px)}to{transform:translateX(8px)}}'
    + '.si_ag_dl{animation:si_ag_dr 2.5s linear infinite reverse}'
    + '.si_ag_fall{animation:si_ag_fall 2s ease-in infinite}@keyframes si_ag_fall{0%{transform:translateY(0);opacity:1}80%{transform:translateY(30px);opacity:1}100%{transform:translateY(34px);opacity:0}}'
    + '.si_ag_pu{animation:si_ag_pu 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}@keyframes si_ag_pu{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}'
    + '</style>';
  const svx = inner => sv(ST + inner);
  // cielo + cerros + suelo (exterior). gy = altura del suelo
  const ext = (o = {}) => {
    const gy = o.gy || 150, soil = o.soil || '#9CCC65';
    let g = `<rect width="320" height="200" fill="${o.sky || '#BFE6FF'}"/>`;
    if (o.sun !== false) g += `<circle cx="${o.sunx || 285}" cy="26" r="13" fill="#FFE082"/><circle cx="${o.sunx || 285}" cy="26" r="9" fill="#FFD54F"/>`;
    g += `<path d="M0,${gy - 18} Q60,${gy - 44} 120,${gy - 22} T240,${gy - 26} T320,${gy - 20} V${gy} H0Z" fill="#A5D6A7"/>`;
    g += `<rect y="${gy}" width="320" height="${200 - gy}" fill="${soil}"/>`;
    if (o.dirt) g += `<rect y="${gy}" width="320" height="${200 - gy}" fill="#C8A97E"/>` + [20, 70, 130, 190, 250, 300].map((x, i) => `<ellipse cx="${x}" cy="${gy + 12 + (i % 3) * 12}" rx="6" ry="1.6" fill="#A1887F"/>`).join('');
    else g += [15, 55, 95, 140, 185, 225, 268, 305].map((x, i) => `<path d="M${x},${gy + 10 + (i % 3) * 13} l2,-6 l2,6 l2,-5 l1,5" stroke="#689F38" stroke-width="1.4" fill="none"/>`).join('');
    return g;
  };
  // rótulo tipo píldora (se oculta solo en la prueba)
  const lbl = (x, y, s, c = '#2E7D32', w) => { w = w || (s.length * 6.6 + 14); return `<rect x="${x - w / 2}" y="${y - 12}" width="${w}" height="17" rx="8" fill="${c}"/>` + txt(x, y + 1, s, 11, '#fff'); };
  const arrow = (x1, y1, x2, y2, c = '#D7262B', w = 3) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 7; return `<line x1="${x1}" y1="${y1}" x2="${x2 - Math.cos(a) * 4}" y2="${y2 - Math.sin(a) * 4}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x2},${y2} L${(x2 - h * Math.cos(a - .5)).toFixed(1)},${(y2 - h * Math.sin(a - .5)).toFixed(1)} L${(x2 - h * Math.cos(a + .5)).toFixed(1)},${(y2 - h * Math.sin(a + .5)).toFixed(1)}Z" fill="${c}"/>`; };
  const rot = (deg, cx, cy, inner) => `<g transform="rotate(${deg} ${cx} ${cy})">${inner}</g>`;
  // cerezo con cerezas rojas. (x,y)= base del tronco; s escala (s=1 ~ 3,5 m)
  const CHP = [[-28, -12], [-12, -30], [10, -22], [26, -6], [-34, 10], [-6, 2], [18, 14], [34, 22], [-20, 26], [4, -44], [-30, -32], [30, -30], [-8, 22], [14, -2]];
  function cherry(x, y, s = 1, o = {}) { return window.CF.framb(x, y + 2, s * 1.05, { fruta: o.fruit !== false, anim: false }); }
  function cherry_si(x, y, s = 1, o = {}) {
    const cy = y - 110 * s; let g = `<g class="${o.anim === false ? '' : 'si_ag_sw'}">`;
    g += `<path d="M${x - 6 * s},${y} L${x - 4 * s},${y - 62 * s} L${x - 20 * s},${y - 86 * s} M${x + 4 * s},${y - 60 * s} L${x + 20 * s},${y - 90 * s} M${x},${y - 62 * s} L${x + 2 * s},${y - 96 * s}" stroke="#6D4C41" stroke-width="${7 * s}" stroke-linecap="round" fill="none"/>`;
    g += `<rect x="${x - 6 * s}" y="${y - 64 * s}" width="${11 * s}" height="${64 * s}" rx="${3 * s}" fill="#6D4C41"/>`;
    [[-30, 6, 34, '#2E7D32'], [28, 4, 34, '#2E7D32'], [0, -22, 40, '#388E3C'], [-18, 20, 30, '#43A047'], [20, 22, 28, '#43A047'], [0, 8, 34, '#4CAF50']].forEach(([dx, dy, r, c]) => { g += `<circle cx="${x + dx * s}" cy="${cy + dy * s}" r="${r * s}" fill="${c}"/>`; });
    if (o.fruit !== false) CHP.forEach(([dx, dy], i) => { const fx = x + dx * s, fy = cy + dy * s; g += `<path d="M${fx},${fy - 6 * s} q${2 * s},${4 * s} ${-2.5 * s},${6 * s} M${fx},${fy - 6 * s} q${1 * s},${4 * s} ${3.5 * s},${6.5 * s}" stroke="#33691E" stroke-width="${.9 * s}" fill="none"/><circle cx="${fx - 2.6 * s}" cy="${fy + 1.5 * s}" r="${2.9 * s}" fill="#C62828"/><circle cx="${fx + 3.6 * s}" cy="${fy + 2 * s}" r="${2.9 * s}" fill="#B71C1C"/><circle cx="${fx - 3.4 * s}" cy="${fy + .6 * s}" r="${.8 * s}" fill="#fff" opacity=".6"/>`; });
    return g + '</g>';
  }
  // parrón (pérgola) de kiwi con frutos café. y = suelo, top = altura del alambre
  function kiwi(x1, x2, y, o = {}) {
    const top = o.top || (y - 92); let g = '';
    for (let x = x1; x <= x2; x += 70) g += `<rect x="${x - 3}" y="${top}" width="6" height="${y - top}" fill="#8D6E63" stroke="#5D4037" stroke-width="1"/>`;
    g += `<line x1="${x1 - 6}" y1="${top + 2}" x2="${x2 + 6}" y2="${top + 2}" stroke="#78909C" stroke-width="1.6"/>`;
    for (let x = x1 - 10; x < x2 + 10; x += 22) g += `<ellipse cx="${x + 11}" cy="${top - 4}" rx="17" ry="9" fill="${(x / 22) % 2 ? '#558B2F' : '#689F38'}"/>`;
    for (let x = x1; x < x2; x += 17) { const d = (x * 7) % 9; g += `<line x1="${x}" y1="${top + 3}" x2="${x}" y2="${top + 8 + d}" stroke="#5D4037" stroke-width="1"/><ellipse cx="${x}" cy="${top + 12 + d}" rx="3.6" ry="5" fill="#8D6E3F" stroke="#5D4037" stroke-width=".8"/>`; }
    return g;
  }
  // escalera frutícola de 3 patas (vista lateral). (bx,y)= base de los largueros; mira hacia la derecha (árbol) salvo flip
  const LADN = 8;
  function ladPt(bx, y, i, o = {}) { const H = (o.H || 118), d = o.flip ? -1 : 1, f = i / (LADN + 1); return [bx + d * .28 * H * f, y - H * f]; }
  function lad(bx, y, o = {}) {
    const H = o.H || 118, d = o.flip ? -1 : 1, ax = bx + d * .28 * H, ay = y - H, px = ax + d * (o.closed ? .02 : .34) * H;
    let g = `<line x1="${ax}" y1="${ay}" x2="${px}" y2="${y - (o.legUp || 0)}" stroke="${OL}" stroke-width="5.5" stroke-linecap="round"/><line x1="${ax}" y1="${ay}" x2="${px}" y2="${y - (o.legUp || 0)}" stroke="#78909C" stroke-width="3.2" stroke-linecap="round"/>`;
    g += `<line x1="${bx - 4}" y1="${y}" x2="${ax - 2}" y2="${ay}" stroke="${OL}" stroke-width="5.5" stroke-linecap="round"/><line x1="${bx - 4}" y1="${y}" x2="${ax - 2}" y2="${ay}" stroke="#B0BEC5" stroke-width="3.2" stroke-linecap="round"/>`;
    for (let i = 1; i <= LADN; i++) { const [cx, cy] = ladPt(bx, y, i, o); const bad = o.mark && i >= LADN - 1, broken = o.broken === i;
      g += broken ? `<path d="M${cx - 8},${cy} l6,1 l2,-4 M${cx + 1},${cy + 3} l7,-2" stroke="#D7262B" stroke-width="3" fill="none" stroke-linecap="round"/>`
        : `<rect x="${cx - 8}" y="${cy - 1.6}" width="16" height="3.4" rx="1" fill="${bad ? '#E53935' : '#90A4AE'}" stroke="${OL}" stroke-width=".8"/>`; }
    g += `<line x1="${bx + 4}" y1="${y}" x2="${ax + 2}" y2="${ay}" stroke="${OL}" stroke-width="5.5" stroke-linecap="round"/><line x1="${bx + 4}" y1="${y}" x2="${ax + 2}" y2="${ay}" stroke="#CFD8DC" stroke-width="3.2" stroke-linecap="round"/>`;
    g += `<rect x="${ax - 7}" y="${ay - 4}" width="14" height="6" rx="2" fill="#546E7A" stroke="${OL}" stroke-width="1"/><circle cx="${ax}" cy="${ay + 1}" r="2" fill="#FFC107"/>`;
    g += `<rect x="${bx - 9}" y="${y - 3}" width="18" height="4" rx="1.5" fill="#37474F"/>`;
    return g;
  }
  // capacho (bolso de cosecha al pecho) para una persona de pie en (x,y)
  const capacho = (x, y, o = {}) => { const d = o.flip ? -1 : 1, s = o.s || 1, bx = x + d * 9 * s, by = y - 40 * s;
    let g = o.one ? `<path d="M${x - d * 2 * s},${y - 62 * s} L${bx + d * 6 * s},${by - 6 * s}" stroke="#5D4037" stroke-width="${2.4 * s}"/>`
      : `<path d="M${x - d * 3 * s},${y - 62 * s} L${bx - d * 6 * s},${by - 7 * s} M${x + d * 4 * s},${y - 62 * s} L${bx + d * 7 * s},${by - 7 * s}" stroke="#5D4037" stroke-width="${2.4 * s}"/>`;
    g += `<path d="M${bx - 10 * s},${by - 7 * s} h${20 * s} l${-2 * s},${18 * s} q${-8 * s},${5 * s} ${-16 * s},0 z" fill="#FFB74D" stroke="#E65100" stroke-width="${1.2 * s}"/><line x1="${bx - 10 * s}" y1="${by - 3 * s}" x2="${bx + 10 * s}" y2="${by - 3 * s}" stroke="#E65100" stroke-width="${1 * s}"/>`;
    if (o.full) g += `<circle cx="${bx - 5 * s}" cy="${by - 8 * s}" r="${2.6 * s}" fill="#C62828"/><circle cx="${bx}" cy="${by - 9 * s}" r="${2.6 * s}" fill="#B71C1C"/><circle cx="${bx + 5 * s}" cy="${by - 8 * s}" r="${2.6 * s}" fill="#C62828"/>`;
    return g; };
  // bin cosechero (~1,2 m de ancho). (x,y)= esquina inferior izquierda
  const bin = (x, y, o = {}) => window.CF.pilaBandejas(x + 6, y, 3, 44 * (o.s || 1));
  const bin_si = (x, y, o = {}) => { const s = o.s || 1, w = 52 * s, h = 32 * s, c = o.c || '#1E88E5';
    let g = `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="${2 * s}" fill="${c}" stroke="${OL}" stroke-width="1.2"/>`;
    for (let i = 1; i < 4; i++) g += `<line x1="${x + i * w / 4}" y1="${y - h + 3 * s}" x2="${x + i * w / 4}" y2="${y - 3 * s}" stroke="#000" stroke-opacity=".18" stroke-width="${2 * s}"/>`;
    g += `<rect x="${x + 4 * s}" y="${y - 4 * s}" width="${10 * s}" height="${4 * s}" fill="#263238"/><rect x="${x + w - 14 * s}" y="${y - 4 * s}" width="${10 * s}" height="${4 * s}" fill="#263238"/>`;
    if (o.fruit) for (let i = 0; i < 9; i++) g += `<circle cx="${x + 6 * s + i * 5 * s}" cy="${y - h - 1 * s + (i % 2) * 1.5 * s}" r="${2.8 * s}" fill="${o.fruit}"/>`;
    return g; };
  // tractor vista lateral. x = borde trasero, y = suelo, mira a la derecha (flip: a la izquierda, x sigue siendo el borde trasero)
  tractor = (f => (...a) => '<g data-motor="1"' + (a[2] && a[2].flip ? ' data-flip="1"' : '') + '>' + f(...a) + '</g>')(tractor);
  function tractor(x, y, o = {}) {
    const s = o.s || 1, c = o.c || '#1F2FD6', c2 = o.c2 || '#0D1B8C';
    let g = '';
    if (o.pto) g += `<rect x="-10" y="-40" width="12" height="7" fill="#90A4AE" stroke="${OL}" stroke-width="1"/>`;
    if (o.hitch !== false) g += `<path d="M6,-30 L-8,-24 M8,-44 L-6,-36" stroke="#455A64" stroke-width="3.5" stroke-linecap="round"/>`;
    // chasis y capó
    g += `<rect x="48" y="-52" width="100" height="22" rx="3" fill="#455A64"/>`;
    g += `<path d="M62,-50 L62,-68 Q62,-72 68,-72 L146,-66 Q152,-65 152,-58 L152,-44 L62,-44Z" fill="${c}" stroke="${OL}" stroke-width="1.4"/>`;
    g += `<rect x="146" y="-62" width="7" height="16" rx="1" fill="#263238"/>` + [0, 1, 2].map(i => `<line x1="147" y1="${-59 + i * 5}" x2="152" y2="${-59 + i * 5}" stroke="#90A4AE" stroke-width="1.2"/>`).join('');
    g += `<rect x="86" y="-63" width="40" height="3" fill="#FFF" opacity=".35"/>`;
    g += `<rect x="114" y="-94" width="5" height="24" fill="#263238"/><rect x="113" y="-97" width="7" height="4" fill="#111"/>`;
    // ruedas
    const wheel = (cx, cy, r, rim) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#263238" stroke="#111" stroke-width="1.5"/><circle cx="${cx}" cy="${cy}" r="${r - 3}" fill="none" stroke="#37474F" stroke-width="3" stroke-dasharray="4 3"/><circle cx="${cx}" cy="${cy}" r="${rim}" fill="#FBC02D" stroke="#F57F17" stroke-width="1.2"/><circle cx="${cx}" cy="${cy}" r="${rim * .35}" fill="#F57F17"/>`;
    g += wheel(128, -18, 18, 10);
    g += wheel(36, -33, 33, 18);
    // guardabarro, asiento, volante
    g += `<path d="M-2,-40 A39,39 0 0 1 76,-40 L70,-40 A33,33 0 0 0 4,-40Z" fill="${c}" stroke="${OL}" stroke-width="1.3"/>`;
    g += `<rect x="30" y="-80" width="18" height="6" rx="2" fill="#212121"/><rect x="28" y="-92" width="5" height="16" rx="2" fill="#212121"/><rect x="36" y="-74" width="5" height="8" fill="#424242"/>`;
    g += `<line x1="74" y1="-66" x2="66" y2="-86" stroke="#263238" stroke-width="3"/><ellipse cx="65" cy="-88" rx="9" ry="2.8" fill="none" stroke="#212121" stroke-width="2.6" transform="rotate(-20 65 -88)"/>`;
    // peldaño de subida y pasamanos
    g += `<rect x="52" y="-30" width="12" height="3" fill="#455A64"/><line x1="58" y1="-30" x2="58" y2="-44" stroke="#455A64" stroke-width="2"/>`;
    if (o.driver) {   // tractorista sentado
      const sh = o.shirt || '#1F3A6B';
      g += `<polyline points="40,-80 58,-80 60,-60" fill="none" stroke="${OL}" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="40,-80 58,-80 60,-60" fill="none" stroke="#1F3A6B" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;
      g += `<line x1="40" y1="-80" x2="44" y2="-106" stroke="${OL}" stroke-width="15"/><line x1="40" y1="-80" x2="44" y2="-106" stroke="${sh}" stroke-width="12.5"/>`;
      g += `<polyline points="46,-102 58,-92 64,-90" fill="none" stroke="${OL}" stroke-width="8" stroke-linecap="round"/><polyline points="46,-102 58,-92 64,-90" fill="none" stroke="${sh}" stroke-width="5.5" stroke-linecap="round"/><circle cx="64" cy="-90" r="3.4" fill="#8D6E63" stroke="${OL}"/>`;
      g += `<line x1="45" y1="-108" x2="46" y2="-113" stroke="${SK}" stroke-width="5"/><circle cx="47" cy="-118" r="8.5" fill="${SK}" stroke="${OL}" stroke-width="1.1"/><circle cx="50" cy="-119" r="1.2" fill="${OL}"/>`;
      g += `<path d="M38,-120 Q38,-131 47,-130 Q57,-131 56,-120Z" fill="#F1E3C2" stroke="${OL}"/><path d="M55,-121 q7,0 8,2 l-8,.6z" fill="#F1E3C2" stroke="${OL}" stroke-width=".8"/><path d="M39,-121 q-3,7 -1,12 l5,-1 q-2,-5 1,-10z" fill="#F1E3C2" stroke="${OL}" stroke-width=".8"/>`;
      if (o.resp) g += `<path d="M49,-117 q6,-1 7,2 q0,4 -3,6 q-3,0 -4,-3z" fill="#78909C" stroke="${OL}" stroke-width=".7"/><circle cx="52" cy="-111" r="2.6" fill="#AD1457"/>`;
      if (o.belt) g += `<path d="M36,-88 Q44,-80 54,-84" stroke="#E53935" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    }
    if (o.ropsDown) g += `<path d="M22,-70 L-34,-86 L-30,-98 L26,-82" fill="none" stroke="#263238" stroke-width="5" stroke-linejoin="round"/>`;
    if (o.rops !== false) {   // estructura antivuelco ROPS (marco de 4 postes, vista lateral)
      const rc = o.ropsC || '#263238';
      g += `<path d="M22,-70 L22,-140 Q22,-144 26,-144 L78,-144 Q82,-144 82,-140 L82,-66" fill="none" stroke="${rc}" stroke-width="5" stroke-linejoin="round"/>`;
      g += `<rect x="18" y="-146" width="68" height="5" rx="2" fill="${o.techo || rc}"/>`;
      if (o.baliza) g += `<rect x="47" y="-153" width="10" height="7" rx="2" fill="#FF8F00" class="si_ag_bl"/>`;
    }
    if (o.pass) g += `<g transform="translate(2,-72)">${W(0, 0, { s: .62, face: 'worried' })}</g>`;
    const tr = `translate(${x},${y}) scale(${o.flip ? -s : s},${s})` + (o.tilt ? ` rotate(${o.tilt} ${o.tiltX || 150} 0)` : '');
    return `<g transform="${tr}">${g}</g>`;
  }
  window.CF_TRACTOR = (x, y) => tractor(x, y, { s: .7, driver: true, belt: true });
  // nebulizadora (pulverizadora con ventilador) tirada; (x,y)= punto de enganche (adelante) a nivel del suelo; mira a la derecha
  function nebu(x, y, o = {}) {
    const s = o.s || 1; let g = '';
    g += `<line x1="-24" y1="-34" x2="0" y2="-30" stroke="#455A64" stroke-width="4"/>`;
    g += `<rect x="-112" y="-74" width="88" height="54" rx="22" fill="${o.c || '#F57C00'}" stroke="${OL}" stroke-width="1.4"/><rect x="-100" y="-68" width="40" height="5" rx="2" fill="#fff" opacity=".35"/><rect x="-74" y="-82" width="14" height="9" rx="2" fill="#424242"/>`;
    g += `<rect x="-124" y="-80" width="18" height="66" rx="5" fill="#B0BEC5" stroke="${OL}" stroke-width="1.2"/>`;
    g += `<g class="${o.spin === false ? '' : 'si_ag_sp'}"><circle cx="-115" cy="-47" r="13" fill="#ECEFF1" stroke="${OL}"/><path d="M-115,-47 l0,-11 l4,2z M-115,-47 l10,5 l-4,2z M-115,-47 l-10,6 l0,-4z" fill="#546E7A"/></g>`;
    g += `<circle cx="-68" cy="-15" r="15" fill="#263238"/><circle cx="-68" cy="-15" r="7" fill="#FBC02D"/>`;
    if (o.mist) g += `<g class="si_ag_mi"><ellipse cx="-150" cy="-70" rx="26" ry="16" fill="#E3F2FD"/><ellipse cx="-160" cy="-40" rx="24" ry="14" fill="#E3F2FD"/><ellipse cx="-138" cy="-98" rx="20" ry="12" fill="#E3F2FD"/></g>`;
    return `<g transform="translate(${x},${y}) scale(${o.flip ? -s : s},${s})">${g}</g>`;
  }
  // cardán con o sin protector. de (x1) a (x2) a la altura y
  const cardan = (x1, x2, y, guard) => guard
    ? `<rect x="${x1}" y="${y - 6}" width="${x2 - x1}" height="12" rx="5" fill="#FFB300" stroke="#E65100" stroke-width="1.3"/>` + [.25, .5, .75].map(k => `<line x1="${x1 + (x2 - x1) * k}" y1="${y - 6}" x2="${x1 + (x2 - x1) * k}" y2="${y + 6}" stroke="#E65100" stroke-width="1"/>`).join('') + `<rect x="${x1 - 6}" y="${y - 9}" width="12" height="18" rx="5" fill="#FFCA28" stroke="#E65100"/><rect x="${x2 - 6}" y="${y - 9}" width="12" height="18" rx="5" fill="#FFCA28" stroke="#E65100"/><path d="M${x1 + (x2 - x1) * .5},${y + 6} q4,8 0,14" stroke="#9E9E9E" stroke-width="1.4" fill="none"/>`
    : `<clipPath id="si_ag_cd${x1}_${y}"><rect x="${x1}" y="${y - 3}" width="${x2 - x1}" height="6"/></clipPath><rect x="${x1}" y="${y - 3}" width="${x2 - x1}" height="6" fill="#90A4AE" stroke="#455A64"/><g clip-path="url(#si_ag_cd${x1}_${y})"><g class="si_ag_dr">${Array.from({ length: Math.ceil((x2 - x1) / 8) + 3 }, (_, i) => `<line x1="${x1 - 12 + i * 8}" y1="${y - 4}" x2="${x1 - 16 + i * 8}" y2="${y + 4}" stroke="#37474F" stroke-width="2"/>`).join('')}</g></g><circle cx="${x1}" cy="${y}" r="6" fill="#607D8B" stroke="${OL}"/><circle cx="${x2}" cy="${y}" r="6" fill="#607D8B" stroke="${OL}"/>`;
  // colmena; (x,y)= base
  const hive = (x, y, c = '#FFF8E1', s = 1) => `<rect x="${x - 2 * s}" y="${y - 6 * s}" width="${36 * s}" height="6" fill="#8D6E63"/><rect x="${x}" y="${y - 28 * s}" width="${32 * s}" height="${22 * s}" fill="${c}" stroke="#8D6E63" stroke-width="1.3"/><rect x="${x}" y="${y - 48 * s}" width="${32 * s}" height="${20 * s}" fill="${c}" stroke="#8D6E63" stroke-width="1.3"/><rect x="${x - 3 * s}" y="${y - 54 * s}" width="${38 * s}" height="${7 * s}" rx="1" fill="#A1887F" stroke="#6D4C41"/><rect x="${x + 8 * s}" y="${y - 10 * s}" width="${16 * s}" height="${3 * s}" fill="#3E2723"/>`;
  const bee = (x, y, s = 1, cl = 'si_ag_fl') => `<g class="${cl}"><ellipse cx="${x - 1 * s}" cy="${y - 3.5 * s}" rx="${2.6 * s}" ry="${2 * s}" fill="#E3F2FD" opacity=".9"/><ellipse cx="${x + 2 * s}" cy="${y - 3.8 * s}" rx="${2.6 * s}" ry="${2 * s}" fill="#E3F2FD" opacity=".9"/><ellipse cx="${x}" cy="${y}" rx="${4.2 * s}" ry="${2.9 * s}" fill="#FBC02D" stroke="#3E2723" stroke-width="${.6 * s}"/><path d="M${x - 1.2 * s},${y - 2.6 * s} v${5.2 * s} M${x + 1.4 * s},${y - 2.6 * s} v${5.2 * s}" stroke="#3E2723" stroke-width="${1.1 * s}"/></g>`;
  // celular con número
  const phone = (x, y, n = '1404') => `<rect x="${x}" y="${y}" width="44" height="72" rx="7" fill="#263238"/><rect x="${x + 4}" y="${y + 8}" width="36" height="52" rx="2" fill="#E3F2FD"/>${txt(x + 22, y + 30, window.CF_MUT().TEL ? window.CF_MUT().MUT : 'Mutual', 10, '#0D47A1')}${txt(x + 22, y + 48, window.CF_MUT().TEL ? (window.CF_MUT().TEL.length > 5 ? window.CF_MUT().TEL.slice(0, 7) : window.CF_MUT().TEL) : '☎', window.CF_MUT().TEL.length > 5 ? 8 : 13, '#C62828')}<circle cx="${x + 22}" cy="${y + 66}" r="3" fill="#90A4AE"/>`;
  // poste con letrero (texto oscuro, se ve también en la prueba)
  const post = (x, y, lines, c = '#D7262B', w = 84) => { const h = 16 + lines.length * 14; let g = `<rect x="${x - 2}" y="${y - 40 - h}" width="5" height="${h + 40}" fill="#8D6E63"/><rect x="${x - w / 2}" y="${y - 40 - h}" width="${w}" height="${h}" fill="#fff" stroke="${c}" stroke-width="3"/>`;
    lines.forEach((l, i) => { g += txt(x, y - 40 - h + 18 + i * 14, l, i === 0 ? 12 : 11, i === 0 ? c : '#263238'); }); return g; };
  const ach = (x, y, s = 1) => `<g class="si_ag_pu"><circle cx="${x}" cy="${y}" r="${12 * s}" fill="#FFC107" stroke="#E65100" stroke-width="2"/><text x="${x}" y="${y + 5 * s}" font-size="${15 * s}" font-weight="bold" text-anchor="middle" fill="#3E2723" font-family="Arial">!</text></g>`;

  // ======================= 1. COSECHA SEGURA CON ESCALERA =======================
  const clipL = id => `<clipPath id="${id}L"><rect x="0" y="0" width="158" height="200"/></clipPath><clipPath id="${id}R"><rect x="162" y="0" width="158" height="200"/></clipPath>`;
  const onLad = (bx, y, i, o = {}, lo = {}) => { const [px, py] = ladPt(bx, y, i, lo); return W(px - (lo.flip ? -3 : 3), py, o); };
  S.si_ag_esc_ok = () => svx(ext({ gy: 160 }) + cherry(225, 180) + bin(22, 186, { fruit: '#C62828' }) + lad(128, 184) + onLad(128, 184, 5, { pose: 'point' }) + (() => { const [px, py] = ladPt(128, 184, 5); return capacho(px - 3, py, { full: true }); })());
  S.si_ag_esc_caida = () => svx(ext({ gy: 160, sunx: 40 }) + cherry(250, 180) + rot(-32, 110, 184, lad(110, 184) + onLad(110, 184, 6, { pose: 'stop', face: 'pain' }))
    + `<ellipse cx="96" cy="186" rx="10" ry="4" fill="#5D4037"/>` + `<g class="si_ag_fall"><circle cx="70" cy="80" r="3" fill="#C62828"/><circle cx="84" cy="66" r="3" fill="#C62828"/><circle cx="58" cy="100" r="3" fill="#B71C1C"/></g>`
    + `<path d="M20,110 q10,-14 24,-16 M14,130 q12,-12 26,-12" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>` + badge(290, 34, false, 15));
  S.si_ag_esc_revisa = () => svx(ext({ gy: 160, sun: false }) + lad(100, 184, { broken: 3 }) + `<circle cx="111" cy="143" r="15" fill="none" stroke="#D7262B" stroke-width="3" class="si_ag_pu"/>`
    + `<line x1="90" y1="86" x2="121" y2="104" stroke="#795548" stroke-width="1.5"/>` + lbl(70, 88, 'NO USAR', '#D7262B') + W(245, 182, { pose: 'point', flip: true, face: 'worried' })
    + lbl(232, 30, 'Revisa antes de subir', '#1565C0'));
  S.si_ag_esc_apoyo = () => svx(ext({ gy: 160, sun: false }) + clipL('si_ag_ap')
    + `<g clip-path="url(#si_ag_apL)"><ellipse cx="112" cy="185" rx="15" ry="6" fill="#4E342E"/><ellipse cx="44" cy="182" rx="12" ry="7" fill="#9E9E9E" stroke="#616161"/>${rot(9, 50, 176, lad(50, 176, { H: 100 }))}${W(130, 186, { s: .85, face: 'worried', flip: true })}</g>`
    + divider() + `<g clip-path="url(#si_ag_apR)">${lad(206, 184, { H: 100 })}${W(296, 186, { s: .85, pose: 'point', flip: true })}</g>` + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_esc_pata = () => svx(ext({ gy: 160 }) + cherry(232, 180) + lad(120, 184) + `<circle cx="173" cy="123" r="13" fill="none" stroke="#FFC107" stroke-width="3" class="si_ag_pu"/>`
    + arrow(118, 52, 166, 114, '#1565C0') + lbl(86, 38, '3ª pata hacia el árbol', '#1565C0') + W(55, 184, { pose: 'point' }));
  const halfTree = (x, y) => `<g>${[[0, 0, 34, '#2E7D32'], [26, 14, 28, '#388E3C'], [-22, 18, 26, '#43A047']].map(([dx, dy, r, c]) => `<circle cx="${x + dx}" cy="${y + dy}" r="${r}" fill="${c}"/>`).join('')}${[[-10, 4], [12, -6], [20, 20], [-18, 24], [2, 26]].map(([dx, dy]) => `<circle cx="${x + dx}" cy="${y + dy}" r="2.8" fill="#C62828"/><circle cx="${x + dx + 5}" cy="${y + dy + 1}" r="2.8" fill="#B71C1C"/>`).join('')}</g>`;
  S.si_ag_esc_peld = () => svx(ext({ gy: 160, sun: false }) + clipL('si_ag_pe')
    + `<g clip-path="url(#si_ag_peL)">${halfTree(140, 40)}${lad(40, 186, { H: 104, mark: true })}${onLad(40, 186, 8, { s: .85, pose: 'stop', face: 'worried' }, { H: 104 })}</g>` + divider()
    + `<g clip-path="url(#si_ag_peR)">${halfTree(300, 50)}${lad(200, 186, { H: 104, mark: true })}${onLad(200, 186, 5, { s: .85, pose: 'point' }, { H: 104 })}</g>` + badge(22, 26, false, 14) + badge(182, 26, true, 14));
  S.si_ag_esc_estira = () => svx(ext({ gy: 160, sun: false }) + clipL('si_ag_es')
    + `<g clip-path="url(#si_ag_esL)">${halfTree(150, 60)}${lad(40, 186, { H: 104 })}${(() => { const [px, py] = ladPt(40, 186, 4, { H: 104 }); return rot(28, px, py, W(px - 3, py, { s: .85, pose: 'point', face: 'worried' })); })()}</g>` + divider()
    + `<g clip-path="url(#si_ag_esR)">${halfTree(290, 60)}${lad(215, 186, { H: 104 })}${onLad(215, 186, 4, { s: .85, pose: 'point' }, { H: 104 })}</g>` + badge(22, 26, false, 14) + badge(182, 26, true, 14));
  S.si_ag_esc_mover = () => svx(ext({ gy: 160, sun: false }) + clipL('si_ag_mo')
    + `<g clip-path="url(#si_ag_moL)"><g class="si_ag_bob">${rot(-6, 50, 178, lad(50, 178, { H: 100 }) + onLad(50, 178, 4, { s: .85, face: 'worried' }, { H: 100 }))}</g>${arrow(40, 192, 110, 192, '#D7262B', 3)}<path d="M46,182 q6,-8 12,0 M100,182 q6,-8 12,0" stroke="#fff" stroke-width="2" fill="none"/></g>` + divider()
    + `<g clip-path="url(#si_ag_moR)">${lad(236, 184, { H: 100 })}${W(196, 186, { s: .85, pose: 'carry' })}${arrow(250, 194, 300, 194, '#2E7D32', 3)}</g>` + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_capacho = () => svx(ext({ gy: 160 }) + cherry(40, 180, .9) + W(150, 182, { pose: 'stand' }) + capacho(150, 182, { full: true }) + bin(222, 188, { fruit: '#C62828', s: 1.2 })
    + lbl(150, 30, 'Correas en ambos hombros', '#1565C0') + arrow(150, 36, 152, 110, '#1565C0', 2.5) + lbl(250, 70, 'Manos libres', '#2E7D32') + arrow(232, 76, 168, 145, '#2E7D32', 2.5));
  S.si_ag_esc_bajar = () => svx(ext({ gy: 160, sun: false }) + clipL('si_ag_ba')
    + `<g clip-path="url(#si_ag_baL)">${lad(70, 186, { H: 104 })}${(() => { const [px, py] = ladPt(70, 186, 2, { H: 104 }); return W(px - 10, py - 4, { s: .85, flip: true, pose: 'walk', face: 'worried' }); })()}${arrow(60, 150, 30, 184, '#D7262B', 2.5)}</g>` + divider()
    + `<g clip-path="url(#si_ag_baR)">${lad(220, 186, { H: 104 })}${onLad(220, 186, 2, { s: .85, pose: 'carry' }, { H: 104 })}</g>` + badge(140, 26, false, 14) + badge(300, 26, true, 14));


  // ======================= 2. PODA, RALEO Y HERRAMIENTAS DE CORTE =======================
  const shears = (x, y, s = 1, a = 0, closed) => `<g transform="translate(${x},${y}) rotate(${a}) scale(${s})"><path d="M0,0 L-34,${closed ? -3 : -9}" stroke="${OL}" stroke-width="8" stroke-linecap="round"/><path d="M0,0 L-34,${closed ? -3 : -9}" stroke="#D32F2F" stroke-width="6" stroke-linecap="round"/><path d="M0,2 L-34,${closed ? 5 : 11}" stroke="${OL}" stroke-width="8" stroke-linecap="round"/><path d="M0,2 L-34,${closed ? 5 : 11}" stroke="#D32F2F" stroke-width="6" stroke-linecap="round"/><path d="M0,1 Q14,${closed ? -3 : -9} 30,${closed ? 0 : -7} Q16,${closed ? 1 : -2} 0,3Z" fill="#CFD8DC" stroke="#546E7A" stroke-width="1"/><path d="M0,2 Q12,${closed ? 6 : 8} 22,${closed ? 3 : 6} Q12,${closed ? 4 : 5} 0,4Z" fill="#455A64"/><circle cx="0" cy="2" r="2.6" fill="#FFC107" stroke="${OL}" stroke-width=".8"/></g>`;
  const serrucho = (x, y, s = 1, a = 0) => `<g transform="translate(${x},${y}) rotate(${a}) scale(${s})"><path d="M0,-4 Q36,-10 64,-2 L66,3 Q36,-3 0,6Z" fill="#CFD8DC" stroke="#546E7A" stroke-width="1"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `<path d="M${4 + i * 6},${5.6 - i * .35} l3,3 l3,-3.2" fill="none" stroke="#546E7A" stroke-width=".9"/>`).join('')}<path d="M-24,-6 Q-12,-10 2,-6 L2,8 Q-12,10 -24,4 Z" fill="#4E342E" stroke="${OL}" stroke-width="1"/><ellipse cx="-12" cy="1" rx="6" ry="3" fill="#BCAAA4"/></g>`;
  const funda = (x, y, s = 1) => `<rect x="${x + 4 * s}" y="${y - 44 * s}" width="${9 * s}" height="${16 * s}" rx="${2 * s}" fill="#5D4037" stroke="${OL}" stroke-width="1"/><path d="M${x + 6 * s},${y - 44 * s} l-1,-9 M${x + 11 * s},${y - 44 * s} l1,-9" stroke="#D32F2F" stroke-width="${3.4 * s}" stroke-linecap="round"/>`;
  const glove = (x, y, s = 1, sleeve = -1) => `<rect x="${sleeve < 0 ? x - 34 * s : x + 6 * s}" y="${y - 2 * s}" width="${28 * s}" height="${16 * s}" rx="${6 * s}" fill="#1F3A6B" stroke="${OL}" stroke-width="1" transform="rotate(${sleeve < 0 ? 25 : -25} ${x} ${y})"/><ellipse cx="${x}" cy="${y}" rx="${14 * s}" ry="${11 * s}" fill="#8D6E63" stroke="${OL}" stroke-width="1.2"/>${[-6, 0, 6].map(d => `<path d="M${x + d * s},${y - 9 * s} q${2 * s},${-4 * s} ${4 * s},0" stroke="#5D4037" stroke-width="${1.2 * s}" fill="none"/>`).join('')}`;
  const chainsaw = (x, y, s = 1, flip) => `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})"><rect x="0" y="-5" width="46" height="9" rx="4.5" fill="#B0BEC5" stroke="#455A64" stroke-width="1.2"/><rect x="2" y="-6" width="42" height="11" rx="5.5" fill="none" stroke="#37474F" stroke-width="1.4" stroke-dasharray="2 1.6"/><rect x="-26" y="-12" width="28" height="20" rx="4" fill="#F57C00" stroke="${OL}" stroke-width="1.2"/><path d="M-22,-12 q8,-12 20,-4" fill="none" stroke="#263238" stroke-width="3"/><rect x="-30" y="-6" width="6" height="12" rx="2" fill="#263238"/><rect x="-2" y="-14" width="4" height="10" fill="#263238"/></g>`;
  const visor = (x, y, s = 1, fx = 1) => { const X = x, Y = y - 73 * s; return `<rect x="${fx > 0 ? X + .5 * s : X - 11.5 * s}" y="${Y - 3.5 * s}" width="${11 * s}" height="${13 * s}" rx="${2 * s}" fill="#ECEFF1" fill-opacity=".35" stroke="#37474F" stroke-width="${.9 * s}"/>` + [0, 1, 2, 3].map(i => `<line x1="${fx > 0 ? X + .5 * s : X - 11.5 * s}" y1="${Y - 1 * s + i * 3 * s}" x2="${fx > 0 ? X + 11.5 * s : X - .5 * s}" y2="${Y - 1 * s + i * 3 * s}" stroke="#37474F" stroke-width="${.5 * s}"/>`).join(''); };
  const MOTO = { helmet: '#FF6F00', muffs: 'on', pants: '#E65100', gloves: '#424242', boots: undefined };
  const branch = (x1, y1, x2, y2, w = 6) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#6D4C41" stroke-width="${w}" stroke-linecap="round"/>`;
  const bareTree = (x, y, s = 1) => `<g class="si_ag_sw">${[[0, -60, 0, -150], [0, -62, -40, -120], [0, -64, 42, -126], [-20, -96, -48, -150], [24, -100, 52, -152], [0, -110, 18, -165]].map(([a, b, c, d], i) => branch(x + a * s, y + b * s, x + c * s, y + d * s, (i < 3 ? 7 : 4) * s)).join('')}<rect x="${x - 6 * s}" y="${y - 64 * s}" width="${12 * s}" height="${64 * s}" rx="3" fill="#6D4C41"/>${[[-40, -120], [42, -126], [-48, -150], [52, -152], [18, -165], [0, -150]].map(([a, b]) => `<circle cx="${x + a * s}" cy="${y + b * s}" r="${9 * s}" fill="#7CB342" opacity=".9"/>`).join('')}</g>`;
  S.si_ag_poda_herr = () => svx(ext({ gy: 160, sun: false }) + `<rect x="18" y="52" width="210" height="74" rx="10" fill="#fff" opacity=".7"/>` + shears(78, 88, 1.5, 0) + serrucho(160, 88, 1.05, 0) + W(268, 184, { flip: true }) + funda(262, 184)
    + lbl(66, 142, 'Con filo', '#2E7D32') + lbl(170, 142, 'Mango firme', '#2E7D32') + lbl(262, 30, 'En su funda', '#1565C0') + arrow(262, 38, 262, 120, '#1565C0', 2.5));
  S.si_ag_poda_corte = () => svx(`<rect width="320" height="200" fill="#C5E1A5"/><circle cx="60" cy="40" r="40" fill="#AED581"/><circle cx="250" cy="170" r="50" fill="#AED581"/>` + branch(6, 120, 154, 100, 9) + branch(70, 112, 100, 70, 5) + glove(66, 112, 1, -1) + shears(88, 106, 1.3, -20) + `<path d="M72,82 l-6,-8 M82,80 l0,-10 M92,82 l6,-8" stroke="#D7262B" stroke-width="2.5" stroke-linecap="round" class="si_ag_bl"/>`
    + divider() + branch(166, 120, 314, 100, 9) + branch(270, 104, 300, 66, 5) + glove(196, 116, 1, -1) + shears(282, 112, 1.3, -40) + arrow(246, 150, 300, 150, '#2E7D32', 3) + lbl(240, 176, 'Lejos de la mano', '#2E7D32') + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_poda_epp = () => svx(ext({ gy: 160 }) + bareTree(255, 184, 1.05) + W(150, 184, { pose: 'point', glasses: true }) + shears(184, 124, .8, -30)
    + lbl(58, 34, 'Lentes', '#1565C0') + arrow(80, 38, 150, 108, '#1565C0', 2) + lbl(58, 72, 'Guantes', '#1565C0') + arrow(84, 74, 170, 122, '#1565C0', 2) + lbl(58, 110, 'Overol', '#1565C0') + arrow(96, 112, 150, 132, '#1565C0', 2) + lbl(82, 190, 'Calzado de seguridad', '#1565C0', 140) + arrow(152, 187, 158, 184, '#1565C0', 2));
  S.si_ag_poda_ramas = () => svx(ext({ gy: 160 }) + bareTree(245, 184, 1) + lad(150, 184) + onLad(150, 184, 5, { pose: 'point', glasses: true }) + serrucho(176, 64, .5, -20)
    + `<g class="si_ag_fall">${branch(196, 92, 232, 78, 5)}<circle cx="232" cy="78" r="7" fill="#7CB342"/></g>` + bubble(30, 14, '¡Rama!', 80) + W(60, 186, { pose: 'stop', flip: true }));
  S.si_ag_motosierra = () => svx(ext({ gy: 160, sunx: 200 }) + bareTree(272, 184, 1) + branch(268, 132, 200, 130, 10) + W(150, 184, Object.assign({ pose: 'carry' }, MOTO)) + visor(150, 184) + chainsaw(168, 134, 1)
    + `<g class="si_ag_bl"><circle cx="212" cy="140" r="1.6" fill="#D7CCC8"/><circle cx="218" cy="146" r="1.4" fill="#D7CCC8"/><circle cx="206" cy="148" r="1.5" fill="#D7CCC8"/></g>` + lbl(94, 32, 'Solo personal autorizado', '#E65100', 160));
  S.si_ag_moto_epp = () => svx(ext({ gy: 170, sun: false }) + W(100, 192, Object.assign({ pose: 'carry', s: 1.35 }, MOTO)) + visor(100, 192, 1.35) + chainsaw(124, 124, 1.2)
    + [['Casco con visor', 30, 102, 72], ['Protector auditivo', 62, 94, 92], ['Guantes', 94, 120, 125], ['Pantalón anticorte', 128, 108, 160], ['Calzado de seguridad', 162, 112, 188]].map(([t, ly, px, py]) => lbl(252, ly, t, '#E65100', 128) + arrow(188, ly - 3, px + 6, py, '#E65100', 1.8)).join(''));
  S.si_ag_moto_zona = () => svx(ext({ gy: 160, sunx: 30 }) + bareTree(285, 184, .95) + `<ellipse cx="215" cy="178" rx="78" ry="16" fill="#D7262B" opacity=".12" stroke="#D7262B" stroke-width="2.5" stroke-dasharray="7 5"/>` + branch(282, 136, 236, 134, 9)
    + W(200, 184, Object.assign({ pose: 'carry' }, MOTO)) + visor(200, 184) + chainsaw(218, 134, 1) + W(56, 184, { pose: 'stop' }) + lbl(215, 22, 'Nadie se acerca', '#D7262B'));
  S.si_ag_kiwi_cuello = () => svx(ext({ gy: 160 }) + kiwi(30, 310, 184, { top: 90 }) + W(105, 186, { pose: 'stop', face: 'pain' }) + `<ellipse cx="105" cy="128" rx="13" ry="8" fill="#E53935" opacity=".45" class="si_ag_pu"/>`
    + W(230, 186, { pose: 'lift2', flip: true }) + lbl(105, 22, 'Brazos y cuello en alto', '#D7262B', 150) + lbl(232, 56, 'Pausa', '#2E7D32'));
  S.si_ag_poda_guardar = () => svx(ext({ gy: 160 }) + cherry(290, 182, .8, { fruit: false }) + W(110, 184, { pose: 'point' }) + funda(110, 184) + W(205, 184, { pose: 'point', flip: true }) + shears(160, 124, .8, 180, true)
    + lbl(158, 40, 'Cerrada y por el mango', '#2E7D32', 150));


  // ======================= 3. CAMINAR Y TRABAJAR EN EL HUERTO =======================
  const rowTrees = (y = 150, s = .42) => [24, 96, 168, 240, 312].map(x => cherry(x, y, s, { anim: false })).join('');
  const dog = (x, y, flip) => `<g transform="translate(${x},${y}) scale(${flip ? -1 : 1},1)"><path d="M19,-26 q10,-6 8,-17" stroke="#6D4C41" stroke-width="4" fill="none" stroke-linecap="round"/>${[[-12, -13], [-5, -4], [9, 10], [15, 16]].map(([a, b]) => `<line x1="${a}" y1="-16" x2="${b}" y2="0" stroke="#5D4037" stroke-width="4.5" stroke-linecap="round"/>`).join('')}<ellipse cx="0" cy="-23" rx="21" ry="9.5" fill="#8D6E63" stroke="${OL}" stroke-width="1"/><circle cx="-22" cy="-33" r="8.5" fill="#8D6E63" stroke="${OL}" stroke-width="1"/><path d="M-26,-30 h-10 q-3,2 0,4 h8 M-35,-25 l6,1" fill="#A1887F" stroke="${OL}" stroke-width="1"/><path d="M-20,-41 l5,-6 l2,9z" fill="#5D4037"/><circle cx="-25" cy="-35" r="1.3" fill="${OL}"/><circle cx="-36" cy="-29" r="1.6" fill="${OL}"/></g>`;
  const bark = (x, y, flip) => { const d = flip ? 1 : -1; return `<g class="si_ag_bl">${[6, 12].map(r => `<path d="M${x + d * r * .5},${y - r} q${d * r},${r} 0,${2 * r}" stroke="#D7262B" stroke-width="2.4" fill="none"/>`).join('')}</g>`; };
  const canal = (x1, x2, gy = 150) => `<path d="M${x1},${gy} L${x1 + 10},${gy + 40} L${x2 - 10},${gy + 40} L${x2},${gy}Z" fill="#6D4C41"/><path d="M${x1 + 4},${gy + 14} L${x2 - 4},${gy + 14} L${x2 - 10},${gy + 40} L${x1 + 10},${gy + 40}Z" fill="#4FC3F7"/><g class="si_ag_dr">${[0, 1, 2].map(i => `<path d="M${x1 + 10 + i * 18},${gy + 22 + i * 5} q5,-3 10,0 t10,0" stroke="#E1F5FE" stroke-width="1.6" fill="none"/>`).join('')}</g>`;
  const rastra = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0,-28 L-14,-30 L-70,-30" stroke="#455A64" stroke-width="5" fill="none" stroke-linecap="round"/>${[-22, -36, -50, -64].map(d => `<ellipse cx="${d}" cy="-12" rx="5" ry="12" fill="#B0BEC5" stroke="#546E7A" stroke-width="1.4"/><line x1="${d}" y1="-30" x2="${d}" y2="-12" stroke="#455A64" stroke-width="2.5"/>`).join('')}</g>`;
  S.si_ag_ter_suelo = () => svx(ext({ gy: 150 }) + rowTrees() + `<ellipse cx="172" cy="184" rx="16" ry="6" fill="#4E342E"/>` + `<ellipse cx="80" cy="182" rx="10" ry="6" fill="#9E9E9E" stroke="#616161"/><ellipse cx="96" cy="186" rx="6" ry="4" fill="#BDBDBD" stroke="#757575"/>` + branch(232, 186, 284, 178, 4) + `<path d="M40,190 q20,-8 46,-2" stroke="#6D4C41" stroke-width="4" fill="none"/>`
    + rot(14, 166, 184, W(166, 184, { pose: 'walk', face: 'pain' })) + lbl(160, 24, 'Mira dónde pisas', '#1565C0'));
  S.si_ag_ter_acequia = () => svx(ext({ gy: 150, sun: false }) + canal(30, 120) + `<path d="M48,92 q30,-26 58,0" stroke="#fff" stroke-width="2" stroke-dasharray="4 4" fill="none"/>` + rot(-18, 66, 128, W(66, 128, { pose: 'walk', s: .9, face: 'worried' }))
    + divider() + canal(196, 286) + `<rect x="184" y="146" width="114" height="7" fill="#8D6E63" stroke="#5D4037"/><path d="M188,146 V112 M294,146 V112 M188,114 H294 M188,130 H294" stroke="#6D4C41" stroke-width="3.5" fill="none"/>` + W(242, 147, { pose: 'walk', s: .9 })
    + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_ter_riego = () => svx(ext({ gy: 150 }) + rowTrees() + `<ellipse cx="226" cy="186" rx="40" ry="8" fill="#6D4C41" opacity=".75"/>` + `<path d="M0,170 H320" stroke="#212121" stroke-width="3"/>` + [30, 90, 150, 210, 270].map(x => `<g class="si_ag_fall">${drop(x, 178, .35, '#29B6F6')}</g>`).join('')
    + `<path d="M40,198 Q110,176 150,184 T300,160" stroke="#388E3C" stroke-width="5" fill="none"/>` + W(120, 186, { pose: 'walk' }) + lbl(62, 140, 'Manguera', '#1565C0') + arrow(62, 146, 70, 190, '#1565C0', 2) + lbl(262, 140, 'Barro', '#6D4C41') + arrow(260, 146, 236, 182, '#6D4C41', 2));
  S.si_ag_ter_ramas = () => svx(ext({ gy: 150 }) + cherry(250, 184, .95, { anim: false }) + branch(240, 92, 138, 106, 5) + [150, 166, 184, 204].map((x, i) => `<ellipse cx="${x}" cy="${104 - i * 3}" rx="7" ry="4" fill="#43A047"/>`).join('')
    + W(118, 186, { pose: 'point', glasses: true }) + W(46, 186, { pose: 'walk', glasses: true }) + lbl(140, 26, 'Cañas y alambres a la cara', '#D7262B', 190));
  S.si_ag_ter_perro = () => svx(ext({ gy: 150 }) + rowTrees() + dog(220, 184) + bark(186, 146) + W(90, 186, { pose: 'stop', face: 'worried' }) + lbl(110, 26, 'No te acerques', '#1565C0'));
  S.si_ag_ter_tractor = () => svx(ext({ gy: 150, sun: false }) + rowTrees() + tractor(305, 186, { flip: true, s: .85, driver: true, belt: true, baliza: true }) + W(70, 186, { pose: 'stop' })
    + `<path d="M76,114 L262,86" stroke="#1565C0" stroke-width="2.5" stroke-dasharray="6 5"/>` + lbl(150, 26, 'Contacto visual', '#1565C0'));
  S.si_ag_ter_retro = () => svx(ext({ gy: 150, sun: false }) + rowTrees() + rastra(140, 186, .9) + tractor(140, 186, { s: .85, driver: true, belt: true, baliza: true }) + arrow(250, 40, 170, 40, '#D7262B', 4) + lbl(210, 22, 'Retrocede', '#D7262B')
    + W(40, 186, { pose: 'walk', flip: true }) + badge(296, 30, false, 15));
  S.si_ag_ter_aviso = () => svx(ext({ gy: 150 }) + rowTrees() + `<ellipse cx="140" cy="184" rx="18" ry="6" fill="#4E342E"/><path d="M158,184 V146" stroke="#8D6E63" stroke-width="3"/><path d="M158,146 l18,6 l-18,6z" fill="#FF6F00" class="si_ag_sw"/>`
    + W(80, 186, { pose: 'point' }) + W(240, 186, { pose: 'stand', flip: true, vest: true }) + bubble(20, 22, '¡Aquí hay un hoyo!', 130) + bubble(200, 40, 'Lo señalizo', 100));

  SI_CONT.temas.push({
    id: 'ag_terreno', sec: 'campo', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Caminar y trabajar entre hileras', thumb: 'si_ag_ter_tractor', mins: 12,
    learn: [
      { s: 'si_ag_ter_suelo', t: 'Terreno irregular', x: 'En el campo hay <b>hoyos, piedras, raíces, ramas en el suelo y barro</b>, y el pasto alto puede esconder un hoyo. Las caídas al mismo nivel causan torceduras de tobillo, golpes y fracturas.<ul><li>Mira <b>dónde pisas</b> y no corras.</li><li>Usa <b>calzado de seguridad</b> con buen agarre.</li><li>No camines mirando el celular.</li></ul>' },
      { s: 'si_ag_ter_acequia', t: 'Acequias y canales: caída y ahogamiento', x: '<ul><li><b>No saltes</b> acequias ni canales: cruza solo por <b>puentes o pasarelas habilitadas</b>.</li><li>Los bordes son resbalosos y la corriente puede ser fuerte, aunque el agua se vea tranquila.</li><li>No te bañes ni te laves en los canales.</li><li>Si alguien cae: <b>da aviso</b> y lánzale algo para que se agarre (cuerda, rama). No te tires al agua.</li></ul>', k: 'Nunca saltes un canal: crúzalo solo por un puente o pasarela habilitada.' },
      { s: 'si_ag_ter_riego', t: 'Mangueras, goteo y barro', x: 'Las <b>mangueras y cintas de goteo</b> en el suelo hacen tropezar, y después del riego el suelo queda con <b>barro</b> y resbaloso.<ul><li>Pasa por encima de las mangueras con cuidado; no tires de ellas.</li><li>Camina más despacio en el barro.</li><li>Si ves una fuga o una manguera rota, <b>avisa</b> a tu jefatura o al encargado de riego.</li></ul>' },
      { s: 'si_ag_ter_ramas', t: 'Cañas y alambres a la altura de los ojos', x: 'Entre las hileras hay <b>cañas y alambres a la altura de la cara</b>.<ul><li>Usa <b>lentes de seguridad</b>.</li><li>Avanza mirando hacia adelante y aparta las cañas con la mano.</li><li>No sueltes la caña de golpe: puede darle un <b>latigazo</b> al compañero que viene detrás.</li></ul>' },
      { s: 'si_ag_ter_perro', t: 'Perros y otros animales', x: '<ul><li><b>No te acerques</b> a perros sueltos ni a animales que no conoces, aunque parezcan tranquilos.</li><li>No les des comida.</li><li>Si un perro te ladra, aléjate con calma, sin correr ni tirarle piedras.</li><li>Si te muerde o te araña, <b>lava con agua y jabón</b> y <b>avisa de inmediato</b> a tu jefatura para que te atiendan en {LAMUT}.</li></ul>' },
      { s: 'si_ag_ter_tractor', t: 'Tractores entre hileras: hazte ver', x: 'El tractorista tiene <b>puntos ciegos</b>, mucho ruido y va atento al implemento.<ul><li>Haz <b>contacto visual</b> con el tractorista antes de cruzar o acercarte.</li><li>No camines por la misma hilera donde avanza un tractor: espera a un costado o usa otra hilera.</li><li>Nunca cruces corriendo delante de un tractor.</li></ul>' },
      { s: 'si_ag_ter_retro', t: 'Nunca detrás de un tractor que retrocede', x: 'Detrás del tractor y de su implemento está su <b>mayor punto ciego</b>.<ul><li><b>Nunca camines ni te quedes detrás</b> de un tractor que retrocede o que va a retroceder.</li><li>Si estás detrás, <b>aléjate de inmediato</b> hacia un costado, donde el tractorista te vea.</li></ul>', k: 'Nunca estés detrás de un tractor que retrocede: el tractorista no te ve.' },
      { s: 'si_ag_ter_aviso', t: 'Avisa lo que es peligroso', x: 'Si ves un <b>hoyo</b>, un canal sin pasarela, un <b>alambre suelto</b>, un poste suelto o un perro agresivo, <b>avisa a tu jefatura</b> para que lo corrijan o lo señalicen, y advierte a tus compañeros.<br>Un aviso a tiempo evita el accidente del que viene detrás.' }
    ],
    quiz: [
      { s: 'si_ag_ter_suelo', v: [
        { q: 'Al caminar por el campo, ¿qué causa más caídas?', o: ['Hoyos, piedras, raíces y ramas en el suelo', 'El polvo que levantan los vehículos', 'Los letreros de los sectores', 'Las hojas de los árboles en altura'], w: 'Los obstáculos del suelo hacen tropezar y torcer el tobillo.' },
        { q: 'El pasto está alto y no ves bien el suelo. ¿Cómo caminas?', o: ['Despacio, mirando dónde pisas', 'Rápido, para salir luego de ahí', 'Mirando el celular para no perder la ruta', 'Por encima de las mangueras, que son más firmes'], w: 'El pasto alto puede esconder hoyos y piedras.' },
        { q: '¿Qué calzado usas para trabajar en el campo?', o: ['Calzado de seguridad con buen agarre', 'Zapatillas de lona, que son más livianas', 'Sandalias abiertas, por el calor del verano', 'Cualquier zapato que te resulte cómodo'], w: 'El calzado de seguridad protege y agarra mejor en tierra, barro y pasto.' }] },
      { s: 'si_ag_ter_acequia', v: [
        { q: 'Necesitas pasar al otro lado de un canal. ¿Qué haces?', o: ['Cruzas solo por un puente o pasarela habilitada', 'Lo saltas, siempre que no sea muy ancho', 'Lo cruzas caminando por el agua, despacio', 'Pasas por una tabla suelta puesta encima'], w: 'Los bordes son resbalosos y la corriente puede arrastrarte.' },
        { q: 'Un compañero cae a un canal con corriente. ¿Qué haces?', o: ['Das aviso y le lanzas algo para que se agarre', 'Te lanzas de inmediato al agua para sacarlo', 'Vas a buscar ayuda lejos y lo pierdes de vista', 'Esperas en la orilla a que salga por su cuenta'], w: 'Si te tiras, pueden ser dos las personas arrastradas. Aviso y algo para agarrarse.' },
        { q: 'Bañarse o lavarse en un canal del fundo es seguro si el agua se ve tranquila.', vf: false, w: 'Falso. La corriente y los bordes resbalosos pueden arrastrar a una persona aunque el agua se vea tranquila.' }] },
      { s: 'si_ag_ter_riego', v: [
        { q: '¿Qué peligro tienen las mangueras y cintas de goteo en el suelo?', o: ['Puedes tropezar y caer', 'Puedes electrocutarte', 'Puedes intoxicarte con el agua', 'Ninguno, porque son blandas'], w: 'Son obstáculos en el suelo: se pasa por encima con cuidado.' },
        { q: 'Terminó el riego y el suelo quedó con barro. ¿Qué haces?', o: ['Caminas más despacio y sin correr', 'Caminas por encima de las mangueras', 'Corres para salir luego del barro', 'Sigues igual que con el suelo seco'], w: 'El barro es resbaloso: menos velocidad, más cuidado.' },
        { q: 'Una manguera rota está inundando el pasillo. ¿Qué haces?', o: ['Avisas a tu jefatura o al encargado de riego', 'Tiras de la manguera para sacarla del pasillo', 'La reparas tú mismo con un poco de alambre', 'Sigues trabajando sin decirle nada a nadie'], w: 'Avisar permite repararla y evita barro y caídas.' }] },
      { s: 'si_ag_ter_ramas', v: [
        { q: 'Caminas entre hileras con cañas a la altura de la cara. ¿Qué haces?', o: ['Usas lentes y apartas las cañas con la mano', 'Caminas rápido con la cabeza agachada', 'Caminas mirando solo el suelo para no tropezar', 'Quiebras las cañas que encuentras a tu paso'], w: 'Así proteges tus ojos y tu cara.' },
        { q: 'Vas delante de un compañero y apartas una caña. ¿Qué haces con ella?', o: ['La sueltas con cuidado para que no lo golpee', 'La sueltas de golpe para avanzar rápido', 'La quiebras y la dejas en el suelo', 'La empujas hacia el compañero'], w: 'Una caña soltada de golpe puede dar un latigazo en la cara del que viene detrás.' },
        { q: '¿Qué EPP protege tus ojos de las cañas y alambres al caminar entre hileras?', o: ['Lentes de seguridad', 'Legionario con cubrenuca', 'Guantes de trabajo', 'Protector auditivo'], w: 'Los lentes de seguridad protegen los ojos de cañas, alambres y astillas.' }] },
      { s: 'si_ag_ter_perro', v: [
        { q: 'Un perro suelto te ladra en el campo. ¿Qué haces?', o: ['No te acercas, te alejas con calma y avisas', 'Le tiras una piedra para que se vaya', 'Corres para que no te alcance', 'Le das comida para que se calme'], w: 'Correr o agredirlo puede provocar que ataque.' },
        { q: 'Un perro te mordió y la herida es pequeña. ¿Qué haces?', o: ['Lavas con agua y jabón y avisas de inmediato', 'Te pones un parche y sigues trabajando', 'Esperas unos días para ver si se infecta', 'Lo comentas con tu jefatura al día siguiente'], w: 'Toda mordedura debe evaluarse en {LAMUT}, aunque sea pequeña.' },
        { q: 'Aunque un perro del fundo parezca tranquilo, no debes acercarte ni darle comida.', vf: true, w: 'Verdadero. Un animal que no conoces puede morder sin aviso.' }] },
      { s: 'si_ag_ter_tractor', v: [
        { q: 'Un tractor viene por la hilera donde trabajas. ¿Qué haces?', o: ['Haces contacto visual y esperas a un costado', 'Sigues trabajando: el tractorista te esquivará', 'Cruzas corriendo por delante del tractor', 'Te acercas a hablarle mientras va avanzando'], w: 'El tractorista tiene puntos ciegos: asegúrate de que te vea.' },
        { q: '¿Por qué haces contacto visual con el tractorista?', o: ['Porque el tractor tiene puntos ciegos y ruido', 'Porque es una forma educada de saludarlo', 'Porque así el tractor puede avanzar más rápido', 'Porque lo pide el control de calidad del fundo'], w: 'Si no te ve ni te escucha, no puede frenar a tiempo.' },
        { q: 'Un tractor avanza por una hilera. ¿Por dónde caminas?', o: ['Por otra hilera, o esperas a un costado que pase', 'Por la misma hilera, delante del tractor', 'Detrás del tractor, por su huella', 'Junto a las ruedas, para que te vea'], w: 'Nunca compartas la hilera con un tractor en movimiento.' }] },
      { s: 'si_ag_ter_retro', v: [
        { q: 'Un tractor está retrocediendo. ¿Dónde nunca debes estar?', o: ['Detrás del tractor', 'A un costado, a varios metros', 'Frente al tractorista, a la vista', 'En otra hilera'], w: 'Detrás del tractor y del implemento está su mayor punto ciego.' },
        { q: 'Caminar detrás de un tractor que retrocede es seguro si el tractorista mira por los espejos.', vf: false, w: 'Falso. Detrás del tractor y del implemento hay puntos que no se ven. Nunca camines detrás.' },
        { q: 'Un tractor con un implemento va a retroceder y tú estás detrás. ¿Qué haces?', o: ['Te alejas de inmediato hacia un costado', 'Te quedas quieto donde estás para que te vea', 'Le haces señas desde atrás para que frene', 'Te agachas detrás del implemento para cubrirte'], w: 'Muévete a un costado, donde el tractorista te pueda ver.' }] },
      { s: 'si_ag_ter_aviso', v: [
        { q: 'Ves un hoyo grande escondido en el pasto de un pasillo. ¿Qué haces?', o: ['Avisas para que lo señalicen o lo tapen', 'Lo esquivas y sigues sin decir nada', 'Lo tapas con ramas para que no se vea', 'Solo te acuerdas de él para no caer tú'], w: 'Avisar evita que caiga el compañero que viene detrás.' },
        { q: '¿Qué condiciones del campo debes avisar a tu jefatura?', o: ['Hoyos, alambres sueltos y perros agresivos', 'Solo los accidentes en que alguien se lesionó', 'Solo las fallas de los tractores y vehículos', 'Ninguna, porque cada uno se cuida solo'], w: 'Toda condición peligrosa se avisa para que se corrija antes del accidente.' },
        { q: 'Un alambre de la espaldera está suelto y cuelga a la altura de la cara. ¿Qué haces?', o: ['Avisas para que lo reparen y adviertes al resto', 'Lo esquivas y sigues trabajando como si nada', 'Lo cortas tú mismo con la tijera de podar', 'Lo amarras a una rama para que no moleste'], w: 'Así se corrige el peligro sin que nadie se lesione.' }] }
    ]
  });

  // ======================= 4. COLMENAS Y PICADURAS DE ABEJAS =======================
  const bloom = (x, y, s = 1) => window.CF.framb(x, y, s * 1.1, { flor: true, anim: false });   // frambuesa en flor
  const bloom_si = (x, y, s = 1) => cherry(x, y, s, { fruit: false }) + `<g>${CHP.concat([[-40, -10], [40, 0], [0, -30], [-14, 14]]).map(([dx, dy], i) => `<circle cx="${x + dx * s}" cy="${y - 110 * s + dy * s}" r="${3.4 * s}" fill="${i % 3 ? '#FFFFFF' : '#F8BBD0'}" stroke="#F48FB1" stroke-width=".6"/><circle cx="${x + dx * s}" cy="${y - 110 * s + dy * s}" r="${1 * s}" fill="#FBC02D"/>`).join('')}</g>`;
  const swarm = (x, y, n = 6, r = 18) => Array.from({ length: n }, (_, i) => bee(x + Math.cos(i * 2.4) * r * (.5 + (i % 3) * .25), y + Math.sin(i * 2.4) * r * .6, .9, i % 2 ? 'si_ag_fl' : 'si_ag_fl2')).join('');
  const pickup = (x, y) => `<path d="M${x},${y - 14} v-22 h46 l12,-22 h40 l10,22 h14 v22z" fill="#ECEFF1" stroke="${OL}" stroke-width="1.4"/><path d="M${x + 62},${y - 54} h30 l8,18 h-38z" fill="#90CAF9" stroke="${OL}"/><line x1="${x + 80}" y1="${y - 36}" x2="${x + 80}" y2="${y - 16}" stroke="${OL}"/><circle cx="${x + 26}" cy="${y - 12}" r="12" fill="#263238"/><circle cx="${x + 26}" cy="${y - 12}" r="5" fill="#B0BEC5"/><circle cx="${x + 100}" cy="${y - 12}" r="12" fill="#263238"/><circle cx="${x + 100}" cy="${y - 12}" r="5" fill="#B0BEC5"/>`;
  const sting = (x, y, s = 1) => `<path d="M${x},${y} l${2 * s},${-16 * s}" stroke="#212121" stroke-width="${1.6 * s}"/><ellipse cx="${x + 2.4 * s}" cy="${y - 19 * s}" rx="${3 * s}" ry="${4 * s}" fill="#F9A825" stroke="#5D4037" stroke-width="${.8 * s}"/>`;
  S.si_ag_abe_colmenas = () => svx(ext({ gy: 150 }) + bloom(70, 168, .85) + bloom(250, 168, .85) + hive(120, 188, '#FFF8E1') + hive(170, 188, '#E3F2FD') + hive(220, 188, '#FFF8E1')
    + bee(88, 70, 1.2) + bee(236, 80, 1.2, 'si_ag_fl2') + bee(150, 110, 1.2) + bee(200, 100, 1.2, 'si_ag_fl2') + bee(110, 92, 1.1, 'si_ag_fl2'));
  S.si_ag_abe_distancia = () => svx(ext({ gy: 150, sun: false }) + `<rect x="0" y="150" width="160" height="50" fill="#9CCC65"/>` + hive(112, 186) + `<path d="M112,180 L20,150 L20,196 Z" fill="#FFC107" opacity=".25"/>` + swarm(62, 166, 5, 30) + W(56, 190, { flip: true, face: 'worried', s: .9 })
    + divider() + hive(272, 186) + `<path d="M272,180 L180,150 L180,196 Z" fill="#FFC107" opacity=".25"/>` + bee(222, 168, 1) + bee(200, 176, 1, 'si_ag_fl2') + W(214, 150, { pose: 'walk', s: .68 }) + badge(22, 26, false, 14) + badge(182, 26, true, 14) + lbl(80, 56, 'Entrada', '#E65100') + arrow(100, 62, 118, 176, '#E65100', 2));
  S.si_ag_abe_ropa = () => svx(ext({ gy: 150, sun: false }) + W(80, 186, { shirt: '#263238', pants: '#212121', face: 'worried' }) + swarm(96, 102, 6, 26) + `<rect x="30" y="120" width="16" height="24" rx="4" fill="#CE93D8" stroke="#6A1B9A"/><rect x="34" y="114" width="8" height="7" fill="#6A1B9A"/><path d="M48,118 q8,-4 4,-12 M52,124 q10,-2 8,-10" stroke="#BA68C8" stroke-width="1.6" fill="none"/>`
    + divider() + W(240, 186, { shirt: '#F5F5F0', pants: '#D7CCC8' }) + bee(290, 90, 1) + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_abe_ataque = () => svx(ext({ gy: 150 }) + hive(20, 186) + pickup(190, 188) + rot(8, 120, 186, W(120, 186, { pose: 'stop', face: 'worried' })) + swarm(76, 108, 8, 30) + arrow(150, 194, 198, 194, '#2E7D32', 3) + `<path d="M70,140 h-14 M74,150 h-20 M70,160 h-14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`);
  S.si_ag_abe_aguijon = () => svx(`<rect width="320" height="200" fill="#E8F5E9"/>` + `<rect x="0" y="100" width="158" height="70" rx="30" fill="${SK}" stroke="#C9956B" stroke-width="2"/><circle cx="80" cy="128" r="9" fill="#EF9A9A" opacity=".8"/>` + sting(80, 128, 1.6)
    + `<ellipse cx="74" cy="84" rx="9" ry="14" fill="${SK}" stroke="#C9956B" stroke-width="2" transform="rotate(-25 74 84)"/><ellipse cx="96" cy="84" rx="9" ry="14" fill="${SK}" stroke="#C9956B" stroke-width="2" transform="rotate(25 96 84)"/>` + `<path d="M64,62 l-8,-8 M106,62 l8,-8" stroke="#D7262B" stroke-width="2.5" class="si_ag_bl"/>`
    + divider() + `<rect x="162" y="100" width="158" height="70" rx="30" fill="${SK}" stroke="#C9956B" stroke-width="2"/><circle cx="240" cy="128" r="9" fill="#EF9A9A" opacity=".8"/>` + sting(240, 128, 1.6) + `<g class="si_ag_dr"><rect x="196" y="82" width="48" height="30" rx="4" fill="#1E88E5" stroke="#0D47A1" stroke-width="1.5" transform="rotate(-15 220 97)"/></g>` + arrow(212, 150, 270, 150, '#2E7D32', 3) + lbl(240, 186, 'Raspar', '#2E7D32')
    + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_abe_alergia = () => { const p = W(110, 188, { face: 'worried', pose: 'stand' }); return svx(ext({ gy: 150, sun: false }) + p + `<ellipse cx="114" cy="117" rx="7" ry="5" fill="#E57373" opacity=".7" class="si_ag_pu"/><ellipse cx="105" cy="113" rx="5" ry="4" fill="#E57373" opacity=".55"/>` + [[100, 140], [112, 150], [96, 158], [118, 132]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="2.4" fill="#E53935" opacity=".8"/>`).join('')
      + `<path d="M132,104 q8,4 0,10 M138,100 q12,8 0,18" stroke="#D7262B" stroke-width="2" fill="none" class="si_ag_bl"/>` + phone(236, 60) + lbl(258, 30, 'Emergencia', '#D7262B') + bee(60, 90, 1.1)); };
  S.si_ag_abe_avisa = () => svx(ext({ gy: 150 }) + rowTrees() + W(90, 186, { pose: 'point' }) + W(220, 186, { flip: true, vest: true }) + `<rect x="190" y="124" width="16" height="22" rx="2" fill="#fff" stroke="#795548" stroke-width="1.5"/><line x1="193" y1="130" x2="203" y2="130" stroke="#90A4AE" stroke-width="1.5"/><line x1="193" y1="135" x2="203" y2="135" stroke="#90A4AE" stroke-width="1.5"/>`
    + bubble(30, 30, 'Soy alérgico', 110) + bubble(180, 50, 'Lo anoto', 90));
  S.si_ag_abe_ayuda = () => svx(ext({ gy: 150, sun: false }) + rot(90, 36, 180, W(36, 180, { face: 'worried' })) + W(150, 188, { pose: 'squat', flip: true }) + W(220, 186, { pose: 'stop' }) + `<rect x="231" y="102" width="9" height="15" rx="2" fill="#263238"/>` + phone(262, 80) + lbl(210, 30, 'No lo dejes solo', '#1565C0', 130));

  SI_CONT.temas.push({
    id: 'ag_abejas', sec: 'campo', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Colmenas y picaduras de abejas', thumb: 'si_ag_abe_colmenas', mins: 12,
    learn: [
      { s: 'si_ag_abe_colmenas', t: '¿Por qué hay colmenas en el campo?', x: 'En <b>primavera</b>, durante la floración, se instalan colmenas para que las abejas <b>polinicen</b> las flores de la <b>frambuesa</b>. Sin polinización no hay fruta.<br>Las abejas son necesarias: tu tarea es trabajar cerca de ellas <b>con cuidado</b> para no provocarlas.' },
      { s: 'si_ag_abe_distancia', t: 'No te acerques ni golpees las colmenas', x: '<ul><li>No te pares <b>frente a la entrada</b> de la colmena: es el paso de vuelo de las abejas.</li><li><b>No golpees, muevas ni abras</b> una colmena: eso lo hace solo el apicultor, con su equipo.</li><li>Con vehículos y tractores, no pases rozando las colmenas.</li><li>Si una colmena estorba tu trabajo, <b>avisa a tu jefatura</b>.</li></ul>' },
      { s: 'si_ag_abe_ropa', t: 'Ropa clara y sin perfumes', x: '<ul><li>Usa <b>ropa clara</b>: los colores oscuros irritan más a las abejas.</li><li><b>No uses perfumes</b>, cremas ni desodorantes de olor fuerte: las atraen.</li><li><b>Ropa de manga larga</b>, cerrada.</li><li>Si una abeja se acerca, <b>quédate calmado</b> y aléjate despacio. No la espantes a manotazos.</li></ul>' },
      { s: 'si_ag_abe_ataque', t: 'Si te atacan varias abejas', x: '<ul><li><b>Aléjate rápido</b> de la colmena, en línea recta.</li><li>Cúbrete <b>la cara y la cabeza</b>.</li><li>Busca un <b>vehículo o lugar cerrado</b>.</li><li>No te tires a un canal: las abejas esperan arriba y además te puedes ahogar.</li><li>Avisa a tu jefatura, sobre todo si tienes muchas picaduras.</li></ul>' },
      { s: 'si_ag_abe_aguijon', t: 'Si te pica: saca el aguijón raspando', x: 'La abeja deja el aguijón con su bolsita de veneno.<ul><li>Sácalo <b>raspando</b> con la uña o con una tarjeta.</li><li><b>No lo aprietes</b> con los dedos ni con pinzas: inyectas más veneno.</li><li>Lava la zona y pon <b>frío</b> (hielo envuelto en un paño).</li><li>Avisa a tu jefatura.</li></ul>' },
      { s: 'si_ag_abe_alergia', t: 'Alergia grave: shock anafiláctico', x: 'En algunas personas una picadura provoca una reacción grave en minutos:<ul><li><b>Hinchazón de la cara</b>, labios, lengua o garganta.</li><li><b>Dificultad para respirar</b>, ronquera.</li><li>Ronchas en todo el cuerpo, mareo o desmayo.</li></ul>Es una <b>emergencia</b>: avisa <b>de inmediato</b> a la jefatura y llama a <b>{LAMUT} {TEL}</b>.', k: 'Cara hinchada o dificultad para respirar tras una picadura: avisa de inmediato y llama a {LAMUT} {TEL}.' },
      { s: 'si_ag_abe_avisa', t: 'Si eres alérgico, avísalo', x: 'Si sabes que eres <b>alérgico a las picaduras</b>, díselo a tu <b>jefatura antes de empezar</b>. Así pueden asignarte tareas lejos de las colmenas y actuar rápido si te pican.<br>Si tu médico te recetó un medicamento para la alergia, <b>llévalo siempre contigo</b> y cuéntale a tu jefatura dónde lo tienes.', k: 'Si eres alérgico a las picaduras, avisa a tu jefatura antes de empezar a trabajar.' },
      { s: 'si_ag_abe_ayuda', t: 'Cómo ayudar a un compañero', x: 'Si un compañero tiene síntomas de alergia grave o recibió <b>muchas picaduras</b>:<ul><li>Avisa a la jefatura y llama a <b>{LAMUT} {TEL}</b>.</li><li><b>No lo dejes solo</b> y mantenlo tranquilo, sentado o recostado.</li><li>Si tiene su medicamento recetado, ayúdale a usarlo.</li><li>No le des remedios de otra persona.</li></ul>' }
    ],
    quiz: [
      { s: 'si_ag_abe_colmenas', v: [
        { q: '¿Para qué se instalan colmenas en el campo?', o: ['Para que las abejas polinicen las flores', 'Para producir miel y venderla en temporada', 'Para espantar a otros insectos del campo', 'Para controlar las malezas entre las hileras'], w: 'Sin polinización no hay fruta: por eso se trabaja con cuidado cerca de ellas.' },
        { q: '¿En qué época se instalan colmenas en el campo de frambuesas?', o: ['En primavera, durante la floración', 'En invierno, durante la poda', 'En otoño, después de la cosecha', 'Solo durante la cosecha'], w: 'Las abejas se necesitan cuando el campo está en flor.' },
        { q: 'Las abejas son necesarias en el campo: sin polinización no hay fruta.', vf: true, w: 'Verdadero. Por eso se convive con ellas, trabajando con cuidado.' }] },
      { s: 'si_ag_abe_distancia', v: [
        { q: 'Cerca de una colmena, ¿dónde no debes pararte?', o: ['Frente a la entrada, en el paso de las abejas', 'Detrás de la colmena, a varios metros', 'En otra hilera, lejos de la colmena', 'Dentro de un vehículo cerrado'], w: 'Frente a la entrada pasan todas las abejas y es más fácil que te piquen.' },
        { q: 'Una colmena estorba tu trabajo en la hilera. ¿Qué haces?', o: ['Avisas a tu jefatura: solo el apicultor la mueve', 'La mueves tú, despacio y con mucho cuidado', 'La golpeas suave para que las abejas se vayan', 'La tapas con un saco para trabajar tranquilo'], w: 'Mover o golpear una colmena enfurece a las abejas.' },
        { q: '¿Quién puede abrir o mover una colmena?', o: ['Solo el apicultor, con su equipo', 'Cualquier trabajador con guantes', 'El tractorista, si estorba el paso', 'El que esté más cerca'], w: 'El apicultor tiene el equipo y sabe cómo hacerlo sin provocar un ataque.' }] },
      { s: 'si_ag_abe_ropa', v: [
        { q: '¿Qué ropa conviene usar cuando hay colmenas en el campo?', o: ['Manga larga, de color claro y sin perfumes', 'Ropa oscura, que no se ensucia', 'Ropa con perfume, para tapar el olor a sudor', 'Polera de manga corta, por el calor'], w: 'Los colores oscuros y los olores fuertes atraen e irritan a las abejas.' },
        { q: 'Una abeja vuela cerca de tu cara. ¿Qué haces?', o: ['Te quedas calmado y te alejas despacio', 'La espantas rápido a manotazos', 'Le pegas con el legionario para alejarla', 'Corres gritando hacia la otra hilera'], w: 'Los manotazos la irritan y es más probable que pique.' },
        { q: '¿Por qué no debes usar perfume ni cremas de olor fuerte cerca de las colmenas?', o: ['Porque atraen e irritan a las abejas', 'Porque manchan la ropa de trabajo', 'Porque hacen sudar más con el calor', 'Porque dañan la fruta al cosecharla'], w: 'Los olores fuertes atraen a las abejas hacia ti.' }] },
      { s: 'si_ag_abe_ataque', v: [
        { q: 'Varias abejas te atacan. ¿Qué haces?', o: ['Te alejas rápido, cubriéndote la cara', 'Te quedas quieto hasta que se vayan', 'Te tiras al canal para que no te piquen', 'Las espantas a manotazos y con el legionario'], w: 'Alejarse rápido y protegerse en un lugar cerrado reduce las picaduras.' },
        { q: 'Si varias abejas te persiguen, ¿qué te cubres primero?', o: ['La cara y la cabeza', 'Las manos y los brazos', 'Las piernas y los pies', 'La espalda y la cintura'], w: 'Las picaduras en la cara, la boca y el cuello son las más peligrosas.' },
        { q: 'Te atacan varias abejas cerca de un canal. ¿Qué haces?', o: ['Te alejas rápido hacia un vehículo o lugar cerrado', 'Te tiras al canal hasta que se vayan', 'Te quedas quieto en la orilla del canal', 'Te metes al agua y te tapas la cabeza'], w: 'Las abejas esperan arriba del agua y la corriente te puede arrastrar.' }] },
      { s: 'si_ag_abe_aguijon', v: [
        { q: 'Te picó una abeja y quedó el aguijón. ¿Cómo lo sacas?', o: ['Raspándolo con la uña o una tarjeta', 'Apretándolo fuerte con dos dedos', 'Con pinzas, apretando la bolsita', 'Lo dejas puesto, porque sale solo'], w: 'Raspando no se aprieta la bolsita de veneno.' },
        { q: '¿Por qué no se aprieta el aguijón con los dedos?', o: ['Porque se inyecta más veneno', 'Porque se quiebra la uña', 'Porque el aguijón se vuelve a enterrar más hondo', 'Porque se ensucian los dedos'], w: 'Al apretar, la bolsita del aguijón suelta más veneno.' },
        { q: 'Ya sacaste el aguijón. ¿Qué haces después?', o: ['Lavas, pones frío y avisas a tu jefatura', 'Pones barro encima para calmar el dolor', 'Rascas fuerte la zona para sacar el veneno', 'Sigues trabajando sin decirle a nadie'], w: 'El frío baja la hinchazón; el aviso permite vigilar si aparece una reacción.' }] },
      { s: 'si_ag_abe_alergia', v: [
        { q: '¿Cuál de estos es un síntoma de alergia grave a una picadura?', o: ['Hinchazón de la cara y dificultad para respirar', 'Un punto rojo pequeño justo donde picó', 'Una picazón leve en la zona de la picadura', 'Un poco de dolor que pasa con frío'], w: 'La hinchazón de la cara y la dificultad para respirar son una emergencia.' },
        { q: 'Tras una picadura, un compañero tiene la cara hinchada y le cuesta respirar. ¿Qué haces?', o: ['Avisas de inmediato y llaman a {LAMUT} {TEL}', 'Le das agua y esperas a que se le pase', 'Lo mandas a descansar solo a la sombra', 'Le pones hielo en la cara y sigues trabajando'], w: 'Es un shock anafiláctico: cada minuto cuenta.' },
        { q: 'La dificultad para respirar después de una picadura es una emergencia.', vf: true, w: 'Verdadero. Se avisa de inmediato y se llama a {LAMUT} {TEL}.' }] },
      { s: 'si_ag_abe_avisa', v: [
        { q: 'Eres alérgico a las picaduras de abeja. ¿Qué haces?', o: ['Avisas a tu jefatura antes de empezar', 'No dices nada, para que no te cambien de puesto', 'Solo le cuentas a un compañero de cuadrilla', 'Lo avisas solo en caso de que te piquen'], w: 'Así pueden alejarte de las colmenas y actuar rápido si te pican.' },
        { q: 'Tu médico te recetó un medicamento para la alergia a las picaduras. ¿Qué haces con él?', o: ['Lo llevas siempre contigo', 'Lo dejas en tu casa para no perderlo', 'Lo dejas guardado en el bus del personal', 'Se lo pasas a un compañero para que lo guarde'], w: 'Una reacción grave avanza en minutos: el medicamento debe estar a mano.' },
        { q: '¿Por qué tu jefatura debe saber que eres alérgico a las picaduras?', o: ['Para alejarte de las colmenas y actuar rápido', 'Para darte días libres durante la floración', 'Para que no tengas que usar EPP en el campo', 'Para cambiarte de fundo toda la temporada'], w: 'Conocer tu alergia permite prevenir y responder a tiempo.' }] },
      { s: 'si_ag_abe_ayuda', v: [
        { q: 'A un compañero alérgico le picó una abeja y se siente mal. ¿Qué haces?', o: ['Avisas, llamas a {LAMUT} y no lo dejas solo', 'Lo dejas descansando solo y sigues trabajando', 'Le das algo de comer para que se reponga', 'Lo llevas caminando al bus sin avisar'], w: 'Hay que pedir ayuda de inmediato y acompañarlo.' },
        { q: 'Mientras llega la ayuda, ¿qué haces con un compañero con reacción alérgica?', o: ['Lo acompañas y lo ayudas con su medicamento recetado', 'Le das agua con azúcar y lo haces caminar un rato', 'Lo dejas solo para ir a buscar ayuda lejos', 'Le das un remedio para la alergia que tengas tú'], w: 'Acompañarlo y usar su propio medicamento recetado puede salvarle la vida.' },
        { q: 'Un compañero no alérgico recibió muchas picaduras a la vez. ¿Es una emergencia?', o: ['Sí: avisas y llamas a {LAMUT} {TEL}', 'No, solo es grave en personas alérgicas', 'No, basta con ponerle hielo en las picaduras', 'Solo si lleva más de una hora con dolor'], w: 'Muchas picaduras juntas son peligrosas para cualquier persona.' }] }
    ]
  });

  // ======================= 5. TRASLADO DE PERSONAL Y CAMINOS INTERNOS =======================
  const headH = (cx, cy, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${SK}" stroke="${OL}" stroke-width=".9"/><path d="M${cx - r * 1.1},${cy - r * .2} Q${cx - r * 1.1},${cy - r * 1.5} ${cx},${cy - r * 1.45} Q${cx + r * 1.1},${cy - r * 1.5} ${cx + r * 1.1},${cy - r * .2}Z" fill="#F1E3C2" stroke="${OL}" stroke-width=".8"/>`;
  function bus(x, y, o = {}) {
    const s = o.s || 1; let g = `<rect x="0" y="-88" width="214" height="74" rx="10" fill="#FAFAFA" stroke="${OL}" stroke-width="1.6"/><rect x="2" y="-42" width="210" height="7" fill="#1565C0"/><path d="M200,-84 q12,2 13,20 v20 h-13z" fill="#81D4FA" stroke="${OL}"/>`;
    for (let i = 0; i < 5; i++) { g += `<rect x="${12 + i * 34}" y="-80" width="28" height="28" rx="3" fill="#B3E5FC" stroke="${OL}" stroke-width="1"/>`; if (o.pax !== false) g += headH(26 + i * 34, -62); if (o.belt) g += `<line x1="${20 + i * 34}" y1="-54" x2="${32 + i * 34}" y2="-52" stroke="#E53935" stroke-width="2"/>`; }
    if (o.crowd) for (let i = 0; i < 5; i++) g += headH(18 + i * 34, -64, 5.5);
    g += o.open ? `<rect x="178" y="-80" width="20" height="64" fill="#37474F"/><rect x="198" y="-80" width="5" height="64" fill="#90CAF9" stroke="${OL}"/>` : `<rect x="178" y="-80" width="20" height="64" fill="#90CAF9" stroke="${OL}"/><line x1="188" y1="-80" x2="188" y2="-16" stroke="${OL}"/>`;
    g += `<rect x="206" y="-30" width="8" height="6" rx="2" fill="#FFF59D" stroke="${OL}" stroke-width=".8"/>`;
    [44, 160].forEach(c => { g += `<circle cx="${c}" cy="-14" r="14" fill="#263238"/><circle cx="${c}" cy="-14" r="6" fill="#B0BEC5"/>`; });
    return `<g transform="translate(${x},${y}) scale(${o.flip ? -s : s},${s})">${g}</g>`;
  }
  const seated = (x, y, belt = true) => `<rect x="${x - 18}" y="${y - 50}" width="9" height="52" rx="3" fill="#1565C0" stroke="${OL}"/><rect x="${x - 18}" y="${y - 4}" width="34" height="9" rx="3" fill="#1565C0" stroke="${OL}"/>`
    + `<polyline points="${x - 8},${y - 8} ${x + 14},${y - 8} ${x + 16},${y + 18}" fill="none" stroke="${OL}" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${x - 8},${y - 8} ${x + 14},${y - 8} ${x + 16},${y + 18}" fill="none" stroke="#1F3A6B" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`
    + `<line x1="${x - 8}" y1="${y - 8}" x2="${x - 6}" y2="${y - 36}" stroke="${OL}" stroke-width="15"/><line x1="${x - 8}" y1="${y - 8}" x2="${x - 6}" y2="${y - 36}" stroke="#1F3A6B" stroke-width="12.5"/>`
    + `<polyline points="${x - 4},${y - 32} ${x + 4},${y - 18} ${x + 12},${y - 14}" fill="none" stroke="${OL}" stroke-width="7.5" stroke-linecap="round"/><polyline points="${x - 4},${y - 32} ${x + 4},${y - 18} ${x + 12},${y - 14}" fill="none" stroke="#1F3A6B" stroke-width="5" stroke-linecap="round"/><circle cx="${x + 12}" cy="${y - 14}" r="3.2" fill="#8D6E63" stroke="${OL}"/>`
    + headH(x - 4, y - 48, 8.5) + (belt ? `<path d="M${x - 12},${y - 36} L${x + 2},${y - 10} M${x - 12},${y - 9} H${x + 6}" stroke="#E53935" stroke-width="3" stroke-linecap="round"/>` : '');
  const house = (x, y) => `<rect x="${x}" y="${y - 40}" width="50" height="40" fill="#FFE0B2" stroke="${OL}"/><path d="M${x - 6},${y - 38} L${x + 25},${y - 62} L${x + 56},${y - 38}Z" fill="#C62828" stroke="${OL}"/><rect x="${x + 19}" y="${y - 22}" width="12" height="22" fill="#8D6E63"/><rect x="${x + 5}" y="${y - 32}" width="10" height="10" fill="#B3E5FC" stroke="${OL}" stroke-width=".8"/>`;
  const road = (y1 = 150, y2 = 186) => `<rect x="0" y="${y1}" width="320" height="${y2 - y1}" fill="#D7B98E"/><path d="M0,${y1} H320 M0,${y2} H320" stroke="#BCA07A" stroke-width="2"/>` + [30, 90, 150, 210, 270].map((x, i) => `<ellipse cx="${x}" cy="${y1 + 10 + (i % 2) * 14}" rx="5" ry="1.5" fill="#A1887F"/>`).join('');
  const dust = (x, y) => `<g class="si_ag_mi"><circle cx="${x}" cy="${y}" r="16" fill="#D7CCC8"/><circle cx="${x - 20}" cy="${y - 6}" r="20" fill="#D7CCC8"/><circle cx="${x - 44}" cy="${y - 2}" r="18" fill="#E0D6CF"/></g>`;
  const carro = (x, y, w = 150) => `<rect x="${x}" y="${y - 34}" width="${w}" height="8" fill="#8D6E63" stroke="${OL}"/><line x1="${x + w}" y1="${y - 30}" x2="${x + w + 18}" y2="${y - 28}" stroke="#455A64" stroke-width="4"/><circle cx="${x + w / 2 - 22}" cy="${y - 13}" r="13" fill="#263238"/><circle cx="${x + w / 2 + 6}" cy="${y - 13}" r="13" fill="#263238"/><circle cx="${x + w / 2 - 22}" cy="${y - 13}" r="5" fill="#FBC02D"/><circle cx="${x + w / 2 + 6}" cy="${y - 13}" r="5" fill="#FBC02D"/>`;
  S.si_ag_tra_bus = () => svx(ext({ gy: 150 }) + road(150, 182) + rowTrees(150, .38) + bus(20, 184, { open: true }) + W(276, 184, { pose: 'walk', flip: true, s: .8 }) + lbl(116, 30, 'Vehículo autorizado', '#2E7D32', 140));
  S.si_ag_tra_nunca = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .38) + carro(18, 184, 150) + bin(24, 150, { fruit: '#C62828', s: .9 }) + bin(94, 150, { fruit: '#C62828', s: .9 }) + W(52, 122, { s: .62, face: 'worried' }) + W(116, 122, { s: .62, pose: 'stop', face: 'worried' })
    + tractor(186, 184, { s: .7, driver: true, belt: true }) + badge(296, 30, false, 15) + `<path d="M8,110 h-4 M10,120 h-6" stroke="#fff" stroke-width="2"/>`);
  S.si_ag_tra_cinturon = () => svx(`<rect width="320" height="200" fill="#ECEFF1"/><rect x="0" y="24" width="320" height="52" fill="#B3E5FC"/>${[0, 1, 2, 3].map(i => `<rect x="${i * 80 + 4}" y="24" width="6" height="52" fill="#90A4AE"/>`).join('')}<path d="M0,40 Q80,52 160,36 T320,44" stroke="#81C784" stroke-width="10" fill="none" opacity=".7"/><rect x="0" y="176" width="320" height="24" fill="#78909C"/>` + seated(60, 150) + seated(160, 150) + seated(260, 150) + lbl(160, 18, 'Sentado y con cinturón', '#2E7D32', 160));
  S.si_ag_tra_subir = () => svx(ext({ gy: 150, sun: false }) + road(150, 186) + clipL('si_ag_su') + `<g clip-path="url(#si_ag_suL)">${bus(-90, 184, { s: .9, open: true })}${dust(-10, 160)}${rot(-14, 130, 186, W(130, 186, { pose: 'walk', s: .8, face: 'worried' }))}${arrow(20, 40, 80, 40, '#D7262B', 3)}</g>`
    + divider() + `<g clip-path="url(#si_ag_suR)">${bus(80, 184, { s: .9, open: true })}${W(282, 186, { pose: 'carry', s: .8 })}</g>` + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_tra_camino = () => svx(ext({ gy: 150 }) + road(146, 190) + rowTrees(146, .36) + dust(70, 160) + pickup(80, 186) + `<path d="M208,170 L260,158 L260,182Z" fill="#FFF59D" opacity=".7" class="si_ag_mi"/>`
    + `<rect x="274" y="96" width="4" height="56" fill="#78909C"/><rect x="262" y="76" width="28" height="28" fill="#FFD600" stroke="${OL}" stroke-width="1.5" transform="rotate(45 276 90)"/><path d="M270,98 q0,-12 10,-14 l-3,-3 M280,84 l-3,4" stroke="${OL}" stroke-width="2.5" fill="none"/>` + lbl(150, 26, 'Despacio y con luces', '#1565C0', 150));
  S.si_ag_tra_peaton = () => svx(ext({ gy: 150, sun: false }) + road(150, 184) + rowTrees(150, .36) + tractor(18, 182, { s: .62, driver: true, belt: true }) + [180, 220, 260].map(x => W(x, 194, { pose: 'walk', flip: true, s: .78 })).join('') + arrow(126, 36, 170, 36, '#D7262B', 3) + lbl(230, 30, 'En fila, por la orilla', '#2E7D32', 140));
  S.si_ag_tra_reporta = () => svx(ext({ gy: 150, sun: false }) + road(150, 182) + bus(10, 182, { crowd: true }) + W(256, 186, { pose: 'point', flip: true }) + bubble(196, 22, 'Faltan cinturones', 118));
  S.si_ag_tra_trayecto = () => svx(ext({ gy: 150 }) + house(14, 160) + cherry(286, 170, .5) + cherry(250, 170, .5) + `<path d="M70,176 Q160,150 236,174" stroke="#1565C0" stroke-width="3" stroke-dasharray="7 6" fill="none"/>` + W(150, 184, { pose: 'walk' }) + lbl(160, 30, 'Trayecto directo', '#1565C0'));

  SI_CONT.temas.push({
    id: 'ag_transporte', sec: 'campo', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Traslado de personal y caminos internos', thumb: 'si_ag_tra_bus', mins: 12,
    learn: [
      { s: 'si_ag_tra_bus', t: 'Viaja solo en vehículos autorizados', x: 'Para trasladarte entre sectores del fundo, sube <b>solo a buses o vehículos autorizados</b> para transporte de personal:<ul><li>Con <b>un asiento y cinturón</b> para cada persona.</li><li>Con conductor autorizado y con licencia.</li></ul>Si el vehículo está lleno, espera el siguiente viaje o avisa a tu jefatura.' },
      { s: 'si_ag_tra_nunca', t: 'Nunca en el carro, sobre la carga ni en el tractor', x: 'Está <b>prohibido</b> viajar en el <b>carro, sobre las bandejas o los postes, o en el tractor</b> (guardabarro, enganche o implemento).<br>Son para carga y el tractor tiene <b>un solo asiento</b>. Una frenada, una curva o un hoyo te bota y puedes caer <b>bajo las ruedas</b>.', k: 'Nunca viajes en el carro, sobre la carga ni en el tractor.' },
      { s: 'si_ag_tra_cinturon', t: 'Sentado y con cinturón', x: '<ul><li>Viaja <b>sentado</b> y con el <b>cinturón puesto</b>, aunque el tramo sea corto.</li><li>No viajes de pie ni en el pasillo.</li><li>No saques los brazos ni la cabeza por la ventana.</li><li>Herramientas guardadas: tijeras en su funda.</li><li>No distraigas al conductor.</li></ul>' },
      { s: 'si_ag_tra_subir', t: 'Sube y baja con el vehículo detenido', x: '<ul><li>Espera que el vehículo esté <b>completamente detenido</b> para subir o bajar.</li><li>Nunca saltes de un vehículo en movimiento.</li><li>Baja afirmándote del pasamanos.</li><li>No cruces por delante ni por detrás del bus: espera que se aleje y mira a ambos lados.</li></ul>', k: 'Nunca subas ni bajes de un vehículo en movimiento.' },
      { s: 'si_ag_tra_camino', t: 'Caminos de tierra', x: 'Los caminos internos tienen <b>polvo</b> que tapa la vista, <b>hoyos, ripio y curvas</b>.<br>Si te toca conducir (solo si estás autorizado):<ul><li>Respeta la <b>velocidad máxima que indica el fundo</b>.</li><li>Enciende las luces.</li><li>En el polvo, baja la velocidad y no adelantes.</li></ul>' },
      { s: 'si_ag_tra_peaton', t: 'Si vas caminando por el camino', x: '<ul><li>Camina <b>por la orilla</b>, en fila y <b>de frente a los vehículos</b> que vienen, para verlos.</li><li>Si se acerca un tractor, camión o bus, <b>apártate</b> y espera que pase.</li><li>Con polvo los conductores te ven menos: hazte ver.</li></ul>' },
      { s: 'si_ag_tra_reporta', t: 'Avisa si el transporte no es seguro', x: 'Si el vehículo tiene <b>cinturones malos</b>, va con <b>gente de pie</b> o el conductor maneja de forma imprudente, <b>no subas de pie</b> y <b>avisa a tu jefatura</b>.<br>Avisar no es “acusar”: es evitar un accidente que puede afectar a todos los que viajan.' },
      { s: 'si_ag_tra_trayecto', t: 'Accidente de trayecto', x: 'La <b>Ley 16.744</b> también cubre los accidentes en el <b>trayecto directo</b> entre tu casa y el trabajo, de ida o de vuelta.<br>Si tienes un accidente de trayecto, <b>avisa de inmediato</b> a tu jefatura y atiéndete en <b>{LAMUT}</b>.' }
    ],
    quiz: [
      { s: 'si_ag_tra_bus', v: [
        { q: '¿En qué vehículos puedes trasladarte entre sectores del fundo?', o: ['Solo en buses o vehículos autorizados', 'En cualquier vehículo que vaya para el mismo lado', 'En el carro del tractor, si va despacio', 'En la parte de atrás de una camioneta'], w: 'Solo los vehículos autorizados para personal tienen asientos y cinturones para todos.' },
        { q: '¿Qué debe tener el vehículo que traslada al personal?', o: ['Asiento y cinturón para cada persona', 'Espacio para ir de pie si hay mucha gente', 'Barandas para ir sentado en la orilla', 'Un conductor con experiencia, nada más'], w: 'Cada persona va sentada y con cinturón, con un conductor autorizado.' },
        { q: 'El bus del personal está lleno. ¿Qué haces?', o: ['Esperas el siguiente viaje o avisas', 'Viajas de pie en el pasillo, afirmado', 'Te sientas en las piernas de un compañero', 'Te subes al carro del tractor que va al sector'], w: 'Nadie viaja sin asiento ni cinturón.' }] },
      { s: 'si_ag_tra_nunca', v: [
        { q: 'El carro con bandejas vacías va al mismo sector que tú. ¿Cómo viajas?', o: ['En el bus o vehículo autorizado, nunca en el carro', 'Sentado sobre las bandejas, si el tractor va despacio', 'Dentro del carro, bien afirmado de los bordes', 'Sobre la carga, pero solo por caminos parejos'], w: 'Una frenada o un hoyo te bota y puedes caer bajo las ruedas.' },
        { q: 'Si el tractor va lento, puedes viajar de pie en el enganche o en el guardabarro.', vf: false, w: 'Falso. El tractor tiene un solo asiento y nunca lleva pasajeros.' },
        { q: '¿Por qué está prohibido viajar en el carro o sobre la carga?', o: ['Porque una frenada o un hoyo te puede botar', 'Porque se ensucia y se daña la fruta', 'Porque el traslado se demora mucho más', 'Porque el carro no es cómodo para viajar'], w: 'Son para carga: no tienen asientos ni nada que te sujete.' }] },
      { s: 'si_ag_tra_cinturon', v: [
        { q: 'Al subir al bus del personal, ¿qué haces?', o: ['Te sientas y te pones el cinturón', 'Te quedas de pie cerca de la puerta', 'Te sientas sin cinturón, porque el tramo es corto', 'Te sientas en el pasillo para bajar primero'], w: 'El cinturón se usa siempre, aunque el tramo sea corto.' },
        { q: '¿Cómo llevas la tijera de podar en el bus?', o: ['Guardada en su funda', 'Abierta en la mano', 'Suelta sobre el asiento del lado', 'En el pasillo, en el suelo'], w: 'En una frenada, una herramienta suelta puede cortar a alguien.' },
        { q: 'Durante el viaje, un compañero distrae al conductor con bromas. ¿Qué es lo correcto?', o: ['Pedirle que no distraiga al conductor', 'Unirse a las bromas, porque el viaje es corto', 'Pedirle al conductor que vaya más rápido', 'No decir nada: el conductor sabe manejar'], w: 'Un conductor distraído pone en riesgo a todos los pasajeros.' }] },
      { s: 'si_ag_tra_subir', v: [
        { q: '¿Cuándo subes o bajas del bus?', o: ['Cuando está completamente detenido', 'Cuando va frenando, para ganar tiempo', 'Cuando va lento, saltando con cuidado', 'Cuando el conductor abre la puerta'], w: 'Bajar en movimiento puede hacerte caer bajo las ruedas.' },
        { q: 'Bajaste del bus y debes cruzar el camino. ¿Qué haces?', o: ['Esperas que el bus se aleje y miras a ambos lados', 'Cruzas de inmediato por delante del bus', 'Cruzas corriendo por detrás del bus', 'Cruzas sin mirar, porque es camino interno'], w: 'El bus te tapa la vista de los otros vehículos, y a ti no te ven.' },
        { q: 'El bus va llegando lento al sector. ¿Qué haces?', o: ['Esperas sentado hasta que se detenga', 'Te paras en la puerta para bajar primero', 'Saltas para llegar antes', 'Te sacas el cinturón y caminas hacia la puerta'], w: 'Se espera sentado y con cinturón hasta que el vehículo se detenga.' }] },
      { s: 'si_ag_tra_camino', v: [
        { q: '¿Qué peligros tienen los caminos de tierra del fundo?', o: ['Polvo que tapa la vista, hoyos, ripio y curvas', 'Ninguno, porque por ahí hay poco tránsito', 'Solo el barro que se forma en invierno', 'Solo los animales sueltos que se cruzan'], w: 'El polvo y el ripio hacen que los vehículos frenen peor y vean menos.' },
        { q: 'Vas conduciendo y entras en el polvo de otro vehículo. ¿Qué haces?', o: ['Bajas la velocidad, con luces y sin adelantar', 'Aceleras para salir rápido de la nube de polvo', 'Adelantas para dejar el polvo atrás', 'Sigues igual, porque conoces bien el camino'], w: 'Dentro del polvo no ves lo que viene: más lento y con luces.' },
        { q: '¿A qué velocidad se conduce por los caminos internos?', o: ['A la velocidad que indica el fundo, o menos', 'A la velocidad que permita el vehículo', 'A la misma velocidad que en la carretera', 'Más rápido si no hay nadie en el camino'], w: 'La velocidad del fundo considera el polvo, el ripio, las curvas y las personas.' }] },
      { s: 'si_ag_tra_peaton', v: [
        { q: 'Si caminas por un camino interno, ¿por dónde vas?', o: ['Por la orilla, en fila, de frente a los vehículos', 'Por el centro del camino, en grupo', 'Por la orilla, de espaldas a los vehículos', 'Por donde haya menos polvo, aunque sea el centro'], w: 'De frente ves los vehículos que vienen y puedes apartarte a tiempo.' },
        { q: 'Si un tractor o camión se acerca por el camino, te apartas a la orilla y esperas que pase.', vf: true, w: 'Verdadero. Así no quedas en su camino ni en su punto ciego.' },
        { q: 'Viene un camión levantando polvo por el camino. ¿Qué haces?', o: ['Te apartas a la orilla y esperas que pase', 'Sigues caminando por el centro', 'Le haces señas para que te lleve', 'Cruzas corriendo antes de que llegue'], w: 'Con polvo el conductor te ve menos: apártate y espera.' }] },
      { s: 'si_ag_tra_reporta', v: [
        { q: 'El bus del personal tiene cinturones malos y va gente de pie. ¿Qué haces?', o: ['No subes de pie y avisas a tu jefatura', 'Subes igual, porque el tramo es corto', 'Te afirmas de un asiento y vas de pie', 'No dices nada para no tener problemas'], w: 'Avisar permite corregirlo antes de un accidente.' },
        { q: '¿Qué debes avisar a tu jefatura sobre el transporte?', o: ['Cinturones malos, sobrecupo o conductor imprudente', 'Solo si el bus llega tarde a buscarlos', 'Solo si el bus está sucio por dentro', 'Nada, porque el transporte no es tema tuyo'], w: 'Son condiciones que ponen en riesgo a todos los que viajan.' },
        { q: 'El conductor del bus va muy rápido por el camino de tierra. ¿Qué haces?', o: ['Le pides que baje la velocidad y avisas', 'Te agarras fuerte del asiento y no dices nada', 'Le pides que vaya más rápido para llegar antes', 'Te bajas apenas frene un poco'], w: 'Pedirlo y avisar puede evitar un volcamiento.' }] },
      { s: 'si_ag_tra_trayecto', v: [
        { q: 'Además de los accidentes en el trabajo, ¿qué cubre la Ley 16.744?', o: ['Los del trayecto directo entre casa y trabajo', 'Los de cualquier viaje de vacaciones', 'Solo los que ocurren dentro del fundo', 'Los de actividades personales del fin de semana'], w: 'El trayecto directo, de ida o de vuelta, también está cubierto.' },
        { q: 'Tuviste un accidente en el trayecto directo de tu casa al fundo. ¿Qué haces?', o: ['Avisas de inmediato y te atiendes en {LAMUT}', 'Esperas al otro día para ver si se pasa', 'Vas a cualquier consulta y no avisas', 'Nada, porque no ocurrió dentro del fundo'], w: 'Es un accidente cubierto: se avisa y se atiende en {LAMUT}.' },
        { q: 'El accidente de trayecto cubierto por la ley es el que ocurre:', o: ['En el camino directo entre la casa y el trabajo', 'En cualquier lugar donde andes con ropa de trabajo', 'Solo dentro del bus del fundo', 'En cualquier trámite personal'], w: 'Debe ser en el trayecto directo, de ida o de vuelta.' }] }
    ]
  });

  // ======================= 6. APLICACIÓN DE AGROQUÍMICOS =======================
  const SUIT = '#FDD835';
  function aplic(x, y, o = {}) {
    const s = o.s || 1, fx = o.flip ? -1 : 1, P = POSES[o.pose || 'stand'], X = x + P.head[0] * s * fx, Y = y + P.head[1] * s;
    let g = W(x, y, Object.assign({ shirt: SUIT, pants: SUIT, gloves: '#1E88E5', boots: '#212121', hat: '', glasses: true }, o));
    g += `<path d="M${X + 7 * s * fx},${Y - 8 * s} Q${X + 2 * s * fx},${Y - 15 * s} ${X - 6 * s * fx},${Y - 12 * s} Q${X - 14 * s * fx},${Y - 6 * s} ${X - 11 * s * fx},${Y + 9 * s} L${X - 5 * s * fx},${Y + 11 * s} Q${X - 9 * s * fx},${Y - 2 * s} ${X - 2 * s * fx},${Y - 9 * s} Q${X + 3 * s * fx},${Y - 11 * s} ${X + 7 * s * fx},${Y - 8 * s}Z" fill="${SUIT}" stroke="${OL}" stroke-width="${.9 * s}"/>`;
    if (o.resp !== false) g += `<path d="M${X + 1 * s * fx},${Y + 1 * s} q${7 * s * fx},${-2 * s} ${9.5 * s * fx},${2 * s} q${1 * s * fx},${5 * s} ${-3 * s * fx},${7.5 * s} q${-5 * s * fx},${1 * s} ${-7 * s * fx},${-3 * s}z" fill="#78909C" stroke="${OL}" stroke-width="${.8 * s}"/><circle cx="${X + 5 * s * fx}" cy="${Y + 7.5 * s}" r="${3.6 * s}" fill="#AD1457" stroke="${OL}" stroke-width="${.7 * s}"/><line x1="${X + 1 * s * fx}" y1="${Y + 2 * s}" x2="${X - 8 * s * fx}" y2="${Y}" stroke="#37474F" stroke-width="${1 * s}"/>`;
    return g;
  }
  const jug = (x, y, band = '#D7262B', s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0,0 v-52 q0,-6 6,-6 h20 v-6 h10 v6 h4 q6,0 6,6 v52z" fill="#FAFAFA" stroke="#78909C" stroke-width="1.5"/><path d="M30,-58 q12,0 12,10" fill="none" stroke="#B0BEC5" stroke-width="4"/><rect x="4" y="-44" width="38" height="36" fill="#fff" stroke="#B0BEC5"/><rect x="4" y="-14" width="38" height="8" fill="${band}"/>${diamond(23, -32, 9, 'health')}<rect x="27" y="-68" width="12" height="5" rx="1" fill="#455A64"/></g>`;
  const windsock = (x, y, strong) => `<rect x="${x}" y="${y - 70}" width="3" height="70" fill="#78909C"/><g class="si_ag_sw"><path d="M${x + 3},${y - 70} L${x + 40},${y - (strong ? 66 : 50)} L${x + 40},${y - (strong ? 58 : 44)} L${x + 3},${y - 60}Z" fill="#FF7043" stroke="#BF360C"/><path d="M${x + 15},${y - 69} L${x + 15},${y - 61} M${x + 27},${y - 68} L${x + 27},${y - 59}" stroke="#fff" stroke-width="3"/></g>`;
  const rig = (tx, y, o = {}) => nebu(tx, y, { s: .7, mist: o.mist }) + tractor(tx, y, { s: .7, driver: true, belt: true, shirt: SUIT, resp: true, baliza: true });
  S.si_ag_apl_autor = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .4) + rig(190, 186) + aplic(66, 188, { pose: 'stand' }) + lbl(160, 24, 'Solo personal capacitado y autorizado', '#2E7D32', 230));
  S.si_ag_apl_etiqueta = () => svx(ext({ gy: 150, sun: false }) + `<rect x="150" y="128" width="160" height="10" fill="#8D6E63"/><rect x="160" y="138" width="8" height="50" fill="#6D4C41"/><rect x="292" y="138" width="8" height="50" fill="#6D4C41"/>` + jug(170, 128, '#FBC02D', 1.1) + doc(244, 128, 'HDS') + aplic(80, 188, { pose: 'point', resp: false })
    + lbl(200, 24, 'Lee la etiqueta y la HDS', '#1565C0', 170));
  S.si_ag_apl_banda = () => svx(`<rect width="320" height="200" fill="#F1F8E9"/>` + jug(8, 150, '#D7262B', 1.1) + txt(34, 176, 'Etiqueta', 12, '#263238')
    + [['#D7262B', '#fff', 'Rojo: sumamente o muy peligroso'], ['#FBC02D', '#263238', 'Amarillo: moderadamente peligroso'], ['#1E88E5', '#fff', 'Azul: poco peligroso'], ['#43A047', '#fff', 'Verde: normalmente no ofrece peligro']].map(([c, tc, t], i) => `<rect x="70" y="${44 + i * 38}" width="244" height="28" rx="8" fill="${c}" stroke="${OL}" stroke-width="1"/>` + txt(192, 63 + i * 38, t, 12, tc)).join('')
    + txt(192, 28, 'Banda de color de toxicidad', 13, '#263238'));
  S.si_ag_apl_epp = () => svx(ext({ gy: 172, sun: false }) + rowTrees(172, .4) + aplic(100, 194, { s: 1.35 })
    + [['Respirador con filtro', 34, 112, 86], ['Antiparras', 64, 108, 72], ['Traje impermeable', 96, 98, 130], ['Guantes de nitrilo', 128, 116, 146], ['Botas de goma', 162, 108, 180]].map(([t, ly, px, py]) => lbl(252, ly, t, '#1565C0', 132) + arrow(186, ly - 3, px + 6, py, '#1565C0', 1.8)).join(''));
  const bigHead = (cx, cy, beard) => `<path d="M${cx - 44},${cy + 20} Q${cx - 50},${cy - 52} ${cx},${cy - 50} Q${cx + 46},${cy - 50} ${cx + 44},${cy + 10} L${cx + 40},${cy + 60} L${cx - 40},${cy + 60}Z" fill="${SUIT}" stroke="${OL}" stroke-width="1.6"/><ellipse cx="${cx}" cy="${cy}" rx="32" ry="38" fill="${SK}" stroke="${OL}" stroke-width="1.4"/>`
    + (beard ? `<path d="M${cx - 30},${cy + 4} Q${cx - 28},${cy + 46} ${cx},${cy + 44} Q${cx + 28},${cy + 46} ${cx + 30},${cy + 4} Q${cx + 20},${cy + 30} ${cx},${cy + 28} Q${cx - 20},${cy + 30} ${cx - 30},${cy + 4}Z" fill="#5D4037"/>` : '')
    + `<rect x="${cx - 26}" y="${cy - 18}" width="52" height="18" rx="8" fill="#90CAF9" fill-opacity=".7" stroke="${OL}" stroke-width="1.6"/><path d="M${cx - 18},${cy + 6} Q${cx},${cy - 2} ${cx + 18},${cy + 6} Q${cx + 22},${cy + 30} ${cx},${cy + 34} Q${cx - 22},${cy + 30} ${cx - 18},${cy + 6}Z" fill="#78909C" stroke="${OL}" stroke-width="1.4"/><circle cx="${cx - 22}" cy="${cy + 24}" r="9" fill="#AD1457" stroke="${OL}"/><circle cx="${cx + 22}" cy="${cy + 24}" r="9" fill="#AD1457" stroke="${OL}"/>`;
  S.si_ag_apl_resp = () => svx(`<rect width="320" height="200" fill="#E3F2FD"/>` + bigHead(80, 100, true) + `<g class="si_ag_bl">${arrow(52, 96, 34, 86, '#D7262B', 2.5)}${arrow(108, 96, 126, 86, '#D7262B', 2.5)}${arrow(80, 140, 80, 160, '#D7262B', 2.5)}</g>` + lbl(80, 186, 'Con barba no sella', '#D7262B', 130)
    + divider() + bigHead(240, 100, false) + lbl(240, 186, 'Sella bien', '#2E7D32') + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_apl_prep = () => svx(ext({ gy: 150 }) + rowTrees(150, .38) + nebu(330, 160, { s: .55, spin: false }) + `<rect x="150" y="156" width="110" height="7" fill="#8D6E63" stroke="#5D4037"/><rect x="158" y="163" width="6" height="26" fill="#6D4C41"/><rect x="246" y="163" width="6" height="26" fill="#6D4C41"/>`
    + `<path d="M176,122 h22 v34 h-22z" fill="#E1F5FE" fill-opacity=".8" stroke="#607D8B" stroke-width="1.5"/><rect x="177" y="140" width="20" height="15" fill="#AED581" opacity=".8"/>${[128, 134, 140, 146].map(y => `<line x1="176" y1="${y}" x2="182" y2="${y}" stroke="#607D8B"/>`).join('')}` + jug(220, 156, '#FBC02D', .6)
    + aplic(132, 188, { pose: 'carry' }) + `<g transform="rotate(-62 150 134)">${jug(140, 150, '#FBC02D', .42)}</g><path d="M168,116 q14,0 18,12" stroke="#7CB342" stroke-width="3" fill="none" stroke-dasharray="3 3" class="si_ag_bl"/>`
    + lbl(150, 24, 'Al aire libre y con todo el EPP', '#2E7D32', 210));
  S.si_ag_apl_comer = () => svx(ext({ gy: 150, sun: false }) + aplic(80, 188, { pose: 'carry', resp: false }) + `<rect x="94" y="132" width="14" height="10" rx="3" fill="#FFCC80" stroke="#8D6E63"/><line x1="86" y1="117" x2="98" y2="116" stroke="#fff" stroke-width="2.4"/><circle cx="99" cy="116" r="1.6" fill="#FF5722"/><path d="M100,112 q4,-6 0,-12" stroke="#B0BEC5" stroke-width="1.5" fill="none" class="si_ag_mi"/>`
    + divider() + `<rect x="236" y="110" width="50" height="40" rx="4" fill="#90CAF9" stroke="#1565C0"/><rect x="254" y="150" width="6" height="36" fill="#78909C"/><rect x="246" y="118" width="8" height="10" fill="#1565C0"/>` + `<g class="si_ag_fall">${drop(250, 140, .45)}${drop(256, 150, .45)}</g>` + W(214, 188, { pose: 'carry', hat: 'legion', gloves: SK })
    + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_apl_viento = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .38) + windsock(6, 150, true) + rig(204, 186, { mist: true }) + `<g class="si_ag_dl"><ellipse cx="120" cy="96" rx="36" ry="16" fill="#E3F2FD" opacity=".85"/><ellipse cx="92" cy="122" rx="30" ry="13" fill="#E3F2FD" opacity=".8"/></g>`
    + `<path d="M210,40 h-60 M200,54 h-70 M190,68 h-50" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round" class="si_ag_dl"/>` + house(22, 186) + hive(82, 188) + lbl(230, 22, 'Con viento fuerte, no se aplica', '#D7262B', 170));
  S.si_ag_apl_personas = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .38) + rig(150, 186, { mist: true }) + W(292, 188, { pose: 'stop', face: 'worried' }) + `<ellipse cx="262" cy="118" rx="22" ry="12" fill="#E3F2FD" opacity=".75" class="si_ag_mi"/>` + badge(30, 30, false, 15) + lbl(150, 22, 'Nadie en el sector', '#D7262B'));
  S.si_ag_apl_ducha = () => svx(`<rect width="320" height="200" fill="#ECEFF1"/><rect y="170" width="320" height="30" fill="#B0BEC5"/>` + `<rect x="20" y="30" width="96" height="140" rx="4" fill="#E1F5FE" stroke="#90A4AE" stroke-width="2"/><path d="M68,36 v14 h-14" stroke="#78909C" stroke-width="4" fill="none"/><rect x="40" y="48" width="24" height="7" rx="3" fill="#78909C"/>` + `<g class="si_ag_fall">${[44, 52, 60].map((x, i) => drop(x, 74 + i * 8, .45)).join('')}${[48, 56].map((x, i) => drop(x, 96 + i * 10, .45)).join('')}</g><rect x="84" y="140" width="22" height="12" rx="5" fill="#F8BBD0" stroke="#AD1457"/>`
    + `<path d="M146,170 l8,-36 h44 l8,36z" fill="${SUIT}" stroke="${OL}"/><rect x="152" y="126" width="48" height="10" rx="3" fill="#F9A825" stroke="${OL}"/>` + `<path d="M232,170 l8,-36 h44 l8,36z" fill="#90CAF9" stroke="${OL}"/><rect x="238" y="126" width="48" height="10" rx="3" fill="#64B5F6" stroke="${OL}"/>` + `<line x1="219" y1="110" x2="219" y2="170" stroke="#D7262B" stroke-width="3" stroke-dasharray="6 4"/>`
    + lbl(68, 22, 'Ducha', '#1565C0') + lbl(176, 108, 'Trabajo', '#F57F17') + lbl(262, 108, 'Familia', '#1565C0'));


  // ======================= 7. REINGRESO, BODEGA E INTOXICACIONES =======================
  const apSign = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-3" y="-100" width="6" height="100" fill="#8D6E63"/><rect x="-42" y="-100" width="84" height="58" rx="5" fill="#D7262B" stroke="#7F0000" stroke-width="2"/>${txt(0, -84, 'PELIGRO', 12, '#fff')}${txt(0, -69, 'APLICACIÓN', 11, '#fff')}${txt(0, -54, 'NO ENTRAR', 11, '#fff')}</g>`;
  const bodega = (x, y) => `<rect x="${x}" y="${y - 80}" width="130" height="80" fill="#CFD8DC" stroke="${OL}" stroke-width="1.5"/><path d="M${x - 8},${y - 78} L${x + 65},${y - 104} L${x + 138},${y - 78}Z" fill="#78909C" stroke="${OL}"/><rect x="${x + 44}" y="${y - 56}" width="42" height="56" fill="#90A4AE" stroke="${OL}"/><line x1="${x + 65}" y1="${y - 56}" x2="${x + 65}" y2="${y}" stroke="${OL}"/>`
    + [0, 1].map(i => `<rect x="${x + 10 + i * 92}" y="${y - 70}" width="20" height="14" fill="#ECEFF1" stroke="${OL}"/>${[0, 1, 2].map(k => `<line x1="${x + 10 + i * 92}" y1="${y - 66 + k * 4}" x2="${x + 30 + i * 92}" y2="${y - 66 + k * 4}" stroke="#607D8B"/>`).join('')}`).join('')
    + `<path d="M${x + 61},${y - 32} v-6 a5,5 0 0 1 10,0 v6" stroke="#455A64" stroke-width="2.5" fill="none"/><rect x="${x + 58}" y="${y - 33}" width="16" height="13" rx="2" fill="#FBC02D" stroke="${OL}"/>` + diamond(x + 22, y - 32, 12, 'health') + diamond(x + 108, y - 32, 12, 'flame');
  const symptomsAt = (X, Y) => `<g class="si_ag_sp"><path d="M${X - 26},${Y - 22} a6,6 0 1 1 6,6 a10,10 0 1 1 -10,-10" stroke="#7E57C2" stroke-width="2" fill="none"/></g>` + `<path d="M${X + 14},${Y - 18} l6,-6 M${X + 18},${Y - 10} l8,-2 M${X + 10},${Y - 24} l2,-8" stroke="#D7262B" stroke-width="2.2" stroke-linecap="round" class="si_ag_bl"/>` + `<g class="si_ag_fall">${drop(X - 14, Y + 4, .35, '#4FC3F7')}${drop(X + 12, Y + 8, .35, '#4FC3F7')}</g>`;
  S.si_ag_rei_letrero = () => svx(ext({ gy: 150 }) + rowTrees(150, .45) + apSign(200, 186) + W(110, 188, { pose: 'stop' }) + `<path d="M150,186 H310" stroke="#D7262B" stroke-width="3" stroke-dasharray="8 6"/>`);
  S.si_ag_rei_plazo = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .4) + clipL('si_ag_pz') + `<g clip-path="url(#si_ag_pzL)">${apSign(60, 186, .8)}${W(116, 186, { pose: 'walk', s: .85 })}</g>`
    + divider() + `<g clip-path="url(#si_ag_pzR)">${apSign(270, 186, .8)}${W(206, 186, { s: .85 })}${clock(212, 60, 20)}</g>` + `<g class="si_ag_sp" style="transform-origin:212px 60px"><line x1="212" y1="60" x2="212" y2="46" stroke="#D7262B" stroke-width="2.5" stroke-linecap="round"/></g>` + badge(22, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_rei_bodega = () => svx(ext({ gy: 150 }) + bodega(100, 184) + W(60, 186, { pose: 'point', vest: true }) + `<rect x="250" y="134" width="56" height="50" fill="#FFE0B2" stroke="${OL}"/><path d="M244,136 L278,114 L312,136Z" fill="#8D6E63" stroke="${OL}"/>` + arrow(236, 170, 260, 170, '#2E7D32', 2) + arrow(260, 170, 236, 170, '#2E7D32', 2) + lbl(165, 24, 'Con llave, ventilada y separada', '#1565C0', 200));
  S.si_ag_rei_envases = () => svx(`<rect width="320" height="200" fill="#F1F8E9"/><rect y="176" width="320" height="24" fill="#C5E1A5"/>` + [0, 1, 2].map(i => jug(14 + i * 52, 172, '#FBC02D', .72) + lbl(31 + i * 52, 182, String(i + 1), '#1565C0', 22) + `<rect x="${17 + i * 52}" y="${150}" width="28" height="18" fill="#4FC3F7" opacity=".6"/>`).join('') + arrow(168, 120, 200, 120, '#1565C0', 3) + nebu(320, 176, { s: .6, spin: false })
    + jug(120, 92, '#FBC02D', .55) + `<circle cx="138" cy="70" r="3.4" fill="#263238"/><line x1="146" y1="66" x2="170" y2="52" stroke="#90A4AE" stroke-width="3"/><rect x="168" y="42" width="24" height="9" rx="3" fill="#D7262B" transform="rotate(-30 170 52)"/>` + lbl(76, 22, 'Triple lavado', '#1565C0') + lbl(236, 22, 'Perforar el envase', '#D7262B', 140));
  S.si_ag_rei_sintomas = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .4) + rot(-6, 140, 188, W(140, 188, { face: 'pain' })) + symptomsAt(132, 112) + lbl(270, 40, 'Mareo', '#7E57C2') + lbl(270, 70, 'Náuseas', '#7E57C2') + lbl(270, 100, 'Dolor de cabeza', '#7E57C2', 120) + lbl(270, 130, 'Vista borrosa', '#7E57C2', 110) + lbl(270, 160, 'Sudoración', '#7E57C2'));
  S.si_ag_rei_vias = () => svx(`<rect width="320" height="200" fill="#E8F5E9"/>` + W(110, 196, { s: 1.45, pose: 'stand' }) + [['Ojos', 42, 110, 88], ['Respiración', 82, 120, 92], ['Boca', 122, 113, 98], ['Piel', 162, 120, 146]].map(([t, ly, px, py]) => lbl(256, ly, t, '#D7262B', 110) + arrow(200, ly - 3, px + 6, py, '#D7262B', 1.8)).join(''));
  S.si_ag_rei_actuar = () => svx(ext({ gy: 150 }) + `<path d="M0,40 h40 M0,56 h30" stroke="#fff" stroke-width="3"/>` + W(90, 188, { pose: 'squat', face: 'pain' }) + W(150, 188, { pose: 'carry', flip: true }) + `<path d="M132,138 q-12,-4 -22,8" stroke="#29B6F6" stroke-width="4" fill="none" class="si_ag_mi"/><rect x="128" y="132" width="14" height="10" rx="2" fill="#29B6F6"/>`
    + jug(190, 188, '#FBC02D', .55) + phone(250, 90) + lbl(160, 24, 'Aire fresco, agua y aviso', '#2E7D32', 170));
  S.si_ag_rei_etiqueta = () => svx(ext({ gy: 150 }) + W(90, 188, { pose: 'point' }) + `<rect x="114" y="112" width="30" height="24" fill="#fff" stroke="#B0BEC5"/><rect x="114" y="130" width="30" height="6" fill="#FBC02D"/>` + diamond(129, 121, 6, 'health')
    + W(210, 188, { flip: true, shirt: '#FAFAFA', pants: '#1565C0', hat: '', gloves: '#90CAF9' }) + `<rect x="203" y="122" width="12" height="12" fill="#fff"/><path d="M209,124 v8 M205,128 h8" stroke="#D7262B" stroke-width="2.5"/>` + phone(256, 40) + lbl(120, 24, 'Lleva la etiqueta', '#1565C0', 130));
  S.si_ag_rei_derrame = () => svx(`<rect width="320" height="200" fill="#ECEFF1"/><rect y="150" width="320" height="50" fill="#B0BEC5"/><rect x="230" y="40" width="80" height="110" fill="#90A4AE"/>${[70, 100, 130].map(y => `<rect x="230" y="${y}" width="80" height="4" fill="#546E7A"/>`).join('')}` + jug(244, 66, '#FBC02D', .45) + jug(276, 96, '#1E88E5', .45) + jug(250, 126, '#43A047', .45)
    + `<g transform="rotate(80 170 176)">${jug(150, 176, '#D7262B', .55)}</g><ellipse cx="190" cy="182" rx="40" ry="8" fill="#9CCC65" opacity=".85"/>` + `<path d="M140,190 Q190,170 240,190" stroke="#A1887F" stroke-width="8" fill="none" stroke-linecap="round"/>`
    + aplic(80, 192, { pose: 'squat' }) + `<path d="M8,120 H62 M8,120 V192 M62,120 V192" stroke="#FFC107" stroke-width="3" stroke-dasharray="8 5"/>` + lbl(150, 24, 'Aislar, avisar y contener', '#D7262B', 170));

  SI_CONT.temas.push({
    id: 'ag_reingreso', sec: 'campo', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Periodo de reingreso, bodega de agroquímicos e intoxicaciones', thumb: 'si_ag_rei_letrero', mins: 15,
    learn: [
      { s: 'si_ag_rei_letrero', t: 'Letrero de aplicación', x: 'Cuando se aplica un agroquímico, se pone un <b>letrero en la entrada del sector</b>: avisa que el sector fue aplicado y <b>hasta cuándo no se puede entrar</b>.<br>El letrero lo respetan <b>todas las personas</b>, sin excepción. Si ves uno, no entres y espera instrucciones de tu jefatura.' },
      { s: 'si_ag_rei_plazo', t: 'Periodo de reingreso', x: 'Es el <b>tiempo que debe pasar después de la aplicación</b> antes de que una persona entre al sector. Lo indica la <b>etiqueta</b> del producto.<br><b>Nadie entra antes del plazo</b>, aunque la cosecha esté atrasada, aunque “ya se secó” o no se sienta olor.<br>No lo confundas con el <b>periodo de carencia</b>: los días entre la última aplicación y la cosecha.', k: 'Nadie entra a un sector aplicado antes de que termine el periodo de reingreso.' },
      { s: 'si_ag_rei_bodega', t: 'Bodega de agroquímicos', x: '<ul><li>Con <b>llave</b> y solo para <b>personal autorizado</b>.</li><li><b>Ventilada</b> y señalizada.</li><li><b>Separada</b> de comida, ropa, casas y oficinas.</li><li>Productos en su <b>envase original</b>, con su etiqueta.</li><li>Nunca guardes tu colación, tu ropa ni tu respirador en la bodega.</li></ul>' },
      { s: 'si_ag_rei_envases', t: 'Triple lavado e inutilizar envases', x: 'Un envase vacío todavía tiene producto.<ul><li><b>Triple lavado</b>: se enjuaga 3 veces y el agua va al <b>estanque de la pulverizadora</b>.</li><li>Se <b>perfora</b> para que nadie lo vuelva a usar.</li><li>Se lleva al <b>lugar de acopio</b> indicado.</li><li>Nunca se usa para agua o comida, ni se quema o entierra.</li></ul>' },
      { s: 'si_ag_rei_sintomas', t: 'Síntomas de intoxicación', x: 'Una intoxicación puede dar:<ul><li><b>Mareo</b> y <b>náuseas</b> o vómitos.</li><li><b>Dolor de cabeza</b>.</li><li><b>Vista borrosa</b>.</li><li><b>Sudoración</b> excesiva, salivación, temblores o dificultad para respirar.</li></ul>Pueden aparecer <b>durante la aplicación o horas después</b>. No los confundas con calor o cansancio.' },
      { s: 'si_ag_rei_vias', t: 'Cómo entra el producto al cuerpo', x: 'Un agroquímico entra al cuerpo por:<ul><li>La <b>piel</b>: aunque no duela ni pique, se absorbe.</li><li>La <b>respiración</b>: vapores y la nube de aplicación.</li><li>La <b>boca</b>: manos sucias, comer o fumar.</li><li>Los <b>ojos</b>: salpicaduras.</li></ul>Por eso el EPP cubre todo el cuerpo.' },
      { s: 'si_ag_rei_actuar', t: 'Qué hacer ante una intoxicación', x: '<ul><li><b>Saca a la persona</b> del lugar, al aire fresco (con tu EPP si hay producto).</li><li><b>Sácale la ropa contaminada</b>.</li><li><b>Lava la piel con abundante agua</b>; los ojos, al menos 15 minutos.</li><li><b>Avisa</b> de inmediato a la jefatura y llama a <b>{LAMUT} {TEL}</b>.</li><li>No le des leche ni lo hagas vomitar.</li></ul>', k: 'Ante una intoxicación: aire fresco, sacar ropa, lavar con agua, avisar y llamar a {LAMUT} {TEL}.' },
      { s: 'si_ag_rei_etiqueta', t: 'Lleva la etiqueta', x: 'Lleva la <b>etiqueta o el envase</b> del producto (o anota su nombre) al centro de atención.<br>Así el equipo de salud sabe <b>qué producto</b> causó la intoxicación y cómo tratarla. Cada producto se trata distinto.' },
      { s: 'si_ag_rei_derrame', t: 'Derrames de agroquímicos', x: '<ul><li><b>Aísla</b> el lugar y aleja a las personas.</li><li><b>Avisa</b> a tu jefatura.</li><li>Solo personal capacitado, <b>con EPP</b>, contiene el derrame con el <b>material absorbente</b> del kit de derrames.</li><li>Nunca lo laves con agua hacia canales o desagües: contamina el agua.</li></ul>' }
    ],
    quiz: [
      { s: 'si_ag_rei_letrero', v: [
        { q: 'En la entrada de un sector hay un letrero de aplicación. ¿Qué significa?', o: ['Que se aplicó y no se puede entrar aún', 'Que el sector ya está listo para cosechar', 'Que hay colmenas instaladas en el sector', 'Que el sector tiene el riego funcionando'], w: 'El letrero avisa que el sector fue aplicado y hasta cuándo no se puede entrar.' },
        { q: '¿Quién debe respetar el letrero de aplicación?', o: ['Todas las personas, sin excepción', 'Solo los cosecheros y raleadores', 'Solo quienes trabajan sin EPP', 'Solo los trabajadores nuevos del fundo'], w: 'El producto afecta a cualquier persona que entre.' },
        { q: 'Ves un letrero de aplicación y tu jefatura no está. ¿Qué haces?', o: ['No entras y esperas instrucciones', 'Entras rápido a buscar tus herramientas', 'Entras si no sientes olor', 'Entras por el otro lado del sector'], w: 'Que no haya olor no significa que no haya producto.' }] },
      { s: 'si_ag_rei_plazo', v: [
        { q: '¿Qué es el periodo de reingreso?', o: ['El tiempo de espera para volver a entrar', 'El tiempo que dura la aplicación completa', 'El horario de almuerzo después de aplicar', 'El tiempo para lavar el equipo y el EPP'], w: 'Lo indica la etiqueta del producto y se respeta siempre.' },
        { q: 'La cosecha está atrasada y el plazo de reingreso aún no termina. ¿Qué se hace?', o: ['Nadie entra hasta que termine el plazo', 'Se entra con mascarilla de tela', 'Se entra si el producto ya se secó', 'Se entra solo a cosechar por el borde'], w: 'El apuro no cambia el riesgo: se espera el plazo completo.' },
        { q: 'Si el producto ya se secó sobre las hojas, se puede entrar antes de que termine el periodo de reingreso.', vf: false, w: 'Falso. El producto seco sigue en las hojas y pasa a la piel. Se espera el plazo completo.' }] },
      { s: 'si_ag_rei_bodega', v: [
        { q: '¿Cómo debe ser la bodega de agroquímicos?', o: ['Con llave, ventilada y separada de comida y ropa', 'Abierta, para sacar productos rápido', 'Junto al comedor, para vigilarla mejor', 'Compartida con la bodega de ropa de trabajo'], w: 'Así se evita que alguien no autorizado entre y que se contaminen la comida o la ropa.' },
        { q: '¿Quién puede entrar a la bodega de agroquímicos?', o: ['Solo el personal autorizado', 'Cualquier trabajador del fundo', 'Quien necesite guardar su colación', 'Cualquiera, si la puerta está abierta'], w: 'La bodega tiene llave y solo entra personal autorizado.' },
        { q: '¿Cómo se guardan los agroquímicos en la bodega?', o: ['En su envase original, con su etiqueta', 'En botellas de bebida marcadas', 'En baldes abiertos', 'En cualquier envase limpio, sin etiqueta'], w: 'Un producto sin su envase y etiqueta puede confundirse y causar una intoxicación.' }] },
      { s: 'si_ag_rei_envases', v: [
        { q: '¿Qué se hace con un envase de agroquímico vacío?', o: ['Triple lavado, perforarlo y llevarlo al acopio', 'Lavarlo bien y usarlo para guardar agua', 'Quemarlo en el fundo con otros desechos', 'Botarlo en la basura de la casa'], w: 'Así no queda producto y nadie lo puede volver a usar.' },
        { q: 'En el triple lavado, ¿dónde va el agua del enjuague?', o: ['Al estanque de la pulverizadora', 'Al canal más cercano, que lo diluye', 'Al suelo, lejos de las casas', 'Al desagüe del baño o del lavadero'], w: 'Así el producto se aprovecha en la aplicación y no contamina el agua.' },
        { q: 'Un envase de agroquímico bien lavado se puede usar para guardar agua para beber.', vf: false, w: 'Falso. Nunca se reutiliza: se perfora y se lleva al acopio.' }] },
      { s: 'si_ag_rei_sintomas', v: [
        { q: '¿Cuáles son síntomas de intoxicación por agroquímicos?', o: ['Mareo, náuseas, vista borrosa y sudoración', 'Solo sed y cansancio al final del día', 'Solo una picazón leve en las manos', 'Ninguno: los agroquímicos no dan síntomas'], w: 'Ante estos síntomas se actúa de inmediato.' },
        { q: 'Después de aplicar, un compañero ve borroso y suda mucho. ¿Qué piensas?', o: ['Puede ser una intoxicación: se actúa ya', 'Es solo calor: que tome agua y siga', 'Es el cansancio normal de la jornada', 'Es porque no almorzó bien ese día'], w: 'No confundas una intoxicación con calor o cansancio.' },
        { q: '¿Cuándo pueden aparecer los síntomas de intoxicación?', o: ['Durante la aplicación o horas después', 'Solo en el momento de aplicar', 'Solo al día siguiente de la aplicación', 'Solo si la persona se tragó el producto'], w: 'Pueden aparecer incluso horas después de terminar.' }] },
      { s: 'si_ag_rei_vias', v: [
        { q: '¿Por dónde puede entrar un agroquímico al cuerpo?', o: ['Por la piel, la respiración, la boca y los ojos', 'Solo por la boca, si se traga el producto', 'Solo por la respiración, si hay olor fuerte', 'Solo por una herida abierta en la piel'], w: 'Por eso el EPP cubre todo el cuerpo.' },
        { q: '¿Por qué se usan guantes y traje impermeable al aplicar?', o: ['Porque el producto entra por la piel', 'Solo para no ensuciar la ropa de trabajo', 'Para protegerse del sol durante la aplicación', 'Porque el producto mancha las manos'], w: 'La piel absorbe el producto aunque no duela.' },
        { q: 'Te salpicó producto en el brazo, pero no te duele. ¿Puede dañarte?', o: ['Sí, el producto se absorbe por la piel', 'No, si no duele no hay ningún daño', 'No, solo hace daño si lo tragas', 'Solo si el producto es de banda roja'], w: 'Lava de inmediato con abundante agua y avisa.' }] },
      { s: 'si_ag_rei_actuar', v: [
        { q: 'Un compañero se siente intoxicado en el sector. ¿Qué haces primero?', o: ['Lo sacas del lugar al aire fresco', 'Le das leche para que se le pase', 'Lo haces vomitar para botar el producto', 'Lo dejas descansar en el mismo lugar'], w: 'Primero se le aleja del producto.' },
        { q: 'A un compañero le cayó producto en la ropa y la piel. ¿Qué haces?', o: ['Sacas la ropa contaminada y lavas con agua', 'Le secas la piel con un paño y que siga', 'Le pones crema en la piel para protegerla', 'Esperas a que el producto se seque solo'], w: 'Mientras el producto siga en la piel o la ropa, sigue entrando al cuerpo.' },
        { q: 'Ante una intoxicación con agroquímicos, ¿qué NO debes hacer?', o: ['Darle leche o hacerlo vomitar', 'Avisar a la jefatura y llamar a {LAMUT} {TEL}', 'Lavarle la piel con abundante agua', 'Llevar la etiqueta del producto'], w: 'La leche y el vómito pueden empeorar la intoxicación; lo demás sí se hace.' }] },
      { s: 'si_ag_rei_etiqueta', v: [
        { q: '¿Por qué se lleva la etiqueta o el envase del producto al centro de atención?', o: ['Para saber qué producto fue y cómo tratarlo', 'Para devolver el envase a la empresa', 'Para que no se pierda el producto sobrante', 'No es necesario llevarla al centro de salud'], w: 'Cada producto se trata distinto.' },
        { q: 'Un compañero se intoxicó. Además de avisar y llamar a {LAMUT} {TEL}, ¿qué llevas?', o: ['La etiqueta o el envase del producto', 'Su colación y una botella de agua', 'Sus herramientas de trabajo', 'Nada más, con eso basta'], w: 'La etiqueta dice qué producto es y cómo tratarlo.' },
        { q: 'Ante una intoxicación, ¿a quién avisas?', o: ['A tu jefatura, y se llama a {LAMUT} {TEL}', 'Solo a un compañero de la cuadrilla', 'A nadie, si la persona ya se siente mejor', 'A tu familia al terminar la jornada'], w: 'El aviso inmediato permite que la persona reciba atención a tiempo.' }] },
      { s: 'si_ag_rei_derrame', v: [
        { q: 'Se derramó un agroquímico en la bodega. ¿Qué haces?', o: ['Aíslas, avisas y se contiene con absorbente', 'Lo lavas con agua hacia el desagüe', 'Dejas que se seque solo, con la puerta abierta', 'Lo tapas con una tabla y sigues trabajando'], w: 'Se aísla, se avisa y se contiene con el kit de derrames.' },
        { q: '¿Quién limpia un derrame de agroquímicos?', o: ['Personal capacitado, con EPP y kit de derrames', 'Cualquier trabajador con una escoba y pala', 'El que lo vio primero, aunque no tenga EPP', 'Nadie, porque se seca solo con el tiempo'], w: 'Limpiar sin capacitación ni EPP expone a una intoxicación.' },
        { q: '¿Por qué no se lava un derrame con agua hacia canales o desagües?', o: ['Porque contamina el agua de personas y animales', 'Porque se gasta mucha agua en lavar', 'Porque el piso de la bodega queda resbaloso', 'Porque se pierde el producto derramado'], w: 'El producto se contiene con material absorbente, no con agua.' }] }
    ]
  });

  // ======================= 8. TRACTOR: VUELCO Y OPERACIÓN SEGURA =======================
  const license = (x, y) => `<g class="si_ag_bob"><rect x="${x}" y="${y}" width="84" height="54" rx="6" fill="#fff" stroke="#1565C0" stroke-width="2"/><rect x="${x}" y="${y}" width="84" height="15" rx="6" fill="#1565C0"/>${txt(x + 42, y + 12, 'LICENCIA', 10.5, '#fff')}<circle cx="${x + 18}" cy="${y + 34}" r="9" fill="${SK}" stroke="${OL}"/>${[0, 1, 2].map(i => `<rect x="${x + 34}" y="${y + 24 + i * 8}" width="${40 - i * 8}" height="3" fill="#B0BEC5"/>`).join('')}</g>`;
  const pedals = (cx, cy, joined) => `<circle cx="${cx}" cy="${cy}" r="34" fill="#fff" stroke="#1565C0" stroke-width="3"/><rect x="${cx - 20}" y="${cy - 16}" width="14" height="30" rx="3" fill="#455A64"/><rect x="${cx + 6}" y="${cy - 16}" width="14" height="30" rx="3" fill="#455A64"/>` + (joined ? `<rect x="${cx - 8}" y="${cy - 4}" width="16" height="6" rx="2" fill="#FBC02D" stroke="${OL}"/>` : '');
  const key = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="#F9A825" stroke-width="3.5"/><path d="M${x + 7},${y} h16 v5 M${x + 17},${y} v4" stroke="#F9A825" stroke-width="3.5" fill="none"/>`;
  S.si_ag_trc_autor = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .4) + tractor(150, 186, { s: .85, baliza: true }) + W(90, 188, { pose: 'point' }) + license(14, 40) + lbl(200, 24, 'Capacitado, autorizado y con licencia', '#2E7D32', 230));
  S.si_ag_trc_vuelco = () => svx(ext({ gy: 150, sun: false }) + `<path d="M110,200 L320,80 V200Z" fill="#8BC34A"/><path d="M110,200 L320,80" stroke="#689F38" stroke-width="3"/>` + tractor(172, 165, { s: .78, driver: true, tilt: -48, tiltX: 36 })
    + `<g class="si_ag_bl"><path d="M120,90 l10,8 l-12,4 l14,6" stroke="#D7262B" stroke-width="3" fill="none"/></g>` + `<path d="M170,40 Q110,40 96,84" stroke="#D7262B" stroke-width="3" fill="none"/>` + arrow(98, 78, 95, 90, '#D7262B', 3) + lbl(240, 24, 'Vuelco', '#D7262B'));
  S.si_ag_trc_rops = () => svx(ext({ gy: 150, sun: false }) + clipL('si_ag_ro') + `<g clip-path="url(#si_ag_roL)">${tractor(16, 186, { s: .82, driver: true, rops: false, ropsDown: true })}</g>` + divider()
    + `<g clip-path="url(#si_ag_roR)">${tractor(176, 186, { s: .82, driver: true, belt: true })}</g>` + lbl(222, 52, 'ROPS', '#2E7D32') + lbl(268, 92, 'Cinturón', '#2E7D32') + arrow(254, 98, 220, 116, '#2E7D32', 2) + badge(22, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_trc_pend = () => svx(ext({ gy: 150, sun: false }) + clipL('si_ag_pn') + `<g clip-path="url(#si_ag_pnL)">${canal(110, 170, 150)}<path d="M100,150 l8,6 l-6,6" fill="#6D4C41"/>${tractor(10, 158, { s: .62, driver: true, belt: true, tilt: 10, tiltX: 140 })}</g>`
    + divider() + `<g clip-path="url(#si_ag_pnR)"><path d="M160,200 L320,120 V200Z" fill="#8BC34A"/>${tractor(200, 169, { s: .62, driver: true, belt: true, tilt: -26.6, tiltX: 36 })}</g>` + lbl(76, 52, 'Borde de canal', '#D7262B', 110) + lbl(232, 52, 'En línea recta', '#2E7D32', 110) + badge(22, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_trc_vel = () => svx(ext({ gy: 150 }) + road(150, 190) + tractor(40, 188, { s: .8, driver: true, belt: true, baliza: true }) + `<path d="M20,110 h-16 M24,124 h-20 M20,138 h-14" stroke="#fff" stroke-width="3" stroke-linecap="round" class="si_ag_dr"/>` + pedals(258, 96, true) + lbl(258, 150, 'Frenos unidos', '#1565C0'));
  S.si_ag_trc_pasaj = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .4) + tractor(80, 186, { s: .9, driver: true, belt: true, pass: true }) + badge(296, 30, false, 15) + lbl(150, 24, 'Un solo asiento', '#D7262B'));
  S.si_ag_trc_subir = () => svx(ext({ gy: 150 }) + rowTrees(150, .4) + tractor(60, 186, { s: .9 }) + W(260, 188, { pose: 'point', flip: true }) + key(214, 120) + `<rect x="100" y="104" width="6" height="18" rx="2" fill="#D7262B" transform="rotate(-20 103 113)"/>` + lbl(170, 24, 'Freno, motor apagado y llave fuera', '#2E7D32', 220));
  S.si_ag_trc_revision = () => svx(ext({ gy: 150, sun: false }) + tractor(70, 186, { s: .9, baliza: true }) + W(270, 188, { pose: 'point', flip: true }) + `<rect x="270" y="120" width="16" height="22" rx="2" fill="#fff" stroke="#795548" stroke-width="1.5"/>`
    + lbl(40, 30, 'Luces', '#1565C0') + lbl(110, 30, 'Cinturón', '#1565C0') + lbl(190, 30, 'Niveles', '#1565C0') + lbl(102, 196, 'Neumáticos', '#1565C0') + lbl(228, 196, 'Frenos y fugas', '#1565C0', 110));
  S.si_ag_trc_alrededor = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .4) + `<ellipse cx="60" cy="182" rx="56" ry="14" fill="#D7262B" opacity=".18"/><ellipse cx="260" cy="182" rx="50" ry="14" fill="#D7262B" opacity=".18"/>` + tractor(100, 186, { s: .85, driver: true, belt: true, baliza: true }) + W(46, 188, { s: .85, pose: 'stand', flip: true }) + bubble(110, 18, '¿Hay alguien?', 110));

  SI_CONT.temas.push({
    id: 'ag_tractor', sec: 'tractor', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Tractor: vuelco y operación segura', thumb: 'si_ag_trc_rops', mins: 15,
    learn: [
      { s: 'si_ag_trc_autor', t: 'Solo tractorista autorizado', x: 'El tractor lo opera <b>solo el tractorista capacitado, autorizado por la empresa y con la licencia de conducir que corresponde</b>.<br>Si no estás autorizado, <b>no lo muevas</b>, ni siquiera unos metros, ni en neutro.' },
      { s: 'si_ag_trc_vuelco', t: 'El vuelco: el mayor peligro', x: 'El <b>vuelco</b> es la causa más grave de accidentes con tractor: puede ser de lado o hacia atrás, y aplasta al tractorista.<br>Causas comunes:<ul><li>Pendientes y bordes de canal.</li><li>Curvas a mucha velocidad.</li><li>Hoyos, piedras y troncos.</li><li>Implementos o cargas pesadas enganchados muy altos: el tractor puede volcar hacia atrás.</li></ul>' },
      { s: 'si_ag_trc_rops', t: 'ROPS y cinturón SIEMPRE', x: 'La <b>ROPS</b> es la estructura antivuelco (marco o cabina) del tractor. Protege <b>solo si llevas el cinturón puesto</b>: sin cinturón sales expulsado y el tractor te aplasta.<ul><li>ROPS siempre <b>levantada y trabada</b>. Nunca se saca ni se modifica.</li><li><b>Cinturón siempre</b> con el tractor en movimiento.</li><li>Si el tractor vuelca, no saltes: afírmate del volante.</li></ul>', k: 'Estructura antivuelco ROPS levantada y cinturón puesto, SIEMPRE.' },
      { s: 'si_ag_trc_pend', t: 'Pendientes y bordes de canal', x: '<ul><li>Sube y baja las pendientes <b>en línea recta</b>; no las cruces de costado ni en diagonal.</li><li>Baja con un cambio puesto y despacio, nunca en neutro.</li><li>No gires de golpe en una pendiente.</li><li>Mantén distancia del <b>borde de canales y acequias</b>: el borde puede ceder.</li></ul>' },
      { s: 'si_ag_trc_vel', t: 'Velocidad', x: '<ul><li>Baja la velocidad en <b>curvas</b>, caminos de tierra, entre hileras y con implemento.</li><li>El tractor es alto: una curva rápida lo puede volcar.</li><li>En camino, <b>une los pedales de freno</b> con su traba para frenar parejo.</li><li>Respeta la velocidad que indica el fundo.</li></ul>' },
      { s: 'si_ag_trc_pasaj', t: 'Nunca lleves pasajeros', x: 'El tractor tiene <b>un solo asiento</b>: va <b>solo el tractorista</b>.<br>Nadie viaja en el guardabarro, el enganche, la barra ni el implemento. Con un salto del tractor, el pasajero cae bajo las ruedas o el implemento.', k: 'El tractor lleva solo al tractorista: nunca pasajeros.' },
      { s: 'si_ag_trc_subir', t: 'Sube y baja con el tractor detenido', x: 'Antes de bajarte:<ul><li><b>Freno de mano</b> puesto.</li><li>Implemento <b>abajo</b>, apoyado en el suelo.</li><li><b>Motor apagado</b> y <b>llave fuera</b>.</li></ul>Sube y baja <b>de frente</b>, con tres puntos de apoyo, usando peldaños y pasamanos. Nunca saltes. Nunca hagas partir el tractor desde el suelo: puede avanzar y atropellarte.' },
      { s: 'si_ag_trc_revision', t: 'Revisión diaria', x: 'Antes de empezar, revisa: <b>neumáticos, frenos, luces y baliza, dirección, niveles</b> (aceite, agua, combustible), <b>fugas</b>, protector de la toma de fuerza, <b>cinturón y ROPS</b>.<br>Si encuentras una falla, <b>no lo uses</b> y avisa a tu jefatura.' },
      { s: 'si_ag_trc_alrededor', t: 'Mira alrededor antes de moverte', x: '<ul><li>Antes de partir o retroceder, <b>mira alrededor</b>: que no haya nadie cerca del tractor ni del implemento.</li><li>Si no ves bien detrás, bájate a mirar o pide que alguien te guíe <b>desde un costado, a la vista</b>.</li><li>Si alguien se acerca, <b>detén el tractor</b>.</li></ul>' }
    ],
    quiz: [
      { s: 'si_ag_trc_autor', v: [
        { q: '¿Quién puede operar un tractor en el fundo?', o: ['Solo el tractorista autorizado y con licencia', 'Cualquier trabajador que sepa manejar auto', 'El que tenga más años trabajando en el campo', 'Cualquiera, si es solo por un tramo corto'], w: 'Operar un tractor requiere capacitación, autorización y licencia.' },
        { q: 'El tractorista no ha llegado y hay que mover el tractor unos metros. No estás autorizado. ¿Qué haces?', o: ['No lo mueves y avisas a tu jefatura', 'Lo mueves despacio, son pocos metros', 'Lo mueves si un compañero te guía', 'Lo empujas en neutro sin encenderlo'], w: 'Sin autorización no se mueve, ni siquiera unos metros.' },
        { q: '¿Qué necesita una persona para operar un tractor?', o: ['Capacitación, autorización y licencia', 'Saber encenderlo y conocer los cambios', 'El permiso verbal de un compañero', 'Haber visto trabajar a otro tractorista'], w: 'Las tres cosas son obligatorias.' }] },
      { s: 'si_ag_trc_vuelco', v: [
        { q: '¿Cuál es el mayor peligro al operar un tractor?', o: ['El vuelco', 'El ruido del motor', 'El polvo del camino', 'El calor del asiento'], w: 'El vuelco es la causa más grave de accidentes con tractor.' },
        { q: '¿Qué puede hacer volcar un tractor?', o: ['Pendientes, bordes de canal y curvas rápidas', 'Solo una falla en los frenos del tractor', 'Solo el viento fuerte en terreno abierto', 'Solo llevar el estanque lleno de combustible'], w: 'Son las causas más comunes de vuelco.' },
        { q: 'Un implemento pesado enganchado muy alto en el tractor puede:', o: ['Hacer que el tractor vuelque hacia atrás', 'Hacer que el tractor gaste menos combustible', 'Mejorar la tracción en pendiente', 'No afecta en nada'], w: 'Enganchar alto levanta la parte delantera y el tractor puede volcar hacia atrás.' }] },
      { s: 'si_ag_trc_rops', v: [
        { q: '¿Cuándo usas el cinturón de seguridad en un tractor con ROPS?', o: ['Siempre que el tractor esté en movimiento', 'Solo cuando sales a la carretera', 'Solo en las pendientes más fuertes', 'Nunca, porque no deja saltar si vuelca'], w: 'La ROPS solo protege con el cinturón puesto.' },
        { q: '¿Por qué la ROPS protege solo si llevas el cinturón puesto?', o: ['Porque sin cinturón sales expulsado', 'Porque el cinturón hace más firme la estructura', 'Porque así lo exige la licencia de conducir', 'Porque el cinturón evita que el tractor vuelque'], w: 'El cinturón te mantiene dentro de la zona que protege la ROPS.' },
        { q: 'Si el tractor se vuelca, lo mejor es saltar del tractor.', vf: false, w: 'Falso. Con ROPS y cinturón, quédate en el asiento y afírmate del volante; al saltar, el tractor te puede aplastar.' }] },
      { s: 'si_ag_trc_pend', v: [
        { q: '¿Cómo se suben y bajan las pendientes con el tractor?', o: ['En línea recta, nunca de costado', 'En diagonal, para que al motor le cueste menos', 'De costado, para ver mejor el borde', 'En neutro, para bajar más suave'], w: 'De costado o en diagonal el tractor puede volcar de lado.' },
        { q: 'Debes pasar junto a un canal con el tractor. ¿Qué haces?', o: ['Mantienes distancia del borde, que puede ceder', 'Pasas pegado al borde para no salirte del camino', 'Aceleras para pasar rápido junto al canal', 'Pasas con una rueda sobre el borde, despacio'], w: 'El borde de un canal puede ceder con el peso del tractor.' },
        { q: 'Vas bajando una pendiente con el tractor. ¿Qué es lo correcto?', o: ['Bajar despacio, con un cambio puesto', 'Bajar en neutro, para ahorrar combustible', 'Bajar acelerando para no quedarte a medio camino', 'Girar de golpe a mitad de la pendiente'], w: 'En neutro el tractor se embala y pierdes el control.' }] },
      { s: 'si_ag_trc_vel', v: [
        { q: '¿Cuándo debes bajar la velocidad del tractor?', o: ['En curvas, entre hileras y con implemento', 'Solo cuando llueve y el camino tiene barro', 'Solo cuando hay una inspección en el fundo', 'Nunca, porque el tractor ya es lento'], w: 'El tractor es alto y vuelca con facilidad a velocidad.' },
        { q: 'Antes de salir al camino con el tractor, ¿qué haces con los pedales de freno?', o: ['Los unes con su traba, para frenar parejo', 'Los dejas separados para girar mejor', 'Sacas la traba para frenar más fuerte', 'Nada, en el camino no importa'], w: 'Con los pedales separados, una frenada fuerte frena una sola rueda y el tractor gira o vuelca.' },
        { q: '¿Por qué no se toma una curva rápido con el tractor?', o: ['Porque el tractor es alto y puede volcar', 'Porque se gastan los neumáticos', 'Porque se ensucia el implemento', 'Porque el motor se calienta'], w: 'Una curva rápida es una causa común de vuelco.' }] },
      { s: 'si_ag_trc_pasaj', v: [
        { q: '¿Quiénes pueden ir en el tractor?', o: ['Solo el tractorista', 'El tractorista y uno en el guardabarro', 'Dos personas, si van sentadas', 'Las que quepan, si va despacio'], w: 'El tractor tiene un solo asiento.' },
        { q: 'Un compañero puede ir en el guardabarro del tractor si se afirma bien.', vf: false, w: 'Falso. Un salto del tractor lo bota bajo las ruedas o el implemento.' },
        { q: 'Un compañero te pide que lo lleves en el tractor hasta el otro sector. ¿Qué haces?', o: ['Le dices que no: el tractor no lleva pasajeros', 'Lo llevas parado en el enganche, despacio', 'Lo llevas sentado en el guardabarro, despacio', 'Lo llevas sobre el implemento, bien afirmado'], w: 'El personal se traslada solo en vehículos autorizados.' }] },
      { s: 'si_ag_trc_subir', v: [
        { q: 'Antes de bajarte del tractor, ¿qué haces?', o: ['Freno de mano, implemento abajo, motor apagado y llave fuera', 'Lo dejas en marcha y con el implemento arriba para no perder tiempo', 'Pones neutro, dejas el motor encendido y te bajas de un salto', 'Pones solo el freno de mano y dejas la llave puesta'], w: 'Así el tractor no se mueve ni lo puede encender otra persona.' },
        { q: '¿Cómo te subes y te bajas del tractor?', o: ['De frente, con tres puntos de apoyo', 'De espaldas, saltando desde el asiento', 'Por encima de la rueda trasera', 'Por el enganche de atrás del tractor'], w: 'Saltar o subir por la rueda causa caídas y torceduras.' },
        { q: '¿Por qué nunca se hace partir el tractor desde el suelo?', o: ['Porque puede avanzar y atropellarte', 'Porque se descarga la batería del tractor', 'Porque se gasta el motor de partida', 'Porque es más lento que desde el asiento'], w: 'Si el tractor tiene un cambio puesto, avanza sobre quien está al lado.' }] },
      { s: 'si_ag_trc_revision', v: [
        { q: '¿Qué revisas en el tractor antes de empezar la jornada?', o: ['Neumáticos, frenos, luces, niveles, cinturón y ROPS', 'Solo el combustible, porque lo demás se revisa en el taller', 'Solo que encienda y que avance sin ruidos raros', 'Solo la limpieza del asiento y de los vidrios'], w: 'La revisión diaria detecta fallas antes de un accidente.' },
        { q: 'En la revisión diaria notas que los frenos fallan. ¿Qué haces?', o: ['No lo usas y avisas a tu jefatura', 'Lo usas con cuidado', 'Lo usas solo en terreno plano', 'Lo usas y avisas al final del día'], w: 'Un tractor con fallas no se usa hasta que se repare.' },
        { q: '¿Para qué sirve la revisión diaria del tractor?', o: ['Para detectar fallas antes de un accidente', 'Solo para llenar un papel para la oficina', 'Para terminar antes la jornada de trabajo', 'Solo para cuidar la pintura del tractor'], w: 'Detectar a tiempo una falla evita un accidente.' }] },
      { s: 'si_ag_trc_alrededor', v: [
        { q: 'Antes de mover el tractor, ¿qué haces?', o: ['Miras alrededor para verificar que no haya nadie cerca', 'Aceleras para avisar que vas a partir', 'Partes de inmediato: los demás deben apartarse', 'Retrocedes sin mirar, porque tienes espejos'], w: 'Cerca del tractor y del implemento hay puntos que no ves desde el asiento.' },
        { q: 'Vas a retroceder y no ves bien detrás del implemento. ¿Qué haces?', o: ['Te bajas a mirar o pides que te guíen a la vista', 'Retrocedes lento, aunque no veas', 'Tocas la bocina y retrocedes rápido', 'Pides que alguien se ponga detrás del implemento'], w: 'Quien guía se ubica a un costado, donde lo veas, nunca detrás.' },
        { q: 'Un trabajador se acerca caminando al tractor en marcha. ¿Qué haces?', o: ['Detienes el tractor y esperas', 'Sigues avanzando: él debe cuidarse', 'Aceleras para pasar antes que él', 'Le haces señas sin detener el tractor'], w: 'Con el tractor detenido nadie corre peligro.' }] }
    ]
  });

  // ======================= 9. TOMA DE FUERZA, ENGANCHE E IMPLEMENTOS =======================
  const closeTDF = (guard, o = {}) => { let g = ext({ gy: 162, sun: false });
    g += `<circle cx="318" cy="112" r="64" fill="#263238"/><circle cx="318" cy="112" r="56" fill="none" stroke="#37474F" stroke-width="6" stroke-dasharray="8 6"/><circle cx="318" cy="112" r="32" fill="#FBC02D" stroke="#F57F17" stroke-width="2"/><path d="M240,60 A80,80 0 0 1 320,30 V48 A62,62 0 0 0 256,70Z" fill="#2E7D32" stroke="${OL}"/>`;
    g += `<rect x="232" y="118" width="22" height="28" rx="3" fill="#455A64"/><rect x="226" y="124" width="12" height="16" fill="#90A4AE" stroke="${OL}"/>` + (o.shield !== false ? `<path d="M222,112 h30 v8 h-30z" fill="#FFB300" stroke="#E65100"/>` : '');
    g += `<rect x="4" y="96" width="76" height="66" rx="8" fill="#F57C00" stroke="${OL}" stroke-width="1.5"/><rect x="80" y="124" width="12" height="16" fill="#90A4AE" stroke="${OL}"/><circle cx="40" cy="166" r="14" fill="#263238"/>`;
    g += cardan(98, 220, 132, guard);
    if (o.rot !== false) g += `<path d="M150,${guard ? 104 : 112} a14,8 0 1 1 20,0" stroke="#D7262B" stroke-width="2.5" fill="none" class="si_ag_bl"/>` + arrow(168, guard ? 106 : 114, 172, guard ? 112 : 120, '#D7262B', 2.5);
    return g; };
  const picadora = (x, y) => `<rect x="${x}" y="${y - 34}" width="76" height="30" rx="4" fill="#C62828" stroke="${OL}" stroke-width="1.4"/><rect x="${x}" y="${y - 8}" width="76" height="8" fill="#455A64"/><line x1="${x + 76}" y1="${y - 24}" x2="${x + 96}" y2="${y - 26}" stroke="#455A64" stroke-width="4"/><circle cx="${x + 10}" cy="${y - 4}" r="6" fill="#263238"/>`;
  const chips = (x, y) => `<g class="si_ag_dl">${[[-10, -6], [-24, -14], [-36, -4], [-18, 2], [-44, -18]].map(([a, b], i) => i % 2 ? `<rect x="${x + a}" y="${y + b}" width="6" height="3" fill="#8D6E63" transform="rotate(${i * 25} ${x + a} ${y + b})"/>` : `<circle cx="${x + a}" cy="${y + b}" r="2.6" fill="#9E9E9E"/>`).join('')}</g>`;
  S.si_ag_tdf_que = () => svx(closeTDF(true) + lbl(240, 186, 'Toma de fuerza (TDF)', '#1565C0', 150) + arrow(238, 176, 234, 146, '#1565C0', 2) + lbl(158, 76, 'Cardán con protector', '#1565C0', 150) + arrow(158, 82, 158, 118, '#1565C0', 2) + lbl(44, 84, 'Implemento', '#F57C00'));
  S.si_ag_tdf_prot = () => svx(`<rect width="320" height="200" fill="#E8F5E9"/>` + cardan(20, 140, 100, false) + `<path d="M70,74 a14,8 0 1 1 20,0" stroke="#D7262B" stroke-width="2.5" fill="none" class="si_ag_bl"/>` + lbl(80, 150, 'Sin protector', '#D7262B')
    + divider() + cardan(180, 300, 100, true) + `<path d="M240,106 q4,14 -6,30" stroke="#9E9E9E" stroke-width="1.6" fill="none"/>` + lbl(240, 150, 'Protector y cadena', '#2E7D32', 130) + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_tdf_nunca = () => svx(closeTDF(true, { rot: true }) + rot(-8, 158, 170, W(158, 170, { pose: 'walk', face: 'worried' })) + `<path d="M40,190 Q160,214 286,186" stroke="#2E7D32" stroke-width="3" stroke-dasharray="6 5" fill="none"/>` + badge(30, 30, false, 15));
  S.si_ag_tdf_ropa = () => svx(`<rect width="320" height="200" fill="#E8F5E9"/><rect y="170" width="320" height="30" fill="#9CCC65"/>` + cardan(0, 150, 150, false) + W(70, 178, { loose: true, face: 'worried', s: .9, pose: 'bend' }) + `<path d="M94,138 q10,8 6,12" stroke="#8E24AA" stroke-width="5" fill="none" class="si_ag_sw"/>`
    + divider() + cardan(162, 320, 150, false) + W(250, 178, { s: .9, pose: 'stand' }) + badge(140, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_tdf_enganche = () => svx(ext({ gy: 150, sun: false }) + rastra(90, 186, 1) + tractor(118, 186, { s: .8, driver: true, belt: true }) + `<rect x="88" y="120" width="34" height="66" fill="#D7262B" opacity=".2"/>` + arrow(210, 30, 160, 30, '#D7262B', 3) + lbl(106, 102, 'Nadie aquí', '#D7262B', 80)
    + W(36, 150, { pose: 'stop', vest: true, s: .6 }));
  S.si_ag_tdf_nebu = () => svx(ext({ gy: 150, sun: false }) + rowTrees(150, .38) + `<ellipse cx="140" cy="182" rx="130" ry="16" fill="#D7262B" opacity=".14" stroke="#D7262B" stroke-width="2" stroke-dasharray="7 5"/>` + rig(150, 186, { mist: true }) + W(298, 192, { s: .72, pose: 'stop', flip: true }) + lbl(140, 24, 'Zona de exclusión', '#D7262B'));
  S.si_ag_tdf_rastra = () => svx(ext({ gy: 150, sun: false }) + clipL('si_ag_ra') + `<g clip-path="url(#si_ag_raL)">${rastra(80, 186, 1)}${W(46, 158, { s: .7, face: 'worried' })}${tractor(80, 186, { s: .55, driver: true, belt: true })}</g>`
    + divider() + `<g clip-path="url(#si_ag_raR)"><ellipse cx="262" cy="184" rx="56" ry="12" fill="#D7262B" opacity=".14" stroke="#D7262B" stroke-width="2" stroke-dasharray="6 4"/>${picadora(226, 186)}${chips(224, 172)}${tractor(322, 186, { s: .5, driver: true, belt: true })}${W(180, 150, { s: .55, pose: 'stop' })}</g>` + badge(22, 26, false, 14) + badge(300, 26, true, 14));
  S.si_ag_tdf_mant = () => svx(ext({ gy: 150, sun: false }) + rastra(110, 186, 1.1) + tractor(110, 186, { s: .8 }) + W(40, 188, { pose: 'squat' }) + key(40, 70) + `<line x1="34" y1="62" x2="60" y2="84" stroke="#D7262B" stroke-width="3"/>` + lbl(196, 24, 'TDF desconectada y motor apagado', '#2E7D32', 220));

  SI_CONT.temas.push({
    id: 'ag_tdf', sec: 'tractor', emp: ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'], title: 'Toma de fuerza, enganche e implementos', thumb: 'si_ag_tdf_que', mins: 15,
    learn: [
      { s: 'si_ag_tdf_que', t: 'La toma de fuerza (TDF) y el cardán', x: 'La <b>toma de fuerza</b> es el eje en la parte de atrás del tractor que transmite el giro del motor al implemento a través del <b>cardán</b> (nebulizadora, picadora, rastra rotativa).<br>Gira <b>tan rápido</b> que, si atrapa tu ropa, te enrolla en <b>menos de un segundo</b>: no alcanzas a soltarte.' },
      { s: 'si_ag_tdf_prot', t: 'El cardán siempre con su protector', x: '<ul><li>El cardán debe tener su <b>protector completo</b>, sin trizaduras, con su <b>cadena sujeta</b> para que no gire.</li><li>El protector de la toma de fuerza del tractor también va en su lugar.</li><li>Si falta o está roto, <b>no se usa</b> el implemento y se avisa a la jefatura.</li></ul>', k: 'Nunca uses un implemento con el cardán sin su protector.' },
      { s: 'si_ag_tdf_nunca', t: 'Nunca pases sobre ni junto a un cardán girando', x: '<ul><li><b>Nunca pases por encima</b>, por debajo ni junto a un cardán que gira, aunque tenga protector.</li><li>Para pasar al otro lado, <b>da la vuelta</b> por fuera del implemento.</li><li>Para acercarte: TDF desconectada, <b>motor apagado, llave fuera</b> y espera que todo se detenga.</li></ul>', k: 'Nunca pases sobre ni junto a un cardán girando: da la vuelta por fuera.' },
      { s: 'si_ag_tdf_ropa', t: 'Ropa ajustada', x: 'Cerca de la toma de fuerza y del cardán, <b>nada suelto</b>:<ul><li>Ropa <b>ajustada</b>, sin bufandas ni chaquetas abiertas.</li><li>Cordones de polerones y zapatos guardados.</li><li><b>Pelo largo amarrado</b> y dentro del legionario.</li></ul>Un cordón atrapado basta para enrollar a una persona.' },
      { s: 'si_ag_tdf_enganche', t: 'Enganchar implementos', x: '<ul><li>Mientras el tractor retrocede, <b>nadie entre el tractor y el implemento</b>.</li><li>Quien ayuda se ubica <b>a un costado</b>, a la vista del tractorista.</li><li>Se acerca a poner el pasador <b>solo con el tractor detenido y frenado</b>.</li><li>Pasadores y seguros siempre puestos.</li></ul>' },
      { s: 'si_ag_tdf_nebu', t: 'Nebulizadora y pulverizadora', x: '<ul><li>El <b>ventilador</b> de la nebulizadora debe tener su rejilla de protección.</li><li>Mientras funciona, <b>nadie se acerca</b>: respeta la zona de exclusión.</li><li>Para revisar una boquilla o una fuga: detén la bomba, la TDF y el motor.</li><li>Nunca destapes una boquilla con la boca.</li></ul>' },
      { s: 'si_ag_tdf_rastra', t: 'Rastra y picadora: zona de exclusión', x: '<ul><li>La <b>picadora</b> de ramas lanza piedras y astillas a distancia: nadie dentro de su zona de exclusión.</li><li>Los discos de la <b>rastra</b> cortan como cuchillos.</li><li><b>Nunca te subas</b> a la rastra ni a otro implemento para darle peso o para viajar.</li></ul>' },
      { s: 'si_ag_tdf_mant', t: 'Destrabar, limpiar o ajustar', x: 'Antes de destrabar, limpiar o ajustar un implemento:<ul><li><b>TDF desconectada</b>.</li><li><b>Motor apagado y llave fuera</b>, con el tractor detenido y bloqueado con su bloqueo propio.</li><li>Implemento <b>bajado al suelo</b> o calzado firme: nunca te pongas debajo de uno levantado.</li><li>Espera que todo deje de girar.</li></ul>' }
    ],
    quiz: [
      { s: 'si_ag_tdf_que', v: [
        { q: '¿Qué hace la toma de fuerza (TDF) del tractor?', o: ['Hace girar el implemento a través del cardán', 'Frena el tractor en las pendientes fuertes', 'Enciende las luces y la baliza del tractor', 'Levanta y baja la estructura antivuelco'], w: 'La TDF hace funcionar implementos como la nebulizadora o la picadora.' },
        { q: '¿Por qué es tan peligroso un cardán girando?', o: ['Porque enrolla la ropa en menos de un segundo', 'Porque calienta mucho el implemento', 'Porque hace mucho ruido al girar', 'Porque gasta mucho combustible del tractor'], w: 'No alcanzas a reaccionar si te atrapa.' },
        { q: 'Si un cardán atrapa tu ropa, ¿alcanzas a soltarte?', o: ['No, te enrolla en menos de un segundo', 'Sí, si tiras fuerte hacia atrás', 'Sí, porque gira lento', 'Sí, si el tractor va en primera'], w: 'Por eso nadie se acerca a un cardán girando.' }] },
      { s: 'si_ag_tdf_prot', v: [
        { q: '¿Cómo debe estar el cardán para usarlo?', o: ['Con su protector completo y su cadena sujeta', 'Sin protector, para ver bien si gira parejo', 'Con el protector roto amarrado con alambre', 'Con protector solo en uno de sus extremos'], w: 'El protector completo evita que la ropa toque el eje que gira.' },
        { q: 'El protector del cardán está roto. ¿Qué haces?', o: ['No usas el implemento y avisas', 'Lo usas igual, pero con más cuidado', 'Lo cubres con un saco amarrado', 'Lo usas solo un rato, hasta terminar'], w: 'Sin protector completo, el implemento no se usa.' },
        { q: 'El cardán se puede usar sin protector si nadie se acerca.', vf: false, w: 'Falso. Siempre con su protector completo y su cadena sujeta.' }] },
      { s: 'si_ag_tdf_nunca', v: [
        { q: 'Necesitas pasar al otro lado del implemento y el cardán está girando. ¿Qué haces?', o: ['Das la vuelta por fuera del implemento', 'Pasas por encima del cardán', 'Pasas agachado por debajo del cardán', 'Pasas rápido junto al cardán'], w: 'Nunca se pasa sobre, bajo ni junto a un cardán que gira.' },
        { q: 'Para acercarte al cardán, ¿qué debe pasar antes?', o: ['TDF desconectada, motor apagado y llave fuera', 'Que el tractorista baje la velocidad', 'Que el tractorista te haga una seña', 'Que te pongas guantes de trabajo'], w: 'Solo con todo detenido no hay riesgo de atrapamiento.' },
        { q: 'Aunque el cardán tenga protector, nunca se pasa por encima de él mientras gira.', vf: true, w: 'Verdadero. Un tropiezo o un protector dañado basta para quedar atrapado.' }] },
      { s: 'si_ag_tdf_ropa', v: [
        { q: '¿Qué ropa usas cerca de una toma de fuerza o un cardán?', o: ['Ropa ajustada y el pelo largo amarrado', 'Ropa suelta, para moverte más cómodo', 'Bufanda y chaqueta abierta, si hace frío', 'Cualquier ropa, si el cardán tiene protector'], w: 'Lo suelto es lo que el cardán atrapa primero.' },
        { q: '¿Qué puede ser atrapado por un cardán girando?', o: ['Cordones, ropa suelta, bufandas y pelo largo', 'Solo las manos, si se acercan mucho', 'Solo las herramientas que caen encima', 'Nada, si usas guantes y casco'], w: 'Cualquier cosa suelta puede enrollarse en el eje.' },
        { q: 'Tu polerón tiene cordones colgando y vas a trabajar cerca del cardán. ¿Qué haces?', o: ['Sacas o guardas los cordones antes', 'Te acercas igual, pero con cuidado', 'Los dejas colgando hacia la espalda', 'Te pones guantes y te acercas'], w: 'Un cordón atrapado basta para enrollar a una persona.' }] },
      { s: 'si_ag_tdf_enganche', v: [
        { q: 'Mientras el tractor retrocede para enganchar un implemento, ¿dónde se ubica el ayudante?', o: ['A un costado, a la vista del tractorista', 'Entre el tractor y el implemento, para guiar', 'Detrás del implemento, empujándolo', 'Parado sobre el enganche del tractor'], w: 'Entre el tractor y el implemento puedes quedar aplastado.' },
        { q: '¿Cuándo se acerca el ayudante a poner el pasador del enganche?', o: ['Con el tractor detenido y frenado', 'Mientras el tractor retrocede despacio', 'Mientras el tractor avanza para alinear', 'Cuando el tractorista toca la bocina'], w: 'Con el tractor en movimiento, el ayudante puede quedar atrapado.' },
        { q: '¿Qué es lo más peligroso al enganchar un implemento?', o: ['Quedar atrapado entre tractor e implemento', 'Demorarse mucho en alinear el enganche', 'Que el implemento esté sucio o con barro', 'Usar guantes al momento de poner el pasador'], w: 'Por eso nadie se pone entre el tractor y el implemento mientras se mueve.' }] },
      { s: 'si_ag_tdf_nebu', v: [
        { q: 'Mientras la nebulizadora funciona, ¿dónde debes estar?', o: ['Lejos, fuera de la zona de exclusión', 'Detrás, para ver si sale bien la nube', 'Al costado, revisando las boquillas', 'Sobre el estanque, revisando el nivel'], w: 'Cerca del equipo hay riesgo de atrapamiento y de recibir el producto.' },
        { q: 'Una boquilla de la nebulizadora gotea. ¿Qué se hace?', o: ['Se detienen la bomba, la TDF y el motor', 'Se revisa con el ventilador funcionando', 'Se tapa con el dedo mientras se aplica', 'Se sopla con la boca para destaparla'], w: 'Se revisa con todo detenido y sin soplar con la boca.' },
        { q: '¿Por qué no te acercas al ventilador de la nebulizadora funcionando?', o: ['Porque atrapa, golpea y lanza producto', 'Porque hace mucho viento frío', 'Porque se ensucia la ropa de trabajo', 'Porque el tractorista se distrae'], w: 'El ventilador gira rápido y empuja el producto con fuerza.' }] },
      { s: 'si_ag_tdf_rastra', v: [
        { q: 'La rastra no entra bien en la tierra dura. ¿Qué se hace?', o: ['Nadie se sube a la rastra: se avisa a la jefatura', 'Un compañero se sube a la rastra para darle peso', 'Te subes a la rastra si el tractor va lento', 'Te subes a la rastra solo en terreno parejo'], w: 'Los discos cortan como cuchillos.' },
        { q: '¿Por qué hay zona de exclusión alrededor de la picadora?', o: ['Porque lanza piedras y astillas a distancia', 'Porque hace mucho ruido al trabajar', 'Porque levanta mucho polvo en la hilera', 'Porque el tractor va lento y estorba'], w: 'Una piedra lanzada puede causar lesiones graves.' },
        { q: 'Una picadora está trabajando y necesitas pasar. ¿Qué haces?', o: ['Esperas fuera de la zona a que pase', 'Pasas corriendo por detrás de la picadora', 'Pasas cubriéndote la cara con el brazo', 'Le haces señas y pasas por el lado'], w: 'Nadie entra a la zona de exclusión mientras la picadora funciona.' }] },
      { s: 'si_ag_tdf_mant', v: [
        { q: 'Un implemento se trabó con ramas. ¿Qué se hace antes de destrabarlo?', o: ['Desconectar la TDF, apagar el motor y sacar la llave', 'Bajar la velocidad del tractor y sacar las ramas', 'Sacar las ramas con un palo, con todo funcionando', 'Solo desconectar la TDF y dejar el motor encendido'], w: 'Así nada puede girar ni moverse mientras trabajas.' },
        { q: '¿Cómo debe estar un implemento para limpiarlo o ajustarlo?', o: ['Detenido y bloqueado con su bloqueo propio', 'Funcionando en marcha lenta, con cuidado', 'Con la TDF conectada, para ver si quedó bien', 'Con el motor encendido y el tractorista atento'], w: 'Nunca se interviene un implemento en movimiento.' },
        { q: 'Vas a ajustar un implemento que está levantado. ¿Qué haces primero?', o: ['Lo bajas al suelo o lo calzas firme antes de acercarte', 'Te pones debajo mientras el tractorista lo sostiene', 'Lo ajustas rápido sin bajarlo', 'Lo sujetas con una cuerda y te pones debajo'], w: 'Un implemento levantado puede caer y aplastarte.' }] }
    ]
  });

  // __TEMAS__
})();



/* ---- frambuesa.js ---- */
// ===== COMFRUT Nursery · Fundo Santa Sara · charlas propias del campo de frambuesas =====
// Dibujos propios: matas de frambuesa en espaldera (postes y alambres), bandejas de cosecha, comedor móvil, estación de agua, baño químico, invernadero.
// Vestimenta de campo de todas las empresas: legionario con cubrenuca, ropa de manga larga, lentes de seguridad y zapatos de seguridad.
window.SI_CONT = window.SI_CONT || { temas: [] };
(function () {
  const OL = '#22303A';
  const f1 = v => (+v).toFixed(1);
  const ST = '<style>'
    + '.cf_sw{animation:cf_sw 4.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}@keyframes cf_sw{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.2deg)}}'
    + '.cf_bob{animation:cf_bob 2.4s ease-in-out infinite}@keyframes cf_bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}'
    + '.cf_fl{animation:cf_fl 2.6s ease-in-out infinite}@keyframes cf_fl{0%,100%{transform:translate(0,0)}25%{transform:translate(5px,-4px)}50%{transform:translate(9px,2px)}75%{transform:translate(3px,5px)}}'
    + '.cf_bl{animation:cf_bl 1.3s steps(2) infinite}@keyframes cf_bl{50%{opacity:.25}}'
    + '.cf_dr{animation:cf_dr 1.6s ease-in infinite}@keyframes cf_dr{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(16px);opacity:0}}'
    + '.cf_pu{animation:cf_pu 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}@keyframes cf_pu{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}'
    + '.cf_wv{animation:cf_wv 1.2s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 0}@keyframes cf_wv{from{transform:skewX(-6deg)}to{transform:skewX(6deg)}}'
    + '.cf_hz{animation:cf_hz 2s ease-in-out infinite}@keyframes cf_hz{0%,100%{opacity:.25}50%{opacity:.7}}'
    + '</style>';
  const svx = inner => sv(ST + inner);
  const T = (x, y, s, z = 12, c = '#263238', w = 'bold', a = 'middle') => txt(x, y, s, z, c, w, a);
  // rótulo tipo píldora (en la prueba se oculta)
  const lbl = (x, y, s, c = '#2E7D32', w) => { w = w || (s.length * 6.6 + 14); return `<rect x="${f1(x - w / 2)}" y="${y - 12}" width="${f1(w)}" height="17" rx="8" fill="${c}"/>` + txt(x, y + 1, s, 11, '#fff'); };
  const arrow = (x1, y1, x2, y2, c = '#D7262B', w = 3) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 8; return `<line x1="${x1}" y1="${y1}" x2="${f1(x2 - Math.cos(a) * 4)}" y2="${f1(y2 - Math.sin(a) * 4)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x2},${y2} L${f1(x2 - h * Math.cos(a - .5))},${f1(y2 - h * Math.sin(a - .5))} L${f1(x2 - h * Math.cos(a + .5))},${f1(y2 - h * Math.sin(a + .5))}Z" fill="${c}"/>`; };
  const ok = (x, y, r = 13) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2E7D32" stroke="#fff" stroke-width="3"/><path d="M${x - r * .45},${y} l${r * .3},${r * .32} l${r * .55},${-r * .6}" stroke="#fff" stroke-width="${r * .24}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const no = (x, y, r = 13) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#D7262B" stroke="#fff" stroke-width="3"/><path d="M${x - r * .4},${y - r * .4} l${r * .8},${r * .8} M${x + r * .4},${y - r * .4} l${-r * .8},${r * .8}" stroke="#fff" stroke-width="${r * .24}" stroke-linecap="round"/>`;
  const rot = (deg, cx, cy, inner) => `<g transform="rotate(${deg} ${cx} ${cy})">${inner}</g>`;
  // cielo, cerros de la precordillera y suelo de tierra con pasto entre hileras
  const ext = (o = {}) => {
    const gy = o.gy || 150;
    let g = `<rect width="320" height="200" fill="${o.sky || '#BFE6FF'}"/>`;
    if (o.sun !== false) g += `<circle cx="${o.sunx || 286}" cy="26" r="13" fill="#FFE082"/><circle cx="${o.sunx || 286}" cy="26" r="9" fill="#FFD54F"/>`;
    g += `<path d="M0,${gy - 26} Q50,${gy - 52} 110,${gy - 30} T230,${gy - 34} T320,${gy - 26} V${gy} H0Z" fill="#B3CDE0" opacity=".8"/>`;
    g += `<path d="M0,${gy - 14} Q70,${gy - 34} 140,${gy - 16} T320,${gy - 14} V${gy} H0Z" fill="#A5D6A7"/>`;
    g += `<rect y="${gy}" width="320" height="${200 - gy}" fill="${o.soil || '#B9A27C'}"/>`;
    g += [12, 48, 92, 138, 176, 214, 258, 300].map((x, i) => `<path d="M${x},${gy + 12 + (i % 3) * 12} l2,-5 l2,5 l2,-4 l1,4" stroke="#7CB342" stroke-width="1.3" fill="none"/>`).join('');
    return g;
  };

  // ---------- LA MATA DE FRAMBUESA ----------
  // (x,y) = base de la mata, s = escala (s=1 ≈ 1,8 m, más o menos la altura de una persona). o.fruta=false sin fruta, o.flor=true en flor, o.invierno=true sin hojas.
  const CANES = [[-16, -94, -26], [-7, -104, -10], [3, -108, 6], [11, -100, 22], [18, -88, 34], [-22, -78, -40], [24, -70, 44]];
  const leaf = (cx, cy, a, s, c) => {   // hoja compuesta: 3 folíolos aserrados
    const l = (dx, dy, ang, k) => `<g transform="translate(${f1(cx + dx * s)},${f1(cy + dy * s)}) rotate(${ang})"><path d="M0,0 C${f1(3 * s * k)},${f1(-3.4 * s * k)} ${f1(9 * s * k)},${f1(-3.6 * s * k)} ${f1(12 * s * k)},0 C${f1(9 * s * k)},${f1(3.6 * s * k)} ${f1(3 * s * k)},${f1(3.4 * s * k)} 0,0Z" fill="${c}" stroke="#1B5E20" stroke-width="${f1(.5 * s)}"/><path d="M${f1(1 * s)},0 H${f1(10.5 * s * k)}" stroke="#A5D6A7" stroke-width="${f1(.5 * s)}" opacity=".8"/></g>`;
    return l(0, 0, a, 1) + l(0, 0, a - 38, .82) + l(0, 0, a + 38, .82);
  };
  const berry = (bx, by, s, ripe = 1) => {   // fruto: cono de drupéolos con cáliz verde
    const c1 = ripe === 1 ? '#C2185B' : ripe === 2 ? '#F06292' : '#C5E1A5', c2 = ripe === 1 ? '#E91E63' : ripe === 2 ? '#F8BBD0' : '#DCEDC8';
    let g = `<path d="M${f1(bx)},${f1(by - 1.6 * s)} l${f1(-2.6 * s)},${f1(-1.6 * s)} M${f1(bx)},${f1(by - 1.6 * s)} l${f1(2.6 * s)},${f1(-1.6 * s)} M${f1(bx)},${f1(by - 1.6 * s)} v${f1(-2.6 * s)}" stroke="#2E7D32" stroke-width="${f1(.9 * s)}" stroke-linecap="round"/>`;
    g += `<path d="M${f1(bx - 3.4 * s)},${f1(by - .6 * s)} Q${f1(bx - 3.6 * s)},${f1(by + 4.8 * s)} ${f1(bx)},${f1(by + 6 * s)} Q${f1(bx + 3.6 * s)},${f1(by + 4.8 * s)} ${f1(bx + 3.4 * s)},${f1(by - .6 * s)}Z" fill="${c1}" stroke="#880E4F" stroke-width="${f1(.4 * s)}"/>`;
    [[-1.7, .8], [0, .4], [1.7, .8], [-.9, 2.8], [.9, 2.8], [0, 4.6]].forEach(([dx, dy]) => { g += `<circle cx="${f1(bx + dx * s)}" cy="${f1(by + dy * s)}" r="${f1(1.05 * s)}" fill="${c2}" opacity=".55"/>`; });
    return g;
  };
  const flower = (fx, fy, s) => `<g>${[0, 72, 144, 216, 288].map(a => `<ellipse cx="${f1(fx + 2.4 * s * Math.cos(a * Math.PI / 180))}" cy="${f1(fy + 2.4 * s * Math.sin(a * Math.PI / 180))}" rx="${f1(1.9 * s)}" ry="${f1(1.4 * s)}" transform="rotate(${a} ${f1(fx + 2.4 * s * Math.cos(a * Math.PI / 180))} ${f1(fy + 2.4 * s * Math.sin(a * Math.PI / 180))})" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="${f1(.3 * s)}"/>`).join('')}<circle cx="${f1(fx)}" cy="${f1(fy)}" r="${f1(1.4 * s)}" fill="#FBC02D"/></g>`;
  function framb(x, y, s = 1, o = {}) {
    const k = s * .92;   // la mata mide ~105 px con s = 1
    let g = `<g class="${o.anim === false ? '' : 'cf_sw'}">`;
    g += `<ellipse cx="${x}" cy="${f1(y + 1)}" rx="${f1(26 * k)}" ry="${f1(3 * k)}" fill="#000" opacity=".12"/>`;
    CANES.forEach(([dx, h, tip], i) => {
      const cx1 = x + dx * .3 * k, cy1 = y + h * .55 * k, ex = x + tip * k, ey = y + h * k;
      g += `<path d="M${f1(x + dx * .12 * k)},${y} Q${f1(cx1)},${f1(cy1)} ${f1(ex)},${f1(ey)}" stroke="${o.invierno ? '#8D6E63' : i % 2 ? '#7B4A2E' : '#8D5A3B'}" stroke-width="${f1(2.6 * k)}" fill="none" stroke-linecap="round"/>`;
      if (o.invierno) { for (let j = 1; j < 4; j++) { const t = .25 + j * .2, px = (1 - t) * (1 - t) * (x + dx * .12 * k) + 2 * (1 - t) * t * cx1 + t * t * ex, py = (1 - t) * (1 - t) * y + 2 * (1 - t) * t * cy1 + t * t * ey; g += `<path d="M${f1(px)},${f1(py)} l${f1(2 * k)},${f1(-1.6 * k)}" stroke="#6D4C41" stroke-width="${f1(.8 * k)}"/>`; } return; }
      [.38, .58, .76, .93].forEach((t, j) => {
        const px = (1 - t) * (1 - t) * (x + dx * .12 * k) + 2 * (1 - t) * t * cx1 + t * t * ex, py = (1 - t) * (1 - t) * y + 2 * (1 - t) * t * cy1 + t * t * ey;
        const side = (i + j) % 2 ? 1 : -1, cols = ['#2E7D32', '#388E3C', '#43A047', '#1B5E20'];
        g += leaf(px, py, side > 0 ? -18 : 198, k, cols[(i + j) % 4]);
        if (o.flor && j > 0) g += flower(px + side * 6 * k, py + 4 * k, k);
        else if (o.fruta !== false && j > 0 && (i + j) % 3 !== 2) g += berry(px + side * 7 * k, py + 4 * k, k * 1.05, (i + j) % 5 === 0 ? 2 : 1);
      });
    });
    return g + '</g>';
  }
  // espaldera: postes de madera y 2 alambres con matas de frambuesa. y = suelo
  function hilera(x1, x2, y, s = 1, o = {}) {
    const H = o.bajo ? 1 : 1.22;   // la frambuesa del Fundo Santa Sara es más alta que una persona (~2,2 m)
    const top = y - (o.bajo ? 92 : 120) * s, w1 = y - (o.bajo ? 48 : 56) * s, w2 = y - (o.bajo ? 80 : 100) * s;
    let g = '';
    for (let x = x1; x <= x2 + 1; x += (o.paso || 90) * s) g += `<rect x="${f1(x - 3 * s)}" y="${f1(top)}" width="${f1(6 * s)}" height="${f1(y - top)}" fill="#8D6E63" stroke="#5D4037" stroke-width="1"/><rect x="${f1(x - 3 * s)}" y="${f1(top)}" width="${f1(6 * s)}" height="${f1(4 * s)}" fill="#6D4C41"/>`;
    const plants = [];
    for (let x = x1 + 22 * s; x < x2; x += (o.dens || 34) * s) plants.push(framb(x, y, s * .95 * H, Object.assign({ anim: false }, o)));
    g += `<line x1="${x1}" y1="${f1(w2)}" x2="${x2}" y2="${f1(w2)}" stroke="#90A4AE" stroke-width="${f1(1.2 * s)}"/>` + plants.join('') + `<line x1="${x1}" y1="${f1(w1)}" x2="${x2}" y2="${f1(w1)}" stroke="#90A4AE" stroke-width="${f1(1.2 * s)}"/>`;
    return g;
  }
  // hileras al fondo (perspectiva)
  const fondoHileras = (y = 150, s = .42) => [10, 92, 174, 256].map(x => hilera(x, x + 70, y, s, { paso: 160, dens: 40 })).join('');
  // bandeja de cosecha con frambuesas (vista de lado). (x,y) = base izquierda
  const bandeja = (x, y, w = 40, llena = true) => {
    let g = `<path d="M${x},${y - 9} h${w} l-3,9 h${-w + 6}z" fill="#ECEFF1" stroke="#90A4AE" stroke-width="1.2"/>`;
    for (let i = 0; i < 4; i++) g += `<rect x="${f1(x + 3 + i * (w - 6) / 4)}" y="${y - 8}" width="${f1((w - 6) / 4 - 2)}" height="6" rx="1" fill="#fff" stroke="#B0BEC5" stroke-width=".6"/>`;
    if (llena) for (let i = 0; i < 8; i++) g += `<circle cx="${f1(x + 4 + i * (w - 8) / 7)}" cy="${y - 10 - (i % 2)}" r="2.6" fill="${i % 3 ? '#C2185B' : '#D81B60'}"/>`;
    return g;
  };
  const pilaBandejas = (x, y, n = 4, w = 40) => { let g = ''; for (let i = 0; i < n; i++) g += bandeja(x, y - i * 11, w, i === n - 1); return g; };
  // carro de cosecha (2 ruedas, manilla)
  const carro = (x, y, n = 3) => `<rect x="${x}" y="${y - 22}" width="54" height="5" fill="#455A64"/><line x1="${x + 54}" y1="${y - 20}" x2="${x + 76}" y2="${y - 44}" stroke="#455A64" stroke-width="3.5" stroke-linecap="round"/><circle cx="${x + 12}" cy="${y - 8}" r="8" fill="#263238"/><circle cx="${x + 12}" cy="${y - 8}" r="3" fill="#B0BEC5"/><circle cx="${x + 44}" cy="${y - 8}" r="8" fill="#263238"/><circle cx="${x + 44}" cy="${y - 8}" r="3" fill="#B0BEC5"/>` + pilaBandejas(x + 7, y - 22, n, 40);
  // bandeja colgada a la cintura (cosecha a mano)
  const cintura = (x, y, o = {}) => { const d = o.flip ? -1 : 1, bx = x + d * 8, by = y - 38; return `<path d="M${x - 9},${y - 40} q${9},${5} 18,0" stroke="#5D4037" stroke-width="2.2" fill="none"/>` + bandeja(bx - 13, by + 4, 26, o.full !== false); };
  // estación de agua potable (bidón con llave sobre soporte, con vasos)
  const estacionAgua = (x, y) => `<rect x="${x}" y="${y - 44}" width="46" height="44" rx="3" fill="#0277BD" stroke="#01579B" stroke-width="1.5"/>${T(x + 23, y - 28, 'AGUA', 10, '#fff')}${T(x + 23, y - 16, 'POTABLE', 8, '#fff')}`
    + `<rect x="${x + 7}" y="${y - 82}" width="32" height="38" rx="7" fill="#B3E5FC" fill-opacity=".9" stroke="#0288D1" stroke-width="1.5"/><rect x="${x + 15}" y="${y - 88}" width="16" height="7" rx="2" fill="#0288D1"/><path d="M${x + 11},${y - 62} h24" stroke="#fff" stroke-width="2" opacity=".6"/>`
    + `<rect x="${x + 40}" y="${y - 56}" width="10" height="5" fill="#455A64"/><rect x="${x + 46}" y="${y - 52}" width="3" height="6" fill="#455A64"/>` + `<g class="cf_dr">${drop(x + 47.5, y - 40, .35, '#4FC3F7')}</g>`
    + `<rect x="${x - 14}" y="${y - 14}" width="10" height="14" rx="1" fill="#fff" stroke="#90A4AE"/><rect x="${x - 14}" y="${y - 28}" width="10" height="14" rx="1" fill="#fff" stroke="#90A4AE"/>`;
  // baño químico
  const bano = (x, y, c = '#1565C0') => `<rect x="${x}" y="${y - 92}" width="44" height="92" rx="4" fill="${c}" stroke="#0D47A1" stroke-width="1.5"/><path d="M${x - 2},${y - 92} q24,-12 48,0z" fill="#ECEFF1" stroke="#90A4AE"/><rect x="${x + 6}" y="${y - 82}" width="32" height="76" rx="2" fill="#1E88E5" stroke="#0D47A1"/><rect x="${x + 30}" y="${y - 46}" width="5" height="10" rx="2" fill="#ECEFF1"/><circle cx="${x + 22}" cy="${y - 66}" r="7" fill="#fff"/>${T(x + 22, y - 62, 'WC', 8, '#1565C0')}`;
  // lavamanos portátil con jabón y toalla de papel
  const lavamanos = (x, y) => `<rect x="${x}" y="${y - 60}" width="40" height="60" rx="3" fill="#ECEFF1" stroke="#78909C" stroke-width="1.5"/><path d="M${x + 4},${y - 52} h32 q0,12 -16,12 q-16,0 -16,-12z" fill="#fff" stroke="#90A4AE"/><path d="M${x + 20},${y - 60} v-8 h8" stroke="#78909C" stroke-width="3" fill="none"/><g class="cf_dr">${drop(x + 28, y - 60, .3)}</g>`
    + `<rect x="${x + 44}" y="${y - 74}" width="12" height="18" rx="3" fill="#F8BBD0" stroke="#C2185B"/><rect x="${x + 47}" y="${y - 80}" width="6" height="6" fill="#C2185B"/>${T(x + 50, y - 62, 'jabón', 6, '#880E4F', 'bold')}<rect x="${x + 44}" y="${y - 50}" width="14" height="22" rx="2" fill="#fff" stroke="#90A4AE"/><path d="M${x + 46},${y - 30} v10 h10 v-10" fill="#fff" stroke="#B0BEC5"/>`;
  // bidón de agua potable con llave (x,y) = base
  const bidon = (x, y, s = 1) => `<rect x="${f1(x - 11 * s)}" y="${f1(y - 30 * s)}" width="${f1(22 * s)}" height="${f1(30 * s)}" rx="${f1(5 * s)}" fill="#81D4FA" fill-opacity=".95" stroke="#0277BD" stroke-width="1.3"/><rect x="${f1(x - 5 * s)}" y="${f1(y - 35 * s)}" width="${f1(10 * s)}" height="${f1(6 * s)}" rx="1.5" fill="#0277BD"/><path d="M${f1(x - 7 * s)},${f1(y - 20 * s)} h${f1(14 * s)}" stroke="#fff" stroke-width="${f1(1.6 * s)}" opacity=".7"/><rect x="${f1(x + 9 * s)}" y="${f1(y - 8 * s)}" width="${f1(7 * s)}" height="${f1(4 * s)}" fill="#455A64"/><rect x="${f1(x + 13 * s)}" y="${f1(y - 5 * s)}" width="${f1(2.4 * s)}" height="${f1(4 * s)}" fill="#455A64"/>`;
  // dispensador de toalla de papel (rollo)
  const toalla = (x, y, s = 1) => `<rect x="${f1(x - 9 * s)}" y="${f1(y - 14 * s)}" width="${f1(18 * s)}" height="${f1(14 * s)}" rx="${f1(3 * s)}" fill="#ECEFF1" stroke="#78909C" stroke-width="1.2"/><circle cx="${x}" cy="${f1(y - 7 * s)}" r="${f1(5 * s)}" fill="#fff" stroke="#B0BEC5"/><path d="M${f1(x - 6 * s)},${y} h${f1(12 * s)} v${f1(9 * s)} l${f1(-3 * s)},${f1(2 * s)} l${f1(-3 * s)},${f1(-2 * s)} l${f1(-3 * s)},${f1(2 * s)} l${f1(-3 * s)},${f1(-2 * s)}z" fill="#fff" stroke="#B0BEC5"/>`;
  // basurero con tapa (x,y) = base centro
  const basurero = (x, y, s = 1, c = '#2E7D32') => `<path d="M${f1(x - 13 * s)},${f1(y - 34 * s)} h${f1(26 * s)} l${f1(-2 * s)},${f1(34 * s)} h${f1(-22 * s)}z" fill="${c}" stroke="#1B5E20" stroke-width="1.3"/><rect x="${f1(x - 15 * s)}" y="${f1(y - 39 * s)}" width="${f1(30 * s)}" height="${f1(6 * s)}" rx="2" fill="#1B5E20"/><rect x="${f1(x - 4 * s)}" y="${f1(y - 42 * s)}" width="${f1(8 * s)}" height="${f1(3 * s)}" rx="1" fill="#1B5E20"/>${T(x, y - 14 * s, '♻', 12 * s, '#fff')}`;
  // COMEDOR MÓVIL: carrito con ruedas y lanza, techo de sombra, mesa y bancas, bidón de agua potable, toalla de papel. (x,y) = suelo bajo la rueda izq.
  const comedor = (x, y, w = 150, o = {}) => {
    const pf = y - 22, top = y - 112;
    let g = `<path d="M${x},${pf + 4} h-24 l-4,3" stroke="#455A64" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="${x - 20}" y="${pf + 6}" width="3" height="${y - pf - 6}" fill="#455A64"/>`;
    g += `<rect x="${x}" y="${pf}" width="${w}" height="8" rx="2" fill="#546E7A" stroke="#37474F" stroke-width="1.2"/>`;
    [x + w * .3, x + w * .7].forEach(cx => { g += `<circle cx="${f1(cx)}" cy="${y - 10}" r="10" fill="#263238"/><circle cx="${f1(cx)}" cy="${y - 10}" r="4" fill="#B0BEC5"/>`; });
    g += `<rect x="${x + 2}" y="${top + 8}" width="4" height="${pf - top - 8}" fill="#90A4AE"/><rect x="${x + w - 6}" y="${top + 8}" width="4" height="${pf - top - 8}" fill="#90A4AE"/>`;
    g += `<path d="M${x - 8},${top + 12} L${x + 8},${top} H${x + w - 8} L${x + w + 8},${top + 12}Z" fill="#1F2FD6" stroke="#0D1B8C" stroke-width="1.5"/><path d="M${x - 8},${top + 12} H${x + w + 8} v5 H${x - 8}z" fill="#2FC3F5"/>`;
    g += `<g opacity=".18">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `<path d="M${f1(x + i * w / 10)},${top + 17} l-10,${pf - top - 17}" stroke="#0D1B8C" stroke-width="7"/>`).join('')}</g>`;   // sombra
    g += `<rect x="${x + 22}" y="${pf - 34}" width="${w - 70}" height="5" rx="1" fill="#8D6E63"/><rect x="${x + 30}" y="${pf - 29}" width="4" height="29" fill="#6D4C41"/><rect x="${x + w - 56}" y="${pf - 29}" width="4" height="29" fill="#6D4C41"/>`;
    g += `<rect x="${x + 14}" y="${pf - 16}" width="${w - 54}" height="4" fill="#A1887F"/><rect x="${x + 18}" y="${pf - 12}" width="3" height="12" fill="#6D4C41"/><rect x="${x + w - 46}" y="${pf - 12}" width="3" height="12" fill="#6D4C41"/>`;
    g += `<rect x="${x + w - 36}" y="${pf - 40}" width="28" height="40" fill="#CFD8DC" stroke="#90A4AE"/>` + bidon(x + w - 25, pf - 40, .9) + toalla(x + w - 15, pf - 60, .8);
    if (o.label !== false) g += T(x + w / 2, top + 11, 'COMEDOR MÓVIL', 9, '#fff');
    return g;
  };
  // invernadero (túnel de plástico)
  const invernadero = (x, y, w = 200, h = 110, o = {}) => `<path d="M${x},${y} V${y - h * .55} Q${x + w / 2},${y - h * 1.2} ${x + w},${y - h * .55} V${y}Z" fill="${o.dentro ? '#E8F5E9' : '#E3F2FD'}" fill-opacity="${o.dentro ? 1 : .75}" stroke="#90A4AE" stroke-width="2"/>`
    + [.2, .4, .6, .8].map(k => `<path d="M${f1(x + w * k)},${y} V${f1(y - h * .55 - Math.sin(k * Math.PI) * h * .3)}" stroke="#B0BEC5" stroke-width="1.5"/>`).join('')
    + (o.abierto ? `<path d="M${x},${y - h * .1} V${y - h * .5} h${w * .18} V${y - h * .1}z" fill="#9CCC65" opacity=".6"/>` : '');
  // poste de madera tirado o en brazos. (x,y) centro
  const poste = (x, y, ang = 0, L = 90) => rot(ang, x, y, `<rect x="${f1(x - L / 2)}" y="${y - 4.5}" width="${L}" height="9" rx="3" fill="#A1887F" stroke="#6D4C41" stroke-width="1.2"/><circle cx="${f1(x + L / 2 - 2)}" cy="${y}" r="4.5" fill="#BCAAA4" stroke="#6D4C41"/>`);
  // rollo de alambre
  const rollo = (x, y, r = 14) => `<circle cx="${x}" cy="${y - r}" r="${r}" fill="none" stroke="#90A4AE" stroke-width="5"/><circle cx="${x}" cy="${y - r}" r="${r - 4}" fill="none" stroke="#B0BEC5" stroke-width="2"/>`;
  // tijera de podar (abierta o cerrada) (x,y) eje; ang en grados
  const tijera = (x, y, s = 1, ang = 0, abierta) => rot(ang, x, y, `<path d="M${x},${y} l${-26 * s},${-5 * s} q${-3 * s},${2 * s} 0,${4 * s}z" fill="#D7262B" stroke="${OL}" stroke-width=".8"/><path d="M${x},${y} l${-26 * s},${5 * s} q${-3 * s},${-2 * s} 0,${-4 * s}z" fill="#C62828" stroke="${OL}" stroke-width=".8"/>`
    + `<path d="M${x},${y} l${16 * s},${abierta ? -9 * s : -3 * s} l${2 * s},${3 * s}z" fill="#CFD8DC" stroke="${OL}" stroke-width=".8"/><path d="M${x},${y} l${16 * s},${abierta ? 9 * s : 3 * s} l${-1 * s},${2 * s}z" fill="#B0BEC5" stroke="${OL}" stroke-width=".8"/><circle cx="${x}" cy="${y}" r="${2 * s}" fill="#FBC02D" stroke="${OL}" stroke-width=".6"/>`);
  const funda = (x, y) => `<path d="M${x - 5},${y - 52} h12 l-2,22 h-8z" fill="#5D4037" stroke="${OL}" stroke-width="1"/><rect x="${x - 3}" y="${y - 58}" width="8" height="6" fill="#D7262B"/>`;
  // abeja / avispa
  const abeja = (x, y, s = 1, avispa) => `<g class="cf_fl"><ellipse cx="${x - 2 * s}" cy="${y - 4 * s}" rx="${3.6 * s}" ry="${2.4 * s}" fill="#E3F2FD" opacity=".85"/><ellipse cx="${x + 2 * s}" cy="${y - 4 * s}" rx="${3.6 * s}" ry="${2.4 * s}" fill="#E3F2FD" opacity=".85"/><ellipse cx="${x}" cy="${y}" rx="${5 * s}" ry="${3.2 * s}" fill="${avispa ? '#FDD835' : '#FFB300'}" stroke="${OL}" stroke-width=".6"/><path d="M${x - 1.5 * s},${y - 3 * s} v${6 * s} M${x + 1.5 * s},${y - 3 * s} v${6 * s}" stroke="${OL}" stroke-width="${1.1 * s}"/></g>`;
  // sol con rayos
  const sol = (x, y, r = 18) => `<g class="cf_pu"><circle cx="${x}" cy="${y}" r="${r}" fill="#FFC107" stroke="#FFA000" stroke-width="2"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return `<line x1="${f1(x + (r + 4) * Math.cos(a))}" y1="${f1(y + (r + 4) * Math.sin(a))}" x2="${f1(x + (r + 12) * Math.cos(a))}" y2="${f1(y + (r + 12) * Math.sin(a))}" stroke="#FFA000" stroke-width="3.5" stroke-linecap="round"/>`; }).join('')}</g>`;
  const termometro = (x, y, alto = true) => `<rect x="${x - 5}" y="${y - 60}" width="10" height="56" rx="5" fill="#fff" stroke="#546E7A" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="9" fill="#D7262B" stroke="#546E7A" stroke-width="1.5"/><rect x="${x - 2.5}" y="${y - (alto ? 54 : 26)}" width="5" height="${alto ? 52 : 24}" fill="#D7262B"/>`;
  // letrero de reingreso (aplicación reciente)
  const letreroAp = (x, y) => `<rect x="${x - 2}" y="${y - 70}" width="4" height="70" fill="#6D4C41"/><rect x="${x - 34}" y="${y - 102}" width="68" height="40" rx="3" fill="#FDD835" stroke="#263238" stroke-width="1.5"/>${T(x, y - 87, 'APLICACIÓN', 9, '#263238')}${T(x, y - 76, 'NO ENTRAR', 10, '#C62828')}${T(x, y - 66, 'hasta el reingreso', 7, '#263238', 'normal')}`;
  // persona de campo de Comfrut (legionario, lentes, manga larga, zapatos de seguridad): W ya viste así según cf_base.js
  const P = (x, y, o = {}) => W(x, y, o);

  // ---------- registro de dibujos ----------
  const D = (id, f) => { S[id] = f; };

  // ======================= 1. COSECHA DE FRAMBUESA =======================
  D('cf_co_hilera', () => svx(ext({ gy: 150 }) + fondoHileras(150, .4) + hilera(-10, 330, 186, 1.02, { paso: 110 }) + P(150, 192, { pose: 'point' }) + cintura(150, 192)
    + lbl(66, 32, 'Legionario y lentes', '#1F2FD6') + lbl(250, 32, 'Manga larga', '#1F2FD6') + lbl(160, 196 - 4, 'Zapatos de seguridad', '#2E7D32')));
  D('cf_co_postura', () => svx(ext({ gy: 150, sun: false }) + hilera(-20, 330, 186, .95, { paso: 120 })
    + P(84, 192, { pose: 'bend', face: 'pain' }) + no(84, 70) + `<path d="M86,156 q8,-14 24,-18" stroke="#D7262B" stroke-width="3" fill="none" class="cf_bl"/>`
    + P(236, 192, { pose: 'squat' }) + ok(236, 70) + lbl(84, 40, 'Espalda doblada', '#C62828') + lbl(236, 40, 'Rodillas dobladas', '#2E7D32')));
  D('cf_co_bandejas', () => svx(ext({ gy: 150 }) + fondoHileras(150, .4) + P(84, 190, { pose: 'carry', face: 'worried' }) + pilaBandejas(80, 152, 8, 34) + no(40, 66)
    + carro(176, 192, 4) + P(268, 190, { pose: 'point', flip: true }) + ok(250, 66) + lbl(78, 34, 'Tapa la vista y pesa', '#C62828') + lbl(232, 34, 'Carro de cosecha', '#2E7D32')));
  D('cf_co_alambre', () => svx(ext({ gy: 150, sun: false }) + hilera(-20, 340, 186, 1.05, { paso: 130 }) + P(120, 192, { pose: 'walk' })
    + `<circle cx="124" cy="117" r="18" fill="none" stroke="#FFC107" stroke-width="3" class="cf_bl"/>` + lbl(210, 34, 'Alambre a la altura de la cara', '#C62828') + arrow(196, 44, 140, 106, '#C62828', 2.5) + lbl(70, 34, 'Lentes puestos', '#2E7D32')));
  D('cf_co_insectos', () => svx(`<rect width="320" height="200" fill="#E8F5E9"/>` + framb(110, 214, 2.1, { anim: false })
    + `<path d="M232,200 L232,150 Q232,128 214,124 L196,118 Q186,116 186,124 Q188,130 198,132 L210,134" fill="${SK}" stroke="${OL}" stroke-width="1.3"/><rect x="222" y="158" width="30" height="42" fill="#2B4C9B" stroke="${OL}"/>`
    + abeja(162, 104, 1.7, true) + `<circle cx="162" cy="104" r="22" fill="none" stroke="#D7262B" stroke-width="3" class="cf_bl"/>` + lbl(196, 40, 'Mira antes de meter la mano', '#C62828')));
  D('cf_co_inocuidad', () => svx(ext({ gy: 150 }) + fondoHileras(150, .38) + lavamanos(40, 190) + P(150, 192, { pose: 'carry' })
    + `<g class="cf_dr">${drop(166, 132, .35)}${drop(172, 136, .3)}</g>` + bano(246, 192) + lbl(80, 34, 'Manos lavadas', '#2E7D32') + lbl(250, 34, 'Solo en el baño', '#1565C0')));
  D('cf_co_suelo', () => svx(ext({ gy: 150, sun: false }) + hilera(-20, 330, 186, .95, { paso: 120 }) + P(96, 192, { pose: 'bend' }) + bandeja(104, 156, 26)
    + [0, 1, 2].map(i => berry(196 + i * 10, 186 + (i % 2) * 2, 1.4)).join('') + `<circle cx="206" cy="188" r="18" fill="none" stroke="#D7262B" stroke-width="3" class="cf_bl"/>` + no(232, 150, 11)
    + lbl(160, 40, 'Fruta del suelo: no va a la bandeja', '#C62828')));
  D('cf_co_pausa', () => svx(ext({ gy: 150 }) + fondoHileras(150, .4) + P(96, 190, { pose: 'stop' }) + P(214, 190, { pose: 'stop', flip: true })
    + `<path d="M120,96 q8,-14 0,-26 M190,96 q-8,-14 0,-26" stroke="#2E7D32" stroke-width="2.5" fill="none" class="cf_bl"/>` + lbl(156, 34, 'Pausa activa: estira manos, brazos y espalda', '#2E7D32')));

  // ======================= 2. PODA Y AMARRE DE CAÑAS =======================
  D('cf_pa_tijera', () => svx(`<rect width="320" height="200" fill="#F1F8E9"/><rect y="168" width="320" height="32" fill="#C5E1A5"/>` + tijera(112, 104, 3, -12) + `<g transform="translate(250,168) scale(2.2) translate(-250,-168)">${funda(250, 180)}</g>`
    + lbl(104, 34, 'Afilada y con seguro', '#2E7D32') + lbl(256, 34, 'En su funda', '#2E7D32')));
  D('cf_pa_corte', () => svx(`<rect width="320" height="200" fill="#E8F5E9"/>` + framb(150, 230, 2.1, { anim: false, invierno: true })
    + `<path d="M60,200 L64,140 Q66,122 84,120 L104,118" fill="${SK}" stroke="${OL}" stroke-width="1.3"/><rect x="50" y="160" width="30" height="40" fill="#2B4C9B" stroke="${OL}"/>`
    + tijera(118, 118, 1.6, 4, true) + arrow(150, 140, 210, 160, '#2E7D32', 3) + `<path d="M260,200 L256,150 Q254,132 236,128 L212,124" fill="#8D6E63" stroke="${OL}" stroke-width="1.3"/><rect x="246" y="160" width="30" height="40" fill="#2B4C9B" stroke="${OL}"/>`
    + lbl(160, 30, 'Corta hacia afuera, lejos de tu otra mano', '#2E7D32') + lbl(250, 190 - 70, 'Mano con guante', '#455A64')));
  D('cf_pa_espinas', () => svx(`<rect width="320" height="200" fill="#F1F8E9"/>` + `<path d="M20,170 Q150,120 300,40" stroke="#8D5A3B" stroke-width="10" fill="none" stroke-linecap="round"/>`
    + [[50, 157], [82, 146], [114, 134], [146, 120], [178, 104], [210, 88], [242, 70], [272, 54]].map(([x, y], i) => `<path d="M${x},${y - 4} l${i % 2 ? 5 : -5},-9 l3,8z" fill="#5D4037"/>`).join('')
    + `<circle cx="146" cy="116" r="30" fill="none" stroke="#FFC107" stroke-width="3" class="cf_bl"/>` + lbl(150, 186, 'Las cañas tienen espinas: guantes y manga larga', '#C62828')));
  D('cf_pa_amarre', () => svx(ext({ gy: 150, sun: false }) + hilera(-20, 340, 186, 1.05, { paso: 130, fruta: false }) + P(150, 192, { pose: 'carry' })
    + `<path d="M162,142 q6,-6 12,0 q-6,6 -12,0z" fill="none" stroke="#FFB300" stroke-width="2"/>` + lbl(72, 32, 'Amarra suave al alambre', '#2E7D32') + lbl(246, 32, 'Lentes: el alambre salta', '#C62828')));
  D('cf_pa_ojos', () => svx(`<rect width="320" height="200" fill="#E3F2FD"/>` + `<circle cx="90" cy="100" r="44" fill="${SK}" stroke="${OL}" stroke-width="2"/><rect x="52" y="82" width="76" height="22" rx="9" fill="#90CAF9" fill-opacity=".8" stroke="${OL}" stroke-width="2"/><path d="M50,74 Q90,40 130,74 L136,70 Q90,24 44,70Z" fill="#F1E3C2" stroke="${OL}"/>`
    + `<path d="M300,60 L150,94" stroke="#8D5A3B" stroke-width="5" stroke-linecap="round"/><path d="M300,120 L150,96" stroke="#90A4AE" stroke-width="2"/>` + `<g class="cf_bl"><path d="M138,92 l-8,-6 M138,98 l-8,4" stroke="#D7262B" stroke-width="3" stroke-linecap="round"/></g>`
    + lbl(214, 40, 'Puntas de caña y alambres', '#C62828') + lbl(90, 176, 'Lentes de seguridad', '#2E7D32')));
  D('cf_pa_brazos', () => svx(ext({ gy: 150 }) + hilera(-20, 340, 186, 1.05, { paso: 130, fruta: false }) + P(96, 192, { pose: 'stop', face: 'worried' }) + no(96, 70)
    + P(230, 192, { pose: 'carry' }) + ok(230, 70) + lbl(96, 38, 'Brazos arriba horas', '#C62828') + lbl(234, 38, 'Alterna y descansa', '#2E7D32')));
  D('cf_pa_restos', () => svx(ext({ gy: 150, sun: false }) + hilera(-20, 340, 170, .85, { paso: 130, invierno: true })
    + [0, 1, 2, 3, 4].map(i => `<path d="M${120 + i * 14},${186 - (i % 2) * 3} l40,-4" stroke="#8D5A3B" stroke-width="3" stroke-linecap="round"/>`).join('') + no(150, 160, 11)
    + P(60, 194, { pose: 'walk', face: 'worried' }) + `<rect x="246" y="168" width="60" height="22" rx="3" fill="#8D6E63"/>${T(276, 183, 'RESTOS', 9, '#fff')}` + lbl(160, 34, 'Restos de poda fuera del pasillo', '#2E7D32')));
  D('cf_pa_herr', () => svx(`<rect width="320" height="200" fill="#ECEFF1"/><rect y="160" width="320" height="40" fill="#B0BEC5"/>` + `<rect x="30" y="40" width="260" height="110" rx="6" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>`
    + [70, 130, 190, 250].map(x => `<rect x="${x - 2}" y="48" width="4" height="10" fill="#455A64"/>`).join('') + rot(90, 70, 98, tijera(70, 98, 1.6)) + rot(90, 130, 98, tijera(130, 98, 1.6, 0, true))
    + `<path d="M182,64 h16 v60 h-16z" fill="#90A4AE"/><path d="M180,124 h20 v14 h-20z" fill="#FBC02D"/>` + `<path d="M244,64 l12,0 l-4,70 h-4z" fill="#CFD8DC"/><rect x="242" y="124" width="16" height="14" rx="3" fill="#D7262B"/>`
    + `<circle cx="130" cy="98" r="30" fill="none" stroke="#D7262B" stroke-width="3" class="cf_bl"/>` + lbl(160, 180, 'Herramienta dañada: avisa y no la uses', '#C62828')));

  // ======================= 3. ARMADO DE ESTRUCTURA (ESPALDERA) =======================
  D('cf_es_postes', () => svx(ext({ gy: 150 }) + fondoHileras(150, .4) + P(96, 190, { pose: 'carry' }) + P(216, 190, { pose: 'carry', flip: true }) + poste(156, 140, 0, 150)
    + lbl(156, 34, 'Postes pesados: entre dos', '#2E7D32') + lbl(156, 196 - 6, 'Máximo 25 kg por persona', '#1F2FD6')));
  D('cf_es_hoyo', () => svx(ext({ gy: 150, sun: false }) + `<ellipse cx="170" cy="176" rx="18" ry="7" fill="#4E342E"/>` + `<g class="cf_wv"><rect x="140" y="132" width="4" height="40" fill="#455A64"/><path d="M128,132 l32,-10" stroke="#FF6F00" stroke-width="3"/><path d="M131,131 l8,8 M140,128 l8,8 M149,125 l8,8" stroke="#FF6F00" stroke-width="1.5"/></g>`
    + `<rect x="230" y="128" width="4" height="50" fill="#FF6F00"/><rect x="230" y="128" width="40" height="10" fill="#FFC107"/>` + P(70, 190, { pose: 'point' }) + lbl(170, 34, 'Hoyo abierto: señalízalo o tápalo', '#C62828')));
  D('cf_es_combo', () => svx(ext({ gy: 150 }) + `<rect x="150" y="98" width="12" height="80" fill="#A1887F" stroke="#6D4C41"/>` + P(96, 190, { pose: 'stop' })
    + `<g class="cf_wv">${rot(-30, 116, 110, `<rect x="108" y="94" width="40" height="18" rx="3" fill="#455A64"/><rect x="112" y="108" width="6" height="40" fill="#8D6E63"/>`)}</g>` + P(232, 190, { flip: true, pose: 'point' })
    + `<circle cx="156" cy="100" r="22" fill="none" stroke="#FFC107" stroke-width="3" class="cf_bl"/>` + lbl(150, 30, 'Nadie sujeta el poste donde golpeas', '#C62828') + lbl(240, 70, 'Distancia segura', '#2E7D32')));
  D('cf_es_alambre', () => svx(ext({ gy: 150 }) + `<rect x="20" y="88" width="10" height="94" fill="#8D6E63"/><rect x="290" y="88" width="10" height="94" fill="#8D6E63"/>`
    + `<line x1="30" y1="104" x2="290" y2="104" stroke="#78909C" stroke-width="2.5"/><rect x="240" y="98" width="20" height="12" rx="2" fill="#455A64"/>`
    + `<rect x="60" y="94" width="210" height="20" fill="#D7262B" opacity=".18" class="cf_hz"/>` + P(150, 190, { pose: 'point', flip: true }) + `<path d="M150,104 v-28" stroke="#D7262B" stroke-width="0"/>`
    + lbl(160, 34, 'Nunca en la línea del alambre que se tensa', '#C62828') + lbl(246, 140, 'Tensor', '#455A64')));
  D('cf_es_rollo', () => svx(ext({ gy: 150, sun: false }) + rollo(80, 186, 20) + `<rect x="58" y="164" width="44" height="6" fill="#455A64"/>` + `<path d="M100,166 Q160,160 230,170" stroke="#90A4AE" stroke-width="2" fill="none"/>`
    + `<path d="M230,170 q6,-1 8,-6" stroke="#90A4AE" stroke-width="2" fill="none"/><circle cx="236" cy="166" r="12" fill="none" stroke="#FFC107" stroke-width="3" class="cf_bl"/>` + P(270, 192, { flip: true, pose: 'point' })
    + lbl(80, 34, 'Usa devanadera', '#2E7D32') + lbl(236, 34, 'Dobla la punta', '#C62828')));
  D('cf_es_epp', () => svx(ext({ gy: 150 }) + fondoHileras(150, .4) + P(160, 192, { s: 1.3, gloves: '#8D6E63' }) + lbl(70, 52, 'Lentes', '#1F2FD6') + lbl(250, 52, 'Legionario', '#1F2FD6')
    + lbl(70, 120, 'Guantes', '#1F2FD6') + lbl(250, 120, 'Manga larga', '#1F2FD6') + lbl(160, 196 - 2, 'Zapatos de seguridad', '#1F2FD6')));
  D('cf_es_carro', () => svx(ext({ gy: 150, sun: false }) + `<g>${(window.CF_TRACTOR || (() => ''))(20, 188)}</g><rect x="160" y="150" width="110" height="10" fill="#455A64"/><circle cx="190" cy="168" r="10" fill="#263238"/><circle cx="246" cy="168" r="10" fill="#263238"/>`
    + [0, 1, 2].map(i => poste(214, 144 - i * 9, 0, 100)).join('') + P(292, 190, { flip: true, pose: 'stop' }) + no(214, 70) + `<path d="M150,154 h12" stroke="#455A64" stroke-width="4"/>`
    + lbl(160, 34, 'Nadie arriba del carro ni entre el tractor y el carro', '#C62828')));

  // ======================= 4. INVERNADEROS Y VIVERO =======================
  D('cf_in_calor', () => svx(ext({ gy: 160 }) + invernadero(40, 186, 240, 130) + `<g class="cf_hz">${[80, 130, 180, 230].map(x => `<path d="M${x},150 q6,-10 0,-20 q-6,-10 0,-20" stroke="#FF7043" stroke-width="2" fill="none"/>`).join('')}</g>`
    + termometro(270, 150) + P(150, 190, { face: 'worried' }) + lbl(150, 30, 'Adentro hace más calor que afuera', '#C62828')));
  D('cf_in_ventila', () => svx(ext({ gy: 160 }) + invernadero(30, 186, 260, 130, { abierto: true }) + `<path d="M36,150 q20,-6 40,0" stroke="#4FC3F7" stroke-width="3" fill="none" class="cf_bl"/>` + `<path d="M246,150 q20,-6 40,0" stroke="#4FC3F7" stroke-width="3" fill="none" class="cf_bl"/>`
    + estacionAgua(200, 186) + P(120, 190, { pose: 'point' }) + lbl(150, 30, 'Abre las cortinas y toma agua seguido', '#2E7D32')));
  D('cf_in_mesones', () => svx(`<rect width="320" height="200" fill="#E8F5E9"/><rect y="170" width="320" height="30" fill="#BCAAA4"/>` + [20, 170].map(x => `<rect x="${x}" y="120" width="130" height="8" fill="#90A4AE"/><rect x="${x + 6}" y="128" width="5" height="42" fill="#78909C"/><rect x="${x + 119}" y="128" width="5" height="42" fill="#78909C"/>` + [0, 1, 2, 3, 4, 5].map(i => framb(x + 12 + i * 21, 120, .22, { anim: false, fruta: false })).join('')).join('')
    + P(160, 192, { pose: 'carry' }) + `<rect x="152" y="138" width="34" height="8" fill="#455A64"/>` + lbl(160, 30, 'Pasillos libres y buena altura', '#2E7D32')));
  D('cf_in_altura', () => svx(ext({ gy: 160 }) + invernadero(40, 186, 240, 130) + rot(-20, 210, 120, P(210, 120, { face: 'worried' })) + no(250, 60)
    + `<path d="M100,40 q20,10 40,0 q20,-10 40,0" stroke="#90A4AE" stroke-width="3" fill="none" class="cf_wv"/>` + lbl(150, 26, 'Nunca te subas al arco del invernadero', '#C62828')));
  D('cf_in_viento', () => svx(ext({ gy: 160, sun: false, sky: '#B0BEC5' }) + invernadero(40, 186, 240, 130) + `<path d="M240,80 q30,-10 60,8 q-20,10 -40,4z" fill="#E3F2FD" stroke="#90A4AE" class="cf_wv"/>`
    + [0, 1, 2].map(i => `<path d="M${10 + i * 20},${50 + i * 18} q30,-8 60,0" stroke="#78909C" stroke-width="2" fill="none" class="cf_bl"/>`).join('') + P(90, 194, { pose: 'stop' }) + lbl(160, 26, 'Viento fuerte: sal y avisa', '#C62828')));
  D('cf_in_reingreso', () => svx(ext({ gy: 160 }) + invernadero(80, 186, 220, 120) + letreroAp(56, 188) + P(150, 190, { pose: 'stop' }) + no(150, 80) + lbl(170, 26, 'Respeta el letrero de reingreso', '#C62828')));
  D('cf_in_orden', () => svx(`<rect width="320" height="200" fill="#E8F5E9"/><rect y="170" width="320" height="30" fill="#BCAAA4"/>` + `<path d="M0,184 Q80,176 160,186 T320,182" stroke="#2E7D32" stroke-width="4" fill="none"/>`
    + `<ellipse cx="200" cy="186" rx="40" ry="5" fill="#4FC3F7" opacity=".6"/>` + P(110, 192, { pose: 'walk' }) + lbl(160, 30, 'Mangueras y agua en el piso: atención', '#C62828')));

  // ======================= 5. BAÑOS, ESTACIONES DE AGUA Y COMEDORES MÓVILES =======================
  D('cf_sv_bano', () => svx(ext({ gy: 150 }) + fondoHileras(150, .38) + bano(70, 192) + bano(122, 192, '#0D47A1') + lavamanos(196, 192) + P(276, 192, { flip: true, pose: 'walk' })
    + lbl(160, 30, 'Usa siempre los baños del campo', '#2E7D32')));
  D('cf_sv_manos', () => { const mano = (x, f) => `<g transform="translate(${x},0) scale(${f},1)"><path d="M-70,200 C-64,168 -56,150 -40,142 L-6,128 Q6,124 8,134 Q8,142 -2,146 L-14,152 L22,150 Q32,150 32,158 Q32,164 22,165 L-4,167 L18,170 Q26,172 25,179 Q24,184 16,184 L-6,183 L10,188 Q16,191 14,196 L12,200Z" fill="${SK}" stroke="${OL}" stroke-width="1.6"/><path d="M-60,200 L-52,170" stroke="#2B4C9B" stroke-width="20"/></g>`;
    return svx(`<rect width="320" height="200" fill="#E1F5FE"/><rect y="0" width="320" height="22" fill="#B3E5FC"/>` + `<path d="M150,0 v26 q0,10 10,10 h10" fill="none" stroke="#90A4AE" stroke-width="10" stroke-linecap="round"/><rect x="166" y="30" width="14" height="10" rx="2" fill="#78909C"/>`
    + `<g class="cf_hz"><rect x="169" y="40" width="8" height="70" rx="4" fill="#4FC3F7" opacity=".7"/></g>` + mano(118, 1) + mano(232, -1)
    + [[150, 132, 7], [172, 124, 9], [192, 138, 6], [162, 150, 8], [184, 156, 6], [140, 150, 5], [204, 126, 5]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#81D4FA" stroke-width="1.2" class="cf_pu"/>`).join('')
    + `<circle cx="276" cy="56" r="26" fill="#fff" stroke="#1F2FD6" stroke-width="3"/>${T(276, 62, '20 s', 15, '#1F2FD6')}` + lbl(70, 52, 'Agua y jabón', '#2E7D32')); });
  D('cf_sv_agua', () => svx(ext({ gy: 150, sun: false }) + fondoHileras(150, .38) + estacionAgua(60, 192) + P(170, 192, { pose: 'carry' }) + `<rect x="178" y="132" width="9" height="13" rx="1" fill="#fff" stroke="#90A4AE"/>`
    + sol(270, 40, 14) + lbl(186, 70, 'Toma agua aunque no tengas sed', '#2E7D32')));
  D('cf_sv_canal', () => svx(ext({ gy: 150, sun: false }) + `<path d="M0,170 Q160,160 320,172 V188 Q160,178 0,188Z" fill="#6D8F9F"/>` + P(150, 168, { pose: 'bend' }) + no(150, 80)
    + estacionAgua(250, 150) + lbl(150, 30, 'El agua de riego o del canal no se toma', '#C62828')));
  D('cf_sv_comedor', () => svx(ext({ gy: 150 }) + fondoHileras(150, .36) + comedor(70, 192, 180) + P(120, 190, {}) + P(200, 190, { flip: true })
    + `<rect x="138" y="152" width="14" height="6" rx="2" fill="#FFB74D"/><rect x="168" y="152" width="14" height="6" rx="2" fill="#81C784"/>` + lbl(160, 196 - 4, 'Comer solo en el comedor', '#2E7D32')));
  D('cf_sv_hilera', () => svx(ext({ gy: 150, sun: false }) + hilera(-20, 340, 186, 1.02, { paso: 130 }) + P(150, 192, {}) + `<path d="M158,124 q6,-4 10,2" stroke="#C2185B" stroke-width="3" fill="none"/>` + no(150, 60)
    + lbl(160, 30, 'No se come fruta de la mata ni en la hilera', '#C62828')));
  D('cf_sv_basura', () => svx(ext({ gy: 150 }) + comedor(10, 192, 150) + `<rect x="200" y="148" width="34" height="44" rx="3" fill="#2E7D32"/><rect x="196" y="144" width="42" height="7" rx="2" fill="#1B5E20"/>${T(217, 176, '♻', 16, '#fff')}`
    + P(270, 192, { flip: true, pose: 'point' }) + lbl(160, 30, 'Basura al contenedor, nunca al campo', '#2E7D32')));
  D('cf_sv_aviso', () => svx(ext({ gy: 150 }) + bano(40, 192) + estacionAgua(120, 192) + P(230, 192, { pose: 'point', flip: true }) + P(290, 192, { flip: true, vest: true, shirt: '#455A64' })
    + lbl(150, 30, '¿Falta agua, jabón o papel? Avisa', '#1F2FD6')));

  // ======================= REGLAS DEL HUERTO · COSECHA MECANIZADA · TALLER MECÁNICO (13-11-2026) =======================
  const ST2 = '<style>'
    + '.cf_shk{animation:cf_shk .16s linear infinite alternate}@keyframes cf_shk{from{transform:translateX(-2.2px)}to{transform:translateX(2.2px)}}'
    + '.cf_belt{stroke-dasharray:5 5;animation:cf_belt .5s linear infinite}@keyframes cf_belt{to{stroke-dashoffset:-10}}'
    + '.cf_spin{animation:cf_spin 1.1s linear infinite;transform-box:fill-box;transform-origin:center}@keyframes cf_spin{to{transform:rotate(360deg)}}'
    + '.cf_fall{animation:cf_fall 1.5s ease-in infinite}@keyframes cf_fall{0%{transform:translateY(0);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(34px);opacity:0}}'
    + '.cf_rise{animation:cf_rise 2.2s linear infinite}@keyframes cf_rise{0%{transform:translateY(0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(-92px);opacity:0}}'
    + '.cf_puff{animation:cf_puff 2.2s ease-out infinite;transform-box:fill-box;transform-origin:center}@keyframes cf_puff{0%{transform:translate(0,0) scale(.5);opacity:.75}100%{transform:translate(-12px,-30px) scale(1.7);opacity:0}}'
    + '.cf_snd{animation:cf_snd 1s ease-out infinite;transform-box:fill-box;transform-origin:left center}@keyframes cf_snd{0%{opacity:0;transform:scale(.7)}40%{opacity:.9}100%{opacity:0;transform:scale(1.25)}}'
    + '.cf_leaf{animation:cf_leaf 1.8s ease-out infinite}@keyframes cf_leaf{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-34px) rotate(160deg);opacity:0}}'
    + '.cf_drv{animation:cf_drv 7s ease-in-out infinite alternate}@keyframes cf_drv{from{transform:translateX(-26px)}to{transform:translateX(26px)}}'
    + '</style>';
  const svy = inner => sv(ST + ST2 + inner);
  const MAQ = '<g data-motor="maquina"></g>', TALLER = '<g data-motor="taller"></g>';
  // ondas de ruido (x,y) = origen, hacia la derecha (dir 1) o izquierda (-1)
  const ondas = (x, y, dir = 1, c = '#FF6F00') => [0, 1, 2].map(i => `<path class="cf_snd" style="animation-delay:${i * .3}s" d="M${x + dir * (6 + i * 8)},${y - 8 - i * 4} q${dir * (6 + i * 2)},${8 + i * 4} 0,${16 + i * 8}" stroke="${c}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`).join('');
  // cigarro encendido (x,y) = punta encendida
  const cigarro = (x, y, d = 1) => `<rect x="${d > 0 ? x - 12 : x}" y="${y - 1.6}" width="12" height="3.2" rx="1" fill="#fff" stroke="#B0BEC5" stroke-width=".5"/><rect x="${d > 0 ? x - 12 : x + 9}" y="${y - 1.6}" width="3" height="3.2" fill="#FFB74D"/><circle cx="${x}" cy="${y}" r="1.8" fill="#FF5722" class="cf_bl"/><path d="M${x},${y - 3} q-4,-6 0,-11 q4,-5 0,-10" stroke="#B0BEC5" stroke-width="1.5" fill="none" class="cf_hz"/>`;
  // letrero redondo de prohibición con ícono adentro
  const prohibido = (x, y, r, icon) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#D7262B" stroke-width="${r * .16}"/>${icon}<path d="M${f1(x - r * .7)},${f1(y - r * .7)} L${f1(x + r * .7)},${f1(y + r * .7)}" stroke="#D7262B" stroke-width="${f1(r * .16)}" stroke-linecap="round"/>`;
  // pelo largo suelto (sale bajo el legionario)
  const pelo = (x, y, s = 1, fx = 1) => { const X = x, Y = y + POSES.stand.head[1] * s; return `<path d="M${X - 10 * s * fx},${Y - 3 * s} q${-4 * s * fx},${14 * s} ${-2 * s * fx},${30 * s} q${4 * s * fx},${-2 * s} ${6 * s * fx},${-8 * s} q${2 * s * fx},${-10 * s} ${4 * s * fx},${-20 * s}z" fill="#4E342E" stroke="${OL}" stroke-width="${.6 * s}"/><path d="M${X + 9 * s * fx},${Y - 3 * s} q${3 * s * fx},${8 * s} ${1 * s * fx},${16 * s}" stroke="#4E342E" stroke-width="${3 * s}" fill="none" stroke-linecap="round"/>`; };

  // ---------- COSECHADORA DE FRAMBUESA (pasa a horcajadas sobre la hilera, como la de arándanos) · vista de lado ----------
  // (x,y) = suelo bajo la rueda trasera; ~170 px de largo y ~165 px de alto con s = 1. Avanza hacia la derecha.
  function cosechadora(x, y, s = 1, o = {}) {
    const X = v => f1(x + v * s), Y = v => f1(y - v * s), c = '#1F2FD6', c2 = '#0D1B8C';
    let g = MAQ;
    if (!o.sinMata) g += framb(x + 70 * s, y, s * 1.12, { anim: false }) + framb(x + 108 * s, y, s * 1.08, { anim: false });   // la hilera pasa por dentro
    // chasis: panel lateral con ventana (corte) para ver el interior
    g += `<path fill-rule="evenodd" d="M${X(10)},${Y(26)} V${Y(148)} H${X(160)} V${Y(26)} Z M${X(26)},${Y(36)} V${Y(132)} H${X(146)} V${Y(36)} Z" fill="${c}" stroke="${c2}" stroke-width="${1.5 * s}"/>`;
    g += `<rect x="${X(26)}" y="${Y(132)}" width="${f1(120 * s)}" height="${f1(96 * s)}" fill="none" stroke="#2FC3F5" stroke-width="${2 * s}" stroke-dasharray="${4 * s} ${3 * s}"/>`;
    // sacudidores (varillas con dedos) a ambos lados de la mata: vibran
    g += `<g class="cf_shk">` + [52, 74, 96, 118].map(v => `<line x1="${X(v)}" y1="${Y(124)}" x2="${X(v)}" y2="${Y(44)}" stroke="#FFC20E" stroke-width="${2.4 * s}"/>` + [0, 1, 2, 3, 4, 5].map(i => `<line x1="${X(v - 5)}" y1="${Y(52 + i * 13)}" x2="${X(v + 5)}" y2="${Y(52 + i * 13)}" stroke="#FFC20E" stroke-width="${1.6 * s}"/>`).join('')).join('') + `</g>`;
    // fruta que cae a las bandejas recolectoras (escamas)
    g += [[60, 0], [84, .4], [104, .8], [70, 1.1], [94, .2], [116, .6]].map(([v, d]) => `<g class="cf_fall" style="animation-delay:${d}s">${berry(x + v * s, y - 108 * s, s * .9)}</g>`).join('');
    g += [30, 50, 70, 90, 110, 130].map(v => `<path d="M${X(v)},${Y(40)} l${f1(18 * s)},${f1(-7 * s)} l${f1(2 * s)},${f1(5 * s)} l${f1(-18 * s)},${f1(7 * s)}z" fill="#ECEFF1" stroke="#78909C" stroke-width="${.7 * s}"/>`).join('');
    // correa transportadora: sube la fruta por atrás hasta las bandejas de arriba
    g += `<path d="M${X(14)},${Y(34)} L${X(2)},${Y(150)}" stroke="#263238" stroke-width="${8 * s}" stroke-linecap="round"/><path d="M${X(14)},${Y(34)} L${X(2)},${Y(150)}" stroke="#90A4AE" stroke-width="${4 * s}" class="cf_belt"/>`;
    g += [0, .55, 1.1, 1.65].map(d => `<g class="cf_rise" style="animation-delay:${d}s">${berry(x + 12 * s, y - 44 * s, s * .8)}</g>`).join('');
    // plataforma trasera con bandejas
    g += `<rect x="${X(-26)}" y="${Y(152)}" width="${f1(46 * s)}" height="${f1(5 * s)}" fill="#455A64"/><line x1="${X(-26)}" y1="${Y(152)}" x2="${X(-26)}" y2="${Y(172)}" stroke="#455A64" stroke-width="${2 * s}"/>` + pilaBandejas(x - 22 * s, y - 152 * s, 2, 34 * s);
    // cabina del operador (adelante, arriba)
    g += `<rect x="${X(110)}" y="${Y(184)}" width="${f1(48 * s)}" height="${f1(36 * s)}" rx="${4 * s}" fill="${c}" stroke="${c2}" stroke-width="${1.5 * s}"/><rect x="${X(116)}" y="${Y(180)}" width="${f1(36 * s)}" height="${f1(22 * s)}" rx="${3 * s}" fill="#B3E5FC" stroke="${c2}"/>`;
    g += `<circle cx="${X(134)}" cy="${Y(166)}" r="${f1(6 * s)}" fill="${SK}" stroke="${OL}" stroke-width="${.7 * s}"/><path d="M${X(128)},${Y(168)} q${f1(6 * s)},${f1(-9 * s)} ${f1(12 * s)},0z" fill="#F1E3C2" stroke="${OL}" stroke-width="${.6 * s}"/><rect x="${X(129)}" y="${Y(159)}" width="${f1(10 * s)}" height="${f1(7 * s)}" fill="#2B4C9B"/>`;
    // ventilador de limpieza (saca hojas)
    g += `<circle cx="${X(36)}" cy="${Y(140)}" r="${f1(9 * s)}" fill="#ECEFF1" stroke="#455A64" stroke-width="${1.2 * s}"/><g class="cf_spin"><path d="M${X(36)},${Y(140)} l${f1(7 * s)},${f1(-2 * s)} l0,${f1(4 * s)}z M${X(36)},${Y(140)} l${f1(-7 * s)},${f1(2 * s)} l0,${f1(-4 * s)}z M${X(36)},${Y(140)} l${f1(-2 * s)},${f1(-7 * s)} l${f1(4 * s)},0z M${X(36)},${Y(140)} l${f1(2 * s)},${f1(7 * s)} l${f1(-4 * s)},0z" fill="#455A64"/></g>`;
    g += [0, .6, 1.2].map(d => `<path class="cf_leaf" style="animation-delay:${d}s" d="M${X(40)},${Y(148)} q${f1(4 * s)},${f1(-4 * s)} ${f1(8 * s)},0 q${f1(-4 * s)},${f1(4 * s)} ${f1(-8 * s)},0z" fill="#43A047"/>`).join('');
    // escape con humo
    g += `<rect x="${X(100)}" y="${Y(200)}" width="${f1(5 * s)}" height="${f1(18 * s)}" fill="#37474F"/>` + [0, .7, 1.4].map(d => `<circle class="cf_puff" style="animation-delay:${d}s" cx="${X(102)}" cy="${Y(204)}" r="${f1(4 * s)}" fill="#90A4AE"/>`).join('');
    // ruedas grandes
    [30, 140].forEach(v => { g += `<circle cx="${X(v)}" cy="${Y(18)}" r="${f1(18 * s)}" fill="#263238"/><g class="cf_spin"><circle cx="${X(v)}" cy="${Y(18)}" r="${f1(9 * s)}" fill="#FFC20E" stroke="#263238" stroke-width="${1 * s}"/><path d="M${X(v - 9)},${Y(18)} H${X(v + 9)} M${X(v)},${Y(9)} V${Y(27)}" stroke="#263238" stroke-width="${2 * s}"/></g>`; });
    if (o.ruido !== false) g += ondas(x + 162 * s, y - 120 * s, 1);
    return g;
  }
  // vista de frente: la máquina "a caballo" sobre la hilera (esquema del proceso)
  function cosechadoraFrente(cx, y, s = 1) {
    const X = v => f1(cx + v * s), Y = v => f1(y - v * s), c = '#1F2FD6', c2 = '#0D1B8C';
    let g = MAQ + framb(cx, y, s * 1.25, { anim: false });
    g += `<rect x="${X(-92)}" y="${Y(160)}" width="${f1(24 * s)}" height="${f1(140 * s)}" fill="${c}" stroke="${c2}" stroke-width="1.5"/><rect x="${X(68)}" y="${Y(160)}" width="${f1(24 * s)}" height="${f1(140 * s)}" fill="${c}" stroke="${c2}" stroke-width="1.5"/>`;
    g += `<rect x="${X(-92)}" y="${Y(176)}" width="${f1(184 * s)}" height="${f1(20 * s)}" rx="3" fill="${c}" stroke="${c2}" stroke-width="1.5"/>`;
    // ruedas
    [-80, 80].forEach(v => { g += `<rect x="${X(v - 11)}" y="${Y(36)}" width="${f1(22 * s)}" height="${f1(36 * s)}" rx="${6 * s}" fill="#263238"/>`; });
    // 1) sacudidores a ambos lados
    g += `<g class="cf_shk">` + [-50, -36, 36, 50].map(v => `<line x1="${X(v)}" y1="${Y(150)}" x2="${X(v)}" y2="${Y(46)}" stroke="#FFC20E" stroke-width="2.6"/>` + [0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="${X(v)}" y1="${Y(56 + i * 14)}" x2="${X(v + (v < 0 ? 14 : -14))}" y2="${Y(56 + i * 14)}" stroke="#FFC20E" stroke-width="1.8"/>`).join('')).join('') + `</g>`;
    // 2) fruta cae a las escamas recolectoras (abajo, inclinadas hacia afuera)
    g += [[-20, 0], [14, .5], [-8, .9], [22, 1.2], [-26, .3]].map(([v, d]) => `<g class="cf_fall" style="animation-delay:${d}s">${berry(cx + v * s, y - 96 * s, s)}</g>`).join('');
    g += `<path d="M${X(-66)},${Y(38)} L${X(-6)},${Y(26)} v${f1(-4 * s)} L${X(-66)},${Y(34)}z M${X(66)},${Y(38)} L${X(6)},${Y(26)} v${f1(-4 * s)} L${X(66)},${Y(34)}z" fill="#ECEFF1" stroke="#78909C" stroke-width="1.2"/>`;
    // 3) correas que suben la fruta por los costados
    [-80, 80].forEach(v => { g += `<path d="M${X(v)},${Y(40)} V${Y(158)}" stroke="#263238" stroke-width="${9 * s}"/><path d="M${X(v)},${Y(40)} V${Y(158)}" stroke="#90A4AE" stroke-width="${4 * s}" class="cf_belt"/>` + [0, .7, 1.4].map(d => `<g class="cf_rise" style="animation-delay:${d}s">${berry(cx + v * s, y - 50 * s, s * .9)}</g>`).join(''); });
    // 4) ventiladores que botan las hojas
    [-80, 80].forEach(v => { g += `<circle cx="${X(v)}" cy="${Y(186)}" r="${f1(9 * s)}" fill="#ECEFF1" stroke="#455A64" stroke-width="1.2"/><g class="cf_spin"><path d="M${X(v)},${Y(186)} l${f1(7 * s)},${f1(-2 * s)} l0,${f1(4 * s)}z M${X(v)},${Y(186)} l${f1(-7 * s)},${f1(2 * s)} l0,${f1(-4 * s)}z M${X(v)},${Y(186)} l${f1(-2 * s)},${f1(-7 * s)} l${f1(4 * s)},0z M${X(v)},${Y(186)} l${f1(2 * s)},${f1(7 * s)} l${f1(-4 * s)},0z" fill="#455A64"/></g>` + `<path class="cf_leaf" d="M${X(v)},${Y(192)} q4,-4 8,0 q-4,4 -8,0z" fill="#43A047"/>`; });
    // 5) bandejas a los costados, arriba
    g += pilaBandejas(cx - 128 * s, y - 154 * s, 2, 34 * s) + pilaBandejas(cx + 96 * s, y - 154 * s, 2, 34 * s);
    g += `<rect x="${X(-130)}" y="${Y(154)}" width="${f1(40 * s)}" height="${f1(4 * s)}" fill="#455A64"/><rect x="${X(90)}" y="${Y(154)}" width="${f1(40 * s)}" height="${f1(4 * s)}" fill="#455A64"/>`;
    return g;
  }
  // número en círculo para los pasos del esquema
  const paso = (x, y, n, c = '#D7262B') => `<circle cx="${x}" cy="${y}" r="9" fill="${c}" stroke="#fff" stroke-width="2"/>${T(x, y + 4, String(n), 11, '#fff')}`;

  // ---------- 1) EL HUERTO: plantas más altas que tú ----------
  D('cf_hu_alto', () => svy(ext({ gy: 150 }) + hilera(-20, 340, 194, 1.05, { paso: 110, dens: 36 })
    + `<g opacity=".7">${P(226, 176, { s: .92, flip: true })}</g>` + `<g class="cf_pu"><circle cx="226" cy="64" r="15" fill="#fff" stroke="#FFC20E" stroke-width="3"/>${T(226, 70, '?', 18, '#D7262B')}</g>`
    + P(84, 198, { pose: 'point' }) + `<path d="M284,${194 - 132} V194 M276,${194 - 132} h16 M276,194 h16" stroke="#D7262B" stroke-width="3"/><path d="M302,${198 - 86} V198 M296,${198 - 86} h12" stroke="#1F2FD6" stroke-width="3"/>`
    + lbl(84, 30, 'Más alta que tú', '#1F2FD6') + lbl(226, 30, 'Al otro lado no te ven', '#C62828')));
  // ---------- 2) COFIA bajo el legionario ----------
  // la cofia se pone primero y el legionario encima
  D('cf_hu_cofia', () => svy(`<rect width="320" height="200" fill="#E3F2FD"/><rect y="182" width="320" height="18" fill="#B9A27C"/>`
    + P(62, 300, { s: 2.6, hat: false, cofia: true }) + T(122, 104, '+', 34, '#1F2FD6')
    + `<g transform="translate(160,98) scale(2.2)"><path d="M-10.6,-2 Q-11,-14.5 0,-14 Q11,-14.5 10.6,-2 Z" fill="#F1E3C2" stroke="#22303A" stroke-width=".8"/><path d="M9,-3 q8,-.5 9,2.4 l-9.5,.4z" fill="#F1E3C2" stroke="#22303A" stroke-width=".7"/><path d="M-10,-3 q-3,9 -1,15 l6,-1 q-2,-6 1,-13z" fill="#F1E3C2" stroke="#22303A" stroke-width=".6"/></g>`
    + T(204, 104, '=', 34, '#1F2FD6') + P(262, 300, { s: 2.6 }) + ok(296, 30, 13)
    + lbl(66, 168, '1. Cofia primero', '#2E7D32') + lbl(262, 168, '2. Legionario encima', '#2E7D32')));
  D('cf_hu_pelo', () => svy(`<rect width="320" height="200" fill="#E3F2FD"/><rect y="182" width="320" height="18" fill="#B9A27C"/>`
    + P(86, 280, { s: 2.3 }) + ok(140, 40, 14) + P(236, 280, { s: 2.3, cofiaCampo: false }) + pelo(236, 280, 2.3, 1) + no(290, 40, 14)
    + lbl(86, 184, 'Con cofia', '#2E7D32') + lbl(236, 184, 'Pelo suelto', '#C62828')));
  // ---------- 3) SIN JOYAS ----------
  const anillo = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="none" stroke="#FBC02D" stroke-width="5"/><path d="M${x - 6},${y - 15} l6,-8 l6,8z" fill="#4FC3F7" stroke="#0288D1"/>`;
  const pulsera = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="10" fill="none" stroke="#B0BEC5" stroke-width="4"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<circle cx="${f1(x + 18 * Math.cos(i * .785))}" cy="${f1(y + 10 * Math.sin(i * .785))}" r="2.6" fill="#E91E63"/>`).join('')}`;
  const reloj = (x, y) => `<rect x="${x - 6}" y="${y - 24}" width="12" height="48" rx="3" fill="#5D4037"/><circle cx="${x}" cy="${y}" r="12" fill="#fff" stroke="#455A64" stroke-width="3"/><path d="M${x},${y} v-7 M${x},${y} h5" stroke="#263238" stroke-width="2" stroke-linecap="round"/>`;
  const aros = (x, y) => `<path d="M${x - 9},${y - 14} q-6,8 0,18 q6,-10 0,-18z" fill="none" stroke="#FBC02D" stroke-width="3"/><circle cx="${x - 9}" cy="${y + 8}" r="4" fill="#FBC02D"/><path d="M${x + 9},${y - 14} q-6,8 0,18 q6,-10 0,-18z" fill="none" stroke="#FBC02D" stroke-width="3"/><circle cx="${x + 9}" cy="${y + 8}" r="4" fill="#FBC02D"/>`;
  const collar = (x, y) => `<path d="M${x - 18},${y - 14} Q${x},${y + 18} ${x + 18},${y - 14}" fill="none" stroke="#FBC02D" stroke-width="3" stroke-dasharray="2 2.5"/><path d="M${x - 5},${y + 2} h10 l-5,9z" fill="#E91E63"/>`;
  D('cf_hu_joyas', () => svy(`<rect width="320" height="200" fill="#FFF8E1"/>` + [[anillo, 'Anillos'], [pulsera, 'Pulseras'], [reloj, 'Reloj'], [aros, 'Aros'], [collar, 'Collares']].map(([f, n], i) => { const x = 34 + i * 63, y = 92; return `<rect x="${x - 28}" y="${y - 40}" width="56" height="84" rx="10" fill="#fff" stroke="#FFCC80" stroke-width="2"/>` + f(x, y - 6) + `<g class="cf_pu" style="animation-delay:${i * .25}s">${no(x + 20, y - 32, 10)}</g>` + T(x, y + 36, n, 10, '#263238'); }).join('')
    + lbl(160, 28, 'En el huerto: sin joyas', '#C62828') + lbl(160, 172, 'Se enganchan y pueden caer a la fruta', '#455A64')));
  D('cf_hu_enganche', () => svy(ext({ gy: 150, sun: false }) + hilera(-20, 340, 196, 1.05, { paso: 130 }) + P(110, 198, { pose: 'point', face: 'pain' }) + no(110, 60)
    + `<circle cx="140" cy="140" r="5" fill="none" stroke="#FBC02D" stroke-width="2.4"/><circle cx="140" cy="140" r="14" fill="none" stroke="#D7262B" stroke-width="3" class="cf_bl"/>` + P(236, 198, { pose: 'carry', flip: true }) + ok(236, 60)
    + lbl(96, 30, 'Anillo enganchado', '#C62828') + lbl(240, 30, 'Sin joyas', '#2E7D32')));
  // ---------- 4) COMEDOR MÓVIL ----------
  D('cf_hu_comedor', () => svy(ext({ gy: 150 }) + fondoHileras(150, .36) + comedor(40, 194, 150) + `<g class="cf_dr">${drop(203, 162, .3, '#4FC3F7')}</g>` + basurero(222, 194) + bano(258, 194)
    + lbl(68, 22, 'Sombra', '#1F2FD6') + arrow(68, 32, 78, 76, '#1F2FD6', 2) + lbl(150, 22, 'Agua potable', '#0277BD') + arrow(160, 32, 166, 122, '#0277BD', 2)
    + lbl(108, 186, 'Toalla de papel', '#455A64') + arrow(150, 178, 172, 150, '#455A64', 2) + lbl(222, 58, 'Basurero', '#2E7D32') + arrow(222, 68, 222, 148, '#2E7D32', 2) + lbl(284, 22, 'Baño', '#1565C0')));
  D('cf_hu_comer', () => svy(ext({ gy: 150 }) + fondoHileras(150, .36) + comedor(30, 194, 150) + P(96, 172, {}) + P(134, 172, { flip: true })
    + `<rect x="104" y="134" width="12" height="5" rx="2" fill="#FFB74D"/><rect x="118" y="134" width="12" height="5" rx="2" fill="#81C784"/>` + basurero(214, 194) + P(268, 194, { pose: 'point', flip: true })
    + lbl(160, 196 - 2, 'Se come solo en el comedor móvil', '#2E7D32')));
  // ---------- 5) BASURA EN SU LUGAR ----------
  D('cf_hu_basura', () => svy(ext({ gy: 150 }) + hilera(150, 340, 192, .95, { paso: 120 }) + basurero(70, 194, 1.2) + P(120, 194, { pose: 'point', flip: true })
    + `<g class="cf_fall"><path d="M84,124 l-4,10 h8z" fill="#81D4FA" stroke="#0277BD"/></g>` + ok(70, 70)
    + `<g><path d="M232,190 l10,-3 l4,6 l-11,3z" fill="#81D4FA" stroke="#0277BD"/><path d="M256,192 l14,-2 l-2,5 l-12,1z" fill="#FFB74D" stroke="#E65100"/><circle cx="214" cy="190" r="3" fill="#ECEFF1" stroke="#90A4AE"/></g><circle cx="244" cy="188" r="26" fill="none" stroke="#D7262B" stroke-width="3" class="cf_bl"/>` + no(272, 154, 11)
    + lbl(80, 30, 'Al basurero', '#2E7D32') + lbl(244, 30, 'Nunca en la hilera', '#C62828')));
  // ---------- 6) NO SE FUMA ----------
  const icoCig = (x, y, r) => `<rect x="${f1(x - r * .6)}" y="${f1(y - r * .12)}" width="${f1(r * 1.0)}" height="${f1(r * .24)}" fill="#fff" stroke="#263238" stroke-width="1"/><rect x="${f1(x + r * .4)}" y="${f1(y - r * .12)}" width="${f1(r * .2)}" height="${f1(r * .24)}" fill="#FF7043"/>`;
  D('cf_hu_fumar', () => svy(ext({ gy: 150 }) + hilera(-20, 340, 194, 1.0, { paso: 120 }) + P(110, 198, {}) + cigarro(122, 125) + no(110, 62)
    + `<rect x="236" y="120" width="5" height="78" fill="#6D4C41"/>` + prohibido(238, 92, 32, icoCig(238, 92, 32)) + lbl(110, 30, 'Se fuma fuera del huerto', '#C62828') + lbl(238, 30, 'Prohibido fumar', '#C62828')));
  // ---------- 7) RUIDO DE MÁQUINAS Y TRACTORES ----------
  D('cf_hu_ruido', () => svy(ext({ gy: 150 }) + fondoHileras(150, .38) + `<g class="cf_drv">${(window.CF_TRACTOR || (() => ''))(30, 190)}</g>` + ondas(150, 120, 1)
    + P(258, 194, { pose: 'stop', flip: true }) + `<path d="M246,118 L130,120" stroke="#2E7D32" stroke-width="2" stroke-dasharray="5 4"/>`
    + lbl(96, 30, 'Las máquinas meten ruido', '#E65100') + lbl(250, 60, 'Mira al operador', '#2E7D32')));

  // ---------- COSECHA MECANIZADA ----------
  D('cf_me_maquina', () => svy(ext({ gy: 150 }) + fondoHileras(150, .36) + `<g class="cf_drv">${cosechadora(70, 194, .9)}</g>` + lbl(160, 18, 'La cosechadora pasa por encima de la hilera', '#1F2FD6')));
  D('cf_me_esquema', () => svy(`<rect width="320" height="200" fill="#E3F2FD"/><rect y="186" width="320" height="14" fill="#B9A27C"/>` + cosechadoraFrente(160, 194, .9)
    + paso(160, 50, 1) + paso(160, 166, 2) + paso(106, 120, 3) + paso(214, 120, 3) + paso(74, 16, 4, '#1F2FD6') + paso(246, 16, 4, '#1F2FD6') + paso(46, 46, 5, '#2E7D32') + paso(274, 46, 5, '#2E7D32')));
  D('cf_me_zona', () => svy(ext({ gy: 150 }) + fondoHileras(150, .36) + `<ellipse cx="148" cy="186" rx="118" ry="13" fill="#D7262B" opacity=".25" class="cf_hz"/>` + cosechadora(80, 190, .66, { ruido: false })
    + P(232, 196, { pose: 'walk', face: 'worried', flip: true }) + no(232, 104, 11) + P(298, 196, { pose: 'stop', flip: true }) + ok(298, 104, 11)
    + lbl(130, 26, 'Zona de peligro: nadie adentro', '#C62828')));
  D('cf_me_ruido', () => svy(ext({ gy: 150 }) + fondoHileras(150, .36) + cosechadora(34, 194, .78) + P(260, 194, { pose: 'stop', flip: true })
    + `<path d="M250,118 L146,66" stroke="#2E7D32" stroke-width="2" stroke-dasharray="5 4"/><circle cx="294" cy="84" r="20" fill="#fff" stroke="#2E7D32" stroke-width="3"/>${T(294, 82, 'OK', 11, '#2E7D32')}${T(294, 93, 'seña', 8, '#2E7D32', 'normal')}`
    + lbl(110, 22, 'No te escucha: busca su mirada', '#E65100')));
  D('cf_me_manos', () => svy(`<rect width="320" height="200" fill="#ECEFF1"/>` + `<rect x="40" y="30" width="150" height="150" rx="6" fill="#1F2FD6" opacity=".12"/>`
    + `<g class="cf_shk">${[70, 100, 130, 160].map(v => `<line x1="${v}" y1="36" x2="${v}" y2="176" stroke="#FFC20E" stroke-width="4"/>` + [0, 1, 2, 3, 4, 5].map(i => `<line x1="${v - 8}" y1="${48 + i * 24}" x2="${v + 8}" y2="${48 + i * 24}" stroke="#FFC20E" stroke-width="2.6"/>`).join('')).join('')}</g>`
    + `<rect x="236" y="98" width="84" height="34" rx="6" fill="#2B4C9B" stroke="${OL}" stroke-width="2"/><path d="M238,104 h-40 q-8,0 -8,8 v8 q0,8 8,8 h40z" fill="${SK}" stroke="${OL}" stroke-width="2"/>`
    + [0, 1, 2, 3].map(i => `<rect x="${166 + (i === 0 ? 8 : 0)}" y="${101 + i * 7}" width="${i === 0 ? 24 : 30}" height="6" rx="3" fill="${SK}" stroke="${OL}" stroke-width="1.5"/>`).join('')
    + `<circle cx="180" cy="115" r="24" fill="none" stroke="#D7262B" stroke-width="3" class="cf_bl"/>` + no(232, 74, 14) + MAQ
    + lbl(160, 194 - 4, 'Nunca metas la mano con la máquina andando', '#C62828')));
  D('cf_me_avisa', () => svy(`<style>.cf_p1,.cf_p2,.cf_p3{animation:cf_pq 6s infinite}.cf_p2{animation-delay:2s}.cf_p3{animation-delay:4s}@keyframes cf_pq{0%,30%{opacity:1}36%,94%{opacity:.28}100%{opacity:1}}</style>`
    + `<rect width="320" height="200" fill="#ECEFF1"/>` + MAQ
    + `<g class="cf_p1"><rect x="6" y="30" width="98" height="150" rx="10" fill="#fff" stroke="#D7262B" stroke-width="2.5"/>${T(55, 50, '1. Lo veo', 11, '#D7262B')}`
    + `<g class="cf_shk">${[30, 46, 62, 78].map(v => `<line x1="${v}" y1="62" x2="${v}" y2="132" stroke="#FFC20E" stroke-width="3"/>`).join('')}</g><path d="M38,98 l22,-14" stroke="#6D4C41" stroke-width="4" stroke-linecap="round"/>`
    + `<circle cx="55" cy="96" r="22" fill="none" stroke="#D7262B" stroke-width="2.5" class="cf_bl"/>${T(55, 154, 'Algo trabado', 9, '#263238', 'normal')}${T(55, 168, 'NO lo toco', 10, '#D7262B')}</g>`
    + `<g class="cf_p2"><rect x="111" y="30" width="98" height="150" rx="10" fill="#fff" stroke="#E65100" stroke-width="2.5"/>${T(160, 50, '2. Aviso', 11, '#E65100')}`
    + W(140, 160, { pose: 'stop', s: .8 }) + `<path d="M168,70 h34 a6,6 0 0 1 6,6 v18 a6,6 0 0 1 -6,6 h-22 l-8,8 v-8 h-4 a6,6 0 0 1 -6,-6 v-18 a6,6 0 0 1 6,-6z" fill="#FFF3E0" stroke="#E65100"/>${T(186, 89, '¡Pare!', 10, '#E65100')}`
    + `${T(160, 175, 'al operador', 9, '#263238', 'normal')}</g>`
    + `<g class="cf_p3"><rect x="216" y="30" width="98" height="150" rx="10" fill="#fff" stroke="#2E7D32" stroke-width="2.5"/>${T(265, 50, '3. Detiene', 11, '#2E7D32')}`
    + `<rect x="236" y="66" width="58" height="40" rx="5" fill="#1F2FD6"/><circle cx="252" cy="86" r="9" fill="#D7262B" stroke="#fff" stroke-width="2"/><rect x="266" y="78" width="20" height="16" rx="2" fill="#FFC20E" stroke="#263238"/><path d="M270,78 v-5 q6,-7 12,0 v5" stroke="#455A64" stroke-width="2.4" fill="none"/>`
    + `${T(265, 128, 'Apaga, bloquea', 9, '#263238', 'normal')}${T(265, 142, 'y recién ahí', 9, '#263238', 'normal')}${T(265, 158, 'se arregla', 10, '#2E7D32')}</g>`
    + lbl(160, 194 - 2, 'Partes en movimiento: se miran, no se tocan', '#C62828')));
  D('cf_me_subir', () => svy(ext({ gy: 150 }) + fondoHileras(150, .36) + cosechadora(50, 194, .82, { ruido: false })
    + `<path d="M58,190 v-60 M68,190 v-60 M58,176 h10 M58,162 h10 M58,148 h10" stroke="#455A64" stroke-width="2.4"/>` + rot(-14, 60, 170, P(60, 170, { pose: 'stop', face: 'worried' })) + no(30, 100, 12)
    + P(270, 194, { pose: 'stop', flip: true }) + ok(270, 104, 12) + lbl(160, 22, 'Solo sube el personal autorizado', '#C62828')));

  // ---------- TALLER MECÁNICO (inducción) ----------
  const tallerEdif = (o = {}) => `<path d="M14,186 V74 L120,40 L226,74 V186Z" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><path d="M8,76 L120,36 L232,76" stroke="#455A64" stroke-width="6" fill="none" stroke-linecap="round"/>`
    + `<rect x="40" y="96" width="160" height="90" fill="#37474F"/><rect x="34" y="62" width="172" height="24" rx="3" fill="#1F2FD6"/>${T(120, 79, 'TALLER MECÁNICO', 13, '#fff')}`
    + (o.dentro !== false ? `<rect x="54" y="150" width="58" height="6" fill="#8D6E63"/><rect x="58" y="156" width="4" height="30" fill="#6D4C41"/><rect x="104" y="156" width="4" height="30" fill="#6D4C41"/>`
      + `<circle cx="160" cy="166" r="18" fill="#263238"/><circle cx="160" cy="166" r="8" fill="#FFC20E"/>`
      + W(84, 186, { pose: 'bend', shirt: '#455A64', pants: '#455A64', hat: false, cofiaCampo: false, glasses: true })
      + `<g class="cf_bl">${[0, 1, 2, 3, 4, 5].map(i => `<path d="M128,150 l${f1(10 * Math.cos(i))},${f1(-10 * Math.sin(i) - 4)}" stroke="#FFEB3B" stroke-width="2"/>`).join('')}</g>`  + TALLER
      + `<rect x="176" y="120" width="18" height="30" fill="#546E7A"/><circle cx="185" cy="116" r="11" fill="#90A4AE" stroke="#263238" stroke-width="1.5"/><g class="cf_spin"><path d="M185,107 V125 M176,116 H194" stroke="#263238" stroke-width="2"/></g>`
      + [0, .3, .6].map(d => `<g class="cf_fall" style="animation-delay:${d}s">${[0, 1, 2].map(i => `<circle cx="${178 - i * 5}" cy="${118 + i * 3}" r="1.6" fill="#FFC107"/>`).join('')}</g>`).join('')
      + `<g class="cf_sw" style="transform-origin:150px 96px"><line x1="150" y1="96" x2="150" y2="132" stroke="#455A64" stroke-width="2" stroke-dasharray="3 2"/><path d="M144,132 h12 l-3,8 h-6z" fill="#FFC20E" stroke="#263238"/></g>` : '');
  const letreroAut = (x, y) => `<rect x="${x - 3}" y="${y - 96}" width="6" height="96" fill="#6D4C41"/><rect x="${x - 40}" y="${y - 140}" width="80" height="58" rx="5" fill="#fff" stroke="#D7262B" stroke-width="3"/><circle cx="${x}" cy="${y - 124}" r="10" fill="#D7262B"/><rect x="${x - 6}" y="${y - 126}" width="12" height="4" fill="#fff"/>${T(x, y - 101, 'SOLO PERSONAL', 8.5, '#D7262B')}${T(x, y - 90, 'AUTORIZADO', 9.5, '#D7262B')}`;
  D('cf_ta_taller', () => svy(ext({ gy: 150, sun: false }) + tallerEdif() + letreroAut(262, 194) + P(296, 196, { pose: 'stop', flip: true, s: .95 })));
  D('cf_ta_no', () => svy(ext({ gy: 150, sun: false }) + tallerEdif() + P(120, 196, { pose: 'walk' }) + no(120, 100, 13) + letreroAut(266, 194) + lbl(120, 24, 'No entres si no te corresponde', '#C62828')));
  D('cf_ta_equipo', () => svy(ext({ gy: 150, sun: false }) + TALLER + `<g>${(window.CF_TRACTOR || (() => ''))(40, 190)}</g>`
    + `<rect x="200" y="96" width="70" height="44" rx="4" fill="#FFC20E" stroke="#263238" stroke-width="1.5"/>${T(235, 114, 'EN', 10, '#263238')}${T(235, 128, 'MANTENCIÓN', 9, '#263238')}<path d="M200,118 L150,128" stroke="#263238" stroke-width="1.5"/>`
    + `<rect x="139" y="122" width="16" height="14" rx="2" fill="#D7262B"/><path d="M142,122 v-6 q5,-7 10,0 v6" stroke="#455A64" stroke-width="2.5" fill="none"/>` + P(286, 196, { pose: 'stop', flip: true }) + lbl(150, 26, 'Con tarjeta y candado: no se usa', '#C62828')));

  // alias para la inducción (si_in_<ítem> y si_in_<ítem>_q)
  S.si_in_cofia = S.cf_hu_cofia; S.si_in_cofia_q = S.cf_hu_pelo;
  S.si_in_comedor = S.cf_hu_comedor; S.si_in_comedor_q = S.cf_hu_comer;
  S.si_in_mecanizada = S.cf_me_maquina; S.si_in_mecanizada_q = S.cf_me_zona;
  S.si_in_taller = S.cf_ta_taller; S.si_in_taller_q = S.cf_ta_no;
  window.CF_COSECHADORA = cosechadora;

  // ---------- MOVIMIENTO, HUMO Y SONIDO (tractores, cosechadora y taller) · respeta el botón de silencio ----------
  (function () {
    // 1) motor en marcha: los tractores vibran un poco y tiran humito por el escape
    const css = document.createElement('style');
    css.textContent = 'g[data-motor="1"]{animation:cf_idle .11s linear infinite alternate}@keyframes cf_idle{from{transform:translateY(0)}to{transform:translateY(.7px)}}'
      + '.cf_hm{animation:cf_hm 2.1s ease-out infinite;transform-box:fill-box;transform-origin:center}@keyframes cf_hm{0%{transform:translate(0,0) scale(.4);opacity:.85}100%{transform:translate(-14px,-34px) scale(1.9);opacity:0}}'
      + '@media (prefers-reduced-motion: reduce){g[data-motor="1"],.cf_hm{animation:none}}';
    (document.head || document.documentElement).appendChild(css);
    const humo = root => {
      (root || document).querySelectorAll('g[data-motor="1"]:not([data-humo])').forEach(g => {
        try {
          const bb = g.getBBox(); if (!bb || bb.width < 20) return;
          const f = g.getAttribute('data-flip'), x = f ? bb.x + bb.width * .2 : bb.x + bb.width * .8, y = bb.y + bb.height * .32, k = Math.max(.6, Math.min(1.4, bb.width / 130));
          g.setAttribute('data-humo', '1');
          g.insertAdjacentHTML('beforeend', [0, .7, 1.4].map(d => `<circle class="cf_hm" style="animation-delay:${d}s" cx="${x.toFixed(1)}" cy="${(y - 4 * k).toFixed(1)}" r="${(4 * k).toFixed(1)}" fill="#9EA7AD"/>`).join(''));
        } catch (e) {}
      });
    };
    window.CF_HUMO = humo;
    // 2) sonidos sintetizados (sin archivos)
    let ctx = null, last = null;
    const muted = () => { try { return typeof SFX !== 'undefined' ? SFX.muted : false; } catch (e) { return false; } };
    const AC = () => { if (!ctx) { const A = window.AudioContext || window.webkitAudioContext; if (!A) return null; ctx = new A(); } if (ctx.state === 'suspended') ctx.resume(); return ctx; };
    const ruidoBlanco = (c, dur) => { const n = Math.floor(c.sampleRate * dur), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; const s = c.createBufferSource(); s.buffer = b; return s; };
    const salida = (c, t, dur, vol) => { const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .3); g.gain.setValueAtTime(vol, t + dur - .5); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); g.connect(c.destination); return g; };
    const diesel = (c, t, dur, out, f0 = 34, f1 = 58) => {   // motor diésel: golpeteo grave
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380; lp.connect(out);
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + .8); o.frequency.exponentialRampToValueAtTime(f1 * .85, t + dur);
      const am = c.createGain(); am.gain.value = .55; const lfo = c.createOscillator(); lfo.frequency.value = 9; const lg = c.createGain(); lg.gain.value = .45; lfo.connect(lg).connect(am.gain); o.connect(am).connect(lp);
      const sq = c.createOscillator(); sq.type = 'square'; sq.frequency.setValueAtTime(f0 / 2, t); sq.frequency.exponentialRampToValueAtTime(f1 / 2, t + .8); const sg = c.createGain(); sg.gain.value = .3; sq.connect(sg).connect(lp);
      const n = ruidoBlanco(c, dur), nf = c.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 260; const ng = c.createGain(); ng.gain.value = .35; n.connect(nf).connect(ng).connect(out);
      [o, lfo, sq, n].forEach(z => { z.start(t); z.stop(t + dur + .05); });
    };
    const sonidos = {
      tractor: () => { const c = AC(); if (!c) return; const t = c.currentTime, dur = 3; diesel(c, t, dur, salida(c, t, dur, .24)); },
      maquina: () => {   // cosechadora: motor + traqueteo de los sacudidores + zumbido de correas
        const c = AC(); if (!c) return; const t = c.currentTime, dur = 3.4, out = salida(c, t, dur, .22); diesel(c, t, dur, out, 40, 64);
        const n = ruidoBlanco(c, dur), bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 1.2;
        const g = c.createGain(); g.gain.value = 0; const lfo = c.createOscillator(); lfo.type = 'square'; lfo.frequency.value = 13; const lg = c.createGain(); lg.gain.value = .22; lfo.connect(lg).connect(g.gain);
        n.connect(bp).connect(g).connect(out);
        const hum = c.createOscillator(); hum.type = 'triangle'; hum.frequency.value = 220; const hg = c.createGain(); hg.gain.value = .05; hum.connect(hg).connect(out);
        [n, lfo, hum].forEach(z => { z.start(t); z.stop(t + dur + .05); });
      },
      taller: () => {   // taller: esmeril, golpes de martillo y pistola de impacto
        const c = AC(); if (!c) return; const t = c.currentTime, dur = 3.4, out = salida(c, t, dur, .2);
        const es = c.createOscillator(); es.type = 'sawtooth'; es.frequency.setValueAtTime(900, t); es.frequency.linearRampToValueAtTime(2600, t + .6); const eg = c.createGain(); eg.gain.setValueAtTime(.0001, t); eg.gain.exponentialRampToValueAtTime(.12, t + .3); eg.gain.setValueAtTime(.12, t + 1.5); eg.gain.exponentialRampToValueAtTime(.0001, t + 1.8);
        const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 700; es.connect(eg).connect(hp).connect(out);
        const ch = ruidoBlanco(c, 1.8), cf = c.createBiquadFilter(); cf.type = 'highpass'; cf.frequency.value = 3500; const cg = c.createGain(); cg.gain.value = .18; ch.connect(cf).connect(cg).connect(out); ch.start(t); ch.stop(t + 1.8);
        [2.0, 2.35, 2.7].forEach(h => { const o = c.createOscillator(); o.type = 'square'; o.frequency.setValueAtTime(1400, t + h); o.frequency.exponentialRampToValueAtTime(500, t + h + .08); const g = c.createGain(); g.gain.setValueAtTime(.3, t + h); g.gain.exponentialRampToValueAtTime(.0001, t + h + .15); o.connect(g).connect(out); o.start(t + h); o.stop(t + h + .2); });
        for (let i = 0; i < 6; i++) { const h = 1.85 + i * .05; const n = ruidoBlanco(c, .04), g = c.createGain(); g.gain.value = .25; n.connect(g).connect(out); n.start(t + h); }
        es.start(t); es.stop(t + 1.9);
      }
    };
    const tocar = k => { if (muted() || !sonidos[k]) return; try { sonidos[k](); } catch (e) {} };
    const revisar = () => {
      humo(document);
      const c = document.getElementById('lCard'); if (!c) return;
      const scr = document.getElementById('s-learn'); if (scr && !scr.classList.contains('on')) { last = null; return; }
      const fe = c.firstElementChild; if (!fe || fe === last) return; last = fe;   // una vez por lámina
      const m = c.querySelector('[data-motor]'); if (!m) return;
      const v = m.getAttribute('data-motor'); tocar(v === 'maquina' ? 'maquina' : v === 'taller' ? 'taller' : 'tractor');
    };
    let pend = 0;
    const ini = () => { new MutationObserver(() => { if (pend) return; pend = setTimeout(() => { pend = 0; revisar(); }, 80); }).observe(document.body, { childList: true, subtree: true }); revisar(); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ini); else ini();
  })();

  // ============ portadas pequeñas ============
  window.CF = { framb, hilera, fondoHileras, bandeja, pilaBandejas, carro, cintura, estacionAgua, bano, lavamanos, comedor, invernadero, berry };

  // ======================= CHARLAS =======================
  const TODAS = ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'];

  SI_CONT.temas.push({
    id: 'cf_cosecha', sec: 'campo', emp: TODAS, title: 'Cosecha segura de frambuesa', thumb: 'cf_co_hilera', mins: 15,
    learn: [
      { s: 'cf_co_hilera', t: 'Así se cosecha la frambuesa en el Fundo Santa Sara', x: 'La frambuesa se cosecha <b>a mano</b>, mata por mata, entre hileras con <b>espaldera</b> (postes y alambres). Es una fruta delicada y se trabaja muchas horas al sol.<ul><li>EPP de cosecha: <b>legionario con cubrenuca</b>, <b>ropa de manga larga</b>, <b>lentes de seguridad</b> y <b>zapatos de seguridad</b>.</li><li>Bloqueador antes de salir y cada 2 horas.</li><li>La bandeja va a la cintura, para tener las dos manos libres.</li></ul>' },
      { s: 'cf_co_postura', t: 'Cuida tu espalda: la fruta de abajo', x: 'La fruta de las ramas bajas obliga a <b>doblar la espalda</b>. Hacerlo muchas horas provoca lumbago y lesiones.<ul><li>Para lo de abajo, <b>dobla las rodillas</b> (agáchate) con la espalda recta, o apoya una rodilla.</li><li><b>Cambia de postura</b> seguido: de pie, agachado, de pie.</li><li>No gires el tronco con la bandeja llena: <b>mueve los pies</b>.</li></ul>', k: 'Para la fruta de abajo, dobla las rodillas, no la espalda.' },
      { s: 'cf_co_bandejas', t: 'Traslado de bandejas', x: '<ul><li>Lleva a la mano <b>pocas bandejas</b>: una pila alta <b>tapa la vista</b> del suelo y pesa más de lo que parece.</li><li>Usa el <b>carro de cosecha</b> para llevar las bandejas al punto de entrega.</li><li>Levanta con las piernas, con la carga <b>pegada al cuerpo</b>.</li><li>La ley fija un máximo de <b>25 kg</b> por persona sin ayuda mecánica (20 kg para mujeres y menores de 18 años).</li></ul>' },
      { s: 'cf_co_alambre', t: 'Alambres y cañas a la altura de la cara', x: 'En la espaldera hay <b>alambres</b> y <b>puntas de cañas</b> justo a la altura de los ojos.<ul><li>Usa siempre tus <b>lentes de seguridad</b>.</li><li>Avanza <b>mirando hacia adelante</b>, sin correr entre hileras.</li><li>Aparta las cañas con la mano y <b>suéltalas despacio</b>: el compañero que viene detrás puede recibir el latigazo.</li><li>Alambre suelto o cortado: <b>avisa</b> para que lo reparen.</li></ul>' },
      { s: 'cf_co_insectos', t: 'Abejas, avispas y arañas en las matas', x: 'Entre las hojas puede haber <b>abejas, avispas o arañas</b>, sobre todo cuando hay fruta madura.<ul><li><b>Mira antes de meter la mano</b> en la mata.</li><li>No aplastes ni espantes a manotazos: aléjate con calma.</li><li>Si ves un <b>nido de avispas</b>, no lo toques y avisa a tu jefatura.</li><li>Si eres <b>alérgico</b> a las picaduras, avísalo antes de empezar.</li></ul>' },
      { s: 'cf_co_inocuidad', t: 'Higiene: la fruta va directo a la mesa', x: 'La frambuesa <b>no se lava</b> antes de comerse: tus manos son lo último que la toca.<ul><li><b>Lávate las manos</b> con agua y jabón antes de cosechar, después de ir al baño y después de comer.</li><li>Uñas cortas y sin anillos ni pulseras.</li><li>Usa <b>solo los baños</b> del campo, nunca la hilera.</li><li>Si estás con diarrea, vómitos o una herida en las manos, <b>avisa</b> a tu jefatura.</li></ul>' },
      { s: 'cf_co_suelo', t: 'Lo que no va a la bandeja', x: '<ul><li>La fruta que <b>cayó al suelo</b> no va a la bandeja: se descarta donde te indiquen.</li><li>No pongas las bandejas <b>directo en la tierra</b>.</li><li>No comas fruta en la hilera: además de la higiene, puede tener restos de una aplicación.</li><li>Ramas, hojas o insectos fuera de la bandeja.</li></ul>' },
      { s: 'cf_co_pausa', t: 'Trabajo repetitivo: pausas y avisar a tiempo', x: 'Cosechar es un <b>movimiento repetitivo</b> de dedos, muñecas y hombros durante horas.<ul><li>Haz las <b>pausas activas</b>: estira dedos, muñecas, brazos y espalda.</li><li><b>Alterna las manos</b> cuando puedas.</li><li>Si sientes <b>dolor, hormigueo o adormecimiento</b> que no se pasa, avisa a tu jefatura: se evalúa en {LAMUT}.</li></ul>' }
    ],
    quiz: [
      { s: 'cf_co_hilera', v: [
        { q: '¿Qué EPP usas para cosechar frambuesa en el fundo?', o: ['Legionario, manga larga, lentes y zapatos de seguridad', 'Jockey y polera de manga corta, por el calor', 'Solo bloqueador, porque la fruta es liviana', 'Sandalias y sombrero, para andar más fresco'], w: 'En el campo: legionario con cubrenuca, manga larga, lentes de seguridad y zapatos de seguridad, más bloqueador.' },
        { q: '¿Por qué la bandeja de cosecha va a la cintura?', o: ['Para tener las dos manos libres y no doblarse a dejarla', 'Porque así cabe más fruta en la bandeja', 'Para que el supervisor cuente las bandejas', 'Para protegerse la cintura del sol'], w: 'Con la bandeja a la cintura cosechas con las dos manos y no te agachas a cada rato a dejarla en el suelo.' },
        { q: 'La cosecha de frambuesa se hace muchas horas al sol. ¿Cada cuánto repites el bloqueador?', o: ['Cada 2 horas', 'Una vez al día, en la mañana', 'Solo si el día está despejado', 'Nunca, el legionario basta'], w: 'El bloqueador pierde efecto con el sudor y el tiempo: se repite cada 2 horas.' }] },
      { s: 'cf_co_postura', v: [
        { q: 'Tienes que cosechar la fruta de las ramas bajas. ¿Cómo lo haces?', o: ['Doblo las rodillas con la espalda recta', 'Doblo la espalda y estiro las piernas', 'Me quedo de pie y estiro el brazo', 'Me siento en la bandeja para estar más cómodo'], w: 'Doblando las rodillas y con la espalda recta cuidas tu columna.' },
        { q: 'Con la bandeja llena, necesitas alcanzar fruta que está a tu lado. ¿Qué haces?', o: ['Muevo los pies hacia la fruta', 'Giro el tronco sin mover los pies', 'Me estiro hacia el lado con un brazo', 'Dejo esa fruta para el compañero'], w: 'Girar el tronco con carga daña la espalda. Se mueven los pies.' },
        { q: 'Doblar la espalda durante horas para cosechar no tiene consecuencias si eres joven.', vf: false, w: 'Falso. A cualquier edad provoca lumbago y lesiones. Agáchate doblando las rodillas y cambia de postura seguido.' }] },
      { s: 'cf_co_bandejas', v: [
        { q: 'Tienes muchas bandejas llenas para llevar al punto de entrega. ¿Qué haces?', o: ['Uso el carro de cosecha', 'Las apilo alto y las llevo todas de una vez', 'Las llevo arrastrando por el suelo', 'Le pido a un compañero que las lleve sobre la cabeza'], w: 'El carro evita cargas pesadas y pilas que tapan la vista.' },
        { q: '¿Qué problema tiene llevar una pila alta de bandejas en los brazos?', o: ['Tapa la vista del suelo y pesa más de lo que parece', 'Ninguno, si se hace rápido', 'Solo que se puede caer fruta', 'Que se ensucia la ropa'], w: 'Sin ver el suelo tropiezas, y el peso se acumula.' },
        { q: 'Según la ley, ¿cuál es el peso máximo que un hombre adulto puede levantar sin ayuda mecánica?', o: ['25 kg', '50 kg', '40 kg', 'No hay límite'], w: 'El Código del Trabajo fija 25 kg; 20 kg para mujeres y menores de 18 años.' }] },
      { s: 'cf_co_alambre', v: [
        { q: '¿Por qué se usan lentes de seguridad al cosechar entre hileras?', o: ['Porque hay alambres y puntas de cañas a la altura de los ojos', 'Solo para ver mejor la fruta madura', 'Porque lo pide el comprador de la fruta', 'Solo para protegerse del polvo del camino'], w: 'Una punta de caña o un alambre en el ojo puede causar una lesión grave.' },
        { q: 'Apartas una caña para pasar y viene un compañero detrás. ¿Qué haces?', o: ['La suelto despacio para que no lo golpee', 'La suelto de golpe para avanzar rápido', 'La quiebro y la dejo en el suelo', 'La empujo hacia atrás con fuerza'], w: 'Una caña soltada de golpe da un latigazo en la cara del que viene detrás.' },
        { q: 'Encuentras un alambre de la espaldera cortado y colgando. ¿Qué haces?', o: ['Aviso para que lo reparen y advierto a mis compañeros', 'Lo amarro yo con un nudo y sigo', 'Lo esquivo sin decir nada', 'Lo corto con la tijera para que no moleste'], w: 'Un alambre suelto puede dañar los ojos o hacer tropezar. Se avisa para repararlo.' }] },
      { s: 'cf_co_insectos', v: [
        { q: 'Antes de meter la mano en una mata con fruta madura, ¿qué haces?', o: ['Miro si hay abejas, avispas o arañas', 'Meto la mano rápido para no perder tiempo', 'Sacudo la mata con fuerza', 'Me saco los guantes para sentir mejor'], w: 'Mirar primero evita picaduras y mordeduras.' },
        { q: 'Encuentras un nido de avispas en una mata. ¿Qué haces?', o: ['No lo toco, me alejo y aviso a mi jefatura', 'Lo saco con la tijera de podar', 'Lo aplasto con el pie rápido', 'Sigo cosechando alrededor del nido'], w: 'Un nido molestado provoca un ataque de muchas avispas.' },
        { q: 'Si eres alérgico a las picaduras, ¿cuándo lo avisas?', o: ['Antes de empezar a trabajar', 'Solo si me pica una abeja', 'Al terminar la temporada', 'No es necesario avisarlo'], w: 'Así pueden actuar rápido si te pican y asignarte tareas lejos de colmenas.' }] },
      { s: 'cf_co_inocuidad', v: [
        { q: '¿Por qué es tan importante lavarse las manos al cosechar frambuesa?', o: ['Porque la frambuesa no se lava antes de comerse', 'Porque así la fruta pesa menos', 'Solo para que no se manchen los guantes', 'Porque el jabón espanta a las abejas'], w: 'Tus manos son lo último que toca la fruta antes de llegar a la mesa del consumidor.' },
        { q: '¿Cuándo debes lavarte las manos con agua y jabón?', o: ['Antes de cosechar, después del baño y después de comer', 'Solo al terminar la jornada', 'Solo si se ven sucias', 'Una vez a la semana'], w: 'Antes de cosechar, después de ir al baño y después de comer: siempre.' },
        { q: 'Amaneciste con diarrea, pero quieres trabajar. ¿Qué haces?', o: ['Aviso a mi jefatura antes de cosechar', 'Cosecho igual y no digo nada', 'Me lavo las manos una vez y listo', 'Trabajo solo media jornada sin avisar'], w: 'Con diarrea o vómitos se puede contaminar la fruta. Se avisa para asignarte otra tarea.' }] },
      { s: 'cf_co_suelo', v: [
        { q: 'Se te cae fruta al suelo. ¿Qué haces con ella?', o: ['La descarto donde me indiquen, no va a la bandeja', 'La limpio con la mano y la pongo en la bandeja', 'La pongo abajo en la bandeja para que no se vea', 'Me la como para no botarla'], w: 'La fruta del suelo se contamina con tierra y bacterias: no va a la bandeja.' },
        { q: '¿Dónde dejas las bandejas mientras cosechas?', o: ['En la cintura o en el carro, nunca directo en la tierra', 'En el suelo, entre las matas', 'Sobre el pasto del pasillo', 'Arriba del alambre de la espaldera'], w: 'Las bandejas en la tierra se contaminan y además hacen tropezar.' },
        { q: '¿Por qué no se come fruta directamente de la mata?', o: ['Por higiene y porque puede tener restos de una aplicación', 'Porque se ve feo para el supervisor', 'Porque engorda', 'Porque así se cosecha más rápido'], w: 'La fruta de la mata puede tener restos de agroquímicos y no está lavada.' }] },
      { s: 'cf_co_pausa', v: [
        { q: 'Llevas varias horas cosechando y sientes los dedos adormecidos. ¿Qué haces?', o: ['Hago la pausa activa y, si no se pasa, aviso a mi jefatura', 'Sigo igual, ya se me va a pasar', 'Tomo un analgésico y no digo nada', 'Cosecho más rápido para terminar antes'], w: 'Hormigueo o adormecimiento que no se pasa puede ser un trastorno músculo-esquelético. Se avisa a tiempo.' },
        { q: '¿Para qué sirven las pausas activas en la cosecha?', o: ['Para descansar y estirar dedos, muñecas, brazos y espalda', 'Para conversar con los compañeros', 'Solo para tomar agua', 'Para que el supervisor cuente las bandejas'], w: 'Estirar los músculos que trabajan en forma repetitiva previene lesiones.' },
        { q: 'Alternar las manos al cosechar ayuda a cargar menos una sola mano.', vf: true, w: 'Verdadero. Repartir el trabajo entre las dos manos reduce la carga sobre los tendones.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'cf_poda', sec: 'campo', emp: TODAS, title: 'Poda y amarre de cañas de frambuesa', thumb: 'cf_pa_amarre', mins: 15,
    learn: [
      { s: 'cf_pa_tijera', t: 'Tu tijera de podar', x: 'La tijera es tu herramienta principal en la poda y puede causar <b>cortes profundos</b>.<ul><li>Debe estar <b>afilada</b> y sin juego: una tijera sin filo obliga a hacer más fuerza y se resbala.</li><li>Ciérrala con su <b>seguro</b> cuando no cortas.</li><li>Guárdala siempre en su <b>funda</b> en el cinturón, nunca en el bolsillo.</li></ul>' },
      { s: 'cf_pa_corte', t: 'Cómo cortar sin herirte', x: '<ul><li>Corta <b>hacia afuera</b>, alejándote del cuerpo.</li><li>La <b>mano que sujeta la caña</b> va lejos de la hoja de la tijera.</li><li>Usa <b>guantes</b>: protegen de cortes y de espinas.</li><li>No cortes con apuro ni conversando: la mirada en el corte.</li></ul>', k: 'La mano que sujeta la caña va siempre lejos de la hoja de la tijera.' },
      { s: 'cf_pa_espinas', t: 'Las cañas tienen espinas', x: 'Las cañas de frambuesa tienen <b>espinas pequeñas</b> que se entierran en la piel y se pueden infectar.<ul><li>Trabaja con <b>guantes</b> y <b>manga larga</b>.</li><li>Si se te entierra una espina, sácala, <b>lava con agua y jabón</b> y avisa si la zona se pone roja o caliente.</li></ul>' },
      { s: 'cf_pa_amarre', t: 'Amarre de cañas al alambre', x: 'Las cañas se <b>amarran al alambre</b> de la espaldera para que crezcan derechas.<ul><li>Amarra con firmeza pero <b>sin tirar fuerte</b> de la caña ni del alambre.</li><li>Un alambre tenso puede <b>saltar</b> si se suelta: usa <b>lentes</b> y no pongas la cara cerca del amarre.</li><li>Corta las amarras sobrantes <b>hacia afuera</b>.</li></ul>' },
      { s: 'cf_pa_ojos', t: 'Protege tus ojos', x: 'En la poda y el amarre trabajas con la cara <b>cerca de las cañas</b>: una punta cortada o un alambre pueden lesionar el ojo.<ul><li><b>Lentes de seguridad</b> todo el tiempo.</li><li>Si algo te entra al ojo, <b>no te frotes</b>: lava con agua limpia y avisa de inmediato.</li></ul>' },
      { s: 'cf_pa_brazos', t: 'Brazos arriba: alterna y descansa', x: 'Amarrar en el alambre alto obliga a trabajar con los <b>brazos sobre los hombros</b>, y eso cansa y lesiona los hombros.<ul><li><b>Alterna</b> el amarre alto con tareas a media altura.</li><li>Haz <b>pausas</b> para bajar los brazos y estirar.</li><li>Acércate a la mata en vez de estirarte.</li></ul>' },
      { s: 'cf_pa_restos', t: 'Restos de poda fuera del pasillo', x: '<ul><li>Las <b>cañas cortadas</b> en el pasillo hacen tropezar y tienen espinas.</li><li>Déjalas en el lugar que te indiquen o junto a la hilera, <b>sin tapar el pasillo</b>.</li><li>Nunca se queman restos sin autorización.</li></ul>' },
      { s: 'cf_pa_herr', t: 'Herramientas en buen estado', x: '<ul><li>Revisa tu tijera antes de empezar: hoja, resorte, seguro y mangos.</li><li>Herramienta <b>dañada</b>: no la uses, entrégala y <b>avisa</b> para que la cambien.</li><li>Al terminar, límpiala y guárdala en su lugar.</li></ul>' }
    ],
    quiz: [
      { s: 'cf_pa_tijera', v: [
        { q: '¿Dónde llevas la tijera de podar cuando no estás cortando?', o: ['Cerrada, con su seguro y en la funda', 'Abierta en el bolsillo del pantalón', 'Colgada de un alambre de la espaldera', 'En el suelo, junto a la mata'], w: 'En la funda y con seguro no corta a nadie ni se pierde.' },
        { q: '¿Por qué la tijera debe estar afilada?', o: ['Porque sin filo se hace más fuerza y se resbala', 'Solo para que el corte se vea bonito', 'Porque así dura menos', 'No importa, corta igual'], w: 'Una tijera sin filo obliga a forzar el corte y se resbala hacia la mano.' },
        { q: 'Llevar la tijera abierta en el bolsillo es seguro si caminas con cuidado.', vf: false, w: 'Falso. Una tijera abierta en el bolsillo puede cortarte al agacharte o al caer. Va cerrada y en su funda.' }] },
      { s: 'cf_pa_corte', v: [
        { q: '¿Hacia dónde cortas con la tijera?', o: ['Hacia afuera, alejándome del cuerpo', 'Hacia mí, para tener más fuerza', 'Hacia el compañero de al lado', 'Da lo mismo la dirección'], w: 'Cortar hacia afuera evita que la tijera se venga contra el cuerpo si se resbala.' },
        { q: '¿Dónde va la mano que sujeta la caña?', o: ['Lejos de la hoja de la tijera', 'Justo al lado de la hoja', 'Encima de la hoja, para afirmar', 'Dentro de la mata'], w: 'Si la tijera se resbala, la mano que sujeta debe quedar fuera de su recorrido.' },
        { q: '¿Qué EPP protege tus manos de cortes y espinas en la poda?', o: ['Guantes', 'Lentes de seguridad', 'Legionario', 'Protector auditivo'], w: 'Los guantes protegen de cortes y espinas.' }] },
      { s: 'cf_pa_espinas', v: [
        { q: 'Se te enterró una espina de la caña en la mano. ¿Qué haces?', o: ['La saco, lavo con agua y jabón y aviso si se infecta', 'La dejo, sale sola', 'Me la saco con los dientes', 'Sigo trabajando sin guantes'], w: 'Una espina puede infectarse: se saca, se lava y se avisa si la zona se inflama.' },
        { q: '¿Qué ropa te protege de las espinas de las cañas?', o: ['Guantes y manga larga', 'Polera de manga corta', 'Solo el legionario', 'Ninguna, las espinas no hacen daño'], w: 'Manga larga y guantes evitan rasguños y espinas en brazos y manos.' },
        { q: 'Las espinas de la frambuesa son pequeñas y por eso nunca se infectan.', vf: false, w: 'Falso. Pueden infectarse aunque sean pequeñas. Se sacan, se lava y se avisa.' }] },
      { s: 'cf_pa_amarre', v: [
        { q: '¿Por qué usas lentes al amarrar cañas al alambre?', o: ['Porque el alambre tenso puede saltar a la cara', 'Para ver mejor el color de la caña', 'Porque el alambre brilla con el sol', 'No se usan lentes para amarrar'], w: 'Un alambre tenso que se suelta da un latigazo hacia la cara.' },
        { q: '¿Cómo amarras la caña al alambre?', o: ['Firme pero sin tirar fuerte de la caña ni del alambre', 'Tirando fuerte para que quede bien apretado', 'Doblando la caña hasta el suelo', 'Colgándome del alambre para bajarlo'], w: 'Tirar fuerte puede cortar la caña o soltar el alambre.' },
        { q: 'Te sobra un pedazo de amarra. ¿Cómo lo cortas?', o: ['Con la tijera, cortando hacia afuera', 'Con los dientes', 'Tirando con fuerza hacia mí', 'Lo dejo largo y colgando'], w: 'Cortar hacia afuera evita cortes; los dientes se dañan y no es higiénico.' }] },
      { s: 'cf_pa_ojos', v: [
        { q: 'Te entra una astilla de caña al ojo. ¿Qué haces?', o: ['No me froto, lavo con agua limpia y aviso de inmediato', 'Me froto fuerte para sacarla', 'Sigo trabajando y la saco en la casa', 'Me pongo gotas de cualquier remedio'], w: 'Frotar puede rayar el ojo. Se lava con agua limpia y se avisa para atención.' },
        { q: '¿Cuándo usas los lentes de seguridad en la poda y el amarre?', o: ['Todo el tiempo', 'Solo cuando hay sol fuerte', 'Solo al cortar cañas gruesas', 'Solo si el supervisor está cerca'], w: 'La cara está siempre cerca de las cañas y alambres.' },
        { q: 'Una punta de caña cortada puede causar una lesión grave en el ojo.', vf: true, w: 'Verdadero. Por eso los lentes se usan todo el tiempo.' }] },
      { s: 'cf_pa_brazos', v: [
        { q: 'Llevas mucho rato amarrando en el alambre alto. ¿Qué haces?', o: ['Alterno con tareas a media altura y hago pausas', 'Sigo igual hasta terminar la hilera', 'Me cuelgo del alambre para descansar', 'Me subo a una bandeja para alcanzar mejor'], w: 'Los brazos sobre los hombros mucho rato lesionan los hombros. Se alterna y se descansa.' },
        { q: '¿Qué parte del cuerpo se daña al trabajar mucho rato con los brazos sobre los hombros?', o: ['Los hombros', 'Los tobillos', 'Las rodillas', 'Los oídos'], w: 'Los tendones del hombro se inflaman con esa postura sostenida.' },
        { q: 'Para alcanzar una caña lejana, ¿qué es mejor?', o: ['Acercarme a la mata', 'Estirar el brazo al máximo', 'Pararme sobre una bandeja', 'Tirar la caña hacia mí'], w: 'Acercarse evita posturas forzadas.' }] },
      { s: 'cf_pa_restos', v: [
        { q: '¿Dónde dejas las cañas que cortaste en la poda?', o: ['Donde me indiquen, sin tapar el pasillo', 'En medio del pasillo', 'Colgadas del alambre', 'Las quemo ahí mismo'], w: 'Las cañas en el pasillo hacen tropezar y tienen espinas.' },
        { q: '¿Se pueden quemar los restos de poda en el campo?', o: ['No, solo con autorización', 'Sí, cuando quiera', 'Sí, si no hay viento', 'Sí, si están secos'], w: 'Una quema sin autorización puede causar un incendio.' },
        { q: 'Dejar restos de poda en el pasillo puede provocar caídas.', vf: true, w: 'Verdadero. Se tropieza con ellos y además tienen espinas.' }] },
      { s: 'cf_pa_herr', v: [
        { q: 'El resorte de tu tijera está roto. ¿Qué haces?', o: ['No la uso, la entrego y aviso para que la cambien', 'La sigo usando con cuidado', 'La amarro con alambre', 'La presto a un compañero'], w: 'Una herramienta dañada provoca accidentes. Se cambia.' },
        { q: '¿Cuándo revisas tu tijera?', o: ['Antes de empezar a trabajar', 'Solo cuando se rompe', 'Una vez por temporada', 'Nunca, la revisa el supervisor'], w: 'Revisarla antes evita que falle en plena poda.' },
        { q: 'Al terminar la jornada, ¿qué haces con la tijera?', o: ['La limpio y la guardo en su lugar', 'La dejo en la hilera para mañana', 'La llevo abierta en el bolsillo', 'La dejo en el comedor'], w: 'Limpia y guardada dura más y no corta a nadie.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'cf_estructura', sec: 'campo', emp: TODAS, title: 'Armado de estructura: postes y alambres', thumb: 'cf_es_postes', mins: 15,
    learn: [
      { s: 'cf_es_postes', t: 'Postes: pesados y largos', x: 'Los postes de la espaldera son <b>pesados y largos</b>. Mal levantados causan lumbago, golpes y aplastamientos.<ul><li>Muévelos <b>entre dos personas</b>, coordinados: uno da la voz de "arriba".</li><li>Levanta con las piernas, espalda recta, el poste <b>pegado al cuerpo</b>.</li><li>Máximo <b>25 kg por persona</b> sin ayuda mecánica (20 kg mujeres y menores de 18 años).</li></ul>' },
      { s: 'cf_es_hoyo', t: 'Hoyos para los postes', x: '<ul><li>Un hoyo abierto en el pasillo es una <b>caída segura</b>: señalízalo o tápalo mientras no se usa.</li><li>Con la pala o el barreno, <b>afirma bien los pies</b> y no fuerces la espalda.</li><li>Si hay una ahoyadora a motor, solo la opera la persona <b>autorizada</b>; los demás, lejos de la broca.</li></ul>' },
      { s: 'cf_es_combo', t: 'Combo y pisón', x: 'Al enterrar el poste con <b>combo o pisón</b>:<ul><li><b>Nadie sujeta el poste</b> en la zona donde se golpea.</li><li>Revisa que el mango esté <b>firme</b> y sin grietas.</li><li>Mantén a tus compañeros a <b>distancia segura</b> del recorrido del combo.</li><li>Lentes y guantes puestos.</li></ul>', k: 'Nunca sujetes el poste donde un compañero va a golpear.' },
      { s: 'cf_es_alambre', t: 'Tensar alambre: peligro de latigazo', x: 'Un alambre tenso acumula mucha fuerza. Si se corta o se suelta, da un <b>latigazo</b> que puede herir gravemente la cara o los ojos.<ul><li><b>Nunca te pongas en la línea</b> del alambre que se está tensando.</li><li>Usa el <b>tensor</b> adecuado, sin tensar de más.</li><li><b>Lentes y guantes</b> siempre.</li></ul>', k: 'Nunca te pongas en la línea de un alambre que se está tensando.' },
      { s: 'cf_es_rollo', t: 'Desenrollar y cortar alambre', x: '<ul><li>Desenrolla el alambre con la <b>devanadera</b>: un rollo suelto se enreda y salta.</li><li>Las <b>puntas cortadas</b> son filosas como un cuchillo: dóblalas hacia adentro.</li><li>Los sobrantes de alambre se recogen, no quedan en el suelo.</li></ul>' },
      { s: 'cf_es_epp', t: 'Tu EPP para armar estructura', x: '<ul><li><b>Guantes</b> de cuero o de trabajo: astillas, alambre y golpes.</li><li><b>Lentes de seguridad</b>: alambre y astillas.</li><li><b>Legionario</b> y <b>manga larga</b>: sol.</li><li><b>Zapatos de seguridad</b>: un poste en el pie aplasta.</li></ul>' },
      { s: 'cf_es_carro', t: 'Postes en carro de tractor', x: 'Cuando los postes llegan en un <b>carro tirado por tractor</b>:<ul><li><b>Nadie viaja</b> arriba del carro ni de los postes.</li><li>Nunca te pongas <b>entre el tractor y el carro</b>.</li><li>Descarga solo con el tractor <b>detenido</b> y el tractorista sabiendo que estás ahí.</li></ul>' }
    ],
    quiz: [
      { s: 'cf_es_postes', v: [
        { q: 'Tienes que mover un poste largo y pesado. ¿Cómo lo haces?', o: ['Entre dos personas, coordinados', 'Solo, arrastrándolo por el suelo', 'Solo, al hombro y rápido', 'Rodándolo con los pies'], w: 'Entre dos, coordinados, se reparte el peso y se evitan golpes.' },
        { q: '¿Cómo levantas el poste del suelo?', o: ['Con las piernas, espalda recta y el poste pegado al cuerpo', 'Doblando la espalda con las piernas estiradas', 'De un tirón, para que sea rápido', 'Con una sola mano'], w: 'Levantar con las piernas protege la columna.' },
        { q: 'Al mover un poste entre dos, ¿qué sirve para coordinarse?', o: ['Que uno dé la voz de "arriba"', 'Que cada uno levante cuando quiera', 'Que el más fuerte haga todo', 'No hablar para concentrarse'], w: 'Una voz de mando hace que los dos levanten y bajen al mismo tiempo.' }] },
      { s: 'cf_es_hoyo', v: [
        { q: 'Dejaste un hoyo abierto para un poste que pondrás después. ¿Qué haces?', o: ['Lo señalizo o lo tapo', 'Lo dejo así, todos saben que está', 'Le pongo pasto encima', 'Nada, lo uso mañana'], w: 'Un hoyo sin señalizar provoca caídas y torceduras.' },
        { q: '¿Quién puede operar la ahoyadora a motor?', o: ['Solo la persona autorizada', 'Cualquiera que sepa encenderla', 'El que esté más cerca', 'El compañero más joven'], w: 'La broca puede atrapar ropa y extremidades: solo la opera quien está autorizado.' },
        { q: 'Mientras otro opera la ahoyadora a motor, ¿dónde te ubicas?', o: ['Lejos de la broca', 'Sujetando la broca para que no se mueva', 'Al lado, con la mano en el hoyo', 'Encima del hoyo para ver mejor'], w: 'Lejos de la broca no hay riesgo de atrapamiento.' }] },
      { s: 'cf_es_combo', v: [
        { q: 'Tu compañero va a golpear el poste con el combo. ¿Qué haces?', o: ['Me alejo y no sujeto el poste donde golpea', 'Sujeto el poste justo donde golpea', 'Me pongo frente al combo para mirar', 'Le pido que golpee más fuerte'], w: 'Un golpe errado puede caer en la mano o la cabeza de quien sujeta.' },
        { q: 'El mango del combo tiene una grieta. ¿Qué haces?', o: ['No lo uso y aviso para que lo cambien', 'Lo uso con más cuidado', 'Lo amarro con alambre', 'Golpeo más suave'], w: 'Un mango agrietado se quiebra y la cabeza del combo sale volando.' },
        { q: '¿Qué EPP usas al golpear postes?', o: ['Lentes y guantes', 'Solo el legionario', 'Ninguno', 'Solo protector auditivo'], w: 'Lentes por astillas y guantes por golpes y vibración.' }] },
      { s: 'cf_es_alambre', v: [
        { q: 'Están tensando un alambre de la espaldera. ¿Dónde nunca te pones?', o: ['En la línea del alambre', 'A un costado, lejos', 'Detrás del poste', 'En otra hilera'], w: 'Si el alambre se corta, el latigazo sigue su línea.' },
        { q: '¿Qué puede pasar si un alambre tenso se corta?', o: ['Da un latigazo que puede herir la cara o los ojos', 'No pasa nada, cae al suelo', 'Solo se arruga', 'Se suelta despacio'], w: 'El alambre tenso acumula fuerza y la libera de golpe.' },
        { q: 'Para tensar el alambre se usa el tensor adecuado, sin tensar de más.', vf: true, w: 'Verdadero. Tensar de más aumenta el riesgo de que se corte.' }] },
      { s: 'cf_es_rollo', v: [
        { q: '¿Cómo desenrollas el alambre nuevo?', o: ['Con la devanadera', 'Tirando del rollo suelto en el suelo', 'Pateando el rollo', 'Pasándolo por la cintura'], w: 'Un rollo suelto se enreda y puede saltar.' },
        { q: 'Cortaste un alambre y la punta quedó filosa. ¿Qué haces?', o: ['La doblo hacia adentro', 'La dejo derecha', 'La dejo apuntando al pasillo', 'La tapo con pasto'], w: 'La punta doblada no corta ni pincha a nadie.' },
        { q: '¿Qué haces con los sobrantes de alambre?', o: ['Los recojo, no quedan en el suelo', 'Los dejo en la hilera', 'Los entierro', 'Los cuelgo de la mata'], w: 'Un alambre en el suelo hace tropezar y corta.' }] },
      { s: 'cf_es_epp', v: [
        { q: '¿Por qué se usan zapatos de seguridad al armar estructura?', o: ['Porque un poste que cae aplasta el pie', 'Solo porque son más cómodos', 'Para correr más rápido', 'No se necesitan'], w: 'La puntera protege el pie de postes y herramientas.' },
        { q: '¿Qué te protegen los guantes al armar estructura?', o: ['De astillas, alambre y golpes', 'Del sol en la cara', 'Del ruido', 'De nada'], w: 'Las manos son las que más se lesionan en este trabajo.' },
        { q: '¿Qué EPP necesitas para armar la espaldera?', o: ['Guantes, lentes, legionario, manga larga y zapatos de seguridad', 'Solo guantes', 'Solo lentes', 'Polera y jockey'], w: 'Cada elemento protege de un peligro distinto: alambre, astillas, sol y golpes.' }] },
      { s: 'cf_es_carro', v: [
        { q: 'Llega un carro con postes tirado por un tractor. ¿Qué no debes hacer?', o: ['Ponerme entre el tractor y el carro', 'Esperar a que se detenga', 'Hacer contacto visual con el tractorista', 'Descargar con el tractor detenido'], w: 'Entre el tractor y el carro hay riesgo de aplastamiento.' },
        { q: '¿Se puede viajar arriba de los postes en el carro?', o: ['No, nunca', 'Sí, si va despacio', 'Sí, si me afirmo', 'Sí, solo en caminos planos'], w: 'Una frenada o un hoyo te tira del carro.' },
        { q: '¿Cuándo descargas los postes del carro?', o: ['Con el tractor detenido y el tractorista sabiendo que estoy ahí', 'Mientras el tractor avanza despacio', 'Cuando quiera', 'Antes de que llegue al lugar'], w: 'Con el tractor detenido no hay riesgo de que se mueva.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'cf_invernadero', sec: 'campo', emp: TODAS, title: 'Invernaderos y vivero', thumb: 'cf_in_calor', mins: 12,
    learn: [
      { s: 'cf_in_calor', t: 'Dentro del invernadero hace más calor', x: 'El plástico del invernadero <b>atrapa el calor</b>: adentro puede haber varios grados más que afuera, y la humedad hace que el cuerpo transpire más.<ul><li>Trabaja las tareas pesadas en las horas <b>más frescas</b>.</li><li>Haz <b>pausas</b> fuera del invernadero.</li></ul>' },
      { s: 'cf_in_ventila', t: 'Ventila y toma agua', x: '<ul><li><b>Abre las cortinas</b> laterales para que corra el aire, cuando te lo indiquen.</li><li>Toma agua de la <b>estación de agua</b> cada 15 a 20 minutos, aunque no tengas sed.</li><li>Si sientes <b>mareo, dolor de cabeza, náuseas</b> o mucho cansancio: sal a la sombra y avisa.</li></ul>', k: 'Mareo o dolor de cabeza con calor: sal a la sombra y avisa de inmediato.' },
      { s: 'cf_in_mesones', t: 'Bandejas de plantas y mesones', x: '<ul><li>Las bandejas con plantas y tierra mojada <b>pesan</b>: lleva pocas a la vez.</li><li>Trabaja a una <b>altura cómoda</b> en el mesón, sin doblar la espalda.</li><li><b>Pasillos libres</b> de bandejas y herramientas.</li></ul>' },
      { s: 'cf_in_altura', t: 'Nunca te subas a la estructura', x: 'Los arcos del invernadero <b>no soportan el peso</b> de una persona.<ul><li>Para reparar plástico o canaletas en altura se usa <b>escalera o andamio</b> en buen estado, con otra persona afirmando.</li><li>Sobre <b>1,8 m</b> de altura, el trabajo debe estar autorizado y con su protección.</li></ul>' },
      { s: 'cf_in_viento', t: 'Viento fuerte y temporal', x: '<ul><li>Con viento fuerte, el plástico y las cortinas se mueven con mucha fuerza.</li><li><b>No intentes sujetar</b> un plástico que se está volando.</li><li><b>Sal del invernadero</b> y avisa a tu jefatura.</li></ul>' },
      { s: 'cf_in_reingreso', t: 'Aplicaciones dentro del invernadero', x: 'En el invernadero el producto aplicado <b>queda más concentrado</b> en el aire.<ul><li>Si hay un <b>letrero de aplicación</b>, no entres hasta que termine el período de reingreso.</li><li>Entra solo cuando tu jefatura lo autorice y el invernadero esté ventilado.</li></ul>' },
      { s: 'cf_in_orden', t: 'Mangueras y piso mojado', x: '<ul><li>Las <b>mangueras de riego</b> en el suelo hacen tropezar: pasa por encima con cuidado.</li><li>Después del riego el piso queda <b>resbaloso</b>: camina despacio.</li><li>Una fuga de agua se <b>avisa</b>.</li></ul>' }
    ],
    quiz: [
      { s: 'cf_in_calor', v: [
        { q: '¿Por qué dentro del invernadero hace más calor que afuera?', o: ['Porque el plástico atrapa el calor', 'Porque las plantas dan calor', 'Porque hay menos luz', 'No hace más calor'], w: 'El plástico deja pasar el sol y atrapa el calor adentro.' },
        { q: '¿Cuándo conviene hacer las tareas pesadas en el invernadero?', o: ['En las horas más frescas', 'A mediodía', 'A las 15 horas', 'Da lo mismo'], w: 'Temprano o al final de la tarde el calor es menor.' },
        { q: 'Dentro del invernadero el cuerpo transpira más por el calor y la humedad.', vf: true, w: 'Verdadero. Por eso hay que tomar agua seguido.' }] },
      { s: 'cf_in_ventila', v: [
        { q: '¿Cada cuánto tomas agua cuando trabajas con calor?', o: ['Cada 15 a 20 minutos, aunque no tenga sed', 'Solo a la hora de almuerzo', 'Solo cuando tenga mucha sed', 'Al terminar la jornada'], w: 'Cuando aparece la sed, el cuerpo ya empezó a deshidratarse.' },
        { q: 'Trabajando en el invernadero sientes mareo y dolor de cabeza. ¿Qué haces?', o: ['Salgo a la sombra, tomo agua y aviso', 'Sigo hasta terminar la bandeja', 'Me tomo un café', 'Me quedo adentro sentado'], w: 'Son señales de que el calor te está afectando. Se actúa de inmediato.' },
        { q: '¿Para qué se abren las cortinas laterales del invernadero?', o: ['Para que corra el aire y baje el calor', 'Para que entren más insectos', 'Para ver hacia afuera', 'No se abren nunca'], w: 'Ventilar baja la temperatura y la humedad.' }] },
      { s: 'cf_in_mesones', v: [
        { q: '¿Cómo llevas las bandejas de plantas con tierra mojada?', o: ['Pocas a la vez, porque pesan', 'Todas juntas en una pila alta', 'Arrastrándolas por el piso', 'Sobre la cabeza'], w: 'La tierra mojada pesa mucho más de lo que parece.' },
        { q: '¿A qué altura conviene trabajar en el mesón?', o: ['A una altura cómoda, sin doblar la espalda', 'Lo más bajo posible', 'Con los brazos sobre los hombros', 'Da lo mismo'], w: 'Una altura cómoda evita lesiones de espalda y hombros.' },
        { q: 'Dejar bandejas en el pasillo del invernadero es seguro si es por poco rato.', vf: false, w: 'Falso. Cualquiera puede tropezar. Los pasillos van siempre libres.' }] },
      { s: 'cf_in_altura', v: [
        { q: 'Hay que reparar un plástico roto en lo alto del invernadero. ¿Qué haces?', o: ['Uso escalera o andamio en buen estado, con alguien que afirme', 'Me subo al arco de la estructura', 'Me paro sobre un mesón', 'Lo dejo roto sin avisar'], w: 'Los arcos no soportan a una persona.' },
        { q: 'Subirse a los arcos del invernadero es seguro si eres liviano.', vf: false, w: 'Falso. La estructura no está hecha para soportar personas.' },
        { q: '¿Desde qué altura el trabajo debe estar autorizado y con su protección?', o: ['Sobre 1,8 m', 'Sobre 5 m', 'Sobre 10 m', 'Nunca hace falta'], w: 'Una caída desde más de 1,8 m es un accidente grave.' }] },
      { s: 'cf_in_viento', v: [
        { q: 'Con viento fuerte, un plástico del invernadero se está volando. ¿Qué haces?', o: ['No lo sujeto, salgo y aviso', 'Me cuelgo de él para que no se vuele', 'Subo a amarrarlo', 'Lo corto con la tijera'], w: 'El plástico con viento tiene mucha fuerza y puede arrastrarte.' },
        { q: '¿Qué haces si hay un temporal mientras trabajas en el invernadero?', o: ['Salgo y aviso a mi jefatura', 'Sigo trabajando adentro', 'Abro todas las cortinas', 'Me subo a revisar el techo'], w: 'Con temporal la estructura puede dañarse.' },
        { q: 'Intentar sujetar un plástico que se vuela con el viento puede causar un accidente.', vf: true, w: 'Verdadero. Te puede botar o arrastrar.' }] },
      { s: 'cf_in_reingreso', v: [
        { q: 'Ves un letrero de aplicación en la entrada del invernadero. ¿Qué haces?', o: ['No entro hasta que termine el período de reingreso', 'Entro rápido y salgo', 'Entro con mascarilla de tela', 'Saco el letrero'], w: 'El producto queda en el aire y en las plantas hasta que termina el reingreso.' },
        { q: '¿Por qué una aplicación es más peligrosa dentro del invernadero?', o: ['Porque el producto queda más concentrado en el aire', 'Porque las plantas son más chicas', 'Porque hace frío', 'No es más peligrosa'], w: 'Al estar cerrado, el producto no se dispersa.' },
        { q: '¿Quién autoriza entrar al invernadero después de una aplicación?', o: ['Mi jefatura, cuando terminó el reingreso', 'Cualquier compañero', 'Yo mismo, si no huele', 'Nadie, se entra igual'], w: 'El reingreso lo controla la jefatura según el producto aplicado.' }] },
      { s: 'cf_in_orden', v: [
        { q: 'Después del riego el piso del invernadero quedó mojado. ¿Cómo caminas?', o: ['Despacio y con cuidado', 'Corriendo para salir rápido', 'Sobre las mangueras', 'Igual que siempre'], w: 'El barro y el piso mojado hacen resbalar.' },
        { q: 'Ves una fuga de agua en una manguera. ¿Qué haces?', o: ['Aviso para que la reparen', 'La amarro con una amarra', 'La dejo correr', 'Tiro de la manguera'], w: 'Avisar permite repararla y evita barro y caídas.' },
        { q: '¿Qué peligro tienen las mangueras en el piso?', o: ['Puedes tropezar y caer', 'Ninguno', 'Que se calientan', 'Que atraen abejas'], w: 'Son obstáculos en el suelo.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'cf_servicios', sec: 'campo', emp: TODAS, title: 'Baños, estaciones de agua y comedores en el campo', thumb: 'cf_sv_comedor', mins: 12,
    learn: [
      { s: 'cf_sv_bano', t: 'Baños del campo', x: 'En el Fundo Santa Sara hay <b>baños químicos</b> con lavamanos cerca de las hileras.<ul><li><b>Úsalos siempre</b>: nunca hagas tus necesidades en la hilera ni en el campo.</li><li>Déjalos <b>limpios</b> para el siguiente compañero.</li><li>Al salir, <b>lávate las manos</b>.</li></ul>' },
      { s: 'cf_sv_manos', t: 'Lavado de manos', x: 'Lávate las manos con <b>agua y jabón</b> durante unos <b>20 segundos</b>: palmas, dorso, entre los dedos y uñas.<ul><li>Antes de empezar a cosechar.</li><li>Después de ir al baño.</li><li>Antes y después de comer.</li><li>Sécate con <b>toalla de papel</b> y bótala al basurero.</li></ul>', k: 'Después del baño y antes de comer: agua, jabón y 20 segundos.' },
      { s: 'cf_sv_agua', t: 'Estaciones de agua potable', x: 'En el campo hay <b>estaciones de agua potable</b> con vasos desechables.<ul><li>Toma agua <b>cada 15 a 20 minutos</b>, aunque no tengas sed, sobre todo con calor.</li><li>Usa un <b>vaso desechable</b> o tu botella propia: no compartas.</li><li>No metas las manos en el bidón.</li></ul>' },
      { s: 'cf_sv_canal', t: 'Solo agua potable', x: '<ul><li>El agua de <b>riego, canales o acequias no es potable</b>: puede traer bacterias y restos de agroquímicos.</li><li>Nunca la tomes ni te laves la cara con ella.</li><li>Si la estación de agua está vacía, <b>avisa</b> de inmediato.</li></ul>' },
      { s: 'cf_sv_comedor', t: 'Comedores móviles', x: 'Para comer y descansar están los <b>comedores móviles</b>, con sombra, mesa y bancas.<ul><li><b>Come solo en el comedor</b>, nunca en la hilera.</li><li><b>Lávate las manos</b> antes de comer, sobre todo después de cosechar o de estar en un sector aplicado.</li><li>Mantén tu comida tapada y no compartas cubiertos.</li></ul>' },
      { s: 'cf_sv_hilera', t: 'No se come en la hilera', x: '<ul><li>No comas fruta de la mata: no está lavada y puede tener restos de una aplicación.</li><li>No comas ni fumes en la hilera: llevas a la boca lo que tienen tus manos.</li><li>La comida va al comedor; la fruta, a la bandeja.</li></ul>' },
      { s: 'cf_sv_basura', t: 'Basura y orden', x: '<ul><li>Botellas, envoltorios y restos de comida van al <b>contenedor de basura</b>.</li><li>Nada de basura en el campo: atrae ratones (hantavirus) e insectos.</li><li>Deja el comedor limpio al terminar.</li></ul>' },
      { s: 'cf_sv_aviso', t: 'Si falta algo, avisa', x: 'Si en el baño falta <b>papel, agua o jabón</b>, si la estación de agua está <b>vacía</b> o si el comedor está sucio o dañado, <b>avisa a tu jefatura</b>.<br>Estos servicios son para tu salud y la de la fruta: cuidarlos es tarea de todos.' }
    ],
    quiz: [
      { s: 'cf_sv_bano', v: [
        { q: 'Estás cosechando lejos del baño y necesitas ir. ¿Qué haces?', o: ['Voy al baño del campo, aunque esté más lejos', 'Lo hago en la hilera, detrás de las matas', 'Aguanto hasta el final de la jornada', 'Lo hago junto al canal'], w: 'Hacer las necesidades en el campo contamina la fruta y el agua.' },
        { q: '¿Qué haces siempre al salir del baño?', o: ['Me lavo las manos con agua y jabón', 'Vuelvo directo a cosechar', 'Me limpio las manos en la ropa', 'Me pongo los guantes sin lavarme'], w: 'Las manos sin lavar contaminan la fruta.' },
        { q: 'Dejar el baño limpio es tarea de todos los que lo usan.', vf: true, w: 'Verdadero. Así el siguiente compañero lo encuentra en buen estado.' }] },
      { s: 'cf_sv_manos', v: [
        { q: '¿Cuánto rato te lavas las manos con agua y jabón?', o: ['Unos 20 segundos', 'Un par de segundos', 'Solo me mojo las manos', 'Un minuto completo con cloro'], w: '20 segundos frotando palmas, dorso, entre los dedos y uñas.' },
        { q: '¿Con qué te secas las manos después de lavarlas?', o: ['Con toalla de papel desechable', 'Con la ropa de trabajo', 'Con la toalla de un compañero', 'No me las seco'], w: 'La toalla desechable no acumula bacterias.' },
        { q: '¿En cuál de estos momentos debes lavarte las manos?', o: ['Antes de comer', 'Solo al llegar a la casa', 'Solo si se ven sucias', 'Solo los lunes'], w: 'Antes de comer, después del baño y antes de cosechar.' }] },
      { s: 'cf_sv_agua', v: [
        { q: 'Hace calor y no tienes sed. ¿Tomas agua igual?', o: ['Sí, cada 15 a 20 minutos', 'No, solo cuando tenga sed', 'Solo a la hora de almuerzo', 'No, para no ir al baño'], w: 'Cuando aparece la sed, el cuerpo ya empezó a deshidratarse.' },
        { q: '¿Cómo tomas agua de la estación?', o: ['Con vaso desechable o mi botella propia', 'Con las manos', 'Directo de la llave con la boca', 'Con la botella de un compañero'], w: 'Así no se contaminan el agua ni se contagian enfermedades.' },
        { q: 'Meter las manos al bidón de agua potable es higiénico si están limpias.', vf: false, w: 'Falso. Nadie mete las manos al bidón: se contamina el agua de todos.' }] },
      { s: 'cf_sv_canal', v: [
        { q: 'La estación de agua está vacía y tienes sed. ¿Qué haces?', o: ['Aviso de inmediato para que la llenen', 'Tomo agua del canal', 'Tomo agua de la manguera de riego', 'Espero hasta la casa'], w: 'El agua de riego o de canal no es potable.' },
        { q: '¿Por qué no se toma agua de riego ni de canales?', o: ['Porque puede tener bacterias y restos de agroquímicos', 'Porque es muy fría', 'Porque es muy cara', 'Sí se puede tomar'], w: 'No es agua potable y puede enfermarte.' },
        { q: 'Lavarse la cara con agua del canal es seguro si se ve limpia.', vf: false, w: 'Falso. Aunque se vea limpia puede traer bacterias o agroquímicos.' }] },
      { s: 'cf_sv_comedor', v: [
        { q: '¿Dónde comes durante la jornada?', o: ['En el comedor móvil', 'En la hilera, entre las matas', 'Arriba del tractor', 'Donde me pille la hora'], w: 'El comedor tiene sombra, mesa y está lejos de la fruta y de las aplicaciones.' },
        { q: 'Estuviste cosechando y vas a almorzar. ¿Qué haces primero?', o: ['Me lavo las manos con agua y jabón', 'Me siento a comer de inmediato', 'Me limpio las manos en el pantalón', 'Me pongo alcohol gel sobre la tierra'], w: 'Las manos llevan tierra y pueden tener restos de productos.' },
        { q: 'Compartir cubiertos con un compañero en el comedor es una buena práctica.', vf: false, w: 'Falso. Así se contagian enfermedades.' }] },
      { s: 'cf_sv_hilera', v: [
        { q: '¿Por qué no se come ni se fuma en la hilera?', o: ['Porque llevas a la boca lo que tienen tus manos', 'Porque se pierde tiempo', 'Porque lo prohíbe el comprador', 'Sí se puede'], w: 'Las manos pueden tener tierra y restos de agroquímicos.' },
        { q: '¿Se puede comer fruta directamente de la mata?', o: ['No', 'Sí, si está madura', 'Sí, si nadie ve', 'Sí, una o dos'], w: 'No está lavada y puede tener restos de una aplicación.' },
        { q: 'La comida va al comedor y la fruta, a la bandeja.', vf: true, w: 'Verdadero. Cada cosa en su lugar.' }] },
      { s: 'cf_sv_basura', v: [
        { q: 'Terminaste tu colación. ¿Qué haces con los envoltorios?', o: ['Los boto en el contenedor de basura', 'Los dejo en la hilera', 'Los entierro en el campo', 'Los quemo'], w: 'La basura en el campo atrae ratones e insectos.' },
        { q: '¿Por qué la basura en el campo es un peligro para la salud?', o: ['Porque atrae ratones que transmiten el hantavirus', 'Porque se ve feo', 'Porque pesa', 'No es un peligro'], w: 'El ratón colilargo transmite el hantavirus.' },
        { q: 'Dejar limpio el comedor al terminar es tarea de todos.', vf: true, w: 'Verdadero.' }] },
      { s: 'cf_sv_aviso', v: [
        { q: 'En el baño no hay jabón. ¿Qué haces?', o: ['Aviso a mi jefatura', 'No me lavo las manos', 'Uso agua del canal', 'No digo nada'], w: 'Sin jabón no hay higiene: se avisa para reponerlo.' },
        { q: '¿Para qué sirven el baño, la estación de agua y el comedor?', o: ['Para tu salud y la higiene de la fruta', 'Solo para cumplir con el papeleo', 'Solo para los supervisores', 'Para nada importante'], w: 'Son parte de las condiciones sanitarias del lugar de trabajo.' },
        { q: 'Si el comedor está dañado, ¿a quién avisas?', o: ['A mi jefatura', 'A nadie', 'A un compañero de otra empresa', 'Al comprador de la fruta'], w: 'La jefatura coordina la reparación.' }] }
    ]
  });

  // ======================= CHARLAS NUEVAS (13-11-2026) =======================
  SI_CONT.temas.push({
    id: 'cf_huerto', sec: 'campo', emp: TODAS, title: 'Reglas del huerto de frambuesas', thumb: 'cf_hu_comedor', mins: 8,
    learn: [
      { s: 'cf_hu_alto', t: 'Un huerto especial: las matas son más altas que tú', x: 'En el Fundo Santa Sara las frambuesas crecen en espaldera y son <b>más altas que una persona</b>.<ul><li>Desde la otra hilera, o desde un tractor, <b>no te ven</b>.</li><li>Camina por el <b>pasillo</b>, nunca cruces a través de las matas.</li><li>Avisa a tu grupo <b>dónde estás</b> y no te alejes sola o solo.</li></ul>', k: 'Si no te ven, haz que sepan dónde estás.' },
      { s: 'cf_hu_cofia', t: 'Cofia obligatoria en el huerto', x: 'La frambuesa va <b>directo al consumidor</b>, sin lavar. Un pelo en la fruta es un reclamo.<ul><li>Primero la <b>cofia</b>, con <b>todo el pelo adentro</b>.</li><li>Encima, el <b>legionario</b> para el sol.</li><li>Se usa <b>todo el tiempo</b> dentro del huerto.</li></ul>', k: 'Cofia primero, legionario encima.' },
      { s: 'cf_hu_joyas', t: 'Sin joyas en el huerto', x: '<b>Anillos, pulseras, reloj, aros y collares</b> se quedan en la casa o guardados.<ul><li>Se <b>enganchan</b> en cañas, alambres y máquinas: pueden arrancarte un dedo.</li><li>Pueden <b>caer en la fruta</b> y llegar al consumidor.</li></ul>', k: 'Manos y cuello libres de joyas.' },
      { s: 'cf_hu_comedor', t: 'El comedor móvil', x: 'Son <b>carritos con sombra</b> que se mueven por el campo. Cada uno tiene:<ul><li><b>Mesa y bancas</b> bajo techo.</li><li><b>Bidón de agua potable</b> y <b>toalla de papel</b>.</li><li><b>Basurero</b> al lado y un <b>baño químico</b> cerca.</li></ul>Aquí se come y se descansa; <b>nunca en la hilera</b>. Lávate las manos antes de comer.', k: 'Se come solo en el comedor móvil.' },
      { s: 'cf_hu_basura', t: 'Cada basura en su lugar', x: '<ul><li>Botellas, envoltorios y restos de comida van al <b>basurero del comedor</b>.</li><li>Nada queda en la hilera: <b>contamina la fruta</b>, atrae <b>ratones</b> (hantavirus) e insectos.</li><li>Si el basurero está lleno, <b>avisa</b>.</li></ul>', k: 'Si lo trajiste, lo botas en el basurero.' },
      { s: 'cf_hu_fumar', t: 'En el huerto no se fuma', x: '<ul><li><b>Prohibido fumar</b> dentro del huerto y entre las hileras.</li><li>La colilla y la ceniza <b>contaminan la fruta</b>, y llevas a la boca lo que tienen tus manos.</li><li>Una colilla puede <b>iniciar un incendio</b> en el pasto seco.</li></ul>', k: 'Huerto libre de humo.' },
      { s: 'cf_hu_ruido', t: 'Tractores y máquinas meten ruido', x: 'Con el ruido del motor, <b>el operador no te escucha</b> y tú tampoco lo oyes bien.<ul><li>Busca su <b>mirada</b> y espera su <b>seña</b> antes de acercarte.</li><li>Nunca te pongas <b>delante ni detrás</b> de una máquina andando.</li><li>Las matas altas te tapan: <b>no salgas de golpe</b> de la hilera al camino.</li></ul>', k: 'Si no hay mirada, no hay paso.' }
    ],
    quiz: [
      { s: 'cf_hu_alto', v: [
        { q: 'Tienes que pasar a la hilera de al lado. ¿Cómo lo haces?', o: ['Camino por el pasillo hasta la cabecera', 'Cruzo por entre las matas', 'Paso por debajo del alambre', 'Salto el alambre de la espaldera'], w: 'Entre las matas no te ven, te enganchas y puedes caer. Se pasa por el pasillo.' },
        { q: '¿Por qué en este huerto un tractor podría no verte?', o: ['Porque las matas son más altas que una persona', 'Porque los tractores no tienen espejos', 'Porque solo trabajan de noche', 'Siempre te ven'], w: 'Las matas altas tapan a las personas: avisa dónde estás.' },
        { q: 'En el huerto de frambuesas es bueno que tu grupo sepa dónde estás trabajando.', vf: true, w: 'Verdadero. Con matas tan altas, nadie te ve desde lejos.' }] },
      { s: 'cf_hu_pelo', v: [
        { q: '¿En qué orden te pones la cofia y el legionario?', o: ['Primero la cofia con todo el pelo adentro y encima el legionario', 'Primero el legionario y la cofia encima', 'Solo el legionario', 'La cofia en el bolsillo por si acaso'], w: 'La cofia guarda el pelo; el legionario va encima para el sol.' },
        { q: '¿Por qué es obligatoria la cofia en el huerto?', o: ['Para que ningún pelo caiga a la fruta, que va directo al consumidor', 'Solo para el sol', 'Porque es parte del uniforme de fiesta', 'No es obligatoria'], w: 'La frambuesa no se lava: un pelo en la fruta es un problema de inocuidad.' },
        { q: 'Si tienes el pelo corto, no necesitas cofia en el huerto.', vf: false, w: 'Falso. La cofia es obligatoria para todas las personas en el huerto.' }] },
      { s: 'cf_hu_enganche', v: [
        { q: '¿Qué haces con tu anillo antes de entrar al huerto?', o: ['Lo dejo en la casa o guardado', 'Me lo dejo puesto bajo el guante', 'Lo cuelgo en el alambre', 'Me lo cambio de dedo'], w: 'Un anillo enganchado en un alambre o una máquina puede arrancar un dedo.' },
        { q: '¿Cuál de estas cosas sí puedes usar en el huerto?', o: ['Ninguna joya: ni anillo, ni pulsera, ni reloj, ni aros', 'Un reloj', 'Una pulsera delgada', 'Aros pequeños'], w: 'Todas las joyas se enganchan o pueden caer a la fruta.' },
        { q: 'Las joyas pueden caer a la bandeja y llegar al consumidor.', vf: true, w: 'Verdadero. Por eso en el huerto se trabaja sin joyas.' }] },
      { s: 'cf_hu_comedor', v: [
        { q: '¿Qué tiene el comedor móvil del huerto?', o: ['Sombra, mesa y bancas, agua potable, toalla de papel y basurero', 'Solo una mesa al sol', 'Una cocina a gas', 'Nada, es solo un carro'], w: 'Es un carrito con sombra, agua potable, toalla de papel y basurero, con un baño químico cerca.' },
        { q: '¿Dónde comes tu colación?', o: ['En el comedor móvil', 'En la hilera, entre las matas', 'Arriba de un tractor', 'Sentado en las bandejas'], w: 'En la hilera se contamina la fruta y te contaminas tú.' },
        { q: 'Antes de comer en el comedor móvil te lavas las manos.', vf: true, w: 'Verdadero. Tus manos traen tierra y pueden tener restos de productos.' }] },
      { s: 'cf_hu_basura', v: [
        { q: 'Terminaste tu bebida en la hilera. ¿Qué haces con la botella?', o: ['La llevo al basurero del comedor', 'La dejo bajo la mata', 'La entierro', 'La tiro al canal'], w: 'Nada de basura en la hilera: contamina y atrae ratones.' },
        { q: 'El basurero del comedor está lleno. ¿Qué haces?', o: ['Aviso a mi jefatura', 'Dejo la basura al lado, en el suelo', 'La boto en la hilera', 'La quemo'], w: 'Se avisa para que lo vacíen.' },
        { q: '¿Por qué la basura en el huerto es peligrosa?', o: ['Atrae ratones que transmiten el hantavirus y contamina la fruta', 'Solo porque se ve feo', 'Porque pesa', 'No es peligrosa'], w: 'El ratón colilargo transmite el hantavirus.' }] },
      { s: 'cf_hu_fumar', v: [
        { q: '¿Se puede fumar entre las hileras?', o: ['No, en el huerto está prohibido fumar', 'Sí, si nadie ve', 'Sí, en la hora de colación', 'Sí, si apago bien la colilla'], w: 'En el huerto no se fuma: contamina la fruta y puede causar un incendio.' },
        { q: '¿Qué riesgo trae una colilla en el huerto?', o: ['Contaminar la fruta e iniciar un incendio', 'Ninguno', 'Que se manche la ropa', 'Que se gaste el encendedor'], w: 'La colilla contamina y el pasto seco se enciende fácil.' },
        { q: 'Fumar en la hilera es peligroso porque llevas a la boca lo que tienen tus manos.', vf: true, w: 'Verdadero. Tus manos pueden tener tierra o restos de productos.' }] },
      { s: 'cf_hu_ruido', v: [
        { q: 'Un tractor se acerca por el camino y el operador no te ha visto. ¿Qué haces?', o: ['Me detengo, busco su mirada y espero su seña', 'Le grito y cruzo', 'Cruzo corriendo', 'Sigo caminando, ya me verá'], w: 'Con el ruido no te escucha: sin contacto visual no se cruza.' },
        { q: '¿Por qué no sirve gritarle al operador de una máquina?', o: ['Porque con el ruido del motor no te escucha', 'Porque es mala educación', 'Porque se distrae', 'Sí sirve siempre'], w: 'El motor tapa tu voz. Usa la mirada y las señas.' },
        { q: 'Salir de golpe de la hilera al camino es peligroso porque las matas te tapan.', vf: true, w: 'Verdadero. Mira antes de salir al camino.' }] }
    ]
  });

  SI_CONT.temas.push({
    id: 'cf_mecanizada', sec: 'campo', emp: TODAS, title: 'Cosecha mecanizada: la máquina cosechadora', thumb: 'cf_me_maquina', mins: 8,
    learn: [
      { s: 'cf_me_maquina', t: 'Así trabaja la cosechadora', x: 'Parte de la frambuesa se cosecha con una <b>máquina cosechadora</b>, parecida a la de arándanos. Es alta, <b>pasa por encima de la hilera</b> y avanza despacio.<ul><li>Adentro, unas varillas <b>sacuden las cañas</b>.</li><li>La fruta madura <b>cae</b>, una correa la <b>sube</b> y llega a las <b>bandejas</b>.</li></ul>Hace <b>mucho ruido</b> y vibra.', k: 'Es grande, ruidosa y no te ve.' },
      { s: 'cf_me_esquema', t: 'El proceso paso a paso', x: '<ul><li><b>1</b> Las varillas amarillas <b>sacuden la mata</b> por ambos lados.</li><li><b>2</b> La fruta cae a las <b>escamas recolectoras</b>, abajo.</li><li><b>3</b> Las <b>correas</b> suben la fruta por los costados.</li><li><b>4</b> Los <b>ventiladores</b> botan hojas y palitos.</li><li><b>5</b> La fruta limpia llega a las <b>bandejas</b>.</li></ul>Todas estas piezas <b>se mueven</b>: pueden atrapar una mano, la ropa o el pelo.', k: 'Sacude, recoge, sube, limpia y llena bandejas.' },
      { s: 'cf_me_zona', t: 'Zona de peligro alrededor de la máquina', x: '<ul><li>Nadie camina <b>delante</b> de la máquina en la hilera por donde avanza, ni <b>detrás</b> cuando retrocede.</li><li>En la <b>cabecera</b> la máquina <b>gira</b>: no te quedes ahí.</li><li>Las matas son altas: el operador <b>no te ve</b> si estás cerca.</li></ul>', k: 'Lejos de su camino.' },
      { s: 'cf_me_ruido', t: 'El ruido: comunícate con la mirada', x: '<ul><li>Con el motor encendido, <b>el operador no te escucha</b>.</li><li>Antes de acercarte, <b>busca su mirada</b> y espera su <b>seña</b> de que detuvo la máquina.</li><li>Si trabajas junto a la máquina, usa el <b>protector auditivo</b> que te entreguen.</li></ul>', k: 'Primero la mirada y la seña.' },
      { s: 'cf_me_manos', t: 'Nunca metas las manos con la máquina andando', x: '<ul><li>Si se traba, se cae una bandeja o ves un problema, <b>avisa al operador</b>.</li><li>Solo el operador o mantención autorizada destraba o limpia, con la máquina <b>detenida, apagada y bloqueada</b>.</li><li>Sin joyas, ropa suelta ni pelo fuera de la cofia cerca de la máquina.</li></ul>', k: 'Detener, apagar y bloquear antes de tocar.' },
      { s: 'cf_me_avisa', t: 'Ves algo raro: no lo toques, infórmalo', x: 'Las varillas, correas, ventiladores y ruedas <b>se mueven todo el tiempo</b>. Nadie interviene una parte en movimiento.<ul><li><b>1. Lo veo:</b> una rama trabada, una bandeja caída, un ruido raro, una fuga o una pieza suelta.</li><li><b>2. Aviso</b> al operador con la mirada y la seña de <b>¡pare!</b>, y a mi jefatura.</li><li><b>3. El operador detiene, apaga y bloquea</b>. Recién ahí lo arregla quien está autorizado.</li></ul>Informar <b>todo</b>, aunque parezca chico, evita accidentes.', k: 'Se mira, no se toca. Se informa todo.' },
      { s: 'cf_me_subir', t: 'Solo sube el personal autorizado', x: '<ul><li>A la máquina <b>solo sube quien está autorizado</b>, en su puesto y con la máquina detenida.</li><li>Nunca te subas a las escaleras o costados <b>para que te lleve</b>.</li><li>Para bajar y subir: <b>tres puntos de apoyo</b>, nunca saltando.</li></ul>', k: 'La máquina no es transporte.' }
    ],
    quiz: [
      { s: 'cf_me_maquina', v: [
        { q: '¿Cómo cosecha la máquina la frambuesa?', o: ['Pasa sobre la hilera, sacude las cañas y recoge la fruta que cae', 'Corta las matas completas', 'Aspira la fruta con una manguera', 'La cosecha a mano un robot'], w: 'Las varillas sacuden la mata; la fruta madura cae y la correa la sube.' },
        { q: 'La cosechadora es una máquina grande, ruidosa y que vibra.', vf: true, w: 'Verdadero. Por eso hay que mantenerse lejos de su camino.' },
        { q: '¿Por dónde pasa la cosechadora?', o: ['Por encima de la hilera, a horcajadas', 'Por el lado del camino', 'Por debajo de los alambres', 'Solo por la cabecera'], w: 'La máquina abraza la hilera y avanza sobre ella.' }] },
      { s: 'cf_me_esquema', v: [
        { q: '¿Qué hacen las varillas amarillas de la máquina?', o: ['Sacuden la mata para que caiga la fruta madura', 'Cortan las cañas', 'Riegan las matas', 'Iluminan la hilera'], w: 'Vibran y sacuden las cañas por ambos lados.' },
        { q: '¿Para qué sirven los ventiladores de la cosechadora?', o: ['Para botar hojas y palitos de la fruta', 'Para refrescar al operador', 'Para secar la fruta', 'Para espantar abejas'], w: 'Limpian la fruta antes de que llegue a las bandejas.' },
        { q: 'Las piezas de la cosechadora que se mueven pueden atrapar una mano, la ropa o el pelo.', vf: true, w: 'Verdadero. Nunca te acerques a ellas con la máquina andando.' }] },
      { s: 'cf_me_zona', v: [
        { q: 'La cosechadora viene avanzando por tu hilera. ¿Qué haces?', o: ['Salgo de su camino por el pasillo y me alejo', 'Sigo cosechando delante de ella', 'Me agacho para que pase', 'Me quedo quieto en la hilera'], w: 'Nadie se queda delante de una máquina que avanza.' },
        { q: '¿Por qué no debes quedarte en la cabecera cuando llega la máquina?', o: ['Porque ahí gira y no te ve', 'Porque se ensucia la ropa', 'Porque es zona de descanso', 'Sí puedes quedarte'], w: 'En la cabecera la máquina gira y puede pasarte por encima.' },
        { q: 'Estar cerca de la máquina es seguro si el operador es tu conocido.', vf: false, w: 'Falso. Las matas te tapan y el operador no te ve.' }] },
      { s: 'cf_me_ruido', v: [
        { q: 'Necesitas decirle algo al operador de la cosechadora. ¿Qué haces?', o: ['Busco su mirada y espero su seña de que detuvo la máquina', 'Le grito desde atrás', 'Me subo a la máquina andando', 'Le tiro una bandeja'], w: 'Con el ruido no te escucha: primero la mirada y la seña.' },
        { q: 'Si trabajas junto a la cosechadora, ¿qué EPP agregas?', o: ['El protector auditivo que me entreguen', 'Nada más', 'Una bufanda', 'Audífonos con música'], w: 'El ruido fuerte y constante daña el oído.' },
        { q: 'Con el motor encendido, el operador puede escucharte bien si gritas fuerte.', vf: false, w: 'Falso. El motor tapa tu voz.' }] },
      { s: 'cf_me_manos', v: [
        { q: 'Se trabó una rama en las varillas de la máquina. ¿Qué haces?', o: ['Aviso al operador para que detenga, apague y bloquee', 'La saco con la mano rápido', 'La empujo con un palo con la máquina andando', 'No digo nada'], w: 'Destraba solo personal autorizado, con la máquina detenida y bloqueada.' },
        { q: '¿Qué se hace antes de limpiar o destrabar la máquina?', o: ['Detenerla, apagarla y bloquearla', 'Bajar la velocidad', 'Avisar por radio y meter la mano', 'Nada, se hace rápido'], w: 'Detener, apagar y bloquear: así no arranca mientras alguien la toca.' },
        { q: 'Meter la mano en la máquina andando es aceptable si es solo un segundo.', vf: false, w: 'Falso. En un segundo la máquina atrapa la mano.' }] },
      { s: 'cf_me_avisa', v: [
        { q: 'Ves que a la cosechadora se le soltó una pieza y sigue andando. ¿Qué haces?', o: ['Le hago la seña de pare al operador y aviso a mi jefatura', 'La afirmo con la mano', 'Sigo trabajando, no es mi tema', 'Espero al final del día para contarlo'], w: 'Se informa todo de inmediato; nadie toca una parte en movimiento.' },
        { q: '¿Cuándo se puede arreglar una parte de la máquina?', o: ['Cuando está detenida, apagada y bloqueada, y lo hace quien está autorizado', 'Cuando anda despacio', 'Cuando el operador se distrae', 'En cualquier momento si eres rápido'], w: 'Detener, apagar y bloquear antes de intervenir.' },
        { q: 'Un ruido raro en la máquina hay que informarlo aunque parezca algo chico.', vf: true, w: 'Verdadero. Informar todo evita accidentes y daños.' }] },
      { s: 'cf_me_subir', v: [
        { q: 'Terminaste tu hilera y la cosechadora va hacia el mismo lado. ¿Te subes?', o: ['No, la máquina no es transporte; voy caminando', 'Sí, en la escalera', 'Sí, en el costado', 'Sí, si el operador no ve'], w: 'Solo sube el personal autorizado, en su puesto.' },
        { q: '¿Quién puede subir a la cosechadora?', o: ['Solo el personal autorizado, en su puesto', 'Cualquiera que esté cansado', 'Los que cosechan más rápido', 'Todos al final del día'], w: 'Subir sin autorización es riesgo de caída y atropello.' },
        { q: 'Para bajar de una máquina se usan tres puntos de apoyo, sin saltar.', vf: true, w: 'Verdadero. Saltar causa torceduras y caídas.' }] }
    ]
  });

  // ---------- ítems nuevos de la inducción (Daniel, 13-11-2026): cofia y joyas, comedor móvil, taller mecánico ----------
  const IND_NUEVOS = [
    { despues: 'orden', s: 'cofia', t: 'En el huerto: cofia, legionario y sin joyas',
      x: 'La frambuesa va <b>directo al consumidor</b>, sin lavar.<ul><li><b>Cofia obligatoria</b> en el huerto, con todo el pelo adentro, y el <b>legionario</b> encima.</li><li><b>Sin joyas</b>: anillos, pulseras, reloj, aros y collares se enganchan en cañas, alambres y máquinas, y pueden caer a la fruta.</li><li>En el huerto <b>no se fuma</b>.</li></ul>', k: 'Cofia, legionario y manos sin joyas.',
      q: [
        { q: '¿Qué te pones en la cabeza para trabajar en el huerto?', o: ['La cofia con todo el pelo adentro y el legionario encima', 'Solo el legionario', 'Un jockey', 'Nada si hay sombra'], w: 'La cofia es obligatoria y el legionario va encima para el sol.' },
        { q: '¿Por qué en el huerto se trabaja sin anillos ni pulseras?', o: ['Se enganchan en cañas, alambres y máquinas, y pueden caer a la fruta', 'Para que no se rayen', 'Porque se pierden', 'Sí se pueden usar'], w: 'Una joya enganchada puede arrancar un dedo.' },
        { q: 'En el huerto de frambuesas está prohibido fumar.', vf: true, w: 'Verdadero. Contamina la fruta y puede iniciar un incendio.' }] },
    { despues: 'cofia', s: 'comedor', t: 'Comedores móviles, agua potable y basura',
      x: 'En el campo hay <b>comedores móviles</b>: carritos con <b>sombra</b>, mesa y bancas, <b>bidón de agua potable</b>, <b>toalla de papel</b> y <b>basurero</b>, con un <b>baño químico</b> cerca.<ul><li>Se come <b>solo en el comedor</b>, nunca en la hilera.</li><li>Lávate las manos antes de comer y después del baño.</li><li>La <b>basura al basurero</b>: nada queda en el huerto.</li></ul>', k: 'Comer en el comedor; la basura, en su lugar.',
      q: [
        { q: '¿Dónde comes durante la jornada en el campo?', o: ['En el comedor móvil', 'En la hilera', 'Arriba del tractor', 'Donde me pille la hora'], w: 'El comedor tiene sombra, agua potable y basurero.' },
        { q: '¿Dónde va la botella vacía de tu bebida?', o: ['Al basurero del comedor', 'Bajo la mata', 'Al canal', 'Enterrada'], w: 'La basura en el huerto contamina y atrae ratones.' },
        { q: 'El comedor móvil tiene agua potable y toalla de papel para lavarse y secarse.', vf: true, w: 'Verdadero. Y un baño químico cerca.' }] },
    { despues: 'comedor', s: 'mecanizada', t: 'Cosecha mecanizada, tractores y ruido',
      x: 'Parte de la frambuesa se cosecha con una <b>máquina cosechadora</b>, parecida a la de arándanos: es alta, <b>pasa por encima de la hilera</b>, sacude las cañas y la fruta cae a una correa que la sube a las bandejas. También circulan <b>tractores</b>.<ul><li>Tractores y máquinas <b>meten ruido</b>: el operador no te escucha. Busca su <b>mirada</b> y espera su <b>seña</b>.</li><li>Nunca te pongas <b>delante</b> de la máquina en la hilera por donde avanza, ni en la <b>cabecera</b> donde gira. Las matas altas te tapan.</li><li><b>Nunca intervengas partes en movimiento</b>: si ves algo raro, <b>informa</b> al operador y a tu jefatura; se detiene, apaga y bloquea antes de arreglar.</li><li>A la máquina y al tractor <b>solo sube el personal autorizado</b>; no son transporte.</li></ul>', k: 'Lejos de su camino y con contacto visual.',
      q: [
        { q: 'La cosechadora viene avanzando por tu hilera. ¿Qué haces?', o: ['Salgo de su camino por el pasillo y me alejo', 'Sigo cosechando delante de ella', 'Me agacho para que pase', 'Me quedo quieto en la hilera'], w: 'Nadie se queda delante de una máquina que avanza: el operador no te ve.' },
        { q: 'Necesitas hablar con el operador de un tractor o de la cosechadora. ¿Qué haces?', o: ['Busco su mirada y espero su seña de que detuvo la máquina', 'Le grito desde atrás', 'Me subo con la máquina andando', 'Le tiro una bandeja'], w: 'Con el ruido no te escucha: primero la mirada y la seña.' },
        { q: 'Meter la mano en la cosechadora andando es aceptable si es solo un segundo.', vf: false, w: 'Falso. En un segundo la máquina atrapa la mano. Se detiene, apaga y bloquea antes.' }] },
    { despues: 'pts', s: 'taller', t: 'Taller mecánico: solo personal autorizado',
      x: 'En el fundo hay un <b>taller mecánico</b> donde se <b>reparan y adaptan</b> tractores, la cosechadora y otros equipos.<ul><li><b>Solo entra el personal autorizado</b>: hay soldadura, esmeril, piezas pesadas, equipos levantados y combustibles.</li><li>Si necesitas algo del taller, <b>pídelo a tu jefatura</b>; no entres ni uses sus herramientas.</li><li>Un equipo con <b>tarjeta y candado</b> está en mantención: <b>no se usa</b> ni se enciende.</li><li>No mires la luz de la <b>soldadura</b>: daña los ojos.</li></ul>', k: 'Si no estás autorizado, no entras.',
      q: [
        { q: 'Necesitas una herramienta que está en el taller mecánico. ¿Qué haces?', o: ['La pido a mi jefatura; no entro si no estoy autorizado', 'Entro y la saco', 'Entro cuando no hay nadie', 'Le pido a un amigo que me abra'], w: 'Al taller solo entra el personal autorizado.' },
        { q: 'Un tractor tiene tarjeta y candado de mantención. ¿Qué significa?', o: ['Está en reparación: no se usa ni se enciende', 'Que está listo para usarse', 'Que es nuevo', 'Que es del jefe'], w: 'La tarjeta y el candado protegen a quien lo está reparando.' },
        { q: 'Mirar la luz de la soldadura sin protección daña los ojos.', vf: true, w: 'Verdadero. La luz del arco quema la vista.' }] }
  ];
  try {
    SI_CONT.temas.filter(t => t.id === 'induccion').forEach(t => {
      const e = t.emp[0], Pt = v => typeof window.siTxt === 'function' ? window.siTxt(v, e) : v;
      IND_NUEVOS.forEach(it => {
        const i = t.learn.findIndex(l => l.s === 'si_in_' + it.despues); const at = i >= 0 ? i + 1 : t.learn.length;
        t.learn.splice(at, 0, { s: 'si_in_' + it.s, t: Pt(it.t), x: Pt(it.x), k: Pt(it.k) });
        const j = t.quiz.findIndex(q => q.s === 'si_in_' + it.despues + '_q'); const qa = j >= 0 ? j + 1 : t.quiz.length;
        t.quiz.splice(qa, 0, { s: 'si_in_' + it.s + '_q', v: it.q });
      });
      t.mins = Math.max(t.mins, 50);
    });
  } catch (e) { console.log('inducción nuevos ítems: ' + e); }

})();
