import json
import random
import requests
from server import PromptServer

category = "LF Nodes/JSON"

class LF_DisplayJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "json": ("JSON", { "tooltip": "JSON object to display."}),
            },
            "hidden": { "node_id": "UNIQUE_ID" } 
        }        

    CATEGORY = "LF Nodes/JSON"
    FUNCTION = "on_exec"
    OUTPUT_NODE = True
    RETURN_TYPES = ()

    def on_exec(self, json:dict, node_id):
        PromptServer.instance.send_sync("lf-displayjson", {
            "node": node_id, 
            "json": json
        })
        return {}

class LF_GetRandomKeyFromJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF, "tooltip": "The seed for the random pick."}),
                "json": ("JSON", { "tooltip": "JSON object from which a random key will be picked."},),
            }
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    RETURN_TYPES = ("STRING",)

    def on_exec(self, json: dict, seed: int):
        random.seed(seed)
        keys = list(json.keys())
        selected_key = random.choice(keys)
        print("Selected Key:", selected_key)  # Debugging line to confirm the selected key
        return (selected_key,)

class LF_SetValueInJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "json": ("JSON", {"tooltip": "JSON Object."}),
                "key": ("STRING", {"tooltip": "Key to update or insert."}),
                "value": ("STRING", {"tooltip": "Value to set."}),
            }
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    RETURN_NAMES = ("json_output",)
    RETURN_TYPES = ("JSON",)

    def on_exec(self, json: dict, key: str, value: str):
        # Set or replace the value for the given key
        json[key] = value

        # Return the updated JSON object
        return (json,)

   
class LF_GetValueFromJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "json": ("JSON", {"tooltip": "JSON Object."}),
                "key": ("STRING", {"tooltip": "Key to select."})
            }
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    RETURN_NAMES = ("json_output", "string_output", "number_output", "int_output", "float_output", "boolean_output")
    RETURN_TYPES = ("JSON", "STRING", "NUMBER", "INT", "FLOAT", "BOOLEAN")

    def on_exec(self, json: dict, key: str):
        # Extract the value associated with the specified key
        value = json.get(key, None)

        # Initialize outputs with coherent values based on the type of 'value'
        json_output = None
        string_output = None
        number_output = None
        int_output = None
        float_output = None
        boolean_output = None

        if value is not None:
            # If the value is a dictionary, pass it as-is for JSON output
            if isinstance(value, dict):
                json_output = value
            else:
                # For non-dictionary types, create a new JSON object with "value" as key and the actual value as value
                json_output = {"value": value}
            
            # Convert the value to a string
            string_output = str(value)
            
            # Attempt to convert string representations of numbers to actual numbers
            if isinstance(value, str):
                try:
                    # Try to convert the string to a float first
                    numeric_value = float(value)
                    number_output = numeric_value
                    float_output = numeric_value
                    int_output = round(numeric_value) if numeric_value.is_integer() else None
                    boolean_output = numeric_value > 0
                except ValueError:
                    # If it's not a number, leave number_output, int_output, and float_output as None
                    pass
            elif isinstance(value, (int, float)):
                number_output = value
                float_output = float(value)
                int_output = round(value) if isinstance(value, float) else value
                boolean_output = value > 0  # True if positive, False if zero or negative
            elif isinstance(value, bool):
                boolean_output = value
            # For non-numeric types, ensure numeric outputs are set to None
            else:
                number_output = None
                int_output = None
                float_output = None

        return (json_output, string_output, number_output, int_output, float_output, boolean_output)

class LF_LoadLocalJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "url": ("STRING", {"default": "", "multiline": True, "tooltip": "The local URL where the JSON file is stored (i.e.: file://C:/myjson.json)."}),
            },
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    RETURN_TYPES = ("JSON",)

    def on_exec(self, url: str):
        if not url.startswith("file://"):
            url = "file://" + url
        
        file_path = requests.utils.unquote(url[7:])
        with open(file_path, 'r') as file:
            data = json.load(file)

        return (data,)
    
class LF_WriteJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "KUL_JSON_INPUT": ("KUL_JSON_INPUT", {"default": "{}", "multiline": True, "tooltip": "Write your JSON content here."}),
            },
            "hidden": { "node_id": "UNIQUE_ID" }
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    OUTPUT_NODE = True
    RETURN_TYPES = ("JSON",)

    def on_exec(self, KUL_JSON_INPUT: str, node_id: str):
        try:
            json_data = json.loads(KUL_JSON_INPUT)
            PromptServer.instance.send_sync("lf-writejson", {
                "node": node_id,
                "json": json_data
            })
            return (json_data,)
        
        except json.JSONDecodeError as e:
            error_message = f"Invalid JSON: {str(e)}"
            PromptServer.instance.send_sync("lf-writejson-error", {
                "node": node_id,
                "error": error_message
            })
            return None
        
        except Exception as e:
            error_message = f"Unexpected error: {str(e)}"
            PromptServer.instance.send_sync("lf-writejson-error", {
                "node": node_id,
                "error": error_message
            })
            return None
        
class LF_StringToJSON:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "string": ("STRING", {"default": "{}", "multiline": True, "tooltip": "Stringified JSON"}),
            },
            "hidden": { "node_id": "UNIQUE_ID" }
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    OUTPUT_NODE = True
    RETURN_TYPES = ("JSON",)

    def on_exec(self, string: str, node_id: str):
        try:
            json_data = json.loads(string)
            return (json_data,)
        
        except json.JSONDecodeError as e:
            error_message = f"Invalid JSON: {str(e)}"
            PromptServer.instance.send_sync("lf-writejson-error", {
                "node": node_id,
                "error": error_message
            })
            return None
        
        except Exception as e:
            error_message = f"Unexpected error: {str(e)}"
            PromptServer.instance.send_sync("lf-writejson-error", {
                "node": node_id,
                "error": error_message
            })
            return None

NODE_CLASS_MAPPINGS = {
    "LF_DisplayJSON": LF_DisplayJSON,
    "LF_GetRandomKeyFromJSON": LF_GetRandomKeyFromJSON,
    "LF_GetValueFromJSON": LF_GetValueFromJSON,
    "LF_SetValueInJSON": LF_SetValueInJSON,
    "LF_LoadLocalJSON": LF_LoadLocalJSON,
    "LF_WriteJSON": LF_WriteJSON,
    "LF_StringToJSON": LF_StringToJSON,
}
NODE_DISPLAY_NAME_MAPPINGS = {
    "LF_DisplayJSON": "Display JSON",
    "LF_GetRandomKeyFromJSON": "Get Random Key From JSON",
    "LF_GetValueFromJSON": "Get Value from JSON",
    "LF_SetValueInJSON" : "Set/Create a Value in a JSON Object",
    "LF_LoadLocalJSON": "Load local JSON",
    "LF_WriteJSON": "Write JSON",
    "LF_StringToJSON": "Convert string to JSON"
}
