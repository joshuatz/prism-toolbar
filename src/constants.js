/**
 * Short identifier / prefix to avoid clashes
 */
export const PkgPrefix = 'jPTb';

// prettier-ignore
export const ToolbarCSS = /** @type {string} */ (
`
.jToolbarWrapper {
    width: 100%;
    color: black;
}
.jToolbar {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: white;
    border-left: 1px solid black;
    border-top: 1px solid black;
    border-right: 1px solid black;
    padding: 10px 6px;
    min-height: 55px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-bottom: -16px !important;
    height: auto;
    width: 100%;
}
.jToolbar > * {
    display: flex;
    justify-content: center;
    align-items: center;
}
.jToolbar .jLeftSide {
    flex: 1;
}
.jToolbar .jRightSide {
    margin-left: auto;
}
.JtbBtn {
    display: inline-block;
    box-sizing: content-box;
    float: left;
    position: relative;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border: 1px solid black;
    background-color: white;
    text-align: center;
    font-size: 3rem;
    overflow: hidden;
    padding: 0px;
    margin-left: 4px;
    margin-bottom: 6px;
}
.prismTbTgCollap[data-collapsed="false"] .isCollapsed {
    display:none;
}
.prismTbTgCollap[data-collapsed="false"] .isNotCollapsed {
    display:block;
}
.prismTbTgCollap[data-collapsed="true"] .isCollapsed {
    display:block;
}
.prismTbTgCollap[data-collapsed="true"] .isNotCollapsed {
    display:none;
}
.jToolbarWrapper {
    width:100%;
}
.jToolbarWrapper .jShadow {
    -webkit-box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2);
    box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2);
}
.jToolbarWrapper .jShadowLight {
    -webkit-box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
}
.jPTbStyl .jAutCtPrnt {
    position: relative;
}
.jAutoCenterChild, .jAutCtPrnt > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.jPTbStyl .jCopyButton .jFallback {
    font-size: 1rem;
}
.JtbBtn, .jPTbStyl .jIconSldBg {
    transition: all 300ms;
}
.jPTbStyl .jIconSldBg {
    background-color: white;
    color: black !important;
}
.JtbBtn.justClicked .jIconSldBg, .JtbBtn.justClicked {
    background-color: black !important;
    color: white !important;
}
.jHsFlbkIcons > i, .jHsFlbkIcons > .jFallback, .jIconWrapper {
    position: absolute !important;
    width: 36px;
    height: 36px;
    text-align: center;
    font-size: large;
    top: 0px !important;
    left: 0px !important;
    
}
.prismTbTgCollap div {
    font-size: 40px;
}
.jPTbStyl .jCopyButton {
    cursor: copy;
}
.jPTbrTogLWrap[data-linewrapon="true"] .jIconSldBg {
    background-color: #cfffcf;
}
.jFscrnWrp {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.91);
    z-index: 999;
    top: 0px;
    left: 0px;
    max-width: 100%;
}
.jFscrnWrp .jCodeWrapper {
    height: 94%;
    width: 100%;
}
.jFullscreenToolbar {
    width: 100%;
    min-height: 6%;
    background-color: black;
}
.jFscreenTBtnWrp {
    text-align: center;
    width: 100%;
    min-height: 6%;
    padding-top: 2.5%;
    position: absolute;
    background-color: black;
}
.jFullscreenCloseBtn {
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
    font-size: 3rem;
}
.jFscrnWrp .jCodeWrapper > * {
    border: 2px solid white;
    width: 96% !important;
    height : auto !important;
    max-height: 93% !important;
    overflow-y: scroll;
    margin: 0px;
}
.jPTbStyl .jMessage {
    margin-left: 10px;
    margin-top: 3px;
    font-family: monospace;
    font-style: italic;
    font-weight: bolder;
    color: black;
    border: 1px dashed black;
    padding: 4px;
    text-align: center;
    /** Cut off text */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.jFscrnWrp .jHidden, .jToolbarWrapper .jHidden {
    display: none !important;
}
.jCodeForceLineWrap, .jCodeForceLineWrap code, .jCodeForceLineWrap pre {
    white-space: pre-wrap !important;
}
.${PkgPrefix}MultiContainer {
    border: 1px dashed black;
	padding: 0px 4px;
}
.${PkgPrefix}MultiContainer .${PkgPrefix}Banner {
    text-align: center;
    font-size: 1.2rem;
}
.${PkgPrefix}MultiContainer > div:nth-child(1n+2) {
    margin-top: 8px;
}
.jRemoteSrcDisplay {
    text-align: center;
    overflow-wrap: anywhere;
}
@media only screen and (max-width: 360px){
    .jToolbarWrapper .jLeftSide {
        display: none;
    }
}
`
);

