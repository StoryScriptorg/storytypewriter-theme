import { Extension } from "@codemirror/state";
export interface Theme {
    background: string;
    darkerBackground: string;
    evenDarkerBackground: string;
    textColor: string;
    linkColor: string;
}
/**
 * This function creartes a new CodeMirror theme from the existing StoryTypewriter Theme object.
 * @param theme The theme object itself.
 * @param dark Indicates if this is a dark theme or not.
 * @returns The CodeMirror theme extension.
 */
export function createCodeMirrorTheme(theme: Theme, dark: boolean): Extension;
export const darkTheme: {
    theme: Theme;
    codeMirrorTheme: import("@codemirror/state").Extension;
    highlightStyle: import("@codemirror/state").Extension;
};
export const lightTheme: {
    theme: Theme;
    codeMirrorTheme: import("@codemirror/state").Extension;
    highlightStyle: import("@codemirror/state").Extension;
};

//# sourceMappingURL=types.d.ts.map
