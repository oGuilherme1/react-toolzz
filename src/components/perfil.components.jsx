import React from 'react';
import { handleLogout } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
    const navigate = useNavigate();

    const handleButtomLogout = (e) => {
        e.preventDefault();
        const data = {}
        handleLogout(data)
            .then((response) => {
                if (response.success) {
                    navigate('/');
                } else {
                    console.error('Error ao sair:', response.error);
                }
            })
            .catch((error) => {
                console.error('Erro na requisicao:', error);
            });;

    };
    return (
        <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-800">
            <div className="flex justify-center items-end text-center min-h-screen sm:block">
                <div className="bg-gray-500 transition-opacity bg-opacity-75"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
                <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                    <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                        <div className="grid grid-cols-1">
                            <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                                <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                                    <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">Login feito com sucesso!</p>
                                    <div className="w-full mt-6">
                                        <button
                                            href="#"
                                            onClick={handleButtomLogout}
                                            className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
