class CreatePriorities < ActiveRecord::Migration
  def change
    create_table :priorities do |t|
      t.text :title

      t.timestamps
    end
  end
end
