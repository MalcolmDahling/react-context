import './App.css';
import { Parent } from './components/parent/Parent';
import { createContext } from 'react';
import { Movie } from './models/Movie';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export let myContext = createContext<Movie[]>([]);

function App() {

    const [movies, setMovies] = useState<any>();


    useEffect(() => {

        axios.get<Movie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
            .then(response => {

                setMovies(
                    response.data.map((movie) => {
                        
                        return(
                            <div>
                                <p>ID: {movie.id}</p>
                                <p>Name: {movie.name}</p>
                                <p>Desc: {movie.description}</p>
                                <p>Price: {movie.price}</p>
                                <img src={movie.imageUrl}></img>
                                <p>Year: {movie.year}</p>
                                <p>Added: {movie.added}</p>
                            </div>
                        );
                    })
                );
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

