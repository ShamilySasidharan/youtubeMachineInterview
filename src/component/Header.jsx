import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/menuSlice";
import { YOUTUBE_SEARCHSUGGESTIONS_API } from "./utils/constants";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const dispatch = useDispatch()
  //  Debouncing implementation in input
  // 1.create a useState and pass them to input field to track the input
  const [searchQuery, setSearchQuey] = useState("")

  // auto suggestions 
  const[suggestions,setSuggestion]=useState([])

  // show suggestions
  const[showSuggestions,setShowSuggestions]=useState(false)


  useEffect(() => {
    // 1.calling the function for every keystroke
    //  getSearchQuery()
    // 2.apply debouncing now for 200ms so an api call is made after 200ms 
    // setTimeout(()=>getSearchQuery(),200)
    const timer = setTimeout(() => getSearchQuery(), 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  //  search suggestion fetching
  //  const getSearchQuery = async () => {
  //  const promise = fetch(YOUTUBE_SEARCHSUGGESTIONS_API + searchQuery)
  //  console.log("API-", searchQuery)
  //  const json = await promise.json()
  
  //  console.log("this is the josn :",json)
  //  setSuggestion(json[1])
  // }
  const getSearchQuery = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCHSUGGESTIONS_API + searchQuery);
      const json = await response.json();
      console.log("Suggestions JSON:", json);
      setSuggestion(json[1]); // assuming the suggestions are in json[1]
    } catch (err) {
      console.error("Failed to fetch suggestions:", err);
    }
  };


// toggling the side menu while clicking the toggle function is coming from the rduc store
  const toggleSideMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="flex flex-row  shadow-xl my-3 p-5 items-center  justify-between ">

      {/* Left section: Hamburger icon & YouTube logo */}
      <div className="flex items-center gap-2 cursor-pointer ">
        <RxHamburgerMenu size={30}  className="w-6" onClick={() => { toggleSideMenu() }}/>
        <FaYoutube size={40} color="red"/>
      </div>

      {/* Middle section: Search input & button */}
      <div className="flex items-center gap-0 justify-center relative">
  <div className="flex">
    <input
      type="text"
      placeholder="Search here"
      value={searchQuery}
      onChange={(e) => setSearchQuey(e.target.value)}
      className="border rounded-l-full p-2 xl:w-96 w-40 text-sm xl:text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm border-gray-500"
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}
    />
    <button className="border rounded-r-full p-1.5 bg-gray-200 hover:bg-gray-300 border-gray-500 cursor-pointer w-10">
    <CiSearch  size={20}/>
    </button>
  </div>

  {showSuggestions && (
    <div className="absolute z-10 w-full top-full mt-1">
      <ul className="py-1 px-1 text-black rounded-xl bg-white shadow-lg">
        {suggestions?.map((s) => (
          <li key={s} className="p-1 hover:bg-black hover:text-white cursor-pointer flex">
           <CiSearch  size={20}/> {s}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>



      {/* Right section: Create button, Notification, User icon */}
      <div className="flex items-center gap-1  ">
        <button className=" text-black py-1 px-2 rounded-full border w-fit text-sm xl:text-base ">+ Create</button>
        <IoIosNotifications size={40} className="w-6"/>
        <FaUserCircle size={40} className="w-5" />
      </div>
    
    </div>
  );
}

export default Header;
