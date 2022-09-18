namespace L.Control {
    export class ZoomControl extends Zoom {
        constructor(options?: ZoomOptions) {
            super(options);
        }

        _display: HTMLElement;
        _zoomOutButton: HTMLElement;
        _map: L.Map;

        onAdd(map: L.Map): HTMLElement {
            const container = L.Control.Zoom.prototype.onAdd.call(this, map);
            this._display = L.DomUtil.create('div', 'leaflet-control-zoom-display');
            this._display.style.userSelect = 'none';
            container.insertBefore(this._display, this._zoomOutButton);
            map.on('zoomend', this._onUpdate, this);
            this._updateDisplay();
            return container;
        }

        onRemove(map: L.Map) {
            L.Control.Zoom.prototype.onRemove.call(this, map);
            map.off('zoomend', this._onUpdate, this);
        }
        _onUpdate() {
            window.setTimeout(()=> this._updateDisplay(), 0);
        }
        _updateDisplay() {
            this._display.innerHTML = (Math.round(this._map.getZoom()*10)/10).toString();
        }
    }
}
namespace L.control {
    export function zoomWithLevel(options?: L.Control.ZoomOptions): L.Control.ZoomControl {
        return new L.Control.ZoomControl(options);
    }
}