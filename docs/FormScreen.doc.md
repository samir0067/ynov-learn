# FormScreen — Documentation formateur

> **Cible pédagogique** : corrigé de référence du devoir maison donné en fin de créneau 4 (useState + useEffect). À utiliser pour la **phase 0 du créneau 5 — correction collective (45 min)**.

---

## Vue d'ensemble

Le `FormScreen` est un mini-formulaire qui combine **tout ce que les élèves ont vu au créneau 4** :

- `useState` sur du texte (et plus seulement sur des nombres comme `CounterScreen`)
- `useEffect` avec **dépendance** (réactif à la valeur du champ, contrairement au `useEffect` de `ChronoScreen` qui dépend d'un booléen)
- **Cleanup** d'un `setTimeout` (et plus d'un `setInterval`)
- **État dérivé** (variables calculées à chaque rendu, pas stockées en state)
- TextInput **contrôlé** (concept nouveau, pas vu en cours mais prérequis pour le devoir)

Le devoir donné aux élèves comportait **3 étapes obligatoires + 3 bonus**, tous présents dans le corrigé.

> **Lien avec le devoir énoncé** : si un élève n'a fait que les étapes 1 et 2, c'est un rendu acceptable. Le bonus inactivité (`useEffect` + `setTimeout` + cleanup) est **le vrai test** de compréhension du créneau 4.

---

## Concepts mobilisés

| Concept | Où le pointer dans le corrigé | Rappel à faire en classe |
|---|---|---|
| `useState<string>` | `const [name, setName] = useState<string>("")` | "On stocke du texte. Le type générique `<string>` est optionnel mais permet d'expliciter ce qu'on met dedans." |
| TextInput contrôlé | `value={name} onChangeText={setName}` | "La règle d'or : `value` ↔ `onChangeText` toujours liés. Sinon le champ est ingérable." |
| État dérivé | `const isEmpty = trimmed.length === 0` | "Pas besoin de `useState` pour ça — c'est juste un calcul refait à chaque rendu." |
| `useEffect` réactif | `useEffect(() => {...}, [name])` | "À chaque frappe, l'effet se relance. C'est exactement ce qu'on veut pour 'reset le timer'." |
| Cleanup `setTimeout` | `return () => clearTimeout(id)` | "Sans ça, on aurait 50 timers en parallèle qui s'empilent. Démo en live : commenter le return et regarder le bug." |
| Updater function | `setResetCount((prev) => prev + 1)` | "On préfère `prev => prev + 1` à `count + 1` quand on fait `+1` sur la valeur précédente." |

---

## Décorticage par section

### Étape 1 — TextInput contrôlé + message de bienvenue

**Code** :
```tsx
<TextInput value={name} onChangeText={setName} ... />
```
**À faire dire aux élèves** :
- "Quel est le state ici ?" → `name`
- "Qui modifie `name` ?" → `setName` via `onChangeText`
- "Que se passe-t-il si on enlève `value=` ?" → champ non contrôlé, React ne sait plus ce qu'il y a dedans

**Affichage conditionnel** :
```tsx
{isEmpty ? <placeholder/> : isClaude ? <claude/> : <greeting/>}
```
- L'ordre des conditions compte : on teste **d'abord** le cas vide, **puis** l'easter egg, **enfin** le cas normal.
- `trimmed = name.trim()` permet d'ignorer les espaces parasites (` Sam ` → `Sam`).

### Étape 2 — Bouton Reset disabled

**Code** :
```tsx
<Button label="Reset" onPress={handleReset} disabled={isEmpty} />
```
**À faire dire aux élèves** :
- "Pourquoi `disabled={isEmpty}` et pas `disabled={!isEmpty}` ?" → on veut désactiver **quand** c'est vide
- "Pourquoi on a étendu le composant Button au lieu d'utiliser `<TouchableOpacity disabled>` directement ?" → réutilisation, cohérence visuelle, et c'est de la bonne hygiène

> **Le composant `Button` a été étendu** avec une prop optionnelle `disabled?: boolean`, rétrocompatible : tous les usages existants continuent de fonctionner. Voir `src/components/Button.tsx`.

### Étape 3 — Compteur de caractères

**Code** :
```tsx
maxLength={MAX_LENGTH}  // limite stricte côté composant
const counterColor = name.length > WARNING_THRESHOLD ? COLORS.warning : COLORS.gray;
```
**À faire dire aux élèves** :
- "Pourquoi `maxLength={20}` et pas une condition `if (name.length < 20) setName(...)` ?" → la prop existe déjà, on l'utilise
- "Pourquoi le seuil warning est à 15 et pas à 20 ?" → on veut **prévenir** avant la limite, pas la signaler une fois atteinte

### Bonus 1 — Easter egg "claude"

```tsx
const isClaude = trimmed.toLowerCase() === "claude";
```
- `toLowerCase()` rend la comparaison **insensible à la casse** : `Claude`, `CLAUDE`, `claude` → tous matchent.
- Ce bonus teste juste leur capacité à enchaîner deux conditions (vide → claude → normal).

### Bonus 2 — Compteur de resets

```tsx
const handleReset = () => {
    setName("");
    setResetCount((prev) => prev + 1);
};
```
- Deux `setState` dans la même fonction : React les **bat ch** automatiquement (un seul re-render).
- Insister sur la forme `(prev) => prev + 1` plutôt que `resetCount + 1` : c'est un bon réflexe à prendre.

### Bonus 3 — Inactivité 5s (LE bonus important)

```tsx
useEffect(() => {
    setIsIdle(false);
    if (isEmpty) return;
    const id = setTimeout(() => setIsIdle(true), IDLE_DELAY_MS);
    return () => clearTimeout(id);
}, [name]);
```

