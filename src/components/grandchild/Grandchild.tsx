import { useContext } from "react";
import { myContext } from "../../App";

export function Grandchild(){

    const contextValue = useContext(myContext);

    return(
        <div>
            Grandchild
            {contextValue}
        </div>
    );

}