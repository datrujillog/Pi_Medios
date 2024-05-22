import axios from 'axios';


export const sendContact = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/api/v1/products/create', 
            data,
            {
                headers: {
                    'Auth': 'abcda0dc-74fd-4e3c-8316-a3df6f5071a6',
                }
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

