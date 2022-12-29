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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbWRpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b29tZGlzcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFVLENBQUMsQ0FzRFY7QUF0REQsV0FBVSxDQUFDO0lBSVAsSUFBaUIsT0FBTyxDQTRDdkI7SUE1Q0QsV0FBaUIsT0FBTztRQUNwQixNQUFhLFdBQVksU0FBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDM0MsWUFBWSxPQUFxQjtnQkFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25CLENBQUM7WUFNUSxLQUFLLENBQUMsR0FBVTtnQkFDckIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUN4QyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzRCxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sU0FBUyxDQUFDO1lBQ3JCLENBQUM7WUFFUSxRQUFRLENBQUMsR0FBVTtnQkFDeEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQ0QsU0FBUyxDQUFDLENBQWU7Z0JBQ3JCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFDRCxjQUFjO2dCQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JGLENBQUM7U0FDSjtRQTlCWSxtQkFBVyxjQThCdkIsQ0FBQTtRQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ2YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsb0JBQW9CLEVBQUUsSUFBSTtTQUM3QixDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBNUNnQixPQUFPLEdBQVAsU0FBTyxLQUFQLFNBQU8sUUE0Q3ZCO0lBQ0QsSUFBaUIsT0FBTyxDQUl2QjtJQUpELFdBQWlCLE9BQU87UUFDcEIsU0FBZ0IsYUFBYSxDQUFDLE9BQStCO1lBQ3pELE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRmUscUJBQWEsZ0JBRTVCLENBQUE7SUFDTCxDQUFDLEVBSmdCLE9BQU8sR0FBUCxTQUFPLEtBQVAsU0FBTyxRQUl2QjtBQUNMLENBQUMsRUF0RFMsQ0FBQyxLQUFELENBQUMsUUFzRFYifQ==