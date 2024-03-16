import { createAsyncThunk } from "@reduxjs/toolkit";

export const authenticationValidate = createAsyncThunk('globalSlice/authenticationValidate', async () => {
    try {
        const url = 'https://www.reddit.com/api/v1/access_token';
        const data = {
            grant_type : "password",
            username: 'Historical-Tutor3099',
            password: 'Tejas@123'
        };
        const requestOptions = {
            method: 'POST',
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Authorization" : "Basic Mmhmek9Calc5bF8yQTZ5YXpncTdxUTplQnZ2bFZ3X2RoV2ViN1ZMUHNoUjlNYUlvN0w0T2c="
            },
            // Authorization: 
            // {
            //     Username: '2hfzOBjW9l_2A6yazgq7qQ',
            //     Password: 'eBvvlVw_dhWeb7VLPshR9MaIo7L4Og'
            // },
            body: JSON.stringify(data)
        }
        console.log('requestionOptions',requestOptions)
        const response = await fetch(url, requestOptions);
        console.log('the respons is', response)
        const result = await JSON.parse(await response.text());
        console.log('result getting', result)

    } catch (error) {
        console.log('the error is coming', error)
    }
})

