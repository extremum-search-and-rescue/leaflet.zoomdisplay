var L;
(function (L) {
    var Control;
    (function (Control) {
        class ZoomControl extends Control.Zoom {
            constructor(options) {
                super(options);
            }
            onAdd(map) {
                const container = L.Control.Zoom.prototype.onAdd.call(this, map);
                this._display = L.DomUtil.create('div', 'leaflet-control-zoom-display');
                this._display.style.userSelect = 'none';
                container.insertBefore(this._display, this._zoomOutButton);
                map.on('zoomend', this._onUpdate, this);
                this._updateDisplay();
                return container;
            }
            onRemove(map) {
                L.Control.Zoom.prototype.onRemove.call(this, map);
                map.off('zoomend', this._onUpdate, this);
            }
            _onUpdate() {
                window.setTimeout(() => this._updateDisplay(), 0);
            }
            _updateDisplay() {
                this._display.innerHTML = (Math.round(this._map.getZoom() * 10) / 10).toString();
            }
        }
        Control.ZoomControl = ZoomControl;
    })(Control = L.Control || (L.Control = {}));
})(L || (L = {}));
(function (L) {
    var control;
    (function (control) {
        function zoomWithLevel(options) {
            return new L.Control.ZoomControl(options);
        }
        control.zoomWithLevel = zoomWithLevel;
    })(control = L.control || (L.control = {}));
})(L || (L = {}));
