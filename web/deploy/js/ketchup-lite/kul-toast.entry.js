import { r as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host } from './index-9aa60797.js';
import { k as kulManagerInstance, g as getProps, K as KUL_WRAPPER_ID, a as KUL_STYLE_ID } from './kul-manager-3484bcf1.js';

var KulToastProps;
(function (KulToastProps) {
    KulToastProps["kulCloseCallback"] = "Callback invoked when the toast is closed.";
    KulToastProps["kulCloseIcon"] = "Sets the props of the clickable icon used to close the toast.";
    KulToastProps["kulIcon"] = "Sets the props of an optional icon that will be displayed along with the message.";
    KulToastProps["kulMessage"] = "Sets the message of the toast.";
    KulToastProps["kulStyle"] = "Enables customization of the component's style.";
    KulToastProps["kulTimer"] = "When kulTimer is set with a number, the toast will close itself after the specified amount of time (in ms).";
})(KulToastProps || (KulToastProps = {}));

const kulToastCss = ".ripple-surface{cursor:pointer;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.ripple{animation:ripple 0.675s ease-out;border-radius:50%;pointer-events:none;position:absolute;transform:scale(0)}@keyframes ripple{to{opacity:0;transform:scale(4)}}::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background-color:var(--kul-primary-color);-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}::-webkit-scrollbar-track{background-color:var(--kul-background-color)}:host{--kul_toast_accent_color:var(\n    --kul-toast-accent-color,\n    var(--kul-info-color)\n  );--kul_toast_accent_height:var(--kul-toast-accent-height, 4px);--kul_toast_icon_opacity:var(--kul-toast-icon-opacity, 0.625);--kul_toast_slidein_from:var(--kul-toast-slidein-from, translateX(100%));--kul_toast_slidein_to:var(--kul-toast-slidein-to, translateX(0));animation:slideIn 250ms ease-out;-webkit-backdrop-filter:blur(3.5px);backdrop-filter:blur(3.5px);background-color:rgba(var(--kul-background-color-rgb), 0.375);border-radius:4px;box-shadow:var(--kul-box-shadow);box-sizing:border-box;display:block;height:100%;width:100%}#kul-component{height:100%;width:100%}.toast{height:100%;width:100%}.toast__accent{background-color:var(--kul_toast_accent_color);height:var(--kul_toast_accent_height);width:100%}.toast__accent--temporary{animation:reduceWidthToZero linear 5s forwards}.toast__message-wrapper{align-content:center;box-sizing:border-box;display:flex;height:100%;padding:12px}.toast__icon{margin:auto 8px;opacity:var(--kul_toast_icon_opacity)}.toast__icon--close{cursor:pointer;margin:auto 8px auto auto;position:relative}.toast__icon--close:hover:before{background-color:rgba(var(--kul-danger-color-rgb), 0.175);border-radius:50%;content:\"\";left:-3px;padding:12px;position:absolute;top:-3px}.toast__message{padding:12px 12px 12px 0}@media only screen and (max-width: 600px){.host{animation:slideUp 250ms ease-out}}@keyframes reduceWidthToZero{0%{width:100%}100%{width:0}}@keyframes slideIn{0%{transform:var(--kul_toast_slidein_from)}100%{transform:var(--kul_toast_slidein_to)}}@keyframes slideUp{0%{transform:var(--kul_toast_slideup_from)}100%{transform:var(--kul_toast_slideup_to)}}";
const KulToastStyle0 = kulToastCss;

const KulToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.kulEvent = createEvent(this, "kul-toast-event", 6);
        this.debugInfo = {
            endTime: 0,
            renderCount: 0,
            renderEnd: 0,
            renderStart: 0,
            startTime: performance.now(),
        };
        this.kulCloseIcon = {
            kulSizeX: '18px',
            kulSizeY: '18px',
            kulValue: 'clear',
        };
        this.kulCloseCallback = () => {
            const e = new CustomEvent('unmount');
            this.onKulEvent(e, 'unmount');
            this.kulEvent.emit({
                comp: this,
                eventType: 'unmount',
                id: this.rootElement.id,
                originalEvent: e,
            });
            this.rootElement.remove();
        };
        this.kulIcon = {
            kulSizeX: '18px',
            kulSizeY: '18px',
            kulValue: 'info',
        };
        this.kulTimer = null;
        this.kulMessage = 'Wow, such empty.';
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
     * Retrieves the debug information reflecting the current state of the component.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves to a KulDebugComponentInfo object containing debug information.
     */
    async getDebugInfo() {
        return this.debugInfo;
    }
    /**
     * Retrieves the properties of the component, with optional descriptions.
     * @param {boolean} descriptions - If true, returns properties with descriptions; otherwise, returns properties only.
     * @returns {Promise<GenericObject>} A promise that resolves to an object where each key is a property name, optionally with its description.
     */
    async getProps(descriptions) {
        return getProps(this, KulToastProps, descriptions);
    }
    /**
     * Triggers a re-render of the component to reflect any state changes.
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
        if (this.kulTimer) {
            setTimeout(() => { }, this.kulTimer);
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }
    render() {
        return (h(Host, { key: '7b49831aab9091e6a929c0dc9716c0fc404a0d8c' }, this.kulStyle ? (h("style", { id: KUL_STYLE_ID }, this.#kulManager.theme.setKulStyle(this))) : undefined, h("div", { key: '13ad749f25060a267f55ecf0cf00562ab0752917', id: KUL_WRAPPER_ID }, h("div", { key: 'b8340cf893804a8d5c72ed3a8b6ca604987924e3', class: "toast" }, h("div", { key: '14e65c4f120a8d4203c316ff16c8ddba13c2b2c5', class: `toast__accent ${this.kulTimer ? 'toast__accent--temporary' : ''}` }), h("div", { key: '7d70926440cc0dd5b9f08a58c4739a39875319ae', class: "toast__message-wrapper" }, this.kulIcon ? (h("div", { class: "toast__icon" }, h("kul-image", { ...this.kulIcon }))) : undefined, this.kulMessage ? (h("div", { class: "toast__message" }, this.kulMessage)) : undefined, this.kulCloseIcon ? (h("div", { class: "toast__icon toast__icon--close", onClick: () => this.kulCloseCallback() }, h("kul-image", { ...this.kulCloseIcon }))) : undefined)))));
    }
    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
};
KulToast.style = KulToastStyle0;

export { KulToast as kul_toast };
