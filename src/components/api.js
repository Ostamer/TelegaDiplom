import axios from 'axios';

export const fetchDataFromAPI = async (mode, selectedOption) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/lemmatize', {
            params: { mode, selected_option: selectedOption }
        });
        return response.data.lemma;
    } catch (error) {
        console.error('Ошибка при запросе:', error);
        throw new Error('Ошибка при запросе');
    }
};
