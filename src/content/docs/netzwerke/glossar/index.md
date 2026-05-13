---
title: Netzwerk-Glossar – Fachbegriffe erklärt
description: Alphabetische Sammlung aller wichtigen Netzwerk-Begriffe mit detaillierten Erklärungen für Subnetting, CIDR und VLSM
---

Willkommen im Netzwerk-Glossar! Hier findest du alle wichtigen Fachbegriffe rund um IP-Adressierung, Subnetting und VLSM – alphabetisch sortiert und mit praktischen Beispielen erklärt.

---

## A

### **Aggregation**
Umgekehrtes Konzept zu Subnetting: Das Zusammenfassen mehrerer kleinerer Netzwerke zu einem größeren Netzwerk. Dies wird in Routing-Protokollen verwendet, um die Routing-Tabellen zu verkleinern und weniger Speicher zu benötigen.

**Beispiel:** Vier Netzwerke 192.168.0.0/26, 192.168.0.64/26, 192.168.0.128/26, 192.168.0.192/26 können zu 192.168.0.0/24 aggregiert werden.

---

## B

### **Bits (Host-Bits & Netz-Bits)**
IPv4-Adressen bestehen aus insgesamt 32 Bits. Diese werden aufgeteilt in:
- **Netz-Bits:** Identifizieren das Netzwerk (definiert durch die Subnetzmaske)
- **Host-Bits:** Identifizieren einen einzelnen Host im Netzwerk

**Beispiel:** In 192.168.1.0/24 sind die ersten 24 Bits Netz-Bits (192.168.1), die letzten 8 Bits Host-Bits (.0–.255).

### **Broadcast-Adresse**
Die letzte IP-Adresse in einem Subnetz. Sie wird verwendet, um an **alle** Geräte im Netzwerk zu senden. Diese Adresse ist nicht für Hosts reservierbar.

**Beispiel:** In 192.168.1.0/24 ist die Broadcast-Adresse 192.168.1.255.

---

## C

### **CIDR (Classless Inter-Domain Routing)**
Flexible Subnetzierungsmethode, die die starre Klassenlogik (A, B, C) durch variable Subnetzmasken ersetzt. Die Schreibweise ist `IP/Präfix`, z.B. 192.168.1.0/24.

**Beispiel:** Statt immer ein ganzes Klasse-C-Netz (254 Hosts) zu vergeben, kann man mit CIDR auch nur /28 (14 Hosts) für eine Point-to-Point-Verbindung nutzen.

---

## D

### **Default-Netzwerk**
Das Netzwerk 0.0.0.0/0 repräsentiert alle möglichen IPv4-Adressen. In Routing-Tabellen wird eine Default-Route (0.0.0.0/0) verwendet, um Pakete zu routen, die auf keine spezifischere Route passen.

**Beispiel:** Wenn keine spezifische Route bekannt ist, nutzt der Router die Default-Route zum Gateway.

---

## H

### **Host-Bits**
Die Anzahl der Bits in einer IP-Adresse, die für die Adressierung einzelner Hosts reserviert sind. Berechnung: `Host-Bits = 32 - Präfix`.

**Beispiel:** Bei /24 sind 8 Host-Bits vorhanden (32 - 24 = 8), was 2^8 = 256 mögliche Adressen pro Subnetz bedeutet.

---

## I

### **IP-Adressraum**
Der gesamte Bereich von IPv4-Adressen, die einem Netzwerk zugeordnet sind. Ein größerer Adressraum ermöglicht mehr Hosts und Subnetze.

**Beispiel:** Ein Unternehmen hat den Adressraum 10.0.0.0/8 (über 16 Millionen IPs), während ein kleines Büro vielleicht nur 10.50.0.0/24 (256 IPs) erhält.

---

## N

### **Netzadresse**
Die erste IP-Adresse in einem Subnetz. Sie identifiziert das Subnetz selbst und kann nicht für Hosts verwendet werden. Sie hat in ihrem Host-Anteil lauter Nullen.

**Beispiel:** In 192.168.1.0/24 ist die Netzadresse 192.168.1.0 (nicht nutzbar für Hosts).

### **Netzanteil (Network-Anteil)**
Der Teil einer IP-Adresse, der das Netzwerk identifiziert. Wird durch die Subnetzmaske definiert. Alle Geräte im selben Netzwerk haben den gleichen Netzanteil.

