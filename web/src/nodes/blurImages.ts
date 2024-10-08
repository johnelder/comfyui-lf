import { BlurImagesPayload, EventName } from '../types/events';
import { LogSeverity } from '../types/manager';
import { NodeName, type Extension } from '../types/nodes';
import {
  CustomWidgetName,
  type BaseWidgetCallback,
  type ImagePreviewWidgetsSetter,
} from '../types/widgets';
import { getApiRoutes, getLFManager, getWidget } from '../utils/common';

const NAME = NodeName.blurImages;

export const blurImagesFactory = {
  eventHandler: (event: CustomEvent<BlurImagesPayload>, addW: BaseWidgetCallback) => {
    const name = EventName.blurImages;
    getLFManager().log(`Event '${name}' received`, { event }, LogSeverity.Success);

    const payload = event.detail;
    const node = getApiRoutes().getNodeById(payload.id);
    if (node) {
      const widget = getWidget(node, CustomWidgetName.imagePreview, addW);
      widget.options.setValue(payload);
      getApiRoutes().redraw();
    }
  },
  register: (setW: ImagePreviewWidgetsSetter, addW: BaseWidgetCallback) => {
    const extension: Extension = {
      name: 'LFExt_' + NAME,
      beforeRegisterNodeDef: async (nodeType) => {
        if (nodeType.comfyClass === NAME) {
          const onNodeCreated = nodeType.prototype.onNodeCreated;
          nodeType.prototype.onNodeCreated = function () {
            const r = onNodeCreated?.apply(this, arguments);
            const node = this;
            addW(node, CustomWidgetName.imagePreview);
            return r;
          };
        }
      },
      getCustomWidgets: setW,
    };
    getApiRoutes().register(extension);
  },
};
