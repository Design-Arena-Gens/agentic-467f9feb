"use client";

import React from "react";

const verseDevanagari =
  "????? ???? ???????? ?? ??????????? ?????? ????????????? | ???????????????? ???? ??????????? || ? ||";

const verseIAST =
  "sa?jaya uv?ca d???v? tu p???av?n?ka? vy??ha? duryodhanas tad? | ?c?ryam upasa?gamya r?j? vacanam abrav?t || 2 ||";

const translationEN =
  "Sanjaya said: Seeing the army of the P???avas drawn up in military formation, King Duryodhana then approached his teacher and spoke these words.";

export default function Page() {
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    } catch {
      // Fallback: create a temporary textarea
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Copied to clipboard");
    }
  };

  return (
    <section className="card">
      <h1>Bhagavad Gita 1.2</h1>

      <div className="block">
        <h2>Devan?gar?</h2>
        <p className="devanagari">{verseDevanagari}</p>
        <div className="actions">
          <button onClick={() => copy(verseDevanagari)}>Copy</button>
        </div>
      </div>

      <div className="block">
        <h2>IAST Transliteration</h2>
        <p className="iasta">{verseIAST}</p>
        <div className="actions">
          <button onClick={() => copy(verseIAST)}>Copy</button>
        </div>
      </div>

      <div className="block">
        <h2>English Translation</h2>
        <p className="translation">{translationEN}</p>
      </div>

      <div className="share">
        <button
          onClick={async () => {
            const shareText = `Bhagavad Gita 1.2\n\n${verseDevanagari}\n\n${verseIAST}\n\n${translationEN}`;
            if (navigator.share) {
              try {
                await navigator.share({ title: "Bhagavad Gita 1.2", text: shareText, url: window.location.href });
              } catch {}
            } else {
              copy(shareText);
            }
          }}
        >
          Share
        </button>
      </div>
    </section>
  );
}
