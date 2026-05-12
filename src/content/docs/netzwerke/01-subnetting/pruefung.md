---
title: Subnetting – Prüfungsfragen
description: Typische IHK-Prüfungsfragen zu Subnetting und CIDR mit Lösungen zum Aufklappen
---

Typische Aufgabentypen aus IHK-Prüfungen. Versuche jede Aufgabe selbst zu lösen, bevor du die Lösung aufklappst.

---

## Aufgabentyp 1: Netzadresse und Broadcast bestimmen

<details>
<summary>**Aufgabe 1** – Gegeben: IP `172.16.45.200`, Maske `255.255.0.0` – Wie lauten Netzadresse und Broadcast?</summary>

**Lösung:**

Subnetzmaske `255.255.0.0` = /16 → die ersten 16 Bits sind Netzanteil.

```
IP:    172. 16. 45.200
Maske: 255.255.  0.  0

Netzadresse (AND):  172.16.0.0
Broadcast  (OR  ):  172.16.255.255
```

- **Netzadresse:** `172.16.0.0`
- **Broadcast:** `172.16.255.255`
- **Nutzbare Hosts:** 2^16 - 2 = 65.534

</details>

---

<details>
<summary>**Aufgabe 2** – Gegeben: IP `192.168.10.75`, Maske `255.255.255.192` – Wie lauten Netzadresse und Broadcast?</summary>

**Lösung:**

Maske `255.255.255.192` = /26 → letztes Oktett: `11000000` = 192.  
Schrittgröße: 256 - 192 = **64**

Das Oktett 75 liegt im Bereich 64–127 (Subnetz 2):

```
Netzadresse:  192.168.10.64
Broadcast:    192.168.10.127
Erste IP:     192.168.10.65
Letzte IP:    192.168.10.126
```

- **Netzadresse:** `192.168.10.64`
- **Broadcast:** `192.168.10.127`
- **Nutzbare Hosts:** 2^6 - 2 = 62

</details>

---

<details>
<summary>**Aufgabe 3** – Gegeben: IP `10.4.128.50`, Maske `255.255.128.0` – Netzadresse und Broadcast?</summary>

**Lösung:**

Maske `255.255.128.0` = /17 → im 3. Oktett ist Bit 7 gesetzt: `10000000` = 128.  
Schrittgröße im 3. Oktett: 256 - 128 = **128**

3. Oktett der IP: 128 → liegt im Bereich 128–255 (zweites Subnetz des Oktetts):

```
Netzadresse:  10.4.128.0
Broadcast:    10.4.255.255
```

- **Netzadresse:** `10.4.128.0`
- **Broadcast:** `10.4.255.255`
- **Nutzbare Hosts:** 2^15 - 2 = 32.766

</details>

---

## Aufgabentyp 2: Subnetzmaske aus Präfix berechnen

<details>
<summary>**Aufgabe 4** – Welche Subnetzmaske entspricht dem Präfix /19?</summary>

**Lösung:**

/19 = 16 volle Bits + 3 weitere Bits im 3. Oktett.

3. Oktett: die ersten 3 Bits gesetzt:
```
11100000 = 128 + 64 + 32 = 224
```

**Subnetzmaske: `255.255.224.0`**

</details>

---

<details>
<summary>**Aufgabe 5** – Welche Subnetzmaske entspricht dem Präfix /27?</summary>

**Lösung:**

/27 = 24 volle Bits + 3 weitere Bits im 4. Oktett.

4. Oktett: die ersten 3 Bits gesetzt:
```
11100000 = 128 + 64 + 32 = 224
```

**Subnetzmaske: `255.255.255.224`**

Schrittgröße: 256 - 224 = 32 → 30 nutzbare Hosts pro Subnetz.

</details>

---

## Aufgabentyp 3: Anzahl Hosts und Subnetze berechnen

<details>
<summary>**Aufgabe 6** – Ein Netz `192.168.5.0/24` soll in 6 Subnetze aufgeteilt werden. Welcher neue Präfix entsteht, wie viele Hosts hat jedes Subnetz?</summary>

**Lösung:**

Schritt 1: Kleinstes x mit 2^x >= 6 → x = 3 (da 2^3 = 8)

Schritt 2: Neuer Präfix: 24 + 3 = **/27**

Schritt 3: Schrittgröße: 256 - 224 = 32

Nutzbare Hosts pro Subnetz: 2^5 - 2 = **30**

Es entstehen **8 Subnetze** (man kann nicht exakt 6 erzeugen, da Zweierpotenz nötig).

| Subnetz | Netzadresse      | Broadcast        |
|---------|-----------------|-----------------|
| 1       | 192.168.5.0     | 192.168.5.31    |
| 2       | 192.168.5.32    | 192.168.5.63    |
| 3       | 192.168.5.64    | 192.168.5.95    |
| 4       | 192.168.5.96    | 192.168.5.127   |
| 5       | 192.168.5.128   | 192.168.5.159   |
| 6       | 192.168.5.160   | 192.168.5.191   |
| 7       | 192.168.5.192   | 192.168.5.223   |
| 8       | 192.168.5.224   | 192.168.5.255   |

</details>

---

<details>
<summary>**Aufgabe 7** – Wie viele nutzbare Hostadressen hat ein /28-Netz?</summary>

**Lösung:**

/28 → Hostbits: 32 - 28 = 4

```
2^4 - 2 = 16 - 2 = 14 nutzbare Hosts
```

Schrittgröße: 256 - 240 = 16 (4. Oktett: `11110000` = 240)

</details>

---

## Aufgabentyp 4: Klassen und CIDR

<details>
<summary>**Aufgabe 8** – Zu welcher Klasse gehört die IP `172.31.0.1`? Welche Standardmaske hat diese Klasse?</summary>

**Lösung:**

1. Oktett: 172 → liegt im Bereich 128–191 → **Klasse B**

Binär: `10101100` → beginnt mit `10` → bestätigt Klasse B.

**Standardmaske Klasse B:** `255.255.0.0` (/16)

Hinweis: `172.31.0.1` liegt im privaten Adressbereich `172.16.0.0/12` (RFC 1918).

</details>

---

<details>
<summary>**Aufgabe 9** – Was ist CIDR und welches Problem löst es?</summary>

**Lösung:**

**CIDR** (Classless Inter-Domain Routing) ist ein Verfahren zur flexiblen IP-Adressvergabe ohne Bindung an die festen Klassen A, B, C.

**Probleme der klassischen Einteilung:**
- Klasse A: bis zu 16 Mio. Hosts – viel zu groß für die meisten Organisationen
- Klasse B: 65.534 Hosts – oft zu groß, Verschwendung
- Klasse C: nur 254 Hosts – oft zu klein

**CIDR löst das durch:**
- Beliebige Präfixlängen (z.B. /22 für ~1000 Hosts)
- Route Aggregation: Mehrere kleine Netze zu einem Block zusammenfassen → kleinere Routing-Tabellen

**Notation:** `IP/Präfix` z.B. `192.168.0.0/22`

</details>

---

<details>
<summary>**Aufgabe 10** – Warum macht ein Präfix größer als /30 keinen Sinn?</summary>

**Lösung:**

Bei **/31**: 2^1 = 2 Adressen → beide sind bereits durch Netzadresse und Broadcast belegt → **0 nutzbare Hosts**

Bei **/32**: 2^0 = 1 Adresse → wird ausschließlich für Host-Routen verwendet (eine einzelne IP), nicht für reguläre Subnetze.

**Fazit:** Für normale Subnetze ist /30 das Maximum (2 nutzbare Hosts, typisch für Punkt-zu-Punkt-Verbindungen).

</details>
