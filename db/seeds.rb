puts 'deleting old tables ☠️'
User.destroy.all
CreateCreatureTemplate.destroy.all
ArmorTemplate.destroy.all
WeaponTemplate.destroy.all
AugmentTemplate.destory.all

puts 'seeding fresh data'

puts 'seeding users 👤'
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

puts 'seeding creature_templates ☠️'
CreateCreatureTemplate.create(
  race: 'orc',
  image: 'https://cdna.artstation.com/p/assets/images/images/056/275/424/small/alekzander-zagorulko-greenskin-barbarian.jpg?1668857673'
)
CreateCreatureTemplate.create(
  race: 'undead',
  image: 'https://cdnb.artstation.com/p/assets/images/images/052/636/925/small/alekzander-zagorulko-undex-caster.jpg?1660296531'
)
CreateCreatureTemplate.create(
  race: 'flame',
  image: 'https://cdna.artstation.com/p/assets/images/images/057/354/168/small/olekzandr-zahorulko-flame-warrior.jpg?1671388530'
)

puts 'seeding armor_templates'
ArmorTemplate.create(
  material: 'cloth',
  defense_rating: 1,
  weight: 10,
  movement_reduction: 0,
  image: "https://cdnb.artstation.com/p/assets/images/images/013/038/003/small/alekzander-zagorulko-insta-003.jpg?1537781480"
)
ArmorTemplate.create(
  material: 'leather',
  defense_rating: 5,
  weight: 20,
  movement_reduction: 2
  image: "https://cdna.artstation.com/p/assets/images/images/012/973/582/small/alekzander-zagorulko-insta-001.jpg?1537441984"
)
ArmorTemplate.create(
  material: 'chain',
  defense_rating: 10,
  weight: 40,
  movement_reduction: 4
  image: "https://cdnb.artstation.com/p/assets/images/images/012/993/283/small/alekzander-zagorulko-insta-002.jpg?1537528894"
)

puts 'seeding weapon_templates'
WeaponTemplate.create(
  style: "sword",
  attack_rating: 5,
  weight: 1,
  image: "https://cdna.artstation.com/p/assets/images/images/018/306/216/small/alekzander-zagorulko-inst-007.jpg?1558896034"
)
WeaponTemplate.create(
  style: "axe",
  attack_rating: 8,
  weight: 2,
  image: "https://cdna.artstation.com/p/assets/images/images/015/392/436/small/alekzander-zagorulko-insta-007.jpg?1548166877"  
)

puts 'seeding augment_templates'
AugmentTemplate.create(
  type: 'fire'
  modifier: 'flame'
)
AugmentTemplate.create(
  type: 'cold'
  modifier: 'chill'
)
AugmentTemplate.create(
  type: 'electric'
  modifier: 'shock'
)

puts 'Creating Creature Instances'
CreatureInstance.create(
  creature_template_id: 1,
  user_id: 1,
  level: 1,
  hit_points: 10,
  armor: 0,
  attack: 10,
  magic: 10,
  movement: 10,
  bio: "This is my first character, Frank."
)
CreatureInstance.create(
  creature_template_id: 2,
  user_id: 2,
  level: 2,
  hit_points: 20,
  armor: 0,
  attack: 20,
  magic: 20,
  movement: 20,
  bio: "This is my second character, Bill."
)

puts 'Creating join Tables for Armor'
CreatureArmor.create(
  creature_instance_id: 1,
  armor_template_id: 1
)
CreatureArmor.create(
  creature_instance_id: 2,
  armor_template_id: 2
)

puts 'Creating join Table for Weapons'
CreatureWeapon.create(
  creature_instance_id: 1,
  weapon_template_id: 1
)
CreatureWeapon.create(
  creature_instance_id: 2,
  weapon_template_id: 2
)