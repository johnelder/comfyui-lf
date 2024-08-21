/*-------------------------------------------------*/
/*                  G l o b a l                    */
/*                                                 */
/*   Types inferred from the framework to make TS  */
/*   coding more quick.                            */
/*   A.I. generated, not reliable                  */
/*-------------------------------------------------*/

declare namespace LiteGraph {
  export const NODE_TITLE_HEIGHT: number;
  // Add other properties or methods of LiteGraph here if needed
}

interface Input {
  required: Record<string, boolean>;
}

interface NodeData {
  category: string;
  description: string;
  display_name: string;
  input: Input;
  name: string;
  output: unknown[];
  output_is_list: unknown[];
  output_name: unknown[];
  output_node: boolean;
  python_module: string;
}

interface NodeType {
  lfProps: LFProps;
  comfyClass: string;
  filter: string;
  nodeData: NodeData;
  size?: [number, number];
  properties?: NodeProperties;
  shape?: 'BOX_SHAPE' | 'ROUND_SHAPE' | 'CARD_SHAPE';
  flags?: Record<string, boolean>;
  collapsed?: boolean;
  redrawOnMouse?: boolean;
  widgetsUp?: boolean;
  widgetsStartY?: number;
  clipArea?: boolean;
  resizable?: boolean;
  horizontal?: boolean;
  inputs: SlotInfo[];
  outputs: SlotInfo[];
  computeSize(): number;
  onAdded?(): void;
  onResize?(size: number): void;
  onRemoved?(): void;
  onStart?(): void;
  onStop?(): void;
  onDrawBackground?(ctx: CanvasRenderingContext2D): void;
  onDrawForeground?(ctx: CanvasRenderingContext2D): void;
  onMouseDown?(event: MouseEvent): void;
  onMouseMove?(event: MouseEvent): void;
  onMouseUp?(event: MouseEvent): void;
  onMouseEnter?(event: MouseEvent): void;
  onMouseLeave?(event: MouseEvent): void;
  onDblClick?(event: MouseEvent): void;
  onExecute?(): void;
  onPropertyChanged?(propertyName: string, newValue: any): boolean;
  onGetInputs?(): Array<[string, string]>[];
  onGetOutputs?(): Array<[string, string]>[];
  onSerialize?(data: Record<string, any>): Record<string, any>;
  onSelected?(data: Record<string, any>): void;
  onDeselected?(data: Record<string, any>): void;
  onDropItem?(item: HTMLElement): void;
  onDropFile?(file: File): void;
  onConnectInput?(inputIndex: number, link: LinkInfo): boolean;
  onConnectionsChange?(connection: ConnectionInfo): void;
  addInput(name: string, type: string): void;
  addOutput(name: string, type: string): void;
  getInputData(slotIndex: number): any;
  getOutputData(slotIndex: number): any;
}

interface NodeProperties {
  size?: [number, number]; // [width, height]
  properties?: Record<string, any>; // User-configurable properties
  shape?: 'BOX_SHAPE' | 'ROUND_SHAPE' | 'CARD_SHAPE'; // Shape of the node
  flags?: Record<string, boolean>; // Flags that can be changed by the user
  collapsed?: boolean; // If the node is shown collapsed
  redrawOnMouse?: boolean; // Forces a redraw if the mouse passes over the widget
  widgetsUp?: boolean; // Widgets do not start after the slots
  widgetsStartY?: number; // Widgets should start being drawn from this Y
  clipArea?: boolean; // Clips the content when rendering the node
  resizable?: boolean; // If it can be resized dragging the corner
  horizontal?: boolean; // If the slots should be placed horizontally on the top and bottom of the node
}

interface SlotInfo {
  name: string;
  type: string;
  link?: string | string[]; // Depending if the slot is input or output, contains the id of the link or an array of ids
  label?: string; // Optional, used to rename the name as shown in the canvas
  dir?: 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'; // Optional, direction of the slot
  colorOn?: string; // Color to render when it is connected
  colorOff?: string; // Color to render when it is not connected
}
