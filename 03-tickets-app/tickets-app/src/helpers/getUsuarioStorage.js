/**
 * Función para obtener la información del usuario almacenada en el localStorage.
 * @returns {Object} Un objeto que contiene la información del usuario.
 * @property {string} agente - El nombre del agente almacenado en el localStorage.
 * @property {string} escritorio - El nombre del escritorio almacenado en el localStorage.
 */
export const getUsuarioStorage = () => {
    // Retorna un objeto con la información del usuario obtenida del localStorage
    return {
        agente: localStorage.getItem('agente'),
        escritorio: localStorage.getItem('escritorio'),
    };
};
