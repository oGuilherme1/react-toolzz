import React, { useState, useEffect } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/img/principal.jfif';
import logoWhite from '../assets/img/logo-white.png';
import logoBlack from '../assets/img/logo-black.png';
import { handleLogin, handleRegister } from '../services/api';
import { Form, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tema, setTema] = useState('');
    const [showCadastro, setShowCadastro] = useState(true);

    const verifyOperacionalSystem = () => {
        const body = document.body;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark:bg-black');
            setTema('dark');
        } else {
            body.classList.add('bg-white');
            setTema('ligth');
        }
    }

    const handleForm = () => {
        setShowCadastro(!showCadastro);
    };

    const handleIsDark = () => {

        const body = document.body;

        if (body.className === 'bg-white') {
            body.classList.add('dark:bg-black');
            body.classList.remove('bg-white');
            setTema('dark');
        } else {
            body.classList.add('bg-white');
            body.classList.remove('dark:bg-black');
            setTema('ligth');
        }

    };

    const slides = [
        {
            tipo: "Cursos",
            title: "Plataforma de cursos completa",
            message: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum'
        },
        {
            tipo: "Videos",
            title: "Plataforma de videos completa",
            message: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum'
        },
        {
            tipo: "Estudos",
            title: "Plataforma de estudos completa",
            message: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum'
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const isPasswordValid = () => {
        return password.length >= 8;
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmitEntrar = (e) => {
        e.preventDefault();
        const data = {
            "email": user,
            "password": password
        }

        handleLogin(data)
            .then((response) => {
                if (response.success) {
                    navigate('/perfil');
                } else {
                    console.error('Erro ao entrar:', response.error);
                }
            })
            .catch((error) => {
                console.error('Erro de requisição:', error);
            });
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const data = {
            "name": name,
            "email": user,
            "password": password
        }
        handleRegister(data)
            .then((response) => {
                if (response.success) {
                    handleForm()
                } else {
                    console.error('Erro ao registrar:', response.error);
                }
            })
            .catch((error) => {
                console.error('Erro de requisição:', error);
            });

    };

    useEffect(() => {
        verifyOperacionalSystem();
    }, []);

    return (
        <div className="lg:flex h-screen">

            <div
                className="hidden bg-cover lg:flex lg:flex-col lg:bg-gray-900 lg:bg-opacity-40 lg:justify-between lg:block lg:w-11/12"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%) , url(${backgroundImage})`
                }}
            >
                <div className='py-20 px-14 flex justify-between'>
                    <div>
                        <button className='cursor-pointer'>
                            <span className='inline-flex items-center justify-center p-2 border border-white rounded-full w-14 h-14'>
                                <FontAwesomeIcon icon={faChevronLeft} size='lg' style={{ color: "#ffffff" }} />
                            </span>
                        </button>
                    </div>

                    <div>
                        <button className='cursor-pointer' onClick={handleIsDark}>
                            <span className={`inline-flex items-center justify-center p-2 ${tema === 'ligth' ? 'border-white' : 'bg-white'} border rounded-full w-14 h-14`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`w-4 ${tema === 'ligth' ? 'hidden' : 'block'}`}>
                                    <path fill="#000000" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`w-4 ${tema === 'ligth' ? 'block' : 'hidden'}`}>
                                    <path fill="#ffffff" d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />
                                </svg>
                            </span>
                        </button>
                    </div>


                </div>
                <div className="py-20 px-14 relative">
                    <div className="overflow-hidden pb-[70px]">
                        <div className='pb-4'>
                            <span className='text-white justify-center inline-flex rounded-full bg-blue-500 w-78px'>{slides[currentIndex].tipo}</span>
                        </div>
                        <div className='text-2xl text-white pb-4'>
                            {slides[currentIndex].title}
                        </div>
                        <div className='text-xl text-gray-500 '>
                            {slides[currentIndex].message}
                        </div>

                    </div>

                    <div className='flex justify-between items-center flex-row'>
                        <div className="flex">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-24 h-1 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-black'}`}
                                />
                            ))}
                        </div>
                        <div className='flex right-0 '>
                            <button className="pr-6" onClick={prevSlide} disabled={currentIndex === 0}>
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    size='2xl'
                                    style={{ color: currentIndex === 0 ? "#3A3A3A" : "#ffffff" }}
                                />
                            </button>
                            <button className="" onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    rotation={180}
                                    size='2xl'
                                    style={{ color: currentIndex === slides.length - 1 ? "#3A3A3A" : "#ffffff" }}
                                />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex lg:p-6 lg:w-4/12">
                <div className="w-full">
                    <div className='hidden lg:flex p-6 flex justify-between '>
                        {tema === 'ligth'
                            ? <img src={logoWhite} alt="" />
                            : <img src={logoBlack} alt="" />
                        }
                        {showCadastro
                            ? <button onClick={handleForm} className='lg:dark:text-customBlue' >Criar conta</button>
                            : <button onClick={handleForm} className='lg:dark:text-customBlue' >Entrar</button>
                        }
                    </div>
                    <div className='lg:hidden flex flex-col'>
                        <div className='flex justify-between px-5 py-4 items-center'>
                            <button className='cursor-pointer'>
                                <span className={`inline-flex items-center justify-center p-2 border ${tema === 'ligth' ? 'border-black' : 'border-white'} rounded-full w-14 h-14`}>
                                    <FontAwesomeIcon icon={faChevronLeft} size='lg' style={{ color: tema === 'ligth' ? '#000000' : '#ffffff' }} />
                                </span>
                            </button>
                            {showCadastro
                                ? <button onClick={handleForm} className={`${tema === 'ligth' ? 'text-black' : 'text-white'}`}>Criar conta</button>
                                : <button onClick={handleForm} className={`${tema === 'ligth' ? 'text-black' : 'text-white'}`}>Entrar</button>
                            }
                        </div>
                        <div className={`border-t ${tema === 'ligth' ? 'border-black' : 'border-white'} w-full`}></div>
                        <div className='pt-6 p-5'>
                            {tema === 'ligth'
                                ? <img src={logoWhite} alt="" />
                                : <img src={logoBlack} alt="" />
                            }
                        </div>
                    </div>
                    <div className="text-rigth p-5 lg:p-4">
                        <h2 className={`text-xl md:text-3xl lg:text-32px font-bold text-rigth ${tema === 'ligth' ? 'text-black' : 'text-white'}`}>Boas-vindas!</h2>
                        <p className="mt-4 text-base lg:text-lg text-customInput">Entre utilizando uma das opções abaixo</p>
                    </div>
                    <div className="flex p-4 lg:p-6 justify-between md:justify-between justify-center gap-4">
                        <div className="">
                            <button type="button" className={`w-card-icon-lg xs:w-card-mobile md:w-card-lg lg:w-card-icon-lg xl:w-card-mobile 1xl:w-card-lg h-12 flex justify-center items-center ${tema === 'ligth' ? 'bg-white' : 'bg-black'} rounded-md border ${tema === 'ligth' ? 'border-black' : 'border-white'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className={`w-4 ${tema === 'ligth' ? 'fill-black' : 'fill-white'}`}>
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            <button type="button" className={`w-card-icon-lg xs:w-card-mobile md:w-card-lg lg:w-card-icon-lg xl:w-card-mobile 1xl:w-card-lg h-12 flex justify-center items-center ${tema === 'ligth' ? 'bg-white' : 'bg-black'} rounded-md border ${tema === 'ligth' ? 'border-black' : 'border-white'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`w-4 ${tema === 'ligth' ? 'fill-black' : 'fill-white'}`}>
                                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            <button type="button" className={`w-card-icon-lg xs:w-card-mobile md:w-card-lg lg:w-card-icon-lg xl:w-card-mobile 1xl:w-card-lg h-12 flex justify-center items-center ${tema === 'ligth' ? 'bg-white' : 'bg-black'} rounded-md border ${tema === 'ligth' ? 'border-black' : 'border-white'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`w-4 ${tema === 'ligth' ? 'fill-black' : 'fill-white'}`}>
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            <button type="button" className={`w-card-icon-lg xs:w-card-mobile md:w-card-lg lg:w-card-icon-lg xl:w-card-mobile 1xl:w-card-lg h-12 flex justify-center items-center ${tema === 'ligth' ? 'bg-white' : 'bg-black'} rounded-md border ${tema === 'ligth' ? 'border-black' : 'border-white'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`w-4 ${tema === 'ligth' ? 'fill-black' : 'fill-white'}`}>
                                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute p-5 inset-0 lg:p-6 flex items-center">
                            <div className={`w-full border-t ${tema === 'ligth' ? 'border-customInput border-opacity-20' : 'border-customInput border-opacity-60'} `}></div>
                        </div>
                        <div className="relative flex p-3 justify-center text-sm">
                            <span className={`${tema === 'ligth' ? 'bg-white' : 'bg-black'} px-2 ${tema === 'ligth' ? 'text-black' : 'text-gray-400'}`}>OU</span>
                        </div>
                    </div>

                    {showCadastro
                        ? (<div className="">
                            <form onSubmit={handleSubmitEntrar}>
                                <div className='p-5 lg:py-3 relative'>
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
                                            required
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
                                <div className="p-5 lg:px-6 lg:py-3 lg:pb-5">
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
                                            required
                                            value={password}
                                            onChange={handlePasswordChange}
                                            pattern=".{8,}"
                                            title="A senha deve ter no mínimo 8 caracteres"
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

                                <div className="flex hidden xl:flex xl:px-2 justify-center">
                                    <HCaptcha
                                        sitekey="282e7f69-08d3-4a0a-b4d2-d15b4ce78629"
                                        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                                    />
                                </div>

                                <div className="px-5 lg:px-6 pt-6">
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
                                <p className={` text-sm ${tema === 'ligth' ? 'text-black' : 'text-white'}`}>Esqueceu sua senha? <button className='text-customBlue'>Recuperar senha</button></p>
                            </div>
                        </div>)
                        : (<div className="">
                            <form onSubmit={handleSubmitRegister}>
                                <div className='p-5 lg:py-3 relative'>
                                    <label htmlFor="email" className={`${tema === 'ligth' ? 'text-black' : 'text-white'} block mb-2 text-sm`}>
                                        Nome
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="name"
                                            name="nome"
                                            id="nome"
                                            required
                                            placeholder="nome"
                                            value={name}
                                            onChange={handleNameChange}
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
                                <div className='p-5 lg:py-3 relative'>
                                    <label htmlFor="email" className={`${tema === 'ligth' ? 'text-black' : 'text-white'} block mb-2 text-sm`}>
                                        Usuário
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            placeholder="example010203@gmail.com"
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
                                <div className="p-5 lg:py-3 lg:pb-1">
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
                                            required
                                            pattern=".{8,}"
                                            title="A senha deve ter no mínimo 8 caracteres"
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
                                <div className="px-5 pt-6 lg:px-6">
                                    <button
                                        type="submit"
                                        className="w-full h-12 px-4 py-2 tracking-wide text-white bg-customBlue rounded-md"
                                    >
                                        <span className="mr-2 hidden lg:inline-block">
                                            <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: "#ededed" }} />
                                        </span>
                                        Registrar
                                    </button>
                                </div>
                            </form>
                            <div className='text-center p-6'>
                                <p className={` text-sm ${tema === 'ligth' ? 'text-black' : 'text-white'}`}>Ja possui uma conta? <button onClick={handleForm} className='text-customBlue'>Entrar</button></p>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default Login;
