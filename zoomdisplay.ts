///<reference path="../type.definitions/index.d.ts" />

namespace L {
    export interface MapOptions {
        zoomWithLevelControl: boolean;
    }
    export namespace Control {
        export class ZoomControl extends L.Control.Zoom {
            constructor(options?: ZoomOptions) {
                super(options);
            }

            _display: HTMLElement;
            _zoomOutButton: HTMLElement;
            _map: L.Map;

            override onAdd(map: L.Map): HTMLElement {
                const container = super.onAdd(map);
                container.style.userSelect = "none";
                this._display = L.DomUtil.create('div', 'leaflet-control-zoom-display');
                this._display.style.userSelect = 'none';
                container.insertBefore(this._display, this._zoomOutButton);
                map.on('zoomend', this._onUpdate, this);
                this._updateDisplay();
                return container;
            }

            override onRemove(map: L.Map) {
                super.onRemove(map);
                map.off('zoomend', this._onUpdate, this);
            }
            _onUpdate(e: LeafletEvent) {
                window.setTimeout(() => this._updateDisplay(), 0);
            }
            _updateDisplay() {
                this._display.innerHTML = (Math.round(this._map.getZoom() * 10) / 10).toString();
            }
        }
        L.Map.mergeOptions({
            zoomControl: false, //prevent default Zoom control to be added
            zoomWithLevelControl: true //add this extended variant
        });

        L.Map.addInitHook(function () {
            this.options.zoomControl = false;
            if (this.options.zoomWithLevelControl) {
                this.zoom = new Control.ZoomControl();
                this.addControl(this.zoom);
            }
        });
    }
    export namespace control {
        export function zoomWithLevel(options?: L.Control.ZoomOptions): L.Control.ZoomControl {
            return new L.Control.ZoomControl(options);
        }
    }
}