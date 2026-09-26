(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SetsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SetsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$extractVocab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/extractVocab.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/umzugData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adilsJobData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/problemData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emailHausverwaltungData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ausdrueckeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$spaetiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/spaetiData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gespraechMitMehmetData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gespraechMitMehmetData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beitraegeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beitraegeData.ts [app-client] (ecmascript)");
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
;
;
;
const BUILT_IN_SET_IDS = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMZUG_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADILS_JOB_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEM_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL_HAUSVERWALTUNG_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUSDRUECKE_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$spaetiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAETI_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gespraechMitMehmetData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GESPRAECH_MEHMET_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beitraegeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEITRAEGE_SET_ID"]
]);
const BUILT_IN_SETS = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArbeitsraeumeSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUmzugSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdilsJobSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblemSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmailHausverwaltungSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAusdrueckeSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$spaetiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpaetiSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gespraechMitMehmetData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGespraechMehmetSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beitraegeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBeitraegeSet"])()
];
function Home() {
    _s();
    const [sets, setSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUpload, setShowUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const builtInSets = BUILT_IN_SETS.map({
                "Home.useEffect.builtInSets": (set)=>({
                        ...set,
                        masteredWordIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBuiltInProgress"])(set.id)
                    })
            }["Home.useEffect.builtInSets"]);
            const customSets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSets"])().filter({
                "Home.useEffect.customSets": (set)=>!BUILT_IN_SET_IDS.has(set.id)
            }["Home.useEffect.customSets"]);
            setSets([
                ...builtInSets,
                ...customSets
            ]);
        }
    }["Home.useEffect"], []);
    const handleCreateSet = async (files, name)=>{
        try {
            const { topic, words } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$extractVocab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVocabFromImages"])(files);
            const newSet = {
                id: crypto.randomUUID(),
                name: name.trim() || topic || "New study set",
                createdAt: Date.now(),
                sourceImageCount: files.length,
                words: words.map((w)=>({
                        id: crypto.randomUUID(),
                        ...w
                    })),
                masteredWordIds: []
            };
            setSets([
                ...BUILT_IN_SETS.map((set)=>({
                        ...set,
                        masteredWordIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBuiltInProgress"])(set.id)
                    })),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSet"])(newSet).filter((set)=>!BUILT_IN_SET_IDS.has(set.id))
            ]);
            setNotice(null);
        } catch (error) {
            setNotice(error instanceof Error ? error.message : "Text extraction failed");
        }
    };
    const handleDelete = (id)=>{
        if (BUILT_IN_SET_IDS.has(id)) return;
        setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSet"])(id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex flex-1 flex-col items-center bg-white px-4 pb-16 pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-heading text-4xl font-semibold leading-tight tracking-[-1px] text-[#172b35]",
                        children: "Learn B2 Beruf Deutsch Vocabulary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body max-w-[460px] text-[13px] leading-5 text-[#60747a]",
                        children: "Practice German with flashcards, quizzes, and interactive exercises. Build your vocabulary and reinforce what you learn through different ways to practise."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-7 flex w-full flex-col items-center gap-4",
                children: [
                    showUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[760px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onCreateSet: handleCreateSet
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-xl border border-[#b9c9eb] bg-[#eef1ff] px-4 py-3 text-center text-sm text-[#172b35]",
                                children: notice
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SetsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sets: sets,
                        onDelete: handleDelete,
                        onToggleUpload: ()=>setShowUpload((open)=>!open),
                        uploadOpen: showUpload
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(Home, "n9r4RHpwa0jWxVjaiVeujna2tHw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SetsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SetsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/umzugData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adilsJobData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/problemData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emailHausverwaltungData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ausdrueckeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$spaetiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/spaetiData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gespraechMitMehmetData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gespraechMitMehmetData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beitraegeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beitraegeData.ts [app-client] (ecmascript)");
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
;
const BUILT_IN_SET_IDS = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMZUG_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADILS_JOB_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEM_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL_HAUSVERWALTUNG_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUSDRUECKE_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$spaetiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAETI_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gespraechMitMehmetData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GESPRAECH_MEHMET_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beitraegeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEITRAEGE_SET_ID"]
]);
function SetsList({ sets, onDelete, onToggleUpload, uploadOpen }) {
    _s();
    const [selectedChapter, setSelectedChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const visibleSets = sets.filter((set)=>{
        const chapter = set.name.match(/\bKapitel\s+(\d+)\b/i)?.[1];
        if (chapter) return chapter === selectedChapter;
        return !BUILT_IN_SET_IDS.has(set.id);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[760px] border-t-[3px] border-[#263fd6] pt-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayersIcon"], {
                                className: "h-3.5 w-3.5 text-[#d8f56d]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-heading text-base font-semibold text-[#172b35]",
                                children: "Your sets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    sets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleUpload,
                                "aria-label": uploadOpen ? "Close upload" : "Upload a set",
                                title: uploadOpen ? "Close upload" : "Upload a set",
                                className: "flex h-8 w-8 items-center justify-center rounded-full text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraIcon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-xs text-[#5d6f74]",
                                children: [
                                    visibleSets.length,
                                    " sets"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedChapter,
                                            onChange: (event)=>setSelectedChapter(event.target.value),
                                            className: "h-9 w-[120px] appearance-none rounded-full border border-[#263fd6] bg-white pl-4 pr-7 text-sm text-[#172b35] outline-none focus:border-[#1d2fb5]",
                                            "aria-label": "Filter by chapter",
                                            children: Array.from({
                                                length: 16
                                            }, (_, index)=>{
                                                const chapter = String(index + 1);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: chapter,
                                                    children: [
                                                        "Kapitel ",
                                                        chapter
                                                    ]
                                                }, chapter, true, {
                                                    fileName: "[project]/src/components/SetsList.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                                            className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#263fd6]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            visibleSets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 border border-dashed border-[#9bb8bc] bg-white py-10 text-center text-[#5d6f74]",
                children: "No sets found in this chapter."
            }, void 0, false, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2",
                children: visibleSets.map((set)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: BUILT_IN_SET_IDS.has(set.id) ? `/sets/${set.id}` : `/study/?id=${encodeURIComponent(set.id)}`,
                                "aria-label": `Study ${set.name}`,
                                className: "group block min-h-[176px] border border-[#dce4bd] bg-[#F7FAE7] p-6 text-[#172b35] shadow-[4px_4px_0_#e5ecec] transition-colors hover:border-[#263fd6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263fd6]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-heading text-xl font-semibold text-[#172b35]",
                                                children: set.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SetsList.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            !BUILT_IN_SET_IDS.has(set.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-7 w-7 shrink-0",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SetsList.tsx",
                                                lineNumber: 126,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SetsList.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    BUILT_IN_SET_IDS.has(set.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pt-1 text-[10px] font-semibold uppercase tracking-[0.7px] text-[#263fd6]",
                                        children: "Built-in set"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SetsList.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body pt-1.5 text-[11px] text-[#5d6f74]",
                                        children: [
                                            set.words.length,
                                            " words · ",
                                            set.masteredWordIds.length,
                                            " mastered"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SetsList.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 inline-flex h-9 items-center gap-1.5 rounded-full bg-[#d8f56d] px-4 text-sm font-semibold text-[#172b35]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookOpenIcon"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SetsList.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this),
                                            " Study"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SetsList.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            !BUILT_IN_SET_IDS.has(set.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onDelete(set.id),
                                className: "absolute right-4 top-4 z-10 rounded-full p-1.5 text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]",
                                "aria-label": `Delete ${set.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this)
                        ]
                    }, set.id, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SetsList.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(SetsList, "11rgElXFXFPImy/EZBLms9RLXrY=");
_c = SetsList;
var _c;
__turbopack_context__.k.register(_c, "SetsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UploadCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_IMAGES = 20;
function UploadCard({ onCreateSet }) {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNaming, setIsNaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [setName, setSetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadCard.useCallback[addFiles]": (incoming)=>{
            const imageFiles = Array.from(incoming).filter({
                "UploadCard.useCallback[addFiles].imageFiles": (f)=>f.type.startsWith("image/")
            }["UploadCard.useCallback[addFiles].imageFiles"]);
            setFiles({
                "UploadCard.useCallback[addFiles]": (prev)=>[
                        ...prev,
                        ...imageFiles
                    ].slice(0, MAX_IMAGES)
            }["UploadCard.useCallback[addFiles]"]);
        }
    }["UploadCard.useCallback[addFiles]"], []);
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
    };
    const handleCreate = ()=>{
        if (files.length === 0 || isCreating) return;
        setSetName("");
        setIsNaming(true);
    };
    const confirmCreate = async ()=>{
        const name = setName.trim();
        if (!name || files.length === 0 || isCreating) return;
        setIsCreating(true);
        setIsNaming(false);
        try {
            await onCreateSet(files, name);
            setFiles([]);
        } finally{
            setIsCreating(false);
        }
    };
    const canCreate = files.length > 0 && !isCreating;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[760px] rounded-2xl border-2 border-[#263fd6] bg-white p-7 shadow-[0_8px_0_rgba(38,63,214,0.1)]",
        style: {
            backgroundImage: "linear-gradient(135deg, rgba(238,241,255,0.55), rgba(248,251,220,0.55))"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: (e)=>{
                    e.preventDefault();
                    setIsDragging(true);
                },
                onDragLeave: ()=>setIsDragging(false),
                onDrop: handleDrop,
                onClick: ()=>inputRef.current?.click(),
                className: `flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-[1.667px] border-dashed px-6 py-10 text-center transition-colors ${isDragging ? "border-[#263fd6] bg-[#eef1ff]" : "border-[#9bb8bc] hover:border-[#263fd6]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        hidden: true,
                        onChange: (e)=>e.target.files && addFiles(e.target.files)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#263fd6] text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImagePlusIcon"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadCard.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading text-lg tracking-[-0.36px] text-[#172b35]",
                        children: files.length > 0 ? `${files.length} photo${files.length > 1 ? "s" : ""} ready` : "Drop photos of German text"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadCard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-sm text-[#5d6f74]",
                        children: [
                            "Book pages, menus, signs, handwritten notes — up to ",
                            MAX_IMAGES,
                            " ",
                            "images"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap justify-center gap-2 pt-1",
                        children: files.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-full bg-[#eef1ff] px-3 py-1 text-xs text-[#263fd6]",
                                children: f.name
                            }, `${f.name}-${i}`, false, {
                                fileName: "[project]/src/components/UploadCard.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadCard.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadCard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCreate,
                disabled: !canCreate,
                className: `mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] px-8 text-sm font-semibold text-[#172b35] shadow-[0_4px_0_rgba(38,63,214,0.12)] transition-opacity ${canCreate ? "opacity-100 hover:opacity-90" : "cursor-not-allowed opacity-50"}`,
                children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-4 w-4 animate-spin rounded-full border-2 border-[#0e1a01]/40 border-t-[#0e1a01]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        "Extracting vocabulary…"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UploadCard.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparkleIcon"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        " Create study set"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UploadCard.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UploadCard.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            isNaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-xl border border-[#dce4bd] bg-white p-6 text-left shadow-[4px_4px_0_rgba(38,63,214,0.1)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-xl text-[#172b35]",
                            children: "Name your study set"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body mt-2 text-sm text-[#5d6f74]",
                            children: "Give this vocabulary set a name before extraction starts."
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: setName,
                            onChange: (event)=>setSetName(event.target.value),
                            onKeyDown: (event)=>{
                                if (event.key === "Enter") confirmCreate();
                                if (event.key === "Escape") setIsNaming(false);
                            },
                            placeholder: "e.g. Moving house vocabulary",
                            className: "mt-5 h-11 w-full rounded-xl border border-[#9bb8bc] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#263fd6]",
                            "aria-label": "Study set name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsNaming(false),
                                    className: "rounded-full bg-[#eef1ff] px-4 py-2 text-sm text-[#263fd6]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadCard.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: confirmCreate,
                                    disabled: !setName.trim(),
                                    className: "rounded-full bg-[#d8f56d] px-5 py-2 text-sm font-semibold text-[#172b35] disabled:cursor-not-allowed disabled:opacity-40",
                                    children: "Create set"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadCard.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UploadCard.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UploadCard.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UploadCard.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(UploadCard, "dKN8R2KMRC/rLYONsuNS2oY0LeE=");
_c = UploadCard;
var _c;
__turbopack_context__.k.register(_c, "UploadCard");
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
function ChevronDownIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = ChevronDownIcon;
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
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c2 = SparklesIcon;
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
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c3 = ListChecksIcon;
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
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c4 = KeyboardIcon;
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
                lineNumber: 99,
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
_c5 = ColumnsIcon;
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
                lineNumber: 116,
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
                lineNumber: 117,
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
                lineNumber: 118,
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
_c6 = GridIcon;
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
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c7 = XIcon;
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
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c8 = CheckIcon;
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
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c9 = ArrowRightIcon;
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
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
_c10 = CameraIcon;
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
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "10",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c11 = ImagePlusIcon;
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
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 11l8 4 8-4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c12 = LayersIcon;
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
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c13 = BookOpenIcon;
function SparkleIcon({ className = base }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c14 = SparkleIcon;
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
            lineNumber: 261,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_c15 = TrashIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "ChevronLeftIcon");
__turbopack_context__.k.register(_c1, "ChevronDownIcon");
__turbopack_context__.k.register(_c2, "SparklesIcon");
__turbopack_context__.k.register(_c3, "ListChecksIcon");
__turbopack_context__.k.register(_c4, "KeyboardIcon");
__turbopack_context__.k.register(_c5, "ColumnsIcon");
__turbopack_context__.k.register(_c6, "GridIcon");
__turbopack_context__.k.register(_c7, "XIcon");
__turbopack_context__.k.register(_c8, "CheckIcon");
__turbopack_context__.k.register(_c9, "ArrowRightIcon");
__turbopack_context__.k.register(_c10, "CameraIcon");
__turbopack_context__.k.register(_c11, "ImagePlusIcon");
__turbopack_context__.k.register(_c12, "LayersIcon");
__turbopack_context__.k.register(_c13, "BookOpenIcon");
__turbopack_context__.k.register(_c14, "SparkleIcon");
__turbopack_context__.k.register(_c15, "TrashIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/adilsJobData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        "der Glückwunsch",
        "congratulation",
        "noun"
    ],
    [
        "die Power",
        "power",
        "noun"
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
        "erst",
        "first",
        "other"
    ],
    [
        "das Kärtchen",
        "small card",
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
        "der Ausdruck",
        "expression",
        "noun"
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
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
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
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["stellen", "to place / put", "verb"],\n  ["gegenseitig", "each other", "adjective"],\n  ["der Glückwunsch", "congratulation", "noun"],\n  ["die Power", "power", "noun"],\n  ["die Neuigkeit", "news", "noun"],\n  ["der Monat", "month", "noun"],\n  ["beruflich", "professional", "adjective"],\n  ["gründen", "to found / establish", "verb"],\n  ["ziehen", "to move / pull", "verb"],\n  ["mittelgroß", "medium-sized", "adjective"],\n  ["die Firma", "company", "noun"],\n  ["bekommen", "to get / receive", "verb"],\n  ["der Mitarbeiter", "employee / staff member", "noun"],\n  ["die Mitarbeiterin", "female employee", "noun"],\n  ["das Badmöbel", "bathroom furniture", "noun"],\n  ["der Mensch", "person / human", "noun"],\n  ["die Behinderung", "disability", "noun"],\n  ["der Einkauf", "purchase / shopping", "noun"],\n  ["verantwortlich", "responsible", "adjective"],\n  ["ständig", "constant / constantly", "other"],\n  ["arbeiten", "to work", "verb"],\n  ["der Kollege", "male colleague", "noun"],\n  ["die Kollegin", "female colleague", "noun"],\n  ["der Kontakt", "contact", "noun"],\n  ["die Fortbildung", "training / further education", "noun"],\n  ["hoch", "high", "adjective"],\n  ["die Mietpreis", "rental price", "noun"],\n  ["die Wohnung", "apartment / housing", "noun"],\n  ["die Altstadt", "old town", "noun"],\n  ["das Glück", "happiness / luck", "noun"],\n  ["die Einweihungsparty", "housewarming party", "noun"],\n  ["der Dank", "thanks", "noun"],\n  ["die Einladung", "invitation", "noun"],\n  ["die Liebe", "love", "noun"],\n  ["der Gruß", "greeting", "noun"],\n  ["das Warum", "the why", "noun"],\n  ["umziehen", "to move house", "verb"],\n  ["der Begriff", "term / concept", "noun"],\n  ["zweit", "second", "adjective"],\n  ["der Ort", "place", "noun"],\n  ["die Art", "species / kind / type", "noun"],\n  ["weise", "wise", "adjective"],\n  ["der Grund", "reason", "noun"],\n  ["der Widerspruch", "contradiction", "noun"],\n  ["der Fokus", "focus", "noun"],\n  ["die Angabe", "information / detail", "noun"],\n  ["erst", "first", "other"],\n  ["das Kärtchen", "small card", "noun"],\n  ["probieren", "to try", "verb"],\n  ["die Position", "position", "noun"],\n  ["stehen", "to stand", "verb"],\n  ["der Ausdruck", "expression", "noun"],\n  ["die Verkehrsanbindung", "transport connection", "noun"],\n  ["das Land", "country", "noun"],\n  ["die Entspannung", "relaxation", "noun"],\n  ["gestern", "yesterday", "adverb"],\n  ["der Vorort", "suburb", "noun"],\n  ["das Kettenspiel", "chain game", "noun"],\n  ["bilden", "to form", "verb"],\n  ["ausdrücken", "to express", "verb"],\n  ["umziehen", "to move", "verb"],\n  ["die Pflegerin", "nurse / caretaker", "noun"],\n  ["zuerst", "first", "adverb"],\n  ["der Umzug", "move / relocation", "noun"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
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
"[project]/src/lib/ausdrueckeData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUSDRUECKE_SET_ID",
    ()=>AUSDRUECKE_SET_ID,
    "AUSDRUECKE_SET_NAME",
    ()=>AUSDRUECKE_SET_NAME,
    "getAusdrueckeSet",
    ()=>getAusdrueckeSet
]);
const RAW_WORDS = [
    [
        "Hier arbeite ich.",
        "Here I work.",
        "phrase"
    ],
    [
        "Renovierung: Wer macht was?",
        "Renovation: Who does what?",
        "phrase"
    ],
    [
        "Drückt uns die Daumen!",
        "Keep your fingers crossed for us!",
        "phrase"
    ],
    [
        "Man muss schnell sein ...",
        "You have to be fast...",
        "phrase"
    ],
    [
        "Das hat ja super geklappt!",
        "That worked out super well!",
        "phrase"
    ],
    [
        "auf unsere Kosten achten",
        "to watch our costs",
        "phrase"
    ],
    [
        "in der engeren Auswahl",
        "in the shortlist / running",
        "phrase"
    ],
    [
        "auf dem Laufenden",
        "up to date / informed",
        "phrase"
    ],
    [
        "ein Erfolgserlebnis",
        "a sense of achievement",
        "phrase"
    ],
    [
        "von der Stadtmitte",
        "from the city center",
        "phrase"
    ],
    [
        "uns total freuen",
        "to be totally happy / excited",
        "phrase"
    ],
    [
        "mit unserem Team zusammensetzen",
        "to sit down with our team",
        "phrase"
    ],
    [
        "selbst anschließen",
        "to connect oneself / hook up oneself",
        "phrase"
    ],
    [
        "aus Sicherheitsgründen",
        "for safety reasons",
        "phrase"
    ],
    [
        "mit einem Sekt anstoßen",
        "to toast with sparkling wine",
        "phrase"
    ],
    [
        "den Mietvertrag unterschreiben",
        "to sign the lease",
        "phrase"
    ],
    [
        "einen Nachsendeantrag stellen",
        "to submit a mail forwarding request",
        "phrase"
    ],
    [
        "Objekte besichtigen",
        "to view properties",
        "phrase"
    ],
    [
        "vormerken lassen",
        "to have oneself put on a waiting list",
        "phrase"
    ],
    [
        "einen Maklerbüro kontaktieren",
        "to contact a real estate agency",
        "phrase"
    ],
    [
        "eine Kaution hinterlegen",
        "to deposit a security bond",
        "phrase"
    ],
    [
        "den Vermieter kontaktieren",
        "to contact the landlord",
        "phrase"
    ],
    [
        "die Möbel selbst abbauen",
        "to dismantle the furniture oneself",
        "phrase"
    ],
    [
        "die Kartons selbst packen",
        "to pack the boxes oneself",
        "phrase"
    ],
    [
        "bezüglich des Termins flexibel",
        "flexible regarding the appointment",
        "phrase"
    ],
    [
        "beim Preis etwas Spielraum",
        "some leeway with the price",
        "phrase"
    ],
    [
        "Termin entgegenkommen",
        "to accommodate an appointment",
        "phrase"
    ],
    [
        "Wände streichere ich selbst",
        "I paint the walls myself",
        "phrase"
    ],
    [
        "herzlichen Glückwunsch zum neuen Büro!",
        "congratulations on the new office!",
        "phrase"
    ],
    [
        "aus beruflichen Gründen",
        "for professional reasons",
        "phrase"
    ],
    [
        "von einem Monat",
        "a month ago",
        "phrase"
    ],
    [
        "eine Fortbildung bekommen",
        "to receive further training",
        "phrase"
    ],
    [
        "trotz der hohen Mietpreise",
        "despite the high rental prices",
        "phrase"
    ],
    [
        "Glück muss man haben!",
        "You have to have luck!",
        "phrase"
    ],
    [
        "vielen Dank für die Einladung!",
        "thank you very much for the invitation!",
        "phrase"
    ],
    [
        "Wir fühlen uns sehr wohl hier",
        "We feel very comfortable here",
        "phrase"
    ],
    [
        "Das geht dann schnell!",
        "That will go quickly then!",
        "phrase"
    ],
    [
        "Das kann doch nicht wahr sein!",
        "That can't be true!",
        "phrase"
    ],
    [
        "Ich kümmere mich",
        "I'll take care of it",
        "phrase"
    ],
    [
        "Die Zentralheizung funktioniert nicht",
        "The central heating is not working",
        "phrase"
    ],
    [
        "Bescheid sagen",
        "to let someone know / give notice",
        "phrase"
    ],
    [
        "den Hausmeister informieren",
        "to inform the caretaker",
        "phrase"
    ],
    [
        "Sehr geehrter Herr Heuermann",
        "Dear Mr. Heuermann",
        "phrase"
    ],
    [
        "Deshalb bitten wir Sie...",
        "Therefore we ask you...",
        "phrase"
    ],
    [
        "so schnell wie möglich",
        "as quickly as possible",
        "phrase"
    ],
    [
        "den Schaden beheben",
        "to fix the damage",
        "phrase"
    ],
    [
        "Bei Bedarf",
        "If needed / upon request",
        "phrase"
    ],
    [
        "einen anderen Termin vereinbaren",
        "to arrange a different appointment",
        "phrase"
    ],
    [
        "Vor unserem Einzug",
        "Before our move-in",
        "phrase"
    ],
    [
        "Ich beziehe mich auf...",
        "I am referring to...",
        "phrase"
    ],
    [
        "Wie soeben besprochen",
        "As just discussed",
        "phrase"
    ],
    [
        "Vielen Dank im Voraus!",
        "Many thanks in advance!",
        "phrase"
    ],
    [
        "Mit freundlichen Grüßen",
        "Kind regards",
        "phrase"
    ],
    [
        "Hiermit möchte ich Sie bitten...",
        "Hereby I would like to ask you...",
        "phrase"
    ],
    [
        "Wir hatten vereinbart, dass...",
        "We had agreed that...",
        "phrase"
    ],
    [
        "Falls Sie noch Rückfragen haben...",
        "If you have any further questions...",
        "phrase"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
const AUSDRUECKE_SET_ID = "ausdruecke-kapitel-1";
const AUSDRUECKE_SET_NAME = "Kapitel 1 - Ausdrücke";
function getAusdrueckeSet() {
    return {
        id: AUSDRUECKE_SET_ID,
        name: AUSDRUECKE_SET_NAME,
        createdAt: 0,
        sourceImageCount: 0,
        words: RAW_WORDS.map((word, index)=>({
                id: `${AUSDRUECKE_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["Hier arbeite ich.", "Here I work.", "phrase"],\n  ["Renovierung: Wer macht was?", "Renovation: Who does what?", "phrase"],\n  ["Drückt uns die Daumen!", "Keep your fingers crossed for us!", "phrase"],\n  ["Man muss schnell sein ...", "You have to be fast...", "phrase"],\n  ["Das hat ja super geklappt!", "That worked out super well!", "phrase"],\n  ["auf unsere Kosten achten", "to watch our costs", "phrase"],\n  ["in der engeren Auswahl", "in the shortlist / running", "phrase"],\n  ["auf dem Laufenden", "up to date / informed", "phrase"],\n  ["ein Erfolgserlebnis", "a sense of achievement", "phrase"],\n  ["von der Stadtmitte", "from the city center", "phrase"],\n  ["uns total freuen", "to be totally happy / excited", "phrase"],\n  ["mit unserem Team zusammensetzen", "to sit down with our team", "phrase"],\n  ["selbst anschließen", "to connect oneself / hook up oneself", "phrase"],\n  ["aus Sicherheitsgründen", "for safety reasons", "phrase"],\n  ["mit einem Sekt anstoßen", "to toast with sparkling wine", "phrase"],\n  ["den Mietvertrag unterschreiben", "to sign the lease", "phrase"],\n  ["einen Nachsendeantrag stellen", "to submit a mail forwarding request", "phrase"],\n  ["Objekte besichtigen", "to view properties", "phrase"],\n  ["vormerken lassen", "to have oneself put on a waiting list", "phrase"],\n  ["einen Maklerbüro kontaktieren", "to contact a real estate agency", "phrase"],\n  ["eine Kaution hinterlegen", "to deposit a security bond", "phrase"],\n  ["den Vermieter kontaktieren", "to contact the landlord", "phrase"],\n  ["die Möbel selbst abbauen", "to dismantle the furniture oneself", "phrase"],\n  ["die Kartons selbst packen", "to pack the boxes oneself", "phrase"],\n  ["bezüglich des Termins flexibel", "flexible regarding the appointment", "phrase"],\n  ["beim Preis etwas Spielraum", "some leeway with the price", "phrase"],\n  ["Termin entgegenkommen", "to accommodate an appointment", "phrase"],\n  ["Wände streichere ich selbst", "I paint the walls myself", "phrase"],\n  ["herzlichen Glückwunsch zum neuen Büro!", "congratulations on the new office!", "phrase"],\n  ["aus beruflichen Gründen", "for professional reasons", "phrase"],\n  ["von einem Monat", "a month ago", "phrase"],\n  ["eine Fortbildung bekommen", "to receive further training", "phrase"],\n  ["trotz der hohen Mietpreise", "despite the high rental prices", "phrase"],\n  ["Glück muss man haben!", "You have to have luck!", "phrase"],\n  ["vielen Dank für die Einladung!", "thank you very much for the invitation!", "phrase"],\n  ["Wir fühlen uns sehr wohl hier", "We feel very comfortable here", "phrase"],\n  ["Das geht dann schnell!", "That will go quickly then!", "phrase"],\n  ["Das kann doch nicht wahr sein!", "That can\'t be true!", "phrase"],\n  ["Ich kümmere mich", "I\'ll take care of it", "phrase"],\n  ["Die Zentralheizung funktioniert nicht", "The central heating is not working", "phrase"],\n  ["Bescheid sagen", "to let someone know / give notice", "phrase"],\n  ["den Hausmeister informieren", "to inform the caretaker", "phrase"],\n  ["Sehr geehrter Herr Heuermann", "Dear Mr. Heuermann", "phrase"],\n  ["Deshalb bitten wir Sie...", "Therefore we ask you...", "phrase"],\n  ["so schnell wie möglich", "as quickly as possible", "phrase"],\n  ["den Schaden beheben", "to fix the damage", "phrase"],\n  ["Bei Bedarf", "If needed / upon request", "phrase"],\n  ["einen anderen Termin vereinbaren", "to arrange a different appointment", "phrase"],\n  ["Vor unserem Einzug", "Before our move-in", "phrase"],\n  ["Ich beziehe mich auf...", "I am referring to...", "phrase"],\n  ["Wie soeben besprochen", "As just discussed", "phrase"],\n  ["Vielen Dank im Voraus!", "Many thanks in advance!", "phrase"],\n  ["Mit freundlichen Grüßen", "Kind regards", "phrase"],\n  ["Hiermit möchte ich Sie bitten...", "Hereby I would like to ask you...", "phrase"],\n  ["Wir hatten vereinbart, dass...", "We had agreed that...", "phrase"],\n  ["Falls Sie noch Rückfragen haben...", "If you have any further questions...", "phrase"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/beitraegeData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BEITRAEGE_SET_ID",
    ()=>BEITRAEGE_SET_ID,
    "BEITRAEGE_SET_NAME",
    ()=>BEITRAEGE_SET_NAME,
    "getBeitraegeSet",
    ()=>getBeitraegeSet
]);
const RAW_WORDS = [
    [
        "der Beitrag",
        "contribution / post",
        "noun"
    ],
    [
        "das Gründerforum",
        "founders' forum",
        "noun"
    ],
    [
        "negativ",
        "negative",
        "adjective"
    ],
    [
        "die Erfahrung",
        "experience",
        "noun"
    ],
    [
        "positiv",
        "positive",
        "adjective"
    ],
    [
        "der Tipp",
        "tip",
        "noun"
    ],
    [
        "der Modeladen",
        "fashion shop / boutique",
        "noun"
    ],
    [
        "aufmachen",
        "to open",
        "verb"
    ],
    [
        "der Abschluss",
        "completion / degree",
        "noun"
    ],
    [
        "die Schneiderin",
        "tailor / seamstress",
        "noun"
    ],
    [
        "die Nachfrage",
        "demand",
        "noun"
    ],
    [
        "die Bekannte",
        "acquaintance",
        "noun"
    ],
    [
        "nähen",
        "to sew",
        "verb"
    ],
    [
        "ähnlich",
        "similar",
        "adjective"
    ],
    [
        "selbstständig",
        "self-employed",
        "adjective"
    ],
    [
        "die Idee",
        "idea",
        "noun"
    ],
    [
        "abbringen",
        "to dissuade / take away",
        "verb"
    ],
    [
        "die Einnahme",
        "income / revenue",
        "noun"
    ],
    [
        "unternehmen",
        "to undertake",
        "verb"
    ],
    [
        "das Unternehmen",
        "enterprise",
        "noun"
    ],
    [
        "der Richtige",
        "the right one",
        "noun"
    ],
    [
        "schauen",
        "to look",
        "verb"
    ],
    [
        "das Stichwort",
        "keyword",
        "noun"
    ],
    [
        "der Existenzgründer",
        "business starter / founder",
        "noun"
    ],
    [
        "niemand",
        "no one",
        "other"
    ],
    [
        "der Blumenladen",
        "flower shop",
        "noun"
    ],
    [
        "pleitegehen",
        "to go bankrupt",
        "verb"
    ],
    [
        "der Laden",
        "shop / store",
        "noun"
    ],
    [
        "der Kredit",
        "credit / loan",
        "noun"
    ],
    [
        "aufnehmen",
        "to take out / record",
        "verb"
    ],
    [
        "zurückzahlen",
        "to pay back",
        "verb"
    ],
    [
        "niedergeschlagen",
        "dejected / downcast",
        "adjective"
    ],
    [
        "auf jeden Fall",
        "in any case",
        "phrase"
    ],
    [
        "prüfen",
        "to check / examine",
        "verb"
    ],
    [
        "die Finanzreserve",
        "financial reserve",
        "noun"
    ],
    [
        "die Bank",
        "bank",
        "noun"
    ],
    [
        "das Crowdfunding",
        "crowdfunding",
        "noun"
    ],
    [
        "die Möglichkeit",
        "possibility",
        "noun"
    ],
    [
        "die Ladengemeinschaft",
        "shop community / shared store",
        "noun"
    ],
    [
        "gründen",
        "to establish / found",
        "verb"
    ],
    [
        "die Gewerbefläche",
        "commercial space / industrial land",
        "noun"
    ],
    [
        "billig",
        "cheap",
        "adjective"
    ],
    [
        "der Meister",
        "master craftsman",
        "noun"
    ],
    [
        "der Himmel",
        "heaven / sky",
        "noun"
    ],
    [
        "fallen",
        "to fall",
        "verb"
    ],
    [
        "die Stadt",
        "city",
        "noun"
    ],
    [
        "das Seminar",
        "seminar",
        "noun"
    ],
    [
        "der Workshop",
        "workshop",
        "noun"
    ],
    [
        "einige",
        "some",
        "other"
    ],
    [
        "der Kiosk",
        "kiosk",
        "noun"
    ],
    [
        "vorher",
        "before / previously",
        "adverb"
    ],
    [
        "teilnehmen",
        "to participate",
        "verb"
    ],
    [
        "wirtschaftlich",
        "economic",
        "adjective"
    ],
    [
        "rechtlich",
        "legal",
        "adjective"
    ],
    [
        "die Lage",
        "location / situation",
        "noun"
    ],
    [
        "das Geschäft",
        "business",
        "noun"
    ],
    [
        "die Stelle",
        "spot / agency",
        "noun"
    ],
    [
        "der Eintrag",
        "entry",
        "noun"
    ],
    [
        "das Negationswort",
        "negation word",
        "noun"
    ],
    [
        "finden",
        "to find",
        "verb"
    ],
    [
        "markieren",
        "to mark",
        "verb"
    ],
    [
        "ergänzen",
        "to add / complete",
        "verb"
    ],
    [
        "früher",
        "earlier / previous",
        "adverb"
    ],
    [
        "der Erfolg",
        "success",
        "noun"
    ],
    [
        "unzufrieden",
        "dissatisfied",
        "adjective"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
const BEITRAEGE_SET_ID = "7a8d3b86-5336-4272-8d05-66f8ba48c7f4";
const BEITRAEGE_SET_NAME = "Kapitel 2 - Beiträge";
function getBeitraegeSet() {
    return {
        id: BEITRAEGE_SET_ID,
        name: BEITRAEGE_SET_NAME,
        createdAt: 0,
        sourceImageCount: 0,
        words: RAW_WORDS.map((word, index)=>({
                id: `${BEITRAEGE_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["der Beitrag", "contribution / post", "noun"],\n  ["das Gründerforum", "founders\' forum", "noun"],\n  ["negativ", "negative", "adjective"],\n  ["die Erfahrung", "experience", "noun"],\n  ["positiv", "positive", "adjective"],\n  ["der Tipp", "tip", "noun"],\n  ["der Modeladen", "fashion shop / boutique", "noun"],\n  ["aufmachen", "to open", "verb"],\n  ["der Abschluss", "completion / degree", "noun"],\n  ["die Schneiderin", "tailor / seamstress", "noun"],\n  ["die Nachfrage", "demand", "noun"],\n  ["die Bekannte", "acquaintance", "noun"],\n  ["nähen", "to sew", "verb"],\n  ["ähnlich", "similar", "adjective"],\n  ["selbstständig", "self-employed", "adjective"],\n  ["die Idee", "idea", "noun"],\n  ["abbringen", "to dissuade / take away", "verb"],\n  ["die Einnahme", "income / revenue", "noun"],\n  ["unternehmen", "to undertake", "verb"],\n  ["das Unternehmen", "enterprise", "noun"],\n  ["der Richtige", "the right one", "noun"],\n  ["schauen", "to look", "verb"],\n  ["das Stichwort", "keyword", "noun"],\n  ["der Existenzgründer", "business starter / founder", "noun"],\n  ["niemand", "no one", "other"],\n  ["der Blumenladen", "flower shop", "noun"],\n  ["pleitegehen", "to go bankrupt", "verb"],\n  ["der Laden", "shop / store", "noun"],\n  ["der Kredit", "credit / loan", "noun"],\n  ["aufnehmen", "to take out / record", "verb"],\n  ["zurückzahlen", "to pay back", "verb"],\n  ["niedergeschlagen", "dejected / downcast", "adjective"],\n  ["auf jeden Fall", "in any case", "phrase"],\n  ["prüfen", "to check / examine", "verb"],\n  ["die Finanzreserve", "financial reserve", "noun"],\n  ["die Bank", "bank", "noun"],\n  ["das Crowdfunding", "crowdfunding", "noun"],\n  ["die Möglichkeit", "possibility", "noun"],\n  ["die Ladengemeinschaft", "shop community / shared store", "noun"],\n  ["gründen", "to establish / found", "verb"],\n  ["die Gewerbefläche", "commercial space / industrial land", "noun"],\n  ["billig", "cheap", "adjective"],\n  ["der Meister", "master craftsman", "noun"],\n  ["der Himmel", "heaven / sky", "noun"],\n  ["fallen", "to fall", "verb"],\n  ["die Stadt", "city", "noun"],\n  ["das Seminar", "seminar", "noun"],\n  ["der Workshop", "workshop", "noun"],\n  ["einige", "some", "other"],\n  ["der Kiosk", "kiosk", "noun"],\n  ["vorher", "before / previously", "adverb"],\n  ["teilnehmen", "to participate", "verb"],\n  ["wirtschaftlich", "economic", "adjective"],\n  ["rechtlich", "legal", "adjective"],\n  ["die Lage", "location / situation", "noun"],\n  ["das Geschäft", "business", "noun"],\n  ["die Stelle", "spot / agency", "noun"],\n  ["der Eintrag", "entry", "noun"],\n  ["das Negationswort", "negation word", "noun"],\n  ["finden", "to find", "verb"],\n  ["markieren", "to mark", "verb"],\n  ["ergänzen", "to add / complete", "verb"],\n  ["früher", "earlier / previous", "adverb"],\n  ["der Erfolg", "success", "noun"],\n  ["unzufrieden", "dissatisfied", "adjective"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emailHausverwaltungData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        "die Schilderung",
        "description",
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
        "klären",
        "to clarify",
        "verb"
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
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
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
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["die Hausverwaltung", "building management", "noun"],\n  ["der Gliederungspunkt", "breakdown point", "noun"],\n  ["der Einleitungssatz", "introduction", "noun"],\n  ["bitten", "to ask", "verb"],\n  ["der Grund", "reason", "noun"],\n  ["die Beanstandung", "complaint / objection", "noun"],\n  ["die Firma", "company", "noun"],\n  ["verständigen", "to communicate / notify", "verb"],\n  ["schaden", "to damage", "verb"],\n  ["das Schreiben", "letter", "noun"],\n  ["das Büro", "office", "noun"],\n  ["der Bedarf", "need", "noun"],\n  ["die Schilderung", "description", "noun"],\n  ["vereinbaren", "to arrange / agree upon", "verb"],\n  ["das Problem", "problem", "noun"],\n  ["der Einzug", "move-in / collection", "noun"],\n  ["die Kaffeeküche", "coffee kitchen", "noun"],\n  ["der Boden", "ground / floor", "noun"],\n  ["der Riss", "crack", "noun"],\n  ["die Küche", "kitchen", "noun"],\n  ["die Bitte", "request / please", "noun"],\n  ["die Erledigung", "completion / handling", "noun"],\n  ["soeben", "just now", "adverb"],\n  ["besprechen", "to discuss", "verb"],\n  ["schriftlich", "in writing", "other"],\n  ["schildern", "to describe", "verb"],\n  ["die Erreichbarkeit", "accessibility", "noun"],\n  ["das Telefongespräch", "telephone call", "noun"],\n  ["der Dank", "thanks", "noun"],\n  ["im Voraus", "in advance", "other"],\n  ["die Anrede", "salutation", "noun"],\n  ["freundlich", "friendly", "adjective"],\n  ["grüßen", "to greet", "verb"],\n  ["der Geschäftsführer", "managing director", "noun"],\n  ["der Schluss", "conclusion", "noun"],\n  ["der Gruß", "greetings", "noun"],\n  ["erfinden", "to invent", "verb"],\n  ["brauchen", "to need", "verb"],\n  ["der Zweitschlüssel", "second key", "noun"],\n  ["der Werkstattraum", "workshop room", "noun"],\n  ["der Malerbetrieb", "painting business", "noun"],\n  ["der Büroraum", "office space", "noun"],\n  ["streichen", "to paint / delete", "verb"],\n  ["möchten", "to want / would like", "verb"],\n  ["die Nachbesserung", "improvement / rectification", "noun"],\n  ["der Anruf", "call", "noun"],\n  ["der Boiler", "boiler", "noun"],\n  ["ausfallen", "to fail / be canceled", "verb"],\n  ["die Nachricht", "message", "noun"],\n  ["telefonisch", "by phone", "other"],\n  ["einmal", "once", "adverb"],\n  ["erinnern", "to remind / remember", "verb"],\n  ["klären", "to clarify", "verb"],\n  ["die Rückfrage", "query / follow-up question", "noun"],\n  ["anrufen", "to call", "verb"],\n  ["täglich", "daily", "other"],\n  ["die Werkstatt", "workshop", "noun"],\n  ["der Vorhang", "curtain", "noun"],\n  ["gut", "good", "adjective"],\n  ["die Situation", "situation", "noun"],\n  ["planen", "to plan", "verb"],\n  ["spielen", "to play", "verb"],\n  ["der Dialog", "dialogue", "noun"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/extractVocab.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractVocabFromImages",
    ()=>extractVocabFromImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tesseract.js/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$huggingface$2f$transformers$2f$dist$2f$transformers$2e$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@huggingface/transformers/dist/transformers.web.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wordBank.ts [app-client] (ecmascript)");
;
;
;
async function prepareImage(file) {
    const bitmap = await createImageBitmap(file);
    const maxDimension = 2400;
    const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
    if (scale === 1) {
        bitmap.close();
        return file;
    }
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const context = canvas.getContext("2d");
    if (!context) {
        bitmap.close();
        return file;
    }
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise((resolve)=>canvas.toBlob(resolve, "image/jpeg", 0.85));
    return blob ? new File([
        blob
    ], `${file.name}.jpg`, {
        type: "image/jpeg"
    }) : file;
}
function normalizeWord(word) {
    return word.toLowerCase().trim().replace(/[.,;:!?()[\]{}"„“”]/g, "").replace(/\s+/g, " ");
}
function removeArticle(word) {
    return word.replace(/^(der|die|das|den|dem|des|ein|eine|einer|einem|einen)\s+/i, "").trim();
}
const GERMAN_FUNCTION_WORDS = new Set("aber als am an auch auf aus bei bin bis das dass dein dem den der des die du ein eine einem einen einer eines er es für gegen haben hat ich im in ist ja kein mit nach nicht nur oder sie sind und vom von war was wir zu zum zur".split(" "));
const COMMON_PERSON_NAMES = new Set("anna andreas anton ben benjamin carla carmen christian christina daniel david denise dieter dirk dominik elena elias emil emma eric erika felix finn florian franz friedrich gabriel georg gregor hans hannah heike helena henrik henriette holger ines ingrid jan jana jasmin johann johanna jonas josef julia julian justin karl karla katharina katja klaus konrad laura lea lena leon leonard lia linda lisa lorenz lukas marc marcel maria marie mario markus martin matthias max maximilian maya michael miriam monika nadine niklas nico nina noah norbert oliver oskar otto paul paula peter philipp sabine sara sarah simon sofia sophie stefan stefanie susanne theo theresa thomas tim tina tobias tom ulrich ursula viktor walter wilhelm wilma wolfgang yvonne zara zoe".split(" "));
function classifyUnknownWord(word) {
    const lower = word.toLowerCase();
    if (GERMAN_FUNCTION_WORDS.has(lower) || lower.length < 3) return null;
    if (COMMON_PERSON_NAMES.has(lower)) return null;
    if (/(en|ern|eln|ieren)$/.test(lower)) return "verb";
    if (/(ig|lich|isch|bar|sam|los|voll|weise)$/.test(lower)) return "adjective";
    if (/(weise|wärts|her|hin|mal|so|sehr|heute|morgen|gestern)$/.test(lower)) {
        return "adverb";
    }
    if (/^[A-ZÄÖÜ]/.test(word) || /(ung|heit|keit|schaft|tion|tät|ik|ei)$/.test(lower)) {
        return "noun";
    }
    return null;
}
let translatorPromise = null;
function getTranslator() {
    translatorPromise ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$huggingface$2f$transformers$2f$dist$2f$transformers$2e$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeline"])("translation", "Xenova/opus-mt-de-en");
    return translatorPromise;
}
async function findVocabulary(text) {
    const knownTranslations = new Map();
    for (const entry of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORD_BANK"]){
        knownTranslations.set(normalizeWord(entry.german), entry);
        knownTranslations.set(normalizeWord(removeArticle(entry.german)), entry);
    }
    const matches = [];
    const seen = new Set();
    for (const rawWord of text.match(/[\p{L}]+(?:['’.-][\p{L}]+)*/gu) ?? []){
        const key = normalizeWord(rawWord);
        if (seen.has(key)) continue;
        seen.add(key);
        const entry = knownTranslations.get(key);
        const knownPos = entry?.pos;
        const pos = knownPos === "noun" ? "noun" : knownPos === "verb" ? "verb" : knownPos === "adjective" ? "adjective" : knownPos === "adverb" ? "adverb" : classifyUnknownWord(rawWord);
        if (!pos) continue;
        matches.push({
            german: entry?.german ?? rawWord,
            english: entry?.english ?? "",
            pos,
            example: entry?.example ?? ""
        });
    }
    const unknownWords = matches.filter((word)=>!word.english);
    if (unknownWords.length === 0) return matches;
    const translator = await getTranslator();
    const translations = await translator(unknownWords.map((word)=>word.german), {
        max_new_tokens: 32,
        num_beams: 4,
        do_sample: false
    });
    const output = Array.isArray(translations) ? translations : [
        translations
    ];
    let translationIndex = 0;
    return matches.map((word)=>{
        if (word.english) return word;
        const translation = output[translationIndex++]?.translation_text;
        return {
            ...word,
            english: typeof translation === "string" ? translation.toLowerCase() : ""
        };
    });
}
async function extractVocabFromImages(files) {
    if (files.length === 0) throw new Error("No images selected");
    const worker = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWorker"])("deu");
    try {
        await worker.setParameters({
            preserve_interword_spaces: "1"
        });
        const preparedFiles = await Promise.all(files.map(prepareImage));
        const recognizedText = [];
        for (const file of preparedFiles){
            const result = await worker.recognize(file);
            const pageData = result.data;
            const confidentWords = pageData.words?.filter((word)=>word.confidence >= 45).map((word)=>word.text).filter(Boolean);
            recognizedText.push(confidentWords?.length ? confidentWords.join(" ") : result.data.text);
        }
        const text = recognizedText.join("\n");
        if (!text.trim()) throw new Error("No text could be detected in the image");
        const words = await findVocabulary(text);
        if (words.length === 0) {
            throw new Error("No vocabulary words from the image could be recognized");
        }
        return {
            topic: "Extracted vocabulary",
            words
        };
    } finally{
        await worker.terminate();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/gespraechMitMehmetData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GESPRAECH_MEHMET_SET_ID",
    ()=>GESPRAECH_MEHMET_SET_ID,
    "GESPRAECH_MEHMET_SET_NAME",
    ()=>GESPRAECH_MEHMET_SET_NAME,
    "getGespraechMehmetSet",
    ()=>getGespraechMehmetSet
]);
const RAW_WORDS = [
    [
        "das Gespräch",
        "conversation / talk",
        "noun"
    ],
    [
        "das folgende Wort",
        "following word",
        "noun"
    ],
    [
        "der Ausdruck",
        "expression",
        "noun"
    ],
    [
        "ordnen",
        "to order / arrange",
        "verb"
    ],
    [
        "der Kiosk",
        "kiosk",
        "noun"
    ],
    [
        "betreiben",
        "to operate / run",
        "verb"
    ],
    [
        "das Geschäft",
        "business / shop",
        "noun"
    ],
    [
        "die Buchführung",
        "accounting / bookkeeping",
        "noun"
    ],
    [
        "eröffnen",
        "to open",
        "verb"
    ],
    [
        "der Lieferant",
        "supplier",
        "noun"
    ],
    [
        "die Lieferantin",
        "female supplier",
        "noun"
    ],
    [
        "der Besitzer",
        "owner",
        "noun"
    ],
    [
        "die Besitzerin",
        "female owner",
        "noun"
    ],
    [
        "die Filiale",
        "branch / subsidiary",
        "noun"
    ],
    [
        "der Mietvertrag",
        "rental contract / lease",
        "noun"
    ],
    [
        "gewerblich",
        "commercial / industrial",
        "adjective"
    ],
    [
        "der Raum",
        "room / space",
        "noun"
    ],
    [
        "die Lage",
        "location / situation",
        "noun"
    ],
    [
        "die Ware",
        "goods / product",
        "noun"
    ],
    [
        "der Pachtvertrag",
        "lease / rental contract",
        "noun"
    ],
    [
        "die Auswahl",
        "selection / choice",
        "noun"
    ],
    [
        "das Sortiment",
        "product range / assortment",
        "noun"
    ],
    [
        "die Reserve",
        "reserve",
        "noun"
    ],
    [
        "gründen",
        "to found / start",
        "verb"
    ],
    [
        "die Kette",
        "chain",
        "noun"
    ],
    [
        "geschäftig",
        "busy",
        "adjective"
    ],
    [
        "der Businessplan",
        "business plan",
        "noun"
    ],
    [
        "die Einnahme",
        "income / revenue",
        "noun"
    ],
    [
        "die Ausgabe",
        "expense / output",
        "noun"
    ],
    [
        "der Betrieb",
        "company / establishment",
        "noun"
    ],
    [
        "die Rücklage",
        "reserve / savings",
        "noun"
    ],
    [
        "das Konzept",
        "concept",
        "noun"
    ],
    [
        "das Ziel",
        "goal / objective",
        "noun"
    ],
    [
        "das Unternehmen",
        "company / enterprise",
        "noun"
    ],
    [
        "die Verwirklichung",
        "realization / implementation",
        "noun"
    ],
    [
        "der Minijob",
        "minijob / low-income job",
        "noun"
    ],
    [
        "wichtig",
        "important",
        "adjective"
    ],
    [
        "die Zeit",
        "time",
        "noun"
    ],
    [
        "die Kundschaft",
        "clientele / clients",
        "noun"
    ],
    [
        "der Kunde",
        "customer",
        "noun"
    ],
    [
        "arbeitslos",
        "unemployed",
        "adjective"
    ],
    [
        "ausprobieren",
        "to try out",
        "verb"
    ],
    [
        "unzufrieden",
        "dissatisfied",
        "adjective"
    ],
    [
        "die Arbeit",
        "work",
        "noun"
    ],
    [
        "der Supermarkt",
        "supermarket",
        "noun"
    ],
    [
        "eigen",
        "own",
        "adjective"
    ],
    [
        "wovon",
        "of which / what from",
        "other"
    ],
    [
        "der Anfang",
        "beginning / start",
        "noun"
    ],
    [
        "die Tätigkeit",
        "activity / proceeding",
        "noun"
    ],
    [
        "früh",
        "early",
        "adjective"
    ],
    [
        "früher",
        "earlier / previous",
        "adverb"
    ],
    [
        "der Vertrag",
        "contract",
        "noun"
    ],
    [
        "die Arbeitserfahrung",
        "work experience",
        "noun"
    ],
    [
        "selbstständig",
        "self-employed",
        "adjective"
    ],
    [
        "die Versicherung",
        "insurance",
        "noun"
    ],
    [
        "sich auskennen",
        "to know one's way around",
        "verb"
    ],
    [
        "das Existenzgründerseminar",
        "start-up seminar",
        "noun"
    ],
    [
        "die Geschäftsidee",
        "business idea",
        "noun"
    ],
    [
        "mögen",
        "to like / would like",
        "verb"
    ],
    [
        "der Beruf",
        "occupation / profession",
        "noun"
    ],
    [
        "überlegen",
        "to think over / consider",
        "verb"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
const GESPRAECH_MEHMET_SET_ID = "3c177345-1bbc-43a2-a5b8-e8c111cb95bf";
const GESPRAECH_MEHMET_SET_NAME = "Kapitel 2 - Gespräch mit Mehmet";
function getGespraechMehmetSet() {
    return {
        id: GESPRAECH_MEHMET_SET_ID,
        name: GESPRAECH_MEHMET_SET_NAME,
        createdAt: 0,
        sourceImageCount: 0,
        words: RAW_WORDS.map((word, index)=>({
                id: `${GESPRAECH_MEHMET_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["das Gespräch", "conversation / talk", "noun"],\n  ["das folgende Wort", "following word", "noun"],\n  ["der Ausdruck", "expression", "noun"],\n  ["ordnen", "to order / arrange", "verb"],\n  ["der Kiosk", "kiosk", "noun"],\n  ["betreiben", "to operate / run", "verb"],\n  ["das Geschäft", "business / shop", "noun"],\n  ["die Buchführung", "accounting / bookkeeping", "noun"],\n  ["eröffnen", "to open", "verb"],\n  ["der Lieferant", "supplier", "noun"],\n  ["die Lieferantin", "female supplier", "noun"],\n  ["der Besitzer", "owner", "noun"],\n  ["die Besitzerin", "female owner", "noun"],\n  ["die Filiale", "branch / subsidiary", "noun"],\n  ["der Mietvertrag", "rental contract / lease", "noun"],\n  ["gewerblich", "commercial / industrial", "adjective"],\n  ["der Raum", "room / space", "noun"],\n  ["die Lage", "location / situation", "noun"],\n  ["die Ware", "goods / product", "noun"],\n  ["der Pachtvertrag", "lease / rental contract", "noun"],\n  ["die Auswahl", "selection / choice", "noun"],\n  ["das Sortiment", "product range / assortment", "noun"],\n  ["die Reserve", "reserve", "noun"],\n  ["gründen", "to found / start", "verb"],\n  ["die Kette", "chain", "noun"],\n  ["geschäftig", "busy", "adjective"],\n  ["der Businessplan", "business plan", "noun"],\n  ["die Einnahme", "income / revenue", "noun"],\n  ["die Ausgabe", "expense / output", "noun"],\n  ["der Betrieb", "company / establishment", "noun"],\n  ["die Rücklage", "reserve / savings", "noun"],\n  ["das Konzept", "concept", "noun"],\n  ["das Ziel", "goal / objective", "noun"],\n  ["das Unternehmen", "company / enterprise", "noun"],\n  ["die Verwirklichung", "realization / implementation", "noun"],\n  ["der Minijob", "minijob / low-income job", "noun"],\n  ["wichtig", "important", "adjective"],\n  ["die Zeit", "time", "noun"],\n  ["die Kundschaft", "clientele / clients", "noun"],\n  ["der Kunde", "customer", "noun"],\n  ["arbeitslos", "unemployed", "adjective"],\n  ["ausprobieren", "to try out", "verb"],\n  ["unzufrieden", "dissatisfied", "adjective"],\n  ["die Arbeit", "work", "noun"],\n  ["der Supermarkt", "supermarket", "noun"],\n  ["eigen", "own", "adjective"],\n  ["wovon", "of which / what from", "other"],\n  ["der Anfang", "beginning / start", "noun"],\n  ["die Tätigkeit", "activity / proceeding", "noun"],\n  ["früh", "early", "adjective"],\n  ["früher", "earlier / previous", "adverb"],\n  ["der Vertrag", "contract", "noun"],\n  ["die Arbeitserfahrung", "work experience", "noun"],\n  ["selbstständig", "self-employed", "adjective"],\n  ["die Versicherung", "insurance", "noun"],\n  ["sich auskennen", "to know one\'s way around", "verb"],\n  ["das Existenzgründerseminar", "start-up seminar", "noun"],\n  ["die Geschäftsidee", "business idea", "noun"],\n  ["mögen", "to like / would like", "verb"],\n  ["der Beruf", "occupation / profession", "noun"],\n  ["überlegen", "to think over / consider", "verb"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/problemData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        "der Arbeitsraum",
        "workspace",
        "noun"
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
        "der Dank",
        "thanks",
        "noun"
    ],
    [
        "der Dank",
        "thanks",
        "noun"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
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
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["das Problem", "problem", "noun"],\n  ["die Hausverwaltung", "property management / house management", "noun"],\n  ["die Zeichnung", "drawing", "noun"],\n  ["einmal", "once", "adverb"],\n  ["das Büro", "office", "noun"],\n  ["lassen", "to let / leave", "verb"],\n  ["der Boden", "floor / ground", "noun"],\n  ["der Riss", "crack", "noun"],\n  ["fühlen", "to feel", "verb"],\n  ["die Kaffeeküche", "coffee kitchen", "noun"],\n  ["renovieren", "to renovate", "verb"],\n  ["die Angst", "fear", "noun"],\n  ["wirklich", "really", "other"],\n  ["die Ordnung", "order", "noun"],\n  ["die Küche", "kitchen", "noun"],\n  ["benutzen", "to use", "verb"],\n  ["schildern", "to describe / depict", "verb"],\n  ["vorbeikommen", "to come by", "verb"],\n  ["das Folgende", "the following", "noun"],\n  ["bitten", "to ask / request", "verb"],\n  ["natürlich", "of course / natural", "other"],\n  ["das Problem", "problem", "noun"],\n  ["die Werkstatt", "workshop", "noun"],\n  ["der Arbeitsraum", "workspace", "noun"],\n  ["die Türklinke", "door handle", "noun"],\n  ["reparieren", "to repair", "verb"],\n  ["lösen", "to solve / dissolve", "verb"],\n  ["unten", "below / downstairs", "adverb"],\n  ["abgehen", "to come off / detach", "verb"],\n  ["anrufen", "to call", "verb"],\n  ["die Zentralheizung", "central heating", "noun"],\n  ["der Bescheid", "notice / information", "noun"],\n  ["hochziehen", "to pull up", "verb"],\n  ["werden", "to become / will", "verb"],\n  ["der Abfluss", "drain", "noun"],\n  ["das Spülbecken", "sink", "noun"],\n  ["kümmern", "to care / look after", "verb"],\n  ["der Rollladen", "roll-out shutter / roller blind", "noun"],\n  ["der Aufzug", "elevator", "noun"],\n  ["der Topf", "pot", "noun"],\n  ["der Abflussreiniger", "drain cleaner", "noun"],\n  ["verwenden", "to use", "verb"],\n  ["die Tür", "door", "noun"],\n  ["der Aktenschrank", "file cabinet", "noun"],\n  ["anschrauben", "to screw on", "verb"],\n  ["der Wasserhahn", "faucet / tap", "noun"],\n  ["die Toilette", "toilet", "noun"],\n  ["der Handwerker", "craftsman", "noun"],\n  ["das Türschloss", "door lock", "noun"],\n  ["abbrechen", "to break off / cancel", "verb"],\n  ["der Hausmeister", "caretaker / janitor", "noun"],\n  ["spielen", "to play", "verb"],\n  ["der Dialog", "dialogue", "noun"],\n  ["der Vermieter", "landlord / owner", "noun"],\n  ["der Mieter", "tenant", "noun"],\n  ["der Apparat", "apparatus / phone", "noun"],\n  ["der Dank", "thanks", "noun"],\n  ["der Dank", "thanks", "noun"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/spaetiData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SPAETI_SET_ID",
    ()=>SPAETI_SET_ID,
    "SPAETI_SET_NAME",
    ()=>SPAETI_SET_NAME,
    "getSpaetiSet",
    ()=>getSpaetiSet
]);
const RAW_WORDS = [
    [
        "der Späti",
        "late-night kiosk",
        "noun"
    ],
    [
        "der Blogeintrag",
        "blog entry",
        "noun"
    ],
    [
        "der Kommentar",
        "comment",
        "noun"
    ],
    [
        "notieren",
        "to note down",
        "verb"
    ],
    [
        "informieren",
        "to inform",
        "verb"
    ],
    [
        "die Themenkarte",
        "theme card",
        "noun"
    ],
    [
        "tauschen",
        "to exchange",
        "verb"
    ],
    [
        "das Warenangebot",
        "supply of goods",
        "noun"
    ],
    [
        "der Treffpunkt",
        "meeting point",
        "noun"
    ],
    [
        "der Lärm",
        "noise",
        "noun"
    ],
    [
        "die Öffnungszeit",
        "opening time",
        "noun"
    ],
    [
        "die Arbeitszeit",
        "working hours",
        "noun"
    ],
    [
        "der Blog",
        "blog",
        "noun"
    ],
    [
        "vorstellen",
        "to introduce / present",
        "verb"
    ],
    [
        "die Ecke",
        "corner",
        "noun"
    ],
    [
        "der Leser",
        "reader",
        "noun"
    ],
    [
        "nennen",
        "to name",
        "verb"
    ],
    [
        "laden",
        "to load / invite",
        "verb"
    ],
    [
        "der Kiosk",
        "kiosk",
        "noun"
    ],
    [
        "das Geschäft",
        "business / shop",
        "noun"
    ],
    [
        "nämlich",
        "namely / of which",
        "adverb"
    ],
    [
        "der Spätkauf",
        "late-night grocery shop",
        "noun"
    ],
    [
        "eigentlich",
        "actually",
        "adverb"
    ],
    [
        "der Alltag",
        "daily life",
        "noun"
    ],
    [
        "die Auswahl",
        "selection",
        "noun"
    ],
    [
        "fehlen",
        "to be missing",
        "verb"
    ],
    [
        "die Windel",
        "diaper",
        "noun"
    ],
    [
        "das Baby",
        "baby",
        "noun"
    ],
    [
        "die Lösung",
        "solution",
        "noun"
    ],
    [
        "natürlich",
        "of course / natural",
        "adjective"
    ],
    [
        "das Ding",
        "thing",
        "noun"
    ],
    [
        "das Herz",
        "heart",
        "noun"
    ],
    [
        "gewöhnlich",
        "common / usual",
        "adjective"
    ],
    [
        "die Zeitung",
        "newspaper",
        "noun"
    ],
    [
        "die Zeitschrift",
        "periodical / magazine",
        "noun"
    ],
    [
        "die Süßigkeit",
        "sweet / candy",
        "noun"
    ],
    [
        "der Knabberartikel",
        "snack / nibble",
        "noun"
    ],
    [
        "bereiten",
        "to prepare",
        "verb"
    ],
    [
        "die Sache",
        "item / thing",
        "noun"
    ],
    [
        "der kleine Laden",
        "small shop",
        "noun"
    ],
    [
        "frisch",
        "fresh",
        "adjective"
    ],
    [
        "das Einkaufsparadies",
        "shopping paradise",
        "noun"
    ],
    [
        "gern",
        "gladly / like to",
        "adverb"
    ],
    [
        "die Besorgung",
        "errand / supply",
        "noun"
    ],
    [
        "die Sommernacht",
        "summer night",
        "noun"
    ],
    [
        "der Nachbar",
        "neighbour",
        "noun"
    ],
    [
        "der Einheimische",
        "local",
        "noun"
    ],
    [
        "das Zuhause",
        "home",
        "noun"
    ],
    [
        "das Ohr",
        "ear",
        "noun"
    ],
    [
        "der Kunde",
        "customer",
        "noun"
    ],
    [
        "persönlich",
        "personal",
        "adjective"
    ],
    [
        "die Entdeckung",
        "discovery",
        "noun"
    ],
    [
        "schlechthin",
        "par excellence / sheer",
        "adverb"
    ],
    [
        "der Abend",
        "evening",
        "noun"
    ],
    [
        "der Supermarkt",
        "supermarket",
        "noun"
    ],
    [
        "hetzen",
        "to rush / hustle",
        "verb"
    ],
    [
        "die Journalistin",
        "female journalist",
        "noun"
    ],
    [
        "die Bloggerin",
        "female blogger",
        "noun"
    ],
    [
        "klar",
        "clear",
        "adjective"
    ],
    [
        "freiberuflich",
        "freelance",
        "adjective"
    ],
    [
        "einteilen",
        "to divide / organize",
        "verb"
    ],
    [
        "der Auftrag",
        "mission / assignment",
        "noun"
    ],
    [
        "werden",
        "to become / will",
        "verb"
    ],
    [
        "der Computer",
        "computer",
        "noun"
    ],
    [
        "wenn",
        "if / when",
        "other"
    ],
    [
        "fertig",
        "finished",
        "adjective"
    ],
    [
        "geschlossen",
        "closed",
        "adjective"
    ],
    [
        "der Magen",
        "stomach",
        "noun"
    ],
    [
        "der Abendausflug",
        "evening excursion",
        "noun"
    ],
    [
        "zufällig",
        "random / by chance",
        "adjective"
    ],
    [
        "die Umgebung",
        "environment / surroundings",
        "noun"
    ],
    [
        "bisschen",
        "a little",
        "adverb"
    ],
    [
        "unterhalten",
        "to converse / maintain",
        "verb"
    ],
    [
        "hin",
        "there / towards",
        "adverb"
    ],
    [
        "die Gleitzeit",
        "flextime",
        "noun"
    ],
    [
        "anfangen",
        "to start",
        "verb"
    ],
    [
        "der Kaffee",
        "coffee",
        "noun"
    ],
    [
        "der Fruchtsaft",
        "fruit juice",
        "noun"
    ],
    [
        "schade",
        "too bad",
        "adjective"
    ],
    [
        "die Straße",
        "road / street",
        "noun"
    ],
    [
        "der Schichtdienst",
        "shift work",
        "noun"
    ],
    [
        "die Spätschicht",
        "late shift",
        "noun"
    ],
    [
        "die Milch",
        "milk",
        "noun"
    ],
    [
        "nächste",
        "next",
        "adjective"
    ],
    [
        "holen",
        "to fetch",
        "verb"
    ],
    [
        "die Schuld",
        "debt / fault",
        "noun"
    ],
    [
        "der Kioskbesitzer",
        "kiosk owner",
        "noun"
    ],
    [
        "die Nachtzeit",
        "nighttime",
        "noun"
    ],
    [
        "außerdem",
        "in addition",
        "adverb"
    ],
    [
        "der Verkäufer",
        "salesman",
        "noun"
    ],
    [
        "die Verkäuferin",
        "saleswoman",
        "noun"
    ],
    [
        "der Feierabend",
        "time off / end of the workday",
        "noun"
    ]
].map(_c = ([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
_c1 = RAW_WORDS;
const SPAETI_SET_ID = "47750658-e914-4fc9-9f66-ec00db98d8c2";
const SPAETI_SET_NAME = "Kapitel 2 - Späti";
function getSpaetiSet() {
    return {
        id: SPAETI_SET_ID,
        name: SPAETI_SET_NAME,
        createdAt: 0,
        sourceImageCount: 0,
        words: RAW_WORDS.map((word, index)=>({
                id: `${SPAETI_SET_ID}-${index}`,
                ...word
            })),
        masteredWordIds: []
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["der Späti", "late-night kiosk", "noun"],\n  ["der Blogeintrag", "blog entry", "noun"],\n  ["der Kommentar", "comment", "noun"],\n  ["notieren", "to note down", "verb"],\n  ["informieren", "to inform", "verb"],\n  ["die Themenkarte", "theme card", "noun"],\n  ["tauschen", "to exchange", "verb"],\n  ["das Warenangebot", "supply of goods", "noun"],\n  ["der Treffpunkt", "meeting point", "noun"],\n  ["der Lärm", "noise", "noun"],\n  ["die Öffnungszeit", "opening time", "noun"],\n  ["die Arbeitszeit", "working hours", "noun"],\n  ["der Blog", "blog", "noun"],\n  ["vorstellen", "to introduce / present", "verb"],\n  ["die Ecke", "corner", "noun"],\n  ["der Leser", "reader", "noun"],\n  ["nennen", "to name", "verb"],\n  ["laden", "to load / invite", "verb"],\n  ["der Kiosk", "kiosk", "noun"],\n  ["das Geschäft", "business / shop", "noun"],\n  ["nämlich", "namely / of which", "adverb"],\n  ["der Spätkauf", "late-night grocery shop", "noun"],\n  ["eigentlich", "actually", "adverb"],\n  ["der Alltag", "daily life", "noun"],\n  ["die Auswahl", "selection", "noun"],\n  ["fehlen", "to be missing", "verb"],\n  ["die Windel", "diaper", "noun"],\n  ["das Baby", "baby", "noun"],\n  ["die Lösung", "solution", "noun"],\n  ["natürlich", "of course / natural", "adjective"],\n  ["das Ding", "thing", "noun"],\n  ["das Herz", "heart", "noun"],\n  ["gewöhnlich", "common / usual", "adjective"],\n  ["die Zeitung", "newspaper", "noun"],\n  ["die Zeitschrift", "periodical / magazine", "noun"],\n  ["die Süßigkeit", "sweet / candy", "noun"],\n  ["der Knabberartikel", "snack / nibble", "noun"],\n  ["bereiten", "to prepare", "verb"],\n  ["die Sache", "item / thing", "noun"],\n  ["der kleine Laden", "small shop", "noun"],\n  ["frisch", "fresh", "adjective"],\n  ["das Einkaufsparadies", "shopping paradise", "noun"],\n  ["gern", "gladly / like to", "adverb"],\n  ["die Besorgung", "errand / supply", "noun"],\n  ["die Sommernacht", "summer night", "noun"],\n  ["der Nachbar", "neighbour", "noun"],\n  ["der Einheimische", "local", "noun"],\n  ["das Zuhause", "home", "noun"],\n  ["das Ohr", "ear", "noun"],\n  ["der Kunde", "customer", "noun"],\n  ["persönlich", "personal", "adjective"],\n  ["die Entdeckung", "discovery", "noun"],\n  ["schlechthin", "par excellence / sheer", "adverb"],\n  ["der Abend", "evening", "noun"],\n  ["der Supermarkt", "supermarket", "noun"],\n  ["hetzen", "to rush / hustle", "verb"],\n  ["die Journalistin", "female journalist", "noun"],\n  ["die Bloggerin", "female blogger", "noun"],\n  ["klar", "clear", "adjective"],\n  ["freiberuflich", "freelance", "adjective"],\n  ["einteilen", "to divide / organize", "verb"],\n  ["der Auftrag", "mission / assignment", "noun"],\n  ["werden", "to become / will", "verb"],\n  ["der Computer", "computer", "noun"],\n  ["wenn", "if / when", "other"],\n  ["fertig", "finished", "adjective"],\n  ["geschlossen", "closed", "adjective"],\n  ["der Magen", "stomach", "noun"],\n  ["der Abendausflug", "evening excursion", "noun"],\n  ["zufällig", "random / by chance", "adjective"],\n  ["die Umgebung", "environment / surroundings", "noun"],\n  ["bisschen", "a little", "adverb"],\n  ["unterhalten", "to converse / maintain", "verb"],\n  ["hin", "there / towards", "adverb"],\n  ["die Gleitzeit", "flextime", "noun"],\n  ["anfangen", "to start", "verb"],\n  ["der Kaffee", "coffee", "noun"],\n  ["der Fruchtsaft", "fruit juice", "noun"],\n  ["schade", "too bad", "adjective"],\n  ["die Straße", "road / street", "noun"],\n  ["der Schichtdienst", "shift work", "noun"],\n  ["die Spätschicht", "late shift", "noun"],\n  ["die Milch", "milk", "noun"],\n  ["nächste", "next", "adjective"],\n  ["holen", "to fetch", "verb"],\n  ["die Schuld", "debt / fault", "noun"],\n  ["der Kioskbesitzer", "kiosk owner", "noun"],\n  ["die Nachtzeit", "nighttime", "noun"],\n  ["außerdem", "in addition", "adverb"],\n  ["der Verkäufer", "salesman", "noun"],\n  ["die Verkäuferin", "saleswoman", "noun"],\n  ["der Feierabend", "time off / end of the workday", "noun"],\n].map');
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
    "deleteBuiltInWord",
    ()=>deleteBuiltInWord,
    "deleteSet",
    ()=>deleteSet,
    "deleteWord",
    ()=>deleteWord,
    "getSet",
    ()=>getSet,
    "loadBuiltInDeletedWords",
    ()=>loadBuiltInDeletedWords,
    "loadBuiltInProgress",
    ()=>loadBuiltInProgress,
    "loadExerciseProgress",
    ()=>loadExerciseProgress,
    "loadLastBatchResult",
    ()=>loadLastBatchResult,
    "loadSets",
    ()=>loadSets,
    "saveBuiltInProgress",
    ()=>saveBuiltInProgress,
    "saveExerciseProgress",
    ()=>saveExerciseProgress,
    "saveLastBatchResult",
    ()=>saveLastBatchResult,
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
const BUILT_IN_DELETED_WORDS_KEY = "lexikon.builtInDeletedWords";
const LAST_BATCH_RESULTS_KEY = "lexikon.lastBatchResults";
const EMPTY_PROGRESS = {
    cards: [],
    quiz: [],
    write: [],
    match: []
};
function loadExerciseProgress(setId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const progress = JSON.parse(window.localStorage.getItem(BUILT_IN_PROGRESS_KEY) ?? "{}");
        const saved = progress[setId] ?? {};
        return {
            cards: Array.isArray(saved.cards) ? saved.cards : [],
            quiz: Array.isArray(saved.quiz) ? saved.quiz : [],
            write: Array.isArray(saved.write) ? saved.write : [],
            match: Array.isArray(saved.match) ? saved.match : []
        };
    } catch  {
        return {
            ...EMPTY_PROGRESS
        };
    }
}
function saveExerciseProgress(setId, progress) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const allProgress = JSON.parse(window.localStorage.getItem(BUILT_IN_PROGRESS_KEY) ?? "{}");
        allProgress[setId] = progress;
        window.localStorage.setItem(BUILT_IN_PROGRESS_KEY, JSON.stringify(allProgress));
    } catch  {
    // Ignore unavailable browser storage.
    }
}
function loadLastBatchResult(setId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const results = JSON.parse(window.localStorage.getItem(LAST_BATCH_RESULTS_KEY) ?? "{}");
        const result = results[setId];
        if (!result || !Number.isFinite(result.batch) || !Number.isFinite(result.mastered) || !Number.isFinite(result.total)) {
            return null;
        }
        return result;
    } catch  {
        return null;
    }
}
function saveLastBatchResult(setId, result) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const results = JSON.parse(window.localStorage.getItem(LAST_BATCH_RESULTS_KEY) ?? "{}");
        results[setId] = result;
        window.localStorage.setItem(LAST_BATCH_RESULTS_KEY, JSON.stringify(results));
    } catch  {
    // Ignore unavailable browser storage.
    }
}
function loadBuiltInDeletedWords(setId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const deleted = JSON.parse(window.localStorage.getItem(BUILT_IN_DELETED_WORDS_KEY) ?? "{}");
        return Array.isArray(deleted[setId]) ? deleted[setId] : [];
    } catch  {
        return [];
    }
}
function deleteBuiltInWord(setId, wordId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const deleted = JSON.parse(window.localStorage.getItem(BUILT_IN_DELETED_WORDS_KEY) ?? "{}");
        deleted[setId] = [
            ...new Set([
                ...deleted[setId] ?? [],
                wordId
            ])
        ];
        window.localStorage.setItem(BUILT_IN_DELETED_WORDS_KEY, JSON.stringify(deleted));
    } catch  {
    // Ignore unavailable browser storage.
    }
}
function loadBuiltInProgress(setId) {
    const progress = loadExerciseProgress(setId);
    return progress.cards.filter((id)=>progress.quiz.includes(id) && progress.write.includes(id) && progress.match.includes(id));
}
function saveBuiltInProgress(setId, masteredWordIds) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const progress = JSON.parse(window.localStorage.getItem(BUILT_IN_PROGRESS_KEY) ?? "{}");
        progress[setId] = masteredWordIds;
        window.localStorage.setItem(BUILT_IN_PROGRESS_KEY, JSON.stringify(progress));
    } catch  {
    // Ignore unavailable browser storage.
    }
}
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
        "das Stockwerk",
        "the floor / storey",
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
        "der Aufzug",
        "the elevator / lift",
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
        "parken",
        "to park",
        "verb"
    ],
    [
        "abbauen",
        "to dismantle",
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
        "austauschen",
        "to exchange / discuss",
        "verb"
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
__turbopack_context__.k.register(_c, 'RAW_WORDS$[\n  ["der Umzug", "the move / relocation", "noun"],\n  ["die Umzugsfirma", "the moving company", "noun"],\n  ["der Umzugstag", "the moving day", "noun"],\n  ["das Angebot", "the offer / quote", "noun"],\n  ["die Nachfrage", "the inquiry / demand", "noun"],\n  ["das Detail", "the detail", "noun"],\n  ["der Kunde", "the customer (male)", "noun"],\n  ["die Kundin", "the customer (female)", "noun"],\n  ["die Spülmaschine", "the dishwasher", "noun"],\n  ["der Kaffeeautomat", "the coffee machine", "noun"],\n  ["das Regal", "the shelf", "noun"],\n  ["der Mitarbeiter", "the employee (male)", "noun"],\n  ["die Mitarbeiterin", "the employee (female)", "noun"],\n  ["das Stockwerk", "the floor / storey", "noun"],\n  ["der Schreibtisch", "the desk", "noun"],\n  ["das Möbel", "the piece of furniture", "noun"],\n  ["der Karton", "the box / carton", "noun"],\n  ["der Fixpreis", "the fixed price", "noun"],\n  ["der Hof", "the courtyard", "noun"],\n  ["die Einbauküche", "the fitted kitchen", "noun"],\n  ["der Stock", "the floor / storey", "noun"],\n  ["die Parkmöglichkeit", "the parking option", "noun"],\n  ["der Anfang", "the beginning", "noun"],\n  ["der Besichtigungstermin", "the viewing appointment", "noun"],\n  ["die Besichtigung", "the inspection / viewing", "noun"],\n  ["der Aufzug", "the elevator / lift", "noun"],\n  ["die Notiz", "the note", "noun"],\n  ["der Imbiss", "the snack bar / eatery", "noun"],\n  ["einholen", "to obtain / get", "verb"],\n  ["klären", "to clarify", "verb"],\n  ["verhandeln", "to negotiate", "verb"],\n  ["schicken", "to send", "verb"],\n  ["umziehen", "to move (house/office)", "verb"],\n  ["mitnehmen", "to take along", "verb"],\n  ["entsorgen", "to dispose of", "verb"],\n  ["parken", "to park", "verb"],\n  ["abbauen", "to dismantle", "verb"],\n  ["erledigen", "to handle / complete", "verb"],\n  ["packen", "to pack", "verb"],\n  ["ausbuchen", "to fully book / be booked out", "verb"],\n  ["entgegenkommen", "to meet halfway / accommodate", "verb"],\n  ["beauftragen", "to commission / hire", "verb"],\n  ["anbieten", "to offer", "verb"],\n  ["bleiben", "to stay / remain", "verb"],\n  ["mitkommen", "to come along", "verb"],\n  ["aufbauen", "to assemble / set up", "verb"],\n  ["austauschen", "to exchange / discuss", "verb"],\n].map');
__turbopack_context__.k.register(_c1, "RAW_WORDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/wordBank.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Local German vocabulary reference used to enrich browser-based image extraction.
__turbopack_context__.s([
    "WORD_BANK",
    ()=>WORD_BANK
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_09sicpk._.js.map