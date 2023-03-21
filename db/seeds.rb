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
puts 'seeding looks'
Look.create(
  race: 'orc',
  image: 'https://cdna.artstation.com/p/assets/images/images/056/275/424/small/alekzander-zagorulko-greenskin-barbarian.jpg?1668857673'
)
Look.create(
  race: 'undead warrior',
  image: 'https://cdnb.artstation.com/p/assets/images/images/052/636/925/small/alekzander-zagorulko-undex-caster.jpg?1660296531'
)
Look.create(
  race: 'flame',
  image: 'https://cdna.artstation.com/p/assets/images/images/057/354/168/small/olekzandr-zahorulko-flame-warrior.jpg?1671388530'
)
Look.create(
  race: 'oracle',
  image: 'https://cdnb.artstation.com/p/assets/images/images/055/161/173/small/alekzander-zagorulko-fire-oracle.jpg?1666263108'
)
Look.create(
  race: 'troll',
  image: 'https://cdnb.artstation.com/p/assets/images/images/054/915/473/small/alekzander-zagorulko-bridge-troll.jpg?1665665904'
)
Look.create(
  race: 'undead priest',
  image: 'https://cdnb.artstation.com/p/assets/images/images/052/637/547/small/alekzander-zagorulko-unholy-priest.jpg?1660297802'
)
Look.create(
  race: 'Riding Raptor',
  image: 'https://cdna.artstation.com/p/assets/images/images/052/247/644/small/alekzander-zagorulko-riding-raptor.jpg?1659343787'
)
Look.create(
  race: 'Forest Crusher',
  image: 'https://cdna.artstation.com/p/assets/images/images/050/702/032/small/alekzander-zagorulko-forest-crusher.jpg?1655470543'
)
Look.create(
  race: 'Forest Shaman',
  image: 'https://cdna.artstation.com/p/assets/images/images/054/675/356/small/alekzander-zagorulko-thicket-shaman.jpg?1665081121'
)

puts 'seeding armors'
Armor.create(
  material: 'None',
  defense: 0,
  weight: 0,
  movement_reduction: 0,
  image: "https://thumbs.dreamstime.com/z/no-history-armor-icon-simple-thin-line-outline-vector-history-ban-prohibition-embargo-interdict-forbiddance-icons-ui-no-179466654.jpg"
)
Armor.create(
  material: 'cloth',
  defense: 1,
  weight: 10,
  movement_reduction: 0,
  image: "https://cdnb.artstation.com/p/assets/images/images/013/038/003/small/alekzander-zagorulko-insta-003.jpg?1537781480"
)
Armor.create(
  material: 'leather',
  defense: 5,
  weight: 20,
  movement_reduction: 2,
  image: "https://cdna.artstation.com/p/assets/images/images/012/973/582/small/alekzander-zagorulko-insta-001.jpg?1537441984"
)
Armor.create(
  material: 'chain',
  defense: 10,
  weight: 40,
  movement_reduction: 4,
  image: "https://cdnb.artstation.com/p/assets/images/images/012/993/283/small/alekzander-zagorulko-insta-002.jpg?1537528894"
)

puts 'seeding weapons'
Weapon.create(
  style: "None",
  attack: 0,
  weight: 0,
  image: "https://thumbs.dreamstime.com/z/bro-fist-bump-power-five-pound-flat-vector-icon-apps-websites-black-white-173031740.jpg"
)
Weapon.create(
  style: "sword",
  attack: 5,
  weight: 1,
  image: "https://cdna.artstation.com/p/assets/images/images/018/306/216/small/alekzander-zagorulko-inst-007.jpg?1558896034"
)
Weapon.create(
  style: "axe",
  attack: 8,
  weight: 2,
  image: "https://cdna.artstation.com/p/assets/images/images/015/392/436/small/alekzander-zagorulko-insta-007.jpg?1548166877"  
)
puts 'Creating Monsters'
Monster.create(
  user_id: 1,
  look_id: 1,
  armor_id: 1,
  weapon_id: 1,
  level: 1,
  hit_points: 10,
  base_armor: 0,
  attack: 10,
  magic: 10,
  movement: 10,
  monster_name: 'Frank',
  bio: "This is my first character, Frank."
)
Monster.create(
  user_id: 2,
  look_id: 2,
  armor_id: 3,
  weapon_id: 1,
  level: 2,
  hit_points: 20,
  base_armor: 0,
  attack: 20,
  magic: 20,
  movement: 20,
  monster_name: 'Bill',
  bio: "This is my second character, Bill."
)
Monster.create(
  user_id: 1,
  look_id: 3,
  armor_id: 2,
  weapon_id: 2,
  level: 3,
  hit_points: 30,
  base_armor: 0,
  attack: 30,
  magic: 30,
  movement: 30,
  monster_name: 'Bubbles',
  bio: "This is my second character, Bubbles."
)

puts 'Creating Games'
Game.create(
  user_id: 1,
  difficulty: 5
)
Game.create(
  user_id: 2,
  difficulty: 5
)

JoinGame.create(
  game_id: 1,
  monster_id: 1,
  monster_count: 10
)
JoinGame.create(
  game_id: 1,
  monster_id: 2,
  monster_count: 5
)
JoinGame.create(
  game_id: 2,
  monster_id: 2,
  monster_count: 20
)
JoinGame.create(
  game_id: 2,
  monster_id: 3,
  monster_count: 3
)