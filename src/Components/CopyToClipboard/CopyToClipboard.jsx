import { useEffect, useState } from "react";

export default function CopyToClipboard({ copiedText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(copiedText);
      setIsCopied(true);
    } catch (error) {
      console.error(error.message);
      alert("An error occurred: ", error.message);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIsCopied(false);
    }, 3000);
  }, [isCopied]);
}
