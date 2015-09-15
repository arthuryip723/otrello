json.extract!(
  list,
  :title, :board_id, :ord
)

json.cards list.cards, partial: 'api/cards/card', as: :card
