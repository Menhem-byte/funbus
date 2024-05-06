const knexInstance = require("./dbConfig");

async function register(registerInfo) {
  try {
    if (!registerInfo) {
      throw new Error("registration info is required to register");
    }
    const result = await knexInstance("fun_bus.registration").insert(
      registerInfo
    );
    if (result) {
      return "record is registered successfully";
    }
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function getUser() {
  try {
    const result = await knexInstance
      .select("*")
      .from("reg.register")
      .where("first_name", "=", "gehad");

    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function getUserByEmail() {
  try {
    const result = await knexInstance
      .select("*")
      .from("reg.register")
      .where("first_name", "=", "gehad");

    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = { register, getUser };
