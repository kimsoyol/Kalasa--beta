import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  events: [
    {
      id:1,
      title: 'Discovering The Beauty of Bagan',
      img: "src/assets/events/Bagan.png",
      date: "August 19 to 23, 2023",
      location: "Kalasa Art Space"
    },
    {
      id: 2,
      title: 'Exhausted in Yangon Event',
      img: "src/assets/events/Exhausted.png",
      date: "August 19 to 23, 2023",
      location: "Kalasa Art Space"
    },
    {
      id: 3,
      title: 'Yangoon And Go Event',
      img: 'src/assets/events/ygn_go.png',
      date: "August 19 to 23, 2023",
      location: "Kalasa Art Space"
    },
  ],
  error: "",
}

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducer: {},
})

export default eventSlice.reducer;