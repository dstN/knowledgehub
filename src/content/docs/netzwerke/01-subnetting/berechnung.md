---
title: Subnetting – Schritt-für-Schritt-Anleitung
description: Idiotensichere Anleitung zur Subnetzberechnung – von der Aufgabe zur fertigen IP-Tabelle, mit vollständigem Rechenbeispiel
---

Diese Seite erklärt **eine einzige Methode**, mit der du jede Subnetting-Aufgabe lösen kannst. Du brauchst nur Stift, Papier und diese 5 Schritte.

---

## Die Aufgabe (Beispiel)

> **Gegeben:** IP-Adresse `192.168.10.0`, Subnetzmaske `255.255.255.0` (/24)  
> **Gesucht:** Das Netz soll in **7 Subnetze** aufgeteilt werden.  
> Berechne die neue Subnetzmaske und liste alle IP-Ranges auf.

---

## Schritt 1: Wie viele Bits werden benötigt?

Wir brauchen mindestens **7 Subnetze**. Die Anzahl der Subnetze muss eine **Zweierpotenz** sein:

```
Anzahl Subnetze = 2^x
```

Wir suchen das kleinste `x`, für das gilt `2^x >= 7`:

| x (Bits) | 2^x | Ausreichend für 7 Netze? |
|----------|-----|--------------------------|
| 1         | 2     | Nein                     |
| 2         | 4     | Nein                     |
| **3**     | **8** | **Ja** (8 >= 7)          |

→ Wir brauchen **3 zusätzliche Bits** und erhalten **8 Subnetze** (wir runden immer auf die nächste Zweierpotenz auf).

---

## Schritt 2: Neue Subnetzmaske berechnen

Das Ausgangsnetz hat den Präfix **/24** (Subnetzmaske `255.255.255.0`).  
Wir fügen **3 Bits** hinzu:

```
Neuer Präfix = 24 + 3 = /27
```

Die neue Subnetzmaske hat also **27 gesetzte Bits**. Im letzten Oktett bedeutet das:

```
/27 → letztes Oktett: 11100000
       128 + 64 + 32 = 224
```

**Neue Subnetzmaske: `255.255.255.224`**

> **Merke:** Die ersten drei Bits des letzten Oktetts sind jetzt für den Netzanteil reserviert – die restlichen 5 Bits bleiben für Hosts.

---

## Schritt 3: Schrittgröße berechnen

Die **Schrittgröße** gibt an, wie viele Adressen jedes Subnetz umfasst – und damit, um wie viel die Netzadresse von Subnetz zu Subnetz „springt".

```
Schrittgröße = 256 - letzter Oktett-Wert der Maske
Schrittgröße = 256 - 224 = 32
```

Jedes Subnetz umfasst also **32 Adressen**.

Nutzbare Hosts pro Subnetz:

```
2^5 - 2 = 32 - 2 = 30 Hosts
```

(5 Hostbits, da 32 − 27 = 5)

---

## Schritt 4: IP-Ranges aller Subnetze auflisten

Startpunkt: `192.168.10.0`  
Schrittgröße: `32`

Wir zählen das letzte Oktett in 32er-Schritten hoch:

| Subnetz | Netzadresse        | Erste nutzbare IP  | Letzte nutzbare IP | Broadcast          |
|---------|--------------------|--------------------|--------------------|--------------------|
| 1       | 192.168.10.**0**   | 192.168.10.**1**   | 192.168.10.**30**  | 192.168.10.**31**  |
| 2       | 192.168.10.**32**  | 192.168.10.**33**  | 192.168.10.**62**  | 192.168.10.**63**  |
| 3       | 192.168.10.**64**  | 192.168.10.**65**  | 192.168.10.**94**  | 192.168.10.**95**  |
| 4       | 192.168.10.**96**  | 192.168.10.**97**  | 192.168.10.**126** | 192.168.10.**127** |
| 5       | 192.168.10.**128** | 192.168.10.**129** | 192.168.10.**158** | 192.168.10.**159** |
| 6       | 192.168.10.**160** | 192.168.10.**161** | 192.168.10.**190** | 192.168.10.**191** |
| 7       | 192.168.10.**192** | 192.168.10.**193** | 192.168.10.**222** | 192.168.10.**223** |
| 8       | 192.168.10.**224** | 192.168.10.**225** | 192.168.10.**254** | 192.168.10.**255** |

> Subnetz 8 entsteht zwangsläufig – wir können keine 7 Subnetze erzeugen ohne 8 zu erhalten, da 2^3 = 8.

---

## Schritt 5: Einzelnes Subnetz verstehen

Am Beispiel **Subnetz 3** (`192.168.10.64/27`):

```
Netzadresse:          192.168.10.64   → letztes Oktett: 01000000  (Hostanteil = alle 0)
Erste nutzbare IP:    192.168.10.65   → letztes Oktett: 01000001
  ...
Letzte nutzbare IP:   192.168.10.94   → letztes Oktett: 01011110
Broadcast:            192.168.10.95   → letztes Oktett: 01011111  (Hostanteil = alle 1)
```

