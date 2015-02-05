document.domain = "barc.com";

document.addEventListener('DOMContentLoaded', function() {
    'use strict';    
    if (window.parent && window.parent.BCUS) {
        var signiniFrame = (function() {
            var _cache = {},
            _loginExpandCb = null,
                
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
                    
                },

                _expandLogin = function() {
                    this._loginExpandCb();
                },

                _onLoginExpand = function(callback) {
                    _loginExpandCb = callback;
                };

            return {
                init: _init,
                onLoginExpand: _onLoginExpand
            };
        })();
        signiniFrame.init();
    }
});
