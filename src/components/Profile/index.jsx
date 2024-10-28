import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:3000/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="profile-container">
            <div className="profile-left">
                <img src={userData.image || '/default-profile.png'} alt="Profile" className="profile-img" />
            </div>
            <div className="profile-right">
                <h1>{userData.name}</h1>
                <p>Email: {userData.email}</p>
                <p>Produtor: {userData.isProducer ? 'Sim' : 'Não'}</p>

                <h2>Meus Ingressos</h2>
                {userData.tickets && userData.tickets.length > 0 ? (
                    <ul>
                        {userData.tickets.map((ticket) => (
                            <li key={ticket.id}>
                                Evento: {ticket.eventName}, Data: {new Date(ticket.date).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Você ainda não comprou nenhum ingresso.</p>
                )}
            </div>
        </div>
    );
}

export default Profile;
