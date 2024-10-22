import User from "../models/user.model.js";
export const roleIdentify = async (userId) => {
    const user = await User.findById( userId);
    
    if (user.Role === "BuyerAndSeller") {
        return true;
    } else {
        return false;
    }

}