import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import EmptyState from './components/EmptyState';
import ColorLegend from './components/ColorLegend';
import { Note } from './types/note';
import { loadNotes, saveNotes } from './utils/storage';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  const handleAddNote = (note: Note) => {
    const updatedNotes = [note, ...notes];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handleDeleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="max-w-4xl mx-auto">
          <ColorLegend />
          <NoteForm onAddNote={handleAddNote} />
          {notes.length === 0 ? (
            <EmptyState />
          ) : (
            <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;