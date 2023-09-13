import {TOKEN, DATABASE_ID} from '../config';
import Item from './item';

export default async function Project() {
    const projectData = await fetchProjectData();
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-full'>
        {
          projectData.results.map((data)=>  
              <Item key={data.id} data={data}></Item>
            )
        } 
      </div>
    )
  }

  async function fetchProjectData() {
    const options = {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
      /*body: JSON.stringify({
        'property' : '이름',
        'direction': 'ascending'
      })*/
    };
  
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const projects = await res.json();
  
    return projects;
  }