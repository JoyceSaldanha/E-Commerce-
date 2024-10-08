import React from 'react'

export default function Category({finalCategory,setCatName}) {
    let cat = finalCategory.map((item,i) => {
        return(
            <li key={i} onClick={() => setCatName(item.name)} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
                {item.name}
            </li>
        )
    })
  return (
    <>
        <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
        <ul>
            {cat}
        </ul>
    </>
  )
}
