import { KulDataDataset } from './ketchup-lite/components';
export type BaseWidgetCallback = <T extends CustomWidgetName>(node: NodeType, name: T) => {
    widget: Widget;
};
export declare enum CustomWidgetName {
    booleanViewer = "KUL_BOOLEAN_VIEWER",
    chart = "KUL_CHART",
    chat = "KUL_CHAT",
    code = "KUL_CODE",
    controlPanel = "KUL_CONTROL_PANEL",
    imagePreview = "IMAGE_PREVIEW_B64",
    jsonInput = "KUL_JSON_INPUT",
    list = "KUL_LIST",
    string = "STRING",
    tree = "KUL_TREE"
}
export interface CustomWidgetSetters {
    [CustomWidgetName.booleanViewer](node: NodeType, name: CustomWidgetName.booleanViewer): {
        widget: BooleanViewerWidget;
    };
    [CustomWidgetName.chart](node: NodeType, name: CustomWidgetName.chart): {
        widget: ChartWidget;
    };
    [CustomWidgetName.chat](node: NodeType, name: CustomWidgetName.chat): {
        widget: ChatWidget;
    };
    [CustomWidgetName.code](node: NodeType, name: CustomWidgetName.code): {
        widget: CodeWidget;
    };
    [CustomWidgetName.controlPanel](node: NodeType, name: CustomWidgetName.controlPanel): {
        widget: ControlPanelWidget;
    };
    [CustomWidgetName.imagePreview](node: NodeType, name: CustomWidgetName.imagePreview): {
        widget: ImagePreviewWidget;
    };
    [CustomWidgetName.jsonInput](node: NodeType, name: CustomWidgetName.jsonInput): {
        widget: JsonInputWidget;
    };
    [CustomWidgetName.list](node: NodeType, name: CustomWidgetName.list): {
        widget: ListWidget;
    };
    [CustomWidgetName.tree](node: NodeType, name: CustomWidgetName.tree): {
        widget: TreeWidget;
    };
}
export type CustomWidgetMap = {
    [CustomWidgetName.booleanViewer]: BooleanViewerWidget;
    [CustomWidgetName.chart]: ChartWidget;
    [CustomWidgetName.chat]: ChatWidget;
    [CustomWidgetName.code]: CodeWidget;
    [CustomWidgetName.controlPanel]: ControlPanelWidget;
    [CustomWidgetName.imagePreview]: ImagePreviewWidget;
    [CustomWidgetName.jsonInput]: JsonInputWidget;
    [CustomWidgetName.list]: ListWidget;
    [CustomWidgetName.string]: Widget;
    [CustomWidgetName.tree]: TreeWidget;
};
export type CustomWidgetOptions = BooleanViewerWidgetOptions | ChartWidgetOptions | ChatWidgetOptions | CodeWidgetOptions | ControlPanelWidgetOptions | ImagePreviewWidgetOptions | JsonInputWidgetOptions | ListWidgetOptions | TreeWidgetOptions;
export interface BooleanViewerWidget extends Widget {
    options: BooleanViewerWidgetOptions;
    type: [CustomWidgetName.booleanViewer];
}
export interface BooleanViewerWidgetOptions {
    hideOnZoom: boolean;
    getComp(): HTMLKulTextfieldElement;
    getValue(): BooleanViewerWidgetValue;
    setProps(props: Partial<HTMLKulTextfieldElement>): void;
    setValue(value: BooleanViewerWidgetValue): void;
}
export declare type BooleanViewerWidgetsSetter = () => {
    [CustomWidgetName.booleanViewer]: BaseWidgetCallback;
};
export type BooleanViewerWidgetValue = string;
export interface ChartWidget extends Widget {
    options: ChartWidgetOptions;
    type: [CustomWidgetName.chart];
}
export interface ChartWidgetOptions {
    hideOnZoom: boolean;
    getComp(): HTMLKulChartElement;
    getValue(): string;
    setProps(props: Partial<HTMLKulChartElement>): void;
    setValue(value: KulDataDataset | string): void;
}
export type ChartWidgetsSetter = () => {
    [CustomWidgetName.chart]: BaseWidgetCallback;
};
export type ChartWidgetValue = string;
export interface ChatWidget extends Widget {
    options: ChatWidgetOptions;
    type: [CustomWidgetName.chat];
}
export interface ChatWidgetOptions {
    hideOnZoom: boolean;
    getComp(): HTMLKulChatElement;
    getValue(): void;
    setProps(props: Partial<HTMLKulChatElement>): void;
    setValue(): void;
}
export type ChatWidgetsSetter = () => {
    [CustomWidgetName.chat]: BaseWidgetCallback;
};
export type ChatWidgetValue = string;
export interface CodeWidget extends Widget {
    options: CodeWidgetOptions;
    type: [CustomWidgetName.code];
}
export interface CodeWidgetOptions {
    hideOnZoom: boolean;
    getComp(): HTMLKulCodeElement;
    getValue(): string;
    setProps(props: Partial<HTMLKulCodeElement>): void;
    setValue(value: Record<string, unknown> | string): void;
}
export type CodeWidgetsSetter = () => {
    [CustomWidgetName.code]: BaseWidgetCallback;
};
export type CodeWidgetValue = string;
export interface ControlPanelWidget extends Widget {
    options: ControlPanelWidgetOptions;
    type: [CustomWidgetName.controlPanel];
}
export interface ControlPanelWidgetOptions {
    getValue(): ControlPanelWidgetValue;
    setValue(value: ControlPanelWidgetValue): void;
}
export type ControlPanelWidgetsSetter = () => {
    [CustomWidgetName.controlPanel]: BaseWidgetCallback;
};
export interface ControlPanelWidgetValue {
    debug: boolean;
    themes: string;
}
export interface JsonInputWidget extends Widget {
    options: JsonInputWidgetOptions;
    type: [CustomWidgetName.jsonInput];
}
export interface JsonInputWidgetOptions {
    hideOnZoom: boolean;
    getValue(): JsonInputWidgetValue;
    setValue(value: JsonInputWidgetValue): void;
}
export declare type JsonInputWidgetsSetter = () => {
    [CustomWidgetName.jsonInput]: BaseWidgetCallback;
};
export type JsonInputWidgetValue = string | Record<string, unknown>;
export interface ImagePreviewWidget extends Widget {
    options: ImagePreviewWidgetOptions;
    type: [CustomWidgetName.imagePreview];
}
export interface ImagePreviewWidgetOptions {
    hideOnZoom: boolean;
    getValue(): ImagePreviewWidgetValue;
    setValue(value: ImagePreviewWidgetValue): void;
}
export declare type ImagePreviewWidgetsSetter = () => {
    [CustomWidgetName.imagePreview]: BaseWidgetCallback;
};
export interface ImagePreviewWidgetValue {
    fileNames: string[];
    images: string[];
}
export interface ListWidget extends Widget {
    options: ListWidgetOptions;
    type: [CustomWidgetName.list];
}
export interface ListWidgetOptions {
    hideOnZoom: boolean;
    getComp(): HTMLKulListElement;
    getValue(): ListWidgetValue;
    setProps(props: Partial<HTMLKulListElement>): void;
    setValue(value: ListWidgetValue): void;
}
export declare type ListWidgetsSetter = () => {
    [CustomWidgetName.list]: BaseWidgetCallback;
};
export type ListWidgetValue = string | KulDataDataset;
export interface TreeWidget extends Widget {
    options: TreeWidgetOptions;
    type: [CustomWidgetName.tree];
}
export interface TreeWidgetOptions {
    hideOnZoom: boolean;
    getComp(): HTMLKulTreeElement;
    getValue(): TreeWidgetValue;
    setProps(props: Partial<HTMLKulTreeElement>): void;
    setValue(value: TreeWidgetValue): void;
}
export declare type TreeWidgetsSetter = () => {
    [CustomWidgetName.tree]: BaseWidgetCallback;
};
export type TreeWidgetValue = string | KulDataDataset;
