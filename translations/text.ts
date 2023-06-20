/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "zh-CN": "简体中文",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "React Hooks for Data Fetching",
  "zh-CN": "用于数据请求的 React Hooks 库",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",
    typescript: "TypeScript Ready",
    remoteLocal: "Remote + Local",
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US":
    "CREATE REACT APP CONFIGURATION OVERRIDE, Set up a modern web app by running one command. Faster, simpler and more business-oriented",
  "zh-CN":"CRA 替代者，通过运行一个命令设置一个现代Web应用程序，更快，更简单和更偏业务",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "zh-CN": "在 GitHub 上编辑本页 →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "dev", text: "Powered by" },
  "zh-CN": { utmSource: "dev_zh-cn", text: "由", suffix: "驱动" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "zh-CN": "当前页面"
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "zh-CN": "搜索文档..."
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "zh-CN": "上次更新"
};
