import { useState } from "react";
import { createContext } from "react";
export let Theamcontext = createContext(null);
export function Theamprovider({children}){
    const [theam, settheam] = useState('light');
    return <Theamcontext value={theam}>{children}</Theamcontext>
}

