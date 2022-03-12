import { defaultHighlightStyle } from "@codemirror/highlight";
import { Extension } from "@codemirror/state";
import { createCodeMirrorTheme, Theme } from "../utils";

export const lightStoryTypewriter: Theme = {
    background: "white",
    darkerBackground: "whitesmoke",
    evenDarkerBackground: "#ccc",
    textColor: "black",
    linkColor: "darkblue"
};

export const lightStoryTypewriterCodeMirrorTheme: Extension = createCodeMirrorTheme(lightStoryTypewriter, false);

export const lightHighlightStyle: Extension = defaultHighlightStyle;
