const DATABASE_NAME = "lexikon-speech-audio";
const STORE_NAME = "pronunciations";

interface CachedPronunciation {
  text: string;
  audio: Blob;
}

let databasePromise: Promise<IDBDatabase | null> | null = null;

function openDatabase(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  databasePromise ??= new Promise((resolve) => {
    const request = indexedDB.open(DATABASE_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME, { keyPath: "text" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
    request.onblocked = () => resolve(null);
  });
  return databasePromise;
}

export async function getCachedPronunciation(text: string): Promise<Blob | null> {
  try {
    const database = await openDatabase();
    if (!database) return null;
    return await new Promise((resolve) => {
      const request = database
        .transaction(STORE_NAME, "readonly")
        .objectStore(STORE_NAME)
        .get(text);
      request.onsuccess = () => {
        const entry = request.result as CachedPronunciation | undefined;
        resolve(entry?.audio instanceof Blob ? entry.audio : null);
      };
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function cachePronunciation(text: string, audio: Blob): Promise<void> {
  try {
    const database = await openDatabase();
    if (!database) return;
    await new Promise<void>((resolve) => {
      const transaction = database.transaction(STORE_NAME, "readwrite");
      transaction.objectStore(STORE_NAME).put({ text, audio } satisfies CachedPronunciation);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => resolve();
      transaction.onabort = () => resolve();
    });
  } catch {
    // Audio can still play when browser storage is unavailable.
  }
}