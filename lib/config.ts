import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";
import type { ChatKitOptions } from "@openai/chatkit";

import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algernon",
  description: "Algernon – váš knižní rádce",
};

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Jak používat tento chat?",
    prompt: "Jak používat tento chat?",
    icon: "circle-question",
  },
  {
    icon: "book-open",
    label: "Doporuč mi nějaké romantasy novinky.",
    prompt: "Doporuč mi nějaké romantasy novinky.",
  },
  {
    icon: "book-open",
    label: "Mám rád temné detektivky. Které jsou nejlepší?",
    prompt: "Mám rád temné detektivky. Které jsou nejlepší?",
  },
];

export const PLACEHOLDER_INPUT = "Zeptej se na něco...";

export const GREETING = "Ahoj, jsem tvůj knižní asistent.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#181818",
      level: 1,
    },
  },
  radius: "round",
  density: "compact",
});

export const options: Partial<ChatKitOptions> = {
  composer: {
    placeholder: PLACEHOLDER_INPUT,
    attachments: {
      enabled: false,
    },
  },
};
