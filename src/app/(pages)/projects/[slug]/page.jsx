import React from 'react'
import Hero from './Hero'
import ProjectReview from './ProjectReview'
import ChallengesAndSolution from './ChallengesAndSolution'
import TechnologiesUsed from './TechnologiesUsed'
import Rate from './Rate'

const page = () => {
  return (
    <>
        <Hero />
        <ProjectReview />

        <ChallengesAndSolution />
        <TechnologiesUsed />

        <Rate />
    </>
  )
}

export default page