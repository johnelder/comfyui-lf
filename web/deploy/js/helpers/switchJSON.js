"use strict";
/*import { getLFManager } from '../utils/utils.js';
import { app } from '/scripts/app.js';
import { ComfyWidgets } from '/scripts/widgets.js';

const widgetName = 'display_boolean';
const eventName: EventNames = 'lf-switchjson';

const eventCb = (event: CustomEvent<SwitchJSONPayload>) => {
  getLFManager().log(`Event '${eventName}' received`, { event }, 'success');

  const payload = event.detail;
  const node: NodeType = app.graph.getNodeById(+(payload.id || app.runningNodeId));
  if (node) {
    const isInitialized = node.lfProps?.isInitialized;
    if (isInitialized) {
      node.lfProps = Object.assign(node.lfProps, {
        ...node.lfProps,
        payload,
      });
    } else {
      node.lfProps = { isInitialized: true, payload };
    }
    updateCb(node);
  }
};

const updateCb = (node: NodeType) => {
  getLFManager().log(`Updating '${eventName}'`, { node });

  const props = node.lfProps as SwitchJSONProps;
  const value = props?.payload?.bool ? 'True!' : 'False!';

  const existingWidget = node.widgets?.find((w) => w.name === widgetName);
  if (existingWidget) {
    existingWidget.value = value;
  } else {
    const widget = ComfyWidgets.STRING(
      node,
      widgetName,
      [
        'STRING',
        {
          multiline: true,
        },
      ],
      app,
    ).widget;
    widget.inputEl.readOnly = true;
    widget.inputEl.style.opacity = 0.75;
    widget.value = value;
    widget.serializeValue = false;
  }

  requestAnimationFrame(() => {
    app.graph.setDirtyCanvas(true, false);
  });
};

export const SwitchJSONAdapter: () => SwitchJSONDictionaryEntry = () => {
  return {
    eventCb,
    eventName,
    updateCb,
  };
};
*/
