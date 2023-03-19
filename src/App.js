import { useState } from "react";
import SearchBar from "./components/SearchBar"
import searchImages from "./api";
import ImageList from "./components/ImageList";
function App(){
   const [Images , setImages] = useState([])
   const handleclick = async (term) => {
      const result = await searchImages(term)
      setImages(result)
   }
   return <div>
      <SearchBar onSubmit= {handleclick}/>
      <ImageList  Image = {Images}/>

   </div>
}

export default App;