import './App.css';
import React, { useState,useMemo ,useEffect} from 'react'
import MovieList from "./component/MovieList"
import Filter from "./component/Filter"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from "./component/AddMovie";
function App() {

  const [filter,setFilter]=useState("")
  const [value, setValue] = useState(0);
  const [movieList,setMovieList]=useState([
    {
      title:"The Smurfs",
      description:"When evil Gargamel tries to Capture them,the Smurfs flee their woodland home,pass through a magic portal and find themselves stranded in New York",
      posterURL:"https://i.ebayimg.com/images/g/d5IAAOSw5VNhGGzo/s-l500.jpg",
       rating:4,
       trailerLink:"https://www.youtube.com/embed/vu1qZCG6Yo"
    },
    { 
      title:"Space Jam",
      description:"In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.",
      posterURL:"https://cdn.europosters.eu/image/750/posters/space-jam-2-welcome-to-the-jam-i112427.jpg" ,
       rating:3,
       trailerLink:"https://www.youtube.com/embed/0H2cIbUGJJc"},
  
       {
        title:"The Croods",
        description:"After their cave is destroyed, a caveman family must trek through an unfamiliar fantastical world with the help of an inventive boy.",
        posterURL:"http://imageservice.sky.com/contentid/A5EK6sKrAaybUAPEgrDyU/BOXART?territory=GB&language=eng",
         rating:5,
         trailerLink:"https://www.youtube.com/embed/WvOgvFtcIAw"
      },
      {
        title:"Kung Fu Panda:The Dragon Knight",
        description:"Follows Po who partners up with a no-nonsense English knight named Wandering Blade to find a collection of four powerful weapons before a mysterious pair of weasels do, and save the world from destruction.",
        posterURL:"https://m.media-amazon.com/images/M/MV5BOGE1MWRiYzctYjQ3MC00YWI1LTg1MTgtMjUwYzRmMzI0NGIwXkEyXkFqcGdeQXVyMTQ3NDcxMzg4._V1_.jpg" ,
         rating:2,
         trailerLink:"https://www.youtube.com/embed/MYy7oGQiSqI"},
         {
           title:"Rush Hour",
           description:"A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way.",
           posterURL:"https://media3.woopic.com/api/v1/images/1825%2Faudiovisual%2Fmovie%2F093%2F563%2F5509f6c4045235b87032498665%2Fmovies-28795-86715.jpg?quality=85&saveas=webp&saveasquality=70&format=270x360&facedetect=1",
            rating:4,
            trailerLink:"https://www.youtube.com/embed/SCTzYY95Aw4"},
            {
              title:"The Last Dance",
              description:"This docuseries chronicles the rise of superstar Michael Jordan and the 1990s Chicago Bulls, with unaired footage from an unforgettable 1997-98 season.",
              posterURL:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/8433ca97660509.5ecaa1535113d.png" ,
               rating:5,
               trailerLink:"https://www.youtube.com/embed/Peh9Yqf1GXc"}
        
  ]
  )
 
  useEffect(()=>{
    JSON.parse(localStorage.getItem('my-app'));
  }
 )
  useEffect(()=>{
    localStorage.setItem('my-app',JSON.stringify(movieList))
  })
  const handleAddMovie=(val)=>{
   setMovieList([...movieList,val])

} 
     const handleFilter=(val)=>{
         setFilter(val)
     }
     
 const handleFilterRating=(val)=>{
      setValue(val);
     }

    useEffect(()=>{
      console.log(" Title filter was updated")
  },[filter])
  useEffect(()=>{
    console.log("Rating filter was updated")
},[value])

  return (
    <div className="App">
      <header header className="App-header">
     <AddMovie  movies={movieList} handleAddMovie={handleAddMovie} />
      <Filter  handleFilter={handleFilter} handleFilterRating={handleFilterRating} />
      <MovieList movies={movieList}  list={(movieList.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase())&& elm.rating>=value))}/>
      <footer> <small style={{color:'white'}}>&copy; Copyright {2022}, HANA BEN AMOR</small> </footer> 
      </header>
    </div>
  );
  
  
  }

  export default App;