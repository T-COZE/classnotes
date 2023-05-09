const axios = require("../utils/axios");
const { index, create, show } = require("../src/main");

const BASE_URL = "http://localhost:5001";

describe("src/main.js", () => {
  describe("index()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Jane Doe",
        score: 75,
      },
      {
        id: "dFBbdkr",
        name: "John Doe",
        score: 60,
      },
      {
        id: "dFBbdfd",
        name: "Ashton Deiry",
        score: 80,
      },
    ];

    beforeEach(() => {
      jest.spyOn(axios, 'get');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      await index();
      const expectedURL = `${BASE_URL}/students`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    it("should return a list of all students with scores < 80", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data }));

      const response = await index();
      
      const expected = data.slice(0, 2);
      expect(response).toEqual(expected);
    });
    
    it("should log an error to the console", async () => {
      axios.get.mockImplementation(() =>
        Promise.reject(new Error("GET request failed."))
      );
      jest.spyOn(console, "error");

      await index();

      expect(console.error).toHaveBeenCalledWith("GET request failed.");
    });
  });
  
  describe("create()", () => {
    const body = {
      name: "Chin Yong",
      score: 76
    };
    
    // You can use this student data in your tests
    const student = { ...body, id: "abc-def" };

    beforeEach(() => {
      jest.spyOn(axios, 'post');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a POST request to the appropriate URL with a valid data body", async () => {
      const body = {
        name: "Chin Yong",
        score: 76
      };
      await create(body)
       const expectedURL = `${BASE_URL}/students`
       expect(axios.post).toHaveBeenCalledWith(expectedURL, body)
       })
   

   it("should resolve with a promise containing the newly saved student", async () => {
     jest.spyOn(axios,"post")
    axios.post.mockImplementation(()=>Promise.resolve({body}))
     const response = await create()
     const expected = student.body
     expect(response).toBe(expected)
   });
   
   it("should log an error to the console", async () => {
      axios.post.mockImplementation(()=>Promise.reject(new Error("New Post failed")))
   });
 });
    
    it("should log an error to the console", async () => {
      axios.post.mockImplementation(()=>Promise.reject(new Error("New Post failed")))
      
    });
  ;
  
   describe("show()", () => {
    const student = {
      id: "abc-def",
      name: "Chin Yong",
      score: 76,
    };
     
    const { id } = student;

    beforeEach(() => {
      jest.spyOn(axios, 'get');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should make a GET request to the appropriate URL", async () => {
      await index();
      const expectedURL = `${BASE_URL}/students`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    it("should resolve with a promise containing the student data", async () => {
      // Write your solution here
       jest.spyOn(axios,"get")
      axios.get.mockImplementation(()=>Promise.resolve({id}))
      const response = await show()
      const expected = student.data
      expect(response).toBe(expected);
    });
     
    it("should log an error to the console", async () => {
       axios.get.mockImplementation(() =>
        Promise.reject(new Error("GET request failed."))
      );
    
       jest.spyOn(console, "error");

      await index();

      expect(console.error).toHaveBeenCalledWith("GET request failed.")
      
        });
     
    });
  });
