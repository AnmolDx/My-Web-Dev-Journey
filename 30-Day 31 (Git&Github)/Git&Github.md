# Github
repository - your all data that you have made will show in repo. it is also recommended to start your repo with README.md file as it will tell people what is inside your repo.

commit - changes made in repo

branch - it use when someone wants to add new features in repo. it will make a copy of entire repo and made a branch so that whatever changes made in code will not obstruct the main code. And work can be done simultaneously on it. And we can merge all the branches after work has done

# Git
You can check all git commands by writing git in the terminal

when using git to make changes you have to set the git and username in its terminal that can be done by 
git config --global username
git config --global gmail

then you have to clone the repo into local machine to do that you have to use 
git clone (paste git of repo either https(easier) or ssh)
it clone the repo and made .git file in it DO NOT DELETE THAT!!

after that we have to commit the code it is two step process
git add filename - adds new or changed file in your working directory to the git staging area 
git commit -m "your msg here"- it is the record of change (message should be meaningful)

to made changes on git hub repo we have to push it by
git push origin (if any specific branch)

# initiate git locally
to make start a git in local machine we use
git init - it will make .git file in the current directory
the process will be same as before till commit
but when the git push command will run it will throw an error

to solve that we have to make a git repo in github and add link of it in this command
git remote add origin (link)
git branch - to check name of branch
git branch -M main - change the name of branch by main

after then we can successfully push changes to the github by 
git push origin main / git push origin -u main(it will set main to upstream with that you dont have to write git push origin main (git push will work too))

# Branch commands
git branch - check branch
git branch -M main - rename branch
git checkout (branch name) - to navigate to other branch
git checkout -b (new branch name)- create new branch
git branch -d (existing branch name) - delete a branch

# Pull request
it lets you and tell others about changes you've pushed to a branch in a repository on Github.
to merge branches we use
git merge (branch name)
or we can create a pull request

after merge the branch the new code can be updated and download into local machine by
git pull origin main

# fixing mistakes
case : 1 add an unnecessary file (stagged)
git reset (file name)
git reset

case 2 : commited changes (for one commit) commit something by mistake
git reset HEAD~1

case 3 : commited changes (for many commits)
git reset (commit hash) it is a commit code given by github can be gather by git log command
git hard --hard (commit hash)

