import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MenuSidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef(); // Ссылка на боковое меню

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Если клик произошел не внутри меню
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose(); // Закрыть меню
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            // Удаляем обработчик событий при размонтировании или закрытии меню
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    const sidebarVariants = {
        hidden: { y: '100%' }, // Скрытое состояние (за пределами экрана снизу)
        visible: { y: 0 },    // Видимое состояние
    };

    return (
        <motion.div
            ref={sidebarRef}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"} 
            variants={sidebarVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 50 }}
            className="fixed bottom-0 left-0 w-full max-h-screen bg-black bg-opacity-90 backdrop-blur-md shadow-lg z-50 overflow-hidden"
            style={{ height: '65vh', minHeight: '300px' }}
        >
            {/* Закрывающая кнопка */}
            <div className="flex justify-end py-3 px-6">
                <button
                    onClick={onClose}
                    className="text-white text-2xl font-bold focus:outline-none"
                >
                    ✕
                </button>
            </div>
            
            {/* Содержимое меню */}
            <div className="font-montserrat px-4 text-white flex flex-col items-center justify-between" style={{ height: '85%' }}>
                {/* Фото */}
                <div 
                    className="rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold text-white"
                    style={{ width: '40%', aspectRatio: '1/1' }}
                >
                    Фото
                </div>

                {/* Фамилия и имя */}
                <p 
                    className="font-semibold text-center mt-4"
                    style={{
                        fontSize: 'clamp(1rem, 7.5vw, 2rem)', 
                    }}
                >
                    Фамилия Имя
                </p>

                {/* Кнопка */}
                <div className="w-full px-6 mt-4">
                    <button className="bg-white text-black w-full py-4 rounded-full text-xl font-bold hover:bg-gray-300 transition">
                        История
                    </button>
                </div>

                {/* Футер */}
                <div className="w-full text-center text-sm opacity-75 pb-4">
                    <p>Разработано при поддержке НКРЯ</p>
                    <p>
                    Аналитик: <a href="https://vk.com/evgen_k45" target="_blank" class="underline">Evgeshkins</a> |
                    Разработчик: <a href="https://vk.com/sagadeev0" target="_blank" class="underline">Ostamer</a>
                    </p>
                    <p>Email: lemmatize@gmail.com</p>
                    <p>ТюмГУ 2024 год</p>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuSidebar;
