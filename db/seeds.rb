puts 'deleting old tables ☠️'
puts 'seeding fresh data'

puts 'seeding users'
User.create(
  username: 'rooneyjohn',
  password: 'frank',
  email: 'frank@rizo.com'
)
User.create(
  username: 'frankrizo',
  password: 'john',
  email: 'john@rrooney.com'
)

puts 'Creating Creatures'
Creature.create(
  creature_id: 1,
  user_id: 1,
  level: 1,
  hit_points: 10,
  armor: 0,
  attack: 10,
  magic: 10,
  movement: 10,
  bio: "This is my first character, Frank."
)
Creature.create(
  creature_id: 2,
  user_id: 2,
  level: 2,
  hit_points: 20,
  armor: 0,
  attack: 20,
  magic: 20,
  movement: 20,
  bio: "This is my second character, Bill."
)
Creature.create(
  creature_id: 3,
  user_id: 1,
  level: 3,
  hit_points: 30,
  armor: 0,
  attack: 30,
  magic: 30,
  movement: 30,
  bio: "This is my second character, Bill."
)

puts 'seeding looks'
look.create(
  race: 'orc',
  image: 'https://cdna.artstation.com/p/assets/images/images/056/275/424/small/alekzander-zagorulko-greenskin-barbarian.jpg?1668857673'
)
look.create(
  race: 'undead',
  image: 'https://cdnb.artstation.com/p/assets/images/images/052/636/925/small/alekzander-zagorulko-undex-caster.jpg?1660296531'
)
look.create(
  race: 'flame',
  image: 'https://cdna.artstation.com/p/assets/images/images/057/354/168/small/olekzandr-zahorulko-flame-warrior.jpg?1671388530'
)

puts 'seeding armors'
Armor.create(
  material: 'cloth',
  defense_rating: 1,
  weight: 10,
  movement_reduction: 0,
  image: "https://cdnb.artstation.com/p/assets/images/images/013/038/003/small/alekzander-zagorulko-insta-003.jpg?1537781480"
)
Armor.create(
  material: 'leather',
  defense_rating: 5,
  weight: 20,
  movement_reduction: 2
  image: "https://cdna.artstation.com/p/assets/images/images/012/973/582/small/alekzander-zagorulko-insta-001.jpg?1537441984"
)
Armor.create(
  material: 'chain',
  defense_rating: 10,
  weight: 40,
  movement_reduction: 4
  image: "https://cdnb.artstation.com/p/assets/images/images/012/993/283/small/alekzander-zagorulko-insta-002.jpg?1537528894"
)

puts 'seeding weapons'
Weapon.create(
  style: "sword",
  attack_rating: 5,
  weight: 1,
  image: "https://cdna.artstation.com/p/assets/images/images/018/306/216/small/alekzander-zagorulko-inst-007.jpg?1558896034"
)
Weapon.create(
  style: "axe",
  attack_rating: 8,
  weight: 2,
  image: "https://cdna.artstation.com/p/assets/images/images/015/392/436/small/alekzander-zagorulko-insta-007.jpg?1548166877"  
)

# puts 'seeding augments'
# Augment.create(
#   type: 'fire'
#   modifier: 'flame'
# )
# Augment.create(
#   type: 'cold'
#   modifier: 'chill'
# )
# Augment.create(
#   type: 'electric'
#   modifier: 'shock'
# )

puts 'Creating join Tables for Armor'
JoinArmor.create(
  creature_id: 1,
  armor_id: 1
)
JoinArmor.create(
  creature_id: 2,
  armor_id: 2
)
JoinArmor.create(
  creature_id: 3,
  armor_id: 2
)

puts 'Creating join Table for Weapons'
JoinWeapon.create(
  creature_id: 1,
  weapon_id: 2
)
JoinWeapon.create(
  creature_id: 2,
  weapon_id: 2
)

puts 'creating join table for looks'
JoinLook.create(
  creature_id: 1,
  look_id: 2
)
JoinLook.create(
  creature_id: 2,
  look_id: 1
)
JoinLook.create(
  creature_id: 3,
  look_id: 3
)