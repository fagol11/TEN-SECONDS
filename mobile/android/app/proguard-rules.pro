# Add project specific ProGuard rules for R8 optimization in Ten Seconds

# Preserve line numbers and source file attributes for crash symbolication
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod,SourceFile,LineNumberTable

# Preserve Capacitor Core & Plugins
-keep class com.getcapacitor.** { *; }
-keep class com.tenseconds.app.** { *; }

# Keep JavaScript Interface methods for WebView bridge
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Preserve Google Auth & AdMob SDKs
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**
-keep class com.codetrixstudio.capacitor.GoogleAuth.** { *; }

# Preserve WebKit WebView classes
-keep class android.webkit.** { *; }
