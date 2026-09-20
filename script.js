/* AS Taxi 43 — le seul numéro à changer est celui-ci. */
const NUMERO_WHATSAPP = '33664109661';

const lienWhatsApp = (texte) =>
  `https://wa.me/${NUMERO_WHATSAPP}${texte ? `?text=${encodeURIComponent(texte)}` : ''}`;

/* Tous les liens porteurs d'un data-wa reçoivent leur message pré-rempli. */
const habillerLiens = (racine = document) => {
  racine.querySelectorAll('[data-wa]').forEach((lien) => {
    lien.href = lienWhatsApp(lien.dataset.wa);
    lien.target = '_blank';
    lien.rel = 'noopener';
  });
};

/* ── Devis : le formulaire ne fait que rédiger un message WhatsApp ── */
const dateLisible = (valeur) => {
  if (!valeur) return '';
  const [a, m, j] = valeur.split('-');
  return `${j}/${m}/${a}`;
};

const composerMessage = (form) => {
  const v = (nom) => (form.elements[nom]?.value || '').trim();
  const lignes = ['Bonjour, je souhaite réserver un taxi.'];

  if (v('depart')) lignes.push(`Départ : ${v('depart')}`);
  if (v('arrivee')) lignes.push(`Destination : ${v('arrivee')}`);

  const quand = [dateLisible(v('date')), v('heure') ? `à ${v('heure')}` : ''].filter(Boolean).join(' ');
  if (quand) lignes.push(`Prise en charge : ${quand}`);

  if (v('passagers')) lignes.push(`Passagers : ${v('passagers')}`);
  if (v('bagages')) lignes.push(`Bagages : ${v('bagages')}`);
  if (form.elements.retour?.checked) lignes.push('Trajet retour : à prévoir également');
  if (v('notes')) lignes.push(`À savoir : ${v('notes')}`);

  lignes.push('Pouvez-vous me confirmer le forfait ? Merci.');
  return lignes.join('\n');
};

const brancherDevis = () => {
  const form = document.getElementById('devis-form');
  const apercu = document.getElementById('apercu-texte');
  if (!form || !apercu) return;

  const rafraichir = () => { apercu.textContent = composerMessage(form); };
  form.addEventListener('input', rafraichir);
  form.addEventListener('change', rafraichir);
  rafraichir();

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    window.open(lienWhatsApp(composerMessage(form)), '_blank', 'noopener');
  });
};

habillerLiens();
brancherDevis();

const annee = document.getElementById('annee');
if (annee) annee.textContent = new Date().getFullYear();
