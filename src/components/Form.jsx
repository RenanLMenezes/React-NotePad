import React from "react";

function Form() {
    return (
        <form>
            <input type="text" placeholder="Título"></input>
            <textarea placeholder="Escreva sua nota..." />
            <button>Criar Nota</button>
        </form>
    );
}

export default Form;
