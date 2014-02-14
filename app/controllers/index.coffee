class ShadowGraph
  @startTime = 0
  @endTime = 0

  @method: (method_name, args...)->
    Ti.API.info $.webview[method_name](args)

  @prop: (property_name, show_alert=false)->
    Ti.API.info $.webview[property_name]
    alert $.webview[property_name] if show_alert

  @evalJS: (javascript)->
    $.webview.evalJS(javascript)

  @setUrl: (url)->
    $.webview.setUrl(url)

  @loadTime: (show_alert=false)->
    loadTime = @endTime - @startTime
    alert "load time is #{loadTime}ms" if show_alert
    Ti.API.info "load time is #{loadTime}ms"

Alloy.Globals.ShadowGraph = ShadowGraph
Alloy.Globals.sg          = ShadowGraph

$.webview.addEventListener "beforeload", (e) =>
  $.statusViewLoadTimeLabel.hide()
  Alloy.Globals.sg.startTime = new Date()
  url = $.webview.getUrl()
  $.mainWindow.setTitle url
  $.statusViewActivityIndicator.show()

$.webview.addEventListener "load", (e) =>
  ForwardLabel = $.statusViewForwardLabel
  BackLabel = $.statusViewBackLabel

  if $.webview.canGoForward() then ForwardLabel.setColor '#A1A1A1' else ForwardLabel.setColor '#E1E1E1'
  if $.webview.canGoBack() then BackLabel.setColor '#A1A1A1' else BackLabel.setColor '#E1E1E1'

  endTime = new Date()
  Alloy.Globals.sg.endTime = endTime.getTime()
  $.statusViewActivityIndicator.hide()
  $.statusViewLoadTimeLabel.text = "#{Alloy.Globals.sg.endTime - Alloy.Globals.sg.startTime}ms"
  $.statusViewLoadTimeLabel.show()

webviewBackPage = ->
  $.webview.goBack();

webviewForwardPage = ->
  $.webview.goForward();

shadowGraphLabel = ->
  $.statusViewShadowGraphLabel.text = (if ($.statusViewShadowGraphLabel.text is 'ShadowGraph') then '@shokuan' else 'ShadowGraph')

$.mainWindow.open()