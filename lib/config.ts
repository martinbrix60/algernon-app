import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";
import type { ChatKitOptions } from "@openai/chatkit";

import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algernon",
  description: "Algernon váš knižný radca",
};

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Ako používať tento chat?",
    prompt: "Ako používať tento chat?",
    icon: "circle-question",
  },
  {
    icon: "book-open",
    label: "Odporuč mi nejaké romantasy novinky.",
    prompt: "Odporuč mi nejaké romantasy novinky.",
  },
  {
    icon: "book-open",
    label: "Mám rád temné detektívky. Ktoré sú najlepšie?",
    prompt: "Mám rád temné detektívky. Ktoré sú najlepšie?",
  },
];

export const PLACEHOLDER_INPUT = "Spýtaj sa niečo...";

export const GREETING = "Ahoj, som tvoj knižný asistent.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#990000",
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
