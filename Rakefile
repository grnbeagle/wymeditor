task :export do
  puts
  puts "------------------------------"
  puts "Build wymeditor for Lacuna..."
  puts

  puts "Remove previous files"
  sh "rm -rf dist/*"
  sh "make"
  puts

  source = "dist/jquery.wymeditor.js"
  dest = "../lacuna_app/public/javascripts/lib/wymeditor/"

  puts "Copy the file"
  sh "cp #{source} #{dest}"
  puts 
  puts "--> DONE: file copied to #{dest}"
  puts "------------------------------"
  puts
end
