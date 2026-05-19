---
title: Digitaltechnik-Glossar – Fachbegriffe erklärt
description: Alphabetische Sammlung aller wichtigen Digitaltechnik-Begriffe aus Zahlensystemen, Boolescher Algebra, KV-Diagrammen, Codes, Addierern und Flipflops.
---

Alle wichtigen Fachbegriffe der Digitaltechnik – von Zahlensystemen über Boolesche Algebra und KV-Diagramme bis hin zu Flipflops und Schaltwerken – alphabetisch sortiert und knapp erklärt.

---

## A

### **AND (Logisches UND)**
Grundgatter der Booleschen Algebra. Der Ausgang ist nur dann `1`, wenn **alle** Eingänge `1` sind. Wahrheitstabelle: `0 AND 0 = 0`, `1 AND 1 = 1`, sonst `0`. Symbol: `·` oder `&`.

### **ASCII (American Standard Code for Information Interchange)**
7-Bit-Zeichenkodierung (128 Zeichen), die Buchstaben, Ziffern und Sonderzeichen als Dezimalzahlen abbildet. Beispiel: `A = 65₁₀ = 41₁₆ = 1000001₂`. Erweiterter ASCII nutzt 8 Bit (256 Zeichen).

---

## B

### **BCD (Binary Coded Decimal)**
Kodierung, bei der jede Dezimalziffer (0–9) durch eine separate 4-Bit-Binärzahl dargestellt wird. Beispiel: `39₁₀ = 0011 1001 (BCD)`. Vorteil: Einfache Dezimalanzeige. Nachteil: Verschwendung von 6 Bitmustern (1010–1111 sind ungültig).

### **Binärsystem (Dual)**
Zahlensystem zur Basis 2 mit den Ziffern `0` und `1`. Grundlage der digitalen Elektronik, da Transistoren nur zwei Zustände kennen (Strom fließt / fließt nicht). Notation: `1011₂` oder `0b1011`.

### **Bit (Binary Digit)**
Kleinstmögliche Informationseinheit in der Digitaltechnik. Kann nur den Wert `0` oder `1` annehmen. 8 Bit = 1 Byte.

### **Byte**
Einheit aus 8 Bit. Kann 2⁸ = 256 verschiedene Zustände repräsentieren (0–255). Basis für Speicher- und Dateigrößenangaben (KB, MB, GB).

---

## C

### **Carry (Übertrag)**
Beim Addieren zweier Binärziffern entstehender Übertrag in die nächsthöhere Stelle. Beispiel: `1 + 1 = 10₂` → Summe `0`, Carry `1`. Muss bei Addierern (Volladdierer) als zusätzlicher Eingang berücksichtigt werden.

---

## D

### **D-Flipflop (Data/Delay-Flipflop)**
Einfachstes taktgesteuertes Flipflop. Übernimmt den Wert am Dateneingang `D` beim Eintreten der Taktflanke auf `Q`. Verhindert den verbotenen Zustand des RS-Flipflops. Typische Anwendung: Register, Schieberegister.

### **De Morgansche Gesetze**
Zwei fundamentale Umformungsregeln der Booleschen Algebra:
- `NOT(A AND B) = (NOT A) OR (NOT B)` → NAND ≡ Negiertes UND = ODER mit negierten Eingängen
- `NOT(A OR B) = (NOT A) AND (NOT B)` → NOR ≡ Negiertes ODER = UND mit negierten Eingängen

**Merksatz:** Balken auflösen → Einzelne negieren + Verknüpfung wechseln (AND↔OR).

### **Dezimalsystem**
Zahlensystem zur Basis 10 mit den Ziffern 0–9. Das für Menschen gewohnte Alltagssystem. In der Informatik nur zur Anzeige/Eingabe; intern arbeiten Computer stets binär.

