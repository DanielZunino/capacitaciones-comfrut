// ===== COMFRUT Nursery · base común (se carga después de mejoras_comunes.js y antes de las charlas) =====
// 1) Empresa de la persona que ingresó: window.SI_EMP = 'comfrut' | 'car' | 'snova' | 'agricap' | 'integra'
//    Todas trabajan en el Fundo Santa Sara (frambuesas): mismas charlas, mismo EPP; cambia el nombre de la empresa y su mutualidad.
// 2) Vestimenta de los dibujos: legionario con cubrenuca, ropa de manga larga, lentes de seguridad y zapatos de seguridad. Sin casco.
// 3) Textos: [[L:..|X:..|A:texto campo|I:..]] usa siempre la versión de campo (A).
//    Marcas de mutualidad: {MUT} ACHS / IST / tu mutualidad · {LAMUT} la ACHS / el IST / la mutualidad de tu empresa · {TEL} 1404 / 800 204 000 / (vacío)
(function () {
  if (window.__siBase) return; window.__siBase = true;
  window.SI_EMP = window.SI_EMP || 'comfrut';
  const VCAMPO = { helmet: false, hat: 'legion', glasses: true, shirt: '#2B4C9B', pants: '#37474F', gloves: false };
  const VEST = { comfrut: VCAMPO, car: VCAMPO, snova: VCAMPO, agricap: VCAMPO, integra: VCAMPO };
  window.SI_VEST = VEST;
  if (typeof W === 'function' && !W.__si) {
    const W0 = W;
    W = function (x, y, o) {
      o = Object.assign({}, o || {});
      const v = VEST[o.emp || window.SI_EMP] || VCAMPO;
      Object.keys(v).forEach(k => { if (o[k] === undefined) o[k] = v[k]; });
      if (o.helmet === true) o.helmet = '#FFC20E';
      if (o.cofia && o.helmet) o.cofia = false;
      let g = W0(x, y, Object.assign({}, o, { anim: undefined }));
      if (o.hat === 'legion' && !o.helmet && !o.cofia) {   // gorro legionario: visera y paño que cubre la nuca
        const P = POSES[o.pose || 'stand'], s = o.s || 1, fx = o.flip ? -1 : 1, X = x + P.head[0] * s * fx, Y = y + P.head[1] * s;
        if (o.cofiaCampo !== false)   // cofia (malla blanca) bajo el legionario: asoma como una franja blanca bajo el ala
          g += `<path d="M${X - 10.5 * s},${Y - 1.2 * s} H${X + 10.5 * s}" stroke="#FFFFFF" stroke-width="${1.9 * s}" fill="none"/><path d="M${X - 10.5 * s},${Y - 1.2 * s} H${X + 10.5 * s}" stroke="#90A4AE" stroke-width="${.35 * s}" stroke-dasharray="${.7 * s} ${.7 * s}" fill="none"/>`;
        g += `<path d="M${X - 10.6 * s},${Y - 2 * s} Q${X - 11 * s},${Y - 14.5 * s} ${X},${Y - 14 * s} Q${X + 11 * s},${Y - 14.5 * s} ${X + 10.6 * s},${Y - 2 * s} Z" fill="${o.hatColor || '#F1E3C2'}" stroke="#22303A" stroke-width="${1 * s}"/>`
          + `<path d="M${X + 9 * s * fx},${Y - 3 * s} q${8 * s * fx},${-.5 * s} ${9 * s * fx},${2.4 * s} l${-9.5 * s * fx},${.4 * s} z" fill="${o.hatColor || '#F1E3C2'}" stroke="#22303A" stroke-width="${.9 * s}"/>`
          + `<path d="M${X - 10 * s * fx},${Y - 3 * s} q${-3 * s * fx},${9 * s} ${-1 * s * fx},${15 * s} l${6 * s * fx},${-1 * s} q${-2 * s * fx},${-6 * s} ${1 * s * fx},${-13 * s} z" fill="${o.hatColor || '#F1E3C2'}" stroke="#22303A" stroke-width="${.8 * s}"/>`;
      }
      return o.anim ? `<g class="${o.anim}">${g}</g>` : g;
    };
    W.__si = true;
  }
  // Mutualidad de cada empresa (Daniel, 12-11-2026): Comfrut ACHS, CAR IST; las demás, "su respectiva mutualidad"
  const MUTS = {
    comfrut: { MUT: 'ACHS', LAMUT: 'la ACHS', TEL: '1404' },
    car: { MUT: 'IST', LAMUT: 'el IST', TEL: '800 204 000' }
  };
  const MUT_DEF = { MUT: 'tu mutualidad', LAMUT: 'la mutualidad de tu empresa', TEL: '' };
  window.CF_MUT = e => MUTS[e || window.SI_EMP] || MUT_DEF;
  window.siTxt = function (s, emp) {
    if (typeof s !== 'string') return s;
    if (s.indexOf('[[') >= 0) s = s.replace(/\[\[([\s\S]*?)\]\]/g, (m, body) => {
      const parts = {}; body.split('|').forEach(p => { const k = p.match(/^\s*([LXAI]):([\s\S]*)$/); if (k) parts[k[1]] = k[2]; });
      return parts.A !== undefined ? parts.A : (parts.L || '');
    });
    if (s.indexOf('{') >= 0 && /\{(MUT|LAMUT|LAMUTC|TEL)\}/.test(s)) {
      const M = window.CF_MUT(emp);
      s = s.replace(/\{LAMUTC\}/g, M.LAMUT.charAt(0).toUpperCase() + M.LAMUT.slice(1)).replace(/\{LAMUT\}/g, M.LAMUT).replace(/\{MUT\}/g, M.MUT).replace(/\{TEL\}/g, M.TEL);
      // gramática: "a el IST" → "al IST", "de el IST" → "del IST"; sin número: se limpian los restos
      s = s.replace(/\ba el IST\b/g, 'al IST').replace(/\bde el IST\b/g, 'del IST').replace(/\bA el IST\b/g, 'Al IST').replace(/\ba <b>el IST/g, 'al <b>IST').replace(/\bde <b>el IST/g, 'del <b>IST');
      if (!M.TEL) s = s.replace(/\s*\(\s*\)/g, '').replace(/:\s*<b>\s*<\/b>/g, '').replace(/<b>\s*<\/b>/g, '').replace(/\s+([,.;:)])/g, '$1').replace(/:\s*,/g, ',').replace(/ {2,}/g, ' ');
    }
    return s;
  };
})();
