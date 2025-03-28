class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['destino', 'imagen', 'descripcion', 'costo', 'duracion', 'reservado'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    toggleReserva() {
        const reservado = this.getAttribute('reservado') === 'true';
        this.setAttribute('reservado', !reservado);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 15px;
                    width: 300px;
                    text-align: center;
                }
                .card img {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 5px;
                }
                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <img src="${this.getAttribute('imagen')}" alt="${this.getAttribute('destino')}">
                <h3>${this.getAttribute('destino')}</h3>
                <p>${this.getAttribute('descripcion')}</p>
                <p>Costo: $${this.getAttribute('costo')}</p>
                <p>Duración: ${this.getAttribute('duracion')} semanas</p>
                <button onclick="this.getRootNode().host.toggleReserva()">
                    ${this.getAttribute('reservado') === 'true' ? 'Cancelar reserva' : 'Reservar'}
                </button>
            </div>
        `;
    }
}

customElements.define('card-component', CardComponent);