const request = require('supertest');
const app = require('../app');

const request_body = {
    "channel_id": "lsdfjsdlkfjsdlkfjsd",
   "settings": [
   {
   "label": "nameToCapitalize", 
   "type": "multi-select",
   "required": true, 
   "default": "daniel,esther,samuel,john,emmanuel"
   }
   ],
   
   "message": "Hello there, my name is daniel and I have a sister named esther"};

describe('Capitalize Name Endpoint', () => {
    test("Should return capitalized names", async() => {
        const res = await request(app)
                        .post('/capitalize-names')
                        .send(request_body)
                        .set("Accept", "application/json");
        
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Hello there, my name is Daniel and I have a sister named Esther");
    });
});