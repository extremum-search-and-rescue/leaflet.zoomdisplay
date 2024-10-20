var L;
(function (L) {
    let Control;
    (function (Control) {
        class ZoomControl extends L.Control.Zoom {
            constructor(options) {
                super(options);
            }
            onAdd(map) {
                const container = super.onAdd(map);
                container.style.userSelect = "none";
                this._display = L.DomUtil.create('div', 'leaflet-control-zoom-display');
                this._display.style.userSelect = 'none';
                container.insertBefore(this._display, this._zoomOutButton);
                map.on('zoomend', this._onUpdate, this);
                this._updateDisplay();
                return container;
            }
            onRemove(map) {
                super.onRemove(map);
                map.off('zoomend', this._onUpdate, this);
            }
            _onUpdate(e) {
                window.setTimeout(() => this._updateDisplay(), 0);
            }
            _updateDisplay() {
                this._display.innerHTML = (Math.round(this._map.getZoom() * 10) / 10).toString();
            }
        }
        Control.ZoomControl = ZoomControl;
        L.Map.mergeOptions({
            zoomControl: false,
            zoomWithLevelControl: true
        });
        L.Map.addInitHook(function () {
            this.options.zoomControl = false;
            if (this.options.zoomWithLevelControl) {
                this.zoom = new Control.ZoomControl();
                this.addControl(this.zoom);
            }
        });
    })(Control = L.Control || (L.Control = {}));
    let control;
    (function (control) {
        function zoomWithLevel(options) {
            return new L.Control.ZoomControl(options);
        }
        control.zoomWithLevel = zoomWithLevel;
    })(control = L.control || (L.control = {}));
})(L || (L = {}));
//# sourceMappingURL=zoomdisplay.js.map