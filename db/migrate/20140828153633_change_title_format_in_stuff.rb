class ChangeTitleFormatInStuff < ActiveRecord::Migration
  def up
    change_column :stuffs, :title, :string
  end

  def down
    change_column :stuffs, :title, :text
  end
end