| Adresse | Bedeutung | Verwendung |
|---------|-----------|------------|
| `192.168.10.64` | **Netzadresse** | Identifiziert das Subnetz – **nicht vergeben** |
| `192.168.10.65` – `192.168.10.94` | **Nutzbare Hostadressen** | Für Geräte (PCs, Server, Drucker …) |
| `192.168.10.95` | **Broadcast** | Sendet an alle Geräte im Subnetz – **nicht vergeben** |

---

## Die Methode auf einen Blick

```
┌─────────────────────────────────────────────────────────────────┐
│  SCHRITT 1  Benötigte Bits: kleinstes x mit 2^x ≥ gewünschte   │
│             Subnetze (aufrunden auf Zweierpotenz)               │
├─────────────────────────────────────────────────────────────────┤
│  SCHRITT 2  Neuer Präfix = alter Präfix + x                     │
│             → Maske aus Präfix ableiten (letztes Oktett)        │
├─────────────────────────────────────────────────────────────────┤
│  SCHRITT 3  Schrittgröße = 256 − letzter Maskenwert            │
├─────────────────────────────────────────────────────────────────┤
│  SCHRITT 4  Ranges: Netzadresse + 0, +1, ..., +(Schritt−2),    │
│             +(Schritt−1) für jedes Subnetz                      │
├─────────────────────────────────────────────────────────────────┤
│  SCHRITT 5  Pro Subnetz: 1. Adresse = Netz, letzte = Broadcast │
└─────────────────────────────────────────────────────────────────┘
```

---

## Weiteres Beispiel: `/26` aus `/24`

> **Gegeben:** `10.0.0.0/24`, **4 Subnetze** gewünscht.

**Schritt 1:** 2^x >= 4 → x = 2 (da 2^2 = 4)  
**Schritt 2:** Neuer Präfix: 24 + 2 = /26 → Maske: `255.255.255.192` (`11000000` = 192)  
**Schritt 3:** Schrittgröße: 256 - 192 = 64  
**Schritt 4:**

| Subnetz | Netzadresse  | Erste nutzbare | Letzte nutzbare | Broadcast    |
|---------|-------------|----------------|-----------------|-------------|
| 1       | 10.0.0.0    | 10.0.0.1       | 10.0.0.62       | 10.0.0.63   |
| 2       | 10.0.0.64   | 10.0.0.65      | 10.0.0.126      | 10.0.0.127  |
| 3       | 10.0.0.128  | 10.0.0.129     | 10.0.0.190      | 10.0.0.191  |
| 4       | 10.0.0.192  | 10.0.0.193     | 10.0.0.254      | 10.0.0.255  |

Nutzbare Hosts: 2^6 - 2 = 62 pro Subnetz.

---

## Weiteres Beispiel: Subnetz aus einem /16

> **Gegeben:** `172.16.0.0/16`, **16 Subnetze** gewünscht.

**Schritt 1:** 2^x >= 16 → x = 4 (da 2^4 = 16)  
**Schritt 2:** Neuer Präfix: 16 + 4 = /20 → Maske: `255.255.240.0`  
(Im 3. Oktett: 4 Bits → `11110000` = 240)  
**Schritt 3:** Schrittgröße im **3. Oktett**: 256 - 240 = 16

| Subnetz | Netzadresse    | Broadcast       | Nutzbare Hosts |
|---------|---------------|-----------------|----------------|
| 1       | 172.16.0.0    | 172.16.15.255   | 4.094          |
| 2       | 172.16.16.0   | 172.16.31.255   | 4.094          |
| 3       | 172.16.32.0   | 172.16.47.255   | 4.094          |
| 4       | 172.16.48.0   | 172.16.63.255   | 4.094          |
| …       | …             | …               | …              |
| 16      | 172.16.240.0  | 172.16.255.255  | 4.094          |

> **Wichtig:** Wenn die Schrittgröße das 3. Oktett betrifft (Präfix zwischen /17 und /24), zählt man **das 3. Oktett** hoch, nicht das 4.

---

## Häufige Fehler und wie man sie vermeidet

| Fehler | Ursache | Richtig |
|--------|---------|---------|
| Subnetzmaske falsch berechnet | Bits falsch gezählt | Immer Binär aufschreiben und Werte addieren |
| Netzadresse als Host vergeben | Vergessen, dass sie reserviert ist | 1. Adresse = immer Netzadresse |
| Broadcast als Host vergeben | Vergessen, dass sie reserviert ist | Letzte Adresse = immer Broadcast |
| Zu wenige Subnetze | Nicht auf Zweierpotenz aufgerundet | Immer 2^x mit kleinstem passenden x |
| Schrittgröße falsch | 256 − Maske nicht korrekt | Nur letzten „gemischten" Oktett-Wert abziehen |
| Präfix >30 gewählt | Zu viele Bits geliehen | Bei /31 bleiben 0 nutzbare Hosts – sinnlos |

---

## Schnellreferenz: Schrittgrößen nach Präfix

| Präfix | Maske (letztes Oktett) | Schrittgröße | Hosts/Subnetz |
|--------|------------------------|-------------|----------------|
| /25    | 128                    | 128         | 126            |
| /26    | 192                    | 64          | 62             |
| /27    | 224                    | 32          | 30             |
| /28    | 240                    | 16          | 14             |
| /29    | 248                    | 8           | 6              |
| /30    | 252                    | 4           | 2              |
