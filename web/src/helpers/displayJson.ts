import { app } from '/scripts/app.js';
import { ComfyWidgets } from '/scripts/widgets.js';

const widgetName = 'json_value';
const eventName: EventNames = 'lf-displayjson';
const cssClasses = {
  wrapper: 'lf-displayjson',
  widget: 'lf-displayjson__widget',
};

const eventCb = (event: CustomEvent<DisplayJSONPayload>) => {
  if (window.lfManager.getDebug()) {
    console.log(`Event '${eventName}' Callback`, event);
  }
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
  if (window.lfManager.getDebug()) {
    console.log(`Updating '${eventName}' Callback`, node);
  }

  const existingWidget = node?.widgets?.find((w) => w.name === widgetName);
  if (existingWidget) {
    (existingWidget.element as DisplayJsonWidget).refresh();
  } else {
    const widget = app.widgets.KUL_CODE(node, widgetName).widget;
    widget.serializeValue = false;
  }

  requestAnimationFrame(() => {
    app.graph.setDirtyCanvas(true, false);
  });
};

export const DisplayJSONAdapter: () => DisplayJSONDictionaryEntry = () => {
  return {
    getCustomWidgets: () => {
      return {
        KUL_CODE(node, name) {
          if (window.lfManager.getDebug()) {
            console.log(`Adding 'KUL_CODE' custom widget`, node);
          }
          const props = node.lfProps as DisplayJSONProps;
          const domWidget = document.createElement('div') as DisplayJsonWidget;
          domWidget.refresh = () => {
            if (domWidget.firstChild) {
              domWidget.removeChild(domWidget.firstChild);
            }
            const content = createWidget(props);
            domWidget.appendChild(content);
          };
          domWidget.refresh();
          const widget = node.addDOMWidget(name, widgetName, domWidget);
          return { widget };
        },
      };
    },
    eventCb,
    eventName,
    updateCb,
  };
};

function createWidget(props: DisplayJSONProps) {
  const value = props?.payload?.json;

  const content = document.createElement('div');
  content.classList.add(cssClasses.wrapper);

  const codeWidget: HTMLKulCodeElement = document.createElement('kul-code');
  codeWidget.classList.add(cssClasses.widget);
  codeWidget.kulLanguage = 'json';
  codeWidget.kulValue = value ? JSON.stringify(value, null, 2) : 'Wow. Such empty!';
  content.appendChild(codeWidget);

  return content;
}
