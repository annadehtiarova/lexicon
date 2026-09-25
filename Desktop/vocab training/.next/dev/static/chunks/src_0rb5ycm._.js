(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/sets/[id]/StudySetClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudySetClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wordBank.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/umzugData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$CardsMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/CardsMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MultipleChoiceMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/MultipleChoiceMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$TypingMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/TypingMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MatchingMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/MatchingMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const MODES = [
    {
        key: "cards",
        label: "Cards",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"]
    },
    {
        key: "quiz",
        label: "Quiz",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListChecksIcon"]
    },
    {
        key: "write",
        label: "Write",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardIcon"]
    },
    {
        key: "match",
        label: "Match",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridIcon"]
    }
];
const KNOWN_NOUN_ARTICLES = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORD_BANK"].filter((word)=>word.pos === "noun").map((word)=>{
    const match = word.german.match(/^(der|die|das)\s+(.+)$/i);
    return match ? [
        match[2].toLowerCase(),
        match[1].toLowerCase()
    ] : [
        word.german.toLowerCase(),
        "die"
    ];
}));
const IRREGULAR_NOUN_ARTICLES = new Map(Object.entries({
    "apfel": "der",
    "baum": "der",
    "berg": "der",
    "brief": "der",
    "computer": "der",
    "film": "der",
    "freund": "der",
    "garten": "der",
    "gedanke": "der",
    "hafen": "der",
    "kaffee": "der",
    "kuchen": "der",
    "monat": "der",
    "name": "der",
    "schlüssel": "der",
    "schnee": "der",
    "sommer": "der",
    "staat": "der",
    "stuhl": "der",
    "tisch": "der",
    "vater": "der",
    "winter": "der",
    "zeitpunkt": "der",
    "zug": "der",
    "arbeit": "die",
    "blume": "die",
    "farbe": "die",
    "frage": "die",
    "freundschaft": "die",
    "geschichte": "die",
    "hand": "die",
    "idee": "die",
    "karte": "die",
    "katze": "die",
    "kirche": "die",
    "küche": "die",
    "luft": "die",
    "miete": "die",
    "musik": "die",
    "nacht": "die",
    "reise": "die",
    "schule": "die",
    "sprache": "die",
    "stadt": "die",
    "straße": "die",
    "sonne": "die",
    "tür": "die",
    "wohnung": "die",
    "zeit": "die",
    "auto": "das",
    "auge": "das",
    "bild": "das",
    "buch": "das",
    "essen": "das",
    "fenster": "das",
    "haus": "das",
    "jahr": "das",
    "kind": "das",
    "land": "das",
    "leben": "das",
    "licht": "das",
    "mädchen": "das",
    "meer": "das",
    "problem": "das",
    "spiel": "das",
    "wasser": "das",
    "wetter": "das",
    "wort": "das",
    "zimmer": "das"
}));
function displayGerman(word) {
    if (word.pos !== "noun") return word.german.toLowerCase();
    const existingArticle = word.german.match(/^(der|die|das)\s+(.+)$/i);
    if (existingArticle) {
        return `${existingArticle[1].toLowerCase()} ${existingArticle[2].charAt(0).toUpperCase()}${existingArticle[2].slice(1)}`;
    }
    const noun = word.german.toLowerCase();
    const article = KNOWN_NOUN_ARTICLES.get(noun) ?? IRREGULAR_NOUN_ARTICLES.get(noun) ?? inferNounArticle(noun);
    return `${article} ${word.german.charAt(0).toUpperCase()}${word.german.slice(1)}`;
}
function inferNounArticle(noun) {
    if (/(schaft|tum|werk|zeug|haus|zimmer|buch|land|recht|wesen)$/.test(noun)) return "das";
    if (/(chen|lein|ment|um|ma|zeug)$/.test(noun)) return "das";
    if (/(ung|heit|keit|schaft|tion|tät|ik|ei|ie|ur|enz|anz|age|ade|ette|elle|ose|sis|itis)$/.test(noun)) return "die";
    if (/(ismus|ling|or|us|ist|ant|ent|eur|är)$/.test(noun)) return "der";
    if (/e$/.test(noun)) return "die";
    return "der";
}
function resolveSet(id) {
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArbeitsraeumeSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMZUG_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUmzugSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSet"])(id);
    if (!stored) return null;
    return {
        name: stored.name,
        words: stored.words,
        masteredWordIds: stored.masteredWordIds,
        isPersisted: true
    };
}
function StudySetClient({ id }) {
    _s();
    const [set, setSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cards");
    const [practiceBatch, setPracticeBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [masteredIds, setMasteredIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [editingWordId, setEditingWordId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftGerman, setDraftGerman] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [draftEnglish, setDraftEnglish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [draftPos, setDraftPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("noun");
    const [draftArticle, setDraftArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("der");
    const [isAddingWord, setIsAddingWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newGerman, setNewGerman] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newEnglish, setNewEnglish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPos, setNewPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("noun");
    const [newExample, setNewExample] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordSearch, setWordSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudySetClient.useEffect": ()=>{
            const resolved = resolveSet(id);
            setSet(resolved);
            setMasteredIds(new Set(resolved?.masteredWordIds ?? []));
        }
    }["StudySetClient.useEffect"], [
        id
    ]);
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudySetClient.useMemo[words]": ()=>(set?.words ?? []).map({
                "StudySetClient.useMemo[words]": (word)=>({
                        ...word,
                        german: displayGerman(word),
                        english: word.pos === "verb" && !word.english.toLowerCase().startsWith("to ") ? `to ${word.english.toLowerCase()}` : word.english.toLowerCase()
                    })
            }["StudySetClient.useMemo[words]"])
    }["StudySetClient.useMemo[words]"], [
        set
    ]);
    const batchCount = Math.max(1, Math.ceil(words.length / 30));
    const practiceWords = words.slice(practiceBatch * 30, practiceBatch * 30 + 30);
    const visibleWords = words.filter((word)=>{
        const query = wordSearch.trim().toLowerCase();
        if (!query) return true;
        return [
            word.german,
            word.english,
            word.pos,
            word.example
        ].join(" ").toLowerCase().includes(query);
    });
    if (set === undefined) return null;
    if (set === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300",
                    children: "This study set couldn't be found."
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "rounded-full bg-[#c6e940] px-5 py-2 font-medium text-[#0e1a01] hover:opacity-90",
                    children: "Back home"
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this);
    }
    const handleKnewIt = (wordId)=>{
        if (!set.isPersisted) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWord"])(id, wordId);
        setSet((current)=>current ? {
                ...current,
                words: current.words.filter((word)=>word.id !== wordId)
            } : current);
        setMasteredIds((current)=>{
            const next = new Set(current);
            next.delete(wordId);
            return next;
        });
    };
    const handleDeleteWord = (wordId)=>{
        if (!set.isPersisted) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWord"])(id, wordId);
        setSet((current)=>current ? {
                ...current,
                words: current.words.filter((word)=>word.id !== wordId)
            } : current);
        setMasteredIds((current)=>{
            const next = new Set(current);
            next.delete(wordId);
            return next;
        });
    };
    const startEditing = (word)=>{
        if (!set.isPersisted) return;
        setEditingWordId(word.id);
        const articleMatch = word.german.match(/^(der|die|das)\s+(.+)$/i);
        setDraftGerman(articleMatch ? articleMatch[2] : word.german);
        setDraftEnglish(word.english);
        setDraftPos(word.pos);
        setDraftArticle(articleMatch?.[1].toLowerCase() ?? "der");
    };
    const cancelEditing = ()=>{
        setEditingWordId(null);
        setDraftGerman("");
        setDraftEnglish("");
        setDraftPos("noun");
        setDraftArticle("der");
    };
    const saveEditing = (wordId)=>{
        const germanWord = draftGerman.trim().replace(/^(der|die|das)\s+/i, "");
        const german = draftPos === "noun" ? `${draftArticle} ${germanWord}` : germanWord;
        const english = draftEnglish.trim();
        if (!german || !english) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateWord"])(id, wordId, {
            german,
            english,
            pos: draftPos
        });
        setSet((current)=>current ? {
                ...current,
                words: current.words.map((word)=>word.id === wordId ? {
                        ...word,
                        german,
                        english,
                        pos: draftPos
                    } : word)
            } : current);
        cancelEditing();
    };
    const saveNewWord = ()=>{
        if (!set.isPersisted || !newGerman.trim() || !newEnglish.trim()) return;
        const word = {
            id: crypto.randomUUID(),
            german: newGerman.trim(),
            english: newEnglish.trim(),
            pos: newPos,
            example: newExample.trim()
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWord"])(id, word);
        setSet((current)=>current ? {
                ...current,
                words: [
                    ...current.words,
                    word
                ]
            } : current);
        setNewGerman("");
        setNewEnglish("");
        setNewExample("");
        setIsAddingWord(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-1 justify-center px-4 pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl border-x border-[#d0d9d2] bg-[#fffaf0] px-5 pb-10 shadow-[0_0_30px_rgba(8,117,141,0.08)] sm:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex w-fit items-center gap-1.5 text-sm text-[#08758d] hover:text-[#e76548]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {}, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            "All sets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-heading text-4xl tracking-[-0.72px] text-[#172b35]",
                            children: set.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body pt-2 text-sm text-[#5d6f74]",
                            children: [
                                words.length,
                                " words · ",
                                masteredIds.size,
                                " mastered"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-10 w-full items-center rounded-none border-y-2 border-[#08758d] bg-[#dbeaec] p-1",
                            children: MODES.map(({ key, label, Icon })=>{
                                const active = mode === key;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMode(key),
                                    className: `flex h-full flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors ${active ? "bg-[#08758d] text-white" : "text-[#075a70] hover:bg-[#fffaf0]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this),
                                        label
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 324,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        words.length > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between border-y border-[#e76548] bg-[#fff0df] px-4 py-2 text-sm text-[#075a70]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: practiceBatch === 0,
                                    onClick: ()=>setPracticeBatch((current)=>current - 1),
                                    className: "disabled:opacity-30",
                                    children: "Previous batch"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Batch ",
                                        practiceBatch + 1,
                                        " of ",
                                        batchCount,
                                        " · ",
                                        practiceWords.length,
                                        " words"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: practiceBatch === batchCount - 1,
                                    onClick: ()=>setPracticeBatch((current)=>current + 1),
                                    className: "disabled:opacity-30",
                                    children: "Next batch"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t-2 border-[#e76548] pb-6 pt-1",
                            children: [
                                mode === "cards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$CardsMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    words: practiceWords,
                                    masteredIds: masteredIds,
                                    onKnewIt: handleKnewIt,
                                    onNextBatch: practiceBatch < batchCount - 1 ? ()=>setPracticeBatch((current)=>current + 1) : undefined
                                }, `cards-${practiceBatch}`, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this),
                                mode === "quiz" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MultipleChoiceMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        words: practiceWords
                                    }, `quiz-${practiceBatch}`, false, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                mode === "write" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$TypingMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        words: practiceWords
                                    }, `write-${practiceBatch}`, false, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                mode === "match" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MatchingMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        words: practiceWords
                                    }, `match-${practiceBatch}`, false, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-heading text-2xl text-[#172b35]",
                                    children: "Vocabulary notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this),
                                set.isPersisted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsAddingWord(true),
                                    className: "rounded-full border border-[#08758d] bg-[#08758d] px-4 py-2 text-sm font-semibold text-white",
                                    children: "Add word"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this),
                        isAddingWord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 border border-[#c7d1ca] bg-[#fff0df] p-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newGerman,
                                    onChange: (event)=>setNewGerman(event.target.value),
                                    placeholder: "German word",
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newEnglish,
                                    onChange: (event)=>setNewEnglish(event.target.value),
                                    placeholder: "English translation",
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: newPos,
                                    onChange: (event)=>setNewPos(event.target.value),
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "noun",
                                            children: "Noun"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "verb",
                                            children: "Verb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 416,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "adjective",
                                            children: "Adjective"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 416,
                                            columnNumber: 85
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "adverb",
                                            children: "Adverb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 416,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "other",
                                            children: "Other"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 416,
                                            columnNumber: 167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newExample,
                                    onChange: (event)=>setNewExample(event.target.value),
                                    placeholder: "German example (optional)",
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: saveNewWord,
                                            className: "rounded-full bg-[#08758d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075a70]",
                                            children: "Save word"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsAddingWord(false),
                                            className: "rounded-full bg-[#20293a] px-4 py-2 text-sm text-white",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "search",
                            value: wordSearch,
                            onChange: (event)=>setWordSearch(event.target.value),
                            placeholder: "Search words, translations, or types",
                            className: "mt-4 h-11 w-full rounded-none border border-[#9bb8bc] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]",
                            "aria-label": "Search all words"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 overflow-hidden border border-[#c7d1ca] bg-[#fffaf0]",
                            children: visibleWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-between gap-4 px-5 py-3.5 ${i !== visibleWords.length - 1 ? "border-b border-[#d5ddd7]" : ""}`,
                                    children: editingWordId === word.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: draftGerman,
                                                onChange: (event)=>setDraftGerman(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "German word"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 447,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: draftEnglish,
                                                onChange: (event)=>setDraftEnglish(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "English translation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 456,
                                                columnNumber: 21
                                            }, this),
                                            draftPos === "noun" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: draftArticle,
                                                onChange: (event)=>setDraftArticle(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "Article",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "der",
                                                        children: "der"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "die",
                                                        children: "die"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "das",
                                                        children: "das"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 466,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: draftPos,
                                                onChange: (event)=>setDraftPos(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "Part of speech",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "noun",
                                                        children: "Noun"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "verb",
                                                        children: "Verb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 485,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "adjective",
                                                        children: "Adjective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "adverb",
                                                        children: "Adverb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 478,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>saveEditing(word.id),
                                                        className: "rounded-full bg-[#c6e940] px-4 py-1.5 text-xs font-semibold text-[#0e1a01]",
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: cancelEditing,
                                                        className: "rounded-full bg-[#dbeaec] px-4 py-1.5 text-xs text-[#075a70]",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 491,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>startEditing(word),
                                                        className: "text-left font-heading text-base tracking-[-0.32px] text-[#172b35]",
                                                        children: displayGerman(word)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body pt-1 text-xs italic text-[#5d6f74]",
                                                        children: word.example
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 511,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex shrink-0 items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>startEditing(word),
                                                                className: "font-body text-right text-sm text-[#075a70]",
                                                                children: word.english
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-body pt-0.5 text-[11px] uppercase tracking-[0.55px] text-[#5d6f74]",
                                                                children: word.pos
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 23
                                                    }, this),
                                                    set.isPersisted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteWord(word.id),
                                                        className: "rounded-full p-1.5 text-[#5d6f74] hover:bg-[#fff0df] hover:text-[#e76548]",
                                                        "aria-label": `Delete ${word.german}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 525,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 510,
                                        columnNumber: 19
                                    }, this)
                                }, word.id, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
            lineNumber: 297,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
_s(StudySetClient, "751qiq6dQR9jbz2dzRlqPI7tqzs=");
_c = StudySetClient;
var _c;
__turbopack_context__.k.register(_c, "StudySetClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightIcon",
    ()=>ArrowRightIcon,
    "BookOpenIcon",
    ()=>BookOpenIcon,
    "CameraIcon",
    ()=>CameraIcon,
    "CheckIcon",
    ()=>CheckIcon,
    "ChevronLeftIcon",
    ()=>ChevronLeftIcon,
    "ColumnsIcon",
    ()=>ColumnsIcon,
    "GridIcon",
    ()=>GridIcon,
    "ImagePlusIcon",
    ()=>ImagePlusIcon,
    "KeyboardIcon",
    ()=>KeyboardIcon,
    "LayersIcon",
    ()=>LayersIcon,
    "ListChecksIcon",
    ()=>ListChecksIcon,
    "SparkleIcon",
    ()=>SparkleIcon,
    "SparklesIcon",
    ()=>SparklesIcon,
    "TrashIcon",
    ()=>TrashIcon,
    "XIcon",
    ()=>XIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const base = "h-4 w-4";
function ChevronLeftIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 18l-6-6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ChevronLeftIcon;
function SparklesIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = SparklesIcon;
function ListChecksIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3.5 6.5l1.5 1.5 3-3M3.5 12.5l1.5 1.5 3-3M9 6h11M9 12h11M9 18h11"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c2 = ListChecksIcon;
function KeyboardIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.5",
                y: "6",
                width: "19",
                height: "12",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c3 = KeyboardIcon;
function ColumnsIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "8",
                height: "16",
                rx: "1.5",
                strokeDasharray: "3 3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "4",
                width: "8",
                height: "16",
                rx: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c4 = ColumnsIcon;
function GridIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "3",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "13",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "13",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c5 = GridIcon;
function XIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 6L6 18M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c6 = XIcon;
function CheckIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12l5 5L20 6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c7 = CheckIcon;
function ArrowRightIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12h16M13 5l7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c8 = ArrowRightIcon;
function CameraIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7h2.5l1.2-2h8.6l1.2 2H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "13",
                r: "3.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c9 = CameraIcon;
function ImagePlusIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "10",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 17l5-5 4 4 3-3 6 6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c10 = ImagePlusIcon;
function LayersIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l8 4-8 4-8-4 8-4Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 11l8 4 8-4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 15l8 4 8-4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_c11 = LayersIcon;
function BookOpenIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6.5c-1.6-1.2-3.7-1.7-6-1.7v13c2.3 0 4.4.5 6 1.7 1.6-1.2 3.7-1.7 6-1.7v-13c-2.3 0-4.4.5-6 1.7Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6.5v13"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_c12 = BookOpenIcon;
function SparkleIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c13 = SparkleIcon;
function TrashIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c14 = TrashIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "ChevronLeftIcon");
__turbopack_context__.k.register(_c1, "SparklesIcon");
__turbopack_context__.k.register(_c2, "ListChecksIcon");
__turbopack_context__.k.register(_c3, "KeyboardIcon");
__turbopack_context__.k.register(_c4, "ColumnsIcon");
__turbopack_context__.k.register(_c5, "GridIcon");
__turbopack_context__.k.register(_c6, "XIcon");
__turbopack_context__.k.register(_c7, "CheckIcon");
__turbopack_context__.k.register(_c8, "ArrowRightIcon");
__turbopack_context__.k.register(_c9, "CameraIcon");
__turbopack_context__.k.register(_c10, "ImagePlusIcon");
__turbopack_context__.k.register(_c11, "LayersIcon");
__turbopack_context__.k.register(_c12, "BookOpenIcon");
__turbopack_context__.k.register(_c13, "SparkleIcon");
__turbopack_context__.k.register(_c14, "TrashIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modes/CardsMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardsMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CardsMode({ words, masteredIds, onKnewIt, onNextBatch }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flipped, setFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const word = words[index];
    const total = words.length;
    const progress = total > 1 ? index / (total - 1) * 100 : 100;
    const advance = ()=>{
        setFlipped(false);
        setIndex((i)=>Math.min(i + 1, total - 1));
    };
    const goBack = ()=>{
        setFlipped(false);
        setIndex((i)=>Math.max(i - 1, 0));
    };
    const handleKnewIt = ()=>{
        onKnewIt(word.id);
        setFlipped(false);
        setIndex((current)=>Math.min(current, Math.max(words.length - 2, 0)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 w-full overflow-hidden bg-[#d5ddd7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-[#08758d] transition-all duration-300",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/modes/CardsMode.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setFlipped((f)=>!f),
                    className: "flex min-h-[256px] w-full flex-col items-center justify-center gap-3 border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]",
                    style: {
                        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(244,239,229,0.8))"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]",
                            children: flipped ? "English" : "German"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modes/CardsMode.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-4xl tracking-[-0.72px] text-[#172b35]",
                            children: flipped ? word.english : word.german
                        }, void 0, false, {
                            fileName: "[project]/src/components/modes/CardsMode.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-xs text-[#5d6f74]",
                            children: "Tap the card to reveal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modes/CardsMode.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modes/CardsMode.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goBack,
                        disabled: index === 0,
                        className: "flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] disabled:opacity-45",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            " Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleKnewIt,
                                className: "flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    " Delete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: advance,
                                className: "flex h-9 items-center gap-2 rounded-full bg-[#08758d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075a70]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    " Learn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: advance,
                        className: "flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 106,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body w-full pt-4 text-center text-xs text-[#5d6f74]",
                children: [
                    "Card ",
                    index + 1,
                    " of ",
                    total,
                    " · ",
                    masteredIds.size,
                    " mastered"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            index === total - 1 && onNextBatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onNextBatch,
                className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]",
                children: [
                    "Next batch ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 119,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/CardsMode.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(CardsMode, "1j6MzEvfD6XvZwKB2sjQXTNdulg=");
_c = CardsMode;
var _c;
__turbopack_context__.k.register(_c, "CardsMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modes/MatchingMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchingMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ROUND_SIZE = 6;
function buildTiles(words) {
    const round = [
        ...words
    ].sort(()=>Math.random() - 0.5).slice(0, ROUND_SIZE);
    const tiles = round.flatMap((w)=>[
            {
                key: `${w.id}-de`,
                wordId: w.id,
                label: w.german,
                side: "de"
            },
            {
                key: `${w.id}-en`,
                wordId: w.id,
                label: w.english,
                side: "en"
            }
        ]);
    return tiles.sort(()=>Math.random() - 0.5);
}
function MatchingMode({ words }) {
    _s();
    const [tiles, setTiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MatchingMode.useState": ()=>buildTiles(words)
    }["MatchingMode.useState"]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [matched, setMatched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [wrongPair, setWrongPair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isDone = matched.size === tiles.length && tiles.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchingMode.useEffect": ()=>{
            if (isDone) return;
            const timer = window.setInterval({
                "MatchingMode.useEffect.timer": ()=>setSeconds({
                        "MatchingMode.useEffect.timer": (value)=>value + 1
                    }["MatchingMode.useEffect.timer"])
            }["MatchingMode.useEffect.timer"], 1000);
            return ({
                "MatchingMode.useEffect": ()=>window.clearInterval(timer)
            })["MatchingMode.useEffect"];
        }
    }["MatchingMode.useEffect"], [
        isDone
    ]);
    const reshuffle = ()=>{
        setTiles(buildTiles(words));
        setMatched(new Set());
        setSelected(null);
        setWrongPair(null);
    };
    const handleClick = (tile)=>{
        if (matched.has(tile.key) || wrongPair) return;
        if (!selected) {
            setSelected(tile);
            return;
        }
        if (selected.key === tile.key) {
            setSelected(null);
            return;
        }
        if (selected.wordId === tile.wordId && selected.side !== tile.side) {
            setMatched((prev)=>new Set(prev).add(selected.key).add(tile.key));
            setSelected(null);
        } else {
            setWrongPair([
                selected.key,
                tile.key
            ]);
            setTimeout(()=>setWrongPair(null), 600);
            setSelected(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-between text-sm text-[#5d6f74]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "◷ ",
                            seconds,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 76,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            matched.size / 2,
                            " / ",
                            tiles.length / 2,
                            " pairs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 76,
                        columnNumber: 100
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid w-full grid-cols-2 gap-3 sm:grid-cols-3",
                children: tiles.map((tile)=>{
                    const isMatched = matched.has(tile.key);
                    const isSelected = selected?.key === tile.key;
                    const isWrong = wrongPair?.includes(tile.key);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleClick(tile),
                        disabled: isMatched,
                        className: `flex min-h-[96px] items-center justify-center rounded-[22px] border px-3 py-4 text-center text-sm font-medium transition-all ${isMatched ? "border-[rgba(198,233,64,0.28)] bg-[rgba(198,233,64,0.06)] text-[rgba(198,233,64,0.48)]" : isWrong ? "border-red-500 bg-red-500/10 text-red-200" : isSelected ? "border-[#c6e940] bg-[rgba(198,233,64,0.1)] text-[#e8f9a8]" : "border-[#9bb8bc] bg-[#fffaf0] text-[#172b35] hover:-translate-y-0.5 hover:border-[#08758d]"}`,
                        children: tile.label
                    }, tile.key, false, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex w-full flex-col items-center gap-3 rounded-2xl border border-[rgba(198,233,64,0.3)] px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-center gap-2 text-sm text-[#dff58a]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                                lineNumber: 106,
                                columnNumber: 73
                            }, this),
                            " All pairs matched in ",
                            seconds,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reshuffle,
                        className: "flex items-center gap-2 rounded-full bg-[#08758d] px-5 py-2 text-sm font-semibold text-white hover:bg-[#075a70]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            " Play again"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/MatchingMode.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(MatchingMode, "Gmc1zcaS10PdxIIhxYvoyT1lIq4=");
_c = MatchingMode;
var _c;
__turbopack_context__.k.register(_c, "MatchingMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modes/MultipleChoiceMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultipleChoiceMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function buildQuestion(words, index) {
    const correct = words[index];
    const distractors = words.filter((w)=>w.id !== correct.id).sort(()=>Math.random() - 0.5).slice(0, 3);
    const options = [
        ...distractors,
        correct
    ].sort(()=>Math.random() - 0.5);
    return {
        correct,
        options
    };
}
function MultipleChoiceMode({ words }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const question = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MultipleChoiceMode.useMemo[question]": ()=>buildQuestion(words, index)
    }["MultipleChoiceMode.useMemo[question]"], [
        words,
        index
    ]);
    const handleSelect = (id)=>{
        if (selected) return;
        setSelected(id);
        if (id === question.correct.id) setScore((s)=>s + 1);
    };
    const next = ()=>{
        setSelected(null);
        setIndex((i)=>(i + 1) % words.length);
    };
    const answered = selected !== null;
    const answeredCount = index + (answered ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between text-xs text-[#5d6f74]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-body uppercase tracking-[2px]",
                        children: [
                            "Question ",
                            index + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            score,
                            " correct / ",
                            answeredCount,
                            " answered"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 h-1.5 w-full overflow-hidden bg-[#d5ddd7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-[#08758d] transition-all",
                    style: {
                        width: `${answeredCount / words.length * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex min-h-[224px] w-full flex-col items-center justify-center border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]",
                        children: "What does this mean?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading mt-3 text-4xl text-[#172b35]",
                        children: question.correct.german
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-3 text-xs ${selected === question.correct.id ? "text-[#08758d]" : "text-[#b44735]"}`,
                        children: selected === question.correct.id ? "Correct" : `Answer: ${question.correct.english}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 58,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-2",
                children: question.options.map((opt)=>{
                    const isCorrect = opt.id === question.correct.id;
                    const showState = selected !== null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(opt.id),
                        className: `flex min-h-[58px] items-center justify-between rounded-2xl border px-5 py-3 text-left text-sm transition-all ${showState && isCorrect ? "border-[#08758d] bg-[#e4f2f3] text-[#075a70]" : showState && opt.id === selected ? "border-[#e76548] bg-[#fff0df] text-[#a63d2d]" : showState ? "border-[#d5ddd7] bg-[#f0eee7] text-[#7a8789]" : "border-[#9bb8bc] bg-[#fffaf0] text-[#172b35] hover:-translate-y-0.5 hover:border-[#08758d]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: opt.english
                            }, void 0, false, {
                                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            showState && isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                                lineNumber: 74,
                                columnNumber: 42
                            }, this),
                            showState && opt.id === selected && !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                                lineNumber: 75,
                                columnNumber: 66
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: next,
                className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]",
                children: [
                    "Next word ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(MultipleChoiceMode, "xBbNYG7JxHsiJhZ9RxzYNMmdj7w=");
_c = MultipleChoiceMode;
var _c;
__turbopack_context__.k.register(_c, "MultipleChoiceMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modes/TypingMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypingMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function normalize(text) {
    return text.trim().toLowerCase().replace(/^(the|der|die|das)\s+/, "");
}
function TypingMode({ words }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const word = words[index];
    const check = ()=>{
        if (!input.trim()) return;
        const isCorrect = normalize(input) === normalize(word.english);
        setResult(isCorrect ? "correct" : "incorrect");
    };
    const next = ()=>{
        setInput("");
        setResult(null);
        setIndex((i)=>(i + 1) % words.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-between text-xs text-[#9da5b5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "uppercase tracking-[2px]",
                        children: "Write"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 38,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            index + 1,
                            " of ",
                            words.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 38,
                        columnNumber: 130
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 h-1.5 w-full overflow-hidden bg-[#d5ddd7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-[#08758d]",
                    style: {
                        width: `${(index + (result ? 1 : 0)) / words.length * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/modes/TypingMode.tsx",
                    lineNumber: 39,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex min-h-[224px] w-full flex-col items-center justify-center border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-widest text-[#5d6f74]",
                        children: "Type the German word"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading mt-3 text-4xl text-[#172b35]",
                        children: word.english
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mt-5 w-full text-xs uppercase tracking-[1.8px] text-[#9da5b5]",
                htmlFor: "typing-answer",
                children: "Your answer"
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "typing-answer",
                value: input,
                onChange: (e)=>setInput(e.target.value),
                onKeyDown: (e)=>e.key === "Enter" && (result ? next() : check()),
                placeholder: "Type the German word",
                disabled: result !== null,
                className: "mt-2 h-12 w-full rounded-none border border-[#9bb8bc] bg-white px-5 text-base text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]"
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${result === "correct" ? "border-[rgba(198,233,64,0.35)] text-[#dff58a]" : "border-[rgba(255,102,87,0.35)] text-[#ffb0a6]"}`,
                children: [
                    result === "correct" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 60,
                        columnNumber: 249
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 60,
                        columnNumber: 265
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: result === "correct" ? "Correct!" : `Correct answer: ${word.german}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 60,
                        columnNumber: 275
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: result ? next : check,
                className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]",
                children: result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Next word ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                            fileName: "[project]/src/components/modes/TypingMode.tsx",
                            lineNumber: 70,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modes/TypingMode.tsx",
                    lineNumber: 70,
                    columnNumber: 19
                }, this) : "Check answer"
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/TypingMode.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(TypingMode, "tJAKsTf6NW9XmnEpeb8/sO5jVy8=");
_c = TypingMode;
var _c;
__turbopack_context__.k.register(_c, "TypingMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/arbeitsraeumeData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARBEITSRAEUME_SET_ID",
    ()=>ARBEITSRAEUME_SET_ID,
    "ARBEITSRAEUME_SET_NAME",
    ()=>ARBEITSRAEUME_SET_NAME,
    "getArbeitsraeumeSet",
    ()=>getArbeitsraeumeSet
]);
const RAW_WORDS = [
    [
        "der Leiter",
        "ladder / manager",
        "noun"
    ],
    [
        "die Kaffeemaschine",
        "coffee machine",
        "noun"
    ],
    [
        "die Werkbank",
        "workbench",
        "noun"
    ],
    [
        "der Hocker",
        "stool",
        "noun"
    ],
    [
        "das Büroregal",
        "office shelf",
        "noun"
    ],
    [
        "die Klimaanlage",
        "air conditioning",
        "noun"
    ],
    [
        "der Bildschirm",
        "screen / monitor",
        "noun"
    ],
    [
        "das Werkzeug",
        "tool",
        "noun"
    ],
    [
        "der Arbeitstisch",
        "work table",
        "noun"
    ],
    [
        "der Kasten",
        "box",
        "noun"
    ],
    [
        "der Putzeimer",
        "cleaning bucket",
        "noun"
    ],
    [
        "der Arbeitsraum",
        "workspace",
        "noun"
    ],
    [
        "die Tätigkeit",
        "activity",
        "noun"
    ],
    [
        "das Gerät",
        "device / equipment",
        "noun"
    ],
    [
        "sammeln",
        "to collect",
        "verb"
    ],
    [
        "das Gespräch",
        "conversation",
        "noun"
    ],
    [
        "passen",
        "to fit",
        "verb"
    ],
    [
        "die Kaffeeküche",
        "coffee kitchen / kitchenette",
        "noun"
    ],
    [
        "die Einweihungsparty",
        "housewarming party",
        "noun"
    ],
    [
        "der Büroraum",
        "office space",
        "noun"
    ],
    [
        "der Umzugsablauf",
        "moving process",
        "noun"
    ],
    [
        "beschreiben",
        "to describe",
        "verb"
    ],
    [
        "das Angebot",
        "offer",
        "noun"
    ],
    [
        "verhandeln",
        "to negotiate",
        "verb"
    ],
    [
        "das Beratungsgespräch",
        "consultation",
        "noun"
    ],
    [
        "durchführen",
        "to carry out / conduct",
        "verb"
    ],
    [
        "der Firmenumzug",
        "company relocation",
        "noun"
    ],
    [
        "organisieren",
        "to organize",
        "verb"
    ],
    [
        "der Mangel",
        "deficiency / shortcoming",
        "noun"
    ],
    [
        "reklamieren",
        "to complain about / make a complaint",
        "verb"
    ],
    [
        "die Absprache",
        "agreement / arrangement",
        "noun"
    ],
    [
        "die Umzugsfirma",
        "moving company",
        "noun"
    ],
    [
        "die Mängelmeldung",
        "defect report",
        "noun"
    ],
    [
        "gründen",
        "to found / establish",
        "verb"
    ],
    [
        "aufmerksam",
        "attentive",
        "adjective"
    ],
    [
        "die Mieterhöhung",
        "rent increase",
        "noun"
    ],
    [
        "die Suche",
        "search",
        "noun"
    ],
    [
        "die Renovierung",
        "renovation",
        "noun"
    ],
    [
        "die Zusage",
        "confirmation / acceptance",
        "noun"
    ],
    [
        "die Krise",
        "crisis",
        "noun"
    ],
    [
        "der Vermieter",
        "landlord",
        "noun"
    ],
    [
        "die Miete",
        "rent",
        "noun"
    ],
    [
        "erhöhen",
        "to increase / raise",
        "verb"
    ],
    [
        "leisten",
        "to provide / achieve",
        "verb"
    ],
    [
        "die Auftragslage",
        "order situation / order volume",
        "noun"
    ],
    [
        "achten",
        "to pay attention",
        "verb"
    ],
    [
        "derselbe / dieselbe / dasselbe",
        "the same",
        "other"
    ],
    [
        "der laufende",
        "ongoing / current",
        "adjective"
    ],
    [
        "eher",
        "rather",
        "adverb"
    ],
    [
        "die Altbauwohnung",
        "apartment in an old building",
        "noun"
    ],
    [
        "die Einbauküche",
        "fitted kitchen",
        "noun"
    ],
    [
        "der Stock",
        "floor / story",
        "noun"
    ],
    [
        "der Fahrstuhl",
        "elevator",
        "noun"
    ],
    [
        "die Kundschaft",
        "customers / clientele",
        "noun"
    ],
    [
        "das Gebäude",
        "building",
        "noun"
    ],
    [
        "furchtbar",
        "terrible",
        "adjective"
    ],
    [
        "der Zustand",
        "condition",
        "noun"
    ],
    [
        "das Werkstattgebäude",
        "workshop building",
        "noun"
    ],
    [
        "teilweise",
        "partly / partially",
        "adverb"
    ],
    [
        "die Werkstatt",
        "workshop",
        "noun"
    ],
    [
        "vormerken",
        "to put on a list / note for later",
        "verb"
    ],
    [
        "die Unterlage",
        "document",
        "noun"
    ],
    [
        "die Hausverwaltung",
        "property management company",
        "noun"
    ],
    [
        "der Daumen",
        "thumb",
        "noun"
    ],
    [
        "das Telefonat",
        "telephone call",
        "noun"
    ],
    [
        "ehemalig",
        "former",
        "adjective"
    ],
    [
        "der Anfang",
        "beginning / start",
        "noun"
    ],
    [
        "renovieren",
        "to renovate",
        "verb"
    ],
    [
        "der Auszug",
        "move-out",
        "noun"
    ],
    [
        "der Boden",
        "floor",
        "noun"
    ],
    [
        "der Handwerker",
        "tradesperson / craftsman",
        "noun"
    ],
    [
        "abschleifen",
        "to sand / grind down",
        "verb"
    ],
    [
        "die Wand",
        "wall",
        "noun"
    ],
    [
        "der Spezialist",
        "specialist",
        "noun"
    ],
    [
        "sanieren",
        "to renovate / refurbish",
        "verb"
    ],
    [
        "der Internetanschluss",
        "internet connection",
        "noun"
    ],
    [
        "der Server",
        "server",
        "noun"
    ],
    [
        "der Netzwerktechniker",
        "network technician",
        "noun"
    ],
    [
        "erledigen",
        "to take care of / complete",
        "verb"
    ],
    [
        "anschließen",
        "to connect",
        "verb"
    ],
    [
        "der Anschluss",
        "connection",
        "noun"
    ],
    [
        "der Elektriker",
        "electrician",
        "noun"
    ],
    [
        "legen",
        "to lay / put",
        "verb"
    ],
    [
        "der Umzug",
        "move / relocation",
        "noun"
    ],
    [
        "die Spedition",
        "moving / freight company",
        "noun"
    ],
    [
        "die Festplatte",
        "hard drive",
        "noun"
    ],
    [
        "transportieren",
        "to transport",
        "verb"
    ],
    [
        "der Sicherheitsgrund",
        "safety reason",
        "noun"
    ],
    [
        "der Möbelpacker",
        "furniture mover",
        "noun"
    ],
    [
        "der Schrank",
        "cabinet / cupboard",
        "noun"
    ],
    [
        "der Büroraum",
        "office space",
        "noun"
    ],
    [
        "der Auftrag",
        "order / assignment",
        "noun"
    ],
    [
        "der Ausdruck",
        "expression",
        "noun"
    ],
    [
        "vergleichen",
        "to compare",
        "verb"
    ],
    [
        "der Mietvertrag",
        "rental contract / lease",
        "noun"
    ],
    [
        "unterschreiben",
        "to sign",
        "verb"
    ],
    [
        "das Möbelhaus",
        "furniture store",
        "noun"
    ],
    [
        "das Büromöbel",
        "office furniture",
        "noun"
    ],
    [
        "ansehen",
        "to look at / view",
        "verb"
    ],
    [
        "der Nachsendeantrag",
        "mail forwarding request",
        "noun"
    ],
    [
        "der Umzugskarton",
        "moving box",
        "noun"
    ],
    [
        "packen",
        "to pack",
        "verb"
    ],
    [
        "das Internetportal",
        "internet portal",
        "noun"
    ],
    [
        "der Einkommensnachweis",
        "proof of income",
        "noun"
    ],
    [
        "das Maklerbüro",
        "real estate agency",
        "noun"
    ],
    [
        "kontaktieren",
        "to contact",
        "verb"
    ],
    [
        "ummelden",
        "to re-register",
        "verb"
    ],
    [
        "beauftragen",
        "to commission / hire",
        "verb"
    ],
    [
        "die Kaution",
        "deposit",
        "noun"
    ],
    [
        "hinterlegen",
        "to deposit",
        "verb"
    ],
    [
        "der Grundriss",
        "floor plan",
        "noun"
    ],
    [
        "die Vermieterin",
        "landlady",
        "noun"
    ],
    [
        "die Liste",
        "list",
        "noun"
    ],
    [
        "der Mitarbeiter",
        "employee / staff member",
        "noun"
    ],
    [
        "der Handwerker",
        "tradesperson / craftsman",
        "noun"
    ],
    [
        "der Fliesenleger",
        "tiler",
        "noun"
    ],
    [
        "der Schreiner",
        "carpenter",
        "noun"
    ],
    [
        "fliesen",
        "to tile",
        "verb"
    ],
    [
        "der Maler",
        "painter",
        "noun"
    ],
    [
        "der Installateur",
        "plumber / installer",
        "noun"
    ],
    [
        "holen",
        "to fetch / get",
        "verb"
    ],
    [
        "der Dachdecker",
        "roofer",
        "noun"
    ],
    [
        "der Heizungsbauer",
        "heating technician",
        "noun"
    ],
    [
        "der Bodenleger",
        "flooring installer",
        "noun"
    ],
    [
        "der Maurer",
        "bricklayer / mason",
        "noun"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
const ARBEITSRAEUME_SET_ID = "41a3417a-43ac-44e8-96ff-8b863209587f";
const ARBEITSRAEUME_SET_NAME = "Kapitel 1 - Arbeitsräume";
function getArbeitsraeumeSet() {
    return {
        id: ARBEITSRAEUME_SET_ID,
        name: ARBEITSRAEUME_SET_NAME,
        createdAt: 0,
        sourceImageCount: 3,
        words: RAW_WORDS.map((word, index)=>({
                id: `${ARBEITSRAEUME_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["der Leiter", "ladder / manager", "noun"],\n  ["die Kaffeemaschine", "coffee machine", "noun"],\n  ["die Werkbank", "workbench", "noun"],\n  ["der Hocker", "stool", "noun"],\n  ["das Büroregal", "office shelf", "noun"],\n  ["die Klimaanlage", "air conditioning", "noun"],\n  ["der Bildschirm", "screen / monitor", "noun"],\n  ["das Werkzeug", "tool", "noun"],\n  ["der Arbeitstisch", "work table", "noun"],\n  ["der Kasten", "box", "noun"],\n  ["der Putzeimer", "cleaning bucket", "noun"],\n  ["der Arbeitsraum", "workspace", "noun"],\n  ["die Tätigkeit", "activity", "noun"],\n  ["das Gerät", "device / equipment", "noun"],\n  ["sammeln", "to collect", "verb"],\n  ["das Gespräch", "conversation", "noun"],\n  ["passen", "to fit", "verb"],\n  ["die Kaffeeküche", "coffee kitchen / kitchenette", "noun"],\n  ["die Einweihungsparty", "housewarming party", "noun"],\n  ["der Büroraum", "office space", "noun"],\n  ["der Umzugsablauf", "moving process", "noun"],\n  ["beschreiben", "to describe", "verb"],\n  ["das Angebot", "offer", "noun"],\n  ["verhandeln", "to negotiate", "verb"],\n  ["das Beratungsgespräch", "consultation", "noun"],\n  ["durchführen", "to carry out / conduct", "verb"],\n  ["der Firmenumzug", "company relocation", "noun"],\n  ["organisieren", "to organize", "verb"],\n  ["der Mangel", "deficiency / shortcoming", "noun"],\n  ["reklamieren", "to complain about / make a complaint", "verb"],\n  ["die Absprache", "agreement / arrangement", "noun"],\n  ["die Umzugsfirma", "moving company", "noun"],\n  ["die Mängelmeldung", "defect report", "noun"],\n  ["gründen", "to found / establish", "verb"],\n  ["aufmerksam", "attentive", "adjective"],\n  ["die Mieterhöhung", "rent increase", "noun"],\n  ["die Suche", "search", "noun"],\n  ["die Renovierung", "renovation", "noun"],\n  ["die Zusage", "confirmation / acceptance", "noun"],\n  ["die Krise", "crisis", "noun"],\n  ["der Vermieter", "landlord", "noun"],\n  ["die Miete", "rent", "noun"],\n  ["erhöhen", "to increase / raise", "verb"],\n  ["leisten", "to provide / achieve", "verb"],\n  ["die Auftragslage", "order situation / order volume", "noun"],\n  ["achten", "to pay attention", "verb"],\n  ["derselbe / dieselbe / dasselbe", "the same", "other"],\n  ["der laufende", "ongoing / current", "adjective"],\n  ["eher", "rather", "adverb"],\n  ["die Altbauwohnung", "apartment in an old building", "noun"],\n  ["die Einbauküche", "fitted kitchen", "noun"],\n  ["der Stock", "floor / story", "noun"],\n  ["der Fahrstuhl", "elevator", "noun"],\n  ["die Kundschaft", "customers / clientele", "noun"],\n  ["das Gebäude", "building", "noun"],\n  ["furchtbar", "terrible", "adjective"],\n  ["der Zustand", "condition", "noun"],\n  ["das Werkstattgebäude", "workshop building", "noun"],\n  ["teilweise", "partly / partially", "adverb"],\n  ["die Werkstatt", "workshop", "noun"],\n  ["vormerken", "to put on a list / note for later", "verb"],\n  ["die Unterlage", "document", "noun"],\n  ["die Hausverwaltung", "property management company", "noun"],\n  ["der Daumen", "thumb", "noun"],\n  ["das Telefonat", "telephone call", "noun"],\n  ["ehemalig", "former", "adjective"],\n  ["der Anfang", "beginning / start", "noun"],\n  ["renovieren", "to renovate", "verb"],\n  ["der Auszug", "move-out", "noun"],\n  ["der Boden", "floor", "noun"],\n  ["der Handwerker", "tradesperson / craftsman", "noun"],\n  ["abschleifen", "to sand / grind down", "verb"],\n  ["die Wand", "wall", "noun"],\n  ["der Spezialist", "specialist", "noun"],\n  ["sanieren", "to renovate / refurbish", "verb"],\n  ["der Internetanschluss", "internet connection", "noun"],\n  ["der Server", "server", "noun"],\n  ["der Netzwerktechniker", "network technician", "noun"],\n  ["erledigen", "to take care of / complete", "verb"],\n  ["anschließen", "to connect", "verb"],\n  ["der Anschluss", "connection", "noun"],\n  ["der Elektriker", "electrician", "noun"],\n  ["legen", "to lay / put", "verb"],\n  ["der Umzug", "move / relocation", "noun"],\n  ["die Spedition", "moving / freight company", "noun"],\n  ["die Festplatte", "hard drive", "noun"],\n  ["transportieren", "to transport", "verb"],\n  ["der Sicherheitsgrund", "safety reason", "noun"],\n  ["der Möbelpacker", "furniture mover", "noun"],\n  ["der Schrank", "cabinet / cupboard", "noun"],\n  ["der Büroraum", "office space", "noun"],\n  ["der Auftrag", "order / assignment", "noun"],\n  ["der Ausdruck", "expression", "noun"],\n  ["vergleichen", "to compare", "verb"],\n  ["der Mietvertrag", "rental contract / lease", "noun"],\n  ["unterschreiben", "to sign", "verb"],\n  ["das Möbelhaus", "furniture store", "noun"],\n  ["das Büromöbel", "office furniture", "noun"],\n  ["ansehen", "to look at / view", "verb"],\n  ["der Nachsendeantrag", "mail forwarding request", "noun"],\n  ["der Umzugskarton", "moving box", "noun"],\n  ["packen", "to pack", "verb"],\n  ["das Internetportal", "internet portal", "noun"],\n  ["der Einkommensnachweis", "proof of income", "noun"],\n  ["das Maklerbüro", "real estate agency", "noun"],\n  ["kontaktieren", "to contact", "verb"],\n  ["ummelden", "to re-register", "verb"],\n  ["beauftragen", "to commission / hire", "verb"],\n  ["die Kaution", "deposit", "noun"],\n  ["hinterlegen", "to deposit", "verb"],\n  ["der Grundriss", "floor plan", "noun"],\n  ["die Vermieterin", "landlady", "noun"],\n  ["die Liste", "list", "noun"],\n  ["der Mitarbeiter", "employee / staff member", "noun"],\n  ["der Handwerker", "tradesperson / craftsman", "noun"],\n  ["der Fliesenleger", "tiler", "noun"],\n  ["der Schreiner", "carpenter", "noun"],\n  ["fliesen", "to tile", "verb"],\n  ["der Maler", "painter", "noun"],\n  ["der Installateur", "plumber / installer", "noun"],\n  ["holen", "to fetch / get", "verb"],\n  ["der Dachdecker", "roofer", "noun"],\n  ["der Heizungsbauer", "heating technician", "noun"],\n  ["der Bodenleger", "flooring installer", "noun"],\n  ["der Maurer", "bricklayer / mason", "noun"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSet",
    ()=>addSet,
    "addWord",
    ()=>addWord,
    "deleteSet",
    ()=>deleteSet,
    "deleteWord",
    ()=>deleteWord,
    "getSet",
    ()=>getSet,
    "loadSets",
    ()=>loadSets,
    "saveSets",
    ()=>saveSets,
    "setMasteredWordIds",
    ()=>setMasteredWordIds,
    "updateSetName",
    ()=>updateSetName,
    "updateWord",
    ()=>updateWord
]);
const STORAGE_KEY = "lexikon.sets";
function loadSets() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.map((s)=>({
                ...s,
                masteredWordIds: s.masteredWordIds ?? []
            }));
    } catch  {
        return [];
    }
}
function saveSets(sets) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sets));
}
function addSet(set) {
    const sets = [
        set,
        ...loadSets()
    ];
    saveSets(sets);
    return sets;
}
function addWord(setId, word) {
    const sets = loadSets().map((set)=>set.id === setId ? {
            ...set,
            words: [
                ...set.words,
                word
            ]
        } : set);
    saveSets(sets);
    return sets;
}
function deleteSet(id) {
    const sets = loadSets().filter((s)=>s.id !== id);
    saveSets(sets);
    return sets;
}
function getSet(id) {
    return loadSets().find((s)=>s.id === id);
}
function setMasteredWordIds(id, masteredWordIds) {
    const sets = loadSets().map((s)=>s.id === id ? {
            ...s,
            masteredWordIds
        } : s);
    saveSets(sets);
    return sets;
}
function deleteWord(setId, wordId) {
    const sets = loadSets().map((set)=>set.id === setId ? {
            ...set,
            words: set.words.filter((word)=>word.id !== wordId),
            masteredWordIds: set.masteredWordIds.filter((id)=>id !== wordId)
        } : set);
    saveSets(sets);
    return sets;
}
function updateWord(setId, wordId, changes) {
    const sets = loadSets().map((set)=>set.id === setId ? {
            ...set,
            words: set.words.map((word)=>word.id === wordId ? {
                    ...word,
                    ...changes
                } : word)
        } : set);
    saveSets(sets);
    return sets;
}
function updateSetName(setId, name) {
    const sets = loadSets().map((set)=>set.id === setId ? {
            ...set,
            name
        } : set);
    saveSets(sets);
    return sets;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/umzugData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UMZUG_SET_ID",
    ()=>UMZUG_SET_ID,
    "UMZUG_SET_NAME",
    ()=>UMZUG_SET_NAME,
    "getUmzugSet",
    ()=>getUmzugSet
]);
const RAW_WORDS = [
    [
        "der Umzug",
        "the move / relocation",
        "noun"
    ],
    [
        "die Umzugsfirma",
        "the moving company",
        "noun"
    ],
    [
        "der Umzugstag",
        "the moving day",
        "noun"
    ],
    [
        "das Angebot",
        "the offer / quote",
        "noun"
    ],
    [
        "die Nachfrage",
        "the inquiry / demand",
        "noun"
    ],
    [
        "das Detail",
        "the detail",
        "noun"
    ],
    [
        "der Kunde",
        "the customer (male)",
        "noun"
    ],
    [
        "die Kundin",
        "the customer (female)",
        "noun"
    ],
    [
        "die Spülmaschine",
        "the dishwasher",
        "noun"
    ],
    [
        "der Kaffeeautomat",
        "the coffee machine",
        "noun"
    ],
    [
        "das Regal",
        "the shelf",
        "noun"
    ],
    [
        "der Mitarbeiter",
        "the employee (male)",
        "noun"
    ],
    [
        "die Mitarbeiterin",
        "the employee (female)",
        "noun"
    ],
    [
        "das Büro",
        "the office",
        "noun"
    ],
    [
        "das Stockwerk",
        "the floor / storey",
        "noun"
    ],
    [
        "der Termin",
        "the appointment / date",
        "noun"
    ],
    [
        "der Schreibtisch",
        "the desk",
        "noun"
    ],
    [
        "das Möbel",
        "the piece of furniture",
        "noun"
    ],
    [
        "der Karton",
        "the box / carton",
        "noun"
    ],
    [
        "der Fixpreis",
        "the fixed price",
        "noun"
    ],
    [
        "der Samstagvormittag",
        "the Saturday morning",
        "noun"
    ],
    [
        "der Hof",
        "the courtyard",
        "noun"
    ],
    [
        "die Einbauküche",
        "the fitted kitchen",
        "noun"
    ],
    [
        "der Stock",
        "the floor / storey",
        "noun"
    ],
    [
        "die Parkmöglichkeit",
        "the parking option",
        "noun"
    ],
    [
        "der Anfang",
        "the beginning",
        "noun"
    ],
    [
        "der Dezember",
        "December",
        "noun"
    ],
    [
        "der Besichtigungstermin",
        "the viewing appointment",
        "noun"
    ],
    [
        "die Besichtigung",
        "the inspection / viewing",
        "noun"
    ],
    [
        "die Woche",
        "the week",
        "noun"
    ],
    [
        "der Aufzug",
        "the elevator / lift",
        "noun"
    ],
    [
        "die Situation",
        "the situation",
        "noun"
    ],
    [
        "die Notiz",
        "the note",
        "noun"
    ],
    [
        "der Imbiss",
        "the snack bar / eatery",
        "noun"
    ],
    [
        "der Name",
        "the name",
        "noun"
    ],
    [
        "der Tag",
        "the day",
        "noun"
    ],
    [
        "einholen",
        "to obtain / get",
        "verb"
    ],
    [
        "klären",
        "to clarify",
        "verb"
    ],
    [
        "verhandeln",
        "to negotiate",
        "verb"
    ],
    [
        "schicken",
        "to send",
        "verb"
    ],
    [
        "umziehen",
        "to move (house/office)",
        "verb"
    ],
    [
        "mitnehmen",
        "to take along",
        "verb"
    ],
    [
        "entsorgen",
        "to dispose of",
        "verb"
    ],
    [
        "können",
        "to be able to / can",
        "verb"
    ],
    [
        "wollen",
        "to want",
        "verb"
    ],
    [
        "müssen",
        "to have to / must",
        "verb"
    ],
    [
        "parken",
        "to park",
        "verb"
    ],
    [
        "möchten",
        "would like",
        "verb"
    ],
    [
        "abbauen",
        "to dismantle",
        "verb"
    ],
    [
        "sollen",
        "should / ought to",
        "verb"
    ],
    [
        "erledigen",
        "to handle / complete",
        "verb"
    ],
    [
        "packen",
        "to pack",
        "verb"
    ],
    [
        "ausbuchen",
        "to fully book / be booked out",
        "verb"
    ],
    [
        "entgegenkommen",
        "to meet halfway / accommodate",
        "verb"
    ],
    [
        "machen",
        "to do / make",
        "verb"
    ],
    [
        "haben",
        "to have",
        "verb"
    ],
    [
        "beauftragen",
        "to commission / hire",
        "verb"
    ],
    [
        "anbieten",
        "to offer",
        "verb"
    ],
    [
        "bleiben",
        "to stay / remain",
        "verb"
    ],
    [
        "mitkommen",
        "to come along",
        "verb"
    ],
    [
        "aufbauen",
        "to assemble / set up",
        "verb"
    ],
    [
        "tun",
        "to do",
        "verb"
    ],
    [
        "sein",
        "to be",
        "verb"
    ],
    [
        "gehen",
        "to go / work out",
        "verb"
    ],
    [
        "austauschen",
        "to exchange / discuss",
        "verb"
    ],
    [
        "arbeiten",
        "to work",
        "verb"
    ],
    [
        "genau",
        "exactly / precise",
        "other"
    ],
    [
        "neu",
        "new",
        "adjective"
    ],
    [
        "alt",
        "old",
        "adjective"
    ],
    [
        "groß",
        "big / large",
        "adjective"
    ],
    [
        "jetzig",
        "current",
        "adjective"
    ],
    [
        "selbst",
        "self / personally",
        "adverb"
    ],
    [
        "leider",
        "unfortunately",
        "adverb"
    ],
    [
        "früh",
        "early",
        "adjective"
    ],
    [
        "möglich",
        "possible",
        "adjective"
    ],
    [
        "nächst",
        "next",
        "adjective"
    ],
    [
        "übrig",
        "remaining / other",
        "adjective"
    ],
    [
        "gut",
        "good",
        "adjective"
    ],
    [
        "dann",
        "then",
        "adverb"
    ],
    [
        "mal",
        "sometimes / once",
        "adverb"
    ],
    [
        "bitte",
        "please",
        "adverb"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
const UMZUG_SET_ID = "aed92006-9161-46d9-b09b-7258a00942fe";
const UMZUG_SET_NAME = "Kapitel 1 - Umzug";
function getUmzugSet() {
    return {
        id: UMZUG_SET_ID,
        name: UMZUG_SET_NAME,
        createdAt: 0,
        sourceImageCount: 1,
        words: RAW_WORDS.map((word, index)=>({
                id: `${UMZUG_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["der Umzug", "the move / relocation", "noun"],\n  ["die Umzugsfirma", "the moving company", "noun"],\n  ["der Umzugstag", "the moving day", "noun"],\n  ["das Angebot", "the offer / quote", "noun"],\n  ["die Nachfrage", "the inquiry / demand", "noun"],\n  ["das Detail", "the detail", "noun"],\n  ["der Kunde", "the customer (male)", "noun"],\n  ["die Kundin", "the customer (female)", "noun"],\n  ["die Spülmaschine", "the dishwasher", "noun"],\n  ["der Kaffeeautomat", "the coffee machine", "noun"],\n  ["das Regal", "the shelf", "noun"],\n  ["der Mitarbeiter", "the employee (male)", "noun"],\n  ["die Mitarbeiterin", "the employee (female)", "noun"],\n  ["das Büro", "the office", "noun"],\n  ["das Stockwerk", "the floor / storey", "noun"],\n  ["der Termin", "the appointment / date", "noun"],\n  ["der Schreibtisch", "the desk", "noun"],\n  ["das Möbel", "the piece of furniture", "noun"],\n  ["der Karton", "the box / carton", "noun"],\n  ["der Fixpreis", "the fixed price", "noun"],\n  ["der Samstagvormittag", "the Saturday morning", "noun"],\n  ["der Hof", "the courtyard", "noun"],\n  ["die Einbauküche", "the fitted kitchen", "noun"],\n  ["der Stock", "the floor / storey", "noun"],\n  ["die Parkmöglichkeit", "the parking option", "noun"],\n  ["der Anfang", "the beginning", "noun"],\n  ["der Dezember", "December", "noun"],\n  ["der Besichtigungstermin", "the viewing appointment", "noun"],\n  ["die Besichtigung", "the inspection / viewing", "noun"],\n  ["die Woche", "the week", "noun"],\n  ["der Aufzug", "the elevator / lift", "noun"],\n  ["die Situation", "the situation", "noun"],\n  ["die Notiz", "the note", "noun"],\n  ["der Imbiss", "the snack bar / eatery", "noun"],\n  ["der Name", "the name", "noun"],\n  ["der Tag", "the day", "noun"],\n  ["einholen", "to obtain / get", "verb"],\n  ["klären", "to clarify", "verb"],\n  ["verhandeln", "to negotiate", "verb"],\n  ["schicken", "to send", "verb"],\n  ["umziehen", "to move (house/office)", "verb"],\n  ["mitnehmen", "to take along", "verb"],\n  ["entsorgen", "to dispose of", "verb"],\n  ["können", "to be able to / can", "verb"],\n  ["wollen", "to want", "verb"],\n  ["müssen", "to have to / must", "verb"],\n  ["parken", "to park", "verb"],\n  ["möchten", "would like", "verb"],\n  ["abbauen", "to dismantle", "verb"],\n  ["sollen", "should / ought to", "verb"],\n  ["erledigen", "to handle / complete", "verb"],\n  ["packen", "to pack", "verb"],\n  ["ausbuchen", "to fully book / be booked out", "verb"],\n  ["entgegenkommen", "to meet halfway / accommodate", "verb"],\n  ["machen", "to do / make", "verb"],\n  ["haben", "to have", "verb"],\n  ["beauftragen", "to commission / hire", "verb"],\n  ["anbieten", "to offer", "verb"],\n  ["bleiben", "to stay / remain", "verb"],\n  ["mitkommen", "to come along", "verb"],\n  ["aufbauen", "to assemble / set up", "verb"],\n  ["tun", "to do", "verb"],\n  ["sein", "to be", "verb"],\n  ["gehen", "to go / work out", "verb"],\n  ["austauschen", "to exchange / discuss", "verb"],\n  ["arbeiten", "to work", "verb"],\n  ["genau", "exactly / precise", "other"],\n  ["neu", "new", "adjective"],\n  ["alt", "old", "adjective"],\n  ["groß", "big / large", "adjective"],\n  ["jetzig", "current", "adjective"],\n  ["selbst", "self / personally", "adverb"],\n  ["leider", "unfortunately", "adverb"],\n  ["früh", "early", "adjective"],\n  ["möglich", "possible", "adjective"],\n  ["nächst", "next", "adjective"],\n  ["übrig", "remaining / other", "adjective"],\n  ["gut", "good", "adjective"],\n  ["dann", "then", "adverb"],\n  ["mal", "sometimes / once", "adverb"],\n  ["bitte", "please", "adverb"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/wordBank.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Placeholder vocabulary used to simulate photo-to-flashcard extraction.
// A real implementation would send images to a vision/OCR model here.
__turbopack_context__.s([
    "WORD_BANK",
    ()=>WORD_BANK,
    "mockExtractVocab",
    ()=>mockExtractVocab
]);
const WORD_BANK = [
    {
        german: "die Herausforderung",
        english: "the challenge",
        pos: "noun",
        example: "Der neue Job ist eine große Herausforderung."
    },
    {
        german: "die Voraussetzung",
        english: "the precondition",
        pos: "noun",
        example: "Gute Deutschkenntnisse sind eine Voraussetzung für den Job."
    },
    {
        german: "die Auswirkung",
        english: "the effect; impact",
        pos: "noun",
        example: "Der Klimawandel hat schwere Auswirkungen."
    },
    {
        german: "die Verantwortung",
        english: "the responsibility",
        pos: "noun",
        example: "Sie übernimmt viel Verantwortung im Team."
    },
    {
        german: "die Entwicklung",
        english: "the development",
        pos: "noun",
        example: "Die technische Entwicklung geht sehr schnell."
    },
    {
        german: "die Umweltverschmutzung",
        english: "environmental pollution",
        pos: "noun",
        example: "Die Umweltverschmutzung nimmt weltweit zu."
    },
    {
        german: "die Nachhaltigkeit",
        english: "sustainability",
        pos: "noun",
        example: "Nachhaltigkeit ist ein wichtiges Thema in der Wirtschaft."
    },
    {
        german: "die Gerechtigkeit",
        english: "justice; fairness",
        pos: "noun",
        example: "Er kämpft für mehr soziale Gerechtigkeit."
    },
    {
        german: "die Vorurteil",
        english: "the prejudice",
        pos: "noun",
        example: "Man sollte keine Vorurteile gegenüber Fremden haben."
    },
    {
        german: "die Beziehung",
        english: "the relationship",
        pos: "noun",
        example: "Ihre Beziehung hält schon seit zehn Jahren."
    },
    {
        german: "die Wahrnehmung",
        english: "the perception",
        pos: "noun",
        example: "Die Wahrnehmung von Risiken ist sehr individuell."
    },
    {
        german: "die Wirtschaftskrise",
        english: "economic crisis",
        pos: "noun",
        example: "Die Wirtschaftskrise traf viele Unternehmen hart."
    },
    {
        german: "der Fortschritt",
        english: "the progress",
        pos: "noun",
        example: "Der technische Fortschritt verändert unseren Alltag."
    },
    {
        german: "der Wettbewerb",
        english: "the competition",
        pos: "noun",
        example: "Der Wettbewerb zwischen den Firmen ist hart."
    },
    {
        german: "der Zusammenhang",
        english: "the connection; context",
        pos: "noun",
        example: "Es gibt einen klaren Zusammenhang zwischen Sport und Gesundheit."
    },
    {
        german: "der Widerspruch",
        english: "the contradiction",
        pos: "noun",
        example: "Seine Aussagen enthalten einen Widerspruch."
    },
    {
        german: "der Eindruck",
        english: "the impression",
        pos: "noun",
        example: "Sie hinterließ einen guten Eindruck."
    },
    {
        german: "der Vorteil",
        english: "the advantage",
        pos: "noun",
        example: "Homeoffice bietet viele Vorteile."
    },
    {
        german: "der Nachteil",
        english: "the disadvantage",
        pos: "noun",
        example: "Jede Lösung hat auch Nachteile."
    },
    {
        german: "der Umgang",
        english: "the way of dealing with",
        pos: "noun",
        example: "Der Umgang mit Stress fällt vielen schwer."
    },
    {
        german: "berücksichtigen",
        english: "to take into account",
        pos: "verb",
        example: "Man muss alle Faktoren berücksichtigen."
    },
    {
        german: "sich auseinandersetzen (mit)",
        english: "to engage with; to deal with",
        pos: "verb",
        example: "Wir müssen uns mit dem Problem auseinandersetzen."
    },
    {
        german: "verursachen",
        english: "to cause",
        pos: "verb",
        example: "Der Sturm verursachte großen Schaden."
    },
    {
        german: "sich beschweren",
        english: "to complain",
        pos: "verb",
        example: "Er hat sich über den schlechten Service beschwert."
    },
    {
        german: "vermeiden",
        english: "to avoid",
        pos: "verb",
        example: "Man sollte unnötigen Stress vermeiden."
    },
    {
        german: "sich engagieren",
        english: "to get involved",
        pos: "verb",
        example: "Sie engagiert sich für den Umweltschutz."
    },
    {
        german: "bewältigen",
        english: "to cope with; to manage",
        pos: "verb",
        example: "Er musste viele Schwierigkeiten bewältigen."
    },
    {
        german: "verzichten (auf)",
        english: "to do without; to give up",
        pos: "verb",
        example: "Sie verzichtet auf Fleisch."
    },
    {
        german: "sich beziehen (auf)",
        english: "to refer to",
        pos: "verb",
        example: "Der Bericht bezieht sich auf aktuelle Studien."
    },
    {
        german: "widerspiegeln",
        english: "to reflect",
        pos: "verb",
        example: "Die Zahlen widerspiegeln den Trend deutlich."
    },
    {
        german: "einschätzen",
        english: "to assess; to estimate",
        pos: "verb",
        example: "Es ist schwer, die Lage richtig einzuschätzen."
    },
    {
        german: "sich anpassen",
        english: "to adapt",
        pos: "verb",
        example: "Unternehmen müssen sich schnell anpassen."
    },
    {
        german: "gewährleisten",
        english: "to guarantee; to ensure",
        pos: "verb",
        example: "Die Firma muss die Sicherheit gewährleisten."
    },
    {
        german: "vertreten",
        english: "to represent; to hold (a view)",
        pos: "verb",
        example: "Er vertritt eine klare Meinung."
    },
    {
        german: "erweitern",
        english: "to expand",
        pos: "verb",
        example: "Die Firma möchte ihr Angebot erweitern."
    },
    {
        german: "nachhaltig",
        english: "sustainable",
        pos: "adjective",
        example: "Wir brauchen eine nachhaltige Lösung."
    },
    {
        german: "widersprüchlich",
        english: "contradictory",
        pos: "adjective",
        example: "Die Angaben sind widersprüchlich."
    },
    {
        german: "unabhängig",
        english: "independent",
        pos: "adjective",
        example: "Sie möchte finanziell unabhängig sein."
    },
    {
        german: "vielfältig",
        english: "diverse; varied",
        pos: "adjective",
        example: "Die Aufgaben im Job sind sehr vielfältig."
    },
    {
        german: "angemessen",
        english: "appropriate; adequate",
        pos: "adjective",
        example: "Das Gehalt ist für die Arbeit angemessen."
    },
    {
        german: "überzeugend",
        english: "convincing",
        pos: "adjective",
        example: "Sein Argument war sehr überzeugend."
    },
    {
        german: "zuverlässig",
        english: "reliable",
        pos: "adjective",
        example: "Er ist ein sehr zuverlässiger Kollege."
    },
    {
        german: "gleichzeitig",
        english: "at the same time; simultaneously",
        pos: "adjective",
        example: "Sie arbeitet und studiert gleichzeitig."
    },
    {
        german: "allerdings",
        english: "however; though",
        pos: "adverb",
        example: "Ich stimme zu, allerdings mit Einschränkungen."
    },
    {
        german: "trotzdem",
        english: "nevertheless",
        pos: "adverb",
        example: "Es regnete, trotzdem gingen wir spazieren."
    },
    {
        german: "beispielsweise",
        english: "for example",
        pos: "adverb",
        example: "Man könnte beispielsweise mehr Bäume pflanzen."
    },
    {
        german: "insbesondere",
        english: "in particular; especially",
        pos: "adverb",
        example: "Insbesondere junge Leute nutzen soziale Medien."
    },
    {
        german: "sowohl … als auch",
        english: "both … and",
        pos: "conjunction",
        example: "Sie spricht sowohl Deutsch als auch Französisch."
    },
    {
        german: "obwohl",
        english: "although",
        pos: "conjunction",
        example: "Obwohl es spät war, blieben wir noch."
    }
];
function mockExtractVocab() {
    return [
        ...WORD_BANK
    ].sort(()=>Math.random() - 0.5);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0rb5ycm._.js.map