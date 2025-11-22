"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

import Link from "next/link";
import Image from "next/image";
import Icon from "./icon.png";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start bg-slate-100 dark:bg-slate-950">

      <div className="relative mx-auto w-full max-w-5xl pt-20">

        <Link href="/" className="absolute top-4 left-0 z-10">
          <Image src={Icon} alt="Logo" width={48} height={48} />
        </Link>

        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>

    </main>  );
}
