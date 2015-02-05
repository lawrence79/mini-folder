document.domain = "barc.com";
    
var controls = (function() {
    'use strict';    
    
    var _cache = {},
        expandCBs = [],
        BCUS = window.parent.BCUS,
        
        _init = function() {
            _addCache();
            _setupEvents();
        },

        _addCache = function() {
            _cache.hiddenSignInEl = document.getElementsByClassName('login-panel__login-details')[0];
            _cache.usernameInput = document.getElementsByClassName('login-panel__input')[0];
            _cache.signInPanel = document.getElementsByClassName('login-panel')[0];
            _cache.rememberUserCheckbox = document.getElementsByClassName('login-panel__label--checkbox')[0];
        },

        _setupEvents = function() {
            _cache.usernameInput.addEventListener('click', _expandLogin);
            
        },

        _expandLogin = function() {
            _cache.hiddenSignInEl.style.display = 'block';
            console.log(expandCBs[0]());
        },

        _onExpandLogin = function(callback) { 
           console.log(expandCBs);
           expandCBs.push(callback); 
        };

    return {
        init: _init,
        onExpandLogin: _onExpandLogin
    };
})();

controls.init();

