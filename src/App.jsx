// modules
import React from 'react';
// components and const
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes'


const App = () => 
    {
        return <>
            <Header />
            <Note notes={notes} />
            <Footer />
        </>;
    }
    


export default App;