import { EventName } from '../types/events.js';
import { LogSeverity } from '../types/manager.js';
import { NodeName } from '../types/nodes.js';
import { CustomWidgetName, } from '../types/widgets.js';
import { getApiRoutes, getLFManager, getWidget } from '../utils/common.js';
const NAME = NodeName.imageHistogram;
export const imageHistogramFactory = {
    eventHandler: (event, addW) => {
        const name = EventName.imageHistogram;
        getLFManager().log(`Event '${name}' received`, { event }, LogSeverity.Success);
        const payload = event.detail;
        const node = getApiRoutes().getNodeById(payload.id);
        if (node) {
            const widget = getWidget(node, CustomWidgetName.chart, addW);
            const comp = widget.options.getComp();
            comp.refresh();
            widget.options.setValue(event.detail.dataset);
            getApiRoutes().redraw();
        }
    },
    register: (setW, addW, resizeHandlerW) => {
        const extension = {
            name: 'LFExt_' + NAME,
            beforeRegisterNodeDef: async (nodeType) => {
                if (nodeType.comfyClass === NAME) {
                    const onNodeCreated = nodeType.prototype.onNodeCreated;
                    nodeType.prototype.onNodeCreated = function () {
                        const r = onNodeCreated?.apply(this, arguments);
                        const node = this;
                        addW(node, CustomWidgetName.chart);
                        return r;
                    };
                    const onResize = nodeType.prototype.onResize;
                    nodeType.prototype.onResize = function () {
                        const r = onResize?.apply(this, arguments);
                        const node = this;
                        resizeHandlerW(node);
                        return r;
                    };
                }
            },
            getCustomWidgets: setW,
        };
        getApiRoutes().register(extension);
    },
};
