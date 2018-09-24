namespace :posts do
  desc "Delete records older than 2 days"
  task delete_2_days_old: :environment do
    Post.where(['created_at < ?', 2.days.ago]).destroy_all
  end
end