export const IconMap = {
    break: {
        emoji: '↩',
        material: 'wrap_text',
        fa: 'fa-outdent',
    },
    copy: {
        emoji: '📋',
        material: 'content_copy',
        fa: 'fa-clone',
    },
    max: {
        emoji: '🔎',
        material: 'fullscreen',
        fa: 'fa-search-plus',
    },
};

export const LangKeysRaw = /** @type {string} */ (
    'markup|html|xml|svg|mathml|css|clike|javascript|js|abap|abnf|actionscript|ada|antlr4|g4|apacheconf|apl|applescript|aql|arduino|arff|asciidoc|adoc|asm6502|aspnet|autohotkey|autoit|bash|shell|basic|batch|bbcode|shortcode|bison|bnf|rbnf|brainfuck|brightscript|bro|c|concurnas|conc|csharp|cs|dotnet|cpp|cil|coffeescript|coffee|cmake|clojure|crystal|csp|css-extras|d|dart|dax|diff|django|jinja2|dns-zone-file|dns-zone|docker|dockerfile|ebnf|eiffel|ejs|elixir|elm|etlua|erb|erlang|excel-formula|xlsx|xls|fsharp|factor|firestore-security-rules|flow|fortran|ftl|gcode|gdscript|gedcom|gherkin|git|glsl|gml|gamemakerlanguage|go|graphql|groovy|haml|handlebars|haskell|hs|haxe|hcl|http|hpkp|hsts|ichigojam|icon|inform7|ini|io|j|java|javadoc|javadoclike|javastacktrace|jolie|jq|jsdoc|js-extras|js-templates|json|jsonp|json5|julia|keyman|kotlin|latex|tex|context|latte|less|lilypond|ly|liquid|lisp|emacs|elisp|emacs-lisp|livescript|llvm|lolcode|lua|makefile|markdown|md|markup-templating|matlab|mel|mizar|monkey|moonscript|moon|n1ql|n4js|n4jsd|nand2tetris-hdl|nasm|neon|nginx|nim|nix|nsis|objectivec|ocaml|opencl|oz|parigp|parser|pascal|objectpascal|pascaligo|pcaxis|px|perl|php|phpdoc|php-extras|plsql|powerquery|pq|mscript|powershell|processing|prolog|properties|protobuf|pug|puppet|pure|python|py|q|qml|qore|r|jsx|tsx|renpy|reason|regex|rest|rip|roboconf|robotframework|robot|ruby|rb|rust|sas|sass|scss|scala|scheme|shell-session|smalltalk|smarty|solidity|solution-file|sln|soy|sparql|rq|splunk-spl|sqf|sql|stylus|swift|tap|tcl|textile|toml|tt2|turtle|trig|twig|typescript|ts|t4-cs|t4|t4-vb|t4-templating|vala|vbnet|velocity|verilog|vhdl|vim|visual-basic|vb|wasm|wiki|xeora|xeoracube|xojo|xquery|yaml|yml|zig'
);
export const LangKeys = LangKeysRaw.split('|');
