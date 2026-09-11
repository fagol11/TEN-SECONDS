# Regole di Progetto / Project Rules

## Regola Rigorosa di Compilazione (Build Policy)
- **NON COMPILARE MAI pacchetti APK o AAB (`gradlew assembleRelease`, `gradlew bundleRelease`, `gradlew assembleDebug`, `cap sync`, ecc.) a meno che l'utente non lo richieda esplicitamente.**
- Esegui solo test in locale, modifiche al codice e verifiche via browser/dev server (`npm run dev`), senza lanciare build native Android spontaneamente.
- Quando l'utente richiede espressamente la compilazione di APK/AAB, procedi con la versione richiesta.