**À décortiquer en 4 temps** :
1. **Au montage et à chaque frappe**, l'effet se relance.
2. On **annule l'idle** d'abord (`setIsIdle(false)`) → le message disparaît à la première frappe.
3. Si le champ est vide, on ne lance pas de timer (early return).
4. Sinon, on programme un `setTimeout` **et on retourne le cleanup** qui sera appelé **avant** le prochain effet (donc à la prochaine frappe).

**Flux concret à dessiner au tableau** :
```
frappe "S"  → cleanup ancien timer (rien) → nouveau timer 5s
frappe "Sa" → cleanup timer "S" → nouveau timer 5s
frappe "Sam"→ cleanup timer "Sa" → nouveau timer 5s
(5s passent sans frappe) → setIsIdle(true) → 💤
frappe "Sami"→ setIsIdle(false) → cleanup timer (déjà tiré) → nouveau timer
```

---

## Pièges classiques attendus dans les rendus élèves

À chercher en priorité quand on corrige les rendus :

1. **TextInput non contrôlé** : élève qui met `onChangeText={setName}` mais oublie `value={name}`. Symptôme : "le champ marche mais le Reset ne le vide pas visuellement".
2. **Condition disabled inversée** : `disabled={!isEmpty}` au lieu de `disabled={isEmpty}`. Symptôme : bouton actif uniquement quand le champ est vide.
3. **Oubli du cleanup** : `useEffect` sans `return () => clearTimeout(id)`. Symptôme : à la première inactivité, le 💤 apparaît, mais ensuite il **clignote** ou apparaît trop tôt parce que d'anciens timers se déclenchent.
4. **`setTimeout` stocké dans un useState** : élève qui fait `useState<NodeJS.Timeout>` pour garder l'id. Anti-pattern ici, le scope de l'effet suffit. À recadrer si on le voit.
5. **Effect sans dépendance ou avec `[]`** : `useEffect(..., [])` → le timer ne se relance jamais. À pointer comme **le contre-exemple** du créneau.
6. **State au lieu de dérivé** : `const [isEmpty, setIsEmpty] = useState(true)` puis `setIsEmpty(name === "")`. Marche, mais c'est de la duplication de source de vérité. À recadrer.
7. **Compteur de caractères en JS pur** : élève qui ré-implémente `maxLength` à la main avec une condition dans `onChangeText`. Marche aussi, mais on lui montre la prop native.
8. **Easter egg sensible à la casse** : oubli du `.toLowerCase()`. À pointer comme un classique de la comparaison de strings.
9. **Reset qui n'incrémente pas** : élève qui fait juste `setName("")` et ajoute le compteur ailleurs. À pointer : un handler peut faire plusieurs choses.

---

## Mini-questions à poser pendant la correction collective

À balancer en rafale sur les 45 min, dans l'ordre :

1. "Pourquoi le TextInput a besoin **à la fois** de `value` et `onChangeText` ?"
2. "Si je remplace `useState<string>("")` par `useState<string>()`, qu'est-ce qui se passe ?" → `name` est `undefined`, et `name.length` plante.
3. "Le bouton Reset, on aurait pu le coder en gardant un `useState<boolean>` pour `disabled`. Pourquoi on ne le fait pas ?" → état dérivé, source de vérité unique.
4. "Pourquoi le tableau de dépendance du `useEffect` contient `[name]` et pas `[]` ?"
5. "Que se passerait-il si on enlevait le `return () => clearTimeout(id)` ?" — **démo en live recommandée** : commenter la ligne, taper rapidement, et regarder les 💤 s'empiler dans l'historique.
6. "On a deux `setState` dans `handleReset`. Combien de re-renders ?" → un seul (batching React).
7. "Pourquoi `trimmed.toLowerCase() === "claude"` et pas juste `name === "claude"` ?"

---

## Points d'attention pour la phase 0 du créneau 5 (45 min)

**Plan de correction suggéré** :

| Temps | Action |
|---|---|
| 0–5 min | Demander qui a tenté **les bonus** (à main levée). Faire passer 1-2 élèves au tableau pour montrer leur rendu. |
| 5–20 min | Projeter le corrigé `FormScreen.tsx` étape par étape. Faire prédire le code aux élèves avant de le révéler (questions ci-dessus). |
| 20–35 min | **Insister sur le useEffect d'inactivité** (le seul vrai morceau du créneau 4). Démo en live du bug sans cleanup. |
| 35–45 min | Tour de table rapide : "qu'est-ce qui était le plus dur ?". Récolter les pièges réels rencontrés et les noter. |

**Ne pas faire** :
- Coder le corrigé en live de zéro (trop long, on a 45 min).
- Aborder `useRef`, `useCallback`, `useMemo` — pas au programme du créneau 4. Si un élève zélé l'a utilisé, le féliciter mais expliquer qu'on n'en a pas besoin ici.
- Aborder les forms libraries (Formik, react-hook-form) — hors scope total.

**À faire absolument** :
- Montrer la démo "sans cleanup → bug". C'est le moment où la notion de cleanup devient **viscérale** pour les élèves.
- Réutiliser le vocabulaire **"état dérivé"** plusieurs fois — ça reviendra au créneau 5 (re-render et performances).

---

## Fichiers modifiés/créés par ce corrigé

| Fichier | Modification |
|---|---|
| `src/screens/FormScreen.tsx` | **Nouveau** — corrigé complet |
| `src/components/Button.tsx` | Prop `disabled` ajoutée (rétrocompatible) |
| `src/constants/colors.ts` | Couleur `warning` ajoutée |
| `App.tsx` | Route `Form` enregistrée dans le Stack |
| `src/screens/HomeScreen.tsx` | Tuile `📝 FormScreen` ajoutée |
