import { useAuthStore } from "@/State/useAuth";
import GotoCard from "@/components/Dashboard/GotoCard";
import axios from "axios";
import { Text } from "react-font";

const HomePage = () => {
  const { setAuthUser } = useAuthStore();
  const logout = async () => {
    await axios.post(
      "http://localhost:3000/api/users/logout",
      {},
      { withCredentials: true },
    );

    localStorage.removeItem("chat-user");
    setAuthUser(null);
  };
  return (
    <div className="flex flex-col h-screen p-10 bg-cSkin ">
      <div
        className="h-10 flex justify-end hover:cursor-pointer"
        onClick={logout}
      >
        {" "}
        <button className="btn bg-cyan-500 text-white w-24"> Logout</button>
      </div>
      <div className="h-1/2  p-10 w-full items-center">
        <div className="flex flex-col gap-7 items-center ">
          <div className="text-4xl flex flex-row gap-2 items-center">
            <img
              src="1.png"
              style={{ mixBlendMode: "multiply" }}
              alt=""
              className="h-16"
            />
            <Text family="Space Grotesk" style={{ fontSize: "80px" }}>
              Nurturing
            </Text>
            <Text
              family="Space Grotesk"
              weight={700}
              style={{ fontSize: "80px" }}
            >
              Your
            </Text>
          </div>{" "}
          <div className="text-4xl flex flex-row gap-2 items-center">
            {" "}
            <div className="text-4xl flex flex-row gap-2 items-center">
              <Text
                family="Space Grotesk"
                style={{ fontSize: "80px", color: "" }}
              >
                Fields
              </Text>
              <img
                src="farm.jpg"
                style={{ mixBlendMode: "multiply" }}
                alt=""
                className="h-16"
              />{" "}
              <Text
                family="Space Grotesk"
                style={{ fontSize: "80px" }}
                weight={700}
              >
                Growing
              </Text>
            </div>
          </div>
          <div className="text-4xl flex flex-row gap-2 items-center">
            <img
              src="2.jpg"
              style={{ mixBlendMode: "multiply" }}
              alt=""
              className="h-16"
            />
            <Text family="Space Grotesk" style={{ fontSize: "80px" }}>
              Your
            </Text>
            <Text
              family="Space Grotesk"
              weight={700}
              style={{ fontSize: "80px" }}
            >
              Future
            </Text>
            <img
              src="3.svg "
              style={{ mixBlendMode: "multiply" }}
              alt=""
              className="h-16"
            />
          </div>
        </div>
      </div>

      <div className="divider divider-success mb-5"></div>
      <div className="h-fit flex flex-row gap-20 justify-center">
        <GotoCard link="/buypage" title="Buy And Sale" image="Ecom.jpg" />
        <GotoCard
          link="/cropPredict"
          title="Crop Prediction"
          image="crop.jpg"
          className=""
        />
        <GotoCard
          title="Yield Analysis"
          image="./tree.jpg"
          className=""
          link={"/analyze"}
          c
        />
      </div>
    </div>
  );
};

export default HomePage;
