import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListing = createAsyncThunk('HomeScreen/fetchListing',async()=>{
    try {
        const url = 'https://oauth.reddit.com/best';
        const oauthToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzEwNjYwNTkzLjY3NjgwMiwiaWF0IjoxNzEwNTc0MTkzLjY3NjgwMiwianRpIjoiVGxaWUdtM0tsVWhESUZ6ZVBJd3dUTWRIdmg0Vm9BIiwiY2lkIjoiMmhmek9Calc5bF8yQTZ5YXpncTdxUSIsImxpZCI6InQyX3c0NDQ3eWliMSIsImFpZCI6InQyX3c0NDQ3eWliMSIsImxjYSI6MTcxMDM1MzI1MDE1MSwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.AJZ8NdBtNKfkM8z8mhcI6vrMbPF4xk01LXj9aDj2vrOyMEMH4ScyUK7RvAxDuN9Di0yXoGbfXSZ-NK36m5zQpyTti2ekZz_dGxbIl0LGtwDRj2J0V80cqMiePaGeN0nPFeoiaOSI6cYdTU5CAB-MZTwpsvceCDTh4l0Q30U9OE8AZCygaf1AVptcgYT43V4x-VmC65sC3avAdj5Jpb2QNRWM1PUgDo7ZOB3eWEHwokYPG6f0uWd2ZKnKGFB8iwH0OpJ2vtWCStmjnyZrdPSrM2L05W3AYVctX9WSBkA2VH9c2EvGdXHQZ0XodN1rQO6ClRRaY-ZD88ZIdUdehgUJWg';
    
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        };
    
        const response = await fetch(url, requestOptions);
        const result = JSON.parse(await response.text()); // Parse the response directly as JSON
        console.log('Response:', result);
    } catch (error) {
        console.log('Error:', error);
    }
    
    
})