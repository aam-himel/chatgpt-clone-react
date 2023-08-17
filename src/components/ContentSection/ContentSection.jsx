import React from 'react';
import { Tooltip } from '@chakra-ui/react'


import Suggest from '../Suggest/Suggest';
import { suggest } from '../../data/suggest';
import styles from './ContentSection.module.css'
import thunder from '../../assets/thunder.svg'
import dots from '../../assets/dots.svg'
import lock from '../../assets/lock.svg'


const ContentSection = () => {

  return (
    <main className={styles.container} >
      <div className={styles.btn__section}> 
        <div className={styles.btn}>
          <span><img src={thunder} alt='' /></span>
          <span>GPT-3.5</span>
            
        </div>
        <div className={styles.btndeactive}>
          <span><img src={dots} alt="" /></span>
          <span>GPT-3.5</span>
          <span><img src={lock} alt="" /></span>
        </div>
      </div>
      <div className={styles.title}>
        <h2>ChatGPT</h2>
      </div>

      <div className="chat__section">
        <div className='suggest__section'>
          {suggest && suggest.map(item => (
            <Suggest key={item.id} data={item} />
          ))}
        </div>
        <div>
        <span className={styles.info}>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" class="underline">ChatGPT August 3 Version</a></span>
        </div>
      </div>

      <div>
        
      </div>
    </main>
  )
}

export default ContentSection;