


# The project is created for study purpose
# ****y outube_clone ****
# Project structure
        - header : with logo, search input and create,notification and user icon
        - body : with sidebar and main container
        - main container : have button list and youtube video card
        - watch page : takes to another page when the video card is clicked.

# VideoContainer
    - first we got the video from the youtube api listed in the constants file from utils
    - converted to json 
    - dispatch and action and stored in the redux store
    - to get the data (videos) now stored in the reduc store by subscribing to the redux store using the useSelector hook
    - then add the map function to the vidoes to list the video in videocard
    - a Link is added to the VideoCard so that it will convert the entire VideoCard clickable.
     ** return <Link to={"/watch?v=" + video.id} key={id} ><VideoCard info={video} className=""/></Link> ** 
# WatchVideo
    - created the useSearchParams to get the video id
    - created the iframe to enbedded the video
# HOC 
    - takes a component and returns a component
    - created a hoc component with border for the learning
# Auto Search suggestions 
    - implemented the auto search suggestion of youtube api 
    - added debouncing to the search for better user experience.
# Render the auto suggestion in the ui
   - Then by using a state variable update the autosuggestion after the fecthing the api 
   - then by using the map function returned the list to show the auto suggestions
# making the auto suggestion smarter by building the caching 
    - redux is used to implement a searchSlice a
    - when we search the query eg: "iphone" it will store the search result into the redux store.
    - everytime when trying to search for the same key word again shouldn't make an api call for the "iphone" again.
    - We use debouncing to delay API calls by 200ms to avoid frequent fetches during typing. Additionally, we add a smart caching layer using Redux to check if we've already searched for that query — if yes, we reuse it, else we fetch and cache the new results. This improves performance and user experience.

# making the nested comments
    - nested comment section is mde below the watch video and is created using the recursion.
    
# Live chat 
   - challenges:- 
                - get the data live 
                - update the ui

