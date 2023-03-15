Rails.application.routes.draw do
  resources :join_looks
  resources :join_weapons
  resources :join_armors
  resources :join_games
  resources :games
  resources :weapons
  resources :armors
  resources :looks
  resources :creatures
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
