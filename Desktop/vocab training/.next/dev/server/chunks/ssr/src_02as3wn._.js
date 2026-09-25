module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SetsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SetsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$extractVocab$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/extractVocab.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/umzugData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adilsJobData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/problemData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emailHausverwaltungData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ausdrueckeData.ts [app-ssr] (ecmascript)");
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
const BUILT_IN_SETS = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArbeitsraeumeSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUmzugSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAdilsJobSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProblemSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEmailHausverwaltungSet"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAusdrueckeSet"])()
];
function Home() {
    const [sets, setSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUpload, setShowUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const builtInIds = new Set([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UMZUG_SET_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADILS_JOB_SET_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROBLEM_SET_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_HAUSVERWALTUNG_SET_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUSDRUECKE_SET_ID"]
        ]);
        const builtInSets = BUILT_IN_SETS.map((set)=>({
                ...set,
                masteredWordIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadBuiltInProgress"])(set.id)
            }));
        setSets([
            ...builtInSets,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSets"])().filter((set)=>!builtInIds.has(set.id))
        ]);
    }, []);
    const handleCreateSet = async (files, name)=>{
        const { words } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$extractVocab$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractVocabFromImages"])(files);
        const newSet = {
            id: crypto.randomUUID(),
            name,
            createdAt: Date.now(),
            sourceImageCount: files.length,
            words: words.map((w)=>({
                    id: crypto.randomUUID(),
                    ...w
                })),
            masteredWordIds: []
        };
        setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSet"])(newSet));
        setNotice(null);
    };
    const handleDelete = (id)=>{
        setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSet"])(id));
    };
    const handleRename = (id, name)=>{
        setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSetName"])(id, name));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex flex-1 flex-col items-center bg-white px-4 pb-16 pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-heading text-4xl leading-tight tracking-[-1px] text-[#172b35]",
                        children: "Learn B2 Beruf Deutsch Vocabulary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body max-w-[460px] text-[13px] leading-5 text-[#60747a]",
                        children: "Practice German with flashcards, quizzes, and interactive exercises. Build your vocabulary and reinforce what you learn through different ways to practise."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-7 flex w-full flex-col items-center gap-4",
                children: [
                    ("TURBOPACK compile-time value", "development") !== "production" && showUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[568px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onCreateSet: handleCreateSet
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-xl border border-[#b9c9eb] bg-[#eef1ff] px-4 py-3 text-center text-sm text-[#172b35]",
                                children: notice
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SetsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sets: sets,
                        onDelete: handleDelete,
                        onRename: handleRename,
                        onToggleUpload: ("TURBOPACK compile-time truthy", 1) ? ()=>setShowUpload((current)=>!current) : "TURBOPACK unreachable",
                        uploadOpen: showUpload
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SetsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SetsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/umzugData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adilsJobData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/problemData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emailHausverwaltungData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ausdrueckeData.ts [app-ssr] (ecmascript)");
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
const BUILT_IN_SET_IDS = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$umzugData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UMZUG_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adilsJobData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADILS_JOB_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$problemData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROBLEM_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailHausverwaltungData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMAIL_HAUSVERWALTUNG_SET_ID"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ausdrueckeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUSDRUECKE_SET_ID"]
]);
function SetsList({ sets, onDelete, onRename, onToggleUpload, uploadOpen = false }) {
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftName, setDraftName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedChapter, setSelectedChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1");
    const visibleSets = sets.filter((set)=>set.name.startsWith(`Kapitel ${selectedChapter} -`));
    const startEditing = (set)=>{
        setEditingId(set.id);
        setDraftName(set.name);
    };
    const saveName = (id)=>{
        const name = draftName.trim();
        if (!name) return;
        onRename(id, name);
        setEditingId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[568px] border-t-[3px] border-[#c7c7c7] pt-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersIcon"], {
                                className: "h-3.5 w-3.5 text-[#d8f56d]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-heading text-[15px] text-[#172b35]",
                                children: "Your sets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            onToggleUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleUpload,
                                "aria-label": uploadOpen ? "Close upload" : "Upload a set",
                                title: uploadOpen ? "Close upload" : "Upload a set",
                                className: "flex h-7 w-7 items-center justify-center rounded-full text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraIcon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 58,
                                    columnNumber: 309
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 58,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-[11px] text-[#5d6f74]",
                                children: [
                                    visibleSets.length,
                                    " sets"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-sm font-semibold text-[#172b35]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedChapter,
                                            onChange: (event)=>setSelectedChapter(event.target.value),
                                            className: "h-9 w-[120px] appearance-none rounded-full border border-[#172b35] bg-white pl-4 pr-9 text-sm text-[#172b35] outline-none",
                                            "aria-label": "Filter by chapter",
                                            children: Array.from({
                                                length: 16
                                            }, (_, index)=>{
                                                const chapter = String(index + 1);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: chapter,
                                                    disabled: chapter !== "1",
                                                    children: [
                                                        "Kapitel ",
                                                        chapter
                                                    ]
                                                }, chapter, true, {
                                                    fileName: "[project]/src/components/SetsList.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 26
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                                            className: "pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172b35]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            visibleSets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 border border-dashed border-[#9bb8bc] bg-white py-10 text-center text-[#5d6f74]",
                children: "No sets in this chapter yet."
            }, void 0, false, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2",
                children: visibleSets.map((set)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "min-h-[150px] border border-[#dce4bd] bg-[#F7FAE7] p-5 shadow-[4px_4px_0_#e5ecec]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: BUILT_IN_SET_IDS.has(set.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-heading text-lg font-semibold text-[#172b35]",
                                            children: set.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-1 text-[9px] font-semibold uppercase tracking-[0.7px] text-[#172b35]",
                                            children: "Built-in set"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 84,
                                    columnNumber: 19
                                }, this) : editingId === set.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-0 flex-1 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoFocus: true,
                                            value: draftName,
                                            onChange: (event)=>setDraftName(event.target.value),
                                            onKeyDown: (event)=>{
                                                if (event.key === "Enter") saveName(set.id);
                                                if (event.key === "Escape") setEditingId(null);
                                            },
                                            className: "h-9 min-w-0 flex-1 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]",
                                            "aria-label": "Study set name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>saveName(set.id),
                                            className: "bg-[#263fd6] px-3 text-xs font-semibold text-white",
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>startEditing(set),
                                    className: "text-left font-heading text-lg text-[#172b35]",
                                    children: set.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 94,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            !BUILT_IN_SET_IDS.has(set.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDelete(set.id),
                                className: "shrink-0 p-1.5 text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]",
                                "aria-label": "Delete set",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 97,
                                    columnNumber: 200
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 97,
                                columnNumber: 53
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body pt-1.5 text-[11px] text-[#5d6f74]",
                                children: [
                                    set.words.length,
                                    " words · ",
                                    set.masteredWordIds.length,
                                    " mastered"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: BUILT_IN_SET_IDS.has(set.id) ? `/sets/${set.id}/` : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/study/?set=${encodeURIComponent(set.id)}`,
                                className: "mt-3 inline-flex h-7 items-center gap-1.5 rounded-full bg-[#d8f56d] px-3 text-[11px] font-medium text-[#172b35]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookOpenIcon"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SetsList.tsx",
                                        lineNumber: 99,
                                        columnNumber: 292
                                    }, this),
                                    " Study"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, this)
                        ]
                    }, set.id, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SetsList.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/UploadCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const MAX_IMAGES = 20;
function UploadCard({ onCreateSet }) {
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNaming, setIsNaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [setName, setSetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((incoming)=>{
        const imageFiles = Array.from(incoming).filter((f)=>f.type.startsWith("image/"));
        setFiles((prev)=>[
                ...prev,
                ...imageFiles
            ].slice(0, MAX_IMAGES));
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl rounded-[28px] border-2 border-[#08758d] bg-[#fffaf0] p-7 shadow-[0_14px_0_rgba(8,117,141,0.12)]",
        style: {
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.72), rgba(244,239,229,0.72))"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: (e)=>{
                    e.preventDefault();
                    setIsDragging(true);
                },
                onDragLeave: ()=>setIsDragging(false),
                onDrop: handleDrop,
                onClick: ()=>inputRef.current?.click(),
                className: `flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-[1.667px] border-dashed px-6 py-10 text-center transition-colors ${isDragging ? "border-[#e76548] bg-[#e76548]/5" : "border-[#9bb8bc] hover:border-[#08758d]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#08758d] text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImagePlusIcon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading text-lg tracking-[-0.36px] text-[#172b35]",
                        children: files.length > 0 ? `${files.length} photo${files.length > 1 ? "s" : ""} ready` : "Drop photos of German text"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadCard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap justify-center gap-2 pt-1",
                        children: files.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-full bg-[#dbeaec] px-3 py-1 text-xs text-[#075a70]",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCreate,
                disabled: !canCreate,
                className: `mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] px-8 text-sm font-semibold text-white shadow-[0_4px_0_rgba(7,90,112,0.22)] transition-opacity ${canCreate ? "opacity-100 hover:opacity-90" : "cursor-not-allowed opacity-50"}`,
                children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkleIcon"], {
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
            isNaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md border border-[#c7d1ca] bg-[#fffaf0] p-6 text-left shadow-[6px_6px_0_rgba(8,117,141,0.12)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-xl text-[#172b35]",
                            children: "Name your study set"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body mt-2 text-sm text-[#5d6f74]",
                            children: "Give this vocabulary set a name before extraction starts."
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: setName,
                            onChange: (event)=>setSetName(event.target.value),
                            onKeyDown: (event)=>{
                                if (event.key === "Enter") confirmCreate();
                                if (event.key === "Escape") setIsNaming(false);
                            },
                            placeholder: "e.g. Moving house vocabulary",
                            className: "mt-5 h-11 w-full rounded-xl border border-[#9bb8bc] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]",
                            "aria-label": "Study set name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadCard.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsNaming(false),
                                    className: "rounded-full bg-[#dbeaec] px-4 py-2 text-sm text-[#075a70]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadCard.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: confirmCreate,
                                    disabled: !setName.trim(),
                                    className: "rounded-full bg-[#08758d] px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40",
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
"[project]/src/lib/ausdrueckeData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
].map(([german, english, pos])=>({
        german,
        english,
        pos,
        example: ""
    }));
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
"[project]/src/lib/extractVocab.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractVocabFromImages",
    ()=>extractVocabFromImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wordBank.ts [app-ssr] (ecmascript)");
;
async function extractVocabFromImages(files) {
    try {
        const formData = new FormData();
        files.forEach((file)=>formData.append("images", file));
        const res = await fetch("/api/extract", {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        if (!res.ok || !Array.isArray(data.words) || data.words.length === 0) {
            throw new Error(data.error ?? "Extraction failed");
        }
        return {
            topic: data.topic ?? "",
            words: data.words,
            usedFallback: false
        };
    } catch  {
        return {
            topic: "",
            words: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockExtractVocab"])(),
            usedFallback: true
        };
    }
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
const BUILT_IN_DELETED_WORDS_KEY = "lexikon.builtInDeletedWords";
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
function loadBuiltInDeletedWords(setId) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function deleteBuiltInWord(setId, wordId) {
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

//# sourceMappingURL=src_02as3wn._.js.map