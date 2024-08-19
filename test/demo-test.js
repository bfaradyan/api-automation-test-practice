const { expect } = require("chai");
const request = require("supertest");
const assert = chai.assert;
var chai = require('chai');
chai.use(require('chai-json-schema'));
const fs = require('fs') 

describe('API Test for "restful-api.dev"', () => {
    it('Test - GET All Objects', async() => {
        const response = await request("https://api.restful-api.dev/").get("objects")
        // console.log(response.statusCode);
        // console.log(response.body);
        
        //assertion
        expect(response.statusCode).to.equal(200)
        expect(response.body[0].name).to.equal("Google Pixel 6 Pro")
        console.log(response.body);
        
        // assert.equal(response.statusCode, 200)
        // assert.equal(response.body[0].name, "Goodgle Pixel 6 Pro")
    });

    it('Test - POST Objects', async() => {
        const response = await request("https://api.restful-api.dev/")
        .post("objects")
        .send(
            {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"

                    }
                }
            )
        
        const jsonSchema = fs.read
        {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "data": {
                "type": "object",
                "properties": {
                  "year": {
                    "type": "integer"
                  },
                  "price": {
                    "type": "number"
                  },
                  "CPU model": {
                    "type": "string"
                  },
                  "Hard disk size": {
                    "type": "string"
                  }
                },
                "required": [
                  "year",
                  "price",
                  "CPU model",
                  "Hard disk size"
                ]
              }
            },
            "required": [
              "name",
              "data"
            ]
          }
          expect(response.body).to.equal(jsonSchema)
        //   assert.jsonSchema(response.body, jsonSchema)
        console.log(response.body);
        
    });
});