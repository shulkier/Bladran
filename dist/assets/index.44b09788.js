import{P as e}from"./vendor.c2cc9365.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();class o extends e.Scene{constructor(){super()}preload(){this.load.image("logo","assets/logo.e4b3e4c6.png")}create(){const e=this.add.image(400,750,"logo");this.tweens.add({targets:e,y:450,duration:2e3,ease:"Power2",yoyo:!0,loop:-1})}update(){}}const r={type:e.AUTO,parent:"phaser-canvas",scale:{mode:e.Scale.FIT,parent:"phaser-example",autoCenter:e.Scale.CENTER_BOTH,width:768,height:1366},scene:o};new e.Game(r);
