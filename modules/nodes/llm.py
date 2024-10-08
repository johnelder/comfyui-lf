import json
import torch
import requests

from ..utils.llm import *
from ..constants.llm import *

category = "LF Nodes/LLM"

class LF_CharacterImpersonator:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "temperature" : ("FLOAT", {"max": 1.901, "min": 0.1, "step": 0.1, "display": "number", "round": 0.1, "default": 0.7, "tooltip": "Controls the randomness of the generated text. Higher values make the output more random."}),
                "max_tokens" : ("INT", {"max": 8000, "min": 20, "step": 10, "default": 500, "display": "number", "tooltip": "Limits the length of the generated text. Adjusting this value can help control the verbosity of the output."}),
                "prompt": ("STRING", {"multiline": True, "default": "", "tooltip": "The initial input or question that guides the generation process. Can be a single line or multiple lines of text."}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff, "tooltip": "Determines the starting point for generating random numbers. Setting a specific seed ensures reproducibility of results."}),
                "character_bio": ("STRING", {"multiline": True, "default": "", "tooltip": "Biographical details of the character to be impersonated. Helps in shaping the tone and content of the generated text."}),
                "url": ("STRING", {"multiline": True, "default": "http://localhost:5001/v1/chat/completions", "tooltip": "URL of the local endpoint where the request is sent."}),
            },
            "optional":{
                "image" : ("IMAGE", {"default": None, "tooltip": "An optional image that can be included in the generation process to influence the output based on visual cues."})
            }
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    RETURN_NAMES = ("request_json", "response_json", "answer")
    RETURN_TYPES = ("JSON", "JSON", "STRING")

    def on_exec(self, temperature, max_tokens, prompt, seed, character_bio, url, image=None):
        if isinstance(image, torch.Tensor):
            image = tensor_to_b64(image)

        system = get_character_impersonator_system(character_bio)

        content = []
        if image:
            image_url = f"data:image/jpeg;base64,{image}"
            content.append({"type": "image_url", "image_url": {"url":image_url}})
        if prompt:
            content.append({"type": "text", "text": prompt})


        request = {
            "temperature": temperature,
            "max_tokens": max_tokens,
            "seed": seed,
            "messages": [
              {
                "role": "system",
                "content": system
              },
              {
                "role": "user",
                "content": content
              },
            ],
        }

        response = requests.post(url, headers=headers, data=json.dumps(request))
        response_data = response.json()
        status_code, method, message = handle_response(response, method="POST")
        if status_code != 200:
            message = f"Whoops! Request failed with status code {status_code} and method {method}."

        return (request, response_data, message)

class LF_ImageClassifier:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image" : ("IMAGE", {"default": None, "tooltip": "The image that the LLM will try to classify."}),
                "temperature" : ("FLOAT", {"max": 1.901, "min": 0.1, "step": 0.1, "display": "number", "round": 0.1, "default": 0.7, "tooltip": "Controls the randomness of the generated text. Higher values make the output more random."}),
                "max_tokens" : ("INT", {"max": 8000, "min": 20, "step": 10, "default": 500, "display": "number", "tooltip": "Limits the length of the generated text. Adjusting this value can help control the verbosity of the output."}),
                "prompt": ("STRING", {"multiline": True, "default": "", "tooltip": "The initial input or question that guides the generation process. Can be a single line or multiple lines of text."}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff, "tooltip": "Determines the starting point for generating random numbers. Setting a specific seed ensures reproducibility of results."}),
                "character_bio": ("STRING", {"multiline": True, "default": "", "tooltip": "Biographical details of the character to be impersonated. Helps in shaping the tone and content of the generated text."}),
                "url": ("STRING", {"multiline": True, "default": "http://localhost:5001/v1/chat/completions", "tooltip": "URL of the local endpoint where the request is sent."}),
            },
        }

    CATEGORY = category
    FUNCTION = "on_exec"
    RETURN_NAMES = ("request_json", "response_json", "message")
    RETURN_TYPES = ("JSON", "JSON", "STRING")

    def on_exec(self, temperature, max_tokens, prompt, seed, character_bio, url, image=None):
        if isinstance(image, torch.Tensor):
            image = tensor_to_b64(image)

        system = get_image_classifier_system(character_bio)

        headers = {
            "Content-Type": "application/json",
        }

        content = []
        if image:
            image_url = f"data:image/jpeg;base64,{image}"
            content.append({"type": "image_url", "image_url": {"url":image_url}})
        if prompt:
            content.append({"type": "text", "text": prompt})


        request = {
            "temperature": temperature,
            "max_tokens": max_tokens,
            "seed": seed,
            "messages": [
              {
                "role": "system",
                "content": system
              },
              {
                "role": "user",
                "content": content
              },
            ],
        }

        response = requests.post(url, headers=headers, data=json.dumps(request))
        response_data = response.json()
        status_code, method, message = handle_response(response, method="POST")
        if status_code != 200:
            message = f"Whoops! Request failed with status code {status_code} and method {method}."

        return (request, response_data, message)
    
class LF_LLMChat:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "KUL_CHAT": ("KUL_CHAT", {"default": "", "tooltip": "Chat with your local LLM."}),
            },
        }
    
    CATEGORY = category
    FUNCTION = "on_exec"
    OUTPUT_LIST = (False, False, False, False, True)
    OUTPUT_NODE = True
    RETURN_NAMES = ("chat_history_json", "last_message", "last_user_message", "last_llm_message", "all_messages")
    RETURN_TYPES = ("JSON", "STRING", "STRING", "STRING", "STRING")

    def on_exec(self, KUL_CHAT):
        chat_data = json.loads(KUL_CHAT)
        all_messages = [message["content"] for message in chat_data]
        last_message = all_messages[-1]
        last_user_message = next((message["content"] for message in reversed(chat_data) if message["role"] == "user"), "")
        last_llm_message = next((message["content"] for message in reversed(chat_data) if message["role"] == "llm"), "")
        return (chat_data, last_message, last_user_message, last_llm_message, json.dumps(all_messages))

NODE_CLASS_MAPPINGS = {
    "LF_CharacterImpersonator": LF_CharacterImpersonator,
    "LF_ImageClassifier": LF_ImageClassifier,
    "LF_LLMChat": LF_LLMChat,
}
NODE_DISPLAY_NAME_MAPPINGS = {
    "LF_CharacterImpersonator": "LLM <-> Character",
    "LF_ImageClassifier": "LLM Image classifier",
    "LF_LLMChat": "LLM Chat"
}