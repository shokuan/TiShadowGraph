ShadowGraph
======================
ShadowGraphは、iPhone、Android上で動作するウェブサイトの  
テスト、デバッグを手助けするソフトウェアです。

TiShadow経由で配布されたShadowGraphは、  
各OS上に含まれるウェブブラウジング用のコンポーネントを利用し、  
非常に簡素なウェブブラウザとして動作します。

このウェブブラウザを利用している間は、TiShadow上で以下のAPIが提供されます。  
`evalJS, setUrl, loadTime, method, prop`  
APIはAlloy.Globals.ShadowGraph.*に含まれています。  
Alloy.Globals.sg.*でアクセスすることも出来ます。

    evalJS(string)
+   `string` :  
    ウェブブラウザ上で第一引数の_string_をjavascriptとして評価します。  
    ウェブサイトが提供している機能を直接実行することが出来ます。

--------

    setUrl(url)
+   `url` :  
    読み込みURLを_url_で指定します。

--------

    loadTime(show_alert=false)
+   `show_alert` :  
    _show_alert_に_true_が渡された場合読み込み時間をアラートで表示します。

--------

    method(method_name, arg...)
+   `method_name` :  
    Titanium.UI.WebViewが提供しているメソッドを実行します。  
    戻り値はconsoleに表示されます。  
    提供しているメソッドは以下で確認できます。  
    http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.WebView

--------

    prop(property_name, show_alert=false)
+   `property_name` :  
    Titanium.UI.WebViewが提供しているメソッドを実行します。  
    戻り値はconsoleに表示されます。  
   提供しているプロパティは以下で確認できます。
   http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.WebView

--------

### どういうときに使うの?  ###
大量のデバイスでウェブサイトのデバッグ、javascriptの振る舞いを見たい場合などに利用します。  
スマートフォンの動作は、OSごとに違いますが、同じOSでも端末により異なります。

### どうやって使うの? ###
TiShadowが起動されたPC上でAPIを実行します。  
TiShadowにより提供されているページ上のコンソール画面に、  
Alloy.Globals.sg.setUrl('http://bit.ly/1n28Wxm');  
と入力し、  
Send Codeボタンを押せば、接続された全てのスマートフォン上で寿司の画像を見る事が出来るでしょう。  

### どうして作ったの? ###
スマートフォンのウェブブラウザでの開発、デバッグ効率を上げるためです。  
慣れていないスマートフォンの操作は、URLを打つことも辛いことがあります。  

### 複数同時に寿司を見る(youtubeに飛びます) ###
[![TiShadowGraph](http://img.youtube.com/vi/5hWQs1m_bDg/0.jpg)](http://www.youtube.com/watch?v=5hWQs1m_bDg)