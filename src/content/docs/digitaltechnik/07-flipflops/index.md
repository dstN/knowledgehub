---
title: Flipflops & Schaltwerke
description: Sequentielle Logik – RS-, D- und JK-Flipflop, Zustandstabellen, Schaltwerke vs. Schaltnetze, Register und Zähler.
---

# Flipflops & Schaltwerke

Bisher haben alle Schaltungen ein Problem: Sie haben **kein Gedächtnis**. Die Ausgabe hängt nur von den aktuellen Eingaben ab – die Vergangenheit ist egal. Ein Flipflop ändert das: Es kann einen Zustand **speichern** und merkt sich, was vorher war.

---

## Schaltnetz vs. Schaltwerk

| | Schaltnetz | Schaltwerk |
|---|---|---|
| Ausgabe hängt ab von | aktuellen Eingaben | Eingaben **und** aktuellem Zustand |
| Gedächtnis | Nein | **Ja** |
| Beispiele | AND-Gatter, Addierer, KV-Minimierung | Flipflop, Zähler, Register, CPU |
| Zustandstabelle | Nein | Ja |

> **Merkhilfe:** Schaltnetz = Kombinatorik (nur Gegenwart). Schaltwerk = Sequenz (Gegenwart + Vergangenheit).

---

## Das RS-Flipflop (RS-FF)

Das RS-Flipflop ist das einfachste Speicherelement. Es hat zwei Eingänge:
- **S (Set):** setzt den Ausgang Q auf 1
- **R (Reset):** setzt den Ausgang Q auf 0

Und zwei Ausgänge:
- **Q** – aktueller Zustand
- **Q̄** (Q-negiert) – immer das Gegenteil von Q

### Wahrheitstabelle RS-FF

| R | S | Q (neu) | Q̄ (neu) | Beschreibung |
|---|---|---------|---------|--------------|
| 0 | 0 | Q (alt) | Q̄ (alt) | **Speichern** – Zustand bleibt |
| 0 | 1 | 1 | 0 | **Setzen** – Q wird 1 |
| 1 | 0 | 0 | 1 | **Rücksetzen** – Q wird 0 |
| 1 | 1 | **?** | **?** | **Verboten!** – undefinierbarer Zustand |

> **Der verbotene Zustand:** R=1 und S=1 gleichzeitig führt dazu, dass Q und Q̄ beide 0 werden – das widerspricht ihrer Definition als Gegensatz. Beim Rückschalten (R=S=0) ist der Folgezustand unbestimmt.

### RS-FF aus NOR-Gattern

```
S ─┬──[NOR]──── Q
   │      │
   └──────┘
R ─┬──[NOR]──── Q̄
   │      │
   └──────┘
```

Genauer: Der Ausgang jedes NOR-Gatters ist mit dem Eingang des anderen kreuzgekoppelt.

> **Merkhilfe RS-FF:** „S setzt, R resettet, beide 1 ist verboten."

---

## Das D-Flipflop (D-FF)

Das D-FF (Data- oder Delay-Flipflop) löst das Problem des verbotenen Zustands beim RS-FF elegant: Es hat nur **einen Daten-Eingang D** und übernimmt dessen Wert bei einer **Taktflanke**.

### Wahrheitstabelle D-FF

| D | Q (neu, bei Taktflanke) |
|---|------------------------|
| 0 | 0 |
| 1 | 1 |

So simpel – der Ausgang kopiert den Eingang, aber erst bei einem Taktsignal.

### Taktflankensteuerung

```
CLK (Takt): ___|‾|___|‾|___
D:          _____|‾‾‾‾‾|___
Q:          ________|‾‾‾|__
                    ↑
              bei steigende Flanke übernimmt Q den Wert von D
```

- **Flankengetriggert:** Q ändert sich nur beim Übergang 0→1 (oder 1→0) des Taktsignals
- **Pegelgetriggert (Latch):** Q ändert sich solange Takt = 1 ist

> **D-FF = Basis-Speicherzelle in RAM und Registern.** Jedes Bit in einem CPU-Register steckt in einem D-Flipflop.

### Merkhilfe D-FF

> „D-FF = Data ins Regal stellen. Erst wenn der Takt kommt, wird es herausgeholt."

---

## Das JK-Flipflop (JK-FF)

Das JK-FF ist die Weiterentwicklung des RS-FF. Es behebt den verbotenen Zustand: J=K=1 **kippt** den Zustand (Toggle).

- **J** (entspricht S beim RS-FF) → Setzen
- **K** (entspricht R beim RS-FF) → Rücksetzen

### Wahrheitstabelle JK-FF

