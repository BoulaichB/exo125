import React from 'react';
import { useState } from 'react';

export const Formulaires = () => {
    // Formulaires : Créez un formulaire d'inscription qui utilise les state pour gérer les entrées de l'utilisateur. Ajoutez des contrôles de validation pour vous assurer que tous les champs sont remplis et valides.
    let [newName, setNewName] = useState('');
    let [newEmail, setNewEmail] = useState('');
    let [newPassword, setNewPassword] = useState('');
    let bienvenu;
    

    const isValid = () => {
        const name = document.getElementsByTagName('input')[0];
        const email = document.getElementsByTagName('input')[1];
        const password = document.getElementsByTagName('input')[2];
        if(name.value.length > 0 && email.value.length > 0 && password.value.length > 0){
            newName = name.value;
            newEmail = email.value;
            newPassword = password.value;
            setNewName(newName);
            setNewEmail(newEmail);
            setNewPassword(newPassword);
        }
    }
    if(newName != ''){
        bienvenu = <span>Bienvenu {newName}</span>;
    }

  return (
    <div>
        <h1>Log In</h1>
        {bienvenu}
        <form action="">
            <input type="text" placeholder='Name' className='w-60 block border-2 border-gray-300 rounded my-2'/>
            <input type="email" placeholder='Email' className='w-60 block border-2 border-gray-300 rounded mb-2'/>
            <input type="password" placeholder='Password' className='w-60 block border-2 border-gray-300 rounded mb-2'/>
        </form>
        <button className='bg-blue-400 text-white font-bold px-2 rounded-full' onClick={isValid}>Log in</button>
    </div>
  )
}
