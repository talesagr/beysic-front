import React, { useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    const styles = {
        success: {
            backgroundColor: '#58a3cf',
            color: '#012E59',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            textAlign: 'center',
        },
        error: {
            backgroundColor: '#FBC02D',
            color: '#012E59',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            textAlign: 'center',
        }
    };

    return (
        <div style={type === 'success' ? styles.success : styles.error}>
            {message}
        </div>
    );
};

export default Notification;
