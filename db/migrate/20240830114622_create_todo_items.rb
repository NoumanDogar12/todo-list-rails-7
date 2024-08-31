class CreateTodoItems < ActiveRecord::Migration[7.2]
  def change
    create_table :todo_items do |t|
      t.belongs_to :todo, null: false, foreign_key: true
      t.string :description
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
