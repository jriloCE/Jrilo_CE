"use strict";var v=Object.create;var r=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var b=(e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})},a=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of u(t))!w.call(e,s)&&s!==i&&r(e,s,{get:()=>t[s],enumerable:!(n=h(t,s))||n.enumerable});return e};var l=(e,t,i)=>(i=e!=null?v(m(e)):{},a(t||!e||!e.__esModule?r(i,"default",{value:e,enumerable:!0}):i,e)),f=e=>a(r({},"__esModule",{value:!0}),e);var x={};b(x,{activate:()=>y,deactivate:()=>P});module.exports=f(x);var p=l(require("vscode"));var o=l(require("vscode"));function d(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<32;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}var c=class e{static currentPanel;static viewType="simulator";_panel;_extensionUri;_disposables=[];static createOrShow(t){let i=o.window.activeTextEditor?o.window.activeTextEditor.viewColumn:void 0;if(e.currentPanel){e.currentPanel._panel.reveal(i),e.currentPanel._update();return}let n=o.window.createWebviewPanel(e.viewType,"Simulator",i||o.ViewColumn.One,{enableScripts:!0,localResourceRoots:[o.Uri.joinPath(t,"assets"),o.Uri.joinPath(t,"compiled"),o.Uri.joinPath(t,"fonts")]});e.currentPanel=new e(n,t)}static kill(){e.currentPanel?.dispose(),e.currentPanel=void 0}static revive(t,i){e.currentPanel=new e(t,i)}constructor(t,i){this._panel=t,this._extensionUri=i,this._update(),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables)}dispose(){for(e.currentPanel=void 0,this._panel.dispose();this._disposables.length;){let t=this._disposables.pop();t&&t.dispose()}}async _update(){let t=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(t)}_getHtmlForWebview(t){let i=t.asWebviewUri(o.Uri.joinPath(this._extensionUri,"compiled","index.js")),n=t.asWebviewUri(o.Uri.joinPath(this._extensionUri,"compiled","index.css")),s=d();return`<!DOCTYPE html>
			<html lang="en" style="width: 100%;height: 100%;"  >
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${t.cspSource}; script-src 'nonce-${s}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${n}" rel="stylesheet">
        <script nonce="${s}" src="${i}" type="module" defer ></script>
			</head>
      <body style="width: 100vw;height: 100vh;overflow: hidden;padding: 0px;" >
			</body>
			</html>`}};function y(e){e.subscriptions.push(p.commands.registerCommand("mobily-responsive.simulate",()=>{c.createOrShow(e.extensionUri)}))}function P(){}0&&(module.exports={activate,deactivate});
