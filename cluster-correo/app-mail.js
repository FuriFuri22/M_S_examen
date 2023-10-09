const nodemailer = require('nodemailer');


// Configuración del transporte
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'canesinfranco7@gmail.com', // Reemplaza con tu dirección de correo
    pass: '', // Reemplaza con tu contraseña de aplicación
  },
});

// Detalles del correo
const mailOptions = {
  from: 'Tu Nombre <tu_correo@gmail.com>',
  to: 'canesinfranco3@gmail.com', // Reemplaza con la dirección de correo del destinatario
  subject: 'Asunto del correo',
  text: 'Mensaje de prueba enviado desde Node.js',
};

// Enviar el correo
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error al enviar el correo:', error);
  } else {
    console.log('Correo enviado con éxito:', info.response);
  }
});
