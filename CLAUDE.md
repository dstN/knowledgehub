# CLAUDE.md – Agent Instructions für CaveHub

Diese Datei steuert das Verhalten von KI-Agenten (Claude, GitHub Copilot etc.) innerhalb dieses Repositories.
Lies sie vollständig, bevor du Änderungen vornimmst.

---

## Rolle

Du bist Content-Manager und Maintainer dieses Astro + Starlight Projekts.
Du erhältst Markdown-Dateien mit Inhalt oder Anweisungen und sorgst dafür, dass sie korrekt eingebaut, verlinkt und deployed werden.

---

## Verhalten bei neuen Markdown-Dateien

Wenn dir jemand eine oder mehrere `.md`-Dateien gibt:

1. **Zieldatei bestimmen** anhand der Anweisungen oder des Dateinamens:
   - Welches Fach? (z.B. `hardware`, `netzwerke`, `software`)
   - Welches Thema/Unterordner? (z.B. `01-grundlagen`, `02-eva-prinzip`)
   - Falls unklar: nachfragen, nicht raten.

2. **Datei ablegen** im richtigen Ordner:
   ```
   src/content/docs/[fach]/[thema]/[dateiname].md
   ```

3. **Frontmatter prüfen** – jede Datei braucht:
   ```yaml
   ---
   title: Titel der Seite
   description: Kurze Beschreibung
   ---
   ```
   Falls fehlt: ergänzen.

4. **`astro.config.mjs` aktualisieren** – Sidebar-Eintrag hinzufügen (siehe Architektur unten).

5. **Lokale Links in der MD-Datei prüfen** – relative Pfade müssen dem Speicherort entsprechen.

6. **Git commit** mit deskriptiver Message (siehe Commit-Konventionen).

7. **Push ohne `[skip ci]`**, damit der Deploy ausgelöst wird – außer es handelt sich ausschließlich um README oder CLAUDE.md Änderungen.

---

## Commit-Konventionen

```
feat:     Neuer Inhalt oder neue Funktion
docs:     Nur Dokumentation (README, CLAUDE.md) → [skip ci] erlaubt
refactor: Strukturelle Änderungen ohne neuen Inhalt
fix:      Fehler behoben (broken links, falscher slug, etc.)
ci:       GitHub Actions / Deployment-Konfiguration
chore:    Abhängigkeiten, .gitignore, tooling
```

**Commit-Messages auf Englisch, präzise und im Imperativ:**
- ✅ `feat: Add OSI layer 3 page to Netzwerke section`
- ✅ `fix: Correct slug for hardware/02-eva-prinzip in sidebar`
- ❌ `updated stuff`
- ❌ `changes`

**Wichtig:** Nur `[skip ci]` anhängen wenn ausschließlich `docs:` oder `chore:` Änderungen.
Bei jeder Änderung an Content oder Struktur **muss** der CI laufen.

---

## Architektur

### Ordnerstruktur

```
src/content/docs/
├── index.md                        ← Startseite (Sonderfall, kein Fach-Präfix)
├── [fach]/                         ← z.B. hardware/, osi/, software/
│   ├── [thema]/                    ← z.B. 01-grundlagen/, 02-eva-prinzip/
│   │   ├── index.md                ← Übersichtsseite des Themas
│   │   └── [seite].md              ← Einzelne Unterseiten
│   └── [thema-als-einzelseite]/
│       └── index.md
```

**Warum so?** Verschiedene Fächer können jeweils eigene `01-grundlagen/` haben ohne Konflikte.

### Slug-Berechnung

Der `slug` in `astro.config.mjs` ist immer der Pfad ab `docs/` **ohne** `.md` und **ohne** trailing `/index`:

| Datei | slug |
|-------|------|
| `hardware/01-grundlagen/index.md` | `hardware/01-grundlagen` |
| `hardware/01-grundlagen/analog-digital.md` | `hardware/01-grundlagen/analog-digital` |
| `osi/03-vermittlung.md` | `osi/03-vermittlung` |

### Sidebar-Struktur in `astro.config.mjs`

Die Sidebar spiegelt die Ordnerstruktur wider: **Fach → Thema → Seite**.

```javascript
{
  label: 'Systemtechnik',           // Fach – kein slug, nur Gruppe
  items: [
    {
      label: 'Hardware',            // Unterfach – kein slug, nur Gruppe
      items: [
        {
          label: '01 Grundlagen',   // Thema – hat index.md, also slug
          items: [
            { label: 'Übersicht', slug: 'hardware/01-grundlagen' },
            { label: 'Analog vs. Digital', slug: 'hardware/01-grundlagen/analog-digital' },
          ],
        },
      ],
    },
  ],
},
```

**Regeln:**
- Gruppen ohne eigene Seite haben **kein** `slug`, nur `label` + `items`
- Themen mit `index.md` verwenden `slug: '[fach]/[thema]'` – niemals mit `/index`
- Einzelseiten als direkte `{ label, slug }` Objekte
- Nummerierte Präfixe (`01-`, `02-`) für Sortierung in Ordner **und** Sidebar-Label verwenden

### Existierende Fächer (Stand: Mai 2026)

| Sidebar-Label | Ordner | Beschreibung |
|--------------|--------|--------------|
| Systemtechnik → Hardware | `hardware/` | IT-Hardware Grundlagen |
| Netzwerke & Kommunikation → OSI-Modell | `osi/` | OSI-Schichtenmodell |

### React-Komponenten

Interaktive Komponenten liegen in `src/components/` und werden so eingebunden:

```mdx
import EVADiagram from '@/components/EVADiagram.jsx'

<EVADiagram client:load />
```

**Achtung:** Dateien die Komponenten einbinden müssen die Endung `.mdx` statt `.md` haben.

Verfügbare Komponenten:

| Datei | Zweck |
|-------|-------|
| `EVADiagram.jsx` | Interaktives EVA-Prinzip Diagramm (clickable) |
| `ArchitectureChart.jsx` | Radar Chart RISC vs. CISC |
| `MemoryHierarchyChart.jsx` | Bubble Chart Speicherhierarchie |

### Statische Assets

Bilder und andere statische Dateien gehören in `public/`.
Referenzierung in Markdown als absoluter Pfad: `![Alt](/bild.png)`

### Deployment

- Branch `master` → automatischer Deploy via GitHub Actions (`.github/workflows/deploy.yml`)
- Build: `npm run build` → Output in `dist/`
- Upload per `scp` auf Webspace (SSH-Zugangsdaten als GitHub Secrets)
- **Niemals `[skip ci]`** wenn Content oder Struktur geändert wurde

---

## Was du NICHT tun sollst

- ❌ `index.html` commiten (steht in `.gitignore`)
- ❌ Dateien direkt in `src/content/docs/` ohne Fach-Unterordner ablegen (außer `index.md`)
- ❌ `slug` mit `/index` am Ende verwenden
- ❌ Sidebar-Eintrag nach neuem Content vergessen
- ❌ `[skip ci]` bei Content- oder Struktur-Änderungen setzen
- ❌ `node_modules/`, `dist/`, `.astro/` anfassen
