import React from 'react'
import { stories } from '../base/data/stories'
import StoryCard from './StoryCard'

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map(story =>(
            <StoryCard key={story.name} name={story.name} 
            src={story.src}
            profile={story.profile}
            />
        ))}
    </div>
  )
}

export default Stories