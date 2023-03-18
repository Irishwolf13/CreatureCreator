import React, { useState } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';
import Weapons from './Weapons';

const armorList = [
  {
    id: 1,
    url: "https://cdn.vectorstock.com/i/1000x1000/96/54/old-armor-icon-cartoon-style-vector-10979654.webp"
  },
  {
    id: 2,
    url: "https://cdn.vectorstock.com/i/1000x1000/21/05/medieval-knight-armor-icon-cartoon-style-vector-9352105.webp"
  },
  {
    id: 3,
    url: "https://cdn.vectorstock.com/i/1000x1000/01/19/knight-armor-and-helmet-fantasy-icon-vector-23910119.webp"
  }
]
const weaponList = [
  {
    id: 4,
    url: "https://as1.ftcdn.net/v2/jpg/02/11/60/42/1000_F_211604262_bKDbW9tqWQ763xap5BVkTb39NefLqKoH.jpg"
  },
  {
    id: 5,
    url: "https://c8.alamy.com/comp/G1C0EH/sword-cartoon-illustration-G1C0EH.jpg"
  }
]


function CreateMonster({user, setMonsterState, monsterState}) {
  //States
  const [armorBoard, setArmorBoard] = useState([])
  const [weaponBoard, setWeaponBoard] = useState([])
  const [deletedItems, setDeletedItems] = useState([])

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  const [{ isOver: isOverWeaponBoard }, dropWeaponBoard] = useDrop(() => (
    {
      accept: "sword",
      drop: (item) => addWeaponToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))
  // Adding images to boards
  const addImageToBoard = (id) => {
    const filteredPictures = armorList.filter((armor) => id === armor.id)
    const newArmorBoard = [...armorBoard]
    const existingItem = newArmorBoard.find((armor) => armor.id === id)
    if (!existingItem) {
      newArmorBoard.push(filteredPictures[0])
      setArmorBoard(newArmorBoard)
      console.log(id)
      setMonsterState(prevState => ({ ...prevState, armor_id: id}));
    }
  }
  console.log(monsterState)
  // Adding images to boards
  const addWeaponToBoard = (id) => {
    const myWeapons = weaponList.filter((weapon) => id === weapon.id)
    const newWeaponBoard = [...weaponBoard]
    const existingItem = newWeaponBoard.find((weapon) => weapon.id === id)
    
    if (!existingItem) {
      newWeaponBoard.push(myWeapons[0])
      setWeaponBoard(newWeaponBoard)
      setMonsterState(prevState => ({ ...prevState, weapon_id: id}));
    }
  }
  // Armors
  const myArmors = armorList.map(armor => {
    return <Picture key={ armor.id } id={ armor.id } url={ armor.url }/>
  })

  // Weapons
  const myWeapons = weaponList.map(weapon => {
    return <Weapons key={ weapon.id } id={ weapon.id } url={ weapon.url }/>
  })

  const removeImage = (id) => {
    const filteredPictures = armorBoard.filter((armor) => id == armor.id)
    const newArmorBoard = armorBoard.filter((armor) => id !== armor.id)
    setDeletedItems([...deletedItems, filteredPictures[0]])
    setArmorBoard(newArmorBoard)
  }
  const removeWeapon = (id) => {
    const myWeapons = weaponBoard.filter((weapon) => id == weapon.id)
    const newWeaponBoard = weaponBoard.filter((weapon) => id !== weapon.id)
    setDeletedItems([...deletedItems, myWeapons[0]])
    setWeaponBoard(newWeaponBoard) 
  }
  
  const myArmorBoard = armorBoard.map((armor) => {
    return (
      <div key={armor.id}>
        <Picture url={armor.url} id={armor.id} />
        <button onClick={() => removeImage(armor.id)}> Remove </button>
      </div>
    );
  });

  const myWeaponBoard = weaponBoard.map((weapon) => {
    return (
      <div key={weapon.id}>
        <Weapons id={weapon.id} url={weapon.url} />
        <button onClick={() => removeWeapon(weapon.id)}> Remove </button>
      </div>
    );
  });
  
  return (
    <>
      <div className='Pictures'> { myArmors } </div>
      <div className='Pictures'> { myWeapons }</div>
      <div className='Board' ref={dropBoard}> { myArmorBoard } </div>
      <div className='Board' ref={dropWeaponBoard}> { myWeaponBoard } </div>
    </>
  )
}

export default CreateMonster;