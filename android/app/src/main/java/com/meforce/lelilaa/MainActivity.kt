package com.meforce.lelilaa

import android.content.Context
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import android.graphics.Color
import android.os.Build
import android.util.Log
import android.view.WindowManager
import android.webkit.JavascriptInterface
import android.view.Window

import android.content.Intent
import android.os.Handler
import android.provider.MediaStore
import android.view.KeyEvent
import android.view.View
import androidx.core.content.ContextCompat
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import kotlin.concurrent.thread


class MainActivity : AppCompatActivity() {
private lateinit var webView: WebView


override fun onCreate(savedInstanceState: Bundle?) {

super.onCreate(savedInstanceState)

Thread.sleep(1000)
installSplashScreen()
setContentView(R.layout.activity_main)

webView = findViewById(R.id.webview)
//webView.visibility = View.GONE
val webSettings: WebSettings = webView.settings
webSettings.javaScriptEnabled = true // JavaScript'i etkinleştir
webSettings.setCacheMode(WebSettings.LOAD_DEFAULT) // Önbelleği kullan herzaman
// Aşırı kaydırma davranışını kapatmak
webView.overScrollMode = WebView.OVER_SCROLL_NEVER
webSettings.domStorageEnabled = true
webSettings.databaseEnabled = true
webSettings.setAllowFileAccess(true);
webSettings.setAllowFileAccessFromFileURLs(true);
webSettings.setAllowUniversalAccessFromFileURLs(true);

// WebView'e URL'yi yükleme
webView.loadUrl("file:///android_asset/index.html")

// WebView isteğini yönetme
webView.webViewClient = WebViewClient()

// JavaScript iletişim köprüsünü WebView'e ekleme
webView.addJavascriptInterface(this, "AndroidBridge")

}

override fun onBackPressed() {
if (webView.canGoBack()) {
webView.goBack()
} else {
super.onBackPressed()
}
}


@JavascriptInterface
fun changeStatusBarColor(color: String) {
runOnUiThread {
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
val window: Window = window
window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
window.statusBarColor = Color.parseColor(color)
//window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
if (isLightStatusBar(Color.parseColor(color))) {
// Status bar metni açık renkteyse, siyah yap
window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
window.setBackgroundDrawableResource(R.color.white)
window.navigationBarColor = ContextCompat.getColor(this, R.color.white)
} else {
// Status bar metni koyu renkteyse, beyaz yap (opsiyonel)
window.decorView.systemUiVisibility = 0
window.setBackgroundDrawableResource(R.color.black)
window.navigationBarColor = ContextCompat.getColor(this, R.color.black)
}
}
}
}
@JavascriptInterface
fun openGallery() {
val intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
startActivityForResult(intent, 1)
}
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
super.onActivityResult(requestCode, resultCode, data)
if (requestCode == 1 && resultCode == RESULT_OK && data != null) {
val selectedImage = data.data // Seçilen resmin URI'si
// URI'yi JavaScript koduna iletmek için evaluateJavascript kullanımı
webView.evaluateJavascript("AndroidBridgeUpdateImage('$selectedImage');", null)
}
}

private fun isLightStatusBar(backgroundColor: Int): Boolean {
val luminance = (0.299 * Color.red(backgroundColor) +
0.587 * Color.green(backgroundColor) +
0.114 * Color.blue(backgroundColor)) / 255
return luminance > 0.5
}

}