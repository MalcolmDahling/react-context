import { Grandchild } from "../grandchild/Grandchild";

export function Child(){

    return(
        <div>
            Child
            <Grandchild></Grandchild>
        </div>
    );
}