import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListing = createAsyncThunk('HomeScreen/fetchListing',async()=>{
    try {
        const url = 'https://oauth.reddit.com/best';
        const oauthToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzEwNzc4MTUzLjg5NzA5OSwiaWF0IjoxNzEwNjkxNzUzLjg5NzA5OSwianRpIjoiZmNjT3VoaDJnTzFTU1BOYmpOT3FGYkV4bU4zbTRRIiwiY2lkIjoiMmhmek9Calc5bF8yQTZ5YXpncTdxUSIsImxpZCI6InQyX3c0NDQ3eWliMSIsImFpZCI6InQyX3c0NDQ3eWliMSIsImxjYSI6MTcxMDM1MzI1MDE1MSwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.Xihz-XE3M8h8gDkXVnvL6ffNsxuoihkk5S48ahQF1A7aAjZpdBnEZ47lmu5K21M6hYTjaOMHxXx0kwM_33gB6JbS8bujCSmJ_m0o2LzLdzUUvUoXPst-k1Deet08JUY8qcCMvDYOFI6JE7SrDf-osGLAig-tbtYbc22bVlyEA9GWjEeG0fPRSjm_TO4obXvVRrfD3o8SQo6nbbkpQxv598r2PPjGwUvWTnbT709jN4-kQd2LcFNoEO2mGaZnvlaM1mAMoTOfbXoBRvCIUKG7gwfmEmXmJxQrLnj7fQN8hXsLein0sUZVZ0gy9IULe_WJWKfJa_fLWfZrrxVt6DBLRw';
    
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        };
    
        const response = await fetch(url, requestOptions);
        const result = JSON.parse(await response.text()); // Parse the response directly as JSON
        return result
    } catch (error) {
        console.log('Error:', error);
    }
})

export const fetchTopListing = createAsyncThunk('HomeScreen/fetchTopListing',async()=>{
    try {
        const url = 'https://oauth.reddit.com/top';
        const oauthToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzEwNzc4MTUzLjg5NzA5OSwiaWF0IjoxNzEwNjkxNzUzLjg5NzA5OSwianRpIjoiZmNjT3VoaDJnTzFTU1BOYmpOT3FGYkV4bU4zbTRRIiwiY2lkIjoiMmhmek9Calc5bF8yQTZ5YXpncTdxUSIsImxpZCI6InQyX3c0NDQ3eWliMSIsImFpZCI6InQyX3c0NDQ3eWliMSIsImxjYSI6MTcxMDM1MzI1MDE1MSwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.Xihz-XE3M8h8gDkXVnvL6ffNsxuoihkk5S48ahQF1A7aAjZpdBnEZ47lmu5K21M6hYTjaOMHxXx0kwM_33gB6JbS8bujCSmJ_m0o2LzLdzUUvUoXPst-k1Deet08JUY8qcCMvDYOFI6JE7SrDf-osGLAig-tbtYbc22bVlyEA9GWjEeG0fPRSjm_TO4obXvVRrfD3o8SQo6nbbkpQxv598r2PPjGwUvWTnbT709jN4-kQd2LcFNoEO2mGaZnvlaM1mAMoTOfbXoBRvCIUKG7gwfmEmXmJxQrLnj7fQN8hXsLein0sUZVZ0gy9IULe_WJWKfJa_fLWfZrrxVt6DBLRw';
    
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        };
    
        const response = await fetch(url, requestOptions);
        const result = JSON.parse(await response.text()); // Parse the response directly as JSON
        return result
    } catch (error) {
        console.log('Error:', error);
    }
})

export const fetchNewListing = createAsyncThunk('HomeScreen/fetchNewListing',async()=>{
    try {
        const url = 'https://oauth.reddit.com/top';
        const oauthToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzEwNzc4MTUzLjg5NzA5OSwiaWF0IjoxNzEwNjkxNzUzLjg5NzA5OSwianRpIjoiZmNjT3VoaDJnTzFTU1BOYmpOT3FGYkV4bU4zbTRRIiwiY2lkIjoiMmhmek9Calc5bF8yQTZ5YXpncTdxUSIsImxpZCI6InQyX3c0NDQ3eWliMSIsImFpZCI6InQyX3c0NDQ3eWliMSIsImxjYSI6MTcxMDM1MzI1MDE1MSwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.Xihz-XE3M8h8gDkXVnvL6ffNsxuoihkk5S48ahQF1A7aAjZpdBnEZ47lmu5K21M6hYTjaOMHxXx0kwM_33gB6JbS8bujCSmJ_m0o2LzLdzUUvUoXPst-k1Deet08JUY8qcCMvDYOFI6JE7SrDf-osGLAig-tbtYbc22bVlyEA9GWjEeG0fPRSjm_TO4obXvVRrfD3o8SQo6nbbkpQxv598r2PPjGwUvWTnbT709jN4-kQd2LcFNoEO2mGaZnvlaM1mAMoTOfbXoBRvCIUKG7gwfmEmXmJxQrLnj7fQN8hXsLein0sUZVZ0gy9IULe_WJWKfJa_fLWfZrrxVt6DBLRw';
    
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        };
    
        const response = await fetch(url, requestOptions);
        const result = JSON.parse(await response.text()); // Parse the response directly as JSON
        return result
    } catch (error) {
        console.log('Error:', error);
    }
})
