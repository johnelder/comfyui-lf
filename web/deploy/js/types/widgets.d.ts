import { KulDataDataset } from './ketchup-lite/components';
export type BaseWidgetCallback = (node: NodeType, name: string) => {
    widget: Widget;
};
export declare enum CustomWidgetName {
    chart = "KUL_CHART",
    code = "KUL_CODE",
    controlPanel = "KUL_CONTROL_PANEL",
    imagePreview = "IMAGE_PREVIEW_B64"
}
export interface CustomWidgetSetters {
    [CustomWidgetName.chart](node: NodeType, name: string): {
        widget: ChartWidget;
    };
    [CustomWidgetName.code](node: NodeType, name: string): {
        widget: CodeWidget;
    };
    [CustomWidgetName.controlPanel](node: NodeType, name: string): {
        widget: ControlPanelWidget;
    };
    [CustomWidgetName.imagePreview](node: NodeType, name: string): {
        widget: ImagePreviewWidget;
    };
}
export type CustomWidgetMap = {
    [CustomWidgetName.chart]: ChartWidget;
    [CustomWidgetName.code]: CodeWidget;
    [CustomWidgetName.controlPanel]: ControlPanelWidget;
    [CustomWidgetName.imagePreview]: ImagePreviewWidget;
};
export type CustomWidgetOptions = ChartWidgetOptions | CodeWidgetOptions | ControlPanelWidgetOptions | ImagePreviewWidgetOptions;
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
