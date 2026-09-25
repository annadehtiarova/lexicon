module.exports = [
"[project]/src/app/sets/[id]/StudySetClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudySetClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wordBank.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/umzugData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adilsJobData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/problemData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emailHausverwaltungData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$CardsMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/CardsMode.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MultipleChoiceMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/MultipleChoiceMode.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$TypingMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/TypingMode.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MatchingMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modes/MatchingMode.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
const MODES = [
    {
        key: "cards",
        label: "Cards",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesIcon"]
    },
    {
        key: "quiz",
        label: "Quiz",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListChecksIcon"]
    },
    {
        key: "write",
        label: "Write",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyboardIcon"]
    },
    {
        key: "match",
        label: "Match",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridIcon"]
    }
];
const KNOWN_NOUN_ARTICLES = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_BANK"].filter((word)=>word.pos === "noun").map((word)=>{
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
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArbeitsraeumeSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UMZUG_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUmzugSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADILS_JOB_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAdilsJobSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROBLEM_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProblemSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_HAUSVERWALTUNG_SET_ID"]) {
        const builtInSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEmailHausverwaltungSet"])();
        return {
            name: builtInSet.name,
            words: builtInSet.words,
            masteredWordIds: [],
            isPersisted: false
        };
    }
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSet"])(id);
    if (!stored) return null;
    return {
        name: stored.name,
        words: stored.words,
        masteredWordIds: stored.masteredWordIds,
        isPersisted: true
    };
}
function StudySetClient({ id }) {
    const [set, setSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cards");
    const [practiceBatch, setPracticeBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [masteredIds, setMasteredIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [exerciseProgress, setExerciseProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        cards: [],
        quiz: [],
        write: [],
        match: []
    });
    const [editingWordId, setEditingWordId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftGerman, setDraftGerman] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [draftEnglish, setDraftEnglish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [draftPos, setDraftPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("noun");
    const [draftArticle, setDraftArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("der");
    const [isAddingWord, setIsAddingWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newGerman, setNewGerman] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newEnglish, setNewEnglish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPos, setNewPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("noun");
    const [newExample, setNewExample] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordSearch, setWordSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const resolved = resolveSet(id);
        setSet(resolved);
        const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadExerciseProgress"])(id);
        setExerciseProgress(progress);
        setMasteredIds(new Set(resolved?.masteredWordIds ?? []));
    }, [
        id
    ]);
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(set?.words ?? []).map((word)=>({
                ...word,
                german: displayGerman(word),
                english: word.pos === "verb" && !word.english.toLowerCase().startsWith("to ") ? `to ${word.english.toLowerCase()}` : word.english.toLowerCase()
            })), [
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
    const markCorrect = (exercise, wordId)=>{
        setExerciseProgress((current)=>{
            if (current[exercise].includes(wordId)) return current;
            const next = {
                ...current,
                [exercise]: [
                    ...current[exercise],
                    wordId
                ]
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveExerciseProgress"])(id, next);
            const mastered = words.filter((word)=>Object.keys(next).every((key)=>next[key].includes(word.id))).map((word)=>word.id);
            setMasteredIds(new Set(mastered));
            return next;
        });
    };
    if (set === undefined) return null;
    if (set === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300",
                    children: "This study set couldn't be found."
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "rounded-full bg-[#c6e940] px-5 py-2 font-medium text-[#0e1a01] hover:opacity-90",
                    children: "Back home"
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    const handleKnewIt = (wordId)=>{
        markCorrect("cards", wordId);
    };
    const handleDeleteWord = (wordId)=>{
        if (!set.isPersisted) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteWord"])(id, wordId);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateWord"])(id, wordId, {
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWord"])(id, word);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-1 justify-center px-4 pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl border-x border-[#d0d9d2] bg-[#fffaf0] px-5 pb-10 shadow-[0_0_30px_rgba(8,117,141,0.08)] sm:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex w-fit items-center gap-1.5 text-sm text-[#08758d] hover:text-[#e76548]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {}, void 0, false, {
                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            "All sets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-heading text-4xl tracking-[-0.72px] text-[#172b35]",
                            children: set.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body pt-2 text-sm text-[#5d6f74]",
                            children: [
                                words.length,
                                " words · ",
                                masteredIds.size,
                                " mastered"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-10 w-full items-center rounded-none border-y-2 border-[#08758d] bg-[#dbeaec] p-1",
                            children: MODES.map(({ key, label, Icon })=>{
                                const active = mode === key;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMode(key),
                                    className: `flex h-full flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors ${active ? "bg-[#08758d] text-white" : "text-[#075a70] hover:bg-[#fffaf0]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 375,
                                            columnNumber: 19
                                        }, this),
                                        label
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 366,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        words.length > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between border-y border-[#e76548] bg-[#fff0df] px-4 py-2 text-sm text-[#075a70]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: practiceBatch === 0,
                                    onClick: ()=>setPracticeBatch((current)=>current - 1),
                                    className: "disabled:opacity-30",
                                    children: "Previous batch"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: practiceBatch === batchCount - 1,
                                    onClick: ()=>setPracticeBatch((current)=>current + 1),
                                    className: "disabled:opacity-30",
                                    children: "Next batch"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t-2 border-[#e76548] pb-6 pt-1",
                            children: [
                                mode === "cards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$CardsMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    words: practiceWords,
                                    masteredIds: masteredIds,
                                    onCorrect: handleKnewIt,
                                    onNextBatch: practiceBatch < batchCount - 1 ? ()=>setPracticeBatch((current)=>current + 1) : undefined
                                }, `cards-${practiceBatch}`, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                mode === "quiz" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MultipleChoiceMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        words: practiceWords,
                                        onCorrect: (wordId)=>markCorrect("quiz", wordId),
                                        onNextBatch: practiceBatch < batchCount - 1 ? ()=>setPracticeBatch((current)=>current + 1) : undefined
                                    }, `quiz-${practiceBatch}`, false, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 421,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this),
                                mode === "write" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$TypingMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        words: practiceWords,
                                        onCorrect: (wordId)=>markCorrect("write", wordId),
                                        onNextBatch: practiceBatch < batchCount - 1 ? ()=>setPracticeBatch((current)=>current + 1) : undefined
                                    }, `write-${practiceBatch}`, false, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this),
                                mode === "match" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modes$2f$MatchingMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        words: practiceWords,
                                        onCorrect: (wordId)=>markCorrect("match", wordId),
                                        onNextBatch: practiceBatch < batchCount - 1 ? ()=>setPracticeBatch((current)=>current + 1) : undefined
                                    }, `match-${practiceBatch}`, false, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-heading text-2xl text-[#172b35]",
                                    children: "Vocabulary notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                set.isPersisted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsAddingWord(true),
                                    className: "rounded-full border border-[#08758d] bg-[#08758d] px-4 py-2 text-sm font-semibold text-white",
                                    children: "Add word"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        isAddingWord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 border border-[#c7d1ca] bg-[#fff0df] p-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newGerman,
                                    onChange: (event)=>setNewGerman(event.target.value),
                                    placeholder: "German word",
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newEnglish,
                                    onChange: (event)=>setNewEnglish(event.target.value),
                                    placeholder: "English translation",
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: newPos,
                                    onChange: (event)=>setNewPos(event.target.value),
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "noun",
                                            children: "Noun"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "verb",
                                            children: "Verb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 473,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "adjective",
                                            children: "Adjective"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 473,
                                            columnNumber: 85
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "adverb",
                                            children: "Adverb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 473,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "other",
                                            children: "Other"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 473,
                                            columnNumber: 167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newExample,
                                    onChange: (event)=>setNewExample(event.target.value),
                                    placeholder: "German example (optional)",
                                    className: "rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: saveNewWord,
                                            className: "rounded-full bg-[#08758d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075a70]",
                                            children: "Save word"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsAddingWord(false),
                                            className: "rounded-full bg-[#20293a] px-4 py-2 text-sm text-white",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "search",
                            value: wordSearch,
                            onChange: (event)=>setWordSearch(event.target.value),
                            placeholder: "Search words, translations, or types",
                            className: "mt-4 h-11 w-full rounded-none border border-[#9bb8bc] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]",
                            "aria-label": "Search all words"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 overflow-hidden border border-[#c7d1ca] bg-[#fffaf0]",
                            children: visibleWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-between gap-4 px-5 py-3.5 ${i !== visibleWords.length - 1 ? "border-b border-[#d5ddd7]" : ""}`,
                                    children: editingWordId === word.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: draftGerman,
                                                onChange: (event)=>setDraftGerman(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "German word"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 504,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: draftEnglish,
                                                onChange: (event)=>setDraftEnglish(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "English translation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 513,
                                                columnNumber: 21
                                            }, this),
                                            draftPos === "noun" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: draftArticle,
                                                onChange: (event)=>setDraftArticle(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "Article",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "der",
                                                        children: "der"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "die",
                                                        children: "die"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "das",
                                                        children: "das"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 523,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: draftPos,
                                                onChange: (event)=>setDraftPos(event.target.value),
                                                className: "h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                                "aria-label": "Part of speech",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "noun",
                                                        children: "Noun"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "verb",
                                                        children: "Verb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "adjective",
                                                        children: "Adjective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "adverb",
                                                        children: "Adverb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 535,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>saveEditing(word.id),
                                                        className: "rounded-full bg-[#c6e940] px-4 py-1.5 text-xs font-semibold text-[#0e1a01]",
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: cancelEditing,
                                                        className: "rounded-full bg-[#dbeaec] px-4 py-1.5 text-xs text-[#075a70]",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 548,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 503,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    masteredIds.has(word.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#08758d]",
                                                        "aria-label": "Mastered"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>startEditing(word),
                                                                className: "text-left font-heading text-base tracking-[-0.32px] text-[#172b35]",
                                                                children: displayGerman(word)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-body pt-1 text-xs italic text-[#5d6f74]",
                                                                children: word.example
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 568,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex shrink-0 items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>startEditing(word),
                                                                className: "font-body text-right text-sm text-[#075a70]",
                                                                children: word.english
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-body pt-0.5 text-[11px] uppercase tracking-[0.55px] text-[#5d6f74]",
                                                                children: word.pos
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 23
                                                    }, this),
                                                    set.isPersisted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteWord(word.id),
                                                        className: "rounded-full p-1.5 text-[#5d6f74] hover:bg-[#fff0df] hover:text-[#e76548]",
                                                        "aria-label": `Delete ${word.german}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                                lineNumber: 585,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                        lineNumber: 567,
                                        columnNumber: 19
                                    }, this)
                                }, word.id, false, {
                                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
            lineNumber: 339,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sets/[id]/StudySetClient.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "ChevronDownIcon",
    ()=>ChevronDownIcon,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const base = "h-4 w-4";
function ChevronLeftIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function ChevronDownIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
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
function SparklesIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
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
function ListChecksIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3.5 6.5l1.5 1.5 3-3M3.5 12.5l1.5 1.5 3-3M9 6h11M9 12h11M9 18h11"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function KeyboardIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.5",
                y: "6",
                width: "19",
                height: "12",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function ColumnsIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "8",
                height: "16",
                rx: "1.5",
                strokeDasharray: "3 3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "4",
                width: "8",
                height: "16",
                rx: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function GridIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "3",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "13",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "13",
                width: "8",
                height: "8",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function XIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 6L6 18M6 6l12 12"
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
function CheckIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12l5 5L20 6"
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
function ArrowRightIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12h16M13 5l7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
function CameraIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7h2.5l1.2-2h8.6l1.2 2H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "13",
                r: "3.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
function ImagePlusIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "10",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 17l5-5 4 4 3-3 6 6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
function LayersIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l8 4-8 4-8-4 8-4Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 11l8 4 8-4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 15l8 4 8-4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
function BookOpenIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6.5c-1.6-1.2-3.7-1.7-6-1.7v13c2.3 0 4.4.5 6 1.7 1.6-1.2 3.7-1.7 6-1.7v-13c-2.3 0-4.4.5-6 1.7Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6.5v13"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
function SparkleIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
function TrashIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 261,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modes/CardsMode.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardsMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function CardsMode({ words, masteredIds, onCorrect, onNextBatch }) {
    const [cardOrder, setCardOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>words);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flipped, setFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const word = cardOrder[index];
    const total = cardOrder.length;
    const progress = total > 1 ? index / (total - 1) * 100 : 100;
    const advance = ()=>{
        setFlipped(false);
        setIndex((i)=>Math.min(i + 1, total - 1));
    };
    const goBack = ()=>{
        setFlipped(false);
        setIndex((i)=>Math.max(i - 1, 0));
    };
    const handleAgain = ()=>{
        const remaining = cardOrder.filter((card)=>card.id !== word.id);
        const insertionIndex = Math.min(index + 5, remaining.length);
        remaining.splice(insertionIndex, 0, word);
        setCardOrder(remaining);
        setFlipped(false);
        setIndex(Math.min(index, Math.max(remaining.length - 1, 0)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 w-full overflow-hidden bg-[#d5ddd7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-[#08758d] transition-all duration-300",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/modes/CardsMode.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setFlipped((f)=>!f),
                    className: "flex min-h-[256px] w-full flex-col items-center justify-center gap-3 border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]",
                    style: {
                        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(244,239,229,0.8))"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]",
                            children: flipped ? "English" : "German"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modes/CardsMode.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-4xl tracking-[-0.72px] text-[#172b35]",
                            children: flipped ? word.english : word.german
                        }, void 0, false, {
                            fileName: "[project]/src/components/modes/CardsMode.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-xs text-[#5d6f74]",
                            children: "Tap the card to reveal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modes/CardsMode.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modes/CardsMode.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goBack,
                        disabled: index === 0,
                        className: "flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] disabled:opacity-45",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            " Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAgain,
                                className: "flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    " Again"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onCorrect(word.id);
                                    advance();
                                },
                                className: "flex h-9 items-center gap-2 rounded-full bg-[#08758d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075a70]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    " I know it"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: advance,
                        className: "flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/CardsMode.tsx",
                                lineNumber: 113,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 117,
                columnNumber: 7
            }, this),
            index === total - 1 && onNextBatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onNextBatch,
                className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]",
                children: [
                    "Next batch ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/CardsMode.tsx",
                        lineNumber: 126,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/CardsMode.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/CardsMode.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modes/MatchingMode.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchingMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ROUND_SIZE = 6;
function shuffleWords(words) {
    return [
        ...words
    ].sort(()=>Math.random() - 0.5);
}
function buildTiles(words) {
    const tiles = words.slice(0, ROUND_SIZE).flatMap((w)=>[
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
function MatchingMode({ words, onCorrect, onNextBatch }) {
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>shuffleWords(words));
    const [tiles, setTiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>buildTiles(words));
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [matched, setMatched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [wrongPair, setWrongPair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const isDone = matched.size === tiles.length && tiles.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDone) return;
        const timer = window.setInterval(()=>setSeconds((value)=>value + 1), 1000);
        return ()=>window.clearInterval(timer);
    }, [
        isDone
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDone) return;
        if (queue.length > ROUND_SIZE) {
            const nextQueue = queue.slice(ROUND_SIZE);
            setQueue(nextQueue);
            setTiles(buildTiles(nextQueue));
            setMatched(new Set());
            setSelected(null);
            setWrongPair(null);
            return;
        }
        if (onNextBatch) onNextBatch();
    }, [
        isDone,
        onNextBatch,
        queue
    ]);
    const reshuffle = ()=>{
        const nextQueue = shuffleWords(words);
        setQueue(nextQueue);
        setTiles(buildTiles(nextQueue));
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
            onCorrect(tile.wordId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-between text-sm text-[#5d6f74]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "◷ ",
                            seconds,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 101,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            matched.size / 2,
                            " / ",
                            tiles.length / 2,
                            " pairs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 101,
                        columnNumber: 100
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid w-full grid-cols-2 gap-3 sm:grid-cols-3",
                children: tiles.map((tile)=>{
                    const isMatched = matched.has(tile.key);
                    const isSelected = selected?.key === tile.key;
                    const isWrong = wrongPair?.includes(tile.key);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleClick(tile),
                        disabled: isMatched,
                        className: `flex min-h-[96px] items-center justify-center rounded-[22px] border px-3 py-4 text-center text-sm font-medium transition-all ${isMatched ? "border-[#6f9f70] bg-[#78ae79] text-[#172b35]" : isWrong ? "border-red-500 bg-red-500/10 text-red-200" : isSelected ? "border-[#6f9f70] bg-[#dcebdc] text-[#172b35]" : "border-[#9bb8bc] bg-[#fffaf0] text-[#172b35] hover:-translate-y-0.5 hover:border-[#08758d]"}`,
                        children: tile.label
                    }, tile.key, false, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex w-full flex-col items-center gap-3 rounded-2xl border border-[rgba(198,233,64,0.3)] px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-center gap-2 text-sm font-semibold text-[#315500]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                                lineNumber: 131,
                                columnNumber: 87
                            }, this),
                            " ",
                            queue.length > ROUND_SIZE ? "Round complete" : "All words matched"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reshuffle,
                        className: "flex items-center gap-2 rounded-full bg-[#08758d] px-5 py-2 text-sm font-semibold text-white hover:bg-[#075a70]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            " Play again"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MatchingMode.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MatchingMode.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/MatchingMode.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modes/MultipleChoiceMode.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultipleChoiceMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
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
function MultipleChoiceMode({ words, onCorrect, onNextBatch }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const question = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildQuestion(words, index), [
        words,
        index
    ]);
    const handleSelect = (id)=>{
        if (selected) return;
        setSelected(id);
        if (id === question.correct.id) {
            setScore((s)=>s + 1);
            onCorrect(id);
        }
    };
    const next = ()=>{
        if (index === words.length - 1 && onNextBatch) {
            onNextBatch();
            return;
        }
        setSelected(null);
        setIndex((i)=>(i + 1) % words.length);
    };
    const answered = selected !== null;
    const answeredCount = index + (answered ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between text-xs text-[#5d6f74]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-body uppercase tracking-[2px]",
                        children: [
                            "Question ",
                            index + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            score,
                            " correct / ",
                            answeredCount,
                            " answered"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 h-1.5 w-full overflow-hidden bg-[#d5ddd7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-[#08758d] transition-all",
                    style: {
                        width: `${answeredCount / words.length * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex min-h-[224px] w-full flex-col items-center justify-center border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]",
                        children: "What does this mean?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading mt-3 text-4xl text-[#172b35]",
                        children: question.correct.german
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-3 text-xs ${selected === question.correct.id ? "text-[#08758d]" : "text-[#b44735]"}`,
                        children: selected === question.correct.id ? "Correct" : `Answer: ${question.correct.english}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 67,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-2",
                children: question.options.map((opt)=>{
                    const isCorrect = opt.id === question.correct.id;
                    const showState = selected !== null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(opt.id),
                        className: `flex min-h-[58px] items-center justify-between rounded-2xl border px-5 py-3 text-left text-sm transition-all ${showState && isCorrect ? "border-[#08758d] bg-[#e4f2f3] text-[#075a70]" : showState && opt.id === selected ? "border-[#e76548] bg-[#fff0df] text-[#a63d2d]" : showState ? "border-[#d5ddd7] bg-[#f0eee7] text-[#7a8789]" : "border-[#9bb8bc] bg-[#fffaf0] text-[#172b35] hover:-translate-y-0.5 hover:border-[#08758d]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: opt.english
                            }, void 0, false, {
                                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            showState && isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                                lineNumber: 83,
                                columnNumber: 42
                            }, this),
                            showState && opt.id === selected && !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                                lineNumber: 84,
                                columnNumber: 66
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: next,
                className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]",
                children: [
                    "Next word ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                        lineNumber: 95,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/MultipleChoiceMode.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modes/TypingMode.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypingMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function normalize(text) {
    return text.trim().toLowerCase().replace(/^(the|der|die|das)\s+/, "");
}
function TypingMode({ words, onCorrect, onNextBatch }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const word = words[index];
    const check = ()=>{
        if (!input.trim()) return;
        const isCorrect = normalize(input) === normalize(word.german);
        setResult(isCorrect ? "correct" : "incorrect");
        if (isCorrect) onCorrect(word.id);
    };
    const next = ()=>{
        if (index === words.length - 1 && onNextBatch) {
            onNextBatch();
            return;
        }
        setInput("");
        setResult(null);
        setIndex((i)=>(i + 1) % words.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-between text-xs text-[#9da5b5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "uppercase tracking-[2px]",
                        children: "Write"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 45,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            index + 1,
                            " of ",
                            words.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 45,
                        columnNumber: 130
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 h-1.5 w-full overflow-hidden bg-[#d5ddd7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-[#08758d]",
                    style: {
                        width: `${(index + (result ? 1 : 0)) / words.length * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/modes/TypingMode.tsx",
                    lineNumber: 46,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex min-h-[224px] w-full flex-col items-center justify-center border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-widest text-[#5d6f74]",
                        children: "Type the German word"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading mt-3 text-4xl text-[#172b35]",
                        children: word.english
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mt-5 w-full text-xs uppercase tracking-[1.8px] text-[#9da5b5]",
                htmlFor: "typing-answer",
                children: "Your answer"
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "typing-answer",
                value: input,
                onChange: (e)=>setInput(e.target.value),
                onKeyDown: (e)=>e.key === "Enter" && (result ? next() : check()),
                placeholder: "Type the German word",
                disabled: result !== null,
                className: "mt-2 h-12 w-full rounded-none border border-[#9bb8bc] bg-white px-5 text-base text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]"
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${result === "correct" ? "border-[#b7d83a] bg-[#f3f8d5] font-semibold text-[#315500]" : "border-[rgba(255,102,87,0.35)] text-[#ffb0a6]"}`,
                children: [
                    result === "correct" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 67,
                        columnNumber: 262
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 67,
                        columnNumber: 278
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: result === "correct" ? "Correct!" : `Correct answer: ${word.german}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/modes/TypingMode.tsx",
                        lineNumber: 67,
                        columnNumber: 288
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: result ? next : check,
                className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]",
                children: result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Next word ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {}, void 0, false, {
                            fileName: "[project]/src/components/modes/TypingMode.tsx",
                            lineNumber: 77,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modes/TypingMode.tsx",
                    lineNumber: 77,
                    columnNumber: 19
                }, this) : "Check answer"
            }, void 0, false, {
                fileName: "[project]/src/components/modes/TypingMode.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modes/TypingMode.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/adilsJobData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADILS_JOB_SET_ID",
    ()=>ADILS_JOB_SET_ID,
    "ADILS_JOB_SET_NAME",
    ()=>ADILS_JOB_SET_NAME,
    "getAdilsJobSet",
    ()=>getAdilsJobSet
]);
const RAW_WORDS = [
    [
        "der Job",
        "job",
        "noun"
    ],
    [
        "die E-Mail",
        "e-mail",
        "noun"
    ],
    [
        "stellen",
        "to place / put",
        "verb"
    ],
    [
        "gegenseitig",
        "each other",
        "adjective"
    ],
    [
        "das Hallo",
        "hello",
        "noun"
    ],
    [
        "beide",
        "both",
        "other"
    ],
    [
        "herzlich",
        "cordial / heartfelt",
        "adjective"
    ],
    [
        "der Glückwunsch",
        "congratulation",
        "noun"
    ],
    [
        "neu",
        "new",
        "adjective"
    ],
    [
        "das Büro",
        "office",
        "noun"
    ],
    [
        "mutig",
        "courageous",
        "adjective"
    ],
    [
        "die Power",
        "power",
        "noun"
    ],
    [
        "übrigens",
        "by the way",
        "adverb"
    ],
    [
        "die Neuigkeit",
        "news",
        "noun"
    ],
    [
        "der Monat",
        "month",
        "noun"
    ],
    [
        "beruflich",
        "professional",
        "adjective"
    ],
    [
        "gründen",
        "to found / establish",
        "verb"
    ],
    [
        "ziehen",
        "to move / pull",
        "verb"
    ],
    [
        "mittelgroß",
        "medium-sized",
        "adjective"
    ],
    [
        "die Firma",
        "company",
        "noun"
    ],
    [
        "bekommen",
        "to get / receive",
        "verb"
    ],
    [
        "der Mitarbeiter",
        "employee / staff member",
        "noun"
    ],
    [
        "die Mitarbeiterin",
        "female employee",
        "noun"
    ],
    [
        "das Badmöbel",
        "bathroom furniture",
        "noun"
    ],
    [
        "der Mensch",
        "person / human",
        "noun"
    ],
    [
        "die Behinderung",
        "disability",
        "noun"
    ],
    [
        "der Einkauf",
        "purchase / shopping",
        "noun"
    ],
    [
        "verantwortlich",
        "responsible",
        "adjective"
    ],
    [
        "sehr",
        "very",
        "adverb"
    ],
    [
        "ständig",
        "constant / constantly",
        "other"
    ],
    [
        "arbeiten",
        "to work",
        "verb"
    ],
    [
        "der Kollege",
        "male colleague",
        "noun"
    ],
    [
        "die Kollegin",
        "female colleague",
        "noun"
    ],
    [
        "der Kontakt",
        "contact",
        "noun"
    ],
    [
        "die Fortbildung",
        "training / further education",
        "noun"
    ],
    [
        "hoch",
        "high",
        "adjective"
    ],
    [
        "die Mietpreis",
        "rental price",
        "noun"
    ],
    [
        "die Wohnung",
        "apartment / housing",
        "noun"
    ],
    [
        "die Altstadt",
        "old town",
        "noun"
    ],
    [
        "finden",
        "to find",
        "verb"
    ],
    [
        "das Glück",
        "happiness / luck",
        "noun"
    ],
    [
        "die Einweihungsparty",
        "housewarming party",
        "noun"
    ],
    [
        "viel",
        "many / much",
        "other"
    ],
    [
        "der Dank",
        "thanks",
        "noun"
    ],
    [
        "die Einladung",
        "invitation",
        "noun"
    ],
    [
        "die Liebe",
        "love",
        "noun"
    ],
    [
        "der Gruß",
        "greeting",
        "noun"
    ],
    [
        "das Warum",
        "the why",
        "noun"
    ],
    [
        "umziehen",
        "to move house",
        "verb"
    ],
    [
        "der Begriff",
        "term / concept",
        "noun"
    ],
    [
        "zweit",
        "second",
        "adjective"
    ],
    [
        "der Ort",
        "place",
        "noun"
    ],
    [
        "die Art",
        "species / kind / type",
        "noun"
    ],
    [
        "weise",
        "wise",
        "adjective"
    ],
    [
        "der Grund",
        "reason",
        "noun"
    ],
    [
        "der Widerspruch",
        "contradiction",
        "noun"
    ],
    [
        "der Fokus",
        "focus",
        "noun"
    ],
    [
        "die Angabe",
        "information / detail",
        "noun"
    ],
    [
        "die Wann-warum-wie-wo-Regel",
        "when-why-how-where rule",
        "noun"
    ],
    [
        "zen",
        "Zen",
        "noun"
    ],
    [
        "wohin",
        "where to",
        "adverb"
    ],
    [
        "die Ich-habe",
        "the I have",
        "noun"
    ],
    [
        "erst",
        "first",
        "other"
    ],
    [
        "der Satz",
        "sentence / rate",
        "noun"
    ],
    [
        "das Kärtchen",
        "small card",
        "noun"
    ],
    [
        "spielen",
        "to play",
        "verb"
    ],
    [
        "der Pen",
        "pen",
        "noun"
    ],
    [
        "probieren",
        "to try",
        "verb"
    ],
    [
        "die Position",
        "position",
        "noun"
    ],
    [
        "stehen",
        "to stand",
        "verb"
    ],
    [
        "der März",
        "March",
        "noun"
    ],
    [
        "der Ausdruck",
        "expression",
        "noun"
    ],
    [
        "die Tabelle",
        "table",
        "noun"
    ],
    [
        "der Monat",
        "month",
        "noun"
    ],
    [
        "spät",
        "late",
        "adjective"
    ],
    [
        "der Nachmittag",
        "afternoon",
        "noun"
    ],
    [
        "draußen",
        "outside",
        "adverb"
    ],
    [
        "wegen",
        "because of / due to",
        "other"
    ],
    [
        "die Ausbildung",
        "training / education",
        "noun"
    ],
    [
        "das Problem",
        "problem",
        "noun"
    ],
    [
        "das Zentrum",
        "centre",
        "noun"
    ],
    [
        "gut",
        "good",
        "adjective"
    ],
    [
        "die Verkehrsanbindung",
        "transport connection",
        "noun"
    ],
    [
        "das Land",
        "country",
        "noun"
    ],
    [
        "die Entspannung",
        "relaxation",
        "noun"
    ],
    [
        "gestern",
        "yesterday",
        "adverb"
    ],
    [
        "der Vorort",
        "suburb",
        "noun"
    ],
    [
        "machen",
        "to make / do",
        "verb"
    ],
    [
        "das Kettenspiel",
        "chain game",
        "noun"
    ],
    [
        "bilden",
        "to form",
        "verb"
    ],
    [
        "ausdrücken",
        "to express",
        "verb"
    ],
    [
        "umziehen",
        "to move",
        "verb"
    ],
    [
        "viel",
        "much / many",
        "other"
    ],
    [
        "kommen",
        "to come",
        "verb"
    ],
    [
        "die Pflegerin",
        "nurse / caretaker",
        "noun"
    ],
    [
        "zuerst",
        "first",
        "adverb"
    ],
    [
        "der Umzug",
        "move / relocation",
        "noun"
    ]
].map(([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
const ADILS_JOB_SET_ID = "58f9f2b4-c4ca-4d67-ba44-941d194d2e16";
const ADILS_JOB_SET_NAME = "Kapitel 1 - Adils neuer Job";
function getAdilsJobSet() {
    return {
        id: ADILS_JOB_SET_ID,
        name: ADILS_JOB_SET_NAME,
        createdAt: 0,
        sourceImageCount: 1,
        words: RAW_WORDS.map((word, index)=>({
                id: `${ADILS_JOB_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
}),
"[project]/src/lib/arbeitsraeumeData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
].map(([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
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
}),
"[project]/src/lib/emailHausverwaltungData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMAIL_HAUSVERWALTUNG_SET_ID",
    ()=>EMAIL_HAUSVERWALTUNG_SET_ID,
    "EMAIL_HAUSVERWALTUNG_SET_NAME",
    ()=>EMAIL_HAUSVERWALTUNG_SET_NAME,
    "getEmailHausverwaltungSet",
    ()=>getEmailHausverwaltungSet
]);
const RAW_WORDS = [
    [
        "die E-Mail",
        "e-mail",
        "noun"
    ],
    [
        "die Hausverwaltung",
        "building management",
        "noun"
    ],
    [
        "der Gliederungspunkt",
        "breakdown point",
        "noun"
    ],
    [
        "der Einleitungssatz",
        "introduction",
        "noun"
    ],
    [
        "sehr",
        "very",
        "adverb"
    ],
    [
        "der Herr",
        "sir",
        "noun"
    ],
    [
        "deshalb",
        "therefore",
        "adverb"
    ],
    [
        "bitten",
        "to ask",
        "verb"
    ],
    [
        "der Grund",
        "reason",
        "noun"
    ],
    [
        "die Beanstandung",
        "complaint / objection",
        "noun"
    ],
    [
        "die Firma",
        "company",
        "noun"
    ],
    [
        "verständigen",
        "to communicate / notify",
        "verb"
    ],
    [
        "schaden",
        "to damage",
        "verb"
    ],
    [
        "das Schreiben",
        "letter",
        "noun"
    ],
    [
        "der Montag",
        "monday",
        "noun"
    ],
    [
        "der Freitag",
        "friday",
        "noun"
    ],
    [
        "zwischen",
        "between",
        "other"
    ],
    [
        "die Uhr",
        "clock / o'clock",
        "noun"
    ],
    [
        "das Büro",
        "office",
        "noun"
    ],
    [
        "der Bedarf",
        "need",
        "noun"
    ],
    [
        "können",
        "to be able to",
        "verb"
    ],
    [
        "die Schilderung",
        "description",
        "noun"
    ],
    [
        "ander",
        "other",
        "adjective"
    ],
    [
        "der Termin",
        "date / appointment",
        "noun"
    ],
    [
        "vereinbaren",
        "to arrange / agree upon",
        "verb"
    ],
    [
        "das Problem",
        "problem",
        "noun"
    ],
    [
        "vor",
        "before",
        "other"
    ],
    [
        "der Einzug",
        "move-in / collection",
        "noun"
    ],
    [
        "die Kaffeeküche",
        "coffee kitchen",
        "noun"
    ],
    [
        "leider",
        "unfortunately",
        "adverb"
    ],
    [
        "der Boden",
        "ground / floor",
        "noun"
    ],
    [
        "der Riss",
        "crack",
        "noun"
    ],
    [
        "die Küche",
        "kitchen",
        "noun"
    ],
    [
        "benutzen",
        "to use",
        "verb"
    ],
    [
        "die Bitte",
        "request / please",
        "noun"
    ],
    [
        "die Erledigung",
        "completion / handling",
        "noun"
    ],
    [
        "soeben",
        "just now",
        "adverb"
    ],
    [
        "besprechen",
        "to discuss",
        "verb"
    ],
    [
        "ihnen",
        "to you",
        "other"
    ],
    [
        "schriftlich",
        "in writing",
        "other"
    ],
    [
        "schildern",
        "to describe",
        "verb"
    ],
    [
        "die Erreichbarkeit",
        "accessibility",
        "noun"
    ],
    [
        "das Telefongespräch",
        "telephone call",
        "noun"
    ],
    [
        "viel",
        "much / many",
        "other"
    ],
    [
        "der Dank",
        "thanks",
        "noun"
    ],
    [
        "im Voraus",
        "in advance",
        "other"
    ],
    [
        "die Anrede",
        "salutation",
        "noun"
    ],
    [
        "freundlich",
        "friendly",
        "adjective"
    ],
    [
        "grüßen",
        "to greet",
        "verb"
    ],
    [
        "der Geschäftsführer",
        "managing director",
        "noun"
    ],
    [
        "der Schluss",
        "conclusion",
        "noun"
    ],
    [
        "der Gruß",
        "greetings",
        "noun"
    ],
    [
        "der Punkt",
        "point",
        "noun"
    ],
    [
        "erfinden",
        "to invent",
        "verb"
    ],
    [
        "brauchen",
        "to need",
        "verb"
    ],
    [
        "der Zweitschlüssel",
        "second key",
        "noun"
    ],
    [
        "neu",
        "new",
        "adjective"
    ],
    [
        "der Werkstattraum",
        "workshop room",
        "noun"
    ],
    [
        "der Malerbetrieb",
        "painting business",
        "noun"
    ],
    [
        "der Büroraum",
        "office space",
        "noun"
    ],
    [
        "streichen",
        "to paint / delete",
        "verb"
    ],
    [
        "möchten",
        "to want / would like",
        "verb"
    ],
    [
        "die Nachbesserung",
        "improvement / rectification",
        "noun"
    ],
    [
        "der Anruf",
        "call",
        "noun"
    ],
    [
        "der Boiler",
        "boiler",
        "noun"
    ],
    [
        "ausfallen",
        "to fail / be canceled",
        "verb"
    ],
    [
        "die Nachricht",
        "message",
        "noun"
    ],
    [
        "telefonisch",
        "by phone",
        "other"
    ],
    [
        "einmal",
        "once",
        "adverb"
    ],
    [
        "erinnern",
        "to remind / remember",
        "verb"
    ],
    [
        "haben",
        "to have",
        "verb"
    ],
    [
        "klären",
        "to clarify",
        "verb"
    ],
    [
        "falls",
        "if",
        "other"
    ],
    [
        "die Rückfrage",
        "query / follow-up question",
        "noun"
    ],
    [
        "anrufen",
        "to call",
        "verb"
    ],
    [
        "täglich",
        "daily",
        "other"
    ],
    [
        "die Werkstatt",
        "workshop",
        "noun"
    ],
    [
        "der Vorhang",
        "curtain",
        "noun"
    ],
    [
        "gut",
        "good",
        "adjective"
    ],
    [
        "der Tag",
        "day",
        "noun"
    ],
    [
        "die Frau",
        "woman / Ms.",
        "noun"
    ],
    [
        "die Situation",
        "situation",
        "noun"
    ],
    [
        "planen",
        "to plan",
        "verb"
    ],
    [
        "spielen",
        "to play",
        "verb"
    ],
    [
        "der Dialog",
        "dialogue",
        "noun"
    ]
].map(([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
const EMAIL_HAUSVERWALTUNG_SET_ID = "db410b05-cd3c-4a41-bf0c-ba2a5dbee787";
const EMAIL_HAUSVERWALTUNG_SET_NAME = "Kapitel 1 - Eine E-Mail an die Hausverwaltung";
function getEmailHausverwaltungSet() {
    return {
        id: EMAIL_HAUSVERWALTUNG_SET_ID,
        name: EMAIL_HAUSVERWALTUNG_SET_NAME,
        createdAt: 0,
        sourceImageCount: 1,
        words: RAW_WORDS.map((word, index)=>({
                id: `${EMAIL_HAUSVERWALTUNG_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
}),
"[project]/src/lib/problemData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROBLEM_SET_ID",
    ()=>PROBLEM_SET_ID,
    "PROBLEM_SET_NAME",
    ()=>PROBLEM_SET_NAME,
    "getProblemSet",
    ()=>getProblemSet
]);
const RAW_WORDS = [
    [
        "das Problem",
        "problem",
        "noun"
    ],
    [
        "die Hausverwaltung",
        "property management / house management",
        "noun"
    ],
    [
        "die Zeichnung",
        "drawing",
        "noun"
    ],
    [
        "einmal",
        "once",
        "adverb"
    ],
    [
        "das Büro",
        "office",
        "noun"
    ],
    [
        "lassen",
        "to let / leave",
        "verb"
    ],
    [
        "der Boden",
        "floor / ground",
        "noun"
    ],
    [
        "der Riss",
        "crack",
        "noun"
    ],
    [
        "fühlen",
        "to feel",
        "verb"
    ],
    [
        "sehr",
        "very",
        "adverb"
    ],
    [
        "die Kaffeeküche",
        "coffee kitchen",
        "noun"
    ],
    [
        "renovieren",
        "to renovate",
        "verb"
    ],
    [
        "die Angst",
        "fear",
        "noun"
    ],
    [
        "wirklich",
        "really",
        "other"
    ],
    [
        "die Ordnung",
        "order",
        "noun"
    ],
    [
        "können",
        "to be able to / can",
        "verb"
    ],
    [
        "die Küche",
        "kitchen",
        "noun"
    ],
    [
        "benutzen",
        "to use",
        "verb"
    ],
    [
        "schildern",
        "to describe / depict",
        "verb"
    ],
    [
        "mal",
        "times / once",
        "adverb"
    ],
    [
        "vorbeikommen",
        "to come by",
        "verb"
    ],
    [
        "das Folgende",
        "the following",
        "noun"
    ],
    [
        "bitten",
        "to ask / request",
        "verb"
    ],
    [
        "natürlich",
        "of course / natural",
        "other"
    ],
    [
        "das Problem",
        "problem",
        "noun"
    ],
    [
        "die Werkstatt",
        "workshop",
        "noun"
    ],
    [
        "ander",
        "other",
        "adjective"
    ],
    [
        "der Arbeitsraum",
        "workspace",
        "noun"
    ],
    [
        "geben",
        "to give",
        "verb"
    ],
    [
        "die Türklinke",
        "door handle",
        "noun"
    ],
    [
        "reparieren",
        "to repair",
        "verb"
    ],
    [
        "lösen",
        "to solve / dissolve",
        "verb"
    ],
    [
        "unten",
        "below / downstairs",
        "adverb"
    ],
    [
        "abgehen",
        "to come off / detach",
        "verb"
    ],
    [
        "anrufen",
        "to call",
        "verb"
    ],
    [
        "die Zentralheizung",
        "central heating",
        "noun"
    ],
    [
        "der Bescheid",
        "notice / information",
        "noun"
    ],
    [
        "sagen",
        "to say",
        "verb"
    ],
    [
        "hochziehen",
        "to pull up",
        "verb"
    ],
    [
        "werden",
        "to become / will",
        "verb"
    ],
    [
        "der Abfluss",
        "drain",
        "noun"
    ],
    [
        "das Spülbecken",
        "sink",
        "noun"
    ],
    [
        "kümmern",
        "to care / look after",
        "verb"
    ],
    [
        "der Rollladen",
        "roll-out shutter / roller blind",
        "noun"
    ],
    [
        "der Aufzug",
        "elevator",
        "noun"
    ],
    [
        "der Topf",
        "pot",
        "noun"
    ],
    [
        "der Abflussreiniger",
        "drain cleaner",
        "noun"
    ],
    [
        "verwenden",
        "to use",
        "verb"
    ],
    [
        "die Tür",
        "door",
        "noun"
    ],
    [
        "der Aktenschrank",
        "file cabinet",
        "noun"
    ],
    [
        "anschrauben",
        "to screw on",
        "verb"
    ],
    [
        "der Wasserhahn",
        "faucet / tap",
        "noun"
    ],
    [
        "die Toilette",
        "toilet",
        "noun"
    ],
    [
        "der Handwerker",
        "craftsman",
        "noun"
    ],
    [
        "das Türschloss",
        "door lock",
        "noun"
    ],
    [
        "abbrechen",
        "to break off / cancel",
        "verb"
    ],
    [
        "der Hausmeister",
        "caretaker / janitor",
        "noun"
    ],
    [
        "spielen",
        "to play",
        "verb"
    ],
    [
        "der Dialog",
        "dialogue",
        "noun"
    ],
    [
        "der Vermieter",
        "landlord / owner",
        "noun"
    ],
    [
        "der Mieter",
        "tenant",
        "noun"
    ],
    [
        "der Apparat",
        "apparatus / phone",
        "noun"
    ],
    [
        "gut",
        "good",
        "adjective"
    ],
    [
        "der Tag",
        "day",
        "noun"
    ],
    [
        "die Firma",
        "company",
        "noun"
    ],
    [
        "genau",
        "precise / more precisely",
        "other"
    ],
    [
        "kommen",
        "to come",
        "verb"
    ],
    [
        "die Danke",
        "thanks",
        "noun"
    ],
    [
        "viel",
        "much / many",
        "other"
    ],
    [
        "der Dank",
        "thanks",
        "noun"
    ]
].map(([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
const PROBLEM_SET_ID = "a5441fb1-8899-4efb-843b-f568be8a4df7";
const PROBLEM_SET_NAME = "Kapitel 1 - Problem";
function getProblemSet() {
    return {
        id: PROBLEM_SET_ID,
        name: PROBLEM_SET_NAME,
        createdAt: 0,
        sourceImageCount: 1,
        words: RAW_WORDS.map((word, index)=>({
                id: `${PROBLEM_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
}),
"[project]/src/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "loadBuiltInProgress",
    ()=>loadBuiltInProgress,
    "loadExerciseProgress",
    ()=>loadExerciseProgress,
    "loadSets",
    ()=>loadSets,
    "saveBuiltInProgress",
    ()=>saveBuiltInProgress,
    "saveExerciseProgress",
    ()=>saveExerciseProgress,
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
const BUILT_IN_PROGRESS_KEY = "lexikon.builtInProgress";
const EMPTY_PROGRESS = {
    cards: [],
    quiz: [],
    write: [],
    match: []
};
function loadExerciseProgress(setId) {
    if ("TURBOPACK compile-time truthy", 1) return {
        ...EMPTY_PROGRESS
    };
    //TURBOPACK unreachable
    ;
}
function saveExerciseProgress(setId, progress) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadBuiltInProgress(setId) {
    const progress = loadExerciseProgress(setId);
    return progress.cards.filter((id)=>progress.quiz.includes(id) && progress.write.includes(id) && progress.match.includes(id));
}
function saveBuiltInProgress(setId, masteredWordIds) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadSets() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveSets(sets) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
}),
"[project]/src/lib/umzugData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
].map(([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
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
}),
"[project]/src/lib/wordBank.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=src_1iokagj._.js.map