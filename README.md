# IT-Hardware Studienführer 🖥️

Ein **interaktiver Studienführer** für IT-Azubis zur Vermittlung von Hardware-Grundlagen. Dieses Repository wird als Lernplattform für deine Mitschüler gebaut.

## 🎯 Über dieses Projekt

Der IT-Hardware Studienführer ist ein Astro + Starlight-basiertes Web-Projekt, das komplexe IT-Konzepte verständlich und interaktiv vermittelt:

- **Grundlagen**: Evolution der Datenverarbeitung, Analog/Digital, DV-Geräte
- **EVA-Prinzip**: Eingabe-Verarbeitung-Ausgabe mit interaktiven Diagrammen
- **CPU & Architektur**: CPU-Komponenten, RISC vs. CISC (mit interaktiven Charts)
- **Mainboard & Chipsatz**: Speicherhierarchie, Chipsatz-Evolution
- **Glossar**: Wichtige Fachbegriffe zum Lernen

## 🚀 Schnellstart

### Voraussetzungen

- **Node.js 24** ([nodejs.org](https://nodejs.org)) – ältere Versionen funktionieren nicht!
- **npm** (kommt automatisch mit Node.js)
- **Git** (für Versionskontrolle)
- **VS Code** (empfohlen, mit der Erweiterung [Markdown Preview](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one))

### Installation & Entwicklung

```bash
# 1. Repository klonen
git clone <repo-url>
cd knowledgehub

# 2. Dependencies installieren
npm install

# 3. Entwicklungsserver starten
npm run dev

# Server läuft auf http://localhost:4321
```

### Build & Deployment

```bash
# Build für Production
npm run build

# Preview der Build
npm run preview
```

> **Auto-Deploy**: Jeder Push zum `master` Branch deployt automatisch via GitHub Actions auf den Webspace.

## 📁 Projektstruktur

```
knowledgehub/
├── src/
│   ├── content/
│   │   └── docs/                    # Markdown-Inhalte
│   │       ├── index.md             # Startseite
│   │       ├── 01-grundlagen/       # Kategorie 1
│   │       ├── 02-eva-prinzip/      # Kategorie 2
│   │       ├── 03-cpu-architektur/  # Kategorie 3
│   │       ├── 04-mainboard-chipsatz/ # Kategorie 4
│   │       └── 05-glossar/          # Kategorie 5
│   ├── components/                  # React-Komponenten
│   │   ├── EVADiagram.jsx           # Interaktives EVA-Diagramm
│   │   ├── ArchitectureChart.jsx    # RISC/CISC Radar Chart
│   │   └── MemoryHierarchyChart.jsx # Speicher Bubble Chart
│   └── assets/                      # Statische Dateien (public/)
├── astro.config.mjs                 # Astro-Konfiguration
├── package.json                     # Dependencies
├── .gitignore                       # Git ignore rules
└── README.md                        # Dieses Dokument
```

## ✏️ Inhalte bearbeiten – Schritt für Schritt

Du musst **kein** Entwickler sein, um Inhalte beizutragen! Alles funktioniert über einfache Textdateien.

### Schritt 1 – Repository vorbereiten (einmalig)

```bash
# 1. Repo auf deinen PC klonen
git clone <repo-url>
cd knowledgehub

# 2. Abhängigkeiten installieren
npm install
```

### Schritt 2 – Bestehende Seite bearbeiten

1. Öffne die gewünschte Datei in `src/content/docs/`
   - Grundlagen → `src/content/docs/01-grundlagen/`
   - EVA-Prinzip → `src/content/docs/02-eva-prinzip/`
   - CPU & Architektur → `src/content/docs/03-cpu-architektur/`
   - Mainboard → `src/content/docs/04-mainboard-chipsatz/`
   - Glossar → `src/content/docs/05-glossar/`
2. Datei mit VS Code öffnen und Text anpassen
3. Speichern – fertig!

### Schritt 3 – Neue Seite hinzufügen

1. Neue Datei anlegen, z.B. `src/content/docs/01-grundlagen/mein-thema.md`
2. **Jede Datei braucht diesen Kopfbereich** (Frontmatter) ganz oben:

```markdown
---
title: Mein Thema
description: Kurze Beschreibung, was auf dieser Seite steht
---

# Mein Thema

Hier kommt dein Text. Du kannst **fett**, *kursiv* und andere
Markdown-Formatierungen nutzen.

## Unterabschnitt

Weiterer Text...

## Tabelle

| Spalte 1 | Spalte 2 |
|----------|----------|
| Wert A   | Wert B   |

## Code-Beispiel

\`\`\`python
print("Hallo Welt")
\`\`\`
```

> ⚠️ Das `---` Frontmatter **muss** vorhanden sein, sonst baut die Seite nicht!

### Schritt 4 – Neue Seite in der Sidebar eintragen

Damit die neue Seite in der Navigation auftaucht, muss sie in `astro.config.mjs` eingetragen werden.

Suche den passenden Abschnitt und füge einen Eintrag hinzu:

```javascript
{
  label: '01 Grundlagen',
  items: [
    { label: 'Übersicht', slug: '01-grundlagen' },
    { label: 'Evolution', slug: '01-grundlagen/evolution-datenverarbeitung' },
    // 👇 Hier deinen neuen Eintrag einfügen:
    { label: 'Mein Thema', slug: '01-grundlagen/mein-thema' },
  ],
},
```

> Der `slug` ist der Dateipfad **ohne** `.md` am Ende.

### Schritt 5 – Lokal testen

```bash
npm run dev
```

Browser öffnen: **http://localhost:4321** – dort siehst du deine Änderungen live.

### Schritt 6 – Änderungen hochladen & deployen

```bash
# Alle Änderungen zum Commit vormerken
git add .

# Commit erstellen (beschreibe kurz, was du geändert hast)
git commit -m "docs: Neues Kapitel zu Mein Thema"

# Zu GitHub hochladen
git push origin master
```

> 🚀 Nach dem Push startet automatisch GitHub Actions und deployt die Seite!

## 🔄 Zusammenarbeit im Team

### Workflow: Pull Request

1. **Branchen erstellen**:

   ```bash
   git checkout -b feature/mein-inhalt
   ```

2. **Änderungen machen** (Dateien bearbeiten/hinzufügen)

3. **Lokal testen**:

   ```bash
   npm run dev
   # http://localhost:3000 öffnen und Änderungen prüfen
   ```

4. **Commit & Push**:

   ```bash
   git add .
   git commit -m "feat: Neuen Artikel zu CPU hinzugefügt"
   git push origin feature/mein-inhalt
   ```

5. **Pull Request (PR) öffnen** auf GitHub
   - Beschreibung schreiben: Was wurde geändert?
   - Link zur relevanten Dokumentation geben (falls nötig)
   - Reviewer taggen (deine Mitschüler/Lehrer)

6. **Review & Merge**:
   - Mitschüler reviewen den Code
   - Falls OK → Merge zu `master`
   - GitHub Actions deployt automatisch auf den Webspace

### Commit-Nachricht Konventionen

```bash
feat: Neues Feature hinzufügen
fix: Bug beheben
docs: Dokumentation aktualisieren
style: Code-Formatierung (keine Logik-Änderungen)
```

**Beispiele**:

- `feat: EVA-Diagramm-Komponente erstellen`
- `docs: Glossar-Einträge erweitern`
- `fix: Typo in CPU-Erklärung beheben`

## 🎨 Design & Styling

- **Theme**: Starlight (Light/Dark Mode ready)
- **Primary Color**: Sky Blue (`#0284c7`)
- **Typography**: Inter, Sans-Serif
- **Responsive**: Mobil bis Desktop optimiert

Für Custom CSS → `src/styles/custom.css` bearbeiten

## 🔗 Useful Links

- 📚 [Starlight Dokumentation](https://starlight.astro.build)
- 🚀 [Astro Dokumentation](https://docs.astro.build)
- ⚙️ [GitHub Actions Dokumentation](https://docs.github.com/en/actions)

## ❓ FAQ & Tipps

**Q: Ich habe einen Tippfehler gefunden!**  
A: Öffne einen PR mit einer `docs:` Commit-Nachricht (siehe oben)

**Q: Wie füge ich Bilder/Diagramme ein?**  
A: Speichere sie in `src/assets/` und referenziere sie in Markdown:

```markdown
![Alt-Text](../../assets/my-image.png)
```

**Q: Mein Dev-Server läuft nicht!**  
A: Prüfe:

```bash
npm install  # Dependencies neu installieren
npm run dev  # Erneut starten
```

**Q: Wie deploye ich meine Änderungen?**  
A: Nach Merge zu `main` → Vercel deployed automatisch (wird in GitHub angezeigt)

## 📞 Support

- **Fragen zum Projekt?** → GitHub Issues erstellen
- **Content-Fragen?** → PR-Diskussionen nutzen
- **Tech-Support?** → Verzeichnis-Struktur prüfen, logs anschauen

---

**Viel Erfolg beim Lernen! 🎓**

Made with ❤️ für IT-Azubis
