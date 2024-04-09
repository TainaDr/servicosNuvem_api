function chamarServicoAPITempo() {
    const apiKey = '7e77dedf307c4133e4fa28567b872554';
    const cidade = document.getElementById('cidade').value;
    
    if (!cidade) {
        alert('Digite uma cidade');
        return;
    }

    const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

    fetch(urlClima)
        .then(response => response.json())
        .then(data => {
            const tempo = data.main.temp;
            tempoCelsius = tempo - 273.15;
            const description = data.weather[0].description;
            const cidade = data.name;
            document.getElementById('cidade').innerHTML = `<h2>Cidade: ${cidade}</h2>`;
            document.getElementById('tempo').innerHTML = `Temperatura: ${tempoCelsius} °C`;
            document.getElementById('descricao').innerHTML = `Descrição: ${description}`;
        })
        .catch(error => {
            console.error('Erro ao consultar a API:', error);
            alert('Erro ao consultar a API');
        });
}