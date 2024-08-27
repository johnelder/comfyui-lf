/*-------------------------------------------------------------------*/
/*             G e n e r i c   D e c l a r a t i o n s               */
/*-------------------------------------------------------------------*/
declare interface BaseLFProps {
  isInitialized: boolean;
  payload: NodePayload;
}
declare interface ComfyAPIs {
  event: <T extends BaseEventPayload>(
    name: EventNames,
    callback: (event: CustomEvent<T>) => void,
  ) => void;
  getNodeById: (id: string) => NodeType;
  redraw: () => void;
  register: (extension: Extension) => void;
}
declare type LogSeverity = 'info' | 'success' | 'warning' | 'error';
declare type WidgetCallback = (node: NodeType, name: string) => { widget: Widget };
declare interface WidgetOptions {
  isReady?: boolean;
  refresh: () => void;
}
/*-------------------------------------------------------------------*/
/*               E v e n t s    D e c l a r a t i o n s              */
/*-------------------------------------------------------------------*/
declare interface BaseEventPayload {
  id: string;
}
/*-------------------------------------------------------------------*/
/*           D i c t i o n a r y   D e c l a r a t i o n s           */
/*-------------------------------------------------------------------*/
declare interface NodeDictionary {
  [index: string]: NodeDictionaryEntry;
}
declare interface BaseNodeDictionaryEntry {
  beforeRegisterNodeDef?: (node: NodeType, data: NodeData, name: string) => void;
  eventCb: EventCallback;
  eventName: EventNames;
  getCustomWidgets?: () => Record<KeyOfCustomWidgets, Function>;
  nodeCreated?: (node) => void;
  updateCb: UpdateCallback;
}
declare type EventCallback = (e: CustomEvent<NodePayload>) => void;
declare type UpdateCallback = (node: NodeType) => void;
declare interface Extension extends Partial<BaseNodeDictionaryEntry> {
  name: string;
}
