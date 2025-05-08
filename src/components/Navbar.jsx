import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice.js";
import { Button } from "./ui/button.jsx";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover.jsx";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  console.log(user);
  console.log(loggedIn);
  const users = useSelector((state) => state.user.users);
  console.log(users);
  return (
    <div className="bg-[#4f46e5] text-white">
      <nav className="flex items-center mx-2 justify-between">
        <p className=" text-[24px] basis-1/3 text-left" onClick={() => navigate("/")}>Cozy Ratings</p>
        <ul className="flex w-[50%] justify-around list-none items-center">
          <li className="hover:bg-[#6366f1] text-[18px] py-1 px-3 border-t-0 border-[1px] border-solid rounded-tl-none rounded-tr-none border-[#f9fafb] rounded">
            <button onClick={() => alert("Under Construction!")}>
              Ratings
            </button>
          </li>
          <li
            onClick={() => alert("Under Construction!")}
            className="text-[18px]"
          >
            <button>Review</button>
          </li>
          {!loggedIn ? (
            <div className="flex gap-4 border-[#f9fafb] border border-solid rounded px-3 py-1">
              <li>
                <button
                  className="font-light text-[18px]"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </button>
              </li>
              <span>/</span>
              <li>
                <button
                  className="text-[18px]"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </button>
              </li>
            </div>
          ) : (
            <li>
              <Popover className="bg-black">
                <PopoverTrigger asChild>
                  <Button variant="outline" className="text-black">
                    <img src="/assets/images/profile-image.svg" className="w-[40px] h-[30px]" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="grid gap-4">
                    <div>{user}</div>
                    <div>Manage Your Reviews</div>
                    <div
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Log Out
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
