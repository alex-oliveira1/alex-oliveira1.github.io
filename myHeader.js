class MyHeader extends HTMLElement{
    connectedCallback() {
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");

        for(let i = 0; i < 5; i++){
            let li = document.createElement("li");
            li.textContent = `Pagina ${i}`;
            ul.appendChild(li);
        }

        nav.appendChild(ul);
        header.appendChild(nav);
        this.appendChild(header);

    }

}

customElements.define("my-header", MyHeader);