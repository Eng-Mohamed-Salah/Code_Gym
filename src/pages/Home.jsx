import React,{useState} from 'react'

// Materia Ui
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from './../components/SearchExercises';
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');
  const [exercises,setExercises]=useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart} 
       setExercises={setExercises} />
      <Exercises
       bodyPart={bodyPart} 
       exercises={exercises} 
       setExercises={setExercises}
      />

    </Box>
  )
}

export default Home