| J | K | Q (neu) | Beschreibung |
|---|---|---------|--------------|
| 0 | 0 | Q (alt) | **Speichern** |
| 0 | 1 | 0 | **Rücksetzen** |
| 1 | 0 | 1 | **Setzen** |
| 1 | 1 | NOT Q | **Toggeln** – Zustand kippt! |

> **Kein verbotener Zustand mehr!** J=K=1 ist jetzt definiert und nützlich.

### Merkhilfe JK-FF

> **J**a, **K**ippen – J=K=1 togglet (kippen = Zustand umdrehen).
>
> Rest wie RS-FF: J setzt, K resettet, 0/0 speichert.

---

## Vergleich der drei Flipflop-Typen

| | RS-FF | D-FF | JK-FF |
|---|---|---|---|
| Eingänge | R, S | D, CLK | J, K, CLK |
| Verbotener Zustand | Ja (R=S=1) | Nein | Nein |
| Toggle-Funktion | Nein | Nein | Ja (J=K=1) |
| Hauptanwendung | Einfache Speicher | Register, RAM | Zähler |
| Komplexität | Einfach | Einfach | Mittel |

---

## Anwendungen: Register und Zähler

### Schieberegister

Mehrere D-FFs hintereinander – der Ausgang Q eines FF ist der Eingang D des nächsten. Bei jedem Takt verschiebt sich das gespeicherte Datenwort um eine Stelle.

```
D → [D-FF] → [D-FF] → [D-FF] → [D-FF] → Ausgang
         ↑CLK    ↑CLK    ↑CLK    ↑CLK
```

Anwendung: **Serielle Datenübertragung** – sendet Bits nacheinander.

### Binärzähler

JK-FFs mit J=K=1 (Toggle-Modus) hintereinandergeschaltet ergeben einen **asynchronen Binärzähler**:

```
CLK → [JK-FF] → [JK-FF] → [JK-FF] → [JK-FF]
       Q0         Q1         Q2         Q3
```

Bei jedem CLK-Impuls zählt das Schaltwerk:
```
0000 → 0001 → 0010 → 0011 → 0100 → ... → 1111 → 0000
```

> **Asynchron = Ripple Counter:** Jedes FF wartet auf den Ausgang des vorherigen. Das verursacht eine kleine Verzögerung. Für schnelle Systeme gibt es **synchrone Zähler**, wo alle FFs gleichzeitig takten.

---

## Zustandsdiagramme

Schaltwerke werden oft als Zustandsdiagramm dargestellt:

```
     S=1
  ┌──────→ [Q=1] ──┐
  │                │ R=1
[Q=0] ←───────────┘
      S=0 (bleibt)
```

- Kreise = Zustände
- Pfeile = Übergänge, beschriftet mit Eingangsbedingung
- Kein Übergang bei S=0, R=0 (Speichern)

---

## Lernkarten

> **RS-FF:**  
> S=1 → Q=1 (Setzen)  
> R=1 → Q=0 (Rücksetzen)  
> R=S=0 → Speichern  
> R=S=1 → **VERBOTEN**

> **D-FF:**  
> Q übernimmt D bei Taktflanke.  
> Keine Konfliktmöglichkeit.  
> Basis aller Register.

> **JK-FF:**  
> Wie RS, aber J=K=1 → Toggle (kein verbotener Zustand).  
> Basis aller Zähler.

---

## Prüfungsaufgaben

**1. Was passiert beim RS-FF, wenn R=0 und S=0 ist?**
```
Der Zustand bleibt unverändert (Speichern). Das FF
"merkt sich" seinen letzten gespeicherten Wert.
```

**2. Warum ist R=S=1 beim RS-FF verboten?**
```
Beide Ausgänge Q und Q̄ würden gleichzeitig 0 werden.
Das widerspricht ihrer Definition: Q und Q̄ sollen
immer entgegengesetzte Werte haben. Beim Rückschalten
auf R=S=0 ist der Folgezustand zufällig (Rennen).
```

**3. Was unterscheidet D-FF vom RS-FF?**
```
Das D-FF hat nur einen Dateneingang (kein Konflikt möglich).
Der Zustand wird nur bei einer Taktflanke übernommen.
RS-FF: asynchron, zwei Eingänge, verbotener Zustand möglich.
D-FF: taktgesteuert, ein Eingang, immer definierter Zustand.
```

**4. Zeichne die Zustandstabelle eines JK-FF für die Eingabefolge:**  
**J: 1,0,1,1 | K: 0,1,0,1 | Q_start = 0**

```
Schritt | J | K | Q_alt | Q_neu
   1    | 1 | 0 |   0   |  1    (Setzen)
   2    | 0 | 1 |   1   |  0    (Rücksetzen)
   3    | 1 | 0 |   0   |  1    (Setzen)
   4    | 1 | 1 |   1   |  0    (Toggle: 1→0)
```
