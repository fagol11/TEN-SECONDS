# Project Rules for Ten Seconds

## Android Build Policy
- **DO NOT compile/build Android APK or AAB packages** automatically after making changes. Only build APK/AAB when explicitly requested by the user.

## Android APK Naming Rule (When Requested)
- Whenever an Android build is explicitly requested, ALWAYS name the output file using progressive version numbers: `TenSeconds_Beta_X.apk` (e.g., `TenSeconds_Beta_11.apk`, `TenSeconds_Beta_12.apk`).
- Never name APKs generically like `app-debug.apk` or `latest.apk`.
