function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "mainWindow",
        title: "status"
    });
    $.__views.mainWindow && $.addTopLevelView($.__views.mainWindow);
    $.__views.webview = Ti.UI.createWebView({
        top: 0,
        bottom: "40dp",
        id: "webview",
        url: "http://www.google.com"
    });
    $.__views.mainWindow.add($.__views.webview);
    $.__views.statusView = Ti.UI.createView({
        bottom: 0,
        height: "40dp",
        backgroundColor: "#EEE",
        borderColor: "#A1A1A1",
        borderWidth: 1,
        id: "statusView"
    });
    $.__views.mainWindow.add($.__views.statusView);
    $.__views.statusViewShadowGraphLabel = Ti.UI.createLabel({
        top: "10dp",
        right: "5dp",
        color: "#2192E3",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        shadowColor: "#FEFEFE",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "ShadowGraph",
        id: "statusViewShadowGraphLabel"
    });
    $.__views.statusView.add($.__views.statusViewShadowGraphLabel);
    $.__views.statusViewActivityIndicator = Ti.UI.createActivityIndicator({
        top: "10dp",
        textAlign: "center",
        color: "#A1A1A1",
        font: {
            fontSize: "11dp"
        },
        shadowColor: "#FEFEFE",
        shadowOffset: {
            x: 1,
            y: 1
        },
        style: Ti.UI.ActivityIndicatorStyle.DARK,
        id: "statusViewActivityIndicator"
    });
    $.__views.statusView.add($.__views.statusViewActivityIndicator);
    $.__views.statusViewLoadTimeLabel = Ti.UI.createLabel({
        top: "10dp",
        textAlign: "center",
        color: "#A1A1A1",
        font: {
            fontSize: "14dp"
        },
        shadowColor: "#FEFEFE",
        shadowOffset: {
            x: 1,
            y: 1
        },
        id: "statusViewLoadTimeLabel"
    });
    $.__views.statusView.add($.__views.statusViewLoadTimeLabel);
    $.__views.statusViewBackLabel = Ti.UI.createLabel({
        top: "10dp",
        left: "10dp",
        color: "#A1A1A1",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        shadowColor: "#FEFEFE",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "back",
        id: "statusViewBackLabel"
    });
    $.__views.statusView.add($.__views.statusViewBackLabel);
    webviewBackPage ? $.__views.statusViewBackLabel.addEventListener("click", webviewBackPage) : __defers["$.__views.statusViewBackLabel!click!webviewBackPage"] = true;
    $.__views.statusViewForwardLabel = Ti.UI.createLabel({
        top: "10dp",
        left: "70dp",
        color: "#A1A1A1",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        shadowColor: "#FEFEFE",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "fowd",
        id: "statusViewForwardLabel"
    });
    $.__views.statusView.add($.__views.statusViewForwardLabel);
    webviewForwardPage ? $.__views.statusViewForwardLabel.addEventListener("click", webviewForwardPage) : __defers["$.__views.statusViewForwardLabel!click!webviewForwardPage"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ShadowGraph, webviewBackPage, webviewForwardPage, __slice = [].slice;
    ShadowGraph = function() {
        function ShadowGraph() {}
        ShadowGraph.startTime = 0;
        ShadowGraph.endTime = 0;
        ShadowGraph.method = function() {
            var args, method_name;
            method_name = arguments[0], args = arguments.length >= 2 ? __slice.call(arguments, 1) : [];
            return Ti.API.info($.webview[method_name](args));
        };
        ShadowGraph.prop = function(property_name, show_alert) {
            null == show_alert && (show_alert = false);
            Ti.API.info($.webview[property_name]);
            if (show_alert) return alert($.webview[property_name]);
        };
        ShadowGraph.evalJS = function(javascript) {
            return $.webview.evalJS(javascript);
        };
        ShadowGraph.setUrl = function(url) {
            return $.webview.setUrl(url);
        };
        ShadowGraph.loadTime = function(show_alert) {
            var loadTime;
            null == show_alert && (show_alert = false);
            loadTime = this.endTime - this.startTime;
            show_alert && alert("load time is " + loadTime + "ms");
            return Ti.API.info("load time is " + loadTime + "ms");
        };
        return ShadowGraph;
    }();
    Alloy.Globals.ShadowGraph = ShadowGraph;
    Alloy.Globals.sg = ShadowGraph;
    $.webview.addEventListener("beforeload", function() {
        var url;
        $.statusViewLoadTimeLabel.hide();
        Alloy.Globals.sg.startTime = new Date();
        url = $.webview.getUrl();
        $.mainWindow.setTitle(url);
        return $.statusViewActivityIndicator.show();
    });
    $.webview.addEventListener("load", function() {
        var BackLabel, ForwardLabel, endTime;
        ForwardLabel = $.statusViewForwardLabel;
        BackLabel = $.statusViewBackLabel;
        $.webview.canGoForward() ? ForwardLabel.setColor("#A1A1A1") : ForwardLabel.setColor("#E1E1E1");
        $.webview.canGoBack() ? BackLabel.setColor("#A1A1A1") : BackLabel.setColor("#E1E1E1");
        endTime = new Date();
        Alloy.Globals.sg.endTime = endTime.getTime();
        $.statusViewActivityIndicator.hide();
        $.statusViewLoadTimeLabel.text = "" + (Alloy.Globals.sg.endTime - Alloy.Globals.sg.startTime) + "ms";
        return $.statusViewLoadTimeLabel.show();
    });
    webviewBackPage = function() {
        return $.webview.goBack();
    };
    webviewForwardPage = function() {
        return $.webview.goForward();
    };
    $.mainWindow.open();
    __defers["$.__views.statusViewBackLabel!click!webviewBackPage"] && $.__views.statusViewBackLabel.addEventListener("click", webviewBackPage);
    __defers["$.__views.statusViewForwardLabel!click!webviewForwardPage"] && $.__views.statusViewForwardLabel.addEventListener("click", webviewForwardPage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;