function Socket()
{
    this.socket = new WebSocket('ws://localhost:8080');
}

Socket.prototype.init = function() {
    this.socket.onconnected = this.onConnected;
    this.socket.onmessage = this.onMessage;
    this.socket.onerror = this.onError;
    this.socket.onclose = this.onClose;
};

Socket.prototype.onMessage = function(data) {
    console.dir(data);
};

Socket.prototype.onConnected = function() {
    console.dir('Connected to socket');
};

Socket.prototype.onError = function(){
    console.dir('Error with socket');
};

Socket.prototype.onClose = function(){
    console.dir('Connection to socket closed');
};