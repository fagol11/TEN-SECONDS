# TEN SECONDS — The Ultimate Music Quiz App
> **Documento sorgente completo per NotebookLM**: Descrizione dettagliata di funzionalità, architettura, meccaniche di gioco, modello di business ed estetica grafica per la generazione di presentazioni, audio overview e pitch deck.

---

## 🚀 1. EXECUTIVE SUMMARY & CONCETTO DI CHIAVE

**Ten Seconds** è un'applicazione mobile e web quiz musicale arcade ad alto tasso di coinvolgimento, progettata per sfidare l'orecchio musicale dei giocatori in **sessioni rapide e serrate da 10 secondi per brano**.

* **Il Hook Principale**: Ascolta solo 10 secondi di una canzone e indovina il titolo o l'artista corretto scegliendo tra 4 opzioni prima che il timer circolare scada.
* **Target di Riferimento**: Appassionati di musica di ogni età, amanti del pop, rock, dance, hip-hop, musica italiana e colonne sonore.
* **Piattaforme**: Web App progressiva & App Nativa Android (APK/AAB per Google Play Store) realizzata con React 19 e Capacitor 8.

---

## 🎮 2. MODALITÀ DI GIOCO & FUNZIONALITÀ PRINCIPALI

### A. Modalità Catalogo Standard (10 Brani Randomizzati)
* **Funzionamento**: L'utente sceglie una playlist tematica dal catalogo. Ad ogni partita vengono estratti **10 brani casuali** tratti da un archivio master di oltre 300 canzoni curata nei minimi dettagli.
* **Sistema Anti-Ripetizione**: L'app tiene traccia dello storico di sessione (`getRandomizedTrackPool`) evitando di proporre i soliti brani e garantendo la scoperta costante di nuove canzoni ed artisti ad ogni partita.

### B. Test di Calibrazione Iniziale
* **Funzionamento**: Un test guidato da 10 brani per valutare la prontezza dell'orecchio musicale del nuovo utente.
* **Risultato**: Calcola il punteggio iniziale e assegna il primo **Rango di Ascolto** nel profilo utente.

### C. Sfida del Giorno (Daily Challenge) & Note Streak
* **Funzionamento**: Una playlist speciale giornaliera da 10 brani disponibile 1 volta al giorno per tutti i giocatori.
* **Punteggio Maggiorato**: Indovinando 10 canzoni su 10 si attiva il bonus speciale **+5.000 PT**.
* **Note Streak (Serie di Note)**: Giocare ogni giorno incrementa il contatore "Serie in Nota". Raggiungendo 7, 14, 21 o 30 giorni consecutivi si sbloccano badge e bonus punti esclusivi (es. *🎵 Settimana In Nota*, *⚡ Ritmo Inarrestabile*, *👑 Mese in Armonia*).

### D. Sfide 1v1 & Matchmaking Random Online
* **1v1 con Amici**: Generazione di un codice sfida monouso (es. `TEN-ROCK90-8820`) inviabile via link o messaggistica.
* **Match Random Online**: Accoppiamento istantaneo con un avversario casuale online. Presenta la scheda profilo dell'avversario con bandiera della nazione, livello, età e punteggio record.

### E. Modalità Torneo Multi-Giocatore (10, 15 o 20 Canzoni)
* **Durata Personalizzabile**: Prima di avviare un Torneo o una Sfida, il creatore può scegliere la lunghezza della partita tra **10 Canzoni**, **15 Canzoni** o **20 Canzoni**.
* **Invito Partecipanti**: Selezione degli amici da invitare con codice torneo dedicato.
* **Premio Vincitore**: Assegnazione della corona dorata del vincitore (+1 *Crown Tag*).

### F. Modalità Offline (Senza Connessione)
* **Funzionamento**: Utilizzo del salvataggio IndexedDB locale per giocare anche in assenza di rete internet, con sincronizzazione dei punteggi non appena il dispositivo torna online.

---

## 🏆 3. GAMIFICATION & RANGHI DI ASCOLTO (LISTENER RANKS)

L'app include 14 livelli di progressione basati sul punteggio totale accumulato:

1. **Suonatore di Citofono** (0 PT) 🔔
2. **Singer da Doccia** (5.000 PT) 🚿
3. **Singer da Luna Piena** (15.000 PT) 🌕
4. **Cacciatore di Hit** (35.000 PT) 🎵
5. **DJ del Venerdì Sera** (70.000 PT) 📻
6. **Ascoltatore da Bus** (120.000 PT) 🎧
7. **Orecchio Fino** (180.000 PT) ⚡
8. **Chitarrista da Falò** (260.000 PT) 🎸
9. **Urla-in-Macchina Pro** (350.000 PT) 🚗
10. **Music Buff** (460.000 PT) 🔥
11. **Re del Karaoke** (580.000 PT) 🎤
12. **Tamburellatore da Scrivania** (720.000 PT) 🥁
13. **Producer da Salotto** (880.000 PT) 🎛️
14. **Vinyl Wizard** (1.050.000 PT) 👑

