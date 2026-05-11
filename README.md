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

- **Node.js 18+** ([nodejs.org](https://nodejs.org))
- **npm 9+** oder **pnpm**
- **Git** (für Versionskontrolle)

### Installation & Entwicklung

```bash
# 1. Repository klonen
git clone <repo-url>
cd knowledgehub

# 2. Dependencies installieren
npm install

# 3. Entwicklungsserver starten
npm run dev

# Server läuft auf http://localhost:3000
```

### Build & Deployment

```bash
# Build für Production
npm run build

# Preview der Build
npm run preview

# Deploy auf Vercel
npm run build
# Push zu GitHub → Vercel deployt automatisch
```

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
│   └── styles/
│       └── custom.css               # Custom Styling
├── astro.config.mjs                 # Astro-Konfiguration
├── package.json                     # Dependencies
├── .gitignore                       # Git ignore rules
└── README.md                        # Dieses Dokument
```

## 📝 Inhalte bearbeiten

### Markdown-Dateien hinzufügen/ändern

1. **Datei öffnen/erstellen**: `src/content/docs/[kategorie]/[dateiname].md`
2. **Inhalt schreiben** (Markdown + Starlight-Komponenten)
3. **Speichern** → Dev-Server lädt automatisch neu

**Beispiel**:
```markdown
---
title: Mein Thema
description: Kurze Beschreibung
---

# Mein Thema

## Unterabschnitt

Dieser Text wird angezeigt.

### Code-Beispiel

\`\`\`python
print("Hallo Welt")
\`\`\`
```

### Sidebar aktualisieren

Die Sidebar wird in `astro.config.mjs` konfiguriert:

```javascript
sidebar: [
  {
    label: '01 Grundlagen',
    items: [
      { label: 'Übersicht', slug: '01-grundlagen/index' },
      { label: 'Neuer Artikel', slug: '01-grundlagen/neuer-artikel' },
    ],
  },
]
```

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
   - Falls OK → Merge zu `main`
   - Vercel deployt automatisch

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
- 🎯 [Vercel Deployment Guide](https://vercel.com/docs)

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
