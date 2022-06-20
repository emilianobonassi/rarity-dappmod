// ==UserScript==
// @name         Rarity Tools Dappmod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Rarity Utils via Tampermonkey Script
// @author       @emilianobonassi
// @match        https://opensea.io/assets/ethereum/0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42/*
// @icon         https://rarity.tools/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const anchor = document.querySelector('[aria-label="Favorited by"]')

    const url = new URL(window.location.href)
    const match = /\/assets\/ethereum\/(?<address>[^$]*)\/(?<tokenid>[^$]*)/.exec(url.pathname)
    const tokenId = match.groups.tokenid

    const linkComponent = document.createElement('a')
    linkComponent.href = `https://rarity.tools/forgottenruneswizardscult/view/${tokenId}`
    linkComponent.innerText = ' rarity.tools'
    linkComponent.target = '_blank'
    linkComponent.rel = 'noopener'

    const wrapperComponent = document.createElement('div')
    wrapperComponent.innerText = 'Rarity on'

    wrapperComponent.append(linkComponent)

    anchor.parentNode.append(wrapperComponent)

})();
