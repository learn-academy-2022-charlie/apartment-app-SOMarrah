class ChangeColumnNameTypeToClassification < ActiveRecord::Migration[7.0]
  def change
    rename_column :apartments, :type, :classification
  end
end
