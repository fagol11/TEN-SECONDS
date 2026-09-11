# Regole di Progetto

## Regola Rigorosa di Compilazione (Build Policy)
- **NON COMPILARE MAI pacchetti APK o AAB (`gradlew assemble*`, `gradlew bundle*`, ecc.) se non viene esplicitamente richiesto dall'utente.**
- Lavora sempre modificando il codice e testando in locale su browser/dev server, senza avviare la compilazione di APK/AAB di propria iniziativa.
