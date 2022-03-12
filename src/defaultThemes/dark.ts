import { HighlightStyle, tags } from "@codemirror/highlight";
import { Extension } from "@codemirror/state";
import { createCodeMirrorTheme, Theme } from "../utils";

export const darkStoryTypewriter: Theme = {
    background: "#2c2f33",
    darkerBackground: "#23272a",
    evenDarkerBackground: "#1a1d20",
    textColor: "white",
    linkColor: "cornflowerblue"
};

export const darkStoryTypewriterCodeMirrorTheme: Extension = createCodeMirrorTheme(darkStoryTypewriter, true);

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