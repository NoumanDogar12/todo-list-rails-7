class Todo < ApplicationRecord
  has_many :todo_items, dependent: :destroy

  # Alias for the association
  def items
    todo_items
  end
end
