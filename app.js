const app = require('./config/server');


//start socket

const server = app.listen(5000, () => {
    console.log('app start => http://localhost:5000');
});


const io = require('socket.io')(server);

// setando a variael socket io para que toda a minha app possa utilizar tbm
app.set('io', io);

io.on('connection', (socket) => {
    console.log('ENTREI NA SALA');

    socket.on('disconnect', () => {
        console.log('SAIU DA SALA');
    });   

    socket.on('msgParaServidor', (data) => {
        socket.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem,
        });
    });   

    //disparando uma mensagem para todos os usuarios

    socket.broadcast.emit('msgParaCliente', {
        apelido: data.apelido,
        mensagem: data.mensagem,
    });
});

