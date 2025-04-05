
// "The error "YouTube Data API v3 has not been used in project 1040841905042 before or it is disabled." is the error got and is rsolved by 
// enabling the youtube data api v3 
// then follow the step as akshay says 
// 

const API_KEY = 'AIzaSyBdfPHWry0FXUKNY0etgJSPCcC_XrOvOUw'

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ API_KEY


