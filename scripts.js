function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = userInput.value;

    if (userMessage.trim() === "") return;

    // Agregar el mensaje del usuario al chat
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    // Responder automáticamente (respuesta simple)
    const botResponse = getBotResponse(userMessage);
    const botMessageElement = document.createElement("div");
    botMessageElement.className = "message bot-message";
    botMessageElement.textContent = botResponse;
    chatBox.appendChild(botMessageElement);

    // Limpiar la entrada del usuario
    userInput.value = "";

    // Desplazar el chat hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}


function getBotResponse(message) {
    const normalizedMessage = message.toLowerCase().trim();

    // Respuestas predefinidas
    const responses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "adios": "Adiós, ¡que tengas un buen día!",
        "detector de co2": "El detector de CO2 mide la concentración de dióxido de carbono en el aire.",
        "niveles seguros de co2": "Los niveles seguros de CO2 en interiores son generalmente menos de 1000 ppm.",
        "que haces": "Soy capaz de proporcionarte respuestas a tus problemas relacionadas a tu detector de CO2.",
        "quien eres": "Hola, soy tu chat asistente, puedes hacerme preguntas relacionadas con tu detector de CO2.",
        "que hace el detector de co2": "El detector de CO2 mide la concentración de dióxido de carbono en el aire y emite una alerta si los niveles son demasiado altos.",
        "prevencion niveles altos de co2": "Para prevenir niveles altos de CO2, asegúrate de ventilar bien los espacios cerrados, usa purificadores de aire y revisa regularmente tu detector de CO2.",
        "seguridad detector de co2": "Sí, el detector de CO2 es seguro y fiable. Está diseñado para alertarte cuando los niveles de CO2 son peligrosos.",
        "funcionamiento detector de co2": "Nuestro detector de CO2 utiliza un sensor de calidad de aire para medir la cantidad de dióxido de carbono en el aire.",
        "mantener bajos niveles de co2": "Mantén una buena ventilación abriendo ventanas y puertas, y considera utilizar plantas de interior que ayudan a reducir el CO2.",
        "mantenimiento detector de co2": "El detector de CO2 requiere una limpieza regular del sensor y una prueba mensual para asegurar su correcto funcionamiento."
    };

    // Buscar la mejor respuesta
    for (const key in responses) {
        if (normalizedMessage.includes(key) || key.split(" ").some(word => normalizedMessage.includes(word))) {
            return responses[key];
        }
    }

    // Respuesta por defecto si no se encuentra una coincidencia
    return "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?";
}




    
