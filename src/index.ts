import type { Theme } from "./utils";
import { createCodeMirrorTheme } from "./utils";
import { darkHighlightStyle, darkStoryTypewriter, darkStoryTypewriterCodeMirrorTheme } from './defaultThemes/dark';
import { lightStoryTypewriter, lightStoryTypewriterCodeMirrorTheme, lightHighlightStyle } from "./defaultThemes/light";

const darkTheme = {
    theme: darkStoryTypewriter,
    codeMirrorTheme: darkStoryTypewriterCodeMirrorTheme,
    highlightStyle: darkHighlightStyle
};

const lightTheme = {
    theme: lightStoryTypewriter,
    codeMirrorTheme: lightStoryTypewriterCodeMirrorTheme,
    highlightStyle: lightHighlightStyle
};

export {
    createCodeMirrorTheme,
    darkTheme,
    lightTheme,
    Theme
};