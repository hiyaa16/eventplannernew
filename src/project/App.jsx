import React from "react"

import "./styles.css"
import "./cinematic.css"

import "./cinematic.jsx"
import "./components.jsx"
import "./story-scroll.jsx"
import "./sections.jsx"
import "./tweaks-panel.jsx"

const TWEAK_DEFAULTS = {
  palette: "Maroon & Ivory",
  grain: true,
  cursor: true,
}

const PALETTES = {
  "Maroon & Ivory": {
    cream: "#F4ECDF",
    cream2: "#E8DBC6",
    paper: "#FAF3E5",
    ink: "#2E0F14",
    sage: "#6B1F2B",
    bronze: "#B89358",
    bronze2: "#D4B97A",
    line: "#D6C4AE",
  },

  "Deep Maroon": {
    cream: "#F1E4D4",
    cream2: "#E0CCB4",
    paper: "#F6EBD9",
    ink: "#1F0A0D",
    sage: "#4A1520",
    bronze: "#A8823E",
    bronze2: "#C9A658",
    line: "#CFB99A",
  },

  "Sage & Cream": {
    cream: "#F0E9DA",
    cream2: "#E6DDC8",
    paper: "#F7F2E6",
    ink: "#1E1C18",
    sage: "#2E3A2D",
    bronze: "#9A7A48",
    bronze2: "#B89968",
    line: "#C9BFA8",
  },
}

function applyPalette(name) {
  const p =
    PALETTES[name] ||
    PALETTES["Maroon & Ivory"]

  const r = document.documentElement

  r.style.setProperty("--cream", p.cream)
  r.style.setProperty("--cream-2", p.cream2)
  r.style.setProperty("--paper", p.paper)
  r.style.setProperty("--ink", p.ink)

  r.style.setProperty(
    "--sage-deep",
    p.sage
  )

  r.style.setProperty(
    "--bronze",
    p.bronze
  )

  r.style.setProperty(
    "--bronze-2",
    p.bronze2
  )

  r.style.setProperty(
    "--line",
    p.line
  )
}

function App() {
  const [t, setTweak] =
    window.useTweaks
      ? window.useTweaks(
          TWEAK_DEFAULTS
        )
      : [
          TWEAK_DEFAULTS,
          () => {},
        ]

  React.useEffect(() => {
    applyPalette(t.palette)
  }, [t.palette])

  React.useEffect(() => {
    if (
      window.bootCinematic
    ) {
      window.bootCinematic()
    }
  }, [])

  return (
    <>
      {window.Nav && (
        <window.Nav />
      )}

      <main>

        {window.Hero && (
          <window.Hero />
        )}

        

        {window.Philosophy && (
          <window.Philosophy />
        )}

        {window.StoryScroll && (
          <window.StoryScroll />
        )}

        {window.HorizontalCategories && (
          <window.HorizontalCategories />
        )}

        {window.Services && (
          <window.Services />
        )}

        {window.Portfolio && (
          <window.Portfolio />
        )}

        {window.Process && (
          <window.Process />
        )}

        {window.Testimonials && (
          <window.Testimonials />
        )}

        {window.InstagramSection && (
          <window.InstagramSection />
        )}

        {window.YouTubeSection && (
          <window.YouTubeSection />
        )}

        {window.FAQ && (
          <window.FAQ />
        )}

        {window.Inquiry && (
          <window.Inquiry />
        )}

      </main>

      {window.AudioPlayer && (
        <window.AudioPlayer />
      )}

      {window.WhatsAppButton && (
        <window.WhatsAppButton />
      )}

      {window.Footer && (
        <window.Footer />
      )}

      {window.TweaksPanel && (

        <window.TweaksPanel title="Tweaks">

          <window.TweakSection
            label="Mood"
          >

            <window.TweakSelect
              label="Palette"
              value={t.palette}
              options={[
                "Maroon & Ivory",
                "Deep Maroon",
                "Sage & Cream",
              ]}
              onChange={(v) =>
                setTweak(
                  "palette",
                  v
                )
              }
            />

          </window.TweakSection>

          <window.TweakSection
            label="Style"
          >

            <window.TweakToggle
              label="Film grain"
              value={t.grain}
              onChange={(v) =>
                setTweak(
                  "grain",
                  v
                )
              }
            />

            <window.TweakToggle
              label="Custom cursor"
              value={t.cursor}
              onChange={(v) =>
                setTweak(
                  "cursor",
                  v
                )
              }
            />

          </window.TweakSection>

        </window.TweaksPanel>

      )}

    </>
  )
}

export default App