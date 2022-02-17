import React from "react";
import CardNote from "./CardNote";

function List() {
    return (
        <ul>
            {Array.of("Trabalho", "Trabalho", "Estudo").map((category) => {
                return (
                    <li>
                        <h1>{category}</h1>
                        <CardNote />
                    </li>
                );
            })}
        </ul>
    );
}

export default List;
