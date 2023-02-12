const getControllers = require("./../../src/controllers/toDoControllers");
const getServices = require("./../../src/services/toDoServices");

describe("ToDo Controllers", () => {
  it("should return an array of objects", async () => {
    jest.spyOn(getServices, "getTasks").mockResolvedValue([
      {
        id: 1,
      },
    ]);

    const mockReq = {};

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.getTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith([
      {
        id: 1,
      },
    ]);
  });
  it("should return error", async () => {
    jest
      .spyOn(getServices, "getTasks")
      .mockRejectedValue(new Error("Internal Server error!!"));

    const mockReq = {};

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.getTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      error: "Internal Server error!!",
    });
  });

  it("should return an array of object", async () => {
    jest.spyOn(getServices, "getTasksById").mockResolvedValue([
      {
        id: 1,
      },
    ]);

    const mockReq = {
      params: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.getTasksById(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith([
      {
        id: 1,
      },
    ]);
  });
  it("should return error", async () => {
    jest
      .spyOn(getServices, "getTasksById")
      .mockRejectedValue(new Error("Internal Server error!!"));

    const mockReq = {
      params: jest.fn(),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.getTasksById(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      error: "Internal Server error!!",
    });
  });

  //deleteTasks
  it("should return an array of objects without the deleted task", async () => {
    jest.spyOn(getServices, "deleteTasks").mockResolvedValue("deleted");

    const mockReq = {
      params: jest.fn(),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await getControllers.deleteTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith("deleted");
  });

  it("should return error", async () => {
    jest
      .spyOn(getServices, "deleteTasks")
      .mockRejectedValue(new Error("Internal Server error!!"));

    const mockReq = {
      params: jest.fn(),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.deleteTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      error: "Internal Server error!!",
    });
  });

  //updateTasks
  it("should return an array of objects with the updated task", async () => {
    jest.spyOn(getServices, "updateTasks").mockResolvedValue([
      {
        id: 1,
      },
    ]);

    const mockReq = {
      params: jest.fn(),
      body: jest.fn(),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await getControllers.updateTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith([
      {
        id: 1,
      },
    ]);
  });
  it("should return error", async () => {
    jest
      .spyOn(getServices, "updateTasks")
      .mockRejectedValue(new Error("Internal Server error!!"));

    const mockReq = {
      params: jest.fn(),
      body: jest.fn(),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.updateTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      error: "Internal Server error!!",
    });
  });

  //post tasks
  it("should return an array of objects ", async () => {
    jest.spyOn(getServices, "postTasks").mockResolvedValue([
      {
        task: "buy milk",
      },
    ]);

    const mockReq = {
      body: jest.fn(),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getControllers.postTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith([
      {
        task: "buy milk",
      },
    ]);
  });
//   it("should return error", async () => {
//     jest
//       .spyOn(getServices, "postTasks")
//       .mockRejectedValue(new Error("Internal Server error!!"));

//     const mockReq = {
//       body: jest.fn(),
//     };

//     const mockRes = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     await getControllers.postTasks(mockReq, mockRes);
//     expect(mockRes.status).toBeCalledWith(500);
//     expect(mockRes.json).toBeCalledWith({
//       error: "Internal Server error!!"
//     });
//   });
});
