const gitHubId = 
    document.querySelector('input[type=text]');
const btnBuscar = 
    document.querySelector('button');
//token passado para fins didáticos

const headers = { 
   
};
fetch('https://api.github.com/users/' + 'dash5005', {headers})
    .then(response => { 
        if (response.ok) {
            return response.json();
        } else {
            if(response.status === 400){
                alert('Usuário ' + gitHubId.value + ' não encontrado');
                throw new Error('Usuário não encontrado');
            }else{
                    alert('Erro de execução, tente mais tarde');
                    throw new Error('Erro de requisição');
                }
            }
})