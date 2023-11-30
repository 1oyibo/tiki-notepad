"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Editor() {
  const noteEditorRef = useRef<HTMLDivElement>(null);
  const [saveStatus, setSaveStatus] = useState("Saved");

  const [spookySentences, setSpookySentences] = useState([
    "This notepad: where puns creep up like ghosts and ideas haunt every page.",
    "Filled with notes so funny, they'll make ghosts chuckle from their spectral corners.",
    "Jot down jokes so good, they'll scare away writer's block like a ghost in the night.",
    "Where the laughter echoes louder than ghostly whispers.",
    "Notes so hilarious, even the poltergeists can't help but scribble a chuckle or two.",
    "This notepad: where comedy meets the paranormal, and every page is a spectral punchline.",
    "Filled with quips so spooky, they'll make you howl with laughter like a werewolf under a full moon.",
    "Jottings so funny, they'll spook the seriousness out of any task.",
    "For ideas so eerie, they'll make your funny bone shiver.",
    "Gather thoughts here; even vampires can't resist a good pun.",
    "A notebook so witty, it's scarier than a haunted house.",
    "Scribble your spookiest humor; this notepad's got a bone-chilling sense of comedy.",
    "Writing here is so fun, it's like hosting a seance for jokes!",
    "These pages are a graveyard for writer's block; ghosts just can't haunt laughter!",
    "Laugh so hard, even the ghosts ask for a transcript!",
    "Doodle your spookiest cartoons; these pages are home to ghostly chuckles.",
    "Making notes here, even the skeletons will dance to your witty tunes!",
    "Ghosts envy this notebook; it's where humor haunts every line!",
    "Put your funniest ideas here; they'll haunt your mind like a friendly ghost!",
    "These pages, where every word is a ghost story waiting to be giggled at!",
    "Puns here? They'll make even the ghouls howl!",
  ]);

  useEffect(() => {
    const defaultNote = localStorage.getItem("note");
    if (defaultNote) {
      if (noteEditorRef.current) {
        noteEditorRef.current.innerHTML = defaultNote;
      }
    }
  }, []);

  useEffect(() => {
    const getRandomSentence = () => {
      const randomIndex = Math.floor(Math.random() * spookySentences.length);
      toast(spookySentences[randomIndex]);
    };

    getRandomSentence();

    const interval = setInterval(
      () => {
        getRandomSentence();
      },
      1 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [spookySentences]);

  const noteEditor = () => {
    if (noteEditorRef.current) {
      const newNote = noteEditorRef.current.innerHTML;
      setSaveStatus("Saving...");

      // Simulate a 3-second delay before saving to local storage
      setTimeout(() => {
        localStorage.setItem("note", newNote);
        setSaveStatus("Saved");
      }, 3000);
    }
  };

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="absolute right-5 top-5 z-10 mb-5 rounded-lg bg-stone-100 px-2 py-1 text-sm text-stone-400">
        {saveStatus}
      </div>
      <div className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg">
        <div aria-expanded="false">
          <div
            className="p-12 px-8 sm:px-12 prose-lg prose-stone dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full"
            contentEditable="true"
            tabIndex={0}
            translate="no"
            ref={noteEditorRef}
            onInput={noteEditor}
          ></div>
        </div>
      </div>
    </div>
  );
}
