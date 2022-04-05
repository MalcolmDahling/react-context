import './App.css';
import { Parent } from './components/parent/Parent';
import { createContext } from 'react';
import { Movie } from './models/Movie';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export let myContext = createContext<Movie[]>([]);

function App() {

    const [movies, setMovies] = useState<Movie[]>([]);


    useEffect(() => {

        axios.get<Movie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
            .then(response => {
                setMovies(response.data);
            });
    }, []);




    return (
        <myContext.Provider value={movies}>
            <div className="App">
                <Parent></Parent>
            </div>
        </myContext.Provider>
    );
}

export default App;

