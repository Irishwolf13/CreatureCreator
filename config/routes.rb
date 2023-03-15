Rails.application.routes.draw do
  resources :armor_augments
  resources :weapon_augments
  resources :game_instances
  resources :augment_templates
  resources :weapon_templates
  resources :armor_templates
  resources :creature_templates
  resources :creature_instances
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
