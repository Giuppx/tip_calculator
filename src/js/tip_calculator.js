/**
 * @constant billAmount
 * Rappresenta il valore del conto prelevato dall'elemento HTML con id "bill".
 * È di tipo string (derivato dal value di un input).
 * 
 * @constant tipPercentage
 * Rappresenta il valore della percentuale di mancia prelevato dall'elemento HTML con id "tip".
 * È di tipo string (derivato dal value di un input).
 * 
 * @constant totalContainer
 * Contenitore HTML (id "total") che ospita la label e il valore totale calcolato.
 * 
 * @constant totalLabel
 * Nodo testuale che rappresenta la scritta "Total:" mostrata all'utente.
 * 
 * @constant totalValueSpan
 * Elemento <span> che contiene il valore totale dell'operazione formattato.
 * Lo stile è applicato tramite la classe CSS "total-value", che ne imita le dimensioni di un <h2>.
 * 
 * @constant calculateButton
 * Riferimento al pulsante HTML con id "btn-calculate" che avvia il calcolo al click.
 * 
 * @method toFixed
 * Metodo nativo di JavaScript che formatta un numero con un numero fisso di cifre decimali.
 * Restituisce una string.
 * 
 * @function calculateTotal
 * @returns {void} Non restituisce alcun valore, ma aggiorna il DOM tramite displayTotal().
 * Calcola il totale del conto sommando il valore del conto base
 * e la percentuale di mancia inserita dall'utente.
 * Recupera i valori dagli input HTML con id "bill" e "tip",
 * li converte in numeri e calcola il totale.
 * Il risultato viene formattato a due decimali e passato a displayTotal().
 * 
 * 
 * @function displayTotal
 * @param {string} total - Totale di tipo string.
 * @returns {void} Non restituisce alcun valore, ma aggiorna il DOM.
 * Mostra il totale calcolato nell'elemento HTML con id "total".
 * Pulisce il contenuto esistente, aggiunge la label "Total:" e il valore calcolato
 * racchiuso in un elemento <span> con classe CSS "total-value".
 */


function calculateTotal() {
    const billInput = document.getElementById('bill');
    const tipInput = document.getElementById('tip');

    // string -> number
    const billAmount = +billInput.value
    const tipPercentage = +tipInput.value

    const totalAmount = billAmount + (billAmount * tipPercentage / 100);

    displayTotal(totalAmount.toFixed(2)); // Due decimali
}

function displayTotal(total) {
    const totalContainer = document.getElementById('total');
    totalContainer.textContent = ''; // Svuota il contenitore

    const totalLabel = document.createTextNode('Total: ');

    const totalValueSpan = document.createElement('span');
    totalValueSpan.textContent = `$${total}`;
    totalValueSpan.classList.add('total-value');

    totalContainer.appendChild(totalLabel);
    totalContainer.appendChild(totalValueSpan);
}

const calculateButton = document.getElementById('btn-calculate');
calculateButton.addEventListener('click', calculateTotal);
