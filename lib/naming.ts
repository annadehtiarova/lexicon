const GENERIC_NAME_PATTERN =
  /^(img|image|photo|picture|screenshot|scan|dsc|unbenannt|untitled)[\s_-]*\d*$/i;

function titleCaseFromFileName(fileName: string): string {
  const base = fileName.replace(/\.[a-z0-9]+$/i, "");
  const words = base.replace(/[_-]+/g, " ").trim();
  if (!words || GENERIC_NAME_PATTERN.test(words)) return "";
  return words
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Builds a study set name, preferring the model's detected topic over the filename. */
export function deriveSetName(files: File[], existingSetCount: number, topic?: string): string {
  const title = topic?.trim() || titleCaseFromFileName(files[0]?.name ?? "");
  const number = existingSetCount + 1;
  return title ? `${title} — Set ${number}` : `Study Set ${number}`;
}
