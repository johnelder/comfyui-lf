import { r as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host, a as getAssetPath } from './index-9aa60797.js';
import { k as kulManagerInstance, g as getProps, b as KulThemeColorValues, K as KUL_WRAPPER_ID, a as KUL_STYLE_ID, C as CSS_VAR_PREFIX } from './kul-manager-3484bcf1.js';

var KulBadgeProps;
(function (KulBadgeProps) {
    KulBadgeProps["kulImageProps"] = "The props of the image displayed inside the badge.";
    KulBadgeProps["kulLabel"] = "The text displayed inside the badge.";
    KulBadgeProps["kulStyle"] = "Custom style of the component.";
})(KulBadgeProps || (KulBadgeProps = {}));

const kulBadgeCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}:host{--kul_badge_border_radius:var(--kul-badge-border-radius, 30px);--kul_badge_font_family:var(--kul-badge-font-family, var(--kul-font-family));--kul_badge_font_size:var(--kul-badge-font-size, var(--kul-font-size));--kul_badge_min_size:var(--kul-badge-min-size, 1.5em);--kul_badge_padding:var(--kul-badge-padding, 0.25em);--kul_badge_primary_color:var(\n    --kul-badge-primary-color,\n    var(--kul-primary-color)\n  );--kul_badge_text_on_primary_color:var(\n    --kul-badge-text-on-primary-color,\n    var(--kul-text-on-primary-color)\n  );display:block;font-family:var(--kul_badge_font_family);font-size:var(--kul_badge_font_size);position:absolute;top:0;left:0;transform:translate(-50%, -50%)}#kul-component{background-color:var(--kul_badge_primary_color);border-radius:var(--kul_badge_border_radius);color:var(--kul_badge_text_on_primary_color);font-size:0.875em;min-height:var(--kul_badge_min_size);min-width:var(--kul_badge_min_size);padding:var(--kul_badge_padding);text-align:center}kul-image{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}:host(.kul-top-right){bottom:unset;left:unset;right:0;top:0;transform:translate(50%, -50%)}:host(.kul-bottom-right){bottom:0;left:unset;right:0;top:unset;transform:translate(50%, 50%)}:host(.kul-bottom-left){bottom:0;left:0;right:unset;top:unset;transform:translate(-50%, 50%)}:host(.kul-danger){--kul-badge-primary-color:var(--kul-danger-color);--kul-badge-text-on-primary-color:white}:host(.kul-info){--kul-badge-primary-color:var(--kul-info-color);--kul-badge-text-on-primary-color:white}:host(.kul-secondary){--kul-badge-primary-color:var(--kul-secondary-color);--kul-badge-text-on-primary-color:var(--kul-text-on-secondary-color)}:host(.kul-success){--kul-badge-primary-color:var(--kul-success-color);--kul-badge-text-on-primary-color:white}:host(.kul-warning){--kul-badge-primary-color:var(--kul-warning-color);--kul-badge-text-on-primary-color:white}";
const KulBadgeStyle0 = kulBadgeCss;

const KulBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-badge-event", 6);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.kulImageProps = null;
        this.kulLabel = '';
        this.kulStyle = '';
    }
    get rootElement() { return getElement(this); }
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/
    #kulManager = kulManagerInstance();
    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/
    /**
     * Describes event emitted.
     */
    kulEvent;
    onKulEvent(e, eventType) {
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
        });
    }
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/
    /**
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    async getDebugInfo() {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    async getProps(descriptions) {
        return getProps(this, KulBadgeProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/
    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }
    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }
    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }
    render() {
        let imageEl = null;
        if (!this.kulLabel && this.kulImageProps) {
            if (!this.kulImageProps.kulColor) {
                this.kulImageProps.kulColor = `var(${KulThemeColorValues.TEXT_ON_PRIMARY})`;
            }
            imageEl = h("kul-image", { key: 'eb2f091e2a751c57975c7aa6c7429c1130862a58', ...this.kulImageProps });
        }
        return (h(Host, { key: 'bd2a81376af8cd0f48486a72632e790556dcc047' }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, this.#kulManager.theme.setKulStyle(this))) : undefined, h("div", { key: 'e9ea48ab5100a814d00f528c53f85bc513ca30d7', id: KUL_WRAPPER_ID, onClick: (e) => this.onKulEvent(e, 'click') }, this.kulLabel, imageEl)));
    }
    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
};
KulBadge.style = KulBadgeStyle0;

var KulImageProps;
(function (KulImageProps) {
    KulImageProps["kulBadgeProps"] = "Sets the props to show a badge.";
    KulImageProps["kulColor"] = "The color of the icon, defaults to the CSS variable --kul-icon-color.";
    KulImageProps["kulShowSpinner"] = "When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.";
    KulImageProps["kulSizeX"] = "The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).";
    KulImageProps["kulSizeY"] = "The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).";
    KulImageProps["kulStyle"] = "Custom style of the component.";
    KulImageProps["kulValue"] = "Defines the source URL of the image. This property is used to set the image resource that the component should display.";
})(KulImageProps || (KulImageProps = {}));

const kulImageCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}:host{display:block;height:var(--kul_image_height, 100%);margin:auto;min-height:var(--kul_image_height, 100%);min-width:var(--kul_image_width, 100%);position:relative;transition:color 0.2s ease;width:var(--kul_image_width, 100%)}#kul-component{height:100%;margin:auto;position:relative;transition:color 0.2s ease;width:100%}.image{display:block;height:var(--kul_image_height, 100%);margin:auto;position:relative;width:var(--kul_image_width, 100%)}.image__icon{height:var(--kul_image_height, 100%);margin:auto;width:var(--kul_image_width, 100%)}img{display:block;height:var(--kul_image_height, 100%);margin:auto;width:var(--kul_image_width, 100%)}.spinner{height:32px;left:calc(50% - 16px);position:absolute;top:calc(50% - 16px);width:32px}:host(.kul-fit) img{max-width:max-content;object-fit:contain}:host(.kul-cover) img{object-fit:cover}";
const KulImageStyle0 = kulImageCss;

const KulImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-image-event", 6);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.kulBadgeProps = null;
        this.kulColor = `var(${KulThemeColorValues.ICON})`;
        this.kulShowSpinner = false;
        this.kulSizeX = '100%';
        this.kulSizeY = '100%';
        this.kulStyle = '';
        this.kulValue = '';
    }
    get rootElement() { return getElement(this); }
    /*-------------------------------------------------*/
    /*        I n t e r n a l   V a r i a b l e s      */
    /*-------------------------------------------------*/
    #kulManager = kulManagerInstance();
    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/
    /**
     * Describes event emitted.
     */
    kulEvent;
    onKulEvent(e, eventType) {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            originalEvent: e,
            eventType,
        });
    }
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/
    /**
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    async getDebugInfo() {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    async getProps(descriptions) {
        return getProps(this, KulImageProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
    }
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/
    createIcon() {
        const classObj = {
            image__icon: true,
        };
        const style = {
            background: this.kulColor
                ? this.kulColor
                : `var(${KulThemeColorValues.ICON})`,
        };
        if (this.kulValue.indexOf(CSS_VAR_PREFIX) > -1) {
            const themeIcon = this.kulValue.replace('--', '');
            classObj['kul-icon'] = true;
            classObj[themeIcon] = true;
            const icon = this.#kulManager.theme.list[this.#kulManager.theme.name].icons[this.kulValue];
            const path = getAssetPath(`./assets/svg/${icon}.svg`);
            style.mask = `url('${path}') no-repeat center`;
            style.webkitMask = `url('${path}') no-repeat center`;
        }
        else {
            const path = getAssetPath(`./assets/svg/${this.kulValue}.svg`);
            style.mask = `url('${path}') no-repeat center`;
            style.webkitMask = `url('${path}') no-repeat center`;
        }
        return h("div", { class: classObj, style: style });
    }
    createImage() {
        return (h("img", { onLoad: (e) => {
                this.onKulEvent(e, 'load');
            }, src: this.kulValue }));
    }
    isResourceUrl() {
        return !!(this.kulValue &&
            (this.kulValue.indexOf('.') > -1 ||
                this.kulValue.indexOf('/') > -1 ||
                this.kulValue.indexOf('\\') > -1));
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/
    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }
    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }
    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }
    render() {
        if (!this.kulValue) {
            this.#kulManager.debug.logMessage(this, 'Empty image.', 'warning');
            return;
        }
        let el;
        let feedback;
        const isUrl = this.isResourceUrl();
        let spinnerLayout;
        let style;
        if (isUrl) {
            style = {
                '--kul_image_height': this.kulSizeY ? this.kulSizeY : 'auto',
                '--kul_image_width': this.kulSizeX ? this.kulSizeX : '100%',
            };
            el = this.createImage();
        }
        else {
            style = {
                '--kul_image_height': this.kulSizeY ? this.kulSizeY : '100%',
                '--kul_image_width': this.kulSizeX ? this.kulSizeX : '100%',
            };
            el = this.createIcon();
        }
        if (this.kulShowSpinner && isUrl) {
            spinnerLayout = 14;
            feedback = (h("div", { class: "spinner", title: "Image not loaded yet..." }, h("kul-spinner", { kulActive: true, kulDimensions: "3px", kulLayout: spinnerLayout })));
        }
        return (h(Host, { style: style }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, this.#kulManager.theme.setKulStyle(this))) : undefined, feedback, h("div", { id: KUL_WRAPPER_ID }, h("div", { class: "image", onClick: (e) => {
                this.onKulEvent(e, 'click');
            } }, el, this.kulBadgeProps ? (h("kul-badge", { ...this.kulBadgeProps })) : undefined))));
    }
    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
    static get assetsDirs() { return ["assets/svg"]; }
};
KulImage.style = KulImageStyle0;

var KulSpinnerProps;
(function (KulSpinnerProps) {
    KulSpinnerProps["kulActive"] = "Specifies if the spinner is animating.";
    KulSpinnerProps["kulBarVariant"] = "Controls if the component displays as a bar or a spinner.";
    KulSpinnerProps["kulDimensions"] = "Defines the width and height of the spinner. In the bar variant, it specifies only the height.";
    KulSpinnerProps["kulFader"] = "Applies a blending modal over the component to darken or lighten the view, based on the theme.";
    KulSpinnerProps["kulFaderTimeout"] = "Duration needed for the fader to become active.";
    KulSpinnerProps["kulFullScreen"] = "Fills the entire viewport when enabled.";
    KulSpinnerProps["kulLayout"] = "Selects the spinner layout.";
    KulSpinnerProps["kulStyle"] = "Sets a custom style for the component.";
})(KulSpinnerProps || (KulSpinnerProps = {}));

const kulSpinnerCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}:host{--kul_spinner_border_color:var(\n    --kul-spinner-border-color,\n    var(--kul-border-color)\n  );display:block}#loading-wrapper-master{background:transparent;opacity:0;overflow:hidden;transition:opacity 0.8s ease-in, background-color 1s ease-in;transform:translatez(0)}#loading-wrapper-master.spinner-version>#loading-wrapper-master-spinner{width:100%;height:100%;position:relative}#loading-wrapper-master.spinner-version>#loading-wrapper-master-spinner div{margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transition:top 0.25s ease-in-out, opacity 0.25s ease-in-out}:host([kul-active]) #loading-wrapper-master{opacity:1}:host([kul-active]) #loading-wrapper-master.spinner-version>#loading-wrapper-master-spinner{opacity:1;overflow:hidden}:host([kul-active]) #loading-wrapper-master[kul-bar-variant]>#loading-wrapper-master-bar{opacity:1}:host([kul-active]) #loading-wrapper-master[kul-bar-variant]>#loading-wrapper-master-bar div.spinner-bar-v2{animation:sk-spinner-bar-v2 20s;background-color:var(--kul-spinner-color);left:-1%}:host([kul-active]) #loading-wrapper-master.loading-wrapper-big-wait{background:rgba(128, 128, 128, 0.25)}:host([kul-active]) #loading-wrapper-master.loading-wrapper-big-wait>#loading-wrapper-master-spinner{font-size:10px}:host([kul-full-screen]) #loading-wrapper-master{top:0;left:0;bottom:0;right:0;pointer-events:none;position:fixed;width:100%;z-index:9999}:host([kul-full-screen]) #loading-wrapper-master div,:host([kul-full-screen]) #loading-wrapper-master.spinner-version #loading-wrapper-master-spinner{position:fixed;transition:opacity 1.25s ease-in, background-color 1s ease-in, top 0.5s ease-in}.spinner-v1{border-top:1em solid var(--kul_spinner_border_color);border-right:1em solid var(--kul_spinner_border_color);border-bottom:1em solid var(--kul_spinner_border_color);border-left:1em solid var(--kul-spinner-color);transform:translatez(0);animation:sk-spinner-v1 1.1s infinite linear}.spinner-v1,.spinner-v1:after{border-radius:50%;width:7em;height:7em}@keyframes sk-spinner-v1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-v2,.spinner-v2:before,.spinner-v2:after{border-radius:50%;width:2em;height:2em;animation-fill-mode:both;animation:sk-spinner-v2 1.4s infinite ease-in-out;transform:translatez(0)}.spinner-v2{backface-visibility:hidden;color:var(--kul-spinner-color);font-size:1em;transform:translateY(-2.5em);animation-delay:-0.16s}.spinner-v2:before,.spinner-v2:after{content:\"\";position:absolute;top:0}.spinner-v2:before{left:-4em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner-v2:after{left:4em}@keyframes sk-spinner-v2{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}.spinner-v3{color:var(--kul-spinner-color);font-size:6em;width:1em;height:1em;border-radius:50%;transform:translatez(0);animation:sk-spinner-v3 1.7s infinite ease, sk-spinner-v3-1 1.7s infinite ease}@keyframes sk-spinner-v3{0%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}5%,95%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}10%,59%{box-shadow:0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em}20%{box-shadow:0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em}38%{box-shadow:0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}100%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}}@keyframes sk-spinner-v3-1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-v4{color:var(--kul-spinner-color);width:1em;height:1em;border-radius:50%;animation:sk-spinner-v4 1.3s infinite linear;transform:translatez(0)}@keyframes sk-spinner-v4{0%,100%{box-shadow:0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em}75%{box-shadow:0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0}87.5%{box-shadow:0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em}}.spinner-v5{margin-top:-0.8em;width:9em;height:9em;border-radius:50%;background:linear-gradient(to right, var(--kul-spinner-color) 10%, rgba(255, 255, 255, 0) 42%);animation:sk-spinner-v5 1.4s infinite linear;transform:translatez(0)}.spinner-v5:before{width:50%;height:50%;background:var(--kul-spinner-color);border-radius:100% 0 0 0;position:absolute;top:0;left:0;content:\"\"}.spinner-v5:after{background:var(--kul_spinner_border_color);width:75%;height:75%;border-radius:50%;content:\"\";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}@keyframes sk-spinner-v5{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spinner-v6,.spinner-v6:before,.spinner-v6:after{background:var(--kul-spinner-color);animation:sk-spinner-v6 1s infinite ease-in-out;width:1em;height:4em}.spinner-v6{color:var(--kul-spinner-color);margin-top:2em;transform:translatez(0);animation-delay:-0.16s}.spinner-v6:before,.spinner-v6:after{position:absolute;top:0;content:\"\"}.spinner-v6:before{left:-1.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner-v6:after{left:1.5em}@keyframes sk-spinner-v6{0%,80%,100%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}.spinner-v7{width:6em;height:6em;position:relative;animation:sk-spinner-v7 2.5s infinite linear both}.sk-spinner-v7-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-spinner-v7-dot 2s infinite ease-in-out both}.sk-spinner-v7-dot:before{content:\"\";display:block;width:25%;height:25%;background-color:var(--kul-spinner-color);border-radius:100%;animation:sk-spinner-v7-dot-before 2s infinite ease-in-out both}.sk-spinner-v7-dot:nth-child(1){animation-delay:-1.1s}.sk-spinner-v7-dot:nth-child(2){animation-delay:-1s}.sk-spinner-v7-dot:nth-child(3){animation-delay:-0.9s}.sk-spinner-v7-dot:nth-child(4){animation-delay:-0.8s}.sk-spinner-v7-dot:nth-child(5){animation-delay:-0.7s}.sk-spinner-v7-dot:nth-child(6){animation-delay:-0.6s}.sk-spinner-v7-dot:nth-child(1):before{animation-delay:-1.1s}.sk-spinner-v7-dot:nth-child(2):before{animation-delay:-1s}.sk-spinner-v7-dot:nth-child(3):before{animation-delay:-0.9s}.sk-spinner-v7-dot:nth-child(4):before{animation-delay:-0.8s}.sk-spinner-v7-dot:nth-child(5):before{animation-delay:-0.7s}.sk-spinner-v7-dot:nth-child(6):before{animation-delay:-0.6s}@keyframes sk-spinner-v7{100%{transform:rotate(360deg)}}@keyframes sk-spinner-v7-dot{80%,100%{transform:rotate(360deg)}}@keyframes sk-spinner-v7-dot-before{50%{transform:scale(0.4)}100%,0%{transform:scale(1)}}.spinner-v8{width:8em;height:8em;background-color:var(--kul-spinner-color);animation:sk-spinner-v8 1.2s infinite ease-in-out}@keyframes sk-spinner-v8{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.spinner-v9{width:8em;height:8em;position:relative}.sk-spinner-v9-bounce1,.sk-spinner-v9-bounce2{width:100%;height:100%;border-radius:50%;background-color:var(--kul-spinner-color);opacity:0.6;position:absolute;top:0;left:0;animation:sk-spinner-v9 2s infinite ease-in-out}.sk-spinner-v9-bounce2{animation-delay:-1s}@keyframes sk-spinner-v9{0%,100%{transform:scale(0)}50%{transform:scale(1)}}.spinner-v10{width:8em;height:8em;position:relative}.sk-spinner-v10-cube1,.sk-spinner-v10-cube2{backface-visibility:hidden;background-color:var(--kul-spinner-color);width:2em;height:2em;position:absolute;top:0;left:0;bottom:unset !important;right:unset !important;animation:sk-spinner-v10 1.8s infinite ease-in-out}.sk-spinner-v10-cube2{animation-delay:-0.9s}@keyframes sk-spinner-v10{25%{transform:translateX(5em) rotate(-90deg) scale(0.5)}50%{transform:translateX(5em) translateY(5em) rotate(-179deg)}50.1%{transform:translateX(5em) translateY(5em) rotate(-180deg)}75%{transform:translateX(0px) translateY(5em) rotate(-270deg) scale(0.5)}100%{transform:rotate(-360deg)}}.spinner-v11{width:8em;height:8em;background-color:var(--kul-spinner-color);border-radius:100%;animation:sk-spinner-v11 1s infinite ease-in-out}@keyframes sk-spinner-v11{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}.spinner-v12{width:8em;height:8em;position:relative;text-align:center;animation:sk-spinner-v12 2s infinite linear}.sk-spinner-v12-dot1,.sk-spinner-v12-dot2{width:60%;height:60%;display:inline-block;position:absolute;top:0 !important;left:unset !important;bottom:unset !important;right:unset !important;background-color:var(--kul-spinner-color);border-radius:100%;animation:sk-spinner-v12-1 2s infinite ease-in-out}.sk-spinner-v12-dot2{top:auto !important;bottom:0 !important;left:unset !important;right:unset !important;animation-delay:-1s}@keyframes sk-spinner-v12{100%{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@keyframes sk-spinner-v12-1{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.spinner-v13{width:7em;height:7em}.spinner-v13 .sk-spinner-v13-cube{backface-visibility:hidden;background-color:var(--kul-spinner-color);float:left;height:33%;width:33%;position:relative !important;animation:sk-spinner-v13 1.3s infinite ease-in-out;outline:1px solid transparent}.spinner-v13 .sk-spinner-v13-cube1{animation-delay:0.2s}.spinner-v13 .sk-spinner-v13-cube2{animation-delay:0.3s}.spinner-v13 .sk-spinner-v13-cube3{animation-delay:0.4s}.spinner-v13 .sk-spinner-v13-cube4{animation-delay:0.1s}.spinner-v13 .sk-spinner-v13-cube5{animation-delay:0.2s}.spinner-v13 .sk-spinner-v13-cube6{animation-delay:0.3s}.spinner-v13 .sk-spinner-v13-cube7{animation-delay:0s}.spinner-v13 .sk-spinner-v13-cube8{animation-delay:0.1s}.spinner-v13 .sk-spinner-v13-cube9{animation-delay:0.2s}@keyframes sk-spinner-v13{0%,70%,100%{transform:scale3D(1, 1, 1)}35%{transform:scale3D(0, 0, 1)}}.spinner-v14{width:8em;height:8em;position:relative}.spinner-v14 .sk-spinner-v14-circle{width:100%;height:100%;position:absolute;left:0;top:0}.spinner-v14 .sk-spinner-v14-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:var(--kul-spinner-color);border-radius:100%;-webkit-animation:sk-spinner-v14-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-spinner-v14-circleFadeDelay 1.2s infinite ease-in-out both}.spinner-v14 .sk-spinner-v14-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.spinner-v14 .sk-spinner-v14-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.spinner-v14 .sk-spinner-v14-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.spinner-v14 .sk-spinner-v14-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.spinner-v14 .sk-spinner-v14-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.spinner-v14 .sk-spinner-v14-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.spinner-v14 .sk-spinner-v14-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.spinner-v14 .sk-spinner-v14-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.spinner-v14 .sk-spinner-v14-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.spinner-v14 .sk-spinner-v14-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.spinner-v14 .sk-spinner-v14-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.spinner-v14 .sk-spinner-v14-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner-v14 .sk-spinner-v14-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner-v14 .sk-spinner-v14-circle4:before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.spinner-v14 .sk-spinner-v14-circle5:before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.spinner-v14 .sk-spinner-v14-circle6:before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.spinner-v14 .sk-spinner-v14-circle7:before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.spinner-v14 .sk-spinner-v14-circle8:before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.spinner-v14 .sk-spinner-v14-circle9:before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.spinner-v14 .sk-spinner-v14-circle10:before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.spinner-v14 .sk-spinner-v14-circle11:before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.spinner-v14 .sk-spinner-v14-circle12:before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@keyframes sk-spinner-v14-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}.spinner-bar-v1{height:1em;width:100%;position:absolute;overflow:hidden;transform:translatez(0)}.spinner-bar-v1:before{display:block;position:absolute;content:\"\";width:25%;height:1em;animation:sk-spinner-bar-v1 5s linear infinite;transform:translatez(0)}@keyframes sk-spinner-bar-v1{from{left:-25%;background:var(--kul-spinner-color);background:linear-gradient(to left, var(--kul-spinner-color) 0, rgba(255, 255, 255, 0) 100%)}50%{left:100%}to{left:-25%;background:var(--kul-spinner-color);background:linear-gradient(to right, var(--kul-spinner-color) 0, rgba(255, 255, 255, 0) 100%)}}.spinner-bar-v2{box-shadow:-1px 0px 2px 2px var(--kul-spinner-color);height:calc(1em - 2px);position:absolute;overflow:hidden;animation-timing-function:cubic-bezier(0.19, 0.78, 0.19, 0.78);transform:translatez(0);animation:none;width:100%}@keyframes sk-spinner-bar-v2{from{left:-100%}to{left:-1%}}:host(.kul-unclickable) #loading-wrapper-master{cursor:wait;pointer-events:all}";
const KulSpinnerStyle0 = kulSpinnerCss;

const KulSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-spinner-event", 6);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.kulActive = false;
        this.kulBarVariant = false;
        this.kulDimensions = '';
        this.kulFader = false;
        this.kulFaderTimeout = 3500;
        this.kulFullScreen = false;
        this.kulLayout = 1;
        this.kulStyle = '';
    }
    get rootElement() { return getElement(this); }
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/
    #kulManager = kulManagerInstance();
    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/
    kulEvent;
    onKulEvent(e, eventType) {
        this.kulEvent.emit({
            comp: this,
            id: this.rootElement.id,
            originalEvent: e,
            eventType,
        });
    }
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/
    /**
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    async getDebugInfo() {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    async getProps(descriptions) {
        return getProps(this, KulSpinnerProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    async refresh() {
        forceUpdate(this);
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/
    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }
    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }
    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }
    componentDidUpdate() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            root.querySelector('#loading-wrapper-master').classList.remove('loading-wrapper-big-wait');
        }
    }
    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            if (this.kulFader) {
                setTimeout(function () {
                    root.querySelector('#loading-wrapper-master').classList.add('loading-wrapper-big-wait');
                }, this.kulFaderTimeout);
            }
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }
    render() {
        let masterClass = '';
        let wrapperClass = '';
        let spinnerClass = '';
        let spinnerEl = [];
        let elStyle = undefined;
        if (this.kulBarVariant) {
            wrapperClass = 'loading-wrapper-master-bar';
            spinnerClass = 'spinner-bar-v' + this.kulLayout;
        }
        else {
            masterClass += ' spinner-version';
            wrapperClass = 'loading-wrapper-master-spinner';
            spinnerClass = 'spinner-v' + this.kulLayout;
            if (this.kulLayout === 7) {
                spinnerEl = [
                    h("div", { key: '3156674fc3ca5a67369227096506f754e73f822b', class: "sk-spinner-v7-dot" }),
                    h("div", { key: 'b3b0c77be344921b2095b300f299d698f6724c28', class: "sk-spinner-v7-dot" }),
                    h("div", { key: '55ecfc6d0fd52c53484b8a98225395f952cc444d', class: "sk-spinner-v7-dot" }),
                    h("div", { key: '93aad70eebd22fcf6df0de30a5b74a3441a7c83b', class: "sk-spinner-v7-dot" }),
                    h("div", { key: 'b1a8d2e77a63b99384d8898b8eafc9f4c07614f9', class: "sk-spinner-v7-dot" }),
                    h("div", { key: 'd0908690d912208ce7f44cb70c17a8bf0f1e95c4', class: "sk-spinner-v7-dot" }),
                ];
            }
            if (this.kulLayout === 9) {
                spinnerEl = [
                    h("div", { key: '98447f180ae9fd5a09877f953fdb2740072b2ff7', class: "sk-spinner-v9-bounce1" }),
                    h("div", { key: '9d0576ca9c363b76229b65f2a4ad136051c71a74', class: "sk-spinner-v9-bounce2" }),
                ];
            }
            if (this.kulLayout === 10) {
                spinnerEl = [
                    h("div", { key: '95d8167fdda9601f0908138ad4ff43b2ce6e8778', class: "sk-spinner-v10-cube1" }),
                    h("div", { key: 'f0e25e63031085cb4e83c49543cddf79d755b2ab', class: "sk-spinner-v10-cube2" }),
                ];
            }
            if (this.kulLayout === 12) {
                spinnerEl = [
                    h("div", { key: '00c20acfdfd84837ac04a10843b982939b22cdd8', class: "sk-spinner-v12-dot1" }),
                    h("div", { key: '5fdc9ab526c970ec64210b6e5288f70b7ec17991', class: "sk-spinner-v12-dot2" }),
                ];
            }
            if (this.kulLayout === 13) {
                spinnerEl = [
                    h("div", { key: '2f5c6bc3b7a4fc01ead196408025b077286e42f8', class: "sk-spinner-v13-cube sk-spinner-v13-cube1" }),
                    h("div", { key: 'e92c4a32b6ac27c3175cfc0629d74f642b1e39af', class: "sk-spinner-v13-cube sk-spinner-v13-cube2" }),
                    h("div", { key: 'a664c2d6439a6bc112a83984006b0fdf0627c920', class: "sk-spinner-v13-cube sk-spinner-v13-cube3" }),
                    h("div", { key: '565603729ba7e76c2f3f19b22439c9cfd1df9eb3', class: "sk-spinner-v13-cube sk-spinner-v13-cube4" }),
                    h("div", { key: 'c0595138e08635fa35b271eed32f2bdc0fb35fa4', class: "sk-spinner-v13-cube sk-spinner-v13-cube5" }),
                    h("div", { key: '4b8927eec57a20df8888701704abd2180b121cbc', class: "sk-spinner-v13-cube sk-spinner-v13-cube6" }),
                    h("div", { key: '415f4f3ff95b8f46fc1db324fb110ba7bf7a429f', class: "sk-spinner-v13-cube sk-spinner-v13-cube7" }),
                    h("div", { key: '2dce29cd132c7946fc7838446448b580562cf02d', class: "sk-spinner-v13-cube sk-spinner-v13-cube8" }),
                    h("div", { key: '6ba1e1184ad87a0aef6dd53a0f09d2ac4a032f19', class: "sk-spinner-v13-cube sk-spinner-v13-cube9" }),
                ];
            }
            if (this.kulLayout === 14) {
                spinnerEl = [
                    h("div", { key: '651f832eaf5e9a6e5ffd4a30839de4bd11a388e7', class: "sk-spinner-v14-circle1 sk-spinner-v14-circle" }),
                    h("div", { key: 'b15abe9a76fcd9464f88c31305941a96c6aae91e', class: "sk-spinner-v14-circle2 sk-spinner-v14-circle" }),
                    h("div", { key: '28b5e5b1395e77803cb40f7bd6c8d7a46190490a', class: "sk-spinner-v14-circle3 sk-spinner-v14-circle" }),
                    h("div", { key: '50a8cf589af85ad3ed831dd329884386919171ba', class: "sk-spinner-v14-circle4 sk-spinner-v14-circle" }),
                    h("div", { key: '6fd6fd41fb9c0d5098e5eb7ff69995fffeab239e', class: "sk-spinner-v14-circle5 sk-spinner-v14-circle" }),
                    h("div", { key: 'f9767b93e0c87ea0e33db743330a8f4e5f4fff93', class: "sk-spinner-v14-circle6 sk-spinner-v14-circle" }),
                    h("div", { key: 'dfa9651b0d8bd1789e38a3c6d8e92de4636ada38', class: "sk-spinner-v14-circle7 sk-spinner-v14-circle" }),
                    h("div", { key: 'd68e0a9252a3cfd6ef49f23ea18b9e3d06a836c6', class: "sk-spinner-v14-circle8 sk-spinner-v14-circle" }),
                    h("div", { key: 'e6c5987817764a03914bf90b1fbbde0857aa1d92', class: "sk-spinner-v14-circle9 sk-spinner-v14-circle" }),
                    h("div", { key: '235c03df60ce983377ea079c75deadb9be4ee7ea', class: "sk-spinner-v14-circle10 sk-spinner-v14-circle" }),
                    h("div", { key: '408dcd9c662112088b41cf3e85d48b34cdf43405', class: "sk-spinner-v14-circle11 sk-spinner-v14-circle" }),
                    h("div", { key: '3c63d13bbf866fb4f156acf7277ca1812961567c', class: "sk-spinner-v14-circle12 sk-spinner-v14-circle" }),
                ];
            }
        }
        if (!this.kulFullScreen) {
            elStyle = {
                height: '100%',
                width: '100%',
            };
        }
        if (this.kulDimensions) {
            elStyle = {
                ...elStyle,
                fontSize: this.kulDimensions,
            };
        }
        else if (!this.kulBarVariant) {
            elStyle = {
                ...elStyle,
                fontSize: '16px',
            };
        }
        else {
            elStyle = {
                ...elStyle,
                fontSize: '3px',
            };
        }
        return (h(Host, { key: 'caca3f1aa8f2be3dcf5f19c2a4383238deedf012', style: elStyle }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, this.#kulManager.theme.setKulStyle(this))) : undefined, h("div", { key: '05415048c5464838dfa5c1a9538efd9ff6715aa0', id: KUL_WRAPPER_ID, style: elStyle }, h("div", { key: '65d6f9a8e2144905de04aeefc44d11ab02dd086c', id: "loading-wrapper-master", class: masterClass, style: elStyle }, h("div", { key: '0be4eb77919e7ab62bffd0e0de07f31d185d4f90', id: wrapperClass, style: elStyle }, h("div", { key: '13d7f56e86ad0695741e8c4171d281ef9e9598c5', class: spinnerClass }, spinnerEl))))));
    }
    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
};
KulSpinner.style = KulSpinnerStyle0;

export { KulBadge as kul_badge, KulImage as kul_image, KulSpinner as kul_spinner };
