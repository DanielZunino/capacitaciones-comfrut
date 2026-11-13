// ===== COMFRUT Nursery · Fundo Santa Sara · portal único para Comfrut y sus contratistas (se carga después de cf_base.js y de las charlas) =====
// Con el RUT, el servidor dice la empresa de la persona (persona.emp) y el portal muestra:
//   logo, colores, vestimenta de los dibujos, secciones y charlas de SU empresa, inducción de SU empresa y su Reglamento Interno.
(function () {
  if (window.__siExtra) return; window.__siExtra = true;

  // ---------- 1) Empresas del grupo
  const LOGO_CF = 'data:image/jpeg;base64,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';
  // Comfrut es la mandante; CAR, Snova, Agricap e Integra trabajan en el fundo como contratistas. Mismas charlas para todos; cambian nombre y mutualidad.
  const EMPRESAS = window.SI_EMPRESAS = {
    comfrut: { k: 'comfrut', n: 'Comfrut Nursery S.A.', corto: 'Comfrut Nursery', rut: '96.764.220-7', logo: LOGO_CF, ar: 3.33, c1: '#1F2FD6', c2: '#2FC3F5', head: 'COMFRUT NURSERY S.A.', voz: 'Comfrut Nursery' },
    car: { k: 'car', n: 'CAR', corto: 'CAR', rut: '', logo: LOGO_CF, ar: 3.33, c1: '#1F2FD6', c2: '#2FC3F5', head: 'CAR · CONTRATISTA', voz: 'CAR', contratista: true },
    snova: { k: 'snova', n: 'Snova SpA', corto: 'Snova', rut: '', logo: LOGO_CF, ar: 3.33, c1: '#1F2FD6', c2: '#2FC3F5', head: 'SNOVA SPA · CONTRATISTA', voz: 'Snova', contratista: true },
    agricap: { k: 'agricap', n: 'Agricap', corto: 'Agricap', rut: '', logo: LOGO_CF, ar: 3.33, c1: '#1F2FD6', c2: '#2FC3F5', head: 'AGRICAP · CONTRATISTA', voz: 'Agricap', contratista: true },
    integra: { k: 'integra', n: 'Integra Prevención SpA', corto: 'Integra Prevención', rut: '78.337.672-5', logo: LOGO_CF, ar: 3.33, c1: '#1F2FD6', c2: '#2FC3F5', head: 'INTEGRA PREVENCIÓN · ASESORÍA', voz: 'Integra Prevención', contratista: true },
    independiente: { k: 'independiente', n: 'Independiente (boleta o factura)', corto: 'Independiente', rut: '', logo: LOGO_CF, ar: 3.33, c1: '#1F2FD6', c2: '#2FC3F5', head: 'TRABAJADOR INDEPENDIENTE · BOLETA O FACTURA', voz: 'trabajador independiente', contratista: true }
  };
  const ORDEN_EMP = ['comfrut', 'car', 'snova', 'agricap', 'integra', 'independiente'];
  const GRUPO = { n: 'Comfrut Nursery', c1: '#1F2FD6', c2: '#2FC3F5', head: 'COMFRUT NURSERY · FUNDO SANTA SARA' };
  const sinT = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
  const empDeNombre = s => { const t = sinT(s).trim(); if (!t) return ''; if (/INDEPENDIENTE|BOLETA|FACTURA|HONORARIO/.test(t)) return 'independiente'; if (/COMFRUT/.test(t)) return 'comfrut'; if (/^C\.?A\.?R\.?\b|\bCAR\b/.test(t)) return 'car'; if (/SNOVA/.test(t)) return 'snova'; if (/AGRICAP/.test(t)) return 'agricap'; if (/INTEGRA/.test(t)) return 'integra'; return 'comfrut'; };
  const empDe = p => (p && (EMPRESAS[p.emp] ? p.emp : empDeNombre(p.empresa))) || '';
  window.siEmpDeNombre = empDeNombre;

  // Razón social y RUT en diplomas y certificados
  try { Object.keys(RAZONES).forEach(k => delete RAZONES[k]); ORDEN_EMP.forEach(k => { RAZONES[EMPRESAS[k].n] = EMPRESAS[k].rut; }); } catch (e) {}

  // ---------- 2) Secciones (cada una dice para qué empresas existe)
  const SI_SECS = [
    { id: 'todos', t: 'Para todos', ic: '⭐', c: '#1F2FD6', d: 'Lo que todo el equipo del fundo debe saber', emp: ORDEN_EMP },
    { id: 'campo', t: 'Campo de frambuesas', ic: '🫐', c: '#C2185B', d: 'Reglas del huerto, cosecha a mano y mecanizada, poda, estructura, invernaderos, baños, agua y comedores', emp: ORDEN_EMP },
    { id: 'tractor', t: 'Tractor y maquinaria', ic: '🚜', c: '#0D1B8C', d: 'Vuelco, toma de fuerza e implementos', emp: ORDEN_EMP }
  ];
  const ORDEN_SEC = SI_SECS.map(s => s.id);

  // ---------- 3) Normas que respaldan cada charla (van en el registro de la capacitación)
  const N = {
    l16744: 'Ley 16.744: seguro social contra accidentes del trabajo y enfermedades profesionales; art. 68, obligación de implantar medidas de prevención y proporcionar los EPP.',
    ds44: 'DS 44/2023 MINTRAB: gestión preventiva de los riesgos laborales; art. 15, deber de informar los riesgos laborales; art. 16, capacitación en seguridad y salud en el trabajo.',
    ds594: 'DS 594/1999 MINSAL: condiciones sanitarias y ambientales básicas en los lugares de trabajo.',
    ds57: 'DS 57/2019 MINSAL: clasificación, etiquetado y fichas de datos de seguridad (HDS) de sustancias químicas.',
    l20949: 'Código del Trabajo, arts. 211-F a 211-J (Ley 20.949): 25 kg como máximo sin ayuda mecánica; 20 kg para menores de 18 años y mujeres.',
    l20096: 'Ley 20.096 y DS 594 (arts. 109 a, b y c): protección de trabajadores expuestos a radiación ultravioleta de origen solar.',
    l21643: 'Ley 21.643 (Ley Karin): prevención, investigación y sanción del acoso laboral, sexual y la violencia en el trabajo.',
    prexor: 'Protocolo de Exposición Ocupacional a Ruido (PREXOR), MINSAL.',
    tmert: 'Protocolo de Vigilancia para Trabajadores Expuestos a Factores de Riesgo de Trastornos Musculoesqueléticos de Extremidades Superiores (TMERT), MINSAL.',
    psico: 'Protocolo de Vigilancia de Riesgos Psicosociales en el Trabajo (cuestionario CEAL-SM/SUSESO), MINSAL.',
    res156: 'Circular SUSESO (Res. Ex. 156): procedimiento ante accidentes graves y fatales.',
    l18290: 'Ley 18.290 de Tránsito: licencias de conducir y normas de circulación.',
    ds40: 'DS 40/1969 MINTRAB: reglamento sobre prevención de riesgos profesionales; deber de informar los riesgos.',
    dec158: 'DS 158/2014 y Res. 2.196 SAG: uso de plaguicidas, periodo de carencia y de reingreso.'
  };
  const NORMAS_SI = {
    induccion: [N.ds44, N.l16744, N.ds40, N.ds594],
    autocuidado: [N.l16744, N.ds44], peligros: [N.ds44, N.ds40], epp: [N.l16744, N.ds594], orden: [N.ds594], cargas: [N.l20949, N.ds594],
    accidente: [N.l16744, N.res156], incendios: [N.ds594], trayecto: [N.l16744, N.l18290], emergencias: [N.ds594, N.ds44], senaletica: [N.ds594],
    uv: [N.l20096], calor: [N.ds594], enfermedades: [N.l16744, N.ds594], hanta: [N.ds594], psicosocial: [N.psico, N.ds44], karin: [N.l21643], iluminacion: [N.ds594],
    higiene: [N.ds594], maquinas: [N.ds594, N.ds44], cortes: [N.ds594], pisos: [N.ds594], calor_vapor: [N.ds594], quimicos: [N.ds57, N.ds594], aire_comprimido: [N.ds594],
    electrico: [N.ds594], ruido: [N.prexor, N.ds594], tmert: [N.tmert], despacho: [N.ds594, N.l18290], camaras_frio: [N.ds594],
    pk_lineas: [N.ds594, N.ds44], pk_recepcion: [N.ds594], pk_hidro: [N.ds594, N.ds57], pk_pisos: [N.ds594], pk_embalaje: [N.ds594, N.l20949], pk_quimicos: [N.ds57, N.ds594],
    pk_tmert: [N.tmert], pk_noche: [N.ds594, N.psico], pk_ruido: [N.prexor],
    ag_cosecha: [N.ds594], ag_poda: [N.ds594], ag_terreno: [N.ds594], ag_abejas: [N.ds594], ag_transporte: [N.l18290, N.ds594],
    ag_aplicacion: [N.ds57, N.dec158, N.ds594], ag_reingreso: [N.dec158, N.ds57], ag_tractor: [N.ds594, N.l18290], ag_tdf: [N.ds594],
    herramientas: [N.ds594], altura: [N.ds594], grua_operacion: [N.l18290, N.ds594], horquilla_checklist: [N.ds594], camion_conduccion: [N.l18290], vehiculo_menor: [N.l18290],
    pvd: [N.ds594, N.tmert], oficina: [N.ds594], visitas_terreno: [N.ds44, N.ds594],
    cf_cosecha: [N.ds594, N.tmert, N.l20949, N.l20096], cf_poda: [N.ds594, N.tmert], cf_estructura: [N.ds594, N.l20949], cf_invernadero: [N.ds594, N.dec158], cf_servicios: [N.ds594], cf_huerto: [N.ds594], cf_mecanizada: [N.ds594, N.prexor, N.ds44]
  };

  // ---------- 4) Construir las charlas de una empresa (textos con [[L:..|X:..|A:..|I:..]] resueltos)
  const C = window.SI_CONT || { temas: [] };
  const deep = (o, f) => Array.isArray(o) ? o.map(x => deep(x, f)) : (o && typeof o === 'object') ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, deep(v, f)])) : f(o);
  const cvQ = (q, e) => { const r = s => window.siTxt(s, e); const one = x => x.vf !== undefined ? { q: r(x.q), vf: x.vf, w: r(x.w) } : { q: r(x.q), o: (x.o || []).map(r), a: 0, w: r(x.w) };
    const vs = q.v || []; return Object.assign({ s: q.s }, one(vs[0]), { v: vs.slice(1).map(one) }); };
  let EMP_HECHA = '';
  window.CF_CONSTRUIR = e => construir(e);   // para pruebas
  function construir(e) {
    if (!EMPRESAS[e]) e = 'comfrut';
    if (EMP_HECHA === e && TOPICS.length) { window.SI_EMP = e; if (M_ACT !== EMPRESAS[e]) marca(e); try { window.__siAjInd && window.__siAjInd(e); } catch (er) {} return; }
    window.SI_EMP = e;
    const temas = C.temas.filter(t => (t.emp || []).indexOf(e) >= 0);
    const nuevos = temas.map(t => {
      const r = s => window.siTxt(s, e);
      const o = { id: t.id, sec: t.sec === 'induccion' ? 'todos' : t.sec, title: r(t.title), thumb: t.thumb, mins: t.mins, dur: t.mins,
        learn: (t.learn || []).map(l => { const x = { s: l.s, t: r(l.t), x: r(l.x) }; if (l.k) x.k = r(l.k); if (l.puesto) x.puesto = true; return x; }),
        quiz: (t.quiz || []).map(q => cvQ(q, e)).concat(window.__siActsDe ? window.__siActsDe(t.id, e) : []) };
      return o;
    });
    nuevos.sort((a, b) => (a.id === 'induccion' ? -1 : b.id === 'induccion' ? 1 : 0) || (ORDEN_SEC.indexOf(a.sec) - ORDEN_SEC.indexOf(b.sec)));
    TOPICS.splice(0, TOPICS.length, ...nuevos);
    Object.keys(NORMAS).forEach(k => delete NORMAS[k]);
    nuevos.forEach(t => { NORMAS[t.id] = { obj: 'Que la persona trabajadora conozca los peligros, riesgos y medidas de control de: ' + t.title.replace(/\s*\(IRL\)\s*$/, '') + '.', n: (NORMAS_SI[t.id] || [N.ds44, N.ds594]).slice() }; });
    // secciones de la empresa (solo las que tienen charlas)
    const secs = SI_SECS.filter(s => s.emp.indexOf(e) >= 0 && nuevos.some(t => t.sec === s.id)).map(s => ({ id: s.id, t: s.t, ic: s.ic, c: s.c, d: s.d }));
    SECCIONES.splice(0, SECCIONES.length, ...secs);
    // plan personal: primero lo crítico de cada sección
    try {
      PLAN_CFG.ordenSec = secs.map(s => s.id);
      PLAN_CFG.critico = { campo: ['cf_huerto', 'cf_cosecha', 'cf_mecanizada', 'cf_servicios', 'cf_poda', 'ag_terreno', 'cf_estructura', 'ag_reingreso'], tractor: ['ag_tractor', 'ag_tdf'] };
      PLAN_CFG.base = ['peligros', 'accidente', 'epp', 'cargas', 'trayecto', 'emergencias', 'senaletica', 'karin', 'psicosocial', 'enfermedades', 'hanta', 'iluminacion', 'orden', 'incendios'];
      PLAN_TEMPORADA.calor = [10, 11, 0, 1]; PLAN_TEMPORADA.hanta = [8, 9, 10, 11];
      delete PLAN_TEMPORADA.transito;
      INICIO_PROGRAMA = '16-11-2026';
    } catch (er) {}
    // inducción: riesgos del puesto y reglamento interno de su empresa
    try {
      IND_PUESTO = {}; IND_TRANSV = '';
      IND_REGLAMENTOS = {}; IND_REGLAMENTOS[EMPRESAS[e].n] = SCRIPT_URL + '?riohs=1&e=' + e;
      IND_FORMULARIO = 'https://danielzunino.github.io/inscripcion-san-ignacio/?e=comfrut';
      IND_REGLAMENTOS = {}; IND_REGLAMENTOS['Comfrut Nursery S.A.'] = SCRIPT_URL + '?riohs=1&e=comfrut'; if (e !== 'comfrut') IND_REGLAMENTOS[EMPRESAS[e].n] = SCRIPT_URL + '?riohs=1&e=' + e;
    } catch (er) {}
    EMP_HECHA = e;
    try { window.__siAjInd && window.__siAjInd(e); } catch (er) {}
    marca(e);
  }
  window.siConstruir = construir;

  // ---------- 5) Marca de la empresa: logo, colores, nombre en diplomas, camiones y grúas
  const mix = (hex, k) => { const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255; r = Math.round(r * k); g = Math.round(g * k); b = Math.round(b * k); return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join(''); };
  const imgs = {};
  const imgDe = src => { if (!src) return null; if (!imgs[src]) { const i = new Image(); i.src = src; imgs[src] = i; } return imgs[src]; };
  let M_ACT = null;
  window.SI_C1 = () => (M_ACT || GRUPO).c1;
  window.SI_C2 = () => (M_ACT || GRUPO).c2;
  window.SI_HEAD = () => (M_ACT || GRUPO).head;
  // carita del nivel: cofia (planta y packing), legionario (campo) o pelo (oficina / sin ingresar)
  window.SI_GORRO = c => { const e = M_ACT ? M_ACT.k : '';
    if (e === 'lacteos' || e === 'agroex') return `<path d="M17,46 Q12,14 50,12 Q88,14 83,46 Z" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/><rect x="16" y="40" width="68" height="7" rx="3.5" fill="${c}"/>`;
    if (e) return `<path d="M16,46 Q14,12 50,11 Q86,12 84,46 Z" fill="#E9D8A6" stroke="#B59A5A" stroke-width="2"/><rect x="12" y="40" width="76" height="7" rx="3.5" fill="${c}"/><path d="M84,42 q14,2 16,10 l-18,-2z" fill="#E9D8A6" stroke="#B59A5A" stroke-width="1.5"/>`;
    return `<path d="M20,52 Q16,22 50,20 Q84,22 80,52 Q74,34 50,34 Q26,34 20,52 Z" fill="#4E342E"/>`; };
  window.SI_LOGO = () => (M_ACT && M_ACT.logo) ? imgDe(M_ACT.logo) : null;
  function marca(e) {
    const E = EMPRESAS[e]; M_ACT = E;
    const r = document.documentElement.style, dark = mix(E.c1, .62), dark2 = mix(E.c1, .8), line = mix(E.c1, 1.05);
    r.setProperty('--dark', dark); r.setProperty('--dark2', dark2); r.setProperty('--line', line); r.setProperty('--acc', E.c2); r.setProperty('--c1', E.c1);
    try { if (window.MARCA) Object.assign(window.MARCA, { nombre: E.corto, c1: E.c1, c2: E.c2, fachada: E.corto.toUpperCase(), corto: E.corto.split(' ')[0].toUpperCase() }); } catch (er) {}
    try { const L = window.__mjLOGO; if (L) { L.src = E.logo || ''; L.ar = E.ar || 2; } } catch (er) {}
    const bar = document.querySelector('.logoBar');
    if (bar) bar.classList.remove('siGrupo');
    if (bar) bar.innerHTML = `<img alt="Comfrut Nursery" src="${E.logo}"><span>${E.contratista ? E.head + '<br>FUNDO SANTA SARA' : 'FUNDO SANTA SARA<br>PROGRAMA DE CAPACITACIÓN'}</span>`;
    document.title = 'Capacitaciones ' + E.corto;
    document.body.classList.add('siIn');
  }
  function marcaGrupo() {
    M_ACT = null; window.SI_EMP = 'comfrut';
    const r = document.documentElement.style; r.setProperty('--dark', '#0B1580'); r.setProperty('--dark2', '#1A27B0'); r.setProperty('--line', '#2C3FE0'); r.setProperty('--acc', '#2FC3F5'); r.setProperty('--c1', '#1F2FD6');
    const bar = document.querySelector('.logoBar');
    if (bar) { bar.classList.add('siGrupo');
      bar.innerHTML = `<div class="siGm cfLogo"><img alt="Comfrut Nursery" src="${LOGO_CF}"></div><div class="siG2">Programa de Capacitación</div><div class="siGl"></div>
        <div class="siG1">FUNDO SANTA SARA · FRAMBUESAS</div><div class="cfEmp">Comfrut Nursery y empresas contratistas: CAR · Snova · Agricap</div>`; }
    document.body.classList.remove('siIn');
  }
  const css = document.createElement('style');
  css.textContent = `body:not(.siIn) #secciones, body:not(.siIn) .sec, body:not(.siIn) #bDS44 { display:none !important; }
.logoBar { border-bottom-color:var(--acc) !important; min-height:64px; } .ruta { border-left-color:var(--acc) !important; }
.logoBar img { height:44px !important; width:auto !important; max-width:58% !important; object-fit:contain; }
.logoBar .siLogos { display:flex; align-items:center; gap:10px; flex:none; } .logoBar .siLogos img { height:38px !important; max-width:none !important; }
.logoBar.siGrupo { display:block !important; text-align:center; padding:14px 12px 12px !important; }
.logoBar .siG1 { font-size:11px; font-weight:bold; letter-spacing:3px; color:#6B7A90; } .logoBar .siG2 { font-size:21px; font-weight:800; color:#1F2FD6; margin-top:2px; line-height:1.15; }
.logoBar .siGl { width:46px; height:3px; border-radius:2px; background:#2FC3F5; margin:9px auto 11px; }
.logoBar .siGg { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.logoBar .siGt { background:#fff; border:1px solid #E3E8F1; box-shadow:0 2px 6px rgba(18,53,127,.08); border-radius:14px; padding:10px 6px 9px; display:flex; flex-direction:column; align-items:center; gap:7px; }
.logoBar .siGm { height:42px; display:flex; align-items:center; justify-content:center; width:100%; }
.logoBar .siGm img { height:42px !important; width:auto !important; max-width:92% !important; object-fit:contain; }
.logoBar .siGi { width:42px; height:42px; border-radius:50%; background:#1F3A5F; display:flex; align-items:center; justify-content:center; font-size:22px; box-shadow:0 0 0 3px #F2B33D55; }
.logoBar .siGn { font-size:12.5px; font-weight:bold; color:#1F3A5F; line-height:1.2; }
.logoBar .cfLogo { height:auto; margin:2px auto 6px; } .logoBar .cfLogo img { height:56px !important; width:auto !important; max-width:80% !important; object-fit:contain; }
.logoBar .cfEmp { font-size:12.5px; color:#4A5664; margin-top:6px; line-height:1.35; }
.logoBar .siNom { color:var(--c1); font-weight:bold; font-size:15px; letter-spacing:1px; line-height:1.2; max-width:52%; }
.siEmpBtns { display:grid; grid-template-columns:1fr 1fr; gap:10px; } .siEmpBtns a { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; min-height:96px;
  background:#F7F8FA; border:2px solid #E2E3E8; border-radius:14px; padding:10px; text-decoration:none; color:#1F2937; font-weight:bold; font-size:14px; text-align:center; }
.siEmpBtns a img { height:40px; width:auto; max-width:90%; object-fit:contain; } .siEmpBtns a span.n { font-size:15px; color:#1F3A5F; }`;
  document.head.appendChild(css);

  // ---------- 6) Empresa de la persona: se arma todo al ingresar (y al volver con la sesión guardada)
  const empSesion = () => { try { return empDe(RUTA && RUTA.persona); } catch (e) { return ''; } };
  const R0 = renderHome;
  renderHome = function () {
    const e = window.__siVista ? window.__siVista() : empSesion();
    if (e) construir(e); else { if (!TOPICS.length || EMP_HECHA !== 'comfrut') construir('comfrut'); marcaGrupo(); }
    return R0.apply(this, arguments);
  };
  // texto de la cabecera de secciones
  try { const s = document.querySelector('#s-home .sec'); if (s) s.textContent = 'TUS CHARLAS POR SECCIÓN'; } catch (e) {}

  // ---------- 7) Validación de un diploma: se arma la empresa del diploma antes de mostrar su registro
  const V0 = validar;
  validar = async function (code) {
    try { const d = await fetch(SCRIPT_URL + '?codigo=' + encodeURIComponent(code)).then(r => r.json()); const e = d && d.ok ? empDeNombre(d.empresa) : ''; if (e) construir(e); } catch (er) {}
    return V0.apply(this, arguments);
  };
  esAntiguo = function () { return false; };

  // ---------- 8) Inscripción: si el sistema no reconoce el RUT, elige su empresa y completa la ficha guiada
  const INSC = 'https://danielzunino.github.io/inscripcion-san-ignacio/?e=comfrut';   // ficha guiada (una sola; ahí se elige la empresa)
  const botonesEmp = () => `<div class="siEmpBtns" style="grid-template-columns:1fr"><a href="${INSC}" target="_blank" rel="noopener"><img alt="" src="${LOGO_CF}"><span class="n">Ficha de inscripción del Fundo Santa Sara</span><span style="font-weight:normal;font-size:13px">Comfrut Nursery, CAR, Snova, Agricap e Integra</span></a></div>`;
  alertaNomina = function (tipo, rut) {
    let m = document.getElementById('nomModal'); if (!m) { m = document.createElement('div'); m.id = 'nomModal'; document.body.appendChild(m); }
    const pend = tipo === 'pendiente';
    m.innerHTML = `<div class="nmbox"><div class="nmic">${pend ? '⏳' : '⚠️'}</div>
      <h3>${pend ? 'Tu inscripción está en revisión' : 'El sistema no te reconoce'}</h3>
      ${pend ? `<p>Ya recibimos tu inscripción${rut ? ' (RUT ' + rut + ')' : ''}, pero <b>el área de Prevención o RR.HH. aún no la verifica y acepta</b>, según corresponda.</p><p>Apenas la acepten podrás entrar con tu RUT y tu clave. Si ya pasó más de un día, avisa a tu jefatura.</p>`
        : `<p>${rut ? 'El RUT <b>' + rut + '</b> no está en la nómina.' : 'Tu RUT no está en la nómina.'}</p>
        <p class="nmalert">Si el sistema no te reconoce, <b>debes inscribirte en la nómina del fundo</b>. El área de Prevención o RR.HH. verifica y acepta tu inscripción, según corresponda.</p>
        <p><b>Toca el botón</b> y completa la ficha de inscripción:</p>${botonesEmp()}`}
      <button class="${pend ? 'btn' : 'lnk'}" id="nmX">${pend ? 'Entendido' : 'Revisar mi RUT'}</button></div>`;
    m.className = 'on';
    document.getElementById('nmX').onclick = () => { m.className = ''; const r = document.getElementById('rutHome'); if (r && !pend) { r.focus(); r.select && r.select(); } };
    try { SFX.play('bad'); } catch (e) {}
    try { VOZ.say(pend ? 'Tu inscripción está en revisión. Apenas el área de Prevención o RR.HH. la acepte, podrás entrar.' : 'El sistema no te reconoce. Debes inscribirte en la nómina del fundo. Toca el botón y completa la ficha.'); } catch (e) {}
  };
  inscripcionPerello = function () { alertaNomina('noreg', ''); };
  window.addEventListener('click', e => {   // enlaces antiguos (#inscribirme o formulario de Google): abren la ficha guiada directo
    const a = e.target.closest && e.target.closest('a[href="#inscribirme"], a[href*="docs.google.com/forms"]'); if (!a) return;
    e.preventDefault(); e.stopImmediatePropagation(); const nm = document.getElementById('nomModal'); if (nm) nm.className = ''; window.open(INSC, '_blank', 'noopener');
  }, true);
  document.addEventListener('click', e => { if (e.target.closest && e.target.closest('#nomModal .insBtn')) setTimeout(() => { const nm = document.getElementById('nomModal'); if (nm) nm.className = ''; }, 300); }, true);   // al tocar el botón amarillo se cierra el aviso

  // ---------- 9) Repaso rápido: si el tema ya está aprobado, se reconoce aunque en este teléfono no esté guardada la clave
  try {
    if (typeof temaAprobado === 'function' && !temaAprobado.__si) {
      const vigente = ap => ap && (st.topic.id === 'induccion' ? venceInduccion(ap.fecha) - Date.now() >= 30 * 864e5 : venceAprob(ap.tema_id || st.topic.id, ap.fecha) > Date.now());
      const rk = r => String(r || '').replace(/[^0-9kK]/g, '').toUpperCase();
      const local = () => {
        try { const R = JSON.parse(localStorage.getItem('comfrut_cap_ruta') || 'null'); if (R && rk(R.rut) === rk(st.rut) && R.aprob && vigente(R.aprob[st.topic.id])) return R.aprob[st.topic.id]; } catch (e) {}
        try { const ci = JSON.parse(localStorage.getItem('comfrut_cap_ind') || 'null'); if (st.topic.id === 'induccion' && ci && rk(ci.rut) === rk(st.rut) && vigente(ci)) return ci; } catch (e) {}
        return null;
      };
      const consulta = async k => { st.hash = await rutHash(st.rut); const ctl = new AbortController(); setTimeout(() => ctl.abort(), 25000);
        return fetch(SCRIPT_URL + '?historial=' + st.hash + '&k=' + encodeURIComponent(k || ''), { signal: ctl.signal }).then(r => r.json()); };
      const desde = d => { if (d.persona) st.persona = d.persona; const ap = (d.temas || []).find(t => t.tema_id === st.topic.id) || null; return vigente(ap) ? ap : null; };
      const pedirClave = () => new Promise(res => {
        const b = document.getElementById('zBody'); if (!b) return res(null);
        b.innerHTML = `<h2>¿Ya aprobaste este tema?</h2><p>Escribe tu clave para revisar tu registro. Si ya lo aprobaste, podrás repasarlo rápido, sin esperar en cada lámina.</p>
          <input type="password" id="siClave" autocomplete="current-password" placeholder="Tu clave (ej: juan1985)" style="width:100%;box-sizing:border-box">
          <p id="siErr" style="display:none;color:#FF8A80;font-size:14px"></p><button class="btn" id="siOk">Revisar mi registro</button><button class="btn ghost" id="siNo">Seguir sin clave</button>`;
        const go = async () => {
          const k = document.getElementById('siClave').value.trim(), er = document.getElementById('siErr'), ok = document.getElementById('siOk');
          if (!k) { er.textContent = 'Escribe tu clave o toca "Seguir sin clave".'; er.style.display = 'block'; return; }
          ok.disabled = true; ok.textContent = 'Revisando…';
          try { const d = await consulta(k);
            if (!d.ok && (d.error === 'clave' || d.error === 'sinnac')) { ok.disabled = false; ok.textContent = 'Revisar mi registro'; er.textContent = d.error === 'sinnac' ? 'Tu ficha no tiene fecha de nacimiento. Contacta al área de RR.HH.' : 'Clave incorrecta. Intenta de nuevo.'; er.style.display = 'block'; return; }
            if (d.ok) { try { const ps = JSON.parse(localStorage.getItem('comfrut_cap_persona') || '{}') || {}; localStorage.setItem('comfrut_cap_persona', JSON.stringify(Object.assign(ps, { name: st.name, rut: st.rut, k }))); } catch (e2) {} }
            res(d.ok ? desde(d) : null);
          } catch (e2) { res(null); } };
        document.getElementById('siOk').onclick = go;
        document.getElementById('siClave').onkeydown = ev => { if (ev.key === 'Enter') go(); };
        document.getElementById('siNo').onclick = () => res(null);
      });
      temaAprobado = async function () {
        let d = null; try { d = await consulta((sesion() || {}).k || ''); } catch (e) {}
        if (d && d.ok) return desde(d) || local();
        const l = local(); if (l) return l;
        if (d && d.error === 'clave') return pedirClave();
        return null;
      };
      temaAprobado.__si = true;
    }
  } catch (e) {}

  // ---------- 9b) Revisores (Daniel, Giuliano Tassara y Carla Moreno): pueden ver las charlas de las 4 empresas.
  //      Arriba de las secciones eligen la empresa; el portal dice siempre a qué empresa corresponde lo que están viendo.
  //      El resto de los trabajadores ve solo lo de su empresa.
  const REV_RUT = [];   // Comfrut: mismas charlas para todas las empresas, sin modo revisión
  const REV_NOM = [];
  const rkR = r => String(r || '').replace(/[^0-9kK]/g, '').toUpperCase();
  const esRevisor = () => { try { if (!RUTA || !RUTA.persona) return false; if (REV_RUT.indexOf(rkR(RUTA.rut)) >= 0) return true; const n = sinT(RUTA.persona.nombre); return REV_NOM.some(r => r.test(n)); } catch (e) { return false; } };
  window.siEsRevisor = esRevisor;
  let VER = ''; try { VER = localStorage.getItem('comfrut_cap_ver') || ''; } catch (e) {}
  // cada vez que alguien ingresa con su RUT, parte viendo su propia empresa
  try { const bR = () => { VER = ''; try { localStorage.removeItem('comfrut_cap_ver'); } catch (e) {} };
    document.addEventListener('click', ev => { if (ev.target && (ev.target.id === 'bRuta' || ev.target.id === 'bNoSoy')) bR(); }, true);
    document.addEventListener('keydown', ev => { if (ev.key === 'Enter' && ev.target && (ev.target.id === 'rutHome' || ev.target.id === 'claveHome')) bR(); }, true); } catch (e) {}
  const empVista = () => { const e = empSesion(); return esRevisor() && EMPRESAS[VER] ? VER : e; };
  window.__siVista = empVista;
  const barraRevisor = () => {
    const old = document.getElementById('siRev'); if (old) old.remove();
    if (!esRevisor()) return;
    const v = empVista(), mia = empSesion(), E = EMPRESAS[v] || EMPRESAS.comfrut, sec = document.getElementById('secciones'); if (!sec) return;
    const d = document.createElement('div'); d.id = 'siRev';
    d.innerHTML = `<div class="srT">👁️ MODO REVISIÓN · GRUPO SAN IGNACIO</div>
      <div class="srM">Según tu inscripción, <b>te corresponden las charlas de ${(EMPRESAS[mia] || E).n}</b></div>
      <div class="srS">Además, como revisor, puedes ver las charlas de las otras empresas. Toca una empresa:</div>
      <div class="srB">${ORDEN_EMP.map(k => { const X = EMPRESAS[k]; return `<button data-e="${k}" class="${k === v ? 'on' : ''}" style="--ec:${X.c1}">${X.logo ? `<img alt="" src="${X.logo}">` : '<span class="srI">INVERSIONES</span>'}<b>${X.corto}</b>${k === mia ? '<i class="srTu">TU EMPRESA</i>' : ''}</button>`; }).join('')}</div>
      <div class="srV" style="background:${E.c1}">${v === mia ? `Estás viendo las charlas de <b>tu empresa</b>: ${E.n}` : `Estás revisando las charlas de <b>${E.n}</b> (no es tu empresa)`}</div>`;
    sec.parentNode.insertBefore(d, sec);
    d.querySelectorAll('button').forEach(b => b.onclick = () => {
      const y = window.scrollY; VER = b.dataset.e; try { localStorage.setItem('comfrut_cap_ver', VER); } catch (e) {}
      renderHome(); window.scrollTo(0, y);
    });
  };
  // Inducción de OTRA empresa (revisores): es un curso aparte. Su título lleva el nombre de la empresa (así queda en el registro)
  // y se muestra aprobada solo si el revisor aprobó ESA inducción, no la de su propia empresa.
  const otraEmp = () => { if (!esRevisor()) return ''; const v = empVista(), m = empSesion(); return v && m && v !== m ? v : ''; };
  const indDe = k => { const E = EMPRESAS[k]; if (!E) return null; const H = ((RUTA && RUTA.hist) || []).filter(h => h.id === 'induccion' && sinT(h.t).indexOf(sinT(E.corto)) >= 0);
    if (!H.length) return null; const h = H[0], n = parseFloat(String(h.n).replace(',', '.')); return { tema_id: 'induccion', n, nota: h.n, fecha: h.f, codigo: h.c }; };
  // la PROPIA del revisor: un registro de inducción que no lleve el nombre de otra empresa
  const indPropia = m => { const otras = Object.keys(EMPRESAS).filter(k => k !== m).map(k => sinT(EMPRESAS[k].corto));
    const H = ((RUTA && RUTA.hist) || []).filter(h => h.id === 'induccion' && !otras.some(o => sinT(h.t).indexOf(o) >= 0));
    if (!H.length) return null; const h = H[0], n = parseFloat(String(h.n).replace(',', '.')); return { tema_id: 'induccion', n, nota: h.n, fecha: h.f, codigo: h.c }; };
  const indVista = () => { if (!esRevisor()) return undefined; const o = otraEmp(); if (o) return indDe(o); const m = empSesion(); return m ? indPropia(m) : undefined; };
  window.__siAjInd = e => { const t = TOPICS.find(x => x.id === 'induccion'); if (!t) return; if (t.__t0 === undefined) t.__t0 = t.title;
    const o = otraEmp(); t.title = o && o === e ? t.__t0 + ' · ' + EMPRESAS[e].corto : t.__t0; };
  const R1 = renderHome;
  renderHome = function () {
    let real = null;
    try { const ap = indVista(); if (ap !== undefined && RUTA && RUTA.aprob) { real = RUTA.aprob; const vis = Object.assign({}, real); if (ap) vis.induccion = ap; else delete vis.induccion; RUTA.aprob = vis; } } catch (e) {}
    let r; try { r = R1.apply(this, arguments); } finally { if (real) RUTA.aprob = real; }
    try { if (real && otraEmp()) { const z = document.getElementById('ruta'); if (z) z.querySelectorAll('*').forEach(el => { if (el.childNodes.length === 1 && el.firstChild.nodeType === 3 && /Sin ella no puedes hacer charlas/.test(el.textContent))
      el.textContent = 'Inducción de esta empresa, pendiente. Como revisor igual puedes ver sus charlas.'; }); } } catch (e) {}
    try { window.__siAjInd(EMP_HECHA); } catch (e) {}
    try { barraRevisor(); } catch (e) {}
    return r;
  };
  if (typeof temaAprobado === 'function') { const TA = temaAprobado;
    temaAprobado = async function () { try { if (st.topic && st.topic.id === 'induccion') { const ap = indVista(); if (ap !== undefined) return ap; } } catch (e) {} return TA.apply(this, arguments); }; }
  if (typeof indInfo === 'function') { const II = indInfo;
    indInfo = function () { try { const ap = indVista(); if (ap !== undefined) { if (!ap) return { ok: false }; const vence = venceInduccion(ap.fecha), now = Date.now();
      return { ok: vence > now, vence, renovar: vence - now < 30 * 864e5, nota: ap.nota }; } } catch (e) {} return II.apply(this, arguments); }; }
  // en cada charla, el revisor ve a qué empresa corresponde
  if (typeof startLearn === 'function') { const SL = startLearn; startLearn = function () { const r = SL.apply(this, arguments); try { if (esRevisor() && EMPRESAS[EMP_HECHA]) { const t = document.getElementById('lTag'); if (t && t.textContent.indexOf(EMPRESAS[EMP_HECHA].corto.toUpperCase()) < 0) t.textContent = EMPRESAS[EMP_HECHA].corto.toUpperCase() + ' · ' + t.textContent; } } catch (e) {} return r; }; }
  if (typeof pickTopic === 'function') { const PT = pickTopic; pickTopic = function () { const r = PT.apply(this, arguments); try { if (esRevisor() && EMPRESAS[EMP_HECHA]) { const t = document.getElementById('dTag'); if (t && t.textContent.trim() && t.textContent.indexOf(' · ') < 0) t.textContent = EMPRESAS[EMP_HECHA].corto.toUpperCase() + ' · ' + t.textContent; } } catch (e) {} return r; }; }
  const cssR = document.createElement('style');
  cssR.textContent = `#siRev{background:#fff;border-radius:16px;padding:14px;margin:0 0 14px;box-shadow:0 4px 14px rgba(0,0,0,.18);color:#1F2937}
#siRev .srT{font-weight:bold;font-size:13px;letter-spacing:1px;color:#12357F}#siRev .srM{font-size:15px;margin:6px 0 2px;color:#1F2937;background:#FFF6DA;border-left:5px solid #F2B33D;border-radius:8px;padding:8px 10px}
#siRev .srTu{font-style:normal;font-size:10px;font-weight:bold;letter-spacing:.5px;background:#F2B33D;color:#0B2457;border-radius:6px;padding:2px 6px}
#siRev .srS{font-size:14px;margin:4px 0 10px;color:#4A5664}
#siRev .srB{display:grid;grid-template-columns:1fr 1fr;gap:8px}#siRev .srB button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:78px;background:#F7F8FA;border:2px solid #E2E3E8;border-radius:12px;padding:8px;cursor:pointer;font:inherit;color:#1F2937}
#siRev .srB button img{height:32px;width:auto;max-width:90%;object-fit:contain}#siRev .srB button b{font-size:13px}
#siRev .srB button.on{border-color:var(--ec);background:#fff;box-shadow:0 0 0 3px color-mix(in srgb,var(--ec) 25%,transparent)}
#siRev .srI{font-weight:bold;font-size:12px;letter-spacing:1px;color:#1F3A5F;height:32px;display:flex;align-items:center}
#siRev .srV{margin-top:10px;color:#fff;border-radius:10px;padding:9px 12px;font-size:14px;text-align:center}`;
  document.head.appendChild(cssR);

  // ---------- 9c) Actividades dentro de algunas pruebas (no en todas): ordenar pasos, clasificar y marcar lo correcto.
  //      Cada actividad cuenta como una pregunta más de la prueba (se registra en la prueba respondida en PDF).
  const TODAS = ORDEN_EMP;
  // Íconos propios (planos, mismo estilo del portal) para la actividad "vestir al trabajador"
  const OLi = '#22303A';
  const ICO = {
    cofia: `<path d="M8,30 Q6,12 24,11 Q42,12 40,30 Z" fill="#fff" stroke="${OLi}" stroke-width="2"/><path d="M7,29 H41" stroke="${OLi}" stroke-width="2"/><path d="M8,29 q4,5 8,0 q4,5 8,0 q4,5 8,0 q4,5 8,0" fill="none" stroke="#B0BEC5" stroke-width="2"/><circle cx="17" cy="20" r="1.3" fill="#B0BEC5"/><circle cx="24" cy="17" r="1.3" fill="#B0BEC5"/><circle cx="31" cy="20" r="1.3" fill="#B0BEC5"/>`,
    mascarilla: `<path d="M10,18 h28 v12 q-14,9 -28,0 z" fill="#fff" stroke="${OLi}" stroke-width="2"/><path d="M12,22 h24 M12,26 h24" stroke="#90A4AE" stroke-width="1.6"/><path d="M10,19 q-7,2 -5,9 q2,3 5,2 M38,19 q7,2 5,9 q-2,3 -5,2" fill="none" stroke="${OLi}" stroke-width="1.8"/>`,
    mascarilla_tela: `<path d="M10,18 h28 v12 q-14,9 -28,0 z" fill="#E57373" stroke="${OLi}" stroke-width="2"/><circle cx="16" cy="23" r="1.6" fill="#fff"/><circle cx="24" cy="25" r="1.6" fill="#fff"/><circle cx="32" cy="23" r="1.6" fill="#fff"/><circle cx="20" cy="29" r="1.4" fill="#fff"/><circle cx="28" cy="29" r="1.4" fill="#fff"/><path d="M10,19 q-7,2 -5,9 q2,3 5,2 M38,19 q7,2 5,9 q-2,3 -5,2" fill="none" stroke="${OLi}" stroke-width="1.8"/>`,
    respirador: `<path d="M14,16 q10,-6 20,0 l2,12 q-12,10 -24,0 z" fill="#ECEFF1" stroke="${OLi}" stroke-width="2"/><circle cx="12" cy="28" r="6" fill="#E53935" stroke="${OLi}" stroke-width="2"/><circle cx="36" cy="28" r="6" fill="#E53935" stroke="${OLi}" stroke-width="2"/><circle cx="12" cy="28" r="2.2" fill="#B71C1C"/><circle cx="36" cy="28" r="2.2" fill="#B71C1C"/><rect x="21" y="27" width="6" height="6" rx="1.5" fill="#90A4AE" stroke="${OLi}" stroke-width="1.4"/>`,
    cotona: c => `<path d="M16,8 l-8,6 l-4,26 h8 l1,-14 v20 h22 v-20 l1,14 h8 l-4,-26 l-8,-6 l-8,6 z" fill="${c}" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M24,14 v26" stroke="${OLi}" stroke-width="1.4" opacity=".5"/><circle cx="24" cy="20" r="1.2" fill="${OLi}"/><circle cx="24" cy="27" r="1.2" fill="${OLi}"/><circle cx="24" cy="34" r="1.2" fill="${OLi}"/><rect x="28" y="22" width="5" height="4" rx="1" fill="none" stroke="${OLi}" stroke-width="1.2"/>`,
    pechera: `<path d="M16,8 l-8,6 l-4,26 h8 l1,-14 v20 h22 v-20 l1,14 h8 l-4,-26 l-8,-6 l-8,6 z" fill="#ECEFF1" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M17,12 h14 v6 q4,1 4,6 v20 h-22 v-20 q0,-5 4,-6 z" fill="#fff" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M17,12 q7,-6 14,0" fill="none" stroke="${OLi}" stroke-width="1.6"/>`,
    overol: `<path d="M15,6 l-7,6 l-3,16 h6 l2,-9 v25 h9 l2,-14 l2,14 h9 v-25 l2,9 h6 l-3,-16 l-7,-6 l-9,5 z" fill="#1F3A6B" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M24,11 v18" stroke="#90CAF9" stroke-width="1.6"/><rect x="16" y="20" width="5" height="4" fill="none" stroke="#90CAF9" stroke-width="1.2"/><path d="M13,44 h9 M26,44 h9" stroke="${OLi}" stroke-width="2"/>`,
    traje: `<path d="M24,4 q-8,0 -9,8 l-7,4 l-3,14 h6 l2,-8 v22 h9 l2,-12 l2,12 h9 v-22 l2,8 h6 l-3,-14 l-7,-4 q-1,-8 -9,-8 z" fill="#FBC02D" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><ellipse cx="24" cy="12" rx="5" ry="4.5" fill="#F5D0B0" stroke="${OLi}" stroke-width="1.4"/><path d="M24,17 v14" stroke="${OLi}" stroke-width="1.4" opacity=".5"/>`,
    guantes: c => `<path d="M14,40 v-12 l-5,-8 q-1,-3 2,-4 q2,0 3,2 l3,4 v-14 q0,-3 3,-3 q3,0 3,3 v-2 q0,-3 3,-3 q3,0 3,3 v2 q0,-3 3,-3 q3,0 3,3 v4 q0,-3 3,-3 q3,0 3,3 v16 q0,5 -4,8 v3 z" fill="${c}" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M14,36 h20" stroke="${OLi}" stroke-width="1.6" opacity=".6"/>`,
    botas: c => `<path d="M14,6 h13 v24 l11,6 q3,2 3,5 v3 h-27 z" fill="${c}" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M14,40 h27" stroke="${OLi}" stroke-width="3"/><path d="M14,10 h13" stroke="${OLi}" stroke-width="1.4" opacity=".5"/>`,
    zapatos: `<path d="M7,22 h16 l4,6 l12,3 q4,1 4,5 v4 h-36 z" fill="#37474F" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M30,31 q8,1 9,5 v4 h-9 z" fill="#FBC02D" stroke="${OLi}" stroke-width="1.6"/><path d="M7,40 h36" stroke="#111" stroke-width="3"/><path d="M13,26 l6,0 M14,30 l7,0" stroke="#90A4AE" stroke-width="1.4"/>`,
    legionario: `<path d="M10,26 Q9,8 24,8 Q39,8 38,26 Z" fill="#F1E3C2" stroke="${OLi}" stroke-width="2"/><path d="M37,24 q8,1 9,6 l-10,0 z" fill="#F1E3C2" stroke="${OLi}" stroke-width="1.8"/><path d="M11,24 q-3,9 0,16 l7,-2 q-2,-7 1,-14 z" fill="#E9D8A6" stroke="${OLi}" stroke-width="1.8"/><path d="M10,25 h28" stroke="#C9A96E" stroke-width="3"/>`,
    lentes: `<rect x="5" y="18" width="16" height="11" rx="4" fill="#263238" stroke="${OLi}" stroke-width="2"/><rect x="27" y="18" width="16" height="11" rx="4" fill="#263238" stroke="${OLi}" stroke-width="2"/><path d="M21,22 h6 M5,21 l-3,-3 M43,21 l3,-3" stroke="${OLi}" stroke-width="2"/><path d="M8,21 l5,0 M30,21 l5,0" stroke="#90CAF9" stroke-width="1.6"/>`,
    antiparras: `<path d="M5,20 q19,-8 38,0 v10 q-9,6 -16,0 h-6 q-7,6 -16,0 z" fill="#B3E5FC" fill-opacity=".85" stroke="${OLi}" stroke-width="2"/><path d="M5,22 l-3,1 M43,22 l3,1" stroke="#455A64" stroke-width="3"/><path d="M10,22 l6,-2" stroke="#fff" stroke-width="1.8"/>`,
    bloqueador: `<rect x="15" y="12" width="18" height="30" rx="4" fill="#FB8C00" stroke="${OLi}" stroke-width="2"/><rect x="19" y="5" width="10" height="8" rx="2" fill="#fff" stroke="${OLi}" stroke-width="2"/><text x="24" y="28" font-size="8" font-weight="bold" text-anchor="middle" fill="#fff" font-family="Arial">FPS</text><text x="24" y="37" font-size="8" font-weight="bold" text-anchor="middle" fill="#fff" font-family="Arial">50+</text>`,
    anillo: `<circle cx="24" cy="29" r="11" fill="none" stroke="#FBC02D" stroke-width="5"/><circle cx="24" cy="29" r="11" fill="none" stroke="${OLi}" stroke-width="1" opacity=".4"/><path d="M18,14 l6,-7 l6,7 l-6,6 z" fill="#81D4FA" stroke="${OLi}" stroke-width="1.6"/>`,
    reloj: `<rect x="18" y="4" width="12" height="9" rx="2" fill="#5D4037"/><rect x="18" y="35" width="12" height="9" rx="2" fill="#5D4037"/><circle cx="24" cy="24" r="12" fill="#fff" stroke="${OLi}" stroke-width="2.4"/><path d="M24,24 v-7 M24,24 l5,3" stroke="${OLi}" stroke-width="2" stroke-linecap="round"/>`,
    pulsera: `<ellipse cx="24" cy="26" rx="15" ry="9" fill="none" stroke="#AB47BC" stroke-width="4"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i / 8 * 6.283; return `<circle cx="${(24 + 15 * Math.cos(a)).toFixed(1)}" cy="${(26 + 9 * Math.sin(a)).toFixed(1)}" r="3" fill="#CE93D8" stroke="${OLi}" stroke-width="1"/>`; }).join('')}`,
    sandalias: `<path d="M10,8 q8,-3 12,4 l3,28 q-1,5 -8,5 q-8,0 -9,-6 z" fill="#4FC3F7" stroke="${OLi}" stroke-width="2"/><path d="M11,18 q6,6 12,0" fill="none" stroke="#0277BD" stroke-width="3"/><path d="M27,12 q8,-3 12,4 l2,24 q-1,5 -7,5 q-7,0 -8,-6 z" fill="#4FC3F7" stroke="${OLi}" stroke-width="2"/><path d="M28,21 q6,6 11,0" fill="none" stroke="#0277BD" stroke-width="3"/>`,
    zapatillas: `<path d="M5,24 q2,-4 8,-4 l6,2 q6,4 12,5 l9,3 q4,2 4,6 v4 h-39 z" fill="#E3F2FD" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M5,40 h39" stroke="#1565C0" stroke-width="3"/><path d="M14,26 l6,2 M16,30 l6,2" stroke="#1565C0" stroke-width="2"/><path d="M27,29 q6,2 14,6" stroke="#1565C0" stroke-width="2" fill="none"/>`,
    gorro_lana: `<path d="M9,32 Q8,12 24,11 Q40,12 39,32 Z" fill="#E91E63" stroke="${OLi}" stroke-width="2"/><rect x="7" y="30" width="34" height="8" rx="3" fill="#F48FB1" stroke="${OLi}" stroke-width="2"/><circle cx="24" cy="9" r="5" fill="#F8BBD0" stroke="${OLi}" stroke-width="1.6"/><path d="M14,20 v10 M20,16 v14 M28,16 v14 M34,20 v10" stroke="#C2185B" stroke-width="1.6"/>`,
    polera: `<path d="M15,6 q9,6 18,0 l3,3 q-2,6 3,9 v24 h-30 v-24 q5,-3 3,-9 z" fill="#FFB300" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M18,10 q6,4 12,0" fill="none" stroke="${OLi}" stroke-width="1.4"/><path d="M12,30 h24" stroke="#fff" stroke-width="3"/>`
  };
  const icoSvg = k => { let v = ICO[k]; if (!v) { const m = String(k).match(/^(\w+)#(\w{6})$/); if (m && typeof ICO[m[1]] === 'function') v = ICO[m[1]]('#' + m[2]); }
    if (typeof v === 'function') v = v('#90A4AE'); return v ? `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">${v}</svg>` : ''; };
  window.SI_ICO = icoSvg;
  const SI_ACT = [
    { tema: 'induccion', emp: TODAS, tipo: 'vestir', q: '🧩 Actividad: prepara al trabajador para salir a las hileras de frambuesa.',
      items: [['Legionario con cubrenuca', 1, 'legionario', { hat: 'legion' }], ['Lentes de seguridad', 1, 'lentes', { glasses: true }], ['Ropa de manga larga', 1, 'cotona#2B4C9B', { shirt: '#2B4C9B' }],
        ['Zapatos de seguridad', 1, 'zapatos', { boots: '#37474F' }], ['Bloqueador solar', 1, 'bloqueador', {}],
        ['Polera sin mangas', 0, 'polera', null, 'Los brazos al sol se queman y se rasguñan con las cañas: se usa manga larga.'], ['Sandalias', 0, 'sandalias', null, 'En el campo se usan zapatos de seguridad.'], ['Anillo', 0, 'anillo', null, 'Los anillos se enganchan y contaminan la fruta.']],
      w: 'En el campo: legionario con cubrenuca, lentes de seguridad, ropa de manga larga, zapatos de seguridad y bloqueador. Sin anillos ni pulseras.' },
    { tema: 'induccion', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: ¿así sí o así no? Desliza cada tarjeta.',
      items: [['Guardar la tijera en su funda', 0, 'cf_pa_tijera'], ['Comer fruta directo de la mata', 1, 'cf_sv_hilera'], ['Caminar donde el tractorista me vea', 0, 'si_ag_ter_tractor'],
        ['Subirme al tractor como pasajero', 1, 'si_ag_trc_pasaj'], ['Tomar agua en la estación de agua potable', 0, 'cf_sv_agua'], ['Entrar a un sector recién aplicado antes del reingreso', 1, 'si_ag_rei_plazo:L']],
      w: 'Así sí: tijera en su funda, caminar a la vista del tractorista y tomar agua potable. Así no: comer fruta de la mata, viajar en el tractor o entrar antes del reingreso.' },
    { tema: 'autocuidado', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: ¿lo hace una persona o está en el lugar? Desliza cada tarjeta.',
      cats: ['🙋 Acto inseguro', '🏚️ Condición insegura'], sub: ['lo hace una persona', 'está en el lugar'],
      items: [['Sacarse los lentes porque molestan', 0, ''], ['Un alambre de la espaldera cortado y colgando', 1, ''], ['Correr entre las hileras', 0, ''], ['Un hoyo sin tapar en el pasillo', 1, ''], ['Cosechar sin legionario al mediodía', 0, ''], ['Una tijera con el resorte roto', 1, '']],
      w: 'Acto inseguro: lo que hace la persona (sacarse los lentes, correr, no usar legionario). Condición insegura: lo que está en el lugar (alambre cortado, hoyo, herramienta dañada).' },
    { tema: 'epp', emp: TODAS, tipo: 'vestir', q: '🧩 Actividad: viste al trabajador para la cosecha de frambuesa.',
      items: [['Legionario con cubrenuca', 1, 'legionario', { hat: 'legion' }], ['Lentes de seguridad', 1, 'lentes', { glasses: true }], ['Ropa de manga larga', 1, 'cotona#2B4C9B', { shirt: '#2B4C9B' }],
        ['Zapatos de seguridad', 1, 'zapatos', { boots: '#37474F' }],
        ['Polera sin mangas', 0, 'polera', null, 'Los brazos al sol se queman: se usa manga larga.'], ['Sandalias', 0, 'sandalias', null, 'En el campo se usan zapatos de seguridad.'], ['Gorro de lana', 0, 'gorro_lana', null, 'Contra el sol se usa legionario con cubrenuca.']],
      w: 'Para cosechar: legionario con cubrenuca, lentes de seguridad, ropa de manga larga y zapatos de seguridad, más bloqueador.' },
    { tema: 'cargas', emp: TODAS, tipo: 'orden', q: '🧩 Actividad: ordena los pasos para levantar una carga.',
      items: ['Evalúo el peso y, si es mucho, pido ayuda o uso el carro', 'Me acerco a la carga y separo los pies', 'Doblo las rodillas con la espalda recta', 'La tomo firme y la levanto con las piernas, pegada al cuerpo'],
      w: 'Primero evalúas; después te acercas con los pies separados, doblas las rodillas con la espalda recta y levantas con las piernas, con la carga pegada al cuerpo.' },
    { tema: 'accidente', emp: TODAS, tipo: 'orden', q: '🧩 Actividad: tuviste un accidente en el trabajo. Ordena lo que haces.',
      items: ['Me alejo del peligro', 'Aviso de inmediato a mi jefatura', 'Voy a {LAMUT} y digo que fue un accidente del trabajo', 'Sigo las indicaciones médicas y entrego el certificado'],
      w: 'Primero te pones a salvo, avisas de inmediato a tu jefatura, te atiendes en {LAMUT} diciendo que fue un accidente del trabajo y sigues las indicaciones.' },
    { tema: 'incendios', emp: TODAS, tipo: 'orden', q: '🧩 Actividad: ordena los pasos para usar el extintor.',
      items: ['Saco el seguro', 'Me pongo a 2 o 3 metros, con el viento a la espalda', 'Apunto la manguera a la base del fuego', 'Aprieto la manilla y hago un barrido de lado a lado'],
      w: 'Seguro, distancia con el viento a la espalda, apuntar a la base y barrido.' },
    { tema: 'emergencias', emp: TODAS, tipo: 'orden', q: '🧩 Actividad: suena la alarma de evacuación. Ordena lo que haces.',
      items: ['Dejo lo que estoy haciendo y detengo el equipo si es seguro', 'Sigo las indicaciones de mi líder', 'Camino rápido, sin correr, por la ruta de evacuación', 'Me quedo en la zona de seguridad hasta que me autoricen a salir'],
      w: 'Se deja todo, se siguen las instrucciones, se camina sin correr y se espera en la zona de seguridad.' },
    { tema: 'cf_cosecha', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: cosecha de frambuesa. ¿Así sí o así no?',
      items: [['Doblar las rodillas para la fruta de abajo', 0, 'cf_co_postura:R'], ['Doblar la espalda durante horas', 1, 'cf_co_postura:L'], ['Llevar las bandejas en el carro', 0, 'cf_co_bandejas:R'],
        ['Una pila alta de bandejas que tapa la vista', 1, 'cf_co_bandejas:L'], ['Lavarse las manos antes de cosechar', 0, 'cf_co_inocuidad'], ['Poner en la bandeja la fruta que cayó al suelo', 1, 'cf_co_suelo']],
      w: 'Así sí: rodillas dobladas, carro para las bandejas y manos lavadas. Así no: espalda doblada horas, pilas que tapan la vista y fruta del suelo en la bandeja.' },
    { tema: 'cf_huerto', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: reglas del huerto. ¿Así sí o así no?',
      items: [['Cofia con todo el pelo adentro', 0, 'cf_hu_pelo:L'], ['Pelo suelto, sin cofia', 1, 'cf_hu_pelo:R'], ['Botar la botella en el basurero', 0, 'cf_hu_basura:L'],
        ['Trabajar con anillo en el huerto', 1, 'cf_hu_enganche:L'], ['Comer en el comedor móvil', 0, 'cf_hu_comer'], ['Fumar entre las hileras', 1, 'cf_hu_fumar']],
      w: 'Así sí: cofia y legionario, basura al basurero y comer en el comedor. Así no: pelo suelto, joyas o fumar en el huerto.' },
    { tema: 'cf_servicios', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: baños, agua y comedor. ¿Así sí o así no?',
      items: [['Comer en el comedor móvil', 0, 'cf_sv_comedor'], ['Tomar agua del canal', 1, 'cf_sv_canal'], ['Lavarse las manos al salir del baño', 0, 'cf_sv_manos'],
        ['Comer en la hilera', 1, 'cf_sv_hilera'], ['Avisar si falta jabón o papel', 0, 'cf_sv_aviso'], ['Dejar la basura en el campo', 1, '']],
      w: 'Así sí: comer en el comedor, lavarse las manos y avisar lo que falta. Así no: tomar agua del canal, comer en la hilera o botar basura en el campo.' },
    { tema: 'ag_tractor', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: trabajo con tractor. ¿Así sí o así no?',
      items: [['Bajarse con freno puesto, implemento abajo y sin llave', 0, 'si_ag_trc_subir'], ['Llevar a un compañero en el tractor', 1, 'si_ag_trc_pasaj'], ['Usar el cinturón con la ROPS levantada', 0, 'si_ag_trc_rops:R'],
        ['Andar por el borde del canal', 1, 'si_ag_trc_pend:L'], ['Mirar alrededor antes de moverse', 0, 'si_ag_trc_alrededor'], ['Pararse detrás del tractor que retrocede', 1, 'si_ag_ter_retro']],
      w: 'Antes de bajarte: freno, implemento abajo y llave fuera. Cinturón con ROPS, lejos de bordes de canal, mirar alrededor y nunca pasajeros ni gente detrás al retroceder.' },
    { tema: 'calor', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: calor. ¿Así sí o así no?',
      items: [['Llevarlo a la sombra o a un lugar fresco', 0, 'si_t2_ayuda'], ['Que siga trabajando al sol', 1, 'si_t2_termo'], ['Darle agua a sorbos si está consciente', 0, 'si_in_calor_q'], ['Dejarlo solo para que descanse', 1, 'si_t2_golpe'],
        ['Avisar a la jefatura y pedir ayuda a {LAMUT}', 0, 'si_t2_aviso_calor'], ['Ignorar el mareo para terminar la tarea', 1, 'si_t2_sintomas']],
      w: 'A la sombra, sin seguir trabajando, piel mojada y aire. Agua a sorbos solo si está consciente. No se deja solo y se avisa a la jefatura.' },
    { tema: 'uv', emp: TODAS, tipo: 'tarjetas', q: '🧩 Actividad: protección contra el sol. ¿Así sí o así no?',
      items: [['Legionario, manga larga y lentes UV', 0, 'si_t2_epp_uv'], ['Bloqueador cada 2 horas', 0, 'si_t2_fps'], ['Al sol de 11 a 16 h sin protegerse', 1, 'si_t2_horario'], ['Pausas a la sombra', 0, 'si_t2_sombra'],
        ['Si está nublado, no hay que protegerse', 1, 'si_in_uv_q'], ['No avisar un lunar que cambió', 1, 'si_t2_piel']],
      w: 'Legionario con cubrenuca, manga larga, bloqueador repetido cada 2 horas y pausas a la sombra, también en días nublados.' }
  ];
  window.SI_ACT = SI_ACT;
  const actsDe = (tema, e) => SI_ACT.filter(a => a.tema === tema && a.emp.indexOf(e) >= 0).map(a => {
    const r = s => window.siTxt(s, e);
    const act = { tipo: a.tipo, cats: a.cats || ['✅ Así sí', '❌ Así no'], sub: a.sub || null, binario: !a.cats,
      items: a.tipo === 'orden' ? a.items.map(r) : a.items.map(x => [r(x[0]), x[1], x[2] ? r(x[2]) : '', x[3] || null, x[4] ? r(x[4]) : '']) };
    return { act, q: r(a.q), w: r(a.w), o: [''], a: 0, s: '' };
  });
  window.__siActsDe = actsDe;
  const mezclarA = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const escA = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const escena = ref => { const m = String(ref || '').match(/^([\w]+)(?::([LR]))?$/); if (!m || typeof S === 'undefined' || !S[m[1]]) return '';
    let v = ''; try { v = S[m[1]](); } catch (e) { return ''; }
    v = v.replace(/<circle[^>]*stroke="#fff" stroke-width="3"\/><path[^>]*\/>/g, '');
    if (m[2]) v = v.replace(/viewBox="0 0 320 200"/, m[2] === 'L' ? 'viewBox="0 0 160 200"' : 'viewBox="160 0 160 200"');
    return v; };
  function pintarAct(q) {
    const A = q.act, B = document.getElementById('qBody'); if (!B) return;
    let corr = '';
    if (A.tipo === 'orden') corr = A.items.map((t, i) => (i + 1) + ') ' + t).join(' · ');
    else if (A.tipo === 'clasifica' || A.tipo === 'tarjetas') corr = A.items.map(([t, c]) => t + ': ' + A.cats[c].replace(/^\S+\s/, '')).join(' · ');
    else corr = A.items.filter(x => x[1]).map(x => x[0]).join(' · ');
    const tit = { orden: 'Toca los pasos en el orden correcto (1, 2, 3...).', clasifica: 'Elige una opción para cada situación.', marca: 'Toca todas las que correspondan y después toca "Listo".',
      tarjetas: 'Desliza la tarjeta hacia el lado que corresponde, o toca el botón.', vestir: 'Toca o arrastra al trabajador lo que debe usar. ¡Ojo, hay cosas que no van!' }[A.tipo];
    let h = `<div class="siAct"><div class="acH">${tit}</div>`;
    if (A.tipo === 'orden') {
      let ord = mezclarA(A.items.map((t, i) => i)); if (ord.every((v, k) => v === k)) ord = ord.reverse();
      h += `<div class="acL">${ord.map(i => `<button class="acI" data-i="${i}"><span class="acN"></span><span>${escA(A.items[i])}</span></button>`).join('')}</div><button class="acR">↺ Borrar y empezar de nuevo</button>`;
    } else if (A.tipo === 'tarjetas') {
      const cl = A.binario ? ['tjSi', 'tjNo'] : ['tjA', 'tjB'];
      h += `<div class="tjW"><div class="tjP" id="tjP"></div><div class="tjStage" id="tjStage"></div>
        <div class="tjBt"><button class="tjK ${cl[1]}" data-k="1">${escA(A.cats[1])}${A.sub ? `<small>${escA(A.sub[1])}</small>` : ''}</button><button class="tjK ${cl[0]}" data-k="0">${escA(A.cats[0])}${A.sub ? `<small>${escA(A.sub[0])}</small>` : ''}</button></div></div>`;
    } else if (A.tipo === 'vestir') {
      h += `<div class="vsW"><div class="vsFig" id="vsFig"></div><div class="vsMsg" id="vsMsg">👆 Toca o arrastra cada cosa al trabajador</div>
        <div class="vsIt">${mezclarA(A.items.map((x, i) => i)).map(i => `<button class="vsC" data-i="${i}"><span class="vsE">${icoSvg(A.items[i][2])}</span><span>${escA(A.items[i][0])}</span></button>`).join('')}</div>
        <button class="acOk" id="vsOk">Listo, ya está preparado</button></div>`;
    } else if (A.tipo === 'clasifica') {
      h += `<div class="acL">${mezclarA(A.items.map((x, i) => i)).map(i => `<div class="acC" data-i="${i}"><div class="acCt">${escA(A.items[i][0])}</div><div class="acCb">${A.cats.map((c, k) => `<button class="acK" data-k="${k}">${escA(c)}</button>`).join('')}</div></div>`).join('')}</div>`;
    } else {
      h += `<div class="acL">${mezclarA(A.items.map((x, i) => i)).map(i => `<button class="acM" data-i="${i}"><span class="acX"></span><span>${escA(A.items[i][0])}</span></button>`).join('')}</div><button class="acOk" disabled>Listo</button>`;
    }
    h += `<div style="display:none"><button class="opt" data-ok="1" id="acBien">${escA(corr)}</button><button class="opt" data-ok="0" id="acTuya"></button></div></div>`;
    B.innerHTML = h;
    const enviar = (ok, tuya) => { const b = ok ? document.getElementById('acBien') : document.getElementById('acTuya'); if (!ok) b.textContent = tuya; answer(b, ok); };
    const retirar = () => { if (st.revisada) return; st.sel = null; const n = document.getElementById('qNext'); if (n) n.style.display = 'none'; };
    const bloqueado = () => !!st.revisada;
    if (A.tipo === 'orden') {
      let sel = [];
      const pintar = () => B.querySelectorAll('.acI').forEach(b => { const k = sel.indexOf(+b.dataset.i); b.classList.toggle('on', k >= 0); b.querySelector('.acN').textContent = k >= 0 ? k + 1 : ''; });
      B.querySelectorAll('.acI').forEach(b => b.onclick = () => { if (bloqueado()) return; const i = +b.dataset.i; if (sel.indexOf(i) >= 0) return; sel.push(i); pintar(); try { SFX.play('next'); } catch (e) {}
        if (sel.length === A.items.length) enviar(sel.every((v, k) => v === k), sel.map((i, k) => (k + 1) + ') ' + A.items[i]).join(' · ')); });
      B.querySelector('.acR').onclick = () => { if (bloqueado()) return; sel = []; pintar(); retirar(); };
    } else if (A.tipo === 'tarjetas') {
      const ord = mezclarA(A.items.map((x, i) => i)), resp = []; let pos = 0, ocupado = false;
      const stage = B.querySelector('#tjStage'), prog = B.querySelector('#tjP');
      const pintarP = () => { prog.innerHTML = ord.map((x, k) => `<span class="${k < pos ? (resp[k].ok ? 'ok' : 'mal') : k === pos ? 'act' : ''}"></span>`).join('') + `<b>${Math.min(pos + 1, ord.length)} de ${ord.length}</b>`; };
      const carta = () => {
        pintarP();
        if (pos >= ord.length) {
          const bien = resp.filter(x => x.ok).length;
          stage.innerHTML = `<div class="tjFin"><div class="tjE">${bien === ord.length ? '🏆' : '💪'}</div><div class="tjT">${bien === ord.length ? '¡Perfecto!' : '¡Terminaste!'}</div><div class="tjS">Acertaste ${bien} de ${ord.length}</div></div>`;
          B.querySelectorAll('.tjK').forEach(b => b.disabled = true);
          try { SFX.play(bien === ord.length ? 'win' : 'next'); } catch (e) {}
          enviar(bien === ord.length, resp.map(x => A.items[x.i][0] + ': ' + A.cats[x.k].replace(/^\S+\s/, '')).join(' · ')); return;
        }
        const it = A.items[ord[pos]];
        stage.innerHTML = `<div class="tjCard" id="tjCard"><div class="tjL tjLi">${escA(A.cats[1])}</div><div class="tjL tjLd">${escA(A.cats[0])}</div><div class="tjI">${escena(it[2])}</div><div class="tjT">${escA(it[0])}</div><div class="tjH">⬅ desliza ➡</div></div><div class="tjFb" id="tjFb"></div>`;
        const c = stage.querySelector('#tjCard'); let x0 = null, dx = 0;
        c.onpointerdown = ev => { if (bloqueado() || ocupado) return; x0 = ev.clientX; dx = 0; c.setPointerCapture(ev.pointerId); c.style.transition = 'none'; };
        c.onpointermove = ev => { if (x0 === null) return; dx = ev.clientX - x0; c.style.transform = `translateX(${dx}px) rotate(${dx / 14}deg)`;
          c.querySelector('.tjLd').style.opacity = Math.max(0, Math.min(1, dx / 90)); c.querySelector('.tjLi').style.opacity = Math.max(0, Math.min(1, -dx / 90)); };
        c.onpointerup = c.onpointercancel = () => { if (x0 === null) return; x0 = null; c.style.transition = '';
          if (dx > 80) decidir(0); else if (dx < -80) decidir(1); else { c.style.transform = ''; c.querySelectorAll('.tjL').forEach(l => l.style.opacity = 0); } };
      };
      const decidir = k => {
        if (bloqueado() || ocupado || pos >= ord.length) return; ocupado = true;
        const it = A.items[ord[pos]], ok = it[1] === k; resp.push({ i: ord[pos], k, ok });
        const c = stage.querySelector('#tjCard'), fb = stage.querySelector('#tjFb');
        if (c) { c.style.transition = 'transform .32s ease, opacity .32s ease'; c.style.transform = `translateX(${k === 0 ? 420 : -420}px) rotate(${k === 0 ? 24 : -24}deg)`; c.style.opacity = '0'; }
        fb.className = 'tjFb on ' + (ok ? 'ok' : 'mal'); fb.innerHTML = ok ? '✔ ¡Bien!' : `✘ Era: ${escA(A.cats[it[1]])}`;
        try { SFX.play(ok ? 'ok' : 'bad'); } catch (e) {}
        setTimeout(() => { pos++; ocupado = false; carta(); }, ok ? 750 : 1500);
      };
      B.querySelectorAll('.tjK').forEach(b => b.onclick = () => decidir(+b.dataset.k));
      carta();
    } else if (A.tipo === 'vestir') {
      const fig = B.querySelector('#vsFig'), msg = B.querySelector('#vsMsg'), puestos = [], malos = [];
      let ropa = { helmet: false, cofia: false, mask: false, shirt: '#90A4AE', pants: '#546E7A', boots: false, apron: false, gloves: false, glasses: false, hat: '', s: 2.2 };
      const nOk = A.items.filter(x => x[1]).length;
      const dibujar = pop => { let g = ''; try { g = W(100, 206, Object.assign({}, ropa, { face: puestos.length === nOk ? 'ok' : 'ok' })); } catch (e) {}
        fig.innerHTML = `<svg viewBox="0 0 200 215" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="208" rx="70" ry="6" fill="#000" opacity=".12"/><g class="${pop ? 'vsPop' : ''}">${g}</g></svg><div class="vsCnt">${puestos.length} de ${nOk}</div>`; };
      const fin = () => { const ok = !malos.length && puestos.length === nOk;
        B.querySelectorAll('.vsC').forEach(b => b.disabled = true); B.querySelector('#vsOk').disabled = true;
        enviar(ok, 'Puso: ' + (puestos.map(i => A.items[i][0]).join(', ') || 'nada') + (malos.length ? ' · También eligió: ' + malos.map(i => A.items[i][0]).join(', ') : '')); };
      const poner = b => {
        if (bloqueado() || b.disabled) return; const i = +b.dataset.i, it = A.items[i];
        if (it[1]) { Object.assign(ropa, it[3] || {}); puestos.push(i); b.classList.add('ok'); b.disabled = true; dibujar(true);
          msg.className = 'vsMsg ok'; msg.textContent = '✔ ¡Bien! ' + it[0] + (puestos.length < nOk ? '. ¿Qué más le falta?' : ''); try { SFX.play('ok'); } catch (e) {}
          if (puestos.length === nOk) { msg.textContent = malos.length ? '✔ Quedó protegido, pero ojo con lo que no va.' : '🎉 ¡Listo! Quedó bien protegido.'; setTimeout(fin, 500); } }
        else { malos.push(i); b.classList.add('mal'); b.disabled = true; msg.className = 'vsMsg mal'; msg.textContent = '✘ Eso no va. ' + (it[4] || ''); try { SFX.play('bad'); } catch (e) {} }
      };
      B.querySelectorAll('.vsC').forEach(b => {
        let x0 = null, y0 = 0, ghost = null;
        b.onpointerdown = ev => { if (bloqueado() || b.disabled) return; x0 = ev.clientX; y0 = ev.clientY; b.setPointerCapture(ev.pointerId); };
        b.onpointermove = ev => { if (x0 === null) return; if (!ghost && Math.hypot(ev.clientX - x0, ev.clientY - y0) > 10) { ghost = document.createElement('div'); ghost.className = 'vsG'; ghost.innerHTML = b.querySelector('.vsE').innerHTML; document.body.appendChild(ghost); }
          if (ghost) { ghost.style.left = ev.clientX + 'px'; ghost.style.top = ev.clientY + 'px'; const r = fig.getBoundingClientRect(); fig.classList.toggle('sobre', ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom); } };
        b.onpointerup = ev => { if (x0 === null) return; x0 = null; fig.classList.remove('sobre');
          if (ghost) { ghost.remove(); ghost = null; const r = fig.getBoundingClientRect(); if (ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom) poner(b); } else poner(b); };
        b.onpointercancel = () => { x0 = null; if (ghost) { ghost.remove(); ghost = null; } fig.classList.remove('sobre'); };
        b.onclick = ev => ev.preventDefault();
      });
      B.querySelector('#vsOk').onclick = () => { if (bloqueado()) return; fin(); };
      dibujar(false);
    } else if (A.tipo === 'clasifica') {
      const resp = {};
      B.querySelectorAll('.acC').forEach(c => c.querySelectorAll('.acK').forEach(k => k.onclick = () => { if (bloqueado()) return;
        resp[c.dataset.i] = +k.dataset.k; c.querySelectorAll('.acK').forEach(x => x.classList.toggle('on', x === k)); try { SFX.play('next'); } catch (e) {}
        if (Object.keys(resp).length === A.items.length) enviar(A.items.every((x, i) => resp[i] === x[1]), A.items.map((x, i) => x[0] + ': ' + A.cats[resp[i]]).join(' · ')); }));
    } else {
      const ok = B.querySelector('.acOk');
      B.querySelectorAll('.acM').forEach(b => b.onclick = () => { if (bloqueado()) return; b.classList.toggle('on'); b.querySelector('.acX').textContent = b.classList.contains('on') ? '✓' : ''; ok.disabled = !B.querySelector('.acM.on'); retirar(); try { SFX.play('next'); } catch (e) {} });
      ok.onclick = () => { if (bloqueado()) return; const m = [...B.querySelectorAll('.acM.on')].map(b => +b.dataset.i);
        enviar(A.items.every((x, i) => !!x[1] === (m.indexOf(i) >= 0)), m.length ? m.map(i => A.items[i][0]).join(' · ') : '(nada marcado)'); };
    }
  }
  if (typeof renderQ === 'function' && !renderQ.__siAct) {
    const RQ = renderQ;
    renderQ = function () { const r = RQ.apply(this, arguments); try { const q = st.topic.quiz[st.qi]; if (q && q.act) pintarAct(q); } catch (e) {} return r; };
    renderQ.__siAct = true;
  }
  const cssA = document.createElement('style');
  cssA.textContent = `.siAct .acH{background:#FFF6DA;color:#3B2F00;border-left:5px solid #F2B33D;border-radius:10px;padding:9px 12px;font-size:15px;margin:4px 0 12px}
.siAct .acL{display:flex;flex-direction:column;gap:9px}
.siAct .acI,.siAct .acM{display:flex;align-items:center;gap:12px;text-align:left;background:var(--dark2);color:#fff;border:2px solid var(--line);border-radius:14px;padding:13px;font:inherit;font-size:16px;line-height:1.3;cursor:pointer}
.siAct .acN,.siAct .acX{flex:0 0 34px;height:34px;border-radius:50%;border:2px dashed #ffffff66;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:17px}
.siAct .acI.on,.siAct .acM.on{border-color:#F2B33D;background:#22406E}.siAct .acI.on .acN,.siAct .acM.on .acX{background:#F2B33D;color:#0B2457;border:2px solid #F2B33D}
.siAct .acR{margin-top:10px;background:none;border:none;color:#BBD0F2;text-decoration:underline;font:inherit;font-size:15px;cursor:pointer;align-self:center;width:100%}
.siAct .acC{background:var(--dark2);border:2px solid var(--line);border-radius:14px;padding:11px}.siAct .acCt{color:#fff;font-size:16px;margin-bottom:8px;line-height:1.3}
.siAct .acCb{display:grid;grid-template-columns:1fr 1fr;gap:8px}.siAct .acK{background:#ffffff14;color:#fff;border:2px solid #ffffff40;border-radius:10px;padding:10px 6px;font:inherit;font-size:14px;font-weight:bold;cursor:pointer}
.siAct .acK.on{background:#F2B33D;border-color:#F2B33D;color:#0B2457}
.siAct .acOk{margin-top:12px;width:100%;background:#F2B33D;color:#0B2457;border:none;border-radius:14px;padding:14px;font:inherit;font-size:17px;font-weight:bold;cursor:pointer}.siAct .acOk:disabled{opacity:.45;cursor:default}
.siAct button:disabled{cursor:default}`;
  document.head.appendChild(cssA);
  const cssT = document.createElement('style');
  cssT.textContent = `.tjW{display:flex;flex-direction:column;gap:12px}.tjP{display:flex;align-items:center;gap:6px;justify-content:center}.tjP span{width:12px;height:12px;border-radius:50%;background:#ffffff33}
.tjP span.act{background:#F2B33D;transform:scale(1.25)}.tjP span.ok{background:#43A047}.tjP span.mal{background:#E53935}.tjP b{color:#BBD0F2;font-size:13px;margin-left:6px}
.tjStage{position:relative;height:330px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.tjCard{position:relative;width:92%;max-width:340px;height:300px;overflow:hidden;background:#fff;color:#1F2937;border-radius:22px;box-shadow:0 10px 26px rgba(0,0,0,.35);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:0 0 26px;text-align:center;touch-action:none;user-select:none;cursor:grab;transition:transform .25s}
.tjCard .tjI{width:100%;height:190px;background:#EEF2F6;display:flex;align-items:center;justify-content:center;overflow:hidden;pointer-events:none}.tjCard .tjI svg{height:100%;width:auto;max-width:100%}.tjCard .tjT{font-size:17px;font-weight:bold;margin:12px 14px 0;line-height:1.25}.tjCard .tjH{position:absolute;bottom:10px;font-size:12px;color:#9AA5B4;letter-spacing:1px}
.tjL{position:absolute;top:14px;padding:4px 10px;border-radius:8px;font-weight:bold;font-size:15px;opacity:0;border:3px solid;background:#fff;z-index:2}.tjLd{left:14px;color:#2E7D32;border-color:#2E7D32;transform:rotate(-12deg)}.tjLi{right:14px;color:#C62828;border-color:#C62828;transform:rotate(12deg)}
.tjFb{position:absolute;bottom:2px;z-index:3;left:50%;transform:translateX(-50%) scale(.8);opacity:0;padding:8px 16px;border-radius:20px;font-weight:bold;font-size:16px;transition:all .2s;white-space:nowrap}.tjFb.on{opacity:1;transform:translateX(-50%) scale(1)}
.tjFb.ok{background:#43A047;color:#fff}.tjFb.mal{background:#E53935;color:#fff}
.tjFin{background:#fff;color:#1F2937;border-radius:22px;padding:26px 20px;text-align:center;width:88%;max-width:330px;box-shadow:0 10px 26px rgba(0,0,0,.35)}.tjFin .tjE{font-size:60px}.tjFin .tjT{font-size:22px;font-weight:800;color:#12357F;margin-top:6px}.tjFin .tjS{font-size:16px;margin-top:4px}
.tjBt{display:grid;grid-template-columns:1fr 1fr;gap:10px}.tjK{border:none;border-radius:16px;padding:14px 8px;font:inherit;font-size:17px;font-weight:bold;color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;box-shadow:0 4px 0 rgba(0,0,0,.25)}
.tjK small{font-size:12px;font-weight:normal;opacity:.9}.tjK:active{transform:translateY(2px);box-shadow:0 2px 0 rgba(0,0,0,.25)}.tjK:disabled{opacity:.45}
.tjSi{background:#2E7D32}.tjNo{background:#C62828}.tjA{background:#EF6C00}.tjB{background:#1565C0}
.vsW{display:flex;flex-direction:column;gap:10px}.vsFig{position:relative;background:radial-gradient(circle at 50% 40%,#ffffff 0,#E8EEF7 70%);border:3px dashed #ffffff55;border-radius:20px;height:240px;display:flex;justify-content:center;transition:border-color .2s,background .2s}
.vsFig.sobre{border-color:#F2B33D;background:radial-gradient(circle at 50% 40%,#FFF8E1 0,#FFE9A8 70%)}.vsFig svg{height:100%;width:auto}.vsCnt{position:absolute;top:8px;right:10px;background:#12357F;color:#fff;font-weight:bold;font-size:13px;border-radius:12px;padding:3px 10px}
.vsPop{animation:vsPop .45s ease}@keyframes vsPop{0%{transform:scale(1)}40%{transform:scale(1.05)}100%{transform:scale(1)}}.vsPop{transform-origin:100px 200px}
.vsMsg{min-height:44px;background:#ffffff14;color:#fff;border-radius:12px;padding:10px 12px;font-size:15px;text-align:center;line-height:1.3}.vsMsg.ok{background:#E8F5E9;color:#1B5E20;font-weight:bold}.vsMsg.mal{background:#FFEBEE;color:#B71C1C;font-weight:bold}
.vsIt{display:grid;grid-template-columns:1fr 1fr;gap:8px}.vsC{display:flex;align-items:center;gap:8px;background:var(--dark2);color:#fff;border:2px solid var(--line);border-radius:14px;padding:10px;font:inherit;font-size:14px;text-align:left;line-height:1.2;cursor:grab;touch-action:none;user-select:none}
.vsC .vsE{flex:none;width:44px;height:44px;background:#fff;border-radius:12px;padding:4px;box-sizing:border-box;display:flex}.vsC .vsE svg{width:100%;height:100%}.vsC.ok{background:#E8F5E9;color:#1B5E20;border-color:#43A047}.vsC.mal{background:#FFEBEE;color:#B71C1C;border-color:#E53935;text-decoration:line-through}
.vsG{position:fixed;z-index:9999;width:64px;height:64px;background:#fff;border-radius:16px;padding:6px;box-sizing:border-box;pointer-events:none;transform:translate(-50%,-60%);filter:drop-shadow(0 4px 6px rgba(0,0,0,.4))}`;
  document.head.appendChild(cssT);

  // ---------- 9d) Aviso antes de la evaluación: no se entra "en seco" a la prueba
  if (typeof startQuiz === 'function' && !startQuiz.__siAviso) {
    const SQ = startQuiz;
    const cssE = document.createElement('style');
    cssE.textContent = `#siEval{display:none;position:fixed;inset:0;background:rgba(6,18,45,.78);z-index:9998;align-items:center;justify-content:center;padding:18px}
#siEval.on{display:flex}#siEval .seBox{background:#fff;color:#1F2937;border-radius:20px;max-width:390px;width:100%;padding:22px 20px;text-align:center;border-top:8px solid #2FC3F5;box-shadow:0 10px 30px rgba(0,0,0,.35)}
#siEval .seIc{font-size:44px;line-height:1}#siEval h3{margin:8px 0 4px;font-size:22px;color:#1F2FD6}#siEval .seT{font-size:14px;color:#4A5664;margin-bottom:12px}
#siEval ul{list-style:none;padding:0;margin:0 0 14px;text-align:left;display:flex;flex-direction:column;gap:8px}
#siEval li{display:flex;gap:10px;align-items:flex-start;background:#F4F7FC;border-radius:12px;padding:9px 11px;font-size:15px;line-height:1.35}#siEval li b{color:#1F2FD6}
#siEval .seGo{width:100%;background:#1F2FD6;color:#fff;border:none;border-radius:14px;padding:15px;font:inherit;font-size:17px;font-weight:bold;cursor:pointer}
#siEval .seRep{width:100%;background:none;border:none;color:#1F2FD6;text-decoration:underline;font:inherit;font-size:15px;margin-top:10px;cursor:pointer}`;
    document.head.appendChild(cssE);
    startQuiz = function () {
      const args = arguments, self = this;
      const conNota = st.mode !== 'ds44' && !st.repaso;
      if (!conNota) return SQ.apply(self, args);
      const T = st.topic.__base || st.topic, n = (T.quiz || []).length, conAct = (T.quiz || []).filter(q => q.act).length;
      let m = document.getElementById('siEval'); if (!m) { m = document.createElement('div'); m.id = 'siEval'; document.body.appendChild(m); }
      m.innerHTML = `<div class="seBox"><div class="seIc">📝</div><h3>Ahora viene la evaluación</h3><div class="seT">${T.title}</div>
        <ul><li>❓<span>Vas a responder <b>${n} preguntas</b> sobre lo que acabas de ver.</span></li>
        <li>⭐<span>Para aprobar necesitas <b>todas correctas</b> (nota 7,0).</span></li>
        ${conAct ? `<li>🧩<span>${conAct > 1 ? conAct + ' de ellas son <b>actividades</b>' : 'Una de ellas es una <b>actividad</b>'}: lee bien las instrucciones antes de tocar.</span></li>` : ''}
        <li>⏳<span>Lee con calma. Puedes cambiar tu respuesta antes de pasar a la siguiente.</span></li>
        <li>🔁<span>Si no apruebas, repasas las láminas y vuelves a intentarlo, con preguntas distintas.</span></li></ul>
        <button class="seGo" id="seGo">Comenzar la evaluación</button><button class="seRep" id="seRep">Prefiero repasar las láminas primero</button></div>`;
      m.className = 'on';
      try { VOZ.say(`Ahora viene la evaluación. Vas a responder ${n} preguntas. Para aprobar necesitas todas correctas. Lee con calma y toca comenzar.`); } catch (e) {}
      document.getElementById('seGo').onclick = () => { m.className = ''; try { VOZ.stop && VOZ.stop(); } catch (e) {} SQ.apply(self, args); };
      document.getElementById('seRep').onclick = () => { m.className = ''; try { VOZ.stop && VOZ.stop(); } catch (e) {} try { startLearn(); } catch (e) {} };
    };
    startQuiz.__siAviso = true;
  }

  // ---------- 10) Al cargar: empresa de la sesión guardada (o grupo, si nadie ha ingresado)
  try {
    const g = JSON.parse(localStorage.getItem('comfrut_cap_ruta') || 'null');
    const e = (RUTA && RUTA.persona && empDe(RUTA.persona)) || (g && g.persona && empDe(g.persona)) || '';
    if (e) construir(e); else { construir('comfrut'); marcaGrupo(); }
    if (typeof renderHome === 'function' && document.getElementById('secciones')) renderHome();
  } catch (e) { try { construir('comfrut'); marcaGrupo(); } catch (e2) {} }
})();

