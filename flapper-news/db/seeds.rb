# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

post1=Post.create(title: "post1", link: "abc.com", upvotes: 0)

post2=Post.create(title: "post2", upvotes: 10)

post1=Post.create(title: "post3", link: "def.com", upvotes: 20)

comment1 = Comment.create(body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", post_id: 1)
comment2 = Comment.create(body: "nihaoma", post_id: 1)

comment3 = Comment.create(body: "health", post_id: 2)
comment4 = Comment.create(body: "sport", post_id: 3)
