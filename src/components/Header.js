'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <header className={`w-full min-h-[100px] fixed top-0 translate-y-0 z-[100] transition-transform duration-300 ease-out p-4 ${activeSection ? 'bg-white' : 'bg-blue-900'}`}>
            <nav className="container mx-auto h-auto flex justify-between items-center overflow-x-hidden overflow-y-visible">
                <div className="w-auto h-auto">
                    <svg role='img' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg' className='w-16 h-16'>
                        <path d="M21 48H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h38a1 1 0 0 1 1 1v13h-2V2H2v44h19z"/>
                        <path d="M4 4h2v2H4zM8 4h2v2H8zM12 4h2v2h-2zM1 8h38v2H1zM31 48a17 17 0 1 1 17-17 17 17 0 0 1-17 17zm0-32a15 15 0 1 0 15 15 15 15 0 0 0-15-15z"/>
                        <path d="M31 41a10 10 0 0 1-4.44-19l.89 1.79a8 8 0 1 0 7.1 0l.89-1.79A10 10 0 0 1 31 41z"/>
                        <path d="M30 20h2v10h-2z"/>
                    </svg>
                </div>
                <ul className="flex flex-grow-[1] mx-0">
                    <li className={`list-item list-none mx-2 px-4 ${styles.actionMenu}`}>
                        <Link href="/" className={`font-bold hover:text-red-700 ${activeSection === 'section1' ? 'text-red-700' : activeSection ? 'text-black' : 'text-white'}`} onClick={() => handleSectionClick('section1')}>Sección 1</Link>
                        { activeSection === 'section1' && (
                            <div className="fixed inset-0 bg-white mt-[100px] h-[calc(100vh-160px)] flex justify-center items-center transition-transform duration-100 ease-out transform">
                                <div className="mx-auto p-4">
                                    <ul className='flex flex-row flex-wrap list-none p-0 mx-5 my-10'>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.050s' }}>
                                            <a href="/" title="TODOS LOS MODELOS" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/homepage/hero-2024/MMCM_Modelos_Home_2024.png?width=720&auto=webp&quality=70" alt="full" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>TODOS LOS MODELOS</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.1s' }}>
                                            <a href="/" title="Modelo 1" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/cars/mirage-g4/2021/primary/hero/hero_mirage-g4.png?width=720&auto=webp&quality=70" alt="modelo1" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>Modelo 1</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.150s' }}>
                                            <a href="/" title="Modelo 2" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/cars/l200/2024/bodies/l200-primary.png?width=720&auto=webp&quality=70" alt="modelo2" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>Modelo 2</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.2s' }}>
                                            <a href="/" title="Modelo 3" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/cars/montero-sport/2020/primary/hero/hero_montero-sport.png?width=720&auto=webp&quality=70" alt="modelo3" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>Modelo 3</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.250s' }}>
                                            <a href="/" title="Modelo 4" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/cars/xpander/2024/primary/exterior/U33_0_24XPANDERCROSS_side480x210.png?width=720&auto=webp&quality=70" alt="modelo4" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>Modelo 4</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.3s' }}>
                                            <a href="/" title="Modelo 5" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/cars/outlander-phev/2023/primary/W.%20Diamond%20480x210.png?width=720&auto=webp&quality=70" alt="modelo5" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>Modelo 5</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="menuitem" className='max-w-[25%] px-[1.25rem] list-none animate-fadeInUp' style={{ animationDelay: '0.350s' }}>
                                            <a href="/" title="Modelo 6" target="" className='p-3 min-h-14'>
                                                <div className='w-full'>
                                                    <img className='max-w-[calc(80%)]' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/cars/xforce/2025/bodies/Outlander_Sport_Home.png?width=720&auto=webp&quality=70" alt="modelo6" />
                                                </div>
                                                <div className='text-center w-full'>
                                                    <p className='text-gray-800 text-base text-center font-bold block'>Modelo 6</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='list-item list-none mx-2 px-4'>
                        <Link href="/" className={`font-bold hover:text-red-700 ${activeSection === 'section2' ? 'text-red-700' : activeSection ? 'text-black' : 'text-white'}`} onClick={() => handleSectionClick('section2')}>Sección 2</Link>
                        { activeSection === 'section2' && (
                            <div className="fixed inset-0 bg-white mt-[100px] h-[calc(100vh-160px)] flex justify-center items-center transition-transform duration-100 ease-out transform">
                                <div className="flex flex-row mx-auto p-4">
                                    <img className='absolute right-[60%] top-[10%] max-w-[calc(40%)] animate-slideIn' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/navegacion/nav-comprar.png?width=2160&auto=webp&quality=70" alt="sección2" />
                                    <ul className='flex flex-col h-full w-screen justify-normal'>
                                        <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.1s' }} role="menuitem">
                                            <a href="/" title="Opción 1" target="">
                                                <span className='text-base text-gray-600 hover:text-black'>Opción 1</span>
                                            </a>
                                        </li>
                                        <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.150s' }} role="menuitem">
                                            <a href="/" title="Opción 2" target="">
                                                <span className='text-base text-gray-600 hover:text-black'>Opción 2</span>
                                            </a>
                                        </li>
                                        <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.2s' }} role="menuitem">
                                            <a href="/" title="Opción 3" target="">
                                                <span className='text-base text-gray-600 hover:text-black'>Opción 3</span>
                                            </a>
                                        </li>
                                        <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.250s' }} role="menuitem">
                                            <a href="/" title="Opción 4" target="">
                                                <span className='text-base text-gray-600 hover:text-black'>Opción 4</span>
                                            </a>
                                        </li>
                                        <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.3s' }} role="menuitem">
                                            <a href="/" title="Opción 5" target="">
                                                <span className='text-base text-gray-600 hover:text-black'>Opción 5</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='list-item list-none mx-2 px-4'>
                        <Link href="/" className={`font-bold hover:text-red-700 ${activeSection === 'section3' ? 'text-red-700' : activeSection ? 'text-black' : 'text-white'}`} onClick={() => handleSectionClick('section3')}>Sección 3</Link>
                        { activeSection === 'section3' && (
                            <div className="fixed inset-0 bg-white mt-[100px] h-[calc(100vh-160px)] flex justify-center items-center transition-transform duration-100 ease-out transform">
                            <div className="flex flex-row mx-auto p-4">
                                <img className='absolute right-[60%] top-[10%] max-w-[calc(40%)] animate-slideIn' src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors-mx/images/propietarios/hero_l200-prop.png?width=2160&auto=webp&quality=70" alt="sección3" />
                                <ul className='flex flex-col h-full w-screen justify-normal'>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.050s' }} role="menuitem">
                                        <a href="/" title="Opción 1" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 1</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.1s' }} role="menuitem">
                                        <a href="/" title="Opción 2" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 2</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.150s' }} role="menuitem">
                                        <a href="/" title="Opción 3" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 3</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.2s' }} role="menuitem">
                                        <a href="/" title="Opción 4" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 4</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.250s' }} role="menuitem">
                                        <a href="/" title="Opción 5" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 5</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.3s' }} role="menuitem">
                                        <a href="/" title="Opción 6" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 6</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.350s' }} role="menuitem">
                                        <a href="/" title="Opción 7" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 7</span>
                                        </a>
                                    </li>
                                    <li className='px-5 mb-5 ml-[66%] animate-fadeInUp' style={{ animationDelay: '0.4s' }} role="menuitem">
                                        <a href="/" title="Opción 8" target="">
                                            <span className='text-base text-gray-600 hover:text-black'>Opción 8</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}