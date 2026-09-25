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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-client] (ecmascript)");
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
const BUILT_IN_SET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArbeitsraeumeSet"])();
function Home() {
    _s();
    const [sets, setSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setSets([
                BUILT_IN_SET,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSets"])().filter({
                    "Home.useEffect": (set)=>set.id !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"]
                }["Home.useEffect"])
            ]);
        }
    }["Home.useEffect"], []);
    const handleCreateSet = async (files, name)=>{
        try {
            const { words } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$extractVocab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVocabFromImages"])(files);
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
            setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSet"])(newSet));
            setNotice(null);
        } catch (error) {
            setNotice(error instanceof Error ? error.message : "Extraction failed");
        }
    };
    const handleDelete = (id)=>{
        setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSet"])(id));
    };
    const handleRename = (id, name)=>{
        setSets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSetName"])(id, name));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex flex-1 flex-col items-center px-4 pb-24 pt-12",
        style: {
            backgroundImage: "linear-gradient(180deg, rgba(8,117,141,0.13), transparent 38%), linear-gradient(90deg, rgba(231,101,72,0.06), transparent 50%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 rounded-none border-l-4 border-[#e76548] bg-[#fffaf0] px-4 py-1.5 text-xs font-semibold tracking-[2.4px] text-[#08758d] shadow-[4px_4px_0_rgba(231,101,72,0.16)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraIcon"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            " PHOTO TO FLASHCARDS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-heading max-w-4xl text-5xl leading-[1.05] tracking-[-1.2px] text-[#172b35] sm:text-6xl",
                        children: [
                            "Learn German words",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#e76548]",
                                children: "straight off the page"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body max-w-xl text-base text-[#5d6f74]",
                        children: "Photograph a textbook page, a menu or a street sign. Lexikon pulls out the German vocabulary, adds English translations, and builds four ways to practise it."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex w-full flex-col items-center gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onCreateSet: handleCreateSet
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-lg rounded-2xl border border-[#3a2f1a] bg-[#241c0f] px-4 py-3 text-center text-sm text-amber-300",
                        children: notice
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SetsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sets: sets,
                        onDelete: handleDelete,
                        onRename: handleRename
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Home, "6jrDXgDucWoGK7r1QTq/PW+FxwA=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arbeitsraeumeData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SetsList({ sets, onDelete, onRename }) {
    _s();
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftName, setDraftName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl border-t-4 border-[#e76548] pt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayersIcon"], {
                                className: "h-5 w-5 text-[#08758d]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-heading text-xl text-[#172b35]",
                                children: "Your sets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    sets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-sm text-[#5d6f74]",
                        children: [
                            sets.length,
                            " saved locally"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 38,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            sets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 border border-dashed border-[#9bb8bc] bg-[#fffaf0] py-10 text-center text-[#5d6f74]",
                children: "No sets yet. Upload your first photo above."
            }, void 0, false, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: sets.map((set)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border border-[#c7d1ca] bg-[#fffaf0] p-5 shadow-[5px_5px_0_rgba(8,117,141,0.1)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: set.id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-heading text-lg text-[#172b35]",
                                            children: set.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-1 text-xs font-semibold uppercase tracking-[1px] text-[#08758d]",
                                            children: "Built-in set"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 53,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 51,
                                    columnNumber: 19
                                }, this) : editingId === set.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-0 flex-1 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoFocus: true,
                                            value: draftName,
                                            onChange: (event)=>setDraftName(event.target.value),
                                            onKeyDown: (event)=>{
                                                if (event.key === "Enter") saveName(set.id);
                                                if (event.key === "Escape") setEditingId(null);
                                            },
                                            className: "h-9 min-w-0 flex-1 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]",
                                            "aria-label": "Study set name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 57,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>saveName(set.id),
                                            className: "bg-[#e76548] px-3 text-xs font-semibold text-white",
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SetsList.tsx",
                                            lineNumber: 58,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 56,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>startEditing(set),
                                    className: "text-left font-heading text-lg text-[#172b35]",
                                    children: set.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 61,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            set.id !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDelete(set.id),
                                className: "shrink-0 p-1.5 text-[#5d6f74] hover:text-[#e76548]",
                                "aria-label": "Delete set",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SetsList.tsx",
                                    lineNumber: 64,
                                    columnNumber: 181
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 64,
                                columnNumber: 53
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body pt-2 text-sm text-[#5d6f74]",
                                children: [
                                    set.words.length,
                                    " words · ",
                                    set.masteredWordIds.length,
                                    " mastered"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: set.id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arbeitsraeumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARBEITSRAEUME_SET_ID"] ? `/sets/${set.id}/` : `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH ?? ""}/study/?set=${encodeURIComponent(set.id)}`,
                                className: "mt-4 inline-flex h-9 items-center gap-2 rounded-full border border-[#08758d] bg-[#08758d] px-4 text-sm font-medium text-white hover:bg-[#075a70]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookOpenIcon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SetsList.tsx",
                                        lineNumber: 66,
                                        columnNumber: 326
                                    }, this),
                                    " Study"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SetsList.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        ]
                    }, set.id, true, {
                        fileName: "[project]/src/components/SetsList.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SetsList.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SetsList.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(SetsList, "xuM1/9Ca6FiEYeN9EpGLf0fQ1Qo=");
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
        className: "w-full max-w-3xl rounded-[28px] border-2 border-[#08758d] bg-[#fffaf0] p-7 shadow-[0_14px_0_rgba(8,117,141,0.12)]",
        style: {
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.72), rgba(244,239,229,0.72))"
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
                className: `flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-[1.667px] border-dashed px-6 py-10 text-center transition-colors ${isDragging ? "border-[#e76548] bg-[#e76548]/5" : "border-[#9bb8bc] hover:border-[#08758d]"}`,
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
                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#08758d] text-white",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCreate,
                disabled: !canCreate,
                className: `mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] px-8 text-sm font-semibold text-white shadow-[0_4px_0_rgba(7,90,112,0.22)] transition-opacity ${canCreate ? "opacity-100 hover:opacity-90" : "cursor-not-allowed opacity-50"}`,
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
                    className: "w-full max-w-md border border-[#c7d1ca] bg-[#fffaf0] p-6 text-left shadow-[6px_6px_0_rgba(8,117,141,0.12)]",
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
                            className: "mt-5 h-11 w-full rounded-xl border border-[#9bb8bc] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]",
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
                                    className: "rounded-full bg-[#dbeaec] px-4 py-2 text-sm text-[#075a70]",
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
function normalizeGermanForm(word) {
    return normalizeWord(word).replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
}
function b2Candidates(word) {
    const normalized = normalizeGermanForm(word);
    const candidates = new Set([
        normalized
    ]);
    const endings = [
        "ern",
        "eln",
        "ieren",
        "est",
        "en",
        "er",
        "es",
        "em",
        "et",
        "st",
        "te",
        "ten",
        "test",
        "t",
        "e",
        "n",
        "s"
    ];
    for (const ending of endings){
        if (normalized.endsWith(ending) && normalized.length - ending.length >= 3) {
            candidates.add(normalized.slice(0, -ending.length) + "en");
            candidates.add(normalized.slice(0, -ending.length));
        }
    }
    if (normalized.endsWith("ungen")) candidates.add(`${normalized.slice(0, -5)}ung`);
    if (normalized.endsWith("en")) candidates.add(normalized.slice(0, -2));
    return [
        ...candidates
    ];
}
function removeArticle(word) {
    return word.replace(/^(der|die|das|den|dem|des|ein|eine|einer|einem|einen)\s+/i, "").trim();
}
function wordStem(word) {
    return removeArticle(word).toLowerCase();
}
function buildKnownForms() {
    const forms = new Map();
    for (const entry of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORD_BANK"]){
        const base = wordStem(entry.german);
        forms.set(base, entry);
        if (entry.pos === "verb") {
            const stem = base.replace(/(en|ern|eln|ieren)$/, "");
            [
                "e",
                "st",
                "t",
                "en",
                "te",
                "test",
                "ten",
                "end",
                "endest",
                "endete",
                "iert",
                "ierte"
            ].forEach((ending)=>{
                forms.set(`${stem}${ending}`, entry);
            });
        }
        if (entry.pos === "noun") {
            const pluralForms = [
                `${base}e`,
                `${base}en`,
                `${base}er`,
                `${base}s`,
                base.replace(/e$/, "en"),
                base.replace(/ung$/, "ungen")
            ];
            pluralForms.forEach((form)=>forms.set(form, entry));
        }
    }
    return forms;
}
const GERMAN_FUNCTION_WORDS = new Set("aber als am an auch auf aus bei bin bis das dass dein dem den der des die du ein eine einem einen einer eines er es für gegen haben hat ich im in ist ja kein mit nach nicht nur oder sie sind und vom von war was wir zu zum zur".split(" "));
const COMMON_PERSON_NAMES = new Set("anna andreas anton ben benjamin carla carmen christian christina daniel david denise dieter dirk dominik elena elias emil emma eric erika felix finn florian franz friedrich gabriel georg gregor hans hannah heike helena henrik henriette holger ines ingrid jan jana jasmin johann johanna jonas josef julia julian justin karl karla katharina katja klaus konrad laura lea lena leon leonard lia linda lisa lorenz lukas lukas marc marcel maria marie mario markus martin matthias max maximilian maya michael miriam monika nadine niklas nico nina noah norbert oliver oskar otto paul paula peter philipp sabine sara sarah simon sofia sophie stefan stefanie susanne theo theresa thomas tim tina tobias tom ulrich ursula viktor walter wilhelm wilma wolfgang yvonne zara zoe");
const EXERCISE_NOISE_WORDS = new Set("aufgabe aufgaben übung übungen frage fragen antwort antworten lösung lösungen beispiel beispiele text texte satz sätze lücke lücken wort wörter wortsatz ordne ordnen markiere markieren ergänze ergänzen vervollständige vervollständigen verbinde verbinden kreuze kreuzen wähle wählen schreibe schreiben lies lesen höre hören sprich sprechen wiederhole wiederholen diskutiert diskutieren arbeitsblatt nummer nummern punkt punkte teil teile abschnitt abschnitte erklärung erklärungen information informationen hinweis hinweise richtig falsch möglich möglichkeiten singular plural singularform pluralform einzahl mehrzahl männlich weiblich sächlich maskulin feminin neutrum genitiv dativ akkusativ nominativ artikel artikeln pronomen präposition präpositionen verb verben nomen substantiv substantive adjektiv adjektive adverb adverbien grammatik grammatische grammatikalisch konjugation konjugiere deklination beispielsatz bedeutung bedeutungen übersetzung übersetzungen wortart wortarten vokabel vokabeln".split(" "));
function classifyUnknownWord(word) {
    const lower = word.toLowerCase();
    if (GERMAN_FUNCTION_WORDS.has(lower) || lower.length < 3) return null;
    if (COMMON_PERSON_NAMES.has(lower)) return null;
    if (EXERCISE_NOISE_WORDS.has(lower)) return null;
    // German infinitives are safest to recognize by their infinitive endings.
    if (/(en|ern|eln|ieren)$/.test(lower)) return "verb";
    // Common productive adjective/adverb endings.
    if (/(ig|lich|isch|bar|sam|los|voll|weise)$/.test(lower)) return "adjective";
    if (/(weise|wärts|her|hin|mal|so|sehr|heute|morgen|gestern)$/.test(lower)) {
        return "adverb";
    }
    // Capitalized words in German text are noun candidates. Sentence-initial
    // words remain excluded unless the OCR word has a recognizable noun ending.
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
    const knownForms = buildKnownForms();
    for (const rawWord of text.match(/[\p{L}]+(?:['’.-][\p{L}]+)*/gu) ?? []){
        const key = normalizeWord(rawWord);
        if (seen.has(key)) continue;
        seen.add(key);
        const entry = knownTranslations.get(key) ?? knownForms.get(key);
        if (EXERCISE_NOISE_WORDS.has(key)) continue;
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
    if (files.length === 0) {
        throw new Error("No images selected");
    }
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
            const confidentWords = pageData.words?.filter((word)=>word.confidence >= 25).map((word)=>word.text).filter(Boolean);
            recognizedText.push(confidentWords?.length ? confidentWords.join(" ") : result.data.text);
            await worker.setParameters({
                tessedit_pageseg_mode: 11
            });
            const sparseResult = await worker.recognize(file);
            await worker.setParameters({
                tessedit_pageseg_mode: 6
            });
            if (sparseResult.data.text.trim()) {
                recognizedText.push(sparseResult.data.text);
            }
        }
        const text = recognizedText.join("\n");
        if (!text.trim()) {
            throw new Error("No text could be detected in the image");
        }
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

//# sourceMappingURL=src_1hjm_r-._.js.map