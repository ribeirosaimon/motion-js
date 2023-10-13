


const getColors = (userType) => {
    if (userType === 'USER') {
        return {
            primary: '#FFA500',
            secondary: '#FF8C00',
            success: '#FFD700',
            warning: '#FF5733',
            danger: '#FF4500',
            hold: '#966003',
        };
    } else {
        return {
            primary: '#008000',
            secondary: '#32CD32',
            success: '#00FF00',
            warning: '#FFFF00',
            danger: '#FF0000',
            hold: '#243f08',
        };
    }
};

const Colors = {
    primary: '#007BFF',
    secondary: '#4A90E2',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    hold: '#dc3545',
};

export {getColors, Colors};