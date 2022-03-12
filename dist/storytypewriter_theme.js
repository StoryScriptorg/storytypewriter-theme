import {EditorView as $hgUW1$EditorView} from "@codemirror/view";
import {HighlightStyle as $hgUW1$HighlightStyle, tags as $hgUW1$tags, defaultHighlightStyle as $hgUW1$defaultHighlightStyle} from "@codemirror/highlight";


function $fab42eb3dee39b5b$export$20e6891944491faa(theme, dark) {
    return $hgUW1$EditorView.theme({
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
    }, {
        dark: dark
    });
}




const $633e6f2a9028c694$export$6370419559fa1d7a = {
    background: "#2c2f33",
    darkerBackground: "#23272a",
    evenDarkerBackground: "#1a1d20",
    textColor: "white",
    linkColor: "cornflowerblue"
};
const $633e6f2a9028c694$export$49f0bc76674fab45 = $fab42eb3dee39b5b$export$20e6891944491faa($633e6f2a9028c694$export$6370419559fa1d7a, true);
const $633e6f2a9028c694$export$8bc31e006051f7c2 = $hgUW1$HighlightStyle.define([
    {
        tag: $hgUW1$tags.link,
        color: "cornflowerblue"
    },
    {
        tag: $hgUW1$tags.heading,
        textDecoration: "underline",
        fontWeight: "bold"
    },
    {
        tag: $hgUW1$tags.keyword,
        color: "#1f75fe" /* Crayola Blue */ 
    },
    {
        tag: $hgUW1$tags.tagName,
        color: "#1f75fe" /* Crayola Blue */ 
    },
    {
        tag: $hgUW1$tags.angleBracket,
        color: "#c0c0c0" /* Silver */ 
    },
    {
        tag: $hgUW1$tags.attributeName,
        color: "#318ce7" /* Blue De France */ 
    },
    {
        tag: $hgUW1$tags.attributeValue,
        color: "#f5f5dc" /* Beige */ 
    },
    {
        tag: $hgUW1$tags.string,
        color: "#f5f5dc" /* Beige */ 
    },
    {
        tag: $hgUW1$tags.escape,
        color: "#c4ae78" /* A different shade of Beige */ 
    }
]);




const $d7106222056f9e90$export$f09537f4163279e8 = {
    background: "white",
    darkerBackground: "whitesmoke",
    evenDarkerBackground: "#ccc",
    textColor: "black",
    linkColor: "darkblue"
};
const $d7106222056f9e90$export$868cdcadf5cff3b8 = $fab42eb3dee39b5b$export$20e6891944491faa($d7106222056f9e90$export$f09537f4163279e8, false);
const $d7106222056f9e90$export$93c396657fdc594 = $hgUW1$defaultHighlightStyle;


const $149c1bd638913645$export$3e936a8db52a10a0 = {
    theme: $633e6f2a9028c694$export$6370419559fa1d7a,
    codeMirrorTheme: $633e6f2a9028c694$export$49f0bc76674fab45,
    highlightStyle: $633e6f2a9028c694$export$8bc31e006051f7c2
};
const $149c1bd638913645$export$f30cb9bc4f736419 = {
    theme: $d7106222056f9e90$export$f09537f4163279e8,
    codeMirrorTheme: $d7106222056f9e90$export$868cdcadf5cff3b8,
    highlightStyle: $d7106222056f9e90$export$93c396657fdc594
};


export {$149c1bd638913645$export$3e936a8db52a10a0 as darkTheme, $149c1bd638913645$export$f30cb9bc4f736419 as lightTheme, $fab42eb3dee39b5b$export$20e6891944491faa as createCodeMirrorTheme};
//# sourceMappingURL=storytypewriter_theme.js.map
