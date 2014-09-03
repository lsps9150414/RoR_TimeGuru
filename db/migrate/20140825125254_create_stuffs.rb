class CreateStuffs < ActiveRecord::Migration
  def change
    create_table :stuffs do |t|
      t.text :title
      t.datetime :due_date
      t.boolean :done
      t.references :priority, index: true

      t.timestamps
    end
  end
end
