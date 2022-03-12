import { HighlightStyle, Tag, tags, TagStyle } from "@codemirror/highlight";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
interface Theme {
    background: string;
    darkerBackground: string;
    evenDarkerBackground: string;
    textColor: string;
    linkColor: string;
}
/**
 * The default highlight style for the default StoryTypewriter dark theme.
 * It just lives here so that it can be reused in their theme if people wanted.
 */
export const darkHighlightStyle: Extension = HighlightStyle.define([
    { tag: tags.link, color: "cornflowerblue" },
    { tag: tags.heading, textDecoration: "underline", fontWeight: "bold" },
    { tag: tags.keyword, color: "#1f75fe" /* Crayola Blue */ },
    { tag: tags.tagName, color: "#1f75fe" /* Crayola Blue */ },
    { tag: tags.angleBracket, color: "#c0c0c0" /* Silver */ },
    { tag: tags.attributeName, color: "#318ce7" /* Blue De France */ },
    { tag: tags.attributeValue, color: "#f5f5dc" /* Beige */ },
    { tag: tags.string, color: "#f5f5dc" /* Beige */ },
    { tag: tags.escape, color: "#c4ae78" /* A different shade of Beige */ }
]);

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
