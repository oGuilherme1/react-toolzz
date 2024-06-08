import React, { useState, useEffect } from 'react';

const registerForm = (tema) => {
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className='p-5 lg:p-6 relative'>
                    <label htmlFor="email" className={`${tema === 'ligth' ? 'text-black' : 'text-white'} block mb-2 text-sm`}>
                        Nome
                    </label>
                    <div className="relative">
                        <input
                            type="name"
                            name="nome"
                            id="nome"
                            placeholder="testando"
                            value={user}
                            onChange={handleUserChange}
                            className={`block w-full px-4 py-2 pl-10 mt-2 text-customInput placeholder-customInput border rounded-md focus:border-customBlue dark:focus:border-customBlue focus:ring-customBlue focus:outline-none focus:ring focus:ring-opacity-40
                                            ${tema === 'ligth' ? 'bg-white' : 'bg-black'} 
                                            ${tema === 'ligth' ? 'border-black' : 'border-customInput'}`}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="#585858"
                        >
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>
                    </div>
                </div>
                <div className='p-5 lg:p-6 relative'>
                    <label htmlFor="email" className={`${tema === 'ligth' ? 'text-black' : 'text-white'} block mb-2 text-sm`}>
                        Usuário
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example010203"
                            value={user}
                            onChange={handleUserChange}
                            className={`block w-full px-4 py-2 pl-10 mt-2 text-customInput placeholder-customInput border rounded-md focus:border-customBlue dark:focus:border-customBlue focus:ring-customBlue focus:outline-none focus:ring focus:ring-opacity-40
                                            ${tema === 'ligth' ? 'bg-white' : 'bg-black'} 
                                            ${tema === 'ligth' ? 'border-black' : 'border-customInput'}`}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="#585858"
                        >
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>
                    </div>
                </div>
                <div className="p-5 lg:px-6 lg:pb-6">
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className={`${tema === 'ligth' ? 'text-black' : 'text-white'} block mb-2 text-sm`}>
                            Senha
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`block w-full px-4 py-2 pl-10 mt-2 text-customInput placeholder-customInput border rounded-md focus:border-customBlue dark:focus:border-customBlue focus:ring-customBlue focus:outline-none focus:ring focus:ring-opacity-40
                                            ${tema === 'ligth' ? 'bg-white' : 'bg-black'} 
                                            ${tema === 'ligth' ? 'border-black' : 'border-customInput'}`}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="#585858"
                        >
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center p-5 lg:px-6 lg:pb-6">
                    <input
                        type="checkbox"
                        id="safeAddress"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className={`w-4 h-4 appearance-none border-2 border-gray-500 cursor-pointer ${isChecked ? 'bg-blue-600' : 'bg-none'}`}
                    />
                    <label htmlFor="safeAddress" className={`${tema === 'ligth' ? 'text-black' : 'text-white'} block ml-2 text-sm`}>
                        Manter conectado
                    </label>
                </div>
                <div className="flex items-center lg:hidden xl:justify-center lg:px-6 hidden lg:flex">
                    <HCaptcha
                        sitekey="282e7f69-08d3-4a0a-b4d2-d15b4ce78629"
                        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                    />
                </div>

                <div className="px-5 lg:px-6">
                    <button
                        type="submit"
                        className="w-full h-12 px-4 py-2 tracking-wide text-white bg-customBlue rounded-md"
                    >
                        <span className="mr-2 hidden lg:inline-block">
                            <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: "#ededed" }} />
                        </span>
                        Entrar
                    </button>
                </div>
            </form>
            <div className='text-center p-6'>
                <p className={` text-sm ${tema === 'ligth' ? 'text-black' : 'text-white'}`}>Esqueceu sua senha? <a href="" className='text-customBlue'>Recuperar senha</a></p>
            </div>
        </div>
    )
}

export default registerForm;