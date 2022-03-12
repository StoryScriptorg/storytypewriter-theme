import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

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
export function createCodeMirrorTheme(theme: Theme, dark: boolean): Extension {
    return EditorView.theme({
        "&": {
            color: theme.textColor,
            backgroundColor: theme.background
        },
        "&.cm-focused .cm-selectionBackground, ::selection": {
            backgroundColor: theme.darkerBackground
        },
        ".cm-content": {
            caretColor: theme.textColor
        },
        "&.cm-focused .cm-cursor": {
            borderLeftColor: theme.textColor
        },
        ".cm-gutters": {
            backgroundColor: theme.evenDarkerBackground,
            color: theme.textColor,
            border: "none"
        },
        ".cm-activeLine": {
            backgroundColor: theme.darkerBackground
        }
    }, { dark });
}