const PENSUM = [
  {
    semestre: 1,
    materias: [
      {
        nombre: "Bases Biológicas y Moleculares de la Medicina",
        pac: "pac/I Semestre/PAC 11139 BASES BIOLOGICAS Y MOLECULARES DE LA MEDICINA.pdf"
      },
      {
        nombre: "Morfofisiología I",
        pac: "pac/I Semestre/PAC 11140 MORFOFISIOLOGÍA I-VF.pdf"
      },
      {
        nombre: "Comunidad y Salud",
        pac: "pac/I Semestre/11138 COMUNIDAD Y SALUD.pdf"
      },
      {
        nombre: "Desarrollo Personal I",
        pac: "pac/I Semestre/11141 DESARROLLO PERSONAL I.pdf"
      },
      {
        nombre: "Procesos Comunicativos I",
        pac: "pac/I Semestre/11142 PROCESOS COMUNICATIVOS I.pdf"
      },
      {
        nombre: "Cátedra Bolivariana",
        pac: "pac/I Semestre/PAC 11143 CATEDRA BOLIVARIANA.pdf"
      },
      {
        nombre: "Pensamiento Lógico-Matemático",
        pac: "pac/I Semestre/11144 PENSAMIENTO LÓGICO-MATEMÁTICO.pdf"
      },
    ]
  },
  {
    semestre: 2,
    materias: [
      {
        nombre: "Morfofisiología II",
        pac: "pac/II Semestre/PAC 11148 MORFOFISIOLOGÍA II.pdf"
      },
      {
        nombre: "Histoembriología",
        pac: "pac/II Semestre/PAC 11147 HISTOEMBRIOLOGIA (1).pdf"
      },
      {
        nombre: "Bioquímica",
        pac: "pac/II Semestre/11146 BIOQUIMICA.pdf"
      },
      {
        nombre: "Salud Familiar",
        pac: "pac/II Semestre/SALUD FAMILIAR.pdf"
      },
      {
        nombre: "Procesos Comunicativos II",
        pac: "pac/II Semestre/11149 PROCESOS COMUNICATIVOS II .pdf"
      },
    ]
  },
  {
    semestre: 3,
    materias: [
      {
        nombre: "Morfofisiología III",
        pac: "pac/III Semestre/PAC DE MORFISIOLOGIA III.pdf"
      },
      {
        nombre: "Biociencias",
        pac: "pac/III Semestre/PAC BIOCIENCIAS.pdf"
      },
      {
        nombre: "Bioestadística",
        pac: "pac/III Semestre/PAC BIOESTADISTICA.pdf"
      },
      {
        nombre: "Innovación en Salud",
        pac: "pac/III Semestre/PAC INNOVACIÓN EN SALUD.pdf"
      },
      {
        nombre: "Promoción y Mantenimiento de la Salud",
        pac: "pac/III Semestre/PROMOCION Y MANTENIMIENTO DE LA  SALUD.pdf"
      },
      {
        nombre: "Desarrollo Personal II",
        pac: "pac/III Semestre/DESARROLLO PERSONAL  II.pdf"
      },
    ]
  },
  {
    semestre: 4,
    materias: [
      {
        nombre: "Introducción a la Clínica",
        pac: "pac/IV Semestre/PAC INTRODUCCIÓN A LA CLINICA.pdf"
      },
      {
        nombre: "Microbiología y Parasitología",
        pac: "pac/IV Semestre/PAC MICROBIOLOGIA Y PARASITOLOGIA.pdf"
      },
      {
        nombre: "Patología Clínica",
        pac: "pac/IV Semestre/PAC PATOLOGÍA CLÍNICA.pdf"
      },
      {
        nombre: "Epidemiología",
        pac: "pac/IV Semestre/PAC EPIDEMIOLOGIA.pdf"
      },
      {
        nombre: "Salud Ambiental",
        pac: "pac/IV Semestre/PAC SALUD AMBIENTAL.pdf"
      },
      {
        nombre: "Innovación y Emprendimiento I",
        pac: "pac/IV Semestre/PAC INNOVACIÓN Y EMPRENDIMIENTO I.pdf"
      },
      {
        nombre: "Electiva: Desarrollo Personal III",
        esElectiva: true,
        opciones: [
          { nombre: "Aeróbicos",                      pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/AEROBICOS.pdf" },
          { nombre: "Deporte y Lúdica",               pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Deporte y Lúdica .pdf" },
          { nombre: "Fútbol Sala",                    pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Futbol Sala .pdf" },
          { nombre: "Taller de Pintura",              pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/TALLER DE  PINTURA .pdf" },
          { nombre: "Taller de Apreciación Cinematográfica", pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Taller de Apreciación Cinematográfica.pdf" },
          { nombre: "Taller de Apreciación Musical",  pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Taller de Apreciación Musical .pdf" },
          { nombre: "Taller de Apreciación Vallenata",pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Taller de apreciacion vallenata.pdf" },
          { nombre: "Taller de Arte y Carnaval",      pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Taller de Arte y Carnaval.pdf" },
          { nombre: "Voleibol",                       pac: "pac/IV Semestre/PAC ELECTIVA DE DESARROLLO PERSONAL III/Voleibol .pdf" },
        ]
      },
    ]
  },
  {
    semestre: 5,
    materias: [
      {
        nombre: "Semiología",
        pac: "pac/V Semestre/SEMIOLOGIA.pdf"
      },
      {
        nombre: "Farmacología Clínica",
        pac: "pac/V Semestre/FARMACOLOGÍA CLINICA.pdf"
      },
      {
        nombre: "Bioética",
        pac: "pac/V Semestre/BIOETICA.pdf"
      },
      {
        nombre: "Vigilancia en Salud Pública",
        pac: "pac/V Semestre/VIGILANCIA EN SALUD PUBLICA.pdf"
      },
      {
        nombre: "Innovación y Emprendimiento II",
        pac: "pac/V Semestre/Innovación y Emprendimiento II.pdf"
      },
    ]
  },
  {
    semestre: 6,
    materias: [
      {
        nombre: "Medicina Interna",
        pac: "pac/VI Semestre/MEDICINA INTERNA.pdf"
      },
      {
        nombre: "Epidemiología Clínica",
        pac: "pac/VI Semestre/EPIDEMIOLOGIA CLINICA.pdf"
      },
      {
        nombre: "Formación para la Investigación I",
        pac: "pac/VI Semestre/FORMACION PARA LA INVESTIGACION I.pdf"
      },
      {
        nombre: "Electiva Interdisciplinar",
        pac: "pac/VI Semestre/ELECTIVA INTERDISCIPLINAR.pdf"
      },
      {
        nombre: "Electiva de Salud Pública",
        pac: "pac/VI Semestre/ELECTIVA DE SALUD PÚBLICA.pdf"
      },
      {
        nombre: "Electiva: Medicina Interna",
        esElectiva: true,
        opciones: [
          { nombre: "RCP Adulto",  pac: "pac/VI Semestre/ELECTIVA MEDICINA INTERNA/ELECTIVA  MEDICINA INTERNA RCP ADULTO.pdf" },
          { nombre: "EKG",         pac: "pac/VI Semestre/ELECTIVA MEDICINA INTERNA/ELECTIVA MEDICINA INTERNA  EKG.pdf" },
          { nombre: "VIH",         pac: "pac/VI Semestre/ELECTIVA MEDICINA INTERNA/ELECTIVA MEDICINA INTERNA VIH.pdf" },
        ]
      },
    ]
  },
  {
    semestre: 7,
    materias: [
      {
        nombre: "Cirugía",
        pac: "pac/VII Semestre/CIRUGIA.pdf"
      },
      {
        nombre: "Toxicología Clínica",
        pac: "pac/VII Semestre/TOXICOLOGIA CLINICA.pdf"
      },
      {
        nombre: "Psicología Médica",
        pac: "pac/VII Semestre/PSICOLOGÍA MEDICA.pdf"
      },
      {
        nombre: "Seguridad y Salud del Trabajo",
        pac: "pac/VII Semestre/SEGURIDAD Y SALUD DEL TRABAJO.pdf"
      },
      {
        nombre: "Formación para la Investigación II",
        pac: "pac/VII Semestre/FORMACION PARA LA INVESTIGACION II.pdf"
      },
      {
        nombre: "Electiva: Cirugía",
        esElectiva: true,
        opciones: [
          { nombre: "Manejo de Heridas y Suturas",    pac: "pac/VII Semestre/ELECTIVA DE CIRUGIA/ELECTIVA CIRUGIA - MANEJO DE HERIDAS Y SUTURAS.pdf" },
          { nombre: "Nutrición Clínica",              pac: "pac/VII Semestre/ELECTIVA DE CIRUGIA/ELECTIVA CIRUGIA - NUTRICION CLINICA.pdf" },
          { nombre: "Fracturas e Inmovilizaciones",   pac: "pac/VII Semestre/ELECTIVA DE CIRUGIA/ELECTIVA CIRUGIA FRACTURAS E INMOVILIZACIONES.pdf" },
        ]
      },
    ]
  },
  {
    semestre: 8,
    materias: [
      {
        nombre: "Psiquiatría",
        pac: "pac/VIII Semestre/PSIQUIATRIA.pdf"
      },
      {
        nombre: "Pediatría",
        pac: "pac/VIII Semestre/PEDIATRÍA.pdf"
      },
      {
        nombre: "Historia de la Medicina",
        pac: "pac/VIII Semestre/HISTORIA DE LA MEDICINA.pdf"
      },
      {
        nombre: "Administración y Gestión en la Salud I",
        pac: "pac/VIII Semestre/ADMINISTRACION Y GESTION I.pdf"
      },
      {
        nombre: "Formación para la Investigación III",
        pac: "pac/VIII Semestre/FORMACION PARA LA INVESTIGACION III.pdf"
      },
      {
        nombre: "Electiva: Ciencias Sociales",
        esElectiva: true,
        opciones: [
          { nombre: "Antropología", pac: "pac/VIII Semestre/ELECTIVA EN CIENCIAS SOCIALES/ELECTIVA ANTROPOLOGÍA.pdf" },
          { nombre: "Demografía",   pac: "pac/VIII Semestre/ELECTIVA EN CIENCIAS SOCIALES/ELECTIVA DEMOGRAFIA.pdf" },
          { nombre: "Sociología",   pac: "pac/VIII Semestre/ELECTIVA EN CIENCIAS SOCIALES/ELECTIVA SOCIOLOGIA.pdf" },
        ]
      },
    ]
  },
  {
    semestre: 9,
    materias: [
      {
        nombre: "Medicina Legal",
        pac: "pac/IX Semestre/11186 MEDICINA LEGAL.pdf"
      },
      {
        nombre: "Administración y Gestión en la Salud II",
        pac: "pac/IX Semestre/11187 ADMINISTRACIÓN Y GESTIÓN EN LA SALUD II.pdf"
      },
      {
        nombre: "Urgencias y Emergencias",
        pac: "pac/IX Semestre/11188 URGENCIAS Y EMERGENCIAS.pdf"
      },
      {
        nombre: "Ginecología y Obstetricia",
        pac: "pac/IX Semestre/11190 GINECOLOGIA Y OBSTETRICIA.pdf"
      },
    ]
  },
  {
    semestre: 10,
    materias: [
      {
        nombre: "Internado I",
        pac: "pac/X Semestre/Internado I.pdf"
      },
    ]
  },
  {
    semestre: 11,
    materias: [
      {
        nombre: "Internado II",
        pac: "pac/XI Semestre/Internado II.pdf"
      },
    ]
  },
  {
    semestre: 12,
    materias: [
      {
        nombre: "Internado III",
        pac: "pac/XII Semestre/INTERNADO III.pdf"
      },
    ]
  },
];

const ICON_DOC = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>`;

const ICON_ELECTIVA = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12h8M12 8v8"/>
  </svg>`;

function ordinal(n) {
  const map = {
    1:'Primer', 2:'Segundo', 3:'Tercer', 4:'Cuarto',
    5:'Quinto', 6:'Sexto', 7:'Séptimo', 8:'Octavo',
    9:'Noveno', 10:'Décimo', 11:'Undécimo', 12:'Duodécimo'
  };
  return map[n] || `${n}°`;
}

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function highlight(text, query) {
  if (!query) return text;
  const norm  = normalize(text);
  const normQ = normalize(query);
  const idx   = norm.indexOf(normQ);
  if (idx === -1) return text;
  return text.slice(0, idx)
    + `<mark>${text.slice(idx, idx + query.length)}</mark>`
    + text.slice(idx + query.length);
}

function renderPensum(query = '') {
  const container = document.getElementById('pensum');
  container.innerHTML = '';

  let totalMaterias = 0;
  let totalPAC      = 0;

  PENSUM.forEach((sem) => {
    const semEl = document.createElement('section');
    semEl.className = 'semester';
    semEl.dataset.semestre = sem.semestre;

    const header = `
      <div class="semester__header">
        <span class="semester__number">Semestre ${sem.semestre}</span>
        <h2 class="semester__title">${ordinal(sem.semestre)} Semestre</h2>
        <span class="semester__count">${sem.materias.length} asignatura${sem.materias.length !== 1 ? 's' : ''}</span>
      </div>`;

    let gridHTML = '<div class="semester__grid">';
    let visibleCount = 0;

    sem.materias.forEach((mat) => {
      totalMaterias++;

      if (mat.esElectiva) {
        const nameMatch = normalize(mat.nombre).includes(normalize(query))
          || mat.opciones.some(o => normalize(o.nombre).includes(normalize(query)));
        const hidden = query && !nameMatch;
        if (!hidden) visibleCount++;

        const displayName = query ? highlight(mat.nombre, query) : mat.nombre;

        gridHTML += `
          <article class="materia-card materia-card--electiva${hidden ? ' search-hidden' : ''}"
            data-nombre="${mat.nombre}"
            data-electiva="true"
            data-semestre="${sem.semestre}"
            data-opciones='${JSON.stringify(mat.opciones)}'
            role="button" tabindex="0">
            <div class="materia-card__top">
              <h3 class="materia-card__name">${displayName}</h3>
              <div class="materia-card__icon electiva-icon">${ICON_ELECTIVA}</div>
            </div>
            <div class="materia-card__footer">
              <span class="materia-card__pac-badge pac-badge--electiva">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:10px;height:10px"><path d="M9 18l6-6-6-6"/></svg>
                ${mat.opciones.length} opciones
              </span>
              <span class="materia-card__hint">Ver opciones →</span>
            </div>
          </article>`;

        mat.opciones.forEach(op => {
          if (op.pac) totalPAC++;
        });

      } else {
        if (mat.pac) totalPAC++;
        const nameMatch = normalize(mat.nombre).includes(normalize(query));
        const hidden = query && !nameMatch;
        if (!hidden) visibleCount++;

        const displayName = query ? highlight(mat.nombre, query) : mat.nombre;
        const hasPAC = Boolean(mat.pac);
        const badge = hasPAC
          ? `<span class="materia-card__pac-badge pac-badge--available">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:10px;height:10px"><path d="M20 6 9 17l-5-5"/></svg>
               PAC disponible
             </span>`
          : `<span class="materia-card__pac-badge pac-badge--unavailable">Sin PAC aún</span>`;

        gridHTML += `
          <article class="materia-card${!hasPAC ? ' no-pac' : ''}${hidden ? ' search-hidden' : ''}"
            data-nombre="${mat.nombre}"
            data-pac="${mat.pac || ''}"
            data-semestre="${sem.semestre}"
            ${hasPAC ? 'role="button" tabindex="0"' : ''}>
            <div class="materia-card__top">
              <h3 class="materia-card__name">${displayName}</h3>
              <div class="materia-card__icon">${ICON_DOC}</div>
            </div>
            <div class="materia-card__footer">
              ${badge}
              ${hasPAC ? '<span class="materia-card__hint">Ver PAC →</span>' : ''}
            </div>
          </article>`;
      }
    });

    gridHTML += '</div>';
    semEl.innerHTML = header + gridHTML;
    if (visibleCount === 0) semEl.classList.add('all-hidden');
    container.appendChild(semEl);
  });

  document.getElementById('totalMaterias').textContent = totalMaterias;
  document.getElementById('totalPAC').textContent = totalPAC > 0 ? totalPAC : '—';

  if (query) {
    const visible = container.querySelectorAll('.materia-card:not(.search-hidden)').length;
    document.getElementById('searchInfo').textContent =
      visible === 0
        ? 'Ninguna asignatura coincide'
        : `${visible} asignatura${visible !== 1 ? 's' : ''} encontrada${visible !== 1 ? 's' : ''}`;
  } else {
    document.getElementById('searchInfo').textContent = '';
  }

  bindCardEvents();
  observeSemesters();
}

function observeSemesters() {
  const sems = document.querySelectorAll('.semester');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Array.from(sems).indexOf(entry.target) * 60;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  sems.forEach(sem => io.observe(sem));
}

const overlay    = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(card) {
  const nombre   = card.dataset.nombre;
  const pac      = card.dataset.pac;
  const semestre = card.dataset.semestre;
  const esElectiva = card.dataset.electiva === 'true';
  const opciones = esElectiva ? JSON.parse(card.dataset.opciones) : null;

  document.getElementById('modalSemester').textContent = `${ordinal(+semestre)} Semestre`;
  document.getElementById('modalTitle').textContent    = nombre;

  const pacInfo = document.getElementById('pacInfo');
  pacInfo.innerHTML = `
    <div class="pac-info__row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      <span><strong>Asignatura:</strong> ${nombre}</span>
    </div>
    <div class="pac-info__row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
      </svg>
      <span><strong>Documento:</strong> Plan de Área Curricular (PAC)</span>
    </div>`;

  const btn = document.getElementById('modalBtn');

  if (esElectiva && opciones) {
    btn.style.display = 'none';
    let opcionesHTML = '<div class="electiva-opciones">';
    opcionesHTML += '<p class="electiva-opciones__label">Selecciona una opción para ver su PAC:</p>';
    opciones.forEach(op => {
      opcionesHTML += `
        <a class="electiva-opcion-btn" href="${op.pac}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;flex-shrink:0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
          </svg>
          ${op.nombre}
        </a>`;
    });
    opcionesHTML += '</div>';
    pacInfo.insertAdjacentHTML('beforeend', opcionesHTML);
  } else {
    btn.style.display = '';
    if (pac) {
      btn.href = pac;
      btn.classList.remove('disabled');
      btn.setAttribute('target', '_blank');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
        </svg>
        Ver PAC completo`;
    } else {
      btn.href = '#';
      btn.classList.add('disabled');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        PAC no disponible aún`;
    }
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function bindCardEvents() {
  document.querySelectorAll('.materia-card:not(.no-pac)').forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
  });
}

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
let searchTimeout;

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const q = searchInput.value.trim();
  searchClear.classList.toggle('visible', q.length > 0);
  searchTimeout = setTimeout(() => renderPensum(q), 160);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  renderPensum('');
  searchInput.focus();
});

document.addEventListener('DOMContentLoaded', () => {
  renderPensum();
});
