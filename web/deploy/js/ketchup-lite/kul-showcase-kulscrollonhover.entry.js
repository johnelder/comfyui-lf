import { r as registerInstance, g as getElement, h, F as Fragment } from './index-9570d2db.js';
import { K as KUL_WRAPPER_ID } from './GenericVariables-0efba181.js';
import { D as DOC_STYLES } from './kul-showcase-data-71c18a32.js';

const SCROLL_ON_HOVER_DATA = {
    nodes: [
        {
            id: '0',
            value: 'KulScrollOnHover',
            children: [
                {
                    id: '1',
                    value: 'Overview',
                    children: [
                        {
                            children: [
                                {
                                    id: '1.1.1',
                                    tagName: 'strong',
                                    value: 'KulScrollOnHover',
                                },
                                {
                                    id: '1.1.2',
                                    value: ' is part of the KulManager class and is a script that enables the scrolling of an element when the mouse hovers over it.',
                                },
                            ],
                            id: '1.1',
                            value: '',
                        },
                    ],
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    id: '',
                                    cssStyle: DOC_STYLES.underConstruction,
                                    value: 'This page is under construction.',
                                },
                                {
                                    cells: {
                                        kulImage: {
                                            kulSizeX: '128px',
                                            kulSizeY: '128px',
                                            shape: 'image',
                                            value: 'science',
                                        },
                                    },
                                    id: '',
                                    value: '',
                                },
                            ],
                            id: '',
                            value: '',
                        },
                    ],
                    id: '',
                    value: '',
                },
            ],
        },
    ],
};

const kulShowcaseKulscrollonhoverCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}:host{display:block;height:100%;width:100%}";
const KulShowcaseKulscrollonhoverStyle0 = kulShowcaseKulscrollonhoverCss;

const KulShowcaseKulscrollonhover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get rootElement() { return getElement(this); }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/
    render() {
        return (h(Fragment, { key: '867e3fe6625850b2c138b5ff98f53f7bfc092eda' }, h("div", { key: 'd9a1e1fbd02603ac29a288720117fd4157dbc188', id: KUL_WRAPPER_ID }, h("kul-article", { key: '9decfc23cc1557841c109754eab6853a523a599a', kulData: SCROLL_ON_HOVER_DATA }))));
    }
};
KulShowcaseKulscrollonhover.style = KulShowcaseKulscrollonhoverStyle0;

export { KulShowcaseKulscrollonhover as kul_showcase_kulscrollonhover };
