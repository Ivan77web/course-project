import React, { useState } from "react";
import cl from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <div className={cl.test}>
            <h1 className={cl.block}>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}