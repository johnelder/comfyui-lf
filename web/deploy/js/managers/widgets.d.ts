export declare class LFWidgets {
    #private;
    constructor();
    add: {
        KUL_CHART: (nodeType: NodeType) => any;
        KUL_CODE: (nodeType: NodeType) => any;
        KUL_CONTROL_PANEL: (nodeType: NodeType) => any;
    };
    option: {
        KUL_CHART: (chart: HTMLKulChartElement) => {
            hideOnZoom: boolean;
            getComp(): HTMLKulChartElement;
            getValue(): string;
            setProps(props: Partial<HTMLKulChartElement>): void;
            setValue(value: Record<string, unknown> | string): void;
        };
        KUL_CODE: (code: HTMLKulCodeElement) => {
            hideOnZoom: boolean;
            getComp(): HTMLKulCodeElement;
            getValue(): string;
            setProps(props: Partial<HTMLKulCodeElement>): void;
            setValue(value: Record<string, unknown> | string): void;
        };
        KUL_CONTROL_PANEL: () => {
            getValue(): {
                debug: boolean;
                themes: string;
            };
            setValue(value: any): void;
        };
    };
    resizerHandler: {
        KUL_CHART: (nodeType: NodeType) => void;
    };
    set: {
        KUL_CHART: () => {
            KUL_CHART: (nodeType: NodeType, name: string) => {
                widget: Widget;
            };
        };
        KUL_CODE: () => {
            KUL_CODE: (nodeType: NodeType, name: string) => {
                widget: Widget;
            };
        };
        KUL_CONTROL_PANEL: () => {
            KUL_CONTROL_PANEL: (nodeType: NodeType, name: string) => {
                widget: Widget;
            };
        };
    };
    get: {
        adders: {
            KUL_CHART: (nodeType: NodeType) => any;
            KUL_CODE: (nodeType: NodeType) => any;
            KUL_CONTROL_PANEL: (nodeType: NodeType) => any;
        };
        options: {
            KUL_CHART: (chart: HTMLKulChartElement) => {
                hideOnZoom: boolean;
                getComp(): HTMLKulChartElement;
                getValue(): string;
                setProps(props: Partial<HTMLKulChartElement>): void;
                setValue(value: Record<string, unknown> | string): void;
            };
            KUL_CODE: (code: HTMLKulCodeElement) => {
                hideOnZoom: boolean;
                getComp(): HTMLKulCodeElement;
                getValue(): string;
                setProps(props: Partial<HTMLKulCodeElement>): void;
                setValue(value: Record<string, unknown> | string): void;
            };
            KUL_CONTROL_PANEL: () => {
                getValue(): {
                    debug: boolean;
                    themes: string;
                };
                setValue(value: any): void;
            };
        };
        resizerHandlers: {
            KUL_CHART: (nodeType: NodeType) => void;
        };
        setters: {
            KUL_CHART: () => {
                KUL_CHART: (nodeType: NodeType, name: string) => {
                    widget: Widget;
                };
            };
            KUL_CODE: () => {
                KUL_CODE: (nodeType: NodeType, name: string) => {
                    widget: Widget;
                };
            };
            KUL_CONTROL_PANEL: () => {
                KUL_CONTROL_PANEL: (nodeType: NodeType, name: string) => {
                    widget: Widget;
                };
            };
        };
    };
}
