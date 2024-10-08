import { NodeName } from '../types/nodes.js';
import { controlPanelFactory } from '../nodes/controlPanel.js';
import { displayJsonFactory } from '../nodes/displayJson.js';
import { imageHistogramFactory } from '../nodes/imageHistogram.js';
import { loadImagesFactory } from '../nodes/loadImages.js';
import { switchImageFactory } from '../nodes/switchImage.js';
import { switchIntegerFactory } from '../nodes/switchInteger.js';
import { switchJsonFactory } from '../nodes/switchJson.js';
import { switchStringFactory } from '../nodes/switchString.js';
import { writeJsonFactory } from '../nodes/writeJson.js';
import { multipleImageResizeForWebFactory } from '../nodes/multipleImageResizeForWeb.js';
import { blurImagesFactory } from '../nodes/blurImages.js';
import { imageResizeByEdgeFactory } from '../nodes/imageResizeByEdge.js';
import { llmChatFactory } from '../nodes/llmChat.js';
import { stringFactory } from '../nodes/string.js';
/*-------------------------------------------------*/
/*               N o d e s   C l a s s             */
/*-------------------------------------------------*/
export class LFNodes {
    constructor() {
        this.eventHandler = {
            [NodeName.blurImages]: blurImagesFactory.eventHandler,
            [NodeName.displayJson]: displayJsonFactory.eventHandler,
            [NodeName.imageHistogram]: imageHistogramFactory.eventHandler,
            [NodeName.imageResizeByEdge]: imageResizeByEdgeFactory.eventHandler,
            [NodeName.loadImages]: loadImagesFactory.eventHandler,
            [NodeName.multipleImageResizeForWeb]: multipleImageResizeForWebFactory.eventHandler,
            [NodeName.string]: stringFactory.eventHandler,
            [NodeName.switchImage]: switchImageFactory.eventHandler,
            [NodeName.switchInteger]: switchIntegerFactory.eventHandler,
            [NodeName.switchJson]: switchJsonFactory.eventHandler,
            [NodeName.switchString]: switchStringFactory.eventHandler,
            [NodeName.writeJson]: writeJsonFactory.eventHandler,
        };
        this.register = {
            [NodeName.blurImages]: blurImagesFactory.register,
            [NodeName.controlPanel]: controlPanelFactory.register,
            [NodeName.displayJson]: displayJsonFactory.register,
            [NodeName.imageHistogram]: imageHistogramFactory.register,
            [NodeName.imageResizeByEdge]: imageResizeByEdgeFactory.register,
            [NodeName.llmChat]: llmChatFactory.register,
            [NodeName.loadImages]: loadImagesFactory.register,
            [NodeName.multipleImageResizeForWeb]: multipleImageResizeForWebFactory.register,
            [NodeName.string]: stringFactory.register,
            [NodeName.switchImage]: switchImageFactory.register,
            [NodeName.switchInteger]: switchIntegerFactory.register,
            [NodeName.switchJson]: switchJsonFactory.register,
            [NodeName.switchString]: switchStringFactory.register,
            [NodeName.writeJson]: writeJsonFactory.register,
        };
        this.get = {
            eventHandlers: this.eventHandler,
            registrations: this.register,
        };
    }
}
