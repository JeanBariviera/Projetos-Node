const http = require ('http');
const server = http.createServer ((req, res) => {
        function calcularMedia(numeros) {
            if (numeros.length === 0) {
                return 0;
            }
            let soma = 0;
         
            for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];
            }
            const media = soma / numeros.length;
            
            return media;
        }
        const numeros = [10, 20, 30, 40, 50];
        
        const media = calcularMedia(numeros);
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end("A media dos numeros e:" + media);
});
const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});