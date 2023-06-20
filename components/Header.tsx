type Props ={
    children:string;
}

import { Children } from "react";

const Header = (props : Props) => {

    return(
        <h1 className="text-2xl font-semibold">
            {props.children}
        </h1>
    );
}


export {Header};