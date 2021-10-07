var express = require('express')
var app = express()
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

app.use(express.static('public'));

http.createServer(
    function(req, res) {
        if (req.url == '/gravarcomputador') {
            var form = new formidable.IncomingForm();
            form.parse(req,
                function(err, fields) {
                    function somarValores(){
                        var s1 = parseInt(fields.Processador);
                        var s2 = parseInt(fields.RAM);
                        var s3 = parseInt(fields.Video);
                        var s4 = parseInt(fields.HD);
                        var s5 = parseInt(fields.SSD);
                        var s6 = 1500 + s1 + s2 + s3 + s4 + s5;
                            return(s6);
                    }
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.write('<h1>Parabéns por montar seu computador</h1>');
                    res.write('O valor final foi de: '+ somarValores());
                    res.end();
                }
            );
        }
        else {
            fs.readFile('Computador.html',
                function(err, pagina) {
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.write(pagina);
                    res.end();
                    
                } 
            );
        }
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');