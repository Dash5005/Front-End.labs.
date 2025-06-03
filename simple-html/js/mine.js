const linkExterno = 
        document.querySelector('a[title="Google Maps"]');

//linkExterno.onclick = () => {
  //  alert("Você está sendo redirecionado para um link externo.");
//};

linkExterno.addEventListener('click', (e) => {
        const option = 
                confirm("Você está sendo redirecionado para um link externo.");
        if (option === false) {
                e.preventDefault();
        }
});