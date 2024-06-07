function postData(e) {
    e.preventDefault();

    let nome1 = document.getElementById("nome01").value;
    let nome2 = document.getElementById("nome02").value;
    let nome3 = document.getElementById("nome03").value;
    let nome4 = document.getElementById("nome04").value;
    let nome5 = document.getElementById("nome05").value;
    let historio_grupo = document.getElementById("historio-grupo").value;

    // url do endpoint
    url = 'https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact';

    // objeto com os dados
    const data = {
        names: [nome1, nome2, nome3, nome4, nome5],
        message: historio_grupo,
    };

    // requisição POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(responseData => {
            console.log('Response:', responseData);
            alert('Dados enviados com sucesso');

            document.getElementById("nome01").value='';
            document.getElementById("nome02").value='';
            document.getElementById("nome03").value='';
            document.getElementById("nome04").value='';
            document.getElementById("nome05").value='';
            document.getElementById("historio-grupo").value='';
        })
        .catch(error => {
            console.error('Erro ao enviar a requisição:', error);
        });

}