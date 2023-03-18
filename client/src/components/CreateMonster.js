import React, { useState } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';
import Weapons from './Weapons';

const armorList = [
  {
    id: 1,
    url: "https://www.kidsmathgamesonline.com/images/pictures/numbers600/number1.jpg"
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1OX6r_H8VLliuAsMYNYdfvN8ImFhUt8ntw&usqp=CAU"
  },
  {
    id: 3,
    url: "https://us.123rf.com/450wm/inkdrop/inkdrop1903/inkdrop190301379/119198987-gold-glitter-number-3-shiny-sparkling-golden-number-3d-rendering.jpg?ver=6"
  }
]
const weaponList = [
  {
    id: 3,
    url: "https://us.123rf.com/450wm/inkdrop/inkdrop1903/inkdrop190301379/119198987-gold-glitter-number-3-shiny-sparkling-golden-number-3d-rendering.jpg?ver=6"
  }
]


function CreateMonster({user, setMonsterState, monsterState}) {

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
    //Checks to see if item is already occupied
    if (!existingItem) {
      newArmorBoard.push(filteredPictures[0])
      setArmorBoard(newArmorBoard)
    }
  }

  const addWeaponToBoard = (id) => {
    const myWeapons = weaponList.filter((weapon) => id === weapon.id)
    const newWeaponBoard = [...weaponBoard]
    const existingItem = newWeaponBoard.find((weapon) => weapon.id === id)

    if (!existingItem) {
      newWeaponBoard.push(myWeapons[0])
      setWeaponBoard(newWeaponBoard)
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