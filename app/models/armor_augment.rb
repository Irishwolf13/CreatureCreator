class ArmorAugment < ApplicationRecord
  belongs_to :armor_template
  belongs_to :augment_template
end
