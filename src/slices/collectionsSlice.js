import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  collections: [
    {
      id:2,
      title: 'Vintage Staff',
      img: 'src/assets/collections/staff.png',
    },
    {
      id:1,
      title: 'Antique Clock',
      img: 'src/assets/collections/clock.png',
    },
    
    {
      id:3,
      title: 'Vintage Typewriter',
      img: 'src/assets/collections/typewriter.png',
    },
    {
      id:4,
      title: 'Fine China Tea-cup',
      img: 'src/assets/collections/teacup.png',
    },
    {
      id:5,
      title: 'Vintage Art',
      img: 'src/assets/collections/art.png',
    },
    {
      id:6,
      title: 'Antique Furniture',
      img: 'src/assets/collections/furniture.png',
    }
  ],
  error: "",
}

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
})


export default collectionSlice.reducer;