---

## 🎨 4. DESIGN AESTHETICS & ESPERIENZA GRAFICA

* **Stile Visivo**: Dark Mode elegante e moderna (`#09090d`) arricchita da schede in **Glassmorphism** trasparenti con sfocatura di sfondo (*backdrop-filter*).
* **Palette Colori Neon Tailored**:
  * Emerald (`#10B981`) & Teal (`#14B8A6`) per le azioni principali e il successo.
  * Cyan (`#06B6D4`) per i match casuali e il timer.
  * Amber/Gold (`#F59E0B`) per i tornei e i trofei.
  * Rose (`#F43F5E`) per gli avvisi e gli errori.
* **Branding e Icona App**:
  * Sfondo sfumato dal verde smeraldo al ciano con al centro il tratto scuro e dinamico del fulmine (`Zap` outline).
* **Animazioni Arcade a 60/120 FPS**:
  * **Streak & Combo Popups**: All'indovinare di una canzone compaiono banner ad altezze e colori dinamici (*NICE! 🎵*, *GREAT! ⚡*, *2 IN A ROW! 🔥*, ..., *10 IN A ROW! PERFECT 🏆*).
  * Accelerazione hardware GPU nativa tramite trasformazioni CSS3 `translate3d` e `will-change`.

---

## 💰 5. MODELLO DI BUSINESS & MONETIZZAZIONE

### A. Piano Free & Sistema Vite ❤️
* Gli utenti Free ricevono **3 Vite** per giocare. Ogni partita consuma 1 Vita.
* **Ricarica Vite**:
  1. Ricarica temporizzata (1 vita ricaricata nel tempo).
  2. **Video Pubblicitari Rewarded (AdMob Integration)**: Guarda uno spot pubblicitario di 5 secondi per guadagnare subito **+1 Vita Extra**.
  3. **Invita un Amico**: Invia un link di invito ad un amico per ricevere **+5 Vite Extra**.

### B. Abbonamento Ten Seconds PRO ⚡
* **Prezzo**: **2,90 € al mese** oppure **29,90 € all'anno**.
* **Vantaggi PRO**:
  * Vite **illimitate** senza alcuna attesa.
  * **Zero annunci** pubblicitari.
  * Accesso a tutte le playlist esclusive.
  * Badge PRO luccicante sul profilo ed in classifica.

---

## 🎧 6. CATALOGO MUSICALE MASTER (10 PLAYLIST CURATE)

Il gioco include 10 playlist tematiche ricche di brani iconici:

1. **Rock Anni '90** (Nirvana, Radiohead, Oasis, Pearl Jam, Soundgarden...)
2. **Pop Anni '80** (Michael Jackson, Madonna, Prince, Wham!, Eurythmics...)
3. **Grandi Successi Italiani** (Vasco Rossi, Ligabue, Lucio Battisti, Måneskin, Cremonini...)
4. **Dance Anni 2000** (Eiffel 65, Gigi D'Agostino, Gabry Ponte, Daft Punk, Avicii...)
5. **Hip Hop & Rap Legends** (Eminem, 50 Cent, Caparezza, Fabri Fibra, Marracash...)
6. **Disco & Funk Anni '70** (Bee Gees, ABBA, Earth Wind & Fire, Donna Summer...)
7. **Indie & Alternative Rock** (Arctic Monkeys, The Killers, Franz Ferdinand, The Strokes...)
8. **Cantautori Italiani** (Fabrizio De André, Lucio Dalla, Rino Gaetano, De Gregori...)
9. **Reggaeton & Hit Latine** (Daddy Yankee, Bad Bunny, Don Omar, Shakira, J Balvin...)
10. **Colonne Sonore Cinema** (Ennio Morricone, Hans Zimmer, Queen, John Williams...)

---

## 🛠️ 7. ARCHITETTURA TECNOLOGICA & INFRASTRUTTURA

* **Frontend**: React 19, Tailwind CSS, Vite, Lucide React Icons.
* **Backend & Database**: Supabase (PostgreSQL, Realtime Matchmaking Channels, OAuth Google Sign-In).
* **Plugin Nativi Mobile**: Capacitor 8, `@capacitor-community/admob` (Google AdMob SDK Nativo).
* **Risolutore Audio Doppio**: Integrazione combinata Deezer API + iTunes Search API per la risoluzione in tempo reale delle anteprime audio in formato MP3 universale e delle copertine HD.
