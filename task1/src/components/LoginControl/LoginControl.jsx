/*
 * Создайте компонент LoginControl, который будет управлять отображением форм для входа и выхода из системы. Компонент должен отображать форму для входа, если пользователь не авторизован, и форму для выхода, если пользователь авторизован. Реализуйте функциональность, чтобы при нажатии на кнопку "Войти" пользователь становился авторизованным, а при нажатии на кнопку "Выйти" — выходил из системы. Добавьте условный емейл адрес и пароль, который должен ввести пользователь. В случае не верного ввода – отображайте сообщение с ошибкой. Используйте стили в виде объекта.
 */

import React, { useState, useEffect } from 'react';
import LogInForm from './LogInForm';
import LogOutForm from './LogOutForm';
import "../AnimatedDiv/ShowAndHide"
import { useFadeTransition } from '../../hooks/useFadeTransition';

export default function LoginControl() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginTransition = useFadeTransition(500);
    const logoutTransition = useFadeTransition(500);

    useEffect(() => {
        loginTransition.show();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        const dummyEmail = 'dummy@email.com';
        const dummyPassword = 'password';
        if (email !== dummyEmail || password !== dummyPassword) {
            setError('Wrong email or password');
        }
        loginTransition.hide();
        setTimeout(() => {
            logoutTransition.show(), 500
        })
    }

    const handleLogout = (e) => {
        e.preventDefault();

        loginTransition.hide();

        setTimeout(() => {
            setEmail('');
            setPassword('');
            setError('');
        }, 500)

    };

    return (
        <>
{loginTransition.shouldRender && (
                <LogInForm 
                    email={email} 
                    password={password} 
                    setEmail={setEmail} 
                    setPassword={setPassword} 
                    handleLoggin={handleLogin} 
                    error={error}
                    // Передаем статус видимости для CSS классов
                    isVisible={loginTransition.isVisible} 
                />
            )}

            {/* Рендерим форму выхода, если хук говорит shouldRender */}
            {logoutTransition.shouldRender && (
                <LogOutForm 
                    handleLogout={handleLogout}
                    isVisible={logoutTransition.isVisible}
                />
            )}
        </>
    );
}

