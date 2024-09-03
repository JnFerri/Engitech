
function tranformarDataString(data){
   
        // Cria um objeto Date a partir da string ISO
        const date = new Date(data);
      
        // Obtém o dia, mês e ano
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Meses são baseados em 0
        const year = String(date.getUTCFullYear()).slice(-2); // Extrai os últimos dois dígitos do ano
      
        // Retorna a data formatada
        return `${day}/${month}/${year}`;
}

export default tranformarDataString