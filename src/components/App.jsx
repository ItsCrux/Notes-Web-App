import React from 'react';
import Header from './Header';
import Note from "./Note";
import Footer from './Footer';
import Notes from '../Notes';

function createNote(note)
{
    return <Note key = {note.id}
    title = {note.title}
    content = {note.content}/>;
}

function App()
{
    return <div>
    <Header />
    {Notes.map(createNote)}
    <Footer />
    </div>;
}

export default App;