### **Don't-Care-Zustand (X)**
Bei der KV-Minimierung: Eingangskombinationen, die im realen System nie auftreten können (z. B. BCD: Codes 1010–1111). Können in KV-Diagrammen als `X` frei als `0` oder `1` belegt werden, um größere und damit vereinfachere Gruppen zu bilden.

### **Dualzahl**
Synonym für Binärzahl – eine Zahl, die im Zweiersystem (Basis 2) dargestellt ist.

---

## F

### **Flipflop**
Bistabile Kippstufe – das elementare Speicherelement der Digitaltechnik. Kann genau zwei stabile Zustände einnehmen (`Q=0` oder `Q=1`) und hält diesen bis zu einer aktiven Steuereingabe. Grundlage für Register, Zähler und sequentielle Schaltungen. Typen: RS-, D-, JK-, T-Flipflop.

---

## G

### **Gatter (Logisches Gatter)**
Elektronische Schaltung, die eine Boolesche Grundfunktion realisiert. Grundgatter: AND, OR, NOT, NAND, NOR, XOR, XNOR. Aus Gattern werden alle komplexeren Digitalschaltungen aufgebaut.

### **Gray-Code**
Binärkodierung, bei der sich benachbarte Zahlenwerte stets nur in **einem einzigen Bit** unterscheiden. Verhindert Fehler durch kurzzeitige Zwischenzustände bei mechanischen Gebern. Auch Grundprinzip der KV-Diagramm-Spaltenanordnung.

---

## H

### **Halbaddierer**
Einfachste Addiererschaltung, die zwei einstellige Binärzahlen addiert. Ausgänge: **Summe** (S = A XOR B) und **Carry** (C = A AND B). Kein Carry-Eingang – daher nur für die niedrigstwertige Stelle geeignet.

### **Hexadezimalsystem**
Zahlensystem zur Basis 16 mit den Ziffern 0–9 und A–F (A=10, B=11, …, F=15). Ein Hexadezimalzeichen repräsentiert exakt 4 Bit (ein Nibble). Weit verbreitet zur kompakten Darstellung von Binärzahlen (z. B. Speicheradressen, Farben).

---

## J

### **JK-Flipflop**
Universelles Flipflop ohne verbotenen Zustand. Ergänzt das RS-Flipflop um den „Toggle"-Zustand: Wenn J=1 und K=1 gleichzeitig, wechselt Q zum nächsten Taktimpuls seinen Wert. Eingänge: J (≈Set), K (≈Reset), Takt.

---

## K

### **KV-Diagramm (Karnaugh-Veitch-Diagramm)**
Grafisches Werkzeug zur systematischen Minimierung Boolescher Ausdrücke. Ordnet alle möglichen Eingangskombinationen in einem Raster nach Gray-Code an. Gruppen von Einsen (Zweierpotenzen: 1, 2, 4, 8 …) lassen sich zu vereinfachten Termen zusammenfassen → minimierte SOP oder POS.

---

## L

### **LSB (Least Significant Bit)**
Das niederwertigste Bit einer Binärzahl – die am weitesten rechts stehende Stelle mit dem Wert 2⁰ = 1. Gegenteil: MSB.

---

## M

### **Maxterm**
Produkt-Term in der POS-Darstellung (Product of Sums) einer Booleschen Funktion. Enthält alle Variablen, wobei eine Variable negiert wird, wenn ihr Wert in der betrachteten Kombination `1` ist. Ausgabe: `0` genau für diese eine Eingangskombination.

### **Minterm**
Summen-Term in der SOP-Darstellung (Sum of Products). Enthält alle Variablen, wobei eine Variable negiert wird, wenn ihr Wert `0` ist. Der Minterm hat den Ausgangswert `1` genau für eine einzige Eingangskombination.

### **MSB (Most Significant Bit)**
Das höchstwertige Bit einer Binärzahl – die am weitesten links stehende Stelle. Bei einem 8-Bit-Wert hat es den Wert 2⁷ = 128. Im Zweierkomplement bestimmt das MSB das Vorzeichen (0 = positiv, 1 = negativ).

