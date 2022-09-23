import Axios from "axios";

//Users

interface IUser {
  name: string | null;
  email: string | null;
  createdAt?: Date;
}

export const getUserFromServer = async (userEmail: string) => {
  try {
    const { data } = await Axios.get(
      "https://tech-ecommerce-server.herokuapp.com/user/getUser",
      {}
    );
    //datafilter should give me the name from the account
    const dataFilter = data.find((data: IUser) => data.email === userEmail);
    return dataFilter;
  } catch (error) {
    console.log(error, "error from getUsers");
  }
};

//Server checks if user already exists
export const createUserFromAuth = async (user: IUser) => {
  try {
    await Axios.post(
      "https://tech-ecommerce-server.herokuapp.com/user/postUser",
      {
        name: user.name,
        email: user.email,
      }
    );
    const userAuth = {
      name: user.name,
      email: user.email,
    };
    return userAuth;
  } catch (err) {
    console.log("Error creating the user", err);
  }
};

//Products

export const getProducts = async () => {
  try {
    const productServer = await Axios.get(
      "https://tech-ecommerce-server.herokuapp.com/products/getProducts"
    )
      .then((res) => res.data)
      .then((res) => console.log("this worked"));

    return productServer;
  } catch (err) {
    console.log(err);
  }
};
