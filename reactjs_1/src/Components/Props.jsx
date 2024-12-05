import React, { useEffect, useState } from 'react';
import { data } from './data';

export const ListItems = ({x}) => {

  const {name, email} = x;

  return (
    <div >
        <div style={{margin:"20px 0px"}} >{name} {email}</div>
  </div>
  )
}

const Props = () => {

  return (
    <div>
      {data.map((x,i) => {
        return (
        <div>
          <ListItems x={x} />
        </div>
        )
      })}
    </div>
  )
}

export default Props;