---

## N

### **NAND (Not AND)**
Kombiniertes Gatter: Ausgang ist das Gegenteil von AND. Ausgabe `0` nur wenn **alle** Eingänge `1` sind. Besonders wichtig: NAND ist **funktional vollständig** – jede Boolesche Funktion lässt sich allein aus NAND-Gattern aufbauen.

### **Nibble**
Einheit aus 4 Bit. Kann 2⁴ = 16 Zustände repräsentieren. Entspricht exakt einer Hexadezimalziffer.

### **NOR (Not OR)**
Kombiniertes Gatter: Ausgang ist das Gegenteil von OR. Ausgabe `1` nur wenn **alle** Eingänge `0` sind. Wie NAND ebenfalls **funktional vollständig**.

### **NOT (Negation / Inverter)**
Einfachstes Gatter: Dreht den Eingabewert um. `NOT 0 = 1`, `NOT 1 = 0`. Symbol: Balken über dem Variablennamen (Ā) oder Ausrufezeichen (!A).

---

## O

### **Oktal(system)**
Zahlensystem zur Basis 8 mit den Ziffern 0–7. Ein Oktalzeichen repräsentiert 3 Bit. Historisch genutzt in PDP-Computern (1970er). Heute kaum noch relevant, taucht aber in Prüfungen auf.

### **OR (Logisches ODER)**
Grundgatter: Ausgang ist `1`, wenn **mindestens ein** Eingang `1` ist. Symbol: `+`. Wahrheitstabelle: `0 OR 0 = 0`, alle anderen = `1`.

---

## P

### **Parität (Paritätsbit)**
Einfaches Fehlererkennungsverfahren: Ein zusätzliches Bit wird so gewählt, dass die Gesamtzahl der `1`-Bits entweder **gerade** (even parity) oder **ungerade** (odd parity) ist. Kann 1-Bit-Fehler erkennen, aber nicht korrigieren.

### **POS (Product of Sums)**
Darstellungsform einer Booleschen Funktion als Produkt (AND) mehrerer Summen (OR-Terme / Maxterme). Gegenteil von SOP. Wird abgelesen, wenn man die `0`-Stellen einer Wahrheitstabelle betrachtet.

### **Primimplikant**
Beim KV-Diagramm: Eine maximal große Gruppe von Einsen (2ⁿ Felder), die nicht mehr in eine größere Gruppe aufgenommen werden kann. Essentielle Primimplikanten müssen zwingend in die Minimallösung aufgenommen werden.

---

## R

### **Ripple-Carry-Addierer**
Addiererschaltung aus mehreren Volladdierern, bei der der Carry-Ausgang einer Stelle direkt mit dem Carry-Eingang der nächsten Stelle verbunden ist. Einfach aufzubauen, aber langsam, da jeder Carry die vorherige Stufe abwarten muss.

### **RS-Flipflop (SR-Flipflop)**
Einfachstes Flipflop mit Eingängen S (Set → Q=1) und R (Reset → Q=0). Verbotener Zustand: R=1 und S=1 gleichzeitig führt zu undefiniertem Verhalten. Realisierbar aus zwei kreuzgekoppelten NOR- oder NAND-Gattern.

---

## S

### **Schaltnetz**
Digitale Schaltung **ohne Rückkopplung und ohne Gedächtnis**. Der Ausgang hängt nur von den aktuellen Eingaben ab. Beispiele: AND-Gatter, Addierer, Decoder. Gegenteil: Schaltwerk.

### **Schaltwerk**
Digitale Schaltung **mit Gedächtnis** (Flipflops). Der Ausgang hängt von den aktuellen Eingaben **und** dem gespeicherten Zustand ab. Beispiele: Zähler, Register, Ampelsteuerung, CPU-Steuerwerk.

### **SOP (Sum of Products)**
Darstellungsform einer Booleschen Funktion als Summe (OR) mehrerer Produkte (AND-Terme / Minterme). Wird direkt aus den `1`-Stellen der Wahrheitstabelle abgelesen. Gegenteil von POS.

