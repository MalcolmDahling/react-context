import { useContext } from "react";
import { myContext } from "../../App";
import { Movie } from "../../models/Movie";

export function Grandchild(){

    const contextValue = useContext(myContext);

    return(
        <div>
            Grandchild
            {contextValue.map((movie:Movie) => {

                return(
                    <div key={movie.id}>
                        <p>ID: {movie.id}</p>
                        <p>Name: {movie.name}</p>
                        <p>Desc: {movie.description}</p>
                        <p>Price: {movie.price}</p>
                        <img src={movie.imageUrl}></img>
                        <p>Year: {movie.year}</p>
                        <p>Added: {movie.added}</p>
                    </div>
                );
            })}
        </div>
    );

}