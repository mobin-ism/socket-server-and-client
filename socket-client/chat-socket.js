// const socket = io("http://192.168.9.228:3000", {
//   withCredentials: true,
//   transportOptions: {
//     polling: {
//       extraHeaders: {
//         "my-custom-header": "abcd"
//       }
//     }
//   }
// });

const socket = io("http://192.168.9.228:3000");
const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value })
}

socket.on('message', ({ data }) => {
  handleNewMessage(data);
})

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}