### **Stellenwertsystem**
Zahlensystem, bei dem der Wert einer Ziffer von ihrer **Position** abhängt: `Wert = Ziffer × Basis^Position`. Alle gebräuchlichen Zahlensysteme (Binär, Oktal, Dezimal, Hex) sind Stellenwertsysteme.

---

## T

### **T-Flipflop (Toggle-Flipflop)**
Flipflop, das bei jedem Taktimpuls seinen Zustand wechselt, wenn der Toggle-Eingang T=1 ist. Verwendet in Binärzählern: Eine Kette von T-Flipflops teilt die Eingangsfrequenz sukzessive durch 2.

### **Taktflanke**
Der Moment, an dem ein Taktsignal seinen Wert wechselt. **Steigende Flanke** (0→1) oder **fallende Flanke** (1→0). Flankengesteuerte Flipflops übernehmen Eingabewerte nur exakt an dieser Flanke – das vermeidet Wettlaufbedingungen.

---

## V

### **Volladdierer**
Addiererschaltung, die **drei** Einbit-Eingänge verarbeitet: A, B und Carry-in (Cᵢₙ). Ausgaben: Summe S und Carry-out (Cₒᵤₜ). Kann zu Mehrbit-Addierern (Ripple-Carry) verkettet werden. Realisierbar aus zwei Halbaddierern + OR-Gatter.

---

## W

### **Wahrheitstabelle (Wahrheitstafel)**
Vollständige tabellarische Auflistung aller möglichen Eingangskombinationen einer Booleschen Funktion und der zugehörigen Ausgangswerte. Für n Variablen gibt es 2ⁿ Zeilen. Basis für KV-Diagramme und SOP/POS-Ableitung.

---

## X

### **XNOR (Exclusive NOR / Äquivalenz)**
Gatter: Ausgang ist `1`, wenn beide Eingänge **gleich** sind (`0,0` oder `1,1`). Gegenteil von XOR. Funktion: Äquivalenztest.

### **XOR (Exclusive OR / Antivalenz)**
Gatter: Ausgang ist `1`, wenn beide Eingänge **verschieden** sind (`0,1` oder `1,0`). Symbol: `⊕`. Wichtige Anwendungen: Halbaddierer (Summe), Paritätsberechnung, Verschlüsselung.

---

## Z

### **Zähler**
Schaltwerk aus T- oder JK-Flipflops, das Taktimpulse zählt und den aktuellen Zählerstand als Binärzahl ausgibt. **Synchrone Zähler**: Alle Flipflops werden gleichzeitig getaktet (schnell). **Asynchrone Zähler** (Ripple Counter): Jeder Flipflop taktet den nächsten (einfacher, aber langsamer).

### **Zweierkomplement**
Standarddarstellung vorzeichenbehafteter Ganzzahlen in Computern. Das MSB ist das Vorzeichenbit (0 = positiv, 1 = negativ). Bildung: Alle Bits invertieren + 1 addieren. Vorteil: Addition und Subtraktion verwenden dieselbe Schaltung.

**Beispiel:** `+5₁₀ = 0000 0101₂` → Zweierkomplement: `1111 1010 + 1 = 1111 1011₂ = -5₁₀`

---

## Weitere Ressourcen

- [Zahlensysteme](/digitaltechnik/01-zahlensysteme/)
- [Boolesche Algebra](/digitaltechnik/02-bool-algebra/)
- [De Morgansches Gesetz](/digitaltechnik/03-de-morgan/)
- [KV-Diagramme](/digitaltechnik/04-kv-diagramme/)
- [Codes (BCD, Gray, ASCII)](/digitaltechnik/06-codes/)
- [Halb- & Volladdierer](/digitaltechnik/05-addierer/)
- [Flipflops & Schaltwerke](/digitaltechnik/07-flipflops/)