**Beispiel:** In 192.168.1.0/24 ist 192.168.1 der Netzanteil (die erste drei Oktette).

### **Netzmaske / Subnetzmaske**
Eine 32-Bit-Maske, die angibt, welche Bits einer IP-Adresse zum Netzanteil gehören und welche zum Hostanteil. Sie besteht aus einer zusammenhängenden Serie von Einsen gefolgt von Nullen.

**Beispiel:** 255.255.255.0 in Dezimal = 11111111.11111111.11111111.00000000 in Binär = /24 in CIDR.

---

## P

### **Präfix (CIDR-Präfix)**
Die Zahl nach dem Schrägstrich in CIDR-Notation. Sie gibt an, wie viele Bits der IP-Adresse zum Netzanteil gehören.

**Beispiel:** In 192.168.1.0/24 ist 24 der Präfix, d.h. die ersten 24 Bits sind Netzanteil.

### **Präfixlänge**
Synonym für Präfix – die Anzahl der Bits, die zum Netzanteil gehören.

---

## R

### **Reservierte Adressen**
In jedem Subnetz gibt es zwei reservierte Adressen, die nicht für Hosts genutzt werden können:
- **Netzadresse (erste):** z.B. 192.168.1.0
- **Broadcast-Adresse (letzte):** z.B. 192.168.1.255

---

## S

### **Supernetting**
Siehe **Aggregation**.

### **Subnetting**
Die Aufteilung eines großen IP-Netzwerks in mehrere kleinere **Subnetze**. Dies ermöglicht bessere Organisation, Sicherheit und Effizienz.

**Beispiel:** Das Netzwerk 10.0.0.0/8 wird in Subnetze wie 10.1.0.0/16, 10.2.0.0/16, usw. aufgeteilt.

### **Subnetz**
Ein durch Subnetting erzeugtes Teilnetzwerk. Jedes Subnetz hat eine Netzadresse, einen Hostbereich und eine Broadcast-Adresse.

**Beispiel:** 192.168.1.0/24 ist ein Subnetz mit 254 nutzbaren Host-Adressen.

---

## T

### **TTL (Time To Live)**
Ein Feld in IP-Paketen, das angibt, wie lange das Paket im Netzwerk "leben" darf, bevor es verworfen wird. Dies verhindert, dass Pakete endlos in Schleifen herumlaufen.

---

## U

### **Usable Host Range**
Der Bereich der IP-Adressen in einem Subnetz, die tatsächlich für Hosts genutzt werden können. Dies ist der Bereich zwischen der Netzadresse und der Broadcast-Adresse (exclusive).

**Beispiel:** In 192.168.1.0/24 ist die usable host range 192.168.1.1 – 192.168.1.254 (256 - 2 = 254 nutzbare Adressen).

---

## V

### **VLSM (Variable Length Subnet Masks)**
Eine Subnetzierungstechnik, die es ermöglicht, **unterschiedliche Subnetzmasken** im selben Netzwerk zu verwenden. Dies ermöglicht eine effizientere Nutzung des Adressraums, da jede Abteilung oder jeder Bereich nur so viele IPs erhält, wie tatsächlich benötigt werden.

**Beispiel:** Ein Netzwerk wird in Subnetze verschiedener Größe aufgeteilt: /25 (128 IPs), /26 (64 IPs), /28 (16 IPs), /30 (4 IPs).

---

## W

### **Wildcard-Mask**
Das inverse Konzept der Subnetzmaske. Wird in Zugriffskontrolllisten (ACLs) und Routing-Protokollen verwendet.

**Beispiel:** Die Wildcard-Mask zu 255.255.255.0 ist 0.0.0.255.

---

## Z

### **Zusammenhängende Bitfolge**
Eine Anforderung in der Subnetzmaske: Alle Bits für den Netzanteil müssen zusammenhängend von links nach rechts folgen, gefolgt von allen Host-Bits.

**Beispiel:** 
- ✅ Gültig: 255.255.255.0 = 11111111.11111111.11111111.00000000
- ❌ Ungültig: 255.255.254.255 = 11111111.11111111.11111110.11111111 (Nullen in der Mitte!)

---

## Weitere Ressourcen

- [Subnetting Grundlagen](/netzwerke/01-subnetting/)
- [CIDR Notation](/netzwerke/01-subnetting/cidr/)
- [VLSM – Variable Length Subnet Masks](/netzwerke/02-vlsm/)
- [OSI-Modell Glossar](/osi/glossar/)
