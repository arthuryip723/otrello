# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.extract!(
  @board,
  :id, :title, :user_id
)

json.lists @board.lists, partial: 'api/lists/list', as: :list

# json.lists do
#   json.array!(@board.lists) do |list|
#     json.partial! 'api/lists/list', list: list
#   end
# end