// 9e) Imagen de la evaluación: sin restos de globos (la colita queda suelta al ocultar el rótulo).
// Si el dibujo queda sin sentido al quitarle los rótulos, no se muestra.
(function () {
  try {
    if (typeof renderQ !== 'function' || renderQ.__siQi) return;
    const SIN_IMG = new Set(['si_in_empresa_q', 'si_t1_a_ley']);
    const oculto = el => el && el.style && el.style.display === 'none';
    const pulir = () => { try {
      const q = st.topic && st.topic.quiz && st.topic.quiz[st.qi]; const box = document.querySelector('#qBody .qimg');
      if (!box || !q || q.act) return;
      if (SIN_IMG.has(q.s)) { box.style.display = 'none'; return; }
      const svg = box.querySelector('svg'); if (!svg) return;
      // la colita del globo (queda suelta cuando se oculta el globo)
      const blanco = el => /^(#fff|#ffffff|white)$/i.test(el.getAttribute('fill') || '');
      svg.querySelectorAll('rect').forEach(r => { if (!oculto(r)) return; const n = r.nextElementSibling;
        if (!(n && n.tagName === 'path' && blanco(n) && /^M[\d.]+,[\d.]+ l/.test(n.getAttribute('d') || ''))) return;
        n.style.display = 'none'; const c = n.nextElementSibling;   // y el parche blanco que une la colita con el globo
        if (c && c.tagName === 'rect' && blanco(c) && !c.getAttribute('rx') && +c.getAttribute('width') <= 20 && +c.getAttribute('height') <= 6) c.style.display = 'none'; });
    } catch (e) {} };
    const R0 = renderQ;
    renderQ = function () { const v = R0.apply(this, arguments); pulir(); return v; };
    Object.keys(R0).forEach(k => { try { renderQ[k] = R0[k]; } catch (e) {} });
    renderQ.__siQi = true;
  } catch (e) {}

  // ---------- 99) Recuadro de firma siempre a su tamaño real (evita la firma pixelada o corrida en algunos teléfonos)
  (function () {
    const fix = () => { try {
      const g = document.getElementById('sig'); if (!g || typeof sizeSig !== 'function') return;
      const r = g.getBoundingClientRect(); if (!r.width || !r.height) return; const k = window.devicePixelRatio || 1;
      if (Math.abs(g.width - r.width * k) > 2 || Math.abs(g.height - r.height * k) > 2) sizeSig();
    } catch (e) {} };
    document.addEventListener('pointerdown', e => { if (e.target && e.target.id === 'sig') fix(); }, true);
    const ini = () => { try { const g = document.getElementById('sig'); if (g && window.ResizeObserver) new ResizeObserver(fix).observe(g); } catch (e) {} };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ini); else ini();
  })();
})();
